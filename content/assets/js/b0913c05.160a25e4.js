"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[44218],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(g,s(s({ref:t},u),{},{components:r})):a.createElement(g,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11965:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],p={id:"adaptors-storm",title:"Pulsar adaptor for Apache Storm",sidebar_label:"Apache Storm",original_id:"adaptors-storm"},l=void 0,i={unversionedId:"adaptors-storm",id:"version-2.9.1/adaptors-storm",title:"Pulsar adaptor for Apache Storm",description:"Pulsar Storm is an adaptor for integrating with Apache Storm topologies. It provides core Storm implementations for sending and receiving data.",source:"@site/versioned_docs/version-2.9.1/adaptors-storm.md",sourceDirName:".",slug:"/adaptors-storm",permalink:"/docs/adaptors-storm",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/versioned_docs/version-2.9.1/adaptors-storm.md",tags:[],version:"2.9.1",frontMatter:{id:"adaptors-storm",title:"Pulsar adaptor for Apache Storm",sidebar_label:"Apache Storm",original_id:"adaptors-storm"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Apache Spark",permalink:"/docs/adaptors-spark"},next:{title:"Topic compaction",permalink:"/docs/cookbooks-compaction"}},u={},c=[{value:"Using the Pulsar Storm Adaptor",id:"using-the-pulsar-storm-adaptor",level:2},{value:"Pulsar Spout",id:"pulsar-spout",level:2},{value:"Pulsar Bolt",id:"pulsar-bolt",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar Storm is an adaptor for integrating with ",(0,o.kt)("a",{parentName:"p",href:"http://storm.apache.org/"},"Apache Storm")," topologies. It provides core Storm implementations for sending and receiving data."),(0,o.kt)("p",null,"An application can inject data into a Storm topology via a generic Pulsar spout, as well as consume data from a Storm topology via a generic Pulsar bolt."),(0,o.kt)("h2",{id:"using-the-pulsar-storm-adaptor"},"Using the Pulsar Storm Adaptor"),(0,o.kt)("p",null,"Include dependency for Pulsar Storm Adaptor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-storm</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n\n")),(0,o.kt)("h2",{id:"pulsar-spout"},"Pulsar Spout"),(0,o.kt)("p",null,"The Pulsar Spout allows for the data published on a topic to be consumed by a Storm topology. It emits a Storm tuple based on the message received and the ",(0,o.kt)("inlineCode",{parentName:"p"},"MessageToValuesMapper")," provided by the client."),(0,o.kt)("p",null,"The tuples that fail to be processed by the downstream bolts will be re-injected by the spout with an exponential backoff, within a configurable timeout (the default is 60 seconds) or a configurable number of retries, whichever comes first, after which it is acknowledged by the consumer. Here's an example construction of a spout:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nMessageToValuesMapper messageToValuesMapper = new MessageToValuesMapper() {\n\n    @Override\n    public Values toValues(Message msg) {\n        return new Values(new String(msg.getData()));\n    }\n\n    @Override\n    public void declareOutputFields(OutputFieldsDeclarer declarer) {\n        // declare the output fields\n        declarer.declare(new Fields("string"));\n    }\n};\n\n// Configure a Pulsar Spout\nPulsarSpoutConfiguration spoutConf = new PulsarSpoutConfiguration();\nspoutConf.setServiceUrl("pulsar://broker.messaging.usw.example.com:6650");\nspoutConf.setTopic("persistent://my-property/usw/my-ns/my-topic1");\nspoutConf.setSubscriptionName("my-subscriber-name1");\nspoutConf.setMessageToValuesMapper(messageToValuesMapper);\n\n// Create a Pulsar Spout\nPulsarSpout spout = new PulsarSpout(spoutConf);\n\n')),(0,o.kt)("p",null,"For a complete example, click ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-adapters/blob/master/pulsar-storm/src/test/java/org/apache/pulsar/storm/PulsarSpoutTest.java"},"here"),"."),(0,o.kt)("h2",{id:"pulsar-bolt"},"Pulsar Bolt"),(0,o.kt)("p",null,"The Pulsar bolt allows data in a Storm topology to be published on a topic. It publishes messages based on the Storm tuple received and the ",(0,o.kt)("inlineCode",{parentName:"p"},"TupleToMessageMapper")," provided by the client."),(0,o.kt)("p",null,"A partitioned topic can also be used to publish messages on different topics. In the implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"TupleToMessageMapper"),', a "key" will need to be provided in the message which will send the messages with the same key to the same topic. Here\'s an example bolt:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nTupleToMessageMapper tupleToMessageMapper = new TupleToMessageMapper() {\n\n    @Override\n    public TypedMessageBuilder<byte[]> toMessage(TypedMessageBuilder<byte[]> msgBuilder, Tuple tuple) {\n        String receivedMessage = tuple.getString(0);\n        // message processing\n        String processedMsg = receivedMessage + "-processed";\n        return msgBuilder.value(processedMsg.getBytes());\n    }\n\n    @Override\n    public void declareOutputFields(OutputFieldsDeclarer declarer) {\n        // declare the output fields\n    }\n};\n\n// Configure a Pulsar Bolt\nPulsarBoltConfiguration boltConf = new PulsarBoltConfiguration();\nboltConf.setServiceUrl("pulsar://broker.messaging.usw.example.com:6650");\nboltConf.setTopic("persistent://my-property/usw/my-ns/my-topic2");\nboltConf.setTupleToMessageMapper(tupleToMessageMapper);\n\n// Create a Pulsar Bolt\nPulsarBolt bolt = new PulsarBolt(boltConf);\n\n')))}m.isMDXComponent=!0}}]);