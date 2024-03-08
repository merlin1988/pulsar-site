"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5404],{15680:(e,a,r)=>{r.d(a,{xA:()=>u,yg:()=>g});var n=r(96540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=n.createContext({}),p=function(e){var a=n.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=t,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(g,i(i({ref:a},u),{},{components:r})):n.createElement(g,i({ref:a},u))}));function g(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:t,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19365:(e,a,r)=>{r.d(a,{A:()=>i});var n=r(96540),t=r(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,i),hidden:r},a)}},11470:(e,a,r)=>{r.d(a,{A:()=>N});var n=r(58168),t=r(96540),o=r(20053),i=r(23104),l=r(56347),s=r(57485),p=r(31682),u=r(89466);function c(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:r,attributes:n,default:t}}=e;return{value:a,label:r,attributes:n,default:t}}))}function m(e){const{values:a,children:r}=e;return(0,t.useMemo)((()=>{const e=a??c(r);return function(e){const a=(0,p.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function d(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:r}=e;const n=(0,l.W6)(),o=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,s.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function y(e){const{defaultValue:a,queryString:r=!1,groupId:n}=e,o=m(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[s,p]=g({queryString:r,groupId:n}),[c,y]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,o]=(0,u.Dv)(r);return[n,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,t.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),y(e)}),[p,y,o]),tabValues:o}}var h=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:a,block:r,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),m=e=>{const a=e.currentTarget,r=u.indexOf(a),n=p[r].value;n!==l&&(c(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;a=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;a=u[r]??u[u.length-1];break}}a?.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},a)},p.map((e=>{let{value:a,label:r,attributes:i}=e;return t.createElement("li",(0,n.A)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===a})}),r??a)})))}function k(e){let{lazy:a,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function v(e){const a=y(e);return t.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},t.createElement(b,(0,n.A)({},e,a)),t.createElement(k,(0,n.A)({},e,a)))}function N(e){const a=(0,h.A)();return t.createElement(v,(0,n.A)({key:String(a)},e))}},93571:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(58168),t=(r(96540),r(15680)),o=r(11470),i=r(19365);const l={id:"administration-zk-bk",title:"ZooKeeper and BookKeeper administration",sidebar_label:"ZooKeeper and BookKeeper",description:"Get a comprehensive understanding of ZooKeeper and BookKeeper in Pulsar."},s=void 0,p={unversionedId:"administration-zk-bk",id:"version-3.2.x/administration-zk-bk",title:"ZooKeeper and BookKeeper administration",description:"Get a comprehensive understanding of ZooKeeper and BookKeeper in Pulsar.",source:"@site/versioned_docs/version-3.2.x/administration-zk-bk.md",sourceDirName:".",slug:"/administration-zk-bk",permalink:"/docs/3.2.x/administration-zk-bk",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/administration-zk-bk.md",tags:[],version:"3.2.x",frontMatter:{id:"administration-zk-bk",title:"ZooKeeper and BookKeeper administration",sidebar_label:"ZooKeeper and BookKeeper",description:"Get a comprehensive understanding of ZooKeeper and BookKeeper in Pulsar."},sidebar:"docsSidebar",previous:{title:"Docker",permalink:"/docs/3.2.x/deploy-docker"},next:{title:"Configure metadata store",permalink:"/docs/3.2.x/administration-metadata-store"}},u={},c=[{value:"ZooKeeper",id:"zookeeper",level:2},{value:"Deploy local ZooKeeper",id:"deploy-local-zookeeper",level:3},{value:"Deploy configuration store",id:"deploy-configuration-store",level:3},{value:"Single-cluster Pulsar instance",id:"single-cluster-pulsar-instance",level:4},{value:"Multi-cluster Pulsar instance",id:"multi-cluster-pulsar-instance",level:4},{value:"Start the service",id:"start-the-service",level:5},{value:"ZooKeeper configuration",id:"zookeeper-configuration",level:3},{value:"Configure batching operations",id:"configure-batching-operations",level:4},{value:"BookKeeper",id:"bookkeeper",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:3},{value:"Configure BookKeeper",id:"configure-bookkeeper",level:3},{value:"Deploy BookKeeper",id:"deploy-bookkeeper",level:3},{value:"Start bookies manually",id:"start-bookies-manually",level:3},{value:"Decommission bookies cleanly",id:"decommission-bookies-cleanly",level:3},{value:"BookKeeper persistence policies",id:"bookkeeper-persistence-policies",level:2},{value:"Set persistence policies",id:"set-persistence-policies",level:3},{value:"List persistence policies",id:"list-persistence-policies",level:3}],m={toc:c},d="wrapper";function g(e){let{components:a,...l}=e;return(0,t.yg)(d,(0,n.A)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Pulsar relies on two external systems for essential tasks:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://zookeeper.apache.org/"},"ZooKeeper")," is responsible for a wide variety of configuration-related and coordination-related tasks."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"http://bookkeeper.apache.org/"},"BookKeeper")," is responsible for ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.2.x/concepts-architecture-overview#persistent-storage"},"persistent storage")," of message data.")),(0,t.yg)("p",null,"ZooKeeper and BookKeeper are both open-source ",(0,t.yg)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache")," projects.\nThis diagram illustrates the role of ZooKeeper and BookKeeper in a Pulsar cluster:"),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Role of ZooKeeper and BookKeeper in Pulsar cluster",src:r(42702).A,width:"1181",height:"781"})),(0,t.yg)("p",null,"Each Pulsar cluster consists of one or more message brokers. Each broker relies on an ensemble of bookies."),(0,t.yg)("h2",{id:"zookeeper"},"ZooKeeper"),(0,t.yg)("p",null,"Each Pulsar instance relies on two separate ZooKeeper quorums."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#deploy-local-zookeeper"},"Local ZooKeeper")," operates at the cluster level and provides cluster-specific configuration management and coordination. Each Pulsar cluster needs to have a dedicated ZooKeeper cluster."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#deploy-configuration-store"},"Configuration Store")," operates at the instance level and provides configuration management for the entire system (and thus across clusters). An independent cluster of machines or the same machines that local ZooKeeper uses can provide the configuration store quorum.")),(0,t.yg)("h3",{id:"deploy-local-zookeeper"},"Deploy local ZooKeeper"),(0,t.yg)("p",null,"ZooKeeper manages a variety of essential coordination-related and configuration-related tasks for Pulsar."),(0,t.yg)("p",null,"To deploy a Pulsar instance, you need to stand up one local ZooKeeper cluster ",(0,t.yg)("em",{parentName:"p"},"per Pulsar cluster"),"."),(0,t.yg)("p",null,"To begin, add all ZooKeeper servers to the quorum configuration specified in the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-configuration#zookeeper"},(0,t.yg)("inlineCode",{parentName:"a"},"conf/zookeeper.conf"))," file. Add a ",(0,t.yg)("inlineCode",{parentName:"p"},"server.N")," line for each node in the cluster to the configuration, where ",(0,t.yg)("inlineCode",{parentName:"p"},"N")," is the number of the ZooKeeper node. The following is an example of a three-node cluster:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"server.1=zk1.us-west.example.com:2888:3888\nserver.2=zk2.us-west.example.com:2888:3888\nserver.3=zk3.us-west.example.com:2888:3888\n")),(0,t.yg)("p",null,"On each host, you need to specify the node ID in ",(0,t.yg)("inlineCode",{parentName:"p"},"myid")," file of each node, which is in ",(0,t.yg)("inlineCode",{parentName:"p"},"data/zookeeper")," folder of each server by default (you can change the file location via the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-configuration#zookeeper-dataDir"},(0,t.yg)("inlineCode",{parentName:"a"},"dataDir"))," parameter)."),(0,t.yg)("p",null,"For detailed information on ",(0,t.yg)("inlineCode",{parentName:"p"},"myid")," and more, see the ",(0,t.yg)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/r3.4.10/zookeeperAdmin.html#sc_zkMulitServerSetup"},"Multi-server setup guide")," in the ZooKeeper documentation."),(0,t.yg)("p",null,"On a ZooKeeper server at ",(0,t.yg)("inlineCode",{parentName:"p"},"zk1.us-west.example.com"),", for example, you can set the ",(0,t.yg)("inlineCode",{parentName:"p"},"myid")," value like this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p data/zookeeper\necho 1 > data/zookeeper/myid\n")),(0,t.yg)("p",null,"On ",(0,t.yg)("inlineCode",{parentName:"p"},"zk2.us-west.example.com")," the command is ",(0,t.yg)("inlineCode",{parentName:"p"},"echo 2 > data/zookeeper/myid")," and so on."),(0,t.yg)("p",null,"Once you add each server to the ",(0,t.yg)("inlineCode",{parentName:"p"},"zookeeper.conf")," configuration and each server has the appropriate ",(0,t.yg)("inlineCode",{parentName:"p"},"myid")," entry, you can start ZooKeeper on all hosts (in the background, using nohup) with the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-cli-tools"},(0,t.yg)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-daemon start zookeeper\n")),(0,t.yg)("h3",{id:"deploy-configuration-store"},"Deploy configuration store"),(0,t.yg)("p",null,"The ZooKeeper cluster configured and started up in the section above is a ",(0,t.yg)("em",{parentName:"p"},"local")," ZooKeeper cluster that you can use to manage a single Pulsar cluster. In addition to a local cluster, however, a full Pulsar instance also requires a configuration store for handling some instance-level configuration and coordination tasks."),(0,t.yg)("p",null,"If you deploy a ",(0,t.yg)("a",{parentName:"p",href:"#single-cluster-pulsar-instance"},"single-cluster")," instance, you do not need a separate cluster for the configuration store. If, however, you deploy a ",(0,t.yg)("a",{parentName:"p",href:"#multi-cluster-pulsar-instance"},"multi-cluster")," instance, you need to stand up a separate ZooKeeper cluster for configuration tasks."),(0,t.yg)("h4",{id:"single-cluster-pulsar-instance"},"Single-cluster Pulsar instance"),(0,t.yg)("p",null,"If your Pulsar instance consists of just one cluster, then you can deploy a configuration store on the same machines as the local ZooKeeper quorum but run on different TCP ports."),(0,t.yg)("p",null,"To deploy a ZooKeeper configuration store in a single-cluster instance, add the same ZooKeeper servers that the local quorum uses to the configuration file in ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-configuration#configuration-store"},(0,t.yg)("inlineCode",{parentName:"a"},"conf/global_zookeeper.conf"))," using the same method for ",(0,t.yg)("a",{parentName:"p",href:"#deploy-local-zookeeper"},"local ZooKeeper"),", but make sure to use a different port (2181 is the default for ZooKeeper). The following is an example that uses port 2184 for a three-node ZooKeeper cluster:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"clientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\n")),(0,t.yg)("p",null,"As before, create the ",(0,t.yg)("inlineCode",{parentName:"p"},"myid")," files for each server on ",(0,t.yg)("inlineCode",{parentName:"p"},"data/global-zookeeper/myid"),"."),(0,t.yg)("h4",{id:"multi-cluster-pulsar-instance"},"Multi-cluster Pulsar instance"),(0,t.yg)("p",null,"When you deploy a global Pulsar instance, with clusters distributed across different geographical regions, the configuration store serves as a highly available and strongly consistent metadata store that can tolerate failures and partitions spanning whole regions."),(0,t.yg)("p",null,"The key here is to make sure the ZK quorum members are spread across at least 3 regions and that other regions run as observers."),(0,t.yg)("p",null,"Again, given the very low expected load on the configuration store servers, you can share the same hosts used for the local ZooKeeper quorum."),(0,t.yg)("p",null,"For example, you can assume a Pulsar instance with the following clusters ",(0,t.yg)("inlineCode",{parentName:"p"},"us-west"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"us-east"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"us-central"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"eu-central"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"ap-south"),". Also you can assume, each cluster has its own local ZK servers named such as ",(0,t.yg)("inlineCode",{parentName:"p"},"zk[1-3].${CLUSTER}.example.com"),"."),(0,t.yg)("p",null,"In this scenario, you want to pick the quorum participants from a few clusters and let all the others be ZK observers. For example, to form a 7 servers quorum, you can pick 3 servers from ",(0,t.yg)("inlineCode",{parentName:"p"},"us-west"),", 2 from ",(0,t.yg)("inlineCode",{parentName:"p"},"us-central")," and 2 from ",(0,t.yg)("inlineCode",{parentName:"p"},"us-east"),"."),(0,t.yg)("p",null,"This guarantees writing to the configuration store is possible even if one of these regions is unreachable."),(0,t.yg)("p",null,"The ZK configuration in all the servers looks like below:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"clientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\nserver.4=zk1.us-central.example.com:2185:2186\nserver.5=zk2.us-central.example.com:2185:2186\nserver.6=zk3.us-central.example.com:2185:2186:observer\nserver.7=zk1.us-east.example.com:2185:2186\nserver.8=zk2.us-east.example.com:2185:2186\nserver.9=zk3.us-east.example.com:2185:2186:observer\nserver.10=zk1.eu-central.example.com:2185:2186:observer\nserver.11=zk2.eu-central.example.com:2185:2186:observer\nserver.12=zk3.eu-central.example.com:2185:2186:observer\nserver.13=zk1.ap-south.example.com:2185:2186:observer\nserver.14=zk2.ap-south.example.com:2185:2186:observer\nserver.15=zk3.ap-south.example.com:2185:2186:observer\n")),(0,t.yg)("p",null,"Additionally, ZK observers need to have:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"peerType=observer\n")),(0,t.yg)("h5",{id:"start-the-service"},"Start the service"),(0,t.yg)("p",null,"Once your configuration store configuration is in place, you can start up the service using ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-cli-tools"},(0,t.yg)("inlineCode",{parentName:"a"},"pulsar-daemon"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-daemon start configuration-store\n")),(0,t.yg)("h3",{id:"zookeeper-configuration"},"ZooKeeper configuration"),(0,t.yg)("p",null,"In Pulsar, ZooKeeper configuration is handled by two separate configuration files in the ",(0,t.yg)("inlineCode",{parentName:"p"},"conf")," directory of your Pulsar installation:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"conf/zookeeper.conf")," file handles the configuration for local ZooKeeper."),(0,t.yg)("li",{parentName:"ul"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"conf/global-zookeeper.conf")," file handles the configuration for the configuration store.\nSee ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.2.x/reference-configuration#zookeeper"},"parameters")," for more details.")),(0,t.yg)("h4",{id:"configure-batching-operations"},"Configure batching operations"),(0,t.yg)("p",null,"Using the batching operations reduces the remote procedure call (RPC) traffic between the ZooKeeper client and servers. It also reduces the number of write transactions, because each batching operation corresponds to a single ZooKeeper transaction, containing multiple read and write operations."),(0,t.yg)("p",null,"The following figure demonstrates a basic benchmark of batching read/write operations that can be requested to ZooKeeper in one second:"),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Zookeeper batching benchmark",src:r(92680).A,width:"2364",height:"728"})),(0,t.yg)("p",null,"To enable batching operations, set the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-configuration#broker"},(0,t.yg)("inlineCode",{parentName:"a"},"metadataStoreBatchingEnabled"))," parameter to ",(0,t.yg)("inlineCode",{parentName:"p"},"true")," on the broker side."),(0,t.yg)("h2",{id:"bookkeeper"},"BookKeeper"),(0,t.yg)("p",null,"BookKeeper is a scalable, low-latency persistent log storage service that Pulsar uses to store all durable data. BookKeeper is a distributed ",(0,t.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"write-ahead log")," WAL system that guarantees read consistency of independent message logs calls ledgers. Individual BookKeeper servers are also called ",(0,t.yg)("em",{parentName:"p"},"bookies"),"."),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"To manage message persistence, retention, and expiry in Pulsar, refer to ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/cookbooks-retention-expiry"},"cookbook"),".")),(0,t.yg)("h3",{id:"hardware-requirements"},"Hardware requirements"),(0,t.yg)("p",null,"Bookie hosts store message data on disk. To provide optimal performance, ensure that the bookies have a suitable hardware configuration. The following are two key dimensions of bookie hardware capacity:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Disk I/O capacity read/write"),(0,t.yg)("li",{parentName:"ul"},"Storage capacity")),(0,t.yg)("p",null,"Message entries written to bookies are always synced to disk before returning an acknowledgment to the Pulsar broker by default. To ensure low write latency, BookKeeper is designed to use multiple devices:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"A ",(0,t.yg)("strong",{parentName:"li"},"journal")," to ensure durability. For sequential writes, it is critical to have fast ",(0,t.yg)("a",{parentName:"li",href:"https://linux.die.net/man/2/fsync"},"fsync")," operations on bookie hosts. Typically, small and fast ",(0,t.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Solid-state_drive"},"solid-state drives")," (SSDs) should suffice, or ",(0,t.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hard_disk_drive"},"hard disk drives")," (HDDs) with a ",(0,t.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/RAID"},"RAID")," controller and a battery-backed write cache. Both solutions can reach fsync latency of ~0.4 ms."),(0,t.yg)("li",{parentName:"ul"},"A ",(0,t.yg)("strong",{parentName:"li"},"ledger storage device")," stores data. Writes happen in the background, so writing I/O is not a big concern. Reads happen sequentially most of the time and the backlog is drained only in case of consumer drain. To store large amounts of data, a typical configuration involves multiple HDDs with a RAID controller.")),(0,t.yg)("h3",{id:"configure-bookkeeper"},"Configure BookKeeper"),(0,t.yg)("p",null,"You can configure BookKeeper bookies using the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-configuration#bookkeeper"},(0,t.yg)("inlineCode",{parentName:"a"},"conf/bookkeeper.conf"))," configuration file. When you configure each bookie, ensure that the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-configuration#bookkeeper-zkServers"},(0,t.yg)("inlineCode",{parentName:"a"},"zkServers"))," parameter is set to the connection string for local ZooKeeper of the Pulsar cluster."),(0,t.yg)("p",null,"The minimum configuration changes required in ",(0,t.yg)("inlineCode",{parentName:"p"},"conf/bookkeeper.conf")," are as follows:"),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"Set ",(0,t.yg)("inlineCode",{parentName:"p"},"journalDirectory")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"ledgerDirectories")," carefully. It is difficult to change them later.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"# Change to point to journal disk mount point\njournalDirectory=data/bookkeeper/journal\n\n# Point to ledger storage disk mount point\nledgerDirectories=data/bookkeeper/ledgers\n\n# Point to local ZK quorum\nzkServers=zk1.example.com:2181,zk2.example.com:2181,zk3.example.com:2181\n\n#It is recommended to set this parameter. Otherwise, BookKeeper can't start normally in certain environments (for example, Huawei Cloud).\nadvertisedAddress=\n")),(0,t.yg)("p",null,"To change the ZooKeeper root path that BookKeeper uses, use ",(0,t.yg)("inlineCode",{parentName:"p"},"zkLedgersRootPath=/MY-PREFIX/ledgers")," instead of ",(0,t.yg)("inlineCode",{parentName:"p"},"zkServers=localhost:2181/MY-PREFIX"),"."),(0,t.yg)("p",null,"For more information about BookKeeper, refer to the official ",(0,t.yg)("a",{parentName:"p",href:"http://bookkeeper.apache.org"},"BookKeeper docs"),"."),(0,t.yg)("h3",{id:"deploy-bookkeeper"},"Deploy BookKeeper"),(0,t.yg)("p",null,"BookKeeper provides ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-architecture-overview#persistent-storage"},"persistent message storage")," for Pulsar. Each Pulsar broker has its own cluster of bookies. The BookKeeper cluster shares a local ZooKeeper quorum with the Pulsar cluster."),(0,t.yg)("h3",{id:"start-bookies-manually"},"Start bookies manually"),(0,t.yg)("p",null,"You can start a bookie in the foreground or as a background daemon."),(0,t.yg)("p",null,"To start a bookie in the foreground, use the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-cli-tools"},(0,t.yg)("inlineCode",{parentName:"a"},"bookkeeper"))," CLI tool:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"bin/bookkeeper bookie\n")),(0,t.yg)("p",null,"To start a bookie in the background, use the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-cli-tools"},(0,t.yg)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-daemon start bookie\n")),(0,t.yg)("p",null,"You can verify whether the bookie works properly with the ",(0,t.yg)("inlineCode",{parentName:"p"},"bookiesanity")," command for the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-cli-tools"},"BookKeeper shell"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"bin/bookkeeper shell bookiesanity\n")),(0,t.yg)("p",null,"When you use this command, you create a new ledger on the local bookie, write a few entries, read them back and finally delete the ledger."),(0,t.yg)("h3",{id:"decommission-bookies-cleanly"},"Decommission bookies cleanly"),(0,t.yg)("p",null,"Before you decommission a bookie, you need to check your environment and meet the following requirements."),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Ensure the state of your cluster supports decommissioning the target bookie. Check if ",(0,t.yg)("inlineCode",{parentName:"p"},"EnsembleSize >= Write Quorum >= Ack Quorum")," is ",(0,t.yg)("inlineCode",{parentName:"p"},"true")," with one less bookie.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Ensure the target bookie is listed after using the ",(0,t.yg)("inlineCode",{parentName:"p"},"listbookies")," command.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Ensure that no other process is ongoing (upgrade etc)."))),(0,t.yg)("p",null,"And then you can decommission bookies safely. To decommission bookies, complete the following steps."),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Log in to the bookie node, and check if there are under-replicated ledgers. The decommission command force to replicate the underreplicated ledgers.\n",(0,t.yg)("inlineCode",{parentName:"p"},"bin/bookkeeper shell listunderreplicated"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Stop the bookie by killing the bookie process. Make sure that no liveness/readiness probes setup for the bookies to spin them back up if you deploy it in a Kubernetes environment.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Run the decommission command."),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"If you have logged in to the node to be decommissioned, you do not need to provide ",(0,t.yg)("inlineCode",{parentName:"li"},"-bookieid"),"."),(0,t.yg)("li",{parentName:"ul"},"If you are running the decommission command for the target bookie node from another bookie node, you should mention the target bookie ID in the arguments for ",(0,t.yg)("inlineCode",{parentName:"li"},"-bookieid"),(0,t.yg)("inlineCode",{parentName:"li"},"bin/bookkeeper shell decommissionbookie"),"\nor\n",(0,t.yg)("inlineCode",{parentName:"li"},"bin/bookkeeper shell decommissionbookie -bookieid <target bookieid>")))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Validate that no ledgers are on the decommissioned bookie.\n",(0,t.yg)("inlineCode",{parentName:"p"},"bin/bookkeeper shell listledgers -bookieid <target bookieid>")))),(0,t.yg)("p",null,"You can run the following command to check if the bookie you have decommissioned is listed:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"bin/bookkeeper shell listbookies -rw -h\nbin/bookkeeper shell listbookies -ro -h\n")),(0,t.yg)("h2",{id:"bookkeeper-persistence-policies"},"BookKeeper persistence policies"),(0,t.yg)("p",null,"In Pulsar, you can set ",(0,t.yg)("em",{parentName:"p"},"persistence policies")," at the namespace level, which determines how BookKeeper handles persistent storage of messages. Policies determine four things:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Ensemble (E) size, Number of ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.2.x/reference-terminology#bookie"},"bookies")," to use for storing entries in a ledger."),(0,t.yg)("li",{parentName:"ul"},"Write quorum (Q",(0,t.yg)("sub",null,"w"),") size, Replication factor for storing entries (messages) in a ledger."),(0,t.yg)("li",{parentName:"ul"},"Ack quorum (Q",(0,t.yg)("sub",null,"a"),") size, Number of guaranteed copies (acks to wait for before a write is considered completed)."),(0,t.yg)("li",{parentName:"ul"},"The throttling rate for mark-delete operations.")),(0,t.yg)("h3",{id:"set-persistence-policies"},"Set persistence policies"),(0,t.yg)("p",null,"You can set persistence policies for BookKeeper at the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-terminology#namespace"},"namespace")," level."),(0,t.yg)(o.A,{groupId:"policies",defaultValue:"Pulsar-admin",values:[{label:"Pulsar-admin",value:"Pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,t.yg)(i.A,{value:"Pulsar-admin",mdxType:"TabItem"},(0,t.yg)("p",null,"Use the ",(0,t.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/namespaces?id=set-persistence"},(0,t.yg)("inlineCode",{parentName:"a"},"set-persistence"))," subcommand and specify a namespace as well as any policies that you want to apply. The available flags are:"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:"left"},"Flag"),(0,t.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,t.yg)("th",{parentName:"tr",align:"left"},"Default"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:"left"},(0,t.yg)("inlineCode",{parentName:"td"},"-e"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"--bookkeeper-ensemble")),(0,t.yg)("td",{parentName:"tr",align:"left"},"Ensemble (E) size, Number of ",(0,t.yg)("a",{parentName:"td",href:"reference-terminology.md#bookie"},"bookies")," to use for storing entries in a ledger."),(0,t.yg)("td",{parentName:"tr",align:"left"},"0")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:"left"},(0,t.yg)("inlineCode",{parentName:"td"},"-w"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"--bookkeeper-write-quorum")),(0,t.yg)("td",{parentName:"tr",align:"left"},"Write quorum (Q",(0,t.yg)("sub",null,"w"),") size, Replication factor for storing entries (messages) in a ledger."),(0,t.yg)("td",{parentName:"tr",align:"left"},"0")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:"left"},(0,t.yg)("inlineCode",{parentName:"td"},"-a"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"--bookkeeper-ack-quorum")),(0,t.yg)("td",{parentName:"tr",align:"left"},"Ack quorum (Q",(0,t.yg)("sub",null,"a"),") size, Number of guaranteed copies (acks to wait for before a write is considered completed)"),(0,t.yg)("td",{parentName:"tr",align:"left"},"0")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:"left"},(0,t.yg)("inlineCode",{parentName:"td"},"-r"),", ",(0,t.yg)("inlineCode",{parentName:"td"},"--ml-mark-delete-max-rate")),(0,t.yg)("td",{parentName:"tr",align:"left"},"Throttling rate for mark-delete operations (0 means no throttle)"),(0,t.yg)("td",{parentName:"tr",align:"left"},"0")))),(0,t.yg)("p",null,"Please notice that sticky reads enabled by ",(0,t.yg)("inlineCode",{parentName:"p"},"bookkeeperEnableStickyReads=true")," are not used unless ensemble size (E) equals write quorum (Q",(0,t.yg)("sub",null,"w"),") size. Sticky reads improve the efficiency of the Bookkeeper read ahead cache when all reads for a single ledger are sent to a single bookie."),(0,t.yg)("p",null,"Some rules for choosing the values:"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:"left"},"Rule"),(0,t.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:"left"},"E >= Q",(0,t.yg)("sub",null,"w")," >= Q",(0,t.yg)("sub",null,"a")),(0,t.yg)("td",{parentName:"tr",align:"left"},"Ensemble size must be larger or equal than write quorum size, write quorum size must be larger or equal than ack quorum size.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:"left"},"Max bookie failures = Q",(0,t.yg)("sub",null,"a"),"-1,"),(0,t.yg)("td",{parentName:"tr",align:"left"},"This rule must be fulfilled if data durability is desired in case of bookie failures. To safely tolerate at least one bookie failure at a time in the ensemble, Q",(0,t.yg)("sub",null,"a")," must be set to a value at least 2.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:"left"},"E == Q",(0,t.yg)("sub",null,"w")),(0,t.yg)("td",{parentName:"tr",align:"left"},"Sticky reads enabled by ",(0,t.yg)("inlineCode",{parentName:"td"},"bookkeeperEnableStickyReads=true")," aren't used unless ensemble size (E) equals write quorum (Q",(0,t.yg)("sub",null,"w"),") size.")))),(0,t.yg)("p",null,"The following is an example:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces set-persistence my-tenant/my-ns \\\n--bookkeeper-ensemble 3 \\\n--bookkeeper-write-quorum 3 \\\n--bookkeeper-ack-quorum 3\n")),(0,t.yg)("p",null,"Short example:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces set-persistence my-tenant/my-ns -e 3 -w 3 -a 3\n"))),(0,t.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.2.1&apiversion=v2#operation/setPersistence"},"POST /admin/v2/namespaces/:tenant/:namespace/persistence/setPersistence"))),(0,t.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"// The following must be true: bkEnsemble >= bkWriteQuorum >= bkAckQuorum\n// Please notice that sticky reads cannot be used unless bkEnsemble == bkWriteQuorum.\nint bkEnsemble = 3;\nint bkWriteQuorum = 3;\nint bkAckQuorum = 3;\ndouble markDeleteRate = 0.7;\nPersistencePolicies policies =\n  new PersistencePolicies(bkEnsemble, bkWriteQuorum, bkAckQuorum, markDeleteRate);\nadmin.namespaces().setPersistence(namespace, policies);\n")))),(0,t.yg)("h3",{id:"list-persistence-policies"},"List persistence policies"),(0,t.yg)("p",null,"You can see which persistence policy currently applies to a namespace."),(0,t.yg)(o.A,{groupId:"policies",defaultValue:"Pulsar-admin",values:[{label:"Pulsar-admin",value:"Pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,t.yg)(i.A,{value:"Pulsar-admin",mdxType:"TabItem"},(0,t.yg)("p",null,"Use the ",(0,t.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/namespaces?id=get-persistence"},(0,t.yg)("inlineCode",{parentName:"a"},"get-persistence"))," subcommand and specify the namespace."),(0,t.yg)("p",null,"The following is an example:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'pulsar-admin namespaces get-persistence my-tenant/my-ns\n{\n  "bookkeeperEnsemble": 1,\n  "bookkeeperWriteQuorum": 1,\n  "bookkeeperAckQuorum", 1,\n  "managedLedgerMaxMarkDeleteRate": 0\n}\n'))),(0,t.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.2.1&apiversion=v2#operation/getPersistence"},"GET /admin/v2/namespaces/:tenant/:namespace/persistence/getPersistence"))),(0,t.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"PersistencePolicies policies = admin.namespaces().getPersistence(namespace);\n")))))}g.isMDXComponent=!0},42702:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/pulsar-system-architecture-6890df6b0c59a065a56492659ba87933.png"},92680:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/zookeeper-batching-de05ac49b05431155d275bd026b18c0a.png"}}]);