import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as s,e as a,a as l,d as i,w as d,r as n,o as c}from"./app-Cfjcjz1e.js";const h={};function k(u,e){const r=n("NpmBadge"),t=n("RouteLink");return c(),o("div",null,[e[7]||(e[7]=s("h1",{id:"webpack",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#webpack"},[s("span",null,"Webpack")])],-1)),a(r,{package:"@vuepress/bundler-webpack"}),e[8]||(e[8]=l(`<p>Webpack 打包工具是由 <a href="https://www.npmjs.com/package/@vuepress/bundler-webpack" target="_blank" rel="noopener noreferrer">@vuepress/bundler-webpack</a> 包提供的。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><p>安装打包工具：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @vuepress/bundler-webpack@next</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在配置文件中指定打包工具：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title=".vuepress/config.ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">webpackBundler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;@vuepress/bundler-webpack&#39;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> defineUserConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  bundler</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> webpackBundler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    postcss</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {},</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    vue</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><h3 id="configurewebpack" tabindex="-1"><a class="header-anchor" href="#configurewebpack"><span>configureWebpack</span></a></h3><ul><li><p>类型： <code>(config: WebpackConfiguration, isServer: boolean, isBuild: boolean) =&gt; WebpackConfiguration | void</code></p></li><li><p>详情：</p><p>用于修改内部的 Webpack 配置。</p><p>该配置项接收一个函数，该函数的第一个参数是 Webpack 配置对象，第二个参数是 <code>isServer</code> 标志位，第三个参数是 <code>isBuild</code> 标志位。</p></li></ul><h3 id="chainwebpack" tabindex="-1"><a class="header-anchor" href="#chainwebpack"><span>chainWebpack</span></a></h3><ul><li><p>类型： <code>(config: WebpackChainConfig, isServer: boolean, isBuild: boolean) =&gt; void</code></p></li><li><p>详情：</p><p>通过 <a href="https://github.com/mozilla-neutrino/webpack-chain" target="_blank" rel="noopener noreferrer">webpack-chain</a> 来修改内部的 Webpack 配置。</p><p>该配置项接收一个函数，该函数的第一个参数是由 <code>webpack-chain</code> 提供的 <code>Config</code> 实例，第二个参数是 <code>isServer</code> 标志位，第三个参数是 <code>isBuild</code> 标志位。</p></li></ul><h3 id="devserversetupmiddlewares" tabindex="-1"><a class="header-anchor" href="#devserversetupmiddlewares"><span>devServerSetupMiddlewares</span></a></h3><ul><li><p>类型： <code>(middlewares: Middleware[], devServer: Server) =&gt; Middleware[]</code></p></li><li><p>详情：</p><p>在 Webpack 的 <code>devServer.setupMiddlewares</code> 中调用的 Hook 。</p><p>函数的参数即是 <code>devServer.setupMiddlewares</code> 的参数。</p></li><li><p>参考：</p><ul><li><a href="https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares" target="_blank" rel="noopener noreferrer">Webpack &gt; Configuration &gt; DevServer &gt; devServer.setupMiddlewares</a></li></ul></li></ul><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>vue</span></a></h3><ul><li><p>类型： <code>VueLoaderOptions</code></p></li><li><p>详情：</p><p><code>vue-loader</code> 的配置项。</p></li><li><p>参考：</p><ul><li><a href="https://vue-loader.vuejs.org/zh/options.html" target="_blank" rel="noopener noreferrer">vue-loader &gt; 选项参考</a></li></ul></li></ul><h3 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss"><span>postcss</span></a></h3><ul><li><p>类型： <code>PostcssLoaderOptions</code></p></li><li><p>详情：</p><p><code>postcss-loader</code> 的配置项。</p></li><li><p>参考：</p><ul><li><a href="https://github.com/webpack-contrib/postcss-loader#options" target="_blank" rel="noopener noreferrer">postcss-loader &gt; Options</a></li></ul></li></ul><h3 id="stylus" tabindex="-1"><a class="header-anchor" href="#stylus"><span>stylus</span></a></h3><ul><li><p>类型： <code>StylusLoaderOptions</code></p></li><li><p>详情：</p><p><code>stylus-loader</code> 的配置项。</p></li><li><p>参考：</p><ul><li><a href="https://github.com/webpack-contrib/stylus-loader#options" target="_blank" rel="noopener noreferrer">stylus-loader &gt; Options</a></li></ul></li></ul><h3 id="scss" tabindex="-1"><a class="header-anchor" href="#scss"><span>scss</span></a></h3><ul><li><p>类型： <code>SassLoaderOptions</code></p></li><li><p>详情：</p><p>针对 <code>.scss</code> 文件的 <code>sass-loader</code> 的配置项。</p></li><li><p>参考：</p><ul><li><a href="https://github.com/webpack-contrib/sass-loader#options" target="_blank" rel="noopener noreferrer">sass-loader &gt; Options</a></li></ul></li></ul><h3 id="sass" tabindex="-1"><a class="header-anchor" href="#sass"><span>sass</span></a></h3><ul><li><p>类型： <code>SassLoaderOptions</code></p></li><li><p>详情：</p><p>针对 <code>.sass</code> 文件的 <code>sass-loader</code> 的配置项。</p></li><li><p>参考：</p><ul><li><a href="https://github.com/webpack-contrib/sass-loader#options" target="_blank" rel="noopener noreferrer">sass-loader &gt; Options</a></li></ul></li></ul><h3 id="less" tabindex="-1"><a class="header-anchor" href="#less"><span>less</span></a></h3><ul><li><p>类型： <code>LessLoaderOptions</code></p></li><li><p>详情：</p><p><code>less-loader</code> 的配置项。</p></li><li><p>参考：</p><ul><li><a href="https://github.com/webpack-contrib/less-loader#options" target="_blank" rel="noopener noreferrer">less-loader &gt; Options</a></li></ul></li></ul><h3 id="evergreen" tabindex="-1"><a class="header-anchor" href="#evergreen"><span>evergreen</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成 <code>true</code> 。这将会禁用一些转译过程和 Polyfills ，带来更快的构建速度和更小的文件体积。</p></li></ul><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="在修改-base-后引用-public-文件" tabindex="-1"><a class="header-anchor" href="#在修改-base-后引用-public-文件"><span>在修改 <code>base</code> 后引用 Public 文件</span></a></h3>`,29)),s("p",null,[e[1]||(e[1]=i("与 Vite 不同， Webpack 不会为 Public 文件自动处理 ")),e[2]||(e[2]=s("code",null,"base",-1)),e[3]||(e[3]=i("。因此如果你修改了网站的 ")),e[4]||(e[4]=s("code",null,"base",-1)),e[5]||(e[5]=i("，建议你在引用 Public 图片文件时使用 ")),a(t,{to:"/zh/guide/assets.html#base-helper"},{default:d(()=>e[0]||(e[0]=[i("Base Helper")])),_:1}),e[6]||(e[6]=i("。"))]),e[9]||(e[9]=l('<h3 id="使用默认主题" tabindex="-1"><a class="header-anchor" href="#使用默认主题"><span>使用默认主题</span></a></h3><p>默认主题使用 <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a> 作为 CSS 预处理器，因此你在使用 Webpack 时（特别是在使用 <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a> 时）可能需要手动安装 <a href="https://www.npmjs.com/package/sass-loader" target="_blank" rel="noopener noreferrer">sass-loader</a> 来确保其正常工作。</p>',2))])}const v=p(h,[["render",k],["__file","webpack.html.vue"]]),m=JSON.parse('{"path":"/zh/reference/bundler/webpack.html","title":"Webpack","lang":"zh-CN","frontmatter":{"icon":"mdi:webpack","description":"Webpack","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuejs.press/reference/bundler/webpack.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/zh/reference/bundler/webpack.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Webpack"}],["meta",{"property":"og:description","content":"Webpack"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-25T14:35:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-25T14:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Webpack\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-25T14:35:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"configureWebpack","slug":"configurewebpack","link":"#configurewebpack","children":[]},{"level":3,"title":"chainWebpack","slug":"chainwebpack","link":"#chainwebpack","children":[]},{"level":3,"title":"devServerSetupMiddlewares","slug":"devserversetupmiddlewares","link":"#devserversetupmiddlewares","children":[]},{"level":3,"title":"vue","slug":"vue","link":"#vue","children":[]},{"level":3,"title":"postcss","slug":"postcss","link":"#postcss","children":[]},{"level":3,"title":"stylus","slug":"stylus","link":"#stylus","children":[]},{"level":3,"title":"scss","slug":"scss","link":"#scss","children":[]},{"level":3,"title":"sass","slug":"sass","link":"#sass","children":[]},{"level":3,"title":"less","slug":"less","link":"#less","children":[]},{"level":3,"title":"evergreen","slug":"evergreen","link":"#evergreen","children":[]}]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"在修改 base 后引用 Public 文件","slug":"在修改-base-后引用-public-文件","link":"#在修改-base-后引用-public-文件","children":[]},{"level":3,"title":"使用默认主题","slug":"使用默认主题","link":"#使用默认主题","children":[]}]}],"git":{"createdTime":1701614677000,"updatedTime":1727274900000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.98,"words":594},"filePathRelative":"zh/reference/bundler/webpack.md","localizedDate":"2023年12月3日","autoDesc":true}');export{v as comp,m as data};
