"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[3043],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),h=a,b=d["".concat(c,".").concat(h)]||d[h]||p[h]||s;return t?o.createElement(b,r(r({ref:n},l),{},{components:t})):o.createElement(b,r({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<s;u++)r[u]=t[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3294:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var o=t(7462),a=t(3366),s=(t(7294),t(3905)),r=["components"],i={title:"Cookbook",slug:"/extension/cookbook"},c=void 0,u={unversionedId:"extension/cookbook",id:"extension/cookbook",isDocsHomePage:!1,title:"Cookbook",description:"A set of code snippets ready to be used.",source:"@site/docs/extension/cookbook.md",sourceDirName:"extension",slug:"/extension/cookbook",permalink:"/docs/extension/cookbook",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/extension/cookbook.md",tags:[],version:"current",frontMatter:{title:"Cookbook",slug:"/extension/cookbook"},sidebar:"reference",previous:{title:"Usage",permalink:"/docs/extension/usage"},next:{title:"FAQ",permalink:"/docs/extension/FAQ"}},l=[{value:"Get all extensions accounts",id:"get-all-extensions-accounts",children:[],level:2},{value:"Sign a message",id:"sign-a-message",children:[],level:2},{value:"Sign and send a transaction",id:"sign-and-send-a-transaction",children:[],level:2},{value:"Subscription to extensions&#39; accounts",id:"subscription-to-extensions-accounts",children:[],level:2}],p={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A set of code snippets ready to be used."),(0,s.kt)("h2",{id:"get-all-extensions-accounts"},"Get all extensions accounts"),(0,s.kt)("p",null,"A dapp will not be aware whether or not the user has the extension installed on their browser until the ",(0,s.kt)("inlineCode",{parentName:"p"},"web3Enable")," function is called.\nCalling this function returns the amount of extensions installed and for which the user has accepted to share their accounts. Using ",(0,s.kt)("inlineCode",{parentName:"p"},"web3Accounts"),", you can then retrieve the visible accounts. See ",(0,s.kt)("a",{parentName:"p",href:"#subscription-to-extensions-accounts"},"below for ",(0,s.kt)("inlineCode",{parentName:"a"},"web3AccountsSubscribe"))," usage."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';\n\n// this call fires up the authorization popup\nconst extensions = await web3Enable('my cool dapp');\n\nif (extensions.length === 0) {\n    // no extension installed, or the user did not accept the authorization\n    // in this case we should inform the use and give a link to the extension\n    return;\n}\n\n// we are now informed that the user has at least one extension and that we\n// will be able to show and use accounts\nconst allAccounts = await web3Accounts();\n")),(0,s.kt)("h2",{id:"sign-a-message"},"Sign a message"),(0,s.kt)("p",null,"Here is an example on how to sign a message with an account that was injected by the extension."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// We arbitraily select the first account returned from the above snippet\n// `account` is of type InjectedAccountWithMeta \nconst account = allAccount[0];\n\n// to be able to retrieve the signer interface from this account\n// we can use web3FromSource which will return an InjectedExtension type\nconst injector = await web3FromSource(account.meta.source);\n\n\n// this injector object has a signer and a signRaw method\n// to be able to sign raw bytes\nconst signRaw = injector?.signer?.signRaw;\n\nif (!!signRaw) {\n    // after making sure that signRaw is defined\n    // we can use it to sign our message\n    const { signature } = await signRaw({\n        address: account.address,\n        data: stringToHex('message to sign'),\n        type: 'bytes'\n    });\n}\n")),(0,s.kt)("p",null,"Head to the relevant ",(0,s.kt)("a",{parentName:"p",href:"/util-crypto/examples/verify-signature"},"util-crypto")," example to see how to verify a signature."),(0,s.kt)("h2",{id:"sign-and-send-a-transaction"},"Sign and send a transaction"),(0,s.kt)("p",null,"The api is able to retrieve the signer when ",(0,s.kt)("inlineCode",{parentName:"p"},"signAndSend")," is called with the address from an account retrieved from the extension."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// We arbitraily select the first account returned from the above snippet\n// `account` is of type InjectedAccountWithMeta \nconst account = allAccount[0];\n\n// here we use the api to create a balance transfer to some account of a value of 12344\nconst transferExtrinsic = api.tx.balances.transfer('5C5555yEXUcmEJ5kkcCMvdZjUo7NGJiQJMS7vZXEeoMhj3VQ', 123456)\n\n// to be able to retrieve the signer interface from this account\n// we can use web3FromSource which will return an InjectedExtension type\nconst injector = await web3FromSource(account.meta.source);\n\n// passing the injected account address as the first argument of signAndSend\n// will allow the api to retrieve the signer and the user will see the extension\n// popup asking to sign the balance transfer transaction\ntransferExtrinsic.signAndSend(account.address, { signer: injector.signer }, ({ status }) => {\n    if (status.isInBlock) {\n        console.log(`Completed at block hash #${status.asInBlock.toString()}`);\n    } else {\n        console.log(`Current status: ${status.type}`);\n    }\n}).catch((error: any) => {\n    console.log(':( transaction failed', error);\n});\n")),(0,s.kt)("h2",{id:"subscription-to-extensions-accounts"},"Subscription to extensions' accounts"),(0,s.kt)("p",null,"Using ",(0,s.kt)("inlineCode",{parentName:"p"},"web3AccountsSubscribe")," similarly as what we did above with ",(0,s.kt)("inlineCode",{parentName:"p"},"web3Accounts")," allows to get all injected accounts, in this case though because we use a subscription, we will be aware of any account change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { web3AccountsSubscribe, web3Enable } from '@polkadot/extension-dapp';\n\n// this call fires up the authorization popup\nconst extensions = await web3Enable('my cool dapp');\n\nif (extensions.length === 0) {\n    // no extension installed, or the user did not accept the authorization\n    // in this case we should inform the use and give a link to the extension\n    return;\n}\n\n// we are now informed that the user has at least one extension and that we\n// will be able to show and use accounts\nlet unsubscribe; // this is the function of type `() => void` that should be called to unsubscribe\n\n// we subscribe to any account change and log the new list.\n// note that `web3AccountsSubscribe` returns the function to unsubscribe\nunsubscribe = await web3AccountsSubscribe(( injectedAccounts ) => { \n    injectedAccounts.map(( accounts ) => {\n        console.log(account.address);\n    })\n });\n\n// don't forget to unsubscribe when needed, e.g when unmounting a component\nunsubscribe && unsubscribe();\n")))}d.isMDXComponent=!0}}]);