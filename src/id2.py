# ID2 library

import re
import os
import json
import time


CFG_JSON_FILES=["../docs/id2data.json", "../docs/id2data-extra.json"]
id2data = {}


CLASS_NAMES={
  "i": "Identifier",
  "g": "Geo-Location",
  "d": "Document",
  "o": "Object",
  "h": "Hash",
  "t": "Time",
  "w": "Person",
}



class ID2:
    def __init__(self, id2str=None):

        self.id = ""
        self.cls = ""
        self.code = ""
        self.name = ""
        self.val = ""
        self.full = ""

        if id2str: self._parseID2(id2str)
 
    def isKnown(self):
        return self.id in id2data.keys()

    def _parseID2(self, id2str):
        id2str = id2str.strip()
        match = re.match(r'^(?:id2:|§)?([idhgoqtwx]:[a-z0-9]{2,4})(?::(.+))?', id2str)
        if match:
            self.cls = match.group(1)[0]
            self.code = match.group(1)[2:]
            self.id = match.group(1)
            self.val = match.group(2) if len(match.groups())>1 else ""
            self.full = "id2:"+self.id
            if self.val: self.full += ":"+self.val 

            if self.isKnown():
                self.name = id2data[self.id]['desc']
            elif self.cls == "x":
                self.name = "Unknown Experimental ID2"
            else:
                self.name = "Invalid ID2"
                self.full = ""

    def printInfo(self):
        print("ID2:", self)
        print("- Class:", self.cls)
        print("- Code: ", self.code)
        print("- Value:", self.val)
        return self

    def __str__(self):
        return self.full+ " ("+self.name+")"

    def __repr__(self):
        return self.full



def addJSON(jsonPath):
    global id2data
    with open(jsonPath, encoding='utf-8') as json_file:
        newdata = json.load(json_file)
        id2data = {**id2data, **newdata}         



def parseID2(token):
    return ID2(token)




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
                #print("key={}, groups:{}, lens={}".format(key, match.groups(), entry["lens"]))
                entry["part"] = match.group(1)
                types.append(entry)
    return types


def _parseIdentifierLengthsOnce():
    """parse "len" key string and assign a list of integers to speed up execution"""
    for key, entry in id2data.items():
        lens = []
        parts = entry['len'].split(",")
        for part in parts:
            nums = part.split("-")
            imin = int(nums[0])
            if(len(nums) == 2):
                if(nums[1] == ""): nums[1] = "40"
                imax = int(nums[1])
                lens += list(range(imin, imax+1))
            else:
                lens.append(imin)

        id2data[key]['lens'] = lens
        #print(key, "'{}'".format(entry["len"]), lens)







for id2Path in CFG_JSON_FILES:
    addJSON(id2Path)

_parseIdentifierLengthsOnce()

# testExamples()
# print(guessId("t=1606324253"))
# myid = parseID2("id2:t:unix:1606324253")
# myid.printInfo()
# print(myid)
# print(parseID2("id2:x:spfy"))

