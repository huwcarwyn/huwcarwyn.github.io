import{S as z,i as G,s as H,k as D,q as S,a as C,l as b,m as w,r as k,h as v,c as L,n as p,b as N,G as h,u as P,H as I,d as q,f as R,g as T,M as F,o as Q,N as B,O as X,v as K,e as M,P as Y,y as J,z as Z,A as x,Q as $,R as ee,B as te}from"../chunks/index.c962d490.js";const le="fb685ce350cd9a2fc99747ae935c0f3087f41aa2568d7c39b6229f6a8dbe2009@group.calendar.google.com",se="AIzaSyCch_C1MTw3cPsnAEeq4WdWGsBCrHbzXmU";function ae(u){let e,s,o,l,n,t,c,a,r,g,m,E=(u[1]||"No description available")+"",i;return{c(){e=D("div"),s=D("div"),o=D("div"),l=S(u[3]),n=S(" - "),t=S(u[2]),c=C(),a=D("h3"),r=S(u[0]),g=C(),m=D("p"),i=S(E),this.h()},l(f){e=b(f,"DIV",{class:!0});var _=w(e);s=b(_,"DIV",{class:!0});var d=w(s);o=b(d,"DIV",{class:!0});var y=w(o);l=k(y,u[3]),n=k(y," - "),t=k(y,u[2]),y.forEach(v),c=L(d),a=b(d,"H3",{class:!0});var U=w(a);r=k(U,u[0]),U.forEach(v),g=L(d),m=b(d,"P",{class:!0});var A=w(m);i=k(A,E),A.forEach(v),d.forEach(v),_.forEach(v),this.h()},h(){p(o,"class","event-time svelte-1oaqqo0"),p(a,"class","event-summary svelte-1oaqqo0"),p(m,"class","event-description"),p(s,"class","event-details"),p(e,"class","event svelte-1oaqqo0")},m(f,_){N(f,e,_),h(e,s),h(s,o),h(o,l),h(o,n),h(o,t),h(s,c),h(s,a),h(a,r),h(s,g),h(s,m),h(m,i)},p(f,[_]){_&8&&P(l,f[3]),_&4&&P(t,f[2]),_&1&&P(r,f[0]),_&2&&E!==(E=(f[1]||"No description available")+"")&&P(i,E)},i:I,o:I,d(f){f&&v(e)}}}function ne(u,e,s){let o,l,{end:n}=e,{start:t}=e,{summary:c}=e,{description:a}=e;return u.$$set=r=>{"end"in r&&s(4,n=r.end),"start"in r&&s(5,t=r.start),"summary"in r&&s(0,c=r.summary),"description"in r&&s(1,a=r.description)},u.$$.update=()=>{u.$$.dirty&32&&s(3,o=new Date(t.dateTime).toLocaleTimeString("en-US",{timeStyle:"short"})),u.$$.dirty&16&&s(2,l=new Date(n.dateTime).toLocaleTimeString("en-US",{timeStyle:"short"}))},[c,a,l,o,n,t]}class oe extends z{constructor(e){super(),G(this,e,ne,ae,H,{end:4,start:5,summary:0,description:1})}}function O(u,e,s){const o=u.slice();return o[10]=e[s],o}function V(u,e,s){const o=u.slice();return o[13]=e[s],o}function W(u){let e,s,o=u[13]+"",l,n,t,c;return{c(){e=D("li"),s=D("button"),l=S(o),n=C(),this.h()},l(a){e=b(a,"LI",{class:!0});var r=w(e);s=b(r,"BUTTON",{type:!0,class:!0});var g=w(s);l=k(g,o),g.forEach(v),n=L(r),r.forEach(v),this.h()},h(){p(s,"type","button"),p(s,"class","svelte-1x6l8wc"),p(e,"class","day-selector svelte-1x6l8wc"),B(e,"selected",u[13]===u[0])},m(a,r){N(a,e,r),h(e,s),h(s,l),h(e,n),t||(c=X(s,"click",u[3]),t=!0)},p(a,r){r&5&&B(e,"selected",a[13]===a[0])},d(a){a&&v(e),t=!1,c()}}}function re(u){let e,s;return{c(){e=D("p"),s=S("No events today!"),this.h()},l(o){e=b(o,"P",{class:!0});var l=w(e);s=k(l,"No events today!"),l.forEach(v),this.h()},h(){p(e,"class","no-events svelte-1x6l8wc")},m(o,l){N(o,e,l),h(e,s)},p:I,i:I,o:I,d(o){o&&v(e)}}}function ce(u){let e,s,o=u[1],l=[];for(let t=0;t<o.length;t+=1)l[t]=j(O(u,o,t));const n=t=>q(l[t],1,1,()=>{l[t]=null});return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=M()},l(t){for(let c=0;c<l.length;c+=1)l[c].l(t);e=M()},m(t,c){for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(t,c);N(t,e,c),s=!0},p(t,c){if(c&2){o=t[1];let a;for(a=0;a<o.length;a+=1){const r=O(t,o,a);l[a]?(l[a].p(r,c),T(l[a],1)):(l[a]=j(r),l[a].c(),T(l[a],1),l[a].m(e.parentNode,e))}for(K(),a=o.length;a<l.length;a+=1)n(a);R()}},i(t){if(!s){for(let c=0;c<o.length;c+=1)T(l[c]);s=!0}},o(t){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)q(l[c]);s=!1},d(t){F(l,t),t&&v(e)}}}function j(u){let e,s;const o=[u[10]];let l={};for(let n=0;n<o.length;n+=1)l=Y(l,o[n]);return e=new oe({props:l}),{c(){J(e.$$.fragment)},l(n){Z(e.$$.fragment,n)},m(n,t){x(e,n,t),s=!0},p(n,t){const c=t&2?$(o,[ee(n[10])]):{};e.$set(c)},i(n){s||(T(e.$$.fragment,n),s=!0)},o(n){q(e.$$.fragment,n),s=!1},d(n){te(e,n)}}}function ie(u){let e,s,o,l,n,t,c,a=u[2],r=[];for(let i=0;i<a.length;i+=1)r[i]=W(V(u,a,i));const g=[ce,re],m=[];function E(i,f){var _;return((_=i[1])==null?void 0:_.length)>0?0:1}return n=E(u),t=m[n]=g[n](u),{c(){e=D("div"),s=D("ul");for(let i=0;i<r.length;i+=1)r[i].c();o=C(),l=D("div"),t.c(),this.h()},l(i){e=b(i,"DIV",{class:!0});var f=w(e);s=b(f,"UL",{class:!0});var _=w(s);for(let y=0;y<r.length;y+=1)r[y].l(_);_.forEach(v),o=L(f),l=b(f,"DIV",{class:!0});var d=w(l);t.l(d),d.forEach(v),f.forEach(v),this.h()},h(){p(s,"class","days-list svelte-1x6l8wc"),p(l,"class","events"),p(e,"class","calendar svelte-1x6l8wc")},m(i,f){N(i,e,f),h(e,s);for(let _=0;_<r.length;_+=1)r[_]&&r[_].m(s,null);h(e,o),h(e,l),m[n].m(l,null),c=!0},p(i,[f]){if(f&13){a=i[2];let d;for(d=0;d<a.length;d+=1){const y=V(i,a,d);r[d]?r[d].p(y,f):(r[d]=W(y),r[d].c(),r[d].m(s,null))}for(;d<r.length;d+=1)r[d].d(1);r.length=a.length}let _=n;n=E(i),n===_?m[n].p(i,f):(K(),q(m[_],1,1,()=>{m[_]=null}),R(),t=m[n],t?t.p(i,f):(t=m[n]=g[n](i),t.c()),T(t,1),t.m(l,null))},i(i){c||(T(t),c=!0)},o(i){q(t),c=!1},d(i){i&&v(e),F(r,i),m[n].d()}}}function ue(u,e,s){let o,l=[],n=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],t=n[new Date(Date.now()).getDay()],c=new Date,a=c.getDay()>0?c.getDay():7,r=c.getDate()-a+1,g=new Date(c.setDate(r)),m=new Date(c.setDate(g.getDate()+6));const E=i=>{s(0,t=i.target.innerText)};return Q(async()=>{const f=await(await fetch(`https://www.googleapis.com/calendar/v3/calendars/${le}/events?timeMin=${g.toISOString()}&timeMax=${m.toISOString()}&singleEvents=true&key=${se}`,{method:"GET",mode:"cors"})).json();s(4,l=f.items)}),u.$$.update=()=>{u.$$.dirty&17&&s(1,o=l.filter(i=>{if(i.status==="cancelled")return!1;const f=new Date(i.start.dateTime).getDay();return n[f]===t}).sort((i,f)=>new Date(i.start.dateTime)>new Date(f.start.dateTime)))},[t,o,n,E,l]}class _e extends z{constructor(e){super(),G(this,e,ue,ie,H,{})}}export{_e as component};
