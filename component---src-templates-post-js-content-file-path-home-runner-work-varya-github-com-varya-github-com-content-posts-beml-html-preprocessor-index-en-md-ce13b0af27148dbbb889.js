"use strict";(self.webpackChunkvarya_me=self.webpackChunkvarya_me||[]).push([[3568],{3537:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var a=t(8453),s=t(6540);function l(e){const n=Object.assign({p:"p",span:"span",h2:"h2",a:"a",ol:"ol",li:"li"},(0,a.RP)(),e.components);return s.createElement(s.Fragment,null,s.createElement("div",{"data-excerpt":!0},s.createElement(n.p,null,"Depending on a project people prefer different ways to adapt BEM.\nThis results\ninto a range of tools for our choice. Today, I am translating Maxim Shkalin's\ndescription of the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">BEML</code>'}})," templating pre-processor."),s.createElement(n.p,null,"Willing to lighten the development with BEM I propose a tiny extension for the\nHTML syntax (yes, I used to writ all those long CSS classes manually). As the\nname ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">BEMHTML</code>'}})," is greedily taken by the Yandex guys, let us call it ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">BEML</code>'}}),".")),"\n",s.createElement(n.h2,{id:"objective",style:{position:"relative"}},s.createElement(n.a,{href:"#objective","aria-label":"objective permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Objective"),"\n",s.createElement(n.ol,null,"\n",s.createElement(n.li,null,"Smooth learning curve",s.createElement("br"),"\nHTML-syntax with no need to transform one language into another."),"\n",s.createElement(n.li,null,"Portability",s.createElement("br"),"\nThe tool has to be easy to use with other languages."),"\n",s.createElement(n.li,null,"Compatiblity with template engines",s.createElement("br"),"\nInstead of trying to replace them."),"\n",s.createElement(n.li,null,"Simplicity",s.createElement("br"),"\nEasy to use at any project."),"\n"),"\n",s.createElement(n.p,null,"It might be my habit, but I do not see the need to transform JSON into HTML.\nBEMJSON page description usually looks like spaghetti and is very hard to read\ndue to its syntax. Also I do not think that HTML is wrong. AngularJS has already\nshown that HTML can be much flexible than now. Thus, I decided to follow this\nexample."),"\n",s.createElement(n.p,null,"Moreover, there is anothe problem with using BEMHTML. You need Node.js running\nfor your backend; or use another JavaScript engine for PHP or Rython with dirty\nhacks like V8JS or PyV8. The otehr way round could be preparation of a rendered\ntemplate, but this sounds even more unnatural."),"\n",s.createElement(n.p,null,"It would be nice to have a JavaScript-preprocessor and a relative Grunt task\nwhich can be used for creating the prototypes. Then, with transforming to PHP\nyou can use the same templates in the backend."),"\n",s.createElement(n.h2,{id:"concept",style:{position:"relative"}},s.createElement(n.a,{href:"#concept","aria-label":"concept permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Concept"),"\n",s.createElement(n.p,null,"I had a lot of ideas how to extend HTML with inheritance, includes and loops.\nBut finally I cut them off. It would be too complex to support and then provide\nthe portability. Besides, there is a lot of other template engines; I would\nrather enter into alliance with them than to compete. Finally I got not a\ntemplate engine but a preprocessor (or postprocessor) to the current one."),"\n",s.createElement(n.p,null,"The scenario is the following. First, create BEML markup using your template\nengine. Then, past it not to the client but to the post-processor which turns\nBEM syntax into HTML. Funally the HTML goes to the client."),"\n",s.createElement(n.p,null,"Or, there is a faster way for the braves. You can change your template with\npre-processor which turns BEM attributes into HTML, cache it and use this\nchached copy with your dear template engine. Indeed, the pre-processor does not\ntouch the template engine code."),"\n",s.createElement(n.h2,{id:"syntax",style:{position:"relative"}},s.createElement(n.a,{href:"#syntax","aria-label":"syntax permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Syntax"),"\n",s.createElement(n.p,null,"This is very simple, you just use 4 more attributes like ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">block</code>'}}),", ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">elem</code>'}}),", ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">mod</code>'}}),"\nand ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">mix</code>'}}),". I suppose it is clear what each of them is responsible for. For the\ncomplex values you can use light JSON dialect with no quotation marks and\noptional curly braces. Finally the tool turns this code:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">block</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b-animals<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">elem</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cat<span class="token punctuation">"</span></span> <span class="token attr-name">mod</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>size:big, color:red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre></div>'}}),"\n",s.createElement(n.p,null,"into the following HTML."),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b-animals<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b-animals__cat\n              b-animals__cat_size_big\n              b-animals__cat_color_red\n              <span class="token punctuation">"</span></span>\n  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre></div>'}}),"\n",s.createElement(n.p,null,"Much readable."),"\n",s.createElement(n.p,null,"Full information about the syntax you can learn from the ",s.createElement(n.a,{href:"https://github.com/zenwalker/node-beml"},"README on GitHub"),"."),"\n",s.createElement(n.h2,{id:"try-now",style:{position:"relative"}},s.createElement(n.a,{href:"#try-now","aria-label":"try now permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Try now"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> beml</code></pre></div>'}}),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token keyword">var</span> beml <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"beml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> template <span class="token operator">=</span> <span class="token string">\'&lt;div block="b-block" mod="size:big">&lt;/div>\'</span><span class="token punctuation">;</span>\n\nbeml<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>template<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",s.createElement(n.h2,{id:"author",style:{position:"relative"}},s.createElement(n.a,{href:"#author","aria-label":"author permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Author"),"\n",s.createElement(n.p,null,"This article is a translaton.\nThe original article by Maxim Shkalin was ",s.createElement(n.a,{href:"http://zenwalker.ru/blog/2014/1/html-preprocessor-for-bem.html"},"posted in his\nblog"),". Follow him in the social networks:"),"\n",s.createElement("a",{class:"link social-ico__ico social-ico__ico_in-text social-ico__ico_type_twitter",href:"https://twitter.com/zenwalker2/",target:"_blank"}),"\n",s.createElement("a",{class:"link social-ico__ico social-ico__ico_in-text social-ico__ico_type_github",href:"https://github.com/zenwalker/",target:"_blank"}))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?s.createElement(n,e,s.createElement(l,e)):l(e)},c=t(5556),r=t.n(c),i=t(3433),p=t(9868),u=t(7037),h=t(1567),m=t(4449);const d={Box:i.a,Button:p.$,Text:u.E,Heading:h.DZ,Paragraph:h.fz,PatternJourney:h.Rl,PureHtml:h.Qi,Section:h.wn,Hero:h.lq,Widget:h.x0,PatternJourney:h.Rl,WidgetContainer:h.uM,Workshop:h.cR,ProjectRoles:h.JV,DsAspects:h.nD,Link:h.N_,Image:h._V,ImageBlock:h.Dq},g=e=>n=>{let{children:t}=n;return s.createElement(h.DZ,{level:e},t)},k={h1:g(1),h2:g(2),h3:g(3),h4:g(4),h5:g(5),h6:g(6),p:e=>{let{children:n}=e;return s.createElement(h.fz,{standout:!0},n)},a:h.N_,div:e=>{let{"data-excerpt":n,children:t,...a}=e;return n?s.createElement(h.fz,{as:"div",lead:!0},t):s.createElement("div",a,t)}};k.h1.propTypes={children:r().node};const f=e=>{let{data:{mdx:n,site:{siteMetadata:{siteUrl:t}}},children:l,pageContext:{next:o,prev:c,fileSourceUrl:r}}=e;const{readingTime:p,slug:u,disqusIdentifier:g}=n.fields,{date:f,title:v,subTitle:b,cover:y,tumblr:E}=n.frontmatter,_=n.frontmatter.tags&&n.frontmatter.tags.split(","),w=u.startsWith("blog/");return n?s.createElement(h.PE,null,s.createElement(h.I0,{imageUrl:y&&y.childImageSharp.gatsbyImageData.images.fallback.src,tags:_,date:f,readingTime:w&&parseInt(p.minutes)>0?Math.round(p.minutes).toFixed(1)+" min read":null,title:v,subTitle:b}),s.createElement(h.G$,{data:n}),s.createElement(i.a,{flex:"grow",width:"xlarge",margin:{horizontal:"auto"},pad:"medium",direction:"column"},s.createElement(a.xA,{components:{...k,...d}},l),s.createElement(i.a,{direction:"row",fill:"horizontal",justify:"center",margin:{bottom:"auto"},pad:{vertical:"medium"}},_&&_.length>0&&_.map((e=>s.createElement(h.vw,{key:e,name:e.trim(),slug:(0,m.fX)(e),margin:"xsmall"})))),w&&s.createElement(s.Fragment,null,s.createElement(h.WB,{flex:!1,prevSlug:c&&"/"+c.fields.slug,nextSlug:o&&"/"+o.fields.slug,prevTitle:c&&c.frontmatter.title,nextTitle:o&&o.frontmatter.title,pad:{vertical:"medium"}}),s.createElement(h.Sn,{link:r}),s.createElement(h.Hw,{slug:u,title:v,disqusIdentifier:g,tumblr:E,siteUrl:t})))):null};function v(e){return s.createElement(f,e,s.createElement(o,e))}},8453:function(e,n,t){t.d(n,{RP:function(){return l},xA:function(){return c}});var a=t(6540);const s=a.createContext({});function l(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:l(e),a.createElement(s.Provider,{value:c},n)}}}]);
//# sourceMappingURL=component---src-templates-post-js-content-file-path-home-runner-work-varya-github-com-varya-github-com-content-posts-beml-html-preprocessor-index-en-md-ce13b0af27148dbbb889.js.map