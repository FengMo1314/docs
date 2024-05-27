import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as l,a as n,b as s,d as a,w as t,e as i}from"./app-5nSivCWm.js";const r={},u=i('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h1><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><p>VuePress 站点的基本配置文件是 <code>.vuepress/config.js</code> ，但也同样支持 TypeScript 配置文件。你可以使用 <code>.vuepress/config.ts</code> 来得到更好的类型提示。</p><p>具体而言，我们对于配置文件的路径有着约定（按照优先顺序）：</p><ul><li>当前工作目录 <code>cwd</code> 下： <ul><li><code>vuepress.config.ts</code></li><li><code>vuepress.config.js</code></li><li><code>vuepress.config.mjs</code></li></ul></li><li>源文件目录 <code>sourceDir</code> 下： <ul><li><code>.vuepress/config.ts</code></li><li><code>.vuepress/config.js</code></li><li><code>.vuepress/config.mjs</code></li></ul></li></ul>',5),d=n("code",null,"--config",-1),v=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">vuepress dev docs <span class="token parameter variable">--config</span> my-config.ts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一个基础的配置文件是这样的：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token string">&#39;你好， VuePress ！&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  description<span class="token operator">:</span> <span class="token string">&#39;这是我的第一个 VuePress 站点&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m={class:"hint-container tip"},k=n("p",{class:"hint-container-title"},"提示",-1),g=i(`<h2 id="客户端配置文件" tabindex="-1"><a class="header-anchor" href="#客户端配置文件"><span>客户端配置文件</span></a></h2><p>在大多数情况下，配置文件已经足够帮助你配置好你的 VuePress 站点。不过，有些时候用户们可能希望直接添加一些客户端代码。 VuePress 通过客户端配置文件来支持这种需求：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">├─ docs</span>
<span class="line">│  ├─ .vuepress</span>
<span class="line">│  │  ├─ client.js   &lt;--- 客户端配置文件</span>
<span class="line">│  │  └─ config.js   &lt;--- 配置文件</span>
<span class="line">│  └─ README.md</span>
<span class="line">├─ .gitignore</span>
<span class="line">└─ package.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，我们也有关于客户端配置文件的路径约定（按照优先顺序）：</p><ul><li>当前工作目录 <code>cwd</code> 下： <ul><li><code>vuepress.client.ts</code></li><li><code>vuepress.client.js</code></li><li><code>vuepress.client.mjs</code></li></ul></li><li>源文件目录 <code>sourceDir</code> 下： <ul><li><code>.vuepress/client.ts</code></li><li><code>.vuepress/client.js</code></li><li><code>.vuepress/client.mjs</code></li></ul></li></ul><p>一个基础的客户端配置文件是这样的：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),h={class:"hint-container tip"},f=n("p",{class:"hint-container-title"},"提示",-1),b=n("p",null,"和配置文件不同，客户端配置文件不能通过命令行接口的选项来指定。",-1);function _(y,x){const e=o("RouteLink");return c(),l("div",null,[u,n("p",null,[s("你也可以通过 "),a(e,{to:"/zh/reference/cli.html"},{default:t(()=>[s("命令行接口")]),_:1}),s(" 的 "),d,s(" 选项来指定配置文件：")]),v,n("div",m,[k,n("p",null,[s("前往 "),a(e,{to:"/zh/reference/config.html"},{default:t(()=>[s("配置参考")]),_:1}),s(" 查看所有 VuePress 配置。")])]),g,n("div",h,[f,b,n("p",null,[s("可以前往 "),a(e,{to:"/zh/advanced/cookbook/usage-of-client-config.html"},{default:t(()=>[s("深入 > Cookbook > 客户端配置的使用方法")]),_:1}),s(" 来了解更多信息。")])])])}const C=p(r,[["render",_],["__file","configuration.html.vue"]]),V=JSON.parse('{"path":"/zh/guide/configuration.html","title":"配置","lang":"zh-CN","frontmatter":{"icon":"fa6-solid:gear","description":"配置 配置文件 VuePress 站点的基本配置文件是 .vuepress/config.js ，但也同样支持 TypeScript 配置文件。你可以使用 .vuepress/config.ts 来得到更好的类型提示。 具体而言，我们对于配置文件的路径有着约定（按照优先顺序）： 当前工作目录 cwd 下： vuepress.config.ts vuep...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuejs.press/guide/configuration.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/zh/guide/configuration.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"配置"}],["meta",{"property":"og:description","content":"配置 配置文件 VuePress 站点的基本配置文件是 .vuepress/config.js ，但也同样支持 TypeScript 配置文件。你可以使用 .vuepress/config.ts 来得到更好的类型提示。 具体而言，我们对于配置文件的路径有着约定（按照优先顺序）： 当前工作目录 cwd 下： vuepress.config.ts vuep..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":2,"title":"客户端配置文件","slug":"客户端配置文件","link":"#客户端配置文件","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.4,"words":421},"filePathRelative":"zh/guide/configuration.md","localizedDate":"2023年12月3日","autoDesc":true}');export{C as comp,V as data};