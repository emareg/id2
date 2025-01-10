""" ID2 – Guess Identifier (Kupfer Plugin). See https://id2.dev
"""
__kupfer_name__ = ("Identifier Resolver")
__kupfer_sources__ = ()
__kupfer_actions__ = (
    "LookupID",
    # "LookupLocation",
    # "LookupDocument",
    # "LookupObject",
    # "LookupHash",
    # "LookupTime",
    # "LookupPerson",
    )
__description__ = ("""Detect and open DOIs, ISBNs, OrcIDs, crypto-addresses, geo-coordinates, and more in your web-browser. Examples:

- Unicode:  "U+1F194"
- UnixTime: "1606324253"
- Location: "8FWH4HX8+QR"
- DOI:      "10.1109/FDL.2018.8524068"
- OrcID:    "0000-0002-0006-7761"
- BitCoin:  "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5"

For a full list, see https://id2.dev""")
__version__ = "2021.0"
__author__ = "Emanuel Regnath"

import urllib.parse
import re

from kupfer.objects import Action, TextLeaf
from kupfer import utils, plugin_support
from kupfer.plugin.id2_support import id2data   # Dict/JSON with all IDs


# keys for which we allow custom URLs via Settings
SETTING_URL_KEYS={"g:gps", "o:asin", "o:ean", "o:upc"}

__kupfer_settings__ = plugin_support.PluginSettings(
    *[{"key": k[2:], 
      "label": "URL for "+k[2:].upper(), 
      "type": str, 
      "value": id2data[k]["url"] } for k in SETTING_URL_KEYS]
)


# global table holding identifier classes and icon names
CLASS_NAMES={
    "i": ["Identifier", "edit-find"],
    "g": ["Geo-Location", "applications-internet"],
    "d": ["Document", "x-office-document"],
    "o": ["Object", "package-x-generic"],
    "h": ["Hash", "dialog-password"], 
    "t": ["Time", "x-office-calendar"],
    "w": ["Person", "stock_person" ],
}


def guessId(token, idclass=None):
    """Test if "token" matches the regex of any identifier and return all found types. If idclass is given, only test those."""
    token = token.strip()
    types = []
    for key, entry in id2data.items():
        if idclass and idclass != key[0]: continue
        if len(token) in entry["lens"]:
            regex = entry["re"]
            match = re.match(r'^'+regex+r'$', token)
            if match:
                entry["part"]=match.group(1)
                types.append(entry)
    return types


def parseIdentifierLengthsOnce():
    """parse "len" key string and assign a list of integers to speed up execution"""
    if "lens" in  id2data["d:doi"].keys(): return
    lens = []
    for key, entry in id2data.items():
        parts = entry['len'].split(",")
        for part in parts:
            nums = part.split("-")
            imin = int(nums[0])
            if(len(nums) == 2):
                if(nums[1] == ""): nums[1] = "40"
                imax = int(nums[1])
                lens = list(range(imin, imax+1))
            else:
                lens.append(imin)

        id2data[key]['lens'] = lens



class LookupID (Action):
    def __init__(self, idclass=None):
        Action.__init__(self, name=_("Open in Browser"))
        self.foundId = {}
        # self.idclass = idclass
        self.rank_adjust = 3     # Rank our result slightly higher than default. Since we match a regex, we probably offer what the user is looking for.
        self.icon_name = "web-browser"

    def activate(self, leaf):
        """Called when item is selected via Enter/click"""
        if self.foundId["id"] in SETTING_URL_KEYS:
            query_url = __kupfer_settings__[self.foundId["id"][2:]] + self.foundId["part"]
        else:
            query_url = self.foundId["url"] + self.foundId["part"]
        utils.show_url(query_url)

    def item_types(self):
        yield TextLeaf

    def valid_for_item(self, leaf):
        if len(leaf.object) < 5: return False
        # for idclass in CLASS_NAMES.keys():
        types = guessId(leaf.object)
        if not types: return False
        self.foundId = types[0]
        idclass = types[0]["id"][0]
        leaf.get_description = lambda: (self.foundId["desc"] + " ({})".format(CLASS_NAMES[idclass][0]) )
        leaf.get_icon_name = lambda: CLASS_NAMES[idclass][1]
        return True

    def get_description(self):
        return "Resolve this ID using a WebService"

    def get_icon_name(self):
        return self.icon_name



# class LookupLocation(LookupID):
#     def __init__(self): LookupID.__init__(self, "g")

# class LookupPerson(LookupID):
#     def __init__(self): LookupID.__init__(self, "w")

# class LookupDocument(LookupID):
#     def __init__(self): LookupID.__init__(self, "d")

# class LookupObject(LookupID):
#     def __init__(self): LookupID.__init__(self, "o")

# class LookupHash(LookupID):
#     def __init__(self): LookupID.__init__(self, "h")

# class LookupTime(LookupID):
#     def __init__(self): LookupID.__init__(self, "t")


parseIdentifierLengthsOnce()   # execute on import