(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{665:function(_,v,d){"use strict";d.r(v);var t=d(21),o=Object(t.a)({},(function(){var _=this,v=_.$createElement,d=_._self._c||v;return d("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[d("h1",{attrs:{id:"ui"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#ui"}},[_._v("#")]),_._v(" UI")]),_._v(" "),d("p",[_._v("Sanic Extensionsには、RedocとSwaggerの両方のインターフェイスが付属しています。どちらかを使うか、両方を使うかを選択することができます。以下のエンドポイントが自動でセットアップされており、素の "),d("code",[_._v("/docs")]),_._v(" はRedocを表しています。")]),_._v(" "),d("ul",[d("li",[d("code",[_._v("/docs")])]),_._v(" "),d("li",[d("code",[_._v("/docs/openapi.json")])]),_._v(" "),d("li",[d("code",[_._v("/docs/redoc")])]),_._v(" "),d("li",[d("code",[_._v("/docs/swagger")])]),_._v(" "),d("li",[d("code",[_._v("/docs/openapi-config")])])]),_._v(" "),d("h2",{attrs:{id:"設定オプション"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#設定オプション"}},[_._v("#")]),_._v(" 設定オプション")]),_._v(" "),d("table",[d("thead",[d("tr",[d("th",[d("strong",[_._v("キー")])]),_._v(" "),d("th",[d("strong",[_._v("タイプ")])]),_._v(" "),d("th",[d("strong",[_._v("デフォルト")])]),_._v(" "),d("th",[d("strong",[_._v("説明")])])])]),_._v(" "),d("tbody",[d("tr",[d("td",[d("code",[_._v("OAS_IGNORE_HEAD")])]),_._v(" "),d("td",[d("code",[_._v("bool")])]),_._v(" "),d("td",[d("code",[_._v("True")])]),_._v(" "),d("td",[d("code",[_._v("HEAD")]),_._v("エンドポイントを表示するかどうかを指定する。")])]),_._v(" "),d("tr",[d("td",[d("code",[_._v("OAS_IGNORE_OPTIONS")])]),_._v(" "),d("td",[d("code",[_._v("bool")])]),_._v(" "),d("td",[d("code",[_._v("True")])]),_._v(" "),d("td",[d("code",[_._v("OPTIONS")]),_._v(" 端末を表示するかどうかを指定する。")])]),_._v(" "),d("tr",[d("td",[d("code",[_._v("OAS_PATH_TO_REDOC_HTML")])]),_._v(" "),d("td",[d("code",[_._v("Optional[str]")])]),_._v(" "),d("td",[d("code",[_._v("None")])]),_._v(" "),d("td",[_._v("デフォルトの Redoc HTML を上書きするための HTML へのパス。")])]),_._v(" "),d("tr",[d("td",[d("code",[_._v("OAS_PATH_TO_SWAGGER_HTML")])]),_._v(" "),d("td",[d("code",[_._v("Optional[str]")])]),_._v(" "),d("td",[d("code",[_._v("None")])]),_._v(" "),d("td",[_._v("デフォルトの Swagger HTML をオーバーライドするための HTML へのパス。")])]),_._v(" "),d("tr",[d("td",[d("code",[_._v("OAS_UI_DEFAULT")])]),_._v(" "),d("td",[d("code",[_._v("Optional[str]")])]),_._v(" "),d("td",[d("code",[_._v('"redoc"')])]),_._v(" "),d("td",[d("code",[_._v("redoc")]),_._v("または "),d("code",[_._v("swagger")]),_._v(" に設定することができ、ベースルートに表示するUIを制御します。"),d("code",[_._v("None")]),_._v(" に設定すると、ベースルートは設定されません。")])]),_._v(" "),d("tr",[d("td",[d("code",[_._v("OAS_UI_REDOC")])]),_._v(" "),d("td",[d("code",[_._v("bool")])]),_._v(" "),d("td",[d("code",[_._v("True")])]),_._v(" "),d("td",[_._v("Redoc UI を有効にするかどうか。")])]),_._v(" "),d("tr",[d("td",[d("code",[_._v("OAS_UI_SWAGGER")])]),_._v(" "),d("td",[d("code",[_._v("bool")])]),_._v(" "),d("td",[d("code",[_._v("True")])]),_._v(" "),d("td",[_._v("Swagger UI を使用可能にするかどうか。")])]),_._v(" "),d("tr",[d("td",[d("code",[_._v("OAS_URI_TO_CONFIG")])]),_._v(" "),d("td",[d("code",[_._v("str")])]),_._v(" "),d("td",[d("code",[_._v('"/openapi-config"')])]),_._v(" "),d("td",[_._v("Swagger が使用する OpenAPI コンフィグへの URI パス")])]),_._v(" "),d("tr",[d("td",[d("code",[_._v("OAS_URI_TO_JSON")])]),_._v(" "),d("td",[d("code",[_._v("str")])]),_._v(" "),d("td",[d("code",[_._v('"/openapi.json"')])]),_._v(" "),d("td",[_._v("JSON ドキュメントへの URI パス。")])]),_._v(" "),d("tr",[d("td",[d("code",[_._v("OAS_URI_TO_REDOC")])]),_._v(" "),d("td",[d("code",[_._v("str")])]),_._v(" "),d("td",[d("code",[_._v('"/redoc"')])]),_._v(" "),d("td",[_._v("Redoc への URI パス。")])]),_._v(" "),d("tr",[d("td",[d("code",[_._v("OAS_URI_TO_SWAGGER")])]),_._v(" "),d("td",[d("code",[_._v("str")])]),_._v(" "),d("td",[d("code",[_._v('"/swagger"')])]),_._v(" "),d("td",[_._v("Swagger への URI パス。")])]),_._v(" "),d("tr",[d("td",[d("code",[_._v("OAS_URL_PREFIX")])]),_._v(" "),d("td",[d("code",[_._v("str")])]),_._v(" "),d("td",[d("code",[_._v('"/docs"')])]),_._v(" "),d("td",[_._v("Blueprint for OpenAPI ドキュメントに使用する URL のプレフィックス。")])])])])])}),[],!1,null,null,null);v.default=o.exports}}]);