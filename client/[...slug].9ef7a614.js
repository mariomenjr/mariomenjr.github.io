import{S as t,i as e,s as a,e as n,f as o,t as s,q as r,c,d as i,g as m,h as p,j as l,a as d,b as h,k as u,l as f,n as w}from"./client.bcaa4ea0.js";function y(t){let e,a,y,b,E,T,g,A,M,j,L,$,v,k,x,S,_,H,q,C,D,I,P=t[1].toLocaleString()+"",R=t[0].author+"",z=t[0].content+"";return document.title=e=t[2],{c(){a=n("meta"),b=n("meta"),T=n("meta"),g=n("meta"),M=n("meta"),j=n("meta"),$=o(),v=n("p"),k=s("Last updated on "),x=s(P),S=s(" by "),_=s(R),H=o(),q=n("a"),C=s("Tweet"),D=o(),I=n("article"),this.h()},l(t){const e=r('[data-svelte="svelte-4492e7"]',document.head);a=c(e,"META",{name:!0,content:!0}),b=c(e,"META",{name:!0,content:!0}),T=c(e,"META",{property:!0,content:!0}),g=c(e,"META",{property:!0,content:!0}),M=c(e,"META",{property:!0,content:!0}),j=c(e,"META",{property:!0,content:!0}),e.forEach(i),$=m(t),v=c(t,"P",{class:!0});var n=p(v);k=l(n,"Last updated on "),x=l(n,P),S=l(n," by "),_=l(n,R),n.forEach(i),H=m(t),q=c(t,"A",{href:!0,class:!0,"data-show-count":!0});var o=p(q);C=l(o,"Tweet"),o.forEach(i),D=m(t),I=c(t,"ARTICLE",{class:!0}),p(I).forEach(i),this.h()},h(){d(a,"name","description"),d(a,"content",y=t[0].brief),d(b,"name","keywords"),d(b,"content",E=t[0].keywords),d(T,"property","twitter:card"),d(T,"content","summary_large_image"),d(g,"property","twitter:url"),d(g,"content",A="https://mariomenjr.com/blog/"+t[0].endpoint),d(M,"property","twitter:title"),d(M,"content",t[2]),d(j,"property","twitter:description"),d(j,"content",L=t[0].brief),d(v,"class","c-label-last-updated"),d(q,"href","https://twitter.com/share?ref_src=twsrc%5Etfw&text=hola&via=mariomenjr"),d(q,"class","twitter-share-button"),d(q,"data-show-count","false"),d(I,"class","c-article")},m(t,e){h(document.head,a),h(document.head,b),h(document.head,T),h(document.head,g),h(document.head,M),h(document.head,j),u(t,$,e),u(t,v,e),h(v,k),h(v,x),h(v,S),h(v,_),u(t,H,e),u(t,q,e),h(q,C),u(t,D,e),u(t,I,e),I.innerHTML=z},p(t,[n]){4&n&&e!==(e=t[2])&&(document.title=e),1&n&&y!==(y=t[0].brief)&&d(a,"content",y),1&n&&E!==(E=t[0].keywords)&&d(b,"content",E),1&n&&A!==(A="https://mariomenjr.com/blog/"+t[0].endpoint)&&d(g,"content",A),4&n&&d(M,"content",t[2]),1&n&&L!==(L=t[0].brief)&&d(j,"content",L),2&n&&P!==(P=t[1].toLocaleString()+"")&&f(x,P),1&n&&R!==(R=t[0].author+"")&&f(_,R),1&n&&z!==(z=t[0].content+"")&&(I.innerHTML=z)},i:w,o:w,d(t){i(a),i(b),i(T),i(g),i(M),i(j),t&&i($),t&&i(v),t&&i(H),t&&i(q),t&&i(D),t&&i(I)}}}async function b({params:t}){let[e,a,n,o]=t.slug;const s=await this.fetch(`blog/${e}/${a}/${n}/${o}.json`),r=await s.json();if(200===s.status)return{post:r};this.error(s.status,r.message)}function E(t,e,a){let{post:n}=e,{timestamp:o=new Date(n.timestamp)}=e,{title:s=`${n.title} by ${n.author}`}=e;return t.$set=t=>{"post"in t&&a(0,n=t.post),"timestamp"in t&&a(1,o=t.timestamp),"title"in t&&a(2,s=t.title)},[n,o,s]}export default class extends t{constructor(t){super(),e(this,t,E,y,a,{post:0,timestamp:1,title:2})}}export{b as preload};
