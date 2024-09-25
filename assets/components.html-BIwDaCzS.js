import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a,b as i,d as n,e as h,w as k,r as p,o as d}from"./app-Cfjcjz1e.js";const r={};function o(c,s){const e=p("RouteLink");return d(),l("div",null,[s[3]||(s[3]=a(`<h1 id="built-in-components" tabindex="-1"><a class="header-anchor" href="#built-in-components"><span>Built-in Components</span></a></h1><h2 id="autolink" tabindex="-1"><a class="header-anchor" href="#autolink"><span>AutoLink</span></a></h2><ul><li><p>Props:</p><ul><li>config <ul><li>Type: <code>AutoLinkConfig</code></li><li>Required: <code>true</code></li></ul></li></ul></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> AutoLinkConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   * Pattern to determine if the link should be active, which has higher priority than \`exact\`</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  activeMatch</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RegExp</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   * The \`aria-label\` attribute</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  ariaLabel</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   * Whether the link should be active only if the url is an exact match</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  exact</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> boolean</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   * URL of the auto link</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  link</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   * The \`rel\` attribute</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  rel</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   * The \`target\` attribute</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  target</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   * Text of the auto link</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  text</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Usage:</li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">AutoLink</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> :config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;autoLinkConfig&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">AutoLink</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> :config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;autoLinkConfig&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  default slot</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">AutoLink</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">AutoLink</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> :config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;autoLinkConfig&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> #before</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;before slot&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> #after</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;after slot&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">AutoLink</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">AutoLink</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> :config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;autoLinkConfig&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> v-slot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;config&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;{{ config.text }}&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">AutoLink</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">AutoLink</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> :config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;autoLinkConfig&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> #before</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;config&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;{{ config.text }}&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">AutoLink</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>This component will automatically render internal link as <code>&lt;RouteLink&gt;</code>, and render external link as <code>&lt;a&gt;</code>. It will also add necessary attributes correspondingly.</p><p>You can make use of the <code>before</code> and <code>after</code> slots to render content before and after the text. Also, you can use the <code>default</code> slot to render the text (default text is <code>config.text</code>).</p><p>This component is mainly for developing themes. Users won&#39;t need it in most cases. For theme authors, it&#39;s recommended to use this component to render links that could be either internal or external.</p></li></ul><h2 id="clientonly" tabindex="-1"><a class="header-anchor" href="#clientonly"><span>ClientOnly</span></a></h2><ul><li>Usage:</li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ClientOnly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">NonSsrFriendlyComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ClientOnly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>This component and its children will only be rendered in client-side. That means, it will not be rendered to HTML during build (SSR).</p><p>If a component is trying to access Browser / DOM APIs directly in <code>setup()</code>, an error will occur during build because those APIs are unavailable in Node.js environment. In such case, you could do either:</p><ul><li>Modify the component to only access Browser / DOM APIs in <code>onBeforeMount()</code> or <code>onMounted()</code> hook.</li><li>Wrap the component with <code>&lt;ClientOnly&gt;</code>.</li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Since Vue 3.5, if you only want to avoid hydration mismatch, you can try the new <a href="https://blog.vuejs.org/posts/vue-3-5#data-allow-mismatch" target="_blank" rel="noopener noreferrer">data-allow-mismatch</a> attribute instead of <code>&lt;ClientOnly&gt;</code> component.</p></div><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content"><span>Content</span></a></h2><ul><li><p>Props:</p><ul><li>path <ul><li>Type: <code>string</code></li><li>Required: <code>false</code></li></ul></li></ul></li><li><p>Usage:</p></li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Content</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/path/to/page.md&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,15)),i("ul",null,[s[2]||(s[2]=i("li",null,[i("p",null,"Details:"),i("p",null,"This component will render the Markdown content of a page."),i("p",null,[n("If the "),i("code",null,"path"),n(" prop is not provided, it will render the page content of current route.")]),i("p",null,"This component is mainly for developing themes. You won't need it in most cases.")],-1)),i("li",null,[s[1]||(s[1]=i("p",null,"Also see:",-1)),i("ul",null,[i("li",null,[h(e,{to:"/reference/node-api.html#path"},{default:k(()=>s[0]||(s[0]=[n("Node API > Page Properties > path")])),_:1})])])])]),s[4]||(s[4]=a(`<h2 id="routelink" tabindex="-1"><a class="header-anchor" href="#routelink"><span>RouteLink</span></a></h2><ul><li><p>Props:</p><ul><li>to <ul><li>Type: <code>string</code></li><li>Required: <code>true</code></li></ul></li><li>active <ul><li>Type: <code>boolean</code></li><li>Required: <code>false</code></li><li>Default: <code>false</code></li></ul></li><li>activeClass <ul><li>Type: <code>string</code></li><li>Required: <code>false</code></li><li>Default: <code>&#39;route-link-active&#39;</code></li></ul></li></ul></li><li><p>Usage:</p></li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RouteLink</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/path/to/target-page.md&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;target page&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RouteLink</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RouteLink</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> active</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/path/to/current-page.md&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;current page&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RouteLink</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>This component will render a link to the target page.</p><p>If the <code>active</code> prop is set to <code>true</code>, the link will have an extra <code>activeClass</code>. Notice that the active status won&#39;t be updated automatically when the route changes.</p><p>This component is mainly for developing themes. Users won&#39;t need it in most cases. For theme authors, it&#39;s recommended to use this component to render internal links instead of the <code>&lt;RouterLink&gt;</code> component from <code>vue-router</code>.</p></li></ul>`,4))])}const y=t(r,[["render",o],["__file","components.html.vue"]]),A=JSON.parse('{"path":"/reference/components.html","title":"Built-in Components","lang":"en-US","frontmatter":{"icon":"fa6-solid:puzzle-piece","description":"Built-in Components AutoLink Props: config Type: AutoLinkConfig Required: true Usage: Details: This component will automatically render internal link as <RouteLink>, and render ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/reference/components.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/reference/components.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Built-in Components"}],["meta",{"property":"og:description","content":"Built-in Components AutoLink Props: config Type: AutoLinkConfig Required: true Usage: Details: This component will automatically render internal link as <RouteLink>, and render ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-25T14:35:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-25T14:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Built-in Components\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-25T14:35:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"AutoLink","slug":"autolink","link":"#autolink","children":[]},{"level":2,"title":"ClientOnly","slug":"clientonly","link":"#clientonly","children":[]},{"level":2,"title":"Content","slug":"content","link":"#content","children":[]},{"level":2,"title":"RouteLink","slug":"routelink","link":"#routelink","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1727274900000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"张怀文","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.8,"words":539},"filePathRelative":"reference/components.md","localizedDate":"December 3, 2023","autoDesc":true}');export{y as comp,A as data};
