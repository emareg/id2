id2data={



"t:iso": {
	"id": "t:iso",
	"re": "((?:19|20)[0-9]{2})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])(?:T([0-1][0-9]|[2][0-3]):([0-5][0-9])(:[0-5][0-9])?(?:[+-][01][0-9]:[0-5][0-9]|Z)?)?",
	"len": "10-22",
	"desc": "ISO 8601 Date-Time format",
	"ex": "2020-02-22T22:22Z",
	"url": ""
},
"t:unix": {
	"id": "t:unix",
	"re": "([012][0-9]{9})",
	"len": "10",
	"desc": "Unix Epoch Time",
	"ex": "1606324253",
	"url": "https://timestamp.online/timestamp/"
},



"g:gps": {
	"id": "g:gps",
	"re": "^[-+]?([1-8]?[0-9][.,][0-9]{6,7}|90\\.0{6,7})°?N?(?:\\s+|,\\s*)[-+]?(180\\.0{6,7}|((1[0-7][0-9])|([1-9]?[0-9]))[.,][0-9]{6,7})°?W?$",
	"len": "15-26",
	"desc": "Longitude and Latitude",
	"ex": "40.446195N 79.948862W",
	"url": ""
},
"g:olc": {
	"id": "g:olc",
	"re": "([2-9C][2-9CFGHJMPQRV][2-9CFGHJMPQRVWX]{6}\\+[2-9CFGHJMPQRVWX]{2,3})",
	"len": "11-12",
	"desc": "Open Location Code",
	"ex": "8FWH4HX8+QR",
	"url": "https://plus.codes/"
},
"g:w3w": {
	"id": "g:w3w",
	"re": "^///(\\w{1,12}[・.。]\\w{1,12}[・.。]\\w{1,12})$",
	"len": "14-40",
	"desc": "What 3 Words",
	"ex": "///double.pints.exact",
	"url": "https://what3words.com/"
},
"g:mgrs": {
	"id": "g:mgrs",
	"re": "^[0-9]{1,2}[^ABIOYZabioyz][A-Za-z]{2}([0-9][0-9]){1,6}$",
	"len": "6,8,10,12,14,16",
	"desc": "Military Grid Reference System",
	"ex": "4QFJ1093763778",
	"url": "https://mappingsupport.com/p2/gissurfer.php?center="
},
"g:utm": {
	"id": "g:utm",
	"re": "[0-5][0-9][F-HJ-NQ-X] ?[0-9]{2,6} ?[0-9]{2,6}",
	"len": "6,8,10,12,14,16",
	"desc": "Universal Transverse Mercator coordinate system",
	"ex": "17T 630084 4833438",
	"url": ""
},
"g:csq": {
	"id": "g:csq",
	"re": "([1357][0-8][0-9]{2}(?::[1-4][0-9]{2}){0,4}:[1-4][0-9]{0,2})",
	"len": "4-19",
	"desc": "C-Square",
	"ex": "7500:110:3",
	"url": "http://www.obis.org.au/cgi-bin/cs_map.pl?csq="
},





"w:orc": {
	"id": "w:orc",
	"re": "(0000-000[123]-[0-9]{4}-[0-9]{3}[0-9X])",
	"len": "19",
	"desc": "OrcID",
	"ex": "0000-0002-0006-7761",
	"url": "https://orcid.org/"
},
"w:gsch": {
	"id": "w:gsch",
	"re": "([-_0-9A-Za-z]{7}AAAAJ)",
	"len": "12",
	"desc": "Google Scholar ID",
	"ex": "dTfPp2gAAAAJ",
	"url": "https://scholar.google.de/citations?user="
},
"w:lei": {
	"id": "w:lei",
	"re": "([0-9]{4}0{2}[0-9A-Z]{12}[0-9]{2})",
	"len": "20",
	"desc": "Legal Entity Identifier",
	"ex": "724500VKKSH9QOLTFR81",
	"url": "https://lei-search.lei-worldwide.com/search-results.html?lei="
},
"w:bic": {
	"id": "w:bic",
	"re": "([A-Z]{6}[2-9A-Z][0-9A-NP-Z](?:XXX|[0-9A-WYZ][0-9A-Z]{2})?)",
	"len": "8,11",
	"desc": "ISO 9362 Business Identifier Code",
	"ex": "AUGBDE77XXX",
	"url": "https://www.bank-codes.com/?q="
},



"o:ean": {
	"id": "o:ean",
	"re": "((?:0 ?[0-6]0|1 ?[0-3][0-9]|3 ?[08][0-9]|4 ?[05-9][0-9]|5 ?[0234679][0-9]|6 ?[012349][0-9]| 7 ?[0-9]{2}|8 ?[04-9][0-9]|9 ?[034]0)[0-9]{4} ?[0-9]{6})",
	"len": "13,15",
	"desc": "International Article Number",
	"ex": "4006375008111",
	"url": "https://www.ean-search.org/?q="
},

"o:upc": {
	"id": "o:upc",
	"re": "([016-9] ?[0-9]{5} ?[0-9]{5} ?[0-9])",
	"len": "12",
	"desc": "Universal Product Code",
	"ex": "042100005264",
	"url": "https://www.ean-search.org/?q="
},

"o:asin": {
	"id": "o:asin",
	"re": "(B[0-9A-Z]{9}|[0-9]{9}(X|0-9))",
	"len": "10",
	"desc": "Amazon Standard Identification Number",
	"ex": "B000F9J5RA",
	"url": "https://amazon.com/dp/"
},
"o:oid": {
	"id": "o:oid",
	"re": "((?:0\\.[0234]|1\\.[0-3]|2\\.[1-5][0-9]?)(?:\\.[0-9]{1,9}){2,7})",
	"len": "3,20",
	"desc": "Object identifier",
	"ex": "1.3.6.1.4.1.343",
	"url": "http://oid-info.com/get/"
},

"o:dhl": {
	"id": "o:dhl",
	"re": "([A-Z]{2}-[A-Z]{2,3}-[0-9]{7}|(?:3S|GM|JVGL)[0-9]{10}|[1-9][0-9]{9,10}|JJD0[10](?:[0-9]{8}|[0-9]{16}))",
	"len": "10-21",
	"desc": "DHL Tracking Number",
	"ex": "JJD000390013320676359",
	"url": "https://www.dhl.de/en/privatkunden/dhl-sendungsverfolgung.html?piececode="
},

"o:cont": {
	"id": "o:cont",
	"re": "([A-Z]{3}U-?[0-9]{6}-?[0-9])",
	"len": "10,12",
	"desc": "Container Code",
	"ex": "CSQU-305438-3",
	"url": "https://www.track-trace.com/container/"
},

"o:imo": {
	"id": "o:imo",
	"re": "IMO[ -]?([0-9]{7})",
	"len": "10,11",
	"desc": "IMO Ship Number",
	"ex": "IMO 9319466",
	"url": "https://www.vesselfinder.com/vessels?name="
},
"o:uicw": {
	"id": "o:uicw",
	"re": "([1-9][0-9]-?(?:[256789][0-9]|[34][0123])-?[0-9]{4}-?[0-9]{3})",
	"len": "12,15",
	"desc": "UIC Wagon Number",
	"ex": "21812471217",
	"url": ""
},
"o:igsn": {
	"id": "o:igsn",
	"re": "(?:IGSN: ?)?([A-Z]{2,4}[0-9A-HJ-NP-Z]{3,12})",
	"len": "6-15",
	"desc": "International Geo Sample Number",
	"ex": "SSH000SUA",
	"url": "http://igsn.org/"
},



"d:doi": {
	"id": "d:doi",
	"re": "^10\\.[0-9]{4,9}(?:\\.[0-9]+)*/[-._;()/:A-Z0-9]+$",
	"len": "8-",
	"desc": "Digital Object Identifier",
	"ex": "10.1109/FDL.2018.8524068",
	"url": "https://www.doi.org/"
},
"d:rfc": {
	"id": "d:rfc",
	"re": "((?:rfc|RFC)-?[1-9][0-9]{1,3})",
	"len": "5-7",
	"desc": "Request for Comments",
	"ex": "rfc3339",
	"url": "https://tools.ietf.org/html/"
},
"d:cve": {
	"id": "d:cve",
	"re": "((?:CVE)-(?:199[0-9]|20[0-9]{2})-[0-9]{4,7})",
	"len": "13-16",
	"desc": "Common Vulnerabilities and Exposures",
	"ex": "CVE-1999-0067",
	"url": "https://cve.mitre.org/cgi-bin/cvename.cgi?name="
},
"d:cwe": {
	"id": "d:cve",
	"re": "CWE-([0-9]{1,3})",
	"len": "5-7",
	"desc": "Common Weakness Enumeration",
	"ex": "CWE-478",
	"url": "https://cwe.mitre.org/data/definitions/"
},
"d:ecli": {
	"id": "d:ecli",
	"re": "(ECLI:[A-Z]{2}:[A-Z]{2,7}:2[0-9]{3}:[0-9a-zA-Z.]{1,25})",
	"len": "17-40",
	"desc": "European Case Law Identifier",
	"ex": "ECLI:CZ:NS:2015:32.CDO.2051.2013.1",
	"url": "https://e-justice.europa.eu/ecli/"
},
"d:uti": {
	"id": "d:uti",
	"re": "([A-Z0-9]{11}(?!.*[.:_-]{2})[A-Z0-9.:_-]{0,30}[A-Z0-9])",
	"len": "40-52",
	"desc": "Unique Transaction Identifier",
	"ex": "12345678901234567890123456789012",
	"url": ""
},
"d:cas": {
	"id": "d:cas",
	"re": "([1-9][0-9]{1,6}-[0-9]{2}-[0-9])",
	"len": "6-11",
	"desc": "Chemical Abstracts Service Registration Number",
	"ex": "7732-18-5",
	"url": "https://webbook.nist.gov/cgi/cbook.cgi?ID="
},
"d:echa": {
	"id": "d:echa",
	"re": "([1-4][0-9]{2}-[0-9]{3}-[0-9X])",
	"len": "9",
	"desc": "European Community number",
	"ex": "200-001-8",
	"url": "https://echa.europa.eu/substance-information/-/substanceinfo/"
},
"d:enzy": {
	"id": "d:enzy",
	"re": "([1-7]\\.[12]?[0-9]\\.[123]?[0-9]\\.[0-9]{1,3})",
	"len": "7-11",
	"desc": "Enzyme Commission number",
	"ex": "2.1.1.108",
	"url": "https://enzyme.expasy.org/EC/"
},
"d:isbn": {
	"id": "d:isbn",
	"re": "(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|[0-9]{3}-[0-9]{10}|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)(97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9])",
	"len": "13,14,17,22,23,26",
	"desc": "International Standard Book Number",
	"ex": "978-0-596-52068-7",
	"url": "https://isbnsearch.org/isbn/"
},
"d:issn": {
	"id": "d:issn",
	"re": "(?:ISSN:?\ )?([0-9]{4}-[0-9]{3}[0-9X]|977-?[0-9]{4}-?[0-9]{3}-?[0-9]{2}-?[0-9])",
	"len": "9,13-17,22,23",
	"desc": "International Standard Serial Number",
	"ex": "0724-8679",
	"url": "https://portal.issn.org/resource/ISSN/"
},
"d:ytv": {
	"id": "d:ytv",
	"re": "(?:v=)?([0-9A-Za-z_-]{10}[048AEIMQUYcgkosw])(?:&t=[0-9]{1,3}s)?",
	"len": "11",
	"desc": "YouTube Video",
	"ex": "6avJHaC3C2U",
	"url": "https://youtube.com/watch?v="
}, 
"d:ytc": {
	"id": "d:ytc",
	"re": "((?:UC)?[0-9A-Za-z_-]{21}[AQgw])",
	"len": "24",
	"desc": "YouTube Channel",
	"ex": "UCsT0YIqwnpJCM-mx7-gSA4Q",
	"url": "https://www.youtube.com/channel/"
},



"i:ip4": {
	"id": "i:ip4",
	"re": "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
	"len": "7-15",
	"desc": "IP Address Version 4",
	"ex": "192.168.2.1",
	"url": "https://whois.domaintools.com/"
},
"i:ip6": {
	"id": "i:ip6",
	"re": "^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|[fF][eE]80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::([fF]{4}(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$",
	"len": "3-39",
	"desc": "IP Version 6 Address",
	"ex": "2001:db8:3:4::1",
	"url": "https://whois.domaintools.com/"
},
"i:mac": {
	"id": "i:mac",
	"re": "^([0-9a-fA-F]{2}[:-]){5}([0-9a-fA-F]{2})$",
	"len": "17",
	"desc": "MAC Address",
	"ex": "00:0a:95:9d:68:16",
	"url": "https://api.macvendors.com/"
},
"i:rcol": {
	"id": "i:rcol",
	"re": "^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$",
	"len": "4,7",
	"desc": "RGB Color",
	"ex": "#268bd2",
	"url": "https://color-hex.org/color/"
},
"i:uni": {
	"id": "i:uni",
	"re": "((?:U\\+|\\\\u)[a-fA-F0-9]{4,5}(?:\\.\\.(?:U\\+)?[a-fA-F0-9]{4,5})?)",
	"desc": "Unicode Symbol",
	"len": "6,7",
	"ex": "U+1F194",
	"url": "https://www.compart.com/en/unicode/"
},




"h:sha2": {
	"id": "h:sha2",
	"re": "^([a-fA-F0-9]{32}(?:[a-fA-F0-9]{8}){0,4}|[a-fA-F0-9]{96}(?:[a-fA-F0-9]{32})?|(?:[a-fA-F0-9]{2}[ :\\-]){15}[a-fA-F0-9]{2}(?:[ :\\-](?:[a-fA-F0-9]{2}[ :\\-]){3}[a-fA-F0-9]{2}){0,4})$",
	"len": "32,40,48,64",
	"desc": "Secure Hash Algorithm",
	"ex": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
	"url": ""
},
"h:eth": {
	"id": "h:eth",
	"re": "(0x[a-fA-F0-9]{40})",
	"len": "42",
	"desc": "Ethereum Address",
	"ex": "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
	"url": "https://etherscan.io/address/"
},
"h:bc": {
	"id": "h:bc",
	"re": "([13][a-km-zA-HJ-NP-Z1-9]{25,34}|bc[01](?:[ac-hj-np-z02-9]{39}|[ac-hj-np-z02-9]{59}))",
	"desc": "BitCoin Address",
	"len": "26-35,42,62",
	"ex": "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
	"url": "https://btc.com/"
},
"h:ltc": {
	"id": "h:ltc",
	"re": "[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}",
	"desc": "Cryptocurrency LiteCoin Address",
	"len": "27-34",
	"ex": "LMRGEqXUUzGXT4AYdZNw1UxETmNP1XsFoN",
	"url": "https://blockchair.com/litecoin/address/"
},
"h:dash": {
	"id": "h:dash",
	"re": "X[1-9A-HJ-NP-Za-km-z]{33}",
	"len": "34",
	"desc": "Cryptocurrency Dash",
	"ex": "XpESxaUmonkq8RaLLp46Brx2K39ggQe226",
	"url": ""
},
"h:neo": {
	"id": "h:neo",
	"re": "A[0-9a-zA-Z]{33}",
	"len": "34",
	"desc": "Cryptocurrency NEO",
	"ex": "AddZkjqPoPyhDhWoA8f9CXQeHQRDr8HbPo",
	"url": "https://neotracker.io/address/"
},
"h:mon": {
	"id": "h:mon",
	"re": "4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}",
	"len": "95",
	"desc": "Cryptocurrency MONERO",
	"ex": "4AdUndXHHZ6cfufTMvppY6JwXNouMBzSkbLYfpAV5Usx3skxNgYeYTRj5UzqtReoS44qo9mtmXCqY45DJ852K5Jv2684Rge",
	"url": ""
},
"h:cid0": {
	"id": "h:cid0",
	"re": "Qm[1-9A-HJ-NP-Za-km-z]{44}",
	"len": "46",
	"desc": "IPFS Content ID Version 0",
	"ex": "QmThqT3hGowNwTZqkTqyGqW2Beeb9SfLHAZXXUNFkirVRQ",
	"url": "https://explore.ipld.io/#/explore/"
},
"h:cid1": {
	"id": "h:cid1",
	"re": "F[a-fA-F0-9]{50}|z[1-9A-HJ-NP-Za-km-z]{34}|B[A-Z2-7]{40}|b[a-z2-7]{40}",
	"len": "51,35",
	"desc": "IPFS Content ID Version 1",
	"ex": "bafybeiasb5vpmaounyilfuxbd3lryvosl4yefqrfahsb2esg46q6tu6y5q",
	"url": "https://explore.ipld.io/#/explore/"
},  


























"q:num":{
	"id": "q:num",
	"re": "^[-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?$",
	"len": "1-",
	"desc": "Numerical Value",
	"ex": "42",
	"url": ""
},
"q:bin": {
	"id": "q:bin",
	"re": "^0b[01]+$",
	"len": "3-",
	"desc": "Binary Value",
	"ex": "0b10101",
	"url": ""
},
"q:hex": {
	"id": "q:hex",
	"re": "0x[0-9a-fA-F]+$",
	"len": "3-",
	"desc": "Hexadecimal Value",
	"ex": "0xDEADBEEF",
	"url": ""
},
"q:rom": {
	"id": "q:rom",
	"re": "([MDCLXVI]?M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|VI{0,3}|I{1,3})|[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯ]+)",
	"len": "1-",
	"desc": "Roman Numeral",
	"ex": "VII",
	"url": ""
},
"q:si": {
	"id": "q:si",
	"re": "([fpnmkMGT]?(?:Hz|Pa|Wb|[mgsAKJWCVFTH])|rad|deg)",
	"len": "1-4",
	"desc": "SI Unit",
	"ex": "kHz",
	"url": ""
},




"t:12h": {
	"id": "t:12h",
	"re": "^(0?[0-9]|1[0-2]):([0-5]\\d)(:[0-5]\\d)? ?(AM|am|PM|pm)$",
	"len": "6-11",
	"desc": "Time in 12h format",
	"ex": "12:34 AM",
	"url": "http://time.unitarium.com/utc/"
},
"t:24h": {
	"id": "t:24h",
	"re": "^([0-1][0-9]|[2][0-3]):([0-5]\\d)(:[0-5]\\d)?$",
	"len": "5,8",
	"desc": "Time in 24h format",
	"ex": "16:34",
	"url": ""
},
"t:thex": {
	"id": "t:thex",
	"re": "\\.[0-9A-F]_?[0-9A-F]{2}_?[0-9A-F]",
	"len": "5,7",
	"desc": "Hexadecimal time",
	"ex": ".D_EA_D",
	"url": ""
},





"g:cc": {
	"id": "g:cc",
	"re": "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|VG|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CK|CR|HR|CU|CW|CY|CZ|CD|DK|DJ|DM|DO|TL|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|CI|JM|JP|JE|JO|KZ|KE|KI|XK|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|AN|NC|NZ|NI|NE|NG|NU|NF|KP|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|CG|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|CS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|KR|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TG|TK|TO|TT|TN|TR|TM|TC|TV|VI|UG|UA|AE|GB|US|UM|UY|UZ|VU|VA|VE|VN|WF|EH|YE|ZM|ZW",
	"len": "2",
	"desc": "Country Code",
	"ex": "FR",
	"url": ""
},
"g:iata": {
	"id": "g:iata",
	"re": "ATL|PEK|LHR|ORD|HND|LAX|CDG|DFW|FRA|HKG|DEN|DXB|CGK|AMS|MAD|BKK|JFK|SIN|CAN|LAS|PVG|SFO|PHX|IAH|CLT|MIA|MUC|KUL|FCO|IST|SYD|MCO|ICN|DEL|BCN|LGW|EWR|YYZ|SHA|MSP|SEA|DTW|PHL|BOM|GRU|MNL|CTU|BOS|SZX|MEL|NRT|ORY|MEX|DME|AYT|TPE|ZRH|LGA|FLL|IAD|PMI|CPH|SVO|BWI|KMG|VIE|OSL|JED|BNE|SLC|DUS|BOG|MXP|JNB|ARN|MAN|MDW|DCA|BRU|DUB|GMP|DOH|STN|HGH|CJU|YVR|TXL|SAN|TPA|CGH|BSB|CTS|XMN|RUH|FUK|GIG|HEL|LIS|ATH|AKL",
	"len": "3",
	"desc": "IATA Airport Codes",
	"ex": "LAX",
	"url": ""
},
"g:zip": {
	"id": "g:zip",
	"re": "((?:D-)?[0-9]{5}(?:-[0-9]{4})?|[A-Z][0-9][A-Z][ -][0-9][A-Z][0-9]|[1-9][0-9]{3} ?[a-zA-Z]{2})",
	"len": "5,7",
	"desc": "Postal Code",
	"ex": "80333",
	"url": ""
},
"g:gln": {
	"id": "g:gln",
	"re": "(\\d{13})",
	"len": "13",
	"desc": "Global Location Number",
	"ex": "1234567890123",
	"url": ""
},




"w:pass": {
	"id": "w:pass",
	"re": "^[A-PR-Z0-9]{9}$",
	"len": "9",
	"desc": "Passport Number",
	"ex": "AB0123456",
	"url": ""
},
"w:name": {
	"id": "w:name",
	"re": "[A-Z]\\w{1,12}(?: [A-Z]\\.)? [A-Z]\\w{1,15}",
	"len": "5-25",
	"desc": "Person Full Name",
	"ex": "Emanuel Regnath",
	"url": ""
},

"w:cred": {
	"id": "w:cred",
	"re": "^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\\d{3})\\d{11})$",
	"len": "16,19",
	"desc": "Credit Card Number",
	"ex": "4012888888881881",
	"url": ""
},
"w:tel": {
	"id": "w:tel",
	"re": "\\(?\\+\\(?49\\)?[ ()]?([- ()]?\\d[- ()]?){10}",
	"len": "8-16",
	"desc": "Telephone/Phone Number",
	"ex": "+49116117",
	"url": ""
},
"w:mail": {
	"id": "w:mail",
	"re": "(([a-zA-Z0-9_.+-]+)@(?:[a-zA-Z0-9][a-zA-Z0-9-]{1,30}\\.){1,3}([a-zA-Z]{2}|com|net|org|edu|int|gov|mil|info))",
	"len": "6-",
	"desc": "E-Mail Address",
	"ex": "john.doe@gmail.com",
	"url": "mailto:"
},
"w:etn": {
	"id": "w:etn",
	"re": "([0-9]{3}(-)?[0-9]{10})",
	"len": "13,14",
	"desc": "Flight Electronic Ticket Number",
	"ex": "160-4837291830",
	"url": ""
},
"w:lic": {
	"id": "w:lic",
	"re": "^[A-Z]{1,3}-[A-Z]{1,2}-[0-9]{1,4}$",
	"len": "5-12",
	"desc": "License Plate Number",
	"ex": "B-CD-1234",
	"url": ""	
},
"w:iban": {
	"id": "w:iban",
	"re": "([A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?:[ ]?[0-9]{1,2})?)",
	"len": "22,27",
	"desc": "International Bank Account Number",
	"ex": "DE89 3704 0044 0532 0130 00",
	"url": ""
},





"o:senr": {
	"id": "o:senr",
	"re": "[A-Z]{2}[A-Z0-9]{8}/[0-9]{2}",
	"len": "13",
	"desc": "Siemens E-Nummer",
	"ex": "",
	"url": ""
},
"o:dhl": {
	"id": "o:dhl",
	"re": "([A-Z]{2}-[A-Z]{2,3}-[0-9]{7}|(?:3S|GM|JVGL)[0-9]{10}|[1-9][0-9]{9,10}|JJD0[10](?:[0-9]{8}|[0-9]{16}))",
	"len": "10-21",
	"desc": "DHL Tracking Number",
	"ex": "JJD000390013320676359",
	"url": "https://www.dhl.de/en/privatkunden/dhl-sendungsverfolgung.html?piececode="
},
"o:ups": {
	"id": "o:ups",
	"re": "(1Z ?[0-9A-Z]{3} ?[0-9A-Z]{3} ?[0-9A-Z]{2} ?[0-9A-Z]{4} ?[0-9A-Z]{3} ?[0-9A-Z]|[\\dT]\\d{3}\\s?\\d{4} ?\\d{3})",
	"len": "12,18",
	"desc": "UPS Tracking Number",
	"ex": "",
	"url": ""
},
"o:fedx": {
	"id": "o:fedx",
	"re": "((?:(?:96|98)\\d{5}\\s?\\d{4}$|(?:96|98)\\d{2}) ?\\d{4} ?\\d{4}(?: ?\\d{3})?)",
	"len": "10-16",
	"desc": "FedEx Tracking Number",
	"ex": "",
	"url": ""
},






"i:sym":{
	"id": "i:sym",
	"re": "[-!$%^&*()_+|~=`{}\\[\\]:\";'<>?,.\\/]",
	"len": "1",
	"desc": "Symbol",
	"ex": "&",
	"url": ""
},
"i:asci": {
	"id": "i:asci",
	"re": "[a-zA-Z0-9!\\\"\\#$%&'()*+,-./:;<=>?@\\[\\\\\\]^_`{|}~]+",
	"desc": "ASCII Character",
	"len": "1",
	"ex": "?",
	"url": ""
},
"i:acro": {
	"id": "i:acro",
	"re": "((?:[A-Z]\.?){2,6})",
	"desc": "Acronym",
	"len": "2-6",
	"ex": "USB",
	"url": ""
},
"i:abbr": {
	"id": "i:abbr",
	"re": "([A-Za-z][a-z]{0,6}\\.)",
	"desc": "Abbreviation",
	"len": "2-7",
	"ex": "Prof.",
	"url": ""
},
"i:math": {
	"id": "i:math",
	"re": "^(?:[(-]*[0-9].*?[+*/^-]|(?:sin|cos|exp|min|max|sqrt)\\().*?[0-9)]$",
	"desc": "Mathematical Expression",
	"len": "1-",
	"ex": "2*sin(0.5*pi)",
	"url": ""
},
"i:rex": {
	"id": "i:rex",
	"re": "\\(\\?(?:\\[[^\\]]+\\]|\\?\\:\\w+)\\)?",
	"desc": "Regular Expression",
	"len": "1-",
	"ex": "[A-Z]{3}",
	"url": ""
},
"i:tex": {
	"id": "i:tex",
	"re": "\\\\[a-zA-Z][a-zA-Z]+",
	"desc": "TeX Command",
	"len": "2-15",
	"ex": "\\RequirePackage",
	"url": ""
},

"i:uuid": {
	"id": "i:uuid",
	"re": "[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}",
	"len": "36",
	"desc": "Universally Unique Identifier",
	"ex": "f81cc383-aa75-4714-aa8a-3ce39e8ad33c",
	"url": ""
},
"i:did": {
	"id": "i:did",
	"re": "did:([a-z]*:[0-9a-zA-Z.-_:]+[0-9a-zA-Z.-_])",
	"len": "7-",
	"desc": "Decentralized Identifier",
	"ex": "did:example:123456789abcdefghi",
	"url": ""
},
"i:uri": {
	"id": "i:uri",
	"re": "((http\\://|https\\://|ftp\\://)|(www.))+(([a-zA-Z0-9\\.-]+\\.[a-zA-Z]{2,4})|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(/[a-zA-Z0-9%:/-_\\?\\.'~]*)?",
	"len": "6-",
	"desc": "Uniform Resource Identifier",
	"ex": "http://ietf.org",
	"url": " "
},
"i:dn": {
	"id": "i:dn",
	"re": "^(?:[a-zA-Z0-9][a-zA-Z0-9-]{1,30}\\.){1,3}([a-zA-Z]{2}|com|net|org|edu|int|gov|mil|biz|info)$",
	"len": "4-",
	"desc": "Domain Name",
	"ex": "ietf.org",
	"url": ""
},


"i:efoo": {
	"id": "i:efoo",
	"re": "E ?1?[1-9]{3}",
	"len": "5,6",
	"desc": "E Number for food additives",
	"ex": "E300",
	"url": "http://www.ukfoodguide.net/"
},
"i:pnr": {
	"id": "i:pnr",
	"re": "^[A-HJ-NP-Z][A-HJ-NP-Z2-9]{5}|[2-9][A-HJ-NP-Z][A-HJ-NP-Z2-9]{4}$",
	"desc": "Passenger Name Record",
	"len": "6",
	"ex": "P52DKC",
	"url": ""
},
"i:chss": {
	"id": "i:chss",
	"re": "((?:[1-9][1-9]?\\.(?:\\.\\.)?\\s?)?(?:[KQNBR]?[a-h][1-8](?: [a-h][1-8])?|[KQNBR]?[a-h][1-8]? ?x ?[KQNBR]?[a-h]?[1-8]?|O-O[-O]?)(?:\\+|\\??!|#)?)$",
	"desc": "Chess Notation",
	"len": "3-",
	"ex": "Kf3",
	"url": ""
},


"i:mol": {
	"id": "i:mol",
	"re": "((?:(?:H|He|Li|Be|B|C|N|O|F|Ne|Na|Mg|Al|Si|P|S|Cl|Ar|K|Ca|Sc|Ti|V|Cr|Mn|Fe|Co|Ni|Cu|Zn|Ga|Ge|As|Se|Br|Kr|Rb|Sr|Y|Zr|Nb|Mo|Tc|Ru|Rh|Pd|Ag|Cd|In|Sn|Sb|Te|I|Xe|Cs|Ba|La|Ce|Pr|Nd|Pm|Sm|Eu|Gd|Tb|Dy|Ho|Er|Tm|Yb|Lu|Hf|Ta|W|Re|Os|Ir|Pt|Au|Hg|Tl|Pb|Bi|Po|At|Rn|Fr|Ra|Ac|Th|Pa|U|Np|Pu|Am|Cm|Bk|Cf|Es|Fm|Md|No|Lr|Rf|Db|Sg|Bh|Hs|Mt|Ds|Rg|Cn|Nh|Fl|Mc|Lv|Ts|Og)[123₁₂₃]?[0-9₁₂₃₄₅₆₇₈₉₀]?)+)",
	"desc": "Chemical Molecule",
	"len": "2-",
	"ex": "AgNO3",
	"url": "https://webbook.nist.gov/cgi/cbook.cgi?Formula="
},










"d:cc": {
	"id": "d:cc",
	"re": "CC([0∅]| BY| BY-SA)",
	"desc": "Creative Commons Lizenz",
	"len": "3-11",
	"ex": "CC BY-SA",
	"url": ""
}, 
"d:10c": {
	"id": "d:10c",
	"re": "(10-[0-8]?[0-9])",
	"desc": "Police/APCO ten code",
	"len": "4,5",
	"ex": "10-4",
	"url": ""
},
"d:qcod": {
	"id": "d:qcod",
	"re": "(Q[A_Z]{2})",
	"desc": "Radio Q code",
	"len": "3",
	"ex": "QRA",
	"url": ""
},  




}