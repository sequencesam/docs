"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[5198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"FAQ"},i=void 0,l={unversionedId:"wallet/connectors/FAQ",id:"wallet/connectors/FAQ",title:"FAQ",description:"Below are frequently asked questions related to the integration of the Sequence wallet connector.",source:"@site/docs/03-wallet/05-connectors/06-FAQ.mdx",sourceDirName:"03-wallet/05-connectors",slug:"/wallet/connectors/FAQ",permalink:"/wallet/connectors/FAQ",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/05-connectors/06-FAQ.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"FAQ"},sidebar:"sidebar",previous:{title:"Web3 React V6",permalink:"/wallet/connectors/web3-react-v6"},next:{title:"Key Management",permalink:"/key-management"}},s={},c=[{value:"NextJs",id:"nextjs",level:2},{value:"Why does my wallet integration produce an error when used with next.js?",id:"why-does-my-wallet-integration-produce-an-error-when-used-with-nextjs",level:3},{value:"How do I use a wallet library and connector with next.js using the <code>pages</code> directory (all versions of NextJs)?",id:"how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-pages-directory-all-versions-of-nextjs",level:3},{value:"How do I use a wallet library and connector with next.js using the <code>app</code> directory (version 13 and above only)?",id:"how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-app-directory-version-13-and-above-only",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below are frequently asked questions related to the integration of the Sequence wallet connector."),(0,o.kt)("h2",{id:"nextjs"},"NextJs"),(0,o.kt)("h3",{id:"why-does-my-wallet-integration-produce-an-error-when-used-with-nextjs"},"Why does my wallet integration produce an error when used with next.js?"),(0,o.kt)("p",null,"Wallet libraries and connectors must be rendered in the browser. This is particularly true for Wagmi and Wagmi-based libraries. Attempts to render the page elsewhere, such as on backend server, can produce errors in some situations. Rendering on the server is therefore highly discouraged. "),(0,o.kt)("p",null,"The method for fixing this issue will depend on the folder structure. The ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," folder structure is available for all versions of NextJs, while the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," folder structure is only available for NextJs version 13 and above and may require being turned on through an experimental setting."),(0,o.kt)("p",null,"See using wallet libraries with ",(0,o.kt)("a",{parentName:"p",href:"/wallet/connectors/FAQ#how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-pages-directory-all-versions-of-nextjs"},"next.js pages directory")),(0,o.kt)("p",null,"See using wallet libraries with ",(0,o.kt)("a",{parentName:"p",href:"/wallet/connectors/FAQ#how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-app-directory-version-13-and-above-only"},"next.js app directory(NextJs 13+ feature)")),(0,o.kt)("h3",{id:"how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-pages-directory-all-versions-of-nextjs"},"How do I use a wallet library and connector with next.js using the ",(0,o.kt)("inlineCode",{parentName:"h3"},"pages")," directory (all versions of NextJs)?"),(0,o.kt)("p",null,"The content of the application which depends on Wagmi hooks must be mounted only once the application is rendered in the client. This is a limitation due to wagmi when used with NextJs, and all wagmi-based libraries will inherit this limitation. To do so we can use a ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook to wait before rendering the application."),(0,o.kt)("p",null,"In the example below, we wait until the app is mounted in the client before rendering the rest of the application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useIsMounted } from '../hooks'\nimport Home from '../components/Home'\n\nconst Page = () => {\n  const isMounted = useIsMounted()\n\n  if (!isMounted) return null\n  return (\n    <>\n      <Home />\n    </>\n  )\n}\n\nexport default Page\n")),(0,o.kt)("p",null,"A full code example of this setup working with the Wagmi library can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/demo-dapp-wagmi/tree/wagmi-0-12-x"},"on github"),".\nThe method described above is the one recommended by Wagmi and is demonstrated in their ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wagmi-dev/wagmi/blob/0.12.x/examples/_dev/src/pages/index.tsx"},"official example"),"."),(0,o.kt)("h3",{id:"how-do-i-use-a-wallet-library-and-connector-with-nextjs-using-the-app-directory-version-13-and-above-only"},"How do I use a wallet library and connector with next.js using the ",(0,o.kt)("inlineCode",{parentName:"h3"},"app")," directory (version 13 and above only)?"),(0,o.kt)("p",null,"NextJs 13 and above allows using a new folder structure in which the content is placed in an ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," directory. Enabling this feature may require explicitly indicating it with an experimental setting.\nWhen using such a folder structure, NextJs allows the declaration of Client Components which are components that will be rendered in the browser.\nA wrapper component containing the wallet library initialized with all the connectors must be declared with the ",(0,o.kt)("inlineCode",{parentName:"p"},'"use client"')," directive. The ",(0,o.kt)("inlineCode",{parentName:"p"},'"use client"')," directive is what will turn the wrapper component into a Client Component to be rendered in the browser."),(0,o.kt)("p",null,"In addition, there is a bug with wagmi and nextJs when using the autoConnect feature which causes"),(0,o.kt)("p",null,"In the example below, we declare a wrapper component with the ",(0,o.kt)("inlineCode",{parentName:"p"},'"use client"')," directive:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'"use client" // this directive informs next.js that the component is a Client Component to be rendered in the browser\n\nconst WagmiWrapper = ({ children }) => {\n  const wagmiClient = createClient({\n    autoConnect: true,\n    connectors,\n    provider,\n    webSocketProvider,\n  });\n\n\n  return (\n    <WagmiConfig client={wagmiClient}>\n      {children}\n    </WagmiConfig>\n  );\n}\n\nexport default WagmiWrapper\n')),(0,o.kt)("p",null,"This wrapper component can then be imported normally and wrap the rest of the application. The child components can be a combination of Client and Server components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// We import a custom wrapper component that initializes the wallet library and all its connectors\n// An example of the content of this wrapper component can be found here: https://github.com/0xsequence/demo-dapp-wagmi-next/blob/master/components/WagmiProvider.tsx\nimport WagmiWrapper from './WagmiWrapper'\n\n// We can then wrap our entire app with this browser's rendered component\nfunction MyApp({ Component, pageProps }: AppProps) {\n  return (\n    <WagmiWrapper>\n      <Component {...pageProps} />\n    </WagmiWrapper>\n  );\n}\n")),(0,o.kt)("p",null,"A full code example using Nextjs and the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," directory can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/demo-dapp-wagmi-next"},"on github"),".\nThe method described above is the one recommended by Wagmi through their NextJs example which can be consulted by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"npx create-wagmi")," and selecting the nextJs option."),(0,o.kt)("p",null,"Click ",(0,o.kt)("a",{parentName:"p",href:"https://beta.nextjs.org/docs/rendering/server-and-client-components#client-components"},"here")," for more information about Client Components."))}d.isMDXComponent=!0}}]);