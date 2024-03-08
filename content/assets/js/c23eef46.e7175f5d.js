"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[63839],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>P});var n=a(58168),r=a(96540),l=a(20053),i=a(23104),u=a(56347),o=a(57485),s=a(31682),c=a(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,s]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),h(e)}),[s,h,l]),tabValues:l}}var f=a(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==u&&(p(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":u===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,l.A)("tabs-container",y.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function P(e){const t=(0,f.A)();return r.createElement(N,(0,n.A)({key:String(t)},e))}},18598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),l=a(11470),i=a(19365);const u={id:"admin-api-tutorial",title:"Tutorial",sidebar_label:"Tutorial",description:"Learn how to configure Pulsar admin interfaces if authentication is enabled in your Pulsar instance."},o=void 0,s={unversionedId:"admin-api-tutorial",id:"version-3.2.x/admin-api-tutorial",title:"Tutorial",description:"Learn how to configure Pulsar admin interfaces if authentication is enabled in your Pulsar instance.",source:"@site/versioned_docs/version-3.2.x/admin-api-tutorial.md",sourceDirName:".",slug:"/admin-api-tutorial",permalink:"/docs/3.2.x/admin-api-tutorial",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/admin-api-tutorial.md",tags:[],version:"3.2.x",frontMatter:{id:"admin-api-tutorial",title:"Tutorial",sidebar_label:"Tutorial",description:"Learn how to configure Pulsar admin interfaces if authentication is enabled in your Pulsar instance."},sidebar:"docsSidebar",previous:{title:"Get started",permalink:"/docs/3.2.x/admin-api-get-started"},next:{title:"Kafka client wrapper",permalink:"/docs/3.2.x/adaptors-kafka"}},c={},p=[{value:"Admin setup",id:"admin-setup",level:2}],d={toc:p},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"admin-setup"},"Admin setup"),(0,r.yg)("p",null,"Each of the three admin interfaces (the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI tool, the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-rest-api-overview"},"REST API"),", and the ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.2.x/"},"Java admin API"),") requires some special setup if you have enabled authentication in your Pulsar instance."),(0,r.yg)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.yg)("p",null,"If you have enabled authentication, you need to provide an auth configuration to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," tool. By default, the configuration for the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," tool is in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/client.conf"},(0,r.yg)("inlineCode",{parentName:"a"},"conf/client.conf"))," file. The following are the available parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"webServiceUrl"),(0,r.yg)("td",{parentName:"tr",align:null},"The web URL for the cluster."),(0,r.yg)("td",{parentName:"tr",align:null},"http://localhost:8080/")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"brokerServiceUrl"),(0,r.yg)("td",{parentName:"tr",align:null},"The Pulsar protocol URL for the cluster."),(0,r.yg)("td",{parentName:"tr",align:null},"pulsar://localhost:6650/")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"authPlugin"),(0,r.yg)("td",{parentName:"tr",align:null},"The authentication plugin."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"authParams"),(0,r.yg)("td",{parentName:"tr",align:null},"The authentication parameters for the cluster, as a comma-separated string."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"useTls"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether or not TLS authentication will be enforced in the cluster."),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tlsAllowInsecureConnection"),(0,r.yg)("td",{parentName:"tr",align:null},"Accept untrusted TLS certificate from client."),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tlsTrustCertsFilePath"),(0,r.yg)("td",{parentName:"tr",align:null},"Path for the trusted TLS certificate file."),(0,r.yg)("td",{parentName:"tr",align:null}))))),(0,r.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,r.yg)("p",null,"You can find details for the REST API exposed by Pulsar brokers in the ",(0,r.yg)("a",{parentName:"p",href:"pathname:///admin-rest-api/?version=3.2.1"},"REST API doc"),"."),(0,r.yg)("p",null,"If you want to test REST APIs in postman, you can use the REST API JSON files ",(0,r.yg)("a",{parentName:"p",href:"pathname:///swagger/"},"here"),".")),(0,r.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,r.yg)("p",null,"To use the Java admin API, instantiate a ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.2.x/org/apache/pulsar/client/admin/PulsarAdmin"},"PulsarAdmin")," object, and specify a URL for a Pulsar broker and a ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.2.x/org/apache/pulsar/client/admin/PulsarAdminBuilder"},"PulsarAdminBuilder")," object. The following is a minimal example using ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'String url = "http://localhost:8080";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n    .authentication(authPluginClassName,authParams)\n    .serviceHttpUrl(url)\n    .tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n    .allowTlsInsecureConnection(tlsAllowInsecureConnection)\n    .build();\n')),(0,r.yg)("p",null,"If you use multiple brokers, you can use multi-host like Pulsar service. For example,"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'String url = "http://localhost:8080,localhost:8081,localhost:8082";\n// Below are the same to the line 2 - line 13 in the code snippet above\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n    .authentication(authPluginClassName,authParams)\n    .serviceHttpUrl(url)\n    .tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n    .allowTlsInsecureConnection(tlsAllowInsecureConnection)\n    .build();\n')))))}g.isMDXComponent=!0}}]);