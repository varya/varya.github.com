"use strict";(self.webpackChunkvarya_me=self.webpackChunkvarya_me||[]).push([[1556],{2016:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(8453),r=n(6540);function o(e){const t=Object.assign({p:"p",a:"a",ol:"ol",li:"li",ul:"ul",span:"span"},(0,a.RP)(),e.components);return r.createElement(r.Fragment,null,r.createElement("div",{"data-excerpt":!0},r.createElement(t.p,null,"Being a frontend developer these days means to learn the new things every day. We read articles and blog posts,\nexamine the changelogs, follow the Twitter announcements and participate in the GitHub discussions.\nThis helps to keep up."),r.createElement(t.p,null,"However,\nwhen it comes to something bigger, like the exploring of a new framework or an ecosystem, it is not enough.\nThe perfect solution is to organize a whole day hackathon for the developers in your company.\nAt SC5 online, we took this advantage mastering the React development. Few ecosystem components such as\nwebpack and redux came along.")),"\n",r.createElement(t.p,null,"The private companies have hard time to find an opportunity and organize such event.\nMoreover, the preparations for the hackathon consume a lot of resources. To ease the hardship, I've decided to share\nthe materials that I prepared for our event. The hackathon plan and the detailed description of slides are given below.\nhackathon. Below you can find the hackathon plan and the slides explained."),"\n",r.createElement(t.p,null,"It is the presentation that I used for a pre-coding section:\n",r.createElement(t.a,{href:"http://varya.me/reactjs-hackathon/"},"varya.me/reactjs-hackathon"),"."),"\n",r.createElement(t.p,null,"At the moment, the slides were hosted online, and before starting I provided a short link to them.\nDuring the coding event, the developers need a bunch of online materials, including starting projects, documentation,\ntips and tricks. The links to these meterials were inserted in my presentation, and it was important to let the others\ncheck them out. Also, we had a special Slack channel where the links were shared one more time."),"\n",r.createElement(t.p,null,"The next slide showed the plan of event to the participants:"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"About the event"),"\n",r.createElement(t.li,null,"Choosing the projects"),"\n",r.createElement(t.li,null,"Introduction to React"),"\n",r.createElement(t.li,null,"Stub projects"),"\n",r.createElement(t.li,null,"Linking UI libraries"),"\n",r.createElement(t.li,null,"React Native"),"\n",r.createElement(t.li,null,"Relay&GraphQL"),"\n",r.createElement(t.li,null,"Coding"),"\n"),"\n",r.createElement(t.p,null,"The slides included everything listed besides the coding part, which was devoted directly to the development.\nAltogether, the presentation took about 50 minutes. This amount of time ensured that I made all the needed\nintroductions. Also, it was not too long to make people bored."),"\n",r.createElement(t.p,null,"On the next stage, I offered the applications that we could write using React during the event."),"\n",r.createElement(t.p,null,"Here are the listed options:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Instagram-like"),"\n",r.createElement(t.li,null,"Twitter dashboard"),"\n",r.createElement(t.li,null,"Shopping list"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"http://kipp.is/map"},"Bars on map")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://claudiopro.github.io/2048-react/"},"2048")),"\n",r.createElement(t.li,null,"Tetris"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://reake-react-snake.firebaseapp.com/"},"Snake game")),"\n",r.createElement(t.li,null,"Your own idea"),"\n"),"\n",r.createElement(t.p,null,"I believe that the product goals should be defined at the start. It is especially important for the React hackathon.\nPeople start to think how they would code it in the way they are used to work. When it comes to React, they are\nimpressed by the elegance and easiness of the approach."),"\n",r.createElement(t.p,null,"After that, I provided the links to the official documentation and tutorials. It is evident that even whole day event\nis not sufficient to learn how to work with a new framework. However, it lets ignite an initial interest that can lead\nto the following independet research. A link to an interesting tutorial can be the first step."),"\n",r.createElement(t.p,null,"At the time of hackathon, some developers had a React experience, some have read the articles, and some at least heard\nabout the approach. The hackathon is not a 'teach-you-how' workshop but a collaborative and even team-building event.\nThis why I wanted all the people to be involved."),"\n",r.createElement(t.p,null,"When giving\na presentation, you can make a contact with the audience by asking the questions. Moreover, you can add the given\nanswers into the presentation on-the-go. One of my slides had the same a title as the famous Reddit's question\n'",r.createElement(t.a,{href:"https://www.reddit.com/r/javascript/comments/2uvz0x/whats_so_great_about_reactjs/"},"What is so great about React.js"),"'.\nI wrote the answers from the audience into a big textarea in the slide. It visualised the contribution that everyone\nmade in the introduction."),"\n",r.createElement(t.p,null,"When it came to the React buzz words, we had not a solo talk but a proper discussion."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"ES2015 (ES6)"),"\n",r.createElement(t.li,null,"React"),"\n",r.createElement(t.li,null,"webpack"),"\n",r.createElement(t.li,null,"Flux / Redux"),"\n",r.createElement(t.li,null,"Relay & GraphQL"),"\n"),"\n",r.createElement(t.p,null,"To save the developers' time in the codung section, I gave the definitions and explanations in advance.\nAlso, the most of the applications usually start with cloning the starter project. In the hackathon, I aimed not to give\na fish but to teach how to fish. To do that, I provided the link to the starter kit search:\n",r.createElement(t.a,{href:"http://andrewhfarmer.com/starter-project/"},"andrewhfarmer.com/starter-project"),"."),"\n",r.createElement(t.p,null,"However, we were limited in our time, so I explained some essentials and shortcuts for the efficient start."),"\n",r.createElement(t.p,null,"The top priority of the hackathon was diving into React ecosystem. The ultimate goal was to write an application\nusing ES2015 (aka ES6), build it with webpack and use Readux. However, it might have been too complicated for the\nReact beginners, and I did not want to exclude them."),"\n",r.createElement(t.p,null,"To ensure the inclusiveness, I recommended the simplest React starter kit. Many developers did not realise that they\ncan code React applications by linking two scripts hosted at CDN that is similar to write-on-jQuery approach."),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://fb.me/react-0.14.7.js"</span>\n    integrity<span class="token operator">=</span><span class="token string">"sha384-xQae1pUPdAKUe0u0KUTNt09zzdwheX4VSUsV8vatqM+t6X7rta01qOzessL808ox"</span>\n    crossorigin<span class="token operator">=</span><span class="token string">"anonymous"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://fb.me/react-dom-0.14.7.js"</span>\n    integrity<span class="token operator">=</span><span class="token string">"sha384-A1t0GCrR06cTHvMjaxeSE8XOiz6j7NvWdmxhN/9z748wEvJTVk13Rr8gMzTUnd8G"</span>\n    crossorigin<span class="token operator">=</span><span class="token string">"anonymous"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></code></pre></div>'}}),"\n",r.createElement(t.p,null,"With these two scripts and a single one local JavaScript file, you can follow ",r.createElement(t.a,{href:"https://facebook.github.io/react/downloads.html"},"the official documentation"),"\nand start your React application right away."),"\n",r.createElement(t.p,null,"The other option is suited for those who are comfortable with builders and don't want to dedicate their time\nfor sort out ES2015 and prefer plain JavaScript. When I've started with React, I dived deeply into the new\nthings. However it took some time, which is not availabe during the one day event.\nSo, 'ES5 + builder' solution is reasonable for the developers who want get their hands on React quickly.\nTo provide the different options, I gave the links to the other starter kits:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/petehunt/ReactHack"},"with webpack")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/artyomtrityak/react-hackathon"},"with gulp")),"\n"),"\n",r.createElement(t.p,null,"The last stubs 'ES2015 + webpack' type. I've given two:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/pheuter/essential-react"},"Essential")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/varya/react-stub"},"varya/react-stub"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"ES2015, BEM, PostCSS, webpack"),"\n"),"\n"),"\n"),"\n",r.createElement(t.p,null,"Despite the existence of a good starter project Essential, I've created my own and recommended it.\nI keep it minimalistic, so there is no redux linking there. I believe that the first project is better without\nexessive complexity."),"\n",r.createElement(t.p,null,"One more reason to create my starter kit was to demonstrate the different UI libraries linked and used\nwithin the React project. Honestly, I don't see any ideal solution for the React UI library yet.\nThe ecosystem misses a crucial part, but the existing libraries can help at the initial bootstrapping stage.\nMoreover, it provides a knowledge to use when it comes to building your own UI library for the React projects."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"http://react-toolbox.com/#/"},"React ToolBox")," -\n",r.createElement(t.a,{href:"https://github.com/varya/react-stub/tree/with-react-toolbox"},"react-stub@with-react-toolbox")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"http://www.material-ui.com/#/"},"Material UI")," -\n",r.createElement(t.a,{href:"https://github.com/varya/react-stub/tree/with-material-ui"},"react-stub@with-material-ui")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"http://nikgraf.github.io/belle/#/?_k=xvldj2"},"Belle")," -\n",r.createElement(t.a,{href:"https://github.com/varya/react-stub/tree/with-belle"},"react-stub@with-belle")),"\n"),"\n",r.createElement(t.p,null,"To demonstrate how React works with UI libraries, I prepared a branch for each option. These branches\nare in the public GitHub repository and available for using. Also, I was able to run the code on my computer\nand show how the application changes after I alter the code."),"\n",r.createElement(t.p,null,"Live coding section always makes a good impression. Moreover, it connects the theory with actual coding."),"\n",r.createElement(t.p,null,"Before the development, I provided the dummy JSONs for the applications based on the\nthird-party services data (Instagram or Twitter). That helped the developers to be focused on React rather\nthan exploring APIs."),"\n",r.createElement(t.p,null,"During the hackathon, we had React Native and Relay & GraphQL sections for the advanced React users. These topics\nwere covered by my colleague ",r.createElement(t.a,{href:"https://fi.linkedin.com/in/anssiherranen"},"Anssi Herranen")," and our quest ",r.createElement(t.a,{href:"https://fi.linkedin.com/in/freiksenet"},"Mikhail\nNovikov")," from ",r.createElement(t.a,{href:"https://www.reindex.io/"},"Reindex"),"."),"\n",r.createElement(t.p,null,"After all the presentations, it was time to code. It is important that the hackathon organizers take care of the\ndevelopers' basic needs and let the people be focused on the programming. I'm thankful for our Head of Technology\n",r.createElement(t.a,{href:"https://fi.linkedin.com/in/laurisvan"},"Lauri Svan")," for ordering pizza and drinks, and organizing the people.\nThe developers can stay active much longer if they are taken care."),"\n",r.createElement(t.p,null,"As a result of our hackathon, some developers came up with the applications and demostrated them in the demo part.\nThe others got stable base to continues their studies later. And no doubt we all had huge fun."),"\n",r.createElement(t.p,null,"Feel free to take my presentation and materials for a hackathon in your company or at the community meeting. React\nrocks! :-)"))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)},i=n(5556),s=n.n(i),c=n(3433),h=n(9868),p=n(7037),d=n(1567),m=n(4449);const u={Box:c.a,Button:h.$,Text:p.E,Heading:d.DZ,Paragraph:d.fz,PatternJourney:d.Rl,PureHtml:d.Qi,Section:d.wn,Hero:d.lq,Widget:d.x0,PatternJourney:d.Rl,WidgetContainer:d.uM,Workshop:d.cR,ProjectRoles:d.JV,DsAspects:d.nD,Link:d.N_,Image:d._V,ImageBlock:d.Dq},g=e=>t=>{let{children:n}=t;return r.createElement(d.DZ,{level:e},n)},f={h1:g(1),h2:g(2),h3:g(3),h4:g(4),h5:g(5),h6:g(6),p:e=>{let{children:t}=e;return r.createElement(d.fz,{standout:!0},t)},a:d.N_,div:e=>{let{"data-excerpt":t,children:n,...a}=e;return t?r.createElement(d.fz,{as:"div",lead:!0},n):r.createElement("div",a,n)}};f.h1.propTypes={children:s().node};const w=e=>{let{data:{mdx:t,site:{siteMetadata:{siteUrl:n}}},children:o,pageContext:{next:l,prev:i,fileSourceUrl:s}}=e;const{readingTime:h,slug:p,disqusIdentifier:g}=t.fields,{date:w,title:E,subTitle:v,cover:k,tumblr:b}=t.frontmatter,y=t.frontmatter.tags&&t.frontmatter.tags.split(","),I=p.startsWith("blog/");return t?r.createElement(d.PE,null,r.createElement(d.I0,{imageUrl:k&&k.childImageSharp.gatsbyImageData.images.fallback.src,tags:y,date:w,readingTime:I&&parseInt(h.minutes)>0?Math.round(h.minutes).toFixed(1)+" min read":null,title:E,subTitle:v}),r.createElement(d.G$,{data:t}),r.createElement(c.a,{flex:"grow",width:"xlarge",margin:{horizontal:"auto"},pad:"medium",direction:"column"},r.createElement(a.xA,{components:{...f,...u}},o),r.createElement(c.a,{direction:"row",fill:"horizontal",justify:"center",margin:{bottom:"auto"},pad:{vertical:"medium"}},y&&y.length>0&&y.map((e=>r.createElement(d.vw,{key:e,name:e.trim(),slug:(0,m.fX)(e),margin:"xsmall"})))),I&&r.createElement(r.Fragment,null,r.createElement(d.WB,{flex:!1,prevSlug:i&&"/"+i.fields.slug,nextSlug:l&&"/"+l.fields.slug,prevTitle:i&&i.frontmatter.title,nextTitle:l&&l.frontmatter.title,pad:{vertical:"medium"}}),r.createElement(d.Sn,{link:s}),r.createElement(d.Hw,{slug:p,title:E,disqusIdentifier:g,tumblr:b,siteUrl:n})))):null};function E(e){return r.createElement(w,e,r.createElement(l,e))}},8453:function(e,t,n){n.d(t,{RP:function(){return o},xA:function(){return i}});var a=n(6540);const r=a.createContext({});function o(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||l:o(e),a.createElement(r.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-templates-post-js-content-file-path-home-runner-work-varya-github-com-varya-github-com-content-posts-react-hackathon-materials-index-en-md-03bb2a53b0d121e6d2d9.js.map