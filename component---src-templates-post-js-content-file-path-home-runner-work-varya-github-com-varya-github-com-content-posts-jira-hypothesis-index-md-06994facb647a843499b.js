"use strict";(self.webpackChunkvarya_me=self.webpackChunkvarya_me||[]).push([[3804],{6266:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(1151),r=n(7294);function l(e){const t=Object.assign({p:"p",em:"em",span:"span",ul:"ul",li:"li"},(0,a.ah)(),e.components),{Image:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Image",!0),r.createElement(r.Fragment,null,r.createElement("div",{"data-excerpt":!0},r.createElement(t.p,null,'It may happen that default JIRA project settings or board does not fully respond the needs of your project, similarly to how it was for the project I am currently working at. Our team once realised that we would benefit from custom issue types which we use for filtering and organising our Kanban board. However, "realised" is maybe not 100% suitable word since initially that was more kind of ',r.createElement(t.em,null,"hypothesis")," which we could prove or not. Simply speaking, we must try before we know.")),"\n",r.createElement("div",{class:"small",markdown:"1"},r.createElement(n,{caption:"Image source: https://www.freepik.com/free-photos-vectors/business"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1600px; width: 100%;"\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/a10988efa89a4c1aba55dad5515ad06d/8b619/thumb.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAF1pMC5oDb/xAAaEAACAwEBAAAAAAAAAAAAAAACEQABAxIx/9oACAEBAAEFAiso7mR3z7sLWK4//8QAGBEBAQADAAAAAAAAAAAAAAAAAQACESH/2gAIAQMBAT8By2PYG//EABYRAQEBAAAAAAAAAAAAAAAAAAARQf/aAAgBAgEBPwHFf//EAB0QAAICAQUAAAAAAAAAAAAAAAABAhFRITFBcYH/2gAIAQEABj8CesqfNlqTY+8k1g9Nj//EABoQAQEBAQEBAQAAAAAAAAAAAAERACExYaH/2gAIAQEAAT8homgzEfFedcbhfqdEVh+t0oyT5oFQq3f/2gAMAwEAAgADAAAAEOzP/8QAGhEBAAIDAQAAAAAAAAAAAAAAAQARYYHwkf/aAAgBAwEBPxCtMO8qAAQ7c//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEVH/2gAIAQIBAT8QA0yO3//EABkQAQEBAQEBAAAAAAAAAAAAAAERACFhkf/aAAgBAQABPxC+VSmJHsD5ktJCFF8mHGtXsGHI4r7q8tLcYKpcokpKb//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="thumb"\n        title=""\n        src="/static/a10988efa89a4c1aba55dad5515ad06d/b17f8/thumb.jpg"\n        srcset="/static/a10988efa89a4c1aba55dad5515ad06d/066f9/thumb.jpg 400w,\n/static/a10988efa89a4c1aba55dad5515ad06d/4b190/thumb.jpg 800w,\n/static/a10988efa89a4c1aba55dad5515ad06d/b17f8/thumb.jpg 1600w,\n/static/a10988efa89a4c1aba55dad5515ad06d/df51d/thumb.jpg 2400w,\n/static/a10988efa89a4c1aba55dad5515ad06d/01fc7/thumb.jpg 3200w,\n/static/a10988efa89a4c1aba55dad5515ad06d/8b619/thumb.jpg 5000w"\n        sizes="(max-width: 1600px) 100vw, 1600px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}))),"\n",r.createElement(t.p,null,'JIRA is a very much customisable tool and introducing suitable issue types should not be any problem. However, the is always a "but". Often happens, especially in large organizations, that project managers do not have necessary admin rights to change such settings but they need to make a request to those who have, say IT support or even special JIRA administrators. In this case, it is better to be sure when asking for changes. This was exactly our case. So, we should have somehow prototype the settings we want, try them out and decide if we want to request them.'),"\n",r.createElement(t.p,null,"The case I am describing needed custom issue types, filters based on those types and a Kanban board with swimlanes filtered by the types. The prototyping meant that the filters and swimlanes would be done by some other properties but assuming that they are future-to-be issue types. Usually, project managers and often other team members have no restrictions to managing the project JIRA components and adding new ones. This was out case as well."),"\n",r.createElement(t.p,null,"So, the way out would be to use components instead of issue types, try out the hypothesis and then decide. But as components were already in use for representing ... actual components, this could have made a mess. Unless there is a way to separate components from ",r.createElement(t.em,null,"components"),". And this can be done in conventional mode by using prefixes."),"\n",r.createElement(t.p,null,"Initially, the components we had were as the following:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Header"),"\n",r.createElement(t.li,null,"Footer"),"\n",r.createElement(t.li,null,"Form elements"),"\n"),"\n",r.createElement(t.p,null,"We kept them but renamed given them a prefix ",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">§</code>'}}),":"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"§ Header"),"\n",r.createElement(t.li,null,"§ Footer"),"\n",r.createElement(t.li,null,"§ Form elements"),"\n"),"\n",r.createElement(t.p,null,"Future-to-be issue types were also implemented as issue components but with a different prefix:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"# Research"),"\n",r.createElement(t.li,null,"# Development"),"\n",r.createElement(t.li,null,"# Education"),"\n"),"\n",r.createElement(t.p,null,"Voilà! Good enough for marking all the issues accordingly, making filters and board(s) and trying out for a sprint or two. As the components can be changed any time, their final list can also be formed while experiment goes. After a while, we had ",r.createElement(t.em,null,"certain request")," about the needed issue types for our JIRA administrators. And we were ",r.createElement(t.em,null,"fully certain")," that we are asking about something we were going to use for a long time."),"\n",r.createElement(t.p,null,"PS: Lately, we continued use such prefixes for grouping our components. But that's different story."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)};var s=n(5697),i=n.n(s),A=n(211),c=n(7034),m=n(9947),u=n(2348),d=n(3103);const p={Box:A.x,Button:c.z,Text:m.x,Heading:u.X6,Paragraph:u.nv,PatternJourney:u.Bk,PureHtml:u.hT,Section:u.$0,Hero:u.VM,Widget:u.$L,PatternJourney:u.Bk,WidgetContainer:u.Hl,Workshop:u.pC,ProjectRoles:u.MB,DsAspects:u.ED,Link:u.rU,Image:u.Ee,ImageBlock:u.r8},h=e=>t=>{let{children:n}=t;return r.createElement(u.X6,{level:e},n)},g={h1:h(1),h2:h(2),h3:h(3),h4:h(4),h5:h(5),h6:h(6),p:e=>{let{children:t}=e;return r.createElement(u.nv,{standout:!0},t)},a:u.rU,div:e=>{let{"data-excerpt":t,children:n,...a}=e;return t?r.createElement(u.nv,{as:"div",lead:!0},n):r.createElement("div",a,n)}};g.h1.propTypes={children:i().node};const f=e=>{let{data:{mdx:t,site:{siteMetadata:{siteUrl:n}}},children:l,pageContext:{next:o,prev:s,fileSourceUrl:i}}=e;const{readingTime:c,slug:m,disqusIdentifier:h}=t.fields,{date:f,title:E,subTitle:b,cover:w,tumblr:y}=t.frontmatter,B=t.frontmatter.tags&&t.frontmatter.tags.split(","),v=m.startsWith("blog/");return t?r.createElement(u.Ar,null,r.createElement(u.mV,{imageUrl:w&&w.childImageSharp.gatsbyImageData.images.fallback.src,tags:B,date:f,readingTime:v&&parseInt(c.minutes)>0?`${Math.round(c.minutes).toFixed(1)} min read`:null,title:E,subTitle:b}),r.createElement(u.pQ,{data:t}),r.createElement(A.x,{flex:"grow",width:"xlarge",margin:{horizontal:"auto"},pad:"medium",direction:"column"},r.createElement(a.Zo,{components:{...g,...p}},l),r.createElement(A.x,{direction:"row",fill:"horizontal",justify:"center",margin:{bottom:"auto"},pad:{vertical:"medium"}},B&&B.length>0&&B.map((e=>r.createElement(u.Vp,{key:e,name:e.trim(),slug:(0,d.mA)(e),margin:"xsmall"})))),v&&r.createElement(r.Fragment,null,r.createElement(u.Yp,{flex:!1,prevSlug:s&&`/${s.fields.slug}`,nextSlug:o&&`/${o.fields.slug}`,prevTitle:s&&s.frontmatter.title,nextTitle:o&&o.frontmatter.title,pad:{vertical:"medium"}}),r.createElement(u.vc,{link:i}),r.createElement(u.HW,{slug:m,title:E,disqusIdentifier:h,tumblr:y,siteUrl:n})))):null};function E(e){return r.createElement(f,e,r.createElement(o,e))}},1151:function(e,t,n){n.d(t,{Zo:function(){return s},ah:function(){return l}});var a=n(7294);const r=a.createContext({});function l(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||o:l(e),a.createElement(r.Provider,{value:s},t)}}}]);
//# sourceMappingURL=component---src-templates-post-js-content-file-path-home-runner-work-varya-github-com-varya-github-com-content-posts-jira-hypothesis-index-md-06994facb647a843499b.js.map