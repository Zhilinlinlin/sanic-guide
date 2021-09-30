(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{424:function(t,s,a){"use strict";a.r(s);var n=a(14),e=function(t){t.options.__data__block__={mermaid_382ee1ab:"sequenceDiagram\nautonumber\nparticipant 进程\nparticipant 子程序\nparticipant 监听器\nparticipant 响应函数\nNote over 进程: sanic server.app\nloop\n    进程->>监听器: @app.main_process_start\n    监听器->>响应函数: 调用事件响应函数\nend\n进程->>子程序: 启动\nloop 启动所有子程序\n    loop\n        子程序->>监听器: @app.before_server_start\n        监听器->>响应函数: 调用事件响应函数\n    end\n    Note over 子程序: 服务器状态: started\n    loop\n        子程序->>监听器: @app.after_server_start\n        监听器->>响应函数: 调用事件响应函数\n    end\n    Note over 子程序: 服务器状态: ready\nend\n进程->>子程序: 平滑关闭\nloop 停止所有子程序\n    loop\n        子程序->>监听器: @app.before_server_stop\n        监听器->>响应函数: 调用事件响应函数\n    end\n    Note over 子程序: 服务器状态: stopped\n    loop\n        子程序->>监听器: @app.after_server_stop\n        监听器->>响应函数: 调用事件响应函数\n    end\n    Note over 子程序: 服务器状态: closed\nend\nloop\n    进程->>监听器: @app.main_process_stop\n    监听器->>响应函数: 调用事件响应函数\nend\nNote over 进程: 退出\n"}},p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"监听器-listeners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听器-listeners"}},[t._v("#")]),t._v(" 监听器(Listeners)")]),t._v(" "),a("p",[t._v("在 Sanic 应用程序的生命周期中 6 个切入点，在这些关键节点上设置监听器可以让您可以完成一些注入操作。")]),t._v(" "),a("p",[t._v("有两 （2） 个切入点 "),a("em",[t._v("只")]),t._v(" 在您的主进程中触发（即，只会在 "),a("code",[t._v("sanic server.app")]),t._v(" 中触发一次。）")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("main_process_start")])]),t._v(" "),a("li",[a("code",[t._v("main_process_stop")])])]),t._v(" "),a("p",[t._v("有四（4）个切入点可以让您在服务器启动或者关闭前执行一些初始化或资源回收相关代码。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("before_server_start")])]),t._v(" "),a("li",[a("code",[t._v("after_server_start")])]),t._v(" "),a("li",[a("code",[t._v("before_server_stop")])]),t._v(" "),a("li",[a("code",[t._v("after_server_stop")])])]),t._v(" "),a("p",[t._v("工作流程的生命周期如下：")]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee1ab",graph:t.$dataBlock.mermaid_382ee1ab}}),a("h2",{attrs:{id:"启用监听器-attaching-a-listener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用监听器-attaching-a-listener"}},[t._v("#")]),t._v(" 启用监听器(Attaching a listener)")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("将函数设置为侦听器的过程类似于声明路由。")]),t._v(" "),a("p",[t._v("两个注入的参数是当前正在运行 "),a("code",[t._v("Sanic()")]),t._v(" 的实例和当前正在运行的循环。")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup_db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" db_setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register_listener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setup_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"before_server_start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("您也可以通过装饰器的方式来将函数添加为监听器。")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"before_server_start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup_db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" db_setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("您可以进一步缩短该装饰器的调用代码。如果您的 IDE 有自动补全应该会有很有用。")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("before_server_start")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup_db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" db_setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"执行顺序-order-of-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行顺序-order-of-execution"}},[t._v("#")]),t._v(" 执行顺序(Order of execution)")]),t._v(" "),a("p",[t._v("监听器按启动期间声明的顺序正向执行，并在拆解期间按照注册顺序反向执行。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("执行阶段")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("执行顺序")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("main_process_start")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("主程序启动")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("正向 😃")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("before_server_start")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("子程序启动")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("正向 😃")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("after_server_start")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("子程序启动")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("正向 😃")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("before_server_stop")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("子程序关闭")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("反向 🙃")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("after_server_stop")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("子程序关闭")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("反向 🙃")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("main_process_stop")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("主程序关闭")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("反向 🙃")])])])]),t._v(" "),a("p",[t._v("以下列代码为例，我们在启动两个子程序并执行之后看到的输出内容应该是这样的：")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"before_server_start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listener_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"listener_1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"before_server_start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listener_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"listener_2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"after_server_start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listener_3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"listener_3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"after_server_start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listener_4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"listener_4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"before_server_stop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listener_5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"listener_5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"before_server_stop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listener_6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"listener_6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"after_server_stop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listener_7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"listener_7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"after_server_stop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listener_8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"listener_8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Goin' Fast @ http://127.0.0.1:9999\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_0\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_3\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_4\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting worker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1222222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1222222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1222222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_3\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1222222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_4\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1222222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting worker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1222222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Stopping worker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1222222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Stopping worker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1222222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1222222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_6\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1222222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_5\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1222222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_8\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1222222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_7\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_6\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_5\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_8\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_7\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" listener_9\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pid: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server Stopped\n")])])]),a("p",[t._v("在上面的例子中，注意这三个进程是如何运行的：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pid: 1000000")]),t._v(" - "),a("em",[t._v("主")]),t._v(" 程序")]),t._v(" "),a("li",[a("code",[t._v("pid: 1111111")]),t._v(" - 子程序 1")]),t._v(" "),a("li",[a("code",[t._v("pid: 1222222")]),t._v(" - 子程序 2")])]),t._v(" "),a("p",[a("em",[t._v("只是为了举例，我们将两个子程序看做两组，分别顺序打印。但在实际情况下，这些都程序都运行在不同的进程中，进程执行的顺序是无法保证的。但是，可以确定的是，在只有一个子程序的情况下，"),a("strong",[t._v("一直")]),t._v(" 会保持上述顺序。")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("小提示：")]),t._v(" "),a("p",[t._v("在实际的使用过程中，如果您定义了一个数据库连接函数，并将其注册为 "),a("code",[t._v("before_server_start")]),t._v(" 的第一个监听器，那么在此之后注册的所有监听器都可以依靠该连接保持活跃状态。")])]),t._v(" "),a("h2",{attrs:{id:"asgi-模式-asgi-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asgi-模式-asgi-mode"}},[t._v("#")]),t._v(" ASGI 模式 (ASGI Mode)")]),t._v(" "),a("p",[t._v("如果您正在使用 ASGI 服务器来运行您的应用，那么需要关注一下以下的变化：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("main_process_start")]),t._v(" 和 "),a("code",[t._v("main_process_stop")]),t._v(" 将会被 "),a("strong",[t._v("忽略")])]),t._v(" "),a("li",[a("code",[t._v("before_server_start")]),t._v(" 将会尽可能早得执行，且会在 "),a("code",[t._v("after_server_start")]),t._v(" 之前，但是严格来说，服务器在这个时候已经运行了。")]),t._v(" "),a("li",[a("code",[t._v("after_server_stop")]),t._v(" 将会尽可能迟得执行，并且在 "),a("code",[t._v("before_server_stop")]),t._v(" 之后，但是严格来说，服务器在这个时候还没有停止运行。")])])],1)}),[],!1,null,null,null);"function"==typeof e&&e(p);s.default=p.exports}}]);