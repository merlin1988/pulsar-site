"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[10458],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||n;return r?i.createElement(k,l(l({ref:t},c),{},{components:r})):i.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<n;u++)l[u]=r[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var i=r(87462),a=(r(67294),r(3905));const n={id:"pulsar-2.10.5",title:"Apache Pulsar 2.10.5",sidebar_label:"Apache Pulsar 2.10.5"},l=void 0,o={unversionedId:"versioned/pulsar-2.10.5",id:"versioned/pulsar-2.10.5",title:"Apache Pulsar 2.10.5",description:"2023-7-30",source:"@site/release-notes/versioned/pulsar-2.10.5.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.10.5",permalink:"/release-notes/versioned/pulsar-2.10.5",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.10.5.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.10.5",title:"Apache Pulsar 2.10.5",sidebar_label:"Apache Pulsar 2.10.5"}},s={},u=[{value:"2023-7-30",id:"2023-7-30",level:4},{value:"Broker",id:"broker",level:3},{value:"Transaction",id:"transaction",level:3},{value:"Pulsar IO and Pulsar Functions",id:"pulsar-io-and-pulsar-functions",level:3},{value:"CLI",id:"cli",level:3},{value:"Admin",id:"admin",level:3},{value:"Security",id:"security",level:3},{value:"CI &amp; Test",id:"ci--test",level:3},{value:"Others",id:"others",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"2023-7-30"},"2023-7-30"),(0,a.kt)("h3",{id:"broker"},"Broker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," In replication scenario, remote consumer could not be registered if there has no message was sent (#20888)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Print warn log if compaction failure (#19405)"),(0,a.kt)("li",{parentName:"ul"},"[branch-2.10][fix]","[broker]"," Fix inconsensus namespace policies by getPoliciesIfCached (#20873)"),(0,a.kt)("li",{parentName:"ul"},"[branch-2.10][fix]","[broker]"," Inconsistent behaviour for topic auto_creation (#20872)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Can not receive any messages after switching to standby cluster (#20767)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Add consumer-id into the log when doing subscribe. (#20568)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","[branch-2.10]"," Fix NPE when resetting Replicator's cursor by position. (#20597) (#20781)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix namespace deletion if __change_events topic has not been created yet (#18804)"),(0,a.kt)("li",{parentName:"ul"},"[fix][schema]"," Only handle exception when there has (#20730)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Topic policy can not work well if replay policy message has any exception. (#20613)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix return the earliest position when query position by timestamp. (#20457)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Return if AbstractDispatcherSingleActiveConsumer closed (#19934)"),(0,a.kt)("li",{parentName:"ul"},"[broker]"," clean inactive bundle from bundleData in loadData and bundlesCache (#13974)"),(0,a.kt)("li",{parentName:"ul"},"[fix][branch-2.10]"," Fix compilation issue introduced by fixing Repeated messages of shared dispatcher (#16812)"),(0,a.kt)("li",{parentName:"ul"},"Issue 16802: fix Repeated messages of shared dispatcher (#16812)"),(0,a.kt)("li",{parentName:"ul"},"[fix][branch-2.10]","Fix compilation issue introduced by Save createIfMissing in TopicLoadingContext (#19993)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Save createIfMissing in TopicLoadingContext (#19993)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Invalidate metadata children cache after key deleted (#20363)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Avoid PersistentSubscription.expireMessages logic check backlog twice. (#20416)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","fix the publish latency spike issue with large number of producers (#20607)"),(0,a.kt)("li",{parentName:"ul"},"[fix][branch-2.10]"," Fix duplicated deleting topics (#20685)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]","[branch-2.10]"," Backport Linux metrics changes from master branch (#20659)"),(0,a.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Validate authz earlier in delete subscription logic (#20549)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," release orphan replicator after topic closed (#20567)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," REST Client Producer fails with TLS only (#20535)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Restore solution for certain topic unloading race conditions (#20527)"),(0,a.kt)("li",{parentName:"ul"},"[fix][ml]"," There are two same-named managed ledgers in the one broker (#18688)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix skip message API when hole messages exists (#20326)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," If ledger lost, cursor mark delete position can not forward (#18620)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," partitioned __change_events topic is policy topic (#20392)"),(0,a.kt)("li",{parentName:"ul"},"[fix][ml]"," Fix ledger left in OPEN state when enabling ",(0,a.kt)("inlineCode",{parentName:"li"},"inactiveLedgerRollOverTimeMs")," (#20276)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix default bundle size used while setting bookie affinity (#20250)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix the behavior of delayed message in Key_Shared mode (#20233)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Get lowest PositionImpl from NavigableSet (#18278)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," error TimeUnit to record publish latency (#20074)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," In Key_Shared mode: remove unnecessary mechanisms of message skip to avoid unnecessary consumption stuck (#20335)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","Fix deadlock of metadata store (#20189)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," ","[branch-2.10]"," Upgrade rocksDB version to 6.16.4 to keep sync with BookKeeper 4.14.7 (#20312)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Skip split bundle if only one broker (#20190)"),(0,a.kt)("li",{parentName:"ul"},"[fix][monitor]"," topic with double quote breaks the prometheus format (#20230)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix RoaringBitmap.contains can't check value 65535 (#20176)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix the reason label of authentication metrics (#20030)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix infinite ack of Replicator after topic is closed (#20232)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Producer created by replicator is not displayed in topic stats (#20229)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," delete topic failed if disabled system topic (#19735)"),(0,a.kt)("li",{parentName:"ul"},"[fix][ml]"," make the result of delete cursor is success if cursor is deleted (#19825)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fast fix infinite HTTP call getSubscriptions caused by wrong topicName (#20131)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix issue where msgRateExpired may not refresh forever (#19759)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix can't send ErrorCommand when message is null value (#19899)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix Return value of getPartitionedStats doesn't contain subscription type (#20210)"),(0,a.kt)("li",{parentName:"ul"},"[branch-2.10][fix]","[build]"," Upgrade swagger version to fix CVE-2022-1471 (#20172)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix getPartitionedStats miss subscription's messageAckRate (#19870)"),(0,a.kt)("li",{parentName:"ul"},"[fix]"," Use scheduled executor in BinaryProtoLookupService (#20043)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Fix broker restart logic (#20113)")),(0,a.kt)("h3",{id:"transaction"},"Transaction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][txn]"," fix consumer can receive aborted txn message when readType is replay (#19815)")),(0,a.kt)("h3",{id:"pulsar-io-and-pulsar-functions"},"Pulsar IO and Pulsar Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][io]","[branch-2.10]"," Not restart instance when kafka source poll exception. (#20816)"),(0,a.kt)("li",{parentName:"ul"},"[fix][offload]"," Filesystem offloader class not found hadoop-hdfs-client (#20365)"),(0,a.kt)("li",{parentName:"ul"},"[fix][fn]"," Make KubernetesRuntime translate characters in function tenant, namespace, and name during function removal to avoid label errors (#19584)"),(0,a.kt)("li",{parentName:"ul"},"[fix][fn]"," Fix JavaInstanceStarter inferring type class name error (#19896)"),(0,a.kt)("li",{parentName:"ul"},"[fix][io]"," Close the kafka source connector got stuck (#20698)"),(0,a.kt)("li",{parentName:"ul"},"[fix][fn]"," Exit JVM when main thread throws exception (#20689)"),(0,a.kt)("li",{parentName:"ul"},"Optimize conusmer pause (#14566)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix the publish latency spike from the contention of MessageDeduplication (#20647)"),(0,a.kt)("li",{parentName:"ul"},"[fix][fn]"," Configure pulsar admin for TLS (#20533)"),(0,a.kt)("li",{parentName:"ul"},"[fix][fn]"," Go functions must retrieve consumers by non-particioned topic ID (#20413)"),(0,a.kt)("li",{parentName:"ul"},"[fix][io]"," Close the kafka source connector if there is uncaught exception (#20479)"),(0,a.kt)("li",{parentName:"ul"},"[fix][fn]"," Go functions need to use static grpcPort in k8s runtime (#20404)"),(0,a.kt)("li",{parentName:"ul"},"[fix][fn]"," Make pulsar-admin support update py/go with package url (#19897)"),(0,a.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix transaction is not aborted when send or ACK failed (#20240)")),(0,a.kt)("h3",{id:"cli"},"CLI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][cli]"," the variable producerName of BatchMsgContainer is null (#20819)"),(0,a.kt)("li",{parentName:"ul"},"[fix][ci]"," Update nar maven plugin version to fix excessive downloads (#20410)")),(0,a.kt)("h3",{id:"admin"},"Admin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[improve][admin]"," Return BAD_REQUEST on cluster data is null for createCluster (#20346)")),(0,a.kt)("h3",{id:"security"},"Security"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][sec]"," Upgrade snappy-java to address multiple CVEs (#20604)"),(0,a.kt)("li",{parentName:"ul"},"[fix][sec]"," Upgrade Guava to 32.0.0 to address CVE-2023-2976 (#20459)"),(0,a.kt)("li",{parentName:"ul"},"[improve][misc]"," Upgrade Netty to 4.1.93.Final (#20423)"),(0,a.kt)("li",{parentName:"ul"},"[improve][misc]"," Upgrade Netty to 4.1.89.Final (#19649)"),(0,a.kt)("li",{parentName:"ul"},"[fix][sec]"," Upgrade sqlite-jdbc to resolve CVE-2023-32697 (#20411)")),(0,a.kt)("h3",{id:"ci--test"},"CI & Test"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][test]"," Replace test call to Auth0 with call to WireMock (#20465)"),(0,a.kt)("li",{parentName:"ul"},"[fix][test]"," Fix flaky testCreateTopicWithZombieReplicatorCursor (#20037)\n*","[fix][flaky-test]","NamespaceServiceTest.flaky/testModularLoadManagerRemoveBundleAndLoad (#17487)"),(0,a.kt)("li",{parentName:"ul"},"[improve][test]","[branch-2.10]"," Backport disabling disk usage threshold for Elastic Testcontainers (#20676)")),(0,a.kt)("h3",{id:"others"},"Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][build]","Fix compatibility issue caused by #20819 (#20834)"),(0,a.kt)("li",{parentName:"ul"},"[fix][build]"," Mongo is fixed for 2.10.5 (#20810)"),(0,a.kt)("li",{parentName:"ul"},"[fix][meta]"," Bookie Info lost by notification race condition. (#20642)"),(0,a.kt)("li",{parentName:"ul"},"[fix][meta]","Switch to the metadata store thread after zk operation (#20303)"),(0,a.kt)("li",{parentName:"ul"},"[fix][ws]"," Remove unnecessary ping/pong implementation (#20733)"),(0,a.kt)("li",{parentName:"ul"},"fix: bundle-data metadata leak because of bundlestats was not clean (#17095)"),(0,a.kt)("li",{parentName:"ul"},"[fix][Perf]"," PerformanceProducer do not produce expected number of messages. (#19775)"),(0,a.kt)("li",{parentName:"ul"},"[fix][meta]"," Adding the missed bookie id in the registration manager. (#20641)"),(0,a.kt)("li",{parentName:"ul"},"[fix][build]",' Don\'t publish docker image with "latest" tag to docker repository'),(0,a.kt)("li",{parentName:"ul"},"[fix][build]","[branch-2.10]"," Fix ci-license check (#20505)"),(0,a.kt)("li",{parentName:"ul"},"[improve][monitor]"," Add JVM start time metric (#20381)"),(0,a.kt)("li",{parentName:"ul"},"[fix][build]"," update the zookeeper version to 3.6.4 (#20333)"),(0,a.kt)("li",{parentName:"ul"},"[fix][monitor]"," Fix the partitioned publisher topic stat aggregation bug (#18807)"),(0,a.kt)("li",{parentName:"ul"},"[fix][meta]"," deadlock of zkSessionWatcher when zkConnection loss (#20122)"),(0,a.kt)("li",{parentName:"ul"},"[improve][build]"," Upgrade dependencies to reduce CVE. (#20162)"),(0,a.kt)("li",{parentName:"ul"},"[branch-2.10][improve]","[build]"," Upgrade snakeyaml version to 2.0 (#20118)")))}m.isMDXComponent=!0}}]);