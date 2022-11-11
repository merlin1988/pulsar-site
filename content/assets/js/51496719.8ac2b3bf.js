"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4989],{3905:(n,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>d});var t=a(67294);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function l(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function s(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function u(n,e){if(null==n)return{};var a,t,i=function(n,e){if(null==n)return{};var a,t,i={},l=Object.keys(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||(i[a]=n[a]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(i[a]=n[a])}return i}var o=t.createContext({}),r=function(n){var e=t.useContext(o),a=e;return n&&(a="function"==typeof n?n(e):s(s({},e),n)),a},p=function(n){var e=r(n.components);return t.createElement(o.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(n,e){var a=n.components,i=n.mdxType,l=n.originalType,o=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),c=r(a),d=i,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return a?t.createElement(f,s(s({ref:e},p),{},{components:a})):t.createElement(f,s({ref:e},p))}));function d(n,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var l=a.length,s=new Array(l);s[0]=c;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=n,u.mdxType="string"==typeof n?n:i,s[1]=u;for(var r=2;r<l;r++)s[r]=a[r];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(n,e,a)=>{a.d(e,{Z:()=>s});var t=a(67294),i=a(86010);const l="tabItem_Ymn6";function s(n){let{children:e,hidden:a,className:s}=n;return t.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,s),hidden:a},e)}},65488:(n,e,a)=>{a.d(e,{Z:()=>d});var t=a(87462),i=a(67294),l=a(86010),s=a(72389),u=a(67392),o=a(7094),r=a(12466);const p="tabList__CuJ",m="tabItem_LNqP";function c(n){var e;const{lazy:a,block:s,defaultValue:c,values:d,groupId:f,className:v}=n,k=i.Children.map(n.children,(n=>{if((0,i.isValidElement)(n)&&"value"in n.props)return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),I=d??k.map((n=>{let{props:{value:e,label:a,attributes:t}}=n;return{value:e,label:a,attributes:t}})),A=(0,u.l)(I,((n,e)=>n.value===e.value));if(A.length>0)throw new Error(`Docusaurus error: Duplicate values "${A.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(e=k.find((n=>n.props.default)))?void 0:e.props.value)??k[0].props.value;if(null!==g&&!I.some((n=>n.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${I.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:h}=(0,o.U)(),[b,N]=(0,i.useState)(g),P=[],{blockElementScrollPositionUntilNextRender:C}=(0,r.o5)();if(null!=f){const n=T[f];null!=n&&n!==b&&I.some((e=>e.value===n))&&N(n)}const y=n=>{const e=n.currentTarget,a=P.indexOf(e),t=I[a].value;t!==b&&(C(e),N(t),null!=f&&h(f,String(t)))},E=n=>{var e;let a=null;switch(n.key){case"Enter":y(n);break;case"ArrowRight":{const e=P.indexOf(n.currentTarget)+1;a=P[e]??P[0];break}case"ArrowLeft":{const e=P.indexOf(n.currentTarget)-1;a=P[e]??P[P.length-1];break}}null==(e=a)||e.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},v)},I.map((n=>{let{value:e,label:a,attributes:s}=n;return i.createElement("li",(0,t.Z)({role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,key:e,ref:n=>P.push(n),onKeyDown:E,onClick:y},s,{className:(0,l.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":b===e})}),a??e)}))),a?(0,i.cloneElement)(k.filter((n=>n.props.value===b))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((n,e)=>(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==b})))))}function d(n){const e=(0,s.Z)();return i.createElement(c,(0,t.Z)({key:String(e)},n))}},62510:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>r,toc:()=>m});var t=a(87462),i=(a(67294),a(3905)),l=a(65488),s=a(85162);const u={id:"admin-api-functions",title:"Manage Functions",sidebar_label:"Functions",original_id:"admin-api-functions"},o=void 0,r={unversionedId:"admin-api-functions",id:"version-2.8.x/admin-api-functions",title:"Manage Functions",description:"Pulsar Functions are lightweight compute processes that",source:"@site/versioned_docs/version-2.8.x/admin-api-functions.md",sourceDirName:".",slug:"/admin-api-functions",permalink:"/docs/2.8.x/admin-api-functions",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/admin-api-functions.md",tags:[],version:"2.8.x",frontMatter:{id:"admin-api-functions",title:"Manage Functions",sidebar_label:"Functions",original_id:"admin-api-functions"},sidebar:"version-2.8.x/docsSidebar",previous:{title:"Topics",permalink:"/docs/2.8.x/admin-api-topics"},next:{title:"Packages",permalink:"/docs/2.8.x/admin-api-packages"}},p={},m=[{value:"Function resources",id:"function-resources",level:2},{value:"Create a function",id:"create-a-function",level:3},{value:"Update a function",id:"update-a-function",level:3},{value:"Start an instance of a function",id:"start-an-instance-of-a-function",level:3},{value:"Start all instances of a function",id:"start-all-instances-of-a-function",level:3},{value:"Stop an instance of a function",id:"stop-an-instance-of-a-function",level:3},{value:"Stop all instances of a function",id:"stop-all-instances-of-a-function",level:3},{value:"Restart an instance of a function",id:"restart-an-instance-of-a-function",level:3},{value:"Restart all instances of a function",id:"restart-all-instances-of-a-function",level:3},{value:"List all functions",id:"list-all-functions",level:3},{value:"Delete a function",id:"delete-a-function",level:3},{value:"Get info about a function",id:"get-info-about-a-function",level:3},{value:"Get status of an instance of a function",id:"get-status-of-an-instance-of-a-function",level:3},{value:"Get status of all instances of a function",id:"get-status-of-all-instances-of-a-function",level:3},{value:"Get stats of an instance of a function",id:"get-stats-of-an-instance-of-a-function",level:3},{value:"Get stats of all instances of a function",id:"get-stats-of-all-instances-of-a-function",level:3},{value:"Trigger a function",id:"trigger-a-function",level:3},{value:"Put state associated with a function",id:"put-state-associated-with-a-function",level:3},{value:"Fetch state associated with a function",id:"fetch-state-associated-with-a-function",level:3}],c={toc:m};function d(n){let{components:e,...a}=n;return(0,i.kt)("wrapper",(0,t.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pulsar Functions")," are lightweight compute processes that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"consume messages from one or more Pulsar topics"),(0,i.kt)("li",{parentName:"ul"},"apply a user-supplied processing logic to each message"),(0,i.kt)("li",{parentName:"ul"},"publish the results of the computation to another topic")),(0,i.kt)("p",null,"Functions can be managed via the following methods."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Admin CLI")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/docs/2.8.x/reference-pulsar-admin#functions"},(0,i.kt)("inlineCode",{parentName:"a"},"functions"))," command of the ",(0,i.kt)("a",{parentName:"td",href:"/docs/2.8.x/reference-pulsar-admin"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"REST API")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"/admin/v3/functions")," endpoint of the admin ",(0,i.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Java Admin API")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"functions")," method of the ",(0,i.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin"},"PulsarAdmin")," object in the ",(0,i.kt)("a",{parentName:"td",href:"/docs/2.8.x/client-libraries-java"},"Java API"),".")))),(0,i.kt)("h2",{id:"function-resources"},"Function resources"),(0,i.kt)("p",null,"You can perform the following operations on functions."),(0,i.kt)("h3",{id:"create-a-function"},"Create a function"),(0,i.kt)("p",null,"You can create a Pulsar function in cluster mode (deploy it on a Pulsar cluster) using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-create"},(0,i.kt)("inlineCode",{parentName:"a"},"create"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions create \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --inputs test-input-topic \\\n  --output persistent://public/default/test-output-topic \\\n  --classname org.apache.pulsar.functions.api.examples.ExclamationFunction \\\n  --jar /examples/api-examples.jar\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/registerFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nFunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nfunctionConfig.setProcessingGuarantees(FunctionConfig.ProcessingGuarantees.ATLEAST_ONCE);\nfunctionConfig.setTopicsPattern(sourceTopicPattern);\nfunctionConfig.setSubName(subscriptionName);\nfunctionConfig.setAutoAck(true);\nfunctionConfig.setOutput(sinkTopic);\nadmin.functions().createFunction(functionConfig, fileName);\n\n')))),(0,i.kt)("h3",{id:"update-a-function"},"Update a function"),(0,i.kt)("p",null,"You can update a Pulsar function that has been deployed to a Pulsar cluster using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST Admin API",value:"REST Admin API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-update"},(0,i.kt)("inlineCode",{parentName:"a"},"update"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions update \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --output persistent://public/default/update-output-topic \\\n  # other options\n\n"))),(0,i.kt)(s.Z,{value:"REST Admin API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/updateFunction"},"PUT /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nFunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nUpdateOptions updateOptions = new UpdateOptions();\nupdateOptions.setUpdateAuthData(updateAuthData);\nadmin.functions().updateFunction(functionConfig, userCodeFile, updateOptions);\n\n')))),(0,i.kt)("h3",{id:"start-an-instance-of-a-function"},"Start an instance of a function"),(0,i.kt)("p",null,"You can start a stopped function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-start"},(0,i.kt)("inlineCode",{parentName:"a"},"start"))," subcommand. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions start \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/startFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/start"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().startFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,i.kt)("h3",{id:"start-all-instances-of-a-function"},"Start all instances of a function"),(0,i.kt)("p",null,"You can start all stopped function instances using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-start"},(0,i.kt)("inlineCode",{parentName:"a"},"start"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions start \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/startFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/start"))),(0,i.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().startFunction(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"stop-an-instance-of-a-function"},"Stop an instance of a function"),(0,i.kt)("p",null,"You can stop a function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-stop"},(0,i.kt)("inlineCode",{parentName:"a"},"stop"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stop \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/stopFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stop"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().stopFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,i.kt)("h3",{id:"stop-all-instances-of-a-function"},"Stop all instances of a function"),(0,i.kt)("p",null,"You can stop all function instances using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-stop"},(0,i.kt)("inlineCode",{parentName:"a"},"stop"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stop \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/stopFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/stop"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().stopFunction(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"restart-an-instance-of-a-function"},"Restart an instance of a function"),(0,i.kt)("p",null,"Restart a function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-restart"},(0,i.kt)("inlineCode",{parentName:"a"},"restart"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions restart \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/restartFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/restart"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().restartFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,i.kt)("h3",{id:"restart-all-instances-of-a-function"},"Restart all instances of a function"),(0,i.kt)("p",null,"You can restart all function instances using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-restart"},(0,i.kt)("inlineCode",{parentName:"a"},"restart"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions restart \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/restartFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/restart"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().restartFunction(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"list-all-functions"},"List all functions"),(0,i.kt)("p",null,"You can list all Pulsar functions running under a specific tenant and namespace using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-list"},(0,i.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions list \\\n  --tenant public \\\n  --namespace default\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/listFunctions"},"GET /admin/v3/functions/:tenant/:namespace"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctions(tenant, namespace);\n\n")))),(0,i.kt)("h3",{id:"delete-a-function"},"Delete a function"),(0,i.kt)("p",null,"You can delete a Pulsar function that is running on a Pulsar cluster using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-delete"},(0,i.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions delete \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/deregisterFunction"},"DELETE /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().deleteFunction(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"get-info-about-a-function"},"Get info about a function"),(0,i.kt)("p",null,"You can get information about a Pulsar function currently running in cluster mode using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-get"},(0,i.kt)("inlineCode",{parentName:"a"},"get"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions get \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/getFunctionInfo"},"GET /admin/v3/functions/:tenant/:namespace/:functionName"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunction(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"get-status-of-an-instance-of-a-function"},"Get status of an instance of a function"),(0,i.kt)("p",null,"You can get the current status of a Pulsar function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-status"},(0,i.kt)("inlineCode",{parentName:"a"},"status"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions status \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/getFunctionInstanceStatus"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/status"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStatus(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,i.kt)("h3",{id:"get-status-of-all-instances-of-a-function"},"Get status of all instances of a function"),(0,i.kt)("p",null,"You can get the current status of a Pulsar function instance using Admin CLI, REST API or Java Admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-status"},(0,i.kt)("inlineCode",{parentName:"a"},"status"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions status \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/getFunctionStatus"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/status"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStatus(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"get-stats-of-an-instance-of-a-function"},"Get stats of an instance of a function"),(0,i.kt)("p",null,"You can get the current stats of a Pulsar Function instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-stats"},(0,i.kt)("inlineCode",{parentName:"a"},"stats"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stats \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/getFunctionInstanceStats"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stats"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStats(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,i.kt)("h3",{id:"get-stats-of-all-instances-of-a-function"},"Get stats of all instances of a function"),(0,i.kt)("p",null,"You can get the current stats of a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-stats"},(0,i.kt)("inlineCode",{parentName:"a"},"stats"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stats \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/getFunctionStats"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/stats"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStats(tenant, namespace, functionName);\n\n")))),(0,i.kt)("h3",{id:"trigger-a-function"},"Trigger a function"),(0,i.kt)("p",null,"You can trigger a specified Pulsar function with a supplied value using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-trigger"},(0,i.kt)("inlineCode",{parentName:"a"},"trigger"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin functions trigger \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --topic (the name of input topic) \\\n  --trigger-value \\"hello pulsar\\"\n  # or --trigger-file (the path of trigger file)\n\n'))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/triggerFunction"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/trigger"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().triggerFunction(tenant, namespace, functionName, topic, triggerValue, triggerFile);\n\n")))),(0,i.kt)("h3",{id:"put-state-associated-with-a-function"},"Put state associated with a function"),(0,i.kt)("p",null,"You can put the state associated with a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-putstate"},(0,i.kt)("inlineCode",{parentName:"a"},"putstate"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin functions putstate \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --state "{\\"key\\":\\"pulsar\\", \\"stringValue\\":\\"hello pulsar\\"}"\n\n'))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/putFunctionState"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/state/:key"))),(0,i.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nTypeReference<FunctionState> typeRef = new TypeReference<FunctionState>() {};\nFunctionState stateRepr = ObjectMapperFactory.getThreadLocal().readValue(state, typeRef);\nadmin.functions().putFunctionState(tenant, namespace, functionName, stateRepr);\n\n")))),(0,i.kt)("h3",{id:"fetch-state-associated-with-a-function"},"Fetch state associated with a function"),(0,i.kt)("p",null,"You can fetch the current state associated with a Pulsar function using Admin CLI, REST API or Java admin API."),(0,i.kt)(l.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin CLI",value:"Java Admin CLI"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-querystate"},(0,i.kt)("inlineCode",{parentName:"a"},"querystate"))," subcommand. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions querystate \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --key (the key of state)\n\n"))),(0,i.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api?version=2.8.4&apiversion=v3#operation/getFunctionState"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/state/:key"))),(0,i.kt)(s.Z,{value:"Java Admin CLI",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionState(tenant, namespace, functionName, key);\n\n")))))}d.isMDXComponent=!0}}]);