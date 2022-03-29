"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[70738],{3905:function(e,a,t){t.d(a,{Zo:function(){return h},kt:function(){return p}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},h=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),c=d(t),p=r,m=c["".concat(l,".").concat(p)]||c[p]||u[p]||o;return t?n.createElement(m,s(s({ref:a},h),{},{components:t})):n.createElement(m,s({ref:a},h))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},128:function(e,a,t){t.r(a),t.d(a,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),s=["components"],i={id:"administration-load-balance",title:"Pulsar load balance",sidebar_label:"Load balance"},l=void 0,d={unversionedId:"administration-load-balance",id:"administration-load-balance",title:"Pulsar load balance",description:"Load balance across Pulsar brokers",source:"@site/docs/administration-load-balance.md",sourceDirName:".",slug:"/administration-load-balance",permalink:"/docs/next/administration-load-balance",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/docs/administration-load-balance.md",tags:[],version:"current",frontMatter:{id:"administration-load-balance",title:"Pulsar load balance",sidebar_label:"Load balance"},sidebar:"docsSidebar",previous:{title:"Pulsar statistics",permalink:"/docs/next/administration-stats"},next:{title:"Pulsar proxy",permalink:"/docs/next/administration-proxy"}},h={},u=[{value:"Load balance across Pulsar brokers",id:"load-balance-across-pulsar-brokers",level:2},{value:"Pulsar load manager architecture",id:"pulsar-load-manager-architecture",level:2},{value:"Assign topics to brokers dynamically",id:"assign-topics-to-brokers-dynamically",level:3},{value:"Assignment granularity",id:"assignment-granularity",level:4},{value:"Create namespaces and bundles",id:"create-namespaces-and-bundles",level:3},{value:"Unload topics and bundles",id:"unload-topics-and-bundles",level:3},{value:"Split namespace bundles",id:"split-namespace-bundles",level:3},{value:"Shed load automatically",id:"shed-load-automatically",level:3},{value:"ThresholdShedder",id:"thresholdshedder",level:5},{value:"OverloadShedder",id:"overloadshedder",level:5},{value:"UniformLoadShedder",id:"uniformloadshedder",level:5},{value:"Broker overload thresholds",id:"broker-overload-thresholds",level:4}],c={toc:u};function p(e){var a=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"load-balance-across-pulsar-brokers"},"Load balance across Pulsar brokers"),(0,o.kt)("p",null,"Pulsar is an horizontally scalable messaging system, so the traffic in a logical cluster must be balanced across all the available Pulsar brokers as evenly as possible, which is a core requirement."),(0,o.kt)("p",null,"You can use multiple settings and tools to control the traffic distribution which require a bit of context to understand how the traffic is managed in Pulsar. Though, in most cases, the core requirement mentioned above is true out of the box and you should not worry about it. "),(0,o.kt)("h2",{id:"pulsar-load-manager-architecture"},"Pulsar load manager architecture"),(0,o.kt)("p",null,"The following part introduces the basic architecture of the Pulsar load manager."),(0,o.kt)("h3",{id:"assign-topics-to-brokers-dynamically"},"Assign topics to brokers dynamically"),(0,o.kt)("p",null,"Topics are dynamically assigned to brokers based on the load conditions of all brokers in the cluster."),(0,o.kt)("p",null,"When a client starts using new topics that are not assigned to any broker, a process is triggered to choose the best suited broker to acquire ownership of these topics according to the load conditions. "),(0,o.kt)("p",null,'In case of partitioned topics, different partitions are assigned to different brokers. Here "topic" means either a non-partitioned topic or one partition of a topic.'),(0,o.kt)("p",null,'The assignment is "dynamic" because the assignment changes quickly. For example, if the broker owning the topic crashes, the topic is reassigned immediately to another broker. Another scenario is that the broker owning the topic becomes overloaded. In this case, the topic is reassigned to a less loaded broker.'),(0,o.kt)("p",null,"The stateless nature of brokers makes the dynamic assignment possible, so you can quickly expand or shrink the cluster based on usage."),(0,o.kt)("h4",{id:"assignment-granularity"},"Assignment granularity"),(0,o.kt)("p",null,"The assignment of topics or partitions to brokers is not done at the topics or partitions level, but done at the Bundle level (a higher level). The reason is to amortize the amount of information that you need to keep track. Based on CPU, memory, traffic load and other indexes, topics are assigned to a particular broker dynamically. "),(0,o.kt)("p",null,'Instead of individual topic or partition assignment, each broker takes ownership of a subset of the topics for a namespace. This subset is called a "',(0,o.kt)("em",{parentName:"p"},"bundle"),'" and effectively this subset is a sharding mechanism.'),(0,o.kt)("p",null,'The namespace is the "administrative" unit: many config knobs or operations are done at the namespace level.'),(0,o.kt)("p",null,'For assignment, a namespaces is sharded into a list of "bundles", with each bundle comprising a portion of overall hash range of the namespace.'),(0,o.kt)("p",null,"Topics are assigned to a particular bundle by taking the hash of the topic name and checking in which bundle the hash falls into."),(0,o.kt)("p",null,"Each bundle is independent of the others and thus is independently assigned to different brokers."),(0,o.kt)("h3",{id:"create-namespaces-and-bundles"},"Create namespaces and bundles"),(0,o.kt)("p",null,"When you create a new namespace, the new namespace sets to use the default number of bundles. You can set this in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/broker.conf"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"\n# When a namespace is created without specifying the number of bundle, this\n# value will be used as the default\ndefaultNumberOfNamespaceBundles=4\n\n")),(0,o.kt)("p",null,"You can either change the system default, or override it when you create a new namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces create my-tenant/my-namespace --clusters us-west --bundles 16\n\n")),(0,o.kt)("p",null,"With this command, you create a namespace with 16 initial bundles. Therefore the topics for this namespaces can immediately be spread across up to 16 brokers."),(0,o.kt)("p",null,"In general, if you know the expected traffic and number of topics in advance, you had better start with a reasonable number of bundles instead of waiting for the system to auto-correct the distribution."),(0,o.kt)("p",null,"On the same note, it is beneficial to start with more bundles than the number of brokers, because of the hashing nature of the distribution of topics into bundles. For example, for a namespace with 1000 topics, using something like 64 bundles achieves a good distribution of traffic across 16 brokers."),(0,o.kt)("h3",{id:"unload-topics-and-bundles"},"Unload topics and bundles"),(0,o.kt)("p",null,'You can "unload" a topic in Pulsar with admin operation. Unloading means to close the topics, release ownership and reassign the topics to a new broker, based on current load.'),(0,o.kt)("p",null,"When unloading happens, the client experiences a small latency blip, typically in the order of tens of milliseconds, while the topic is reassigned."),(0,o.kt)("p",null,"Unloading is the mechanism that the load-manager uses to perform the load shedding, but you can also trigger the unloading manually, for example to correct the assignments and redistribute traffic even before having any broker overloaded."),(0,o.kt)("p",null,"Unloading a topic has no effect on the assignment, but just closes and reopens the particular topic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-admin topics unload persistent://tenant/namespace/topic\n\n")),(0,o.kt)("p",null,"To unload all topics for a namespace and trigger reassignments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-admin namespaces unload tenant/namespace\n\n")),(0,o.kt)("h3",{id:"split-namespace-bundles"},"Split namespace bundles"),(0,o.kt)("p",null,"Since the load for the topics in a bundle might change over time and predicting the load might be hard, bundle split is designed to deal with these issues. The broker splits a bundle into two and the new smaller bundles can be reassigned to different brokers."),(0,o.kt)("p",null,"The splitting is based on some tunable thresholds. Any existing bundle that exceeds any of the threshold is a candidate to be split. By default the newly split bundles are also immediately offloaded to other brokers, to facilitate the traffic distribution. "),(0,o.kt)("p",null,"You can split namespace bundles in two ways, by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"supportedNamespaceBundleSplitAlgorithms")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"range_equally_divide")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"topic_count_equally_divide")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"broker.conf")," file. The former splits the bundle into two parts with the same hash range size; the latter splits the bundle into two parts with the same number of topics. You can also configure other parameters for namespace bundles."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"\n# enable/disable namespace bundle auto split\nloadBalancerAutoBundleSplitEnabled=true\n\n# enable/disable automatic unloading of split bundles\nloadBalancerAutoUnloadSplitBundlesEnabled=true\n\n# maximum topics in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxTopics=1000\n\n# maximum sessions (producers + consumers) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxSessions=1000\n\n# maximum msgRate (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxMsgRate=30000\n\n# maximum bandwidth (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxBandwidthMbytes=100\n\n# maximum number of bundles in a namespace (for auto-split)\nloadBalancerNamespaceMaximumBundles=128\n\n")),(0,o.kt)("h3",{id:"shed-load-automatically"},"Shed load automatically"),(0,o.kt)("p",null,"The support for automatic load shedding is available in the load manager of Pulsar. This means that whenever the system recognizes a particular broker is overloaded, the system forces some traffic to be reassigned to less loaded brokers."),(0,o.kt)("p",null,'When a broker is identified as overloaded, the broker forces to "unload" a subset of the bundles, the ones with higher traffic, that make up for the overload percentage.'),(0,o.kt)("p",null,"For example, the default threshold is 85% and if a broker is over quota at 95% CPU usage, then the broker unloads the percent difference plus a 5% margin: ",(0,o.kt)("inlineCode",{parentName:"p"},"(95% - 85%) + 5% = 15%"),"."),(0,o.kt)("p",null,"Given the selection of bundles to offload is based on traffic (as a proxy measure for cpu, network and memory), broker unloads bundles for at least 15% of traffic."),(0,o.kt)("p",null,"The automatic load shedding is enabled by default and you can disable the automatic load shedding with this setting:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Enable/disable automatic bundle unloading for load-shedding\nloadBalancerSheddingEnabled=true\n\n")),(0,o.kt)("p",null,"Additional settings that apply to shedding:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Load shedding interval. Broker periodically checks whether some traffic should be offload from\n# some over-loaded broker to other under-loaded brokers\nloadBalancerSheddingIntervalMinutes=1\n\n# Prevent the same topics to be shed and moved to other brokers more that once within this timeframe\nloadBalancerSheddingGracePeriodMinutes=30\n\n")),(0,o.kt)("p",null,"Pulsar supports the following types of shedding strategies. From Pulsar 2.10, the ",(0,o.kt)("strong",{parentName:"p"},"default")," shedding strategy is ",(0,o.kt)("inlineCode",{parentName:"p"},"ThresholdShedder"),"."),(0,o.kt)("h5",{id:"thresholdshedder"},"ThresholdShedder"),(0,o.kt)("p",null,"This strategy tends to shed the bundles if any broker's usage is above the configured threshold. It does this by first computing the average resource usage per broker for the whole cluster. The resource usage for each broker is calculated using the following method: LocalBrokerData#getMaxResourceUsageWithWeight. The weights for each resource are configurable. Historical observations are included in the running average based on the broker's setting for loadBalancerHistoryResourcePercentage. Once the average resource usage is calculated, a broker's current/historical usage is compared to the average broker usage. If a broker's usage is greater than the average usage per broker plus the loadBalancerBrokerThresholdShedderPercentage, this load shedder proposes removing enough bundles to bring the unloaded broker 5% below the current average broker usage. Note that recently unloaded bundles are not unloaded again. Configure broker with below value to use this strategy.\n",(0,o.kt)("inlineCode",{parentName:"p"},"loadBalancerLoadSheddingStrategy=org.apache.pulsar.broker.loadbalance.impl.ThresholdShedder")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Shedding strategy - ThresholdShedder",src:t(50152).Z,width:"1217",height:"435"})),(0,o.kt)("h5",{id:"overloadshedder"},"OverloadShedder"),(0,o.kt)("p",null,'This strategy will attempt to shed exactly one bundle on brokers which are overloaded, that is, whose maximum system resource usage exceeds loadBalancerBrokerOverloadedThresholdPercentage. To see which resources are considered when determining the maximum system resource. A bundle is recommended for unloading off that broker if and only if the following conditions hold: The broker has at least two bundles assigned and the broker has at least one bundle that has not been unloaded recently according to LoadBalancerSheddingGracePeriodMinutes. The unloaded bundle will be the most expensive bundle in terms of message rate that has not been recently unloaded. Note that this strategy does not take into account "underloaded" brokers when determining which bundles to unload. If you are looking for a strategy that spreads load evenly across all brokers, see ThresholdShedder. Configure broker with below value to use this strategy.\n',(0,o.kt)("inlineCode",{parentName:"p"},"loadBalancerLoadSheddingStrategy=org.apache.pulsar.broker.loadbalance.impl.OverloadShedder")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Shedding strategy - OverloadShedder",src:t(75691).Z,width:"1218",height:"418"})),(0,o.kt)("h5",{id:"uniformloadshedder"},"UniformLoadShedder"),(0,o.kt)("p",null,"This strategy tends to distribute load uniformly across all brokers. This strategy checks laod difference between broker with highest load and broker with lowest load. If the difference is higher than configured thresholds ",(0,o.kt)("inlineCode",{parentName:"p"},"loadBalancerMsgRateDifferenceShedderThreshold")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"loadBalancerMsgThroughputMultiplierDifferenceShedderThreshold")," then it finds out bundles which can be unloaded to distribute traffic evenly across all brokers. Configure broker with below value to use this strategy.\n",(0,o.kt)("inlineCode",{parentName:"p"},"loadBalancerLoadSheddingStrategy=org.apache.pulsar.broker.loadbalance.impl.UniformLoadShedder")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Shedding strategy - UniformLoadShedder",src:t(26866).Z,width:"1215",height:"432"})),(0,o.kt)("h4",{id:"broker-overload-thresholds"},"Broker overload thresholds"),(0,o.kt)("p",null,"The determinations of when a broker is overloaded is based on threshold of CPU, network and memory usage. Whenever either of those metrics reaches the threshold, the system triggers the shedding (if enabled)."),(0,o.kt)("p",null,"By default, overload threshold is set at 85%:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Usage threshold to determine a broker as over-loaded\nloadBalancerBrokerOverloadedThresholdPercentage=85\n\n")),(0,o.kt)("p",null,"Pulsar gathers the usage stats from the system metrics."),(0,o.kt)("p",null,"In case of network utilization, in some cases the network interface speed that Linux reports is not correct and needs to be manually overridden. This is the case in AWS EC2 instances with 1Gbps NIC speed for which the OS reports 10Gbps speed."),(0,o.kt)("p",null,"Because of the incorrect max speed, the Pulsar load manager might think the broker has not reached the NIC capacity, while in fact the broker already uses all the bandwidth and the traffic is slowed down."),(0,o.kt)("p",null,"You can use the following setting to correct the max NIC speed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Override the auto-detection of the network interfaces max speed.\n# This option is useful in some environments (eg: EC2 VMs) where the max speed\n# reported by Linux is not reflecting the real bandwidth available to the broker.\n# Since the network usage is employed by the load manager to decide when a broker\n# is overloaded, it is important to make sure the info is correct or override it\n# with the right value here. The configured value can be a double (eg: 0.8) and that\n# can be used to trigger load-shedding even before hitting on NIC limits.\nloadBalancerOverrideBrokerNicSpeedGbps=\n\n")),(0,o.kt)("p",null,"When the value is empty, Pulsar uses the value that the OS reports."))}p.isMDXComponent=!0},75691:function(e,a,t){a.Z=t.p+"assets/images/OverloadShedder-b981b25c664212a44e650597158c6ced.png"},50152:function(e,a,t){a.Z=t.p+"assets/images/ThresholdShedder-6973b45c5703a3d00b78330729e24757.png"},26866:function(e,a,t){a.Z=t.p+"assets/images/UniformLoadShedder-78dfc2001f20dbbb600cdf6baaebb09b.png"}}]);