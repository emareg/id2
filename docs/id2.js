
id2ids = Array(); // for performance, contains only ids


function rematch(t, id, types){
    regex=id2data[id]["re"]
    // console.log(regex)
    found=t.match(RegExp('^'+regex+'$'))
    if(found != null){
    	res=id2data[id]
    	res["fullid"]="id2:"+res['id']+":"+found[1]
    	res["part"]=found[1]
        types.push(res)
    }
}

// test if given token is id2 formatted
function checkID2(t, types){
	if(t.length < 8){ return false }
	var pretypes = [];
	matches = t.match(RegExp('^(?:id2:|§)?([idhgoqtwx]:[a-z0-9]{2,4})(?::(.+))?'))
	if(matches == null ){ return false }
	id = matches[1]
	if(matches[2]){
		q = matches[2]
		if (id != "" && id2ids.includes(id)){
			rematch(q, id, pretypes)
			if(pretypes.length > 0 && pretypes[0]['id'] == id){
				types.push(pretypes[0])
				return true
			}
		}
	} else if (id2ids.includes(id)){
		types.push(id2data['i:id2'])
		return true
	}
}



// check the query part in the URL
function checkQuery(){
	if (window.location.search.length < 8){ return false; }
	query = decodeURIComponent(window.location.search.substring(1))
	console.log("Checking Query: ", query);
	var types = [];
	if (checkID2(query, types)){
		if (types[0]["id"] == "i:id2"){
			console.log("Query is ID2!", types);
			var idtype = query.substring(4)
			if(id2data[idtype]){
				el = document.getElementById('id2-query')
				el.innerHTML = query+" is an ID2 for "+id2data[idtype]['desc']+"!"
			}
			return types
		}
		if(types[0]["url"] != ""){
			window.location.href = types[0]["url"]+types[0]["part"];
		}
	} else {
		return iterateAllIds(query)
	}
	return types
}


function selfTest(){
	types = []
	for (const [key, entry] of Object.entries(id2data)) {
		ex=entry['ex']
		hit = false
		rematch(ex, key, types)
		types.forEach(match => {
			if(match['id'] == key && entry['lens'].includes(ex.length)){
				hit = true
			}
		});
		if(hit == false){
			console.log("missed: ", key, ex)
		}
	}
}


// parses all valid ID2 entries and builds the length LUT
function parseRegex(){
	// id2.forEach((value, key) => {
	// });
	for (const [key, val] of Object.entries(id2data)) {
		id2ids.push(val['id'])
		lens = Array()

		// parse the len string
		parts = val['len'].split(",")
		parts.forEach(part => {
			nums = part.split("-")
			imin = parseInt(nums[0])
			if(nums.length == 2){
				// if(imax == NaN){ imax = 40; }
				if(nums[1] == ""){ nums[1] = "40"; } // fixme: use -1 to indicate infinity
				imax = parseInt(nums[1])
				lens = lens.concat(Array(imax+1-imin).fill().map((_, idx) => imin + idx))
				// console.log(key, "range: ", part, imin, imax, lens)
			} else {
				lens.push(imin)
			}
		});

		// assign lengths
		id2data[key]['lens'] = lens
	}
	
}


// performance: locations: 1.5ms  ORCID: 10ms
function iterateAllIds(t){
	t = t.trim()
	var types = [];
	for (const [key, entry] of Object.entries(id2data)) {
		if (entry['lens'].includes(t.length)) {
			rematch(t, key, types)
		}
	}
	checkID2(t, types)
	return types
}
