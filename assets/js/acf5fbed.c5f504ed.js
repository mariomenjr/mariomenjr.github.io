"use strict";(self.webpackChunkmariomenjr=self.webpackChunkmariomenjr||[]).push([[7904],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(6010),i=n(2389),u=n(7392),c=n(7094),s=n(2466),l="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,n,i=e.lazy,p=e.block,d=e.defaultValue,f=e.values,v=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,u.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var j=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==j&&!y.some((function(e){return e.value===j})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+j+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,c.U)(),k=w.tabGroupChoices,O=w.setTabGroupChoices,E=(0,a.useState)(j),T=E[0],S=E[1],x=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var A=k[v];null!=A&&A!==T&&y.some((function(e){return e.value===A}))&&S(A)}var N=function(e){var t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==T&&(I(t),S(r),null!=v&&O(v,String(r)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var o,i=x.indexOf(e.currentTarget)-1;n=null!=(o=x[i])?o:x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",l)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:N,onClick:N},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},5806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(5488),n(5162),["components"]),u={slug:"2021/07/29/autenticacion-como-servicio-con-identity-server-4",title:"Autenticaci\xf3n como servicio con Identity Server 4",author:"Mario Menj\xedvar",author_title:"Software Engineer",author_url:"https://github.com/mariomenjr",author_image_url:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4",tags:["oauth2.0","openid","csharp","identity server","nodejs"],keywords:["oauth 2.0","validar bearer token nodejs","openid","espa\xf1ol","que es identity server","como proteger api con identity server","como proteger api jwt","como proteger api nodejs","implementar autenticacion jwt react","que es bearer token","autenticando api rest con nodejS y jwt","implementar JSON web token","como implementar autenticacion basada en token","autenticacion y autorizacion","que es jwks"],date:new Date("2021-07-29T23:31:18.000Z"),description:"En esta entrada, hablaremos de quiz\xe1 la m\xe1s conocida implementaci\xf3n de los protocolos OpenID Connect y OAuth 2.0 para .NET Core: Identity Server 4. Te mostrar\xe9 c\xf3mo implementarlo y consumir sus servicios de autorizaci\xf3n/autenticaci\xf3n para asegurar una SPA junto con una API en NodeJS.",image:"https://images.unsplash.com/photo-1532604146921-0e8bd9ab0891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"},c=void 0,s={permalink:"/blog/2021/07/29/autenticacion-como-servicio-con-identity-server-4",editUrl:"https://github.com/mariomenjr/mariomenjr/edit/main/blog/2021-07-29_autenticacion-como-servicio-con-identity-server-4.md",source:"@site/blog/2021-07-29_autenticacion-como-servicio-con-identity-server-4.md",title:"Autenticaci\xf3n como servicio con Identity Server 4",description:"En esta entrada, hablaremos de quiz\xe1 la m\xe1s conocida implementaci\xf3n de los protocolos OpenID Connect y OAuth 2.0 para .NET Core: Identity Server 4. Te mostrar\xe9 c\xf3mo implementarlo y consumir sus servicios de autorizaci\xf3n/autenticaci\xf3n para asegurar una SPA junto con una API en NodeJS.",date:"2021-07-29T23:31:18.000Z",formattedDate:"29 de julio de 2021",tags:[{label:"oauth2.0",permalink:"/blog/tags/oauth-2-0"},{label:"openid",permalink:"/blog/tags/openid"},{label:"csharp",permalink:"/blog/tags/csharp"},{label:"identity server",permalink:"/blog/tags/identity-server"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:17.3,truncated:!0,authors:[{name:"Mario Menj\xedvar",title:"Software Engineer",url:"https://github.com/mariomenjr",imageURL:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4"}],frontMatter:{slug:"2021/07/29/autenticacion-como-servicio-con-identity-server-4",title:"Autenticaci\xf3n como servicio con Identity Server 4",author:"Mario Menj\xedvar",author_title:"Software Engineer",author_url:"https://github.com/mariomenjr",author_image_url:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4",tags:["oauth2.0","openid","csharp","identity server","nodejs"],keywords:["oauth 2.0","validar bearer token nodejs","openid","espa\xf1ol","que es identity server","como proteger api con identity server","como proteger api jwt","como proteger api nodejs","implementar autenticacion jwt react","que es bearer token","autenticando api rest con nodejS y jwt","implementar JSON web token","como implementar autenticacion basada en token","autenticacion y autorizacion","que es jwks"],date:"2021-07-29T23:31:18.000Z",description:"En esta entrada, hablaremos de quiz\xe1 la m\xe1s conocida implementaci\xf3n de los protocolos OpenID Connect y OAuth 2.0 para .NET Core: Identity Server 4. Te mostrar\xe9 c\xf3mo implementarlo y consumir sus servicios de autorizaci\xf3n/autenticaci\xf3n para asegurar una SPA junto con una API en NodeJS.",image:"https://images.unsplash.com/photo-1532604146921-0e8bd9ab0891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"},prevItem:{title:"C\xf3mo consultar y persistir datos en MongoDB con .NET",permalink:"/blog/2021/08/18/como-consultar-y-persistir-datos-en-mongodb-con--net"},nextItem:{title:"C\xf3mo trabajar con React Context y Hooks",permalink:"/blog/2021/04/04/como-trabajar-con-react-context-y-hooks"}},l={authorsImageUrls:[void 0]},m=[],p={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Antes de comenzar debemos hacer una distinci\xf3n muy importante. Autenticar y autorizar son dos aspectos completamente independientes pero centrales a la seguridad. Aut\xe9nticar se refiere a confirmar que los usuarios son quienes dicen ser. Autorizar, por otro lado, es dar acceso a los recursos a esos usuarios."),(0,o.kt)("p",null,"En esta entrada, hablaremos de quiz\xe1 la m\xe1s conocida implementaci\xf3n de los protocolos OpenID Connect y OAuth 2.0 para .NET Core: Identity Server 4. Te mostrar\xe9 c\xf3mo implementarlo y consumir sus servicios de autorizaci\xf3n/autenticaci\xf3n para asegurar una SPA junto con una API en NodeJS."))}d.isMDXComponent=!0}}]);