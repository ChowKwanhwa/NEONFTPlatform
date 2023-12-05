"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{99186:function(e,n,t){var i=t(57389),o=t(72006),l=t(4405),r=t(77637),a=t(16704),c=t(59496),s=t(13068),d=t(31286),u=t(37788),h=t(3094),f=t(65701),p=t(54235),g=t(92608),v=t(43226),Z=t.n(v),m=t(70464),x=t(86878),b=t(66501),k=(0,d.k)((function(e){return{Root:{fontSize:14,fontWeight:"bold","&.connected":{background:e.other.colors.Black1}}}}));n.Z=(0,g.Pi)((function(e){var n=e.children,t=(e.miniMode,e.unstyledButton),d=(0,r.Z)(e,["children","miniMode","unstyledButton"]),v=k(),w=v.classes,y=v.cx,C=(0,s.$G)().t,B=(0,p.oR)().god,N=(B.account,(0,x.g0)().switchNetwork),M=(0,c.useRef)();M.current=N;var S=(0,g.fv)((function(){return{connectButtonLoading:!1,get connectButtonState(){return this.connectButtonLoading?{children:(0,a.BX)(a.HY,{children:[(0,a.tZ)(u.a,{size:"sm",color:"white",mr:6}),C("pass.mint.step1.btn-text-loading")]}),click:Z()}:B.isConnect?B.isSupportChain?{children:(0,a.BX)("div",{className:"flex items-center",children:[(0,a.tZ)(b.Z,{size:24,enableChange:!0,address:B.currentNetwork.account}),(0,a.tZ)(h.x,{sx:{flex:1,marginLeft:4,overflow:"hidden",whiteSpace:"normal"},children:(0,a.tZ)(m.Z,{component:"div",lineClamp:1,children:B.walletDisplayName})})]}),click:function(){return B.currentNetwork.walletInfo.visible=!0}}:{text:"switch_network",click:function(){var e;return null===(e=M.current)||void 0===e?void 0:e.call(M,B.defaultChainId)}}:{text:"pass.mint.step1.btn-text-connect",click:B.showConnector}}}})),P=(0,c.useCallback)((function(e){var n,t,i;null===(n=d.onClick)||void 0===n||n.call(d,e),null===(i=(t=S.connectButtonState).click)||void 0===i||i.call(t)}),[d,S.connectButtonState]);return B.isConnect?n?(0,a.tZ)(a.HY,{children:n}):(0,a.tZ)(f.z,(0,l.Z)((0,o.Z)({},d),{onClick:P,className:y(w.Root,"connected",d.className),children:(null===d||void 0===d?void 0:d.btnText)||S.connectButtonState.children||C(S.connectButtonState.text||"pass.mint.step1.btn-text-connect")})):(0,a.tZ)(f.z,(0,l.Z)((0,o.Z)({},d),{onClick:P,className:y((0,i.Z)({btn:!t,"btn-primary":!t},w.Root,!t),d.className),children:(null===d||void 0===d?void 0:d.btnText)||S.connectButtonState.children||C(S.connectButtonState.text||"pass.mint.step1.btn-text-connect")}))}))},27469:function(e,n,t){var i=t(16704),o=t(54235),l=t(31286),r=t(43704),a=t(67313),c=t(92608),s=(t(59496),t(13068)),d=t(84878),u=t(86878),h=t(93793),f=t(12322),p=(t(85524),t(24008)),g=t(22851),v=(t(5763),t(88403)),Z=(0,l.k)((function(e){e.colors;return{WalletAlert:{position:"fixed",top:56,left:"0",width:"100%",whiteSpace:"nowrap",zIndex:11,background:"rgba(224, 49, 49)",cursor:"pointer",textAlign:"center",fontSize:14}}}));(0,c.Pi)((function(){var e=Z().classes,n=(0,o.oR)().god,t=((0,s.$G)().t,(0,u.mA)());t.address,t.isConnecting,t.isDisconnected,t.connector,t.isConnected;return n.isConnect&&!n.isSupportChain?(0,i.tZ)(r.b,{onClick:function(){(0,d.k)(n.defaultChainId)},className:e.WalletAlert,radius:0,color:"grey.0",styles:function(e){var n=e.colors;return{root:{background:n.orange[9]+"!important"},message:{color:n.grey[0]}}},children:(0,i.tZ)(s.cC,{i18nKey:"switch_network_tips",components:{s:(0,i.tZ)(a.x,{component:"span",underline:!0})},ns:"main",values:{network:"ETH"}})}):null}));n.Z=function(e){var n=e.children,t=(Z().classes,(0,o.oR)()),l=t.god,r=t.alien,a=(0,s.$G)(),d=(a.t,a.i18n),m=((0,o.oR)().setting,(0,v.useRouter)().locale,d.language);return(0,i.tZ)(u.eM,{config:h.ZP,children:(0,i.BX)(p.pj,{locale:m,chains:h.p5,theme:(0,g.$)(),children:[(0,i.tZ)(f.Z.WalletSelector,{}),(0,i.tZ)(f.Z.ETHProvider,{}),(0,i.tZ)(f.Z.ShoppingcartDrawer,{}),(0,i.tZ)(f.Z.SignModal,{}),n,(0,i.tZ)(c.Qj,{children:function(){return l.account&&r.isAlienLogin?(0,i.BX)(i.HY,{children:[(0,i.tZ)(f.Z.WalletInfo,{}),(0,i.tZ)(f.Z.DepositOptionsModal,{}),(0,i.tZ)(f.Z.DepositNFTModal,{}),(0,i.tZ)(f.Z.ZeroGasBidPoolDialog,{}),(0,i.tZ)(f.Z.MakeOfferModal,{}),(0,i.tZ)(f.Z.NFTBuyConfirmModal,{}),(0,i.tZ)(f.Z.ListingModal,{}),(0,i.tZ)(f.Z.AggregateCreateOrderModal,{}),(0,i.tZ)(f.Z.TransferModal,{}),(0,i.tZ)(f.Z.ZeroGasListingModal,{}),(0,i.tZ)(f.Z.ZeroGasNFTBuyConfirmModal,{}),(0,i.tZ)(f.Z.ZeroGasMakeOfferModal,{})]}):null}})]})})}},27039:function(e,n,t){var i=t(16704),o=t(59496),l=t(31286),r=t(65323),a=t(67337),c=(0,l.k)((function(e){e.other.colors;return{root:{display:"flex",".animation-sidebar-inner":{flex:1,display:"flex",flexDirection:"column"}}}})),s=function(e){var n=e.visible,t=e.width,o=void 0===t?372:t,l=e.children,s=c(),d=s.classes,u=s.cx;return(0,i.tZ)(r.M,{children:n&&(0,i.tZ)(a.E.aside,{initial:{width:0},animate:{width:o},exit:{width:0,transition:{duration:.15,delay:.2}},className:u("animation-sidebar-wrapper",d.root),children:(0,i.tZ)(a.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.15}},exit:{opacity:0},className:"animation-sidebar-inner",children:l})})})};n.Z=(0,o.memo)(s)},52549:function(e,n,t){t.d(n,{q:function(){return _}});var i=t(57389),o=t(72006),l=t(4405),r=t(16704),a=t(59496),c=t(13068),s=t(31286),d=t(3094),u=t(34331),h=t(94040),f=t(90174),p=t(96582),g=t(67313),v=t(27151),Z=t(6958),m=t(54235),x=t(88403),b=t(92608),k=t(66501),w=t(13913),y=t(84173),C=t(11287),B=t(27039),N=t(69716),M=t.n(N),S=t(95889),P=t(80961),T=t(33048),z=(0,s.k)((function(e){var n=e.colors;return{root:{position:"relative",width:220,".menu-user":{color:n.text[1],fontSize:16,lineHeight:"20px",".sub-title":{color:n.text[3],fontSize:12,lineHeight:"16px"}},".end-tag":{minWidth:68,height:16,borderRadius:22,background:n.bg[3],color:n.text[2],fontSize:12,lineHeight:1,padding:"0 4px 0 1px"}},menuItem:{flex:1,padding:"10px 12px",color:n.text[1],fontSize:16,lineHeight:"20px",minHeight:48,cursor:"pointer",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"space-between","&:hover":{background:n.bg[3]},"> a":{width:"100%",height:"100%",display:"flex",alignItems:"center"}},downLIne:{marginBottom:12,position:"relative","&:before":{position:"absolute",bottom:-6,left:0,content:'" "',width:"100%",height:1,background:n.line[2]}},topLIne:{marginTop:12,position:"relative","&:before":{position:"absolute",top:-6,left:0,content:'" "',width:"100%",height:1,background:n.line[2]}}}})),_=[{label:"English",abbreviation:"EN",lng:"en"},{label:"\u7b80\u4f53\u4e2d\u6587",abbreviation:"ZH",lng:"zh-CN"},{label:"\u65e5\u672c\u8a9e",abbreviation:"JA",lng:"ja"}],L=function(e){var n,t,s,h,f=e.item,p=e.onClick,g=e.sx,v=z(),Z=v.classes,m=v.cx,x=(0,c.$G)().t,b=(0,a.useMemo)((function(){var e;return p||f.onClick||!(null===f||void 0===f?void 0:f.href)?"":0===(null===f||void 0===f||null===(e=f.href)||void 0===e?void 0:e.indexOf("http"))?"a":M()}),[f,p]);return(0,r.tZ)(d.x,(0,l.Z)((0,o.Z)({className:m(Z.menuItem,(h={},(0,i.Z)(h,Z.downLIne,f.downLine),(0,i.Z)(h,Z.topLIne,f.topLine),h)),sx:(0,o.Z)({},g,(null===(n=f.boxProps)||void 0===n?void 0:n.sx)||{}),onClick:function(e){p&&(e.stopPropagation(),e.preventDefault(),p())}},f.boxProps),{children:(0,r.tZ)(d.x,{component:b,href:(null===f||void 0===f?void 0:f.href)||"",passHref:!0,target:0===(null===f||void 0===f||null===(t=f.href)||void 0===t?void 0:t.indexOf("http"))?"_blank":"",onClick:function(e){f.href&&e.stopPropagation(),f.onClick&&f.onClick()},sx:{flex:1},children:(0,r.tZ)("a",{style:{flex:1},children:(0,r.BX)(u.Z,{spacing:8,noWrap:!0,position:"apart",children:[(0,r.BX)(u.Z,{noWrap:!0,spacing:4,sx:{flexGrow:1,whiteSpace:"nowrap"},children:[f.icon,f.title,f.isEndTag&&(0,r.BX)(u.Z,{className:"end-tag",spacing:0,align:"center",noWrap:!0,children:[(0,r.tZ)(P.FuB,{})," ",x("activity_ended",{ns:"main"})]})]}),!!(null===f||void 0===f||null===(s=f.list)||void 0===s?void 0:s.length)&&(0,r.BX)(u.Z,{spacing:4,children:[f.label,(0,r.tZ)(y.jfD,{size:20})]})]})})})}))};n.Z=(0,b.Pi)((function(e){var n,t,i,l,s,b=e.isToken2049,N=void 0!==b&&b,M=e.hideMenus,P=void 0===M?[]:M,E=z(),G=E.classes,I=(E.cx,(0,h.rZ)()),D=(0,c.$G)(),F=D.t,H=D.i18n.language,X=((0,x.useRouter)(),(0,m.oR)()),R=X.god,W=(X.user,X.setting),A=X.alien,O="https://www.alienswap.xyz?invite_code=".concat((null===(n=A.userMeta.value)||void 0===n?void 0:n.invite_code)||""),j=(0,a.useMemo)((function(){var e=_.find((function(e){return e.lng===H}));return(null===e||void 0===e?void 0:e.abbreviation)||"EN"}),[H]),$=(0,a.useMemo)((function(){var e,n;return[R.account&&{title:(0,r.BX)(u.Z,{spacing:8,className:"menu-user",pt:6,pb:6,children:[(0,r.tZ)(k.Z,{size:24,address:(null===(e=R.account)||void 0===e?void 0:e.toString())||""}),(0,r.BX)(f.K,{spacing:1,sx:{flexGrow:1},children:[(0,r.tZ)("div",{hidden:N,children:F("portfolio",{ns:"main"})}),(0,r.tZ)("div",{className:"sub-title",children:(0,w.sC)(null===(n=R.account)||void 0===n?void 0:n.toString())})]})]}),boxProps:{sx:{padding:"0 12px"}},downLine:!0,topLine:!1,href:N?void 0:"/portfolio",key:"account"},!N&&{key:"invite",title:(0,r.tZ)(d.x,{className:"btn btn-primary",sx:{height:48,width:"100%",padding:"8px 12px",flexGrow:1},children:(0,r.BX)(u.Z,{position:"apart",children:[(0,r.tZ)(p.q,{value:O,children:function(e){e.copied;var n=e.copy;return(0,r.BX)(f.K,{spacing:2,sx:{flexGrow:1},onClick:function(){n(),T.default.success(F("assets.copied"))},children:[(0,r.tZ)(g.x,{color:"rgba(255, 255, 255, 0.9)",size:14,align:"left",sx:{lineHeight:"16px"},children:F("referral",{ns:"main"})}),(0,r.tZ)(g.x,{color:"rgba(255, 255, 255, 0.6)",size:12,align:"left",sx:{lineHeight:"16px"},children:F("copy_referral_link",{ns:"main"})})]})}}),(0,r.tZ)(S.Z,{title:F("invite_text"),url:O,hashtags:["NFTdrop","NFT"],via:"AlienSwap_NFT",children:(0,r.tZ)(v.A,{sx:(0,o.Z)({},I.fn.hover({backgroundColor:"rgba(0,0,0,.1)"})),mr:-2,children:(0,r.tZ)(C.rj,{size:20})})})]})}),boxProps:{sx:{padding:"0"}}},{title:"Launchpad",href:"/launchpad/akb48",key:"launchpad"},!N&&{title:F("flash_sell",{ns:"main"}),href:"/flash-sell",key:"flash-sell"},!N&&{title:F("p1_rewards",{ns:"main"}),list:[{title:F("nft_Influencer",{ns:"main"}),href:"/plan"},{title:F("loyalty_rewards",{ns:"main"}),href:"/loyalty",isEndTag:!0},{title:F("mystery_box",{ns:"main"}),href:"/mystery-box",isEndTag:!0},{title:F("waitlist",{ns:"main"}),href:"/waitlist",isEndTag:!0}],key:"reward"},{key:"language",title:F("language",{ns:"main"}),label:j,list:_.map((function(e){return{title:(0,r.BX)(u.Z,{position:"apart",sx:{flex:1},children:[(0,r.tZ)("div",{children:e.label}),H===e.lng&&(0,r.tZ)(y.ffJ,{color:"#7559FF",size:18})]}),onClick:function(){W.changeLanguage(e.lng)}}}))},R.account&&{title:F("disconnect",{ns:"main"}),icon:(0,r.tZ)(y.Opj,{size:18}),topLine:!0,onClick:function(){R.walletDisconnect()},key:"logout"}].filter((function(e){return Boolean(e)&&!P.includes(null===e||void 0===e?void 0:e.key)}))}),[F,R,H,j,N]),K=(0,a.useState)({}),q=K[0],Y=K[1],J=(0,a.useState)(!0),Q=J[0],U=J[1];return(0,r.BX)(Z.k,{sx:{width:220,overflow:"hidden"},children:[(0,r.tZ)(B.Z,{visible:Q,width:220,children:(0,r.tZ)(f.K,{className:G.root,spacing:0,children:$.map((function(e,n){var t,i;return(null===e||void 0===e||null===(t=e.list)||void 0===t?void 0:t.length)&&(i=function(){Y({parent:e,list:null===e||void 0===e?void 0:e.list}),U(!1)}),(0,r.tZ)(L,{item:e,onClick:i},n)}))})}),(0,r.tZ)(B.Z,{visible:!Q,width:220,children:(0,r.BX)(f.K,{className:G.root,spacing:0,children:[(0,r.tZ)(L,{item:{title:null===q||void 0===q||null===(t=q.parent)||void 0===t?void 0:t.title,icon:(0,r.tZ)(y.jW7,{})},onClick:function(){U(!0)}},"menu-header"),null===q||void 0===q||null===(i=q.parent)||void 0===i||null===(l=i.list)||void 0===l?void 0:l.map((function(e,n){return(0,r.tZ)(L,{item:e,sx:{}},n)})),(null===q||void 0===q||null===(s=q.parent)||void 0===s?void 0:s.list.length)<=3&&(0,r.tZ)("div",{style:{width:"100%",height:"5px"}})]})})]})}))},12322:function(e,n,t){t(59496);var i=t(56700),o=t.n(i);function l(e){return o()(e,{ssr:!1,loading:function(){return null}})}var r={WalletSelector:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(7685),t.e(1946),t.e(5492),t.e(8823),t.e(4107),t.e(468),t.e(4817),t.e(8624)]).then(t.bind(t,26186))})),WalletInfo:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(4779),t.e(2899),t.e(7685),t.e(1946),t.e(5878),t.e(5492),t.e(1454),t.e(8823),t.e(2592),t.e(2950),t.e(468),t.e(4903),t.e(654),t.e(8654),t.e(4817),t.e(8375),t.e(2360)]).then(t.bind(t,66071))})),ShoppingcartDrawer:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(7685),t.e(1946),t.e(5492),t.e(8823),t.e(4107),t.e(468),t.e(4817),t.e(8624)]).then(t.bind(t,40210))})),MakeOfferModal:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(4779),t.e(2899),t.e(7685),t.e(1946),t.e(5878),t.e(5492),t.e(1454),t.e(8823),t.e(2592),t.e(2950),t.e(468),t.e(4903),t.e(654),t.e(8654),t.e(4817),t.e(8375),t.e(2360)]).then(t.bind(t,43213))})),ListingModal:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(4779),t.e(2899),t.e(7685),t.e(1946),t.e(5878),t.e(5492),t.e(1454),t.e(8823),t.e(2592),t.e(2950),t.e(468),t.e(4903),t.e(654),t.e(8654),t.e(4817),t.e(8375),t.e(2360)]).then(t.bind(t,46744))})),NFTBuyConfirmModal:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(4779),t.e(2899),t.e(7685),t.e(1946),t.e(5878),t.e(5492),t.e(1454),t.e(8823),t.e(2592),t.e(2950),t.e(468),t.e(4903),t.e(654),t.e(8654),t.e(4817),t.e(8375),t.e(2360)]).then(t.bind(t,6150))})),SignModal:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(7685),t.e(1946),t.e(5492),t.e(8823),t.e(4107),t.e(468),t.e(4817),t.e(8624)]).then(t.bind(t,14590))})),ETHProvider:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(7685),t.e(1946),t.e(5492),t.e(8823),t.e(4107),t.e(468),t.e(4817),t.e(8624)]).then(t.bind(t,95781))})),AggregateCreateOrderModal:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(4779),t.e(2899),t.e(7685),t.e(1946),t.e(5878),t.e(5492),t.e(1454),t.e(8823),t.e(2592),t.e(2950),t.e(468),t.e(4903),t.e(654),t.e(8654),t.e(4817),t.e(8375),t.e(2360)]).then(t.bind(t,8375))})),TransferModal:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(4779),t.e(2899),t.e(7685),t.e(1946),t.e(5878),t.e(5492),t.e(1454),t.e(8823),t.e(2592),t.e(2950),t.e(468),t.e(4903),t.e(654),t.e(8654),t.e(4817),t.e(8375),t.e(2360)]).then(t.bind(t,64473))})),ZeroGasListingModal:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(4779),t.e(2899),t.e(7685),t.e(1946),t.e(5878),t.e(5492),t.e(1454),t.e(8823),t.e(2592),t.e(2950),t.e(468),t.e(4903),t.e(654),t.e(8654),t.e(4817),t.e(8375),t.e(2360)]).then(t.bind(t,98414))})),ZeroGasNFTBuyConfirmModal:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(4779),t.e(2899),t.e(7685),t.e(1946),t.e(5878),t.e(5492),t.e(1454),t.e(8823),t.e(2592),t.e(2950),t.e(468),t.e(4903),t.e(654),t.e(8654),t.e(4817),t.e(8375),t.e(2360)]).then(t.bind(t,81519))})),ZeroGasBidPoolDialog:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(4779),t.e(2899),t.e(7685),t.e(1946),t.e(5878),t.e(5492),t.e(1454),t.e(8823),t.e(2592),t.e(2950),t.e(468),t.e(4903),t.e(654),t.e(8654),t.e(4817),t.e(8375),t.e(2360)]).then(t.bind(t,9137))})),DepositOptionsModal:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(4779),t.e(2899),t.e(7685),t.e(1946),t.e(5878),t.e(5492),t.e(1454),t.e(8823),t.e(2592),t.e(2950),t.e(468),t.e(4903),t.e(654),t.e(8654),t.e(4817),t.e(8375),t.e(2360)]).then(t.bind(t,97040))})),DepositNFTModal:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(4779),t.e(2899),t.e(7685),t.e(1946),t.e(5878),t.e(5492),t.e(1454),t.e(8823),t.e(2592),t.e(2950),t.e(468),t.e(4903),t.e(654),t.e(8654),t.e(4817),t.e(8375),t.e(2360)]).then(t.bind(t,65298))})),ZeroGasMakeOfferModal:l((function(){return Promise.all([t.e(9774),t.e(3900),t.e(1743),t.e(4779),t.e(2899),t.e(7685),t.e(1946),t.e(5878),t.e(5492),t.e(1454),t.e(8823),t.e(2592),t.e(2950),t.e(468),t.e(4903),t.e(654),t.e(8654),t.e(4817),t.e(8375),t.e(2360)]).then(t.bind(t,6487))}))};n.Z=r},70464:function(e,n,t){t.d(n,{q:function(){return h}});var i=t(57389),o=t(72006),l=t(4405),r=t(77637),a=t(16704),c=t(59496),s=t(31286),d=t(67313),u=t(57202),h={red:"linear-gradient(112.37deg, #D9373A 14.58%, #E2973F 85.42%)",green:"linear-gradient(112.37deg, #19B244 14.58%, #1D94C6 85.42%)"},f=(0,s.k)((function(e,n){var t,i=e.other.colors,o=h[null!==(t=n.textStyle)&&void 0!==t?t:""]||n.textStyle;return{text:{background:o||i.Brand1,backgroundClip:"text",textFillColor:"transparent",cursor:(null===n||void 0===n?void 0:n.onClick)?"pointer":"inherit",color:"#4776E6"},hover:{cursor:(null===n||void 0===n?void 0:n.onClick)?"pointer":"inherit","&:hover":{background:o||i.Brand1,backgroundClip:"text",textFillColor:"transparent",cursor:n.onClick?"pointer":"inherit",color:"#8E54E9"}}}})),p=c.forwardRef((function(e,n){var t,c=e.className,s=(e.textStyle,(0,r.Z)(e,["className","textStyle"])),u=f(e),h=u.classes,p=u.cx;return(0,a.tZ)(d.x,(0,l.Z)((0,o.Z)({ref:n,component:"span",inherit:!s.size,className:p((t={},(0,i.Z)(t,h.text,!e.disabled&&!e.color&&!e.hover),(0,i.Z)(t,h.hover,e.hover),t),c)},s),{style:{color:e.color,backgroundImage:e.backgroundImage},children:e.children}))}));p.displayName="PrimaryText",n.Z=(0,u.F)(p)}}]);