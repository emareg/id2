import json
import re
import sys

from src.id2 import guessId, id2data

def testExamples():
    isError = False
    for key, entry in id2data.items():
        print("key:", key, entry['ex'], end=" ", flush=True)
        types = guessId(entry['ex'])
        if key in [x['id'] for x in types]:
            print("PASSED ({})".format(len(types)))
        else:
            print("MISSED\n!ERROR========")
            isError = True

    if isError:
        sys.exit(1)



testExamples()
