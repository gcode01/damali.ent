(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3094],{60467:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/debug",function(){return n(43352)}])},43352:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var i=n(85893),a=n(91371),r=n(75640),s=n(8667),o=n(53002),l=n(59277),u=n(43067),c=n(57571),d=n(67294);function f(){return(0,i.jsxs)(c.Z,{mobileBarTitle:"Debug",metaTitle:"Debug - Raydium",children:[(0,i.jsx)("div",{className:"title text-2xl mobile:text-lg font-semibold justify-self-start text-white mb-4",children:"Debug"}),(0,i.jsx)(g,{})]})}function g(){let[t,e]=(0,d.useState)(!1),n=(0,a.ZP)(t=>t.isApprovePanelShown);return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"text-[#abc4ff] mb-4",children:"Migrate Old Account To PDA And Harvest Reward"}),(0,i.jsx)(u.Z,{className:"frosted-glass-teal",isLoading:t||n,onClick:()=>{e(!0),(function(){let{onInnerTransitionsEmpty:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.ZP)(async t=>{let{transactionCollector:e,baseUtils:{connection:n,owner:i}}=t,{programIds:a}=l.Z.getState(),{tokenAccountRawInfos:s}=o.Z.getState(),{innerTransactions:u,address:c}=await r.l6j.makeV1InfoToV2PdaAndHarvestSimple({connection:n,wallet:i,programIdV3:a.FarmV3,programIdV5:a.FarmV5,tokenAccounts:s});if(!u.length)throw Error("No account needs to be migrate");e.add(u,{txHistoryInfo:{title:"PDA Migrate",description:"Migrate PDA from V1 to V2 and harvest"}})})})().finally(()=>{e(!1)})},children:"Migrate"})]})}}},function(t){t.O(0,[4740,7571,8667,9774,2888,179],function(){return t(t.s=60467)}),_N_E=t.O()}]);