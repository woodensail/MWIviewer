var Be=(b,i,e)=>new Promise((S,f)=>{var g=t=>{try{y(e.next(t))}catch(p){f(p)}},w=t=>{try{y(e.throw(t))}catch(p){f(p)}},y=t=>t.done?S(t.value):Promise.resolve(t.value).then(g,w);y((e=e.apply(b,i)).next())});(self.webpackChunk=self.webpackChunk||[]).push([[866],{74222:function(b,i,e){"use strict";e.a(b,function(S,f){return Be(this,null,function*(){try{let U=function(){var K=(0,h.useState)([]),A=o()(K,2),Fe=A[0],ke=A[1],Re=(0,h.useState)(null),ee=o()(Re,2),P=ee[0],we=ee[1],He=(0,d.Z)("MWIviewer_selectedItem",{defaultValue:"231"}),ae=o()(He,2),J=ae[0],re=ae[1],Ge=(0,h.useState)(0),te=o()(Ge,2),oe=te[0],ne=te[1],Te=(0,h.useState)(0),le=o()(Te,2),E=le[0],Ae=le[1],ze=(0,d.Z)("MWIviewer_changeSourceFlag",{defaultValue:"1"}),ie=o()(ze,2),Je=ie[0],Ye=ie[1],Ve=(0,d.Z)("MWIviewer_historyLimit",{defaultValue:"0"}),se=o()(Ve,2),Q=se[0],Ne=se[1],Le=(0,d.Z)("MWIviewer_source",{defaultValue:"https://raw.gitmirror.com"}),ue=o()(Le,2),ce=ue[0],Ze=ue[1],he=(0,h.useRef)(null),D=(0,O.Z)(function(){var s=F()(v()().mark(function r(a){var u,c,C,R,z,X,V,me,de,W,Ce;return v()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return(u=he.current)===null||u===void 0||u.abort(),c=he.current=new AbortController,ne(0),B.next=5,fetch("".concat(ce,"/holychikenz/MWIApi/main/market.db"),{signal:c.signal});case 5:return C=B.sent,Ae(Number(C.headers.get("content-length")||1)),B.next=9,(0,N.j)(C.body,ne);case 9:return R=B.sent,z=ye.from(R,"base64"),X=new Uint8Array(z),V=new pe.Database(X),me=V.exec("select * from ask order by time desc limit 720")[0],de=V.exec("select * from bid order by time desc limit 720")[0],W={ask:me,bid:de,time:Date.now()},Ce=G().compress(JSON.stringify(W)),localStorage.setItem("MWIviewer_data",Ce),Se(W,a),B.abrupt("return",W);case 20:case"end":return B.stop()}},r)}));return function(r){return s.apply(this,arguments)}}(),{manual:!0}),q=D.run,fe=D.loading,Pe=D.cancel;(0,h.useEffect)(function(){var s=localStorage.getItem("MWIviewer_data");if(!s)q(!0);else{var r=JSON.parse(G().decompress(s));r.time>=Date.now()-1e3*60*60*24?Se(r,!0):q(!0)}},[]);function Se(s,r){var a=s.ask.columns;we(s);var u={};a.forEach(function(c,C){u[c]=C+""}),ke(L.e.map(function(c){var C=o()(c,2),R=C[0],z=C[1];if(r){var X=new URLSearchParams(location.search),V=X.get("item");(R===V||z===V)&&re(u[R])}return{value:u[R],en:R,zh:z,label:z}}).filter(function(c){return c.value}))}var ge=(0,h.useMemo)(function(){if(!P||!J)return null;var s=P.ask.values[0][0],r=[].concat(t()(P.ask.values.map(function(a){return{dateStr:m()(a[0]*1e3).format("MM-DD HH\u70B9"),date:a[0],price:a[J],type:"\u5356\u4EF7"}})),t()(P.bid.values.map(function(a){return{dateStr:m()(a[0]*1e3).format("MM-DD HH\u70B9"),date:a[0],price:a[J],type:"\u4E70\u4EF7"}}))).filter(function(a){return a.price!==-1}).reverse();return Q==="0"?r:r.filter(function(a){return a.date>s-60*60*24*Number(Q)})},[P,J,Q]);return(0,l.jsxs)("div",{className:I.Z.container,children:[(0,l.jsxs)("div",{className:I.Z.header,children:[(0,l.jsx)(n.Z,{className:I.Z.select,options:Fe,showSearch:!0,value:J,onChange:re,filterOption:function(r,a){var u,c;return a.en.toLowerCase().includes(r.toLowerCase())||((u=a.zh)===null||u===void 0||(c=u.includes)===null||c===void 0?void 0:c.call(u,r))}}),(0,l.jsxs)("span",{children:["\u663E\u793A\u6700\u8FD1",(0,l.jsx)(n.Z,{value:Q,onSelect:Ne,style:{width:100,margin:"0 8px"},options:[{value:"0",label:"\u6240\u6709"},{value:"14",label:"2\u5468"},{value:"7",label:"1\u5468"},{value:"3",label:"3\u5929"},{value:"1",label:"1\u5929"}]}),"\u7684\u6570\u636E"]}),(0,l.jsxs)("span",{children:["\u9009\u62E9\u6570\u636E\u6E90",(0,l.jsx)(n.Z,{value:ce,onSelect:function(r){Ze(r),Pe()},style:{width:100,margin:"0 8px"},options:[{value:"https://raw.githubusercontent.com",label:"\u539F\u59CB\u6570\u636E"},{value:"https://raw.gitmirror.com",label:"gitmirror"}]})]}),(0,l.jsx)(j.ZP,{loading:fe,onClick:function(){return q(!1)},children:"\u5237\u65B0\u6570\u636E"})]}),fe&&(0,l.jsxs)(l.Fragment,{children:[E&&(0,l.jsx)(M.Z,{percent:Math.floor(oe/Number(E)*100)}),(0,l.jsx)(be.Z,{message:"\u6570\u636E\u5E93\u6587\u4EF6\u8F83\u5927\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\uFF0C\u5F53\u524D\u8FDB\u5EA6: ".concat((0,_.Z)(oe)," / ").concat((0,_.Z)(E)),type:"warning"})]}),ge&&(0,l.jsx)($.Z,w()(w()({},ve),{},{data:ge}))]})};e.r(i),e.d(i,{default:function(){return U}});var g=e(26068),w=e.n(g),y=e(15558),t=e.n(y),p=e(90228),v=e.n(p),H=e(87999),F=e.n(H),Y=e(48305),o=e.n(Y),N=e(70126),L=e(40701),h=e(75271),$=e(20288),k=e(9692),x=e.n(k),Z=e(37581),G=e.n(Z),T=e(16483),m=e.n(T),d=e(90328),O=e(93773),n=e(59636),j=e(81285),M=e(79548),be=e(12646),_=e(24943),I=e(76643),l=e(52676),ye=e(36379).Buffer,pe=yield x()({}),ve={xField:"date",yField:"price",seriesField:"type",axis:{x:{labelFormatter:function(A){return m()(A*1e3).format("MM-DD HH\u70B9")}}},tooltip:{title:"dateStr"},slider:{x:{labelFormatter:function(A){return m()(A*1e3).format("MM-DD HH\u70B9")}},y:{labelFormatter:"~s"}}};f()}catch(U){f(U)}})},1)},70126:function(b,i,e){"use strict";e.d(i,{j:function(){return y}});var S=e(90228),f=e.n(S),g=e(87999),w=e.n(g);function y(v,H){return t.apply(this,arguments)}function t(){return t=w()(f()().mark(function v(H,F){var Y,o,N,L,h,$,k,x,Z,G,T,m,d;return f()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:Y=H.getReader(),o=[],N=0;case 3:return n.next=6,Y.read();case 6:if(h=n.sent,$=h.done,k=h.value,!$){n.next=11;break}return n.abrupt("break",16);case 11:N+=(L=k==null?void 0:k.length)!==null&&L!==void 0?L:0,F==null||F(N),o.push(k),n.next=3;break;case 16:for(x=o.reduce(function(j,M){return j+M.length},0),Z=new Uint8Array(x),G=0,T=0,m=o;T<m.length;T++)d=m[T],Z.set(d,G),G+=d.length;return n.abrupt("return",p(Z));case 21:case"end":return n.stop()}},v)})),t.apply(this,arguments)}function p(v){var H=Array.from(v).map(function(F){return String.fromCharCode(F)}).join("");return btoa(H)}},24943:function(b,i){"use strict";i.Z=function(e){if(e===0)return"0 B";var S=1024,f=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],g=Math.floor(Math.log(e)/Math.log(S));return parseFloat((e/Math.pow(S,g)).toPrecision(3))+" "+f[g]}},40701:function(b,i,e){"use strict";e.d(i,{e:function(){return S}});var S=[["Coin","\u91D1\u5E01"],["Task Token","\u4EFB\u52A1\u4EE3\u5E01"],["Chimerical Token","\u5947\u5E7B\u4EE3\u5E01"],["Sinister Token","\u9634\u68EE\u4EE3\u5E01"],["Enchanted Token","\u79D8\u6CD5\u4EE3\u5E01"],["Cowbell","\u725B\u94C3"],["Bag Of 10 Cowbells","\u725B\u94C3\u888B (10\u4E2A)"],["Purple's Gift","\u5C0F\u7D2B\u725B\u7684\u793C\u7269"],["Small Meteorite Cache","\u5C0F\u9668\u77F3\u8231"],["Medium Meteorite Cache","\u4E2D\u9668\u77F3\u8231"],["Large Meteorite Cache","\u5927\u9668\u77F3\u8231"],["Small Artisan's Crate","\u5C0F\u5DE5\u5320\u5323"],["Medium Artisan's Crate","\u4E2D\u5DE5\u5320\u5323"],["Large Artisan's Crate","\u5927\u5DE5\u5320\u5323"],["Small Treasure Chest","\u5C0F\u5B9D\u7BB1"],["Medium Treasure Chest","\u4E2D\u5B9D\u7BB1"],["Large Treasure Chest","\u5927\u5B9D\u7BB1"],["Chimerical Chest","\u5947\u5E7B\u5B9D\u7BB1"],["Sinister Chest","\u9634\u68EE\u5B9D\u7BB1"],["Enchanted Chest","\u79D8\u6CD5\u5B9D\u7BB1"],["Blue Key Fragment","\u84DD\u8272\u94A5\u5319\u788E\u7247"],["Green Key Fragment","\u7EFF\u8272\u94A5\u5319\u788E\u7247"],["Purple Key Fragment","\u7D2B\u8272\u94A5\u5319\u788E\u7247"],["White Key Fragment","\u767D\u8272\u94A5\u5319\u788E\u7247"],["Orange Key Fragment","\u6A59\u8272\u94A5\u5319\u788E\u7247"],["Brown Key Fragment","\u68D5\u8272\u94A5\u5319\u788E\u7247"],["Stone Key Fragment","\u77F3\u5934\u94A5\u5319\u788E\u7247"],["Dark Key Fragment","\u9ED1\u6697\u94A5\u5319\u788E\u7247"],["Burning Key Fragment","\u71C3\u70E7\u94A5\u5319\u788E\u7247"],["Chimerical Entry Key","\u5947\u5E7B\u94A5\u5319"],["Chimerical Chest Key","\u5947\u5E7B\u5B9D\u7BB1\u94A5\u5319"],["Sinister Entry Key","\u9634\u68EE\u94A5\u5319"],["Sinister Chest Key","\u9634\u68EE\u5B9D\u7BB1\u94A5\u5319"],["Enchanted Entry Key","\u79D8\u6CD5\u94A5\u5319"],["Enchanted Chest Key","\u79D8\u6CD5\u5B9D\u7BB1\u94A5\u5319"],["Donut","\u751C\u751C\u5708"],["Blueberry Donut","\u84DD\u8393\u751C\u751C\u5708"],["Blackberry Donut","\u9ED1\u8393\u751C\u751C\u5708"],["Strawberry Donut","\u8349\u8393\u751C\u751C\u5708"],["Mooberry Donut","\u54DE\u8393\u751C\u751C\u5708"],["Marsberry Donut","\u706B\u661F\u8393\u751C\u751C\u5708"],["Spaceberry Donut","\u592A\u7A7A\u8393\u751C\u751C\u5708"],["Cupcake","\u7EB8\u676F\u86CB\u7CD5"],["Blueberry Cake","\u84DD\u8393\u86CB\u7CD5"],["Blackberry Cake","\u9ED1\u8393\u86CB\u7CD5"],["Strawberry Cake","\u8349\u8393\u86CB\u7CD5"],["Mooberry Cake","\u54DE\u8393\u86CB\u7CD5"],["Marsberry Cake","\u706B\u661F\u8393\u86CB\u7CD5"],["Spaceberry Cake","\u592A\u7A7A\u8393\u86CB\u7CD5"],["Gummy","\u8F6F\u7CD6"],["Apple Gummy","\u82F9\u679C\u8F6F\u7CD6"],["Orange Gummy","\u6A59\u5B50\u8F6F\u7CD6"],["Plum Gummy","\u674E\u5B50\u8F6F\u7CD6"],["Peach Gummy","\u6843\u5B50\u8F6F\u7CD6"],["Dragon Fruit Gummy","\u706B\u9F99\u679C\u8F6F\u7CD6"],["Star Fruit Gummy","\u6768\u6843\u8F6F\u7CD6"],["Yogurt","\u9178\u5976"],["Apple Yogurt","\u82F9\u679C\u9178\u5976"],["Orange Yogurt","\u6A59\u5B50\u9178\u5976"],["Plum Yogurt","\u674E\u5B50\u9178\u5976"],["Peach Yogurt","\u6843\u5B50\u9178\u5976"],["Dragon Fruit Yogurt","\u706B\u9F99\u679C\u9178\u5976"],["Star Fruit Yogurt","\u6768\u6843\u9178\u5976"],["Milking Tea","\u6324\u5976\u8336"],["Foraging Tea","\u91C7\u6458\u8336"],["Woodcutting Tea","\u4F10\u6728\u8336"],["Cooking Tea","\u70F9\u996A\u8336"],["Brewing Tea","\u51B2\u6CE1\u8336"],["Alchemy Tea","\u70BC\u91D1\u8336"],["Enhancing Tea","\u5F3A\u5316\u8336"],["Cheesesmithing Tea","\u5976\u916A\u953B\u9020\u8336"],["Crafting Tea","\u5236\u4F5C\u8336"],["Tailoring Tea","\u7F1D\u7EAB\u8336"],["Super Milking Tea","\u8D85\u7EA7\u6324\u5976\u8336"],["Super Foraging Tea","\u8D85\u7EA7\u91C7\u6458\u8336"],["Super Woodcutting Tea","\u8D85\u7EA7\u4F10\u6728\u8336"],["Super Cooking Tea","\u8D85\u7EA7\u70F9\u996A\u8336"],["Super Brewing Tea","\u8D85\u7EA7\u51B2\u6CE1\u8336"],["Super Alchemy Tea","\u8D85\u7EA7\u70BC\u91D1\u8336"],["Super Enhancing Tea","\u8D85\u7EA7\u5F3A\u5316\u8336"],["Super Cheesesmithing Tea","\u8D85\u7EA7\u5976\u916A\u953B\u9020\u8336"],["Super Crafting Tea","\u8D85\u7EA7\u5236\u4F5C\u8336"],["Super Tailoring Tea","\u8D85\u7EA7\u7F1D\u7EAB\u8336"],["Ultra Milking Tea","\u7A76\u6781\u6324\u5976\u8336"],["Ultra Foraging Tea","\u7A76\u6781\u91C7\u6458\u8336"],["Ultra Woodcutting Tea","\u7A76\u6781\u4F10\u6728\u8336"],["Ultra Cooking Tea","\u7A76\u6781\u70F9\u996A\u8336"],["Ultra Brewing Tea","\u7A76\u6781\u51B2\u6CE1\u8336"],["Ultra Alchemy Tea","\u7A76\u6781\u70BC\u91D1\u8336"],["Ultra Enhancing Tea","\u7A76\u6781\u5F3A\u5316\u8336"],["Ultra Cheesesmithing Tea","\u7A76\u6781\u5976\u916A\u953B\u9020\u8336"],["Ultra Crafting Tea","\u7A76\u6781\u5236\u4F5C\u8336"],["Ultra Tailoring Tea","\u7A76\u6781\u7F1D\u7EAB\u8336"],["Gathering Tea","\u91C7\u96C6\u8336"],["Gourmet Tea","\u7F8E\u98DF\u8336"],["Wisdom Tea","\u7ECF\u9A8C\u8336"],["Processing Tea","\u52A0\u5DE5\u8336"],["Efficiency Tea","\u6548\u7387\u8336"],["Artisan Tea","\u5DE5\u5320\u8336"],["Catalytic Tea","\u50AC\u5316\u8336"],["Blessed Tea","\u798F\u6C14\u8336"],["Stamina Coffee","\u8010\u529B\u5496\u5561"],["Intelligence Coffee","\u667A\u529B\u5496\u5561"],["Defense Coffee","\u9632\u5FA1\u5496\u5561"],["Attack Coffee","\u653B\u51FB\u5496\u5561"],["Power Coffee","\u529B\u91CF\u5496\u5561"],["Ranged Coffee","\u8FDC\u7A0B\u5496\u5561"],["Magic Coffee","\u9B54\u6CD5\u5496\u5561"],["Super Stamina Coffee","\u8D85\u7EA7\u8010\u529B\u5496\u5561"],["Super Intelligence Coffee","\u8D85\u7EA7\u667A\u529B\u5496\u5561"],["Super Defense Coffee","\u8D85\u7EA7\u9632\u5FA1\u5496\u5561"],["Super Attack Coffee","\u8D85\u7EA7\u653B\u51FB\u5496\u5561"],["Super Power Coffee","\u8D85\u7EA7\u529B\u91CF\u5496\u5561"],["Super Ranged Coffee","\u8D85\u7EA7\u8FDC\u7A0B\u5496\u5561"],["Super Magic Coffee","\u8D85\u7EA7\u9B54\u6CD5\u5496\u5561"],["Ultra Stamina Coffee","\u7A76\u6781\u8010\u529B\u5496\u5561"],["Ultra Intelligence Coffee","\u7A76\u6781\u667A\u529B\u5496\u5561"],["Ultra Defense Coffee","\u7A76\u6781\u9632\u5FA1\u5496\u5561"],["Ultra Attack Coffee","\u7A76\u6781\u653B\u51FB\u5496\u5561"],["Ultra Power Coffee","\u7A76\u6781\u529B\u91CF\u5496\u5561"],["Ultra Ranged Coffee","\u7A76\u6781\u8FDC\u7A0B\u5496\u5561"],["Ultra Magic Coffee","\u7A76\u6781\u9B54\u6CD5\u5496\u5561"],["Wisdom Coffee","\u7ECF\u9A8C\u5496\u5561"],["Lucky Coffee","\u5E78\u8FD0\u5496\u5561"],["Swiftness Coffee","\u8FC5\u6377\u5496\u5561"],["Channeling Coffee","\u541F\u5531\u5496\u5561"],["Critical Coffee","\u66B4\u51FB\u5496\u5561"],["Poke","\u7834\u80C6\u4E4B\u523A"],["Impale","\u900F\u9AA8\u4E4B\u523A"],["Puncture","\u7834\u7532\u4E4B\u523A"],["Penetrating Strike","\u8D2F\u5FC3\u4E4B\u523A"],["Scratch","\u722A\u5F71\u65A9"],["Cleave","\u5206\u88C2\u65A9"],["Maim","\u8840\u5203\u65A9"],["Crippling Slash","\u81F4\u6B8B\u65A9"],["Smack","\u91CD\u78BE"],["Sweep","\u91CD\u626B"],["Stunning Blow","\u91CD\u9524"],["Quick Shot","\u5FEB\u901F\u5C04\u51FB"],["Aqua Arrow","\u6D41\u6C34\u7BAD"],["Flame Arrow","\u70C8\u7130\u7BAD"],["Rain Of Arrows","\u7BAD\u96E8"],["Silencing Shot","\u6C89\u9ED8\u4E4B\u7BAD"],["Steady Shot","\u7A33\u5B9A\u5C04\u51FB"],["Pestilent Shot","\u75AB\u75C5\u5C04\u51FB"],["Penetrating Shot","\u8D2F\u7A7F\u5C04\u51FB"],["Water Strike","\u6D41\u6C34\u51B2\u51FB"],["Ice Spear","\u51B0\u67AA\u672F"],["Frost Surge","\u51B0\u971C\u7206\u88C2"],["Mana Spring","\u6CD5\u529B\u55B7\u6CC9"],["Entangle","\u7F20\u7ED5"],["Toxic Pollen","\u5267\u6BD2\u7C89\u5C18"],["Nature's Veil","\u81EA\u7136\u83CC\u5E55"],["Fireball","\u706B\u7403"],["Flame Blast","\u7194\u5CA9\u7206\u88C2"],["Firestorm","\u706B\u7130\u98CE\u66B4"],["Smoke Burst","\u70DF\u7206\u706D\u5F71"],["Minor Heal","\u521D\u7EA7\u81EA\u6108\u672F"],["Heal","\u81EA\u6108\u672F"],["Quick Aid","\u5FEB\u901F\u6CBB\u7597\u672F"],["Rejuvenate","\u7FA4\u4F53\u6CBB\u7597\u672F"],["Taunt","\u5632\u8BBD"],["Provoke","\u6311\u8845"],["Toughness","\u575A\u97E7"],["Elusiveness","\u95EA\u907F"],["Precision","\u7CBE\u786E"],["Berserk","\u72C2\u66B4"],["Elemental Affinity","\u5143\u7D20\u589E\u5E45"],["Frenzy","\u72C2\u901F"],["Spike Shell","\u5C16\u523A\u9632\u62A4"],["Arcane Reflection","\u5965\u672F\u53CD\u5C04"],["Vampirism","\u5438\u8840"],["Revive","\u590D\u6D3B"],["Insanity","\u75AF\u72C2"],["Invincible","\u65E0\u654C"],["Fierce Aura","\u7269\u7406\u5149\u73AF"],["Aqua Aura","\u6D41\u6C34\u5149\u73AF"],["Sylvan Aura","\u81EA\u7136\u5149\u73AF"],["Flame Aura","\u706B\u7130\u5149\u73AF"],["Speed Aura","\u901F\u5EA6\u5149\u73AF"],["Critical Aura","\u66B4\u51FB\u5149\u73AF"],["Gobo Stabber","\u54E5\u5E03\u6797\u957F\u5251"],["Gobo Slasher","\u54E5\u5E03\u6797\u5173\u5200"],["Gobo Smasher","\u54E5\u5E03\u6797\u72FC\u7259\u68D2"],["Spiked Bulwark","\u5C16\u523A\u76FE"],["Werewolf Slasher","\u72FC\u4EBA\u5173\u5200"],["Griffin Bulwark","\u72EE\u9E6B\u91CD\u76FE"],["Gobo Shooter","\u54E5\u5E03\u6797\u5F39\u5F13"],["Vampiric Bow","\u5438\u8840\u5F13"],["Cursed Bow","\u5492\u6028\u4E4B\u5F13"],["Gobo Boomstick","\u54E5\u5E03\u6797\u706B\u68CD"],["Cheese Bulwark","\u5976\u916A\u91CD\u76FE"],["Verdant Bulwark","\u7FE0\u7EFF\u91CD\u76FE"],["Azure Bulwark","\u851A\u84DD\u91CD\u76FE"],["Burble Bulwark","\u6DF1\u7D2B\u91CD\u76FE"],["Crimson Bulwark","\u7EDB\u7EA2\u91CD\u76FE"],["Rainbow Bulwark","\u5F69\u8679\u91CD\u76FE"],["Holy Bulwark","\u795E\u5723\u91CD\u76FE"],["Wooden Bow","\u6728\u5F13"],["Birch Bow","\u6866\u6728\u5F13"],["Cedar Bow","\u96EA\u677E\u5F13"],["Purpleheart Bow","\u7D2B\u5FC3\u5F13"],["Ginkgo Bow","\u94F6\u674F\u5F13"],["Redwood Bow","\u7EA2\u6749\u5F13"],["Arcane Bow","\u795E\u79D8\u5F13"],["Stalactite Spear","\u77F3\u949F\u957F\u67AA"],["Granite Bludgeon","\u82B1\u5C97\u5CA9\u5927\u68D2"],["Regal Sword","\u541B\u738B\u4E4B\u5251"],["Chaotic Flail","\u6DF7\u6C8C\u8FDE\u67B7"],["Soul Hunter Crossbow","\u7075\u9B42\u730E\u624B\u5F29"],["Sundering Crossbow","\u88C2\u7A7A\u4E4B\u5F29"],["Frost Staff","\u51B0\u971C\u6CD5\u6756"],["Infernal Battlestaff","\u70BC\u72F1\u6CD5\u6756"],["Jackalope Staff","\u9E7F\u89D2\u5154\u4E4B\u6756"],["Cheese Sword","\u5976\u916A\u5251"],["Verdant Sword","\u7FE0\u7EFF\u5251"],["Azure Sword","\u851A\u84DD\u5251"],["Burble Sword","\u6DF1\u7D2B\u5251"],["Crimson Sword","\u7EDB\u7EA2\u5251"],["Rainbow Sword","\u5F69\u8679\u5251"],["Holy Sword","\u795E\u5723\u5251"],["Cheese Spear","\u5976\u916A\u957F\u67AA"],["Verdant Spear","\u7FE0\u7EFF\u957F\u67AA"],["Azure Spear","\u851A\u84DD\u957F\u67AA"],["Burble Spear","\u6DF1\u7D2B\u957F\u67AA"],["Crimson Spear","\u7EDB\u7EA2\u957F\u67AA"],["Rainbow Spear","\u5F69\u8679\u957F\u67AA"],["Holy Spear","\u795E\u5723\u957F\u67AA"],["Cheese Mace","\u5976\u916A\u9489\u5934\u9524"],["Verdant Mace","\u7FE0\u7EFF\u9489\u5934\u9524"],["Azure Mace","\u851A\u84DD\u9489\u5934\u9524"],["Burble Mace","\u6DF1\u7D2B\u9489\u5934\u9524"],["Crimson Mace","\u7EDB\u7EA2\u9489\u5934\u9524"],["Rainbow Mace","\u5F69\u8679\u9489\u5934\u9524"],["Holy Mace","\u795E\u5723\u9489\u5934\u9524"],["Wooden Crossbow","\u6728\u5F29"],["Birch Crossbow","\u6866\u6728\u5F29"],["Cedar Crossbow","\u96EA\u677E\u5F29"],["Purpleheart Crossbow","\u7D2B\u5FC3\u5F29"],["Ginkgo Crossbow","\u94F6\u674F\u5F29"],["Redwood Crossbow","\u7EA2\u6749\u5F29"],["Arcane Crossbow","\u795E\u79D8\u5F29"],["Wooden Water Staff","\u6728\u5236\u6C34\u6CD5\u6756"],["Birch Water Staff","\u6866\u6728\u6C34\u6CD5\u6756"],["Cedar Water Staff","\u96EA\u677E\u6C34\u6CD5\u6756"],["Purpleheart Water Staff","\u7D2B\u5FC3\u6C34\u6CD5\u6756"],["Ginkgo Water Staff","\u94F6\u674F\u6C34\u6CD5\u6756"],["Redwood Water Staff","\u7EA2\u6749\u6C34\u6CD5\u6756"],["Arcane Water Staff","\u795E\u79D8\u6C34\u6CD5\u6756"],["Wooden Nature Staff","\u6728\u5236\u81EA\u7136\u6CD5\u6756"],["Birch Nature Staff","\u6866\u6728\u81EA\u7136\u6CD5\u6756"],["Cedar Nature Staff","\u96EA\u677E\u81EA\u7136\u6CD5\u6756"],["Purpleheart Nature Staff","\u7D2B\u5FC3\u81EA\u7136\u6CD5\u6756"],["Ginkgo Nature Staff","\u94F6\u674F\u81EA\u7136\u6CD5\u6756"],["Redwood Nature Staff","\u7EA2\u6749\u81EA\u7136\u6CD5\u6756"],["Arcane Nature Staff","\u795E\u79D8\u81EA\u7136\u6CD5\u6756"],["Wooden Fire Staff","\u6728\u706B\u6CD5\u6756"],["Birch Fire Staff","\u6866\u6728\u706B\u6CD5\u6756"],["Cedar Fire Staff","\u96EA\u677E\u706B\u6CD5\u6756"],["Purpleheart Fire Staff","\u7D2B\u5FC3\u706B\u6CD5\u6756"],["Ginkgo Fire Staff","\u94F6\u674F\u706B\u6CD5\u6756"],["Redwood Fire Staff","\u7EA2\u6749\u706B\u6CD5\u6756"],["Arcane Fire Staff","\u795E\u79D8\u706B\u6CD5\u6756"],["Eye Watch","\u638C\u4E0A\u76D1\u5DE5"],["Snake Fang Dirk","\u86C7\u7259\u77ED\u5251"],["Vision Shield","\u89C6\u89C9\u76FE"],["Gobo Defender","\u54E5\u5E03\u6797\u9632\u5FA1\u8005"],["Vampire Fang Dirk","\u5438\u8840\u9B3C\u77ED\u5251"],["Knight's Aegis","\u9A91\u58EB\u76FE"],["Treant Shield","\u6811\u4EBA\u76FE"],["Manticore Shield","\u874E\u72EE\u76FE"],["Tome Of Healing","\u6CBB\u7597\u4E4B\u4E66"],["Tome Of The Elements","\u5143\u7D20\u4E4B\u4E66"],["Watchful Relic","\u8B66\u6212\u9057\u7269"],["Bishop's Codex","\u4E3B\u6559\u6CD5\u5178"],["Cheese Buckler","\u5976\u916A\u5706\u76FE"],["Verdant Buckler","\u7FE0\u7EFF\u5706\u76FE"],["Azure Buckler","\u851A\u84DD\u5706\u76FE"],["Burble Buckler","\u6DF1\u7D2B\u5706\u76FE"],["Crimson Buckler","\u7EDB\u7EA2\u5706\u76FE"],["Rainbow Buckler","\u5F69\u8679\u5706\u76FE"],["Holy Buckler","\u795E\u5723\u5706\u76FE"],["Wooden Shield","\u6728\u76FE"],["Birch Shield","\u6866\u6728\u76FE"],["Cedar Shield","\u96EA\u677E\u76FE"],["Purpleheart Shield","\u7D2B\u5FC3\u76FE"],["Ginkgo Shield","\u94F6\u674F\u76FE"],["Redwood Shield","\u7EA2\u6749\u76FE"],["Arcane Shield","\u795E\u79D8\u76FE"],["Sinister Cape","\u9634\u68EE\u6597\u7BF7"],["Chimerical Quiver","\u5947\u5E7B\u7BAD\u888B"],["Enchanted Cloak","\u79D8\u6CD5\u62AB\u98CE"],["Red Culinary Hat","\u7EA2\u8272\u53A8\u5E08\u5E3D"],["Snail Shell Helmet","\u8717\u725B\u58F3\u5934\u76D4"],["Vision Helmet","\u89C6\u89C9\u5934\u76D4"],["Fluffy Red Hat","\u84EC\u677E\u7EA2\u5E3D\u5B50"],["Acrobatic Hood","\u6742\u6280\u5E08\u515C\u5E3D"],["Magician's Hat","\u9B54\u672F\u5E08\u5E3D"],["Cheese Helmet","\u5976\u916A\u5934\u76D4"],["Verdant Helmet","\u7FE0\u7EFF\u5934\u76D4"],["Azure Helmet","\u851A\u84DD\u5934\u76D4"],["Burble Helmet","\u6DF1\u7D2B\u5934\u76D4"],["Crimson Helmet","\u7EDB\u7EA2\u5934\u76D4"],["Rainbow Helmet","\u5F69\u8679\u5934\u76D4"],["Holy Helmet","\u795E\u5723\u5934\u76D4"],["Rough Hood","\u7C97\u7CD9\u515C\u5E3D"],["Reptile Hood","\u722C\u884C\u52A8\u7269\u515C\u5E3D"],["Gobo Hood","\u54E5\u5E03\u6797\u515C\u5E3D"],["Beast Hood","\u91CE\u517D\u515C\u5E3D"],["Umbral Hood","\u6697\u5F71\u515C\u5E3D"],["Cotton Hat","\u68C9\u5E3D"],["Linen Hat","\u4E9A\u9EBB\u5E3D"],["Bamboo Hat","\u7AF9\u5E3D"],["Silk Hat","\u4E1D\u5E3D"],["Radiant Hat","\u5149\u8F89\u5E3D"],["Dairyhand's Top","\u6324\u5976\u5DE5\u4E0A\u8863"],["Forager's Top","\u91C7\u6458\u8005\u4E0A\u8863"],["Lumberjack's Top","\u4F10\u6728\u5DE5\u4E0A\u8863"],["Cheesemaker's Top","\u5976\u916A\u5E08\u4E0A\u8863"],["Crafter's Top","\u5DE5\u5320\u4E0A\u8863"],["Tailor's Top","\u88C1\u7F1D\u4E0A\u8863"],["Chef's Top","\u53A8\u5E08\u4E0A\u8863"],["Brewer's Top","\u996E\u54C1\u5E08\u4E0A\u8863"],["Alchemist's Top","\u70BC\u91D1\u5E08\u4E0A\u8863"],["Enhancer's Top","\u5F3A\u5316\u5E08\u4E0A\u8863"],["Gator Vest","\u9CC4\u9C7C\u9A6C\u7532"],["Turtle Shell Body","\u9F9F\u58F3\u80F8\u7532"],["Colossus Plate Body","\u5DE8\u50CF\u80F8\u7532"],["Demonic Plate Body","\u6076\u9B54\u80F8\u7532"],["Marine Tunic","\u6D77\u6D0B\u76AE\u8863"],["Revenant Tunic","\u4EA1\u7075\u76AE\u8863"],["Griffin Tunic","\u72EE\u9E6B\u76AE\u8863"],["Icy Robe Top","\u51B0\u971C\u957F\u888D"],["Flaming Robe Top","\u70C8\u7130\u957F\u888D"],["Luna Robe Top","\u6708\u795E\u957F\u888D"],["Royal Water Robe Top","\u7687\u5BB6\u6C34\u7CFB\u957F\u888D"],["Royal Nature Robe Top","\u7687\u5BB6\u81EA\u7136\u7CFB\u957F\u888D"],["Royal Fire Robe Top","\u7687\u5BB6\u706B\u7CFB\u957F\u888D"],["Cheese Plate Body","\u5976\u916A\u80F8\u7532"],["Verdant Plate Body","\u7FE0\u7EFF\u80F8\u7532"],["Azure Plate Body","\u851A\u84DD\u80F8\u7532"],["Burble Plate Body","\u6DF1\u7D2B\u80F8\u7532"],["Crimson Plate Body","\u7EDB\u7EA2\u80F8\u7532"],["Rainbow Plate Body","\u5F69\u8679\u80F8\u7532"],["Holy Plate Body","\u795E\u5723\u80F8\u7532"],["Rough Tunic","\u7C97\u7CD9\u76AE\u8863"],["Reptile Tunic","\u722C\u884C\u52A8\u7269\u76AE\u8863"],["Gobo Tunic","\u54E5\u5E03\u6797\u76AE\u8863"],["Beast Tunic","\u91CE\u517D\u76AE\u8863"],["Umbral Tunic","\u6697\u5F71\u76AE\u8863"],["Cotton Robe Top","\u68C9\u5E03\u4E0A\u8863"],["Linen Robe Top","\u4E9A\u9EBB\u4E0A\u8863"],["Bamboo Robe Top","\u7AF9\u4E0A\u8863"],["Silk Robe Top","\u4E1D\u7EF8\u4E0A\u8863"],["Radiant Robe Top","\u5149\u8F89\u4E0A\u8863"],["Dairyhand's Bottoms","\u6324\u5976\u5DE5\u4E0B\u88C5"],["Forager's Bottoms","\u91C7\u6458\u8005\u4E0B\u88C5"],["Lumberjack's Bottoms","\u4F10\u6728\u5DE5\u4E0B\u88C5"],["Cheesemaker's Bottoms","\u5976\u916A\u5E08\u4E0B\u88C5"],["Crafter's Bottoms","\u5DE5\u5320\u4E0B\u88C5"],["Tailor's Bottoms","\u88C1\u7F1D\u4E0B\u88C5"],["Chef's Bottoms","\u53A8\u5E08\u4E0B\u88C5"],["Brewer's Bottoms","\u996E\u54C1\u5E08\u4E0B\u88C5"],["Alchemist's Bottoms","\u70BC\u91D1\u5E08\u4E0B\u88C5"],["Enhancer's Bottoms","\u5F3A\u5316\u5E08\u4E0B\u88C5"],["Turtle Shell Legs","\u9F9F\u58F3\u817F\u7532"],["Colossus Plate Legs","\u5DE8\u50CF\u817F\u7532"],["Demonic Plate Legs","\u6076\u9B54\u817F\u7532"],["Marine Chaps","\u822A\u6D77\u76AE\u88E4"],["Revenant Chaps","\u4EA1\u7075\u76AE\u88E4"],["Griffin Chaps","\u72EE\u9E6B\u76AE\u88E4"],["Icy Robe Bottoms","\u51B0\u971C\u4E0B\u88C5"],["Flaming Robe Bottoms","\u70C8\u7130\u4E0B\u88C5"],["Luna Robe Bottoms","\u6708\u795E\u4E0B\u88C5"],["Royal Water Robe Bottoms","\u7687\u5BB6\u6C34\u7CFB\u4E0B\u88C5"],["Royal Nature Robe Bottoms","\u7687\u5BB6\u81EA\u7136\u7CFB\u4E0B\u88C5"],["Royal Fire Robe Bottoms","\u7687\u5BB6\u706B\u7CFB\u4E0B\u88C5"],["Cheese Plate Legs","\u5976\u916A\u817F\u7532"],["Verdant Plate Legs","\u7FE0\u7EFF\u817F\u7532"],["Azure Plate Legs","\u851A\u84DD\u817F\u7532"],["Burble Plate Legs","\u6DF1\u7D2B\u817F\u7532"],["Crimson Plate Legs","\u7EDB\u7EA2\u817F\u7532"],["Rainbow Plate Legs","\u5F69\u8679\u817F\u7532"],["Holy Plate Legs","\u795E\u5723\u817F\u7532"],["Rough Chaps","\u7C97\u7CD9\u76AE\u88E4"],["Reptile Chaps","\u722C\u884C\u52A8\u7269\u76AE\u88E4"],["Gobo Chaps","\u54E5\u5E03\u6797\u76AE\u88E4"],["Beast Chaps","\u91CE\u517D\u76AE\u88E4"],["Umbral Chaps","\u6697\u5F71\u76AE\u88E4"],["Cotton Robe Bottoms","\u68C9\u4E0B\u88C5"],["Linen Robe Bottoms","\u4E9A\u9EBB\u4E0B\u88C5"],["Bamboo Robe Bottoms","\u7AF9\u4E0B\u88C5"],["Silk Robe Bottoms","\u4E1D\u7EF8\u4E0B\u88C5"],["Radiant Robe Bottoms","\u5149\u8F89\u4E0B\u88C5"],["Enchanted Gloves","\u9644\u9B54\u624B\u5957"],["Pincer Gloves","\u87F9\u94B3\u624B\u5957"],["Panda Gloves","\u718A\u732B\u624B\u5957"],["Magnetic Gloves","\u78C1\u529B\u624B\u5957"],["Dodocamel Gauntlets","\u6E21\u6E21\u9A7C\u62A4\u624B"],["Sighted Bracers","\u7784\u51C6\u62A4\u8155"],["Chrono Gloves","\u65F6\u7A7A\u624B\u5957"],["Cheese Gauntlets","\u5976\u916A\u62A4\u624B"],["Verdant Gauntlets","\u7FE0\u7EFF\u62A4\u624B"],["Azure Gauntlets","\u851A\u84DD\u62A4\u624B"],["Burble Gauntlets","\u6DF1\u7D2B\u62A4\u624B"],["Crimson Gauntlets","\u7EDB\u7EA2\u62A4\u624B"],["Rainbow Gauntlets","\u5F69\u8679\u62A4\u624B"],["Holy Gauntlets","\u795E\u5723\u62A4\u624B"],["Rough Bracers","\u7C97\u7CD9\u62A4\u8155"],["Reptile Bracers","\u722C\u884C\u52A8\u7269\u62A4\u8155"],["Gobo Bracers","\u54E5\u5E03\u6797\u62A4\u8155"],["Beast Bracers","\u91CE\u517D\u62A4\u8155"],["Umbral Bracers","\u6697\u5F71\u62A4\u8155"],["Cotton Gloves","\u68C9\u624B\u5957"],["Linen Gloves","\u4E9A\u9EBB\u624B\u5957"],["Bamboo Gloves","\u7AF9\u624B\u5957"],["Silk Gloves","\u4E1D\u624B\u5957"],["Radiant Gloves","\u5149\u8F89\u624B\u5957"],["Collector's Boots","\u6536\u85CF\u5BB6\u9774"],["Shoebill Shoes","\u9CB8\u5934\u9E73\u978B"],["Black Bear Shoes","\u9ED1\u718A\u978B"],["Grizzly Bear Shoes","\u68D5\u718A\u978B"],["Polar Bear Shoes","\u5317\u6781\u718A\u978B"],["Centaur Boots","\u534A\u4EBA\u9A6C\u9774"],["Sorcerer Boots","\u5DEB\u5E08\u9774"],["Cheese Boots","\u5976\u916A\u9774"],["Verdant Boots","\u7FE0\u7EFF\u9774"],["Azure Boots","\u851A\u84DD\u9774"],["Burble Boots","\u6DF1\u7D2B\u9774"],["Crimson Boots","\u7EDB\u7EA2\u9774"],["Rainbow Boots","\u5F69\u8679\u9774"],["Holy Boots","\u795E\u5723\u9774"],["Rough Boots","\u7C97\u7CD9\u9774"],["Reptile Boots","\u722C\u884C\u52A8\u7269\u9774"],["Gobo Boots","\u54E5\u5E03\u6797\u9774"],["Beast Boots","\u91CE\u517D\u9774"],["Umbral Boots","\u6697\u5F71\u9774"],["Cotton Boots","\u68C9\u9774"],["Linen Boots","\u4E9A\u9EBB\u9774"],["Bamboo Boots","\u7AF9\u9774"],["Silk Boots","\u4E1D\u9774"],["Radiant Boots","\u5149\u8F89\u9774"],["Small Pouch","\u5C0F\u888B\u5B50"],["Medium Pouch","\u4E2D\u888B\u5B50"],["Large Pouch","\u5927\u888B\u5B50"],["Giant Pouch","\u5DE8\u5927\u888B\u5B50"],["Gluttonous Pouch","\u8D2A\u98DF\u4E4B\u888B"],["Guzzling Pouch","\u66B4\u996E\u4E4B\u56CA"],["Necklace Of Efficiency","\u6548\u7387\u9879\u94FE"],["Fighter Necklace","\u6218\u58EB\u9879\u94FE"],["Ranger Necklace","\u5C04\u624B\u9879\u94FE"],["Wizard Necklace","\u5DEB\u5E08\u9879\u94FE"],["Necklace Of Wisdom","\u7ECF\u9A8C\u9879\u94FE"],["Necklace Of Speed","\u901F\u5EA6\u9879\u94FE"],["Philosopher's Necklace","\u8D24\u8005\u9879\u94FE"],["Earrings Of Gathering","\u91C7\u96C6\u8033\u73AF"],["Earrings Of Essence Find","\u7CBE\u534E\u53D1\u73B0\u8033\u73AF"],["Earrings Of Armor","\u62A4\u7532\u8033\u73AF"],["Earrings Of Regeneration","\u6062\u590D\u8033\u73AF"],["Earrings Of Resistance","\u6297\u6027\u8033\u73AF"],["Earrings Of Rare Find","\u7A00\u6709\u53D1\u73B0\u8033\u73AF"],["Earrings Of Critical Strike","\u66B4\u51FB\u8033\u73AF"],["Philosopher's Earrings","\u8D24\u8005\u8033\u73AF"],["Ring Of Gathering","\u91C7\u96C6\u6212\u6307"],["Ring Of Essence Find","\u7CBE\u534E\u53D1\u73B0\u6212\u6307"],["Ring Of Armor","\u62A4\u7532\u6212\u6307"],["Ring Of Regeneration","\u6062\u590D\u6212\u6307"],["Ring Of Resistance","\u6297\u6027\u6212\u6307"],["Ring Of Rare Find","\u7A00\u6709\u53D1\u73B0\u6212\u6307"],["Ring Of Critical Strike","\u66B4\u51FB\u6212\u6307"],["Philosopher's Ring","\u8D24\u8005\u6212\u6307"],["Basic Task Badge","\u57FA\u7840\u4EFB\u52A1\u5FBD\u7AE0"],["Advanced Task Badge","\u9AD8\u7EA7\u4EFB\u52A1\u5FBD\u7AE0"],["Expert Task Badge","\u4E13\u5BB6\u4EFB\u52A1\u5FBD\u7AE0"],["Celestial Brush","\u661F\u7A7A\u5237\u5B50"],["Cheese Brush","\u5976\u916A\u5237\u5B50"],["Verdant Brush","\u7FE0\u7EFF\u5237\u5B50"],["Azure Brush","\u851A\u84DD\u5237\u5B50"],["Burble Brush","\u6DF1\u7D2B\u5237\u5B50"],["Crimson Brush","\u7EDB\u7EA2\u5237\u5B50"],["Rainbow Brush","\u5F69\u8679\u5237\u5B50"],["Holy Brush","\u795E\u5723\u5237\u5B50"],["Celestial Shears","\u661F\u7A7A\u526A\u5200"],["Cheese Shears","\u5976\u916A\u526A\u5200"],["Verdant Shears","\u7FE0\u7EFF\u526A\u5200"],["Azure Shears","\u851A\u84DD\u526A\u5200"],["Burble Shears","\u6DF1\u7D2B\u526A\u5200"],["Crimson Shears","\u7EDB\u7EA2\u526A\u5200"],["Rainbow Shears","\u5F69\u8679\u526A\u5200"],["Holy Shears","\u795E\u5723\u526A\u5200"],["Celestial Hatchet","\u661F\u7A7A\u65A7\u5934"],["Cheese Hatchet","\u5976\u916A\u65A7\u5934"],["Verdant Hatchet","\u7FE0\u7EFF\u65A7\u5934"],["Azure Hatchet","\u851A\u84DD\u65A7\u5934"],["Burble Hatchet","\u6DF1\u7D2B\u65A7\u5934"],["Crimson Hatchet","\u7EDB\u7EA2\u65A7\u5934"],["Rainbow Hatchet","\u5F69\u8679\u65A7\u5934"],["Holy Hatchet","\u795E\u5723\u65A7\u5934"],["Celestial Hammer","\u661F\u7A7A\u9524\u5B50"],["Cheese Hammer","\u5976\u916A\u9524\u5B50"],["Verdant Hammer","\u7FE0\u7EFF\u9524\u5B50"],["Azure Hammer","\u851A\u84DD\u9524\u5B50"],["Burble Hammer","\u6DF1\u7D2B\u9524\u5B50"],["Crimson Hammer","\u7EDB\u7EA2\u9524\u5B50"],["Rainbow Hammer","\u5F69\u8679\u9524\u5B50"],["Holy Hammer","\u795E\u5723\u9524\u5B50"],["Celestial Chisel","\u661F\u7A7A\u51FF\u5B50"],["Cheese Chisel","\u5976\u916A\u51FF\u5B50"],["Verdant Chisel","\u7FE0\u7EFF\u51FF\u5B50"],["Azure Chisel","\u851A\u84DD\u51FF\u5B50"],["Burble Chisel","\u6DF1\u7D2B\u51FF\u5B50"],["Crimson Chisel","\u7EDB\u7EA2\u51FF\u5B50"],["Rainbow Chisel","\u5F69\u8679\u51FF\u5B50"],["Holy Chisel","\u795E\u5723\u51FF\u5B50"],["Celestial Needle","\u661F\u7A7A\u9488"],["Cheese Needle","\u5976\u916A\u9488"],["Verdant Needle","\u7FE0\u7EFF\u9488"],["Azure Needle","\u851A\u84DD\u9488"],["Burble Needle","\u6DF1\u7D2B\u9488"],["Crimson Needle","\u7EDB\u7EA2\u9488"],["Rainbow Needle","\u5F69\u8679\u9488"],["Holy Needle","\u795E\u5723\u9488"],["Celestial Spatula","\u661F\u7A7A\u9505\u94F2"],["Cheese Spatula","\u5976\u916A\u9505\u94F2"],["Verdant Spatula","\u7FE0\u7EFF\u9505\u94F2"],["Azure Spatula","\u851A\u84DD\u9505\u94F2"],["Burble Spatula","\u6DF1\u7D2B\u9505\u94F2"],["Crimson Spatula","\u7EDB\u7EA2\u9505\u94F2"],["Rainbow Spatula","\u5F69\u8679\u9505\u94F2"],["Holy Spatula","\u795E\u5723\u9505\u94F2"],["Celestial Pot","\u661F\u7A7A\u58F6"],["Cheese Pot","\u5976\u916A\u58F6"],["Verdant Pot","\u7FE0\u7EFF\u58F6"],["Azure Pot","\u851A\u84DD\u58F6"],["Burble Pot","\u6DF1\u7D2B\u58F6"],["Crimson Pot","\u7EDB\u7EA2\u58F6"],["Rainbow Pot","\u5F69\u8679\u58F6"],["Holy Pot","\u795E\u5723\u58F6"],["Celestial Alembic","\u661F\u7A7A\u84B8\u998F\u5668"],["Cheese Alembic","\u5976\u916A\u84B8\u998F\u5668"],["Verdant Alembic","\u7FE0\u7EFF\u84B8\u998F\u5668"],["Azure Alembic","\u851A\u84DD\u84B8\u998F\u5668"],["Burble Alembic","\u6DF1\u7D2B\u84B8\u998F\u5668"],["Crimson Alembic","\u7EDB\u7EA2\u84B8\u998F\u5668"],["Rainbow Alembic","\u5F69\u8679\u84B8\u998F\u5668"],["Holy Alembic","\u795E\u5723\u84B8\u998F\u5668"],["Celestial Enhancer","\u661F\u7A7A\u5F3A\u5316\u5668"],["Cheese Enhancer","\u5976\u916A\u5F3A\u5316\u5668"],["Verdant Enhancer","\u7FE0\u7EFF\u5F3A\u5316\u5668"],["Azure Enhancer","\u851A\u84DD\u5F3A\u5316\u5668"],["Burble Enhancer","\u6DF1\u7D2B\u5F3A\u5316\u5668"],["Crimson Enhancer","\u7EDB\u7EA2\u5F3A\u5316\u5668"],["Rainbow Enhancer","\u5F69\u8679\u5F3A\u5316\u5668"],["Holy Enhancer","\u795E\u5723\u5F3A\u5316\u5668"],["Milk","\u725B\u5976"],["Verdant Milk","\u7FE0\u7EFF\u725B\u5976"],["Azure Milk","\u851A\u84DD\u725B\u5976"],["Burble Milk","\u6DF1\u7D2B\u725B\u5976"],["Crimson Milk","\u7EDB\u7EA2\u725B\u5976"],["Rainbow Milk","\u5F69\u8679\u725B\u5976"],["Holy Milk","\u795E\u5723\u725B\u5976"],["Cheese","\u5976\u916A"],["Verdant Cheese","\u7FE0\u7EFF\u5976\u916A"],["Azure Cheese","\u851A\u84DD\u5976\u916A"],["Burble Cheese","\u6DF1\u7D2B\u5976\u916A"],["Crimson Cheese","\u7EDB\u7EA2\u5976\u916A"],["Rainbow Cheese","\u5F69\u8679\u5976\u916A"],["Holy Cheese","\u795E\u5723\u5976\u916A"],["Log","\u539F\u6728"],["Birch Log","\u767D\u6866\u539F\u6728"],["Cedar Log","\u96EA\u677E\u539F\u6728"],["Purpleheart Log","\u7D2B\u5FC3\u539F\u6728"],["Ginkgo Log","\u94F6\u674F\u539F\u6728"],["Redwood Log","\u7EA2\u6749\u539F\u6728"],["Arcane Log","\u795E\u79D8\u539F\u6728"],["Lumber","\u6728\u677F"],["Birch Lumber","\u767D\u6866\u6728\u677F"],["Cedar Lumber","\u96EA\u677E\u6728\u677F"],["Purpleheart Lumber","\u7D2B\u5FC3\u6728\u677F"],["Ginkgo Lumber","\u94F6\u674F\u6728\u677F"],["Redwood Lumber","\u7EA2\u6749\u6728\u677F"],["Arcane Lumber","\u795E\u79D8\u6728\u677F"],["Rough Hide","\u7C97\u7CD9\u517D\u76AE"],["Reptile Hide","\u722C\u884C\u52A8\u7269\u76AE"],["Gobo Hide","\u54E5\u5E03\u6797\u76AE"],["Beast Hide","\u91CE\u517D\u76AE"],["Umbral Hide","\u6697\u5F71\u76AE"],["Rough Leather","\u7C97\u7CD9\u76AE\u9769"],["Reptile Leather","\u722C\u884C\u52A8\u7269\u76AE\u9769"],["Gobo Leather","\u54E5\u5E03\u6797\u76AE\u9769"],["Beast Leather","\u91CE\u517D\u76AE\u9769"],["Umbral Leather","\u6697\u5F71\u76AE\u9769"],["Cotton","\u68C9\u82B1"],["Flax","\u4E9A\u9EBB"],["Bamboo Branch","\u7AF9\u5B50"],["Cocoon","\u8695\u8327"],["Radiant Fiber","\u5149\u8F89\u7EA4\u7EF4"],["Cotton Fabric","\u68C9\u82B1\u5E03\u6599"],["Linen Fabric","\u4E9A\u9EBB\u5E03\u6599"],["Bamboo Fabric","\u7AF9\u5B50\u5E03\u6599"],["Silk Fabric","\u4E1D\u7EF8"],["Radiant Fabric","\u5149\u8F89\u5E03\u6599"],["Egg","\u9E21\u86CB"],["Wheat","\u5C0F\u9EA6"],["Sugar","\u7CD6"],["Blueberry","\u84DD\u8393"],["Blackberry","\u9ED1\u8393"],["Strawberry","\u8349\u8393"],["Mooberry","\u54DE\u6885"],["Marsberry","\u706B\u661F\u6885"],["Spaceberry","\u592A\u7A7A\u6885"],["Apple","\u82F9\u679C"],["Orange","\u6A59\u5B50"],["Plum","\u674E\u5B50"],["Peach","\u6843\u5B50"],["Dragon Fruit","\u706B\u9F99\u679C"],["Star Fruit","\u6768\u6843"],["Arabica Coffee Bean","\u4F4E\u7EA7\u5496\u5561\u8C46"],["Robusta Coffee Bean","\u4E2D\u7EA7\u5496\u5561\u8C46"],["Liberica Coffee Bean","\u9AD8\u7EA7\u5496\u5561\u8C46"],["Excelsa Coffee Bean","\u7279\u7EA7\u5496\u5561\u8C46"],["Fieriosa Coffee Bean","\u706B\u5C71\u5496\u5561\u8C46"],["Spacia Coffee Bean","\u592A\u7A7A\u5496\u5561\u8C46"],["Green Tea Leaf","\u7EFF\u8336\u53F6"],["Black Tea Leaf","\u9ED1\u8336\u53F6"],["Burble Tea Leaf","\u7D2B\u8336\u53F6"],["Moolong Tea Leaf","\u54DE\u9F99\u8336\u53F6"],["Red Tea Leaf","\u7EA2\u8336\u53F6"],["Emp Tea Leaf","\u865A\u7A7A\u8336\u53F6"],["Catalyst Of Coinification","\u70B9\u91D1\u50AC\u5316\u5242"],["Catalyst Of Decomposition","\u5206\u89E3\u50AC\u5316\u5242"],["Catalyst Of Transmutation","\u8F6C\u5316\u50AC\u5316\u5242"],["Prime Catalyst","\u81F3\u9AD8\u50AC\u5316\u5242"],["Snake Fang","\u86C7\u7259"],["Shoebill Feather","\u9CB8\u5934\u9E73\u7FBD\u6BDB"],["Snail Shell","\u8717\u725B\u58F3"],["Crab Pincer","\u87F9\u94B3"],["Turtle Shell","\u4E4C\u9F9F\u58F3"],["Marine Scale","\u6D77\u6D0B\u9CDE\u7247"],["Treant Bark","\u6811\u76AE"],["Centaur Hoof","\u534A\u4EBA\u9A6C\u8E44"],["Luna Wing","\u6708\u795E\u7FFC"],["Gobo Rag","\u54E5\u5E03\u6797\u62B9\u5E03"],["Goggles","\u62A4\u76EE\u955C"],["Magnifying Glass","\u653E\u5927\u955C"],["Eye Of The Watcher","\u89C2\u5BDF\u8005\u4E4B\u773C"],["Icy Cloth","\u51B0\u971C\u7EC7\u7269"],["Flaming Cloth","\u70C8\u7130\u7EC7\u7269"],["Sorcerer's Sole","\u9B54\u6CD5\u5E08\u978B\u5E95"],["Chrono Sphere","\u65F6\u7A7A\u7403"],["Frost Sphere","\u51B0\u971C\u7403"],["Panda Fluff","\u718A\u732B\u7ED2"],["Black Bear Fluff","\u9ED1\u718A\u7ED2"],["Grizzly Bear Fluff","\u68D5\u718A\u7ED2"],["Polar Bear Fluff","\u5317\u6781\u718A\u7ED2"],["Red Panda Fluff","\u5C0F\u718A\u732B\u7ED2"],["Magnet","\u78C1\u94C1"],["Stalactite Shard","\u949F\u4E73\u77F3\u788E\u7247"],["Living Granite","\u82B1\u5C97\u5CA9"],["Colossus Core","\u5DE8\u50CF\u6838\u5FC3"],["Vampire Fang","\u5438\u8840\u9B3C\u4E4B\u7259"],["Werewolf Claw","\u72FC\u4EBA\u4E4B\u722A"],["Revenant Anima","\u4EA1\u8005\u4E4B\u9B42"],["Soul Fragment","\u7075\u9B42\u788E\u7247"],["Infernal Ember","\u5730\u72F1\u4F59\u70EC"],["Demonic Core","\u6076\u9B54\u6838\u5FC3"],["Griffin Leather","\u72EE\u9E6B\u4E4B\u76AE"],["Manticore Sting","\u874E\u72EE\u4E4B\u523A"],["Jackalope Antler","\u9E7F\u89D2\u5154\u4E4B\u89D2"],["Dodocamel Plume","\u6E21\u6E21\u9A7C\u4E4B\u7FCE"],["Griffin Talon","\u72EE\u9E6B\u4E4B\u722A"],["Acrobat's Ribbon","\u6742\u6280\u5E08\u5F69\u5E26"],["Magician's Cloth","\u9B54\u672F\u5E08\u7EC7\u7269"],["Chaotic Chain","\u6DF7\u6C8C\u9501\u94FE"],["Cursed Ball","\u8BC5\u5492\u4E4B\u7403"],["Royal Cloth","\u7687\u5BB6\u7EC7\u7269"],["Knight's Ingot","\u9A91\u58EB\u4E4B\u952D"],["Bishop's Scroll","\u4E3B\u6559\u5377\u8F74"],["Regal Jewel","\u541B\u738B\u5B9D\u77F3"],["Sundering Jewel","\u88C2\u7A7A\u5B9D\u77F3"],["Butter Of Proficiency","\u7CBE\u901A\u4E4B\u6CB9"],["Thread Of Expertise","\u4E13\u7CBE\u4E4B\u7EBF"],["Branch Of Insight","\u6D1E\u5BDF\u4E4B\u679D"],["Gluttonous Energy","\u8D2A\u98DF\u80FD\u91CF"],["Guzzling Energy","\u66B4\u996E\u80FD\u91CF"],["Milking Essence","\u6324\u5976\u7CBE\u534E"],["Foraging Essence","\u91C7\u6458\u7CBE\u534E"],["Woodcutting Essence","\u4F10\u6728\u7CBE\u534E"],["Cheesesmithing Essence","\u5976\u916A\u953B\u9020\u7CBE\u534E"],["Crafting Essence","\u5236\u4F5C\u7CBE\u534E"],["Tailoring Essence","\u7F1D\u7EAB\u7CBE\u534E"],["Cooking Essence","\u70F9\u996A\u7CBE\u534E"],["Brewing Essence","\u51B2\u6CE1\u7CBE\u534E"],["Alchemy Essence","\u70BC\u91D1\u7CBE\u534E"],["Enhancing Essence","\u5F3A\u5316\u7CBE\u534E"],["Swamp Essence","\u6CBC\u6CFD\u7CBE\u534E"],["Aqua Essence","\u6D77\u6D0B\u7CBE\u534E"],["Jungle Essence","\u4E1B\u6797\u7CBE\u534E"],["Gobo Essence","\u54E5\u5E03\u6797\u7CBE\u534E"],["Eyessence","\u773C\u7CBE\u534E"],["Sorcerer Essence","\u6CD5\u5E08\u7CBE\u534E"],["Bear Essence","\u718A\u718A\u7CBE\u534E"],["Golem Essence","\u9B54\u50CF\u7CBE\u534E"],["Twilight Essence","\u66AE\u5149\u7CBE\u534E"],["Abyssal Essence","\u5730\u72F1\u7CBE\u534E"],["Chimerical Essence","\u5947\u5E7B\u7CBE\u534E"],["Sinister Essence","\u9634\u68EE\u7CBE\u534E"],["Enchanted Essence","\u79D8\u6CD5\u7CBE\u534E"],["Task Crystal","\u4EFB\u52A1\u6C34\u6676"],["Star Fragment","\u661F\u5149\u788E\u7247"],["Pearl","\u73CD\u73E0"],["Amber","\u7425\u73C0"],["Garnet","\u77F3\u69B4\u77F3"],["Jade","\u7FE1\u7FE0"],["Amethyst","\u7D2B\u6C34\u6676"],["Moonstone","\u6708\u4EAE\u77F3"],["Sunstone","\u592A\u9633\u77F3"],["Philosopher's Stone","\u8D24\u8005\u4E4B\u77F3"],["Crushed Pearl","\u73CD\u73E0\u788E\u7247"],["Crushed Amber","\u7425\u73C0\u788E\u7247"],["Crushed Garnet","\u77F3\u69B4\u77F3\u788E\u7247"],["Crushed Jade","\u7FE1\u7FE0\u788E\u7247"],["Crushed Amethyst","\u7D2B\u6C34\u6676\u788E\u7247"],["Crushed Moonstone","\u6708\u4EAE\u77F3\u788E\u7247"],["Crushed Sunstone","\u592A\u9633\u77F3\u788E\u7247"],["Crushed Philosopher's Stone","\u8D24\u8005\u4E4B\u77F3\u788E\u7247"],["Shard Of Protection","\u4FDD\u62A4\u788E\u7247"],["Mirror Of Protection","\u4FDD\u62A4\u4E4B\u955C"]]},76643:function(b,i){"use strict";i.Z={container:"container___tZtxI",header:"header___X2EPW",select:"select___eQRZY"}},22647:function(){},79391:function(){},81388:function(){},84232:function(){},14050:function(){},51063:function(){}}]);
