"use strict";(self.webpackChunkmariomenjr=self.webpackChunkmariomenjr||[]).push([[103],{3146:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),o=a(6742),s=a(9306),m=a(7277),c=a(1217),d=a(6146),u="blogPostTitle_GeHD",g="blogPostData_291c",v="blogPostDetailsFull_3kfx";var p=function(e){var t,a,p,E=(a=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=e.children,b=e.frontMatter,f=e.metadata,_=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=f.date,T=f.formattedDate,I=f.permalink,w=f.tags,L=f.readingTime,P=f.title,x=f.editUrl,C=b.author,y=b.image,M=b.keywords,R=b.author_url||b.authorURL,A=b.author_title||b.authorTitle,B=b.author_image_url||b.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(c.Z,{keywords:M,image:y}),n.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(p=Z?"h1":"h2",n.createElement("header",null,n.createElement(p,{className:u},Z?P:n.createElement(o.Z,{to:I},P)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k},T),L&&n.createElement(n.Fragment,null," \xb7 ",E(L))),n.createElement("div",{className:"avatar margin-vert--md"},B&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:R},n.createElement("img",{src:B,alt:C})),n.createElement("div",{className:"avatar__intro"},C&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:R},C)),n.createElement("small",{className:"avatar__subtitle"},A)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:m.Z},h)),(w.length>0||_)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[v]=Z,t))},w.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),w.map((function(e){var t=e.label,a=e.permalink;return n.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&x&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:x})),!Z&&_&&n.createElement("div",{className:"col text--right"},n.createElement(o.Z,{to:f.permalink,"aria-label":"Read more about "+P},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4147:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(6016),l=a(3146),i=a(4973),o=a(6742);var s=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(5601),c=a(571),d=a(9306);var u=function(e){var t=e.content,a=e.sidebar,i=t.frontMatter,o=t.metadata,u=o.title,g=o.description,v=o.nextItem,p=o.prevItem,E=i.hide_table_of_contents;return n.createElement(r.Z,{title:u,description:g,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage},t&&n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("aside",{className:"col col--3"},n.createElement(m.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement(l.Z,{frontMatter:i,metadata:o,isBlogPostPage:!0},n.createElement(t,null)),(v||p)&&n.createElement(s,{nextItem:v,prevItem:p})),!E&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(c.Z,{toc:t.toc})))))}},5601:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7294),r=a(6010),l=a(6742),i="sidebar_2ahu",o="sidebarItemTitle_2hhb",s="sidebarItemList_2xAf",m="sidebarItem_2UVv",c="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",u=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:s},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:m},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:d},e.title))}))))}},6146:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(4973),l=a(2122),i=a(9756),o=a(6010),s="iconEdit_2_ui",m=["className"],c=function(e){var t=e.className,a=(0,i.Z)(e,m);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(c,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(6010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var m=s[r],c=m.href,d=decodeURIComponent(c.substring(c.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(t),m.classList.add(t),i(m),o=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",o="table-of-contents__link";function s(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children}))}))):null}var m=function(e){var t=e.toc;return l(o,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(s,{toc:t}))}}}]);