"use strict";(self.webpackChunkmariomenjr=self.webpackChunkmariomenjr||[]).push([[7904],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(b,i(i({ref:t},u),{},{components:r})):a.createElement(b,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(3117),n=r(7294),o=r(6010),i=r(2389),s=r(7392),c=r(7094),l=r(2466);const u="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:r,block:i,defaultValue:p,values:d,groupId:b,className:v}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??h.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),y=(0,s.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,c.U)(),[k,O]=(0,n.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=b){const e=j[b];null!=e&&e!==k&&f.some((t=>t.value===e))&&O(e)}const S=e=>{const t=e.currentTarget,r=E.indexOf(t),a=f[r].value;a!==k&&(T(t),O(a),null!=b&&w(b,String(a)))},x=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},v)},f.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>E.push(e),onKeyDown:x,onFocus:S,onClick:S},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":k===t})}),r??t)}))),r?(0,n.cloneElement)(h.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function d(e){const t=(0,i.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},5806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(3117),n=(r(7294),r(3905));r(5488),r(5162);const o={slug:"2021/07/29/autenticacion-como-servicio-con-identity-server-4",title:"Autenticaci\xf3n como servicio con Identity Server 4",author:"Mario Menj\xedvar",author_title:"Software Engineer",author_url:"https://github.com/mariomenjr",author_image_url:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4",tags:["oauth2.0","openid","csharp","identity server","nodejs"],keywords:["oauth 2.0","validar bearer token nodejs","openid","espa\xf1ol","que es identity server","como proteger api con identity server","como proteger api jwt","como proteger api nodejs","implementar autenticacion jwt react","que es bearer token","autenticando api rest con nodejS y jwt","implementar JSON web token","como implementar autenticacion basada en token","autenticacion y autorizacion","que es jwks"],date:new Date("2021-07-29T23:31:18.000Z"),description:"En esta entrada, hablaremos de quiz\xe1 la m\xe1s conocida implementaci\xf3n de los protocolos OpenID Connect y OAuth 2.0 para .NET Core: Identity Server 4. Te mostrar\xe9 c\xf3mo implementarlo y consumir sus servicios de autorizaci\xf3n/autenticaci\xf3n para asegurar una SPA junto con una API en NodeJS.",image:"https://images.unsplash.com/photo-1532604146921-0e8bd9ab0891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"},i=void 0,s={permalink:"/blog/2021/07/29/autenticacion-como-servicio-con-identity-server-4",editUrl:"https://github.com/mariomenjr/mariomenjr/edit/main/blog/2021-07-29_autenticacion-como-servicio-con-identity-server-4.md",source:"@site/blog/2021-07-29_autenticacion-como-servicio-con-identity-server-4.md",title:"Autenticaci\xf3n como servicio con Identity Server 4",description:"En esta entrada, hablaremos de quiz\xe1 la m\xe1s conocida implementaci\xf3n de los protocolos OpenID Connect y OAuth 2.0 para .NET Core: Identity Server 4. Te mostrar\xe9 c\xf3mo implementarlo y consumir sus servicios de autorizaci\xf3n/autenticaci\xf3n para asegurar una SPA junto con una API en NodeJS.",date:"2021-07-29T23:31:18.000Z",formattedDate:"29 de julio de 2021",tags:[{label:"oauth2.0",permalink:"/blog/tags/oauth-2-0"},{label:"openid",permalink:"/blog/tags/openid"},{label:"csharp",permalink:"/blog/tags/csharp"},{label:"identity server",permalink:"/blog/tags/identity-server"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:17.3,hasTruncateMarker:!0,authors:[{name:"Mario Menj\xedvar",title:"Software Engineer",url:"https://github.com/mariomenjr",imageURL:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4"}],frontMatter:{slug:"2021/07/29/autenticacion-como-servicio-con-identity-server-4",title:"Autenticaci\xf3n como servicio con Identity Server 4",author:"Mario Menj\xedvar",author_title:"Software Engineer",author_url:"https://github.com/mariomenjr",author_image_url:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4",tags:["oauth2.0","openid","csharp","identity server","nodejs"],keywords:["oauth 2.0","validar bearer token nodejs","openid","espa\xf1ol","que es identity server","como proteger api con identity server","como proteger api jwt","como proteger api nodejs","implementar autenticacion jwt react","que es bearer token","autenticando api rest con nodejS y jwt","implementar JSON web token","como implementar autenticacion basada en token","autenticacion y autorizacion","que es jwks"],date:"2021-07-29T23:31:18.000Z",description:"En esta entrada, hablaremos de quiz\xe1 la m\xe1s conocida implementaci\xf3n de los protocolos OpenID Connect y OAuth 2.0 para .NET Core: Identity Server 4. Te mostrar\xe9 c\xf3mo implementarlo y consumir sus servicios de autorizaci\xf3n/autenticaci\xf3n para asegurar una SPA junto con una API en NodeJS.",image:"https://images.unsplash.com/photo-1532604146921-0e8bd9ab0891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"},prevItem:{title:"C\xf3mo consultar y persistir datos en MongoDB con .NET",permalink:"/blog/2021/08/18/como-consultar-y-persistir-datos-en-mongodb-con--net"},nextItem:{title:"C\xf3mo trabajar con React Context y Hooks",permalink:"/blog/2021/04/04/como-trabajar-con-react-context-y-hooks"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Antes de comenzar debemos hacer una distinci\xf3n muy importante. Autenticar y autorizar son dos aspectos completamente independientes pero centrales a la seguridad. Aut\xe9nticar se refiere a confirmar que los usuarios son quienes dicen ser. Autorizar, por otro lado, es dar acceso a los recursos a esos usuarios."),(0,n.kt)("p",null,"En esta entrada, hablaremos de quiz\xe1 la m\xe1s conocida implementaci\xf3n de los protocolos OpenID Connect y OAuth 2.0 para .NET Core: Identity Server 4. Te mostrar\xe9 c\xf3mo implementarlo y consumir sus servicios de autorizaci\xf3n/autenticaci\xf3n para asegurar una SPA junto con una API en NodeJS."))}m.isMDXComponent=!0}}]);