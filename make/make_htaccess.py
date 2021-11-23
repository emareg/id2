import json
import re
import sys

from src.id2 import id2data

htaccess='''
Header set Access-Control-Allow-Origin *
Header set Access-Control-Allow-Headers DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified$
Options +FollowSymLinks
RewriteEngine on
'''


for key, entry in id2data.items():
    htaccess += 'RewriteRule ^/(?:id2:)?'+key+r'[:/](.+)$ '+entry["url"]+'$1 [R=302,L]\n'



print(htaccess)

with open("docs/.htaccess", "w+") as hta_file:
    hta_file.write(htaccess)
