# ID2 – Identifier Identifier

Demo: https://id2.dev

We humans like to ask the four "W" questions: who, what, when, and where. That is why our brains have invented identifiers to answer these questions.
However, today there are so many identification schemes that it becomes difficult to distinguish them. Do you know what `8FWH4HX8+QR` or `1.3.6.1.4.1.343` identifies? 

As a remedy, we are introducing ID², an identifier idenfication scheme that 

* annotates identifiers in a standardized pure-text form
* has a short and fixed maximum length
* has intuitive class names
* is URN/URL compatible


## Syntax
The full syntax of an ID2 is 

`ID2 = "id2" ":" [digowtx] ":" [a-z0-9]{2,4} ":" CHAR+`

**Example**
```
   class   identifier
     |     ┌────┴────┐
 id2:g:olc:8FWH4HX8+QR
 └┬┘   └┬┘            
prefix type       
```

An even shorter form for certain well-known and well-defined IDs are possible in the form of

```
 §g:8FWH4HX8+QR
```

In this case `§` serves as the prefix, `g` is the class of the identifier, `:` the separator, and the rest the identifier itself.




## Identifier Classes
We have chosen 8 classes of identifiers. Why classes? You might not be able to remember all `id2` identifier types but you can remember these 8 categories. Thus, it will give you a hint what the ID will identify.
Furthermore, classes help to prevent name clashes of ID types in case two or more IDs have the same name/acronym.

| class   | Meaning                 | Example |
|---------|-------------------------|---------|
| **`d`** | Document, Digital Media | DOI     |
| **`i`** | General Identifier      | UUID    |
| **`g`** | Geographic Location     | OLC     |
| **`o`** | Object (physical)       | EAN     |
| **`t`** | Time                    | 24h     |
| **`q`** | Quantity                | NUM     |
| **`w`** | Who, human/company      | TEL     |
| **`x`** | eXtension, eXperiments  | --      |


<!-- * **a**: address/asset  agent/animal -->
<!-- * **c**: Class / Classification Codes (ICD, CWE, CC/NAT/LANG) -->
<!-- * **d**: Document, digital media, duplicatable -->
<!-- * **i**: general Identifier, transferable -->
<!-- * **l**: Location  -->
<!-- * **g**: global, geo-location  -->
<!-- * **o**: Object (phyiscal), one -->
<!-- * **t**: Time -->
<!-- * **h**: Hash digests -->
<!-- * **q**: quantity, amount -->
<!-- * **u**: unique individual, non transfereable -->
<!-- * **p**: person, people, comPany -->
<!-- * **r**: resource -->
<!-- * **f**: Format/Language: (JSON, TOML, HTML, Text)  this is not an "ID" -->
<!-- * **k**: crypto keys -->
<!-- * **w**: Who, uniquely identifies a person   -->
<!-- => `h` for human, `e` for entity, `a` for agent/animal -->
<!-- * **x**: eXtension, eXperiments: for personal use -->
<!-- * **y**: crYpto, currencYs -->
<!-- * **z**: zoo, life-forms besides humans -->



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



<!-- ## Separator Symbol
Should be URI compatible.

```
i.url:  fits well into uri/URN scheme
i-url:   fully urn compatible
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
§d:url:
```


* should work as html attribute, css class name [a-z0-9_-]. https://www.w3.org/TR/CSS2/syndata.html#characters
* should be urn compatible
 -->




## Related Work

* URN-DEV: https://tools.ietf.org/html/draft-ietf-core-dev-urn-11#page-10

* Schema.org: https://schema.org/identifier

* Identifiers.org https://registry.identifiers.org/registry

* W3ID https://w3id.org/

* https://en.wikipedia.org/wiki/MIRIAM_Registry


## References

* https://learning.oreilly.com/library/view/regular-expressions-cookbook
