import{s as B,f as b,a as T,g as y,h as _,d as p,c as q,j as d,M as l,i as O,z as h,K as C,G as k,I as E,a5 as j,J as z}from"./scheduler.2vmdsppc.js";import{S as D,i as G,b as Q,d as P,m as I,a as M,t as N,e as U}from"./index.eLAHt3dB.js";import{M as J,P as K}from"./Minus.b0sP7xD2.js";import{E as L}from"./utils.FkBaGfnY.js";import{s as V}from"./shopping.HYDPEdxb.js";function Y(s){let r,a,e,f,o,m,u,g,i,c,w;return e=new J({}),g=new K({}),{c(){r=b("div"),a=b("button"),Q(e.$$.fragment),f=T(),o=b("input"),m=T(),u=b("button"),Q(g.$$.fragment),this.h()},l(t){r=y(t,"DIV",{class:!0});var n=_(r);a=y(n,"BUTTON",{type:!0,class:!0});var v=_(a);P(e.$$.fragment,v),v.forEach(p),f=q(n),o=y(n,"INPUT",{type:!0,class:!0}),m=q(n),u=y(n,"BUTTON",{type:!0,class:!0});var S=_(u);P(g.$$.fragment,S),S.forEach(p),n.forEach(p),this.h()},h(){d(a,"type","button"),d(a,"class","p-1 text-gray-500 rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"),l(a,"w-6",s[1]),l(a,"w-8",!s[1]),d(o,"type","number"),d(o,"class","block w-14 text-center rounded-lg py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"),l(o,"w-6",s[1]),l(o,"w-9",!s[1]),d(u,"type","button"),d(u,"class","p-1 text-gray-500 rounded-full hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"),l(u,"w-6",s[1]),l(u,"w-8",!s[1]),d(r,"class","flex items-center mb-2"),l(r,"space-x-1",!s[1])},m(t,n){O(t,r,n),h(r,a),I(e,a,null),h(r,f),h(r,o),C(o,s[0]),h(r,m),h(r,u),I(g,u,null),i=!0,c||(w=[k(a,"click",E(s[4])),k(o,"input",s[5]),k(u,"click",E(s[6]))],c=!0)},p(t,[n]){(!i||n&2)&&l(a,"w-6",t[1]),(!i||n&2)&&l(a,"w-8",!t[1]),n&1&&j(o.value)!==t[0]&&C(o,t[0]),(!i||n&2)&&l(o,"w-6",t[1]),(!i||n&2)&&l(o,"w-9",!t[1]),(!i||n&2)&&l(u,"w-6",t[1]),(!i||n&2)&&l(u,"w-8",!t[1]),(!i||n&2)&&l(r,"space-x-1",!t[1])},i(t){i||(M(e.$$.fragment,t),M(g.$$.fragment,t),i=!0)},o(t){N(e.$$.fragment,t),N(g.$$.fragment,t),i=!1},d(t){t&&p(r),U(e),U(g),c=!1,z(w)}}}function x(s,r,a){let{quantity:e}=r,{maxStock:f}=r,{compact:o=!1}=r;function m(c=!1){e===1&&!c||(c?a(0,e++,e):a(0,e--,e),f!==null&&e>f&&(L.set("There are just "+f+" products in stock. You cannot order "+e+"."),a(0,e--,e)),V())}const u=()=>m();function g(){e=j(this.value),a(0,e)}const i=()=>m(!0);return s.$$set=c=>{"quantity"in c&&a(0,e=c.quantity),"maxStock"in c&&a(3,f=c.maxStock),"compact"in c&&a(1,o=c.compact)},[e,o,m,f,u,g,i]}class X extends D{constructor(r){super(),G(this,r,x,Y,B,{quantity:0,maxStock:3,compact:1,onQtyChange:2})}get onQtyChange(){return this.$$.ctx[2]}}export{X as Q};
