"use strict";(self.webpackChunkmariomenjr=self.webpackChunkmariomenjr||[]).push([[6751],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,g=c["".concat(i,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(g,s(s({ref:t},m),{},{components:a})):n.createElement(g,s({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8719:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],l={slug:"2020/08/09/como-crear-un-blog-a-base-de-markdown-y-javascript",title:"C\xf3mo crear un blog a base de markdown y JavaScript",author:"Mario Menj\xedvar",author_title:"Software Engineer",author_url:"https://github.com/mariomenjr",author_image_url:"https://avatars3.githubusercontent.com/u/1946936?s=460&v=4",tags:["javascript","svelte","blog","markdown","howto"],keywords:["javascript","svelte","blog","markdown","howto"],date:new Date("2020-08-09T17:23:17.000Z"),description:"Seguramente te haz hecho la siguiente pregunta: \xbfC\xf3mo hostear un blog que sea f\xe1cil de mantener, sin pagar un centavo? En este post te explico una de tantas alternativas."},i=void 0,p={permalink:"/blog/2020/08/09/como-crear-un-blog-a-base-de-markdown-y-javascript",editUrl:"https://github.com/mariomenjr/mariomenjr/edit/main/blog/2020-08-09_como-crear-un-blog-a-base-de-markdown-y-javascript.md",source:"@site/blog/2020-08-09_como-crear-un-blog-a-base-de-markdown-y-javascript.md",title:"C\xf3mo crear un blog a base de markdown y JavaScript",description:"Seguramente te haz hecho la siguiente pregunta: \xbfC\xf3mo hostear un blog que sea f\xe1cil de mantener, sin pagar un centavo? En este post te explico una de tantas alternativas.",date:"2020-08-09T17:23:17.000Z",formattedDate:"9 de agosto de 2020",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"svelte",permalink:"/blog/tags/svelte"},{label:"blog",permalink:"/blog/tags/blog"},{label:"markdown",permalink:"/blog/tags/markdown"},{label:"howto",permalink:"/blog/tags/howto"}],readingTime:8.62,truncated:!0,prevItem:{title:"#Algoritmos: B\xfasqueda binaria",permalink:"/blog/2020/08/14/algoritmos-busqueda-binaria"}},m=[{value:"Porqu\xe9",id:"porqu\xe9",children:[]},{value:"\xbfPor qu\xe9 <em>Sapper</em>?",id:"\xbfpor-qu\xe9-sapper",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Sitio est\xe1tico",id:"sitio-est\xe1tico",children:[]},{value:"Despliegue: Github Pages",id:"despliegue-github-pages",children:[]},{value:"Conclusi\xf3n",id:"conclusi\xf3n",children:[]},{value:"Referencias",id:"referencias",children:[]}],u={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Seguramente te haz hecho la siguiente pregunta: \xbfC\xf3mo hostear un blog que sea f\xe1cil de mantener, sin pagar un centavo? En este post te explico una de tantas alternativas."),(0,o.kt)("h2",{id:"porqu\xe9"},"Porqu\xe9"),(0,o.kt)("p",null,"Otra pregunta que probablemente este en tu cabeza es \xbfPor qu\xe9 markdown y JavaScript? La respuesta es un poco m\xe1s elaborada. Para empezar, \xbfQu\xe9 es markdown? Seg\xfan Wikipedia: "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Markdown es un lenguaje de marcado ligero que trata de conseguir la m\xe1xima legibilidad y facilidad de publicaci\xf3n tanto en su forma de entrada como de salida, inspir\xe1ndose en muchas convenciones existentes para marcar mensajes de correo electr\xf3nico usando texto plano" de ',(0,o.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/Markdown"},"Wikipedia"),".")),(0,o.kt)("p",null,"Al usar markdown para escribir un post, estamos estructurando nuestro contenido sin necesidad de incluir HTML o CSS en el momento. Es decir, nos enfocamos enteramente en lo importante: el texto. Esta simplicidad se ver\xe1 potencializada al incluir ",(0,o.kt)("em",{parentName:"p"},"Git")," y ",(0,o.kt)("em",{parentName:"p"},"Github")," en la formula, ya que podremos versionar nuestro contenido."),(0,o.kt)("p",null,"Como mencion\xe9, hay muchas alternativas para lograrlo. Fundamentalmente una p\xe1gina web no es m\xe1s que HTML, CSS y JavaScript. Herramientas como ",(0,o.kt)("a",{parentName:"p",href:"https://jekyllrb.com/"},(0,o.kt)("em",{parentName:"a"},"Jekyll")),", aprovechan esta regla de oro para ayudarte a generar y administrar posts f\xe1cilmente haciendo uso de markdown. Pero, \xbfQu\xe9 pasa si queremos tomar ventaja de todas las herramientas disponibles en el ecosistema JavaScript que se han establecido en los \xfaltimos 10 a\xf1os?  Para eso tenemos ",(0,o.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.org/"},(0,o.kt)("em",{parentName:"a"},"Gatsby")),", ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/"},(0,o.kt)("em",{parentName:"a"},"Next.js"))," o ",(0,o.kt)("a",{parentName:"p",href:"https://sapper.svelte.dev/docs"},(0,o.kt)("em",{parentName:"a"},"Sapper")),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"In a nutshell"),", estos tres frameworks permiten generar sitios est\xe1ticos haciendo uso de herramientas modernas como React o Svelte. En este post nos centraremos en ",(0,o.kt)("em",{parentName:"p"},"Sapper"),"."),(0,o.kt)("h2",{id:"\xbfpor-qu\xe9-sapper"},"\xbfPor qu\xe9 ",(0,o.kt)("em",{parentName:"h2"},"Sapper"),"?"),(0,o.kt)("p",null,"Svelte es el nuevo chico de la cuadra. Su propuesta insignia es mover la reactividad de la UI desde mediadores como el Virtual DOM hacia el lenguaje, o mejor dicho, al compilador, en contraste con React o Vue. Esto aumenta el desempe\xf1o de las aplicaciones y disminuye el tama\xf1o del ",(0,o.kt)("em",{parentName:"p"},"bundle"),"."),(0,o.kt)("p",null,"Puedes echar un vistazo a la ",(0,o.kt)("a",{parentName:"p",href:"https://www.swyx.io/writing/svelte-static/"},"comparativa")," entre Gatsby y Sapper realizada por ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/swyx"},"Shawn Wang"),", un popular desarrollador en ",(0,o.kt)("a",{parentName:"p",href:"https://egghead.io/"},"egghead.io"),". Se muestra una reducci\xf3n del 93% en el tama\xf1o del ",(0,o.kt)("em",{parentName:"p"},"bundle")," con ",(0,o.kt)("em",{parentName:"p"},"Sapper"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Para instalar Sapper, basta con ejecutar los siguientes comandos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'[user@host ~]$ npx degit "sveltejs/sapper-template#rollup" my-blog\n[user@host ~]$ cd my-blog\n[user@host my-blog]$ npm install\n[user@host my-blog]$ npm run dev\n')),(0,o.kt)("p",null,"En el folder del projecto ",(0,o.kt)("em",{parentName:"p"},"my-blog"),", nos interesan los siguientes files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"...\n\u251c src\n\u2502 \u251c routes\n| | \u251c blog\n| | | \u251c _posts.js\n| | | \u251c [slug].json.js\n| | | \u251c [slug].svelte\n| | | \u251c index.json.js\n| | | \u251c index.svelte\n...\n")),(0,o.kt)("p",null,"De paso creamos el siguiente directorio y archivo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"...\n+ \u251c content\n+ \u2502 \u251c 2020-08-08_hola-mundo.md\n  \u251c src\n  \u2502 \u251c routes\n...\n")),(0,o.kt)("p",null,"Con el siguiente contenido:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"---\nauthor: 'Mario Menj\xedvar'\nslug: 'hola-mundo'\ntitle: 'Hola Mundo'\ntimestamp: '2020-08-08T10:23:17.000-07:00'\n---\n\n# Hola mundo\n\nHola mundo.\n")),(0,o.kt)("p",null,"Necesitamos instalar los siguientes paquetes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[user@host my-blog]$ npm i gray-matter highlight.js marked\n")),(0,o.kt)("p",null,"En mi caso, quiero que los posts est\xe9n ordenados por su fecha de publicaci\xf3n y que esto se refleje en la URL. Tendremos que hacer unos cambios a los siguientes archivos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"...\n- | | | \u251c [slug].json.js\n- | | | \u251c [slug].svelte\n+ | | | \u251c [...slug].json.js\n+ | | | \u251c [...slug].svelte\n...\n")),(0,o.kt)("p",null,"Luego, reemplazamos el contenido:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// src/routes/blog/[...slug].json.js\n\nimport fs from "fs";\nimport path from "path";\nimport marked from "marked";\nimport hljs from "highlight.js";\nimport grayMatter from "gray-matter";\n\n/*\n * Para obtener el contenido del post\n */\nfunction getPost(year, month, day, fileName) {\n  return fs.readFileSync(\n    path.resolve("content", `${year}-${month}-${day}_${fileName}.md`),\n    "utf-8"\n  );\n}\n\n/*\n * En Sapper, este m\xe9todo responde a una request a trav\xe9s del m\xe9todo GET\n * En nuestro caso, la request de un JSON\n */\nexport function get(req, res, next) {\n  // As\xed es c\xf3mo resolvemos una `dynamic route` en Sapper,\n  // obtenemos cada valor en su variable respectiva\n  let [year, month, day, slug] = req.params.slug;\n\n  const postMarkdown = getPost(year, month, day, slug);\n  const renderer = new marked.Renderer();\n\n  // marked provee una manera de formatear partes espec\xedficas del markdown\n  // en este caso, el c\xf3digo\n  renderer.code = (source, lang) => {\n    const { value: highlighted } = hljs.highlight(lang, source);\n    return `<pre class=\'language-${lang} overflow-x-auto\'><code>${highlighted}</code></pre>`;\n  };\n\n  marked.use({ renderer });\n\n  const { data, content } = grayMatter(postMarkdown);\n  const html = marked(content);\n\n  if (html) {\n    res.writeHead(200, { "Content-Type": "application/json" });\n    res.end(JSON.stringify({ html, ...data }));\n  } else {\n    res.writeHead(404, { "Content-Type": "application/json" });\n    res.end(JSON.stringify({ message: `Not found` }));\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- src/routes/blog/[...slug].svelte --\x3e\n\n<script context="module">\n  /*\n   * Este m\xe9todo representa un paso en el ciclo de vida de un component en Sapper.\n   *\n   * \xdanicamente se ejecuta cuando el componente es montado. Aqu\xed haremos la petici\xf3n de nuestro JSON con la informaci\xf3n del post\n   */\n  export async function preload({ params }) {\n    let [year, month, day, slug] = params.slug;\n\n    const res = await this.fetch(`blog/${year}/${month}/${day}/${slug}.json`);\n    const data = await res.json();\n\n    if (res.status === 200) {\n      return { post: data };\n    } else {\n      this.error(res.status, data.message);\n    }\n  }\n<\/script>\n\n<script>\n  export let post;\n<\/script>\n\n<svelte:head>\n  <title>{post.title} by {post.author}</title>\n</svelte:head>\n\n<article>\n  {@html post.html}\n</article>\n')),(0,o.kt)("p",null,"De esta forma se renderizar\xe1 el post. Ya puedes verlo en tu ambiente local yendo a ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/blog/2020/08/08/hola-mundo"},"/blog/2020/08/08/hola-mundo"),"."),(0,o.kt)("p",null,"A\xfan hay un peque\xf1o detalle que debemos cubrir para cumplir con las reglas que ",(0,o.kt)("em",{parentName:"p"},"Sapper")," establece si queremos exportar nuestro peque\xf1o blog como un sitio est\xe1tico."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"... cualquier p\xe1gina que quieras que sea inclu\xedda en el sitio (est\xe1tico) exportado debe ser esta ligado con una etiqueta del tipo \\<a',">"," o a\xf1adida c\xf3mo parametro de la opci\xf3n  --entry del comando ",(0,o.kt)("inlineCode",{parentName:"p"},"sapper export"),'" de ',(0,o.kt)("a",{parentName:"p",href:"https://sapper.svelte.dev/docs#How_it_works"},"Sapper docs"),".")),(0,o.kt)("p",null,"De acuerdo a la documentaci\xf3n, debemos incluir elementos ",(0,o.kt)("strong",{parentName:"p"},"\\<a",">")," que apunten a nuestras p\xe1ginas generadas a partir de rutas din\xe1micas, para que al exportar el sitio estas tambi\xe9n se incluyan. Por eso programaremos el endpoint ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/blog"},"/blog"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// src/routes/blog/index.json.js\n\nimport fs from "fs";\nimport path from "path";\nimport grayMatter from "gray-matter";\n\nfunction getAllPosts() {\n  const posts = fs\n    .readdirSync("content")\n    .map((fileName) => {\n      const post = fs.readFileSync(path.resolve("content", fileName), "utf-8");\n      return grayMatter(post).data;\n    })\n    .sort((a, b) => {\n      if (b.timestamp < a.timestamp) return -1;\n      if (b.timestamp > a.timestamp) return 1;\n\n      return 0;\n    });\n  return posts;\n}\n\nexport function get(req, res) {\n  res.writeHead(200, { "Content-Type": "application/json" });\n  res.end(JSON.stringify(getAllPosts()));\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- src/routes/blog/index.svelte --\x3e\n\n<script context="module">\n  export function preload({ params, query }) {\n    return this.fetch(`blog.json`)\n      .then((r) => r.json())\n      .then((posts) => ({\n        posts: posts.map((post) => {\n          const timestamp = new Date(post.timestamp);\n          return {\n            ...post,\n            timestamp,\n            date: {\n              year: timestamp.getFullYear(),\n              month: `${timestamp.getMonth() + 1}`.padStart(2, `0`),\n              day: `${timestamp.getDate()}`.padStart(2, `0`),\n            },\n          };\n        }),\n      }));\n  }\n<\/script>\n\n<script>\n  export let posts;\n<\/script>\n\n<svelte:head>\n  <title>Blog | Mario Menj\xedvar</title>\n</svelte:head>\n\n<ul>\n  {#each posts as post}\n  <li>\n    <a\n      rel="prefetch"\n      href="blog/{post.date.year}/{post.date.month}/{post.date.day}/{post.slug}"\n    >\n      {post.title}\n    </a>\n    <p class="blog-timestamp">\n      Posted on {post.timestamp.toLocaleString()} by {post.author}\n    </p>\n  </li>\n  {/each}\n</ul>\n')),(0,o.kt)("p",null,"Listo."),(0,o.kt)("h2",{id:"sitio-est\xe1tico"},"Sitio est\xe1tico"),(0,o.kt)("p",null,"Antes de desplegar nuestro fant\xe1stico blog, necesitamos asegurarnos que las p\xe1ginas est\xe1ticas se generaran sin problemas. Para eso necesitamos ejecutar lo siguiente en la l\xednea de comandos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[user@host my-blog]$ npm run export\n[user@host my-blog]$ npx serve __sapper__/export\n")),(0,o.kt)("p",null,"Si no tienes ningun problema al acceder a este endpoint ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:5000/blog/2020/08/08/hola-mundo"},"/blog/2020/08/08/hola-mundo"),", \xa1Felicidades! solo nos queda desplegar el sitio."),(0,o.kt)("h2",{id:"despliegue-github-pages"},"Despliegue: Github Pages"),(0,o.kt)("p",null,"Nuestro sitio est\xe1tico ha sido generado y los archivos est\xe1n dentro de la carpeta ",(0,o.kt)("inlineCode",{parentName:"p"},"__sapper__/export"),". Existen una infinidad de servicios que te permiten almacenar y servir este tipo de sitios, entre los m\xe1s populares tenemos Netlify o Github Pages. En este post te mostrar\xe9 c\xf3mo hacerlo con ",(0,o.kt)("em",{parentName:"p"},"Github Pages"),"."),(0,o.kt)("p",null,"Podr\xedamos subir el folder ",(0,o.kt)("inlineCode",{parentName:"p"},"__sapper__/export")," a un nuevo repositorio, activar la opci\xf3n ",(0,o.kt)("em",{parentName:"p"},"Github Pages")," y repetir este proceso manualmente cada vez que actualicemos nuestro sitio con un nuevo post. En mi opini\xf3n, hacerlo de manera manual le quita la diversi\xf3n. Afortunadamente, exite ",(0,o.kt)("em",{parentName:"p"},"Github Actions"),"."),(0,o.kt)("p",null,"El primer paso es crear dos repositorios en ",(0,o.kt)("em",{parentName:"p"},"Github"),", el primero es el repositorio de nuestro projecto y el segundo el repositorio al cu\xe1l subiremos nuestro sitio est\xe1tico. En mi caso, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mariomenjr/mariomenjr"},"mariomenjr/mariomenjr")," y ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mariomenjr/mariomenjr.github.io"},"mariomenjr/mariomenjr.github.io")," respectivamente. Una vez hecho esto, creamos los siguientes folders y archivos en el folder del projecto:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"...\n\u251c .github\n\u2502 \u251c workflows\n| | | deploy.yml\n\u251c src\n...\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"# .github/workflows/deploy.yml\n\nname: Build and deploy\non:\n    push:\n      branches: \n        # \xdanicamente cuando actualicemos master\n        - master\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout \ud83d\udece\ufe0f\n        uses: actions/checkout@v2.3.1\n        with:\n          persist-credentials: false\n      - name: Install and build\n        run: |\n          npm install\n          npm run export\n      - name: Deploy \ud83d\ude80\n        uses: JamesIves/github-pages-deploy-action@3.5.9\n        with:\n          # Limpiar\xe1 el despliegue previo\n          CLEAN: true\n          # Necesitamos crear este secret para el repositorio\n          GITHUB_TOKEN: ${{ secrets.DEPLOY_MARIOMENJR }}\n          BRANCH: master\n          FOLDER: __sapper__/export\n          BASE_BRANCH: master\n          REPOSITORY_NAME: mariomenjr/mariomenjr.github.io\n\n")),(0,o.kt)("p",null,"El archivo anterior se explica en la ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/deploy-to-github-pages"},"documentaci\xf3n")," de la acci\xf3n. En este post nos centraremos en un l\xednea 1 l\xednea: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"...\njobs:\n  build-and-deploy:\n    ...\n    steps:\n      ...\n      - name: Deploy \ud83d\ude80\n        ...\n        with:\n          ...\n          # Necesitamos crear este secret para el repositorio\n          GITHUB_TOKEN: ${{ secrets.DEPLOY_MARIOMENJR }}\n          ...\n")),(0,o.kt)("p",null,"Es esta l\xednea la que autoriza a la acci\xf3n a hacer cambios al repositorio ",(0,o.kt)("inlineCode",{parentName:"p"},"mariomenjr/mariomenjr.github.io"),"."),(0,o.kt)("p",null,"Para generar tu ",(0,o.kt)("em",{parentName:"p"},"Github token"),", dir\xedgete a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"github.com/settings/tokens"),", haz clic en el bot\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate new token"),", escribe un nombre significativo en el campo ",(0,o.kt)("inlineCode",{parentName:"p"},"Note"),", selecciona el ",(0,o.kt)("em",{parentName:"p"},"checkbox")," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"repo"))," y, por \xfaltimo, haz clic en el bot\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate token"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://imgur.com/HbbMgm7.png",alt:"Github personal access tokens"})),(0,o.kt)("p",null,"No olvides copiar el token."),(0,o.kt)("p",null,"Por \xfaltimo, dir\xedgete al repositorio del projecto para crear la variable de entorno que incluir\xe1s en el archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy.yml"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://imgur.com/iuyGLdc.png",alt:"Add secret to repository"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"...\njobs:\n  build-and-deploy:\n    ...\n    steps:\n      ...\n      - name: Deploy \ud83d\ude80\n        ...\n        with:\n          ...\n          # Necesitamos crear este secret para el repositorio\n          GITHUB_TOKEN: ${{ secrets.MI_VARIABLE }}\n          ...\n")),(0,o.kt)("p",null,"Listo. Tan pronto hagas push al repositorio del projecto, ",(0,o.kt)("em",{parentName:"p"},"Github Actions")," desplegar\xe1 tu sitio est\xe1tico."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://imgur.com/fHxzGuf.png",alt:"Github Action Deployment"})),(0,o.kt)("p",null,"No olvides activar la opci\xf3n Github Pages en el repositorio al que desplegaste el sitio."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://imgur.com/tkl8wSO.png",alt:"Settings"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://imgur.com/86osvtX.png",alt:"Github Pages Setting"})),(0,o.kt)("h2",{id:"conclusi\xf3n"},"Conclusi\xf3n"),(0,o.kt)("p",null,"Puedes usar WordPress, Ghosts, incluso Jekyll si lo prefieres. El objetivo de este post es mostrarte como todas esas herramientas tienen su origen en cosas b\xe1sicas que con el tiempo se convierten en herramientas robustas listas para sacarles provecho."),(0,o.kt)("p",null,"Me decid\xed a construir este blog, de esta manera, para poner en pr\xe1ctica el concepto ",(0,o.kt)("a",{parentName:"p",href:"https://ricardoerl.com/blog/aprender-en-publico"},"Aprender en P\xfablico")," que present\xf3 ",(0,o.kt)("a",{parentName:"p",href:"https://ricardoerl.com"},"Ricardo"),", un desarrollador salvadore\xf1o, en un charla de ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/cafedigitalsv"},"Caf\xe9 Digital")," y as\xed salir de mi zona de comfort. Cre\xe9me cuando te digo que me divert\xed."),(0,o.kt)("h2",{id:"referencias"},"Referencias"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.mahmoudashraf.dev/blog/build-a-blog-with-svelte-and-markdown/"},"Building a blog with Svelte, Sapper, and Markdown")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sapper.svelte.dev/docs#How_it_works"},"Sapper docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.swyx.io/writing/svelte-static/"},"Static Svelte: JavaScript Blogging with 93% less JavaScript")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://es.wikipedia.org/wiki/Markdown"},"Markdown"))))}c.isMDXComponent=!0}}]);