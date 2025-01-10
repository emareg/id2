import json
import re
import sys
sys.path.append('../')

from src.id2 import id2data


def isUrlOk(url):
    return url == "" or url[0:8] == "https://" or url[0:7] == "mailto:"



def testJSON():
    isError = False
    for key, entry in id2data.items():
        print("{}: ".format(key), end=" ", flush=True)
        if key == entry["id"] and len(entry) == 7 and entry["desc"] != "" and isUrlOk(entry["url"]) and re.match(r'[0-9,-]+', entry["len"]):
            print("OK.")
        else:
            print("ERROR!\n=========\n", str(entry))
            isError = True

    if isError:
        print("\nThere have been errors.")
        sys.exit(1)
    else:
        print("\nAll {} entries OK.".format(len(id2data)))



testJSON()
