"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1736],{36683:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(1413),o=n(91),a=n(62435),c=n(4942),l=n(94184),i=n.n(l),u=n(63017),s=n(41755),f=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],m=a.forwardRef((function(e,t){var n=e.className,l=e.component,m=e.viewBox,p=e.spin,d=e.rotate,v=e.tabIndex,y=e.onClick,b=e.children,h=(0,o.Z)(e,f);(0,s.Kp)(Boolean(l||b),"Should have `component` prop or `children`."),(0,s.C3)();var g=a.useContext(u.Z),E=g.prefixCls,Z=void 0===E?"anticon":E,x=g.rootClassName,N=i()(x,Z,n),w=i()((0,c.Z)({},"".concat(Z,"-spin"),!!p)),C=d?{msTransform:"rotate(".concat(d,"deg)"),transform:"rotate(".concat(d,"deg)")}:void 0,O=(0,r.Z)((0,r.Z)({},s.vD),{},{className:w,style:C,viewBox:m});m||delete O.viewBox;var S=v;return void 0===S&&y&&(S=-1),a.createElement("span",(0,r.Z)((0,r.Z)({role:"img"},h),{},{ref:t,tabIndex:S,onClick:y,className:N}),l?a.createElement(l,(0,r.Z)({},O),b):b?((0,s.Kp)(Boolean(m)||1===a.Children.count(b)&&a.isValidElement(b)&&"use"===a.Children.only(b).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),a.createElement("svg",(0,r.Z)((0,r.Z)({},O),{},{viewBox:m}),b)):null)}));m.displayName="AntdIcon";var p=m,d=["type","children"],v=new Set;function y(e){return Boolean("string"==typeof e&&e.length&&!v.has(e))}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e[t];if(y(n)){var r=document.createElement("script");r.setAttribute("src",n),r.setAttribute("data-namespace",n),e.length>t+1&&(r.onload=function(){b(e,t+1)},r.onerror=function(){b(e,t+1)}),v.add(n),document.body.appendChild(r)}}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scriptUrl,n=e.extraCommonProps,c=void 0===n?{}:n;t&&"undefined"!=typeof document&&"undefined"!=typeof window&&"function"==typeof document.createElement&&(Array.isArray(t)?b(t.reverse()):b([t]));var l=a.forwardRef((function(e,t){var n=e.type,l=e.children,i=(0,o.Z)(e,d),u=null;return e.type&&(u=a.createElement("use",{xlinkHref:"#".concat(n)})),l&&(u=l),a.createElement(p,(0,r.Z)((0,r.Z)((0,r.Z)({},c),i),{},{ref:t}),u)}));return l.displayName="Iconfont",l}},11698:function(e,t,n){n.d(t,{w:function(){return r}});var r=(0,n(62435).createContext)({})},81736:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var r=n(62435),o=n(96974),a=n(97183),c=n(44057),l=n(85956),i=n(68791),u=n(45898),s=n(23240),f=n(94184),m=n.n(f),p={button:"ncQo0JB1pJEd3mDsmCk7",hidden:"nGwRnowWCDs7XZtu9LMg",label:"fmYEWi3aLuMRsZI1o_Ol",title:"D08VzPpgn40iEjlhtU7s",next:"YgXjlzm7Pw0COGDTofEH"},d=function(e){var t=e.post,n=e.type;if(!t)return r.createElement("div",{className:m()(p.button,p.hidden)});var o=t.slug,a=t.title;return o&&a?r.createElement(l.rU,{to:o,className:m()(p.button,p[n])},r.createElement("div",{className:p.label},r.createElement(l._H,{id:"prev"===n?"上一篇":"下一篇"})),r.createElement("div",{className:p.title},a)):null},v=n(62635),y={},b=function(e){return r.createElement(a.Z.Content,{className:y.article},r.createElement("article",e))},h=n(15771),g=n(90991),E=n(84477),Z=n(19944),x=n(113),N=n(87462),w=n(4942),C=n(74902),O=n(97685),S=n(64019),k=n(53124),j=n(66367),I=n(58375),P=r.createContext(void 0);function T(){return window}function A(e,t){if(!e.getClientRects().length)return 0;var n=e.getBoundingClientRect();return n.width||n.height?t===window?(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top-t.getBoundingClientRect().top:n.top}var R=/#([\S ]+)$/,Y=function(e){var t,n=e.anchorPrefixCls,o=e.className,a=void 0===o?"":o,c=e.style,l=e.offsetTop,i=e.affix,u=void 0===i||i,s=e.showInkInFixed,f=void 0!==s&&s,p=e.children,d=e.bounds,v=e.targetOffset,y=e.onClick,b=e.onChange,g=e.getContainer,E=e.getCurrentAnchor,Z=r.useState([]),x=(0,O.Z)(Z,2),Y=x[0],B=x[1],L=r.useState(null),U=(0,O.Z)(L,2),_=U[0],z=U[1],D=r.useRef(_),M=r.useRef(null),H=r.useRef(null),F=r.useRef(!1),V=r.useContext(k.E_),W=V.direction,X=V.getTargetContainer,G=null!==(t=null!=g?g:X)&&void 0!==t?t:T,J=JSON.stringify(Y),K=r.useCallback((function(e){Y.includes(e)||B((function(t){return[].concat((0,C.Z)(t),[e])}))}),[J]),Q=r.useCallback((function(e){Y.includes(e)&&B((function(t){return t.filter((function(t){return t!==e}))}))}),[J]),$=function(e){if(D.current!==e){var t="function"==typeof E?E(e):e;z(t),D.current=t,null==b||b(e)}},q=r.useCallback((function(){if(!F.current){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[],o=G();if(e.forEach((function(e){var a=R.exec(null==e?void 0:e.toString());if(a){var c=document.getElementById(a[1]);if(c){var l=A(c,o);l<t+n&&r.push({link:e,top:l})}}})),r.length){return r.reduce((function(e,t){return t.top>e.top?t:e})).link}return""}(Y,void 0!==v?v:l||0,d);$(e)}}),[J,v,l]),ee=r.useCallback((function(e){$(e);var t=G(),n=(0,j.Z)(t,!0),r=R.exec(e);if(r){var o=document.getElementById(r[1]);if(o){var a=n+A(o,t);a-=void 0!==v?v:l||0,F.current=!0,(0,I.Z)(a,{getContainer:G,callback:function(){F.current=!1}})}}}),[v,l]),te=m()((0,w.Z)({},"".concat(n,"-ink-ball-visible"),_),"".concat(n,"-ink-ball")),ne=m()("".concat(n,"-wrapper"),(0,w.Z)({},"".concat(n,"-rtl"),"rtl"===W),a),re=m()(n,(0,w.Z)({},"".concat(n,"-fixed"),!u&&!f)),oe=(0,N.Z)({maxHeight:l?"calc(100vh - ".concat(l,"px)"):"100vh"},c),ae=r.createElement("div",{ref:M,className:ne,style:oe},r.createElement("div",{className:re},r.createElement("div",{className:"".concat(n,"-ink")},r.createElement("span",{className:te,ref:H})),p));r.useEffect((function(){var e=G(),t=(0,S.Z)(e,"scroll",q);return q(),function(){null==t||t.remove()}}),[J]),r.useEffect((function(){"function"==typeof E&&$(E(D.current||""))}),[E]),r.useEffect((function(){!function(){var e,t=null===(e=M.current)||void 0===e?void 0:e.querySelector(".".concat(n,"-link-title-active"));t&&H.current&&(H.current.style.top="".concat(t.offsetTop+t.clientHeight/2-4.5,"px"))}()}),[E,J,_]);var ce=r.useMemo((function(){return{registerLink:K,unregisterLink:Q,scrollTo:ee,activeLink:_,onClick:y}}),[_,y,ee]);return r.createElement(P.Provider,{value:ce},u?r.createElement(h.Z,{offsetTop:l,target:G},ae):ae)},B=function(e){var t=e.href,n=void 0===t?"#":t,o=e.title,a=e.prefixCls,c=e.children,l=e.className,i=e.target,u=r.useContext(P)||{},s=u.registerLink,f=u.unregisterLink,p=u.scrollTo,d=u.onClick,v=u.activeLink;r.useEffect((function(){return null==s||s(n),function(){null==f||f(n)}}),[n,s,f]);var y=function(e){null==d||d(e,{title:o,href:n}),null==p||p(n)};return r.createElement(k.C,null,(function(e){var t=(0,e.getPrefixCls)("anchor",a),u=v===n,s=m()("".concat(t,"-link"),l,(0,w.Z)({},"".concat(t,"-link-active"),u)),f=m()("".concat(t,"-link-title"),(0,w.Z)({},"".concat(t,"-link-title-active"),u));return r.createElement("div",{className:s},r.createElement("a",{className:f,href:n,title:"string"==typeof o?o:"",target:i,onClick:y},o),c)}))},L=function(e){var t=e.prefixCls,n=(0,r.useContext(k.E_).getPrefixCls)("anchor",t);return r.createElement(Y,(0,N.Z)({},e,{anchorPrefixCls:n}))};L.Link=B;var U=L,_=n(90980),z=n(36683);function D(e,t){return[e,t].join("-").replace(/\s/g,"")}var M="XOBwycXUwfIkVzY1pEcS",H="T4GEFebs3g8YOid0x1WP",F="jvyuEa1IMUYz6QYdQz8J",V="j_lVBXjD1Zoetgjpd_bN",W="UtVe7vVYEykNfHBTSp_e",X="cRzD_TvGZoAfHovAo4Rh",G="xmfECgHVedYAt3TiQg3M",J="mnFzgAhr4_YhXIP2f1J3",K="KynRwLTHLzs40xw0ZsgZ",Q="NixFYMoANcTHWwQeLGLj",$="v90vC3gZt54Nwza4KgSs",q="RmkpYWHI9d4RYQiIr3CY",ee="X6AtY7FPSlY8cpJZ7YgY",te="UoWLG9mnhIsRxu4NYc4v",ne="FWIxiPRIbgg0ov3PIPmJ",re="mIZjxLtB6g6XFUD2qT8I",oe="O_LWZof2U8meFcNxprwL";function ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,l=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var le=(0,z.Z)({scriptUrl:"//at.alicdn.com/t/font_470089_1lnym745udm.js"}),ie=function(e){var t=e.exampleTopics,n=ae((0,r.useState)([]),2),o=n[0],a=(n[1],(0,l.bU)()),c=ae((0,r.useState)([]),2),i=c[0],u=c[1];return r.createElement(U,{className:re},r.createElement(_.Z,{mode:"inline",selectedKeys:o,style:{height:"100vh"},openKeys:i,onOpenChange:function(e){return u(e)},forceSubMenuRender:!0},t.map((function(e){return r.createElement(_.Z.SubMenu,{key:e.id,title:r.createElement("div",null,r.createElement(le,{className:X,type:"icon-".concat(e.icon)}),r.createElement("span",null,e.title[a.id]))},e.examples.map((function(t){return r.createElement(_.Z.Item,{key:t.id},r.createElement(U.Link,{href:"#".concat(D(e.id,t.id)),title:r.createElement("div",null,r.createElement("span",null,t.title[a.id]))}))})))}))))};function ue(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,l=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return se(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var fe=function(e){var t=e.exampleTopics,n=(0,x.Z)("(min-width: 767.99px)",!0),o=ue((0,r.useState)(!1),2),c=o[0],l=o[1];return r.createElement(h.Z,{offsetTop:0,className:W,style:{height:n?"100vh":"inherit"}},n?r.createElement("div",null,r.createElement(a.Z.Sider,{width:"auto",theme:"light",className:V},r.createElement(ie,{exampleTopics:t}))):r.createElement(g.Z,{handler:c?r.createElement(E.Z,{className:J}):r.createElement(Z.Z,{className:J}),wrapperClassName:G,onChange:function(e){return l(!!e)},width:280},r.createElement(ie,{exampleTopics:t})))},me=n(63922),pe=n(50927),de=function(e){var t=e.demo,n=e.topicId,o=e.exampleId,a=(0,l.bU)(),c=function(){var e=t.screenshot||"https://gw.alipayobjects.com/os/s/prod/antv/assets/image/screenshot-placeholder-b8e70.png";return r.createElement(r.Fragment,null,r.createElement("div",{className:m()("demo-card-screenshot",te),style:{backgroundImage:'url("'.concat(e,'")')}}))};return r.createElement(l.rU,{className:ee,to:"".concat("zh"==a.id?"":"/en","/examples/").concat(n,"/").concat(o,"/#").concat(t.id)},t.isNew?r.createElement(me.Z.Ribbon,{text:"new",className:ne},c()):c(),r.createElement("h4",null,(0,pe.ic)(t.title)))};function ve(e){return ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ve(e)}function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){he(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function he(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==ve(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==ve(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===ve(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ge=function(e){var t=e.exampleTopics,n=(0,l.bU)(),o=t.reduce((function(e,t){var n=t.examples.map((function(e){return be(be({},e),{},{targetTopic:t})}));return e.concat(n)}),[]);return r.createElement("div",{className:K},r.createElement("div",{className:Q},o.map((function(e,t){return r.createElement("div",{key:t},r.createElement("h2",{id:D(e.targetTopic.id,e.id)},e.title[n.id]),r.createElement("ul",{className:$},e.demos.map((function(t){return r.createElement("li",{className:q,key:t.id,title:t.title[n.id]},r.createElement(de,{demo:t,topicId:e.targetTopic.id,exampleId:e.id}))}))))}))))},Ee=n(11698);function Ze(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,l=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return xe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ne=function(){var e=(0,o.s0)(),t=(0,l.bU)(),n=(0,r.useContext)(Ee.w).meta.exampleTopics,f=Ze((0,pe.tF)(),2),m=f[0],p=f[1];return(0,r.useEffect)((function(){var t=window.location.pathname;t.includes("/zh/")&&e(t.replace("/zh/","/"))}),[]),r.createElement(r.Fragment,null,r.createElement(i.H,{title:{zh:"所有图表",en:"Gallery"}[t.id]}),r.createElement(u.h,{isHomePage:!1}),r.createElement(a.Z,{hasSider:!0,className:H},r.createElement(fe,{exampleTopics:n}),r.createElement(b,{className:M},r.createElement("div",{className:F,style:{width:"100%"}},r.createElement(ge,{exampleTopics:n}),r.createElement("div",null,r.createElement(d,{type:"prev",post:m}),r.createElement(d,{type:"next",post:p})),r.createElement(c.Z,{style:{right:32}},r.createElement("div",{className:oe},r.createElement(v.Z,null)))))),r.createElement(s.$,{isDynamicFooter:!0}))}},63922:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(4942),o=n(71002),a=n(87462),c=n(94184),l=n.n(c),i=n(82225),u=n(62435),s=n(53124),f=n(96159),m=n(98787);function p(e){return m.Y.includes(e)}var d=function(e){var t=e.className,n=e.prefixCls,o=e.style,c=e.color,i=e.children,f=e.text,m=e.placement,d=void 0===m?"end":m,v=u.useContext(s.E_),y=v.getPrefixCls,b=v.direction,h=y("ribbon",n),g=p(c),E=l()(h,"".concat(h,"-placement-").concat(d),(0,r.Z)((0,r.Z)({},"".concat(h,"-rtl"),"rtl"===b),"".concat(h,"-color-").concat(c),g),t),Z={},x={};return c&&!g&&(Z.background=c,x.color=c),u.createElement("div",{className:"".concat(h,"-wrapper")},i,u.createElement("div",{className:E,style:(0,a.Z)((0,a.Z)({},Z),o)},u.createElement("span",{className:"".concat(h,"-text")},f),u.createElement("div",{className:"".concat(h,"-corner"),style:x})))},v=n(97685);function y(e){var t,n=e.prefixCls,r=e.value,o=e.current,a=e.offset,c=void 0===a?0:a;return c&&(t={position:"absolute",top:"".concat(c,"00%"),left:0}),u.createElement("span",{style:t,className:l()("".concat(n,"-only-unit"),{current:o})},r)}function b(e,t,n){for(var r=e,o=0;(r+10)%10!==t;)r+=n,o+=n;return o}function h(e){var t,n,r=e.prefixCls,o=e.count,c=e.value,l=Number(c),i=Math.abs(o),s=u.useState(l),f=(0,v.Z)(s,2),m=f[0],p=f[1],d=u.useState(i),h=(0,v.Z)(d,2),g=h[0],E=h[1],Z=function(){p(l),E(i)};if(u.useEffect((function(){var e=setTimeout((function(){Z()}),1e3);return function(){clearTimeout(e)}}),[l]),m===l||Number.isNaN(l)||Number.isNaN(m))t=[u.createElement(y,(0,a.Z)({},e,{key:l,current:!0}))],n={transition:"none"};else{t=[];for(var x=l+10,N=[],w=l;w<=x;w+=1)N.push(w);var C=N.findIndex((function(e){return e%10===m}));t=N.map((function(t,n){var r=t%10;return u.createElement(y,(0,a.Z)({},e,{key:t,value:r,offset:n-C,current:n===C}))})),n={transform:"translateY(".concat(-b(m,l,g<i?1:-1),"00%)")}}return u.createElement("span",{className:"".concat(r,"-only"),style:n,onTransitionEnd:Z},t)}var g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},E=function(e){var t=e.prefixCls,n=e.count,r=e.className,o=e.motionClassName,c=e.style,i=e.title,m=e.show,p=e.component,d=void 0===p?"sup":p,v=e.children,y=g(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),b=(0,u.useContext(s.E_).getPrefixCls)("scroll-number",t),E=(0,a.Z)((0,a.Z)({},y),{"data-show":m,style:c,className:l()(b,r,o),title:i}),Z=n;if(n&&Number(n)%1==0){var x=String(n).split("");Z=x.map((function(e,t){return u.createElement(h,{prefixCls:b,count:Number(n),value:e,key:x.length-t})}))}return c&&c.borderColor&&(E.style=(0,a.Z)((0,a.Z)({},c),{boxShadow:"0 0 0 1px ".concat(c.borderColor," inset")})),v?(0,f.Tm)(v,(function(e){return{className:l()("".concat(b,"-custom-component"),null==e?void 0:e.className,o)}})):u.createElement(d,E,Z)},Z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},x=function(e){var t=e.prefixCls,n=e.scrollNumberPrefixCls,c=e.children,m=e.status,d=e.text,v=e.color,y=e.count,b=void 0===y?null:y,h=e.overflowCount,g=void 0===h?99:h,x=e.dot,N=void 0!==x&&x,w=e.size,C=void 0===w?"default":w,O=e.title,S=e.offset,k=e.style,j=e.className,I=e.showZero,P=void 0!==I&&I,T=Z(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),A=u.useContext(s.E_),R=A.getPrefixCls,Y=A.direction,B=R("badge",t),L=b>g?"".concat(g,"+"):b,U="0"===L||0===L,_=(null!=m||null!=v)&&(null===b||U&&!P),z=N&&!U,D=z?"":L,M=(0,u.useMemo)((function(){return(null==D||""===D||U&&!P)&&!z}),[D,U,P,z]),H=(0,u.useRef)(b);M||(H.current=b);var F=H.current,V=(0,u.useRef)(D);M||(V.current=D);var W=V.current,X=(0,u.useRef)(z);M||(X.current=z);var G=(0,u.useMemo)((function(){if(!S)return(0,a.Z)({},k);var e={marginTop:S[1]};return"rtl"===Y?e.left=parseInt(S[0],10):e.right=-parseInt(S[0],10),(0,a.Z)((0,a.Z)({},e),k)}),[Y,S,k]),J=null!=O?O:"string"==typeof F||"number"==typeof F?F:void 0,K=M||!d?null:u.createElement("span",{className:"".concat(B,"-status-text")},d),Q=F&&"object"===(0,o.Z)(F)?(0,f.Tm)(F,(function(e){return{style:(0,a.Z)((0,a.Z)({},G),e.style)}})):void 0,$=l()((0,r.Z)((0,r.Z)((0,r.Z)({},"".concat(B,"-status-dot"),_),"".concat(B,"-status-").concat(m),!!m),"".concat(B,"-status-").concat(v),p(v))),q={};v&&!p(v)&&(q.background=v);var ee=l()(B,(0,r.Z)((0,r.Z)((0,r.Z)({},"".concat(B,"-status"),_),"".concat(B,"-not-a-wrapper"),!c),"".concat(B,"-rtl"),"rtl"===Y),j);if(!c&&_){var te=G.color;return u.createElement("span",(0,a.Z)({},T,{className:ee,style:G}),u.createElement("span",{className:$,style:q}),d&&u.createElement("span",{style:{color:te},className:"".concat(B,"-status-text")},d))}return u.createElement("span",(0,a.Z)({},T,{className:ee}),c,u.createElement(i.ZP,{visible:!M,motionName:"".concat(B,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var t=e.className,o=R("scroll-number",n),c=X.current,i=l()((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},"".concat(B,"-dot"),c),"".concat(B,"-count"),!c),"".concat(B,"-count-sm"),"small"===C),"".concat(B,"-multiple-words"),!c&&W&&W.toString().length>1),"".concat(B,"-status-").concat(m),!!m),"".concat(B,"-status-").concat(v),p(v))),s=(0,a.Z)({},G);return v&&!p(v)&&((s=s||{}).background=v),u.createElement(E,{prefixCls:o,show:!M,motionClassName:t,className:i,count:W,title:J,style:s,key:"scrollNumber"},Q)})),K)};x.Ribbon=d;var N=x},97183:function(e,t,n){var r=n(2897),o=n(25908),a=r.ZP;a.Header=r.h4,a.Footer=r.$_,a.Content=r.VY,a.Sider=o.Z,a._InternalSiderContext=o.D,t.Z=a}}]);