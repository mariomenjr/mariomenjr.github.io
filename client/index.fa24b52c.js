import{S as t,i as e,s as o,e as n,t as r,f as s,c as a,h as l,j as c,d as i,g as p,a as h,k as m,b as u,l as d,q as f,n as g,m as y}from"./client.8e524d91.js";function E(t,e,o){const n=t.slice();return n[2]=e[o],n}function j(t){let e,o,f,g,y,E,j,v,b,M,w,A=t[2].title+"",L=t[2].timestamp.toLocaleString()+"",T=t[2].author+"";return{c(){e=n("li"),o=n("a"),f=r(A),y=s(),E=n("p"),j=r("Posteado en "),v=r(L),b=r(" por "),M=r(T),w=s(),this.h()},l(t){e=a(t,"LI",{});var n=l(e);o=a(n,"A",{rel:!0,href:!0});var r=l(o);f=c(r,A),r.forEach(i),y=p(n),E=a(n,"P",{class:!0});var s=l(E);j=c(s,"Posteado en "),v=c(s,L),b=c(s," por "),M=c(s,T),s.forEach(i),w=p(n),n.forEach(i),this.h()},h(){h(o,"rel","prefetch"),h(o,"href",g="blog/"+t[2].endpoint),h(E,"class","c-label-last-updated")},m(t,n){m(t,e,n),u(e,o),u(o,f),u(e,y),u(e,E),u(E,j),u(E,v),u(E,b),u(E,M),u(e,w)},p(t,e){1&e&&A!==(A=t[2].title+"")&&d(f,A),1&e&&g!==(g="blog/"+t[2].endpoint)&&h(o,"href",g),1&e&&L!==(L=t[2].timestamp.toLocaleString()+"")&&d(v,L),1&e&&T!==(T=t[2].author+"")&&d(M,T)},d(t){t&&i(e)}}}function v(t){let e,o,r,c,d,v,b,M;document.title=e=t[1];let w=t[0],A=[];for(let e=0;e<w.length;e+=1)A[e]=j(E(t,w,e));return{c(){o=n("meta"),r=n("meta"),c=n("meta"),d=n("meta"),b=s(),M=n("ul");for(let t=0;t<A.length;t+=1)A[t].c();this.h()},l(t){const e=f('[data-svelte="svelte-fog4ja"]',document.head);o=a(e,"META",{property:!0,content:!0}),r=a(e,"META",{property:!0,content:!0}),c=a(e,"META",{property:!0,content:!0}),d=a(e,"META",{property:!0,content:!0}),e.forEach(i),b=p(t),M=a(t,"UL",{});var n=l(M);for(let t=0;t<A.length;t+=1)A[t].l(n);n.forEach(i),this.h()},h(){h(o,"property","twitter:card"),h(o,"content","summary_large_image"),h(r,"property","twitter:url"),h(r,"content","https://mariomenjr.com/blog"),h(c,"property","twitter:title"),h(c,"content",t[1]),h(d,"property","twitter:description"),h(d,"content",v=t[0].length+" post(s)")},m(t,e){u(document.head,o),u(document.head,r),u(document.head,c),u(document.head,d),m(t,b,e),m(t,M,e);for(let t=0;t<A.length;t+=1)A[t].m(M,null)},p(t,[o]){if(2&o&&e!==(e=t[1])&&(document.title=e),2&o&&h(c,"content",t[1]),1&o&&v!==(v=t[0].length+" post(s)")&&h(d,"content",v),1&o){let e;for(w=t[0],e=0;e<w.length;e+=1){const n=E(t,w,e);A[e]?A[e].p(n,o):(A[e]=j(n),A[e].c(),A[e].m(M,null))}for(;e<A.length;e+=1)A[e].d(1);A.length=w.length}},i:g,o:g,d(t){i(o),i(r),i(c),i(d),t&&i(b),t&&i(M),y(A,t)}}}function b({params:t,query:e}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t.map(t=>{const e=new Date(t.timestamp);return{...t,timestamp:e}})}))}function M(t,e,o){let{posts:n}=e,{title:r="Blog | Mario Menjívar"}=e;return t.$set=t=>{"posts"in t&&o(0,n=t.posts),"title"in t&&o(1,r=t.title)},[n,r]}export default class extends t{constructor(t){super(),e(this,t,M,v,o,{posts:0,title:1})}}export{b as preload};
