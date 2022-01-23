(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{552:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"test-clients"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-clients"}},[t._v("#")]),t._v(" Test Clients")]),t._v(" "),s("p",[t._v("There are three different test clients available to you, each of them presents different capabilities.")]),t._v(" "),s("h2",{attrs:{id:"regular-sync-client-sanictestclient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#regular-sync-client-sanictestclient"}},[t._v("#")]),t._v(" Regular sync client: "),s("code",[t._v("SanicTestClient")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("SanicTestClient")]),t._v(" runs an actual version of the Sanic Server on your local network to run its tests. Each time it calls an endpoint it will spin up a version of the application and bind it to a socket on the host OS. Then, it will use "),s("code",[t._v("httpx")]),t._v(" to make calls directly to that application.")]),t._v(" "),s("p",[t._v("This is the typical way that Sanic applications are tested.")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("Once installing Sanic Testing, the regular "),s("code",[t._v("SanicTestClient")]),t._v(" can be used without further setup. This is because Sanic does the leg work for you under the hood.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/endpoint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("However, you may find it desirable to instantiate the client yourself.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_testing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("testing "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SanicTestClient\n\ntest_client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SanicTestClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntest_client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/endpoint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("A third option for starting the test client is to use the "),s("code",[t._v("TestManager")]),t._v(". This is a convenience object that sets up both the "),s("code",[t._v("SanicTestClient")]),t._v(" and the "),s("code",[t._v("SanicASGITestClient")]),t._v(".")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_testing "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TestManager\n\nmgr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TestManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/endpoint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\nmgr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/endpoint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("You can make a request by using one of the following methods")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("SanicTestClient.get")])]),t._v(" "),s("li",[s("code",[t._v("SanicTestClient.post")])]),t._v(" "),s("li",[s("code",[t._v("SanicTestClient.put")])]),t._v(" "),s("li",[s("code",[t._v("SanicTestClient.patch")])]),t._v(" "),s("li",[s("code",[t._v("SanicTestClient.delete")])]),t._v(" "),s("li",[s("code",[t._v("SanicTestClient.options")])]),t._v(" "),s("li",[s("code",[t._v("SanicTestClient.head")])]),t._v(" "),s("li",[s("code",[t._v("SanicTestClient.websockets")])]),t._v(" "),s("li",[s("code",[t._v("SanicTestClient.request")])])]),t._v(" "),s("p",[t._v("You can use these methods "),s("em",[t._v("almost")]),t._v(" identically as you would when using "),s("code",[t._v("httpx")]),t._v(". Any argument that you would pass to "),s("code",[t._v("httpx")]),t._v(" will be accepted, "),s("strong",[t._v("with one caveat")]),t._v(": If you are using "),s("code",[t._v("test_client.request")]),t._v(" and want to manually specify the HTTP method, you should use: "),s("code",[t._v("http_method")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("test_client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/endpoint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" http_method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"asgi-async-client-sanicasgitestclient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asgi-async-client-sanicasgitestclient"}},[t._v("#")]),t._v(" ASGI async client: "),s("code",[t._v("SanicASGITestClient")])]),t._v(" "),s("p",[t._v("Unlike the "),s("code",[t._v("SanicTestClient")]),t._v(" that spins up a server on every request, the "),s("code",[t._v("SanicASGITestClient")]),t._v(" does not. Instead it makes use of the "),s("code",[t._v("httpx")]),t._v(" library to execute Sanic as an ASGI application to reach inside and execute the route handlers.")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("This test client provides all of the same methods and generally works as the "),s("code",[t._v("SanicTestClient")]),t._v(". The only difference is that you will need to add an "),s("code",[t._v("await")]),t._v(" to each call:")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/endpoint"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("SanicASGITestClient")]),t._v(" can be used in the exact same three ways as the "),s("code",[t._v("SanicTestClient")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("SanicASGITestClient")]),t._v(" does not need to only be used with ASGI applications. The same way that the "),s("code",[t._v("SanicTestClient")]),t._v(" does not need to only test sync endpoints. Both of these clients are capable of testing "),s("em",[t._v("any")]),t._v(" Sanic application.")])]),t._v(" "),s("h2",{attrs:{id:"persistent-service-client-reusableclient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#persistent-service-client-reusableclient"}},[t._v("#")]),t._v(" Persistent service client: "),s("code",[t._v("ReusableClient")])]),t._v(" "),s("p",[t._v("This client works under a similar premise as the "),s("code",[t._v("SanicTestClient")]),t._v(" in that it stands up an instance of your application and makes real HTTP requests to it. However, unlike the "),s("code",[t._v("SanicTestClient")]),t._v(", when using the "),s("code",[t._v("ReusableClient")]),t._v(" you control the lifecycle of the application.")]),t._v(" "),s("p",[t._v("That means that every request "),s("strong",[t._v("does not")]),t._v(" start a new web server. Instead you will start the server and stop it as needed and can make multiple requests to the same running instance.")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("Unlike the other two clients, you "),s("strong",[t._v("must")]),t._v(" instantiate this client for use:")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_testing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reusable "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ReusableClient\n\nclient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ReusableClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("Once created, you will use the client inside of a context manager. Once outside of the scope of the manager, the server will shutdown.")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_testing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reusable "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ReusableClient\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_multiple_endpoints_on_same_server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ReusableClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n\n        _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n")])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);