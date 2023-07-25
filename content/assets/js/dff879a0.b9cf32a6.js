"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[57104],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),b=n,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||o;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},66255:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={id:"concepts-broker-load-balancing-overview",title:"Overview",sidebar_label:"Overview"},s=void 0,i={unversionedId:"concepts-broker-load-balancing-overview",id:"concepts-broker-load-balancing-overview",title:"Overview",description:"Challenges of load balancing in distributed streaming systems",source:"@site/docs/concepts-broker-load-balancing-overview.md",sourceDirName:".",slug:"/concepts-broker-load-balancing-overview",permalink:"/docs/next/concepts-broker-load-balancing-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/concepts-broker-load-balancing-overview.md",tags:[],version:"current",frontMatter:{id:"concepts-broker-load-balancing-overview",title:"Overview",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"Clients",permalink:"/docs/next/concepts-clients"},next:{title:"Use cases",permalink:"/docs/next/concepts-broker-load-balancing-use-cases"}},l={},c=[{value:"Challenges of load balancing in distributed streaming systems",id:"challenges-of-load-balancing-in-distributed-streaming-systems",level:2},{value:"Broker load balancing in Pulsar",id:"broker-load-balancing-in-pulsar",level:2},{value:"Related topics",id:"related-topics",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"challenges-of-load-balancing-in-distributed-streaming-systems"},"Challenges of load balancing in distributed streaming systems"),(0,n.kt)("p",null,"Like other distributed systems, load balancing is important in messaging and streaming systems. Without it, load imbalance can cause hot-spot brokers, resulting in performance degradation, cluster unavailability, and wasted broker resources."),(0,n.kt)("p",null,"Due to the unpredictable topic volume and physical distance among distributed brokers, it is not easy to dynamically distribute message loads among brokers. It requires the system to continuously monitor and route message loads based on changing conditions without compromising system performance. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When topics receive high traffic, exhausting CPU or memory resources on particular brokers, the cluster offloads the overloaded brokers and redistributes the load to other brokers.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When brokers experience low traffic, become idle, or are added or removed, the cluster rebalances the load to avoid wasting resources.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When topics are redistributed to other brokers, the cluster ensures the topics are instantaneously available to clients. The topics continue to guarantee the system performance, such as persistence, ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-messaging#ordering-guarantee"},"ordering"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-messaging#message-deduplication"},"deduplication"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-messaging#subscription-types"},"subscription type"),", etc."))),(0,n.kt)("h2",{id:"broker-load-balancing-in-pulsar"},"Broker load balancing in Pulsar"),(0,n.kt)("p",null,"Because Pulsar uses a ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-architecture-overview"},"segment-centric architecture")," and separates the message serving and storage layer, it is designed to benefit load balancing. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"At the persistence layer (",(0,n.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/"},"BookKeeper"),"), message segments in topics are balanced across all the bookies in the cluster. When an individual bookie runs out of storage capacity, the rest segments are loaded into the available bookies. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"At the serving layer (",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-architecture-overview#brokers"},"broker"),"), topic rearrangement (balance) is seamless. Brokers do not need to copy messages from one broker to another when rebalancing topics among brokers. Instead, the current owner broker temporarily closes the topic and client sessions and transfers the ownership to the selected broker. Then, the selected broker takes ownership of the topic and opens the topic sessions to the clients."))),(0,n.kt)("p",null,"Pulsar uses automatic broker load balancing to monitor the brokers' load internally and then dynamically balances topic sessions according to the load across all available brokers as evenly, dynamically, and flexibly as possible. Consequently, it improves performance, availability, and usage of resources."),(0,n.kt)("h2",{id:"related-topics"},"Related topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To discover different usage scenarios, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-use-cases"},"Broker load balancing | Use cases"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To explore functionalities, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-features"},"Broker load balancing | Features"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To understand advantages, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-benefits"},"Broker load balancing | Benefits"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To learn essential fundamentals, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-concepts"},"Broker load balancing | Concepts"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To review various versions of broker load balancers, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-broker-load-balancing-types"},"Broker load balancing | Types"),"."))))}u.isMDXComponent=!0}}]);