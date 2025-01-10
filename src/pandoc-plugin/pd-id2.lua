-- Pandoc Filter to render ID2 as links
-- Lua-Filter Documentation: https://pandoc.org/lua-filters.html

id2ids={"d:ytv:", "o:asin:", "d:doi:", "g:olc:", "d:spfy:"}

shortURLs={"www.youtube.com/watch?v="}


local function starts_with(str, start)
  if type(str) ~= "string" then return end
  if (type(start) == "table") then
    for key, val in pairs(start) do
      if starts_with(str, val) then return true end
    end
  elseif (type(start) == "string") then
    return str:sub(1, #start) == start
  end 
end


function lstrip(str, substr)
	if starts_with(str, substr) then 
		return str:sub(#substr+1)
	else
		return str
	end
end

function replaceURL(el)
	domain=lstrip(el.c, "https://")
	-- newstr=el.c.gsub("www.youtube.com/watch\\?v=")
	if domain ~= el.c and starts_with(domain, "www.youtube.com/watch?v=") then
		-- print(domain)
		id = domain:sub(25)
		return pandoc.Link("§d:ytv:"..id, "https://id2.dev?".."d:ytv:"..id)
	end
end


function Str(el)
	id2part=""
	if starts_with(el.c, "id2:") then id2part = el.c:sub(5) end
	if starts_with(el.c, "§") then id2part = el.c:sub(3) end   -- unicode!
	if id2part ~= "" and starts_with(id2part, id2ids) then
		print(id2part) 
		return pandoc.Link("§"..id2part, "https://id2.dev?"..id2part)
	end
	newel = replaceURL(el)
	if newel then return newel end
end


-- function Para(el)
--   -- Find all Inline, find all Str
--   for key, val in pairs(el.c) do
--     if val.t == "Str" then
--     	if starts_with(val.c, {"id2:o:asin:", "id2:d:doi:"}) then
--     		print(val.c)
--     		el.c
--     	end
--     end 
--   end
-- end
