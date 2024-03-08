"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[27407],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=l,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(y,o(o({ref:n},c),{},{components:t})):a.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(96540),l=t(20053);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,o),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>N});var a=t(58168),l=t(96540),r=t(20053),o=t(23104),s=t(56347),i=t(57485),u=t(31682),c=t(89466);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}function d(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function y(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=d(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[i,u]=y({queryString:t,groupId:a}),[p,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Dv)(t);return[a,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),f=(()=>{const e=i??p;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var f=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==s&&(p(n),i(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:o}=e;return l.createElement("li",(0,a.A)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,r.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=h(e);return l.createElement("div",{className:(0,r.A)("tabs-container",g.tabList)},l.createElement(b,(0,a.A)({},e,n)),l.createElement(v,(0,a.A)({},e,n)))}function N(e){const n=(0,f.A)();return l.createElement(w,(0,a.A)({key:String(n)},e))}},91965:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=t(58168),l=(t(96540),t(15680)),r=t(11470),o=t(19365);const s={id:"administration-pulsar-shell",title:"Pulsar Shell",sidebar_label:"Pulsar Shell",description:"Get a comprehensive understanding of Pulsar Shell."},i=void 0,u={unversionedId:"administration-pulsar-shell",id:"administration-pulsar-shell",title:"Pulsar Shell",description:"Get a comprehensive understanding of Pulsar Shell.",source:"@site/docs/administration-pulsar-shell.md",sourceDirName:".",slug:"/administration-pulsar-shell",permalink:"/docs/next/administration-pulsar-shell",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/administration-pulsar-shell.md",tags:[],version:"current",frontMatter:{id:"administration-pulsar-shell",title:"Pulsar Shell",sidebar_label:"Pulsar Shell",description:"Get a comprehensive understanding of Pulsar Shell."},sidebar:"docsSidebar",previous:{title:"Pulsar Manager",permalink:"/docs/next/administration-pulsar-manager"},next:{title:"Pulsar proxy",permalink:"/docs/next/administration-proxy"}},c={},p=[{value:"Use case",id:"use-case",level:2},{value:"Install Pulsar Shell",id:"install-pulsar-shell",level:2},{value:"Connect to your cluster",id:"connect-to-your-cluster",level:2},{value:"Run commands sequentially",id:"run-commands-sequentially",level:2}],d={toc:p},m="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(m,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Pulsar shell is a fast and flexible shell for Pulsar cluster management, messaging, and more.\nIt's great for quickly switching between different clusters, and can modify cluster or tenant configurations in an instant."),(0,l.yg)("h2",{id:"use-case"},"Use case"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Administration: find all the ",(0,l.yg)("a",{parentName:"li",href:"/docs/next/admin-api-overview"},"Admin API")," features under the ",(0,l.yg)("inlineCode",{parentName:"li"},"admin")," command."),(0,l.yg)("li",{parentName:"ul"},"Client: find all the ",(0,l.yg)("a",{parentName:"li",href:"pathname:///reference/#/next/pulsar-client/"},"pulsar-client")," features under the ",(0,l.yg)("inlineCode",{parentName:"li"},"client")," command.")),(0,l.yg)("h2",{id:"install-pulsar-shell"},"Install Pulsar Shell"),(0,l.yg)("p",null,"Download the tarball from the ",(0,l.yg)("a",{parentName:"p",href:"pathname:///download"},"download page")," and extract it."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://archive.apache.org/dist/pulsar/pulsar-3.2.1/apache-pulsar-shell-3.2.1-bin.tar.gz\ntar xzvf apache-pulsar-shell-3.2.1-bin.tar.gz\ncd apache-pulsar-shell-3.2.1/\n")),(0,l.yg)("p",null,"Now you can enter Pulsar shell's interactive mode:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"./bin/pulsar-shell\nWelcome to Pulsar shell!\n  Service URL: pulsar://localhost:6650/\n  Admin URL: http://localhost:8080/\n\nType help to get started or try the autocompletion (TAB button).\nType exit or quit to end the shell session.\n\ndefault(localhost)>\n")),(0,l.yg)("h2",{id:"connect-to-your-cluster"},"Connect to your cluster"),(0,l.yg)("p",null,"By default, the shell tries to connect to a local Pulsar instance.\nTo connect to a different cluster, you have to register the cluster with Pulsar shell. You can do this in a few different ways depending on where your config file is located:"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"The configuration file must be a valid ",(0,l.yg)("inlineCode",{parentName:"p"},"client.conf")," file, the same one you use for ",(0,l.yg)("inlineCode",{parentName:"p"},"pulsar-admin"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"pulsar-client")," and other client tools.")),(0,l.yg)(r.A,{groupId:"shell-config-modes",defaultValue:"url",values:[{label:"Remote URL",value:"url"},{label:"File",value:"file"},{label:"Inline",value:"inline"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"url",mdxType:"TabItem"},(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"--url")," value must point to a valid remote file."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"default(localhost)> config create --url https://<url_to_my_client.conf> mycluster\n"))),(0,l.yg)(o.A,{value:"file",mdxType:"TabItem"},(0,l.yg)("p",null,"If the file is on your local machine, use the ",(0,l.yg)("inlineCode",{parentName:"p"},"--file")," option."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"default(localhost)> config create --file ./my-cluster-my-client.conf mycluster\n"))),(0,l.yg)(o.A,{value:"inline",mdxType:"TabItem"},(0,l.yg)("p",null,"You can encode the content of the config to base64 and specify it with the ",(0,l.yg)("inlineCode",{parentName:"p"},"--value")," option."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'default(localhost)> config create --value "base64:<client.conf_base64_encoded>" mycluster\n')))),(0,l.yg)("p",null,"Once you've configured your cluster, set it as current:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"default(localhost)> config use mycluster\nWelcome to Pulsar shell!\n  Service URL: pulsar+ssl://mycluster:6651/\n  Admin URL: https://mycluster:8443/\n\nType help to get started or try the autocompletion (TAB button).\nType exit or quit to end the shell session.\n\nmy-cluster(mycluster)>\n")),(0,l.yg)("h2",{id:"run-commands-sequentially"},"Run commands sequentially"),(0,l.yg)("p",null,"To run a bunch of admin commands sequentially, you can use Pulsar shell's non-interactive mode.\nFor example, to set up a new tenant with policies, you would normally need to run multiple ",(0,l.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," commands."),(0,l.yg)("p",null,"Let's say you want to create a new tenant ",(0,l.yg)("inlineCode",{parentName:"p"},"new-tenant")," with a namespace ",(0,l.yg)("inlineCode",{parentName:"p"},"new-namespace")," in it.\nThere are multiple ways to do this with Pulsar shell non-interactive mode:"),(0,l.yg)(r.A,{groupId:"shell-noninteractive-modes",defaultValue:"single-command",values:[{label:"Single command",value:"single-command"},{label:"File",value:"file"},{label:"Unix pipe",value:"pipe"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"single-command",mdxType:"TabItem"},(0,l.yg)("p",null,"Specify a multi-line command with the ",(0,l.yg)("inlineCode",{parentName:"p"},"-e")," option."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'./bin/pulsar-shell -e "\nconfig use my-cluster\nadmin tenants create new-tenant\nadmin namespaces create new-tenant/new-namespace\n" --fail-on-error\n'))),(0,l.yg)(o.A,{value:"file",mdxType:"TabItem"},(0,l.yg)("p",null,"Specify a file command with the ",(0,l.yg)("inlineCode",{parentName:"p"},"-f")," option."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'echo "\n# First use my-cluster config\nconfig use my-cluster\n# Now it creates a new tenant\nadmin tenants create new-tenant\n# And then it creates a new namespace inside the tenant\nadmin namespaces create new-tenant/new-namespace\n" > setup-shell.txt\n\n./bin/pulsar-shell -f ./setup-shell.txt --fail-on-error\n'))),(0,l.yg)(o.A,{value:"pipe",mdxType:"TabItem"},(0,l.yg)("p",null,"Make the shell read from the standard input ",(0,l.yg)("inlineCode",{parentName:"p"},"-")," option."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'\necho "\n# First use my-cluster config\nconfig use my-cluster\n# Now it creates a new tenant\nadmin tenants create new-tenant\n# And then it creates a new namespace inside the tenant\nadmin namespaces create new-tenant/new-namespace\n" > ./bin/pulsar-shell --fail-on-error -\n\n')))))}y.isMDXComponent=!0}}]);