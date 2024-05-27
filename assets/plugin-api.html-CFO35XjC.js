import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c,a as n,b as s,d as e,w as p,e as t}from"./app-5nSivCWm.js";const u={},r=n("h1",{id:"plugin-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-api"},[n("span",null,"Plugin API")])],-1),d=t('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>Plugins should be used before initialization. The basic options will be handled once the plugin is used:</p><ul><li><a href="#name">name</a></li><li><a href="#multiple">multiple</a></li></ul><p>The following hooks will be processed when initializing app:</p><ul><li><a href="#extendsmarkdownoptions">extendsMarkdownOptions</a></li><li><a href="#extendsmarkdown">extendsMarkdown</a></li><li><a href="#extendspageoptions">extendsPageOptions</a></li><li><a href="#extendspage">extendsPage</a></li><li><a href="#oninitialized">onInitialized</a></li></ul><p>The following hooks will be processed when preparing files:</p><ul><li><a href="#clientconfigfile">clientConfigFile</a></li><li><a href="#onprepared">onPrepared</a></li></ul><p>The following hooks will be processed in dev / build:</p><ul><li><a href="#extendsbundleroptions">extendsBundlerOptions</a></li><li><a href="#alias">alias</a></li><li><a href="#define">define</a></li><li><a href="#onwatched">onWatched</a></li><li><a href="#ongenerated">onGenerated</a></li></ul>',9),k=t(`<h2 id="basic-options" tabindex="-1"><a class="header-anchor" href="#basic-options"><span>Basic Options</span></a></h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Name of the plugin.</p><p>It will be used for identifying plugins to avoid using a same plugin multiple times, so make sure to use a unique plugin name.</p><p>It should follow the naming convention:</p><ul><li>Non-scoped: <code>vuepress-plugin-foo</code></li><li>Scoped: <code>@org/vuepress-plugin-foo</code></li></ul></li><li><p>Also see:</p><ul><li><a href="#multiple">Plugin API &gt; multiple</a></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple"><span>multiple</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>false</code></p></li><li><p>Details:</p><p>Declare whether the plugin can be used multiple times.</p><p>If set to <code>false</code>, when using plugins with the same name, the one used previously will be replaced by the one used later.</p><p>If set to <code>true</code>, plugins with the same name could be used multiple times and won&#39;t be replaced.</p></li><li><p>Also see:</p><ul><li><a href="#name">Plugin API &gt; name</a></li></ul></li></ul><h2 id="development-hooks" tabindex="-1"><a class="header-anchor" href="#development-hooks"><span>Development Hooks</span></a></h2><h3 id="alias" tabindex="-1"><a class="header-anchor" href="#alias"><span>alias</span></a></h3><ul><li><p>Type: <code>Record&lt;string, any&gt; | ((app: App, isServer: boolean) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>Details:</p><p>Path aliases definition.</p><p>This hook accepts an object or a function that returns an object.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  alias<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&#39;@alias&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./path/to/alias&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clientconfigfile" tabindex="-1"><a class="header-anchor" href="#clientconfigfile"><span>clientConfigFile</span></a></h3><ul><li><p>Type: <code>string | ((app: App) =&gt; string | Promise&lt;string&gt;)</code></p></li><li><p>Details:</p><p>Path of client config file.</p><p>This hook accepts an absolute file path, or a function that returns the path.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  clientConfigFile<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./path/to/clientConfig.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),m=t(`<h3 id="define" tabindex="-1"><a class="header-anchor" href="#define"><span>define</span></a></h3><ul><li><p>Type: <code>Record&lt;string, any&gt; | ((app: App, isServer: boolean) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>Details:</p><p>Define global constants replacements.</p><p>This hook accepts an object or a function that returns an object.</p><p>This can be useful for passing variables to client files. Note that the values will be automatically processed by <code>JSON.stringify()</code>.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  define<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    __GLOBAL_BOOLEAN__<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    __GLOBAL_STRING__<span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    __GLOBAL_OBJECT__<span class="token operator">:</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extendsbundleroptions" tabindex="-1"><a class="header-anchor" href="#extendsbundleroptions"><span>extendsBundlerOptions</span></a></h3><ul><li><p>Type: <code>(options: BundlerOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>Bundler options extension.</p><p>This hook accepts a function that will receive the bundler options.</p><p>This hook can be used for modifying bundler options.</p><p>You could determine which bundler the user is using by <code>app.options.bundler.name</code>.</p></li><li><p>Example:</p></li></ul><p>Adding default <a href="https://vuejs.org/api/application.html#app-config-compileroptions" target="_blank" rel="noopener noreferrer">app.compilerOptions.isCustomElement</a> option:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">extendsBundlerOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// extends options of @vuepress/bundler-vite</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">.</span>options<span class="token punctuation">.</span>bundler<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;@vuepress/bundler-vite&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      bundlerOptions<span class="token punctuation">.</span>vuePluginOptions <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      bundlerOptions<span class="token punctuation">.</span>vuePluginOptions<span class="token punctuation">.</span>template <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      bundlerOptions<span class="token punctuation">.</span>vuePluginOptions<span class="token punctuation">.</span>template<span class="token punctuation">.</span>compilerOptions <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">const</span> isCustomElement <span class="token operator">=</span></span>
<span class="line">        bundlerOptions<span class="token punctuation">.</span>vuePluginOptions<span class="token punctuation">.</span>template<span class="token punctuation">.</span>compilerOptions<span class="token punctuation">.</span>isCustomElement</span>
<span class="line">      bundlerOptions<span class="token punctuation">.</span>vuePluginOptions<span class="token punctuation">.</span>template<span class="token punctuation">.</span>compilerOptions<span class="token punctuation">.</span><span class="token function-variable function">isCustomElement</span> <span class="token operator">=</span></span>
<span class="line">        <span class="token punctuation">(</span>tag<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>isCustomElement<span class="token operator">?.</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">&#39;my-custom-element&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// extends options of @vuepress/bundler-webpack</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">.</span>options<span class="token punctuation">.</span>bundler<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;@vuepress/bundler-webpack&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      bundlerOptions<span class="token punctuation">.</span>vue <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      bundlerOptions<span class="token punctuation">.</span>vue<span class="token punctuation">.</span>compilerOptions <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">const</span> isCustomElement <span class="token operator">=</span> bundlerOptions<span class="token punctuation">.</span>vue<span class="token punctuation">.</span>compilerOptions<span class="token punctuation">.</span>isCustomElement</span>
<span class="line">      bundlerOptions<span class="token punctuation">.</span>vue<span class="token punctuation">.</span>compilerOptions<span class="token punctuation">.</span><span class="token function-variable function">isCustomElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span>tag<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>isCustomElement<span class="token operator">?.</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">&#39;my-custom-element&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),h=t(`<h3 id="extendsmarkdownoptions" tabindex="-1"><a class="header-anchor" href="#extendsmarkdownoptions"><span>extendsMarkdownOptions</span></a></h3><ul><li><p>Type: <code>(options: MarkdownOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>Markdown options extension.</p><p>This hook accepts a function that will receive the markdown options.</p><p>This hook can be used for modifying markdown options.</p></li><li><p>Example:</p></li></ul><p>Modifying the default header levels that going to be extracted:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">extendsMarkdownOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span>markdownOptions<span class="token punctuation">,</span> app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>markdownOptions<span class="token punctuation">.</span>headers <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token keyword">return</span></span>
<span class="line">    markdownOptions<span class="token punctuation">.</span>headers <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>markdownOptions<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>level<span class="token punctuation">)</span> <span class="token keyword">return</span></span>
<span class="line">    markdownOptions<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>level <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=t(`<h3 id="extendsmarkdown" tabindex="-1"><a class="header-anchor" href="#extendsmarkdown"><span>extendsMarkdown</span></a></h3><ul><li><p>Type: <code>(md: Markdown, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>Markdown enhancement.</p><p>This hook accepts a function that will receive an instance of <code>Markdown</code> powered by <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a> in its arguments.</p><p>This hook can be used for using extra markdown-it plugins and implementing customizations.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">extendsMarkdown</span><span class="token operator">:</span> <span class="token punctuation">(</span>md<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugin1<span class="token punctuation">)</span></span>
<span class="line">    md<span class="token punctuation">.</span>linkify<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> fuzzyEmail<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extendspageoptions" tabindex="-1"><a class="header-anchor" href="#extendspageoptions"><span>extendsPageOptions</span></a></h3><ul><li><p>Type: <code>(options: PageOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>Page options extension.</p><p>This hook accepts a function that will receive the options of <code>createPage</code>.</p><p>This hook can be used for modifying page options</p></li><li><p>Example:</p></li></ul><p>Set permalink pattern for pages in <code>_posts</code> directory:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">extendsPageOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageOptions<span class="token punctuation">,</span> app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>pageOptions<span class="token punctuation">.</span>filePath<span class="token operator">?.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>dir<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token string">&#39;_posts/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      pageOptions<span class="token punctuation">.</span>frontmatter <span class="token operator">=</span> pageOptions<span class="token punctuation">.</span>frontmatter <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      pageOptions<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>permalinkPattern <span class="token operator">=</span> <span class="token string">&#39;/:year/:month/:day/:slug.html&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),g=t(`<h3 id="extendspage" tabindex="-1"><a class="header-anchor" href="#extendspage"><span>extendsPage</span></a></h3><ul><li><p>Type: <code>(page: Page, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>Page extension.</p><p>This hook accepts a function that will receive a <code>Page</code> instance.</p><p>This hook can be used for adding extra properties or modifying current properties on <code>Page</code> object.</p><p>Notice that changes to <code>page.data</code> and <code>page.routeMeta</code> can be used in client side code.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">extendsPage</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    page<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span></span>
<span class="line">    page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In client component:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> usePageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">usePageData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>value<span class="token punctuation">.</span>bar<span class="token punctuation">)</span> <span class="token comment">// bar</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),b=t('<h2 id="lifecycle-hooks" tabindex="-1"><a class="header-anchor" href="#lifecycle-hooks"><span>Lifecycle Hooks</span></a></h2><h3 id="oninitialized" tabindex="-1"><a class="header-anchor" href="#oninitialized"><span>onInitialized</span></a></h3><ul><li><p>Type: <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>This hook will be invoked once VuePress app has been initialized.</p></li></ul><h3 id="onprepared" tabindex="-1"><a class="header-anchor" href="#onprepared"><span>onPrepared</span></a></h3><ul><li><p>Type: <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>This hook will be invoked once VuePress app has finished preparation.</p></li></ul><h3 id="onwatched" tabindex="-1"><a class="header-anchor" href="#onwatched"><span>onWatched</span></a></h3><ul><li><p>Type: <code>(app: App, watchers: Closable[], restart: () =&gt; Promise&lt;void&gt;) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>This hook will be invoked once VuePress app has started dev-server and watched files change.</p><p>The <code>watchers</code> is an array of file watchers. When changing config file, the dev command will be restarted and those watchers will be closed. If you are adding new watchers in this hook, you should push your watchers to the <code>watchers</code> array, so that they can be closed correctly when restarting.</p><p>The <code>restart</code> is a method to restart the dev command. When calling this method, the <code>watchers</code> array will be closed automatically.</p></li></ul><h3 id="ongenerated" tabindex="-1"><a class="header-anchor" href="#ongenerated"><span>onGenerated</span></a></h3><ul><li><p>Type: <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>Details:</p><p>This hook will be invoked once VuePress app has generated static files.</p></li></ul>',9);function f(w,y){const a=o("RouteLink");return i(),c("div",null,[r,n("p",null,[s("You could check out "),e(a,{to:"/reference/node-api.html"},{default:p(()=>[s("Node API")]),_:1}),s(" for how to use the VuePress app instance in plugin hooks.")]),d,n("blockquote",null,[n("p",null,[s("Check out "),e(a,{to:"/advanced/architecture.html#core-process-and-hooks"},{default:p(()=>[s("Advanced > Architecture > Core Process and Hooks")]),_:1}),s(" to understand the process better.")])]),k,n("ul",null,[n("li",null,[s("Also see: "),n("ul",null,[n("li",null,[e(a,{to:"/reference/client-api.html#defineclientconfig"},{default:p(()=>[s("Client API > defineClientConfig")]),_:1})]),n("li",null,[e(a,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:p(()=>[s("Advanced > Cookbook > Usage of Client Config")]),_:1})])])])]),m,n("ul",null,[n("li",null,[s("Also see: "),n("ul",null,[n("li",null,[e(a,{to:"/reference/bundler/vite.html"},{default:p(()=>[s("Bundlers > Vite")]),_:1})]),n("li",null,[e(a,{to:"/reference/bundler/webpack.html"},{default:p(()=>[s("Bundlers > Webpack")]),_:1})])])])]),h,n("ul",null,[n("li",null,[s("Also see: "),n("ul",null,[n("li",null,[e(a,{to:"/reference/config.html#markdown"},{default:p(()=>[s("Config > markdown")]),_:1})])])])]),v,n("ul",null,[n("li",null,[s("Also see: "),n("ul",null,[n("li",null,[e(a,{to:"/reference/node-api.html#createpage"},{default:p(()=>[s("Node API > Page > createPage")]),_:1})])])])]),g,n("ul",null,[n("li",null,[s("Also see: "),n("ul",null,[n("li",null,[e(a,{to:"/reference/client-api.html#usepagedata"},{default:p(()=>[s("Client API > usePageData")]),_:1})]),n("li",null,[e(a,{to:"/reference/node-api.html#data"},{default:p(()=>[s("Node API > Page Properties > data")]),_:1})]),n("li",null,[e(a,{to:"/reference/node-api.html#routemeta"},{default:p(()=>[s("Node API > Page Properties > routeMeta")]),_:1})])])])]),b])}const _=l(u,[["render",f],["__file","plugin-api.html.vue"]]),O=JSON.parse('{"path":"/reference/plugin-api.html","title":"Plugin API","lang":"en-US","frontmatter":{"icon":"fa6-solid:plug","description":"Plugin API You could check out for how to use the VuePress app instance in plugin hooks. Overview Plugins should be used before initialization. The basic options will be handled...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/reference/plugin-api.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/reference/plugin-api.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Plugin API"}],["meta",{"property":"og:description","content":"Plugin API You could check out for how to use the VuePress app instance in plugin hooks. Overview Plugins should be used before initialization. The basic options will be handled..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-06T14:32:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-06T14:32:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Plugin API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-06T14:32:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Basic Options","slug":"basic-options","link":"#basic-options","children":[{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"multiple","slug":"multiple","link":"#multiple","children":[]}]},{"level":2,"title":"Development Hooks","slug":"development-hooks","link":"#development-hooks","children":[{"level":3,"title":"alias","slug":"alias","link":"#alias","children":[]},{"level":3,"title":"clientConfigFile","slug":"clientconfigfile","link":"#clientconfigfile","children":[]},{"level":3,"title":"define","slug":"define","link":"#define","children":[]},{"level":3,"title":"extendsBundlerOptions","slug":"extendsbundleroptions","link":"#extendsbundleroptions","children":[]},{"level":3,"title":"extendsMarkdownOptions","slug":"extendsmarkdownoptions","link":"#extendsmarkdownoptions","children":[]},{"level":3,"title":"extendsMarkdown","slug":"extendsmarkdown","link":"#extendsmarkdown","children":[]},{"level":3,"title":"extendsPageOptions","slug":"extendspageoptions","link":"#extendspageoptions","children":[]},{"level":3,"title":"extendsPage","slug":"extendspage","link":"#extendspage","children":[]}]},{"level":2,"title":"Lifecycle Hooks","slug":"lifecycle-hooks","link":"#lifecycle-hooks","children":[{"level":3,"title":"onInitialized","slug":"oninitialized","link":"#oninitialized","children":[]},{"level":3,"title":"onPrepared","slug":"onprepared","link":"#onprepared","children":[]},{"level":3,"title":"onWatched","slug":"onwatched","link":"#onwatched","children":[]},{"level":3,"title":"onGenerated","slug":"ongenerated","link":"#ongenerated","children":[]}]}],"git":{"createdTime":1701614677000,"updatedTime":1707229978000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":3.35,"words":1006},"filePathRelative":"reference/plugin-api.md","localizedDate":"December 3, 2023","autoDesc":true}');export{_ as comp,O as data};