"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[66594],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),f=g(n),m=i,u=f["".concat(s,".").concat(m)]||f[m]||p[m]||l;return n?o.createElement(u,a(a({ref:t},c),{},{components:n})):o.createElement(u,a({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[f]="string"==typeof e?e:i,a[1]=r;for(var g=2;g<l;g++)a[g]=n[g];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>g});var o=n(58168),i=(n(96540),n(15680));const l={id:"setup-mergetool",title:"Setting up Git mergetool"},a=void 0,r={unversionedId:"setup-mergetool",id:"setup-mergetool",title:"Setting up Git mergetool",description:"Merge conflict resolution tooling",source:"@site/contribute/setup-mergetool.md",sourceDirName:".",slug:"/setup-mergetool",permalink:"/contribute/setup-mergetool",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/setup-mergetool.md",tags:[],version:"current",lastUpdatedBy:"Malla Sandeep",lastUpdatedAt:1714331790,formattedLastUpdatedAt:"Apr 28, 2024",frontMatter:{id:"setup-mergetool",title:"Setting up Git mergetool"},sidebar:"sidebarDevelopment",previous:{title:"Setting up an IDE",permalink:"/contribute/setup-ide"},next:{title:"Debugging",permalink:"/contribute/setup-debugging"}},s={},g=[{value:"Merge conflict resolution tooling",id:"merge-conflict-resolution-tooling",level:2},{value:"kdiff3 configuration on MacOS",id:"kdiff3-configuration-on-macos",level:3},{value:"kdiff3 configuration on Linux",id:"kdiff3-configuration-on-linux",level:3},{value:"Using the mergetool kdiff3",id:"using-the-mergetool-kdiff3",level:3},{value:"Git revert and commit amending tooling",id:"git-revert-and-commit-amending-tooling",level:3},{value:"Using IntelliJ for cherry-picking and merge conflict resolution.",id:"using-intellij-for-cherry-picking-and-merge-conflict-resolution",level:3},{value:"Useful links",id:"useful-links",level:3}],c={toc:g},f="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(f,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"merge-conflict-resolution-tooling"},"Merge conflict resolution tooling"),(0,i.yg)("p",null,"For Apache Pulsar core developers, handling git merge conflict resolution is necessary.\nTo efficiently resolve merge conflicts, setting up tools that assist in visualizing these conflicts and resolving them is essential. "),(0,i.yg)("p",null,"For developers starting to use automated tools to resolve merge conflicts during cherry-picking, IntelliJ is a recommended option. It offers excellent tooling, but its integration with a command-line workflow is not seamless. It performs well when you initiate the cherry-picking process in IntelliJ and handle the merge conflict resolution within the same environment. However, resolving a merge conflict often involves multiple steps, including reverting and amending changes until a satisfactory resolution is achieved. In many cases, using a combination of tools may be more effective than relying solely on IntelliJ for all required operations."),(0,i.yg)("p",null,"For more advanced users who use ",(0,i.yg)("inlineCode",{parentName:"p"},"git")," on the command line, setting up the ",(0,i.yg)("inlineCode",{parentName:"p"},"git mergetool")," is recommended.\nHere's an example of how to set up ",(0,i.yg)("inlineCode",{parentName:"p"},"kdiff3")," as a mergetool."),(0,i.yg)("h3",{id:"kdiff3-configuration-on-macos"},"kdiff3 configuration on MacOS"),(0,i.yg)("p",null,"Install ",(0,i.yg)("inlineCode",{parentName:"p"},"kdiff3"),"'s cask version with ",(0,i.yg)("inlineCode",{parentName:"p"},"brew"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"# important! install the cask version of kdiff3\nbrew install --cask kdiff3\n")),(0,i.yg)("p",null,"Configure ",(0,i.yg)("inlineCode",{parentName:"p"},"kdiff3")," as the mergetool and difftool of git"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"git config --global mergetool.kdiff3.path /Applications/kdiff3.app/Contents/MacOS/kdiff3\ngit config --global mergetool.kdiff3.args '$base $local $other -o $output'\ngit config --global mergetool.kdiff3.trustExitCode false\ngit config --global merge.tool kdiff3\ngit config --global difftool.kdiff3.path /Applications/kdiff3.app/Contents/MacOS/kdiff3\ngit config --global difftool.kdiff3.args '$base $local $other -o $output'\ngit config --global difftool.kdiff3.trustExitCode false\ngit config --global diff.guitool kdiff3\n")),(0,i.yg)("h3",{id:"kdiff3-configuration-on-linux"},"kdiff3 configuration on Linux"),(0,i.yg)("p",null,"Install ",(0,i.yg)("inlineCode",{parentName:"p"},"kdiff3")," from your package manager. For example, on Ubuntu:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"sudo apt install kdiff3\n")),(0,i.yg)("p",null,"Configure ",(0,i.yg)("inlineCode",{parentName:"p"},"kdiff3")," as the mergetool and difftool of git"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"git config --global mergetool.kdiff3.path /usr/bin/kdiff3\ngit config --global merge.tool kdiff3\ngit config --global difftool.kdiff3.path /usr/bin/kdiff3\ngit config --global diff.guitool kdiff3\n")),(0,i.yg)("h3",{id:"using-the-mergetool-kdiff3"},"Using the mergetool kdiff3"),(0,i.yg)("p",null,"If any merge conflicts arise after a cherry-pick, merge, or rebase, you should run ",(0,i.yg)("inlineCode",{parentName:"p"},"git mergetool")," to resolve them.\nYou can run ",(0,i.yg)("inlineCode",{parentName:"p"},"git mergetool")," anytime, as the command will return when there are no conflicts to resolve."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"kdiff3")," tool isn't the most user-friendly tool, and it takes time to get accustomed to its workings.\nThere's commentary on mergetools ",(0,i.yg)("a",{parentName:"p",href:"https://www.eseth.org/2020/mergetools.html"},"in this blog post")," that could help\nyou understand what the tools do and how merges are visualized in different tools.\nOne of the advantages of ",(0,i.yg)("inlineCode",{parentName:"p"},"kdiff3")," is that it contains a custom merge algorithm which can resolve some conflicts\nwithout requiring a choice. In some cases, there may be chances for mistakes, but these are rare and could also occur when\nmanually choosing the resolution. The resolution will need to be verified in any case."),(0,i.yg)("p",null,"Tips for Using ",(0,i.yg)("inlineCode",{parentName:"p"},"kdiff3")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When the merge conflict resolution process begins, a view with three panes and a split pane at the bottom of the window will appear.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},'The left pane displays the diff from the common version of the file. This can be confusing and is often not very useful. You can hide it by deselecting "Window -> Show Window A".'),(0,i.yg)("li",{parentName:"ul"},"The middle pane shows the local version."),(0,i.yg)("li",{parentName:"ul"},"The right pane shows the remote version."),(0,i.yg)("li",{parentName:"ul"},"The bottom pane is the output, which is the result of the merge. You can also make manual edits in this pane to resolve conflicts manually."))),(0,i.yg)("li",{parentName:"ul"},"It's beneficial to learn how to navigate to the next and previous merge conflict and how to choose the resolution using keyboard shortcuts.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"On MacOS, you may need to remap some of the keyboard shortcuts to improve usability. This is especially necessary when using an external keyboard.")))),(0,i.yg)("h3",{id:"git-revert-and-commit-amending-tooling"},"Git revert and commit amending tooling"),(0,i.yg)("p",null,"Resolving merge conflicts can sometimes be more complex with merge tools than simply reverting some changes and modifying the original source code in an IDE. This process may involve multiple steps, including reverting and amending changes to the merge commit. The merge commit should also incorporate the necessary changes for backporting.\nIn many cases, it is also necessary to fix the import statements in an IDE and amending those changes to the merge commit."),(0,i.yg)("p",null,"For this purpose, the ",(0,i.yg)("inlineCode",{parentName:"p"},"git gui")," tool is excellent. It allows for partial reverts to previous commits and makes it easy to amend additional changes to the latest commit, all with clear visualization."),(0,i.yg)("p",null,"Installing the ",(0,i.yg)("inlineCode",{parentName:"p"},"git gui")," tool:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"# on MacOS\nbrew install git-gui\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'# on Linux install "git-gui" from your package manager, example of Ubuntu\nsudo apt install git-gui\n')),(0,i.yg)("p",null,"There are many tools available for this purpose, but ",(0,i.yg)("inlineCode",{parentName:"p"},"git gui")," is one of the simplest and most effective."),(0,i.yg)("h3",{id:"using-intellij-for-cherry-picking-and-merge-conflict-resolution"},"Using IntelliJ for cherry-picking and merge conflict resolution."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.jetbrains.com/help/idea/apply-changes-from-one-branch-to-another.html#cherry-pick"},"Cherry-pick separate commits")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mSfq1SoMocg"},"Resolving Git Merge Conflicts: The Easy Way"))),(0,i.yg)("h3",{id:"useful-links"},"Useful links"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.eseth.org/2020/mergetools.html"},"Comparison of git mergetools")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Comparison_of_file_comparison_tools#General"},"Comparison of file comparison tools")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://git-scm.com/downloads/guis"},"Git GUI Clients"))))}p.isMDXComponent=!0}}]);