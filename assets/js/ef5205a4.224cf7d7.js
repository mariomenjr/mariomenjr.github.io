"use strict";(self.webpackChunkmariomenjr=self.webpackChunkmariomenjr||[]).push([[7633],{3905:function(e,r,a){a.d(r,{Zo:function(){return s},kt:function(){return d}});var t=a(7294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=t.createContext({}),m=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},s=function(e){var r=m(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(a),d=o,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||n;return a?t.createElement(f,i(i({ref:r},s),{},{components:a})):t.createElement(f,i({ref:r},s))}));function d(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<n;m++)i[m]=a[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6074:function(e,r,a){a.r(r),a.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var t=a(3117),o=a(102),n=(a(7294),a(3905)),i=["components"],l={slug:"2020/09/04/como-validar-formularios-en-react-sin-lagrimas",title:"C\xf3mo validar formularios en React, sin l\xe1grimas",author:"Mario Menj\xedvar",author_title:"Software Engineer",author_url:"https://github.com/mariomenjr",author_image_url:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4",tags:["formik","react","javascript"],keywords:["formik","espa\xf1ol","react","c\xf3mo","validar formularios react","formulario html","formulario react","validar formularios javascript","validar formularios"],date:new Date("2020-09-04T14:08:02.000Z"),description:"Hist\xf3ricamente, validar un formulario en React requiere de una cantidad impresionante de boilerplate que a\xf1ade complejidad innecesaria. Veamos c\xf3mo librarnos de eso.",image:"https://imgur.com/wm6iA0l.png"},c=void 0,m={permalink:"/blog/2020/09/04/como-validar-formularios-en-react-sin-lagrimas",editUrl:"https://github.com/mariomenjr/mariomenjr/edit/main/blog/2020-09-04_como-validar-formularios-en-react-sin-lagrimas.md",source:"@site/blog/2020-09-04_como-validar-formularios-en-react-sin-lagrimas.md",title:"C\xf3mo validar formularios en React, sin l\xe1grimas",description:"Hist\xf3ricamente, validar un formulario en React requiere de una cantidad impresionante de boilerplate que a\xf1ade complejidad innecesaria. Veamos c\xf3mo librarnos de eso.",date:"2020-09-04T14:08:02.000Z",formattedDate:"4 de septiembre de 2020",tags:[{label:"formik",permalink:"/blog/tags/formik"},{label:"react",permalink:"/blog/tags/react"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:7.15,truncated:!0,authors:[{name:"Mario Menj\xedvar",title:"Software Engineer",url:"https://github.com/mariomenjr",imageURL:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4"}],frontMatter:{slug:"2020/09/04/como-validar-formularios-en-react-sin-lagrimas",title:"C\xf3mo validar formularios en React, sin l\xe1grimas",author:"Mario Menj\xedvar",author_title:"Software Engineer",author_url:"https://github.com/mariomenjr",author_image_url:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4",tags:["formik","react","javascript"],keywords:["formik","espa\xf1ol","react","c\xf3mo","validar formularios react","formulario html","formulario react","validar formularios javascript","validar formularios"],date:"2020-09-04T14:08:02.000Z",description:"Hist\xf3ricamente, validar un formulario en React requiere de una cantidad impresionante de boilerplate que a\xf1ade complejidad innecesaria. Veamos c\xf3mo librarnos de eso.",image:"https://imgur.com/wm6iA0l.png"},prevItem:{title:"C\xf3mo trabajar con React Context y Hooks",permalink:"/blog/2021/04/04/como-trabajar-con-react-context-y-hooks"},nextItem:{title:"#Algoritmos: B\xfasqueda binaria",permalink:"/blog/2020/08/14/algoritmos-busqueda-binaria"}},s={authorsImageUrls:[void 0]},u=[],p={toc:u};function d(e){var r=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Todos los desarrolladores de software que trabajamos con React, absolutamente todos, hemos tenido ese tedioso ticket para crear y/o validar un formulario. Afortunadamente para ti, hoy te mostrar\xe9 la forma m\xe1s sencilla de cerrarlo: Formik."))}d.isMDXComponent=!0}}]);