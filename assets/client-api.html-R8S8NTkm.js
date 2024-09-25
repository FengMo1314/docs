import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,a as t,b as s,e as l,w as n,d as i,r,o as h}from"./app-Cfjcjz1e.js";const u={},k={id:"resolvers",tabindex:"-1"},g={class:"header-anchor",href:"#resolvers"};function c(v,e){const a=r("RouteLink"),p=r("Badge");return h(),d("div",null,[e[43]||(e[43]=t(`<h1 id="client-api" tabindex="-1"><a class="header-anchor" href="#client-api"><span>Client API</span></a></h1><p>Client API can be imported from <code>vuepress/client</code>.</p><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api"><span>Composition API</span></a></h2><h3 id="useclientdata" tabindex="-1"><a class="header-anchor" href="#useclientdata"><span>useClientData</span></a></h3><ul><li><p>Details:</p><p>Returns all the client data ref objects.</p><p>Each property can also be accessed by the following composition APIs.</p></li><li><p>Example:</p></li></ul><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> setup</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ts&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">useClientData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">  pageData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">  pageFrontmatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">  pageHead</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">  pageHeadTitle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">  pageLang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">  routeLocale</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">  siteData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">  siteLocaleData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> useClientData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usepagedata" tabindex="-1"><a class="header-anchor" href="#usepagedata"><span>usePageData</span></a></h3>`,7)),s("ul",null,[e[3]||(e[3]=s("li",null,[s("p",null,"Details:"),s("p",null,"Returns the page data ref object of current page.")],-1)),s("li",null,[e[2]||(e[2]=s("p",null,"Also see:",-1)),s("ul",null,[s("li",null,[l(a,{to:"/reference/node-api.html#data"},{default:n(()=>e[0]||(e[0]=[i("Node API > Page Properties > data")])),_:1})]),s("li",null,[l(a,{to:"/reference/plugin-api.html#extendspage"},{default:n(()=>e[1]||(e[1]=[i("Plugin API > extendsPage")])),_:1})])])])]),e[44]||(e[44]=s("h3",{id:"usepagefrontmatter",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usepagefrontmatter"},[s("span",null,"usePageFrontmatter")])],-1)),e[45]||(e[45]=s("ul",null,[s("li",null,[s("p",null,"Details:"),s("p",null,"Returns the frontmatter ref object of current page."),s("p",null,[i("The value is the "),s("code",null,"frontmatter"),i(" property of the page data.")])])],-1)),e[46]||(e[46]=s("h3",{id:"usepagehead",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usepagehead"},[s("span",null,"usePageHead")])],-1)),s("ul",null,[s("li",null,[e[9]||(e[9]=s("p",null,"Details:",-1)),e[10]||(e[10]=s("p",null,"Returns the head config ref object of current page.",-1)),s("p",null,[e[6]||(e[6]=i("The value is obtained by merging and deduplicating ")),l(a,{to:"/reference/frontmatter.html#head"},{default:n(()=>e[4]||(e[4]=[i("head")])),_:1}),e[7]||(e[7]=i(" frontmatter and ")),l(a,{to:"/reference/config.html#head"},{default:n(()=>e[5]||(e[5]=[i("head")])),_:1}),e[8]||(e[8]=i(" config."))])])]),e[47]||(e[47]=t('<h3 id="usepageheadtitle" tabindex="-1"><a class="header-anchor" href="#usepageheadtitle"><span>usePageHeadTitle</span></a></h3><ul><li><p>Details:</p><p>Returns the head title ref object of current page.</p><p>The value is obtained by joining the page title and site title.</p></li></ul><h3 id="usepagelang" tabindex="-1"><a class="header-anchor" href="#usepagelang"><span>usePageLang</span></a></h3><ul><li><p>Details:</p><p>Returns the language ref object of current page.</p><p>The value is the <code>lang</code> property of the page data.</p></li></ul><h2 id="useroutes" tabindex="-1"><a class="header-anchor" href="#useroutes"><span>useRoutes</span></a></h2>',5)),s("ul",null,[e[13]||(e[13]=s("li",null,[s("p",null,"Details:"),s("p",null,"Returns the routes ref object."),s("p",null,[i("The value is the "),s("code",null,"routes"),i(" property of the site data.")])],-1)),s("li",null,[e[12]||(e[12]=s("p",null,"Also see:",-1)),s("ul",null,[s("li",null,[l(a,{to:"/advanced/cookbook/resolving-routes.html"},{default:n(()=>e[11]||(e[11]=[i("Advanced > Cookbook > Resolving Routes")])),_:1})])])])]),e[48]||(e[48]=s("h3",{id:"useroutelocale",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#useroutelocale"},[s("span",null,"useRouteLocale")])],-1)),s("ul",null,[s("li",null,[e[17]||(e[17]=s("p",null,"Details:",-1)),e[18]||(e[18]=s("p",null,"Returns the locale path ref object of current route.",-1)),s("p",null,[e[15]||(e[15]=i("The value is one of the keys of the ")),l(a,{to:"/reference/config.html#locales"},{default:n(()=>e[14]||(e[14]=[i("locales")])),_:1}),e[16]||(e[16]=i(" config."))])])]),e[49]||(e[49]=t('<h3 id="usesitedata" tabindex="-1"><a class="header-anchor" href="#usesitedata"><span>useSiteData</span></a></h3><ul><li><p>Details:</p><p>Returns the site data ref object.</p></li></ul><h3 id="usesitelocaledata" tabindex="-1"><a class="header-anchor" href="#usesitelocaledata"><span>useSiteLocaleData</span></a></h3><ul><li><p>Details:</p><p>Returns the site data ref object of current locale.</p><p>The properties of current locale have been merged into the root-level properties.</p></li></ul><h2 id="helpers" tabindex="-1"><a class="header-anchor" href="#helpers"><span>Helpers</span></a></h2><h3 id="defineclientconfig" tabindex="-1"><a class="header-anchor" href="#defineclientconfig"><span>defineClientConfig</span></a></h3>',6)),s("ul",null,[s("li",null,[e[22]||(e[22]=s("p",null,"Details:",-1)),s("p",null,[e[20]||(e[20]=i("Helper for creating ")),l(a,{to:"/reference/plugin-api.html#clientconfigfile"},{default:n(()=>e[19]||(e[19]=[i("clientConfigFile")])),_:1}),e[21]||(e[21]=i("."))])]),s("li",null,[e[24]||(e[24]=s("p",null,"Also see:",-1)),s("ul",null,[s("li",null,[l(a,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:n(()=>e[23]||(e[23]=[i("Advanced > Cookbook > Usage of Client Config")])),_:1})])])])]),e[50]||(e[50]=s("h3",{id:"resolveroute",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#resolveroute"},[s("span",null,"resolveRoute")])],-1)),s("ul",null,[e[27]||(e[27]=s("li",null,[s("p",null,"Details:"),s("p",null,"Parses the route of the given link.")],-1)),s("li",null,[e[26]||(e[26]=s("p",null,"Also see:",-1)),s("ul",null,[s("li",null,[l(a,{to:"/advanced/cookbook/resolving-routes.html"},{default:n(()=>e[25]||(e[25]=[i("Advanced > Cookbook > Resolving Routes")])),_:1})])])])]),e[51]||(e[51]=s("h2",{id:"resolveroutepath",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#resolveroutepath"},[s("span",null,"resolveRoutePath")])],-1)),s("ul",null,[e[30]||(e[30]=s("li",null,[s("p",null,"Details:"),s("p",null,"Parses the route path of the given link.")],-1)),s("li",null,[e[29]||(e[29]=s("p",null,"Also see:",-1)),s("ul",null,[s("li",null,[l(a,{to:"/advanced/cookbook/resolving-routes.html"},{default:n(()=>e[28]||(e[28]=[i("Advanced > Cookbook > Resolving Routes")])),_:1})])])])]),e[52]||(e[52]=s("h3",{id:"withbase",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#withbase"},[s("span",null,"withBase")])],-1)),s("ul",null,[s("li",null,[e[34]||(e[34]=s("p",null,"Details:",-1)),s("p",null,[e[32]||(e[32]=i("Prefix URL with site ")),l(a,{to:"/reference/config.html#base"},{default:n(()=>e[31]||(e[31]=[i("base")])),_:1}),e[33]||(e[33]=i("."))])]),s("li",null,[e[36]||(e[36]=s("p",null,"Also see:",-1)),s("ul",null,[s("li",null,[l(a,{to:"/guide/assets.html#base-helper"},{default:n(()=>e[35]||(e[35]=[i("Guide > Assets > Base Helper")])),_:1})])])])]),e[53]||(e[53]=t(`<h2 id="constants" tabindex="-1"><a class="header-anchor" href="#constants"><span>Constants</span></a></h2><p>There are some constants that available in the client side code.</p><p>To shim the types of these constants in client side code, add <code>vuepress/client-types</code> to your <code>tsconfig.json</code>:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;types&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;vuepress/client-types&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuepress-version" tabindex="-1"><a class="header-anchor" href="#vuepress-version"><span><code>__VUEPRESS_VERSION__</code></span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Version of VuePress core package.</p></li></ul><h3 id="vuepress-base" tabindex="-1"><a class="header-anchor" href="#vuepress-base"><span><code>__VUEPRESS_BASE__</code></span></a></h3>`,7)),s("ul",null,[e[41]||(e[41]=s("li",null,[s("p",null,[i("Type: "),s("code",null,"string")])],-1)),s("li",null,[e[40]||(e[40]=s("p",null,"Details:",-1)),s("p",null,[e[38]||(e[38]=i("The ")),l(a,{to:"/reference/config.html#base"},{default:n(()=>e[37]||(e[37]=[i("base")])),_:1}),e[39]||(e[39]=i(" option from config."))])])]),e[54]||(e[54]=t('<h3 id="vuepress-dev" tabindex="-1"><a class="header-anchor" href="#vuepress-dev"><span><code>__VUEPRESS_DEV__</code></span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>An environment flag indicating whether it is currently running in <code>dev</code> mode.</p></li></ul><h3 id="vuepress-ssr" tabindex="-1"><a class="header-anchor" href="#vuepress-ssr"><span><code>__VUEPRESS_SSR__</code></span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>An environment flag indicating whether it is currently running in server-side-rendering (SSR) build.</p></li></ul><h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced"><span>Advanced</span></a></h2>',5)),s("h3",k,[s("a",g,[s("span",null,[e[42]||(e[42]=i("resolvers ")),l(p,{text:"experimental"})])])]),e[55]||(e[55]=t(`<ul><li><p>Type: <code>Record&lt;string, Function&gt;</code></p></li><li><p>Details:</p><p>An reactive object, methods of which determining how to resolve global computed.</p></li><li><p>Example:</p></li></ul><p>Customizing the format of <code>&lt;title&gt;</code> in client config file:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">resolvers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineClientConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  enhance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">router</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">siteData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    resolvers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">resolvePageHeadTitle</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">siteLocale</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      \`</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">siteLocale</span><span style="--shiki-light:#50A14F;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &gt; </span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">page</span><span style="--shiki-light:#50A14F;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container caution"><p class="hint-container-title">Caution</p><p><code>resolvers</code> will affect the basic functionality of VuePress. Please make sure you have fully understood its purpose before modifying it.</p></div>`,4))])}const m=o(u,[["render",c],["__file","client-api.html.vue"]]),y=JSON.parse('{"path":"/reference/client-api.html","title":"Client API","lang":"en-US","frontmatter":{"icon":"fa6-brands:chrome","description":"Client API Client API can be imported from vuepress/client. Composition API useClientData Details: Returns all the client data ref objects. Each property can also be accessed by...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/reference/client-api.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/reference/client-api.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Client API"}],["meta",{"property":"og:description","content":"Client API Client API can be imported from vuepress/client. Composition API useClientData Details: Returns all the client data ref objects. Each property can also be accessed by..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-25T14:35:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-25T14:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Client API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-25T14:35:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Composition API","slug":"composition-api","link":"#composition-api","children":[{"level":3,"title":"useClientData","slug":"useclientdata","link":"#useclientdata","children":[]},{"level":3,"title":"usePageData","slug":"usepagedata","link":"#usepagedata","children":[]},{"level":3,"title":"usePageFrontmatter","slug":"usepagefrontmatter","link":"#usepagefrontmatter","children":[]},{"level":3,"title":"usePageHead","slug":"usepagehead","link":"#usepagehead","children":[]},{"level":3,"title":"usePageHeadTitle","slug":"usepageheadtitle","link":"#usepageheadtitle","children":[]},{"level":3,"title":"usePageLang","slug":"usepagelang","link":"#usepagelang","children":[]}]},{"level":2,"title":"useRoutes","slug":"useroutes","link":"#useroutes","children":[{"level":3,"title":"useRouteLocale","slug":"useroutelocale","link":"#useroutelocale","children":[]},{"level":3,"title":"useSiteData","slug":"usesitedata","link":"#usesitedata","children":[]},{"level":3,"title":"useSiteLocaleData","slug":"usesitelocaledata","link":"#usesitelocaledata","children":[]}]},{"level":2,"title":"Helpers","slug":"helpers","link":"#helpers","children":[{"level":3,"title":"defineClientConfig","slug":"defineclientconfig","link":"#defineclientconfig","children":[]},{"level":3,"title":"resolveRoute","slug":"resolveroute","link":"#resolveroute","children":[]}]},{"level":2,"title":"resolveRoutePath","slug":"resolveroutepath","link":"#resolveroutepath","children":[{"level":3,"title":"withBase","slug":"withbase","link":"#withbase","children":[]}]},{"level":2,"title":"Constants","slug":"constants","link":"#constants","children":[{"level":3,"title":"__VUEPRESS_VERSION__","slug":"vuepress-version","link":"#vuepress-version","children":[]},{"level":3,"title":"__VUEPRESS_BASE__","slug":"vuepress-base","link":"#vuepress-base","children":[]},{"level":3,"title":"__VUEPRESS_DEV__","slug":"vuepress-dev","link":"#vuepress-dev","children":[]},{"level":3,"title":"__VUEPRESS_SSR__","slug":"vuepress-ssr","link":"#vuepress-ssr","children":[]}]},{"level":2,"title":"Advanced","slug":"advanced","link":"#advanced","children":[{"level":3,"title":"resolvers","slug":"resolvers","link":"#resolvers","children":[]}]}],"git":{"createdTime":1701614677000,"updatedTime":1727274900000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":5},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.65,"words":494},"filePathRelative":"reference/client-api.md","localizedDate":"December 3, 2023","autoDesc":true}');export{m as comp,y as data};
