/*! For license information please see 230.abee194c078476e5c180.js.LICENSE.txt */
(self.webpackChunkmemo=self.webpackChunkmemo||[]).push([[230,102],{107:(e,t,n)=>{e.exports=n(2390)},4403:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var l=s.apply(null,n);l&&e.push(l)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var o in n)r.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},5372:(e,t,n)=>{"use strict";var r=n(9567);function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,i,l){if(l!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:s};return n.PropTypes=n,n}},2652:(e,t,n)=>{e.exports=n(5372)()},9567:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7692:(e,t,n)=>{"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},1972:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}n.d(t,{Z:()=>r})},4541:(e,t,n)=>{"use strict";let r={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const s=/[&<>"']/,i=/[&<>"']/g,l=/[<>"']|&(?!#?\w+;)/,o=/[<>"']|&(?!#?\w+;)/g,a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c=e=>a[e];function h(e,t){if(t){if(s.test(e))return e.replace(i,c)}else if(l.test(e))return e.replace(o,c);return e}const p=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function u(e){return e.replace(p,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const g=/(^|[^\[])\^/g;function f(e,t){e="string"==typeof e?e:e.source,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(g,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n}const k=/[^\w:]/g,d=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function x(e,t,n){if(e){let e;try{e=decodeURIComponent(u(n)).replace(k,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!d.test(n)&&(n=function(e,t){m[" "+e]||(b.test(e)?m[" "+e]=e+"/":m[" "+e]=S(e,"/",!0));const n=-1===(e=m[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(w,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(y,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}const m={},b=/^[^:]+:\/*[^/]*$/,w=/^([^:]+:)[\s\S]*$/,y=/^([^:]+:\/*[^/]*)[\s\S]*$/,_={exec:function(){}};function $(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function z(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let r=!1,s=t;for(;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"})).split(/ \|/);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function S(e,t,n){const r=e.length;if(0===r)return"";let s=0;for(;s<r;){const i=e.charAt(r-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.slice(0,r-s)}function T(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function R(e,t){if(t<1)return"";let n="";for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}function A(e,t,n,r){const s=t.href,i=t.title?h(t.title):null,l=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){r.state.inLink=!0;const e={type:"link",raw:n,href:s,title:i,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,e}return{type:"image",raw:n,href:s,title:i,text:h(l)}}class I{constructor(e){this.options=e||r}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:S(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const r=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=S(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,r,s,i,l,o,a,c,h,p,u,g,f=t[1].trim();const k=f.length>1,d={type:"list",raw:"",ordered:k,start:k?+f.slice(0,-1):"",loose:!1,items:[]};f=k?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=k?f:"[*+-]");const x=new RegExp(`^( {0,3}${f})((?:[\t ][^\\n]*)?(?:\\n|$))`);for(;e&&(g=!1,t=x.exec(e))&&!this.rules.block.hr.test(e);){if(n=t[0],e=e.substring(n.length),c=t[2].split("\n",1)[0],h=e.split("\n",1)[0],this.options.pedantic?(i=2,u=c.trimLeft()):(i=t[2].search(/[^ ]/),i=i>4?1:i,u=c.slice(i),i+=t[1].length),o=!1,!c&&/^ *$/.test(h)&&(n+=h+"\n",e=e.substring(h.length+1),g=!0),!g){const t=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),r=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),s=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),l=new RegExp(`^ {0,${Math.min(3,i-1)}}#`);for(;e&&(p=e.split("\n",1)[0],c=p,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!s.test(c))&&!l.test(c)&&!t.test(c)&&!r.test(e);){if(c.search(/[^ ]/)>=i||!c.trim())u+="\n"+c.slice(i);else{if(o)break;u+="\n"+c}o||c.trim()||(o=!0),n+=p+"\n",e=e.substring(p.length+1)}}d.loose||(a?d.loose=!0:/\n *\n *$/.test(n)&&(a=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(u),r&&(s="[ ] "!==r[0],u=u.replace(/^\[[ xX]\] +/,""))),d.items.push({type:"list_item",raw:n,task:!!r,checked:s,loose:!1,text:u}),d.raw+=n}d.items[d.items.length-1].raw=n.trimRight(),d.items[d.items.length-1].text=u.trimRight(),d.raw=d.raw.trimRight();const m=d.items.length;for(l=0;l<m;l++){this.lexer.state.top=!1,d.items[l].tokens=this.lexer.blockTokens(d.items[l].text,[]);const e=d.items[l].tokens.filter((e=>"space"===e.type)),t=e.every((e=>{const t=e.raw.split("");let n=0;for(const e of t)if("\n"===e&&(n+=1),n>1)return!0;return!1}));!d.loose&&e.length&&t&&(d.loose=!0,d.items[l].loose=!0)}return d}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};if(this.options.sanitize){const n=this.options.sanitizer?this.options.sanitizer(t[0]):h(t[0]);e.type="paragraph",e.text=n,e.tokens=this.lexer.inline(n)}return e}}def(e){const t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:z(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r,s,i,l=e.align.length;for(n=0;n<l;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(l=e.rows.length,n=0;n<l;n++)e.rows[n]=z(e.rows[n],e.header.length).map((e=>({text:e})));for(l=e.header.length,r=0;r<l;r++)e.header[r].tokens=this.lexer.inline(e.header[r].text);for(l=e.rows.length,r=0;r<l;r++)for(i=e.rows[r],s=0;s<i.length;s++)i[s].tokens=this.lexer.inline(i[s].text);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:h(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):h(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=S(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,s=0;for(;s<n;s++)if("\\"===e[s])s++;else if(e[s]===t[0])r++;else if(e[s]===t[1]&&(r--,r<0))return s;return-1}(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),A(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return A(n,e,n[0],this.lexer)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r)return;if(r[3]&&n.match(/[\p{L}\p{N}]/u))return;const s=r[1]||r[2]||"";if(!s||s&&(""===n||this.rules.inline.punctuation.exec(n))){const n=r[0].length-1;let s,i,l=n,o=0;const a="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(a.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=a.exec(t));){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s)continue;if(i=s.length,r[3]||r[4]){l+=i;continue}if((r[5]||r[6])&&n%3&&!((n+i)%3)){o+=i;continue}if(l-=i,l>0)continue;if(i=Math.min(i,i+l+o),Math.min(n,i)%2){const t=e.slice(1,n+r.index+i);return{type:"em",raw:e.slice(0,n+r.index+i+1),text:t,tokens:this.lexer.inlineTokens(t)}}const t=e.slice(2,n+r.index+i-1);return{type:"strong",raw:e.slice(0,n+r.index+i+1),text:t,tokens:this.lexer.inlineTokens(t)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=h(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,r;return"@"===n[2]?(e=h(this.options.mangle?t(n[1]):n[1]),r="mailto:"+e):(e=h(n[1]),r=e),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])e=h(this.options.mangle?t(n[0]):n[0]),r="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=h(n[0]),r="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):h(n[0]):n[0]:h(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:e}}}}const v={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:_,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};v.def=f(v.def).replace("label",v._label).replace("title",v._title).getRegex(),v.bullet=/(?:[*+-]|\d{1,9}[.)])/,v.listItemStart=f(/^( *)(bull) */).replace("bull",v.bullet).getRegex(),v.list=f(v.list).replace(/bull/g,v.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+v.def.source+")").getRegex(),v._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",v._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,v.html=f(v.html,"i").replace("comment",v._comment).replace("tag",v._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),v.paragraph=f(v._paragraph).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex(),v.blockquote=f(v.blockquote).replace("paragraph",v.paragraph).getRegex(),v.normal=$({},v),v.gfm=$({},v.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),v.gfm.table=f(v.gfm.table).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex(),v.gfm.paragraph=f(v._paragraph).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",v.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex(),v.pedantic=$({},v.normal,{html:f("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",v._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:_,paragraph:f(v.normal._paragraph).replace("hr",v.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",v.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const O={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:_,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:_,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function E(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Z(e){let t,n,r="";const s=e.length;for(t=0;t<s;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}O._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",O.punctuation=f(O.punctuation).replace(/punctuation/g,O._punctuation).getRegex(),O.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,O.escapedEmSt=/\\\*|\\_/g,O._comment=f(v._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),O.emStrong.lDelim=f(O.emStrong.lDelim).replace(/punct/g,O._punctuation).getRegex(),O.emStrong.rDelimAst=f(O.emStrong.rDelimAst,"g").replace(/punct/g,O._punctuation).getRegex(),O.emStrong.rDelimUnd=f(O.emStrong.rDelimUnd,"g").replace(/punct/g,O._punctuation).getRegex(),O._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,O._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,O._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,O.autolink=f(O.autolink).replace("scheme",O._scheme).replace("email",O._email).getRegex(),O._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,O.tag=f(O.tag).replace("comment",O._comment).replace("attribute",O._attribute).getRegex(),O._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,O._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,O._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,O.link=f(O.link).replace("label",O._label).replace("href",O._href).replace("title",O._title).getRegex(),O.reflink=f(O.reflink).replace("label",O._label).replace("ref",v._label).getRegex(),O.nolink=f(O.nolink).replace("ref",v._label).getRegex(),O.reflinkSearch=f(O.reflinkSearch,"g").replace("reflink",O.reflink).replace("nolink",O.nolink).getRegex(),O.normal=$({},O),O.pedantic=$({},O.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:f(/^!?\[(label)\]\((.*?)\)/).replace("label",O._label).getRegex(),reflink:f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",O._label).getRegex()}),O.gfm=$({},O.normal,{escape:f(O.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),O.gfm.url=f(O.gfm.url,"i").replace("email",O.gfm._extended_email).getRegex(),O.breaks=$({},O.gfm,{br:f(O.br).replace("{2,}","*").getRegex(),text:f(O.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class q{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||r,this.options.tokenizer=this.options.tokenizer||new I,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:v.normal,inline:O.normal};this.options.pedantic?(t.block=v.pedantic,t.inline=O.pedantic):this.options.gfm&&(t.block=v.gfm,this.options.breaks?t.inline=O.breaks:t.inline=O.gfm),this.tokenizer.rules=t}static get rules(){return{block:v,inline:O}}static lex(e,t){return new q(t).lex(e)}static lexInline(e,t){return new q(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let n,r,s,i;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,((e,t,n)=>t+"    ".repeat(n.length)));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?t.push(n):(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(r.raw+="\n"+n.raw,r.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else{if(s=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startBlock.forEach((function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s)))r=t[t.length-1],i&&"paragraph"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),i=s.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,r,s,i,l,o,a=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(a));)e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,i.index)+"["+R("a",i[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(a));)a=a.slice(0,i.index)+"["+R("a",i[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.escapedEmSt.exec(a));)a=a.slice(0,i.index)+"++"+a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(l||(o=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.emStrong(e,a,o))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.autolink(e,Z))e=e.substring(n.raw.length),t.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,Z))){if(s=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startInline.forEach((function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(s,E))e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(o=n.raw.slice(-1)),l=!0,r=t[t.length-1],r&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(n.raw.length),t.push(n);return t}}class C{constructor(e){this.options=e||r}code(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",r?'<pre><code class="'+this.options.langPrefix+h(r,!0)+'">'+(n?e:h(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:h(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e){return e}heading(e,t,n,r){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+r.slug(n)}">${e}</h${t}>\n`:`<h${t}>${e}</h${t}>\n`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(null===(e=x(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+h(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){if(null===(e=x(this.options.sanitize,this.options.baseUrl,e)))return n;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=this.options.xhtml?"/>":">",r}text(e){return e}}class L{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class P{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do{r++,n=e+"-"+r}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class D{constructor(e){this.options=e||r,this.options.renderer=this.options.renderer||new C,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new L,this.slugger=new P}static parse(e,t){return new D(t).parse(e)}static parseInline(e,t){return new D(t).parseInline(e)}parse(e,t=!0){let n,r,s,i,l,o,a,c,h,p,g,f,k,d,x,m,b,w,y,_="";const $=e.length;for(n=0;n<$;n++)if(p=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(y=this.options.extensions.renderers[p.type].call({parser:this},p),!1!==y||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type)))_+=y||"";else switch(p.type){case"space":continue;case"hr":_+=this.renderer.hr();continue;case"heading":_+=this.renderer.heading(this.parseInline(p.tokens),p.depth,u(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":_+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(c="",a="",i=p.header.length,r=0;r<i;r++)a+=this.renderer.tablecell(this.parseInline(p.header[r].tokens),{header:!0,align:p.align[r]});for(c+=this.renderer.tablerow(a),h="",i=p.rows.length,r=0;r<i;r++){for(o=p.rows[r],a="",l=o.length,s=0;s<l;s++)a+=this.renderer.tablecell(this.parseInline(o[s].tokens),{header:!1,align:p.align[s]});h+=this.renderer.tablerow(a)}_+=this.renderer.table(c,h);continue;case"blockquote":h=this.parse(p.tokens),_+=this.renderer.blockquote(h);continue;case"list":for(g=p.ordered,f=p.start,k=p.loose,i=p.items.length,h="",r=0;r<i;r++)x=p.items[r],m=x.checked,b=x.task,d="",x.task&&(w=this.renderer.checkbox(m),k?x.tokens.length>0&&"paragraph"===x.tokens[0].type?(x.tokens[0].text=w+" "+x.tokens[0].text,x.tokens[0].tokens&&x.tokens[0].tokens.length>0&&"text"===x.tokens[0].tokens[0].type&&(x.tokens[0].tokens[0].text=w+" "+x.tokens[0].tokens[0].text)):x.tokens.unshift({type:"text",text:w}):d+=w),d+=this.parse(x.tokens,k),h+=this.renderer.listitem(d,b,m);_+=this.renderer.list(h,g,f);continue;case"html":_+=this.renderer.html(p.text);continue;case"paragraph":_+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":for(h=p.tokens?this.parseInline(p.tokens):p.text;n+1<$&&"text"===e[n+1].type;)p=e[++n],h+="\n"+(p.tokens?this.parseInline(p.tokens):p.text);_+=t?this.renderer.paragraph(h):h;continue;default:{const e='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return _}parseInline(e,t){t=t||this.renderer;let n,r,s,i="";const l=e.length;for(n=0;n<l;n++)if(r=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(s=this.options.extensions.renderers[r.type].call({parser:this},r),!1!==s||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)))i+=s||"";else switch(r.type){case"escape":case"text":i+=t.text(r.text);break;case"html":i+=t.html(r.text);break;case"link":i+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":i+=t.image(r.href,r.title,r.text);break;case"strong":i+=t.strong(this.parseInline(r.tokens,t));break;case"em":i+=t.em(this.parseInline(r.tokens,t));break;case"codespan":i+=t.codespan(r.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(r.tokens,t));break;default:{const e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return i}}function j(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),T(t=$({},j.defaults,t||{})),n){const r=t.highlight;let s;try{s=q.lex(e,t)}catch(e){return n(e)}const i=function(e){let i;if(!e)try{t.walkTokens&&j.walkTokens(s,t.walkTokens),i=D.parse(s,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,i)};if(!r||r.length<3)return i();if(delete t.highlight,!s.length)return i();let l=0;return j.walkTokens(s,(function(e){"code"===e.type&&(l++,setTimeout((()=>{r(e.text,e.lang,(function(t,n){if(t)return i(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),l--,0===l&&i()}))}),0))})),void(0===l&&i())}function r(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+h(e.message+"",!0)+"</pre>";throw e}try{const n=q.lex(e,t);if(t.walkTokens){if(t.async)return Promise.all(j.walkTokens(n,t.walkTokens)).then((()=>D.parse(n,t))).catch(r);j.walkTokens(n,t.walkTokens)}return D.parse(n,t)}catch(e){r(e)}}j.options=j.setOptions=function(e){var t;return $(j.defaults,e),t=j.defaults,r=t,j},j.getDefaults=function(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}},j.defaults=r,j.use=function(...e){const t=$({},...e),n=j.defaults.extensions||{renderers:{},childTokens:{}};let r;e.forEach((e=>{if(e.extensions&&(r=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=n.renderers?n.renderers[e.name]:null;n.renderers[e.name]=t?function(...n){let r=e.renderer.apply(this,n);return!1===r&&(r=t.apply(this,n)),r}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");n[e.level]?n[e.level].unshift(e.tokenizer):n[e.level]=[e.tokenizer],e.start&&("block"===e.level?n.startBlock?n.startBlock.push(e.start):n.startBlock=[e.start]:"inline"===e.level&&(n.startInline?n.startInline.push(e.start):n.startInline=[e.start]))}e.childTokens&&(n.childTokens[e.name]=e.childTokens)}))),e.renderer){const n=j.defaults.renderer||new C;for(const t in e.renderer){const r=n[t];n[t]=(...s)=>{let i=e.renderer[t].apply(n,s);return!1===i&&(i=r.apply(n,s)),i}}t.renderer=n}if(e.tokenizer){const n=j.defaults.tokenizer||new I;for(const t in e.tokenizer){const r=n[t];n[t]=(...s)=>{let i=e.tokenizer[t].apply(n,s);return!1===i&&(i=r.apply(n,s)),i}}t.tokenizer=n}if(e.walkTokens){const n=j.defaults.walkTokens;t.walkTokens=function(t){let r=[];return r.push(e.walkTokens.call(this,t)),n&&(r=r.concat(n.call(this,t))),r}}r&&(t.extensions=n),j.setOptions(t)}))},j.walkTokens=function(e,t){let n=[];for(const r of e)switch(n=n.concat(t.call(j,r)),r.type){case"table":for(const e of r.header)n=n.concat(j.walkTokens(e.tokens,t));for(const e of r.rows)for(const r of e)n=n.concat(j.walkTokens(r.tokens,t));break;case"list":n=n.concat(j.walkTokens(r.items,t));break;default:j.defaults.extensions&&j.defaults.extensions.childTokens&&j.defaults.extensions.childTokens[r.type]?j.defaults.extensions.childTokens[r.type].forEach((function(e){n=n.concat(j.walkTokens(r[e],t))})):r.tokens&&(n=n.concat(j.walkTokens(r.tokens,t)))}return n},j.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");T(t=$({},j.defaults,t||{}));try{const n=q.lexInline(e,t);return t.walkTokens&&j.walkTokens(n,t.walkTokens),D.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+h(e.message+"",!0)+"</pre>";throw e}},j.Parser=D,j.parser=D.parse,j.Renderer=C,j.TextRenderer=L,j.Lexer=q,j.lexer=q.lex,j.Tokenizer=I,j.Slugger=P,j.parse=j,j.options,j.setOptions,j.use,j.walkTokens,j.parseInline,D.parse,q.lex}}]);