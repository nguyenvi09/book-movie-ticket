"use strict";(self.webpackChunkbook_movie_ticket=self.webpackChunkbook_movie_ticket||[]).push([[141],{141:function(e,t,n){n.d(t,{Z:function(){return $}});var a=n(4942),r=n(7462),o=n(732),i=n(5033),c=n(1413),l=n(2791),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},s=n(4291),d=function(e,t){return l.createElement(s.Z,(0,c.Z)((0,c.Z)({},e),{},{ref:t,icon:u}))};d.displayName="PlusOutlined";var f=l.forwardRef(d),v=n(1694),m=n.n(v),b=n(9439),p=n(1002),h=n(4925),y=n(5501),Z=n(3786),g=n(5179),E=n(3433),k=n(5314),w=n(8829);function x(e){var t=(0,l.useRef)(),n=(0,l.useRef)(!1);return(0,l.useEffect)((function(){return n.current=!1,function(){n.current=!0,k.Z.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(k.Z.cancel(t.current),t.current=(0,k.Z)((function(){e.apply(void 0,r)})))}}var C=n(1354);function N(e,t){var n,r=e.prefixCls,o=e.id,i=e.active,c=e.tab,u=c.key,s=c.tab,d=c.disabled,f=c.closeIcon,v=e.closable,b=e.renderWrapper,p=e.removeAriaLabel,h=e.editable,y=e.onClick,Z=e.onRemove,g=e.onFocus,E=e.style,k="".concat(r,"-tab");l.useEffect((function(){return Z}),[]);var w=h&&!1!==v&&!d;function x(e){d||y(e)}var N=l.createElement("div",{key:u,ref:t,className:m()(k,(n={},(0,a.Z)(n,"".concat(k,"-with-remove"),w),(0,a.Z)(n,"".concat(k,"-active"),i),(0,a.Z)(n,"".concat(k,"-disabled"),d),n)),style:E,onClick:x},l.createElement("div",{role:"tab","aria-selected":i,id:o&&"".concat(o,"-tab-").concat(u),className:"".concat(k,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(u),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),x(e)},onKeyDown:function(e){[C.Z.SPACE,C.Z.ENTER].includes(e.which)&&(e.preventDefault(),x(e))},onFocus:g},s),w&&l.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:u,event:t})}},f||h.removeIcon||"\xd7"));return b?b(N):N}var I=l.forwardRef(N),T={width:0,height:0,left:0,top:0};var P={width:0,height:0,left:0,top:0,right:0};var S=n(2257),R=n(3241);function M(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?l.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var L=l.forwardRef(M);function A(e,t){var n=e.prefixCls,r=e.id,o=e.tabs,i=e.locale,c=e.mobile,u=e.moreIcon,s=void 0===u?"More":u,d=e.moreTransitionName,f=e.style,v=e.className,p=e.editable,h=e.tabBarGutter,y=e.rtl,Z=e.removeAriaLabel,g=e.onTabClick,E=e.popupClassName,k=(0,l.useState)(!1),w=(0,b.Z)(k,2),x=w[0],N=w[1],I=(0,l.useState)(null),T=(0,b.Z)(I,2),P=T[0],M=T[1],A="".concat(r,"-more-popup"),B="".concat(n,"-dropdown"),D=null!==P?"".concat(A,"-").concat(P):null,K=null===i||void 0===i?void 0:i.dropdownAriaLabel;var O=l.createElement(S.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),N(!1)},prefixCls:"".concat(B,"-menu"),id:A,tabIndex:-1,role:"listbox","aria-activedescendant":D,selectedKeys:[P],"aria-label":void 0!==K?K:"expanded dropdown"},o.map((function(e){var t=p&&!1!==e.closable&&!e.disabled;return l.createElement(S.sN,{key:e.key,id:"".concat(A,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},l.createElement("span",null,e.tab),t&&l.createElement("button",{type:"button","aria-label":Z||"remove",tabIndex:0,className:"".concat(B,"-menu-item-remove"),onClick:function(t){var n,a;t.stopPropagation(),n=t,a=e.key,n.preventDefault(),n.stopPropagation(),p.onEdit("remove",{key:a,event:n})}},e.closeIcon||p.removeIcon||"\xd7"))})));function j(e){for(var t=o.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===P}))||0,a=t.length,r=0;r<a;r+=1){var i=t[n=(n+e+a)%a];if(!i.disabled)return void M(i.key)}}(0,l.useEffect)((function(){var e=document.getElementById(D);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[P]),(0,l.useEffect)((function(){x||M(null)}),[x]);var W=(0,a.Z)({},y?"marginRight":"marginLeft",h);o.length||(W.visibility="hidden",W.order=1);var _=m()((0,a.Z)({},"".concat(B,"-rtl"),y)),q=c?null:l.createElement(R.Z,{prefixCls:B,overlay:O,trigger:["hover"],visible:x,transitionName:d,onVisibleChange:N,overlayClassName:m()(_,E),mouseEnterDelay:.1,mouseLeaveDelay:.1},l.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:W,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":A,id:"".concat(r,"-more"),"aria-expanded":x,onKeyDown:function(e){var t=e.which;if(x)switch(t){case C.Z.UP:j(-1),e.preventDefault();break;case C.Z.DOWN:j(1),e.preventDefault();break;case C.Z.ESC:N(!1);break;case C.Z.SPACE:case C.Z.ENTER:null!==P&&g(P,e)}else[C.Z.DOWN,C.Z.SPACE,C.Z.ENTER].includes(t)&&(N(!0),e.preventDefault())}},s));return l.createElement("div",{className:m()("".concat(n,"-nav-operations"),v),style:f,ref:t},q,l.createElement(L,{prefixCls:n,locale:i,editable:p}))}var B=l.memo(l.forwardRef(A),(function(e,t){return t.tabMoving})),D=(0,l.createContext)(null),K=Math.pow(.995,20);function O(e,t){var n=l.useRef(e),a=l.useState({}),r=(0,b.Z)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var j=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var o={};return r&&"object"===(0,p.Z)(r)&&!l.isValidElement(r)?o=r:o.right=r,"right"===n&&(t=o.right),"left"===n&&(t=o.left),t?l.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function W(e,t){var n,o=l.useContext(D),i=o.prefixCls,u=o.tabs,s=e.className,d=e.style,f=e.id,v=e.animated,p=e.activeKey,h=e.rtl,y=e.extra,Z=e.editable,g=e.locale,C=e.tabPosition,N=e.tabBarGutter,S=e.children,R=e.onTabClick,M=e.onTabScroll,A=(0,l.useRef)(),W=(0,l.useRef)(),_=(0,l.useRef)(),q=(0,l.useRef)(),V=function(){var e=(0,l.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,l.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),z=(0,b.Z)(V,2),G=z[0],H=z[1],Y="top"===C||"bottom"===C,F=O(0,(function(e,t){Y&&M&&M({direction:e>t?"left":"right"})})),X=(0,b.Z)(F,2),U=X[0],J=X[1],Q=O(0,(function(e,t){!Y&&M&&M({direction:e>t?"top":"bottom"})})),$=(0,b.Z)(Q,2),ee=$[0],te=$[1],ne=(0,l.useState)(0),ae=(0,b.Z)(ne,2),re=ae[0],oe=ae[1],ie=(0,l.useState)(0),ce=(0,b.Z)(ie,2),le=ce[0],ue=ce[1],se=(0,l.useState)(null),de=(0,b.Z)(se,2),fe=de[0],ve=de[1],me=(0,l.useState)(null),be=(0,b.Z)(me,2),pe=be[0],he=be[1],ye=(0,l.useState)(0),Ze=(0,b.Z)(ye,2),ge=Ze[0],Ee=Ze[1],ke=(0,l.useState)(0),we=(0,b.Z)(ke,2),xe=we[0],Ce=we[1],Ne=function(e){var t=(0,l.useRef)([]),n=(0,l.useState)({}),a=(0,b.Z)(n,2)[1],r=(0,l.useRef)("function"===typeof e?e():e),o=x((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),o()}]}(new Map),Ie=(0,b.Z)(Ne,2),Te=Ie[0],Pe=Ie[1],Se=function(e,t,n){return(0,l.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||T,o=r.left+r.width,i=0;i<e.length;i+=1){var l,u=e[i].key,s=t.get(u);s||(s=t.get(null===(l=e[i-1])||void 0===l?void 0:l.key)||T);var d=a.get(u)||(0,c.Z)({},s);d.right=o-d.left-d.width,a.set(u,d)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(u,Te,re),Re="".concat(i,"-nav-operations-hidden"),Me=0,Le=0;function Ae(e){return e<Me?Me:e>Le?Le:e}Y?h?(Me=0,Le=Math.max(0,re-fe)):(Me=Math.min(0,fe-re),Le=0):(Me=Math.min(0,pe-le),Le=0);var Be=(0,l.useRef)(),De=(0,l.useState)(),Ke=(0,b.Z)(De,2),Oe=Ke[0],je=Ke[1];function We(){je(Date.now())}function _e(){window.clearTimeout(Be.current)}function qe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=Se.get(e)||{width:0,height:0,left:0,right:0,top:0};if(Y){var n=U;h?t.right<U?n=t.right:t.right+t.width>U+fe&&(n=t.right+t.width-fe):t.left<-U?n=-t.left:t.left+t.width>-U+fe&&(n=-(t.left+t.width-fe)),te(0),J(Ae(n))}else{var a=ee;t.top<-ee?a=-t.top:t.top+t.height>-ee+pe&&(a=-(t.top+t.height-pe)),J(0),te(Ae(a))}}!function(e,t){var n=(0,l.useState)(),a=(0,b.Z)(n,2),r=a[0],o=a[1],i=(0,l.useState)(0),c=(0,b.Z)(i,2),u=c[0],s=c[1],d=(0,l.useState)(0),f=(0,b.Z)(d,2),v=f[0],m=f[1],p=(0,l.useState)(),h=(0,b.Z)(p,2),y=h[0],Z=h[1],g=(0,l.useRef)(),E=(0,l.useRef)(),k=(0,l.useRef)(null);k.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;o({x:n,y:a}),window.clearInterval(g.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,i=n.screenY;o({x:a,y:i});var c=a-r.x,l=i-r.y;t(c,l);var d=Date.now();s(d),m(d-u),Z({x:c,y:l})}},onTouchEnd:function(){if(r&&(o(null),Z(null),y)){var e=y.x/v,n=y.y/v,a=Math.abs(e),i=Math.abs(n);if(Math.max(a,i)<.1)return;var c=e,l=n;g.current=window.setInterval((function(){Math.abs(c)<.01&&Math.abs(l)<.01?window.clearInterval(g.current):t(20*(c*=K),20*(l*=K))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),i=Math.abs(a);o===i?r="x"===E.current?n:a:o>i?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},l.useEffect((function(){function t(e){k.current.onTouchMove(e)}function n(e){k.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){k.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){k.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(A,(function(e,t){function n(e,t){e((function(e){return Ae(e+t)}))}if(Y){if(fe>=re)return!1;n(J,e)}else{if(pe>=le)return!1;n(te,t)}return _e(),We(),!0})),(0,l.useEffect)((function(){return _e(),Oe&&(Be.current=window.setTimeout((function(){je(0)}),100)),_e}),[Oe]);var Ve=function(e,t,n,a,r){var o,i,c,u=r.tabs,s=r.tabPosition,d=r.rtl;["top","bottom"].includes(s)?(o="width",i=d?"right":"left",c=Math.abs(t.left)):(o="height",i="top",c=-t.top);var f=t[o],v=n[o],m=a[o],b=f;return v+m>f&&v<f&&(b=f-m),(0,l.useMemo)((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,a=0;a<t;a+=1){var r=e.get(u[a].key)||P;if(r[i]+r[o]>c+b){n=a-1;break}}for(var l=0,s=t-1;s>=0;s-=1)if((e.get(u[s].key)||P)[i]<c){l=s+1;break}return[l,n]}),[e,c,b,s,u.map((function(e){return e.key})).join("_"),d])}(Se,{width:fe,height:pe,left:U,top:ee},{width:re,height:le},{width:ge,height:xe},(0,c.Z)((0,c.Z)({},e),{},{tabs:u})),ze=(0,b.Z)(Ve,2),Ge=ze[0],He=ze[1],Ye={};"top"===C||"bottom"===C?Ye[h?"marginRight":"marginLeft"]=N:Ye.marginTop=N;var Fe=u.map((function(e,t){var n=e.key;return l.createElement(I,{id:f,prefixCls:i,key:n,tab:e,style:0===t?void 0:Ye,closable:e.closable,editable:Z,active:n===p,renderWrapper:S,removeAriaLabel:null===g||void 0===g?void 0:g.removeAriaLabel,ref:G(n),onClick:function(e){R(n,e)},onRemove:function(){H(n)},onFocus:function(){qe(n),We(),A.current&&(h||(A.current.scrollLeft=0),A.current.scrollTop=0)}})})),Xe=x((function(){var e,t,n,a,r,o,i=(null===(e=A.current)||void 0===e?void 0:e.offsetWidth)||0,c=(null===(t=A.current)||void 0===t?void 0:t.offsetHeight)||0,l=(null===(n=q.current)||void 0===n?void 0:n.offsetWidth)||0,s=(null===(a=q.current)||void 0===a?void 0:a.offsetHeight)||0;ve(i),he(c),Ee(l),Ce(s);var d=((null===(r=W.current)||void 0===r?void 0:r.offsetWidth)||0)-l,f=((null===(o=W.current)||void 0===o?void 0:o.offsetHeight)||0)-s;oe(d),ue(f),Pe((function(){var e=new Map;return u.forEach((function(t){var n=t.key,a=G(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),Ue=u.slice(0,Ge),Je=u.slice(He+1),Qe=[].concat((0,E.Z)(Ue),(0,E.Z)(Je)),$e=(0,l.useState)(),et=(0,b.Z)($e,2),tt=et[0],nt=et[1],at=Se.get(p),rt=(0,l.useRef)();function ot(){k.Z.cancel(rt.current)}(0,l.useEffect)((function(){var e={};return at&&(Y?(h?e.right=at.right:e.left=at.left,e.width=at.width):(e.top=at.top,e.height=at.height)),ot(),rt.current=(0,k.Z)((function(){nt(e)})),ot}),[at,Y,h]),(0,l.useEffect)((function(){qe()}),[p,at,Se,Y]),(0,l.useEffect)((function(){Xe()}),[h,N,p,u.map((function(e){return e.key})).join("_")]);var it,ct,lt,ut,st=!!Qe.length,dt="".concat(i,"-nav-wrap");return Y?h?(ct=U>0,it=U+fe<re):(it=U<0,ct=-U+fe<re):(lt=ee<0,ut=-ee+pe<le),l.createElement("div",{ref:t,role:"tablist",className:m()("".concat(i,"-nav"),s),style:d,onKeyDown:function(){We()}},l.createElement(j,{position:"left",extra:y,prefixCls:i}),l.createElement(w.Z,{onResize:Xe},l.createElement("div",{className:m()(dt,(n={},(0,a.Z)(n,"".concat(dt,"-ping-left"),it),(0,a.Z)(n,"".concat(dt,"-ping-right"),ct),(0,a.Z)(n,"".concat(dt,"-ping-top"),lt),(0,a.Z)(n,"".concat(dt,"-ping-bottom"),ut),n)),ref:A},l.createElement(w.Z,{onResize:Xe},l.createElement("div",{ref:W,className:"".concat(i,"-nav-list"),style:{transform:"translate(".concat(U,"px, ").concat(ee,"px)"),transition:Oe?"none":void 0}},Fe,l.createElement(L,{ref:q,prefixCls:i,locale:g,editable:Z,style:(0,c.Z)((0,c.Z)({},0===Fe.length?void 0:Ye),{},{visibility:st?"hidden":null})}),l.createElement("div",{className:m()("".concat(i,"-ink-bar"),(0,a.Z)({},"".concat(i,"-ink-bar-animated"),v.inkBar)),style:tt}))))),l.createElement(B,(0,r.Z)({},e,{removeAriaLabel:null===g||void 0===g?void 0:g.removeAriaLabel,ref:_,prefixCls:i,tabs:Qe,className:!st&&Re,tabMoving:!!Oe})),l.createElement(j,{position:"right",extra:y,prefixCls:i}))}var _=l.forwardRef(W);function q(e){var t=e.id,n=e.activeKey,r=e.animated,o=e.tabPosition,i=e.rtl,c=e.destroyInactiveTabPane,u=l.useContext(D),s=u.prefixCls,d=u.tabs,f=r.tabPane,v=d.findIndex((function(e){return e.key===n}));return l.createElement("div",{className:m()("".concat(s,"-content-holder"))},l.createElement("div",{className:m()("".concat(s,"-content"),"".concat(s,"-content-").concat(o),(0,a.Z)({},"".concat(s,"-content-animated"),f)),style:v&&f?(0,a.Z)({},i?"marginRight":"marginLeft","-".concat(v,"00%")):null},d.map((function(e){return l.cloneElement(e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:f,active:e.key===n,destroyInactiveTabPane:c})}))))}function V(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,o=e.id,i=e.active,u=e.animated,s=e.destroyInactiveTabPane,d=e.tabKey,f=e.children,v=l.useState(n),p=(0,b.Z)(v,2),h=p[0],y=p[1];l.useEffect((function(){i?y(!0):s&&y(!1)}),[i,s]);var Z={};return i||(u?(Z.visibility="hidden",Z.height=0,Z.overflowY="hidden"):Z.display="none"),l.createElement("div",{id:o&&"".concat(o,"-panel-").concat(d),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(d),"aria-hidden":!i,style:(0,c.Z)((0,c.Z)({},Z),r),className:m()("".concat(t,"-tabpane"),i&&"".concat(t,"-tabpane-active"),a)},(i||h||n)&&f)}var z=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","popupClassName"],G=0;function H(e,t){var n,o,i=e.id,u=e.prefixCls,s=void 0===u?"rc-tabs":u,d=e.className,f=e.children,v=e.direction,E=e.activeKey,k=e.defaultActiveKey,w=e.editable,x=e.animated,C=void 0===x?{inkBar:!0,tabPane:!1}:x,N=e.tabPosition,I=void 0===N?"top":N,T=e.tabBarGutter,P=e.tabBarStyle,S=e.tabBarExtraContent,R=e.locale,M=e.moreIcon,L=e.moreTransitionName,A=e.destroyInactiveTabPane,B=e.renderTabBar,K=e.onChange,O=e.onTabClick,j=e.onTabScroll,W=e.popupClassName,V=(0,h.Z)(e,z),H=function(e){return(0,y.Z)(e).map((function(e){if(l.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,c.Z)((0,c.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(f),Y="rtl"===v;o=!1===C?{inkBar:!1,tabPane:!1}:!0===C?{inkBar:!0,tabPane:!0}:(0,c.Z)({inkBar:!0,tabPane:!1},"object"===(0,p.Z)(C)?C:{});var F=(0,l.useState)(!1),X=(0,b.Z)(F,2),U=X[0],J=X[1];(0,l.useEffect)((function(){J((0,Z.Z)())}),[]);var Q=(0,g.Z)((function(){var e;return null===(e=H[0])||void 0===e?void 0:e.key}),{value:E,defaultValue:k}),$=(0,b.Z)(Q,2),ee=$[0],te=$[1],ne=(0,l.useState)((function(){return H.findIndex((function(e){return e.key===ee}))})),ae=(0,b.Z)(ne,2),re=ae[0],oe=ae[1];(0,l.useEffect)((function(){var e,t=H.findIndex((function(e){return e.key===ee}));-1===t&&(t=Math.max(0,Math.min(re,H.length-1)),te(null===(e=H[t])||void 0===e?void 0:e.key));oe(t)}),[H.map((function(e){return e.key})).join("_"),ee,re]);var ie=(0,g.Z)(null,{value:i}),ce=(0,b.Z)(ie,2),le=ce[0],ue=ce[1],se=I;U&&!["left","right"].includes(I)&&(se="top"),(0,l.useEffect)((function(){i||(ue("rc-tabs-".concat(G)),G+=1)}),[]);var de,fe={id:le,activeKey:ee,animated:o,tabPosition:se,rtl:Y,mobile:U},ve=(0,c.Z)((0,c.Z)({},fe),{},{editable:w,locale:R,moreIcon:M,moreTransitionName:L,tabBarGutter:T,onTabClick:function(e,t){null===O||void 0===O||O(e,t);var n=e!==ee;te(e),n&&(null===K||void 0===K||K(e))},onTabScroll:j,extra:S,style:P,panes:f,popupClassName:W});return de=B?B(ve,_):l.createElement(_,ve),l.createElement(D.Provider,{value:{tabs:H,prefixCls:s}},l.createElement("div",(0,r.Z)({ref:t,id:i,className:m()(s,"".concat(s,"-").concat(se),(n={},(0,a.Z)(n,"".concat(s,"-mobile"),U),(0,a.Z)(n,"".concat(s,"-editable"),w),(0,a.Z)(n,"".concat(s,"-rtl"),Y),n),d)},V),de,l.createElement(q,(0,r.Z)({destroyInactiveTabPane:A},fe,{animated:o}))))}var Y=l.forwardRef(H);Y.TabPane=V;var F=Y,X=n(1929),U=n(1815),J=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function Q(e){var t,n=e.type,c=e.className,u=e.size,s=e.onEdit,d=e.hideAdd,v=e.centered,b=e.addIcon,p=J(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),h=p.prefixCls,y=p.moreIcon,Z=void 0===y?l.createElement(i.Z,null):y,g=l.useContext(X.E_),E=g.getPrefixCls,k=g.direction,w=E("tabs",h);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null===s||void 0===s||s("add"===e?a:n,e)},removeIcon:l.createElement(o.Z,null),addIcon:b||l.createElement(f,null),showAdd:!0!==d});var x=E();return l.createElement(U.Z.Consumer,null,(function(e){var o,i=void 0!==u?u:e;return l.createElement(F,(0,r.Z)({direction:k,moreTransitionName:"".concat(x,"-slide-up")},p,{className:m()((o={},(0,a.Z)(o,"".concat(w,"-").concat(i),i),(0,a.Z)(o,"".concat(w,"-card"),["card","editable-card"].includes(n)),(0,a.Z)(o,"".concat(w,"-editable-card"),"editable-card"===n),(0,a.Z)(o,"".concat(w,"-centered"),v),o),c),editable:t,moreIcon:Z,prefixCls:w}))}))}Q.TabPane=V;var $=Q}}]);
//# sourceMappingURL=141.c3aff6bf.chunk.js.map