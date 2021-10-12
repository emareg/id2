id2data={



"t:iso": {
	"id": "t:iso",
	"re": "((?:19|20)[0-9]{2}-(?:0[1-9]|1[012])-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[0-1][0-9]|[2][0-3]):[0-5][0-9](?::[0-5][0-9])?(?:[+-][01][0-9]:[0-5][0-9]|Z)?)?)",
	"len": "10-22",
	"desc": "ISO 8601 Date-Time format",
	"ex": "2020-02-22T22:22Z",
	"url": "https://dencode.com/en/date?v="
},
"t:unix": {
	"id": "t:unix",
	"re": "((?:t[:=] ?)?[012][0-9]{9})",
	"len": "10",
	"desc": "Unix Epoch Time",
	"ex": "1606324253",
	"url": "https://timestamp.online/timestamp/"
},




"g:gps": {
	"id": "g:gps",
	"re": "([-+]?([1-8]?[0-9][.,][0-9]{6,7}|90\\.0{6,7})°?N?[,_]?\\s*[-+]?(180\\.0{6,7}|(?:1[0-7][0-9]|[1-9]?[0-9])[.,][0-9]{6,7})°?W?)",
	"len": "15-26",
	"desc": "Longitude and Latitude",
	"ex": "40.446195N 79.948862W",
	"url": "https://www.google.com/maps/search/"
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
	"re": "///(\\w{1,12}[・.。]\\w{1,12}[・.。]\\w{1,12})",
	"len": "14-40",
	"desc": "What 3 Words",
	"ex": "///double.pints.exact",
	"url": "https://what3words.com/"
},
"g:mgrs": {
	"id": "g:mgrs",
	"re": "([0-9]{1,2}[^ABIOYZabioyz][A-Za-z]{2}(?:[0-9][0-9]){1,6})",
	"len": "6,8,10,12,14,16",
	"desc": "Military Grid Reference System",
	"ex": "4QFJ1093763778",
	"url": "https://mappingsupport.com/p2/gissurfer.php?center="
},
"g:utm": {
	"id": "g:utm",
	"re": "([0-5][0-9][F-HJ-NQ-X] ?[0-9]{2,7}(?:mE)? ?[0-9]{2,7}(?:mN)?)",
	"len": "7,9,11,13,15,17,19",
	"desc": "Universal Transverse Mercator coordinate system",
	"ex": "17T 630084 483343",
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
	"len": "12,15",
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
	"len": "3-20",
	"desc": "Object identifier",
	"ex": "1.3.6.1.4.1.343",
	"url": "http://oid-info.com/get/"
},

"o:dhl": {
	"id": "o:dhl",
	"re": "([A-Z]{2}-[A-Z]{2,3}-[0-9]{7}|(?:3S|GM|JVGL)[0-9]{10}|JJD0[10](?:[0-9]{8}|[0-9]{16}))",
	"len": "12,13,14,21",
	"desc": "DHL Tracking Number",
	"ex": "JJD000390013320676359",
	"url": "https://www.dhl.de/en/privatkunden/dhl-sendungsverfolgung.html?piececode="
},

"o:cont": {
	"id": "o:cont",
	"re": "([A-Z]{3}U-?[0-9]{6}-?[0-9])",
	"len": "11,13",
	"desc": "Container Code",
	"ex": "CSQU-305438-3",
	"url": "https://www.track-trace.com/container/"
},
"o:imo": {
	"id": "o:imo",
	"re": "(?:imo|IMO)[ -:]?([0-9]{7})",
	"len": "10,11",
	"desc": "IMO Ship Number",
	"ex": "IMO 9319466",
	"url": "https://www.vesselfinder.com/vessels?name="
},



"d:doi": {
	"id": "d:doi",
	"re": "(10\\.[0-9]{4,9}(?:\\.[0-9]+)*/[-._;()/:A-Z0-9]+)",
	"len": "8-80",
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
	"re": "((?:cve|CVE)-(?:199[0-9]|20[0-9]{2})-[0-9]{4,7})",
	"len": "13-16",
	"desc": "Common Vulnerabilities and Exposures",
	"ex": "CVE-1999-0067",
	"url": "https://cve.mitre.org/cgi-bin/cvename.cgi?name="
},
"d:cwe": {
	"id": "d:cwe",
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


"i:id2": {
	"id": "i:id2",
	"re": "(§[digowtx]:\S+|id2:[digowtx]:[a-z0-9]{2,4})",
	"len": "8-64",
	"desc": "Identifier Identifier",
	"ex": "id2:g:olc",
	"url": "https://id2.dev?"
},
"i:ip4": {
	"id": "i:ip4",
	"re": "(((?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))",
	"len": "7-15",
	"desc": "IP Address Version 4",
	"ex": "192.168.2.1",
	"url": "https://whois.domaintools.com/"
},
"i:ip6": {
	"id": "i:ip6",
	"re": "(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|[fF][eE]80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::([fF]{4}(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))",
	"len": "3-39",
	"desc": "IP Version 6 Address",
	"ex": "2001:db8:3:4::1",
	"url": "https://whois.domaintools.com/"
},
"i:mac": {
	"id": "i:mac",
	"re": "([0-9a-fA-F]{2}[:-]){5}([0-9a-fA-F]{2})",
	"len": "17",
	"desc": "MAC Address",
	"ex": "00:0a:95:9d:68:16",
	"url": "https://api.macvendors.com/"
},
"i:rcol": {
	"id": "i:rcol",
	"re": "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})",
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
	"re": "([LM3][a-km-zA-HJ-NP-Z1-9]{26,33})",
	"desc": "Cryptocurrency LiteCoin Address",
	"len": "27-34",
	"ex": "LMRGEqXUUzGXT4AYdZNw1UxETmNP1XsFoN",
	"url": "https://blockchair.com/litecoin/address/"
},
"h:dash": {
	"id": "h:dash",
	"re": "(X[1-9A-HJ-NP-Za-km-z]{33})",
	"len": "34",
	"desc": "Cryptocurrency Dash",
	"ex": "XpESxaUmonkq8RaLLp46Brx2K39ggQe226",
	"url": ""
},
"h:neo": {
	"id": "h:neo",
	"re": "(A[0-9a-zA-Z]{33})",
	"len": "34",
	"desc": "Cryptocurrency NEO",
	"ex": "AddZkjqPoPyhDhWoA8f9CXQeHQRDr8HbPo",
	"url": "https://neotracker.io/address/"
},
"h:mon": {
	"id": "h:mon",
	"re": "(4[0-9AB][1-9A-HJ-NP-Za-km-z]{93})",
	"len": "95",
	"desc": "Cryptocurrency MONERO",
	"ex": "4AdUndXHHZ6cfufTMvppY6JwXNouMBzSkbLYfpAV5Usx3skxNgYeYTRj5UzqtReoS44qo9mtmXCqY45DJ852K5Jv2684Rge",
	"url": ""
},
"h:cid0": {
	"id": "h:cid0",
	"re": "(Qm[1-9A-HJ-NP-Za-km-z]{44})",
	"len": "46",
	"desc": "IPFS Content ID Version 0",
	"ex": "QmThqT3hGowNwTZqkTqyGqW2Beeb9SfLHAZXXUNFkirVRQ",
	"url": "https://explore.ipld.io/#/explore/"
},
"h:cid1": {
	"id": "h:cid1",
	"re": "(F[a-fA-F0-9]{50}|z[1-9A-HJ-NP-Za-km-z]{32}(?:[1-9A-HJ-NP-Za-km-z]{16})?|B[A-Z2-7]{58}|b[a-z2-7]{39}(?:[a-z2-7]{19})?)",
	"len": "33,40,49,51,59",
	"desc": "IPFS Content ID Version 1",
	"ex": "bafybeiasb5vpmaounyilfuxbd3lryvosl4yefqrfahsb2esg46q6tu6y5q",
	"url": "https://explore.ipld.io/#/explore/"
},  



}

