(self.webpackChunk=self.webpackChunk||[]).push([[64961],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){return function(t){var n=p(t.components);return a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},679:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>c,default:()=>m});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o=["components"],s={id:"runtime-architecture",title:"Runtime Architecture",original_id:"runtime-architecture"},l=void 0,d={unversionedId:"runtime-architecture",id:"version-v10.1.1/runtime-architecture",isDocsHomePage:!1,title:"Runtime Architecture",description:"The Relay runtime is a full-featured GraphQL client that is designed for high performance even on low-end mobile devices and is capable of scaling to large, complex apps. The runtime API is not intended to be used directly in product code, but rather to provide a foundation for building higher-level product APIs such as React/Relay. This foundation includes:",source:"@site/versioned_docs/version-v10.1.1/PrinciplesAndArchitecture-Runtime.md",sourceDirName:".",slug:"/runtime-architecture",permalink:"/docs/v10.1.1/runtime-architecture",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.1.1/PrinciplesAndArchitecture-Runtime.md",tags:[],version:"v10.1.1",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1647985879,formattedLastUpdatedAt:"3/22/2022",frontMatter:{id:"runtime-architecture",title:"Runtime Architecture",original_id:"runtime-architecture"},sidebar:"version-v10.1.1/docs",previous:{title:"Compiler Architecture",permalink:"/docs/v10.1.1/compiler-architecture"},next:{title:"Videos",permalink:"/docs/v10.1.1/videos"}},c=[{value:"Comparison to Classic Relay",id:"comparison-to-classic-relay",children:[],level:2},{value:"Data Types",id:"data-types",children:[],level:2},{value:"Data Model",id:"data-model",children:[{value:"Store Operations",id:"store-operations",children:[],level:3},{value:"Example Data Flow: Fetching Query Data",id:"example-data-flow-fetching-query-data",children:[],level:3},{value:"Example Data Flow: Reading and Observing the Store",id:"example-data-flow-reading-and-observing-the-store",children:[],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The Relay runtime is a full-featured GraphQL client that is designed for high performance even on low-end mobile devices and is capable of scaling to large, complex apps. The runtime API is not intended to be used directly in product code, but rather to provide a foundation for building higher-level product APIs such as React/Relay. This foundation includes:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"A normalized, in-memory object graph/cache."),(0,i.mdx)("li",{parentName:"ul"},'An optimized "write" operation for updating the cache with the results of queries/mutations/subscriptions.'),(0,i.mdx)("li",{parentName:"ul"},"A mechanism for reading data from the cache and subscribing for updates when these results change due to a mutation, subscription update, etc."),(0,i.mdx)("li",{parentName:"ul"},"Garbage collection to evict entries from the cache when they can no longer be referenced by any view."),(0,i.mdx)("li",{parentName:"ul"},"A generic mechanism for intercepting data prior to publishing it to the cache and either synthesizing new data or merging new and existing data together (which among other things enables the creation of a variety of pagination schemes)."),(0,i.mdx)("li",{parentName:"ul"},"Mutations with optimistic updates and the ability to update the cache with arbitrary logic."),(0,i.mdx)("li",{parentName:"ul"},"Support for live queries where supported by the network/server."),(0,i.mdx)("li",{parentName:"ul"},"Core primitives to enable subscriptions."),(0,i.mdx)("li",{parentName:"ul"},"Core primitives for building offline/persisted caching.")),(0,i.mdx)("h2",{id:"comparison-to-classic-relay"},"Comparison to Classic Relay"),(0,i.mdx)("p",null,"For users of classic Relay, note that the runtime makes as few assumptions as possible about GraphQL. Compared to earlier versions of Relay there is no concept of routes, there are no limitations on mutation input arguments or side-effects, arbitrary root fields just work, etc. At present, the main restriction from classic Relay that remains is the use of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Node")," interface and ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," field for object identification. However there is no fundamental reason that this restriction can't be relaxed (there is a single place in the codebase where object identity is determined), and we welcome feedback from the community about ways to support customizable object identity without negatively impacting performance."),(0,i.mdx)("h2",{id:"data-types"},"Data Types"),(0,i.mdx)("p",null," (subsequent sections explain how these types are used in practice):"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"DataID")," (type): A globally unique or client-generated identifier for a record, stored as a string."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Record")," (type): A representation of a distinct data entity with an identity, type, and fields. Note that the actual runtime representation is opaque to the system: all accesses to ",(0,i.mdx)("inlineCode",{parentName:"li"},"Record")," objects (including record creation) is mediated through the ",(0,i.mdx)("inlineCode",{parentName:"li"},"RelayModernRecord")," module. This allows the representation itself to be changed in a single place (e.g. to use ",(0,i.mdx)("inlineCode",{parentName:"li"},"Map"),"s or a custom class). It is important that other code does not assume that ",(0,i.mdx)("inlineCode",{parentName:"li"},"Record"),"s will always be plain objects."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"RecordSource")," (type): A collection of records keyed by their data ID, used both to represent the cache and updates to it. For example the store's record cache is a ",(0,i.mdx)("inlineCode",{parentName:"li"},"RecordSource")," and the results of queries/mutations/subscriptions are normalized into ",(0,i.mdx)("inlineCode",{parentName:"li"},"RecordSource"),"s that are published to a store. Sources also define methods for asynchronously loading records in order to (eventually) support offline use-cases. Currently the only implementation of this interface is ",(0,i.mdx)("inlineCode",{parentName:"li"},"RelayInMemoryRecordSource"),"; future implementations may add support for loading records from disk."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Store")," (type): The source of truth for an instance of ",(0,i.mdx)("inlineCode",{parentName:"li"},"RelayRuntime"),", holding the canonical set of records in the form of a ",(0,i.mdx)("inlineCode",{parentName:"li"},"RecordSource")," (though this is not required). Currently the only implementation is ",(0,i.mdx)("inlineCode",{parentName:"li"},"RelayModernStore"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Network")," (type): Provides methods for fetching query data from and executing mutations against an external data source."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Environment")," (type): Represents an encapsulated environment combining a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Store")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"Network"),", providing a high-level API for interacting with both. This is the main public API of ",(0,i.mdx)("inlineCode",{parentName:"li"},"RelayRuntime"),".")),(0,i.mdx)("p",null,"Types for working with queries and their results include:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Selector"),' (type): A selector defines the starting point for a traversal into the graph for the purposes of targeting a subgraph, combining a GraphQL fragment, variables, and the Data ID for the root object from which traversal should progress. Intuitively, this "selects" a portion of the object graph.'),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Snapshot")," (type): The (immutable) results of executing a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Selector")," at a given point in time. This includes the selector itself, the results of executing it, and a list of the Data IDs from which data was retrieved (useful in determining when these results might change).")),(0,i.mdx)("h2",{id:"data-model"},"Data Model"),(0,i.mdx)("p",null,"Relay Runtime is designed for use with GraphQL schemas that describe ",(0,i.mdx)("strong",{parentName:"p"},"object graphs")," in which objects have a type, an identity, and a set of fields with values. Objects may reference each other, which is represented by fields whose values are one or more other objects in the graph ","[1]",". To distinguish from JavaScript ",(0,i.mdx)("inlineCode",{parentName:"p"},"Object"),"s, these units of data are referred to as ",(0,i.mdx)("inlineCode",{parentName:"p"},"Record"),"s. Relay represents both its internal cache as well as query/mutation/etc results as a mapping of ",(0,i.mdx)("strong",{parentName:"p"},"data ID"),"s to ",(0,i.mdx)("strong",{parentName:"p"},"records"),". The data ID is the unique (with respect to the cache) identifier for a record - it may be the value of an actual ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," field or based on the path to the record from the nearest object with an ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," (such path-based ids are called ",(0,i.mdx)("strong",{parentName:"p"},"client ids"),"). Each ",(0,i.mdx)("inlineCode",{parentName:"p"},"Record")," stores its data ID, type, and any fields that have been fetched. Multiple records are stored together as a ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecordSource"),": a mapping of data IDs to ",(0,i.mdx)("inlineCode",{parentName:"p"},"Record")," instances."),(0,i.mdx)("p",null,"For example, a user and their address might be represented as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"\n// GraphQL Fragment\nfragment on User {\n  id\n  name\n  address {\n    city\n  }\n}\n\n// Response\n{\n  id: '842472',\n  name: 'Joe',\n  address: {\n    city: 'Seattle',\n  }\n}\n\n// Normalized Representation\nRecordSource {\n  '842472': Record {\n    __id: '842472',\n    __typename: 'User', // the type is known statically from the fragment\n    id: '842472',\n    name: 'Joe',\n    address: {__ref: 'client:842472:address'}, // link to another record\n  },\n  'client:842472:address': Record {\n    // A client ID, derived from the path from parent & parent's ID\n    __id: 'client:842472:address',\n    __typename: 'Address',\n    city: 'Seattle',\n  }\n}\n")),(0,i.mdx)("p",null,"[1]"," Note that GraphQL itself does not impose this constraint, and Relay Runtime may also be used for schemas that do not conform to it. For example, both systems can be used to query a single denormalized table. However, many of the features that Relay Runtime provides, such as caching and normalization, work best when the data is represented as a normalized graph with stable identities for discrete pieces of information."),(0,i.mdx)("h3",{id:"store-operations"},"Store Operations"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Store")," is the source of truth for application data and provides the following core operations."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"lookup(selector: Selector): Snapshot"),": Reads the results of a selector from the store, returning the value given the data currently in the store.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable"),": Subscribe to changes to the results of a selector. The callback is called when data has been published to the store that would cause the results of the snapshot's selector to change.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"publish(source: RecordSource): void"),": Update the store with new information. All updates to the store are expressed in this form, including the results of queries/mutation/subscriptions as well as optimistic mutation updates. All of those operations internally create a new ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecordSource")," instance and ultimately publish it to the store. Note that ",(0,i.mdx)("inlineCode",{parentName:"p"},"publish()")," does ",(0,i.mdx)("em",{parentName:"p"},"not")," immediately update any ",(0,i.mdx)("inlineCode",{parentName:"p"},"subscribe()"),"-ers. Internally, the store compares the new ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecordSource")," with its internal source, updating it as necessary:"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Records that exist only in the published source are added to the store."),(0,i.mdx)("li",{parentName:"ul"},"Records that exist in both are merged into a new record (inputs unchanged), with the result added to the store."),(0,i.mdx)("li",{parentName:"ul"},"Records that are null in the published source are deleted (set to null) in the store."),(0,i.mdx)("li",{parentName:"ul"},"Records with a special sentinel value are removed from the store. This supports un-publishing optimistically created records."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"notify(): void"),": Calls any ",(0,i.mdx)("inlineCode",{parentName:"p"},"subscribe()"),"-ers whose results have changed due to intervening ",(0,i.mdx)("inlineCode",{parentName:"p"},"publish()"),"-es. Separating ",(0,i.mdx)("inlineCode",{parentName:"p"},"publish()")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"notify()")," allows for multiple payloads to be published before performing any downstream update logic (such as rendering).")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"retain(selector: Selector): Disposable"),": Ensure that all the records necessary to fulfill the given selector are retained in-memory. The records will not be eligible for garbage collection until the returned reference is disposed."))),(0,i.mdx)("h3",{id:"example-data-flow-fetching-query-data"},"Example Data Flow: Fetching Query Data"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"\n               \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n               \u2502         Query         \u2502\n               \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                           \u2502\n                           \u25bc\n                                             \u250c \u2500 \u2500 \u2500 \u2510\n                         fetch \u25c0\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6 Server\n                                             \u2514 \u2500 \u2500 \u2500 \u2518\n                           \u2502\n                     \u250c\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                     \u25bc             \u25bc\n               \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n               \u2502  Query   \u2502  \u2502 Response \u2502\n               \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                     \u2502             \u2502\n                     \u2514\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                           \u2502\n                           \u25bc\n                       normalize\n                           \u2502\n                           \u25bc\n               \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n               \u2502     RecordSource      \u2502\n               \u2502                       \u2502\n               \u2502\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2510\u2502\n               \u2502\u2502Record\u2502\u2502Record\u2502\u2502 ... \u2502\u2502\n               \u2502\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2518\u2502\n               \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"The query is fetched from the network."),(0,i.mdx)("li",{parentName:"ol"},"The query and response are traversed together, extracting the results into ",(0,i.mdx)("inlineCode",{parentName:"li"},"Record")," objects which are added to a fresh ",(0,i.mdx)("inlineCode",{parentName:"li"},"RecordSource"),".")),(0,i.mdx)("p",null,"This fresh ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecordSource")," would then be published to the store:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"\n                        publish\n                           \u2502\n                           \u25bc\n             \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n             \u2502           Store           \u2502\n             \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n             \u2502 \u2502     RecordSource      \u2502 \u2502\n             \u2502 \u2502                       \u2502 \u2502\n             \u2502 \u2502\u250c \u2500 \u2500 \u2500 \u250c \u2500 \u2500 \u2500 \u250c \u2500 \u2500 \u2510\u2502 \u2502\n             \u2502 \u2502 Record\u2502 Record\u2502  ...  \u2502 \u2502  <--- records are updated\n             \u2502 \u2502\u2514 \u2500 \u2500 \u2500 \u2514 \u2500 \u2500 \u2500 \u2514 \u2500 \u2500 \u2518\u2502 \u2502\n             \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n             \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n             \u2502 \u2502     Subscriptions     \u2502 \u2502\n             \u2502 \u2502                       \u2502 \u2502\n             \u2502 \u2502\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2510\u2502 \u2502\n             \u2502 \u2502\u2502 Sub. \u2502\u2502 Sub. \u2502\u2502 ... \u2502\u2502 \u2502 <--- subscriptions do not fire yet\n             \u2502 \u2502\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2518\u2502 \u2502\n             \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n             \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,i.mdx)("p",null,"Publishing the results updates the store but does ",(0,i.mdx)("em",{parentName:"p"},"not")," immediately notify any subscribers. This is accomplished by calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"notify()"),"..."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"\n                        notify\n                           \u2502\n                           \u25bc\n             \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n             \u2502           Store           \u2502\n             \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n             \u2502 \u2502     RecordSource      \u2502 \u2502\n             \u2502 \u2502                       \u2502 \u2502\n             \u2502 \u2502\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2510\u2502 \u2502\n             \u2502 \u2502\u2502Record\u2502\u2502Record\u2502\u2502 ... \u2502\u2502 \u2502\n             \u2502 \u2502\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2518\u2502 \u2502\n             \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n             \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n             \u2502 \u2502     Subscriptions     \u2502 \u2502\n             \u2502 \u2502                       \u2502 \u2502\n             \u2502 \u2502\u250c \u2500 \u2500 \u2500 \u250c \u2500 \u2500 \u2500 \u250c \u2500 \u2500 \u2510\u2502 \u2502\n             \u2502 \u2502  Sub. \u2502  Sub. \u2502  ...  \u2502 \u2502 <--- affected subscriptions fire\n             \u2502 \u2502\u2514 \u2500\u2502\u2500 \u2500 \u2514 \u2500\u2502\u2500 \u2500 \u2514 \u2500\u2502\u2500 \u2518\u2502 \u2502\n             \u2502 \u2514\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2518 \u2502\n             \u2514\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2518\n                   \u2502       \u2502       \u2502\n                   \u25bc       \u2502       \u2502\n               callback    \u2502       \u2502\n                           \u25bc       \u2502\n                       callback    \u2502\n                                   \u25bc\n                               callback\n\n")),(0,i.mdx)("p",null,"...which calls the callbacks for any ",(0,i.mdx)("inlineCode",{parentName:"p"},"subscribe()"),"-ers whose results have changed. Each subscription is checked as follows:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"First, the list of data IDs that have changed since the last ",(0,i.mdx)("inlineCode",{parentName:"li"},"notify()")," is compared against data IDs listed in the subscription's latest ",(0,i.mdx)("inlineCode",{parentName:"li"},"Snapshot"),". If there is no overlap, the subscription's results cannot possibly have changed (if you imagine the graph visually, there is no overlap between the part of the graph that changed and the part that is selected). In this case the subscription is ignored, otherwise processing continues."),(0,i.mdx)("li",{parentName:"ol"},"Second, any subscriptions that do have overlapping data IDs are re-read, and the new/previous results are compared. If the result has not changed, the subscription is ignored (this can occur if a field of a record changed that is not relevant to the subscription's selector), otherwise processing continues."),(0,i.mdx)("li",{parentName:"ol"},"Finally, subscriptions whose data actually changed are notified via their callback.")),(0,i.mdx)("h3",{id:"example-data-flow-reading-and-observing-the-store"},"Example Data Flow: Reading and Observing the Store"),(0,i.mdx)("p",null,"Products access the store primarily via ",(0,i.mdx)("inlineCode",{parentName:"p"},"lookup()")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"subscribe()"),". Lookup reads the initial results of a fragment, and subscribe observes that result for any changes. Note that the output of ",(0,i.mdx)("inlineCode",{parentName:"p"},"lookup()")," - a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Snapshot")," - is the input to ",(0,i.mdx)("inlineCode",{parentName:"p"},"subscribe()"),". This is important because the snapshot contains important information that can be used to optimize the subscription - if ",(0,i.mdx)("inlineCode",{parentName:"p"},"subscribe()")," accepted only a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Selector"),", it would have to re-read the results in order to know what to subscribe to, which is less efficient."),(0,i.mdx)("p",null,"Therefore a typical data flow is as follows - note that this flow is managed automatically by higher-level APIs such as React/Relay. First a component will lookup the results of a selector against a record source (e.g. the store's canonical source):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"\n    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n    \u2502     RecordSource      \u2502       \u2502              \u2502\n    \u2502                       \u2502       \u2502              \u2502\n    \u2502\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2510\u2502       \u2502   Selector   \u2502\n    \u2502\u2502Record\u2502\u2502Record\u2502\u2502 ... \u2502\u2502       \u2502              \u2502\n    \u2502\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2518\u2502       \u2502              \u2502\n    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                \u2502                           \u2502\n                \u2502                           \u2502\n                \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                               \u2502\n                               \u2502  lookup\n                               \u2502  (read)\n                               \u2502\n                               \u25bc\n                        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                        \u2502             \u2502\n                        \u2502  Snapshot   \u2502\n                        \u2502             \u2502\n                        \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                               \u2502\n                               \u2502  render, etc\n                               \u2502\n                               \u25bc\n\n")),(0,i.mdx)("p",null,"Next, it will ",(0,i.mdx)("inlineCode",{parentName:"p"},"subscribe()")," using this snapshot in order to be notified of any changes - see the above diagram for ",(0,i.mdx)("inlineCode",{parentName:"p"},"publish()")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"notify()"),"."))}m.isMDXComponent=!0}}]);