"use strict";(self.webpackChunkmariomenjr=self.webpackChunkmariomenjr||[]).push([[7904],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),c="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,o=e.block,s=e.defaultValue,l=e.values,m=e.groupId,p=e.className,d=r.Children.toArray(e.children),f=null!=l?l:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,b=a(),y=b.tabGroupChoices,g=b.setTabGroupChoices,h=(0,r.useState)(v),j=h[0],w=h[1],O=[];if(null!=m){var k=y[m];null!=k&&k!==j&&f.some((function(e){return e.value===k}))&&w(k)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),r=f[n].value;w(r),null!=m&&(g(m,r),setTimeout((function(){var e,n,r,o,a,i,c,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,s=i.innerWidth,n>=0&&a<=s&&o<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.target)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},p)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":j===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:E,onClick:E},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},5806:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return l},toc:function(){return m},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=(n(5064),n(8215),["components"]),c={slug:"2021/07/29/autenticacion-como-servicio-con-identity-server-4",title:"Autenticaci\xf3n como servicio con Identity Server 4",author:"Mario Menj\xedvar",author_title:"Software Engineer",author_url:"https://github.com/mariomenjr",author_image_url:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4",tags:["oauth2.0","openid","csharp","identity server","nodejs"],keywords:["oauth 2.0","validar bearer token nodejs","openid","espa\xf1ol","que es identity server","como proteger api con identity server","como proteger api jwt","como proteger api nodejs","implementar autenticacion jwt react","que es bearer token","autenticando api rest con nodejS y jwt","implementar JSON web token","como implementar autenticacion basada en token","autenticacion y autorizacion","que es jwks"],date:new Date("2021-07-29T23:31:18.000Z"),description:"En esta entrada, hablaremos de quiz\xe1 la m\xe1s conocida implementaci\xf3n de los protocolos OpenID Connect y OAuth 2.0 para .NET Core: Identity Server 4. Te mostrar\xe9 c\xf3mo implementarlo y consumir sus servicios de autorizaci\xf3n/autenticaci\xf3n para asegurar una SPA junto con una API en NodeJS.",image:"https://images.unsplash.com/photo-1532604146921-0e8bd9ab0891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"},u=void 0,s={permalink:"/blog/2021/07/29/autenticacion-como-servicio-con-identity-server-4",editUrl:"https://github.com/mariomenjr/mariomenjr/edit/main/blog/2021-07-29_autenticacion-como-servicio-con-identity-server-4.md",source:"@site/blog/2021-07-29_autenticacion-como-servicio-con-identity-server-4.md",title:"Autenticaci\xf3n como servicio con Identity Server 4",description:"En esta entrada, hablaremos de quiz\xe1 la m\xe1s conocida implementaci\xf3n de los protocolos OpenID Connect y OAuth 2.0 para .NET Core: Identity Server 4. Te mostrar\xe9 c\xf3mo implementarlo y consumir sus servicios de autorizaci\xf3n/autenticaci\xf3n para asegurar una SPA junto con una API en NodeJS.",date:"2021-07-29T23:31:18.000Z",formattedDate:"29 de julio de 2021",tags:[{label:"oauth2.0",permalink:"/blog/tags/oauth-2-0"},{label:"openid",permalink:"/blog/tags/openid"},{label:"csharp",permalink:"/blog/tags/csharp"},{label:"identity server",permalink:"/blog/tags/identity-server"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:17.3,truncated:!0,authors:[{name:"Mario Menj\xedvar",title:"Software Engineer",url:"https://github.com/mariomenjr",imageURL:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4"}],prevItem:{title:"C\xf3mo consultar y persistir datos en MongoDB con .NET",permalink:"/blog/2021/08/18/como-consultar-y-persistir-datos-en-mongodb-con--net"},nextItem:{title:"C\xf3mo trabajar con React Context y Hooks",permalink:"/blog/2021/04/04/como-trabajar-con-react-context-y-hooks"}},l={authorsImageUrls:[void 0]},m=[],p={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Antes de comenzar debemos hacer una distinci\xf3n muy importante. Autenticar y autorizar son dos aspectos completamente independientes pero centrales a la seguridad. Aut\xe9nticar se refiere a confirmar que los usuarios son quienes dicen ser. Autorizar, por otro lado, es dar acceso a los recursos a esos usuarios."),(0,a.kt)("p",null,"En esta entrada, hablaremos de quiz\xe1 la m\xe1s conocida implementaci\xf3n de los protocolos OpenID Connect y OAuth 2.0 para .NET Core: Identity Server 4. Te mostrar\xe9 c\xf3mo implementarlo y consumir sus servicios de autorizaci\xf3n/autenticaci\xf3n para asegurar una SPA junto con una API en NodeJS."))}d.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);