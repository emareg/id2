id2data_extra = {


"t:fd": {
	"id": "t:fd",
	"re": "(FD:? ?[0-9]{2}(?:0[1-9]|1[012]))",
	"len": "6,7,8",
	"desc": "Factory Date",
	"ex": "FD 8909",
	"url": "https://timestamp.online/timestamp/"
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





"g:csq": {
	"id": "g:csq",
	"re": "([1357][0-8][0-9]{2}(?::[1-4][0-9]{2}){0,4}:[1-4][0-9]{0,2})",
	"len": "4-19",
	"desc": "C-Square",
	"ex": "7500:110:3",
	"url": "http://www.obis.org.au/cgi-bin/cs_map.pl?csq="
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







"o:oid": {
	"id": "o:oid",
	"re": "((?:0\\.[0234]|1\\.[0-3]|2\\.[1-5][0-9]?)(?:\\.[0-9]{1,9}){2,7})",
	"len": "3,20",
	"desc": "Object identifier",
	"ex": "1.3.6.1.4.1.343",
	"url": "http://oid-info.com/get/"
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
"o:senr": {
	"id": "o:senr",
	"re": "([A-Z]{2}[A-Z0-9]{8}/[0-9]{2})",
	"len": "13",
	"desc": "Siemens E-Nummer",
	"ex": "SN68M064EU/01",
	"url": "https://www.siemens-home.bsh-group.com/de/supportdetail/product/"
},
"o:ups": {
	"id": "o:ups",
	"re": "(1Z ?[0-9A-Z]{3} ?[0-9A-Z]{3} ?[0-9A-Z]{2} ?[0-9A-Z]{4} ?[0-9A-Z]{3} ?[0-9A-Z]|[\\dT]\\d{3}\\s?\\d{4} ?\\d{3})",
	"len": "12,18",
	"desc": "UPS Tracking Number",
	"ex": "1Z9999999999999999",
	"url": ""
},
"o:fedx": {
	"id": "o:fedx",
	"re": "(96\\d{20}|\\d{4} ?\\d{4} ?\\d{4}(?: ?\\d{3})?)",
	"len": "12,15,18,20,22",
	"desc": "FedEx Tracking Number",
	"ex": "9999 9999 9999 999",
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
	"re": "(E ?1?[0-9]{3})",
	"len": "4,5,6",
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





"d:cas": {
	"id": "d:cas",
	"re": "([1-9][0-9]{1,6}-[0-9]{2}-[0-9])",
	"len": "6-11",
	"desc": "Chemical Abstracts Service Registration Number",
	"ex": "7732-18-5",
	"url": "https://webbook.nist.gov/cgi/cbook.cgi?ID="
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





"h:sha2": {
	"id": "h:sha2",
	"re": "([a-fA-F0-9]{32}(?:[a-fA-F0-9]{8}){0,4}|[a-fA-F0-9]{96}(?:[a-fA-F0-9]{32})?|(?:[a-fA-F0-9]{2}[ :\\-]){15}[a-fA-F0-9]{2}(?:[ :\\-](?:[a-fA-F0-9]{2}[ :\\-]){3}[a-fA-F0-9]{2}){0,4})",
	"len": "32,40,48,64",
	"desc": "Secure Hash Algorithm",
	"ex": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
	"url": ""
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



}