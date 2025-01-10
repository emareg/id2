import sys, os
import webbrowser 
sys.path.append('../')

from src.id2 import guessId

query=sys.argv[1]
types = guessId(query)

url=types[0]['url'] + types[0]['part']
url=url.replace('"', '\"') # escape

from sys import platform
if platform == "linux":
    os.system("xdg-open \"{}\"".format(url))
elif platform == "darwin":
    print("Darwin not supported")
elif platform == "win32":
    os.system("start \"{}\"".format(url))


# webbrowser.open(url, new=2)
