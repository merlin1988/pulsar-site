"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[53194],{15680:(e,a,r)=>{r.d(a,{xA:()=>g,yg:()=>m});var t=r(96540);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),d=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},g=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=d(r),u=o,m=p["".concat(l,".").concat(u)]||p[u]||c[u]||n;return r?t.createElement(m,s(s({ref:a},g),{},{components:r})):t.createElement(m,s({ref:a},g))}));function m(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<n;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35590:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var t=r(58168),o=(r(96540),r(15680));const n={id:"tiered-storage-overview",title:"Overview of tiered storage",sidebar_label:"Overview",description:"Get a comprehensive understanding of use cases, installation methods, and working principles of Pulsar tiered storage."},s=void 0,i={unversionedId:"tiered-storage-overview",id:"version-3.2.x/tiered-storage-overview",title:"Overview of tiered storage",description:"Get a comprehensive understanding of use cases, installation methods, and working principles of Pulsar tiered storage.",source:"@site/versioned_docs/version-3.2.x/tiered-storage-overview.md",sourceDirName:".",slug:"/tiered-storage-overview",permalink:"/docs/3.2.x/tiered-storage-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/tiered-storage-overview.md",tags:[],version:"3.2.x",frontMatter:{id:"tiered-storage-overview",title:"Overview of tiered storage",sidebar_label:"Overview",description:"Get a comprehensive understanding of use cases, installation methods, and working principles of Pulsar tiered storage."},sidebar:"docsSidebar",previous:{title:"REST APIs",permalink:"/docs/3.2.x/sql-rest-api"},next:{title:"AWS S3 offloader",permalink:"/docs/3.2.x/tiered-storage-aws"}},l={},d=[{value:"When to use tiered storage?",id:"when-to-use-tiered-storage",level:2},{value:"How to install tiered storage offloaders?",id:"how-to-install-tiered-storage-offloaders",level:2},{value:"How does tiered storage work?",id:"how-does-tiered-storage-work",level:2}],g={toc:d},p="wrapper";function c(e){let{components:a,...n}=e;return(0,o.yg)(p,(0,t.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Pulsar's ",(0,o.yg)("strong",{parentName:"p"},"Tiered Storage")," feature allows older backlog data to be moved from BookKeeper to long-term and cheaper storage, while still allowing clients to access the backlog as if nothing has changed."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Tiered storage uses ",(0,o.yg)("a",{parentName:"li",href:"https://jclouds.apache.org"},"Apache jclouds")," to support ",(0,o.yg)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"Amazon S3"),", ",(0,o.yg)("a",{parentName:"li",href:"https://cloud.google.com/storage/"},"GCS (Google Cloud Storage)"),", ",(0,o.yg)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/storage/blobs/"},"Azure")," and ",(0,o.yg)("a",{parentName:"li",href:"https://www.aliyun.com/product/oss"},"Aliyun OSS")," for long-term storage.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Read how to ",(0,o.yg)("a",{parentName:"li",href:"/docs/3.2.x/tiered-storage-aws"},"Use AWS S3 offloader with Pulsar"),";"),(0,o.yg)("li",{parentName:"ul"},"Read how to ",(0,o.yg)("a",{parentName:"li",href:"/docs/3.2.x/tiered-storage-gcs"},"Use GCS offloader with Pulsar"),";"),(0,o.yg)("li",{parentName:"ul"},"Read how to ",(0,o.yg)("a",{parentName:"li",href:"/docs/3.2.x/tiered-storage-azure"},"Use Azure BlobStore offloader with Pulsar"),";"),(0,o.yg)("li",{parentName:"ul"},"Read how to ",(0,o.yg)("a",{parentName:"li",href:"/docs/3.2.x/tiered-storage-aliyun"},"Use Aliyun OSS offloader with Pulsar"),";"),(0,o.yg)("li",{parentName:"ul"},"Read how to ",(0,o.yg)("a",{parentName:"li",href:"/docs/3.2.x/tiered-storage-s3"},"Use S3 offloader with Pulsar"),"."))),(0,o.yg)("li",{parentName:"ul"},"Tiered storage uses ",(0,o.yg)("a",{parentName:"li",href:"http://hadoop.apache.org/"},"Apache Hadoop")," to support filesystems for long-term storage.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Read how to ",(0,o.yg)("a",{parentName:"li",href:"/docs/3.2.x/tiered-storage-filesystem"},"Use filesystem offloader with Pulsar"),".")))),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"The ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.2.x/tiered-storage-aws"},"AWS S3 offloader")," registers specific AWS metadata, such as regions and service URLs and requests bucket location before performing any operations. If you cannot access the Amazon service, you can use the ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.2.x/tiered-storage-s3"},"S3 offloader")," instead since it is an S3 compatible API without the metadata.")),(0,o.yg)("h2",{id:"when-to-use-tiered-storage"},"When to use tiered storage?"),(0,o.yg)("p",null,"Tiered storage should be used when you have a topic for which you want to keep a very long backlog for a long time."),(0,o.yg)("p",null,"For example, if you have a topic containing user actions that you use to train your recommendation systems, you may want to keep that data for a long time, so that if you change your recommendation algorithm, you can rerun it against your full user history."),(0,o.yg)("h2",{id:"how-to-install-tiered-storage-offloaders"},"How to install tiered storage offloaders?"),(0,o.yg)("p",null,"Pulsar releases a separate binary distribution, containing the tiered storage offloaders. To enable those offloaders, you need to complete the following steps."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Download the offloaders tarball release.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-3.2.1/apache-pulsar-offloaders-3.2.1-bin.tar.gz\n")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Untar the offloaders package and copy the offloaders as ",(0,o.yg)("inlineCode",{parentName:"li"},"offloaders")," in the pulsar directory.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"tar xvfz apache-pulsar-offloaders-3.2.1-bin.tar.gz\nmv apache-pulsar-offloaders-3.2.1/offloaders offloaders\n\nls offloaders\n# tiered-storage-file-system-3.2.1.nar\n# tiered-storage-jcloud-3.2.1.nar\n")),(0,o.yg)("p",null,"For more information on how to configure tiered storage, see ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.2.x/cookbooks-tiered-storage"},"Tiered storage cookbook"),"."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,o.yg)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's pulsar directory."),(0,o.yg)("li",{parentName:"ul"},"If you are ",(0,o.yg)("a",{parentName:"li",href:"/docs/3.2.x/getting-started-docker"},"running Pulsar in Docker")," or deploying Pulsar using a docker image (e.g. ",(0,o.yg)("a",{parentName:"li",href:"/docs/3.2.x/deploy-kubernetes"},"K8S"),"), you can use the ",(0,o.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,o.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,o.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders."))),(0,o.yg)("h2",{id:"how-does-tiered-storage-work"},"How does tiered storage work?"),(0,o.yg)("p",null,"A topic in Pulsar is backed by a ",(0,o.yg)("strong",{parentName:"p"},"log"),", known as a ",(0,o.yg)("strong",{parentName:"p"},"managed ledger"),". This log is composed of an ordered list of segments. Pulsar only writes to the final segment of the log. All previous segments are sealed. The data within the segment is immutable. This is known as a ",(0,o.yg)("strong",{parentName:"p"},"segment-oriented architecture"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Tiered storage in Pulsar",src:r(70976).A,title:"Tiered Storage",width:"1110",height:"697"})),(0,o.yg)("p",null,"Tiered storage works as follows:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The tiered storage offloading mechanism takes advantage of the segment-oriented architecture. "),(0,o.yg)("p",{parentName:"li"},"When offloading is requested, the segments of the log are copied one by one to tiered storage. All segments of the log (apart from the current segment) written to tiered storage can be offloaded.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Data written to BookKeeper is replicated to 3 physical machines by default. "),(0,o.yg)("p",{parentName:"li"},"However, once a segment is sealed in BookKeeper, it becomes immutable and can be copied to long-term storage. Long-term storage has the potential to achieve significant cost savings.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Before offloading ledgers to long-term storage, you need to configure buckets, credentials, and other properties for the cloud storage service. ")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Additionally, Pulsar uses multi-part objects to upload the segment data and brokers may crash while uploading the data. "),(0,o.yg)("p",{parentName:"li"},"It is recommended that you add a life cycle rule for your bucket to expire incomplete multi-part upload after a day or two days to avoid getting charged for incomplete uploads. ")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Moreover, you can trigger the offloading operation manually (via REST API or CLI) or automatically (via CLI).")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"After transferring ledgers to long-term storage, the messages within these ledgers remain accessible to Pulsar consumers and readers, ensuring transparency in data retrieval."))),(0,o.yg)("p",null,"For more information about tiered storage for Pulsar topics, see ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-17:-Tiered-storage-for-Pulsar-topics"},"PIP-17")," and ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-metrics#offload-metrics"},"offload metrics"),"."))}c.isMDXComponent=!0},70976:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/pulsar-tiered-storage-72d8b53762992cfeaa58ae3b48dd2522.png"}}]);