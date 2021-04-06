# ID2 – Identifier Identifiers

We humans like to ask the four "W" questions: who, what, when, and where. That is why our brains have invented identifiers to answer them but they are also useful for computers to locate resouces.
However, today there are so many identification schemes that it becomes difficult to distinguish them. Do you know what `apRNMCuBQzc` or `1.3.6.1.4.1.343` identifies? 

As a remedy, we are introducing ID2, an identifier idenfication scheme that 

* has a short and fixed maximum length
* has intuitive names
* is URN/URL compatible

For the examples above, we could provide `id2:oid:1.3.6.1.4.1.343`



## Category Classes
Why categories? Easier to remember, helps to identify an id2 because there are only some and prevents name clashes.

We have chosen 8 category identifiers. You might not be able to remember all `id2` identifiers but you can remember these 8 categories. Thus it will be easier to judge what kind of resource this will identify.

<!-- * **a**: address  agent/animal -->
<!-- * **c**: Code, Command -->
* **d**: Document, digital media, duplicatable
* **i**: general Identifier, transferable
<!-- * **h**: Hash digests -->
* **l**: Location => G für geo-location, 
* **o**: Object (phyiscal), one
* **p**: person, people, comPany
* **q**: quantity, amount
<!-- * **r**: resource -->
* **t**: Time
<!-- * **f**: Format/Language: (JSON, TOML, HTML, Text)  this is not an "ID" -->
<!-- * **k**: keys -->
<!-- * **w**: Who, uniquely identifies a person  => `h` for human, `e` for entity, `a` for agent/animal -->
* **x**: eXtension, eXperiments: for personal use



## Long Term Vision
Our vision is that id2 becomes a standard URI scheme that allows browsers to resolve an ID based on user preferences.
For example, the `mailto:` scheme already works that way and will open your preferred mail-client to write a new email to the specified person.
ID2 aims for a similar behavior but for a much larger amount of identifiers.

For example, `id2:l:olc:796RWF8Q+WF` specifies an Open Location Code (OLC) that would then open your preferred Map-app or website.





## Identifier Requirements
Which IDs can be part of ID2? Any identifier that is of public interest. 
In detail, it is required that the identifier in question ...

* is used by many people directly or indirectly,
* refers to something unique (object or concept),
* can be publicly resolved, but
* is difficult to resolve by a simple web search.



## Separator Symbol
Should be URI compatible.

```
i.url:  fits well into uri/URN scheme
i#url:
i~url:
i&url:
i=url:
i'url:
#i/url
#i~url
~i#url
~q#si
id2:i:url
```
Full URN compatible: `urn:id2:i#url`


* should work as html attribute, css class name [a-z0-9_-]. https://www.w3.org/TR/CSS2/syndata.html#characters
* should be urn compatible


## Unicode version
In unicode strings, we can use symbols to further reduce the ID2 to

```
d: 📄doi:
i: 🆔uuid:
l: 🌐gps:  
o: 📦ean:
p: 👤tel:
q: 🔢si:
t: ⏲24h:
```


