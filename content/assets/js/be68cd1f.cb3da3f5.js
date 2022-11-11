"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=u(n),h=r,d=k["".concat(s,".").concat(h)]||k[h]||p[h]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),l=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function k(e){var t;const{lazy:n,block:i,defaultValue:k,values:h,groupId:d,className:m}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=h??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,l.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===k?k:k??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,r.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=d){const e=v[d];null!=e&&e!==w&&b.some((t=>t.value===e))&&T(e)}const J=e=>{const t=e.currentTarget,n=C.indexOf(t),a=b[n].value;a!==w&&(P(t),T(a),null!=d&&N(d,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":J(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},m)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:x,onClick:J},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,i.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},41772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={id:"security-jwt",title:"Client authentication using tokens based on JSON Web Tokens",sidebar_label:"Authentication using JWT",original_id:"security-jwt"},s=void 0,u={unversionedId:"security-jwt",id:"version-2.9.x/security-jwt",title:"Client authentication using tokens based on JSON Web Tokens",description:"Token authentication overview",source:"@site/versioned_docs/version-2.9.x/security-jwt.md",sourceDirName:".",slug:"/security-jwt",permalink:"/docs/2.9.x/security-jwt",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/security-jwt.md",tags:[],version:"2.9.x",frontMatter:{id:"security-jwt",title:"Client authentication using tokens based on JSON Web Tokens",sidebar_label:"Authentication using JWT",original_id:"security-jwt"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"Using TLS with KeyStore configure",permalink:"/docs/2.9.x/security-tls-keystore"},next:{title:"Authentication using Athenz",permalink:"/docs/2.9.x/security-athenz"}},c={},p=[{value:"Token authentication overview",id:"token-authentication-overview",level:2},{value:"CLI Tools",id:"cli-tools",level:3},{value:"Pulsar client",id:"pulsar-client",level:3},{value:"Enable token authentication",id:"enable-token-authentication",level:2},{value:"Create a secret key",id:"create-a-secret-key",level:3},{value:"Create a key pair",id:"create-a-key-pair",level:3},{value:"Generate tokens",id:"generate-tokens",level:3},{value:"Authorization",id:"authorization",level:3},{value:"Enable token authentication on Brokers",id:"enable-token-authentication-on-brokers",level:3},{value:"Enable token authentication on Proxies",id:"enable-token-authentication-on-proxies",level:3}],k={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"token-authentication-overview"},"Token authentication overview"),(0,r.kt)("p",null,"Pulsar supports authenticating clients using security tokens that are based on ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/introduction/"},"JSON Web Tokens")," (",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7519"},"RFC-7519"),")."),(0,r.kt)("p",null,'You can use tokens to identify a Pulsar client and associate with some "principal" (or "role") that\nis permitted to do some actions (eg: publish to a topic or consume from a topic).'),(0,r.kt)("p",null,"A user typically gets a token string from the administrator (or some automated service)."),(0,r.kt)("p",null,"The compact representation of a signed JWT is a string that looks like as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\neyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n\n")),(0,r.kt)("p",null,'Application specifies the token when you create the client instance. An alternative is to pass a "token supplier" (a function that returns the token when the client library needs one).'),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"always-use-tls-transport-encryption"},"Always use TLS transport encryption"),(0,r.kt)("p",{parentName:"blockquote"},"Sending a token is equivalent to sending a password over the wire. You had better use TLS encryption all the time when you connect to the Pulsar service. See\n",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/security-tls-transport"},"Transport Encryption using TLS")," for more details.")),(0,r.kt)("h3",{id:"cli-tools"},"CLI Tools"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-cli-tools"},"Command-line tools")," like ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-pulsar-admin"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-cli-tools#pulsar-perf"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-cli-tools#pulsar-client"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,r.kt)("p",null,"You need to add the following parameters to that file to use the token authentication with CLI tools of Pulsar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\nwebServiceUrl=http://broker.example.com:8080/\nbrokerServiceUrl=pulsar://broker.example.com:6650/\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nauthParams=token:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n\n")),(0,r.kt)("p",null,"The token string can also be read from a file, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nauthParams=file:///path/to/token/file\n\n")),(0,r.kt)("h3",{id:"pulsar-client"},"Pulsar client"),(0,r.kt)("p",null,"You can use tokens to authenticate the following Pulsar clients."),(0,r.kt)(o.Z,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Go",value:"Go"},{label:"C++",value:"C++"},{label:"C#",value:"C#"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\uff09\n    .build();\n\n')),(0,r.kt)("p",null,"Similarly, you can also pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"Supplier"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token(() -> {\n            // Read token from custom source\n            return readToken();\n        }))\n    .build();\n\n'))),(0,r.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar import Client, AuthenticationToken\n\nclient = Client('pulsar://broker.example.com:6650/'\n                authentication=AuthenticationToken('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY'))\n\n")),(0,r.kt)("p",null,"Alternatively, you can also pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"Supplier"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\ndef read_token():\n    with open('/path/to/token.txt') as tf:\n        return tf.read().strip()\n\nclient = Client('pulsar://broker.example.com:6650/'\n                authentication=AuthenticationToken(read_token))\n\n"))),(0,r.kt)(i.Z,{value:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'\nclient, err := NewClient(ClientOptions{\n    URL:            "pulsar://localhost:6650",\n    Authentication: NewAuthenticationToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"),\n})\n\n')),(0,r.kt)("p",null,"Similarly, you can also pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"Supplier"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'\nclient, err := NewClient(ClientOptions{\n    URL:            "pulsar://localhost:6650",\n    Authentication: NewAuthenticationTokenSupplier(func () string {\n        // Read token from custom source\n        return readToken()\n    }),\n})\n\n'))),(0,r.kt)(i.Z,{value:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'\n#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setAuth(pulsar::AuthToken::createWithToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"));\n\npulsar::Client client("pulsar://broker.example.com:6650/", config);\n\n'))),(0,r.kt)(i.Z,{value:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'\nvar client = PulsarClient.Builder()\n                         .AuthenticateUsingToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\n                         .Build();\n\n')))),(0,r.kt)("h2",{id:"enable-token-authentication"},"Enable token authentication"),(0,r.kt)("p",null,"On how to enable token authentication on a Pulsar cluster, you can refer to the guide below."),(0,r.kt)("p",null,"JWT supports two different kinds of keys in order to generate and validate the tokens:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Symmetric :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can use a single ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Secret"))," key to generate and validate tokens."))),(0,r.kt)("li",{parentName:"ul"},"Asymmetric: A pair of keys consists of the Private key and the Public key.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can use ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Private"))," key to generate tokens."),(0,r.kt)("li",{parentName:"ul"},"You can use ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Public"))," key to validate tokens.")))),(0,r.kt)("h3",{id:"create-a-secret-key"},"Create a secret key"),(0,r.kt)("p",null,"When you use a secret key, the administrator creates the key and uses the key to generate the client tokens. You can also configure this key to brokers in order to validate the clients."),(0,r.kt)("p",null,"Output file is generated in the root of your Pulsar installation directory. You can also provide absolute path for the output file using the command below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create-secret-key --output my-secret.key\n\n")),(0,r.kt)("p",null,"Enter this command to generate base64 encoded private key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create-secret-key --output  /opt/my-secret.key --base64\n\n")),(0,r.kt)("h3",{id:"create-a-key-pair"},"Create a key pair"),(0,r.kt)("p",null,"With Public and Private keys, you need to create a pair of keys. Pulsar supports all algorithms that the Java JWT library (shown ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jwtk/jjwt#signature-algorithms-keys"},"here"),") supports."),(0,r.kt)("p",null,"Output file is generated in the root of your Pulsar installation directory. You can also provide absolute path for the output file using the command below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create-key-pair --output-private-key my-private.key --output-public-key my-public.key\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Store ",(0,r.kt)("inlineCode",{parentName:"li"},"my-private.key")," in a safe location and only administrator can use ",(0,r.kt)("inlineCode",{parentName:"li"},"my-private.key")," to generate new tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"my-public.key")," is distributed to all Pulsar brokers. You can publicly share this file without any security concern.")),(0,r.kt)("h3",{id:"generate-tokens"},"Generate tokens"),(0,r.kt)("p",null,'A token is the credential associated with a user. The association is done through the "principal" or "role". In the case of JWT tokens, this field is typically referred as ',(0,r.kt)("strong",{parentName:"p"},"subject"),", though they are exactly the same concept."),(0,r.kt)("p",null,"Then, you need to use this command to require the generated token to have a ",(0,r.kt)("strong",{parentName:"p"},"subject")," field set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user\n\n")),(0,r.kt)("p",null,"This command prints the token string on stdout."),(0,r.kt)("p",null,'Similarly, you can create a token by passing the "private" key using the command below:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create --private-key file:///path/to/my-private.key \\\n            --subject test-user\n\n")),(0,r.kt)("p",null,"Finally, you can enter the following command to create a token with a pre-defined TTL. And then the token is automatically invalidated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user \\\n            --expiry-time 1y\n\n")),(0,r.kt)("h3",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"The token itself does not have any permission associated. The authorization engine determines whether the token should have permissions or not. Once you have created the token, you can grant permission for this token to do certain actions. The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces grant-permission my-tenant/my-namespace \\\n            --role test-user \\\n            --actions produce,consume\n\n")),(0,r.kt)("h3",{id:"enable-token-authentication-on-brokers"},"Enable token authentication on Brokers"),(0,r.kt)("p",null,"To configure brokers to authenticate clients, add the following parameters to ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'\n# Configuration to enable authentication and authorization\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, either in same or other clusters\nbrokerClientTlsEnabled=true\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nbrokerClientAuthenticationParameters={"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0LXVzZXIifQ.9OHgE9ZUDeBTZs7nSMEFIuGNEX18FLR3qvy8mqxSxXw"}\n# Either configure the token string or specify to read it from a file. The following three available formats are all valid:\n# brokerClientAuthenticationParameters={"token":"your-token-string"}\n# brokerClientAuthenticationParameters=token:your-token-string\n# brokerClientAuthenticationParameters=file:///path/to/token\nbrokerClientTrustCertsFilePath=/path/my-ca/certs/ca.cert.pem\n\n# If this flag is set then the broker authenticates the original Auth data\n# else it just accepts the originalPrincipal and authorizes it (if required).\nauthenticateOriginalAuthData=true\n\n# If using secret key (Note: key files must be DER-encoded)\ntokenSecretKey=file:///path/to/secret.key\n# The key can also be passed inline:\n# tokenSecretKey=data:;base64,FLFyW0oLJ2Fi22KKCm21J18mbAdztfSHN/lAT5ucEKU=\n\n# If using public/private (Note: key files must be DER-encoded)\n# tokenPublicKey=file:///path/to/public.key\n\n')),(0,r.kt)("h3",{id:"enable-token-authentication-on-proxies"},"Enable token authentication on Proxies"),(0,r.kt)("p",null,"To configure proxies to authenticate clients, add the following parameters to ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.conf"),":"),(0,r.kt)("p",null,"The proxy uses its own token when connecting to brokers. You need to configure the role token for this key pair in the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxyRoles")," of the brokers. For more details, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/security-authorization"},"authorization guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'\n# For clients connecting to the proxy\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\ntokenSecretKey=file:///path/to/secret.key\n\n# For the proxy to connect to brokers\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nbrokerClientAuthenticationParameters={"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0LXVzZXIifQ.9OHgE9ZUDeBTZs7nSMEFIuGNEX18FLR3qvy8mqxSxXw"}\n# Either configure the token string or specify to read it from a file. The following three available formats are all valid:\n# brokerClientAuthenticationParameters={"token":"your-token-string"}\n# brokerClientAuthenticationParameters=token:your-token-string\n# brokerClientAuthenticationParameters=file:///path/to/token\n\n# Whether client authorization credentials are forwarded to the broker for re-authorization.\n# Authentication must be enabled via authenticationEnabled=true for this to take effect.\nforwardAuthorizationCredentials=true\n\n')))}h.isMDXComponent=!0}}]);