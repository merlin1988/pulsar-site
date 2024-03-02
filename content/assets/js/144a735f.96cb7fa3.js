"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[55670],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||n;return a?r.createElement(f,s(s({ref:t},p),{},{components:a})):r.createElement(f,s({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<n;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var r=a(87462),o=(a(67294),a(3905));const n={id:"tiered-storage-overview",title:"Overview of tiered storage",sidebar_label:"Overview",description:"Get a comprehensive understanding of use cases, installation methods, and working principles of Pulsar tiered storage."},s=void 0,i={unversionedId:"tiered-storage-overview",id:"tiered-storage-overview",title:"Overview of tiered storage",description:"Get a comprehensive understanding of use cases, installation methods, and working principles of Pulsar tiered storage.",source:"@site/docs/tiered-storage-overview.md",sourceDirName:".",slug:"/tiered-storage-overview",permalink:"/docs/next/tiered-storage-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/tiered-storage-overview.md",tags:[],version:"current",frontMatter:{id:"tiered-storage-overview",title:"Overview of tiered storage",sidebar_label:"Overview",description:"Get a comprehensive understanding of use cases, installation methods, and working principles of Pulsar tiered storage."},sidebar:"docsSidebar",previous:{title:"REST APIs",permalink:"/docs/next/sql-rest-api"},next:{title:"AWS S3 offloader",permalink:"/docs/next/tiered-storage-aws"}},l={},d=[{value:"When to use tiered storage?",id:"when-to-use-tiered-storage",level:2},{value:"How to install tiered storage offloaders?",id:"how-to-install-tiered-storage-offloaders",level:2},{value:"How does tiered storage work?",id:"how-does-tiered-storage-work",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar's ",(0,o.kt)("strong",{parentName:"p"},"Tiered Storage")," feature allows older backlog data to be moved from BookKeeper to long-term and cheaper storage, while still allowing clients to access the backlog as if nothing has changed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tiered storage uses ",(0,o.kt)("a",{parentName:"li",href:"https://jclouds.apache.org"},"Apache jclouds")," to support ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"Amazon S3"),", ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/"},"GCS (Google Cloud Storage)"),", ",(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/storage/blobs/"},"Azure")," and ",(0,o.kt)("a",{parentName:"li",href:"https://www.aliyun.com/product/oss"},"Aliyun OSS")," for long-term storage.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Read how to ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/tiered-storage-aws"},"Use AWS S3 offloader with Pulsar"),";"),(0,o.kt)("li",{parentName:"ul"},"Read how to ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/tiered-storage-gcs"},"Use GCS offloader with Pulsar"),";"),(0,o.kt)("li",{parentName:"ul"},"Read how to ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/tiered-storage-azure"},"Use Azure BlobStore offloader with Pulsar"),";"),(0,o.kt)("li",{parentName:"ul"},"Read how to ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/tiered-storage-aliyun"},"Use Aliyun OSS offloader with Pulsar"),";"),(0,o.kt)("li",{parentName:"ul"},"Read how to ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/tiered-storage-s3"},"Use S3 offloader with Pulsar"),"."))),(0,o.kt)("li",{parentName:"ul"},"Tiered storage uses ",(0,o.kt)("a",{parentName:"li",href:"http://hadoop.apache.org/"},"Apache Hadoop")," to support filesystems for long-term storage.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Read how to ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/tiered-storage-filesystem"},"Use filesystem offloader with Pulsar"),".")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/tiered-storage-aws"},"AWS S3 offloader")," registers specific AWS metadata, such as regions and service URLs and requests bucket location before performing any operations. If you cannot access the Amazon service, you can use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/tiered-storage-s3"},"S3 offloader")," instead since it is an S3 compatible API without the metadata.")),(0,o.kt)("h2",{id:"when-to-use-tiered-storage"},"When to use tiered storage?"),(0,o.kt)("p",null,"Tiered storage should be used when you have a topic for which you want to keep a very long backlog for a long time."),(0,o.kt)("p",null,"For example, if you have a topic containing user actions that you use to train your recommendation systems, you may want to keep that data for a long time, so that if you change your recommendation algorithm, you can rerun it against your full user history."),(0,o.kt)("h2",{id:"how-to-install-tiered-storage-offloaders"},"How to install tiered storage offloaders?"),(0,o.kt)("p",null,"Pulsar releases a separate binary distribution, containing the tiered storage offloaders. To enable those offloaders, you need to complete the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the offloaders tarball release.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-3.2.0/apache-pulsar-offloaders-3.2.0-bin.tar.gz\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Untar the offloaders package and copy the offloaders as ",(0,o.kt)("inlineCode",{parentName:"li"},"offloaders")," in the pulsar directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar xvfz apache-pulsar-offloaders-3.2.0-bin.tar.gz\nmv apache-pulsar-offloaders-3.2.0/offloaders offloaders\n\nls offloaders\n# tiered-storage-file-system-3.2.0.nar\n# tiered-storage-jcloud-3.2.0.nar\n")),(0,o.kt)("p",null,"For more information on how to configure tiered storage, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/cookbooks-tiered-storage"},"Tiered storage cookbook"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,o.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's pulsar directory."),(0,o.kt)("li",{parentName:"ul"},"If you are ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/getting-started-docker"},"running Pulsar in Docker")," or deploying Pulsar using a docker image (e.g. ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/deploy-kubernetes"},"K8S"),"), you can use the ",(0,o.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,o.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,o.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders."))),(0,o.kt)("h2",{id:"how-does-tiered-storage-work"},"How does tiered storage work?"),(0,o.kt)("p",null,"A topic in Pulsar is backed by a ",(0,o.kt)("strong",{parentName:"p"},"log"),", known as a ",(0,o.kt)("strong",{parentName:"p"},"managed ledger"),". This log is composed of an ordered list of segments. Pulsar only writes to the final segment of the log. All previous segments are sealed. The data within the segment is immutable. This is known as a ",(0,o.kt)("strong",{parentName:"p"},"segment-oriented architecture"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tiered storage in Pulsar",src:a(90168).Z,title:"Tiered Storage",width:"1110",height:"697"})),(0,o.kt)("p",null,"Tiered storage works as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The tiered storage offloading mechanism takes advantage of the segment-oriented architecture. "),(0,o.kt)("p",{parentName:"li"},"When offloading is requested, the segments of the log are copied one by one to tiered storage. All segments of the log (apart from the current segment) written to tiered storage can be offloaded.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Data written to BookKeeper is replicated to 3 physical machines by default. "),(0,o.kt)("p",{parentName:"li"},"However, once a segment is sealed in BookKeeper, it becomes immutable and can be copied to long-term storage. Long-term storage has the potential to achieve significant cost savings.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Before offloading ledgers to long-term storage, you need to configure buckets, credentials, and other properties for the cloud storage service. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Additionally, Pulsar uses multi-part objects to upload the segment data and brokers may crash while uploading the data. "),(0,o.kt)("p",{parentName:"li"},"It is recommended that you add a life cycle rule for your bucket to expire incomplete multi-part upload after a day or two days to avoid getting charged for incomplete uploads. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Moreover, you can trigger the offloading operation manually (via REST API or CLI) or automatically (via CLI).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After transferring ledgers to long-term storage, the messages within these ledgers remain accessible to Pulsar consumers and readers, ensuring transparency in data retrieval."))),(0,o.kt)("p",null,"For more information about tiered storage for Pulsar topics, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-17:-Tiered-storage-for-Pulsar-topics"},"PIP-17")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/reference-metrics#offload-metrics"},"offload metrics"),"."))}u.isMDXComponent=!0},90168:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulsar-tiered-storage-72d8b53762992cfeaa58ae3b48dd2522.png"}}]);