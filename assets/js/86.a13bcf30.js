(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{499:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"decorators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decorators"}},[t._v("#")]),t._v(" Decorators")]),t._v(" "),s("p",[t._v("The primary mechanism for adding content to your schema is by decorating your endpoints. If you have\nused "),s("code",[t._v("sanic-openapi")]),t._v(" in the past, this should be familiar to you. The decorators and their arguments match closely\nthe "),s("a",{attrs:{href:"https://swagger.io/specification/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAS v3.0 specification"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("All of the examples show will wrap around a route definition. When you are creating these, you should make sure that\nyour Sanic route decorator ("),s("code",[t._v("@app.route")]),t._v(", "),s("code",[t._v("@app.get")]),t._v(", etc) is the outermost decorator. That is to say that you should\nput that first and then one or more of the below decorators after.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_ext "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" openapi\n\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/<something>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("summary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a summary"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a description"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" somethind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("You will also see a lot of the below examples reference a model object. For the sake of simplicity, the examples will\nuse "),s("code",[t._v("UserProfile")]),t._v(" that will look like this. The point is that it can be any well-typed class. You could easily imagine\nthis being a "),s("code",[t._v("dataclass")]),t._v(" or some other kind of model object.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserProfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v("\n    age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n    email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"definition-decorator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#definition-decorator"}},[t._v("#")]),t._v(" Definition decorator")]),t._v(" "),s("h3",{attrs:{id:"opanepi-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opanepi-definition"}},[t._v("#")]),t._v(" "),s("code",[t._v("@opanepi.definition")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("@openapi.definition")]),t._v(" decorator allows you to define all parts of an operations on a path at once. It is an omnibums\ndecorator in that it has the same capabilities to create operation definitions as the rest of the decorators. Using\nmultiple field-specific decorators or a single decorator is a style choice for you the developer.")]),t._v(" "),s("p",[t._v("The fields are purposely permissive in accepting multiple types to make it easiest for you to define your operation.")]),t._v(" "),s("p",[s("strong",[t._v("Arguments")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("body")])]),t._v(" "),s("td",[s("strong",[t._v("dict, RequestBody, "),s("em",[t._v("YourModel")])])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("deprecated")])]),t._v(" "),s("td",[s("strong",[t._v("bool")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("description")])]),t._v(" "),s("td",[s("strong",[t._v("str")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("document")])]),t._v(" "),s("td",[s("strong",[t._v("str, ExternalDocumentation")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("exclude")])]),t._v(" "),s("td",[s("strong",[t._v("bool")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("operation")])]),t._v(" "),s("td",[s("strong",[t._v("str")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("parameter")])]),t._v(" "),s("td",[s("strong",[t._v("dict, Parameter, "),s("em",[t._v("YourModel")]),t._v(", [dict], [Parameter], ["),s("em",[t._v("YourModel")]),t._v("]")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response")])]),t._v(" "),s("td",[s("strong",[t._v("dict, Response, "),s("em",[t._v("YourModel")]),t._v(", [dict], [Response], ["),s("em",[t._v("YourModel")]),t._v("]")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("summary")])]),t._v(" "),s("td",[s("strong",[t._v("str")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("tag")])]),t._v(" "),s("td",[s("strong",[t._v("str, Tag, [str], [Tag]")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Examples")])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("definition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("RequestBody"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserProfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    summary"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User profile update"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    response"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Failure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}})]),t._v(" "),s("p",[s("em",[t._v("See below examples for more examples. Any of the values for the below decorators can be used in the corresponding\nkeyword argument.")])]),t._v(" "),s("h2",{attrs:{id:"field-specific-decorators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#field-specific-decorators"}},[t._v("#")]),t._v(" Field-specific decorators")]),t._v(" "),s("p",[t._v("All the following decorators are based on "),s("code",[t._v("@openapi")])]),t._v(" "),s("tabs",[s("tab",{attrs:{name:"body"}},[s("p",[s("strong",[t._v("Arguments")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("content")])]),t._v(" "),s("td",[s("strong",[s("em",[t._v("YourModel")]),t._v(", dict, RequestBody")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Examples")])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserProfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UserProfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RequestBody"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UserProfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UserProfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RequestBody"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserProfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),s("tab",{attrs:{name:"deprecated"}},[s("p",[s("strong",[t._v("Arguments")])]),t._v(" "),s("p",[s("em",[t._v("None")])]),t._v(" "),s("p",[s("strong",[t._v("Examples")])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deprecated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deprecated")]),t._v("\n")])])])])])]),t._v(" "),s("tab",{attrs:{name:"description"}},[s("p",[s("strong",[t._v("Arguments")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("text")])]),t._v(" "),s("td",[s("strong",[t._v("str")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Examples")])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""This is a **description**.\n\n## You can use `markdown`\n\n- And\n- make\n- lists.\n"""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}})])]),t._v(" "),s("tab",{attrs:{name:"document"}},[s("p",[s("strong",[t._v("Arguments")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("url")])]),t._v(" "),s("td",[s("strong",[t._v("str")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("description")])]),t._v(" "),s("td",[s("strong",[t._v("str")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Examples")])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/docs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ExternalDocumentation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/more"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),s("tab",{attrs:{name:"exclude"}},[s("p",[t._v("Can be used on route definitions like all of the other decorators, or can be called on a Blueprint")]),t._v(" "),s("p",[s("strong",[t._v("Arguments")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("flag")])]),t._v(" "),s("td",[s("strong",[t._v("bool")])]),t._v(" "),s("td",[s("strong",[t._v("True")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("bp")])]),t._v(" "),s("td",[s("strong",[t._v("Blueprint")])]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("strong",[t._v("Examples")])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exclude")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exclude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("some_blueprint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),s("tab",{attrs:{name:"operation"}},[s("p",[t._v("Sets the operation ID.")]),t._v(" "),s("p",[s("strong",[t._v("Arguments")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("name")])]),t._v(" "),s("td",[s("strong",[t._v("str")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Examples")])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("operation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doNothing"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}})])]),t._v(" "),s("tab",{attrs:{name:"parameter"}},[s("p",[s("strong",[t._v("Arguments")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("name")])]),t._v(" "),s("td",[s("strong",[t._v("str")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema")])]),t._v(" "),s("td",[s("em",[s("strong",[t._v("type")])])]),t._v(" "),s("td",[s("strong",[t._v("str")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("location")])]),t._v(" "),s("td",[s("strong",[t._v('"query", "header", "path" or "cookie"')])]),t._v(" "),s("td",[s("strong",[t._v('"query"')])])])])]),t._v(" "),s("p",[s("strong",[t._v("Examples")])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thing"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parameter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Parameter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foobar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deprecated"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"header"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thing"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" allowEmptyValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),s("tab",{attrs:{name:"response"}},[s("p",[s("strong",[t._v("Arguments")])]),t._v(" "),s("p",[t._v("If using a "),s("code",[t._v("Response")]),t._v(" object, you should not pass any other arguments.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("status")])]),t._v(" "),s("td",[s("strong",[t._v("int")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("content")])]),t._v(" "),s("td",[s("strong",[s("em",[t._v("type")]),t._v(", "),s("em",[t._v("YourModel")]),t._v(", dict")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("description")])]),t._v(" "),s("td",[s("strong",[t._v("str")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response")])]),t._v(" "),s("td",[s("strong",[t._v("Response")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Examples")])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is endpoint returns a string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/plain"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserProfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    response"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UserProfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        status"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UserProfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UserProfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Description..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),s("tab",{attrs:{name:"summary"}},[s("p",[s("strong",[t._v("Arguments")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("text")])]),t._v(" "),s("td",[s("strong",[t._v("str")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Examples")])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("summary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is an endpoint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}})])]),t._v(" "),s("tab",{attrs:{name:"tag"}},[s("p",[s("strong",[t._v("Arguments")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("*args")])]),t._v(" "),s("td",[s("strong",[t._v("str, Tag")])])])])]),t._v(" "),s("p",[s("strong",[t._v("Examples")])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@openapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);