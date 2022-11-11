"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7217],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},18284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"syntax",title:"Documentation Writing Syntax Guide",sidebar_label:"Writing Syntax Guide"},o=void 0,l={unversionedId:"documentation/syntax",id:"documentation/syntax",title:"Documentation Writing Syntax Guide",description:"This guide explains how to write Pulsar documentation using the MDX-compatible markdown syntax.",source:"@site/contribute/documentation/syntax.md",sourceDirName:"documentation",slug:"/documentation/syntax",permalink:"/contribute/documentation/syntax",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/documentation/syntax.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1668131232,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{id:"syntax",title:"Documentation Writing Syntax Guide",sidebar_label:"Writing Syntax Guide"},sidebar:"sidebar",previous:{title:"Content Preview Guide",permalink:"/contribute/documentation/preview"},next:{title:"Releasing",permalink:"/contribute/category/releasing"}},s={},p=[{value:"Background",id:"background",level:2},{value:"Why use new markdown syntax?",id:"why-use-new-markdown-syntax",level:3},{value:"How to test doc changes?",id:"how-to-test-doc-changes",level:3},{value:"Syntax",id:"syntax",level:2},{value:"Markdown",id:"markdown",level:3},{value:"Tab",id:"tab",level:3},{value:"Code blocks",id:"code-blocks",level:3},{value:"Admonitions",id:"admonitions",level:3},{value:"Assets",id:"assets",level:3},{value:"Indentation &amp; space",id:"indentation--space",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Tables",id:"tables",level:3},{value:"Links",id:"links",level:3},{value:"Anchor links",id:"anchor-links",level:4},{value:"Links to internal documentation",id:"links-to-internal-documentation",level:4},{value:"Links to external documentation",id:"links-to-external-documentation",level:4},{value:"Link to a specific line of code",id:"link-to-a-specific-line-of-code",level:4},{value:"Authoritative sources",id:"authoritative-sources",level:3},{value:"Escape",id:"escape",level:3},{value:"Headings",id:"headings",level:3}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains how to write Pulsar documentation using the MDX-compatible markdown syntax."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"The Pulsar documentation uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"Markdown")," as its markup language and ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," for generating the documentation and website."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udd34 ",(0,r.kt)("strong",{parentName:"p"},"BREAKING CHANGE")),(0,r.kt)("p",{parentName:"blockquote"},"From 2022/5/18, you need to use ",(0,r.kt)("strong",{parentName:"p"},"Markdown syntax that is compatible with MDX"),". Otherwise, your changes can not be recognized by MDX and rendered properly. In this case, your PR can not be merged.")),(0,r.kt)("h3",{id:"why-use-new-markdown-syntax"},"Why use new markdown syntax?"),(0,r.kt)("p",null,"The new Pulsar website is launched on 2022/5/11. It is upgraded to Docusaurus V2, which uses MDX as the parsing engine. MDX can do much more than just parsing standard Markdown syntax, like rendering React components inside your documents as well. However, ",(0,r.kt)("strong",{parentName:"p"},"some previous documentation using Markdown syntax is incompatible with MDX"),"\u3002 Consequently, you need to change the way you write."),(0,r.kt)("h3",{id:"how-to-test-doc-changes"},"How to test doc changes?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can play with the MDX format in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://mdxjs.com/playground/"},"MDX Playground"))," . Write some MDX to find out what it turns into. You can see the rendered result, the generated code, and the intermediary ASTs. This can be helpful for debugging or exploring.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For how to test doc changes locally, see ",(0,r.kt)("a",{parentName:"p",href:"/contribute/documentation/preview"},"Pulsar Content Preview Guide"),"."))),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2757\ufe0f",(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",{parentName:"blockquote"},"This guide just highlights ",(0,r.kt)("strong",{parentName:"p"},"some")," important rules and frequently used syntax that is ",(0,r.kt)("strong",{parentName:"p"},"different from the Markdown syntax used in the previous docs"),". For the complete syntax guide, see ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/next/markdown-features"},"Docusaurus - Markdown Features")," and ",(0,r.kt)("a",{parentName:"p",href:"https://mdxjs.com/docs/what-is-mdx/#markdown"},"MDX - Markdown"),".")),(0,r.kt)("h3",{id:"markdown"},"Markdown"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Use Markdown rather than HTML")," as much as possible, or else MDX may not recognize it."),(0,r.kt)("p",{parentName:"li"},"  For example, when constructing complex tables, do not use HTML (",(0,r.kt)("inlineCode",{parentName:"p"},"<table>"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("strong",{parentName:"p"},"closing")," tags."),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("inlineCode",{parentName:"p"},"<li></li>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<br/></br>")," are especially useful for constructing complex tables, such as ",(0,r.kt)("em",{parentName:"p"},"creating a list")," and ",(0,r.kt)("em",{parentName:"p"},"adding a blank line"),"."),(0,r.kt)("p",{parentName:"li"},"  \ud83d\ude4c ",(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"<li>xxx \u274c\n<br/>xxx \u274c\n<li>xxx</li> \u2705\n")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"alt_text",src:a(37026).Z,width:"928",height:"376"})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'<br />xxx \u2192 wrap text in "next" line \u2705\n<br /><br />xxx \u2192 wrap text in "next next" line \u2705\n')),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"alt_text",src:a(21904).Z,width:"900",height:"264"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you need to use HTML, use ",(0,r.kt)("strong",{parentName:"p"},"React")," syntax for HTML tags."),(0,r.kt)("p",{parentName:"li"},"  \ud83d\ude4c ",(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'<span style="color: #bb3b3e;"></span> \u274c\n\n<span style={{color: "#bb3b3e"}}>deleted</span> \u2705\n')))),(0,r.kt)("h3",{id:"tab"},"Tab"),(0,r.kt)("p",null,"The image below shows the differences in writing multiple tabs before and after. For how to write multiple tabs, see ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/next/markdown-features/tabs"},"Tabs"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:a(13649).Z,width:"1056",height:"982"})),(0,r.kt)("h3",{id:"code-blocks"},"Code blocks"),(0,r.kt)("p",null,"For how to use syntax highlighting and supported languages, see ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/next/markdown-features/code-blocks#syntax-highlighting"},"Syntax highlighting"),"."),(0,r.kt)("h3",{id:"admonitions"},"Admonitions"),(0,r.kt)("p",null,"The image below shows the differences to write admonitions before and after."),(0,r.kt)("p",null,"For how to write admonitions, see ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/next/markdown-features/admonitions"},"Admonitions"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:a(84298).Z,width:"1052",height:"642"})),(0,r.kt)("h3",{id:"assets"},"Assets"),(0,r.kt)("p",null,"Add dash ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," before the asset path."),(0,r.kt)("p",null,"\ud83d\ude4c ",(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"![Page Linking](/assets/page-linking.png)\n")),(0,r.kt)("h3",{id:"indentation--space"},"Indentation & space"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the same indentation for running texts and code blocks."),(0,r.kt)("p",{parentName:"li"},"\ud83d\ude4c ",(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"alt_text",src:a(32834).Z,width:"520",height:"256"})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the content block after an ",(0,r.kt)("strong",{parentName:"p"},"ordered list"),", indent the content block by only 3 spaces (not 4 spaces).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the content block after an ",(0,r.kt)("strong",{parentName:"p"},"unordered list"),", indent the content block by only 2 spaces."),(0,r.kt)("p",{parentName:"li"},"\ud83d\ude4c ",(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"alt_text",src:a(29514).Z,width:"928",height:"404"})),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 ",(0,r.kt)("strong",{parentName:"p"},"Tip")),(0,r.kt)("p",{parentName:"blockquote"},"You can set the ",(0,r.kt)("strong",{parentName:"p"},"Tab Size")," in VS Code settings."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"alt_text",src:a(31786).Z,width:"854",height:"530"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Insert ",(0,r.kt)("strong",{parentName:"p"},"only an")," empty line (not two empty lines or more) between code blocks and running texts."),(0,r.kt)("p",{parentName:"li"},"\ud83d\ude4c ",(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"alt_text",src:a(99326).Z,width:"670",height:"462"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"alt_text",src:a(93217).Z,width:"934",height:"582"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"alt_text",src:a(62742).Z,width:"1024",height:"450"})))),(0,r.kt)("h3",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"If you create a new ",(0,r.kt)("inlineCode",{parentName:"p"},".md")," file, add quotes for the value of sidebar_label."),(0,r.kt)("p",null,"\ud83d\ude4c ",(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:a(34810).Z,width:"928",height:"378"})),(0,r.kt)("h3",{id:"tables"},"Tables"),(0,r.kt)("p",null,"To help tables be easier to maintain, consider adding additional spaces to the column widths to make them consistent."),(0,r.kt)("p",null,"\ud83d\ude4c ",(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"| App name | Description         | Requirements   |\n| :------- | :------------------ | :------------- |\n| App 1    | Description text 1. | Requirements 1 |\n| App 2    | Description text 2. | None           |\n")),(0,r.kt)("p",null,"To format tables easily, you can install a plugin or extension in your editor as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visual Studio Code: ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=darkriszty.markdown-table-prettify"},"Markdown Table Prettifier"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sublime Text: ",(0,r.kt)("a",{parentName:"p",href:"https://packagecontrol.io/packages/Markdown%20Table%20Formatter"},"Markdown Table Formatter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Atom: ",(0,r.kt)("a",{parentName:"p",href:"https://atom.io/packages/markdown-table-formatter"},"Markdown Table Formatter")))),(0,r.kt)("h3",{id:"links"},"Links"),(0,r.kt)("p",null,"Use links instead of summarizing to help preserve a single source of truth in Pulsar documentation."),(0,r.kt)("h4",{id:"anchor-links"},"Anchor links"),(0,r.kt)("p",null,"Headings generate anchor links when rendered."),(0,r.kt)("p",null,"\ud83d\ude4c ",(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"## This is an example")," generates the anchor ",(0,r.kt)("inlineCode",{parentName:"p"},"#this-is-an-example"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2757\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Avoid crosslinking docs to headings unless you need to link to a specific section of the document. This avoids breaking anchors in the future in case the heading is changed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If possible, avoid changing headings, because they\u2019re not only linked internally. There are various links to Pulsar documentation on the internet, such as tutorials, presentations, StackOverflow posts, and other sources.")))),(0,r.kt)("h4",{id:"links-to-internal-documentation"},"Links to internal documentation"),(0,r.kt)("p",null,"Internal refers to documentation in the same Pulsar project."),(0,r.kt)("p",null,"General rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use relative links rather than absolute URLs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Don\u2019t prepend ./ or ../../ to links to files or directories."))),(0,r.kt)("p",null,"\ud83d\ude4c ",(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,r.kt)("th",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("th",{parentName:"tr",align:null},"\u274c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Crosslink to other markdown file ",(0,r.kt)("br",null),(0,r.kt)("br",null)," (/path/xx/ is not needed)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[Function overview](function-overview.md)")),(0,r.kt)("td",{parentName:"tr",align:null},"- ",(0,r.kt)("inlineCode",{parentName:"td"},"[Function overview](functions-overview)")," ",(0,r.kt)("br",null),(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"td"},"[Function overview](https://pulsar.apache.org/docs/next/functions-overview/)")," ",(0,r.kt)("br",null),(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"td"},"[Function overview](../../function-overview.md)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Crosslink to other chapters in the same markdown file ",(0,r.kt)("br",null),(0,r.kt)("br",null)," (# and - are needed)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[Install builtin connectors (optional)](#install-builtin-connectors-optional)")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,r.kt)("h4",{id:"links-to-external-documentation"},"Links to external documentation"),(0,r.kt)("p",null,"When describing interactions with external software, it\u2019s often helpful to include links to external documentation. When possible, make sure that you\u2019re linking to an ",(0,r.kt)("a",{parentName:"p",href:"#authoritative-sources"},"authoritative source"),"."),(0,r.kt)("p",null,"For example, if you\u2019re describing a feature in Microsoft\u2019s Active Directory, include a link to official Microsoft documentation."),(0,r.kt)("h4",{id:"link-to-a-specific-line-of-code"},"Link to a specific line of code"),(0,r.kt)("p",null,"Use a ",(0,r.kt)("strong",{parentName:"p"},"permalink "),"when linking to a specific line in a file to ensure users land on the line you\u2019re referring to though lines of code change over time."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:a(51723).Z,width:"348",height:"290"})),(0,r.kt)("h3",{id:"authoritative-sources"},"Authoritative sources"),(0,r.kt)("p",null,"When citing external information, use sources that are written by the people who created the item or product in question. These sources are the most likely to be accurate and remain up to date."),(0,r.kt)("p",null,"\ud83d\ude4c ",(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Authoritative sources include the following \u2705"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Official documentation for a product."),(0,r.kt)("p",{parentName:"li"},"  For example, if you\u2019re setting up an interface with the Google OAuth 2 authorization server, include a link to Google\u2019s documentation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Official documentation for a project."),(0,r.kt)("p",{parentName:"li"},"  For example, if you\u2019re citing NodeJS functionality, refer directly to ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/"},"NodeJS documentation"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Books from an authoritative publisher.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Authoritative sources do not include the following \u274c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Personal blog posts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Documentation from a company that describes another company\u2019s product.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Non-trustworthy articles.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Discussions on forums such as Stack Overflow."))))),(0,r.kt)("p",null,"While many of these sources to avoid can help you learn skills and or features, they can become obsolete quickly. Nobody is obliged to maintain any of these sites. Therefore, we should avoid using them as reference literature."),(0,r.kt)("p",null,"Non-authoritative sources are acceptable only if there is no equivalent authoritative source. Even then, focus on non-authoritative sources that are extensively cited or peer-reviewed."),(0,r.kt)("h3",{id:"escape"},"Escape"),(0,r.kt)("p",null,"Use the following characters to escape special characters."),(0,r.kt)("p",null,"\ud83d\ude4c ",(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("th",{parentName:"tr",align:null},"\u274c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List<String>")," ",(0,r.kt)("br",null),(0,r.kt)("br",null),"This error shows up ",(0,r.kt)("img",{alt:"alt_text",src:a(6278).Z,width:"1254",height:"188"})),(0,r.kt)("td",{parentName:"tr",align:null},"List",(0,r.kt)("inlineCode",{parentName:"td"},"<String>"),(0,r.kt)("br",null),(0,r.kt)("br",null),"Here is an ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/pull/15389/files#diff-472b2cb6fc28a0845d2f1d397dc4e6e7fa083dfe4f91d6f9dca88ad01d06a971"},"example PR"),".")))),(0,r.kt)("h3",{id:"headings"},"Headings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each documentation page begins with a ",(0,r.kt)("strong",{parentName:"li"},"level 2")," heading (##). This becomes the h1 element when the page is rendered to HTML."),(0,r.kt)("li",{parentName:"ul"},"Do not skip a level. For example: ## > ####."),(0,r.kt)("li",{parentName:"ul"},"Leave one blank line before and after the heading."),(0,r.kt)("li",{parentName:"ul"},"Do not use links as part of heading text."),(0,r.kt)("li",{parentName:"ul"},"When you change the heading text, the anchor link changes. To avoid broken links:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Do not use step numbers in headings."),(0,r.kt)("li",{parentName:"ul"},"When possible, do not use words that might change in the future.")))))}d.isMDXComponent=!0},37026:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntax-1-6cc260fef605a4c5c359ae13e831e880.png"},62742:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntax-10-bb6d8ca0ad0655e853c8089b1315653c.png"},34810:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntax-11-1c4674ba878b265cefd472884979fc66.png"},51723:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntax-12-d6b28ee0883705a2adf8cc3993d6b19d.png"},6278:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntax-13-c965ac1636ab537641b0a8068a24057d.png"},21904:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntax-2-ef1ea90c46aa0c44a8ead569c1ca3db4.png"},13649:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntax-3-a624291c0196634f13d2d850baf1613a.png"},84298:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntax-4-11b52df4e5b009f42b61d71d84323c25.png"},32834:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntax-5-17db144508dae25bda1fb95ba27ad7aa.png"},29514:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntax-6-340c28210a9736a6ee4b697cc8de00eb.png"},31786:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntax-7-51f19d2a88e5bc2c857beb9739498b4e.png"},99326:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntax-8-345d680ea9fcf3948a3bd0eeeb6c602a.png"},93217:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/syntax-9-346b902e366968f79a456d4589a8c2a5.png"}}]);