(self.webpackChunkmariomenjr=self.webpackChunkmariomenjr||[]).push([[687],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return c},kt:function(){return p}});var o=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var a=e.components,r=e.mdxType,t=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),p=r,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||t;return a?o.createElement(g,i(i({ref:n},c),{},{components:a})):o.createElement(g,i({ref:n},c))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=a.length,i=new Array(t);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<t;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7561:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var o=a(2122),r=a(9756),t=(a(7294),a(3905)),i=["components"],s={slug:"2020/08/14/algoritmos-busqueda-binaria",title:"#Algoritmos: B\xfasqueda binaria",author:"Mario Menj\xedvar",author_title:"Software Engineer",author_url:"https://github.com/mariomenjr",author_image_url:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4",tags:["algoritmos","computer science","busqueda binaria"],keywords:["algoritmos","computer","science","busqueda","binaria","blog","ciencias","computacion"],date:new Date("2020-08-14T16:47:12.000Z"),description:"A qu\xe9 alguna vez te toco buscar un n\xfamero de tel\xe9fono en aquellos gigantescos directorios tel\xe9fonicos, \xbfC\xf3mo le hac\xedas, p\xe1gina por p\xe1gina o te tratabas de ahorrar tiempo salt\xe1ndote p\xe1ginas?",image:"https://upload.wikimedia.org/wikipedia/commons/f/f7/Binary_search_into_array.png"},l=void 0,u={permalink:"/blog/2020/08/14/algoritmos-busqueda-binaria",editUrl:"https://github.com/mariomenjr/mariomenjr/edit/main/blog/2020-08-14_algoritmos-busqueda-binaria.md",source:"@site/blog/2020-08-14_algoritmos-busqueda-binaria.md",title:"#Algoritmos: B\xfasqueda binaria",description:"A qu\xe9 alguna vez te toco buscar un n\xfamero de tel\xe9fono en aquellos gigantescos directorios tel\xe9fonicos, \xbfC\xf3mo le hac\xedas, p\xe1gina por p\xe1gina o te tratabas de ahorrar tiempo salt\xe1ndote p\xe1ginas?",date:"2020-08-14T16:47:12.000Z",formattedDate:"14 de agosto de 2020",tags:[{label:"algoritmos",permalink:"/blog/tags/algoritmos"},{label:"computer science",permalink:"/blog/tags/computer-science"},{label:"busqueda binaria",permalink:"/blog/tags/busqueda-binaria"}],readingTime:4.28,truncated:!0,prevItem:{title:"C\xf3mo validar formularios en React, sin l\xe1grimas",permalink:"/blog/2020/09/04/como-validar-formularios-en-react-sin-lagrimas"},nextItem:{title:"C\xf3mo crear un blog a base de markdown y JavaScript",permalink:"/blog/2020/08/09/como-crear-un-blog-a-base-de-markdown-y-javascript"}},c=[{value:"La idea",id:"la-idea",children:[]},{value:"En c\xf3digo",id:"en-c\xf3digo",children:[]},{value:"Conclusi\xf3n",id:"conclusi\xf3n",children:[]},{value:"Referencias",id:"referencias",children:[]}],d={toc:c};function m(e){var n=e.components,a=(0,r.Z)(e,i);return(0,t.kt)("wrapper",(0,o.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"A qu\xe9 alguna vez te toco buscar un n\xfamero de tel\xe9fono en aquellos gigantescos directorios tel\xe9fonicos, \xbfC\xf3mo le hac\xedas, p\xe1gina por p\xe1gina o tratabas de ahorrar tiempo salt\xe1ndote p\xe1ginas?"),(0,t.kt)("h2",{id:"la-idea"},"La idea"),(0,t.kt)("p",null,"Retomando el gigantesco directorio tel\xe9fonico, podemos estar seguros de una cosa: los n\xfameros de tel\xe9fono se presentan en orden alfab\xe9tico por el nombre del propietario. Esto es es imprecindible para el algoritmo de b\xfasqueda binaria. "),(0,t.kt)("p",null,"Suponiendo que buscamos el n\xfamero tel\xe9fonico de Juan, \xbfTiene sentido empezar desde las primeras p\xe1ginas d\xf3nde estar\xe1n los n\xfameros de personas c\xf3mo Alberto o Alejandra? Si tu respuesta es no, est\xe1s en lo correcto, ser\xe1 much\xedsimo m\xe1s f\xe1cil identificar en cu\xe1l p\xe1gina empiezan a listarse los nombres que inician con J, y empezar nuestra b\xfasqueda desde ah\xed. Una vez en esta p\xe1gina, podr\xedamos incluso tratar de id\xe9ntificar en cu\xe1l p\xe1gina empiezan a listarse los nombres que empiezan con Ju, y as\xed sucesivamente hasta encontrar a Juan."),(0,t.kt)("h2",{id:"en-c\xf3digo"},"En c\xf3digo"),(0,t.kt)("p",null,"Pero en este blog nosotros ya no usamos esos gigantescos directorios tel\xe9fonicos, as\xed que vamos a ver un ejemplo m\xe1s acorde a lo que sabemos hacer aqu\xed: c\xf3digo. Por lo qu\xe9 para nuestro ejemplo pr\xe1ctico, vamos a validar si un n\xfamero ",(0,t.kt)("inlineCode",{parentName:"p"},"X")," est\xe1 inclu\xeddo dentro de una lista de ",(0,t.kt)("inlineCode",{parentName:"p"},"N")," elementos."),(0,t.kt)("p",null,"Como mencionamos antes en el ejemplo del directorio, pod\xedamos estar seguros de una cosa: sus datos est\xe1n ordenados. Esto se mantiene a la hora de utilizar c\xf3digo. Nuestro arreglo de datos debe estar ordenado. Sino lo est\xe1, debemos ordenarlo. Eso lo dejaremos para futuros posts."),(0,t.kt)("p",null,"Esta ser\xe1 nuestra lista de trabajo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const numbers = [2, 3, 5, 9, 15, 17, 55, 69];\n")),(0,t.kt)("p",null,"Para ejecutar de manera efectiva el algoritmo, necesitaremos tener la noci\xf3n del mayor y menor n\xfamero en nuestra lista, y ya qu\xe9 no hay mejor manera de localizar valores en una lista que usar su indice, guardaremos eso, los indices:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"let maxIndex = numbers.length - 1;\nlet minIndex = 0;\n")),(0,t.kt)("p",null,"\xbfRecuerdas como en el ejemplo del directorio, tratabamos de identificar la p\xe1gina en la cu\xe1l los nombres que inician con J empezaban a listarse? Al aplicar el algoritmo de b\xfasqueda binaria tomamos un enfoque m\xe1s general. Esto significa que nosotros siempre dividiremos la lista por la mitad y, partiendo de una comparaci\xf3n, definiremos a cu\xe1l de las dos mitades pertence el valor que deseamos encontrar. Una vez conozcamos la mitad a la qu\xe9 pertenece, repetimos el proceso y as\xed sucesivamente hasta que nuestra \xe1rea de b\xfasqueda se reduce a uno, o simplemente no encontramos el valor."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/f/f7/Binary_search_into_array.png",alt:"B\xfasqueda binaria"}),"\nEste es el esquema del funcionamiento del algoritmo de ",(0,t.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/B%C3%BAsqueda_binaria"},"Wikipedia"))),(0,t.kt)("p",null,"Antes de ejemplificar lo anterior, nos queda mostrar c\xf3mo identificaremos la mitad de nuestra lista:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"let half = Math.floor((minIndex + maxIndex)/2);\n")),(0,t.kt)("p",null,"Ahora s\xed, armemos el algoritmo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const find = 17;\nconst numbers = [2, 3, 5, 9, 15, 17, 55, 69];\n\nfunction busquedaBinaria(collection, findee) {\n  // Asignando los valores del rango inicial\n  let minIndex = 0;\n  let maxIndex = numbers.length - 1;\n\n  while (minIndex <= maxIndex) {\n    \n    // Calculando la posici\xf3n en el medio de la lista\n    let half = Math.floor((minIndex + maxIndex) / 2);\n\n    // Recoger el valor del medio\n    let guess = collection[half];\n\n    if (guess === findee) // Comparamos si es el valor que buscamos\n      return half;\n\n    else if (guess > findee) \n      // Si el valor que buscamos es menor al valor supuesto\n      // debemos reducir nuestro rango de b\xfasqueda.\n      // Ahora nuestro mayor valor est\xe1 justo debajo de la mitad calculada.\n      maxIndex = half - 1; \n    \n    else \n      // Si el valor que buscamos es mayor al valor supuesto\n      // debemos reducir nuestro rango de b\xfasqueda.\n      // Ahora nuestro menor valor est\xe1 justo arriba de la mitad calculada.\n      minIndex = half + 1;\n  }\n  return -1;\n}\n\nconst foundIndex = busquedaBinaria(numbers, find);\nconsole.log(\n  foundIndex === -1\n    ? `El n\xfamero ${find} no fue encontrado.`\n    : `El n\xfamero ${find} est\xe1 en el \xedndice ${foundIndex}.`\n);\n")),(0,t.kt)("p",null,"Es esta din\xe1mica de decidir \xfanicamente entre dos opciones, cada vez que reducimos el \xe1rea de b\xfasqueda, lo qu\xe9 le da el nombre algoritmo."),(0,t.kt)("h2",{id:"conclusi\xf3n"},"Conclusi\xf3n"),(0,t.kt)("p",null,"Pudimos simplemente ejecutar el siguiente c\xf3digo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"const find = 17;\nconst numbers = [2, 3, 5, 9, 15, 17, 55, 69];\n\nlet foundIndex = -1;\n\nfor (let index = 0; index < numbers.length; index++) {\n  if (find === numbers[index]) {\n    foundIndex = index;\n    break;\n  }\n}\n\nconsole.log(\n  foundIndex === -1\n    ? `El n\xfamero ${find} no fue encontrado.`\n    : `El n\xfamero ${find} est\xe1 en el \xedndice ${foundIndex}.`\n);\n")),(0,t.kt)("p",null,"Comparar cada uno de los ",(0,t.kt)("inlineCode",{parentName:"p"},"items")," en la lista y, cuando lo encontramos, listo. Podr\xedas pensar que es enfoque es much\xedsimo m\xe1s f\xe1cil y r\xe1pido de programar, y tienes raz\xf3n. Pero, \xbfQu\xe9 pasa cuando nuestra lista no contiene 8 ",(0,t.kt)("inlineCode",{parentName:"p"},"items")," sino 1,000,000?"),(0,t.kt)("p",null,"La intenci\xf3n de este post es mostrarte que, si bien es cierto en programaci\xf3n hay muchas formas de resolver un problema, nuestro objetivo conforme avanzamos en nuestra carrera es escogar la m\xe1s \xf3ptima. Cada problema es un mundo y es nuestro trabajo encontrar la mejor soluci\xf3n."),(0,t.kt)("h2",{id:"referencias"},"Referencias"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Binary_search_algorithm"},"Binary search algorithm from Wikipedia")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://www.goodreads.com/book/show/22847284-grokking-algorithms-an-illustrated-guide-for-programmers-and-other-curio"},"Grokking Algorithms: An Illustrated Guide For Programmers and Other Curious People"))))}m.isMDXComponent=!0}}]);