(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1496:function(e,t,a){"use strict";a.r(t);var r=a(79),n=a.n(r),l=a(2),i=a.n(l),o=a(0),u=a.n(o),c=a(88),s=a.n(c),m=a(1473),h=a(1474),g=a(1497),p=a(1475),f=a(1478),d=a(1480),v=a(1481),E=a(1483),b=a(1484),y=a(1479),w=a(1491),x=a(1499),C=a(1487),O=a(1477),j=a(1488),S=a(1314),k=a.n(S),T=a(66),M=a(70),N=a(1493),I=Object(T.a)((function(e){return Object(M.a)({container:{display:"flex",flexWrap:"wrap"},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},formControl:{margin:e.spacing(1)},title:{flexGrow:1}})})),W=function(e){var t=e.onSubmit,a=e.formData,r=e.formOptions,n=e.onChange,l=e.onSpecificationInputBlur,i=I(),o=function(e,t){n({text:e.target.value,value:e.target.value},"input",t)},c=function(e){var t=e.key,a=e.error,r=e.inputLabel,n=e.inputValue,c=e.helperText,s=e.xs;return u.a.createElement(m.a,{item:!0,xs:s,key:t},u.a.createElement(h.a,{required:!0,className:i.formControl,error:a},u.a.createElement(g.a,null,r),u.a.createElement(p.a,{value:n,type:"number",onChange:function(e){return o(e,t)},onBlur:l,endAdornment:u.a.createElement(f.a,{position:"end"},"mm")}),u.a.createElement(d.a,null,c)))},S=r.materialId.filter((function(e){return"0"===a.materialType?!a.length||a.length==e["长"]:"1"===a.materialType?a.length&&a.width?a.length==e["长"]&&a.width==e["宽"]:a.width?a.width==e["宽"]:!a.length||a.length==e["长"]:void 0}));return u.a.createElement("div",{className:i.container},u.a.createElement(v.a,{position:"static"},u.a.createElement(E.a,null,u.a.createElement(b.a,{edge:"start",className:i.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return n({text:"",value:""},"type")}},u.a.createElement(k.a,null)),u.a.createElement(y.a,{variant:"h6",className:i.title},a.type?"出库":"入库"))),u.a.createElement(h.a,{required:!0,fullWidth:!0,className:i.formControl,error:a.materialTypeError},u.a.createElement(g.a,null,"类别"),u.a.createElement(w.a,{value:a.materialType,onChange:function(e){n({text:"",value:e.target.value},"select")}},r.materialType.map((function(e){var t=e.text,a=e.value;return u.a.createElement(x.a,{value:a,key:t+"-"+a},t)})))),function(){switch(a.materialType){case"0":return u.a.createElement(u.a.Fragment,null,c({key:"length",error:a.lengthError,inputLabel:"截面直径",inputValue:a.length,helperText:a.lengthMessage,xs:6}));case"1":return u.a.createElement(u.a.Fragment,null,c({key:"length",error:a.lengthError,inputLabel:"截面长度",inputValue:a.length,helperText:a.lengthMessage,xs:6}),c({key:"width",error:a.widthError,inputLabel:"截面宽度",inputValue:a.width,helperText:a.widthMessage,xs:6}));default:return null}}(),u.a.createElement(h.a,{fullWidth:!0,error:a.materialTypeError,className:i.formControl},u.a.createElement(N.a,{options:S,getOptionLabel:function(e){return e["材质"]},value:a.materialId,onChange:function(e,t){n(t,"autoComplete")},id:"material-id","aria-controls":"material-id",renderInput:function(e){return u.a.createElement(C.a,s()({},e,{fullWidth:!0,margin:"normal",required:!0,label:"材质",error:a.materialTypeError}))}}),u.a.createElement(d.a,null,a.materialTypeMessage)),u.a.createElement(m.a,{item:!0,xs:6,key:"weight"},u.a.createElement(h.a,{required:!0,className:i.formControl,error:a.weightError},u.a.createElement(g.a,null,"实际重量"),u.a.createElement(p.a,{value:a.weight,onChange:function(e){return o(e,"weight")},type:"number",endAdornment:u.a.createElement(f.a,{position:"end"},"kg")}),u.a.createElement(d.a,null,a.weightMessage))),c({key:"height",error:a.heightError,inputLabel:"高度",inputValue:a.height,helperText:a.heightMessage,xs:6}),u.a.createElement(m.a,{item:!0,xs:6},u.a.createElement(h.a,{required:!0,error:a.materialCostError,className:i.formControl},u.a.createElement(g.a,null,"单价"),u.a.createElement(p.a,{onChange:function(e){return o(e,"materialCost")},value:a.materialCost,type:"number",endAdornment:u.a.createElement(f.a,{position:"end"},"元/kg")}),u.a.createElement(d.a,null,a.materialCostMessage))),u.a.createElement(m.a,{item:!0,xs:6},u.a.createElement(h.a,{className:i.formControl,required:!0,error:a.freightError},u.a.createElement(g.a,null,"运费"),u.a.createElement(p.a,{onChange:function(e){return o(e,"freight")},value:a.freight,type:"number",endAdornment:u.a.createElement(f.a,{position:"end"},"元")}),u.a.createElement(d.a,null,a.freightMessage))),u.a.createElement(m.a,{item:!0,xs:6},u.a.createElement(h.a,{className:i.formControl},u.a.createElement(g.a,null,"其他费用"),u.a.createElement(p.a,{onChange:function(e){return o(e,"extraCost")},value:a.extraCost,type:"number",endAdornment:u.a.createElement(f.a,{position:"end"},"元")}))),("0"===a.materialType||"1"===a.materialType)&&u.a.createElement(m.a,{item:!0,xs:6,key:"pre-weight"},u.a.createElement(h.a,{className:i.formControl},u.a.createElement(g.a,null,"预估重量"),u.a.createElement(p.a,{value:a.predictWeight,readOnly:!0,type:"number",endAdornment:u.a.createElement(f.a,{position:"end"},"kg")}),u.a.createElement(d.a,null,"计算公式：体积 x 密度"))),u.a.createElement(h.a,{fullWidth:!0,className:i.formControl},u.a.createElement(O.a,{placeholder:"备注",rows:8,onChange:function(e){return o(e,"description")},value:a.description})),u.a.createElement(h.a,{fullWidth:!0,className:i.formControl},u.a.createElement(j.a,{variant:"contained",color:"primary",onClick:t},"提交")))},q=function(e,t,a,r){return new(a||(a=Promise))((function(n,l){function i(e){try{u(r.next(e))}catch(e){l(e)}}function o(e){try{u(r.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,o)}u((r=r.apply(e,t||[])).next())}))};t.default=function(){var e=Object(o.useState)([]),t=i()(e,2),a=t[0],r=t[1],l=Object(o.useState)([]),c=i()(l,2),s=c[0],m=c[1],h=Object(o.useState)(0),g=i()(h,2),p=g[0],f=g[1],d=Object(o.useState)(),v=i()(d,2),E=v[0],b=v[1],y=Object(o.useState)(!1),w=i()(y,2),x=w[0],C=w[1],O=Object(o.useState)(""),j=i()(O,2),S=j[0],k=j[1],T=Object(o.useState)(),M=i()(T,2),N=M[0],I=M[1],A=Object(o.useState)(!1),L=i()(A,2),B=L[0],V=L[1],F=Object(o.useState)(""),D=i()(F,2),G=D[0],J=D[1],P=Object(o.useState)(""),R=i()(P,2),z=R[0],H=R[1],K=Object(o.useState)(!1),Q=i()(K,2),U=Q[0],X=Q[1],Y=Object(o.useState)(""),Z=i()(Y,2),$=Z[0],_=Z[1],ee=Object(o.useState)(),te=i()(ee,2),ae=te[0],re=te[1],ne=Object(o.useState)(!1),le=i()(ne,2),ie=le[0],oe=le[1],ue=Object(o.useState)(""),ce=i()(ue,2),se=ce[0],me=ce[1],he=Object(o.useState)(),ge=i()(he,2),pe=ge[0],fe=ge[1],de=Object(o.useState)(!1),ve=i()(de,2),Ee=ve[0],be=ve[1],ye=Object(o.useState)(""),we=i()(ye,2),xe=we[0],Ce=we[1],Oe=Object(o.useState)(),je=i()(Oe,2),Se=je[0],ke=je[1],Te=Object(o.useState)(!1),Me=i()(Te,2),Ne=Me[0],Ie=Me[1],We=Object(o.useState)(""),qe=i()(We,2),Ae=qe[0],Le=qe[1],Be=Object(o.useState)(),Ve=i()(Be,2),Fe=Ve[0],De=Ve[1],Ge=Object(o.useState)(!1),Je=i()(Ge,2),Pe=Je[0],Re=Je[1],ze=Object(o.useState)(""),He=i()(ze,2),Ke=He[0],Qe=He[1],Ue=Object(o.useState)(0),Xe=i()(Ue,2),Ye=Xe[0],Ze=Xe[1],$e=Object(o.useState)(""),_e=i()($e,2),et=_e[0],tt=_e[1],at=Object(o.useState)(!1),rt=i()(at,2),nt=rt[0],lt=rt[1],it=Object(o.useState)(""),ot=i()(it,2),ut=ot[0],ct=ot[1],st=Object(o.useState)(""),mt=i()(st,2),ht=mt[0],gt=mt[1],pt=Object(o.useState)(""),ft=i()(pt,2),dt=ft[0],vt=ft[1];Object(o.useEffect)((function(){q(void 0,void 0,void 0,n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/toy/get/get-material-type?sign=1");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a);case 7:case"end":return e.stop()}}),e)}))),f(0)}),[]);var Et=function(){var e=!1;return""===E&&(C(!0),k("该项不能为空"),e=!0),""===z&&(X(!0),_("该项不能为空"),e=!0),ae||(oe(!0),me("该项不能为空"),e=!0),pe||(be(!0),Ce("该项不能为空"),e=!0),Se||(Ie(!0),Le("该项不能为空"),e=!0),Fe||(Re(!0),Qe("该项不能为空"),e=!0),et||(lt(!0),ct("该项不能为空"),e=!0),{hasError:e,params:{materialType:E,materialCost:z,type:p,length:ae,width:pe,height:Se,weight:Fe,freight:et,description:dt,extraCost:ht,materialId:N}}},bt=function(e){return q(void 0,void 0,void 0,n.a.mark((function t(){var a,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/toy/get/get-detail?materialType="+e);case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,m(r);case 7:case"end":return t.stop()}}),t)})))};return u.a.createElement(W,{onSubmit:function(){return q(void 0,void 0,void 0,n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Et(),a=t.hasError,r=t.params,console.log(r),!a){e.next=4;break}return e.abrupt("return");case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))},formData:{materialType:E,materialTypeError:x,materialTypeMessage:S,materialId:N,materialIdError:B,materialIdMessage:G,materialCost:z,materialCostError:U,materialCostMessage:$,type:p,length:ae,lengthError:ie,lengthMessage:se,width:pe,widthError:Ee,widthMessage:xe,height:Se,heightError:Ne,heightMessage:Ae,weight:Fe,weightError:Pe,weightMessage:Ke,predictWeight:Ye,freight:et,freightError:nt,freightMessage:ut,extraCost:ht,description:dt},formOptions:{materialType:a,materialId:s},onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{value:"",text:""},t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,r={materialCost:function(){H(e.value),X(""===e.value),_(""===e.value?"该项不能为空":"")},freight:function(){tt(e.value),lt(""===e.value),ct(""===e.value?"该项不能为空":"")},extraCost:function(){gt(e.value)},description:function(){vt(e.value)},length:function(){re(e.value),oe(!e.value),me(e.value?"":"该项不能为空")},width:function(){fe(e.value),be(!e.value),Ce(e.value?"":"该项不能为空")},height:function(){ke(e.value),Ie(!e.value),Le(e.value?"":"该项不能为空")},weight:function(){De(e.value),Re(!e.value),Qe(e.value?"":"该项不能为空")}};switch(t){case"input":r[a]();break;case"select":""!==e.value&&bt(e.value),b(e.value),C(""===e.value),k(""===e.value?"该项不能为空":"");break;case"type":f(0===p?1:0);break;case"autoComplete":if(null===e)return void I("");I(e.id),V(""===e.id),J(""===e.id?"该项不能为空":"")}},onSpecificationInputBlur:function(){!function(e,t,a,r){var n=e/2/10,l=t/10,i=a/10,o=function(e,t,a){var r=Math.PI*e*e;return t&&(r=e*t),parseFloat((r*a*7.874/1e3).toFixed(2))};0===r&&e&&a?Ze(o(n,l,i)):1===r&&e&&t&&a&&Ze(o(n,l,i))}(ae,pe,Se,p)}})}}}]);