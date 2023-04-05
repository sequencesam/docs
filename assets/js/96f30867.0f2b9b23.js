"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[6306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(e){let{items:t,leftHeading:n,rightHeading:a,renderLeftItem:o,renderRightItem:i}=e;return r.createElement("table",null,r.createElement("thead",null,r.createElement("th",{align:"left"},n),r.createElement("th",{align:"left"},a)),r.createElement("tbody",null,t.map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",{align:"left"},o(e)),r.createElement("td",{align:"left"},i(e)))}))))}},6500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>k});var r=n(7462),a=n(7294),o=n(3905),i=n(215);function l(e){let{items:t}=e;return a.createElement(i.Z,{items:t,leftHeading:"Network",rightHeading:"Indexer Endpoint",renderLeftItem:e=>a.createElement("div",{className:"flex items-center"},a.createElement("img",{src:e.logo,className:"w-6 mr-2"}),a.createElement("span",null,e.network)),renderRightItem:e=>a.createElement("span",null,e.endpoint)})}const s={slug:"/indexer"},p="Indexer",c={unversionedId:"indexer/overview",id:"indexer/overview",title:"Indexer",description:"The Sequence Indexer is a modular web3 service that makes it easy to query blockchain token",source:"@site/docs/04-indexer/01-overview.mdx",sourceDirName:"04-indexer",slug:"/indexer",permalink:"/indexer",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/04-indexer/01-overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/indexer"},sidebar:"sidebar",previous:{title:"Contract Audits",permalink:"/wallet/wallet-contracts/contract-audits"},next:{title:"Installation",permalink:"/indexer/installation"}},u={},d=[{network:"Ethereum",logo:"/img/networks/1.png",endpoint:"https://mainnet-indexer.sequence.app"},{network:"Polygon",logo:"/img/networks/137.png",endpoint:"https://polygon-indexer.sequence.app"},{network:"Polygon zkEVM",logo:"/img/networks/1101.png",endpoint:"https://polygon-zkevm-indexer.sequence.app"},{network:"Arbitrum One",logo:"/img/networks/42161.png",endpoint:"https://arbitrum-indexer.sequence.app"},{network:"Arbitrum Nova",logo:"/img/networks/42170.png",endpoint:"https://arbitrum-nova-indexer.sequence.app"},{network:"Optimism",logo:"/img/networks/10.png",endpoint:"https://optimism-indexer.sequence.app"},{network:"BSC",logo:"/img/networks/56.png",endpoint:"https://bsc-indexer.sequence.app"},{network:"Avalanche",logo:"/img/networks/43114.png",endpoint:"https://avalanche-indexer.sequence.app"},{network:"Gnosis",logo:"/img/networks/64.png",endpoint:"https://gnosis-indexer.sequence.app"}],m=[{network:"Goerli",logo:"/img/networks/1.png",endpoint:"https://goerli-indexer.sequence.app"},{network:"Mumbai",logo:"/img/networks/137.png",endpoint:"https://mumbai-indexer.sequence.app"},{network:"BSC Testnet",logo:"/img/networks/56.png",endpoint:"https://bsc-testnet-indexer.sequence.app"}],k=[{value:"Supported Networks &amp; Endpoints",id:"supported-networks--endpoints",level:2},{value:"Getting Started",id:"getting-started",level:2}],g={toc:k};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"indexer"},"Indexer"),(0,o.kt)("p",null,"The Sequence Indexer is a modular web3 service that makes it easy to query blockchain token\nand NFT data from Ethereum-compatible networks. The Indexer ",(0,o.kt)("strong",{parentName:"p"},"automatically indexes every\nERC20, ERC721 and ERC1155 token")," from Ethereum-compatible chains."),(0,o.kt)("p",null,"In fact, the Sequence Wallet uses the Indexer behind the scenes so it can seamlessly\nrender all token information in any wallet. But of course, the Indexer is a modular piece\nof infrastructure, and you may use it directly from your dapp, game, or even from\na server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Features:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Super-fast API to query all token balances, history, metadata and NFTs with multi-chain support"),(0,o.kt)("li",{parentName:"ul"},"Real-time indexing of ERC20, ERC721 and ERC1155 transactions across EVM-compatible chains"),(0,o.kt)("li",{parentName:"ul"},"Automatically detects all tokens on the chain, without the need for a contract registry"),(0,o.kt)("li",{parentName:"ul"},"Resilient to node failures and chain re-organizations"),(0,o.kt)("li",{parentName:"ul"},"Easily listen for specific events and transactions on-chain accurately with a simple API"),(0,o.kt)("li",{parentName:"ul"},"Built-in token / nft metadata support to easily render tokens in your apps / games"),(0,o.kt)("li",{parentName:"ul"},"High uptime and availability")),(0,o.kt)("h2",{id:"supported-networks--endpoints"},"Supported Networks & Endpoints"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Status:")," ",(0,o.kt)("a",{parentName:"p",href:"https://status.sequence.info"},"https://status.sequence.info")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mainnet networks:")),(0,o.kt)(l,{items:d,mdxType:"IndexerTable"}),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Test networks:")),(0,o.kt)(l,{items:m,mdxType:"IndexerTable"}),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Here are a few example queries you can make to a blockchain from your dapp, game, or wallet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/indexer/fetch-tokens"},"Fetch all tokens & NFTS in any wallet including all metadata")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/indexer/transaction-history"},"Fetch the transaction history for any wallet address")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/indexer/unique-tokens"},"Fetch all unique tokens in a particular ERC20/721/1155 contract, including total supplies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/indexer/unique-tokens"},"What is the total token supply of an ERC20 token? What is the total token supply of\nall the ERC1155 tokens in a particular contract?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/indexer/transation-history-token-contract"},"Fetch the transaction history for any token contract address"))))}h.isMDXComponent=!0}}]);