import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as e,d as i,e as a,w as l,a as t,r as h,o}from"./app-Cfjcjz1e.js";const d={};function k(g,s){const n=h("RouteLink");return o(),p("div",null,[s[16]||(s[16]=e("h1",{id:"插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#插件"},[e("span",null,"插件")])],-1)),e("p",null,[s[1]||(s[1]=i("借助于 ")),a(n,{to:"/zh/reference/plugin-api.html"},{default:l(()=>s[0]||(s[0]=[i("插件 API")])),_:1}),s[2]||(s[2]=i(" ， VuePress 插件可以为你提供各种不同的功能。"))]),s[17]||(s[17]=e("h2",{id:"官方插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官方插件"},[e("span",null,"官方插件")])],-1)),s[18]||(s[18]=e("p",null,"VuePress 团队提供了一些官方插件。",-1)),e("p",null,[s[4]||(s[4]=i("你需要在你的配置文件中通过 ")),a(n,{to:"/zh/reference/config.html#plugins"},{default:l(()=>s[3]||(s[3]=[i("plugins")])),_:1}),s[5]||(s[5]=i(" 配置项来使用它们。举例来说，你可以使用 ")),s[6]||(s[6]=e("a",{href:"https://ecosystem.vuejs.press/zh/plugins/analytics/google-analytics.html",target:"_blank",rel:"noopener noreferrer"},"@vuepress/plugin-google-analytics",-1)),s[7]||(s[7]=i(" 来使用 Google Analytics ："))]),s[19]||(s[19]=t(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">googleAnalyticsPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/plugin-google-analytics&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    googleAnalyticsPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;G-XXXXXXXXXX&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>大部分插件只能使用一次，如果同一个插件被多次使用，那么只有最后一次会生效。</p><p>然而，部分插件是可以被多次使用的（例如 <a href="https://ecosystem.vuejs.press/zh/plugins/container.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-container</a>），你应该查看插件本身的文档来获取详细指引。</p></div><h2 id="社区插件" tabindex="-1"><a class="header-anchor" href="#社区插件"><span>社区插件</span></a></h2><p>社区用户创建了很多插件，并将它们发布到了 <a href="https://www.npmjs.com/search?q=keywords:vuepress-plugin" target="_blank" rel="noopener noreferrer">NPM</a> 上。 查看插件本身的文档可以获取更详细的指引。</p><p>你可以在 <a href="https://marketplace.vuejs.press/zh/plugins/" target="_blank" rel="noopener noreferrer">VuePress 市场</a> 中探索更多插件。</p><h2 id="本地插件" tabindex="-1"><a class="header-anchor" href="#本地插件"><span>本地插件</span></a></h2><p>如果你想要使用自己的插件，但是又不想发布它，你可以创建一个本地插件。</p>`,7)),e("p",null,[s[10]||(s[10]=i("我们推荐你直接将 ")),a(n,{to:"/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:l(()=>s[8]||(s[8]=[i("配置文件")])),_:1}),s[11]||(s[11]=i(" 作为插件使用，因为 ")),a(n,{to:"/zh/reference/config.html#%E6%8F%92%E4%BB%B6-api"},{default:l(()=>s[9]||(s[9]=[i("几乎所有的插件 API 都可以在配置文件中使用")])),_:1}),s[12]||(s[12]=i("，这在绝大多数场景下都更为方便。"))]),s[20]||(s[20]=t(`<p>但是如果你在配置文件中要做的事情太多了，你可以考虑将它们提取到单独的插件中，然后在你的配置文件中使用它们：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> myPlugin</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;./path/to/my-plugin.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">myPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),e("p",null,[s[14]||(s[14]=i("前往 ")),a(n,{to:"/zh/advanced/plugin.html"},{default:l(()=>s[13]||(s[13]=[i("深入 > 开发插件")])),_:1}),s[15]||(s[15]=i(" 学习如何开发你自己的插件。"))])])}const y=r(d,[["render",k],["__file","plugin.html.vue"]]),A=JSON.parse('{"path":"/zh/guide/plugin.html","title":"插件","lang":"zh-CN","frontmatter":{"icon":"fa6-solid:plug","description":"插件 借助于 ， VuePress 插件可以为你提供各种不同的功能。 官方插件 VuePress 团队提供了一些官方插件。 你需要在你的配置文件中通过 配置项来使用它们。举例来说，你可以使用 @vuepress/plugin-google-analytics 来使用 Google Analytics ： 提示 大部分插件只能使用一次，如果同一个插件被多...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuejs.press/guide/plugin.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/zh/guide/plugin.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"插件"}],["meta",{"property":"og:description","content":"插件 借助于 ， VuePress 插件可以为你提供各种不同的功能。 官方插件 VuePress 团队提供了一些官方插件。 你需要在你的配置文件中通过 配置项来使用它们。举例来说，你可以使用 @vuepress/plugin-google-analytics 来使用 Google Analytics ： 提示 大部分插件只能使用一次，如果同一个插件被多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-25T14:35:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-25T14:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-25T14:35:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"官方插件","slug":"官方插件","link":"#官方插件","children":[]},{"level":2,"title":"社区插件","slug":"社区插件","link":"#社区插件","children":[]},{"level":2,"title":"本地插件","slug":"本地插件","link":"#本地插件","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1727274900000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2},{"name":"Abbas mkhzomi","email":"amkhzomi@gmail.com","commits":1}]},"readingTime":{"minutes":1.41,"words":423},"filePathRelative":"zh/guide/plugin.md","localizedDate":"2023年12月3日","autoDesc":true}');export{y as comp,A as data};
