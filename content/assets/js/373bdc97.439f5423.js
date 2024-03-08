"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[53297],{15680:(e,o,a)=>{a.d(o,{xA:()=>p,yg:()=>d});var n=a(96540);function i(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function t(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){i(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function l(e,o){if(null==e)return{};var a,n,i=function(e,o){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||(i[a]=e[a]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var o=n.useContext(s),a=o;return e&&(a="function"==typeof e?e(o):t(t({},o),e)),a},p=function(e){var o=c(e.components);return n.createElement(s.Provider,{value:o},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},g=n.forwardRef((function(e,o){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=i,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||r;return a?n.createElement(d,t(t({ref:o},p),{},{components:a})):n.createElement(d,t({ref:o},p))}));function d(e,o){var a=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var r=a.length,t=new Array(r);t[0]=g;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[u]="string"==typeof e?e:i,t[1]=l;for(var c=2;c<r;c++)t[c]=a[c];return n.createElement.apply(null,t)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19365:(e,o,a)=>{a.d(o,{A:()=>t});var n=a(96540),i=a(20053);const r={tabItem:"tabItem_Ymn6"};function t(e){let{children:o,hidden:a,className:t}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,t),hidden:a},o)}},11470:(e,o,a)=>{a.d(o,{A:()=>v});var n=a(58168),i=a(96540),r=a(20053),t=a(23104),l=a(56347),s=a(57485),c=a(31682),p=a(89466);function u(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:o,label:a,attributes:n,default:i}}=e;return{value:o,label:a,attributes:n,default:i}}))}function m(e){const{values:o,children:a}=e;return(0,i.useMemo)((()=>{const e=o??u(a);return function(e){const o=(0,c.X)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,a])}function g(e){let{value:o,tabValues:a}=e;return a.some((e=>e.value===o))}function d(e){let{queryString:o=!1,groupId:a}=e;const n=(0,l.W6)(),r=function(e){let{queryString:o=!1,groupId:a}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:o,groupId:a});return[(0,s.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const o=new URLSearchParams(n.location.search);o.set(r,e),n.replace({...n.location,search:o.toString()})}),[r,n])]}function k(e){const{defaultValue:o,queryString:a=!1,groupId:n}=e,r=m(e),[t,l]=(0,i.useState)((()=>function(e){let{defaultValue:o,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!g({value:o,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:r}))),[s,c]=d({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:o}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(o),[n,r]=(0,p.Dv)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=s??u;return g({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:t,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),k(e)}),[c,k,r]),tabValues:r}}var b=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:o,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,t.a_)(),m=e=>{const o=e.currentTarget,a=p.indexOf(o),n=c[a].value;n!==l&&(u(o),s(n))},g=e=>{let o=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;o=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;o=p[a]??p[p.length-1];break}}o?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},o)},c.map((e=>{let{value:o,label:a,attributes:t}=e;return i.createElement("li",(0,n.A)({role:"tab",tabIndex:l===o?0:-1,"aria-selected":l===o,key:o,ref:e=>p.push(e),onKeyDown:g,onClick:m},t,{className:(0,r.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":l===o})}),a??o)})))}function h(e){let{lazy:o,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(o){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,o)=>(0,i.cloneElement)(e,{key:o,hidden:e.props.value!==n}))))}function w(e){const o=k(e);return i.createElement("div",{className:(0,r.A)("tabs-container",f.tabList)},i.createElement(y,(0,n.A)({},e,o)),i.createElement(h,(0,n.A)({},e,o)))}function v(e){const o=(0,b.A)();return i.createElement(w,(0,n.A)({key:String(o)},e))}},50104:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(58168),i=(a(96540),a(15680)),r=a(11470),t=a(19365);const l={id:"administration-isolation-bookie",title:"Isolate bookies",sidebar_label:"Isolate bookies",description:"Get a comprehensive understanding of bookie data isolation policy in Pulsar."},s=void 0,c={unversionedId:"administration-isolation-bookie",id:"version-3.2.x/administration-isolation-bookie",title:"Isolate bookies",description:"Get a comprehensive understanding of bookie data isolation policy in Pulsar.",source:"@site/versioned_docs/version-3.2.x/administration-isolation-bookie.md",sourceDirName:".",slug:"/administration-isolation-bookie",permalink:"/docs/3.2.x/administration-isolation-bookie",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/administration-isolation-bookie.md",tags:[],version:"3.2.x",frontMatter:{id:"administration-isolation-bookie",title:"Isolate bookies",sidebar_label:"Isolate bookies",description:"Get a comprehensive understanding of bookie data isolation policy in Pulsar."},sidebar:"docsSidebar",previous:{title:"Isolate brokers",permalink:"/docs/3.2.x/administration-isolation-broker"},next:{title:"Statistics",permalink:"/docs/3.2.x/administration-stats"}},p={},u=[{value:"Understand bookie data isolation policy",id:"understand-bookie-data-isolation-policy",level:2},{value:"Rack-aware placement policy",id:"rack-aware-placement-policy",level:3},{value:"Qualified rack size of bookies",id:"qualified-rack-size-of-bookies",level:4},{value:"Enforced minimum rack size of bookies",id:"enforced-minimum-rack-size-of-bookies",level:4},{value:"Region-aware placement policy",id:"region-aware-placement-policy",level:3},{value:"Enable bookie data placement policy",id:"enable-bookie-data-placement-policy",level:2},{value:"Enable region-aware placement policy on broker",id:"enable-region-aware-placement-policy-on-broker",level:3},{value:"Enable region-aware placement policy on the auto-recovery instances (pods)",id:"enable-region-aware-placement-policy-on-the-auto-recovery-instances-pods",level:3},{value:"Configure data placement policy on bookie instances",id:"configure-data-placement-policy-on-bookie-instances",level:2},{value:"Example of configuring rack-aware placement policy",id:"example-of-configuring-rack-aware-placement-policy",level:4},{value:"Example of configuring region-aware placement policy",id:"example-of-configuring-region-aware-placement-policy",level:4},{value:"Configure bookie affinity groups",id:"configure-bookie-affinity-groups",level:2}],m={toc:u},g="wrapper";function d(e){let{components:o,...l}=e;return(0,i.yg)(g,(0,n.A)({},m,l,{components:o,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Isolating bookies equals isolating message storage, which is a data storage mechanism that provides isolation and safety for specific topics."),(0,i.yg)("p",null,"Bookie isolation is controlled by BookKeeper clients. For Pulsar, there are two kinds of BookKeeper clients to read and write data."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"BookKeeper clients on the broker side: Pulsar brokers use these BookKeeper clients to read and write topic messages."),(0,i.yg)("li",{parentName:"ul"},"BookKeeper clients on the bookie auto-recovery side:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The bookie auditor checks whether ledger replicas fulfill the configured isolation policy;"),(0,i.yg)("li",{parentName:"ul"},"The bookie replication worker writes ledger replicas to target bookies according to the configured isolation policy.")))),(0,i.yg)("p",null,"To isolate bookies, you need to complete the following tasks."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Select a ",(0,i.yg)("a",{parentName:"li",href:"#understand-bookie-data-isolation-policy"},"data isolation policy")," based on your requirements."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"#enable-bookie-data-placement-policy"},"Enable the policy on BookKeeper clients"),"."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"#configure-data-placement-policy-on-bookie-instances"},"Configure the policy on bookie instances"),".")),(0,i.yg)("h2",{id:"understand-bookie-data-isolation-policy"},"Understand bookie data isolation policy"),(0,i.yg)("p",null,'Bookie data isolation policy is built on top of the existing BookKeeper rack-aware placement policy. The "rack" concept can be anything, for example, racks, regions, availability zones. It writes the configured isolation policy into the metadata store. Both BookKeeper clients on the broker and bookie auto-recovery side read the configured isolation policy from the metadata store and apply it when choosing bookies to store messages.'),(0,i.yg)("p",null,"BookKeeper provides three kinds of data isolation policies for disaster tolerance."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Rack-aware placement policy (default)"),(0,i.yg)("li",{parentName:"ul"},"Region-aware placement policy"),(0,i.yg)("li",{parentName:"ul"},"Zone-aware placement policy")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Both ",(0,i.yg)("a",{parentName:"p",href:"#rack-aware-placement-policy"},"rack-aware placement policy")," and ",(0,i.yg)("a",{parentName:"p",href:"#region-aware-placement-policy"},"region-aware placement policy")," can be used in all kinds of deployments where racks are a subset of a region. The major difference between the two policies is:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"With ",(0,i.yg)("inlineCode",{parentName:"li"},"RackawareEnsemblePlacementPolicy")," configured, the BookKeeper client chooses bookies from different ",(0,i.yg)("strong",{parentName:"li"},"racks")," to reduce the single point of failure. If there is only one rack available, the policy falls back on choosing a random bookie across available ones."),(0,i.yg)("li",{parentName:"ul"},"With ",(0,i.yg)("inlineCode",{parentName:"li"},"RegionAwareEnsemblePlacementPolicy")," configured, the BookKeeper client chooses bookies from different ",(0,i.yg)("strong",{parentName:"li"},"regions"),"; for the selected region, it chooses bookies from different racks if more than one ensemble falls into the same region."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Zone-aware placement policy (",(0,i.yg)("inlineCode",{parentName:"p"},"ZoneAwareEnsemblePlacementPolicy"),") can be used in a public cloud infrastructure where Availability Zones (AZs) are isolated locations within the data center regions that public cloud services originate from and operate in.")))),(0,i.yg)("h3",{id:"rack-aware-placement-policy"},"Rack-aware placement policy"),(0,i.yg)("p",null,"Rack-aware placement policy enforces different data replicas to be placed in different racks to guarantee the rack-level disaster tolerance for your production environment. A data center usually has a lot of racks, and each rack has many storage nodes. You can use ",(0,i.yg)("inlineCode",{parentName:"p"},"RackAwareEnsemblePlacementPolicy")," to configure the rack information for each bookie."),(0,i.yg)("h4",{id:"qualified-rack-size-of-bookies"},"Qualified rack size of bookies"),(0,i.yg)("p",null,"When the available rack size of bookies can meet the requirements configured on a topic, the rack-aware placement policy can work well and you don't need any extra configurations."),(0,i.yg)("p",null,"For example, the BookKeeper cluster has 4 racks and 13 bookie instances as shown in the following diagram. When a topic is configured with ",(0,i.yg)("inlineCode",{parentName:"p"},"EnsembleSize=3, WriteQuorum=3, AckQuorum=2"),", the BookKeeper client chooses one bookie instance from three different racks to write data to, such as Bookie2, Bookie8, and Bookie12."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Rack-aware placement policy in Pulsar",src:a(77171).A,width:"1578",height:"278"})),(0,i.yg)("h4",{id:"enforced-minimum-rack-size-of-bookies"},"Enforced minimum rack size of bookies"),(0,i.yg)("p",null,"When the available rack size of bookies cannot meet the requirements configured on a topic, the strategy that the BookKeeper client chooses bookies to recover old ledgers and create new ledgers depends on whether the enforced minimum rack size of bookies is configured."),(0,i.yg)("p",null,"In this case, if you want to make the rack-aware placement policy work as usual, you need to configure an enforced minimum rack size of bookies (",(0,i.yg)("inlineCode",{parentName:"p"},"MinNumRacksPerWriteQuorum"),")."),(0,i.yg)("p",null,"For example, you have the same BookKeeper cluster with the same topic requirements ",(0,i.yg)("inlineCode",{parentName:"p"},"EnsembleSize=3, WriteQuorum=3, AckQuorum=2")," as shown in the above diagram. When all the bookie instances in Rack3 and Rack4 fail, you only have 2 available racks and there are the following three possibilities."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If you have configured ",(0,i.yg)("inlineCode",{parentName:"p"},"EnforceMinNumRacksPerWriteQuorum=true")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"MinNumRacksPerWriteQuorum=3"),", the BookKeeper client fails to choose bookies, which means new ledgers cannot be created and old ledgers cannot be recovered. Because the requirement of ",(0,i.yg)("inlineCode",{parentName:"p"},"MinNumRacksPerWriteQuorum=3")," cannot be fulfilled.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If you have configured ",(0,i.yg)("inlineCode",{parentName:"p"},"EnforceMinNumRacksPerWriteQuorum=true")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"MinNumRacksPerWriteQuorum=2"),", the BookKeeper client chooses one bookie from Rack1 and Rack2 to recover old ledgers, such as bookie1 and bookie5, to place 2 replicas for Bookie8 and Bookie12. For new ledger creation, it chooses one bookie from Rack1 and Rack2, such as Bookie4 and Bookie7, and a random bookie from either Rack1 or Rack2 to place the last replica."))),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Rack-aware placement policy with an enforced minimum rack size of bookies",src:a(72768).A,width:"1578",height:"461"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If you have configured ",(0,i.yg)("inlineCode",{parentName:"li"},"EnforceMinNumRacksPerWriteQuorum=false"),", the BookKeeper client tries its best effort to apply the placement policy depending on the available number of racks and bookies. It may still work as the above diagram or the following diagram.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Rack-aware placement policy without an enforced minimum rack size of bookies",src:a(92369).A,width:"1578",height:"525"})),(0,i.yg)("h3",{id:"region-aware-placement-policy"},"Region-aware placement policy"),(0,i.yg)("p",null,"Region-aware placement policy enforces different data replicas to be placed in different regions and racks to guarantee region-level disaster tolerance. To achieve datacenter level disaster tolerance, you need to write data replicas into different data centers. You can use ",(0,i.yg)("inlineCode",{parentName:"p"},"RegionAwareEnsemblePlacementPolicy")," to configure region and rack information for each bookie node to ensure region-level disaster tolerance."),(0,i.yg)("p",null,"For example, the BookKeeper cluster has 4 regions, and each region has several racks with their bookie instances, as shown in the following diagram. If a topic is configured with ",(0,i.yg)("inlineCode",{parentName:"p"},"EnsembleSize=3, WriteQuorum=3, and AckQuorum=2"),", the BookKeeper client chooses three different regions, such as Region A, Region C and Region D. For each region, it chooses one bookie on a single rack, such as Bookie5 on Rack2, Bookie17 on Rack6, and Bookie21 on Rack8."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Region-aware placement policy in Pulsar",src:a(8072).A,width:"1656",height:"809"})),(0,i.yg)("p",null,"When two regions fail, such as Region B and Region C, as shown in the following diagram, the BookKeeper client chooses one bookie from Region A or Region D to replace the failed Bookie17 for recovering old ledgers. And it also chooses Region A and Region D to write replicas for creating new ledgers. In Region A, it falls back to rack-aware placement policy and chooses one bookie from Rack1 and Rack2, such as Bookie4 and Bookie7. For Region D, it has to choose one bookie from Rack8, such as Bookie22."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Region-aware placement policy for disaster tolerance",src:a(23611).A,width:"1734",height:"928"})),(0,i.yg)("h2",{id:"enable-bookie-data-placement-policy"},"Enable bookie data placement policy"),(0,i.yg)("p",null,"By default, the rack-aware placement policy is enabled on both broker and bookie sides. If you want to switch to the region-aware placement policy, you need to enable the region-aware placement policy on both broker and bookie sides."),(0,i.yg)("h3",{id:"enable-region-aware-placement-policy-on-broker"},"Enable region-aware placement policy on broker"),(0,i.yg)("p",null,"To enable region-aware placement policy on broker, configure the following field in the ",(0,i.yg)("inlineCode",{parentName:"p"},"conf/broker.conf")," file."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"bookkeeperClientRegionawarePolicyEnabled=true\n")),(0,i.yg)("p",null,"To enforce the minimum rack size of bookies, configure the following fields:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"bookkeeperClientEnforceMinNumRacksPerWriteQuorum=true\nbookkeeperClientMinNumRacksPerWriteQuorum=2\n")),(0,i.yg)("p",null,"To balance the ledger disk usage of different bookies, you can enable the disk weight placement by configuring the following field:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"bookkeeperDiskWeightBasedPlacementEnabled=true\n")),(0,i.yg)("h3",{id:"enable-region-aware-placement-policy-on-the-auto-recovery-instances-pods"},"Enable region-aware placement policy on the auto-recovery instances (pods)"),(0,i.yg)("p",null,"To enable region-aware placement policy on the auto-recovery instances, configure the following fields in the ",(0,i.yg)("inlineCode",{parentName:"p"},"conf/bookkeeper.conf")," file."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"ensemblePlacementPolicy=org.apache.bookkeeper.client.RegionAwareEnsemblePlacementPolicy\nreppDnsResolverClass=org.apache.pulsar.zookeeper.ZkBookieRackAffinityMapping\n")),(0,i.yg)("p",null,"To enforce the minimum rack size of bookies, configure the following fields:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"enforceMinNumRacksPerWriteQuorum=true\nminNumRacksPerWriteQuorum=2\n")),(0,i.yg)("p",null,"To balance the ledger disk usage of different bookies, you can enable the disk weight placement by configuring the following field:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"diskWeightBasedPlacementEnabled=true\n")),(0,i.yg)("h2",{id:"configure-data-placement-policy-on-bookie-instances"},"Configure data placement policy on bookie instances"),(0,i.yg)("p",null,"To configure a data placement policy on bookie instances, you can use one of the following methods."),(0,i.yg)(r.A,{defaultValue:"Pulsar-admin CLI",values:[{label:"Pulsar-admin CLI",value:"Pulsar-admin CLI"},{label:"REST API",value:"REST API"}],mdxType:"Tabs"},(0,i.yg)(t.A,{value:"Pulsar-admin CLI",mdxType:"TabItem"},(0,i.yg)("p",null,"Specify the rack name to represent which region or rack this bookie belongs to."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin bookies set-bookie-rack\nThe following options are required: [-b | --bookie], [-r | --rack]\n\nThen we need to update the rack placement information for a specific bookie in the cluster. Note that the bookie address format is `address:port`.\nUsage: set-bookie-rack [options]\n  Options:\n  * -b, --bookie\n      Bookie address (format: `address:port`)\n    -g, --group\n      Bookie group name\n      Default: default\n    --hostname\n      Bookie host name\n  * -r, --rack\n      Bookie rack name\n")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"In addition, you can also group bookies across racks or regions to serve broker-level isolation by specifying a group name for each bookie and assigning the group name to a specific namespace. See ",(0,i.yg)("a",{parentName:"p",href:"#configure-bookie-affinity-groups"},"configure bookie affinity groups")," for more details."))),(0,i.yg)(t.A,{value:"REST API",mdxType:"TabItem"},(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.2.1&apiversion=v2#operation/updateBookieRackInfo"},"POST /admin/v2/bookies/racks-info/:bookie/updateBookieRackInfo")))),(0,i.yg)("h4",{id:"example-of-configuring-rack-aware-placement-policy"},"Example of configuring rack-aware placement policy"),(0,i.yg)("p",null,"The following is an example of how to configure bookie instances with their rack properties."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin bookies set-bookie-rack --bookie bookie1:3181 --hostname bookie1.pulsar.com:3181 --group group1 --rack rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie2:3181 --hostname bookie2.pulsar.com:3181 --group group1 --rack rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie3:3181 --hostname bookie3.pulsar.com:3181 --group group1 --rack rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie4:3181 --hostname bookie4.pulsar.com:3181 --group group1 --rack rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie5:3181 --hostname bookie5.pulsar.com:3181 --group group1 --rack rack2\n...\n")),(0,i.yg)("h4",{id:"example-of-configuring-region-aware-placement-policy"},"Example of configuring region-aware placement policy"),(0,i.yg)("p",null,"The following is an example of how to configure bookie instances with their region/rack properties."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin bookies set-bookie-rack --bookie bookie1:3181 --hostname bookie1.pulsar.com:3181 --group group1 --rack RegionA/rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie2:3181 --hostname bookie2.pulsar.com:3181 --group group1 --rack RegionA/rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie3:3181 --hostname bookie3.pulsar.com:3181 --group group1 --rack RegionA/rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie4:3181 --hostname bookie4.pulsar.com:3181 --group group1 --rack RegionA/rack1\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie5:3181 --hostname bookie5.pulsar.com:3181 --group group1 --rack RegionA/rack2\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie6:3181 --hostname bookie6.pulsar.com:3181 --group group1 --rack RegionA/rack2\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie7:3181 --hostname bookie7.pulsar.com:3181 --group group1 --rack RegionA/rack2\nbin/pulsar-admin bookies set-bookie-rack --bookie bookie8:3181 --hostname bookie8.pulsar.com:3181 --group group1 --rack RegionB/rack3\n...\n")),(0,i.yg)("h2",{id:"configure-bookie-affinity-groups"},"Configure bookie affinity groups"),(0,i.yg)("p",null,"The data of a namespace can be isolated into user-defined groups of bookies, as known as bookie affinity groups, which guarantee all the data that belongs to the namespace is stored in desired bookies."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Prerequisites:")," Before configuring bookie affinity groups, you need to group bookies first. See ",(0,i.yg)("a",{parentName:"p",href:"#configure-data-placement-policy-on-bookie-instances"},"configure data placement policy on bookie instances")," for more details."),(0,i.yg)("p",null,"To configure bookie affinity groups, you can use one of the following methods."),(0,i.yg)(r.A,{defaultValue:"Pulsar-admin CLI",values:[{label:"Pulsar-admin CLI",value:"Pulsar-admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,i.yg)(t.A,{value:"Pulsar-admin CLI",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces set-bookie-affinity-group options\n")),(0,i.yg)("p",null,"For more information about the command ",(0,i.yg)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-bookie-affinity-group options"),", see ",(0,i.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},"Pulsar admin docs"),"."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Example")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin bookies set-bookie-rack \\\n--bookie 127.0.0.1:3181 \\\n--hostname 127.0.0.1:3181 \\\n--group group-bookie1 \\\n--rack rack1\n\nbin/pulsar-admin namespaces set-bookie-affinity-group public/default \\\n--primary-group group-bookie1\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"Do not set a bookie rack name to slash (",(0,i.yg)("inlineCode",{parentName:"li"},"/"),") or an empty string (",(0,i.yg)("inlineCode",{parentName:"li"},'""'),") if you use Pulsar earlier than 2.7.5, 2.8.3, and 2.9.2. If you use Pulsar 2.7.5, 2.8.3, 2.9.2 or later versions, it falls back to ",(0,i.yg)("inlineCode",{parentName:"li"},"/default-rack")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"/default-region/default-rack"),"."),(0,i.yg)("li",{parentName:"ul"},"When ",(0,i.yg)("inlineCode",{parentName:"li"},"RackawareEnsemblePlacementPolicy")," is enabled, the rack name is not allowed to contain one slash (",(0,i.yg)("inlineCode",{parentName:"li"},"/"),") except for the beginning and end of the rack name string. For example, a rack name like ",(0,i.yg)("inlineCode",{parentName:"li"},"/rack0")," is allowed, but ",(0,i.yg)("inlineCode",{parentName:"li"},"/rack/0")," is invalid."),(0,i.yg)("li",{parentName:"ul"},"When ",(0,i.yg)("inlineCode",{parentName:"li"},"RegionAwareEnsemblePlacementPolicy")," is enabled, the rack name can only contain one slash (",(0,i.yg)("inlineCode",{parentName:"li"},"/"),") except for the beginning and end of the rack name string. For example, rack name like ",(0,i.yg)("inlineCode",{parentName:"li"},"/region0/rack0")," is allowed, but ",(0,i.yg)("inlineCode",{parentName:"li"},"/region0rack0")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"/region0/rack/0")," are invalid.\nFor the bookie rack name restrictions, see ",(0,i.yg)("a",{parentName:"li",href:"pathname:///reference/#/3.2.x/pulsar-admin/bookies?id=set-bookie-rack"},"pulsar-admin bookies set-bookie-rack"),".")))),(0,i.yg)(t.A,{value:"REST API",mdxType:"TabItem"},(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.2.1&apiversion=v2#operation/setBookieAffinityGroup"},"POST /admin/v2/namespaces/:tenant/:namespace/persistence/bookieAffinity/setBookieAffinityGroup"))),(0,i.yg)(t.A,{value:"Java admin API",mdxType:"TabItem"},(0,i.yg)("p",null,"For how to set bookie affinity group for a namespace using Java admin API, see ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L1164"},"code"),"."))))}d.isMDXComponent=!0},77171:(e,o,a)=>{a.d(o,{A:()=>n});const n=a.p+"assets/images/rack-aware-placement-policy-1-4f24b2896f0259416ecaac0abf7421cb.svg"},72768:(e,o,a)=>{a.d(o,{A:()=>n});const n=a.p+"assets/images/rack-aware-placement-policy-2-3864fb206aa793fa87a6556b71642968.svg"},92369:(e,o,a)=>{a.d(o,{A:()=>n});const n=a.p+"assets/images/rack-aware-placement-policy-3-d9ba58be554e438afc505386acf1d94b.svg"},8072:(e,o,a)=>{a.d(o,{A:()=>n});const n=a.p+"assets/images/region-aware-placement-policy-1-e507d707cb5e369fa91616c45db6421b.svg"},23611:(e,o,a)=>{a.d(o,{A:()=>n});const n=a.p+"assets/images/region-aware-placement-policy-2-d85209e840449079d2a46f7ad82df678.svg"}}]);