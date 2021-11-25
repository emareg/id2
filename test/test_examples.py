import json
import re
import sys
import cProfile, pstats

from id2 import guessId, id2data


prof = cProfile.Profile()


def testExamples():
    guessId('blabla')   # first burn

    isError = False
    for key, entry in id2data.items():
        print("key:", key, entry['ex'], end=" ", flush=True)

        prof.enable()
        types = guessId(entry['ex'])
        prof.disable()

        if key in [x['id'] for x in types]:
            print("PASSED ({})".format(len(types)))
        else:
            print("MISSED\n!ERROR========")
            isError = True

    if isError:
        print("\nThere have been errors.")
        sys.exit(1)
    else:
        print("\nAll {} entries OK.".format(len(id2data)))


testExamples()
pstats.Stats(prof).print_stats('id2.py')
