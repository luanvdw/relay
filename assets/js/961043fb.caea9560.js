(self.webpackChunk=self.webpackChunk||[]).push([[28639],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>p});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){return function(n){var t=d(n.components);return r.createElement(e,a({},n,{components:t}))}},d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),c=i,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||a;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=h;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var r=t(79973),i=t(67294),a=t(73727),s=t(52263),o=t(13919),l=t(10412),u=(0,i.createContext)({collectLink:function(){}}),p=t(44996),d=t(18780),c=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var n,t,m=e.isNavLink,h=e.to,f=e.href,y=e.activeClassName,v=e.isActive,g=e["data-noBrokenLinkCheck"],x=e.autoAddBaseUrl,b=void 0===x||x,w=(0,r.Z)(e,c),q=(0,s.default)().siteConfig,N=q.trailingSlash,O=q.baseUrl,C=(0,p.useBaseUrlUtils)().withBaseUrl,k=(0,i.useContext)(u),T=h||f,j=(0,o.Z)(T),E=null==T?void 0:T.replace("pathname://",""),P=void 0!==E?(t=E,b&&function(e){return e.startsWith("/")}(t)?C(t):t):void 0;P&&j&&(P=(0,d.applyTrailingSlash)(P,{trailingSlash:N,baseUrl:O}));var M=(0,i.useRef)(!1),S=m?a.OL:a.rU,_=l.default.canUseIntersectionObserver,I=(0,i.useRef)();(0,i.useEffect)((function(){return!_&&j&&null!=P&&window.docusaurus.prefetch(P),function(){_&&I.current&&I.current.disconnect()}}),[I,P,_,j]);var R=null!==(n=null==P?void 0:P.startsWith("#"))&&void 0!==n&&n,U=!P||!j||R;return P&&j&&!R&&!g&&k.collectLink(P),U?i.createElement("a",Object.assign({href:P},T&&!j&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(S,Object.assign({},w,{onMouseEnter:function(){M.current||null==P||(window.docusaurus.preload(P),M.current=!0)},innerRef:function(e){var n,t;_&&e&&j&&(n=e,t=function(){null!=P&&window.docusaurus.prefetch(P)},I.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.current.unobserve(n),I.current.disconnect(),t())}))})),I.current.observe(n))},to:P||""},m&&{isActive:v,activeClassName:y}))}},13919:(e,n,t)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>i})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>a,default:()=>s});var r=t(52263),i=t(13919);function a(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,s=a.forcePrependBaseUrl,o=void 0!==s&&s,l=a.absolute,u=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(o)return n+t;var p=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+p:p}(a,t,e,n)}}}function s(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var i,a=e.split(/[#?]/)[0],s="/"===a||a===r?a:(i=a,t?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,s)}},18780:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var i=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>m});var r=t(36742),i=t(44256),a=t(67294);function s(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var l=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:s},"Filing a task"))},p=function(){return a.createElement("p",null,"Help us make the site even better by"," ",a.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return a.createElement(o,null,a.createElement(u,null),a.createElement(l,null),a.createElement(p,null))},c=function(){return a.createElement(o,null,a.createElement(l,null),a.createElement(p,null))};const m=function(){return(0,i.fbContent)({internal:a.createElement(d,null),external:a.createElement(c,null)})}},24716:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>u,contentTitle:()=>p,metadata:()=>d,toc:()=>c,default:()=>h});var r=t(74034),i=t(79973),a=(t(67294),t(3905)),s=t(68629),o=t(44256),l=["components"],u={id:"persisted-queries",title:"Persisted Queries",slug:"/guides/persisted-queries/",description:"Relay guide to persisted queries",keywords:["persisted"]},p=void 0,d={unversionedId:"guides/persisted-queries",id:"version-v13.0.0/guides/persisted-queries",isDocsHomePage:!1,title:"Persisted Queries",description:"Relay guide to persisted queries",source:"@site/versioned_docs/version-v13.0.0/guides/persisted-queries.md",sourceDirName:"guides",slug:"/guides/persisted-queries/",permalink:"/docs/guides/persisted-queries/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/guides/persisted-queries.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1650651429,formattedLastUpdatedAt:"4/22/2022",frontMatter:{id:"persisted-queries",title:"Persisted Queries",slug:"/guides/persisted-queries/",description:"Relay guide to persisted queries",keywords:["persisted"]},sidebar:"version-v13.0.0/docs",previous:{title:"Type Emission",permalink:"/docs/guides/type-emission/"},next:{title:"Network Layer",permalink:"/docs/guides/network-layer/"}},c=[{value:"Usage on the client",id:"usage-on-the-client",children:[{value:"The <code>persistConfig</code> option",id:"the-persistconfig-option",children:[],level:3},{value:"Example implemetation of <code>relayLocalPersisting.js</code>",id:"example-implemetation-of-relaylocalpersistingjs",children:[],level:3},{value:"Network layer changes",id:"network-layer-changes",children:[],level:3}],level:2},{value:"Executing Persisted Queries on the Server",id:"executing-persisted-queries-on-the-server",children:[{value:"Compile time push",id:"compile-time-push",children:[],level:3},{value:"Run time push",id:"run-time-push",children:[],level:3},{value:"Simple server example",id:"simple-server-example",children:[],level:3}],level:2},{value:"Using <code>persistConfig</code> and <code>--watch</code>",id:"using-persistconfig-and---watch",children:[],level:2}],m={toc:c};function h(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"Persistence is handled by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"relay")," command for you. You likely do not need to worry about the contents of this guide."))),(0,a.mdx)("p",null,"The relay compiler supports persisted queries. This is useful because:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"The client operation text becomes just an md5 hash which is usually shorter than the real\nquery string. This saves upload bytes from the client to the server.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"The server can now whitelist queries which improves security by restricting the operations\nthat can be executed by a client."))),(0,a.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,a.mdx)("h2",{id:"usage-on-the-client"},"Usage on the client"),(0,a.mdx)("h3",{id:"the-persistconfig-option"},"The ",(0,a.mdx)("inlineCode",{parentName:"h3"},"persistConfig")," option"),(0,a.mdx)("p",null,"In your relay configiration section in ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json"),' you\'ll need specify\n"persistConfig".'),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'"scripts": {\n  "relay": "relay-compiler",\n  "relay-persisting": "node relayLocalPersisting.js"\n},\n"relay": {\n  "src": "./src",\n  "schema": "./schema.graphql",\n  "persistConfig": {\n    "url": "http://localhost:2999",\n    "params": {}\n  }\n}\n')),(0,a.mdx)("p",null,"Specifiying ",(0,a.mdx)("inlineCode",{parentName:"p"},"persistConfig")," in the config will do the following:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"It converts all query and mutation operation texts to md5 hashes."),(0,a.mdx)("p",{parentName:"li"},"For example without ",(0,a.mdx)("inlineCode",{parentName:"p"},"persistConfig"),", a generated ",(0,a.mdx)("inlineCode",{parentName:"p"},"ConcreteRequest")," might look\nlike below:"),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'const node/*: ConcreteRequest*/ = (function(){\n//... excluded for brevity\nreturn {\n  "kind": "Request",\n  "operationKind": "query",\n  "name": "TodoItemRefetchQuery",\n  "id": null, // NOTE: id is null\n  "text": "query TodoItemRefetchQuery(\\n  $itemID: ID!\\n) {\\n  node(id: $itemID) {\\n    ...TodoItem_item_2FOrhs\\n  }\\n}\\n\\nfragment TodoItem_item_2FOrhs on Todo {\\n    text\\n    isComplete\\n}\\n",\n  //... excluded for brevity\n};\n})();\n\n')),(0,a.mdx)("p",{parentName:"li"},"With ",(0,a.mdx)("inlineCode",{parentName:"p"},"persistConfig")," this becomes:"),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'const node/*: ConcreteRequest*/ = (function(){\n//... excluded for brevity\nreturn {\n  "kind": "Request",\n  "operationKind": "query",\n  "name": "TodoItemRefetchQuery",\n  "id": "3be4abb81fa595e25eb725b2c6a87508", // NOTE: id is now an md5 hash\n  // of the query text\n  "text": null, // NOTE: text is null now\n  //... excluded for brevity\n};\n})();\n\n'))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"It will send an HTTP POST request with a ",(0,a.mdx)("inlineCode",{parentName:"p"},"text")," parameter to the\nspecified ",(0,a.mdx)("inlineCode",{parentName:"p"},"url"),".\nYou can also add additional request body parameters via the ",(0,a.mdx)("inlineCode",{parentName:"p"},"params")," option."))),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'"scripts": {\n  "relay": "relay-compiler"\n},\n"relay": {\n  "src": "./src",\n  "schema": "./schema.graphql",\n  "persistConfig": {\n    "url": "http://localhost:2999",\n    "params": {}\n  }\n}\n')),(0,a.mdx)("h3",{id:"example-implemetation-of-relaylocalpersistingjs"},"Example implemetation of ",(0,a.mdx)("inlineCode",{parentName:"h3"},"relayLocalPersisting.js")),(0,a.mdx)("p",null,"Here's an example of a simple persist server that will save query text to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"queryMap.json")," file."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"const http = require('http');\nconst crypto = require('crypto');\nconst fs = require('fs');\n\nfunction md5(input) {\n  return crypto.createHash('md5').update(input).digest('hex');\n}\n\nclass QueryMap {\n  constructor(fileMapName) {\n    this._fileMapName = fileMapName;\n    this._queryMap = new Map(JSON.parse(fs.readFileSync(this._fileMapName)));\n  }\n\n  _flush() {\n    const data = JSON.stringify(Array.from(this._queryMap.entries()));\n    fs.writeFileSync(this._fileMapName, data);\n  }\n\n  saveQuery(text) {\n    const id = md5(text);\n    this._queryMap.set(id, text);\n    this._flush();\n    return id;\n  }\n}\n\nconst queryMap = new QueryMap('./queryMap.json');\n\nasync function requestListener(req, res) {\n  if (req.method === 'POST') {\n    const buffers = [];\n    for await (const chunk of req) {\n      buffers.push(chunk);\n    }\n    const data = Buffer.concat(buffers).toString();\n    res.writeHead(200, {\n      'Content-Type': 'application/json'\n    });\n    try {\n      if (req.headers['content-type'] !== 'application/x-www-form-urlencoded') {\n        throw new Error(\n          'Only \"application/x-www-form-urlencoded\" requests are supported.'\n        );\n      }\n      const text = new URLSearchParams(data).get('text');\n      if (text == null) {\n        throw new Error('Expected to have `text` parameter in the POST.');\n      }\n      const id = queryMap.saveQuery(text);\n      res.end(JSON.stringify({\"id\": id}));\n    } catch (e) {\n      console.error(e);\n      res.writeHead(400);\n      res.end(`Unable to save query: ${e}.`);\n    }\n  } else {\n    res.writeHead(400);\n    res.end(\"Request is not supported.\")\n  }\n}\n\nconst PORT = 2999;\nconst server = http.createServer(requestListener);\nserver.listen(PORT);\n\nconsole.log(`Relay persisting server listening on ${PORT} port.`);\n")),(0,a.mdx)("p",null,"The example above writes the complete query map file to ",(0,a.mdx)("inlineCode",{parentName:"p"},"./queryMap.json"),".\nTo use this, you'll need to update ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'"scripts": {\n  "persist-server": "node ./relayLocalPersisting.js",\n  "relay": "relay-compiler"\n}\n'))),(0,a.mdx)("h3",{id:"network-layer-changes"},"Network layer changes"),(0,a.mdx)("p",null,"You'll need to modify your network layer fetch implementation to pass an ID parameter in the POST body (e.g., ",(0,a.mdx)("inlineCode",{parentName:"p"},"doc_id"),") instead of a query parameter:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"function fetchQuery(operation, variables) {\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      'content-type': 'application/json'\n    },\n    body: JSON.stringify({\n      doc_id: operation.id, // NOTE: pass md5 hash to the server\n      // query: operation.text, // this is now obsolete because text is null\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  });\n}\n")),(0,a.mdx)("h2",{id:"executing-persisted-queries-on-the-server"},"Executing Persisted Queries on the Server"),(0,a.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"Your server should then look up the query referenced by ",(0,a.mdx)("inlineCode",{parentName:"p"},"doc_id")," when responding to this request.")),(0,a.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,a.mdx)("p",null,"To execute client requests that send persisted queries instead of query text, your server will need to be able\nto lookup the query text corresponding to each ID. Typically this will involve saving the output of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"queryMap.json")," JSON file to a database or some other storage mechanism, and retrieving the corresponding text for the ID specified by a client."),(0,a.mdx)("p",null,"Additionally, your implementation of ",(0,a.mdx)("inlineCode",{parentName:"p"},"relayLocalPersisting.js")," could directly save queries to the database or other storage."),(0,a.mdx)("p",null,"For universal applications where the client and server code are in one project, this is not an issue since you can place\nthe query map file in a common location accessible to both the client and the server."),(0,a.mdx)("h3",{id:"compile-time-push"},"Compile time push"),(0,a.mdx)("p",null,"For applications where the client and server projects are separate, one option is to have an additional npm run script\nto push the query map at compile time to a location accessible by your server:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "push-queries": "node ./pushQueries.js",\n  "persist-server": "node ./relayLocalPersisting.js",\n  "relay": "relay-compiler && npm run push-queries"\n}\n')),(0,a.mdx)("p",null,"Some possibilities of what you can do in ",(0,a.mdx)("inlineCode",{parentName:"p"},"./pushQueries.js"),":"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"git push")," to your server repo.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Save the query maps to a database."))),(0,a.mdx)("h3",{id:"run-time-push"},"Run time push"),(0,a.mdx)("p",null,"A second more complex option is to push your query maps to the server at runtime, without the server knowing the query IDs at the start.\nThe client optimistically sends a query ID to the server, which does not have the query map. The server then in turn requests\nfor the full query text from the client so it can cache the query map for subsequent requests. This is a more complex approach\nrequiring the client and server to interact to exchange the query maps."),(0,a.mdx)("h3",{id:"simple-server-example"},"Simple server example"),(0,a.mdx)("p",null,"Once your server has access to the query map, you can perform the mapping. The solution varies depending on the server and\ndatabase technologies you use, so we'll just cover the most common and basic example here."),(0,a.mdx)("p",null,"If you use ",(0,a.mdx)("inlineCode",{parentName:"p"},"express-graphql")," and have access to the query map file, you can import it directly and\nperform the matching using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"persistedQueries")," middleware from ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/kyarik/express-graphql-persisted-queries"},"express-graphql-persisted-queries"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"import express from 'express';\nimport {graphqlHTTP} from 'express-graphql';\nimport {persistedQueries} from 'express-graphql-persisted-queries';\nimport queryMap from './path/to/queryMap.json';\n\nconst app = express();\n\napp.use(\n  '/graphql',\n  persistedQueries({\n    queryMap,\n    queryIdKey: 'doc_id',\n  }),\n  graphqlHTTP({schema}),\n);\n")),(0,a.mdx)("h2",{id:"using-persistconfig-and---watch"},"Using ",(0,a.mdx)("inlineCode",{parentName:"h2"},"persistConfig")," and ",(0,a.mdx)("inlineCode",{parentName:"h2"},"--watch")),(0,a.mdx)("p",null,"It is possible to continuously generate the query map files by using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"persistConfig")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"--watch")," options simultaneously.\nThis only makes sense for universal applications i.e. if your client and server code are in a single project\nand you run them both together on localhost during development. Furthermore, in order for the server to pick up changes\nto the ",(0,a.mdx)("inlineCode",{parentName:"p"},"queryMap.json"),", you'll need to have server side hot-reloading set up. The details on how to set this up\nare out of the scope of this document.")),(0,a.mdx)(s.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);