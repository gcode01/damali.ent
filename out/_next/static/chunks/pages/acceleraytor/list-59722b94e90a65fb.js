(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1584],{94361:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/acceleraytor/list",function(){return l(9944)}])},70745:function(e,s,l){"use strict";l.d(s,{Z:function(){return a}});var i=l(85893);l(67294);var t=l(66180),n=l(40471);function a(e){var s;let{noCoinIconBorder:l,haveAnime:a,iconSrc:o,token:c,isOptionToken:r,domRef:d,className:m,size:x="md",style:u,isRewardBadge:h,isRewardEnd:f,onClick:b}=e,j=null!==(s=null!=o?o:null==c?void 0:c.icons)&&void 0!==s?s:null==c?void 0:c.icon,v=!l,g="2xl"===x?"h-20 w-20":"lg"===x?"h-12 w-12":"md"===x?"h-8 w-8":"sm"===x?"h-5 w-5":"smi"===x?"h-6 w-6":"xs"===x?"w-4 h-4":"h-12 w-12";return(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsx)(n.Z,{className:"h-8 w-8 rounded-full overflow-hidden ",src:"/icons/diagonal.svg",fallbackSrc:"/coins/unknown.svg",style:{position:"absolute",zIndex:100,opacity:20}}),(0,i.jsx)("div",{ref:d,className:"CoinAvatar flex items-center  ".concat(h?"rounded-full ring-1 ring-[#616A9D] p-1":""," ").concat(f?"opacity-30 ring-[#7B7EAF]":""," "),style:u,onClick:b,children:a?(0,i.jsxs)("div",{className:(0,t.m)("".concat(g," rounded-full swap-coin"),m),suppressHydrationWarning:!0,style:{"--delay":"".concat((1e3*Math.random()).toFixed(2),"ms")},children:[(0,i.jsx)(n.Z,{className:"front-face overflow-hidden transition-transform transform ".concat(v?"scale-[.7]":""),src:j,fallbackSrc:"/coins/unknown.svg"}),(0,i.jsxs)("div",{className:"line-group",children:[(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})})]}),(0,i.jsx)(n.Z,{className:"back-face overflow-hidden transition-transform transform ".concat(v?"scale-[.7]":""),src:j,fallbackSrc:"/coins/unknown.svg"})]}):(0,i.jsxs)("div",{className:(0,t.m)("".concat(g," relative rounded-full"),m),style:{background:"linear-gradient(126.6deg, rgba(171, 196, 255, 0.2) 28.69%, rgba(171, 196, 255, 0) 100%)"},children:[(0,i.jsx)(n.Z,{className:"".concat(g," rounded-full overflow-hidden transition-transform transform ").concat(v?"scale-[.7]":""),src:j,fallbackSrc:"/coins/unknown.svg"}),!1]})})]})}},99881:function(e,s,l){"use strict";l.d(s,{Z:function(){return t}});var i=l(72573);function t(e){let{groupSeparator:s=",",fractionLength:l=2,groupSize:t=3}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===e?"0":[e=>(0,i.B)(e),e=>"auto"===l?e:function(e,s){var l;let[,i="",t="",n=""]=null!==(l=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==l?l:[];return n?n.length<s?String(e):Number(e).toFixed(s):String(e)}(e,l),e=>{var l;let[,i="",n="",a=""]=null!==(l=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==l?l:[],o=[...n].reduceRight((e,l,i,n)=>{let a=n.length-1-i;return l+(0!==a&&a%t==0?s:"")+e},"");return a?"".concat(i).concat(o,".").concat(a):"".concat(i).concat(o)}].reduce((e,s)=>s(e),e)}},3700:function(e,s,l){"use strict";l.d(s,{K:function(){return c}});var i=l(91148),t=l(4465),n=l(17097),a=l(16938),o=l(27993);function c(e,s){var l;if(!s||!s.text)return e;let c=(0,i.Do)(e.map(e=>(function(e,s,l){let a=String(s).trim().split(/\s|-/),c=(0,i.Do)([(0,o.u)(l,[e])].flat().map(e=>(0,n.HD)(e)?{text:e}:e));return function(e){let s={item:e.item,allConfigs:e.searchConfigs,matched:!1,matchedConfigs:[]};for(let[l,i]of e.searchKeyWords.entries()){let n=!1;for(let[a,o]of e.searchConfigs.entries()){let e=o.entirely,c=(0,t.X0)(o.text,i),r=(0,t.vR)(o.text,i);(c&&e||r&&!e)&&(n=!0,s.matched=!0,s.matchedConfigs.push({config:o,configIdx:a,isEntirelyMatched:c,searchedKeywordIdx:l,searchedKeywordText:i}))}if(!n)return}return s}({item:e,searchKeyWords:a,searchConfigs:c})})(e,s.text,null!==(l=null==s?void 0:s.matchConfigs)&&void 0!==l?l:function(e){if((0,n.HD)(e)||(0,n.hj)(e))return[{text:String(e)}];if((0,n.Kn)(e)){let s=(0,a.xh)((0,a.CE)(e,["id","key"]),e=>(0,n.HD)(e)||(0,n.hj)(e)?{text:String(e)}:void 0);return(0,i.Do)(Object.values(s))}return[{text:""}]}(e)))),d=c.filter(e=>null==e?void 0:e.matched),m=[...d].sort((e,s)=>r(s)-r(e)),x=(0,i.Do)(m.map(e=>e.item));return x}function r(e){let s=e.allConfigs,l=Array.from({length:s.length},()=>0),i=Array.from({length:s.length},()=>0);e.matchedConfigs.forEach(e=>{let{configIdx:s,isEntirelyMatched:t}=e;t?l[s]=2:i[s]=1});let t=e=>{let s=Math.max(...e);return e.reduce((l,i,t)=>l+i*(s+1)**(e.length-t),0)},n=t([t(l),t(i)]);return n}},9944:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return z}});var i=l(85893),t=l(67294),n=l(91371),a=l(4929),o=l(53002),c=l(43067),r=l(70745),d=l(54592),m=l(23484),x=l(89593),u=l(48162),h=l(66042),f=l(57571),b=l(51800),j=l(29197),v=l(56419),g=l(95793),N=l(81451),p=l(72573),Z=l(87479),w=l(40471),y=l(88132),C=l(99881),k=l(31555),F=l(28948),P=l(60421),T=l(68186),S=l(43066),A=l(65737),B=l(18074),E=l(99645),I=l(66180),W=l(69651),D=l(94059),O=l(82727),U=l(96662),q=l(3700),M=l(3363),R=l(43487);function z(){(0,R.Z)();let e=(0,a.Z)(e=>e.idoHydratedInfos);return(0,i.jsxs)(f.Z,{mobileBarTitle:"AcceleRaytor",metaTitle:"AcceleRaytor - Raydium",children:[(0,i.jsx)(K,{}),Object.keys(e).length?(0,i.jsx)(_,{}):(0,i.jsx)(E.Z,{className:"mx-auto my-12"})]})}function K(){return(0,i.jsx)(d.Z,{className:"items-center gap-20 mb-11",children:(0,i.jsxs)(d.Z,{className:"items-center cyberpunk-bg-light-acceleraytor mobile:scale-75 mobile:translate-y-4",children:[(0,i.jsx)(w.Z,{src:"/logo/accecleraytor-text-logo.svg"}),(0,i.jsx)("div",{className:"text-[20px] mt-2 font-medium text-[#ABC4FF80] whitespace-nowrap",children:"A launchpad for new Solana projects"})]})})}function _(){let e=(0,a.Z)(e=>e.currentTab),s=(0,a.Z)(e=>e.idoHydratedInfos),l=(0,a.Z)(e=>e.searchText),o=(0,n.ZP)(e=>e.isMobile),c=(0,t.useMemo)(()=>Object.values(s).filter(e=>e.isUpcoming),[s]),r=Object.values(s).filter(e=>e.isOpen),x=Object.values(s).filter(e=>e.isClosed||e.canWithdrawBase),u=(0,t.useRef)(!1);!u.current&&c.length&&(a.Z.setState({currentTab:"Upcoming Pools"}),u.current=!0);let h="Upcoming Pools"===e?c:x,f=(0,t.useMemo)(()=>(0,q.K)(h,{text:l,matchConfigs:e=>{var s,l,i,t;return[{text:e.id,entirely:!0},{text:(0,M.ZP)(null===(s=e.base)||void 0===s?void 0:s.mint),entirely:!0},{text:(0,M.ZP)(null===(l=e.quote)||void 0===l?void 0:l.mint),entirely:!0},e.projectName,null===(i=e.base)||void 0===i?void 0:i.symbol,null===(t=e.quote)||void 0===t?void 0:t.symbol]}}),[h,l]);return(0,i.jsxs)(i.Fragment,{children:[r.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"text-2xl mobile:text-base mobile:px-4 mb-6 mobile:mb-4 font-semibold text-white w-[min(890px,100%)] self-center",children:["Open Pool",r.length>1?"s":""]}),(0,i.jsx)(d.Z,{className:"gap-10 mobile:gap-8 w-[min(890px,100%)] mx-auto mobile:w-full",children:r.map(e=>(0,i.jsx)("div",{children:(0,i.jsx)(y.Z,{children:(0,i.jsxs)(m.Z,{defaultOpen:!0,children:[(0,i.jsx)(m.Z.Face,{children:s=>{let{isOpen:l}=s;return(0,i.jsx)(V,{open:l,info:e})}}),(0,i.jsx)(m.Z.Body,{children:(0,i.jsx)($,{info:e})})]})})},e.id))})]}),(0,i.jsx)(j.Z,{currentValue:e,values:["Upcoming Pools","Closed Pools"],onChange:e=>{a.Z.setState({currentTab:e})},className:"self-center mobile:col-span-full ".concat(c.length>0?" mt-24 mobile:mt-16 mb-10 mobile:mb-8":r.length>0?"invisible mt-12 mobile:mt-8 mb-10 mobile:mb-8":"invisible m-0"),itemClassName:o?"min-w-[112px] h-[30px] px-2":"min-w-[128px]"}),(c.length>0||x.length>0)&&(0,i.jsxs)(b.Z,{className:"mobile:px-4 gap-6 mb-6 mobile:mb-4 justify-between w-[min(890px,100%)] self-center",children:[(0,i.jsx)("div",{className:"text-2xl mobile:text-base font-semibold text-white",children:e}),"Closed Pools"===e&&(0,i.jsx)(L,{className:"mobile:w-[12em]"})]}),(0,i.jsx)(d.Z,{className:"gap-12 mobile:gap-8 w-[min(890px,100%)] mx-auto mobile:w-full",children:f.length>0?f.map(s=>(0,i.jsx)("div",{children:(0,i.jsx)(y.Z,{children:(0,i.jsxs)(m.Z,{defaultOpen:"Upcoming Pools"===e,children:[(0,i.jsx)(m.Z.Face,{children:e=>{let{isOpen:l}=e;return(0,i.jsx)(V,{open:l,info:s})}}),(0,i.jsx)(m.Z.Body,{children:(0,i.jsx)($,{info:s})})]})})},s.id)):(0,i.jsxs)("div",{className:"text-xl mobile:text-lg text-[#ABC4FF80] mx-auto",children:["( ","Closed Pools"===e&&l?"Searched Not Found":"Empty"," )"]})})]})}function L(e){let{className:s}=e,l=(0,n.ZP)(e=>e.isMobile),t=(0,a.Z)(e=>e.searchText);return(0,i.jsx)(O.Z,{value:t,className:(0,I.m)("px-2 py-2 mobile:py-1 gap-2 border-1.5 border-[rgba(196,214,255,0.5)] rounded-xl mobile:rounded-lg",s),inputClassName:"font-medium mobile:text-xs text-[rgba(196,214,255,0.5)] placeholder-[rgba(196,214,255,0.5)]",prefix:(0,i.jsx)(u.Z,{heroIconName:"search",size:l?"sm":"md",className:"text-[rgba(196,214,255,0.5)]"}),suffix:(0,i.jsx)(u.Z,{heroIconName:"x",size:l?"xs":"sm",className:"text-[rgba(196,214,255,0.5)] transition clickable ".concat(t?"opacity-100":"opacity-0 pointer-events-none"),onClick:()=>{a.Z.setState({searchText:""})}}),placeholder:"Search All",onUserInput:e=>{a.Z.setState({searchText:e})}})}function V(e){let{open:s,info:l}=e,t=(0,n.ZP)(e=>e.isMobile),a=(0,U.ZP)(e=>e.getChainDate);return(0,i.jsxs)("div",{className:"py-6 px-8 mobile:py-4 mobile:px-5 bg-[#141041]  rounded-t-3xl mobile:rounded-t-lg  ".concat(s?"":"rounded-b-3xl mobile:rounded-b-lg"),children:[(0,i.jsxs)(T.Z,{is:t?"Col":"Row",className:"flex-wrap items-stretch gap-5",children:[(0,i.jsxs)(b.Z,{className:"items-center gap-4 mobile:w-full",children:[(0,i.jsxs)(b.Z,{className:"items-center min-w-[160px] mobile:min-w-[120px] gap-4 mobile:gap-3 mobile:w-auto clickable",onClick:()=>(0,k.Eh)("/acceleraytor/detail",{queryProps:{idoId:l.id}}),children:[(0,i.jsx)(r.Z,{noCoinIconBorder:!0,size:t?"md":"lg",token:l.base}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"text-base mobile:text-sm font-semibold text-white",children:l.baseSymbol}),(0,i.jsx)("div",{className:"text-sm mobile:text-xs text-[#ABC4FF80]",children:l.projectName})]})]}),l.filled&&(0,i.jsx)(b.Z,{className:"flex-wrap gap-4  items-center border-l border-[rgba(171,196,255,0.5)] w-full self-center pl-6 mobile:pl-4",children:(0,i.jsx)(W.Z,{borderThemeMode:!0,className:"w-[180px] mobile:w-full",labelClassName:"text-sm font-bold",value:(0,D.Z)(l.filled),labelFormat:e=>"Filled: ".concat((0,B.Z)(e,{fixed:0}))})})]}),(0,i.jsx)(b.Z,{className:"gap-4 mobile:gap-6 grow justify-end mobile:justify-center",children:l.isUpcoming?(0,i.jsx)(H,{info:l}):l.isOpen?(0,i.jsx)(X,{info:l}):(0,i.jsx)(Y,{idoInfo:l})})]}),(0,g.Sl)(a(),l.endTime)&&(0,i.jsx)("div",{className:"mx-auto w-max -mt-3 -mb-3 translate-y-3 mobile:mt-3 mobile:mb-0",children:(0,i.jsx)(u.Z,{iconSrc:"/icons/acceleraytor-list-collapse-open.svg",className:"clickable hover:brightness-110 "})})]})}function H(e){let{info:s}=e,l=(0,n.ZP)(e=>e.isMobile);return(0,i.jsxs)(T.Z,{is:l?"Col":"Row",className:"items-center mobile:w-full",children:[(0,i.jsx)(c.Z,{size:l?"xs":"md",className:"frosted-glass-skygray mobile:mb-3 mobile:self-stretch",suffix:(0,i.jsx)(u.Z,{className:"inline-block",size:"sm",heroIconName:"arrow-circle-right"}),onClick:()=>(0,k.Eh)("/acceleraytor/detail",{queryProps:{idoId:s.id}}),children:"Pool Information"}),l&&(0,i.jsx)(h.Z,{href:s.projectDetailLink,className:"text-[#ABC4FF80] font-medium text-xs",children:"Read Full Detail"})]})}function X(e){let{info:s}=e,l=(0,n.ZP)(e=>e.isMobile);return(0,i.jsx)(c.Z,{size:l?"xs":"md",className:"frosted-glass-teal mobile:w-full",validators:[{should:s.isOpen}],onClick:e=>{let{ev:l}=e;l.stopPropagation(),(0,k.Eh)("/acceleraytor/detail",{queryProps:{idoId:s.id}})},children:"Join Lottery"})}function Y(e){var s,l,r,m,u,h,f,b,j,v,g,p,w,y,C,k,P,T,A,B;let{idoInfo:E}=e,I=(0,n.ZP)(e=>e.isMobile),W=(0,o.Z)(e=>e.connected),D=(0,o.Z)(e=>e.owner),O=(0,a.Z)(e=>e.refreshIdo),U=(0,n.ZP)(e=>e.isApprovePanelShown),[,q]=(0,S.N)(),[M,R]=(0,t.useState)(!1),[z,K]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{R(!1),K(!1)},[D]),(0,t.useEffect)(()=>{var e,s;(0,N.$u)(null==E?void 0:null===(e=E.ledger)||void 0===e?void 0:e.baseWithdrawn)&&R(!0),(0,N.$u)(null==E?void 0:null===(s=E.ledger)||void 0===s?void 0:s.quoteWithdrawn)&&K(!0)},[E]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.Z,{className:"items-center mobile:grow",children:[(0,i.jsx)(c.Z,{size:I?"xs":"md",className:"frosted-glass-teal mobile:self-stretch w-[160px] mobile:w-[100%] whitespace-normal",isLoading:U,validators:[{should:!M},{should:W,fallbackProps:{onClick:()=>n.ZP.setState({isWalletSelectorShown:!0})}},{should:E.ledger&&(0,N.gt)(null==E?void 0:null===(s=E.winningTickets)||void 0===s?void 0:s.length,0)&&(0,N.eq)(E.ledger.baseWithdrawn,0)},{should:E.canWithdrawBase,fallbackProps:{children:(0,i.jsxs)("div",{children:["Claim ",null!==(y=null===(l=E.base)||void 0===l?void 0:l.symbol)&&void 0!==y?y:"UNKNOWN"," in"," ",(0,i.jsx)(x.Z,{className:"justify-center",singleValueMode:!0,labelClassName:"text-base",endTime:Number(E.startWithdrawTime),onEnd:q})]})}}],onClick:e=>{let{ev:s}=e;s.stopPropagation(),(0,Z.Z)({idoInfo:E,side:"base",onTxSuccess:()=>{R(!0),O(E.id)}})},children:M?"".concat(null!==(C=null===(r=E.base)||void 0===r?void 0:r.symbol)&&void 0!==C?C:"UNKNOWN"," Claimed"):"Claim ".concat(null!==(k=null===(m=E.base)||void 0===m?void 0:m.symbol)&&void 0!==k?k:"UNKNOWN")}),(0,i.jsx)(F.U,{children:(0,N.gt)(null===(u=E.winningTickets)||void 0===u?void 0:u.length,0)&&(0,N.eq)(null===(h=E.ledger)||void 0===h?void 0:h.baseWithdrawn,0)&&(0,i.jsxs)("div",{className:"text-xs mt-1 font-semibold text-[#ABC4FF80]",children:[null===(f=E.winningTickets)||void 0===f?void 0:f.length," winning tickets"]})})]}),(0,i.jsxs)(d.Z,{className:"items-center mobile:grow",children:[(0,i.jsx)(c.Z,{size:I?"xs":"md",className:"frosted-glass-teal mobile:self-stretch w-[160px] mobile:w-[100%] whitespace-normal",isLoading:U,validators:[{should:!z},{should:W},{should:(0,N.eq)(null===(b=E.ledger)||void 0===b?void 0:b.quoteWithdrawn,0)},{should:E.isClosed},{should:W,forceActive:!0,fallbackProps:{onClick:()=>n.ZP.setState({isWalletSelectorShown:!0})}}],onClick:e=>{let{ev:s}=e;s.stopPropagation(),(0,Z.Z)({idoInfo:E,side:"quote",onTxSuccess:()=>{K(!0),O(E.id)}})},children:z?"".concat(null!==(P=null===(j=E.quote)||void 0===j?void 0:j.symbol)&&void 0!==P?P:"UNKNOWN"," Claimed"):"Claim ".concat(null!==(T=null===(v=E.quote)||void 0===v?void 0:v.symbol)&&void 0!==T?T:"UNKNOWN")}),(0,i.jsx)(F.U,{children:(0,N.eq)(null===(g=E.ledger)||void 0===g?void 0:g.quoteWithdrawn,0)&&(0,i.jsxs)("div",{className:"text-xs mt-1 font-semibold text-[#ABC4FF80]",children:[(null!==(A=null===(p=E.depositedTickets)||void 0===p?void 0:p.length)&&void 0!==A?A:0)-(null!==(B=null===(w=E.winningTickets)||void 0===w?void 0:w.length)&&void 0!==B?B:0)," non-winning tickets"]})})]})]})}function $(e){var s,l,t,o,c,r;let{info:m}=e,f=(0,n.ZP)(e=>e.isMobile),j=(0,U.ZP)(e=>e.getChainDate),N=(0,a.Z)(e=>e.refreshIdo);return(0,i.jsxs)("div",{className:"p-6 mobile:p-3",children:[(0,i.jsx)(J,{info:m}),(0,i.jsxs)(b.Z,{className:"flex-wrap gap-6 mobile:gap-3 rounded-b-3xl mobile:rounded-b-lg items-center",children:[(0,i.jsxs)("div",{className:"relative rounded-xl overflow-hidden mobile:w-full",children:[(0,i.jsx)(w.Z,{src:m.projectPosters,fallbackColor:"#abc4ff1a",className:"w-[360px] mobile:w-full h-[202.5px] /* 16/9 */ mobile:h-[106px] shrink-0 object-cover mobile:object-cover clickable",onClick:()=>(0,k.Eh)("/acceleraytor/detail",{queryProps:{idoId:m.id}})}),!f&&(0,i.jsx)("div",{className:"bg-[#141041cc] absolute bottom-0 w-full  ",children:(0,i.jsxs)(b.Z,{className:"py-1 justify-center items-center",children:[(0,i.jsx)(u.Z,{className:"mr-2",iconSrc:"/icons/acceleraytor-list-medium.svg"}),(0,i.jsx)(h.Z,{href:m.projectDetailLink,className:"text-[#ABC4FF80] font-medium text-xs",children:"Read Full Details"})]})})]}),(0,i.jsx)(d.Z,{className:"grow justify-between",children:(0,i.jsxs)("div",{className:"grid grid-flow-row grid-cols-2 mobile:grid-cols-1 mobile:gap-board px-6 mobile:p-0",children:[(0,i.jsx)(Q,{fieldName:"Total Raise",fieldValue:(0,i.jsxs)(b.Z,{className:"items-baseline gap-1",children:[(0,i.jsx)("div",{className:"text-white font-medium",children:(0,C.Z)((0,p.B)(m.totalRaise))}),(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:m.baseSymbol})]})}),(0,i.jsx)(Q,{fieldName:"Per ".concat(null!==(o=null===(s=m.base)||void 0===s?void 0:s.symbol)&&void 0!==o?o:"UNKNOWN"),fieldValue:(0,i.jsxs)(b.Z,{className:"items-baseline gap-1",children:[(0,i.jsx)("div",{className:"text-white font-medium",children:(0,C.Z)((0,p.B)(m.coinPrice),{fractionLength:"auto"})}),(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:null!==(c=null===(l=m.quote)||void 0===l?void 0:l.symbol)&&void 0!==c?c:"UNKNOWN"})]})}),(0,i.jsx)(Q,{fieldName:"Total tickets deposited",fieldValue:(0,i.jsxs)(b.Z,{className:"items-baseline gap-1",children:[(0,i.jsx)("div",{className:"text-white font-medium",children:(0,C.Z)(m.depositedTicketCount)}),(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"Tickets"})]})}),(0,i.jsx)(Q,{fieldName:"Allocation / Winning Ticket",fieldValue:(0,i.jsxs)(b.Z,{className:"items-baseline gap-1",children:[(0,i.jsx)("div",{className:"text-white font-medium",children:(0,C.Z)((0,p.B)(m.ticketPrice),{fractionLength:"auto"})}),(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:null!==(r=null===(t=m.quote)||void 0===t?void 0:t.symbol)&&void 0!==r?r:"UNKNOWN"})]})}),(0,i.jsx)(Q,{fieldName:"Pool open",fieldValue:(0,i.jsx)(b.Z,{className:"items-baseline gap-1",children:(0,g.hF)(j(),m.startTime)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"in"}),(0,i.jsx)("div",{className:"text-white font-medium",children:(0,i.jsx)(x.Z,{endTime:m.startTime,onEnd:()=>{setTimeout(()=>{N(m.id)},1e3)}})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"text-white font-medium",children:(0,v.xn)(m.startTime,{hideUTCBadge:!0})}),(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"UTC"})]})})}),(0,i.jsx)(Q,{fieldName:"Pool close",fieldValue:(0,i.jsx)(b.Z,{className:"items-baseline gap-1",children:(0,g.hF)(j(),m.endTime)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"in"}),(0,i.jsx)("div",{className:"text-white font-medium",children:(0,i.jsx)(x.Z,{endTime:m.endTime,onEnd:()=>{setTimeout(()=>{N(m.id)},1e3)}})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"text-white font-medium",children:(0,v.xn)(m.endTime,{hideUTCBadge:!0})}),(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"UTC"})]})})})]})}),(0,i.jsx)(G,{className:"w-full",info:m})]})]})}function J(e){let{info:s}=e,l=(0,n.ZP)(e=>e.isMobile),t=(0,o.Z)(e=>e.connected),a=(0,U.ZP)(e=>e.getChainDate);return l||(0,g.Sl)(a(),s.stakeTimeEnd)?null:(0,i.jsxs)(b.Z,{className:"AlertText items-center bg-[#abc4ff1a] p-3 rounded-xl mb-6",children:[(0,i.jsx)(u.Z,{className:"flex-none text-[#ABC4FF80] mr-2",size:"sm",heroIconName:"exclamation-circle"}),(0,i.jsxs)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:["To be eligible for the lottery, you need to ",(0,i.jsx)("span",{className:"text-[#ABC4FF]",children:"stake 100 RAY"})," with a deadline of ",(0,i.jsx)("span",{className:"text-[#ABC4FF]",children:(0,v.xn)(s.stakeTimeEnd)}),"."]}),(0,i.jsx)(c.Z,{className:"frosted-glass-skygray ml-auto",size:"xs",validators:[{should:t,forceActive:!0,fallbackProps:{onClick:()=>n.ZP.setState({isWalletSelectorShown:!0})}}],disabled:!(0,g.hF)(a(),s.stakeTimeEnd),onClick:()=>{A.Z.setState({isStakeDialogOpen:!0,stakeDialogMode:"deposit"})},children:"Stake"})]})}function G(e){let{className:s,info:l}=e,t=(0,n.ZP)(e=>e.isMobile),a=(0,o.Z)(e=>e.connected),r=(0,A.Z)(e=>e.stakeDialogInfo),m=(0,U.ZP)(e=>e.getChainDate);return l.isUpcoming?t&&(0,g.hF)(m(),l.stakeTimeEnd)?(0,i.jsxs)(d.Z,{className:(0,I.m)("justify-between bg-[#14104180] px-6 py-3 mr-4 mobile:pt-0 mobile:pb-2 mobile:px-4 mobile:-mx-4 mobile:-mb-4 rounded-xl mobile:rounded-none",s),children:[(0,i.jsx)(Q,{fieldValue:(0,i.jsx)(b.Z,{className:"items-baseline gap-1",children:(0,i.jsxs)("div",{className:"text-white font-medium",children:[(0,p.B)(null==r?void 0:r.userStakedLpAmount)||"--"," RAY"]})}),fieldName:(0,i.jsx)(b.Z,{className:"gap-1 items-center",children:(0,i.jsx)("div",{className:"text-xs font-bold text-[#ABC4FF80]",children:"Your staking"})})}),(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(c.Z,{className:"frosted-glass-skygray",size:"xs",validators:[{should:a,forceActive:!0,fallbackProps:{onClick:()=>n.ZP.setState({isWalletSelectorShown:!0})}}],disabled:!(0,g.hF)(m(),l.stakeTimeEnd),onClick:()=>{A.Z.setState({isStakeDialogOpen:!0,stakeDialogMode:"deposit"})},children:"Stake"}),(0,i.jsxs)("div",{className:"text-xs text-center text-[#ABC4FF80] my-1",children:["APR: ",(0,B.Z)(null==r?void 0:r.totalApr7d)]})]})]}):null:(0,i.jsxs)(T.Z,{is:t?"Col":"Row",className:(0,I.m)("".concat(t?"":"flex-row-reverse"," items-center mx-4 mobile:mx-0 mobile:-mt-3 pt-4 border-t-1.5 border-[rgba(171,196,255,0.1)]"),s),children:[(0,i.jsx)(c.Z,{size:t?"xs":"md",className:"frosted-glass-skygray mobile:mb-3 mobile:self-stretch",suffix:(0,i.jsx)(u.Z,{className:"inline-block",size:"sm",heroIconName:"arrow-circle-right"}),onClick:()=>(0,k.Eh)("/acceleraytor/detail",{queryProps:{idoId:l.id}}),children:"Pool Information"}),(0,i.jsx)(h.Z,{href:l.projectDetailLink,className:"mx-4 text-[#ABC4FF80] font-bold mobile:text-xs",children:"Full Details"})]})}function Q(e){let{fieldName:s,fieldValue:l}=e,t=(0,n.ZP)(e=>e.isMobile);return t?(0,i.jsxs)(P.Z,{className:"grid-cols-[3fr,4fr] items-center py-3 px-2 gap-8",children:[(0,i.jsx)("div",{className:"text-xs font-bold text-[#ABC4FF80]",children:s}),(0,i.jsx)("div",{className:"text-sm font-semibold text-white",children:l})]}):(0,i.jsxs)("div",{className:"top-info-panel-field-item py-3",children:[(0,i.jsx)("div",{children:l}),(0,i.jsx)("div",{className:"text-[#ABC4FF] font-bold text-xs opacity-50 mt-1",children:s})]})}}},function(e){e.O(0,[4740,7571,8667,1690,9774,2888,179],function(){return e(e.s=94361)}),_N_E=e.O()}]);