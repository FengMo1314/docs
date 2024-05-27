import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as i,c as r,a as n,b as e,d as a,w as t,e as o}from"./app-5nSivCWm.js";const c={},u=n("h1",{id:"resolving-routes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#resolving-routes"},[n("span",null,"Resolving Routes")])],-1),d=n("h2",{id:"getting-all-routes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getting-all-routes"},[n("span",null,"Getting all routes")])],-1),m=o(`<p>The return value of <code>useRoutes</code> is a Ref object containing all routes. The keys are route paths of each route, and the values are the corresponding route information.</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token function">useRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// {</span></span>
<span class="line"><span class="token comment">// &#39;/&#39;: { meta: { title: &#39;Home&#39; }, loader: HomePageLoader },</span></span>
<span class="line"><span class="token comment">// &#39;/404.html&#39;: { meta: { title: &#39;Not Found&#39; }, loader: NotFoundPageLoader },</span></span>
<span class="line"><span class="token comment">// ...</span></span>
<span class="line"><span class="token comment">// }</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> routePaths <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>routes<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// =&gt; [&#39;/‘, &#39;/404.html&#39;, &#39;/foo/&#39;, &#39;/bar/&#39;, ...]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resolving-route-path" tabindex="-1"><a class="header-anchor" href="#resolving-route-path"><span>Resolving route path</span></a></h2>`,3),k=o(`<p><code>resolveRoutePath</code> receives a link and an optional base path, and returns the resolved route path:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> resolveRoutePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> routePath <span class="token operator">=</span> <span class="token function">resolveRoutePath</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;/foo/&#39;</span></span>
<span class="line"><span class="token keyword">const</span> routePath <span class="token operator">=</span> <span class="token function">resolveRoutePath</span><span class="token punctuation">(</span><span class="token string">&#39;baz.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/foo/bar.html&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;/foo/baz.html&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resolving-route-information" tabindex="-1"><a class="header-anchor" href="#resolving-route-information"><span>Resolving route information</span></a></h2>`,3),v=o(`<p><code>resolveRoute</code> receives a link and an optional base path, and returns the resolved route information:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> resolveRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">resolveRoute</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; { notFound: false, path: &#39;/foo/&#39;, meta: { title: &#39;Foo&#39; }, loader: FooPageLoader }</span></span>
<span class="line"><span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">resolveRoute</span><span class="token punctuation">(</span><span class="token string">&#39;baz.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/foo/bar.html&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; { notFound: false, path: &#39;/foo/baz.html&#39;, meta: { title: &#39;Baz&#39; }, loader: BazPageLoader }</span></span>
<span class="line"><span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">resolveRoute</span><span class="token punctuation">(</span><span class="token string">&#39;/not-exist.html&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; { notFound: true, path: &#39;/not-exist.html&#39;, meta: { title: &#39;Not Found&#39; }, loader: NotFoundPageLoader }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There is a <code>notFound</code> field in the returned information, which is used to indicate whether a corresponding route exists for a given path. When the route does not exist, the <code>notFound</code> field would be <code>true</code>, the <code>path</code> field would be the normalized path, and the <code>meta</code> and <code>loader</code> fields would point to the default 404 page.</p>`,3);function h(g,f){const s=p("RouteLink");return i(),r("div",null,[u,d,n("p",null,[e("You can make use of "),a(s,{to:"/reference/client-api.html#useroutes"},{default:t(()=>[e("useRoutes")]),_:1}),e(" to get all routes information.")]),m,n("p",null,[e("You can make use of "),a(s,{to:"/reference/client-api.html#resolveroutepath"},{default:t(()=>[e("resolveRoutePath")]),_:1}),e(" to resolve the route path of the given link.")]),k,n("p",null,[e("You can make use of "),a(s,{to:"/reference/client-api.html#resolveroute"},{default:t(()=>[e("resolveRoute")]),_:1}),e(" to resolve route information for a given link.")]),v])}const y=l(c,[["render",h],["__file","resolving-routes.html.vue"]]),_=JSON.parse('{"path":"/advanced/cookbook/resolving-routes.html","title":"Resolving Routes","lang":"en-US","frontmatter":{"description":"Resolving Routes Getting all routes You can make use of to get all routes information. The return value of useRoutes is a Ref object containing all routes. The keys are route pa...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/advanced/cookbook/resolving-routes.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/advanced/cookbook/resolving-routes.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Resolving Routes"}],["meta",{"property":"og:description","content":"Resolving Routes Getting all routes You can make use of to get all routes information. The return value of useRoutes is a Ref object containing all routes. The keys are route pa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-24T08:18:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-24T08:18:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Resolving Routes\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-24T08:18:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Getting all routes","slug":"getting-all-routes","link":"#getting-all-routes","children":[]},{"level":2,"title":"Resolving route path","slug":"resolving-route-path","link":"#resolving-route-path","children":[]},{"level":2,"title":"Resolving route information","slug":"resolving-route-information","link":"#resolving-route-information","children":[]}],"git":{"createdTime":1716538738000,"updatedTime":1716538738000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.94,"words":281},"filePathRelative":"advanced/cookbook/resolving-routes.md","localizedDate":"May 24, 2024","autoDesc":true}');export{y as comp,_ as data};