"use strict";(self.webpackChunkmariomenjr=self.webpackChunkmariomenjr||[]).push([[6959],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,k=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(k,s(s({ref:t},m),{},{components:n})):a.createElement(k,s({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8310:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return m},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],c={slug:"2021/04/04/como-trabajar-con-react-context-y-hooks",title:"C\xf3mo trabajar con React Context y Hooks",author:"Mario Menj\xedvar",author_title:"Software Engineer",author_url:"https://github.com/mariomenjr",author_image_url:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4",tags:["react","redux","javascript","react context"],keywords:["react","espa\xf1ol","react context","c\xf3mo usar react context","user","blog","hooks","reemplazar redux","reemplazar redux con context","dejar de usar redux","redux","reducer","global state"],date:new Date("2021-04-04T17:07:02.000Z"),description:"Esta ma\xf1ana, por curiosidad, le\xeda la fechas de lanzamientos de algunas de las herramientas que hoy damos por hecho. React, por ejemplo, fue lanzado el 29 de mayo del a\xf1o 2013. En estos casi 10 a\xf1os, hemos visto la evoluci\xf3n de este ecosistema, desde _Class Components_ a _Hooks_. Hoy, te mostrar\xe9 c\xf3mo hacer uso de una de las \xfaltimas caracter\xedsticas a\xf1adidas a este popular Framework: el contexto.",image:"https://imgur.com/5ZmbSG2.png"},i=void 0,l={permalink:"/blog/2021/04/04/como-trabajar-con-react-context-y-hooks",editUrl:"https://github.com/mariomenjr/mariomenjr/edit/main/blog/2021-04-04_como-trabajar-con-react-context-y-hooks.md",source:"@site/blog/2021-04-04_como-trabajar-con-react-context-y-hooks.md",title:"C\xf3mo trabajar con React Context y Hooks",description:"Esta ma\xf1ana, por curiosidad, le\xeda la fechas de lanzamientos de algunas de las herramientas que hoy damos por hecho. React, por ejemplo, fue lanzado el 29 de mayo del a\xf1o 2013. En estos casi 10 a\xf1os, hemos visto la evoluci\xf3n de este ecosistema, desde _Class Components_ a _Hooks_. Hoy, te mostrar\xe9 c\xf3mo hacer uso de una de las \xfaltimas caracter\xedsticas a\xf1adidas a este popular Framework: el contexto.",date:"2021-04-04T17:07:02.000Z",formattedDate:"4 de abril de 2021",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"redux",permalink:"/blog/tags/redux"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"react context",permalink:"/blog/tags/react-context"}],readingTime:6.4,truncated:!0,authors:[{name:"Mario Menj\xedvar",title:"Software Engineer",url:"https://github.com/mariomenjr",imageURL:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4"}],prevItem:{title:"Autenticaci\xf3n como servicio con Identity Server 4",permalink:"/blog/2021/07/29/autenticacion-como-servicio-con-identity-server-4"},nextItem:{title:"C\xf3mo validar formularios en React, sin l\xe1grimas",permalink:"/blog/2020/09/04/como-validar-formularios-en-react-sin-lagrimas"}},m={authorsImageUrls:[void 0]},u=[{value:"Hold on",id:"hold-on",children:[]},{value:"Ok, React Context",id:"ok-react-context",children:[]},{value:"Provider, Consumer, useReducer y useContext",id:"provider-consumer-usereducer-y-usecontext",children:[]},{value:"Ah s\xed, el Context",id:"ah-s\xed-el-context",children:[]},{value:"Conclusi\xf3n",id:"conclusi\xf3n",children:[]},{value:"Referencias",id:"referencias",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Esta ma\xf1ana, por curiosidad, le\xeda la fechas de lanzamientos de algunas de las herramientas que hoy damos por hecho. React, por ejemplo, fue lanzado el 29 de mayo del a\xf1o 2013. En estos casi 10 a\xf1os, hemos visto la evoluci\xf3n de este ecosistema, desde ",(0,o.kt)("em",{parentName:"p"},"Class Components")," a ",(0,o.kt)("em",{parentName:"p"},"Hooks"),". Hoy, te mostrar\xe9 c\xf3mo hacer uso de una de las caracter\xedsticas m\xe1s \xfatiles de este popular Framework: el contexto."),(0,o.kt)("h2",{id:"hold-on"},"Hold on"),(0,o.kt)("p",null,"Para ser pr\xe1cticos, estoy asumiendo que:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ya conoces c\xf3mo funcionan los ",(0,o.kt)("em",{parentName:"li"},"Hooks"),"."),(0,o.kt)("li",{parentName:"ul"},"Ya haz trabajado con librer\xedas de Estado global (por ejemplo, ",(0,o.kt)("em",{parentName:"li"},"Redux"),").")),(0,o.kt)("p",null,"Si este no es tu caso, igual qu\xe9date. Nos vamos a divertir."),(0,o.kt)("h2",{id:"ok-react-context"},"Ok, React Context"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"In a nutshell"),", ",(0,o.kt)("em",{parentName:"p"},"React Context")," nos permite compartir el ",(0,o.kt)("em",{parentName:"p"},"State")," de nuestra aplicaci\xf3n a trav\xe9s del \xe1rbol de componentes sin tener que ",(0,o.kt)("em",{parentName:"p"},"pasar")," las propiedades explic\xedtamente por cada uno de ellos. Pero... \xbfPor qu\xe9 querr\xedamos acceder a las propiedades sin tener que pasarlas expl\xedcitamente?"),(0,o.kt)("p",null,"Veamos el siguiente ejemplo, un carrito de compras:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// App.js\n\nimport React from "react";\nimport { Container, Row, Col, Form } from "reactstrap";\n\nexport default function App() {\n  const [cart] = React.useState([{ name: `iPad` }, { name: `OnePlus 9` }]);\n  const [user] = React.useState({ name: `Mario` });\n  /*\n   * En nuestra App, aqu\xed tenemos el origen de datos\n   */\n  return <Layout cart={cart} user={user} />;\n}\n\nfunction Layout({ cart, user }) {\n  /*\n   * Constru\xedmos el esqueleto de la interfaz\n   */\n  return (\n    <Container>\n      <Row>\n        <Col>\n          <CartForm cart={cart} user={user} />\n        </Col>\n      </Row>\n    </Container>\n  );\n}\n\nfunction CartForm({ cart, user }) {\n  /*\n   * Aqu\xed consumimos a user, pero no a cart\n   */\n  return (\n    <Form>\n      <h1>Carrito de {user.name}</h1>\n      <CartList cart={cart} />\n      <button type="submit">Buy</button>\n    </Form>\n  );\n}\n\nfunction CartList({ cart }) {\n  /*\n   * Finalmente consumimos a cart\n   */\n  return (\n    <div className={`p-2`}>\n      {cart.map((item, index) => (\n        <div key={index}>\n          <span style={{ color: `red`, cursor: `pointer` }}>[x]</span>\n          <span className={`mx-1`} />\n          <span>{item.name}</span>\n        </div>\n      ))}\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"Seguro notaste como los ",(0,o.kt)("em",{parentName:"p"},"States")," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"user"))," y ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"cart"))," tienen que ",(0,o.kt)("em",{parentName:"p"},"pasar")," por todos los componentes del \xe1rbol para llegar a los componentes d\xf3nde realmente ser\xe1n de utilidad. Cre\xe9me cuando te digo que esto puede complicarse a\xfan m\xe1s."),(0,o.kt)("p",null,"\xbfNo ser\xeda m\xe1s sencillo poder acceder a ellos justo d\xf3nde los necesitemos?"),(0,o.kt)("h2",{id:"provider-consumer-usereducer-y-usecontext"},"Provider, Consumer, useReducer y useContext"),(0,o.kt)("p",null,"Ya que tengo tu atenci\xf3n, vamos a introducir unos cuantos conceptos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Provider")),": Como su nombre lo sugiere (proveedor en espa\xf1ol), es el componente que proveer\xe1 los datos a ",(0,o.kt)("em",{parentName:"p"},"todos")," sus componentes hijos. Es aqu\xed d\xf3nde el ",(0,o.kt)("em",{parentName:"p"},"State")," vivir\xe1.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Consumer")),": Con \xe9l, cada nodo (o componente) puede acceder al ",(0,o.kt)("em",{parentName:"p"},"State")," que vive en el ",(0,o.kt)("em",{parentName:"p"},"Provider"),"."))),(0,o.kt)("p",null,'Estos dos conceptos son fundamentales para entender lo qu\xe9 sucede al implementar React Context en tu aplicaci\xf3n. Sin embargo, el t\xedtulo de este art\xedculo tiene un "y Hooks" al final. As\xed que debemos presentar los siguientes Hooks:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"useReducer")),": Si has utilizado ",(0,o.kt)("em",{parentName:"p"},"Redux"),", ya conoces el pr\xf3posito de un ",(0,o.kt)("em",{parentName:"p"},"reducer"),". Es una funci\xf3n que recibe dos parametros, el ",(0,o.kt)("em",{parentName:"p"},"state")," actual y una ",(0,o.kt)("em",{parentName:"p"},"action"),". Con estos dos p\xe1rametros, podemos organizar la forma en c\xf3mo el ",(0,o.kt)("em",{parentName:"p"},"State")," ser\xe1 actualizado ",(0,o.kt)("em",{parentName:"p"},"reduciendo")," las actualizaciones a casos. Los utilizaremos aqu\xed junto con ",(0,o.kt)("em",{parentName:"p"},"useContext"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"useContext")),": ",(0,o.kt)("em",{parentName:"p"},"In a nutshell"),", este Hook act\xfaa como un ",(0,o.kt)("em",{parentName:"p"},"Consumer"),"."))),(0,o.kt)("h2",{id:"ah-s\xed-el-context"},"Ah s\xed, el Context"),(0,o.kt)("p",null,"Lo siguiente en nuestra lista es:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configurar un Contexto"),(0,o.kt)("li",{parentName:"ul"},"Establecer una forma de actualizar el Context"),(0,o.kt)("li",{parentName:"ul"},"Consumir el Contexto")),(0,o.kt)("p",null,"Para eso, necesitamos el siguiente script. Encontrar\xe1s comentarios expl\xedcativos."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// context.js\n\nimport React from "react";\n\nconst StateContext = React.createContext();\nconst DispatchContext = React.createContext();\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case `REMOVE_ITEM`:\n      const index = Number(action.data.index);\n      return {\n        ...state,\n        cart: [...state.cart.slice(0, index), ...state.cart.slice(index + 1)],\n      };\n\n    default:\n      return state;\n  }\n}\n\nfunction Provider({ children }) {\n  /*\n   * Creamos un State usando el hook useReducer\n   * De esta manera, obtenemos la habilidad de separar nuestra l\xf3gica\n   * En acciones.\n   *\n   * Ver: https://es.reactjs.org/docs/hooks-reference.html#usereducer\n   */\n  const [state, dispatch] = React.useReducer(reducer, {\n    user: { name: `Mario` },\n    cart: [\n      { name: `iPad Air` },\n      { name: `OnePlus 9` },\n      { name: `Thinpad X1 Carbo 9 Gen` },\n    ],\n  });\n\n  /*\n   * Establecemos 2 Providers\n   * 1 para proveer el State\n   * 1 para proveer la funci\xf3n Dispatch\n   *\n   * Esto es as\xed, ya que la funci\xf3n Dispatch nunca cambiar\xe1\n   * Por esta raz\xf3n, la separamos del resto del State\n   */\n  return (\n    <StateContext.Provider value={state}>\n      <DispatchContext.Provider value={dispatch}>\n        {children}\n      </DispatchContext.Provider>\n    </StateContext.Provider>\n  );\n}\n\nfunction useConsumer() {\n  /*\n   * Finalmente, hacemos uso del Hook useContext\n   * para consumir el State que reside en cada Provider\n   *\n   * La raz\xf3n por la que es un Array es para darle el formato\n   * de un custom Hook.\n   */\n  return [\n    React.useContext(StateContext),\n    React.useContext(DispatchContext),\n  ].map((ctx) => {\n    if (ctx === undefined) throw new Error(`Provider not found`);\n    return ctx;\n  });\n}\n\n/*\n * Exportamos\n */\nexport { Provider, useConsumer };\n')),(0,o.kt)("p",null,"En el script anterior, nos encontramos con 3 funciones importantes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Provider")),": M\xe1s que una funci\xf3n, un tipo. Para ser m\xe1s espec\xedficos, un componente de React. Este componente proveer\xe1 el ",(0,o.kt)("em",{parentName:"p"},"State")," global.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"useConsumer")),": M\xe1s que una funci\xf3n, un custom Hook. Con \xe9l, consumiremos el ",(0,o.kt)("em",{parentName:"p"},"State")," en los hijos del componente ",(0,o.kt)("inlineCode",{parentName:"p"},"<Provider />"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"reducer")),": Nuestra funci\xf3n ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"reducer")),". Con ella, organizaremos c\xf3mo actualizaremos nuestro ",(0,o.kt)("em",{parentName:"p"},"State"),"."))),(0,o.kt)("p",null,"Por \xfaltimo, exportamos \xfanicamente lo que usaremos en los componentes d\xf3nde necesitemos el ",(0,o.kt)("em",{parentName:"p"},"State"),". En nuestro script ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// App.js\n\n// ...\n- function CartForm({ cart, user }) {       // Removed\n+ function CartForm()) {                    // Added\n\n+  const [state, dispatch] = useConsumer();\n\n+  function removeItem(index) {\n+    dispatch({ type: `REMOVE_ITEM`, data: { index } });\n+  }\n\n  /*\n   * Aqu\xed consumimos a user, pero no a cart\n   */\n  return (\n    <Form>\n-     <h1>Carrito de {user.name}</h1>\n+     <h1>Carrito de {state.user.name}</h1>\n\n-     <CartList cart={state.cart} removeItem={removeItem} />\n+     <CartList cart={state.cart} removeItem={removeItem} />\n\n-     <Button type="submit">Buy</Button>\n+     <Button type="submit" onClick={() => alert(`Thank you!`)}>Buy</Button>\n    </Form>\n  );\n}\n// ...\n')),(0,o.kt)("p",null,"En este ejemplo, ",(0,o.kt)("inlineCode",{parentName:"p"},"<CartForm>")," es el componente desde el cu\xe1l accedimos al contexto utilizando nuestro ",(0,o.kt)("em",{parentName:"p"},"Consumer")," ",(0,o.kt)("inlineCode",{parentName:"p"},"useConsumer"),". En \xe9l, programamos l\xf3gica para poder ejecutar acciones como remover un ",(0,o.kt)("em",{parentName:"p"},"item")," de la lita del carrito."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// App.js\n\n// ...\n- function CartList({ cart }) {             // Removed\n+ function CartList({ cart, removeItem }) { // Added\n  /*\n   * Finalmente consumimos a cart\n   */\n  return (\n    <div className={`p-2`}>\n      {cart.map((item, index) => (\n        <div key={index}>\n-         <span style={{ color: `red`, cursor: `pointer` }}>[x]</span>\n+         <span style={{ color: `red`, cursor: `pointer` }} onClick={() => removeItem(index)}>[x]</span>\n          <span className={`mx-1`} />\n          <span>{item.name}</span>\n        </div>\n      ))}\n    </div>\n  );\n}\n// ...\n")),(0,o.kt)("p",null,"Te preguntar\xe1s, \xbfPor qu\xe9 consumir el ",(0,o.kt)("em",{parentName:"p"},"State")," \xfanicamente en el componente ",(0,o.kt)("inlineCode",{parentName:"p"},"<CartForm />")," y no tambi\xe9n en ",(0,o.kt)("inlineCode",{parentName:"p"},"<CartList>"),"? La respuesta es simple. El ",(0,o.kt)("em",{parentName:"p"},"React Context")," es una herramienta muy poderosa, pero no significa que debamos usarla para todo."),(0,o.kt)("p",null,"En nuestro ejemplo, es m\xe1s importante mantener el componente ",(0,o.kt)("inlineCode",{parentName:"p"},"<CartList>")," reusable, de esta forma, si tenemos que renderizar la lista en otro lado, no dependeremos del contexto que creamos aqu\xed."),(0,o.kt)("h2",{id:"conclusi\xf3n"},"Conclusi\xf3n"),(0,o.kt)("p",null,"Espero te haya sido de utilidad este Post. Seguramente ver\xe1s como m\xe1s y m\xe1s proyectos utilizan las APIs nativas de React para manejar varibles globales, en lugar de instalar librer\xedas de terceros."),(0,o.kt)("p",null,"\xdanicamente ten en cuenta que est\xe1s son meramente herramientas, y no hay una sola que sea perfecta para cada caso de uso. En el ejemplo, tomamos la decisi\xf3n de dejar el componente presentacional ",(0,o.kt)("inlineCode",{parentName:"p"},"<CartList>")," independiente para poder usarlo en otros contextos sin problemas."),(0,o.kt)("h2",{id:"referencias"},"Referencias"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/context.html"},"Context")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#usereducer"},"useReducer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=rFnfvhtrNbQ"},"React Context Explained (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kentcdodds.com/blog/how-to-use-react-context-effectively"},"How to use React Context effectively"))))}d.isMDXComponent=!0}}]);