import json
import re
from urllib.request import Request, urlopen, HTTPError, URLError
from urllib.parse import quote

from id2 import guessId, id2data


hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
       'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
       'Accept-Encoding': 'none',
       'Accept-Language': 'en-US,en;q=0.8',
       'Connection': 'keep-alive'}



def printStatusCode(url):
    try:
        code= urlopen(url=Request(url, None, hdr), timeout=5).getcode()
        if code == 200:
            print("OK.")
        else:
            print("CHECK MANUAL!, code=", code)
    except HTTPError as exc:
        print("ERROR!!\nBroken URL. key={}, code={}, url={}".format(key, exc.code, url))
    except URLError as exc:
        print("TIMEOUT!", url)
        print(exc.reason)
    except:
        print("Other Exception!")





for key, entry in id2data.items():
    part = re.sub(r'^'+key[2:]+r'[: -]?', "", entry["ex"], flags=re.IGNORECASE) # remove prefix from example
    url = entry["url"] + quote(part)
    print("{}: ".format(key), end="", flush=True)
    if entry["url"]: 
        printStatusCode(url)
    else:
        print("NO URL")


print("Test for {} URLs complete.".format(len(id2data)))
