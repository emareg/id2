
const id2 = id2data;
id2ids = Array();


function rematch(t, id, types){
    regex=id2[id]["re"]
    // console.log(regex)
    found=t.match(RegExp('^'+regex+'\\b'))
    if(found != null){
    	res=id2[id]
    	res["fullid"]="id2:"+res['id']+":"+found[0]
    	res["part"]=found[1]
        types.push(res)
    }
}

function checkID2(t, types){
	if(t.length < 9){ return false }
	var pretypes = [];
	matches = t.match(RegExp('^id2:([idhloqtw]:[a-z]{2,4}):(.+)'))
	if(matches == null ){ return false }
	id = matches[1]
	q = matches[2]
	if (id != "" && id2ids.includes(id)){
		rematch(q, id, pretypes)
		if(pretypes.length > 0 && pretypes[0]['id'] == id){
			types.push(pretypes[0])
			return true
		}
	}
}


function selfTest(){
	types = []
	for (const [key, entry] of Object.entries(id2)) {
		ex=entry['ex']
		hit = false
		rematch(ex, key, types)
		types.forEach(match => {
			if(match['id'] == key){
				hit = true
			}
		});
		if(hit == false){
			console.log("missed: ", key, ex)
		}
	}
}



function parseRegex(){
	// id2.forEach((value, key) => {
	// });
	for (const [key, val] of Object.entries(id2)) {
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
				// console.log("range: ", part, imin, imax)
				lens = lens.concat(Array(imax-imin).fill().map((_, idx) => imin + idx))
			} else {
				lens.push(imin)
			}
		});

		// assign lengths
		id2[key]['lens'] = lens
	}
	
}


// performance: locations: 1.5ms  ORCID: 10ms
function iterateAllIds(t){
	t = t.trim()
	var types = [];
	for (const [key, entry] of Object.entries(id2)) {
		if (entry['lens'].includes(t.length)) {
			rematch(t, key, types)
		}
	}
	checkID2(t, types)
	return types
}


function isInt(str){
	// return !isNaN(str) && Number.isInteger(str)
	return /^[0-9]{1,30}$/.test(str)
}
