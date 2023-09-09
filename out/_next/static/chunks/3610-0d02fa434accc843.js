"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3610],{25222:function(e,t,n){n.d(t,{w:function(){return i}});function i(e){return e&&"idString"in e}},52784:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(67294),r=n(3363),l=n(4465),a=n(94678);function o(e){let t=(0,a.ZP)(e=>e.coin1),n=(0,a.ZP)(e=>e.coin2),o=(0,a.ZP)(e=>e.hydratedAmmPools),u=(0,a.ZP)(e=>e.currentAmmPool),s=(0,i.useCallback)(e=>{let t=void 0!==u&&1===e.filter(e=>(0,r.ZP)(e.state.id)===u.idString).length;return t},[u]);(0,i.useEffect)(()=>{if(!o.length||!t||!n){a.ZP.setState({selectableAmmPools:void 0,currentAmmPool:void 0});return}let i=o.filter(e=>(0,l.aT)(e.state.mintA.mint,t.mint)&&(0,l.aT)(e.state.mintB.mint,n.mint)||(0,l.aT)(e.state.mintA.mint,n.mint)&&(0,l.aT)(e.state.mintB.mint,t.mint)),r=s(i);a.ZP.setState(e||r?{selectableAmmPools:i}:{selectableAmmPools:i,currentAmmPool:i[0]})},[t,n,o,e])}},76961:function(e,t,n){n.d(t,{Z:function(){return f}});var i=n(67294),r=n(75640),l=n(91371),a=n(34003),o=n(3363),u=n(62952),s=n(4465),c=n(81451),d=n(51523),x=n(71375),m=n(94678);function f(){let e=(0,l.ZP)(e=>e.slippageTolerance),t=(0,m.ZP)(e=>e.coin1),n=(0,m.ZP)(e=>e.coin1Amount),f=(0,m.ZP)(e=>e.priceUpperTick),v=(0,m.ZP)(e=>e.coin2),p=(0,m.ZP)(e=>e.coin2Amount),h=(0,m.ZP)(e=>e.priceLowerTick),b=(0,m.ZP)(e=>e.userCursorSide),M=(0,m.ZP)(e=>e.isRemoveDialogOpen),g=(0,m.ZP)(e=>e.currentAmmPool),y=(0,m.ZP)(e=>e.targetUserPositionAccount),N=(0,m.ZP)(e=>e.isInput),w=(0,i.useMemo)(()=>M?0:e,[M,e]),F=(0,i.useMemo)(()=>{if(g&&y){var e;return null===(e=g.positionAccount)||void 0===e?void 0:e.find(e=>(0,o.ZP)(e.nftMint)===(0,o.ZP)(y.nftMint))}},[g,y]),j=(0,i.useCallback)(()=>{if((0,a.Z)(g,"not pool info"),(0,a.Z)(t,"not set coin1"),(0,a.Z)(void 0!==f,"not set priceUpperTick"),(0,a.Z)(v,"not set coin2"),(0,a.Z)(void 0!==h,"not set priceLowerTick"),M&&!1===N)return;let e="coin1"===b,i=(0,s.aT)(t.mint,g.state.mintA.mint),l=e?n:p,o=void 0!==l&&""!==l,w=e?(0,x.Z)((0,d.dC)(null!=n?n:0,10**t.decimals)):(0,x.Z)((0,d.dC)(null!=p?p:0,10**v.decimals)),{liquidity:j,amountSlippageA:Z,amountSlippageB:k}=M&&F&&y&&y.amountA&&y.amountB&&(0,c.$u)(F.liquidity)?function(e,t,n,i,r){let l=(0,d.hi)(e,r?n:i),a=(0,x.Z)(r?(0,d.dC)(i,l):(0,d.dC)(n,l));return{liquidity:(0,x.Z)((0,d.dC)(t,l)),amountSlippageA:r?e:a,amountSlippageB:r?a:e,amountA:r?e:a,amountB:r?a:e}}(w,null==F?void 0:F.liquidity,(0,x.Z)(F.amountA),(0,x.Z)(F.amountB),e):r.c2c.getLiquidityAmountOutFromAmountIn({poolInfo:g.state,slippage:0,inputA:e&&i||!i&&!e,tickUpper:Math.max(f,h),tickLower:Math.min(h,f),amount:w,add:!M});e?m.ZP.setState({coin2Amount:o?(0,u.n)(v,i?k:Z).toFixed():void 0}):m.ZP.setState({coin1Amount:o?(0,u.n)(t,i?Z:k).toFixed():void 0}),m.ZP.setState({liquidity:j})},[t,n,f,v,p,h,b,g,M,N,y,F,w]);(0,i.useEffect)(()=>{try{j()}catch(e){console.log("still can't calc amount",e instanceof Error?e.message:e)}},[j])}},72259:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(85893),r=n(67294),l=n(66180),a=n(27993),o=n(31139),u=n(54592),s=n(32029),c=n(82727);function d(e){var t;let{decimalMode:n,className:d,disabled:x,noDisableStyle:m,label:f,labelClassName:v,inputProps:p,renderInput:h,...b}=e,M=(0,r.useRef)(null);return(0,i.jsxs)(u.Z,{onClick:function(){var e,t,n,i;null===(e=M.current)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e),null===(n=M.current)||void 0===n||null===(i=n.click)||void 0===i||i.call(n)},className:(0,l.m)("bg-[#141041] justify-between rounded-xl mobile:rounded-lg py-3 px-6 mobile:py-2 mobile:px-4 cursor-text ".concat(x&&!m?"pointer-events-none-entirely cursor-default opacity-50":""),d),children:[f&&(0,i.jsx)("div",{className:(0,l.m)("text-xs mobile:text-2xs text-[#abc4ff80] font-medium ",v),children:f}),null!==(t=(0,a.u)(h,[M]))&&void 0!==t?t:n?(0,i.jsx)(s.Z,{noCSSInputDefaultWidth:!0,...b,...p,className:(0,l.m)("w-full py-1 mobile:py-1 font-medium",null==p?void 0:p.className),componentRef:(0,o.Z)(M,null==p?void 0:p.componentRef)}):(0,i.jsx)(c.Z,{noCSSInputDefaultWidth:!0,...b,...p,className:(0,l.m)("w-full py-1 mobile:py-1 font-medium",null==p?void 0:p.className),componentRef:(0,o.Z)(M,null==p?void 0:p.componentRef)})]})}},56603:function(e,t,n){n.d(t,{D:function(){return l},P:function(){return r}});let i=()=>new Date().getTime();function r(e,t){var n;let r=[],l=null,a=null,o=null!==(n=null==t?void 0:t.delay)&&void 0!==n?n:400,u=()=>{var n;e(...r[r.length-1]),r.length=0,l=null,o=null!==(n=null==t?void 0:t.delay)&&void 0!==n?n:400};return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];r.push(t);let s=i();l&&(clearTimeout(l),o-=a?s-a:0),o<=0?u():l=setTimeout(u,o),a=s}}function l(e,t){let n;return function(){for(var i,r=arguments.length,l=Array(r),a=0;a<r;a++)l[a]=arguments[a];n&&window.clearTimeout(n);let o=window.setTimeout(()=>e(...l),null!==(i=null==t?void 0:t.delay)&&void 0!==i?i:400);n=o}}},8951:function(e,t,n){n.d(t,{V:function(){return i}});let i=e=>{var t,n;let{val:i,maxLength:r=8}=e,l=String(i),a=l.split("."),[o,u]=[(null===(t=a[0])||void 0===t?void 0:t.length)||1,(null===(n=a[1])||void 0===n?void 0:n.length)||0];return o+u<=r?Number(i):Number(Number(i).toFixed(Math.max(r-o,0)))}},48678:function(e,t,n){n.d(t,{C:function(){return l}});var i=n(81451),r=n(72573);function l(e){if(null==e||e.toString().includes("Infinity")||isNaN(e))return"";let t=e?(0,r.B)(e):"";return(0,i.eq)(t,0)?"":t}},54103:function(e,t,n){n.d(t,{E:function(){return f}});var i=n(85893),r=n(60421),l=n(51800),a=n(3363),o=n(72616),u=n(18074),s=n(81451),c=n(51523),d=n(71122);let x=["#abc4ff","#37bbe0","#2b6aff","#335095"],m="#abc4ff33";function f(e){var t;let n=null!==(t=e.colCount)&&void 0!==t?t:1,f="positionAccount"===e.type?(0,d.hy)({positionAccount:e.positionAccount}):"poolTickInfo"===e.type?(0,d.HU)({ammPool:e.poolInfo}):(0,d.dG)({ammPool:e.poolInfo});if(!f)return null;let v=[f.fee.percentInTotal,...f.rewards.map(e=>e.percentInTotal)];return(0,i.jsxs)(l.Z,{className:"gap-4",children:[(0,i.jsx)("div",{className:"w-16 h-16 rounded-full flex-none",style:{background:"conic-gradient(".concat((0,s.eq)(v.reduce((e,t)=>e.add(t),(0,o.y)(0)),0)?"".concat(m," 0%, ").concat(m," 100%"):v.map((e,t)=>{let n=v.slice(0,t).reduce((e,t)=>(0,o.y)((0,c.IH)(e,t)),(0,o.y)(0)),i=(0,o.y)((0,c.IH)(n,e));return["".concat(x[t]," ").concat((0,u.Z)(n)),"".concat(x[t]," ").concat((0,u.Z)(i))].join(", ")}).join(", "),")"),WebkitMaskImage:"radial-gradient(transparent 50%, black 51%)",maskImage:"radial-gradient(transparent 50%, black 51%)"}}),(0,i.jsxs)(r.Z,{className:"content-around ".concat(1===n?"grid-cols-1":"grid-cols-2-auto"," gap-x-4"),children:[(0,i.jsxs)(l.Z,{className:"items-center gap-2",children:[(0,i.jsx)("div",{className:"h-2 w-2 rounded-full",style:{backgroundColor:"#abc4ff"}}),(0,i.jsx)("div",{className:"w-18 text-[#abc4ff] text-sm mobile:text-xs",children:"Trade Fee"}),(0,i.jsx)("div",{className:"text-sm",children:(0,u.Z)(f.fee.apr)})]}),f.rewards.map((e,t)=>{let{token:n,apr:r}=e,o=x.slice(1);return(0,i.jsxs)(l.Z,{className:"items-center gap-2",children:[(0,i.jsx)("div",{className:"h-2 w-2 rounded-full",style:{backgroundColor:o[t]}}),(0,i.jsx)("div",{className:"w-18 text-[#abc4ff] text-sm mobile:text-xs",children:null==n?void 0:n.symbol}),(0,i.jsx)("div",{className:"text-sm",children:(0,u.Z)(r)})]},(0,a.ZP)(null==n?void 0:n.mint))})]})]})}},96256:function(e,t,n){n.d(t,{n:function(){return o}});var i=n(85893),r=n(66180),l=n(94678),a=n(40816);function o(e){let{className:t}=e,n=(0,l.ZP)(e=>e.timeBasis);return(0,i.jsx)(a.Z,{classNames:(0,r.m)("bg-[#181753] ml-4",t),tabs:[{label:"24H",value:"24H"},{label:"7D",value:"7D"},{label:"30D",value:"30D"}],selectedValue:n,tabClassName:e=>e?"bg-[#141041]":"bg-transparent",onChange:e=>l.ZP.setState({timeBasis:e.value})})}},99023:function(e,t,n){n.d(t,{Mn:function(){return a},dO:function(){return o}});var i=n(81451),r=n(51523),l=n(84207);function a(e){return e.map(e=>{let{liquidity:t,price:n}=e;return{x:Number(n),y:Number(t)}})}function o(e){let{coin1Amount:t,coin2Amount:n,currentPrice:a,coin1InputDisabled:o,coin2InputDisabled:u}=e,[s,c]=[(o?"0":t)||"0",u?"0":n],[d,x]=[(0,i.gt)(s,0),(0,i.gt)(c,0)],m=(0,l.Z)(c||"0"),f=a?d?(0,r.dC)(s,a).add(m):x?m:(0,l.Z)(1):(0,l.Z)(1);try{let e=a?(0,r.hi)((0,r.dC)(s,a),f).mul(100).toFixed(1):"0",t=a?(0,r.hi)(m,f).mul(100).toFixed(1):"0";return{ratio1:e,ratio2:t}}catch(e){return{}}}},74365:function(e,t,n){n.d(t,{Z:function(){return Z}});var i=n(85893),r=n(48162),l=n(15326),a=n(8951),o=n(48678),u=n(51523),s=n(14209),c=n(47857),d=n(67294),x=n(9253),m=n(32417),f=n(86108),v=n(14888),p=n(3023),h=n(75358),b=n(4545),M=n(8081),g=n(63675),y=n(72259),N=n(22305);let w=e=>Math.min(e+2,15);function F(e){var t,n;let{decimals:r,minValue:l,maxValue:a,onPriceChange:o,onInDecrease:u,onBlur:s}=e;return null===(t=(0,N.Z)(l).dec)||void 0===t||t.length,null===(n=(0,N.Z)(a).dec)||void 0===n||n.length,(0,i.jsxs)("div",{className:"flex gap-2.5",children:[(0,i.jsx)(y.Z,{className:"grow p-2 border-1.5 border-[#abc4ff40] text-base",label:"Min Price",decimalMode:!0,showPlusMinusControls:!0,decimalCount:15,valueToStringOptions:{maxSignificantCount:w(r)},value:l,maxN:a?Number(a):void 0,onBlur:()=>null==s?void 0:s(g.e6.Min),increaseFn:()=>u({val:l,side:g.e6.Min,isIncrease:!0}),decreaseFn:()=>u({val:l,side:g.e6.Min,isIncrease:!1}),onUserInput:(e,t)=>{let{triggerBy:n}=t;e&&"increase-decrease"!==n&&o({val:e,side:g.e6.Min})}}),(0,i.jsx)(y.Z,{className:"grow p-2 border-1.5 border-[#abc4ff40] text-base",label:"Max Price",decimalMode:!0,showPlusMinusControls:!0,decimalCount:15,valueToStringOptions:{maxSignificantCount:w(r)},value:a,minN:l?Number(l):void 0,onBlur:()=>null==s?void 0:s(g.e6.Max),increaseFn:()=>u({val:a,side:g.e6.Max,isIncrease:!0}),decreaseFn:()=>u({val:a,side:g.e6.Max,isIncrease:!1}),onUserInput:(e,t)=>{let{triggerBy:n}=t;e&&"increase-decrease"!==n&&o({val:e,side:g.e6.Max})}})]})}var j=n(90482),Z=(0,d.forwardRef)(function(e,t){var n,y;let N;let{poolFocusKey:w,chartOptions:Z,currentPrice:k,priceMin:C,priceMax:S,priceLabel:P,timeBasis:A,decimals:I,height:B,onPositionChange:T,onInDecrease:D,onAdjustMin:E,title:R,showCurrentPriceOnly:L,hideRangeLine:q,hideRangeInput:z,showZoom:O,hideXAxis:W}=e,_=(0,d.useMemo)(()=>Object.assign([],(null==Z?void 0:Z.points)||[]),[null==Z?void 0:Z.points]),[U,V]=(0,d.useMemo)(()=>[null==Z?void 0:Z.initMinBoundaryX,null==Z?void 0:Z.initMaxBoundaryX],[Z,k]),H=(0,d.useRef)(),K=_.length>0,G=Math.max(I,(0,s.db)((null==k?void 0:k.toFixed(15))||"")+2,8),Q=(0,d.useCallback)(e=>{let{val:t}=e,n=(0,s.db)(new j.Z(t).toFixed(15)||"");return(0,a.V)({val:t,maxLength:I>n?I+2:15})},[I]),{isMobile:X}=(0,l.G)()||{},[Y,$]=(0,d.useState)(_),[J,ee]=(0,d.useState)(.2),[et,en]=(0,d.useState)(!1),[ei,er]=(0,d.useState)({[g.e6.Min]:Number(null==U?void 0:U.toFixed(I))||0,[g.e6.Max]:Number(null==V?void 0:V.toFixed(I))||100}),[el,ea]=(0,d.useState)([]),eo=(0,d.useRef)({min:0,max:100}),eu=(0,d.useRef)(0),es=(0,d.useRef)(""),ec=(0,d.useRef)(),ed=(0,d.useRef)([]),ex=(0,d.useRef)(),em=(0,d.useRef)(),ef=(0,d.useRef)(),ev=(0,d.useRef)(),ep=(0,d.useRef)(),eh=(0,d.useRef)([0,100]),eb=(0,d.useRef)([0,100]),eM=_.length?(_[_.length-1].x-_[0].x)/8/8:0,[eg,ey]=(0,d.useState)(K?g.ow:[0,100]),eN=null==k?void 0:k.toFixed(G);eo.current=eg.length?{min:Number(eg[0])||0,max:Number(eg[eg.length-1])||100}:eo.current;let ew=(0,d.useCallback)(e=>{let t=e=>Math.max(eo.current.min,e,0);if("function"==typeof e){er(n=>{let i=e(n);return{[g.e6.Min]:Q({val:t(i[g.e6.Min])}),[g.e6.Max]:Q({val:i[g.e6.Max]})}});return}er({[g.e6.Min]:Q({val:e.skipCheck?e[g.e6.Min]:t(e[g.e6.Min])}),[g.e6.Max]:Q({val:e[g.e6.Max]})})},[I,_]);(0,d.useEffect)(()=>{let e=(null==Z?void 0:Z.isStable)?.01:.2;ee((null==Z?void 0:Z.isStable)?.01:.2),e_(e)},[null==Z?void 0:Z.isStable,w]),(0,d.useEffect)(()=>{$([]),eo.current={min:0,max:100},(H.current!==w||L)&&(ey(g.ow),er({[g.e6.Min]:0,[g.e6.Max]:0}));let e=(null==Z?void 0:Z.isStable)?[.98,1.02]:[.7,1.3],[t,n]=[U?Number(U.toFixed(Math.max(8,I))):void 0,V?Number(V.toFixed(Math.max(8,I))):void 0];if(!_.length){if(void 0===t||void 0===n)return;_.push({x:t,y:0},{x:n,y:0})}let{smoothCount:i}=(0,g.iE)(_[0].x,_.length);eu.current=i;let r=[],l=e=>!!(t&&e>=t&&n&&e<=n),o=Math.abs(_[1].x-_[0].x);if(t&&t<=Number(_[0].x.toFixed(Math.max(8,I)))+o&&_.unshift({x:Math.max(t-o,0),y:0}),n&&n>=Number(_[_.length-1].x.toFixed(Math.max(8,I)))-o&&_.push({x:n+2*o,y:0}),void 0!==eN){eb.current=[parseFloat(eN)*e[0],n&&n>parseFloat(eN)*e[1]?1.2*n:parseFloat(eN)*e[1]],H.current!==w&&(eh.current=[...eb.current],ey(eh.current));let i=(null==Z?void 0:Z.isStable)?[.98,1.02]:[.95,1.05],[r,l]=[Math.min(null!=C?C:Number(eN),Number(eN),null!=t?t:Number(eN)),Math.max(null!=S?S:Number(eN),Number(eN),null!=n?n:Number(eN))];L&&ey([r*i[0],l*i[1]]),eh.current[0]<=_[0].x&&_.unshift({x:eh.current[0],y:0}),_[_.length-1].x<=eh.current[1]&&_.push({x:eh.current[1],y:0})}let u=_.length-1,[s,c]=[!1,!1],d=_[0].y;for(let e=0;e<u;e++){let[l,o,u]=[_[e-1],_[e],_[e+1]],x=Q({val:o.x});if(t&&x>t&&!s){let e=r.findIndex(e=>e.x>t);r.splice(-1===e?r.length:e,0,{...(null==Z?void 0:Z.baseIn)&&l||o,x:t}),s=!0}if(n&&x>n&&!c){let e=r.findIndex(e=>e.x>n);r.splice(-1===e?r.length:e,0,{...(null==Z?void 0:Z.baseIn)&&l||o,x:n}),c=!0}if(r.push({...o}),s=s||x===t,c=c||x===n,d=Math.max(d,o.y),i>0){let e=(u.x-o.x)/i;for(let t=1;t<=i;t++){let n=(null==Z?void 0:Z.baseIn)?(0,g.lt)(o.y,I):(0,g.lt)(u?u.y:o.y,I);r.push({x:(0,a.V)({val:o.x+e*t,maxLength:G+2}),y:n})}}}u>0&&r.push(_[u]),r[0].x+3*o>(t||0)&&r.unshift({x:.8*r[0].x,y:0}),n&&r[r.length-1].x-o>n&&r.push({x:1.05*r[r.length-1].x,y:0}),$(L?r.map(e=>({...e,position:l((0,g.lt)(e.x,I))?d:void 0})):r)},[_,U,V,I,G,L,w,eN,null==Z?void 0:Z.isStable,null==Z?void 0:Z.baseIn]),(0,d.useEffect)(()=>{(U||V)&&(!K||L||!H.current||H.current!==w)&&(H.current=K?w:void 0,ew({[g.e6.Min]:Number(U.toFixed(G)),[g.e6.Max]:Number(V.toFixed(G))}))},[U,V,ew,K,L,w,L,G]),(0,d.useEffect)(()=>{ea(ed.current)},[ei,eg]),(0,d.useEffect)(()=>{L&&(null==Z?void 0:Z.isStable)&&ez({min:.995*Number(null==U?void 0:U.toFixed(15)),max:1.005*Number(null==V?void 0:V.toFixed(15))})},[_,L,U,V,null==Z?void 0:Z.isStable]),(0,d.useEffect)(()=>(window.addEventListener("mouseup",eF),X&&window.addEventListener("pointerup",eF),()=>{window.removeEventListener("mouseup",eF),X&&window.removeEventListener("pointerup",eF)}),[X]);let eF=(0,d.useCallback)(()=>{var e,t;es.current&&(en(!1),es.current="",null===(e=ep.current)||void 0===e||e.call(ep),null===(t=ef.current)||void 0===t||t.call(ef))},[]),ej=e=>()=>{es.current||(es.current=e,en(!0))},eZ=[],ek=e=>{var t,n;!ed.current.length||e<ed.current[ed.current.length-1]?(ed.current=[e],eZ=[]):ed.current.push(e);let i=(null===(t=_[1])||void 0===t?void 0:t.x)-(null===(n=_[0])||void 0===n?void 0:n.x),r=(0,g.QE)(i)||(0,g.QE)(e),l=(null==Z?void 0:Z.isStable)?(0,s.db)(e.toFixed(15))+1:r>3?r:1,a=(0,o.C)(e.toFixed(l));for(let t=l;t<10&&-1!==eZ.indexOf(a);t++)a=(0,o.C)(e.toFixed(t));return eZ.push(a),a},eC=(0,c.z)(e=>{let{val:t,side:n,queue:i}=e;if(i){ep.current=()=>{eC({val:t,side:n}),ep.current=void 0};return}let r=n===g.e6.Min,l=Math.abs(t-Number(eN||0))/Number(eN||1)/5,[a,o]=[1-l,1+l];eh.current[r?0:1]=t*(r?a:o),ey(eh.current),eL({min:eh.current[0],max:eh.current[1]})}),eS=(0,d.useCallback)(e=>{let{side:t,zoomArea:n,queue:i,...r}=e;N&&clearTimeout(N);let l=()=>{let e=null==T?void 0:T(r);if(!e)return;let[i,l]=[Number(e.priceLower.toFixed(15)),Number(e.priceUpper.toFixed(15))];"area"===t&&(n&&(eC({val:i,side:g.e6.Min}),eC({val:l,side:g.e6.Max})),ew({min:i,max:l,skipCheck:!!n})),t===g.e6.Min&&(ew(e=>({...e,[g.e6.Min]:i})),eC({val:i,side:g.e6.Min,queue:!!es.current})),t===g.e6.Max&&(ew(e=>({...e,[g.e6.Max]:l})),eC({val:l,side:g.e6.Max,queue:!!es.current}))};if(i){ef.current=()=>{l(),ef.current=void 0};return}N=window.setTimeout(l,100)},[T,eC]),eP=(0,d.useCallback)(e=>{if(!es.current||!e)return;let t=e.activeLabel;if(!t)return;let n=es.current;if(ee(0),"area"===es.current){if(void 0===ec.current){ec.current=t;return}let e=t-ec.current;ec.current=t;let i="string"==typeof eg[0],[r,l]=i?[eo.current.min,eo.current.max]:eg;ew(t=>{let[i,a]=[t[g.e6.Min]+e,t[g.e6.Max]+e],o={[g.e6.Min]:i<=r&&i<t[g.e6.Min]||i>=t[g.e6.Max]?t[g.e6.Min]:i,[g.e6.Max]:a>=l&&a>t[g.e6.Max]||a<=t[g.e6.Min]?t[g.e6.Max]:a};return eS({...o,side:n,queue:!0}),o});return}ew(e=>{let i=Math.max(t,0);return es.current===g.e6.Min&&i>=e[g.e6.Max]?(es.current=g.e6.Max,eS({...e,[es.current]:i,side:g.e6.Max,queue:!0}),{...e,[g.e6.Max]:i}):es.current===g.e6.Max&&i<=e[g.e6.Min]?(es.current=g.e6.Min,eS({...e,[es.current]:i,side:g.e6.Min,queue:!0}),{...e,[g.e6.Min]:i}):(eS({...e,[es.current]:i,side:n,queue:!0}),{...e,[es.current]:i})})},[ew,T,eg]),eA=e=>({onPointerDown:ej(e),onMouseDown:ej(e)}),eI=e=>{let t=e===g.e6.Min,[n,i]=[ei[e]-(t?1.5*eM:eM/1.5),ei[e]+(t?eM/1.5:1.5*eM)];return ei[e]?{...eA(e),x1:Math.max(n,t?el[0]:ei[g.e6.Max]),x2:Math.min(i,t?ei[g.e6.Min]:el[el.length-1]),style:{cursor:"grab"},fill:"transparent",isFront:!0}:null},eB=(0,d.useCallback)(()=>{en(!0),ec.current=void 0,es.current="area"},[]),eT=(0,d.useCallback)(e=>{let{val:t,side:n}=e,i=parseFloat(String(t)),r=n===g.e6.Min;er(e=>(setTimeout(()=>{let t=null==T?void 0:T({...e,[n]:i,side:n,userInput:!0});ex.current=t?r?Q({val:t.priceLower.toFixed(15)}):Q({val:t.priceUpper.toFixed(15)}):void 0},100),{...e,[n]:i})),_.length&&$(e=>{let t=e.filter(e=>!e.extend);if(!r&&i>t[t.length-1].x)for(let e=1;;e++){let n=t[t.length-1].x+eM*e;if(t.push({x:n,y:0,extend:!0}),n>i)break}return t})},[eM,_,eS,I]),eD=(0,c.z)(e=>{er(t=>{let n=e?{...t,...e}:t;return n[g.e6.Max]<=n[g.e6.Min]&&E?{...n,[g.e6.Min]:E(n).price}:n})}),eE=(0,d.useCallback)(e=>{if(void 0===ex.current){em.current=window.setTimeout(()=>{eD()},200);return}let t=ex.current;em.current=window.setTimeout(()=>{ee(0),eC({val:t,side:e}),eD({[e]:t})},200),ex.current=void 0},[ew,E]),eR=(0,d.useCallback)(e=>{em.current&&clearTimeout(em.current);let{val:t="",side:n,isIncrease:i}=e,r=n===g.e6.Min,l=Number(t);return i?(er(e=>{let i=null==D?void 0:D({p:Number(t),isMin:r,isIncrease:!0}),a=i?Q({val:i.toFixed(15)}):Q({val:Number(t)+eM});return K&&!r&&a>=(0,g.lt)(e[g.e6.Max],I)&&$(e=>[...e,{x:a+eM,y:0,extend:!0}]),l=a,{...e,[n]:a}}),eC({val:l,side:n}),ee(0),l):(er(e=>{let i=null==D?void 0:D({p:Number(t),isMin:r,isIncrease:!1}),a=i?Q({val:i.toFixed(15)}):Q({val:Number(t)+eM});return l=a,{...e,[n]:a}}),eC({val:l,side:n}),ee(0),l)},[_,K,eM,I]),eL=e=>{let{min:t,max:n}=e;$(e=>{let i=e.filter(e=>!e.extend),r=i[i.length-1].x;if(t<i[0].x)for(let e=0;t<=i[0].x;e++)i.unshift({x:i[0].x-e*eM,y:0,extend:!0});if(n>r)for(let e=1;i[i.length-1].x<=n;e++)i.push({x:r+e*eM,y:0,extend:!0});return i})},eq=()=>{$(e=>e.filter(e=>!e.extend)),ey(eb.current),eh.current=[...eb.current],eo.current={min:K?Y[0].x:10,max:K?Y[Y.length-1].x:100}},ez=e=>{let{min:t,max:n}=e;eo.current={min:t,max:n},eL({min:t,max:n}),ey([t,n]),eh.current=[t,n]},eO=()=>{if(!K)return;let e=(eh.current[1]-eh.current[0])/8,t=eh.current[0]+e,n=eh.current[eh.current.length-1]-e;t>=n||ez({min:t,max:n})},eW=()=>{if(!K)return;let e=(eh.current[1]-eh.current[0])/8,t=eh.current[0]-e,n=eh.current[eh.current.length-1]+e;ez({min:t,max:n})},e_=e=>{var t,n;ee(e),eS({side:"area",min:Number((null===(t=(0,u.dC)(k,1-e))||void 0===t?void 0:t.toFixed(G))||0),max:Number((null===(n=(0,u.dC)(k,1+e))||void 0===n?void 0:n.toFixed(G))||0),zoomArea:!0})};(0,d.useImperativeHandle)(t,()=>({getPosition:()=>ei}),[ei]);let eU={width:28,height:28,background:"linear-gradient(126.6deg, rgba(57, 208, 216, 0.2) 28.69%, rgba(57, 208, 216, 0) 100%)",backdropFilter:"blur(2px)",borderRadius:38,display:"flex",justifyContent:"center",alignItems:"center"},eV=0,eH=Y.filter(e=>!!(e.x>=Number(eg[0])&&e.x<=Number(eg[1]))&&(eV=Math.max(eV,e.y),!0));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex justify-between text-base leading-[22px] text-secondary-title mb-2",children:[R,O&&(0,i.jsxs)("div",{className:"flex gap-2 select-none",children:[(0,i.jsx)("div",{style:eU,children:(0,i.jsx)(r.Z,{size:"sm",onClick:eq,className:"saturate-50 brightness-125 cursor-pointer",iconSrc:"/icons/add-space.svg"})}),(0,i.jsx)("div",{style:eU,children:(0,i.jsx)(r.Z,{size:"sm",onClick:eW,className:"text-[#abc4ff] saturate-50 brightness-125 cursor-pointer",iconSrc:"/icons/zoom-out.svg",canLongClick:!0})}),(0,i.jsx)("div",{style:eU,children:(0,i.jsx)(r.Z,{size:"sm",className:"text-[#abc4ff] saturate-50 brightness-125 cursor-pointer",onClick:eO,iconSrc:"/icons/zoom-in.svg",canLongClick:!0})})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"flex items-center text-xs text-[#ABC4FF]",children:[(0,i.jsx)("span",{className:"inline-block w-[8px] h-[2px] bg-white mr-2"}),(0,i.jsx)("span",{className:"opacity-50 mr-2",children:"Current Price"})," ",(0,o.C)((null==k?void 0:k.toFixed(Math.max(I,G)))||0),(0,i.jsx)("span",{className:"ml-1",children:P})]}),(0,i.jsxs)("div",{className:"flex items-center text-xs text-[#ABC4FF]",children:[(0,i.jsx)("span",{className:"inline-block w-[8px] h-[2px] bg-[#39D0D8] mr-2"}),(0,i.jsxs)("span",{className:"opacity-50 mr-2",children:[A," Price Range"]})," [",(0,o.C)((null==C?void 0:C.toFixed(Math.max(I,G)))||0),","," ",(0,o.C)((null==S?void 0:S.toFixed(Math.max(I,G)))||0),"]"]})]}),(0,i.jsx)("div",{className:"w-full select-none",style:{height:"".concat(B||140,"px")},children:(0,i.jsx)(x.h,{width:"100%",height:"100%",children:(0,i.jsxs)(m.T,{style:{userSelect:"none"},ref:ev,width:500,height:400,margin:{top:15},defaultShowTooltip:!1,data:eH||[],onMouseDown:X?ej(g.e6.Min):void 0,onMouseMove:eP,onMouseUp:eF,children:[(0,i.jsx)(f.u,{...g.uq,...(0,g._Y)("#abc4ff"),fillOpacity:.9,style:{cursor:et?"grab":"default"},type:"step",dataKey:"y"}),(0,i.jsx)(f.u,{...g.uq,...(0,g._Y)(g.pS),fillOpacity:"0.3",dataKey:"position"}),!q&&(0,i.jsx)(v.u,{wrapperStyle:{display:"none"},isAnimationActive:!1,cursor:!1,active:!1}),(0,i.jsx)(p.K,{style:{userSelect:"none",fontSize:"10px",fill:g.e_},type:"number",tickCount:7,tickFormatter:ek,domain:eg,interval:"preserveStartEnd",allowDataOverflow:!0,hide:W,tickLine:!1,dataKey:"x"}),(0,i.jsx)(h.B,{allowDataOverflow:!0,domain:["dataMin",eV],type:"number",hide:!0}),!q&&!isNaN(ei[g.e6.Min])&&(0,i.jsx)(b.d,{...eA(g.e6.Min),stroke:g.nA,className:"cursor-grab",isFront:!0,x:ei[g.e6.Min],strokeWidth:4,label:(0,g.id)({side:g.e6.Min,...eA(g.e6.Min),chartWidth:null===(n=ev.current)||void 0===n?void 0:n.props.width,percent:eN?(ei[g.e6.Min]-parseFloat(eN))/parseFloat(eN)*100:void 0})}),!q&&!isNaN(ei[g.e6.Max])&&(0,i.jsx)(b.d,{...eA(g.e6.Max),stroke:g.nA,className:"cursor-grab",isFront:!0,x:ei[g.e6.Max],strokeWidth:4,label:(0,g.id)({side:g.e6.Max,...eA(g.e6.Max),chartWidth:null===(y=ev.current)||void 0===y?void 0:y.props.width,percent:eN?(ei[g.e6.Max]-parseFloat(eN))/parseFloat(eN)*100:void 0})}),k&&(0,i.jsx)(b.d,{isFront:!0,x:null==k?void 0:k.toSignificant(I),stroke:"#FFF",strokeDasharray:"4",strokeWidth:2}),C&&(0,i.jsx)(b.d,{isFront:!0,x:C,stroke:"#39D0D8",strokeDasharray:"4",strokeWidth:2}),S&&(0,i.jsx)(b.d,{isFront:!0,x:S,stroke:"#39D0D8",strokeDasharray:"4",strokeWidth:2}),K&&!L&&(0,i.jsx)(M.z,{style:{cursor:q?"default":"pointer"},onPointerDown:X&&!q?eB:void 0,onMouseDown:q?void 0:eB,x1:Math.max(ei[g.e6.Min],el[0]||0),x2:Math.min(ei[g.e6.Max],el[el.length-1]||Number.MAX_SAFE_INTEGER),fill:g.pS,fillOpacity:"0.3"}),!q&&(0,i.jsx)(M.z,{...eI(g.e6.Min)}),!q&&(0,i.jsx)(M.z,{...eI(g.e6.Max)})]})})}),L?null:(0,i.jsx)("div",{className:"flex justify-between flex-wrap gap-2",children:[.01,.05,.1,.2,.5].map(e=>(0,i.jsxs)("div",{className:"whitespace-nowrap mb-3 text-xs text-center border flex-1 ".concat(e===J?"border-[#ABC4FF] bg-[#141041]":"border-[#36427D] opacity-50"," rounded-lg py-1 px-2 cursor-pointer"),onClick:()=>e_(e),children:["\xb1 ",100*e,"%"]},e))}),!z&&(0,i.jsx)(F,{decimals:Math.max(8,I+2),minValue:ei.min,maxValue:ei.max,onBlur:eE,onPriceChange:eT,onInDecrease:eR})]})})},63675:function(e,t,n){n.d(t,{QE:function(){return v},_Y:function(){return d},e6:function(){return r},e_:function(){return o},iE:function(){return x},id:function(){return f},lt:function(){return m},nA:function(){return u},ow:function(){return s},pS:function(){return a},uq:function(){return c}});var i,r,l=n(85893);(i=r||(r={})).Min="min",i.Max="max";let a="#1B365F",o="#abc4ff80",u="#256491",s=["dataMin","dataMax"],c={legendType:"none",tooltipType:"none",animateNewValues:!1,isAnimationActive:!1,activeDot:!1,dot:!1,type:"step"},d=e=>({fill:e,stroke:"transparent"}),x=(e,t)=>{let n={precision:1,smoothCount:10};return e<.1?n.precision=4:e<1?n.precision=2:e<100&&(n.precision=1),t<100&&(n.smoothCount=20),t>=1e3&&(n.smoothCount=0),n},m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return e?parseFloat(Number(e).toFixed(t)):0},f=e=>t=>{let{side:n,percent:i,chartWidth:a,...o}=e,s=t.viewBox.x-(n===r.Min?30:-30),c=!1;return(s<15||a&&s>a-15)&&(c=!0),(0,l.jsxs)("g",{...o,children:[(0,l.jsx)("rect",{x:t.viewBox.x-(n===r.Min?c?-5:48:c?40:-14),y:t.viewBox.y,fill:"rgba(171, 196, 255, 0.15)",width:34,height:21,rx:"4"}),(0,l.jsxs)("text",{className:"break-words",fill:"#ABC4FF",y:t.viewBox.y+12,x:t.viewBox.x-(n===r.Min?c?-20:30:c?20:-30),style:{fontWeight:"500",fontSize:12,background:"red"},textAnchor:"middle",dominantBaseline:"middle",children:[i&&i>0?"+":"",i?"".concat(Math.ceil(Number(i.toFixed(2))),"%"):""]}),(0,l.jsx)("rect",{x:t.viewBox.x-(n===r.Min?12:0),y:t.viewBox.y,fill:u,width:12,height:28,rx:"2"}),(0,l.jsx)("rect",{x:t.viewBox.x-(n===r.Min?4:-4),y:t.viewBox.y+10,fill:"#FFF",width:1,height:10}),(0,l.jsx)("rect",{x:t.viewBox.x-(n===r.Min?7:-7),y:t.viewBox.y+10,fill:"#FFF",width:1,height:10})]})};function v(e){if(!e)return 0;let t=0;for(;1>Math.abs(e*10**t);)t++;return t}}}]);