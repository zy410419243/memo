(window.webpackJsonp=window.webpackJsonp||[]).push([[25,30],{117:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(732);i(118);t.default=function(e){var t=e.onDelete,i=e.onEdit,n=e.onHide,M=e.dataSource,c=e.onListItemClick,g=e.isLocal;return a.a.createElement("ul",{className:"main-page-list"},M.map((function(e){var M=a.a.createElement("div",{style:{float:"right",marginRight:8}},a.a.createElement("a",{onClick:function(t){t.stopPropagation(),i(e,!0,{x:t.pageX,y:t.pageY})},style:{marginRight:16}},"修改"),a.a.createElement("a",{onClick:function(t){t.stopPropagation(),n&&n(e)},style:{marginRight:16}},"隐藏"),a.a.createElement("a",{onClick:function(i){i.stopPropagation(),t&&t(e)},style:{marginRight:16}},"删除"));return a.a.createElement("li",{key:"list-item-".concat(e.id),className:"list-item",onClick:function(){return c({category:e.category,id:e.id})}},"mapping"===e.category&&a.a.createElement("div",{style:{background:"#108ee9"},className:"icon-apartment"}),"markdown"===e.category&&a.a.createElement("div",{style:{background:"#87d068"},className:"icon-file-markdown"}),e.type+" - "+e.subType+" - "+e.title,a.a.createElement("div",{style:{float:"right",marginRight:8}},"".concat(Object(o.a)(new Date(e.createTime||""),"yyyy-MM-dd")," / ").concat(Object(o.a)(new Date(e.modifyTime||""),"yyyy-MM-dd"))),g&&M)})))}},118:function(e,t,i){var n=i(5),a=i(119);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},M=(n(a,o),a.locals?a.locals:{});e.exports=M},119:function(e,t,i){var n=i(6),a=i(94),o=i(120),M=i(121);t=n(!1);var c=a(o),g=a(M);t.push([e.i,".main-page-list .list-item {\n  cursor: pointer;\n  padding: 0px 8px;\n  border: 1px solid #e7e7e7;\n  margin-bottom: -1px;\n  height: 88px;\n  line-height: 88px;\n}\n\n.main-page-list .list-item:hover {\n  background: #e6f7ff;\n}\n\n.main-page-list .icon-apartment {\n  -webkit-mask-image: url("+c+");\n  mask-image: url("+c+");\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.main-page-list .icon-file-markdown {\n  -webkit-mask-image: url("+g+");\n  mask-image: url("+g+");\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.main-page-list {\n  font-size: 21px;\n  list-style: none;\n  border-radius: 4px;\n  margin: 16px;\n}\n",""]),e.exports=t},120:function(e,t,i){"use strict";i.r(t),t.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9Imljb24iIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPgogIDxwYXRoIGQ9Ik05MDggNjQwSDgwNFY0ODhjMC00LjQtMy42LTgtOC04SDU0OHYtOTZoMTA4YzguOCAwIDE2LTcuMiAxNi0xNlY4MGMwLTguOC03LjItMTYtMTYtMTZIMzY4Yy04LjggMC0xNiA3LjItMTYgMTZ2Mjg4YzAgOC44IDcuMiAxNiAxNiAxNmgxMDh2OTZIMjI4Yy00LjQgMC04IDMuNi04IDh2MTUySDExNmMtOC44IDAtMTYgNy4yLTE2IDE2djI4OGMwIDguOCA3LjIgMTYgMTYgMTZoMjg4YzguOCAwIDE2LTcuMiAxNi0xNlY2NTZjMC04LjgtNy4yLTE2LTE2LTE2SDI5MnYtODhoNDQwdjg4SDYyMGMtOC44IDAtMTYgNy4yLTE2IDE2djI4OGMwIDguOCA3LjIgMTYgMTYgMTZoMjg4YzguOCAwIDE2LTcuMiAxNi0xNlY2NTZjMC04LjgtNy4yLTE2LTE2LTE2em0tNTY0IDc2djE2OEgxNzZWNzE2aDE2OHptODQtNDA4VjE0MGgxNjh2MTY4SDQyOHptNDIwIDU3Nkg2ODBWNzE2aDE2OHYxNjh6Ii8+Cjwvc3ZnPgo="},121:function(e,t,i){"use strict";i.r(t),t.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9Imljb24iIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPgogIDxwYXRoIGQ9Ik04NTQuNiAyODguNkw2MzkuNCA3My40Yy02LTYtMTQuMS05LjQtMjIuNi05LjRIMTkyYy0xNy43IDAtMzIgMTQuMy0zMiAzMnY4MzJjMCAxNy43IDE0LjMgMzIgMzIgMzJoNjQwYzE3LjcgMCAzMi0xNC4zIDMyLTMyVjMxMS4zYzAtOC41LTMuNC0xNi43LTkuNC0yMi43ek03OTAuMiAzMjZINjAyVjEzNy44TDc5MC4yIDMyNnptMS44IDU2MkgyMzJWMTM2aDMwMnYyMTZhNDIgNDIgMCAwIDAgNDIgNDJoMjE2djQ5NHpNNDI5IDQ4MS4yYy0xLjktNC40LTYuMi03LjItMTEtNy4yaC0zNWMtNi42IDAtMTIgNS40LTEyIDEydjI3MmMwIDYuNiA1LjQgMTIgMTIgMTJoMjcuMWM2LjYgMCAxMi01LjQgMTItMTJWNTgyLjFsNjYuOCAxNTAuMmExMiAxMiAwIDAgMCAxMSA3LjFINTI0YzQuNyAwIDktMi44IDExLTcuMWw2Ni44LTE1MC42Vjc1OGMwIDYuNiA1LjQgMTIgMTIgMTJINjQxYzYuNiAwIDEyLTUuNCAxMi0xMlY0ODZjMC02LjYtNS40LTEyLTEyLTEyaC0zNC43Yy00LjggMC05LjEgMi44LTExIDcuMmwtODMuMSAxOTEtODMuMi0xOTF6Ii8+Cjwvc3ZnPgo="},725:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(81),M=i(117),c=[{id:"32e89f38116080d6b7608cf2137f3c96",title:"音程表",url:"./assets/mapping/32e89f38116080d6b7608cf2137f3c96.json",createTime:1559522075108,modifyTime:1559523700429,type:"音乐",subType:"乐理",category:void 0},{id:"7a73d21c13f1eb55053d4af66e0d057b",title:"windows 下安装 rust",url:"./assets/mapping/7a73d21c13f1eb55053d4af66e0d057b.json",createTime:1559617097664,modifyTime:1559633639037,type:"Rust",subType:"安装",category:void 0}];describe("MainPageList",(function(){var e=jest.spyOn(console,"error").mockImplementation((function(){}));afterAll((function(){e.mockRestore()})),it("render correctly",(function(){var e=jest.fn(),t=jest.fn(),i=jest.fn(),n=Object(o.mount)(a.a.createElement(M.default,{siderSelectedKey:"all",dataSource:c,onDelete:e,onEdit:t,onListItemClick:i,isLocal:!0,siderOpenKey:"all"}));expect(n).toMatchSnapshot()})),it("events works correctly",(function(){var e=jest.fn(),t=jest.fn(),i=jest.fn(),n=jest.fn(),g=jest.fn(),l=Object(o.mount)(a.a.createElement(M.default,{siderSelectedKey:"all",dataSource:c,onDelete:e,onEdit:t,onHide:n,onListItemClick:i,isLocal:!0,siderOpenKey:"all"}));l.find("a").first().props().onClick({stopPropagation:g}),expect(t).toHaveBeenCalled(),expect(g).toHaveBeenCalled(),l.find("a").at(1).props().onClick({stopPropagation:g}),expect(n).toHaveBeenCalled(),l.find("a").at(2).props().onClick({stopPropagation:g}),expect(e).toHaveBeenCalled(),l.find(".list-item").first().simulate("click"),expect(i).toHaveBeenCalled()}))}))},82:function(e,t){},85:function(e,t){},86:function(e,t){},87:function(e,t){}}]);