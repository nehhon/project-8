var aa,ba={},da=NaN,f=window.localStorage;function ea(a,b){void 0===f[a]&&(f[a]=b)}ea("name","Guest"+~~(1E3*Math.random()));ea("color","#0000bd");ea("flag","eu");var l={name:f.name,color:f.color};function fa(){}console.log("%c nehhon %c POWER ","background:#00ffd4;color:#000;font-size:25px","background:#000;color:#00ffd4;font-size:25px");const ha=-1<navigator.userAgent.toLowerCase().indexOf(" electron/");function m(a){return document.getElementById(a)||NaN}window.gid=m;
ha&&(aa=location.search.substr(1,location.search.length));void 0===f.fullscreen&&(f.fullscreen=!0);var n;const ia=[256,5E3,5E3,5E3,5E3,0,0,0,0,500,400,40,0,100,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,75,0,100,100,100,100,7,7,18,7,0,0,100,0,0,0,0,0,20,0,21,1,0,20,0,22,1,0,1,1,-4,0,0,12,1,-1,10,0,6,1,-7,14,0,1,1,21,20,0,1,1,22,20,0,4,1,55,24,0,3,2,43,1,0,5,0,234,1,0,15,0,88,1,0];
let ja=[384,1500,1500,1500,1500,0,0,1,0,450,450,100,2,100,0,25,0,0,10,1,0,0,0,0,0,0,0,0,0,75,0,100,100,100,100,7,7,14,7,0,0,100,0,0,0,1,0,17,0,21,1,0,17,0,22,1,0,1,1,-4,0,0,20,1,-1,11,0,4,1,44,16,0,2,1,21,20,0,2,1,22,20,0,50,0,88,1,0],ka=ja.slice(0);ka[0]=192;let la=[256,1500,1500,1500,1500,0,0,1,3,800,800,100,2,100,450,25,1,0,0,0,0,2,1E3,8,90,0,0,0,0,75,0,100,100,100,100,7,7,14,7,0,0,100,0,0,0,0,0,17,0,21,1,0,17,0,22,1,0,1,1,-4,0,0,20,1,-1,11,0,4,1,55,16,0,2,1,21,20,0,2,1,22,20,0,50,0,88,1,0];
var ma={Default:ia,"Deiv 1500":ja,"Battle Royale":[156,100,50,50,50,1,0,0,1,100,100,80,2,100,30,20,0,0,0,0,0,4,55,4,30,0,0,0,0,16,0,100,100,100,100,7,7,18,7,0,1,100,0,0,0,0,0,1,1,69,0,1,7,0,100,75,100,0,0,1,1,224,2,0,1,1,233,3,0,1,1,223,3,0,2,0,235,1,0,5,0,236,1,0,5,0,237,1,0,5,0,238,1,0,5,0,239,1,0,10,0,221,1,0,10,0,222,1,0,10,0,242,1,0,30,0,226,1,0,15,0,228,1,0,10,0,230,1,0,15,0,229,1,0,1,2,44,1,0,1,1,244,4,0,1,1,222,4,0,50,2,80,1,0,50,2,66,1,0,50,2,0,1,0,50,2,4,1,0],BRx4:la,Diesel:[256,1500,1500,
1500,1500,0,0,0,0,500,400,80,0,100,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,75,0,100,100,100,100,7,7,18,7,0,0,100,0,0,0,0,0,17,0,21,1,0,17,0,22,1,0,1,1,-4,0,0,20,1,-1,8,0,4,1,-31,16,0,12,1,-10,11,0,2,1,21,21,0,2,1,22,21,0,4,1,44,8,0,15,0,88,1,0],Classic:[256,400,400,400,400,0,0,0,0,1,200,80,2,100,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,75,0,100,100,100,100,7,7,18,7,0,0,100,0,0,0,0,0,12,0,21,1,0,12,0,22,1,0,1,1,-4,0,0,3,1,-1,6,0,1,1,21,15,0,1,1,22,15,0,3,1,32,10,0,15,0,88,1,0]};let na=ja.slice(0);na[42]=1;na[7]=7;
na[47]=34;let oa=ja.slice(0);oa[16]=1;oa[15]=80;oa[47]=37;oa[52]=37;oa[77]=3;oa[72]=3;let pa=ja.slice(0);pa[8]=3;pa[5]=1;pa[14]=1800;pa[21]=5;pa[22]=55;pa[23]=4;pa[24]=15;let qa=pa.slice(0);qa[14]=3600;var ra=[ja,ka,la,na,oa,pa,qa];function sa(){a:for(let a in ma){let b=ma[a];if(b.length==n.length){for(let c=1;c<b.length;c++)if(6!=c&&46!=c&&(n[8]||14!=c&&21!=c&&22!=c)&&b[c]!=n[c])continue a;return a}}}function ta(){try{n=f.mapConfig4&&JSON.parse(f.mapConfig4)||ia}catch{n=ia}}ta();
"true"==f.nightcycle&&(f.nightcycle=1);"true"==f.deathsounds&&(f.deathsounds=1);"true"==f.zoomPointer&&(f.zoomPointer=1);"true"==f.unlimitedZoom&&(f.unlimitedZoom=1);"true"==f.stdcolors&&(f.stdcolors=1);"true"==f.scrollmouse&&(f.scrollmouse=1);ea("favMusic",0);ea("musicRange",75);ea("soundRange",100);ea("nplayed",0);ea("zoomMult",50);ea("scrollSpeed",50);ea("menuOpacity",75);ea("visits",0);ea("shadows",!0);ea("multithreading",!0);ea("deathsounds",1);ea("quality",1);ea("antialiasing2",1);
ea("fogRefresh",2);ea("zoomPointer",1);ea("hlffps",0);ea("unlimitedZoom",1);ea("theme",!0);ea("scrollmouse",1);f.visits++;var q;console.log=()=>{};console.trace=()=>{};q=()=>{};var ua=window[atob("bG9jYXRpb24=")];"dHphLnJlZA=="===btoa(ua[atob("aG9zdG5hbWU=")])||ha||(ua[atob("aHJlZg==")]=atob("aHR0cHM6Ly90emEucmVk"));window.ms=q;const va=(2<navigator.deviceMemory||!navigator.deviceMemory)&&2<navigator.hardwareConcurrency&&window.SharedArrayBuffer&&("true"==f.multithreading||!f.multithreading);
var wa=document.createElement("script");wa.src="nehhon/"+(va?"em2.js":"em.js")+"?v=511";document.body.appendChild(wa);var ya,za={};
function Ba(a){if(za[a]){if(za[a]++,10<za[a])return}else za[a]=1;if(z){var b=z.getExtension("WEBGL_debug_renderer_info"),c=z.getParameter(b.UNMASKED_VENDOR_WEBGL);b=z.getParameter(b.UNMASKED_RENDERER_WEBGL)}var d=(B.now&&B.now()||0)/1E3,e=~~(d/60)%60,g=~~(d/3600);d=~~(d%60);1===(d+"").length&&(d="0"+d);10>e&&(e="0"+e);a=[a,B.m,g+":"+e+":"+d,va?1:0,D&&D[67]()?1:0,Ca?1:2,l.name,E.host?1:0,Da,l.navigator||"Chrome",Intl.DateTimeFormat().resolvedOptions().timeZone,navigator.language,f.visits,ha?1:0,511,
navigator.hardwareConcurrency,navigator.deviceMemory,c,b,l.lang];for(c=0;c<a.length;c++)a[c]||(a[c]=0),a[c].replaceAll&&(a[c]=a[c].replaceAll(",",".|"));F(15,Fa(" "+a.join(",")))}window.fstdD=function(a){Ba(a)};var Ga=0;
window.addEventListener("error",function(a){a=a.error&&a.error.stack?a.error.message+"-"+a.error.stack:a.lineno+":"+a.colno+" "+a.message;z&&z.getExtension("WEBGL_debug_renderer_info");"0:0 Script error."==a&&Ga++;4<Ga&&"0:0 Script error."==a||Ba(a);B.A&&Ha(`<span style="font-size:14px">${a.substr(0,550)}</span>`,"Error")});function G(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function J(a,b,c,d,e){a=document.createElement(a);e?b.prepend(a):b.appendChild(a);void 0!=c&&(a.innerHTML=c);d&&(a.style.cssText=d);return a}function Ia(a,b){var c=document.createElement("div");a.appendChild(c);void 0!=b&&(c.textContent=b);c.style.cssText="color:#81ff81"}function Ja(a,b,c,d,e,g,h){a=K("input",a,e);a.value=b;a.onchange=c;void 0!=g&&(a.max=g);a.type=d||"text";void 0!=h&&(a.min=h);return a}
function Ka(a,b){m("notifybar")&&G(m("notifybar"));J("div",document.body,a,b&&`color:${b}`||"").id="notifybar";setTimeout(G,6E3,m("notifybar"))}var La=location,Ma=0<=navigator.userAgent.indexOf(" OPR/"),Na="undefined"!==typeof InstallTrigger,Oa=0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor"),Pa=!!document.documentMode,Qa=!Pa&&!!window.Ob,Ra=window.chrome,Sa;Ma?Sa="Opera":Na?Sa="Firefox":Oa?Sa="Safari":Pa?Sa="IE":Qa?Sa="Edge":Ra&&(Sa="Chrome");Ra||ha||Ka("Partially supported browser, use Chrome/Opera/Desktop app instead");
l.wb=f.language||navigator.language||navigator.tc;var Ta={ca:"es",an:"es",gl:"es",eu:"es",ast:"es"}[l.wb.substr(0,2)]||l.wb.substr(0,2);l.version="v51.1";f.version!==l.version&&f.version&&(f.version=l.version,Ka("Updated to "+l.version));let Ua="en es it pt ru pl bg de cz".split(" ").indexOf(Ta);0>Ua&&(Ua=0,Ta="en");l.lang=Ua;l.Ia=Ta;if(4==Ua||6==Ua)document.title="\u0426\u0430\u0440\u0435\u0434";l.ya=0;l.race=0;l.navigator=Sa;l.R=151;l.Bc=null;l.ab=0;l.Da="nehhon/";
async function Va(a){return a.split("\n")}function L(a){return da[a]||""}var Wa,Xa,Ya=0;function Za(){Ya++;if(3==Ya){for(let b=0;4>b;b++){var a=L(698+b).split(",");let c=a.length,d=$a(ab),e=0;for(let g of a)for(a=0;20>a;a++)d[e++]=g.length>a?g.charCodeAt(a):0;D[253](c,b)}window.onhashchange=bb;bb()}}var cb=0,db,eb,fb,hb=a=>{if(a.data instanceof ArrayBuffer){let b=new Uint8Array(a.data),c=b[0];if(2==eb&&45!=c)return fb.put(a);if(gb[c])gb[c](0,b)}};
function ib(a){function b(){if(!d){let e=new Uint8Array(1);e[0]=24;c.send(e);setTimeout(b,6E4);jb&&14E3<Date.now()-jb&&c.close()}}this.active=!0;this.G=[];let c=new WebSocket("wss://hhh.tza.red:4333");this.C=c;this.C.binaryType="arraybuffer";let d=jb=0;setTimeout(b,6E4);this.C.onclose=function(e){d=!0;this.C=null;for(var g=E.G.slice(0),h=0;h<g.length;h++){var k=g[h];k.O||k.close()}m("gameList")&&(kb(m("gameList")),M("div",m("gameList"),803,"height:100%;text-align:center"));console.log(e);B.A&&B.m&&
!mb?(setTimeout(()=>{E=new ib(1)},2E3),Ka(L(835))):(B.m&&Ka(L(803),"#ff0000"),B.m&&nb())};this.C.onopen=function(){if(a){let e=new Uint8Array(13);ob(e,1,l.K);ob(e,5,db);ob(e,9,pb);F(54,e);eb=1;fb=[]}else cb=1,f.sid&&F(21,qb(parseInt(f.sid),f.nm))};this.C.onerror=function(e){q("error",e)};this.C.onmessage=hb}if(ha)window.require("electron").ipcRenderer.on("accountlog",(a,b)=>{console.log(b);F(12,rb(1,b.code))});var E;E=new ib;var sb,tb;
window.onmessage=function(a){const b=new URLSearchParams(a.data);sb&&b.has("code")&&(q(b,a.data),sb.close(),F(12,rb(ha?1:0,b.get("code"))))};window.opener&&(new URLSearchParams(window.location.search)).has("code")&&window.opener.postMessage(window.location.search,"*");var ub;
function vb(){if(f.sid)wb();else{let a=zb("",2);a.id="login";let b=J("div",a);ub=b;let c=K("button",b,"background:url(nehhon/discord.webp) no-repeat center;width:150px;height:93px");J("hr",b);J("button",b,"e-mail","color:#d1d1d1;width:150px;height:93px;font-size:15px").onclick=()=>{kb(b);let d=J("input",b);d.type="email";d.placeholder="name@example.com";M("button",b,2).onclick=()=>{let e=d.value;if(!(3>e.length)){kb(b);F(51,Ab(e));M("div",b,808,"font-size:10px;width:174px;color:var(--color1);");var g=
J("input",b);g.placeholder="abcd123";M("button",b,2).onclick=()=>{F(52,Bb(parseInt(g.value.trim(),36)));b.innerHTML="..."}}}};c.onclick=()=>{Cb(a);tb=Math.floor(Math.random()*2**32);sb=window.open((ha?"https://discord.com/api/oauth2/authorize?client_id=499870491960672256&redirect_uri=https%3A%2F%2Ftza.red%2F%3Fdesk%3D1&response_type=code&scope=identify%20email":"https://discord.com/api/oauth2/authorize?client_id=499870491960672256&redirect_uri=https%3A%2F%2Ftza.red%2F&response_type=code&scope=identify%20email")+
"&state="+tb,"Log In","toolbar=no, menubar=no, width=600, height=830, top=10, left=100")}}}var Db=document.createElement("div");Db.id="gameList";Eb=Db.children;Fb=document.createElement("div");Gb=document.createElement("div");Hb=document.createElement("span");Gb.appendChild(Hb);Db.appendChild(Fb);Db.appendChild(Gb);var Ib;
function Jb(){Kb=[L(106).split("|")[0],L(107).split("|")[0],L(108).split("|")[0],L(109).toLocaleUpperCase()];for(var a=["rnd0",L(110).split("| ")[0],"returnmenu",L(112)],b=0,c=a.length;b<c;b+=2)m(a[b])&&(m(a[b]).innerHTML=a[b+1]);a=m("mult");J("div",a,`\u2b9c ${L(98).split("| ")[0]} \u2b9e`);a.appendChild(Db);Hb.textContent="\u2bc6 "+L(83);Gb.id="rmply";K("div",Db).id="rln";a=J("section",Db);J("button",a,L(99).split("| ")[1]+" +").onclick=Ib;M("button",a,537).onclick=()=>location.hash="Ranking";J("ul",
m("index"),`<li id=about>${L(111)}</li><li id=chlog>${L(536)}</li><li id="yt"><a href="https://youtube.com/c/Tzared" alt="youtube channel" target="blank_"><img src="nehhon/yt.webp" alt="youtube channel"></a></li><li id="discord"></li>${!ha&&`<li id=tzdesk><svg width="24" height="24" viewBox="0 0 24 24" class="icon-nuGd5b"><g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg> <a id='tzdwd' style='text-decoration:none;color:inherit' href='download/' target="_blank">${L(538)}</a></li>`||
""}<li id=help>${L(114)}</li>`).id="topLinks";m("accb").innerHTML=f.sid?L(445):L(444);m("about").onclick=function(){location.hash="About"};m("help").onclick=function(){location.hash="#Guide"};m("chlog").onclick=function(){location.hash="#Changelog"};m("accb").onclick=vb;if(ha){a=J("span",m("mult"),"","position:absolute;right:0px");b=J("button",a,L(391).split("|")[0],"background:#00000085;color:#c3a447");let d=J("input",a,"","background: #00000085;");d.placeholder="https://tza.red/##room";b.onclick=
()=>{let e=d.value.split("##")[1];e&&(Lb=!0,Mb("#"+e),Nb())}}ha||(m("tzdesk").onclick=function(){m("tzdwd").click()});m("yt").onclick=function(){m("yt").children[0].click()};a=m("discord");a.ariaLabel="Discord";a.onclick=()=>{window.open("https://discord.gg/ndxJHxT","_blank")}}
(async function(){let a=await fetch(l.Da+l.Ia+".nhl");da=await Va(await a.text());Xa=[{name:L(547)},{name:L(548)},{name:L(549)},{name:L(550)},{name:L(551)},{name:L(552)},{name:L(553)},{name:L(554)},{name:L(555)}];Jb();Wa=1;Za()})();window.spAlert2=function(a,b,c,d){Ha(b&&L(b),L(a),d,L(c))};function Pb(){N("alert")}
function Qb(){var a=L(444)+" / "+L(861);let b=zb(L(441),1);b.style.fontSize="19px";J("button",b,a,"display:block;margin:28px auto auto;font-size:15px;padding:6px;background:#00ff0030;border-radius:2px").onclick=()=>{G(b.parentNode.parentNode);vb()}}
function Ha(a,b,c,d){var e=m("alert");e||(e=document.createElement("div"),e.id="alert",document.body.appendChild(e),e=m("alert"),q(d),e.innerHTML='\n                <div>\n                    <h3 id="alerttitle"></h3>\n                    <div id="alerttext"></div>\n                    <button id="alertok"></button>\n                </div>\n           ');var g=m("alerttitle"),h=m("alerttext");m("alertok").onclick=Pb;e.style.display="block";g.innerHTML=b||da&&L(115)||"Warning";m("alertok").innerHTML=
d||da&&L(116)||"Ok";h.innerHTML=a||"";c?m("alertok").style.display="none":m("alertok").style.display="block"}window.spAlert=Ha;var Rb=0,Sb;function Tb(a){Ub.innerHTML=L(117)+" "+a+"%"}window.showProgress=Tb;function Vb(){Rb++;Rb>=Sb&&(Wb?Wb():Xb())}function Yb(a,b){this.cb=a;this.size=b}function $a(a){return Zb(a.cb,a.size)}function $b(){var a=ab;return ac(a.cb,a.size)}
function bc(a){Wb=a;Ub.innerHTML=L(117);var b=1;O&&(b=1);cc=4096*b;Sb=3;a&&Sb--;Rb=0;D[134]("true"==f.shadows,b,cc);Tb.progress=0;Tb.total=0;Date.now();Vb();Ub.innerHTML=L(117);dc()}var Wb;function dc(){D[136]()==Sb-Rb?(Rb++,Vb()):setTimeout(dc,15)}function ec(){if(!ha){f.update=1;if(window.caches){var a=window.caches;a.keys().then(function(b){for(let c of b)a.delete(c)})}setTimeout(function(){location.reload(!0)},250)}}f.lastVersion&&511!=f.lastVersion&&(f.lastVersion=511,ec());var fc=m("index");
function gc(){f.cache_v||(f.cache_v=3);if(1!=f.update||ha)fetch("https://tza.red/version.txt",{cache:"no-store"}).then(function(b){return b.text().then(function(c){J("div",fc,l.version).id="info";511!=c&&ec()})});else if(delete f.update,3!=f.cache_v){f.cache_v=3;var a=indexedDB.deleteDatabase("emscripten_filesystem");a.onsuccess=function(b){q(b)};a=indexedDB.deleteDatabase("nh2019");a.onsuccess=function(b){q(b)}}}ha?J("div",fc,l.version+` ${aa&&` - ${aa}`||""}`).id="info":gc();
!ha&&"serviceWorker"in navigator&&(navigator.serviceWorker.register("sworker.js").then(function(){},function(a){q(a)}),navigator.serviceWorker.oncontrollerchange=function(){location.reload(!0)});var hc,ic,jc={},kc="ATTACK.mp3 BALLISTA.mp3 BLDGDONE.mp3 CHAT%20LOCATION.mp3 TECHDONE.mp3 UNITDONE.mp3 CHAT.mp3 E_CASTLE1.mp3 E_CATHEDRAL1.mp3 E_CATHEDRAL2.mp3 E_FARM1.mp3 E_CHURCH1.mp3 E_FARM2.mp3 E_HARBOR1.mp3 E_LUMBER1.mp3 E_MAGETOWER1.mp3 E_MAGETOWER2.mp3 E_MAGETOWER3.mp3 E_MARKET1.mp3 E_SHIPYARD1.mp3 E_STABLES1.mp3 E_STORAGE1.mp3 E_OUTPOST1.mp3 E_STORAGE2.mp3 E_TAVERN1.mp3 E_WARACADEMY1.mp3 E_WORKSHOP1.mp3 EVILCASTLE.mp3 GATE1.mp3 GATE2.mp3 GATE3.mp3 GATE4.mp3 GATE5.mp3 GATE6.mp3 GATEWAY.mp3 HOUSE1.mp3 HOUSE2.mp3 HOUSE3.mp3 HOUSE4.mp3 HOUSE5.mp3 MERCHANT.mp3 MINE1.mp3 MONASTERY1.mp3 MONASTERY2.mp3 R_CATHEDRAL1.mp3 R_CHURCH1.mp3 SHAOLIN2.mp3 SHAOLIN.mp3 CHOP%201.mp3 CHOP%202.mp3 CHOP%203.mp3 CHOP%204.mp3 CHOP%205.mp3 CHOP%206.mp3 CHOP%207.mp3 CHOP%208.mp3 CHOP%209.mp3 CHOP%2010.mp3 CHOP%2011.mp3 DIG%201.mp3 DIG%202.mp3 DIG%203.mp3 MINE%201.mp3 MINE%202.mp3 MINE%203.mp3 HIT%201.mp3 HIT%202.mp3 HIT%203.mp3 HIT%204.mp3 HIT%205.mp3 HIT%206.mp3 HIT%207.mp3 GHOST1.mp3 GHOST2.mp3 GOLEM1.mp3 GOLEM2.mp3 H%20SWORD%201.mp3 H%20SWORD%202.mp3 H%20SWORD%203.mp3 H%20SWORD%204.mp3 H%20SWORD%205.mp3 H%20SWORD%206.mp3 H%20SWORD%207.mp3 H%20SWORD%208.mp3 H%20SWORD%209.mp3 H%20SWORD%2010.mp3 H%20SWORD%2011.mp3 H%20SWORD%2012.mp3 HAND1.mp3 HAND2.mp3 HAND3.mp3 HAND4.mp3 MAGE%20ATTACK.mp3 MESSIAH.mp3 ORC%20SWORD%201.mp3 ORC%20SWORD%202.mp3 ORC%20SWORD%203.mp3 ORC%20SWORD%204.mp3 ORC%20SWORD%205.mp3 ORC%20SWORD%206.mp3 ORC%20SWORD%20V1.mp3 ORC%20SWORD%20V2.mp3 ORC%20SWORD%20V3.mp3 SHIP%20CANNON%201.mp3 SHIP%20CANNON%202.mp3 SHIP%20CANNON%203.mp3 SHIP%20CANNON%204.mp3 SHIP%20CANNON%205.mp3 SHIP%20CANNON%206.mp3 SHIP%20CANNON%207.mp3 SIEGE.mp3 SWORD%201.mp3 SWORD%202.mp3 SWORD%203.mp3 SWORD%204.mp3 SWORD%205.mp3 SWORD%206.mp3 SWORD%207.mp3 SWORD%208.mp3 SWORD%209.mp3 SWORD%2010.mp3 SWORD%2011.mp3 SWORD%2012.mp3 SWORD%2013.mp3 SWORD%2014.mp3 SWORD%2015.mp3 SWORD%2016.mp3 V%20SWORD%201.mp3 V%20SWORD%202.mp3 V%20SWORD%203.mp3 V%20SWORD%204.mp3 V%20SWORD%205.mp3 V%20SWORD%206.mp3 V%20SWORD%207.mp3 ADRAGON2.mp3 ADRAGON3.mp3 ARROW%201.mp3 ARROW%202.mp3 ARROW%203.mp3 ARROW%204.mp3 ARROW%205.mp3 ARROW%206.mp3 ARROW%20V1.mp3 ARROW%20V2.mp3 ARROW%20V3.mp3 ARROW%20V4.mp3 BEAR1.mp3 BEAR2.mp3 BEAR3.mp3 BEAR4.mp3 BEAR5.mp3 MWORKSHOP.mp3 DESTROY%20BUILDING.mp3 DESTROY%20MINE.mp3 LIGHTING2.mp3 LIGHTING.mp3 METEOR.mp3 SMALL%20EXPLOSION.mp3 WATER%20BLOP.mp3 SPY%20KILL%201.mp3 SPY%20KILL%203.mp3 SPY%20KILL%202.mp3 PRIEST%20ATTACK.mp3 LIGHTNING.mp3 INVISIBLE.mp3 HEAL.mp3 FREEZE.mp3 FLAME%20BALL.mp3 CURSE.mp3 CRUSADE.mp3 CONFUSION.mp3 BLESS.mp3 WHIRLPOOL.mp3 TURN%20TO%20STONE.mp3 TEACH.mp3 SUMMON10.mp3 SUMMON9.mp3 SUMMON8.mp3 SUMMON7.mp3 SUMMON6.mp3 SUMMON5.mp3 SUMMON4.mp3 SUMMON3.mp3 SUMMON2.mp3 SUMMON1.mp3 REVEAL.mp3 RESSURECT.mp3 COWDIE1.mp3 COWDIE2.mp3 COWDIE3.mp3 COWDIE4.mp3 DIE%201.mp3 DIE%202.mp3 DIE%203.mp3 DIE%204.mp3 DIE%205.mp3 DIE%206.mp3 DIE%207.mp3 DIE%208.mp3 DIE%209.mp3 DIE%2010.mp3 DRAGON%20DIE%201.mp3 DRAGON%20DIE%202.mp3 GOLEM.mp3 H%20DIE%201.mp3 H%20DIE%202.mp3 H%20DIE%203.mp3 H%20DIE%204.mp3 H%20DIE%205.mp3 H%20DIE%206.mp3 H%20DIE%207.mp3 H%20DIE%208.mp3 H%20DIE%209.mp3 H%20DIE%2010.mp3 MAGE.mp3 ORC%20DIE%201.mp3 ORC%20DIE%202.mp3 SHIP%20SINK.mp3 SIEGE%20DIE%201.mp3 SIEGE%20DIE%202.mp3 SIEGE%20DIE%203.mp3 SIEGE%20DIE%204.mp3 SKELETON%20DIE%201.mp3 SKELETON%20DIE%202.mp3 SKELETON%20DIE%203.mp3 SKELETON%20DIE%204.mp3 MESSIAH_ATTACK.mp3 C%20DIE%201.mp3 C%20DIE%202.mp3 C%20DIE%203.mp3 C%20DIE%204.mp3 C%20DIE%205.mp3 CAMELDIE1.mp3 CAMELDIE2.mp3 CAMELDIE3.mp3 BAT%20ATTACK.mp3 BAT%20CMD.mp3 BAT%20DIE.mp3 CAMEL1.mp3 CAMEL2.mp3 CARPETCMD.mp3 CATAPULT.mp3 CBEAR1.mp3 CBEAR2.mp3 CBEAR3.mp3 CBEAR4.mp3 COW1.mp3 COW2.mp3 COW3.mp3 COW4.mp3 DRAGON1.mp3 DRAGON2.mp3 FLY1.mp3 FLY2.mp3 FOOT1.mp3 FOOT2.mp3 FOOT3.mp3 FOOT4.mp3 FOOT5.mp3 FOOT6.mp3 FOOT7.mp3 FOOT8.mp3 GHOST1CMD.mp3 GHOST2CMD.mp3 GHOST3CMD.mp3 GOLEMCMD.mp3 H%20CMD%201.mp3 H%20CMD%202.mp3 H%20CMD%203.mp3 H%20CMD%204.mp3 HEAVY%20CATAPULT.mp3 INF%20CMD%201.mp3 INF%20CMD%202.mp3 INF%20CMD%203.mp3 INF%20CMD%204.mp3 INF%20CMD%205.mp3 MESSIAHCMD.mp3 ORC%20CMD%201.mp3 ORC%20CMD%202.mp3 ORC%20CMD%203.mp3 ORC%20CMD%204.mp3 ORC%20CMD%205.mp3 ORC%20CMD%206.mp3 SHIP%20CMD%201.mp3 SHIP%20CMD%202.mp3 SKELETON1.mp3 SKELETON2.mp3 SHIP%20SELECT.mp3 E_BARRACK1.mp3 E_BLACKSMITH1.mp3 FIRE1.mp3 FIRE2.mp3 FIRE3.mp3 FIRE4.mp3 FIRE5.mp3 ROCKET.mp3 pepe.mp3 A_MAGE.mp3".split(" "),
lc,mc;function nc(){var a=pc;this.context=hc;this.onload=a}function pc(a,b,c){b=b.split(".")[0].toLowerCase();jc[b]=a;c&&(ic(b,c.x,c.y,c.k,c.Rb,c.I),c.I=0)}
function Nb(){if(!hc){nc.prototype.Qb=function(d,e){var g=this;qc(l.Da+d,function(h){g.context.decodeAudioData(h).then(function(k){k&&pc(k,d,e)})})};for(var a=0,b=kc.length;a<b;a++){var c=kc[a];jc[c.split(".")[0].toLowerCase()]=c}"undefined"!==typeof AudioContext&&(window.AudioContext=window.AudioContext||window.webkitAudioContext,hc=new AudioContext,mc=hc.createGain(),lc=new nc,mc.gain.value=parseInt(f.soundRange)/100,mc.connect(hc.destination));ic=function(d,e,g,h,k,p,r){if(lc&&parseInt(f.soundRange)){"string"!==
typeof d&&(d=kc[d].split(".")[0].toLowerCase());var t=d;if((d=jc[d])&&"loading"!==d&&!B.gb){var u=-rc+(window.innerWidth-l.R)/2,v=-sc+window.innerHeight/2;if(d.duration){if(B.A)if(64<B.now()-d.rb||!d.rb)d.rb=B.now();else return;if(!("attack"!=t&&p&&600<Date.now()-p)){if(e){if(k=(-u/32+e)/7,g=(-v/32+g)/7,v=tc,4096<k*k+g*g)return!1}else v=g=k=0;void 0!==h&&h!==l.qb||B.zc||(h=hc.createBufferSource(),h.buffer=d,e?(d=hc.createPanner(),d.panningModel="HRTF",d.setPosition(k,g,v),d.refDistance=1,d.distanceModel=
"inverse",h.connect(d),d.connect(mc)):h.connect(mc),h.start(0))}}else jc[t]="loading",e={x:e,y:g,k:h,Rb:k,I:Date.now(),mid:r},lc.Qb(d,e)}}};window.play=ic}}
const uc=[{name:"Tzar soundtrack",Z:"Kiril Busty Petrushev & Dimitar Sabev",volume:.7,fa:[{url:"ts1.mp3",name:"Track 1"},{url:"ts2.mp3",name:"Track 2"},{url:"ts3.mp3",name:"Track 3"},{url:"ts4.mp3",name:"Track 4"},{url:"ts5.mp3",name:"Track 5"},{url:"ts6.mp3",name:"Track 6"},{url:"ts7.mp3",name:"Track 7"},{url:"ts8.mp3",name:"Track 8"},{url:"ts9.mp3",name:"Track 9"},{url:"ts10.mp3",name:"Track 10"}],ma:[{sizes:"141x141",src:"nehhon/cover.png"}],Oa:!0},{name:"Sharp Rain Tzar",Z:"Sharp Rain, Kiril Busty Petrushev & Dimitar Sabev",
volume:1,fa:[{url:"sr1.mp3",name:"Track 1"},{url:"sr2.mp3",name:"Track 2"},{url:"sr3.mp3",name:"Track 3"},{url:"sr4.mp3",name:"Track 4"},{url:"sr5.mp3",name:"Track 5"},{url:"sr6.mp3",name:"Track 6"},{url:"sr7.mp3",name:"Track 7"},{url:"sr8.mp3",name:"Track 8"},{url:"sr9.mp3",name:"Track 9"},{url:"sr10.mp3",name:"Track 10"}],ma:[{sizes:"141x141",src:"nehhon/shr.png"}],Oa:!0},{name:"Tzar soundtrack",Z:"Kiril Busty Petrushev & Dimitar Sabev",volume:1,fa:[{url:"tzaradp.mp3",name:"Tzar ADP",Z:"Diemiurgo"},
{url:"ts1.mp3",name:"Track 1"},{url:"ts2.mp3",name:"Track 2"},{url:"ts3.mp3",name:"Track 3"},{url:"ts4.mp3",name:"Track 4"},{url:"ts5.mp3",name:"Track 5"},{url:"ts6.mp3",name:"Track 6"},{url:"ts7.mp3",name:"Track 7"},{url:"ts8.mp3",name:"Track 8"},{url:"ts9.mp3",name:"Track 9"},{url:"ts10.mp3",name:"Track 10"}],ma:[{sizes:"200x200",src:"nehhon/diemiurgo.jpg"}]},{name:"Tzar soundtrack remastered",volume:1,Z:"Kiril Busty Petrushev & Dimitar Sabev",fa:[{url:"o1.mp3",name:"Track 1"},{url:"o2.mp3",name:"Track 2"},
{url:"o3.mp3",name:"Track 3"},{url:"o4.mp3",name:"Track 4"},{url:"o5.mp3",name:"Track 5"},{url:"o6.mp3",name:"Track 6"},{url:"o7.mp3",name:"Track 7"},{url:"o8.mp3",name:"Track 8"},{url:"o9.mp3",name:"Track 9"},{url:"o10.mp3",name:"Track 10"},{url:"outro.mp3",name:"Outro"}],ma:[{sizes:"141x141",src:"nehhon/cover.png"}],Oa:!0},{name:"Tzar soundtrack orchestral version",volume:1,Z:"Pau Garriga, Kiril Busty Petrushev & Dimitar Sabev",fa:[{url:"oc1.mp3",name:"Track 1"},{url:"oc2.mp3",name:"Track 2"},{url:"oc3.mp3",
name:"Track 3"},{url:"oc4.mp3",name:"Track 4"},{url:"oc5.mp3",name:"Track 5"},{url:"oc6.mp3",name:"Track 6"},{url:"oc7.mp3",name:"Track 7"},{url:"oc8.mp3",name:"Track 8"},{url:"oc9.mp3",name:"Track 9"},{url:"oc10.mp3",name:"Track 10"}],ma:[{sizes:"480x360",src:"nehhon/oc.jpg"}],Oa:!0}];var vc;
function wc(){"mute"!=f.favMusic&&vc&&(vc.src="nehhon/F.mp3",vc.play(),"mediaSession"in navigator&&(navigator.mediaSession.playbackState="playing",navigator.mediaSession.metadata=new window.MediaMetadata({title:"Astronomia (Medieval Style)",artist:"Cornelius Link",artwork:[{sizes:"200x200",src:"nehhon/cornelius.jpg"}]})))}
function xc(){this.value&&(f.favMusic=this.value);if("mute"!=f.favMusic){var a=uc[f.favMusic]||uc[0];if(a.Oa){a=a.fa;for(let b=a.length-1;0<b;b--){const c=Math.floor(Math.random()*(b+1));[a[b],a[c]]=[a[c],a[b]]}}}yc.id=0;yc()}
function yc(){var a=f.favMusic;if("mute"==a)return vc.src="";a=uc[a]||uc[0];0>yc.id&&(yc.id=0);var b=a.fa[yc.id++%a.fa.length];vc.src="nehhon/"+b.url;vc.play();"mediaSession"in navigator&&(navigator.mediaSession.playbackState="playing",navigator.mediaSession.metadata=new window.MediaMetadata({title:b.name,artist:b.Z||a.Z,album:a.name,artwork:a.ma}))}
function zc(){vc=new Audio;vc.onended=yc;vc.volume=parseInt(f.musicRange)/100;if("mediaSession"in navigator){var a=navigator.mediaSession;a.setActionHandler("play",function(){vc.play();a.playbackState="playing"});a.setActionHandler("pause",function(){vc.pause();a.playbackState="paused"});a.setActionHandler("seekbackward",function(){});a.setActionHandler("seekforward",function(){});a.setActionHandler("previoustrack",function(){yc.id-=2;yc()});a.setActionHandler("nexttrack",yc)}xc()}
window.setupGameMusic=zc;var Ac;function Bc(){return 25*D[48]()}function Cc(){if(0===B.paused){B.paused=1;void 0!=Ac&&clearInterval(Ac);var a=B.now();B.va+=Date.now();B.now=function(){return a}}else B.va-=Date.now(),B.paused=0,Ac=setInterval(Dc,Dc.speed),B.now=Bc}function Ec(a){a/=1E3;var b=~~(a/60)%60,c=~~(a/3600);a=~~(a%60);1===(a+"").length&&(a="0"+a);0!=c?(c+=":",10>b&&(b="0"+b)):c="";return c+b+":"+a}var Fc=0,Gc=0;
window.invgtech=function(a){a=J("div",Hc,"",`background-position-y:${a}px`);a.className="techdone";setTimeout(G,4020,a)};window.synctm=function(){D[11]()};function Dc(){var a=!0;do{B.Y=D[48]();a?Fc&&(Gc+=Date.now()-Fc-Dc.speed):Gc-=Dc.speed;Fc=Date.now();a=Date.now();D[11]();B.Y=D[48]();var b=Ic;0===B.Y%40&&b();Jc+=Date.now()-a;a=!1}while(!Lc&&Gc>=Dc.speed)}Dc.speed=25;function Mc(){this.Ea=!this.Ea;this.style.backgroundPositionY=-28*!this.Ea+"px";D[182](this.Kb,this.Ea,this.pa)}
function Nc(a){document.body.style.cursor="";m("diplomacy")||O||(zb('<table>\n    <tbody id="dpltable">\n    </tbody>\n    </table>\n    ',a).id="diplomacy",D[181]())}
function Oc(){var a=Pc('<div><input type="number" min="0" max="2147483647" step="100" value="0"><img src="nehhon/gold.gif"></div><div><input type="number" min="0" max="2147483647" step="100" value="0"><img src="nehhon/wood.gif"></div><div><input type="number" min="0" max="2147483647" step="100" value="0"><img src="nehhon/food.gif"></div><div><input type="number" min="0" max="2147483647" step="100" value="0"><img src="nehhon/stone.gif"></div>',1);a.className="sndRes";a=J("button",a,L(448),"padding:15px;margin-top:24px;background:#00ff001a");
a.pa=this.pa;a.onclick=Qc}function Qc(){var a=this.parentNode.getElementsByTagName("input");q(a,this);D[183](this.pa,parseInt(a[0].value),parseInt(a[1].value),parseInt(a[2].value),parseInt(a[3].value));Cb(this.parentNode)}
window.shdiplomacyrow=function(a,b,c,d,e,g,h,k,p,r,t,u,v,x,A){b=Rc(r,b);var y=document.createElement("tr");const w=D[112]()==u;J("td",y,a);J("td",y,"","padding:0px;width:13px");J("td",y,`<div style="width:4px;background:${Sc(d)};border-radius:1px;height:16px;"></div>`,"padding:0px");J("td",y,b+Tc(r),`color:#ffd75d;${h&&";text-decoration:line-through;color:#f00"||""}`);J("td",y,c);a=n[45]&&D[48]()<2400*n[18];if(w)J("td",y,`<div class="shme" style="color:#ffb100">${D[246]()?"":A||"\ud83d\udec7"}</div>`,
"padding:0 5px;");else{J("td",y,`<div class="${p?"shenemies":"shallies"}">${D[246]()?"":A||"\ud83d\udec7"}</div>`,"padding:0 5px;");Da&&J("td",y,`<div class="shview" style="background-position-y:${-28*!g}px;${e&&"box-shadow: 0px 0px 0px 1px inset #197b10;"||""}"></div>`,"padding:0 5px;").children[0];if(!a){e=K("td",y,"padding:0 5px;");for(let C=0;4>C;C++){let H=K("div",e,`background-position-y:${-28*!(t&1<<C)}px;${(x&1<<C?1:0)&&"box-shadow: 0px 0px 0px 1px inset #197b10;"||""}`);Uc(H,C);H.className=
"shres";p||(H.onclick=()=>{t^=1<<C;H.style.backgroundPositionY=-28*!(t&1<<C)+"px";q(t);D[182](1,t,u)})}e.title="Share resources"}v=J("td",y,`<div class="shcontrol" style="background-position-y:${-28*!k}px;${v&&"box-shadow: 0px 0px 0px 1px inset #197b10;"||""}"></div>`,"padding:0 5px;").children[0];v.title="Share control of units";p||(a||(p=J("td",y,'<div class="shtrib"></div>',"padding:0 5px;").children[0],p.onclick=Oc,p.pa=u),v.onclick=Mc,v.Kb=2,v.Ea=k,v.pa=u)}m("dpltable").appendChild(y)};
var Jc=0,Vc=0,Wc=0,Xc=[14,12,0,0,0,0,18,18,11,14,7,7,5,5,16,11,16,8,5,5,16,15],Yc=-1;window.cursor=function(a,b){var c=Xc[2*a]||0,d=Xc[2*a+1]||0;b&&(a+="i");a!==Yc&&(Yc=a,document.body.style.cursor=`url("${l.Da}cursor${a}.gif") ${c} ${d}, auto`)};var Zc,$c,ad,bd,cd,dd,ed,fd,gd,hd,id,jd,kd,ld,md,nd;window.setupArrows=function(a,b,c){a&&(hd.Ja.className="");(a+1)*fd.length<b&&(hd.Ma.className="");c&&(hd.Ab.className="")};const od=[20,15,14,22];
window.setupTradingmenu=function(a,b,c,d,e,g){m("tradingmenu")?pd("tradingmenu"):(J("div",qd?m("menbak2"):m("menu"),'<button id="tramount"></button>\n<button id="troriginres"></button>\n<button id="trdestres"></button>\n<button id="trorigin"></button>\n<button id="trdest"></button>\n<button id="trdecline" style="top:167px"></button>\n<button id="traccept" style="top:167px"></button>',"",qd).id="tradingmenu",m("tramount").onmouseup=function(h){D[159](h.button?-1:1)},m("troriginres").onmousedown=function(h){this.style.backgroundPositionY=
-48*od[D[160](h.button?-1:1)]+"px"},m("trdestres").onmousedown=function(h){this.style.backgroundPositionY=-48*od[D[160](h.button?-1:1,1)]+"px"},m("trorigin").onclick=function(){D[161]()},m("trdest").onclick=function(){D[161](1)},m("trdecline").onclick=function(){N("tradingmenu")},m("traccept").onclick=D[162]);m("traccept").disabled=!g;q(a);m("tramount").innerHTML=a+` (+${g})`;c?m("trorigin").style.cssText=`background:url(nehhon/iconunits.webp) 0px ${48*-c}px`:m("trorigin").style.cssText="";b?m("trdest").style.cssText=
`background:url(nehhon/iconunits.webp) 0px ${48*-b}px`:m("trdest").style.cssText="";m("troriginres").style.backgroundPositionY=-48*od[e]+"px";m("trdestres").style.backgroundPositionY=-48*od[d]+"px"};var rd=navigator.Ob;function sd(){}rd&&rd.addEventListener("levelchange",sd);
window.setupMWmenu=function(){m("magicworkshopmenu")?pd("magicworkshopmenu"):(J("div",qd?m("menbak2"):m("menu"),'<button id="mgbook"></button>\n            <button id="mgpotion"></button>\n            <button id="mgsword"></button>\n            <button id="mgamount"></button>\n            <button id="mgitem"></button>\n            <button id="mgdecline"></button>\n            <button id="mgaccept"></button>',"",qd).id="magicworkshopmenu",m("mgbook").onclick=function(){D[36](0);td()},m("mgpotion").onclick=
function(){D[36](1);td()},m("mgsword").onclick=function(){D[36](2);td()},m("mgdecline").onclick=function(){m("magicworkshopmenu").style.display="none"},m("mgitem").onmousedown=function(a){var b=1;a.button&&(b*=-1);D[37](b);td()},m("mgaccept").onclick=function(){m("magicworkshopmenu").style.display="none";D[39]()},m("mgamount").onmousedown=function(a){var b=1;a.button&&(b=-1);D[38](b);td()});td()};
function td(){m("mgitem").style.backgroundPositionY=-48*D[35]()+"px";m("mgamount").innerHTML=D[34]()}function ud(a,b){var c=a.X,d=document.createElement("div");d.className="contD";for(var e=0;e<c.length;e++){var g=document.createElement("button"),h=c[e];h.parent=a;g.innerHTML=h.name;g.onclick=vd;g.ia=h;b.appendChild(g);h.X&&(h.hb=d)}b.appendChild(d)}function wd(a){a.style.visibility="hidden"}function P(a){a.style.display="none"}Element.prototype.show=function(){this.style.display="block"};
function xd(a){a.style.display=""}function yd(a){var b=m(a.parent);ud(a,b)}var zd;function Ad(){var a=Bd,b=Cd();a.X=b;a.sa&&(a.sa.innerHTML="",ud(a,a.sa))}
function vd(){var a=this.ia,b=a.parent;if(a.onclick)a.onclick(a.yb);if(zd&&b&&b.T!=zd)for(var c=zd,d=c.length,e=0;e<d;m(c[e++]).style.display="none");a.T&&(Dd(a.T),zd=a.T);a.da&&a.da.ia&&a.da.ia.T&&(Dd(a.da.ia.T),zd=a.da.ia.T);if(a.X){b.da&&(b.da.className="");b.da=this;this.className="clickD";a.sa||(b=document.createElement("div"),a.hb.appendChild(b),ud(a,b),a.sa=b);b=a.hb.children;for(c=0;c<b.length;P(b[c++]));a.sa.show()}}
function Ed(){var a=D[112]();m("selectKingdom").innerHTML="";for(var b=0,c=D[28]();b<c;b++){var d=b?Gd(Hd(D[111](b),20)):L(23),e=Sc(D[132](b));m("selectKingdom").innerHTML+=`<option style="background:${e}" value="${b}" ${b==a&&"selected"||""}>${d}</option>`}m("selectKingdom").innerHTML+="<option value='"+(2**31-1)+"'>"+L(22)+"</option>";m("selectKingdom").onchange(1)}window.activeKingdomSetup=Ed;function Id(a){D[117](a,!0)}
function Jd(a,b){let c=$a(ab),d=a.length;1024<d&&(d=1024);for(let e=0;e<d;e++)c[e]=a.charCodeAt(e);D[239](d,b)}function Kd(a){m("brushSize").value=a;m("brushSize").onchange()}function Ld(a,b){var c=` (${Ld.ta.length})`;Ld.ta.put({name:"water"==Md.j[b]&&L(45)+c||L(46)+c,onclick:Id,yb:a})}window.EDterrainInfo=Ld;function Cd(){Ld.ta.length=0;D[118]();return Ld.ta}var Nd;window.fstTXT=function(a,b){b?Nd=Gd(Zb(a,b)):Nd=""};var Od=(a,b)=>a.name.localeCompare(b.name);let Pd;var Qd=1,Rd,Bd;
function Sd(){qd="true"==f.theme||1020>window.innerWidth;m("content")||(J("div",Hc).id="content");if(O){Ld.ta=[];m("content").innerHTML=`<div id="mapeditorpanel">
    <div id="mapeditorinfo">
    </div>
    </div>
    <div id="minimap" style="box-shadow:0px 0px 20px #000;position:absolute;top:31px;left:4px"></div>
    <div id="mapeditorinfotop">
   
    <button style="display:none" id="deleteUnit" style="color:#f00;font-weight:bold;font-size:19px">x</button>
    <button style="display:none" id="rotatebutton"></button>
    <button id="mapProps" style="box-shadow:none"></button>
    <button id="mapRules">${L(576)}</button>
    <button style="display:none" id="mapRules"></button>
    <div id="brhSize" style="display:none"><span>${L(728)}: </span><input type="number" min="1" max="512" value="8" id="brushSize"/></div>
    <div id="brhMargin" style="display:none"><span>Brush margin: </span><input type="number" min="0" max="512" value="0" id="brushMargin"/></div>
    <div id="brhDnst" style="display:none"><span>Brush density: </span><input type="number" min="1" max="100" value="25" id="brushDensity"/></div>
    <div id="EDrndtree" style="display:none"><button id="rndtrees">${L(49)}</button></div>
    <div id="EDterr" style="display:none"><span>${L(26)}: </span><select id="EDtrrsel">${Td()}</select></div>
    <div id="EDterrRND" style="display:none"><button id="rndtrbutton">${L(50)}</button></div>
    <div><span style="font-size:14px;color:#797979">${L(670)}: </span>
    <select id="selectKingdom">
    </select>
    </div>
    <div><button id="castleRND">${L(52)}</button></div>
    <div><button id="clearMap">${L(51)}</button></div>
    </div>
    <div id="bigMap" style="display:none"></div>
    ${""}
    `;m("mapRules").onclick=Ud;let a=m("mapeditorinfotop");K("button",a,"box-shadow:none;background:url(nehhon/load.webp);opacity:.8;width:20px;height:26px;background-size:20px",1).onclick=()=>{var c=document.createElement("input");c.type="file";c.accept=".tzared";c.onchange=Vd;c.click()};K("button",a,"box-shadow:none;margin-right:-6px;background:url(nehhon/dwn.webp);background-size:26px;opacity:.8;width:26px;height:26px",1).onclick=Wd;K("button",a,"box-shadow:none;margin-right:-6px;background:url(nehhon/exit.webp);background-size:30px;opacity:.8;width:30px;height:28px;margin-left:auto").onclick=
Xd;let b=J("button",a,"\u25a4");a.insertBefore(b,m("brhSize")).onclick=()=>{let c=Pc("",1);M("div",c,678,"color:var(--color1);font-size:22px;margin-bottom:32px");let d=Yd(c),e=Zd(c),g=J("div",c),h=$d(c,0,[624,598,586,873]),k,p,r;h.onchange=()=>{k=void 0;kb(g);if(1==h.value){g.className="unitProps";k=ae([0,0,0,0,0,0,0],Q(d),g);J("span",g,L(676)+": ");let t=be(u=>p=u,g,0);t.style.margin="20px";p=2147483646;M("option",t,677).value=p;t.value=p}else 3==h.value&&(r=J("input",g),r.placeholder=L(747),r.maxLength=
20)};M("button",c,675,"margin-left:15px").onclick=()=>{let t=$a(ab);for(var u=0;u<e.length;u++)t[u+1024]=e[u].checked;if(1==h.value){for(u=0;u<k.length;u++)k[u]&&(t[u]=parseInt(k[u].value));t[7]=p}else if(3==h.value){for(u=0;u<r.value.length;u++)t[u]=r.value.charCodeAt(u);t[1023]=r.value.length}D[247](Q(d),Q(h));Cb(c)}};m("castleRND").onclick=function(){D[133](0);ce.update=!0};m("clearMap").onclick=function(){D[133](1)};m("rndtrees").onclick=D[125];m("rndres").onclick=D[129];m("brushDensity").onchange=
function(){D[116](parseInt(m("brushDensity").value))};m("brushSize").onchange=function(){D[115](parseInt(m("brushSize").value))};m("brushMargin").onchange=function(){D[147](parseInt(m("brushMargin").value))};m("rndtrbutton").onclick=function(){D[3]();D[124]();ce.update=!0};m("brushDensity").onchange();m("brushSize").onchange();m("selectKingdom").onchange=function(){D[113](parseInt(this.value));if(this.value!=2**31-1){var c=D[132](parseInt(this.value)),d=c>>16&255,e=c>>8&255;c&=255}else c=e=d=0;this.style.background=
`rgba(${d},${e},${c},0.6)`};m("mapProps").onclick=function(){var c=Pc("",1);c.id="mapPropsWindow";c=J("div",c);de=J("div",c);de.id="edks";ee();var d=K("div",c,"margin-bottom:24px;display:flex;justify-content:center;gap:33px"),e=[48,fe,737,()=>ge(),463,he,702,()=>ie()];for(let p=0;p<e.length;p+=2)M("button",d,e[p],"text-transform:uppercase").onclick=e[p+1];d=K("div",c,"background:rgba(255,255,255,0.03);box-shadow:rgb(0 0 0) 0px 0px 20px;border:1px solid rgba(243,205,90,0.08);padding:12px;");M("p",
d,54);let g=J("input",d);g.onchange=()=>Jd(g.value,0);D[240](0);g.value=Nd;M("p",d,56);let h=K("textarea",d,"width:694px;height:152px");h.onchange=()=>Jd(h.value,1);D[240](1);h.value=Nd;M("p",d,57);let k=J("input",d);k.onchange=()=>Jd(k.value,2);D[240](2);k.value=Nd;M("button",d,70,"display:block;margin-top:15px;margin-left:auto").onclick=()=>{let p=Pc("",1),r=D[250]();M("span",p,691,"line-height:31px");let t=je(p,v=>{v?(u.show(),u.value="",u.focus()):(P(u),D[250](1,0),u.value=0)},r);t.style.rc="right";
t.style.marginLeft="6px";let u=Ja(p,r,()=>{ke(u);D[250](1,Q(u))},"number","display:block;margin:auto;margin-top:14px",9999999,0);r?u.focus():P(u)};d=K("div",c,"background:rgba(255,255,255,0.03);box-shadow:rgb(0 0 0) 0px 0px 20px;border:1px solid rgba(243,205,90,0.08);padding:12px;margin-top:30px;width:max-content");J("span",d,L(457)+": ");e=J("input",d,"","display:block;margin-top:10px;background:none");e.onchange=le;e.type="file";e.accept="image/*";J("div",d).id="mmimg";c=K("div",c,"background:rgba(255,255,255,0.03);box-shadow:rgb(0 0 0) 0px 0px 20px;border:1px solid rgba(243,205,90,0.08);padding:12px;margin-top:30px;width:max-content");
M("span",c,721);c=J("input",c,"","display:block;margin-top:10px;background:none");c.onchange=me;c.type="file";c.accept=".wmp"};Bd={name:L(26),X:Ld.ta,T:["brhSize"]};Pd=[{name:L(535),onclick:()=>D[117](-1,!0),T:["brhSize"]}];new yd({X:[{name:L(730),onclick:()=>Kd(1),T:["brhSize","brhMargin"],X:[{name:L(729),onclick:()=>ne(D[110])}]},{onclick:()=>Kd(8),name:L(26).toUpperCase(),X:[Bd,{name:L(61),X:[{name:L(61),onclick:D[117],yb:7}],T:["brhSize","brhDnst","EDrndtree"]},{name:L(534),X:Pd,onclick:()=>{Pd.length=
1;let c=D[215]();for(let d=0;d<c;d++)Pd.put({name:d,onclick:()=>{D[216](d)}})}}]}],parent:"mapeditorinfo"})}else qd?(m("content").className="nw",m("content").innerHTML=`<ul id="msgs1"></ul>
    <div id="playersinfo"></div>
    <div id="pop"></div>
    <div id="popr"></div>
    <div id="resources">
    <div><span id="gold"></span></div>
    <div><span id="wood"></span></div>
    <div><span id="food"></span></div>
    <div><span id="stone"></span></div>
    <div id="temperature"></div>
    </div>
    <div id="diplomacyButton"></div>
    ${B.m&&'<div id="msgButton"></div>'||""}
    <div id="topinfo">
    <span id="tpCPU"> </span>
    <span id="tpGPU"> </span>
    <span id="tpTM"></span>
    </div>
    <div id="bottominfo"></div>

    <div id="minimap" style="position:absolute;top:31px;left:4px;z-index:1"></div>
    <div style="display:none" id="bigMap"></div>
    <button id="minimapb"></button>
    <button id="menuctrl"></button>
    <div id="menu" style="display:block">
    <div id="menbak0">
    <div id="plavatar"></div>
    ${!ya&&'<div id="kingdom"></div>'||""}
    </div>
    <div id="menbak1"></div>
    <div id="menbak1s"></div>

    <div id="icons20">
    <div id="attackmenu" style="display:none"></div>
    <div id="defencemenu" style="display:none"></div>
    <div id="levelmenu" style="display:none"></div>
    <div id="manamenu" style="display:none"></div>
    <div id="manamenu1" style="display:none"></div>
    </div>

    <div id="topmenuvals">
    <div id="delunit">x</div>
    <div id="progressvalue"></div>
    <progress id="progressone" style="display:none"></progress>
    <progress id="progressmana" style="display:none" max="100"></progress>
    ${ya&&'<div id="kingdom"></div>'||""}
    <div id="unitname" contenteditable="true"></div>
    </div>
    <div id="menbak2">
    <div id="navigation">
    <button id="aleft"></button>
    <button id="stock"></button>
    <button id="aright"></button>
    </div>
    <div id="orders">
    </div>
    <button id="gameMenu">${L(47)}</button>
    </div>
    </div>`):(m("content").innerHTML=`<ul id="msgs1"></ul>
    <div id="playersinfo"></div>
    <div id="pop"></div>
    <div id="resources" style="display:block">
    <div id="goldr"></div>
    <div id="woodr"></div>
    <div id="foodr"></div>
    <div id="stoner"></div>
    <div id="popr"></div>
    <div id="resourcesbefore"></div>
    <div id="gold"></div>
    <div id="wood"></div>
    <div id="food"></div>
    <div id="stone"></div>

    <div id="temperature"></div>
    </div>
    <div id="diplomacyButton"></div>
    ${B.m&&'<div id="msgButton"></div>'||""}
    <div id="topinfo">
    <span id="tpCPU"></span>
    <span id="tpGPU"></span>
    <span id="tpTM"></span>
    </div>
    <div id="bottominfo"></div>

    <div id="minimap" style="position:absolute;top:31px;left:4px;z-index:1"></div>
    <div style="display:none" id="bigMap"></div>
    <button id="minimapb"></button>
    <button id="menuctrl"></button>
    <div id="menu" style="display:block">
    <div id="menubefore"></div>
    <div id="menuafter"></div>
    <button id="gameMenu">${L(47)}</button>

    <div id="daynighticon"></div>
    <div id="topmenuvals">
    <div id="icons20">
    <div id="attackmenu" style="display:none"></div>
    <div id="defencemenu" style="display:none"></div>
    <div id="levelmenu" style="display:none"></div>
    <div id="manamenu" style="display:none"></div>
    <div id="manamenu1" style="display:none"></div>
    </div>
    <div id="delunit">\ud83d\udec7</div>
    <div id="progressvalue"></div>
    <div id="kingdom"></div>
    <div id="unitname" contenteditable="true"></div>
    <progress id="progressone" style="display:none"></progress>
    <progress id="progressmana" style="display:none" max="100"></progress>
    </div>
    <div id="navigation">
    <button id="aleft"></button>
    <button id="stock"></button>
    <button id="aright"></button>
    </div>
    <div id="orders">
    </div>
    </div>`,m("content").className="dfth"),nd=m("msgs1"),oe(),pe=K("span",m("topinfo"),"display:none;font-size:8px;color:#00ffff"),!qe&&B.m&&(setInterval(()=>{1==re&&(se=performance.now(),F(28))},15E3),se=performance.now(),F(28)),hd={page:0,Ja:m("aleft"),Ma:m("aright"),Ab:m("stock")},window.actionMenu=hd,hd.Ja.onclick=function(){D[30](-1)},m("minimap"),id=m("gold"),jd=m("wood"),kd=m("food"),ld=m("stone"),m("resources"),md=m("daynighticon"),hd.Ma.onclick=function(){if("blocked"!=hd.Ma.className)D[30](1)},
hd.Mb=[],Zc=m("attackmenu"),$c=m("defencemenu"),ad=m("levelmenu"),bd=m("kingdom"),cd=m("progressone"),dd=m("unitname"),ed=m("progressvalue"),dd.oninput=()=>{te(dd.textContent)},m("delunit").onclick=function(){D[32](8,0)},m("menuctrl").onclick=function(){(Qd=!Qd)?(m("menuctrl").style.cssText="",m("menu").style.cssText="",m("resources").style.cssText=""):(m("menuctrl").style.left="0px",m("menuctrl").style.backgroundPosition="100px",P(m("menu")),370>window.innerHeight&&(m("resources").style.cssText=
"width:100%;left:0px"));D[167](Qd)},m("minimapb").onclick=function(){if(ue=!ue)Rd=Qd,Qd=!0,m("menuctrl").onclick(),m("minimapb").style.filter="drop-shadow(0px 0px 2px #fff)";else{Rd&&(Rd=0,m("menuctrl").onclick());N("bigMap");m("minimapb").style.cssText="";for(var a=document.getElementsByClassName("alertdmg"),b=0;b<a.length;b++)P(a[b])}},m("teamchat").onchange=function(){m("msginputGame").focus()},m("msgButton")&&(m("msgButton").onclick=ve),m("diplomacyButton").onclick=Nc,gd=m("bottominfo"),P(gd),
we(),m("stock").onclick=D[31],m("gameMenu").onclick=xe;m("minimap").addEventListener("mousedown",ye);m("bigMap").addEventListener("mousedown",ye);m("bigMap").addEventListener("touchstart",ye)}
function we(){if(!O){var a=4;if(qd){var b=window.innerHeight;240>b?a=1:295>b?a=2:344>b?a=3:700<b&&1020<window.innerWidth&&(a=window.innerHeight-m("menbak2").getBoundingClientRect().y-132,a=Math.floor((a+5-24)/53),24<a&&(a=24))}a*=2;if(!fd||fd.length!=a){b=m("orders");b.innerHTML&&(b.innerHTML="");fd=[];for(let c=0;c<a;c++){let d=J("button",b);d.ontouchstart=ze;d.ontouchend=Ae;d.onmousedown=Be;d.onmouseup=Ce;d.ua=c;d.onmouseenter=De;d.onmouseout=Ee;fd[c]=d}D[189](a,!B.A)}}}var Fe,Ge;
function ze(a){Ge=a.changedTouches[0].pageX;Fe=a.changedTouches[0].pageY}function Ae(a){var b=a.changedTouches[0].pageX,c=a.changedTouches[0].pageY,d=Math.sign(c-Fe);q(d,c,Fe);48<d*(c-Fe)?(D[32](16,1),D[15](this.ua,0<d?2:0),D[32](16,0)):(55<Math.sign(b-Ge)*(b-Ge)&&(D[32](16,1),D[32](18,1),D[15](this.ua,0),D[32](16,0),D[32](18,0)),q(a))}window.clearleftar=function(){hd.Ja.className=""};var He;
function ye(a){D[47]();var b=a.offsetX,c=a.offsetY;He=this.getBoundingClientRect();var d="touchstart"==a.type;if(0===a.button||d)document.addEventListener(d&&"touchend"||"mouseup",function k(){Ie=!1;document.removeEventListener("mouseup",k);document.removeEventListener("mousemove",Je)}),Ie=!0,Je(a),document.addEventListener(d&&"touchmove"||"mousemove",Je);else if(2===a.button){d=parseInt(a.target.style.width);var e=parseInt(a.target.style.height),g=D[47]();b=32*~~(g*b/d);c=32*~~(g*c/e);q(b,c);D[22](b,
c,2,0,!0,a.shiftKey)}}function Ke(a,b,c,d,e,g,h,k,p,r,t,u,v,x){v=g?Ke.Pb:m("guideTable").getElementsByTagName("tr")[v].getElementsByTagName("td")[u];var A="";g||(A+=`<span>${Kb[u]}</span>`);A+=`<div ${g&&"class='spchild'"||""}>
    <div class="prevIcon" style="background-position-y:${48*e}px"></div>
    <ul>
    <li class="guiTitle">${L(a)}</li>
    ${x&&`<li class="desc">${L(x)}</li>`||""}
    <li><span>${L(66)+":"}</span> ${k&&k+"<img src='nehhon/gold.gif'>"||""} ${p&&p+"<img src='nehhon/wood.gif'>"||""} ${r&&r+"<img src='nehhon/food.gif'>"||""}  ${t&&t+"<img src='nehhon/stone.gif'>"||""} </li>
    `;h&&1!=h||(A+=`
    <li><span>${L(4)}:</span> ${b}</li>`);h||(A+=`
    <li><span>${L(7)}:</span> ${c}</li>
    <li><span>${L(5)}:</span> ${d}</li>`);a=J("div",v,A+"</ul>\n    </div>\n    ");g||(Ke.Pb=a)}window.insertInfo=Ke;
async function Le(){if(!m("guide1")){let k=await (await fetch(`nehhon/hl${({es:1,it:1,pt:1,pl:1,bg:1})[l.Ia]&&l.Ia||"en"}.json`)).json(),p=k.BASICTR;var a=Pc("",2);a.id="guide1";let r=J("h2",a,"","color:var(--color1);font-size:18px;height:46px;margin-top:0px;text-align:left;text-shadow:0px 0px 10px"),t=J("div",a);t.id="hxtrbtn";var b=J("div",a);b.id="helpbtn";let u=J("div",a);u.id="helpcnt";let v="tech unit building item order howto whatis hotkey".split(" ");var c=function(y){y=k[y];let w=J("dl",
u);for(let C in y){let H=y[C];q(H);let I=H.icon.split(",");J("dt",w,`${H.brief}`,`cursor:inherit;background-image:url(nehhon/H${I[0]}.webp); background-position:0px ${-48*(I[1]-1)}px`);J("dd",w,`${H.detail}`,"display:block")}},d=function(y){u.innerHTML="";u.scrollTop=0;for(var w=y.parentNode.children,C=0;C<w.length;C++)w[C].style.border=w[C]==y?"1px solid":""},e=function(y,w){d(w);y=k[y];w=J("dl",u);for(let C in y){let H=y[C],I=H.icon.split(",");J("dt",w,`${H.brief}`,`cursor:inherit;background-image:url(nehhon/H${I[0]}.webp); background-position:0px ${-48*
(I[1]-1)}px`);J("dd",w,`${H.detail.split("~ ")[1]}`,"display:block")}},g=function(y){u.scrollTop=0;if("UNITS"==y){var w=J("button",t,p.table);w.onclick=function(){d(this);Me(u)};w.onclick();J("button",t,p.bonuses).onclick=function(){d(this);Ne(u)};J("button",t,p.bonuses_inv).onclick=function(){d(this);Ne(u,1)}}"BUILDINGS"==y&&(J("button",t,p.bonuses).onclick=function(){d(this);Ne(u,0,1)},J("button",t,p.bonuses_inv).onclick=function(){d(this);Ne(u,1,1)});var C="TECHNOLOGIES"==y;if(!C&&(w=J("button",
t,`${p.common}`),w.onclick=function(){e(y+" (Common)",this)},"UNITS"!=y))w.onclick();w=J("button",t,`${p.euro}`);w.onclick=function(){e(y+(C&&" (European)"||" (Euro)"),this)};J("button",t,`${p.arab}`).onclick=function(){e(y+" (Arabian)",this)};J("button",t,`${p.asia}`).onclick=function(){e(y+" (Asian)",this)};if(C)w.onclick()},h=function(y){y=k[y];let w=J("dl",u);for(let C in y){let H=y[C],I=J("dt",w,`\u2b9e ${H.brief}`,"padding-left:10px;height:auto"),V=J("dd",w,`${H.detail}`,"padding-left:10px;display:none;margin-top:4px;margin-left:21px;padding-bottom:6px");
I.onclick=()=>{"none"==V.style.display?V.show():P(V)}}};let x=[()=>g("TECHNOLOGIES"),()=>g("UNITS"),()=>g("BUILDINGS"),()=>c("ITEMS"),()=>c("COMMANDS"),()=>h("How to ..."),()=>h("What is ..."),function(){var y=k.HOTKEYS,w="<br>";for(let C in y)w+=`${C} \ud83e\udc26<span style="color:#fff1c6;margin-left:7px">${y[C]}</span><p>`;u.innerHTML=w}],A="";for(let y=0;y<v.length;y++)a=J("button",b,"",`background-position-y:${45*-y}px`),a.onclick=function(){let w=b.children;for(let C=0;C<w.length;C++)w[C]==
this?this.className="active":w[C].className="";A=p[v[y]];r.innerHTML=A;u.innerHTML="";t.innerHTML="";x[y]()},a.onmouseenter=function(){r.innerHTML=p[v[y]]},a.onmouseout=function(){r.innerHTML=A};b.children[1].onclick()}}window.showGuide=Le;
async function Oe(){let a=Pc("",2);a.id="changelog";M("p",a,536,"font-size:29px;margin-top:0px;border-bottom:1px solid");let b=(await (await fetch("nehhon/changes.txt")).text()).split("##");for(let e=1;e<b.length;e++){let g=b[e].split("\n");var c=g[0].substr(0,3),d=g[0].split(" ")[1];d&&=" - "+d;J("span",a,"v"+c/10+(d||""));c=J("ul",a);for(d=1;d<g.length-1;d++)J("li",c,g[d])}}var Pe,Qe,Re,Se,Te,Ue;window.propsextend=function(a,b,c,d,e,g,h,k){Pe=Zb(a,b);Qe=Zb(c,d);Re=e;Se=g;Te=h;Ue=k};
var Ve,We,wf=[{i:856,l:a=>{Xe=a;Ye!=Ze+Xe&&($e=af,Ye=Ze+Xe,bf=Date.now(),cf=sc)}},{i:857,l:a=>{Ze=-a;Ye!=Ze+Xe&&($e=af,Ye=Ze+Xe,bf=Date.now(),cf=sc)}},{i:859,l:a=>{df=a;ef!=df+ff&&($e=af,ef=df+ff,gf=Date.now(),hf=rc)}},{i:858,l:a=>{ff=-a;ef!=df+ff&&($e=af,ef=df+ff,gf=Date.now(),hf=rc)}},{i:862,l:a=>{(ue=a)||N("bigMap")}},{i:863,l:a=>{a&&jf(1)}},{i:854,l:function(a){if(a||!kf)if(We=a,D[32](220,a),lf){var b=of;pf[0]=a;qf.queue.writeBuffer(b,0,pf)}else z.uniform1i(z.getUniformLocation(R,"hideTrees"),
a)}},{i:446,l:a=>{a||O||(a=parseInt(f.stdcolors)?0:1,rf(a),f.stdcolors=a)}},{i:47,l:a=>{if(a)if(m("playingMenu")&&"none"!=m("playingMenu").parentNode.parentNode.style.display)sf.onclick();else xe()}},{i:65,l:ve},{i:848,l:a=>{D[32](8,a)}},{i:463,l:a=>{D[32](9,a);tf||(a?Nc():m("diplomacy")&&Cb(m("diplomacy")))}},{i:850,l:a=>{D[32](81,a)}},{i:853,l:a=>{D[32](32,a)}},{i:864,l:a=>{uf=a;D[32](17,a)}},{i:865,l:a=>{tf=a;D[32](16,a)}},{i:866,l:a=>{kf=a;D[32](18,a)}},{i:427,l:a=>{D[32](112,a)}},{i:462,l:a=>
{D[32](113,a)}},{i:512,l:a=>{D[32](114,a)}},{i:855,l:a=>{a&&(re=(re+1)%4,D[190](re),2==re?N("playersinfo"):3==re?(N("playersinfo"),N("topinfo")):(xd(m("playersinfo")),pd("topinfo")))}},{i:527,l:a=>{D[32](116,a)}},{i:851,l:a=>{D[32](117,a)}},{i:852,l:a=>{D[32](118,a)}},{i:528,l:a=>{D[32](119,a)}},{i:849,l:a=>{m("msgs1")&&!a&&("none"==m("msgs1").style.display?pd("msgs1"):(N("msgs1"),Ka("Chat hidden")))}},{i:513,l:a=>{D[32](121,a)}},{i:514,l:a=>{D[32](122,a)}},{i:515,l:a=>{D[32](123,a)}},{i:867,l:a=>
{D[32](124,a)}},{i:868,l:a=>{D[32](125,a)}},{i:872,l:a=>{O||!B.A||B.m||a||(vf?(G(vf),vf=0,D[99]()):(vf=J("div",document.body,"\u23f8","position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center; pointer-events:none;font-size:44px;text-shadow:0px 0px 20px #000"),D[98]()))}}],vf,xf=a=>" "==a?"SPACE":"ARROWUP"==a?"\u2191":"ARROWDOWN"==a?"\u2193":"ARROWRIGHT"==a?"\u2192":"ARROWLEFT"==a?"\u2190":a,zf=()=>{let a=Pc("",1);Ve||(f.bshrct||(f.bshrct='{\n"basic":[\n"ARROWUP",\n"ARROWDOWN",\n"ARROWLEFT",\n"ARROWRIGHT",\n"X",\n"0",\n"<",\n"Z",\n"ESCAPE",\n"ENTER",\n"DELETE",\n"TAB",\n"Q",\n" ",\n"CONTROL",\n"SHIFT",\n"ALT",\n"F1",\n"F2",\n"F3",\n"F4",\n"F5",\n"F6",\n"F7",\n"F8",\n"F9",\n"F10",\n"F11",\n"F12"\n],"0":["M"],"1":["A"],"2":["G"],"3":["R","P"],"4":["P"],"5":["E"],"6":["S"],"7":["N"],"10":["O"],"11":["D"],"12":["S"],"13":["G"],"14":["F"],"15":["A"],"16":["M"],"17":["P"],"18":["L"],"19":["K"],"60":["P"],"63":["S"],"64":["E"],"65":["D"],"66":["A"],"67":["L"],"68":["P"],"69":["P"],"70":["N"],"71":["R"],"74":["R","A"],"75":["I"],"76":["H"],"83":["G"],"84":["S"],"85":["C"],"91":["H"],"94":["B"],"96":["M"],"110":["P"],"111":["C"],"112":["F"],"113":["D","F"],"120":["I"],"121":["C"],"122":["C"],"123":["F"],"124":["A"],"125":["S"],"126":["P"],"127":["C"],"128":["J"],"129":["D"],"130":["T"],"132":["M"],"133":["H"],"134":["G"],"135":["G"],"136":["C"],"137":["C"],"138":["H"],"140":["E"],"141":["T"],"142":["P"],"143":["T"],"144":["H"],"145":["S","A"],"146":["C"],"147":["B"],"148":["W"],"149":["C"],"150":["F"],"151":["P"],"154":["H"],"155":["G"],"173":["R"],"174":["A"],"175":["S"],"176":["H"],"177":["M"],"178":["M"],"179":["P"],"180":["P"],"183":["O"],"184":["C"],"186":["R"],"188":["H"],"189":["B"],"190":["B"],"191":["B"],"192":["T"],"193":["S"],"194":["L"],"195":["L"],"196":["I"],"197":["C"],"198":["C"],"199":["C"],"201":["E"],"205":["U"],"207":["M"],"208":["M"],"209":["Y"],"210":["F"],"211":["K"],"212":["P"],"213":["P"],"214":["A"],"215":["A"],"216":["N"],"217":["H"],"218":["R"],"219":["O"],"220":["W"],"222":["D"],"223":["F"],"224":["C"],"225":["U"],"226":["W"],"227":["F"],"228":["G"],"229":["L"],"230":["B"],"231":["T"],"233":["I"],"236":["H"],"237":["H"],"238":["L"],"239":["S"],"240":["S"],"241":["F"],"242":["F"],"243":["R"],"244":["R"],"245":["K"],"246":["K"],"247":["P"],"248":["U"],"249":["U"],"250":["N"],"251":["N"],"254":["A"],"255":["O"],"256":["O"],"258":["M"],"265":["U"],"266":["J"],"270":["B"],"272":["C"],"273":["J"],"274":["V"],"275":["R"],"276":["D"],"277":["M"],"278":["P"],"279":["H"],"280":["S"],"292":["Y"],"300":["B"],"301":["B"]}'),
Ve=JSON.parse(f.bshrct));var b=J("div",a);b.className="btrow";M("button",b,832).onclick=()=>{yf(h=>{Ve=JSON.parse(h.target.result);Cb(a);zf()})};M("button",b,8).onclick=()=>{var h=new Blob([JSON.stringify(Ve)],{type:"text"});Af(h,"control.tzcnt")};M("button",b,542).onclick=()=>{Ve=JSON.parse('{\n"basic":[\n"ARROWUP",\n"ARROWDOWN",\n"ARROWLEFT",\n"ARROWRIGHT",\n"X",\n"0",\n"<",\n"Z",\n"ESCAPE",\n"ENTER",\n"DELETE",\n"TAB",\n"Q",\n" ",\n"CONTROL",\n"SHIFT",\n"ALT",\n"F1",\n"F2",\n"F3",\n"F4",\n"F5",\n"F6",\n"F7",\n"F8",\n"F9",\n"F10",\n"F11",\n"F12"\n],"0":["M"],"1":["A"],"2":["G"],"3":["R","P"],"4":["P"],"5":["E"],"6":["S"],"7":["N"],"10":["O"],"11":["D"],"12":["S"],"13":["G"],"14":["F"],"15":["A"],"16":["M"],"17":["P"],"18":["L"],"19":["K"],"60":["P"],"63":["S"],"64":["E"],"65":["D"],"66":["A"],"67":["L"],"68":["P"],"69":["P"],"70":["N"],"71":["R"],"74":["R","A"],"75":["I"],"76":["H"],"83":["G"],"84":["S"],"85":["C"],"91":["H"],"94":["B"],"96":["M"],"110":["P"],"111":["C"],"112":["F"],"113":["D","F"],"120":["I"],"121":["C"],"122":["C"],"123":["F"],"124":["A"],"125":["S"],"126":["P"],"127":["C"],"128":["J"],"129":["D"],"130":["T"],"132":["M"],"133":["H"],"134":["G"],"135":["G"],"136":["C"],"137":["C"],"138":["H"],"140":["E"],"141":["T"],"142":["P"],"143":["T"],"144":["H"],"145":["S","A"],"146":["C"],"147":["B"],"148":["W"],"149":["C"],"150":["F"],"151":["P"],"154":["H"],"155":["G"],"173":["R"],"174":["A"],"175":["S"],"176":["H"],"177":["M"],"178":["M"],"179":["P"],"180":["P"],"183":["O"],"184":["C"],"186":["R"],"188":["H"],"189":["B"],"190":["B"],"191":["B"],"192":["T"],"193":["S"],"194":["L"],"195":["L"],"196":["I"],"197":["C"],"198":["C"],"199":["C"],"201":["E"],"205":["U"],"207":["M"],"208":["M"],"209":["Y"],"210":["F"],"211":["K"],"212":["P"],"213":["P"],"214":["A"],"215":["A"],"216":["N"],"217":["H"],"218":["R"],"219":["O"],"220":["W"],"222":["D"],"223":["F"],"224":["C"],"225":["U"],"226":["W"],"227":["F"],"228":["G"],"229":["L"],"230":["B"],"231":["T"],"233":["I"],"236":["H"],"237":["H"],"238":["L"],"239":["S"],"240":["S"],"241":["F"],"242":["F"],"243":["R"],"244":["R"],"245":["K"],"246":["K"],"247":["P"],"248":["U"],"249":["U"],"250":["N"],"251":["N"],"254":["A"],"255":["O"],"256":["O"],"258":["M"],"265":["U"],"266":["J"],"270":["B"],"272":["C"],"273":["J"],"274":["V"],"275":["R"],"276":["D"],"277":["M"],"278":["P"],"279":["H"],"280":["S"],"292":["Y"],"300":["B"],"301":["B"]}');
Cb(a);zf()};a.children[0].addEventListener("click",()=>{f.bshrct=JSON.stringify(Ve)});var c=J("div",a);c.id="keys0";b=J("div",a);b.id="keys";let d=Ve.basic;var e=0;for(let h of wf){h.id=e++;J("div",c,L(h.i).toLowerCase());let k=J("span",c,xf(d[h.id]));h.J=k;k.onclick=()=>{let p=J("div",document.body,L(846),"position:fixed;background:#000000e6;width:100%;height:100%;font-size:17px;display:flex;justify-content:center;align-items:center"),r=t=>{if(0>"123456789".split("").indexOf(t.key)){t=t.key.toUpperCase();
for(let u of wf)d[u.id]==t&&(d[u.id]="",u.J.textContent="");d[h.id]=t;k.textContent=xf(t)}G(p);document.removeEventListener("keyup",r)};document.addEventListener("keyup",r)}}for(let h=0,k=D[261]();h<k;h++){D[260](h);var g=Bf.name;if(Bf.Ha||!g||109==g||844==g||845==g)continue;c=document.createElement("div");e=J("div",c);Cf(e);let p=Df[Bf.type]||"";p&&=L(p)+" -> ";g=p+L(g);J("div",e,g);let r=J("span",c),t=Ve[h];if(t)for(let v of t){let x=J("div",r);J("span",x,v);J("div",x,"\u00d7").onclick=()=>{t.splice(t.indexOf(v),
1);G(x)}}let u=J("div",r,"+","background:#00ff0021;font-size:21px;color:#00df00;cursor:url(nehhon/hand.gif),default");u.onclick=()=>{let v=J("div",document.body,L(846),"position:fixed;background:#000000e6;width:100%;height:100%;font-size:17px;display:flex;justify-content:center;align-items:center"),x=A=>{q(A);let y=A.key.toUpperCase();if((!t||0>t.indexOf(y))&&0>"Tab Shift Control Alt ContextMenu 1 2 3 4 5 6 7 8 9 0 Meta".split(" ").indexOf(A.key)){let w=document.createElement("div");r.insertBefore(w,
u);J("span",w,A.key);J("div",w,"\u00d7").onclick=()=>{t.splice(t.indexOf(A.key),1);G(w)};t||(t=[],Ve[h]=t);t.put(y)}G(v);document.removeEventListener("keyup",x)};document.addEventListener("keyup",x)};Ef(c,b,g)}};
window.writeProps=function(a,b,c,d,e,g,h,k,p,r,t,u,v,x,A,y){let w=gd;if(k){let S=J("span",w,L(67)+": ");S.className="red";var C=ac(D[5](),k);for(let Aa=0;Aa<k;Aa+=2){M("span",S,C[Aa]);let lb=J("span",S);lb.className="icd1";Ff(lb,48*C[Aa+1])}}2!=r||t||M("span",w,834,"background:#ff000080;padding:4px");(k=4!=u&&Df[Se]||"")&&(k="<span style='color:#b5953d'>"+L(k)+" -></span> ");g&&J("span",w,k+L(g),"color:var(--color1)");Te&&(g=K("div",w,"margin:6px 0px"),g.className="dataIcon",Ff(g,-48*Te));if(6>u){g=
K("div",w,"width:100%");if(4>u){k=K("div",g,"border:2px solid #141414;padding:6px;background:#00000033");if(0==u)J("span",k,Gf(0,1)[y]+" -> "),J("span",k,2147483647==v?L(40):"+"+v,"color:#0f0");else if(1==u||2==u){M("div",k,765);y=2==u?"%":"";v=[{h:1,id:v},{h:3,id:x},{h:-1,id:A},{h:6,id:p}];for(var H of v)H.id&&(v=K("div",k,"display:flex;gap:3px;align-items:center;margin-top:7px"),K("div",v,`background:url(nehhon/icons2.webp) 0px ${-20*H.h}px;width:20px;height:20px`),J("span",v,"+"+H.id+y,"color:#0f0"))}else 3==
u&&(J("span",k,L(767)+" -> "),J("span",k,100-v+"%","color:#0f0"));if(Qe.length){H=K("div",k);H.className="nxtsh";for(var I of Qe)D[196](I),Ue==T.race?(v=document.createElement("div"),H.prepend(v)):v=J("div",H),v.className="dataIcon",Ff(v,T.D/2)}}if(Pe.length){J("div",g,L(770)+":","margin-top:15px;color:#0f0");I=K("div",g);I.className="nxtsh";for(let S of Pe)D[260](S),H=K("span",I),Cf(H)}if(Pe.length||5!=u)h=0}h&&M("span",w,h,"font-size:11px;max-width:232px");if(a||b||c||d||p)h="",a&&(h+=a+"<img src='nehhon/gold.gif' /> "),
b&&(h+=b+"<img src='nehhon/wood.gif' /> "),c&&(h+=c+"<img src='nehhon/food.gif' /> "),d&&(h+=d+"<img src='nehhon/stone.gif' /> "),p&&(h+=p+"<img src='nehhon/mana.webp' /> "),a=J("span",w,h,"display:flex;align-items:center;gap:4px;border-top:2px solid rgba(255, 215, 93, 0.18);padding-top:5px;width:100%"),Re&&(a=K("div",a,"display:flex;gap:3px;align-items:center"),K("div",a,"background:url(nehhon/icons2.webp) 0px -150px;width:15px;height:15px;background-size:100%"),J("span",a,Re+"s"));let V;if(a=Ve[e]){D[272]();
a:for(let S of a)for(a=0;3>a;a++)for(b=0;b<Hf.length;b++)if(c=Hf[b],(d=Ve[c])&&d[a]==S)if(c==e){V=S;break a}else continue a}V&&(J("span",M("span",w,841,"color:#858585;margin-top:8px;font-size:9px;align-self:end"),V).className="shotcut")};var If;function De(){if(!ya){var a=this.ua;D[40](a);gd.innerHTML&&(gd.style.cssText="");If=a}}function Ee(){D[151](this.ua);P(gd);If=void 0;gd.innerHTML=""}function Ce(){}function Be(a){D[15](this.ua,a.button)}let Jf;
window.qmenu=function(a,b,c,d,e,g,h,k,p,r,t,u){if(!O)if(g=m("dataMenu"),void 0==a)g&&(Cb(g),clearInterval(Jf),Jf=0);else{let v;g?(v=g,v.innerHTML=""):(v=Pc("",0,"font-size:15px"),v.id="dataMenu",Jf&&clearInterval(Jf),Jf=setInterval(()=>D[238](1),1E3));M("div",v,574,"margin-bottom:16px;color:var(--color1)");g=["gold","wood","food","stone","pop"];a=[a,b,c+e,d,h];b=K("div",v,"    padding: 16px;\n        background: #ffffff08;\n        box-shadow: 0px 0px 20px #000;\n        border: 1px solid rgb(243 205 90 / 8%);");
for(c=0;5>c;c++)J("div",b,a[c],"min-width:75px;margin-right:8px;display:inline-block;padding-left:28px;height:20px;"+`background:url(${"nehhon/"+g[c]}.gif) no-repeat;`);M("div",v,575,"margin-top:32px;margin-bottom:16px;color:var(--color1)");b=K("div",v,"    padding: 16px;\n        background: #ffffff08;\n        box-shadow: 0px 0px 20px #000;\n        border: 1px solid rgb(243 205 90 / 8%);");a=[k,p,r,t];for(k=0;4>k;k++)J("div",b,Kf(a[k]/40,2)+"/s","min-width:75px;margin-right:8px;display:inline-block;padding-left:28px;height:20px;"+
`background: url(${"nehhon/"+g[k]}.gif) no-repeat;`);M("div",v,650,"margin-top:36px;margin-bottom:16px;color:var(--color1)");k=$b();p=K("div",v,"display: grid;\n    grid-template-columns: repeat(6,auto);\n    justify-items: center;\n    align-items: center;\n        padding: 16px;\n        background: #ffffff08;\n        box-shadow: 0px 0px 20px #000;\n        border: 1px solid rgb(243 205 90 / 8%);");J("div",p);J("div",p);for(r=0;4>r;r++)J("img",p).src=`${"nehhon/"+g[r]}.gif`;for(g=0;g<u;g+=7)for(r=
g%14?"color:#ffe9a5":"",K("div",p,`width:4px;background:${Sc(k[g])};border-radius:1px;height:16px;`),J("div",p,Rc(k[g+2],k[g+1]),"margin-left:3px;min-width:152px;justify-self:left;"+r),t=0;4>t;t++)J("div",p,Lf(k[g+3+t]),"text-align:center;min-width:68px;padding:6px 4px;"+r)}};function M(a,b,c,d){return J(a,b,L(c),d)}function K(a,b,c,d){return J(a,b,"",c,d)}var Ie;function Mf(){history.pushState("",document.title,window.location.pathname)}
function Nf(a){B.wc||B.A||(xd(fc),Of(),this.parentNode&&(this.parentNode.style.display="none"),B.m=0,5!=a&&(location.hash="",setTimeout(Mf,200)))}var Pf=[.3,.25,.3,1,.3,.25,.3,1,.3,.25,.3,1,.3,.25,.3,1,.3,.25,.3,1,.3,.27,.3,1,.5,.5,.5,1,.62,.62,.62,1,.74,.74,.74,1,.88,.88,.88,1,.94,.94,.94,1,1,1,1,1,1.06,1.06,1.06,1,1.12,1.12,1.12,1,1.08,1.08,1.08,1,1.04,1.04,1.04,1,1,1,1,1,.95,.95,.95,1,.88,.8,.7,1,.84,.72,.6,1,.7,.62,.5,1,.6,.55,.45,1,.5,.44,.42,1,.4,.37,.35,1];
window.waitingList=function(){if(m("waitList")){var a=$a(ab),b=D[28]();m("waitList").innerHTML="";for(var c=`<h1 style="font-size: 22px;margin-bottom: 32px;">${L(68)}</h1>
    <table style="font-size:16px;margin:auto;padding-top:12px"><tbody>`,d=1;d<b;d++)if(55==a[3*d]){var e=D[29](d);e=Gd(Hd(e,20));c+=`<tr><td>${e}</td><td>${a[3*d+1]}%</td></tr>`}m("waitList").innerHTML+=c+"</tbody></table>";m("waitList").style.textAlign="center";J("button",m("waitList"),L(91),"font-size:18px;margin-top:50px;").onclick=Xd}};window.waitlistsetup=function(){Pc("").id="waitList"};
function Ic(){if(O||1!=f.nightcycle)c=new Float32Array([1,1,1,1]);else{var a=(.025*B.Y/B.Ra*24+B.Sa)%24,b=~~a;a-=b;md&&(md.style.backgroundPosition="0 -"+36*b+"px");var c=new Float32Array([Pf[4*b],Pf[4*b+1],Pf[4*b+2],Pf[4*b+3]]);b=(b+1)%24;c[0]+=(-c[0]+Pf[4*b])*a;c[1]+=(-c[1]+Pf[4*b+1])*a;c[2]+=(-c[2]+Pf[4*b+2])*a;c[3]+=(-c[3]+Pf[4*b+3])*a}b=c;lf||(z.useProgram(U),z.uniform4fv(Qf,b),z.useProgram(R),z.uniform4fv(Rf,b))}var rc=0,sc=0,ef=0,Ye=0,$e,bf,cf,gf,hf;
function Sf(a,b,c){var d=tc;if(1==f.unlimitedZoom||O)rc=-a,sc=-b;else{var e=window.innerWidth,g=window.innerHeight,h=D[47](),k=ya?0:d*l.R/32;a/=32;b/=32;var p=d*e/32;d=d*g/32;e=e/32*W;g=g/32*W;var r=a+.5*(e-p),t=b+.5*(g-d);e<h&&g<h&&(r<-k?a=.5*-(e-p)-k:r+p>h&&(a=h-p-(e-p)/2),0>t?b=.5*-(g-d):t+d>h&&(b=h-d-(g-d)/2));rc=32*-a;sc=32*-b}if(!c)D[25](0,0,0)}
function Je(a){if("touchmove"==a.type||"touchstart"==a.type)if(a.target==m("bigMap"))a=a.targetTouches[0];else return;var b=a.target==m("bigMap")?23:0,c=D[47](),d=a.pageX-He.x-b;a=a.pageY-He.y-b;var e=He.width-2*b;b=He.height-2*b;var g=Tf.height*b/(32*c);d-=Tf.width*e/(32*c)*.5;d=Math.round(.5+d*c/e);a=Math.round(.5+(a-.5*g)*c/b);Sf(32*d,32*a);0==Ie&&document.removeEventListener("mousemove",Je)}var uf=0,tf=0,kf,Uf={};function ve(a){if(a&&!O&&!uf){let c=!1;if(!m("enterwindow")){var b=Pc(`
            <h2 id="sendMessageH2">${L(65)}</h2>
            <input id="msginputGame" />
           
            `,2,"",1);b.parentNode.parentNode.className+=" nobackdrop";b.id="enterwindow";c=!0;let d=J("button",b,"GIF");d.className="gif";d.onclick=()=>{P(m("enterwindow").parentNode.parentNode);Vf()};J("p",b,`${L(405)} <label class="container" style="margin-left:6px;display:inline"><input id="teamchat" type="checkbox"><span class="checkmark"></span></label>`,"text-align:right;color:#c79d45")}b=m("enterwindow").parentNode.parentNode;""!=b.style.cssText||c?(ya&&m("msgButton")&&(m("msgButton").style.filter=
"drop-shadow(0px 0px 2px #fff)"),b.style.cssText="",m("msginputGame").focus()):(Wf(),P(b),ya&&m("msgButton")&&(m("msgButton").style.cssText=""))}if(uf)D[32](13,a)}var Ze=0,Xe=0,ff=0,df=0,re=0,af=0,sf;document.oncontextmenu=function(a){return a&&"INPUT"==a.target.nodeName?!0:!1};
function Xf(){if(!O){m("attackmenu")&&(N("magicworkshopmenu"),N("tradingmenu"),N("attackmenu"),N("defencemenu"),N("levelmenu"),N("progressone"),N("manamenu"),N("manamenu1"),N("progressmana"),N("plavatar"),dd.innerHTML="",Zc.innerHTML="",$c.innerHTML="",m("manamenu").innerHTML="",ad.innerHTML="",bd.innerHTML="",ed.innerHTML="",cd.value="",ed.maxLength="");ya&&(m("delunit").style.display="none");for(let a=0;a<fd.length;fd[a++].innerHTML="");Yf()}}window.menuDefect=Xf;var Zf;
function $f(a,b){ag&&(J("li",ag,a,"color:#"+b),ag.scrollTop=ag.scrollHeight)}window.lddsts=function(){let a=J("button",document.body,"STATS","\n    position: fixed;\n    background: #000;\n    padding: 8px;\n    font-size: 20px;\n    width: 209px;\n    text-align: left;\n    border-left: 3px solid #00ff00 !important;\n    top: 66px;\n    right: 0px;\n    box-shadow: 0px 0px 20px #9c0000;"),b=bg();a.onclick=function(){b.parentNode.parentNode.style.display=""}};
function Kf(a,b,c){a=Math.round(a*10**b)/10**b;if(c)return a;a=a.toString().split(".");return a[0]+(a[1]&&"<strong>.</strong>"+a[1]||"")}function Lf(a,b){return 1E6<=a?Kf(a/1E6,1,b)+"M":1E5<=a?Kf(a/1E3,0,b)+"k":1E3<=a?Kf(a/1E3,1,b)+"k":a}function cg(a,b){let c;a?c=a&&dg[a]?dg[a].avatar||113:113:b&&(c=b==D[112]()?f.avatar||113:D[185](b));c||=113;return`nehhon/Q${c}.webp`}var eg;function fg(){var a=m("stbutts").children;for(let b=0;b<a.length;b++)a[b].className=""}var gg;
function hg(a){fg();G(m("auxtab"));m("stats").style.display="table";a.className="a"}var ig;function Ff(a,b){a.style.backgroundPositionY=b+"px"}
function Ne(a,b,c){a=J("div",a);let d=D[90]();a.id="bonustable";let e=$b();for(let k=0;k<d;k++){let p=D[199](k,b,!c);if(!p)continue;D[196](k);var g=J("div",a);g.dataset.title=L(T.name);jg(g,T.D);g=J("div",a);let r={};for(let t=0;t<p;t+=2){let u=e[t];var h=e[t+1];r[h]||(r[h]=J("div",J("div",g,"<div>x"+h/100+"</div>",!b&&100>h||b&&100<h?"color:red":"")));h=J("div",r[h]);D[196](u);h.dataset.title=L(T.name);jg(h,T.D)}}}
function Me(a){let b=D[198](),c=$b(),d=J("table",a);d.id="unittable";var e=[{name:""},{y:18},{y:1},{y:3},{y:6},{y:13},{y:12},{y:17},{y:10},{name:L(559)},{name:L(560)},{name:L(561)},{name:L(562)}];a=e.length;var g=J("tr",J("thead",d));for(let k=0;k<e.length;k++){let p=J("td",g,e[k].name);e[k].y&&Ff(J("div",p),-20*e[k].y);p.onclick=()=>{var r=k,t=p,u,v=0;var x=!0;var A=1;for(y of t.parentNode.children)y.dataset.order&&(y.dataset.order="");for(q(A);x;){x=!1;var y=d.rows;for(u=1;u<y.length-1;u++){var w=
!1;var C=y[u].getElementsByTagName("TD")[r];var H=y[u+1].getElementsByTagName("TD")[r];if(0==A){if(C.U>H.U){w=!0;break}}else if(1==A&&C.U<H.U){w=!0;break}}w?(y[u].parentNode.insertBefore(y[u+1],y[u]),x=!0,v++):0==v&&1==A&&(A=0,x=!0)}t.dataset.order=A?"\u25b2":"\u25bc"}}e=J("tbody",d);for(g=0;g<b;g+=a){let k=J("tr",e);for(let p=0;p<a;p++){let r=J("td",k);var h=c[g+p];0==p?(D[196](h),h=L(T.name),r.dataset.title=h,jg(r,T.D),r.U=h.charCodeAt(1)+256*h.charCodeAt(0)):(10==p&&(h/=10),r.U=h,r.innerHTML=h)}}}
function kg(a,b,c){b=document.createElementNS("http://www.w3.org/2000/svg",b);for(let d in c)b.setAttribute(d,c[d]);a.appendChild(b);return b}
function lg(a,b,c,d,e){var g=mg;let h=b.length/c;var k=0;let p=1024/(h-1);var r=6*p,t=Math.ceil(70/r);for(var u=0;u<b.length;u++){var v=b[u];v>k&&(k=v)}u=1E3<k?100:10;u=(k=Math.ceil(k/u)*u)?633/k:0;v=document.createElementNS("http://www.w3.org/2000/svg","svg");v.style.width="1204px";v.style.height="693px";v.setAttribute("viewBox","-90 -30 1204 693");v.setAttribute("width","100%");v.setAttribute("height","100%");a.appendChild(v);J("style",v,"\n.p>line{\n    stroke-width:2;\n    opacity:0.5;\n    pointer-events: none;\n}\n.p>line:hover{\n    opacity:0.5\n}\ncircle{\n    stroke-width:12;\n    stroke:#ffffff00;\n    r:1.5\n}\n.p>text{\n    display:none;\n    text-shadow:0px 0px 3px #000;\n    fill:#52ffba\n}\ntext{\n    stroke:none;\n    font-size:16px;\n}\n\ng:not(.op0) .p:hover > text{\n    display:block;\n}\n.op0{\n    opacity:.15;\n\n}\n.stk>.p>line{\n    stroke-width:3;\n    opacity:1\n}\n.stk>.p>circle{\n    r:1;\n    opacity:1\n}\n");
kg(v,"line",{stroke:"#fff",x1:0,x2:0,y1:0,y2:633,"stroke-width":1,opacity:.75});kg(v,"line",{stroke:"#fff",x1:0,x2:1024,y1:633,y2:633,"stroke-width":1,opacity:.75});for(a=0;5>=a;a++){var x=633-126.6*a;a&&kg(v,"line",{stroke:"#fff",x1:0,x2:1024,y1:x,y2:x,"stroke-width":1,opacity:.25});kg(v,"text",{x:-8,y:x,fill:"#fff","text-anchor":"end","alignment-baseline":"middle"}).innerHTML=Lf(Math.round(a/5*k),1)}for(let w=1,C=Math.ceil(10*h/60);w<C;w++)k=w*r,a=0==w%t,kg(v,"line",{stroke:"#fff",x1:k,x2:k,y1:0,
y2:633,"stroke-width":1,opacity:a?.25:.1}),a&&(kg(v,"text",{x:k,y:655,fill:"#fff","text-anchor":"middle"}).innerHTML=w+":00");for(let w=0;w<c;w++)for(r=kg(v,"g"),t=g[w],r.onmouseover=()=>{mg[w].style.color="#0f0"},r.onmouseout=()=>{mg[w].style.color=""},t.Ya=r,t.la&&r.setAttribute("class","op0"),t=0;t<h&&t<e;t++){k=w*h+t;a=633-b[k]*u;x=t*p;let C=kg(r,"g");C.setAttribute("class","p");var A=d[w*ig+ig-1],y=A>>16&255;let H=A>>8&255;A&=255;y||=1;H||=1;A||=1;let I=(y+H+A)/3;90>I&&(y*=90/I,H*=90/I,A*=90/
I);255<y&&(y=255);255<H&&(H=255);255<A&&(A=255);y=`rgb(${y},${H},${A})`;kg(C,"text",{x,y:a-15,"text-anchor":"middle"}).innerHTML=Math.round(b[k]);kg(C,"circle",{cx:x,cy:a,fill:y,opacity:t%6?0:1});t<h-1&&t<e-1&&kg(C,"line",{x1:x,x2:x+p,y1:a,y2:633-b[k+1]*u,stroke:y})}}
function bg(){var a=ig=55+(ng?2:0),b=D[28]();eg=new Yb(D[184](a),b*a);var c=$a(eg),d=zb("",1,"",1);d.id="stsp";d.parentNode.style.cssText="vertical-align:top;padding-top:56px";P(d.parentNode.parentNode);var e=c[a-3],g=c[a-5],h=J("div",d);J("img",h,"","display:inline-block;vertical-align:middle;margin-right:16px;box-shadow:0px 0px 78px red;border:1px solid #ff000070").src=cg(e,g);g=J("div",h,"","display:inline-block;vertical-align:middle;");J("span",g,"MVP","display:block;font-size:20px;color:#ffffffb3;");
J("span",g,Rc(e,c[a-2]),"font-size:30px;text-shadow:0px 0px 20px red");e=J("div",d);e.id="stbutts";J("button",e,L(466)).onclick=function(){og(this,8,1)};J("button",e,L(467)).onclick=function(){og(this,8,0,1)};J("button",e,L(465)).onclick=function(){og(this,9,0,1)};J("br",e);g=J("button",e,L(468));g.className="a";g.onclick=function(){hg(this);m("stats").className=""};J("button",e,L(470)).onclick=function(){m("stats").style.minWidth=(gg||m("stats").getBoundingClientRect().width)+"px";hg(this);m("stats").className=
"a"};J("button",e,L(522)).onclick=function(){pg(this)};J("button",e,L(469)).onclick=function(){og(this,7,0,0,1,!0)};J("button",e,L(521)).onclick=function(){og(this,7,0,1,0,!0)};J("button",e,L(452)).onclick=function(){og(this,6,1,1)};J("button",e,L(453)).onclick=function(){og(this,10,1,0)};J("button",e,L(464)).onclick=function(){og(this,9,1)};e=J("table",d);e.id="stats";var k=J("thead",e);g=J("tbody",e);var p=[{name:478},{name:21},{name:454},{name:455,Fa:1},{name:464},{name:452,sub:[{name:58},{name:59}]},
{name:453,Fa:1,sub:[{name:58},{name:59}]},{h:"gold.gif",sub:[{h:"gold.gif"},{h:"trade.gif"}]},{h:"wood.gif",sub:[{h:"wood.gif"},{h:"trade.gif"}]},{h:"food.gif",sub:[{h:"food.gif"},{h:"milk.gif"},{h:"food1.gif"},{h:"fish.gif"},{h:"trade.gif"}]},{h:"stone.gif",sub:[{h:"stone.gif"},{h:"trade.gif"}]},{h:"allicons.png",y:96,aa:48,title:477},{h:"icons2.webp",y:-5,aa:20,title:471},{h:"icons2.webp",y:-6,aa:20,title:476},{h:"icons2.webp",y:4,aa:20,title:479},{name:474},{name:475,Fa:1},{name:472},{h:"sgold.webp",
title:473},{h:"swood.webp",title:473},{h:"sfood.webp",title:473},{h:"sstone.webp",title:473},{h:"allicons.png",y:95,aa:48,title:232}];ng&&(p.unshift({name:732}),p.unshift({name:530}));h={};e={};var r=J("tr",k);k=J("tr",k);J("th",r,"","background:none;border:none;min-width:0px;").rowSpan=2;J("th",r,"","background:none;border:none").rowSpan=2;J("th",r,"","background:none").rowSpan=2;for(var t=0;t<p.length;t++){var u=p[t],v=u.name&&L(u.name).split(" ").join("\n")||u.y&&`<span style="background:url(nehhon/${u.h}) 0px ${u.y*
u.aa}px;width:${u.w||u.aa}px;height:${u.aa}px"></span>`||`<img src="${"nehhon/"+u.h}">`;u.Fa&&(e[r.children.length]=1);v=J("th",r,v,t+1==p.length?"width:100%":"");2>t&&ng&&(J("div",v,"?","position:absolute;right:0px;left:0px;font-size:9px").dataset.title=t?L(734):L(733));u.title&&(v.dataset.title=L(u.title));if(u.sub){var x=J("td",k,"<- ->");x.onclick=qg;x.bc=r.children.length-1;x.kb=u.sub.length+1;x.$=1;x.nc=v;for(v=0;v<u.sub.length;v++)x=u.sub[v],h[r.children.length+-3]=1,u.Fa&&(e[r.children.length]=
1),J("th",r,x.name&&L(x.name)||`<img src="${"nehhon/"+x.h}">`,"display:none")}else v.rowSpan=2}p=1+(ng?2:0);for(k=0;k<b-1;k++)for(t=J("tr",g),J("td",t,`<p>${k+1}</p>`),J("td",t,`<div style="background:${Sc(c[k*a+a-1])}"></div>`+Rc(c[k*a+a-3],c[k*a+a-2])),J("td",t,`<aside style="background-position-y:-${20*c[k*a+a-4]}px"></aside>`).className="stsrace",u=0;u<r.children.length+-3;u++)v=Lf(c[u+k*a]),u!=p||v||(v="\ud83d\udec7"),x=J("td",t,v,h[u]&&"display:none"||""),u==p&&(x.style.color=D[256](c[u+k*a])?
"#0f0":"#f00"),ng&&!u&&(x.style.color="#0f0"),x.xb=c[u+k*a],c[u+k*a]!=v&&u!=p&&(x.dataset.title=x.xb);a=m("stats").children[0].children[0].children.length;--b;c=m("stats").children[1].getElementsByTagName("td");for(g=3+(ng?1:0);g<a;g++){if(ng&&6==g||!ng&&4==g)continue;h=0;let A,y;r=Infinity;for(p=0;p<b;p++)k=c[p*a+g],t=k.xb,t>h&&(h=t,A=k),t<r&&(r=t,y=k);p=e[g];h&&(A.style.background=p?"#ff000040":"#00ff0040");(r||h)&&A!=y&&(y.style.background=p?"#00ff0040":"#ff000040")}return d}var mg;
function pg(a){fg();G(m("auxtab"));var b=J("div",m("stats").parentNode,"","width:1250px");b.id="auxtab";N("stats");a.className="a";let c=$a(eg),d=D[28]()-1;var e=[L(478),L(464),L(454),L(455),"Gold gathered","Wood gathered","Food gathered","Stone gathered","Population","Peasants",L(477),L(16),L(17),L(18),L(19)];a=J("div",b,"","white-space:break-spaces;margin-top:30px;text-align:left");let g=J("select",b,"","margin:auto;margin-top:15px;display:block;text-transform:uppercase");var h=J("span",b,"","float:right;margin-top:-25px;");
let k=c[0*ig+ig-13]/15,p=Math.floor(k/6),r=rg(h,k);r.oninput=function(){let v=parseInt(this.value);10*v/60>=p&&(v=k-1);this.H.innerHTML=Ec(1E4*v)};h=60*p/10;r.max=h;r.min=6;r.step=6;r.value=h;r.oninput();h=0;for(var t of e)J("option",g,t).value=h,h++;for(t=0;t<d;t++)e=J("span",a,Rc(c[t*ig+ig-3],c[t*ig+ig-2]),"cursor:url(nehhon/hand.gif),default;display:inline-block;background:#ffffff14;padding:2px 4px 2px 6px;margin-right:7px;margin-bottom:7px;border-left:4px solid "+Sc(c[t*ig+ig-1])),e.onclick=sg,
e.onmouseenter=tg,e.onmouseout=ug;let u=J("div",b,"","text-align:center");mg=a.children;g.onchange=function(){let v=parseInt(this.value),x=parseInt(r.value)+1;r.value==r.max&&(x=k);let A=new Uint32Array(x*d);for(let y=0;y<d;y++){let w=$a(new Yb(c[y*ig+ig-11],15*x));for(let C=0;C<x;C++)A[C+y*x]=w[15*C+v]}u.innerHTML="";lg(u,A,d,c,k)};g.onchange();r.addEventListener("change",()=>g.onchange());for(b=0;b<d;b++)if(3<c[b*ig+ig-12]&&c[b*ig+ig-5]!=D[112]())mg[b].onclick()}
function tg(){this.Ya.setAttribute("class","stk")}function ug(){this.Ya.setAttribute("class",this.la?"op0":"")}function sg(a){this.la=!this.la;this.style.opacity=this.la?"0.3":"";this.Ya.setAttribute("class",this.la?"op0":"");if(a)this.onmouseenter()}
function og(a,b,c,d,e,g){let h=8!=b&&!g&&6!=b&&10!=b,k=D[90]();gg||=1200;var p=$a(eg);fg();G(m("auxtab"));var r=J("table",m("stats").parentNode,"","width:"+gg+"px"),t=J("tbody",r);t.className="tbl2";r.id="auxtab";r=m("stats").children[1].getElementsByTagName("tr");for(var u=0;u<r.length;u++){var v=J("tr",t);J("img",J("td",v)).src=cg(p[u*ig+ig-3],p[u*ig+ig-5]);v.appendChild(r[u].children[1].cloneNode(1))}p=t.children;a.className="a";N("stats");a=$a(eg);for(t=0;t<p.length;t++){r=$a(new Yb(a[t*ig+ig-
b],k));u=J("td",p[t]);v=0;var x=void 0;let w={};do{var A=-1;if(g)for(x=0;x<k;x++)r[x]&&(r[x]<r[A]||0>A)&&!w[x]&&(A=x);else for(x=0;x<k;x++)(r[x]>r[A]||0>A)&&!w[x]&&(A=x);x=r[A];let C=r[A];if(!C)break;w[A]=1;var y=D[191](A,c,d,e);if(y){let H=g?Ec(C):Lf(C);y=J("span",u,`<span>${H}</span>`,(0>y?"background:url(nehhon/iconunits.webp);":"")+`background-position-y:${y}px`);if(g){if(A=D[192](A))y.dataset.title=H+" -> "+Ec(C+A)}else H!=C&&(y.dataset.title=C);h&&(v+=C)}}while(x);h&&J("td",p[t],"\u03a3 = "+
v,"color:var(--color1)")}}function qg(){const a=D[28](),b=m("stats").children[0].children[0].children;let c=b.length;const d=m("stats").children[1].getElementsByTagName("td");let e=this.$?"":"none";this.innerHTML=this.$&&"-> &nbsp; <-"||"<- ->";this.colSpan=this.$?this.kb-1:1;let g=this.bc;for(let h=0;h<this.kb;h++){h?b[g+h].style.display=e:this.$?P(b[g+h]):b[g+h].style.display="";for(let k=0;k<a-1;k++)h?d[k*c+g+h].style.display=e:this.$?P(d[k*c+g+h]):d[k*c+g+h].style.display=""}this.$=!this.$}
var vg,wg;window.popAlert=function(a){if(4==a){if(vg&&8E3>Date.now()-vg)return;vg=Date.now()}else{if(wg&&30>Date.now()-wg)return;wg=Date.now()}if(a=m(["gold","wood","food","stone","pop"][a]))a=a.getBoundingClientRect(),a=J("div",document.body,"",`left:${a.x+a.width/2}px;top:${a.y}px;`),a.className="alertpop",setTimeout(G,3E3,a)};
window.dmgAlert=function(a,b){var c=l.V,d=l.W;ic("attack");ya&&(ue||(setTimeout(function(){m("minimapb").style.cssText=""},8E3),m("minimapb").style.cssText="animation:dmganimdrop .15s alternate infinite;"),xg=yg=c=zg(),d=(window.innerHeight-c)/2,c=(window.innerWidth-c)/2,"vibrate"in navigator&&window.navigator.vibrate([200,50,200,50,200]),q(c,d));const e=D[47]();a=J("div",document.body,"",`left:${~~(a*yg/e)+c}px;top:${~~(b*yg/e)+d}px`);a.className="alertdmg";ya&&!ue&&P(a);setTimeout(G,12E3,a)};
window.locationAlert=function(a,b,c,d,e){const g=D[47]();if(!(0>a||0>b||a>=g||b>=g||9<document.body.getElementsByClassName("alertloc").length||ya)){ic("chat%20location");var h=l.V,k=l.W;Ag(0,1,c,0,d,e);a=J("div",document.body,"",`left:${~~(a*yg/g)+h}px;top:${~~(b*yg/g)+k}px`);a.className="alertloc";setTimeout(G,1E4,a)}};document.onkeydown=function(a){return a.ctrlKey&&a.shiftKey?!1:!(-1<[116,115,123].indexOf(a.keyCode))};const Bg=[9,112,113,114,115,116,117,118,119,120,121,123];
function Cg(){for(var a=Object.keys(Uf),b=0;b<a.length;b++)Uf[a[b]]&&Dg({keyCode:a[b],key:Uf[a[b]]})}var Eg=(a,b)=>{if(a&&(a=Ve.basic.indexOf(a.toUpperCase()),-1<a))return wf[a].l(b),!0};
function Fg(a){var b=a.keyCode,c=a.target==m("msginputGame");if(!(a.key&&Gg&&Ve.basic[8]!=a.key.toUpperCase()||"INPUT"==a.target.tagName||"TEXTAREA"==a.target.tagName||"true"==a.target.contentEditable)||c)if(c&&9==b&&(m("teamchat").checked=!m("teamchat").checked),(a.ctrlKey&&!c||a.altKey||0<=Bg.indexOf(b))&&a.preventDefault(),!(!B.A||13!=b&&m("enterwindow")&&"displayblock"==m("enterwindow").className||c&&13!=b||(Uf[b]=a.key,Eg(a.key,1)))){D[272]();a=a.key.toUpperCase();for(c=0;3>c;c++)for(let d=0;d<
Hf.length;d++){let e=Ve[Hf[d]];if(e&&e[c]==a)return D[15](d,2147483647)}48<=b&&57>=b?D&&D[32](b,!0):65<=b&&90>=b&&81!=b&&D&&D[32](b,!0)}}let Hf;window.shdwn=function(a,b){Hf=Zb(a,b)};function Dg(a){var b=a.keyCode;a.key&&Gg&&Ve.basic[8]!=a.key.toUpperCase()||!Uf[b]||(Uf[b]=0,(a.ctrlKey||a.altKey||0<=Bg.indexOf(b))&&a.preventDefault(),Eg(a.key,0)||(48<=b&&57>=b?D&&D[32](b,!1):65<=b&&90>=b&&81!=b&&D&&D[32](b,!1)))}window.addEventListener("blur",function(){if(D&&D[32])D[32](16,!1)});
var Hg,Ig,Jg,Kg,Lg=!1;function Mg(a,b){Ng||(rc=Jg-(Hg-a)*tc,sc=Kg-(Ig-b)*tc,Sf(-rc,-sc),Og())}var Ng,Pg,Qg,Rg,Sg,Tg;function Ug(a,b){return 30>Math.sqrt((a-Hg)**2+(b-Ig)**2)}
function Vg(a){if(a.target==Tf){Wg=Xg=Ye=ef=0;var b=a.changedTouches[0],c=b.pageX;b=b.pageY;1==a.touches.length&&Rg&&300>Date.now()-Rg&&Ug(c,b)?(Yg(a.pageX,a.pageY),D[21](c,b,0),Sg=!0):(Rg=Date.now(),1<a.touches.length?clearTimeout(Tg):D[168]()||(clearTimeout(Tg),Tg=setTimeout(D[22],350,c,b,2,1,0,0,1),q(Tg)),Jg=rc,Kg=sc,Hg=c,Ig=b,a.preventDefault())}}var Zg,$g,ah,Xg,Wg;
function bh(a){var b=a.touches[0].pageX,c=a.touches[0].pageY;if(a.target==Tf){var d=D[168]();Ug(b,c)||clearTimeout(Tg);if(Sg||d)return D[25](b,c,1);2==a.touches.length?(b=a.touches,c=Math.sqrt((b[0].pageX-b[1].pageX)**2+(b[0].pageY-b[1].pageY)**2),Pg?jf(Qg*Pg/c,(b[0].pageX+b[1].pageX)/2,(b[0].pageY+b[1].pageY)/2,1):(Pg=c,Qg=tc,Ng=!0)):(a=Date.now()-ah,q("t",a),Xg=-(Zg-b)/a,Wg=-($g-c)/a,Zg=b,$g=c,ah=Date.now(),Mg(b,c))}}
function ch(a){if(a.target==Tf){var b=a.changedTouches[0].pageX,c=a.changedTouches[0].pageY;clearTimeout(Tg);if(D[168]())D[25](b,c,1);var d=Ug(b,c)&&300>Date.now()-Rg;if(Sg||d||D[168]())Zf=!1,D[22](b,c,2*a.touches.length,Sg?1:2),Sg=!1;Pg=void 0;0==a.touches.length?Date.now()-ah&&(ef=Xg||0,Ye=Wg||0,hf=rc,cf=sc,bf=gf=Date.now(),$e=1):(b=a.touches[0].pageX,a=a.touches[0].pageY,Jg=rc,Kg=sc,Hg=b,Ig=a);Ng=!1}}
function dh(a){if(!ya){var b=window.innerWidth,c=window.innerHeight,d=a.pageX,e=a.pageY;if(a.target==Tf){if(Lg)return Mg(d,e);eh(a.pageX,a.pageY);D[25](a.pageX,a.pageY,1)}if(screen.height-10<=c&&1==f.scrollmouse&&!Gg){if(1.2===Math.abs(ef)||0===ef)ef||(gf=Date.now(),hf=rc),$e=0,ef=1.2*((10>d)-(d>b-10));if(1.2===Math.abs(Ye)||0===Ye)Ye||(bf=Date.now(),cf=sc),$e=0,Ye=1.2*((10>e)-(e>c-10))}}}
var Yg=(a,b)=>{lf&&(fh=[a,b],a=gh(a,b),Zf=!0,qf.queue.writeBuffer(hh,0,new Float32Array([a.x,a.y,a.x,a.y])))},eh=(a,b)=>{lf&&Zf&&(fh=[a,b],a=gh(a,b),qf.queue.writeBuffer(hh,8,new Float32Array([a.x,a.y])))},fh;function ih(a){if(a.target==Tf)if(1==a.button&&a.pageX>l.R){Lg=!0;var b=a.pageX;a=a.pageY;Jg=rc;Kg=sc;Hg=b;Ig=a}else Lg=!1,Yg(a.pageX,a.pageY),D[21](a.pageX,a.pageY,a.button)}
function jh(a){2<a.button&&a.preventDefault();if(a.target==Tf)if(Lg)Lg=!1;else return Zf=!1,D[22](a.pageX,a.pageY,a.button,0,!1,a.shiftKey,a.ctrlKey,a.altKey)}window.addEventListener("mouseup",function(a){2<a.button&&a.preventDefault()});var kh=!1;window.self!==window.top&&window.addEventListener("mousedown",function(){kh||(kh=!0,lh())});window.fstordprop=(a,b,c,d,e,g)=>{Bf={icon:a,name:b,jb:c,Ha:d,unit:e,type:g}};
var Bf,Cf=(a,b)=>{let c=J("div",a);c.className="dataOrder";Ff(c,48*Bf.icon);Bf.unit&&!b&&(J("span",a,"->"),a=J("div",a),a.className="dataIcon",Ff(a,48*Bf.unit))};function mh(a,b,c){D[260](a);if(!Bf.Ha){var d=J("div",b);b=J("button",d,"\u00d7");b.className="closeIcon";b.onclick=()=>{c.splice(c.indexOf(a),1);G(d)};Cf(d);J("span",d,(Bf.name&&L(Bf.name)||"")+(Bf.jb&&" - "+L(Bf.jb)||""))}}
var Df=[842,843,689,847],nh=(a,b,c)=>{b=J("div",b);a=D[193](a);J("span",b,c,"font-size:23px;color:#"+("-"==c?"f00":"0f0"));c=J("div",b);Ff(c,a);c.className="dataIcon"},oh=(a,b,c)=>{D[260](a);Bf.Ha||((a=Df[Bf.type]||"")&&(a=L(a)+" -> "),b=J("div",b,`<span style="font-size:23px">${c}</span> `+(Bf.name&&a+L(Bf.name)||""),`filter:hue-rotate(${"+"==c?90:-45}deg);margin:7px 0px`),Cf(b,1))};
function ph(a,b){var c=qh();c=J("div",c);c.className="ordermod";let d=J("div",c),e=a.j[b];for(let g of e)mh(g,d,e);a=J("button",c);a.className="sum";a.onclick=()=>{let g=qh();var h=J("div",g);h.className="ordermod ord2";h=J("div",h);for(let p=0,r=D[261]();p<r;p++){D[260](p);if(Bf.Ha)continue;let t=document.createElement("div");var k=Df[Bf.type]||"";k&&=L(k)+" -> ";k=Bf.name&&k+L(Bf.name)||"";Ef(t,h,k||"zz");Cf(t);J("span",t,k);t.onclick=()=>{e.push(p);mh(p,d,e);Cb(g)}}}}
var rh=(a,b,c,d)=>{if(c!=b){D[196](a);a=J("div",d);d=J("div",a);d.className="dataIcon";Ff(d,T.D);var e=d=255,g=255;b>c&&(d=255/(b/c),g=255/(b/c));b<c&&(e=255/(c/b),g=255/(c/b));0>d&&(d=0);0>e&&(e=0);0>g&&(g=0);a=J("div",a);J("span",a,c+"%","color:#fff");J("span",a,"->","color:var(--color1);margin:0px 6px");J("span",a,b+"%",`color:rgb(${d},${e},${g})`)}};
function sh(a,b,c,d){D[196](b);let e=J("div",a);a=J("button",e,"\u00d7");a.className="closeIcon";a.onclick=()=>{c.splice(th(c,b),2);G(e)};a=J("div",e);a.className="dataIcon";Ff(a,T.D);M("div",e,T.name);a=J("div",e);let g=K("input",a,"width:58px");g.oninput=uh;g.max=2**32-1;g.min=0;g.type="number";g.value=d;g.onchange=()=>{c[th(c,b)+1]=Q(g)};J("span",a," %")}var qh=()=>{let a=Pc("",2);a.parentNode.parentNode.style.top=window.scrollY+"px";return a};
function vh(a,b){b=J("div",b);b.className="mddunit bonusedit";q(a);let c=J("div",b);for(var d of a)wh(c,d,a);d=J("button",b);d.className="sum";d.onclick=()=>ne(e=>{wh(c,e,a);a.push(e)})}let xh=()=>{let a=Gf(),b=[];for(let c=0;c<a.length;c++)a[c]&&b.push({name:a[c],id:c});b.sort(Od);return b};
function yh(a){a=J("div",a);a.id="consts";let b=zh[3][0].data,c=xh();for(let d=0;d<c.length;d++){let e=c[d],g=b[e.id],h=J("input",a);h.value=g;h.type="number";h.onchange=()=>{b[e.id]=Q(h)};J("div",a,e.name)}}function wh(a,b,c){D[196](b);let d=J("div",a);a=J("button",d,"\u00d7");a.className="closeIcon";a.onclick=()=>{c.splice(c.indexOf(b),1);G(d)};a=J("div",d);a.className="dataIcon";Ff(a,T.D);M("div",d,T.name)}
function Ah(a,b){let c=a.j[b];a=qh();a=J("div",a);a.className="bonusedit";q(c);let d=J("div",a);for(b=0;b<c.length;b+=2)sh(d,c[b],c,c[b+1]);a=J("button",a);a.className="sum";a.onclick=()=>ne(e=>{sh(d,e,c,100);c.push(e,100)})}
function Bh(a,b){q(a,b);b=qh();b=J("div",b);b.className="buildgrid";q(a);let c=a.data[16],d=a.data[17],e=a.j[18];q(c,d);b.style.gridTemplateColumns=`repeat(${c},auto)`;for(let g=0;g<c*d;g++){let h=e[g],k=K("div",b,"background:#"+(h?"ff0000c0":"00ff00c0"));k.onmousedown=()=>{h=!h;k.style.background="#"+(h?"ff0000c0":"00ff00c0");e[g]=h}}}
var Gf=(a,b)=>[Ch(L(771),L(16)),Ch(L(771),L(17)),Ch(L(771),L(18)),Ch(L(771),L(19)),(!O||a)&&(a&&" "||"")+L(42)+(b&&" (%)"||""),L(772)+" (%)",L(773),L(774),L(775),L(776),L(241)+" - "+L(561),L(377)+" - "+L(561),L(369)+" - "+L(561),L(364)+" - "+L(561),L(366)+" - "+L(561),L(370)+" - "+L(561),L(372)+" - "+L(561),L(367)+" - "+L(561),L(379)+" - "+L(561),L(378)+" - "+L(561),L(380)+" - "+L(561),L(777),L(778),L(779),void 0,L(363)+" - "+L(561),void 0,void 0,L(373)+" - "+L(561),L(780),void 0,L(368)+" - "+L(561),
L(375)+" - "+L(561),L(371)+" - "+L(561),L(374)+" - "+L(561),L(365)+" - "+L(561),void 0,void 0,a&&L(11)||void 0,L(377)+" - "+L(782),L(781),L(377)+" - "+L(383),L(377)+" - "+L(786),L(799),L(785),L(376)+" - "+L(383),L(364)+" - "+L(383),L(372)+" - "+L(383),L(366)+" - "+L(383),L(364)+" - "+L(782),L(364)+" - "+L(784),L(378)+" - "+L(784),L(787),L(378)+" - "+L(786),L(364)+" - "+L(786),L(366)+" - "+L(786),void 0,void 0,void 0,L(380)+" - "+L(786),L(372)+" - "+L(784),L(369)+" - "+L(383),L(370)+" - "+L(383),L(801),
L(802),void 0,L(788),L(363)+" - "+L(383),L(368)+" - "+L(383),L(371)+" - "+L(383),L(374)+" - "+L(383),L(375)+" - "+L(383),L(365)+" - "+L(782),L(365)+" - "+L(786),L(365)+" - "+L(383),L(380)+" - "+L(383),L(378)+" - "+L(383),L(379)+" - "+L(383),L(367)+" - "+L(383),L(800)+" - "+L(383),L(373)+" - "+L(383),L(800)+" - "+L(784),L(790),L(791),L(792),L(793),L(794),L(795),L(796),L(797),L(798),L(374)+" - "+L(782),L(416)+" - "+L(383),L(363)+" - "+L(784),L(363)+" - "+L(825),L(363)+" - "+L(782),L(363)+" - "+L(786),
L(826),L(827),L(828),L(829),L(830)],Eh=(a,b,c)=>{c=J("div",c);J("span",c,"+"+a,"color:#fff");J("span",c,"->","color:var(--color1);margin:0px 6px");J("span",c,"+"+b,"color:"+Dh(a,b))},Dh=(a,b)=>{let c=255,d=255,e=255;b>a&&(c=255/(b/a),e=255/(b/a));b<a&&(d=255/(a/b),e=255/(a/b));0>c&&(c=0);0>d&&(d=0);0>e&&(e=0);return`rgb(${c},${d},${e})`};
function Fh(a,b){let c=a.data;var d=c[1];if(5==d)return ph(a,4);var e=a.j[b];b=qh();b=J("div",b);b.className="techcf";q(e);if(0==d){Gh(b,c[10],Gf(),k=>{q(k);c[10]=k});J("span",b,"+");let h=J("input",b);h.value=c[12];h.type="number";h.onchange=()=>c[12]=Q(h)}else{if(1==d||2==d){var g=J("div",b);e=J("div",g);g.className="unitProps";g=[{h:1,id:12},{h:3,id:13},{h:-1,id:11},{h:6,id:14},{h:5,id:15}];for(let h of g){K("div",e,`background:url(nehhon/icons2.webp) 0px ${-20*h.h}px;width:20px;height:20px`);
g=J("div",e,"+");let k=J("input",g);k.value=c[h.id];k.type="number";k.onchange=()=>c[h.id]=Q(k);2==d&&J("span",g," %")}}else if(3==d){d=K("div",b,"display:flex;justify-content:center;gap:3px;align-items:center");let h=K("input",d);h.value=c[12];h.type="number";h.onchange=()=>c[12]=Q(h);J("span",d,"%")}else{if(4==d){D[196](c[12]);a=K("div",b,"display:flex;justify-content:center;gap:3px;align-items:center");let h=K("div",a,"margin-right:8px");h.className="dataIcon";Ff(h,T.D);let k=M("div",a,T.name);
h.onclick=()=>ne(p=>{D[196](p);c[12]=p;Ff(h,T.D);k.textContent=L(T.name)});return}if(333==d)for(d=K("div",b,"display:flex;gap:10px;align-items:center"),e=0;4>e;e++){Uc(d,e);let h=2+e,k=K("input",d,"margin-right:8px");k.value=c[h];k.type="number";k.onchange=()=>c[h]=Q(k)}}vh(a.j[8],b)}}
function Hh(a,b){let c=a.j[b];a=qh();M("button",a,622,"margin-right:5px;margin-bottom:5px;color:var(--color1);padding:5px").onclick=()=>{for(let k of d.children){let p=k.children[2].children[0];if(!p.checked)p.onclick()}};M("button",a,623,"color:var(--color1);padding:5px").onclick=()=>{for(let k of d.children){let p=k.children[2].children[0];if(p.checked)p.onclick()}};let d=J("div",a);d.className="tchgrid cnttkk";a=D[90]();q(c);for(b=0;3>b;b++)for(let k=0;k<a;k++){var e=D[194](k,!b,1==b,2==b);if(e){var g=
-1<c.indexOf(k);let p=document.createElement("div");var h=L(D[89](k));Ef(p,d,b+h,g);J("div",p,h);h=J("div",p);Ff(h,e);h.className="dataIcon";e=K("div",p,"display:grid;grid-gap:0px 10px;grid-template-columns:repeat(2,auto);align-items:center");g=je(e,r=>{r?c.push(k):c.splice(c.indexOf(k),1)},g);h.onclick=g.onclick}}}
function Ih(a){if(zh){var b=[60,55,23,155,0,0,0,0],c=[],d=2*b.length;for(var e of zh){c.push(d,e.length);for(var g of e){d+=g.data.length;for(var h in g.j)d+=g.j[h].length,g.data[h]=g.j[h].length}}c.push(0,0,0,0,0,0,0,0);d=a?new Uint32Array(d):Zb(D[265](d),d);d.set(c);q(c);for(e=0;e<b.length;e++)if(zh[e]){g=zh[e];h=b[e];let p=c[2*e],r=p+h*g.length;for(var k of g){d.set(k.data,p);p+=h;for(let t in k.j)d.set(k.j[t],r),r+=k.j[t].length}}if(a){a=new Uint8Array(d.buffer);b=4*d.length;c=D[79](b);c=Jh(c,
b);for(k=0;k<b;k++)c[k]=a[k+0];c=D[80]();a=D[81]();a=Jh(c,a);b=new Blob([new Uint32Array([d.length]),a.slice(0)],{type:"application/octet-binary"});Af(b,"tzared.tzmod");q(a)}q(d)}}
var Kh=()=>[[{name:""},{y:18},{y:1},{y:3},{y:13},{y:17},{y:12},{y:16},{y:6},{y:10},{name:559},{name:824},{name:561},{name:562},{name:739,ha:1,P:1},{name:740},{name:741,j:1,click:ph},{name:742},{name:743,select:[0,L(757),1,L(758),2,L(759)]},{name:744,select:[1,"1x1",2,"2x2",3,"3x3",4,"4x4"]},{P:1,name:745,select:[0,L(16),1,L(17),2,L(18),3,L(19),4,L(754),55,L(677)]},{P:1,name:746,select:[0,L(16),1,L(17),2,L(18),3,L(19),55,L(677)]},{name:747,P:1},{name:748},{name:749,select:[0,L(755),1,L(756),2,L(811)]},
{name:726},{name:750,j:1,click:Hh,ha:1},{name:751},{name:752,select:[0,L(46),1,L(45)],P:1},{name:753},{name:738,j:1,click:Ah},{name:804},{name:821},{name:812,u:1},{name:818,u:1},{name:819,u:1},{name:820,u:1},{name:823,u:1},{o:264,F:1},{o:99,F:1},{o:25,F:1},{o:159,F:1},{o:219,F:1},{o:263,F:1},{o:78,F:1},{o:28,F:1},{o:217,u:1},{o:77,u:1},{o:76,u:1},{o:87,u:1},{o:23,u:1},{o:128,u:1},{o:32,u:1},{name:805,u:1}],[{name:""},{y:18},{y:13},{y:17},{y:12},{y:16},{y:10},{name:741,j:1,click:ph},{y:1},{name:559},
{name:824},{name:561},{name:739,ha:1,P:1},{name:740},{name:742},{name:743,select:[0,L(757),1,L(758),2,L(759)]},{name:760,xa:1,min:1},{name:761,xa:1,min:1},{name:762,j:1,click:Bh},{name:745,select:[0,L(16),1,L(17),2,L(18),3,L(19),4,L(754),55,L(677)]},{name:746,select:[0,L(16),1,L(17),2,L(18),3,L(19),55,L(677)]},{name:747,P:1},{name:748},{name:749,select:[0,L(755),1,L(756),2,L(811)]},{name:726},{name:822},{name:750,j:1,click:Hh,ha:1},{name:751},{name:752,select:[0,L(46),1,L(45)],P:1},{name:738,j:1,
click:Ah},{name:804},{name:821},{name:22,u:1},{name:812,u:1},{name:818,u:1,P:1},{name:823,u:1},{o:264,F:1},{o:99,F:1},{o:25,F:1},{o:159,F:1},{o:219,F:1},{o:263,F:1},{o:78,F:1},{o:28,F:1},{o:217,u:1},{o:77,u:1},{o:76,u:1},{name:805,u:1}],[{name:""},{name:620,click:Fh,select:[0,L(764),1,L(765),2,L(766),3,L(767),4,L(768),5,L(769)]},{y:13},{y:10},{name:770,j:1,click:ph},{y:17},{y:12},{y:16},{P:1,j:1},{name:805,u:1}]];window.shmdchngs=()=>{ge(1)};
function ge(a){let b=Pc("",1);b.id="mdd";Lh();let c=Kh();var d=[{Aa:58,click:()=>{Mh(0,h,c)}},{Aa:59,click:()=>{Mh(1,h,c)}},{Aa:469,click:()=>{Mh(2,h,c)}},{Aa:470,click:()=>{yh(h)}},{Aa:874,click:()=>{var k=zh,p=Nh,r=Kh();let t=J("div",h);t.id="modchanges";for(var u=0;3>u;u++){var v=p[u],x=k[u],A=r[u];for(let xb=0;xb<x.length;xb++){var y=void 0;let Ea=x[xb].data,yb=v[xb].data;for(let X=0;X<A.length;X++)if(!(1==u&&21==X||!u&&22==X)){var w=Ea[X],C=yb[X],H=x[xb].data[0],I=A[X];if(I.j){var V=!1,S=v[xb].j[X],
Aa=x[xb].j[X];if(16==X||8==X||26==X||7==X||4==X||8==X){for(let ca of Aa)0>S.indexOf(ca)&&(V=!0);for(let ca of S)0>Aa.indexOf(ca)&&(V=!0)}else if(30==X||29==X){for(var lb=0;lb<Aa.length;lb+=2)0>th(S,Aa[lb])&&(V=!0);for(lb=0;lb<S.length;lb+=2)0>th(Aa,S[lb])&&(V=!0)}if(!V)continue}else if(2==u&&1==X){V=!1;S=[1,10,11,12,13,14,15];for(let ca of S)if(yb[ca]!=Ea[ca]){V=!0;break}if(!V)continue}else if(w==C)continue;y||(y=t,V=u,S=document.createElement("div"),D[196](H),H=L(T.name),jg(K("div",S,"background:#00000082"),
T.D,0,0,T.$a),J("div",S,H,"color:var(--color1);border-color:#ffd75d40;background:#00000082"),Ef(S,y,V+H),y=S);H=J("div",y);I.name?J("div",H,L(I.name)):I.y?Ff(K("div",H,"background:url(nehhon/icons2.webp);width:20px;height:20px;filter:drop-shadow(0px 0px 3px #000)"),-20*I.y):I.o&&(H=J("div",H),H.className="dataOrder",Ff(H,48*I.o));if(I.u)C=J("div",J("div",y)),C.className="check2",C.style.backgroundPositionY=w?"0":"";else if(I.j)if(C=K("div",y,"display:block"),w=J("div",C),H=J("div",C),C=v[xb].j[X],
I=x[xb].j[X],16==X||7==X||4==X){for(let ca of I)0>C.indexOf(ca)&&oh(ca,w,"+");for(let ca of C)0>I.indexOf(ca)&&oh(ca,H,"-")}else if(26==X||26==X||8==X){for(let ca of I)0>C.indexOf(ca)&&nh(ca,w,"+");for(let ca of C)0>I.indexOf(ca)&&nh(ca,w,"-")}else{if(30==X||29==X){w.style.flexDirection="column";for(H=0;H<I.length;H+=2)V=I[H],S=I[H+1],Aa=C.indexOf(V),0<=Aa?rh(V,S,C[Aa+1],w):rh(V,S,100,w);for(H=0;H<C.length;H+=2)V=C[H],S=C[H+1],0>I.indexOf(V)&&rh(V,100,S,w)}}else if(S=V=H=255,I.select?(w=I.select.indexOf(w)+
1,C=I.select[I.select.indexOf(C)+1],w=I.select[w]):(w>C&&(H=255/(w/C),S=255/(w/C)),w<C&&(V=255/(C/w),S=255/(C/w)),0>H&&(H=0),0>V&&(V=0),0>S&&(S=0)),I=I.F?"%":"",Aa=J("div",y),J("span",Aa,C+I),C!=w&&(J("span",Aa,"->","color:var(--color1)"),J("span",Aa,w+I,`color:rgb(${H},${V},${S})`)),2==u&&1==X)if(I=K("div",Aa,"flex-direction:column;margin-left:10px"),w==C)if(w=yb[X],0==w)w=Gf(),C=J("div",I),J("div",C,w[Ea[10]]),yb[10]==Ea[10]?Eh(yb[12],Ea[12],C):J("div",C,"+"+Ea[12]);else if(1==w||2==w){w=[{h:1,
id:12},{h:3,id:13},{h:-1,id:11},{h:6,id:14},{h:5,id:15}];q(213123);for(let ca of w)yb[ca.id]!=Ea[ca.id]&&(w=J("div",I),K("div",w,`background:url(nehhon/icons2.webp) 0px ${-20*ca.h}px;width:20px;height:20px`),Eh(yb[ca.id],Ea[ca.id],w))}else 3==w?(w=yb[12],C=Ea[12],I=J("div",I),J("span",I,"x"+w+"%","color:#fff"),J("span",I,"->","color:var(--color1);margin:0px 6px"),J("span",I,"x"+C+"%","color:"+Dh(w,C))):4==w&&(w=J("div",I),D[196](yb[12]),C=K("div",w),C.className="dataIcon",Ff(C,T.D),J("span",w,"->"),
D[196](Ea[12]),w=K("div",w),w.className="dataIcon",Ff(w,T.D));else if(w=Ea[X],0==w)w=Gf(),C=J("div",I),J("div",C,w[Ea[10]]),J("div",C,"+"+Ea[12]);else if(1==w||2==w){w=[{h:1,id:12},{h:3,id:13},{h:-1,id:11},{h:6,id:14},{h:5,id:15}];for(let ca of w)Ea[ca.id]&&(w=J("div",I),K("div",w,`background:url(nehhon/icons2.webp) 0px ${-20*ca.h}px;width:20px;height:20px`),J("div",w,Ea[ca.id]))}else 3==w?J("div",I,"x"+Ea[12]+"%"):4==w&&(w=J("div",I),J("span",w,"->"),D[196](Ea[12]),w=K("div",w),w.className="dataIcon",
Ff(w,T.D))}}}let Fd;k=k[3][0].data;p=p[3][0].data;r=xh();for(v=0;v<r.length;v++)x=r[v],p[x.id]!=k[x.id]&&(Fd||=J("div",t),J("div",Fd,x.name),u=p[x.id],x=k[x.id],A=J("div",Fd),J("span",A,u,"color:#fff"),J("span",A,"->","color:var(--color1);margin:0px 6px"),J("span",A,x,"color:"+Dh(u,x)))}}];let e=J("div",b),g=J("div",e),h=J("div",e);for(let k of d){let p=M("button",g,k.Aa);p.onclick=()=>{for(let r of g.children)r.style.background="";p.style.background="#ff00ff45";h.innerHTML="";k.click(h)}}if(a)for(d=
0;5>d;d++)4!=d&&(g.children[d].style.display="none");J("button",g,L(8).toLowerCase(),"margin-top:auto;padding-top:8px;height:max-content;margin-left:auto").onclick=()=>{Ih(1)};a||(J("button",g,L(832).toLowerCase(),"margin-top:auto;padding-top:8px;height:max-content").onclick=()=>{Oh(k=>{var p=k;q(p);p=p.target.result;k=new Uint8Array(p,4);p=(new Uint32Array(p,0,1))[0];q(k,p);var r=D[79](k.length);r=Jh(r,k.length);q(r);for(var t=0;t<k.length;t++)r[t]=k[t];r=D[267](p);k=Zb(r,p);q("ug",k);zh=void 0;
Cb(b);ge()})},M("button",g,542,"margin-top:auto;padding-top:8px;height:max-content").onclick=()=>{confirm(L(713))&&(D[266](),zh=void 0,Cb(b),ge())});zh||(zh=[],Ph(0,60,257,c,zh),Ph(1,55,258,c,zh),Ph(2,23,263,c,zh),zh[3]=[{j:{},data:new Uint32Array(Zb(D[264](),155))}]);g.children[a?4:0].onclick();O&&P(g.children[3]);b.children[0].addEventListener("click",()=>{O?(Ih(),D[265](2147483647)):B.m&&l.s&&!B.A&&Qh()&&(Ih(),D[274]())})}
var Qh=()=>{if(zh)for(let b=0;b<zh.length;b++){let c=zh[b],d=Nh[b];for(let e=0;e<c.length;e++){let g=c[e],h=d[e];for(var a=0;a<g.data.length;a++)if(g.data[a]!=h.data[a])return!0;for(let k in g.j)for(a=0;a<g.j[k].length;a++)if(g.j[k][a]!=h.j[k][a])return!0}}return!1},Nh,Lh=()=>{if(!Nh){var a=Kh();Nh=[];Ph(0,60,257,a,Nh);Ph(1,55,258,a,Nh);Ph(2,23,263,a,Nh);Nh[3]=[{j:{},data:new Uint32Array(Zb(D[264](),155))}]}};window.gtorimod=Lh;var zh;
function Ph(a,b,c,d,e){d=d[a];e[a]=[];performance.now();c=D[c]();let g=Zb(D[259]()),h=c;for(let k=0;k<c;k+=b){let p={data:g.slice(k,k+b),j:{}};e[a].put(p);for(let r=0;r<d.length;r++){let t=p.data[r];d[r].j&&!p.j[r]&&(p.j[r]=Array.from(g.slice(h,h+t)),h+=t)}}}
function Mh(a,b,c){c=c[a];performance.now();var d=J("div",b);d.className="arrws";let e=J("button",d,"<","opacity:.5"),g=J("button",d,">");d=J("table",b);d.id="unittable";b=0;let h=J("thead",d);for(var k=0;k<c.length;k++)if(!c[k].P){b++;var p=J("td",h,L(c[k].name));c[k].y&&Ff(J("div",p),-20*c[k].y);c[k].o&&(p=J("span",p),p.className="dataOrder",Ff(p,35*c[k].o))}a=zh[a];let r=J("tbody",d);for(let x of a){a=document.createElement("tr");for(let A=0;A<c.length;A++){k=x.data[A];let y=c[A];if(y.P)continue;
d=J("td",a);if(0==A){D[196](k);k=L(T.name);d.dataset.title=k;jg(d,T.D,0,0,T.$a);a.U=k;continue}d.U=k;y.ha&&(d=K("div",d,"display:flex;gap:4px;align-items:center;justify-content:center"));if(y.j){let C;y.ha?(k=!k,je(d,H=>{H?(wd(C),x.data[A]=0):(C.style.visibility="",x.data[A]=x.j[A].length)},k),C=J("button",d,"\u25a4"),C.onclick=()=>y.click(x,A),k&&wd(C)):(C=J("button",d,"\u25a4"),C.onclick=()=>y.click(x,A));continue}if(y.u){je(d,C=>{x.data[A]=C},k);continue}let w=J(y.select?"select":"input",d);y.F&&
J("span",d," %");if(y.select){for(p=0;p<y.select.length;p+=2){let C=y.select[p];J("option",w,y.select[p+1]).value=C}w.value=k;y.click&&(J("button",d,"\u25a4","margin-left:5px").onclick=()=>y.click(x,A))}else y.ha&&(p=k!=2**32-1,je(d,C=>{C?(w.style.visibility="",w.value=0):wd(w)},p,1),p||wd(w)),w.value=k,w.type="number",w.min=y.min||0,w.max=2**32-1,w.oninput=uh;w.onchange=()=>{x.data[A]=Q(w);if(c[A].xa){let C=x.data[16]*x.data[17];x.data[18]=C;x.j[18].length=C}}}for(let A of r.children)if(A.U>a.U){r.insertBefore(a,
A);break}a.parentNode||r.appendChild(a)}let t=0,u=Math.ceil((b-1)/6),v=x=>{t+=x;0>t&&(t=0);t>=u&&(t=u-1);e.style.opacity=t?"":".5";g.style.opacity=t+1>=u?".5":"";for(x=1;x<h.children.length;x++){var A=h.children[x];x<=6*t||x>6*t+6?P(A):xd(A)}for(let y of r.children)for(x=1;x<y.children.length;x++)A=y.children[x],x<=6*t||x>6*t+6?P(A):xd(A)};v(0);g.onclick=()=>v(1);e.onclick=()=>v(-1)}
window.selectMulp=function(a,b,c,d,e,g,h,k,p,r){Rh(b,c);cd.style.display="block";m(qd?"unitname":"kingdom").innerHTML=a+" "+L(58);p?(ad.innerHTML=p,Ff(ad,-100),pd("levelmenu")):N("levelmenu");g?(Zc.innerHTML=g,pd("attackmenu")):N("attackmenu");h?($c.innerHTML=h,pd("defencemenu")):N("defencemenu");k&&(m("manamenu").style.backgroundPosition="0px -240px",m("manamenu").innerHTML=k,pd("manamenu"));r?(m("manamenu1").style.backgroundPosition="0px -80px",m("manamenu1").innerHTML=r,pd("manamenu1")):N("manamenu1");
qd&&d&&(bd.innerHTML=Rc(e,D[29](d)),m("plavatar").style.background=`url(${cg(e,d)})`,pd("plavatar"))};window.updateHealth=function(a){if(m("progressvalue")){var b=m("progressvalue").innerHTML.split("/");b.length&&(m("progressone").value-=a,m("progressvalue").innerHTML=b[0]-a+"/"+b[1])}};
window.selectionOne0=function(a,b,c,d,e,g,h,k,p,r,t,u,v,x,A,y){N("manamenu");N("manamenu1");N("progressmana");d=Sh||L(d);a&&b?(m("stock").className="",m("manamenu1").style.display="block",m("manamenu1").style.backgroundPosition="0px -80px",m("manamenu1").innerHTML=a):m("stock").className="blocked";1==e&&c&&b&&(a=Math.floor(25*(c-B.Y)/1E3),0<a&&(m("manamenu").style.display="block",m("manamenu").style.backgroundPosition="0px -200px",m("manamenu").innerHTML=a+"s"));bd.style.display="block";dd.textContent!=
d&&(dd.textContent=d);g||0==e&&!qd?(Zc.innerHTML=g,pd("attackmenu")):N("attackmenu");0==e&&!qd||qd&&h&&0===e||2==e&&h?($c.innerHTML=h,pd("defencemenu")):N("defencemenu");t&&226==r&&(Ff(m("manamenu1"),-140),pd("manamenu1"),m("manamenu1").innerHTML=t);p&&(m("manamenu").style.display="block",m("manamenu").innerHTML=k,27===r?(m("manamenu1").style.backgroundPosition="0px -280px",pd("manamenu1"),m("manamenu1").innerHTML=k,m("manamenu").style.backgroundPosition="0px -240px",m("manamenu").innerHTML=t):(m("progressmana").value=
~~(100*k/p),pd("progressmana"),m("manamenu").style.backgroundPosition="0px -120px"));A&&(d=m("manamenu1"),74==r&&(x=4),d.style.display="block",d.style.backgroundPosition=["0px -260px","0px -340px","0px -240px","0px -320px","0px -220px"][x]||"",d.innerHTML=A);ad.innerHTML=u;ad.style.display="block";1==e?Ff(ad,-180):Ff(ad,-100);0===u&&(2==e||1==e||0==e&&qd)&&(ad.style.display="none");bd.innerHTML=Rc(y,D[29](v));v&&m("plavatar")&&(m("plavatar").style.background=`url(${cg(y,v)})`,pd("plavatar"));cd.style.display=
"block"};function Th(a){return a.replace(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,function(){return"*******"})}window.shresmsg=function(a,b,c){let d=L(a?451:533);a&&(d+=" -> ");if(c||b)d=Ch(d,Rc(c,b));b=J("li",m("msgs1"),d);for(c=0;4>c;c++)a&1<<c&&(Uc(b,c).style.cssText="margin-left:8px;margin-bottom:-1px");Uh()};
window.cnsoSPmsg=function(a,b,c){a=L(a);if(c||b)a=Ch(a,Rc(c,b));m("msgs1").innerHTML+="<li>"+a+"</li>";Uh()};window.cnsoSP2msg=function(){J("li",m("msgs1")).textContent=Nd;Uh()};function Gd(a){for(var b,c="",d=0;b=a[d++];)c+=String.fromCharCode(b);return c}function Rh(a,b){0>a?(cd.value=100,cd.max=100,ed.innerHTML=L(40)):(cd.value=a,0>b?(cd.max=100,cd.value=1):cd.max=b,ed.innerHTML=~~a+"/"+b)}window.showHealthOne=Rh;function Og(){}new Float32Array(8);var Vh,Wh,Xh,Yh,Zh,$h,tc=1,lf,qf,of,ai,bi,ci,di,ei,fi,hh,gi,hi,ii,ji,ki,li;new Float32Array(12);var z,mi;function Zb(a,b){return new Uint32Array(window.wasmMemory.buffer,a,b)}function ni(a,b){return new Float32Array(window.wasmMemory.buffer,a,b)}function ac(a,b){return new Int32Array(window.wasmMemory.buffer,a,b)}function oi(a,b){return new Int8Array(window.wasmMemory.buffer,a,b)}function Hd(a,b){return new Uint16Array(window.wasmMemory.buffer,a,b)}
function Jh(a,b){return new Uint8Array(window.wasmMemory.buffer,a,b)}function Yf(){if(!O){for(var a=hd.Mb.length=0,b=fd.length;a<b;a++){var c=fd[a];c.className="blocked";c.style.background="none";c.innerHTML=""}hd.Ma.className="blocked";hd.Ja.className="blocked";hd.Ab.className="blocked";hd.Ec=1}}window.cleanMenuIcons=Yf;
window.buttonSetup=function(a,b,c,d,e,g,h,k,p,r,t,u){var v=fd[a];v.Cc=t;v&&!u&&(v.style.cssText="background-position:0px "+48*b+"px;"+(e&&"background-image:url(nehhon/iconunits.webp)"||""),c&&(v.className=""),g&&(v.className="dis"),1==p&&(v.className="invd"),2==p&&(v.className="uinv"),!k&&0<d?(b="",1073741824<d&&(1073741825<d&&(b=d-1073741824+"x"),d=`<span><span>${b}</span>\u221e</span>`),pi(v,d)):k&&1073741824<d&&pi(v,"..."),h&&1<r&&h!=2**31-1&&J("p",v,h+L([837,838,839][h-1]||840)),1==h?v.className=
"crnt":1<h&&(v.className="crnt1"),void 0!=If&&If==a&&(gd.innerHTML="",v.onmouseenter()))};var Rf,R,U,qi,Qf,ri,si,ti,ui,vi,wi,xi,yi,zi,Ai,Bi,Ci,Di,Ei,Fi,Gi,Hi,Ii;window.gameOver=function(){wc();Pc(`<img src="nehhon/F.png" style="width:404px;image-rendering:auto;margin-bottom:15px;filter:drop-shadow(0px 0px 16px #000)"><h2>F</h2><p>${L(386)} ${L(387)}</p>`,1).id="F"};
window.playerWon=function(){wc();Pc(`<img src="nehhon/F.png" style="width:404px;image-rendering:auto;margin-bottom:15px;filter:drop-shadow(0px 0px 16px #000)"><h2>${L(388)} ${L(389)}</h2>`,1).id="F"};function Ji(a,b){var c=4*Zh,d=z.createBuffer();d.size=b;d.uc=c;z.bindBuffer(z.ARRAY_BUFFER,d);z.enableVertexAttribArray(a);z.vertexAttribPointer(a,b,z.FLOAT,!1,0,0);z.bufferData(z.ARRAY_BUFFER,c*b,z.STATIC_DRAW);Ca?Ki.vertexAttribDivisorANGLE(a,1):z.vertexAttribDivisor(a,1);return d}
function Li(a,b){var c=b+4E4;b*=4;c*=4;if(Ca)z.bindBuffer(z.ARRAY_BUFFER,a),z.bufferData(z.ARRAY_BUFFER,c*a.size,z.STATIC_DRAW),D[146]();else{var d=z.createBuffer();z.bindBuffer(z.COPY_READ_BUFFER,a);z.bindBuffer(z.ARRAY_BUFFER,d);z.bufferData(z.ARRAY_BUFFER,b*a.size,z.STATIC_DRAW);z.copyBufferSubData(z.COPY_READ_BUFFER,z.ARRAY_BUFFER,0,0,b*a.size);z.bindBuffer(z.COPY_READ_BUFFER,d);z.bindBuffer(z.ARRAY_BUFFER,a);z.bufferData(z.ARRAY_BUFFER,c*a.size,z.STATIC_DRAW);z.copyBufferSubData(z.COPY_READ_BUFFER,
z.ARRAY_BUFFER,0,0,b*a.size);z.bindBuffer(z.COPY_READ_BUFFER,null);z.deleteBuffer(d)}}
function rf(a){if(lf)return D[277](1==f.stdcolors);a=Jh(D[17](a),4*(D[28]()+16));z.activeTexture(z.TEXTURE4);var b=z.createTexture();z.bindTexture(z.TEXTURE_2D,b);if(Ca){for(var c=new Uint8Array(16384),d=0;d<c.length;d++)c[d]=a[d];z.texImage2D(z.TEXTURE_2D,0,z.RGBA,64,64,0,z.RGBA,z.UNSIGNED_BYTE,c)}else z.texImage2D(z.TEXTURE_2D,0,z.RGBA,a.length/4,1,0,z.RGBA,z.UNSIGNED_BYTE,a);Mi();z.bindTexture(z.TEXTURE_2D,null);z.bindTexture(z.TEXTURE_2D,b);z.uniform1i(z.getUniformLocation(R,"colorArray"),4);
z.activeTexture(z.TEXTURE2)}window.setupColorGL=rf;var Ni,Oi;window.scrSetup=function(a,b){Sf(Math.floor(a-Tf.width/2),Math.floor(b-Tf.height/2));Og()};function Pi(a,b){return n[8]?`if(u_circle0.z>0.0){
     
        float ct=(now-u_circle0.w);
        if(ct>u_circle1.w) ct=1.0; else ct/=u_circle1.w;
        if(ct<0.0) ct=0.0;
        

            
    ${b?`
    {
    vec2 cx=u_circle0.xy+u_circle1.xy;
    float d=distance(xy,cx),r=u_circle0.z+u_circle1.z+32.0,g=32.0,g2=g/2.0;
    if(d<r&&d>r-g) ${a}.rgb+=vec3(0.5*abs(cos(now*0.005)),0,0)*(1.0-abs(d-(r-g2))/(g2));
        
    }`:""}



    vec2 cx=vec2(u_circle0.xy+u_circle1.xy*ct);
    float d=distance(xy,cx),r=u_circle0.z+u_circle1.z*ct,grad=128.0;
    if(d>r){
    
        vec3 iv=${a}.rgb;
        float v=0.3*(1.0+cos(${b?"d*0.08+now*0.005":"d*0.08+now*0.005+.9"}))+.4;
        vec3 v3=vec3(v,0.0,0.0);
        float r=(d-r)/grad;
        if(r>1.0) r=1.0;
        ${a}.rgb=iv*v3*r+(1.0-r)*${a}.rgb;
    
    }

    }`:""}function Qi(){let a=window.devicePixelRatio;1>a&&(a=1);return a}var Ca,Da,Ri;
window.setupGL=function(a,b){Da=b;tc=1;var c=parseInt(f.fogRefresh);if(!lf){z.getError()===z.CONTEXT_LOST_WEBGL&&(z=Tf.getContext("webgl2",{antialias:!1,alpha:!1}));Ca&&3==c&&(c=2);Ri=3==c&&b;if(!Ti){W=parseFloat(f.antialiasing2)||1;Ui=1<W;var d=Math.round(25*parseInt(f.pixelDensity1/25))/100||Qi();1>d&&(W=1,Ui=!1);d&&!Ui&&(Tf.style.width="100%");W*=d;R=z.createProgram();U=z.createProgram();d=n[8];var e=n[43];d&&(Vi=1E3*n[14]);d=d?"\n    uniform vec4 u_circle0;\n    uniform vec4 u_circle1;\n    uniform float now;\n    ":
"";var g="texture";Ca&&(g="texture2D");e=b?`float fogval(vec2 xy){
    float v=${g}(fogMap,xy).r*255.0+${g}(fogMap,xy).a*2550.0;
    ${e?"if(v==0.0) v=1.0;":""}
    return v;
    }`:"";g=Ca?`precision highp float;
attribute vec3 a_position;
attribute vec4 a_texCoord;
attribute vec4 a_physic;
attribute vec4 a_margins;
attribute float a_step;

uniform float zoom;
uniform mediump int miniMap;
uniform float now;
uniform vec2 u_resolution;
uniform vec2 u_translation;
uniform sampler2D u_image1;
uniform sampler2D delay;
uniform sampler2D colorArray;
uniform float mapSize;
uniform mediump int hideTrees;
uniform float TSIZE;

uniform float zMax;
varying highp vec2 vTextureCoord;
varying vec4 v_kcolor;
varying float WIDTH;
varying float rColor;
varying float oy;


float delayr(float pos){
highp vec2 xy = vec2(mod(pos,128.0) ,   floor(pos/128.0) )/128.0;
return (texture2D(delay, xy).r);
}


void main() {
    float t;
    highp float jump=0.0;

    highp vec2 txtcord;
    txtcord.y=floor(a_texCoord.x);
    txtcord.x=a_texCoord.x-txtcord.y;
    txtcord.y/=TSIZE;

    float zcol=a_texCoord.z;
    vec2 sizes = vec2(a_margins[0],a_margins[1]);
    if(miniMap==1){
        if(128.0*sizes.x/(32.0*mapSize)<1.0&&zcol!=4.0) sizes.x = 32.0*mapSize/128.0;
        if(128.0*sizes.y/(32.0*mapSize)<1.0&&zcol!=4.0) sizes.y = 32.0*mapSize/128.0;
    } 

    float pack=floor(a_texCoord[3]);


    float frames=floor((pack)/65536.0);
    float fps=mod(pack,65536.0);

    if(frames>100.0) {
        if(frames<200.0) rColor=1.0; else rColor=2.0;
        frames-=100.0;
    }


if(fps!=0.0&&miniMap==0){
if(a_texCoord.y>=0.0){
t=(now-a_texCoord.y);
if(fps<100.0){
jump=floor(t * fps*0.001);
}else{

    //fps=12.0;
    //jump=floor(t * fps*0.001);



    float index=floor(fps-100.0);

    float spt= mod(t,delayr(frames-1.0+index));
    bool stop=false;
        for(int i=0;i<55;i++){
        if(!stop){
        jump=float(i);
        if(jump<frames)
        if(delayr(jump+index)>spt)
        stop=true;
        }
        }

}

jump=mod(jump,frames);
txtcord.x+=jump*sizes.x*sizes.y/TSIZE;
txtcord.y+=floor(txtcord.x)/TSIZE;
txtcord.x=mod(txtcord.x,1.0);
}
}


    vec2 mxy=vec2(0.0);

    if(miniMap==3){
        if(a_margins[3]==0.0){
            sizes=vec2(0.0);
            return;
        }else{
        mxy=sizes/2.0;
        sizes=vec2(a_margins[3]*32.0);
        mxy+=-sizes;
        sizes=sizes*2.0+1.0;
        }
    }

    float scale=1.0;
    if(a_margins.z<-1.0){
    scale=-a_margins.z;
    }


    oy=txtcord.y*TSIZE;


    vec2 tsizes=sizes;
    if(sizes.x<0.0){
        sizes.x*=-1.0;
        tsizes=vec2(64.0)*scale;
    }else sizes/=scale;
    WIDTH=tsizes.x;

    if(a_step==1.0||a_step==3.0){
    mxy.x+=sizes.x;
    txtcord.x+=tsizes.x/TSIZE;
    }

    if(a_step==2.0||a_step==3.0){
    mxy.y+=sizes.y;
    txtcord.y+=tsizes.y/TSIZE;
    }


    if(miniMap==3&&sizes==vec2(0.0)){
        mxy=vec2(0.0);
    }

	float z=a_position.z;



	if(z<0.0&&z!=-55.0){
	z*=-1.0;
    if(miniMap<2) mxy*=0.0;
	}



if(a_margins.z>0.0){
	float s = sin(a_margins.z-10.0);
	float c = cos(a_margins.z-10.0);
	mat2 m = mat2(c, -s, s, c);
	mxy.xy*=m;
}



    t = (now - a_physic.w) * 0.001;
    mxy.x+=a_physic.x * t;

	float physicY=a_physic.y * t + a_physic.z * .5 * t * t;

    mxy.y+=physicY;

vec2 res=u_resolution;
if(miniMap!=0){
    z=-1.0;
    res=vec2(mapSize*32.0);
}else{
	z=(1.0 - (physicY+z)/ zMax)*.9;
}


vec2 zm=vec2(zoom, -zoom);
if(a_position.z!=-55.0)
mxy+=u_translation;
else {
z=0.0;
zm=vec2(1.0,-1.0);
WIDTH*=-1.0;
mxy*=${W.toFixed(4)};
}

    if(hideTrees==1&&(zcol==4.0||zcol==7.0)||miniMap==1&&zcol==15.0) return;

   gl_Position = vec4(((a_position.xy+mxy) / res * 2.0 - 1.0) * zm, (z), 1.0);
   vTextureCoord=txtcord;




vec4 outColor=texture2D(colorArray,vec2(zcol/64.0,0));
//outColor=vec4(1.0);

if(a_texCoord.z<16.0) outColor.a+=1.0;


   v_kcolor=outColor;
}
`:`#version 300 es
precision highp float;

in vec3 a_position;
in vec4 a_texCoord;
in vec4 a_physic;
in vec4 a_margins;
in uint a_step;

uniform float zoom;
uniform mediump int miniMap;
uniform float now;
uniform mediump int hideTrees;
uniform vec2 u_resolution;
uniform vec2 u_translation;
uniform sampler2D delay;
uniform sampler2D colorArray;
uniform float mapSize;
uniform float TSIZE;


uniform float zMax;
out highp vec2 vTextureCoord;
out vec4 v_kcolor;
out float oy;
out float WIDTH;

${Ri&&"out vec2 oriXY;"||""}


flat out int rColor;

vec4 superArray(in highp int position) {
     return vec4(0.0);
}

void main() {
float t;

highp vec2 txtcord;
txtcord.y=floor(a_texCoord.x);
txtcord.x=floor((a_texCoord.x-txtcord.y)*TSIZE);
//txtcord.y/=TSIZE;

float zcol=a_texCoord.z;

vec2 sizes = vec2(a_margins[0],a_margins[1]);
if(miniMap==1){
    if(128.0*sizes.x/(32.0*mapSize)<1.0&&zcol!=4.0) sizes.x = 32.0*mapSize/128.0;
    if(128.0*sizes.y/(32.0*mapSize)<1.0&&zcol!=4.0) sizes.y = 32.0*mapSize/128.0;
} 
int pack=int(floor(a_texCoord[3]));

int frames=(pack>>16)&0xffff;
float fps=float(pack&0xffff);


if(frames>100) {
if(frames<200) rColor=1; else rColor=2;
frames-=100;
}

int jump=0;
if(fps!=0.0&&miniMap==0){
if(a_texCoord.y>=0.0){
t=(now-a_texCoord.y);
if(fps<100.0){
jump=int(floor(t * fps*0.001));
}else{


int index=int(floor(fps-100.0));

float spt= mod(t,texelFetch(delay, ivec2(frames-1+index, 0), 0).r);

for(jump=0;jump<frames;jump++)
if(texelFetch(delay, ivec2(jump+index, 0), 0).r>spt){
break;
}




}

jump=(jump%frames);


txtcord.x+=float(jump)*sizes.x*sizes.y;
txtcord.y+=floor(txtcord.x/TSIZE);
txtcord.x=mod(txtcord.x,TSIZE);
}



}

vec2 mxy=vec2(0.0);
vec2 posORI;
${Ri&&`
    if(miniMap==3){
        if(a_margins[3]==0.0){
            sizes=vec2(0.0);
            return;
        }else{
        //mxy=sizes/2.0;
        int sight=int(a_margins[3]);
        sizes=vec2(32*(sight&0xff)${1==b&&"+16"||""});
        float mg=float((sight>>8)&0xff);
        float my=floor(mg/10.0);
        posORI=+32.0*vec2(mg-my*10.0,my)+vec2(16)  -(a_position.xy-32.0*floor(a_position.xy/32.0));
        mxy+=posORI;
        mxy+=-sizes;
        sizes=sizes*2.0;
        }
    }
    `||""}

    float scale=1.0;
    if(a_margins.z<-1.0){
    scale=-a_margins.z;
    }



    oy=txtcord.y;

    vec2 tsizes=sizes;
    if(sizes.x<0.0){
        sizes.x*=-1.0;
         tsizes=vec2(64.0)*scale;
    }
    else sizes/=scale;

    WIDTH=tsizes.x;

    if(a_step==1u||a_step==3u){
    mxy.x+=sizes.x;
    txtcord.x+=tsizes.x;
    }

    if(a_step==2u||a_step==3u){
    mxy.y+=sizes.y;
    txtcord.y+=tsizes.y;
    }



	float z=a_position.z;




if(miniMap==3&&sizes==vec2(0.0)){
    mxy=vec2(0.0);
}

	if(z<0.0&&z!=-55.0){
	z*=-1.0;
if(miniMap!=2) mxy*=0.0;
	}






if(a_margins.z>0.0){
    float deg=a_margins.z-10.0;
	float s = sin(deg);
	float c = cos(deg);
	mat2 m = mat2(c, -s, s, c);
	mxy.xy*=m;
}



    t = (now - a_physic.w) * 0.001;
   
    float physicY=a_physic.y * t + a_physic.z * .5 * t * t;
    vec2 vxy=vec2(a_physic.x * t,physicY);
    mxy+=vxy;

    vec2 res=u_resolution;

if(miniMap==1||miniMap==2){
    z=-1.0;
    res=vec2(mapSize*32.0);
}else{
	z=(1.0 - (physicY+z)/ zMax)*.9;
}


vec2 zm=vec2(zoom, -zoom);
if(a_position.z!=-55.0)
mxy+=u_translation;
else {
z=0.0;
WIDTH*=-1.0;
zm=vec2(1.0,-1.0);
mxy*=${W.toFixed(4)};
}


if(hideTrees==1&&(zcol==4.0||zcol==7.0)||miniMap==1&&zcol==15.0||zcol==8.0) return;

   gl_Position = vec4(((a_position.xy+mxy) / res * 2.0 - 1.0)*zm, (z), 1.0);
   vTextureCoord=txtcord;


vec4 outColor=texelFetch(colorArray, ivec2(zcol, 0), 0);


${Ri&&"oriXY=(a_position.xy)+posORI+vxy;"||""}

if(a_texCoord.z<16.0) outColor.a+=1.0;


   v_kcolor=outColor;
}
`;var h=z.createShader(z.VERTEX_SHADER);z.shaderSource(h,g);z.compileShader(h);var k=z.createShader(z.FRAGMENT_SHADER);z.shaderSource(k,Ca?`precision highp float;
        uniform float zoom;
        uniform vec2 u_translation;
        uniform float mapSize;
        uniform sampler2D fogMap;
        uniform float TSIZE;

uniform vec2 u_resolution;
uniform sampler2D img_common[8];
uniform vec4 u_ambient;
${b&&"uniform float miniMapSize;"||""}
uniform vec2 minimapMargin;

uniform mediump int miniMap;
varying vec4 v_kcolor;
varying highp vec2 vTextureCoord;
varying float WIDTH;
varying float oy;
varying float rColor;

${e}

${d}


bool v4no(vec4 color,int r){
if(color.r==float(r)/255.0) return false;
return true;
}

vec4 tcmm(vec2 coords){
if(coords.y<1.0)
return texture2D(img_common[0], coords);
else if(coords.y<2.0)
return texture2D(img_common[1], coords);
else if(coords.y<3.0)
return texture2D(img_common[2], coords);
else if(coords.y<4.0)
return texture2D(img_common[3], coords);
else if(coords.y<5.0)
return texture2D(img_common[4], coords);
else if(coords.y<6.0)
return texture2D(img_common[5], coords);
else if(coords.y<7.0)
return texture2D(img_common[6], coords);
else if(coords.y<8.0)
return texture2D(img_common[7], coords);
}


void main() {

    bool free=false;
    float width=WIDTH;
    if(width<0.0) width*=-1.0,free=true;
    vec4 light = u_ambient;

    vec2 xy;
    if(miniMap!=3){

        
        if(miniMap==1){
            xy=vec2(gl_FragCoord.x,u_resolution.y-gl_FragCoord.y)/zoom;
            xy+=minimapMargin/zoom;
        }else{
        xy=vec2(gl_FragCoord.x,u_resolution.y-gl_FragCoord.y)/zoom-u_translation+0.5*(u_resolution-u_resolution/zoom);
        //xy.y*=-1.0;
        }

        ${b&&`if(miniMap<2&&zoom>0.0&&!free){
            float div= miniMap==0 ? mapSize*32.0 : miniMapSize;
            float fog=fogval(xy/div);
            if(fog==0.0) discard;
            
            float mulp=1.0,mulp2=1.0;

            if(miniMap==0){
            vec2 dec=xy/32.0, cnt=floor(dec)+.5;
            float sq8[16];
            sq8[0]=1.0;sq8[1]=0.0;sq8[2]=0.0;sq8[3]=-1.0;sq8[4]=-1.0;sq8[5]=0.0;sq8[6]=0.0;sq8[7]=1.0;sq8[8]=1.0;sq8[9]=1.0;sq8[10]=1.0;sq8[11]=-1.0;sq8[12]=-1.0;sq8[13]=-1.0;
            sq8[14]=-1.0;sq8[15]=1.0;

            for(int i=0;i<8;i++){
            vec2 pos=dec+vec2(sq8[i*2],sq8[i*2+1]);
            float g=fogval(pos/mapSize);
            if(fog>0.0&&g==0.0||fog>1.0&&g==1.0){
                vec2 ori=cnt+vec2(sq8[i*2],sq8[i*2+1])*.5;
                vec2 dif=ori-dec;
                if(sq8[i*2]==0.0)   dif.x=0.0;
                if(sq8[i*2+1]==0.0) dif.y=0.0;
                float dist=sqrt(dot(dif,dif));
                if(dist<1.0){
                    if(fog>0.0&&g==0.0) mulp*=dist;
                    else mulp2*=dist;
                }
            }
            }
            
            if(mulp2<1.0) mulp2+=.4;
            if(mulp2>1.0) mulp2=1.0;
        

          
            ${2==b&&"light.rgb*=mulp2;if(fog==1.0) light.rgb*=.4;"||""}
        }
            light.rgb*=mulp;
            }`||""}



        

    }


if(miniMap==0){


    float dy=floor(vTextureCoord.y*TSIZE-oy);
    highp vec2 txtCoords=vec2(vTextureCoord.x+dy*width/TSIZE,oy/TSIZE);
    txtCoords.y+=floor(txtCoords.x)/TSIZE;

    vec4 color=tcmm(txtCoords);
    //if(color==vec4(0.0,0.0,0.0,1.0)) discard;

    if(rColor==2.0) color.a=(color.r+color.g+color.b)/2.5;
    if(color.a==0.0) discard;

if(rColor==1.0 &&color.r==color.g&&color.r==color.b)
color.rgb*=v_kcolor.rgb*1.4;


if(v_kcolor.a>1.0) color*=v_kcolor-vec4(0.0,0.0,0.0,1.0);

if(!free){
${Pi("light")}
    }

//vec4 light=vec4(1.0);

gl_FragColor=color*light;
}else if(miniMap<3){

if(floor(v_kcolor.a*255.0-255.0+.5)==126.0) discard;
if(v_kcolor.a>1.0)
gl_FragColor=v_kcolor-vec4(0.0,0.0,0.0,1.0);
else
gl_FragColor=v_kcolor;


gl_FragColor*=light;
}else{
gl_FragColor=vec4(1.0);
    }

}`:`#version 300 es
precision highp float;


uniform vec2 u_translation;
uniform sampler2D fogMap;

${Ri&&"uniform sampler2D frmBUFFER;"||""}
${Ri&&"in vec2 oriXY;"||""}

uniform vec2 u_resolution;
uniform sampler2D img_common[8];
uniform vec4 u_ambient;
uniform mediump int miniMap;
uniform float mx;

${d}

uniform float mapSize;
uniform float zoom;
${b&&"uniform float miniMapSize;"||""}
uniform float TSIZE;
uniform vec2 minimapMargin;

in vec4 v_kcolor;

in highp vec2 vTextureCoord;
in float WIDTH;
in float oy;
flat in int rColor;
out vec4 COLOR;

${e}


bool v4no(vec4 color,int r){
if(color.r==float(r)/255.0) return false;
return true;
}

vec4 tcmm(vec2 coords1){

int TSIZEI=int(TSIZE);

ivec2 coords=ivec2(int(coords1[0])%TSIZEI,int(coords1[1]));
int Y=coords.y;
coords.y%=TSIZEI;

if(Y<TSIZEI)
return texelFetch(img_common[0], coords,0);
else if(Y<2*TSIZEI)
return texelFetch(img_common[1], coords,0);
else if(Y<3*TSIZEI)
return texelFetch(img_common[2], coords,0);
else if(Y<4*TSIZEI)
return texelFetch(img_common[3], coords,0);
else if(Y<5*TSIZEI)
return texelFetch(img_common[4], coords,0);
else if(Y<6*TSIZEI)
return texelFetch(img_common[5], coords,0);
else if(Y<7*TSIZEI)
return texelFetch(img_common[6], coords,0);
else if(Y<8*TSIZEI)
return texelFetch(img_common[7], coords,0);
}



void main() {

vec4 light = u_ambient;
bool free=false;
float width=WIDTH;
if(width<0.0) width*=-1.0,free=true;

vec2 xy;
if(miniMap==1){
xy=vec2(gl_FragCoord.x,u_resolution.y-gl_FragCoord.y)/zoom;
xy+=minimapMargin/zoom;
}else{
xy=vec2(gl_FragCoord.x,u_resolution.y-gl_FragCoord.y)/zoom-u_translation+0.5*(u_resolution-u_resolution/zoom);
//xy.y*=-1.0;
    }

    ${Ri&&"if(miniMap==3){\n    vec2 xy=vec2(gl_FragCoord.x,u_resolution.y-gl_FragCoord.y)/zoom-u_translation+0.5*(u_resolution-u_resolution/zoom);\n\n    float dist=2.0*distance(xy,oriXY);\n    if(dist>width) discard;\n    const float tr=64.0;\n\n    if(width-dist<tr)\n    COLOR=vec4(width-dist)/tr;\n    else\n    COLOR=vec4(1.0);\n    \n    return;}"||""}



${b&&`if(miniMap<2&&zoom>0.0&&!free){
float div= miniMap==0 ? mapSize*32.0 : miniMapSize;
float fog=fogval(xy/div);


${Ri&&`
float Hfog;

if(miniMap==0){
Hfog=texture(frmBUFFER,vec2(gl_FragCoord.x/u_resolution.x,(-u_resolution.y+gl_FragCoord.y)/u_resolution.y)).r;
${3==b&&"light*=Hfog,1.0;"||""}
if(fog>1.0) fog=1.0;
}
`||""}

if(fog==0.0${Ri&&"&&Hfog==0.0"||""}) discard;


float mulp=1.0,mulp2=1.0;
if(miniMap==0){
vec2 dec=xy/32.0, cnt=floor(dec)+.5;
const float sq8[16]=float[](1.0,0.0, 0.0,-1.0, -1.0,0.0, 0.0,1.0, 1.0,1.0,1.0,-1.0, -1.0,-1.0,-1.0,1.0);
for(int i=0;i<8;i++){
vec2 pos=dec+vec2(sq8[i*2],sq8[i*2+1]);
float g=fogval(pos/mapSize);
if(fog>0.0&&g==0.0||fog>1.0&&g==1.0){
    vec2 ori=cnt+vec2(sq8[i*2],sq8[i*2+1])*.5;
    vec2 dif=ori-dec;
    if(sq8[i*2]==0.0)   dif.x=0.0;
    if(sq8[i*2+1]==0.0) dif.y=0.0;
    float dist=sqrt(dot(dif,dif));
    if(dist<1.0){
        if(fog>0.0&&g==0.0) mulp*=dist;
        else mulp2*=dist;
    }
}
}

if(mulp2<1.0) mulp2+=.4;
if(mulp2>1.0) mulp2=1.0;
    }
${2==b&&"if(fog==1.0&&miniMap==0) mulp2*=.4; mulp*=mulp2;"||""}

${Ri&&"\nif(miniMap==0){\nif(Hfog>0.0) mulp=max(Hfog,mulp);\nif(Hfog>0.0&&fog==0.0) mulp=Hfog;\n}\n"||""}

light.rgb*=mulp;

}`||""}










//



if(miniMap==0){


float dy=floor(vTextureCoord.y-oy);
highp vec2 txtCoords=vec2(vTextureCoord.x+dy*width,oy);
txtCoords.y+=floor(txtCoords.x/TSIZE);


vec4 color=tcmm(txtCoords);
//if(color==vec4(0.0,0.0,0.0,1.0)) discard;

if(rColor==2) color.a=(color.r+color.g+color.b)/2.5;
if(color.a==0.0) discard;



if(rColor==1&&color.r==color.g&&color.r==color.b) color.rgb*=v_kcolor.rgb*1.4;


if(v_kcolor.a>1.0)
{
color*=v_kcolor-vec4(0.0,0.0,0.0,1.0);
}



COLOR=color*light;


if(!free){
${Pi("COLOR")}
}

}else if(miniMap<3){
if(floor(v_kcolor.a*255.0-255.0+.5)==126.0) discard;
if(v_kcolor.a>1.0)
COLOR=v_kcolor-vec4(0.0,0.0,0.0,1.0);
else
COLOR=v_kcolor;



COLOR*=light;
}else{

COLOR=vec4(1.0);

}




}`);z.compileShader(k);z.attachShader(R,h);z.attachShader(R,k);z.linkProgram(R);z.useProgram(R);(h=z.getShaderInfoLog(h))&&console.log("Shader compiler log1: "+h,g);(h=z.getShaderInfoLog(k))&&console.log("Shader compiler log1: "+h);k=z.createShader(z.VERTEX_SHADER);z.shaderSource(k,Ca?"precision highp float;\nattribute vec3 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_translation;\nuniform mediump int miniMap;\nuniform float zoom;\n\nvoid main() {\nfloat depth;\nif(miniMap!=0){\ndepth=-0.9;\n}else{\ndepth=1.0;\n}\ngl_Position = vec4(a_position.x, a_position.y, depth, 1.0);\n\n}":
"#version 300 es\nprecision highp float;\nin vec3 a_position;\nuniform vec2 u_resolution;\nuniform vec2 u_translation;\nuniform mediump int miniMap;\nuniform float zoom;\n\nvoid main() {\nfloat depth;\nif(miniMap!=0){\ndepth=-0.9;\n}else{\ndepth=1.0;\n}\ngl_Position = vec4(a_position.x, a_position.y, depth, 1.0);\n\n}");z.compileShader(k);g=z.createShader(z.FRAGMENT_SHADER);z.shaderSource(g,Ca?`precision highp float;

uniform float u_fps;
uniform mediump int miniMap;
uniform sampler2D img_common[7];
uniform vec4 u_ambient;
uniform vec2 u_translation;
uniform vec2 u_resolution;
uniform vec2 minimapMargin;
uniform sampler2D img_data;
uniform sampler2D fogMap;
uniform float zoom;
uniform float mx;
uniform float mapSize;
uniform float mapSize2;

${e}

${d}


uniform float TSIZE;

uniform float scale;

uniform sampler2D u_image1;

vec2 oneD2D(highp float xy,float sumx, float sumy, float w){
    float x=mod(xy,TSIZE)+sumx+sumy*w;
    float y=floor(xy/TSIZE)+floor(x/TSIZE);
    return vec2(x, y)/(TSIZE);
}


vec4 tcmm(vec2 coords){
    if(coords.y<1.0)
    return texture2D(img_common[0], coords);
    else if(coords.y<2.0)
    return texture2D(img_common[1], coords);
    else if(coords.y<3.0)
    return texture2D(img_common[2], coords);
    else if(coords.y<4.0)
    return texture2D(img_common[3], coords);
    else if(coords.y<5.0)
    return texture2D(img_common[4], coords);
    else if(coords.y<6.0)
    return texture2D(img_common[5], coords);
    else if(coords.y<7.0)
    return texture2D(img_common[6], coords);
    }
void main() {
vec4 color;


vec2 xy =  vec2(gl_FragCoord.x,u_resolution.y-gl_FragCoord.y)/zoom;

if(miniMap!=0){
xy+=minimapMargin/zoom;
}else{
xy+=-u_translation+vec2(mx,0.0)/zoom+0.5*(u_resolution-u_resolution/zoom);
}

if(xy.x<0.0||xy.y<0.0||xy.x>mapSize2*32.0||xy.y>mapSize2*32.0) discard;

vec4 coords=texture2D(img_data,(floor(xy/32.0)+vec2(.5))/(mapSize));
highp float tid;

vec4 nrgb=vec4(0.0,0.0,0.0,0.0);
vec2 xym32=vec2(floor(mod(xy.x,32.0)),floor(mod(xy.y,32.0)));
float wids=floor(coords[3]);

float w;
if(coords[2]!=0.0) {
    float w3=floor(wids/65536.0)*32.0;

    nrgb=tcmm(oneD2D(coords[2],xym32.x,xym32.y,w3));

}


if(nrgb==vec4(1.0,0.0,1.0,1.0)) {
w=mod(floor(wids/256.0),256.0);
tid=coords[1];
}
else{
tid=coords[0];
w=mod(wids,256.0);
}


if(nrgb!=vec4(0.0,0.0,0.0,0.0)&&nrgb!=vec4(1.0,0.0,1.0,1.0)){
 color=nrgb;
}else{
w*=32.0;
if(w==0.0){
    w=512.0;
    xym32.x+=w*w*u_fps;
}
color=tcmm(oneD2D(tid,scale*xym32.x,scale*xym32.y,w));

}

if(miniMap==0) color*=u_ambient;

${b&&`
float fog=fogval(xy/(mapSize2*32.0));
if(fog==0.0) color.rgb*=0.0;
else{
float mulp=1.0,mulp2=1.0;


if(miniMap==0){
vec2 dec=xy/32.0, cnt=floor(dec)+.5;
float sq8[16];
sq8[0]=1.0;sq8[1]=0.0;sq8[2]=0.0;sq8[3]=-1.0;sq8[4]=-1.0;sq8[5]=0.0;sq8[6]=0.0;sq8[7]=1.0;sq8[8]=1.0;sq8[9]=1.0;sq8[10]=1.0;sq8[11]=-1.0;sq8[12]=-1.0;sq8[13]=-1.0;
sq8[14]=-1.0;sq8[15]=1.0;


for(int i=0;i<8;i++){
vec2 pos=dec+vec2(sq8[i*2],sq8[i*2+1]);
float g=fogval(pos/mapSize2);
if(fog>0.0&&g==0.0||fog>1.0&&g==1.0){
    vec2 ori=cnt+vec2(sq8[i*2],sq8[i*2+1])*.5;
    vec2 dif=ori-dec;
    if(sq8[i*2]==0.0)   dif.x=0.0;
    if(sq8[i*2+1]==0.0) dif.y=0.0;
    float dist=sqrt(dot(dif,dif));
    if(dist<1.0){
        if(fog>0.0&&g==0.0) mulp*=dist;
        else mulp2*=dist;
    }
}
}

if(mulp2<1.0) mulp2+=.4;
if(mulp2>1.0) mulp2=1.0;
}
color.rgb*=mulp;
${2==b&&"color.rgb*=mulp2;"||""}
}

${2==b&&"if(fog==1.0) color.rgb*=.4;"||""}
`||""}


${Pi("color",1)}


gl_FragColor=color;
}`:`#version 300 es
precision highp float;

uniform float u_fps;
uniform mediump int miniMap;
uniform sampler2D img_common[7];
uniform vec4 u_ambient;
uniform float TSIZE;
${d}

uniform vec2 u_translation;

uniform vec2 u_resolution;
uniform vec2 minimapMargin;
uniform sampler2D img_data;
uniform sampler2D fogMap;
${Ri&&"uniform sampler2D frmBUFFER;"||""}

out vec4 COLOR;
uniform float zoom;
uniform float mx;
uniform float mapSize;

uniform float scale;

${e}

vec2 oneD2D(highp float xy,float sumx, float sumy, float w){
    float x=mod(xy,TSIZE)+sumx+sumy*w;
    float y=floor(xy/TSIZE)+floor(x/TSIZE);
    return vec2(x, y)/(TSIZE);
}

vec4 tcmm(vec2 coords){
    if(coords.y<1.0)
    return texture(img_common[0], coords);
    else if(coords.y<2.0)
    return texture(img_common[1], coords);
    else if(coords.y<3.0)
    return texture(img_common[2], coords);
    else if(coords.y<4.0)
    return texture(img_common[3], coords);
    else if(coords.y<5.0)
    return texture(img_common[4], coords);
    else if(coords.y<6.0)
    return texture(img_common[5], coords);
    else if(coords.y<7.0)
    return texture(img_common[6], coords);
    }

void main() {
vec4 color;


vec2 xy = vec2(gl_FragCoord.x,u_resolution.y-gl_FragCoord.y)/zoom;
if(miniMap!=0){
xy+=minimapMargin/zoom;
}else{
xy+=-u_translation+vec2(mx,0.0)/zoom+(u_resolution-u_resolution/zoom)/2.0;
}

if(xy.x<0.0||xy.y<0.0||xy.x>mapSize*32.0||xy.y>mapSize*32.0){
    COLOR=vec4(0.07,0.07,0.07,1.0);
    return;
}

vec4 coords=texture(img_data,(floor(xy/32.0)+vec2(.5))/(mapSize));
highp float tid;

vec4 nrgb=vec4(0.0,0.0,0.0,0.0);

vec2 xym32=mod(floor(xy),32.0);
int wids=int(floor(coords[3]));

float w;
if(coords[2]!=0.0) {
    float w3=float((wids>>16)&0xff)*32.0;
    nrgb=tcmm(oneD2D(coords[2],xym32.x,xym32.y,w3));

}

if(nrgb==vec4(1.0,0.0,1.0,1.0)) {
w=float((wids>>8)&0xff);
tid=coords[1];
}
else{
tid=coords[0];
w=float(wids&0xff);
}

if(nrgb!=vec4(0.0,0.0,0.0,0.0)&&nrgb!=vec4(1.0,0.0,1.0,1.0)){
color=nrgb;
}else{
w*=32.0;
if(w==0.0){
     w=512.0;
     xym32.x+=w*w*u_fps;
}

color=tcmm(oneD2D(tid,scale*xym32.x,scale*xym32.y,w));

}

if(miniMap==0) color*=u_ambient;

${b&&`

float fog=fogval(xy/(32.0*mapSize));

${Ri&&`
float Hfog;

if(miniMap==0){
Hfog=texture(frmBUFFER,vec2(gl_FragCoord.x/u_resolution.x,(-u_resolution.y+gl_FragCoord.y)/u_resolution.y)).r;
${3==b&&`COLOR=vec4(color.rgb*Hfog,1.0);${Pi("COLOR",1)}return;`||""}
if(fog>1.0) fog=1.0;
}
`||""}



if(fog==0.0${Ri&&"&&Hfog==0.0"||""}) color.rgb*=0.0;
else {
float mulp=1.0,mulp2=1.0;

if(miniMap==0){
vec2 dec=xy/32.0, cnt=floor(dec)+.5;
const float sq8[16]=float[](1.0,0.0, 0.0,-1.0, -1.0,0.0, 0.0,1.0, 1.0,1.0,1.0,-1.0, -1.0,-1.0,-1.0,1.0);


for(int i=0;i<8;i++){
vec2 pos=dec+vec2(sq8[i*2],sq8[i*2+1]);
float g=fogval(pos/mapSize);
if(fog>0.0&&g==0.0||fog>1.0&&g==1.0){
    vec2 ori=cnt+vec2(sq8[i*2],sq8[i*2+1])*.5;
    vec2 dif=ori-dec;
    if(sq8[i*2]==0.0)   dif.x=0.0;
    if(sq8[i*2+1]==0.0) dif.y=0.0;
    float dist=sqrt(dot(dif,dif));
    if(dist<1.0){
        if(fog>0.0&&g==0.0) mulp*=dist;
        else mulp2*=dist;
    }
}
}

if(mulp2<1.0) mulp2+=.4;
if(mulp2>1.0) mulp2=1.0;
    }
${2==b&&"if(fog==1.0) mulp2*=.4; mulp*=mulp2;"||""}

${Ri&&"\nif(miniMap==0){\nif(Hfog>0.0) mulp=max(Hfog,mulp);\nif(Hfog>0.0&&fog==0.0) mulp=Hfog;\n}\n"||""}
color.rgb*=mulp;
}
`||""}




COLOR=color;


${Pi("COLOR",1)}




}`);z.compileShader(g);z.attachShader(U,k);z.attachShader(U,g);z.linkProgram(U);(h=z.getShaderInfoLog(k))&&console.log("Shader1 compiler log T: "+h);(h=z.getShaderInfoLog(g))&&console.log("Shader compiler log T: "+h)}e=z.getAttribLocation(R,"a_position");g=z.getAttribLocation(R,"a_texCoord");d=z.getAttribLocation(R,"a_step");k=z.getAttribLocation(R,"a_physic");h=z.getAttribLocation(R,"a_margins");z.useProgram(U);Wi=z.getUniformLocation(U,"minimapMargin");Ai=z.getUniformLocation(U,"u_translation");
wi=z.getUniformLocation(U,"u_resolution");vi=z.getUniformLocation(U,"u_fps");ui=z.getUniformLocation(U,"now");Fi=z.getUniformLocation(U,"u_circle0");Gi=z.getUniformLocation(U,"u_circle1");Qf=z.getUniformLocation(U,"u_ambient");Bi=z.getUniformLocation(U,"zoom");xi=z.getUniformLocation(U,"miniMap");Xi(tc);z.uniform1i(xi,0);z.uniform2fv(Ai,[0,0]);z.uniform1f(vi,-1);z.uniform1f(Bi,W);z.uniform1f(z.getUniformLocation(U,"TSIZE"),cc);z.uniform1f(z.getUniformLocation(U,"mx"),0);Ca?(z.uniform1f(z.getUniformLocation(U,
"mapSize"),2**Math.ceil(Math.log2(D[47]()))),z.uniform1f(z.getUniformLocation(U,"mapSize2"),D[47]())):z.uniform1f(z.getUniformLocation(U,"mapSize"),D[47]());z.uniform1f(z.getUniformLocation(U,"scale"),1);Yi=[-l.V*W,-l.W*W];z.uniform2fv(Wi,Yi);var p=z.getAttribLocation(U,"a_position");Ci=Zi();$i(Ci);var r=z.createBuffer();z.bindBuffer(z.ARRAY_BUFFER,r);z.bufferData(z.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,-1,1,-1,1,1,-1,1]),z.STATIC_DRAW);z.enableVertexAttribArray(p);z.vertexAttribPointer(p,2,
z.FLOAT,!1,0,0);$i(null);z.useProgram(R);z.uniform2fv(aj,Yi);z.bindBuffer(z.ARRAY_BUFFER,null);Di=Zi();$i(Di);Ei=z.createBuffer();z.bindBuffer(z.ARRAY_BUFFER,Ei);z.enableVertexAttribArray(d);Ca?(Ki=z.getExtension("ANGLE_instanced_arrays"),z.vertexAttribPointer(d,1,z.FLOAT,!1,0,0),z.bufferData(z.ARRAY_BUFFER,new Float32Array([0,1,2,1,2,3]),z.STATIC_DRAW),Ki.vertexAttribDivisorANGLE(d,0)):(z.vertexAttribIPointer(d,1,z.UNSIGNED_BYTE,0,0),z.bufferData(z.ARRAY_BUFFER,new Uint8Array([0,1,2,1,2,3]),z.STATIC_DRAW),
z.vertexAttribDivisor(d,0));d=D[47]();Zh=a&&a+4E4||Math.floor(d*d/2);Vh=Ji(g,4);Wh=Ji(e,3);Xh=Ji(k,4);Yh=Ji(h,4);$i(null);si=z.getUniformLocation(R,"u_resolution");Rf=z.getUniformLocation(R,"u_ambient");zi=z.getUniformLocation(R,"u_translation");mi=z.getUniformLocation(R,"zoom");ri=z.getUniformLocation(R,"now");Ii=z.getUniformLocation(R,"u_circle0");Hi=z.getUniformLocation(R,"u_circle1");yi=z.getUniformLocation(R,"miniMap");aj=z.getUniformLocation(R,"minimapMargin");b&&(ti=z.getUniformLocation(R,
"miniMapSize"));z.uniform1f(z.getUniformLocation(R,"zMax"),96*D[47]());z.uniform1i(yi,0);z.useProgram(R);a=ni(D[33](),1323);B.Ra||(B.Ra=2880);B.Sa||(B.Sa=12);b=0;for(e=Pf.length;b<e;b++).55>Pf[b]&&(Pf[b]=.55);Ic();z.uniform1f(z.getUniformLocation(R,"mapSize"),D[47]());z.uniform1f(z.getUniformLocation(R,"mx"),-l.R*W);z.uniform1f(mi,W);z.uniform2fv(zi,[0,0]);z.uniform1f(z.getUniformLocation(R,"TSIZE"),cc);window.addEventListener("resize",bj,!1);bj();z.blendEquation(z.FUNC_ADD);z.blendFunc(z.SRC_ALPHA,
z.ONE_MINUS_SRC_ALPHA);z.disable(z.DITHER);z.disable(z.BLEND);performance.now();if(!Ti){rf(1==f.stdcolors);z.activeTexture(z.TEXTURE0);e=z.createTexture();z.bindTexture(z.TEXTURE_2D,e);if(Ca){z.getExtension("OES_texture_float");g=new Float32Array(65536);for(b=0;b<g.length;b++)g[4*b]=a[b];z.texImage2D(z.TEXTURE_2D,0,z.RGBA,128,128,0,z.RGBA,z.FLOAT,g)}else z.texImage2D(z.TEXTURE_2D,0,z.R16F,a.length,1,0,z.RED,z.FLOAT,a);Mi();z.bindTexture(z.TEXTURE_2D,null);z.bindTexture(z.TEXTURE_2D,e);z.uniform1i(z.getUniformLocation(R,
"delay"),0);z.activeTexture(z.TEXTURE2)}cj=z.createTexture();z.bindTexture(z.TEXTURE_2D,cj);z.texImage2D(z.TEXTURE_2D,0,z.LUMINANCE_ALPHA,d,d,0,z.LUMINANCE_ALPHA,z.UNSIGNED_BYTE,null);dj();z.useProgram(U);z.uniform1i(z.getUniformLocation(U,"fogMap"),2);z.useProgram(R);z.uniform1i(z.getUniformLocation(R,"fogMap"),2);Ri&&(z.activeTexture(z.TEXTURE3),qi=z.createTexture(),z.bindTexture(z.TEXTURE_2D,qi),z.texImage2D(z.TEXTURE_2D,0,z.RGBA,1,1,0,z.RGBA,z.UNSIGNED_BYTE,new Uint8Array(4)),Mi(),ej=z.createFramebuffer(),
z.bindFramebuffer(z.FRAMEBUFFER,ej),fj=z.createTexture(),z.bindTexture(z.TEXTURE_2D,fj),a=Ni,b=Oi,z.texImage2D(z.TEXTURE_2D,0,z.RGBA,a,b,0,z.RGBA,z.UNSIGNED_BYTE,null),Mi(),ej.width=a,ej.height=b,z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fj,0),z.bindFramebuffer(z.FRAMEBUFFER,null),z.useProgram(U),z.uniform1i(z.getUniformLocation(U,"frmBUFFER"),3),z.useProgram(R),z.uniform1i(z.getUniformLocation(R,"frmBUFFER"),3));z.activeTexture(z.TEXTURE2);z.enable(z.DEPTH_TEST);z.depthFunc(z.LEQUAL);
gj.now=0;gj.lb=0;Ti=!0}D[13](W,Zh,c,1!=f.nodecals,1==f.selcolor,lf)};var cj;window.chFFg=function(a,b){a=Jh(a,b*b*2);lf?qf.queue.writeBuffer(hj,0,a):(z.activeTexture(z.TEXTURE2),z.bindTexture(z.TEXTURE_2D,cj),z.pixelStorei(z.UNPACK_ALIGNMENT,1),z.texImage2D(z.TEXTURE_2D,0,z.LUMINANCE_ALPHA,b,b,0,z.LUMINANCE_ALPHA,z.UNSIGNED_BYTE,a),dj(),z.pixelStorei(z.UNPACK_ALIGNMENT,4))};var fj,ij;window.shk=function(){ij=!0};
function jj(a){a&&(z.activeTexture(z.TEXTURE3),z.uniform1i(yi,3),z.bindFramebuffer(z.FRAMEBUFFER,ej),z.viewport(0,0,Ni,Oi),z.bindTexture(z.TEXTURE_2D,qi),z.clearColor(0,0,0,0),ij&&z.clearColor(1,1,1,1),z.clear(z.COLOR_BUFFER_BIT|z.DEPTH_BUFFER_BIT),ij&&z.clearColor(0,0,0,0),z.enable(z.BLEND),z.blendEquation(z.FUNC_ADD),z.blendFunc(z.ONE,z.ONE),Ca?Ki.drawArraysInstancedANGLE(z.TRIANGLES,0,6,a):z.drawArraysInstanced(z.TRIANGLES,0,6,a),z.bindTexture(z.TEXTURE_2D,fj),z.bindFramebuffer(z.FRAMEBUFFER,null),
z.uniform1i(yi,0),z.enable(z.BLEND),z.blendEquation(z.FUNC_ADD),z.blendFunc(z.SRC_ALPHA,z.ONE_MINUS_SRC_ALPHA))}
function kj(){if(lj){var a=lj,b=a.I,c=a.jc,d=a.kc,e=a.Wb,g=a.Xb,h=a.lc,k=a.Yb,p=Date.now()-b;150<p&&(p=150);var r=mj(),t=r.x;r=r.y;var u=Date.now()-gf||0,v=Date.now()-bf||0;150<u&&(u=150);150<v&&(v=150);t=gf<b?t*p:t*u;r=bf<b?r*p:r*v;Math.sign(t)!=Math.sign(nj)&&nj?t+=nj:nj=t;Math.sign(r)!=Math.sign(oj)&&oj?r+=oj:oj=r;150>p?(tc=k+-(k-h)/150*p,a.vb?(a=pj(c,d,k,e,g),c=pj(c,d,tc,e,g),rc=e-(a.x-c.x),sc=g-(a.y-c.y)):(rc=e+-(e-c)/150*p,sc=g+-(g-d)/150*p)):(a.vb?(a=pj(c,d,k,e,g),c=pj(c,d,h,e,g),rc=e-(a.x-
c.x),sc=g-(a.y-c.y)):(rc=c,sc=d),bf=gf=Date.now(),hf=rc+t,cf=sc+r,tc=h,lj=void 0);rc+=t;sc+=r;Sf(-rc,-sc);lf?qf.queue.writeBuffer(ii,0,new Float32Array([1/tc])):z.getParameter(z.CURRENT_PROGRAM)==R&&z.uniform1f(mi,W/tc);D[19](tc)}}var nj,oj;function mj(){var a=2.5*parseInt(f.scrollSpeed)/100;return{x:1680*ef*tc*a/1E3,y:1680*Ye*tc*a/1E3}}var qj=0,Vi,rj,sj;
window.brconf=function(a,b,c,d,e,g,h,k,p){Vi=d;rj=k;z.useProgram(R);z.uniform4f(Ii,a,b,c,d);z.uniform4f(Hi,e,g,h,k);z.useProgram(U);z.uniform4f(Fi,a,b,c,d);z.uniform4f(Gi,e,g,h,k);sj=p};var tj=()=>{if(0!=ef||0!=Ye||lj){var a=mj(),b=a.x;a=a.y;var c=Date.now()-gf,d=Date.now()-bf,e=!1,g=0,h=0;$e&&(h=Math.sqrt(b**2+a**2)/$e,c>h&&(d=c=h,e=1),g=b/h,h=a/h);lj?kj():(b&&(rc=hf+b*c-.5*g*c**2),a&&(sc=cf+a*d-.5*h*d**2),Sf(-rc,-sc),e&&(Ye=ef=0))}};
function gj(a,b){B.gb||(performance.now(),Lc||requestAnimationFrame(gj),a=gj.now,gj.lb++,1==f.hlffps&&gj.lb%2||(a=b||Date.now()-Fc+25*D[48](),gj.now=a,Date.now(),tj(),z.useProgram(R),Og(),z.uniform1f(ri,a),z.clear(z.COLOR_BUFFER_BIT|z.DEPTH_BUFFER_BIT),b=D[14](),Ri&&jj(b),uj(a),$i(Di),vj(b),wj(b),ce.update&&ce(1),Lc&&(0<Ac&&clearInterval(Ac),Tf.toBlob(function(c){var d=xj;c=URL.createObjectURL(c);d.href=c;d.download=`${yj++}.png`;d.click();window.URL.revokeObjectURL(c);setTimeout(function(){setTimeout(Dc,
9);gj(0,25*B.Y+16)},20)})),zj&&zj.getVideoTracks()[0].requestFrame(),z.finish(),Aj()))}
var Aj=()=>{Wc++;if(!O&&100<=Date.now()-qj&&(qj=Date.now(),D[171](),3>re)){var a=B.now()/6E4,b=D[166]();if(b){var c=a/b;if(1>=c){var d=Math.round(510*c);c=Math.round(510*(1-c));255<d&&(d=255);255<c&&(c=255)}else d=255,c=0}1==re?(pi(m("tpCPU"),"CPU:"+(Jc/10).toFixed(2)+"%"),pi(m("tpGPU"),~~(1E3*Wc/(Date.now()-Vc)+.5)+"FPS"),pe.show()):(P(m("tpCPU")),pi(m("tpGPU"),""),P(pe));pi(m("tpTM"),Ec(B.now()));Bj&&(Bj.style.color=`rgb(${d},${c},0)`,a>b+5&&G(Bj));void 0!=Vi&&(a=25*D[48](),b=n[21],a=1E3*Math.floor(a/
1E3),Vi>a?(c=L(506)+` (${sj||0}/${b}) `+Ec(Vi-a),d="#ff0"):(c=L(505)+` (${sj}/${b}) `+Ec(Vi+rj-a),d="red"),sj==b&&a>Vi+rj&&(c=L(507),d="#f0f"),Cj&&(Cj.style.color=d,pi(Cj,c)));Jc=0;Vc=Date.now();Wc=0}};function Dj(a){a?Dj.time=performance.now():q("c++",performance.now()-Dj.time)}window.perfw=Dj;
function wj(a){a&&(z.enable(z.BLEND),z.blendEquation(z.FUNC_ADD),z.blendFunc(z.SRC_ALPHA,z.ONE_MINUS_SRC_ALPHA),Ca?Ki.drawArraysInstancedANGLE(z.TRIANGLES,0,6,a):z.drawArraysInstanced(z.TRIANGLES,0,6,a),z.disable(z.BLEND))}var ue=!1,Yi;
function vj(a,b){if(1020>window.innerWidth)if(ue)b=!0;else return;z.uniform2fv(zi,[0,0]);z.uniform1f(mi,1);z.uniform1i(yi,1);var c=l.V,d=window.innerHeight-xg-l.W,e=yg,g=xg;b?(g=e=c=zg(),c=window.innerWidth/2-e/2,d=window.innerHeight/2-g/2,z.uniform2fv(aj,[-W*c,-W*d])):z.uniform2fv(aj,Yi);z.uniform1f(ti,e*W);z.viewport(c*W,W*d,e*W,g*W);wj(a);z.uniform1i(yi,2);wj(1);z.uniform1i(yi,0);z.uniform2fv(zi,[rc,sc]);z.uniform1f(mi,W/tc);z.viewport(0,0,Ni,Oi);ue&&!b&&vj(a,1)}
function zg(){return Math.min(window.innerWidth,window.innerHeight)-128}var Wi,aj;
function uj(a,b){var c=Math.floor(a/100)%5;z.useProgram(U);z.uniform1f(Bi,W/tc);$i(Ci);z.uniform1f(vi,c);z.uniform1f(ui,a);uf&&We||z.drawArrays(z.TRIANGLES,0,6);c=l.V;var d=window.innerHeight-xg-l.W,e=yg,g=xg;if(1020>window.innerWidth)if(ue)b=!0;else{z.viewport(0,0,Ni,Oi);z.useProgram(R);return}if(b){var h=zg();g=e=h;c=window.innerWidth/2-e/2;d=window.innerHeight/2-g/2;z.uniform2fv(Wi,[-W*c,-W*d]);if(ya)for(var k=document.getElementsByClassName("alertdmg"),p=0;p<k.length;p++)k[p].show();pd("bigMap");
m("bigMap").style.width=h+"px";m("bigMap").style.height=h+"px"}else z.uniform2fv(Wi,Yi);uf&&We?(z.enable(z.SCISSOR_TEST),z.scissor(W*c,W*d,W*e,W*g),z.clearDepth(-.9),z.clear(z.COLOR_BUFFER_BIT|z.DEPTH_BUFFER_BIT),z.clearDepth(1),z.disable(z.SCISSOR_TEST)):(z.viewport(W*c,W*d,W*e,W*g),z.uniform1i(xi,1),z.uniform2fv(Ai,[0,0]),z.uniform1f(Bi,W*e/32/D[47]()),z.drawArrays(z.TRIANGLES,0,6),z.uniform1i(xi,0),z.uniform2f(wi,Ni,Oi),z.uniform2fv(Ai,[rc,sc]),z.viewport(0,0,Ni,Oi));z.useProgram(R);ue&&!b&&uj(a,
1)}var Ti=!1,Ui;function Xi(a){Ui&&(1<a?(a=(a-1)/.5,1<a&&(a=1),a=.5*(1-a)):a=.5,Ej!=a&&(Ej=a,a=`calc(-${50*(W-1)}% + ${a}px)`,Tf.style.transform=`scale(${1/W}) translate(${a},${a})`))}var Ej;function pj(a,b,c,d,e){var g=Ni,h=Oi;return{x:a*c+-d+(g-c*g/W)/2,y:b*c+-e+(h-c*h/W)/2}}function gh(a,b){var c=tc,d=Tf.width,e=Tf.height;return{x:a*c+-rc+(d-c*d)/2,y:b*c+-sc+(e-c*e)/2}}var lj;
function jf(a,b,c,d){var e=D[47](),g=window.innerWidth,h=window.innerHeight,k=1!=f.unlimitedZoom&&!O;if(!(a*(g-(!ya&&l.R||0))/32>e||a*h/32>e)||!k){Xi(a);.25>a&&k&&(a=.25);0>a&&(a=0);kj();if(!b||ue||!ya&&b<l.R||1!=f.zoomPointer)b=Math.floor(g/2),c=Math.floor(h/2);oj=nj=0;lj={jc:b,kc:c,Wb:rc,Xb:sc,I:Date.now(),lc:a,Yb:tc,vb:1};d&&(lj.I-=500,kj());Fj()}}
function Gj(a){if(!Gg&&(Ie||a.target==Tf)&&(a.ctrlKey&&a.preventDefault(),a.clientX>l.Va||Ie||!a.clientX)){var b=a.deltaY/550,c=1+parseFloat(f.zoomMult)/200+Math.abs(b);jf((0<Math.sign(b)?c:1/c)*tc,a.clientX,a.clientY)}}function Fj(){if(!lf){var a=window.innerWidth+l.R,b=window.innerHeight,c=tc*a,d=tc*b;Hj(-rc+(W-tc)*a*.5,-sc+(W-tc)*b*.5,-999999999,0);Ij(c,d,0,0,0)}}var Jj,Kj;
Og=function(){if(rc!=Jj||sc!=Kj){Jj=rc;Kj=sc;D[20](-rc,-sc);var a=[rc,sc];lf?(fh&&eh(fh[0],fh[1]),qf.queue.writeBuffer(gi,0,new Float32Array(a))):(z.useProgram(U),z.uniform2fv(Ai,a),z.useProgram(R),z.uniform2fv(zi,a),Fj())}};function Mi(){z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MAG_FILTER,z.NEAREST);z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MIN_FILTER,z.NEAREST);z.texParameteri(z.TEXTURE_2D,z.TEXTURE_WRAP_S,z.REPEAT);z.texParameteri(z.TEXTURE_2D,z.TEXTURE_WRAP_T,z.REPEAT)}
function dj(){z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MAG_FILTER,z.NEAREST);z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MIN_FILTER,z.NEAREST);z.texParameteri(z.TEXTURE_2D,z.TEXTURE_WRAP_S,z.CLAMP_TO_EDGE);z.texParameteri(z.TEXTURE_2D,z.TEXTURE_WRAP_T,z.CLAMP_TO_EDGE)}var Lj,cc;
function Mj(a){z.activeTexture(z.TEXTURE6+a);if(!Lj[a]){a&&!Lj[a-1]&&Mj(a-1);z.useProgram(R);const c=cc;var b=z.createTexture();Lj[a]=b;z.bindTexture(z.TEXTURE_2D,b);Mi();z.texImage2D(z.TEXTURE_2D,0,Nj,c,c,0,Nj,z.UNSIGNED_BYTE,null);z.uniform1i(z.getUniformLocation(R,`img_common[${a}]`),6+a);z.useProgram(U);z.uniform1i(z.getUniformLocation(U,`img_common[${a}]`),6+a)}return Lj[a]}var Nj;
window.setup3Dtexture=function(a,b,c,d){Jh(c,a);performance.now();Nj=z.RGBA;performance.now();const e=cc;Lj||=[];a=Jh(c,a);c=Math.floor(b/(e*e));b=b/e%e;var g=a.length/(4*e),h=0;do{var k=g-h;b+k>=e&&(k=e-b);z.bindTexture(z.TEXTURE_2D,Mj(c));var p=new Uint8Array(a.buffer,a.byteOffset+h*e*4,k*e*4);z.texSubImage2D(z.TEXTURE_2D,0,0,b,e,k,Nj,z.UNSIGNED_BYTE,p);h+=k;b=0;c++}while(h<g);D[165](d)};var hj,ej,W=1;
function bj(){var a=Math.round(window.innerWidth*W),b=Math.round(window.innerHeight*W);Ni=a;Oi=b;Tf.width=lf?window.innerWidth:a;Tf.height=lf?window.innerHeight:b;var c=m("menbak1s")&&m("menbak1s").getBoundingClientRect();D[18](Tf.width,Tf.height,window.innerWidth,window.innerHeight,c.y);lf?(console.log(lf),qf.queue.writeBuffer(hi,0,new Float32Array([window.innerWidth,window.innerHeight])),Oj&&(Oj.destroy(),Oj=qf.createTexture({size:[Ni,Oi],format:"depth24plus",usage:Pj.RENDER_ATTACHMENT}),Qj.depthStencilAttachment.view=
Oj.createView(),Rj&&Rj())):(z.useProgram(U),z.uniform2f(wi,a,b),z.useProgram(R),ej&&(ej.width=a,ej.height=b,z.bindTexture(z.TEXTURE_2D,fj),z.texImage2D(z.TEXTURE_2D,0,z.RGBA,a,b,0,z.RGBA,z.UNSIGNED_BYTE,null),Mi()),z.uniform2f(si,a,b));Sf(-rc,-sc,1);we()}window.animTimer=function(){};function $i(a){Ca?Sj.bindVertexArrayOES(a):z.bindVertexArray(a)}var Sj,Ki;function Zi(){return Ca?(Sj||=z.getExtension("OES_vertex_array_object"),Sj.createVertexArrayOES()):z.createVertexArray()}
Array.prototype.put=function(a){this[this.length]=a};Array.prototype.add=function(a){0>this.indexOf(a)&&(this[this.length]=a)};function th(a,b){for(let c=0;c<a.length;c+=2)if(a[c]==b)return c;return-1}var B={},Tj=new Float32Array(4),Uj=new Float32Array(3),Vj=new Float32Array(1),Wj=new Uint32Array(2);new Uint32Array(3);window.bufferDate=function(a,b){pf[0]=a;a=bi;1073741823<=b&&(b-=1073741823,a=ci);qf.queue.writeBuffer(a,48*b+28,pf)};
window.bufferIMG3=function(a,b,c){Wj[0]=a;Wj[1]=b;a=bi;1073741823<=c&&(c-=1073741823,a=ci);qf.queue.writeBuffer(a,48*c+24,Wj)};window.bufferRotation=(a,b)=>{Vj[0]=a;a=bi;1073741823<=b&&(b-=1073741823,a=ci);qf.queue.writeBuffer(a,48*b+32,Vj)};window.bufferPhysics3=function(a,b,c,d){Uj[0]=a;Uj[1]=b;Uj[2]=c;a=bi;1073741823<=d&&(d-=1073741823,a=ci);qf.queue.writeBuffer(a,48*d+12,Uj)};var Xj;
window.bufferGL3=(a,b,c,d,e,g,h,k,p,r,t,u,v)=>{let x=new Float32Array(11),A=new Uint32Array(x.buffer);x[0]=a;x[1]=b;x[2]=c;x[3]=d;x[4]=e;x[5]=g;A[6]=h;A[7]=k;x[8]=p;A[9]=r;A[10]=t;A[11]=u;a=bi;1073741823<=v&&(v-=1073741823,a=ci);qf.queue.writeBuffer(a,48*v,A);v>Yj&&(Yj=v)};window.bufferInfo2=(a,b)=>{pf[0]=a;a=bi;1073741823<=b&&(b-=1073741823,a=ci);qf.queue.writeBuffer(a,48*b+44,pf)};window.bufferHide=a=>{Vj[0]=-9;let b=bi;1073741823<=a&&(a-=1073741823,b=ci);qf.queue.writeBuffer(b,48*a+8,Vj)};
function Hj(a,b,c,d){Uj[0]=a;Uj[1]=b;Uj[2]=c;lf?(a=bi,1073741823<=d&&(d-=1073741823,a=ci),qf.queue.writeBuffer(a,48*d,Uj)):(z.bindBuffer(z.ARRAY_BUFFER,Wh),z.bufferSubData(z.ARRAY_BUFFER,12*d,Uj))}window.bufferPos=Hj;window.bufferPhysics=function(a,b,c,d,e){lf||(Tj[0]=a,Tj[1]=b,Tj[2]=c,Tj[3]=d,z.bindBuffer(z.ARRAY_BUFFER,Xh),z.bufferSubData(z.ARRAY_BUFFER,16*e,Tj))};
window.bufferIMG=function(a,b,c,d,e){Tj[0]=a;Tj[1]=b;Tj[2]=c;Tj[3]=d;z.bindBuffer(z.ARRAY_BUFFER,Vh);z.bufferSubData(z.ARRAY_BUFFER,16*e,Tj)};function Ij(a,b,c,d,e){lf||(Tj[0]=a,Tj[1]=b,Tj[2]=c,Tj[3]=d,z.bindBuffer(z.ARRAY_BUFFER,Yh),z.bufferSubData(z.ARRAY_BUFFER,16*e,Tj))}window.bufferMargin=Ij;window.bufferColor3=(a,b)=>{pf[0]=a;a=bi;1073741823<=b&&(b-=1073741823,a=ci);qf.queue.writeBuffer(a,48*b+36,pf)};
window.bufferK3=(a,b)=>{pf[0]=a;a=bi;1073741823<=b&&(b-=1073741823,a=ci);qf.queue.writeBuffer(a,48*b+40,pf)};window.bufferColor=function(a,b){Vj[0]=a;z.bindBuffer(z.ARRAY_BUFFER,Vh);z.bufferSubData(z.ARRAY_BUFFER,16*b+8,Vj)};
window.sresizeBuffer=function(a,b){if(lf){var c=b?ci:bi;a={size:48*(a+4E4),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,mappedAtCreation:!1};b?ci=qf.createBuffer(a):bi=qf.createBuffer(a);b=b?ci:bi;a=qf.createCommandEncoder();a.copyBufferToBuffer(c,0,b,0,c.size);b=a.finish();qf.queue.submit([b]);c.destroy();ji()}else Li(Vh,a),Li(Wh,a),Li(Xh,a),Li(Yh,a)};var Kb=["European","Arab","Asian"];
function Zj(a){return`<span class="raceIcon" style="background-position-y:-${20*a}px"></span>`}function Ch(a,b,c){if(a)return c&&(a=a.replace("%d",c)),a.replace("%s",b)};function ak(){for(let a=0,b=bk.length;a<b;a++){let c=bk[a];c&&(n[a]="checkbox"==c.type?c.checked?1:0:parseInt(c.value))}return n}var ck,pb;B.Ra=2880;B.Sa=12;function dk(){let a=$a(ab);for(let b=0;b<n.length;b++)a[b]=n[b];D[24](n.length)}
function ek(){m("mapconfiguration")&&""!==m("mapconfiguration").innerHTML&&!D[67]()&&(ak(),1024<n.length&&(n.length=1024),f.mapConfig4=`[${n.join()}]`);B.fb=Math.round(555555*Math.random()+1);n[46]=B.fb;n[0]=fk(n[0],n[16],n[29]);let a=$a(ab);for(let b=0;b<n.length;b++)a[b]=n[b];D[24](n.length);return B}window.SetupGameConfig=ek;var Lc,xj,yj,zj;
function Xb(){nd&&(nd.innerHTML="");Ub.innerHTML=L(53);l.qb||(l.qb=1);B.m&&(gk(),B.pc=0);D[47]()||ek();B.va=0;B.gb=0;ag=m("msgs1");B.m||(location.hash="");pd("content");B.Y?B.Jb=25*B.Y:(B.I=Date.now(),B.Y=0,B.Jb=0);B.vc=Date.now();B.m||Mf();B.now=Bc;B.paused=0;B.va=0;Cc();performance.now();B.Hb=!0;B.ab=25;var a=B.ab;0===l.ab&&(a+="&deg;C");m("temperature")&&(m("temperature").innerHTML=a);tc=1;D[101](~~(1E4*Math.random()));ce(55);hk.check();O&&(Cd(),Ed(),D[48]()&&Ha("Editing savegames may be unstable"))}
function Cb(a){G(a.parentNode.parentNode)}
function hk(){G(ik);m("playersinfo")&&(m("playersinfo").innerHTML="");Xf();window.addEventListener("keydown",Fg);window.addEventListener("keyup",Dg);window.addEventListener("mousemove",dh);window.onblur=Cg;window.addEventListener("touchstart",Vg,{passive:!1});window.addEventListener("touchmove",bh);window.addEventListener("touchend",ch);window.addEventListener("wheel",Gj,{passive:!1});window.addEventListener("mousedown",ih);window.addEventListener("mouseup",jh);D[149](1==f.deathsounds);ba.mb=performance.now()-
ba.mb;B.m?(ck&&F(32),D[65]()):jk();B.Hb=!1}window.startGameStep0=hk;hk.check=function(){hk.load++;hk.load===hk.target&&hk()};hk.check=hk.check;hk.target=2;function lh(a){if(a||!ha)a=document.documentElement,a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen()}var kk=document.getElementsByTagName("main")[0];ha||(window.onbeforeunload=function(){return"Are you sure to leave this page?"});
window.onunload=()=>{cb&&F(57)};var lk,ik,Ub;
function mk(a){Xj=new Float32Array(12);new Uint32Array(Xj.buffer);Ve||(f.bshrct||(f.bshrct='{\n"basic":[\n"ARROWUP",\n"ARROWDOWN",\n"ARROWLEFT",\n"ARROWRIGHT",\n"X",\n"0",\n"<",\n"Z",\n"ESCAPE",\n"ENTER",\n"DELETE",\n"TAB",\n"Q",\n" ",\n"CONTROL",\n"SHIFT",\n"ALT",\n"F1",\n"F2",\n"F3",\n"F4",\n"F5",\n"F6",\n"F7",\n"F8",\n"F9",\n"F10",\n"F11",\n"F12"\n],"0":["M"],"1":["A"],"2":["G"],"3":["R","P"],"4":["P"],"5":["E"],"6":["S"],"7":["N"],"10":["O"],"11":["D"],"12":["S"],"13":["G"],"14":["F"],"15":["A"],"16":["M"],"17":["P"],"18":["L"],"19":["K"],"60":["P"],"63":["S"],"64":["E"],"65":["D"],"66":["A"],"67":["L"],"68":["P"],"69":["P"],"70":["N"],"71":["R"],"74":["R","A"],"75":["I"],"76":["H"],"83":["G"],"84":["S"],"85":["C"],"91":["H"],"94":["B"],"96":["M"],"110":["P"],"111":["C"],"112":["F"],"113":["D","F"],"120":["I"],"121":["C"],"122":["C"],"123":["F"],"124":["A"],"125":["S"],"126":["P"],"127":["C"],"128":["J"],"129":["D"],"130":["T"],"132":["M"],"133":["H"],"134":["G"],"135":["G"],"136":["C"],"137":["C"],"138":["H"],"140":["E"],"141":["T"],"142":["P"],"143":["T"],"144":["H"],"145":["S","A"],"146":["C"],"147":["B"],"148":["W"],"149":["C"],"150":["F"],"151":["P"],"154":["H"],"155":["G"],"173":["R"],"174":["A"],"175":["S"],"176":["H"],"177":["M"],"178":["M"],"179":["P"],"180":["P"],"183":["O"],"184":["C"],"186":["R"],"188":["H"],"189":["B"],"190":["B"],"191":["B"],"192":["T"],"193":["S"],"194":["L"],"195":["L"],"196":["I"],"197":["C"],"198":["C"],"199":["C"],"201":["E"],"205":["U"],"207":["M"],"208":["M"],"209":["Y"],"210":["F"],"211":["K"],"212":["P"],"213":["P"],"214":["A"],"215":["A"],"216":["N"],"217":["H"],"218":["R"],"219":["O"],"220":["W"],"222":["D"],"223":["F"],"224":["C"],"225":["U"],"226":["W"],"227":["F"],"228":["G"],"229":["L"],"230":["B"],"231":["T"],"233":["I"],"236":["H"],"237":["H"],"238":["L"],"239":["S"],"240":["S"],"241":["F"],"242":["F"],"243":["R"],"244":["R"],"245":["K"],"246":["K"],"247":["P"],"248":["U"],"249":["U"],"250":["N"],"251":["N"],"254":["A"],"255":["O"],"256":["O"],"258":["M"],"265":["U"],"266":["J"],"270":["B"],"272":["C"],"273":["J"],"274":["V"],"275":["R"],"276":["D"],"277":["M"],"278":["P"],"279":["H"],"280":["S"],"292":["Y"],"300":["B"],"301":["B"]}'),Ve=
JSON.parse(f.bshrct));lk=!0;Sd();Nb();if(!z&&!lf)return Ha("Your browser doesnt support webgl");kk.appendChild(Tf);G(m("RandomMap"));G(m("CustomMap"));G(m("game"));G(m("bak"));G(m("index"));ba={mb:performance.now()};hk.load=0;if(ck&&nk){var b=D[70]();n[0]=Math.round(Math.sqrt(15600*b));b=$a(ab);for(let c=0;c<n.length;c++)b[c]=n[c];D[24](n.length)}ic(ck?"reveal":"bless");a&&"true"==f.fullscreen&&lh();O?(l.V=0,l.W=0,l.ub=0,xg=yg=171,l.R=171,l.Va=171):qd?(xg=yg=l.R=151,l.Va=151,l.ub=0,l.V=0,l.W=0):(l.R=
151,xg=yg=128,l.Va=151,l.ub=0,l.V=4,l.W=31);D[119](l.R,qd);a=m("minimap");a.style.width=yg+"px";a.style.height=xg+"px";a.style.left=l.V+"px";a.style.top=l.W+"px";ik=J("div",document.body);ik.id="loading";Ub=J("div",ik);J("div",ik,"TZA.RED");a=J("div",ik);J("div",a).className="svgnehhon";J("div",a,"NEHHON NETRAL ENGINE");if(O){if(!D[67]())for(n=ia,a=$a(ab),b=0;b<n.length;b++)a[b]=n[b];D[102](n.length)}else D[47]()||ek();F(25);if(B.m)Ba("start game");else D[204]();B.m||Ih();m("mapconfiguration")&&Cb(m("mapconfiguration"));
lf?ok():bc()}window.startGame=mk;var pk,qk;window.updKstate=function(a,b,c){pk&&pk[a]&&(pk[a].className=`${b&&"pldeath"||""}${c&&" pldisc"||""}`);c&&qk&&qk[a]&&(qk[a].innerHTML="")};window.updKping=function(a,b){if(re)if(qk&&qk[a])qk[a].innerHTML=2147483647!=b&&b+"ms"||"host";else D[158]()};window.rstPLI=function(){m("playersinfo").innerHTML="";pk=[];qk=[]};
window.setupPlayerInfo=function(a,b,c,d,e,g,h,k,p,r,t){if(!(32<a)){b=Rc(p,b);p=m("playersinfo");var u=document.createElement("div");u.ya=t;h&&!r&&re&&(qk[a]=J("span",u,2147483647!=h&&h+"ms"||"host","font-size:8px;color:#00ffb8"));b=J("span",u,b,`border-color:${k&&"#f00"||"#0f0"}`);b.className=`${g&&"pldeath"||""}${r&&" pldisc"||""}`;pk[a]=b;J("div",u,"",`background:rgb(${c},${d},${e})`);a=!0;for(let v of p.children)if(v.ya<t){p.insertBefore(u,v);a=!1;break}a&&p.appendChild(u)}};
function Dd(a){for(var b=a.length,c=0;c<b;m(a[c++]).style.display="block");}var yg=128,xg=128;window.popInfo=function(a,b){O||pi(m("pop"),a+"/"+b)};window.addEventListener("offline",function(){Ka("Offline","#ff0000")});window.addEventListener("online",function(){Ka("Online","#00ff00")});var Lb=!1;function rk(a){if(!a||!a.target||"BUTTON"!=a.target.tagName){if(this.zb&&!f.sid)return Qb();B.m&&sk(5);a=this.nb;Lb=!0;Mb(a);Nb()}}function tk(){let a=Pc(L(53));a.id="loadingOnline";M("button",a,3,"margin:auto;margin-top:19px;display:block").onclick=function(){location.href=""}}
function uk(a,b){let c=1;do{let e=vk(a,c);c+=3;let g=vk(a,c);c+=3;let h=a[c++],k=a[c++],p=a[c++],r=a[c++],t=a[c++],u=a[c++],v=vk(a,c);c+=3;var d=a[c++];let x=a[c++],A=wk(new Uint8Array(a.buffer,c,d));c+=d;d=wk(new Uint8Array(a.buffer,c,x));c+=x;dg[e]={name:A,id:g,clan:d,avatar:h,role:k,team:p,race:t,rgb:v,state:r,flag:u};ck&&(xk(D[56](0,t,v,e,0,g),17,A),yk());ic("unitdone");b&&$f(Ch(L(531),"<span>"+Rc(e)+"</span>"),"4bff4b")}while(c<a.length)}
var zk={6400900:".",28462225:"a",29052100:"b",29648025:"c",3025E4:"d",30858025:"e",31472100:"f",32092225:"g",32718400:"h",33350625:"i",33988900:"j",34633225:"k",35283600:"l",35940025:"m",36602500:"n",37271025:"o",37945600:"p",38626225:"q",39312900:"r",40005625:"s",40704400:"t",41409225:"u",42120100:"v",42837025:"w",4356E4:"x",44289025:"y",45024100:"z"},qd,ng,nk;
function Ak(){ck=0;nk=Bk=ng=l.s=0;Ck&&(G(Ck),Ck=void 0);m("mult").children&&m("mult").insertBefore(m("gameList"),m("mult").children[1]);m("gameList")&&m("gameList").show();m("mapconfiguration")&&Cb(m("mapconfiguration"))}function nb(a){Ak();m("game")&&N("game");B.m=0;B.id=void 0;D[266](1);zh=void 0;l.eb=!1;E.close();ta();Nf();D[69]();a&&a.constructor==String&&Ha(a)}
function oe(){if(m("menubefore")&&m("menuafter")&&m("resourcesbefore")){var a=f.menuOpacity/100;m("menubefore").style.opacity=a;m("menuafter").style.opacity=a;m("resourcesbefore").style.opacity=a}}function rg(a,b){a=J("input",a);a.value=b;a.type="range";Dk(a);return a}function Dk(a){var b=J("span",a.parentNode);b.className="rangeval";a.H=b}
function xe(){if(B.A){if(!O&&!vf)D[98]();Gg=!0;if(!m("playingMenu")){var a=Pc("");a.id="playingMenu";document.body.style.cursor="";var b=J("div",a);B.m&&Da||(M("button",b,73).onclick=Wd);var c=M("button",b,860);c.className="updnew";c.onclick=zf;!qd&&!ya||O||(M("button",b,463).onclick=Nc);n&&!O&&(M("button",b,48).onclick=Ek);ha||(M("button",b,74).onclick=lh);M("button",b,75).onclick=Xd;b=J("div",a);let e=K("div",a,"padding-bottom:37px;position:relative"),g=J("div",e,L(461)+"...","cursor:url(nehhon/hand.gif),default;position:absolute;bottom:0px;right:7px;font-size:10px;color:#ffd75d8f");
e.className="shw3";g.onclick=()=>{e.className="";G(g);e.style.cssText=""};c=[{i:71,wa:1,cc:n[34]/100,min:1,max:10,f:function(){this.H.innerHTML="x"+this.value;D[173](Q(this))}},{i:76,wa:1,B:"zoomMult",f:Fk},{i:77,wa:1,B:"scrollSpeed",f:Fk},{i:446,B:"stdcolors",ga:rf},{i:79,B:"nightcycle"},{i:875,B:"selcolor",ga:()=>{D[273](1==f.selcolor)}},{i:82,B:"deathsounds"},{i:404,B:"unlimitedZoom"},{i:456,B:"scrollmouse"},{i:397,B:"zoomPointer"},{i:878,B:"hlffps"}];"true"!=f.theme&&c.unshift({i:78,wa:1,B:"menuOpacity",
f:Fk,ga:oe});for(let r of c){c=r.cc||f[r.B];var d=r.wa?b:e;if(r.wa){let t=rg(J("div",d),c);t.oninput=r.f;t.oninput(1);t.onchange=()=>{f[r.B]=t.value;r.ga&&r.ga()};r.min&&(t.min=r.min,t.max=r.max)}else je(d,t=>{f[r.B]=t?1:0;r.ga&&r.ga(t)},"true"==c||1==c);M("div",d,r.i)}b=K("div",a,"position:relative;padding-top:44px");c=J("div",a);let h=rg(J("div",c),f.soundRange);h.oninput=Fk;h.oninput();h.addEventListener("input",()=>{mc.gain.value=Q(h)/100;f.soundRange=h.value});M("div",c,81);let k=rg(J("div",
c),f.musicRange);k.oninput=Fk;k.oninput();k.addEventListener("input",()=>{vc.volume=Q(k)/100;f.musicRange=k.value});M("div",c,80);M("span",b,833,"position:absolute;top:4px;left:19px;font-size:11px;color:#ffd75d8a");d=[{i:"Original",B:0},{i:"Orchestral version by Pau Garriga",B:4,a:"https://www.youtube.com/watch?v=zNg7e1N7ZZo"},{i:"Sharp Rain version",B:1,a:"https://www.youtube.com/user/rainheart666787/featured"},{i:"Diemiurgo additional track",B:2,a:"https://soundcloud.com/diemiurgo/tzar-adp-final"},
{i:"Remastered",B:3},{i:"Mute",B:"mute"}];c=f.favMusic;let p;for(let r of d){let t=je(b,()=>{f.favMusic=r.B;p==t?(p.checked=1,Ff(p,0)):(p&&(p.checked=0,p.style.backgroundPositionY=""),p=t,xc())},r.B==c);r.B==c&&(p=t);d=J("div",b,!r.a&&r.i||"");r.a&&(d=J("a",d,r.i),d.href=r.a,d.target="_blank")}sf=J("button",a);sf.className="closeIcon";sf.onclick=()=>{P(a.parentNode.parentNode);if(!O&&!vf)D[99]();Gg=!1;Of()}}m("playingMenu").parentNode.parentNode.style.display=""}}function Xd(){location.href=""}
function Gk(){return parseInt(f.color.substr(1),16)}function Hk(a){for(var b=Zb(D[59](a.length),a.length),c=0;c<a.length;c++)b[c]=a[c]}window.nlsndts=function(a,b,c){a=Jh(a,4*b);b=new Uint8Array(2+a.length);b[1]=c;b.set(a,2);q(b);F(33,b)};
Ib=function(){var a=Pc("",1);a.id="gameForm";let b=K("div",a,"padding:16px;background:#ffffff08;box-shadow: 0 0 20px #000;border:1px solid rgb(243 205 90/8%);display:grid;grid-template-columns:auto auto;gap:14px;text-align:right;font-size:12px;align-items:center");M("span",b,86);let c=J("input",b);c.spellcheck=!1;c.value=f.gameDescription||Ch(L(563),l.name);c.yc=29;M("span",b,87);let d=K("input",b,"width:39px");d.type="number";d.min=2;d.max=50;d.value=8;M("span",b,85);let e=je(b,()=>{},!1),g;f.sid&&
(M("span",b,440),g=je(b,()=>{},!1));M("button",a,2,"margin-top:18px;font-size:14px;padding:8px;color:#0f0;text-transform:uppercase;width:100%").onclick=()=>{var h=c.value,k=d.value,p=e.checked,r=g&&g.checked;if(D){Nb();Of();l.s=1;l.v={description:h.substr(0,30),max:parseInt(k),Zb:p,ac:r};2>l.v.max&&(l.v.max=2);50<l.v.max&&(l.v.max=50);f.gameDescription=l.v.description;E.host=!0;h=l.v;Ik();k=h.max;p=h.Zb;r=h.ac;var t=l.name;let v=Fa(h.description);t=Fa(t);var u=new ArrayBuffer(5+v.length+t.length);
u=new Uint8Array(u);u[1]=k;u[2]=p;u[3]=r;u[4]=v.length;u.set(v,5);u.set(t,5+v.length);k=Jk(0,u);Ba("crt game: "+h.description);Kk?Lk(k):(tk(),E.C.send(k));B.m=1;l.eb=!0}Cb(a)}};function Wd(){zh&&O&&Ih();D[176]()}
window.svggme2=function(){var a=D[42](),b=$b(),c=Jh(a,b[0]);b=b[1];q(c,a);if("true"==f.multithreading){a=c;c=new Uint8Array(c.length);for(var d=0;d<c.length;d++)c[d]=a[d]}c=new Blob([new Uint32Array([b]),c],{type:"application/octet-binary"});b=URL.createObjectURL(c);c=document.createElement("a");c.style="display: none";c.href=b;b="savegame";O&&(D[240](0),b=Nd||"map");c.download=b+".tzared";c.click()};
function Af(a,b){a=URL.createObjectURL(a);var c=document.createElement("a");c.style="display: none";c.href=a;c.download=b;c.click()}function Mk(){for(var a=document.getElementsByClassName("onlPlayer"),b=0;b<a.length;b++)G(a[b]);1==D[70]()-D[68]()?(Nk.J=void 0,B.id=void 0,B.m=0,l.v=void 0,E.close(),Nf(5),l.s=0,D[69](1),mk()):(B.Vb||ek(),F(7),D[64](~~(1E4*Math.random())))}var Ok,Bk;
function Pk(){if(!Bk||B.A){if(Qk){for(let a of Qk.children)a&&(a.style.width="",a.style.opacity="");Qk.style.cssText=""}clearInterval(Pk.Ta);m("wtr")&&(m("wtr").textContent=L(526),m("quitbutton").dataset.title="")}else Bk--,9>=Bk&&1<=Bk&&ic("crusade"),Ok.innerHTML=Bk}window.hdpsnd=function(a,b,c){a=Zb(a,b);(c=Rk(c))&&(c.s||E.host)&&c.send(a)};var Bj,Cj,jb;
function jk(){!qe&&E.host&&F(27);if(!O){let a=D[166]();a&&(Bj=J("span",m("topinfo"),`<span style='font-size:15px'>\u262e</span> ${a}:00`));n[8]&&(Cj=J("span",m("topinfo"),"","",1))}Of();m("alert")&&N("alert");m("waitList")&&Cb(m("waitList"));B.A=1;B.I=Date.now();Cc();O||zc();lk=!1;D[41]();lf||gj()}window.startMovement0=jk;
function Vf(){let a=J("div",document.body);a.className="gifsearch";let b=J("input",a);b.type="text";b.placeholder="\ud83d\udd0e\ufe0e";b.focus();let c=J("div",a),d=J("div",c),e=J("div",c),g=0,h=0,k=J("button",a);k.className="closeIcon";k.onclick=()=>G(a);let p=async r=>{var t=`https://g.tenor.com/v1/search?q=${b.value}&key=${"LIVDSRZULELA"}&limit=${20}`;g?t+="&pos="+20*g:g=0;t=await (await fetch(t)).json();q(r,h);if(r==h){q(t);r=1;for(let u of t.results)t=J("img",r?e:d),t.src=u.media[0].nanogif.url,
t.onclick=()=>{q(u);Wf(u.media[0].gif.url);G(a)},r^=1}};c.onscroll=function(){c.offsetHeight+c.scrollTop>=c.scrollHeight&&(g++,p(h))};b.oninput=()=>{kb(e);kb(d);g=0;h++;p(h)}}var Hc=document.getElementsByTagName("main")[0],Gg=!1;function Of(){Gg=!1;Hc.style.cssText=""}function sk(){N("game");Ak();for(var a=document.getElementsByClassName("onlPlayer"),b=0;b<a.length;b++)G(a[b]);Nk.J=void 0;ta();B.id=void 0;B.m=0;l.v=void 0;E.close();Nf(5);l.s=0;D[69]()}
function Sk(a){a=parseInt(a);if(2>a||!a)a=2;50<a&&(a=50);m("mmplayers").innerHTML=a;a!==l.v.max&&(l.v.max=a,Tk());return a}window.updateMax=Sk;function Uk(){var a=`<p id="onlineTopInfo"></p>
<h3 id="wtr"></h3>
<div id="multi21">
<table class="players">
<thead>
${'<tr style="font-size:16px;text-transform:uppercase;color:var(--color1);border-bottom:2px solid #6e6e6e3b;"><td></td><td></td><td style="padding:15px 11px;">'+(!D[67]()&&L(103)||"")+'</td><td id="onltms">'+L(21)+' <span id="teamlock"></span></td><td id="onlrd">'+L(543)+"</td></tr>"}
</thead>
<tbody id="multiplayertable">
</tbody>
</table>
<div id="chat">
<div id="rominfo" style="font-size:13px;margin-left:10px;color:#ad995f"></div>
<ul id="msgs">
</ul>
<input id="msginput" type="text" autocomplete="off" placeholder="chat"/>
</div>
</div>
<div id="showGameInfo"></div>
<div id="buttons"></div>
<div id="gvw"></div>
`;return m("game")?!1:(a=J("div",document.getElementsByTagName("main")[0],a),a.id="game",a.className="playermenu",!0)}var Vk,Wk;function Xk(){if(ck)if(2!=Vk){var a=D[70](),b=1==Yk?3:2==Yk?4:5==Yk?1:2,c=~~(a/b),d=1==b?L(717):c;a%=b;for(let e=0;e<b-1;e++)d+="v"+(c+(0<a?1:0)),a--;m("rominfo").innerHTML=d}else m("rominfo").innerHTML=L(717);else{b=$a(ab);c="";d=!0;for(a=1;64>a;a++)1<b[a]&&(d=!1),b[a]&&(c&&(c+="v"),c+=b[a]);if(!d)for(a=0;a<b[0];a++)c+="v1";m("rominfo").textContent=d?L(717):c}}
window.rminfo=Xk;var Zk;
function $k(){if(Uk()){m("teamlock").onclick=al;var a=m("gvw");let b=J("div",a,"\u25bc [- - -]");a=J("button",m("chat"),"GIF");a.className="gif";a.onclick=Vf;b.onclick=()=>{Zk?(b.innerHTML="\u25bc [- - -]",P(m("gameList"))):(b.innerHTML="\u25b2 [- - -]",m("gameList").show());Zk=!Zk};ag=m("msgs");m("msginput");m("msginput").addEventListener("keyup",function(c){13===c.keyCode&&Wf()})}else N("multi21"),m("multiplayertable").innerHTML="",m("showGameInfo").innerHTML="";m("gvw").appendChild(m("gameList"));Zk?
m("gameList").show():P(m("gameList"));m("onlrd").style.cssText=nk?"text-align:center":"display:none";m("onltms").style.cssText=ck?"display:none":""}var bl,cl,dl=a=>`*A minimum of ${a} matches and at least 1 match played in the last ${2} weeks is required`;
function el(){cb?F(34,fl(0)):E.C.addEventListener("open",()=>F(34,fl(0)));let a=Pc("",2);a.id="rank";a.style.maxWidth="630px";a.style.minHeight="900px";let b=K("span",a,"display:flex;gap:7px;flex-wrap:wrap"),c=[L(556)+" - "+L(715)+" ~ 1500",L(556)+" - "+`1${L(716)}1 ~ 1500`,"Wall of banneds"];for(let d=0;d<c.length;d++){let e=J("button",b,c[d]);d||(e.style.opacity=1);e.onclick=()=>{if(1!=e.style.opacity){bl.style.visibility="hidden";for(let g of b.children)g.style.opacity="";e.style.opacity=1;2==
d?F(53):F(34,fl(d));cl.textContent=dl(2==d?2:4)}}}bl=J("div",a,L(53));cl=J("span",bl.parentNode,dl(4))}function Jk(a,b){b?b[0]=a:b=new Uint8Array([a]);return b}function F(a,b){b?b[0]=a:b=new Uint8Array([a]);cb&&E.C.send(b)}function fl(a){let b=new Uint8Array(2);b[1]=a;return b}let gl="AD AE AF AG AI AL AM AO AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CT CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EN ER ES ET EU FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NW NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SW SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS WW XK YE YT ZA ZM ZT ZW XX".split(" ");
(async function(){let a;if(f.CCID)a=parseInt(f.CCID);else{let b=(await (await fetch("https://tza.red/cdn-cgi/trace",{mode:"cors"})).text()).split("loc=")[1].substr(0,2);a=gl.indexOf(b);f.CCID=a}cb?F(36,fl(a)):E.C.addEventListener("open",()=>F(36,fl(a)))})();function ob(a,b,c){a[b]=c&255;a[b+1]=c>>8&255;a[b+2]=c>>16&255;a[b+3]=c>>24&255}var qe;function hl(a,b,c){a[b]=c&255;a[b+1]=c>>8&255;a[b+2]=c>>16&255}function il(a){let b=new Uint8Array(4);hl(b,1,a);return b}
function rb(a,b){b=Fa(b);var c=new ArrayBuffer(2+b.length);c=new Uint8Array(c);c[1]=a;c.set(b,2);return c}function Ab(a){a=Fa(a);var b=new ArrayBuffer(1+a.length);b=new Uint8Array(b);b.set(a,1);return b}function qb(a,b){b=Fa(b);var c=new ArrayBuffer(4+b.length);c=new Uint8Array(c);hl(c,1,a);c.set(b,4);return c}function wk(a){return(new TextDecoder).decode(a)}function jl(a,b){a=new Uint8Array(a.buffer,b||1);return wk(a)}function kl(a,b,c){a=new Uint8Array(a.buffer,b,c);return wk(a)}
function vk(a,b){return a[b+2]+(a[b+1]<<8)+(a[b]<<16)}function ll(a,b){return a[b+3]+(a[b+2]<<8)+(a[b+1]<<16)+(a[b]<<24)}function ml(a){return vk(a,1)}function nl(a){var b=f.name;a=Fa(a);b=Fa(b);let c=Fa("");var d=new ArrayBuffer(3+a.length+b.length+c.length);d=new Uint8Array(d);d[1]=a.length;d[2]=b.length;d.set(a,3);d.set(b,3+a.length);d.set(c,3+a.length+b.length);return d}
function ol(a){let b=Fa(f.name),c=Fa("");var d=new ArrayBuffer(6+b.length+c.length);d=new Uint8Array(d);d[1]=0;d[2]=b.length;hl(d,3,a);q(d);6<d.length&&(d.set(b,6),d.set(c,6+b.length));return d}function Bb(a){let b=new Uint8Array(5);ob(b,1,a);return b}function Fa(a){return(new TextEncoder).encode(a)}window.kllf5=function(a){setTimeout(D[203],8500,a)};
ib.prototype.close=function(a){for(var b=this.G.slice(0),c=0;c<b.length;c++)b[c].close(1),q(b[c].timeout),b[c].timeout&&clearTimeout(b[c].timeout);if(a&&E.C)return E.C.close();this.G.length=0;F(1);this.host=!1};function Tk(){var a=l.v.max-D[68]();F(8,fl(a))}function pl(a){try{return JSON.parse(a)}catch(b){return q(b),!1}}window.NHretransmit=function(a,b,c){if(E.host){a=Zb(a,b);b=E.G;for(var d=0;d<b.length;d++)b[d].id!=c&&b[d].send(a);ql()}};var mb;
function rl(){mb=1;for(var a=E,b=a.G.slice(0),c=0;c<b.length;c++){var d=b[c];d.closed=!0;d.O&&d.O.close()}q(a.C);a.C.close();Cc()}window.nhcleanclose=rl;
var gb=[async function(a,b){a=ml(b);b=jl(b,4);if(!Rk(a)){var c=pl(b);c&&(q(c),b=sl(a),b.setRemoteDescription(new RTCSessionDescription(c)),c=await b.createAnswer(),await b.setLocalDescription(c),q(c),F(4,qb(a,JSON.stringify(c))))}},async function(a,b){a=ml(b);b=jl(b,4);if(a=tl(a))if(b=pl(b))q(b),b=new RTCSessionDescription(b),await a.setRemoteDescription(b)},async function(a,b){a=ml(b);b=jl(b,4);if(a=tl(a))if(b=pl(b)){q(b);try{await a.addIceCandidate(b)}catch(c){console.error("Error adding received ice candidate",
c)}}},async function(a,b){var c=ml(b);a=vk(b,4);l.Na="#"+kl(b,8,b.length-(c?8:16));location.replace("#"+l.Na);qe=b[7];D[66](a);l.K=a;q("message",c,qe);c?(ck=ng=0,D[204](qe),qe?(b=parseInt(c),a=sl(b,!0),c=await a.createOffer(),await a.setLocalDescription(c),F(6,qb(b,JSON.stringify(c)))):(ul=c,vl(c))):(ic("e_barrack1"),qe=0,ck=1,ul=0,ng=b[b.length-8],Wk=b[b.length-7],nk=b[b.length-6],wl(1),a=b[b.length-2],c=b[b.length-1],pb=b=vk(b,b.length-5),Vk=a,D[204](0,1,ng),D[55](c+1),n=ra[a].slice(),q(n),a&&(n[46]=
b+2E3*Wk,b=[0,0,0,0,2,4,4,4,6],n[6]=b[Wk%b.length]),dk())},function(a,b){qe=b[4];a=ml(b);b=jl(b,5);q(a,b);l.Na="#"+b;wl();setTimeout(xl,5E3);D[204](qe);D[66](a,1);l.K=a;ek();D[55](l.v.max+1);xk(D[56](0,f.civi||0,Gk(),a,0),17,l.name);yk()},function(a,b){yl(b)},function(a,b){a=ml(b);(a=Rk(a))&&zl(a,1)},function(a,b){a=ml(b);qe?(q(a),0!=a||B.A?(a=Rk(a))&&a.close():(nb(L(95)),ic("ressurect"))):0==a?(nb(L(95)),ic("ressurect")):(q("del",ul,a),b=Rc(a),D[73](a),Bk=0,B.A||(ul==a&&(nb(L(95)),ic("ressurect")),
b&&$f(Ch(L(94),"<span>"+b+"</span>"),"ff4b4b")))},function(){if(!lk){Ka("changing host...");E.ba&&(clearTimeout(E.ba),E.ba=void 0);Ba("change host");D[155]();D[66](l.K,0);F(11);E.host=!1;E.za&&(clearTimeout(E.za),E.za=void 0);for(var a=0;a<E.G.length;a++)E.G[a].closed=!0,E.G[a].close(1);E.G.length=0;Al=void 0}},async function(a,b){a=ml(b);b=b[4];q("UPDATE",a,b);if(!lk){if(a==l.K)q("HOST"),E.La=1,E.ba=setTimeout(Bl,1E4),E.ob=parseInt(b),D[66](l.K,1);else{D[66](l.K,0,1);E.host=!1;b=sl(a,!0);const c=
await b.createOffer();await b.setLocalDescription(c);F(6,qb(a,JSON.stringify(c)))}D[154](a)}},function(a,b){a=ml(b);b=jl(b,4);q(b);f.sid=a;f.nm=b.substr(0,24);f.name=b.substr(24);m("accb").innerHTML=L(445);l.name=f.name;xk(D[53](Gk()),17,l.name);window.onbeforeunload=void 0;location.reload()},function(a,b){dg={};uk(b);q(dg)},function(){f.sid="";f.nm=""},function(a,b){b=b[1];q(b);"string"==typeof b?(Ha("",`Name changed to ${b}`),f.name=b):Ha(Ch(L(544),b))},function(){},function(a,b){b=b[1];q(b);Kk=
b},function(a,b){b=b[1]-1;a=[96,69,441,519,806,807][b];Of();Cb(m("loadingOnline"));Nf();zb(L(a),1)},function(a,b){a=b[1];if(b=Cl(vk(b,2)))a?(b.onclick=void 0,a=b.children[0].children[0],a.className="redCircle",a.style.cssText="",b.className="",b.I=Math.floor(Date.now()/1E3),b.$b&&b.zb&&(b.style.filter="hue-rotate(311deg)"),b.style.height="0px",b.style.opacity="0",b.style.border="none",b.children[3].children[2].innerHTML=b.children[3].children[0].innerHTML,setTimeout(Dl,1E3,b)):b.offsetParent?(b.style.height=
"0px",b.style.opacity="0",setTimeout(G,1E3,b)):G(b)},function(a,b){a=b[1];if(b=Cl(vk(b,2))){if(b.onclick&&b.Za){var c;6>a?c=6:c=a+(2-a%2);b.children[3].children[2].innerHTML=c}c=b.children[3].children[0];c.offsetParent&&(c.style.color=parseInt(c.innerHTML)<a?"#0f0":"red",setTimeout(El,250,c));c.innerHTML=a}},function(a,b){a=b[1];if(b=Cl(vk(b,2)))b=b.children[3].children[2],b.offsetParent&&(b.style.color=parseInt(b.innerHTML)<a?"#0f0":"red",setTimeout(El,250,b)),b.innerHTML=a},function(a,b){a=jl(b);
Ha("",`Name changed to ${a}`);f.name=a},function(a,b){a=ml(b);let c=vk(b,4),d=b[7],e=b[8],g=kl(b,9,d);b=kl(b,9+d,e);q(c,b,g);Ck||=J("div",m("game"),`<div style="margin-bottom:14px;color:var(--color1)">${L(520)}</div>`,"position: fixed; background: rgba(0, 0, 0, 0.55); padding: 17px 24px; box-shadow: var(--boxsp); text-align: center; z-index: 9; right: 0px; top: 81px; border: 1px solid #f3cd5a1f; border-right: none;");J("div",Ck,Fl(b,g,c),"margin-top:6px").M=a},function(a,b){a=ml(b);if(Ck){for(let c of Ck.children)if(c.M==
a){G(c);break}1==Ck.children.length&&(G(Ck),Ck=void 0)}},function(a,b){a=ml(b);var c=Rk(a);c&&!c.closed&&(c.O&&zl(c),Gl(c,a,new Uint32Array(b.buffer,4)))},function(a,b){if(!eb){a=ml(b);var c=dg[a];c&&Gl(c,a,new Uint32Array(b.buffer,4))}},function(a,b){jb=Date.now();a=ll(b,1);1==eb?(b=new Uint8Array(9),ob(b,1,D[271]()),ob(b,5,10*a),F(56,b),eb=2):(D[205](a),performance.now())},function(a,b){pb=vk(b,1);db=ll(b,4);ck&&jk();D[206]()},function(){pi(pe,Math.round(performance.now()-se)+"ms")},function(a,
b){uk(b,1)},function(a,b){a=ml(b);b=b[4];let c=D[207](a,b);q(c,b);c&&a!=l.K&&Hl[c-1]&&(Hl[c-1].innerHTML=Zj(b))},function(a,b){a=ml(b);let c=b[4],d=b[5];b=b[6];let e=D[208](a,c,d,b);e&&a!=l.K&&Il[e-1]&&(Il[e-1].children[0].style.color="rgb("+c+","+d+","+b+")")},function(){if(Qk){for(let a=0;a<Qk.children.length;a++)a!=Yk&&(Qk.children[a].style.width="0px",Qk.children[a].style.opacity="0");Qk.style.sc="0px"}m("wtr").innerHTML=L(529);m("quitbutton").dataset.title=L(736);Ok=J("span",m("wtr"),10,"display:inline-block;width:16px;text-align:right;color:var(--color1)");
Pk.Ta&&clearInterval(Pk.Ta);Bk=10;Pk.Ta=setInterval(Pk,1E3)},function(){if(ng&&!Vk){n=ra[1==Yk||2==Yk?6:Yk].slice();n[46]=pb+2E3*Wk;let a=[0,0,0,0,2,4,4,4,6];n[6]=a[Wk%a.length]}D[209]()},function(a,b){q(b,"teams");a=(b.length-1)/2;for(let c=1;c<a+1;c++)D[210](c,b[c],b[c+a])},function(a,b){a=1;kb(bl);bl.style.visibility="";bl.style.display="grid";var c=J("div",bl);J("div",c);J("div",c);J("div",c);J("div",c,"<div>"+L(478)+"</div>");c=1;let d;if(1<b.length){do{let p=vk(b,a);a+=3;let r=b[a+1]+(b[a+0]<<
8);a+=2;var e=b[a+1]+(b[a+0]<<8);a+=2;let t=b[a++];var g=b[a++],h=kl(b,a,g);a+=g;g=b[a++];var k=kl(b,a,g);a+=g;g=J("div",bl);let u=c;1==p&&(d=g,c--,u=99);let v=J("div",g),x;x=3>=u?"#f0f":10>=u?"#0f0":20>=u?"#ff0":"#fff";J("div",v,1<p&&u||"-",99<u&&"font-size:10px").className="pos";J("div",v,"","background:"+x).className="plc";J("div",g,Fl(k,h,p));h=J("div",g);h.className="plshape";for(k=0;k<t;k++)J("div",h,"",e&1<<k&&"color:#00db00");e="";1<p&&(e=(Math.round(10*r/t)/10).toString().split("."),e=e[0]+
".<span style='font-size:10px'>"+(e[1]?e[1].charAt(0):0)+"</span>");J("div",g,`<div>${e}</div>`);c++}while(a<b.length)}d&&bl.appendChild(d)},function(a,b){a=ml(b);b=b[4];dg[a].state=b;a!=l.K&&(a=Jl[dg[a].Ga])&&(a.children[0].children[0].checked=b)},function(){zb(L(714),1);rl()},function(){zb(L(711),1)},function(){zb(L(710),1)},function(a,b){Kl(b)},function(){Kl()},function(a,b){Ll.value=jl(b,1)},(a,b)=>{a=0;for(let c=1;c<b.length;c++){if(Ml){let d=Ml[c-1];d&&(d.textContent=b[c],d.style.color=b[c]?
"":"#787878")}b[c]>b[a+1]&&(a=c-1)}Yk=a;Xk()},(a,b)=>{ub.innerHTML=L([809,810][b[1]])},(a,b)=>{kb(bl);bl.style.visibility="";bl.style.display="block";a=1;let c=J("section",bl);cl.textContent="";do{var d=vk(b,a);a+=3;var e=b[a++],g=b[a++];let k=kl(b,a,g);a+=g;var h=b[a++];g=kl(b,a,h).split(",");a+=h;h=J("div",c);J("span",h,Fl("",k,d));J("img",h).src=`nehhon/Q${e}.webp`;J("span",h,"<span style='font-size:14px'>\u2020</span> "+g[1],"font-size:11px;color:red");d=J("div",h);for(e=2;e<g.length;e++)J("span",
d,g[e])}while(a<b.length)},(a,b)=>{if(a=dg[ml(b)])a:{b=new Uint32Array(b.buffer,4);!a.L&&4E3<b[0]&&(a.L=new Uint32Array(b[0]),a.ea=0);if(a.L)if(a.L.set(b,4E3*a.ea),a.ea++,4E3*a.ea>=a.L.length)b=a.L,a.L=void 0;else break a;b=new Uint32Array(b.buffer,4+b.byteOffset);a.Ua=Date.now();Hk(b);D[270]();eb=0;for(let c of fb)hb(c);fb.length=0}},(a,b)=>{D[269](ll(b,4),ll(b,8),vk(b,1))}];
window.gtccles=(a,b,c)=>{b=Zb(a,b);a=new Uint32Array(b.length+1);a[0]=a.length;a.set(b,1);for(let d=0,e=Math.ceil(a.length/4E3);d<e;d++){b=a.length-4E3*d;4E3<b&&(b=4E3);b=new Uint32Array(a.buffer,16E3*d,b);let g=new Uint32Array(b.length+1),h=new Uint8Array(g.buffer);g.set(b,1);h[0]=55;hl(h,1,c);E.C.send(g)}};let Yk;var se,pe,Ck;function El(a){a.style.color=""}var Kk,dg=NaN;window.clrNHtimer=function(){clearTimeout(E.za);E.za=void 0};
function Bl(){clearTimeout(E.ba);E.ba=void 0;E.za=setTimeout(D[179],3E4);E.host=!0;setTimeout(xl,5E3);D[66](l.K,1,1);xl()}window.checkAlive=function(a){Rk(a)||(D[73](a),q("KILL",a))};function tl(a){if(a=Rk(a))return a.O}function Rk(a){for(var b=E,c=0,d=b.G.length;c<d;c++)if(b.G[c].id==a)return b.G[c]}
function Nl(a,b,c){this.id=a;this.hc=[];b&&(this.s=b);if(c){this.O=c;q(b,565656);var d=this;b?(this.channel=c.createDataChannel("nehhof",{ordered:!0}),Ol(d)):c.ondatachannel=function(e){d.channel=e.channel;Ol(d)}}E.G.push(this);c||(F(9,il(this.id)),this.open())}function Pl(a){if(!a.closed){if(12E3<Date.now()-a.Ua)return a.close(),q("TIMEOUT");a.timeout=setTimeout(Pl,12E3,a)}}function vl(a){xk(D[62](),20,l.name);D[61](a,f.civi||0);wl(1)}
Nl.prototype.open=function(){this.La=!0;this.Ua=Date.now();this.Bb&&clearTimeout(this.Bb);q("DATACHANNEL OPEN");q(this);this.timeout=setTimeout(Pl,12E3,this);if(B.A){if(void 0==E.ba&&D[178]()||!D[163](this.id))return this.close();E.La++;void 0!==E.ba&&(q(E.La,E.ob,this.id),E.La==E.ob&&Bl())}else this.s&&(l.eb=!0,vl(this.id))};var Al;
Nl.prototype.send=function(a){var b=new Uint32Array(a.length+1);b[0]=b.length;b.set(a,1);if(this.channel){if("open"==this.channel.readyState)for(let c=0,d=Math.ceil(b.length/4E3);c<d;c++){let e=4E3*c;a=b.length-e;4E3<a&&(a=4E3);a=new Uint32Array(b.buffer,4*e,a);this.channel.send(a)}}else Al=b};
function Ql(a,b,c){for(let e=0,g=Math.ceil(a.length/4E3);e<g;e++){var d=a.length-4E3*e;4E3<d&&(d=4E3);d=new Uint32Array(a.buffer,16E3*e,d);let h=new Uint32Array(d.length+1),k=new Uint8Array(h.buffer);h.set(d,1);k[0]=b;k[1]=c||0;E.C.send(h)}}function ql(){Al&&(Ql(Al,22),Al=void 0)}window.rlyCheck=ql;window.nppsnd=function(a,b,c){a=Zb(a,b);b=new Uint32Array(a.length+1);b[0]=b.length;b.set(a,1);Ql(b,26,c)};Nl.prototype.close=function(a){console.trace();if(this.O)return this.O.close();a||Rl(this)};
function zl(a,b){var c=a.O;if(c){var d=a.channel;d&&(d.onopen=null,d.onmessage=null,d.onclose=null,d.close());c.onicecandidate=null;c.onconnectionstatechange=null;c.oniceconnectionstatechange=null;c.onsignalingstatechange=null;c.Ac=null;c.close();q(a.id);q("ALT-8");a.O=null;a.channel=null;b||F(9,il(a.id));a.open()}}
function Gl(a,b,c){!a.L&&4E3<c[0]&&(a.L=new Uint32Array(c[0]),a.ea=0);if(a.L)if(a.L.set(c,4E3*a.ea),a.ea++,4E3*a.ea>=a.L.length)c=a.L,a.L=void 0;else return;c=new Uint32Array(c.buffer,4+c.byteOffset);a.Ua=Date.now();Hk(c);D[60](b)}
function Ol(a){const b=a.id,c=a.channel;c.binaryType="arraybuffer";q(a,"SETUP");c.onopen=function(){a.open()};c.onmessage=function(d){"closed"==c.readyState||a.closed||(d=new Uint32Array(d.data),Gl(a,b,d))};c.onclose=function(d){Rl(a);c.onmessage=null;q("DATACHANNEL CLOSE",a.id,d)};c.onerror=function(d){q(d,"ONERROR")};c.onbufferedamountlow=function(){var d=a.hc;d.length&&(d=d.shift(),c.send(d),q("SEND22",d))}}
function sl(a,b){const c=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),d=new Nl(a,b,c);d.Bb=setTimeout(function(){zl(d)},6E3);c.onicecandidate=function(e){q("ICE",e);e.candidate&&F(5,qb(a,JSON.stringify(e.candidate)))};c.onconnectionstatechange=function(e){q(e,c.connectionState,d.closed);d.closed||("connected"==c.connectionState&&(d.ready=!0),"disconnected"==c.connectionState&&Rl(d))};c.oniceconnectionstatechange=function(e){q(e);if(!d.closed){q(c.iceConnectionState,
d.id);if(!d.ready&&"failed"==c.iceConnectionState)return zl(d);"failed"!=c.iceConnectionState&&"disconnected"!=c.iceConnectionState||Rl(d)}};c.onsignalingstatechange=function(e){q(e);d.closed||"closed"==c.signalingState&&Rl(d)};return c}
function Sl(){function a(k){for(var p=-1,r=0,t=k.length;r<t;r++)p=p>>>8^b[(p^k.charCodeAt(r))&255];return(p^-1)>>>0}let b="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".split(" ").map(function(k){return parseInt(k,16)}),
c=navigator.language,d=Intl[atob("RGF0ZVRpbWVGb3JtYXQ=")]().resolvedOptions()[atob("dGltZVpvbmU=")],e=navigator.hardwareConcurrency,g=navigator.deviceMemory;if(z){var h=z.getExtension(atob("V0VCR0xfZGVidWdfcmVuZGVyZXJfaW5mbw=="));h=z.getParameter(h[atob("VU5NQVNLRURfUkVOREVSRVJfV0VCR0w=")]);h.replaceAll&&(h=h.replaceAll(",",".|"))}return[a(h+d),a(e+"."+g+h),a(e+"."+g+h+c),a(e+"."+g+h+d),a(h+d+c)]}
var Tl,Ik=()=>{if(!Tl){var a=Sl(),b=new Uint8Array(1+4*a.length);for(let c=0;c<a.length;c++)ob(b,4*c+1,a[c]);F(48,b);Tl=1}};ib.prototype.send=function(a){this.C.send(JSON.stringify(a))};function Mb(a){var b=E;if(1!=b.C.readyState)return b.C.addEventListener("open",()=>Mb(a));D[266](1);zh=void 0;Ik();b=new Uint8Array(5);b[1]=parseInt(f.civi)||0;hl(b,2,Gk());F(31,b);q(b);b=a.length?Jk(3,nl(a.substr(1))):Jk(3,ol(a));Kk?Lk(b):(tk(),E.C.send(b))}
function Ul(){if(!B.A){var a=Math.floor(Date.now()/1E3);for(let c=0;2>c;c++){var b=Eb[c].children;for(let d of b)(b=d.children[2])&&void 0!=d.I&&(b.innerHTML=Math.floor((a-d.I)/60)+" "+L(558))}setTimeout(Ul,5E3)}}var Eb;function Cl(a){if(Eb&&!(2>Eb.length))for(let b=0;2>b;b++){let c=Eb[b].children;for(let d of c)if(d.nb==a)return d}}var Gb,Fb,Hb,Vl=a=>a+(L(716)||"v")+a;
function yl(a){if(m("index")){var b=ml(a),c=Math.floor(Date.now()/1E3);b&&(J("div",m("index"),b).id="ppop");if(a&&4<a.length){b=740>window.innerWidth||650>window.innerHeight?m("index"):Db;var d=b.scrollTop;let k=4;do{var e=a[k++];let p=a[k++],r=a[k++],t=(a[k++]<<8)+a[k++];var g=a[k++],h=(a[k++]<<16)+(a[k++]<<8)+a[k++];let u=a[k++],v,x;1==g?v=!0:2==g&&(x=!0);g=v?Gb:Fb;let A=document.createElement("div");r&&50==p&&(A.Za=1,6>e?p=6:p=e+(2-e%2));let y=A.Za?Vl(p/2)+"+":wk(new Uint8Array(a.buffer,k,u));
k+=u;r&&Wa&&!A.Za&&(y={"BR 1500":L(484)+" 1500","1V1":Vl(1),"FAST 1V1":L(564)}[y]||y);let w=h;!v&&r&&(A.className="pbl");h=J("div",A);J("div",h,"",!v&&x&&"color:#00c8c8").className="redCircle"+(!v&&" rgr"||"");h=J("div",A,y?Wl(y):L(85),!w&&"color:red");1==f.sid&&(J("button",h,"X","margin-left: 20px; margin-top: -11px; background: rgba(255, 0, 0, 0.38); color: red; font-size: 23px; ").onclick=()=>Xl(w,0),J("button",h,"X","margin-left: 24px; margin-top: -11px; background: rgba(255, 255, 0, 0.38); color: red; font-size: 23px; ").onclick=
()=>Xl(w,1));J("div",A,r&&!v?x?L(556):L(557):~~(t/60)+" "+(L(558)||"min")).className="tbtime";J("div",A,`<span>${e}</span><span>/</span><span>${p}</span>`).className="tbplyrs";r&&v&&2<p&&(A.style.filter="hue-rotate(311deg)");A.nb=w;t=c-t;if(!r||v)A.I=t,A.ka=t,v&&(A.ka*=-1);A.zb=x;A.$b=r;!v&&w&&(A.onclick=rk);w||(A.style.opacity=.5);r&&!v&&(A.ka=2E9*p+(x?1:0));e=!0;for(let C of g.children)if(C.ka<=A.ka){g.insertBefore(A,C);e=!1;break}e&&g.appendChild(A);g.offsetParent?A.Tb=Yl:A.style.animation="unset"}while(k<
a.length);ya||(b.scrollTop=d)}Ul.dc||(Ul.dc=!0,setTimeout(Ul,5E3))}}function Yl(){this.style.animation="unset";this.Tb=void 0}function Dl(a){Gb.appendChild(a);setTimeout(()=>{a.style.height="";a.style.opacity="";a.style.border=""},250)}function Zl(){let a=this.D;f.avatar=a;q(this.D);F(19,fl(a));P(this.parentNode);m("avtimg").src="nehhon/Q"+a+".webp"}
function wb(){let a=zb("",1);a.id="account";M("p",a,15,"color:var(--color1)");let b=Ja(a,f.name);b.minLength=1;b.maxLength=32;let c=M("button",a,443,"margin-left:8px;margin-bottom:6px");M("div",a,545,"color:#ccc;font-size:9px");J("button",a,`{${L(703)}} >`,"margin-top:15px;color:#81ff81;font-size:16px;letter-spacing:1px;text-transform:uppercase").onclick=()=>{Cb(a);let h=Pc("",1);$l=M("div",h,53,"gap:20px;display:flex;flex-direction:column;align-items:flex-start");F(43)};M("p",a,546,"color:var(--color1)");
let d=J("div",a);var e=K("img",d,"cursor:url(nehhon/hand.gif),default;box-shadow:#ff00008f 0px 0px 38px;border:1px solid rgba(255, 0, 0, 0.48);");e.src="nehhon/Q"+(f.avatar||113)+".webp";e.id="avtimg";var g=J("div",J("div",d,"","max-height:216px;overflow-y:auto;width:57px;margin:9px"));g.id="avsel";e.onclick=function(){if(""==g.innerHTML)for(let h=0;199>=h;h++){let k=J("div",g,"");k.onclick=Zl;k.D=h}g.show()};c.onclick=function(){let h=b.value;q(h,"name");h&&F(13,Fa(" "+h))};M("button",a,442,"display:block;margin-top:20px;background:#920000").onclick=
function(){f.sid="";f.nm="";location.reload()}}var $l,Ll;
function Kl(a){q(a);var b=$l;kb($l);if(a){let g=f.sid;var c=a[1];let h=vk(a,2),k=g==h;var d=k?kl(a,8,24):0,e=kl(a,8+(k?24:0),c);c=8+(k?24:0)+c;Ia(b,e);if(k){e=J("div",b);J("span",e,L(704)+" -> ","color:var(--color1)");Ll=Ja(e,d);Ll.style.width="216px";Ll.style.fontSize="11px";Ll.readOnly=!0;let p=K("button",e,"margin-left:9px;width:16px;height:16px;background:url(nehhon/refresh.webp);background-size:cover");p.onclick=()=>{F(42);p.style.visibility="hidden"}}d=J("div",b);J("div",d,L(707)+":","font-size:12px;");
d=K("div",d,"border-left:2px solid rgba(255, 255, 255, 0.19);padding:4px;margin-top:9px;min-width:185px;display:grid;grid-template-columns:repeat(2,max-content);align-items:center;gap:2px 10px");do{let p=vk(a,c);c+=3;e=a[c++];let r=kl(a,c,e);c+=e;let t=J("div",d,Fl("",r,p),(p==h?"color:var(--color1);":"")+"font-size:11px");if(g==h&&p!=h){let u=J("div",d,"\u00d7","color:red;cursor:url(nehhon/hand.gif),default");u.onclick=()=>{F(44,il(p));G(u);G(t)}}else J("div",d);q(r,p)}while(c<a.length);M("button",
b,k?706:712).onclick=()=>{confirm(L(713))&&(F(41),Kl())}}else{M("div",b,703,"color:var(--color1)");a=J("div",b);let g=Ja(a,"");g.style.width="159px";g.placeholder=L(704);g.maxLength=32;M("button",a,708,"margin-left:8px").onclick=()=>{let k=g.value;q(k);k&&F(39,Fa(" "+k))};b=K("div",b,"border-top:2px solid #ffffff45;padding-top:20px");let h=Ja(b,"");h.style.width="105px";h.style.textTransform="uppercase";h.placeholder=L(709);h.maxLength=5;M("button",b,705,"margin-left:8px;margin-bottom:6px").onclick=
()=>{let k=h.value;k&&F(40,Fa(" "+k))}}}
function wl(a){if((l.s||a)&&!B.id){$k();ag.innerHTML="";N("index");Of();Cb(m("loadingOnline"));pd("game");m("multi21").style.display="flex";Of();a=l.Na;q(l.v||NaN);B.id=a;B.m=1;m("buttons").innerHTML="";ck?(pd("wtr"),m("wtr").innerHTML=L(526)):N("wtr");a=`<span style="margin-left:80px;"><input id="onlineID" type="text" value="https://tza.red/#${l.Na}" /><button id="copyButton">${L(385)}</button></span>`;if(l.s){var b=function(c){var d=D[70](),e=!E.G.length&&qe?1:0;c<d+e&&(c=d+e);q(c,d);c=Sk(c);D[150](c+
1);D[58]()};m("onlineTopInfo").innerHTML=` <button id="addAI" style="padding:6px;margin-right:26px;align-self:center;">${L(90)}</button>${a}<span id="spnpld" style="margin-left:auto"><div id="nplayersO"><img src="nehhon/pop.gif" /><span id="mmplayers">${l.v.max}</span><div id="rmmxctrl"><div id="sumpl">&#9650;</div><div id="respl">&#9660;</div></div></div></span>`;m("sumpl").onclick=function(){D[67]()||b(l.v.max+1)};m("respl").onclick=function(){D[67]()||b(l.v.max-1)};m("addAI").onclick=function(){if(!D[67]()){var c=
D[70]();50>c+1&&(c+(E.G.length?0:1)>=l.v.max&&b(l.v.max+1),xk(D[56](0,0,16777216*Math.random(),0,1),17,"AI"),Tk(),D[58]())}}}else m("onlineTopInfo").innerHTML=a;m("copyButton")&&(m("copyButton").onclick=function(){m("onlineID").select();document.execCommand("Copy")},m("onlineID").value="http://tza.red/#"+B.id);l.s?(location.replace("#"+B.id),m("buttons").innerHTML='<button id="startbutton">'+L(92)+' \u25b6</button><button style="display:none" id="rndmapreturn">'+L(50)+'</button><button id="optionbutton">'+
L(48)+'</button><button id="maploadOnline"/>'+L(93).split("|")[0].toUpperCase()+'</button><button id="closebutton">'+L(13)+"</button>",m("startbutton").onclick=Mk,m("optionbutton").onclick=fe,m("closebutton").onclick=sk,m("maploadOnline").onclick=am,m("rndmapreturn").onclick=function(){pd("addAI");m("optionbutton").style.display="inline-table";N("rndmapreturn");D[152](l.v.pb);ek();b(l.v.pb)}):(m("buttons").innerHTML='<button id="quitbutton">'+L(91)+"</button>",m("quitbutton").onclick=nb)}}var ul;
function Rl(a){q(a);console.trace();var b=Rk(a.id);if(b&&!b.closed&&a==b)if(b.closed=!0,!b.s||l.s||B.A){q(b);if(E.host){a=E.G;var c=a.indexOf(b);-1<c&&a.splice(c,1);D[73](b.id)}q(b.s,B.A,"admindel");F(14,il(b.id));b.s&&B.A&&!lk&&F(10,il(b.id));B.A||(b=Rc(b.id))&&J("li",ag,Ch(L(94),b),"color:#ff4b4b")}else nb(L(95)),ic("ressurect")}function Xl(a,b){confirm("AUSB")&&(a=Bb(a),a[4]=b,F(16,a))}window.thereIsAnIdiot=function(a){q(a);if(l.K==a)return Ha(L(97)),sk();(a=Rk(a))&&a.close()};
function bm(a,b){a=J("a",a,L(112));a.className="returnmenu";a.onclick=Nf;b&&a.addEventListener("click",b)}var Il=document.getElementsByClassName("ucolor"),cm=document.getElementsByClassName("username"),Hl=document.getElementsByClassName("race"),dm=document.getElementsByClassName("team");function xl(){E.host&&qe&&(D[156](),xl.I=Date.now(),setTimeout(xl,5500))}window.pong=function(a){var b=Date.now()-xl.I;Rk(a)&&(D[157](a,b),q("pong"),m("game")&&yk())};
function Nk(a){if(l.s&&"BUTTON"!=a.target.tagName&&"DIV"!=a.target.tagName&&"ucolor"!=a.target.className){Nk.J&&(G(Nk.J),Nk.J=void 0);var b=a.pageX;a=a.pageY;var c=this.Ga;q(c);var d=J("div",m("game"));d.style.top=a+"px";d.style.left=b+"px";d.className="onlPlayer";Nk.J=d;q(this.Wa,this.Ga);if(this.Wa.name)M("button",d,100).onclick=function(){D[71](c);l.Dc.qc("maxPlayers",D[70]());G(d);Nk.J=void 0};else{var e=this.Wa;b=document.createElement("button");b.onclick=function(){D[74](c,-1);G(d);Nk.J=void 0};
b.innerHTML=L(101);d.appendChild(b);b=document.createElement("button");b.onclick=function(){D[74](c,1);G(d);Nk.J=void 0};b.innerHTML=L(102);d.appendChild(b);this.Nb||(b=document.createElement("button"),b.onclick=function(){q(22222,e);D[71](c);Tk();G(d);Nk.J=void 0},b.innerHTML=L(100),d.appendChild(b),e&&(J("button",d,"BAN").onclick=function(){q(22222,e);F(18,il(e));D[71](c);G(d);Nk.J=void 0}))}b=document.createElement("button");b.onclick=function(){G(d);Nk.J=void 0};b.innerHTML=L(13);d.appendChild(b)}}
function yk(){var a=m("multiplayertable");if(a){var b=D[28]()-1||14;D[180]();var c=58;if(ck){6<b&&(b=6);var d=D[70]();6<=d&&(b=d+2-d%2,d=D[28]()-1,b>d&&(b=d))}7<b&&(c=54);8<b&&(c=49);9<b&&(c=44);10<b&&(c=42);11<b&&(c=39);12<b&&(c=37);14<b&&(c=35);15<b&&(c=33);16<b&&(c=32);26<b&&(c=31);27<b&&(c=30);28<b&&(c=29);29<b&&(c=28);30<b&&(c=27);31<b&&(c=26);32<b&&(c=25);33<b&&(c=24);34<b&&(c=23);35<b&&(c=22);a.innerHTML="";Jl.length=0;for(d=0;d<b;d++){let e=K("tr",a,!1);J("td",e,"<div></div>","height:"+c+
"px").className="ucolor";J("td",e,"  <span style='color:#ffffff73'>&horbar;</span> ").className="username";J("td",e).className="race";ck||(J("td",e).className="team");nk&&Jl.push(J("td",e,"","text-align:center"))}6>b&&J("tr",a,"","height:"+(260-46*b)+"px");D[54]();a=a.clientHeight-67;525<a&&(a=525);m("msgs").style.height=a+"px";m("msgs").scrollTop=m("msgs").scrollHeight}}window.setupPlayermenu=yk;function al(){if(l.s)D[188]("\ud83d\udd12"!=this.innerHTML)}
window.mapWindow=function(){var a=m("showGameInfo");a&&(kb(a),a=K("span",a,"display:block;width:516px;padding:4px 19px"),M("div",a,55,"color:var(--color1);text-align:center;border-bottom:2px solid #ffffff38;padding-bottom:3px"),D[240](0),J("div",a,Wl(Nd),"margin-top:19px;color:#fff"),D[240](1),J("div",a,Wl(Nd),"color:#ecd078;margin-left:4px;margin-top:11px;font-size:12px"),D[240](2),Nd&&J("div",a,"<span style='color:#fff'>"+L(57)+":</span> "+Wl(Nd),"margin-top:11px;font-size:12px"))};var em;
function Lk(a){em?(em=a,window.grecaptcha.reset(),m("nrobotdiv").parentNode.parentNode.parentNode.style.cssText=""):(em=a,a=document.createElement("script"),a.src="https://www.google.com/recaptcha/api.js?onload=cllrobot&render=explicit",document.body.appendChild(a))}window.cllrobot=function(){Pc('<div class="g-recaptcha" id="nrobotdiv"></div>');q(window.grecaptcha);window.grecaptcha.render("nrobotdiv",{callback:fm,theme:"dark",sitekey:"6Lcw5wAaAAAAAC8nGPdUK8dE8LE2BcOFXI7lVtyM"})};
function fm(a){a=Fa(a);let b=new Uint8Array(2+a.length+em.length);b[0]=23;b[1]=em.length;b.set(a,2);b.set(em,2+a.length);E.C.send(b);em=1;tk();P(m("nrobotdiv").parentNode.parentNode.parentNode)}var Ml,Qk;function Ek(){fe(5)}
window.multiOptions=function(a,b){var c=m("showGameInfo");if(c){c.innerHTML="";var d=ac(a,b);a=d[1];var e=d[2],g=d[3],h=d[4],k=d[7],p=d[6],r=d[12],t=d[0],u=d[9],v=d[10],x=d[18],A=d[19];if(!l.s){n=[];for(let w=0;w<b;w++)n[w]=d[w]}if(ng&&!Vk){c.style.background="none";c.style.padding="0px";c.style.boxShadow="unset";c.style.width="unset";c.style.border="unset";c.style.backdropFilter="unset";var y=[0,Ch(L(735),2),0,Ch(L(735),3)+"<br>"+L(484),0,Ch(L(735),4)+"<br>"+L(484),3,Ch(L(735),2)+"<br>"+L(523),4,
Ch(L(735),2)+"<br>"+L(394),5,L(717)+"<br>"+L(484)];let w=J("section",c);Qk=w;Ml=[];for(c=0;c<y.length;c+=2){let C=c/2;a=y[c];e=y[c+1];let H=J("div",w);Ff(H,84*-C);g=J("div",H);J("div",g,e);Ml.put(J("span",g));H.onclick=()=>{for(let I of w.children)I.style.outline="";H.style.outline="1px solid #00ff0047";F(45,fl(C))};85<Wk&&3==a&&P(H)}}else{c.style.cssText="";b=[L(28),L(29),L(30),L(31),L(32),L(33),L(525),L(524)];1E9<=a&&(a="***");1E9<=e&&(e="***");1E9<=g&&(g="***");1E9<=h&&(h="***");nk&&(t="Auto");
b=[L(1),t,L(26),Xa[p]&&Xa[p].name,L(42),v,L(27),b[k],L(11),u,L(35),L([36,37,38,39][r]),L(396),x+" "+L(558),L(398),L([399,400,401][A])];D[275]()&&(J("button",c,"Custom version! click here to see the changes","padding:5px;background:#ffff00;color:#000;margin:auto;margin-bottom:18px;font-size:14px").onclick=()=>{ge(1)});J("span",c,`${a}<img class='resource' src='nehhon/gold.gif' /> ${e}<img class='resource' src='nehhon/wood.gif' /> ${g}<img class='resource' src='nehhon/food.gif' /> ${h}<img class='resource' src='nehhon/stone.gif' />`,
"text-align:center;width:100%;display:block;border-bottom:2px solid rgb(156 137 79 / 27%);margin-bottom:9px;padding-bottom:9px");a=J("div",c);for(y of b)J("div",a,y);l.s||(J("span",c,"+ "+L(461)+"...","cursor:url(nehhon/hand.gif),default;color:#ffd75dd1;font-size:11px;margin-top:12px;display:block").onclick=Ek);y=sa();q("PR",y);y&&J("span",c,"<span style='color:#0ff;text-shadow:0px 0px 8px'>\u2714 </span>"+y,"color:rgb(203,255,238);position:absolute;top:20px;right:21px")}}};if(location.search){let a=new URLSearchParams(location.search);if(a.has("desk")){let b=new XMLHttpRequest;b.open("GET","http://localhost:41334"+location.search,!0);b.send(null);Ha("","Desktop app open")}console.log(a)}function gm(a){if(Lb)Lb=!1;else if(!l.s){if(a)return location.reload();a=decodeURI(location.hash.substr(1));Lb=!0;Mb(a);Nb()}}
function hm(a){if("RandomMap"==a)return im;if("Settings"==a)return jm;if("About"==a)return km;if("Guide"==a)return Le;if("Changelog"==a)return Oe;if("Ranking"==a)return el;location.hash=""}function bb(a){var b=location.hash.substr(1);if(b){if("#"==b.charAt(0))return setTimeout(gm,500,a);B.A||hm(b)&&hm(b)()}}var ag;
function Ag(a,b,c,d,e,g,h,k,p){b||ic("chat");var r=e?`<span class="ttag">[${L(21)}]</span>`:"";if(c){e=D[77]()?nd:ag;if(5!==c){if(b)a=`<span style="color:var(--color1)">${L(407)}</span>`;else if(a=Wl(Gd(Hd(a,d))),"https://media.tenor.com/"==a.substring(0,24)){var t=a;a=""}else a=Th(a);a=J("li",e,"<span>"+r+Rc(g,c)+" \u2014</span> "+a,e==nd&&void 0!=h&&`border-color:rgb(${h},${k},${p})`||"");t&&(a=J("img",a),a.src=t,a.className="igif")}else J("li",e,a);e.scrollTop=e.scrollHeight;D[77]()&&Uh()}}
window.chat=Ag;function Uh(){m("msgs1")&&(11==m("msgs1").children.length&&m("msgs1").removeChild(m("msgs1").children[0]),1==m("msgs1").children.length&&(lm=setInterval(mm,16E3)))}var lm;function mm(){m("msgs1")&&m("msgs1").children[0]&&m("msgs1").removeChild(m("msgs1").children[0]);m("msgs1")&&0==m("msgs1").children.length&&clearInterval(lm)}function Wl(a){return String(a).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
function Wf(a){let b=a;if(B.A){var c=nd;a||(a=m("msginputGame").value);m("msginputGame").value=""}else c=ag,a||(a=m("msginput").value),m("msginput").value="";if(!B.m){if("hmspawn"==a.substr(0,7)){ne(D[110]);return}if("hmpetleva"==a){D[200](0);return}}""!==a&&(b||(a=Wl(Th(a))),K("li",c,`border-color:${l.color}`).innerHTML+=`
    <span>${m("teamchat")&&m("teamchat").checked&&`
    <span class="ttag">[${L(21)}]</span>`||""}`+Rc(l.K,-1)+" \u2014</span> "+(b?`<img src="${a}" class="igif">`:a),B.m&&(xk(D[75](),1024,a),D[76](a.length,m("teamchat")&&m("teamchat").checked)),c.scrollTop=c.scrollHeight,B.A&&Uh())}var nm=document.getElementsByClassName("ucolor1"),sm=document.getElementsByClassName("username1"),tm=document.getElementsByClassName("race1"),um=document.getElementsByClassName("team1");
function vm(a){var b=1;2===a.button&&(b=-1);this.innerHTML=D[51](this.N,b)||"\ud83d\udec7"}function wm(a){var b=1;2===a.button&&(b=-1);ck?(a=(this.bb+b)%4,0>a&&(a=3),this.bb=a,this.innerHTML=Zj(a),F(29,fl(a))):this.innerHTML=Zj(D[52](this.N,b))}
function xm(){q(this.Xa,this);this.Xa&&(l.color=this.value,f.color=this.value);let a=parseInt(this.value.substr(1),16);if(ck)F(30,il(a));else D[57](this.N,a);"TD"==this.parentNode.tagName?this.style.color=this.value:Il&&Il[this.N-1]&&(Il[this.N-1].children[0].style.color=this.value,G(this))}function ym(a){D[50](1+4*a.shiftKey+99*a.altKey)}function zm(a){D[50](-1-4*a.shiftKey-99*a.altKey)}
window.presetuprndtable=function(a){if(m("RandomMap"))pd("RandomMap");else{var b=J("div",document.getElementsByTagName("main")[0],`<div>
        <div id="spbdy"><div id="load1" style="border-right:0px">${L(671)}</div><div id="edmap1">${L(105)}</div></div>
        <div>
        <table class="players" id="oneplayertable">
        <tbody id="oneplayertbody">
        </tbody>
        </table>
        <div style="display:flex;justify-content:center;gap:30px">
        <button id="start2" class="start startButton">${L(92)} \u25b6</button>
        <button class="start optionsButton" id="start1" >${L(48)}</button>
        </div>
        </div>
        </div>`);b.id="RandomMap";b.className="playermenu";bm(b);m("start1").onclick=fe;m("start2").onclick=mk;m("load1").onclick=function(){am()};m("edmap1").onclick=Am}b=m("oneplayertbody");b.innerHTML="";b.insertAdjacentHTML("beforeend",`<tr style="color:#f3cd5a"><td></td><td id="addremove"><button id="addPlayer">+</button><button id="removePlayer">\u2212</button></td><td>${L(103).toUpperCase()}</td><td>${L(21).toUpperCase()}</td></tr>`);for(let c=0;c<a;c++)b.insertAdjacentHTML("beforeend",'<tr><td class="ucolor1"></td><td class="username1"></td><td class="race1"><button></button></td><td class="team1"><button></button></td></tr>');
m("addPlayer").onclick=ym;m("removePlayer").onclick=zm};var Bm=["VIP"];function Rc(a,b){var c=dg[a];b=c&&c.name||0<b&&Gd(Hd(b,20))||-1==b&&l.name||"";let d=0;if(c){d=c.id;let e=c.role;1==e&&(d=Bm[e-1])}return Fl(c&&c.clan,b,d,!a&&B.m)}
function Fl(a,b,c,d){return`<span class="nmtg">${a&&`<span class="clanTag">{${Wl(a)}}</span>`||""}<span ${d?"style='color:#ff0'":""} class="usnm">${Wl(b)}</span>${c&&`<span class="verified"${"string"==typeof c?" style='color:#ff6eff'":""}>#${c}</span>`||""}</span>`}
window.recvtrib=function(a,b,c,d,e,g){e=Rc(g,e);a="-> <span style='color:#0f0'>"+(a&&`${a} <img src="nehhon/gold.gif">`||"")+(b&&`${b} <img src="nehhon/wood.gif">`||"")+(c&&`${c} <img src="nehhon/food.gif">`||"")+(d&&`${d} <img src="nehhon/stone.gif">`||"")+"</span>";m("msgs1").innerHTML+="<li>"+Ch(L(449),a,e)+"</li>";Uh()};
function Cm(a){q(a,this);var b=document.createElement("input");b.type="color";b.N=this.Gb;b.value=this.Fb;b.Xa=!0;b.onchange=xm;b.onblur=xm;b.style.cssText=`position:absolute;top:${a.clientY}px;left:${a.clientX}px;width:0px;height:0px;opacity:0;padding:0px;border:0px`;document.body.appendChild(b);setTimeout(function(){b.click()},25)}var Jl=[];function Tc(a){return(a=dg[a])&&255!=a.flag?`<span class="flag" style="background-position-x:-${21*a.flag}px"></span>`:""}
window.onlineTable=function(a,b,c,d,e,g,h,k,p,r){ck&&(r=!0);let t=!D[246]();if(m("teamlock")){pi(m("teamlock"),r?"\ud83d\udd12":"\ud83d\udd13");var u=0==g,v=Sc(d),x=g==l.K;b||="\ud83d\udec7";a=Rc(g,a);dg[g]&&(dg[g].Ga=e);var A=Rk(g);A&&(a+=`<span style='opacity:.5;font-size:8px;color:#${A.O&&"0f0"||"ff0"}'>&nbsp;${A.O&&"P2P"||"proxy"}</span>`);p&&(a+=`<span style='opacity:.5;margin-left:4px;font-size:8px;color:#${"0ff"}'>${p}ms</span>`);if(m("multiplayertable")){p=m("multiplayertable").getElementsByTagName("tr");
var y=e+1;d=parseInt(v.substr(1),16);d=[d>>16&255,d>>8&255,d&255];if(Il[e]){Il[e].children[0].style.color="rgb("+d[0]+","+d[1]+","+d[2]+")";cm[e].innerHTML=`<div>${a+Tc(g)}</div>`;if(l.s&&x||A&&A.s)cm[e].style.color="#f3cd5a";cm[e].style.color;if(u){if(h){t?(dm[e].innerHTML=b,l.s&&(kb(dm[e]),a=J("button",dm[e],b),a.onmousedown=vm,a.N=y)):kb(dm[e]);dm[e].style.opacity="0.25";Il[e].style.opacity="0.25";cm[e].style.opacity="0.25";return}cm[e].style.color="#fff900"}if(!h&&(x||u&&l.s)){if(Hl[e].children[0]){dm[e]&&
(dm[e].children[0]?dm[e].children[0].innerHTML=b:dm[e].innerHTML=b);Hl[e].children[0].innerHTML=Zj(c);return}dm[e]&&(dm[e].innerHTML="",r&&!l.s?dm[e].innerHTML=b:(a=J("button",dm[e],b),a.onmousedown=vm,a.N=y,u&&(a.style.color="#fff900")));a=document.createElement("button");a.onmousedown=wm;a.N=y;a.bb=c;a.innerHTML=Zj(c);Hl[e].appendChild(a);u&&(a.style.color="#fff900");Il[e].onclick=Cm;Il[e].Gb=y;Il[e].Fb=v}else(t?dm[e]&&(l.s||x&&!r?(kb(dm[e]),a=J("button",dm[e],b),a.onmousedown=vm,a.N=y):dm[e].innerHTML=
b):kb(dm[e]),h)?u||(Hl[e].innerHTML=`(${Gd(Hd(k,20))})`):Hl[e].innerHTML=Zj(c);nk&&(kb(Jl[e]),c=Dm(Jl[e]),c.checked=dg[g].state,x?c.onclick=Em:(c.disabled=!0,c.parentNode.style.cursor="not-allowed"));l.s&&(p[e].onclick=Nk,p[e].Wa=g,p[e].Nb=x,p[e].Ga=e+1)}}}};function Em(){if(Bk)return this.checked=!this.checked;q(this.checked);F(35,fl(this.checked?1:0))}
window.randomMapTable=function(a,b,c,d,e){for(d=d.toString(16);6>d.length;)d="0"+d;d="#"+d;sm[e].innerHTML=`<input value="${Gd(Hd(a,20))}" type="text">`;a=sm[e].getElementsByTagName("input")[0];a.onchange=Fm;a.ya=e+1;a.maxLength=20;a=um[e].getElementsByTagName("button")[0];a.N=e+1;a.onmousedown=vm;a.innerHTML=b||"\ud83d\udec7";b=tm[e].getElementsByTagName("button")[0];b.N=e+1;b.onmousedown=wm;b.innerHTML=Zj(c);var g=document.createElement("input");g.type="color";g.N=e+1;g.value=d;g.Xa=0==e;g.style.color=
d;nm[e].appendChild(g);g.onchange=xm;nm[e].onclick=()=>g.click()};function im(){N("index");D[67]()&&ta();D[50](0,parseInt(f.civi))}function am(){var a=document.createElement("input");a.type="file";a.accept=".tzared";a.onchange=Vd;a.click()}function Gm(){N("index");if(m("CustomMap"))N("customMapcont"),pd("CustomMap");else{var a=J("div",document.getElementsByTagName("main")[0],`<table id="mapcache"></table>
<div id="customMapcont" style="display:none">
<table class="players" id="customaptable">
<tbody id="custombody">
</tbody>
</table>
<div style="display:flex;gap:15px;margin-top:15px;justify-content:center">
<button  id="startCustom" class="start startButton">${L(92)}</button>
<button id="editCustom" class="start"> ${L(105)}</button>
</div>
</div>`);a.id="CustomMap";a.className="playermenu";bm(a,function(){G(m("CustomMap"))});m("startCustom").onclick=function(){N("customMapcont");mk()};m("editCustom").onclick=Am}}function Oh(a){let b=document.createElement("input");b.type="file";b.accept=".tzmod";b.onchange=()=>{let c=b.files[0],d=new FileReader;d.onload=a;d.readAsArrayBuffer(c)};b.click()}
function yf(a){let b=document.createElement("input");b.type="file";b.accept=".tzcnt";b.onchange=()=>{let c=b.files[0],d=new FileReader;d.onload=a;d.readAsText(c)};b.click()}function Vd(){B.m||O||Gm();var a=this.files[0];q(a);var b=new FileReader;b.onload=Hm;b.readAsArrayBuffer(a)}window.rcgini=function(a,b){n=ac(a,b).slice(0)};function Im(){bc(function(){D[122]();Ed();rf();D[244]();Ad()})}
function Hm(a){q(a);zh=void 0;Lh();B.m&&(l.v.pb=l.v.max);a=a.target.result;var b=new Uint8Array(a,4),c=(new Uint32Array(a,0,1))[0];q(c,b);var d=b.length;a=D[44](d);for(var e=0;e<d;e++)window.HEAPU8[a+e]=b[e];b=D[45](4*c,d,B.m,1);if(O)b?Im():Jm(()=>{D[45](4*c,d,B.m);Im()});else{if(!b)return Ha("too many players for this custon map");if(B.m)return N("addAI"),N("optionbutton"),m("rndmapreturn").style.display="inline-table",xd(m("nplayersO")),m("maploadOnline").value="",B.Vb=!0;N("RandomMap");pd("customMapcont");
m("custombody").innerHTML="";Km.length=0;D[46]()}}function qc(a,b){var c=new XMLHttpRequest;c.open("GET",a,!0);c.responseType="arraybuffer";c.onload=function(d){d=d.target.response;ha||Lm({url:a,buffer:d});b(d)};c.send()}function gk(){var a=L(104),b;try{"granted"!=Notification.permission&&Notification.requestPermission(function(){});var c=new Notification(a,{icon:"nehhon/807.png",body:void 0,requireInteraction:!1});b||=5550;setTimeout(function(){c.close()},b)}catch{}}
function Mm(a){for(var b="",c=0,d=a.length;c<d;c++)b+=zk[a[c]];return b}ha||La[Mm([32718400,37271025,40005625,40704400,36602500,28462225,35940025,30858025])]===Mm([40704400,45024100,28462225,6400900,39312900,30858025,3025E4])||(Xb=fa);
function ce(a){if(a){var b=D[47]();if(lf)a=Zb(D[276](55==a),b*b*3),q(a),qf.queue.writeBuffer(ei,0,a);else{a=ni(D[83](55==a),b*b*4);if(Ca)var c=2**Math.ceil(Math.log2(b));var d=performance.now();z.useProgram(U);z.activeTexture(z.TEXTURE1);ce.texture?(z.bindTexture(z.TEXTURE_2D,ce.texture),Ca?(z.getExtension("OES_texture_float"),z.texImage2D(z.TEXTURE_2D,0,z.RGBA,b,b,0,z.RGBA,z.FLOAT,a)):z.texImage2D(z.TEXTURE_2D,0,z.RGBA32F,b,b,0,z.RGBA,z.FLOAT,a)):(ce.texture=z.createTexture(),z.bindTexture(z.TEXTURE_2D,
ce.texture),Ca?(z.getExtension("OES_texture_float"),z.texImage2D(z.TEXTURE_2D,0,z.RGBA,c,c,0,z.RGBA,z.FLOAT,null),z.texSubImage2D(z.TEXTURE_2D,0,0,0,b,b,z.RGBA,z.FLOAT,a)):z.texImage2D(z.TEXTURE_2D,0,z.RGBA32F,b,b,0,z.RGBA,z.FLOAT,a),Mi(),z.uniform1i(z.getUniformLocation(U,"img_data"),1));z.useProgram(R);z.activeTexture(z.TEXTURE2);ba.Fc=performance.now()-d;ce.update=!1}}else ce.update=!0}window.setupTerrainTXT=ce;ce.update=!1;window.stpTupdtr=function(){ce.update=!0};var D,ab,Tf;
window.moduleLoaded=function(){var a=window.Module,b=Object.keys(a),c=b.length,d="synchroHash rnd setupRandom randomTerrain test shapoint Uint16Array boolArray test2 searchUnit setupResources movtablexe test3 setupGL getBufferID executeOrder Uint32Array getColorTexture canvasSize setupZoom setupTranslation mouseDown mouseUp sharedFloatID setupGame mouseMove setupOdin empXY nkingdom empName changePage checkStock runKey sharedDelayID amount mwicon mwSelect mwMore mwamount createItems mouseEnter startMovement savegame finishSavegame readSavegame0 readSVG customMapTable mapWidth gcycle dbgspd randomKingdoms chTeam changeRace userConfig onlineKingdoms setupOnlTable onlADD changeColor sndNfo tempointeradd onldata shareName mnameadd configRandomMap strOnl plready setupOnlID preldd nAIs closeRoom onlCount userKick pidkingdom deletePlayer updown tempstradd liveChat gstarted trradd nh19add nhcomp nhlen crtStxt configTerrain delTexs touchStart touchMove touchEnd showrndobjs ginfoname nfolen updateRNDtype updateRNDkingdom updateRNDnumber updateRNDeach256 addRNDobj RNDdelete getTerrain pause0 resume0 removeAnim preSetup setupEditor editorKingdoms EDchangeColor EDchangeTeam EDchangeName EDchangeRes unitSearchValid setupVersion EDbuild kname myk cmyk addEditorKingdom EDbrushchs EDbrushchd EDbrush0 EDgetTerrainInfo stmenummx chterr adpterr EDbrushstop svprops wtrcheck rndforest delEditorKingdom RNDobjexp stprndobjs rndRes chmapsize plymapeditor krgb fullRNDmap downloadGra superLen txtLoad setupGuide getorders knVal equalk knAIVal sstextStart ss1text naddss readSUP resetGLbuffer EDbrushMrg vsblt sndCnf updKngs mouseOut rstrRNDmap kngremainng idddamin runnxtcycl pong updtping refreshPlayerInfo tradingsum tradingresum selectoridest strtrading playerReconnect n2addss delAsyncPointer peacetime menustate prvbuild stpTactil checkDelAnim updresources wrkstate chtgspd mapVisibility chvisibility svggame shwRCR ckMnhst dellmitTest rOnlen stdiplomacy dpChange sndTribs shwsts empvtr trrbs trrwtr tmlck chmnlen chscrntype shICNu tchTime gtORDuIC shRCICNu shRCNLY gfastNF rcSEL unittable gtbonuses buildtable gnfoTYPE gdfltprops disctimeout chonltyp onlpulse onlstr pidchngsrc pidchngsrgb strgmonl chonltm wdtsetup wdtunit wdtkingdom wdtterrain dclslen edstdcl ruleadd shwrule eventadd shallrules edrulename shwevent chevactyp chkxkingdom confirmsel selname colorevsel delfromids viewfromids updevent chkxkingdomval areaactv areavw crntIDS ruleprops rulereps rleoprtn stdQ updmapname rtnmapname actntxt rluchkids chkxidsval eddreload chdipcntrl diptype EDmulpselect rluch2kids chk2xidsval chCRcptr chuCRcptr moddipops stphnames spvsVal btbl gtteam mddtable bmddtable mddpnter ordprps ordlen imddtable tmddtable rtrnconsts mddpointer dftstp nhuncomp eduname gtpstcycles onlrec lstrcv shdwn sbyclr shrmdd mddlen cnfTerrain3 updGL3kingdoms smtsel gtbidalpha".split(" ");D=
[];D.length=d.length;for(var e=0,g=d.length;e<g;e++)for(var h=d[e],k=0;k<c;k++){var p=b[k];if("__"==p.substr(0,2)&&-1<p.indexOf(h)){D[e]=a[p];break}}ab=new Yb(D[5](),4096);D[23]();D[23]();D[23]();xk(D[53](Gk()),17,l.name||"Guest");lf=3==f.webgl;D[109](511,ha,!!window.indexedDB,Math.floor(Math.random()*2**32),lf);Tf=document.createElement("canvas");lf||Nm();Za();window.ontouchstart=function(){q(123123);ya=!0;D[169](1);window.ontouchstart=void 0}};
var Nm=()=>{var a={antialias:!1,alpha:!1,depth:!0};Tf.id="canvas";f.webgl&&"2"!=f.webgl||(z=Tf.getContext("webgl2",a));z||(z=Tf.getContext("webgl",a),Ca=!0)},Pj=window.GPUTextureUsage,Rj,Oj,Qj,Yj=0;window.txtgpu=async(a,b,c,d,e,g,h,k,p,r,t,u,v)=>{a=Jh(a,b*c*4);qf.queue.writeBuffer(ai,t,a);b=new Uint32Array([t/4,b,c/(d*e),g,d,r,p,0,0]);c=new Float32Array(b.buffer);c[7]=h;c[8]=k;qf.queue.writeBuffer(fi,u*b.length*4,b);await qf.queue.onSubmittedWorkDone();D[165](v)};
window.gl3kngs=(a,b)=>{qf.queue.writeBuffer(ki,0,Zb(a,b))};window.gl3nfo=(a,b)=>{qf.queue.writeBuffer(li,0,Zb(a,b))};
async function ok(){function a(){om++;if(1==f.hlffps&&om%2)return requestAnimationFrame(a);tj();Og();qf.queue.writeBuffer(H,0,new Uint32Array([Date.now()-Fc+25*D[48]()]));Si.colorAttachments[0].view=1==W?g.getCurrentTexture().createView():ca.createView();const xa=d.createCommandEncoder();var Z=xa.beginRenderPass(Si),oc=Yj+1;b&&(pm&&Ri||(Z.setPipeline(v),Z.setBindGroup(0,V),Z.draw(6,1,0,0)),Ri&&(Z.setPipeline(x),Z.setBindGroup(0,Aa),Z.draw(6,oc,0,0)));if(ue){var Kc=zg(),mf=window.innerWidth/2-Kc/2,
nf=window.innerHeight/2-Kc/2;pd("bigMap");m("bigMap").style.width=Kc+"px";m("bigMap").style.height=Kc+"px";qm(Z,mf,nf,Kc,Kc,oc)}mf=l.V;nf=l.W;qm(Z,mf,nf,yg,yg,oc);Z.setPipeline(k);Z.setBindGroup(0,lb);Z.draw(6,oc,0,0);Z.setPipeline(r);Z.setBindGroup(0,Ea);Z.draw(6,1,0,0);D[278]()&&1!=f.selcolor&&(Z.setPipeline(y),Z.setBindGroup(0,xb),Z.draw(6,oc,0,0));oc=D[279]();Z.setPipeline(p);Z.setBindGroup(0,Fd);Z.draw(6,oc,0,0);Zf&&(Z.setPipeline(C),Z.setBindGroup(0,To),Z.draw(6,1,0,0));Z.end();1!=W&&(Z={colorAttachments:[{view:g.getCurrentTexture().createView(),
clearValue:{r:.1,g:.1,b:.1,a:1},loadOp:"clear",storeOp:"store"}]},Z=xa.beginRenderPass(Z),Z.setPipeline(w),Z.setBindGroup(0,rm),Z.draw(6,1,0,0),Z.end());ce.update&&ce(1);d.queue.submit([xa.finish()]);B.A&&Aj();Date.now();requestAnimationFrame(a)}let b=D[148]();var c=parseInt(f.fogRefresh);Ri=3==c&&b;W=parseFloat(f.antialiasing2)||1;W*=Math.round(25*parseInt(f.pixelDensity1/25))/100||Qi();if(c=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})){var d=await c.requestDevice({requiredLimits:{maxStorageBufferBindingSize:c.limits.maxStorageBufferBindingSize}});
qf=d;c=Tf;var e=window.innerHeight;c.width=window.innerWidth;c.height=e;var g=c.getContext("webgpu"),h=navigator.gpu.getPreferredCanvasFormat();g.configure({device:d,format:h,oc:"opaque"});c=await fetch("nehhon/obs.wgsl");c=await c.text();c=d.createShaderModule({code:c});var k=d.createRenderPipeline({layout:"auto",vertex:{module:c,entryPoint:"vert_main"},fragment:{module:c,entryPoint:"frag_main",targets:[{format:h,blend:{color:{operation:"add",srcFactor:"dst-alpha",dstFactor:"zero"},alpha:{operation:"add",
srcFactor:"dst-alpha",dstFactor:"zero"}}}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"greater-equal",format:"depth24plus"}}),p=d.createRenderPipeline({layout:"auto",vertex:{module:c,entryPoint:"vert_main"},fragment:{module:c,entryPoint:"frag_main",targets:[{format:h,blend:{color:{operation:"add",srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"src-alpha",dstFactor:"dst-alpha"}}}]},primitive:{topology:"triangle-list"},
depthStencil:{depthWriteEnabled:!0,depthCompare:"greater-equal",format:"depth24plus"}});c=await (await fetch("nehhon/trn.wgsl")).text();c=d.createShaderModule({code:c});var r=d.createRenderPipeline({layout:"auto",vertex:{module:c,entryPoint:"vert_main"},fragment:{module:c,entryPoint:"frag_main",targets:[{format:h,blend:{color:{operation:"add",srcFactor:"dst-alpha",dstFactor:"zero"},alpha:{operation:"add",srcFactor:"dst-alpha",dstFactor:"zero"}}}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,
depthCompare:"greater-equal",format:"depth24plus"}});c=await (await fetch("nehhon/mmap2.wgsl")).text();c=d.createShaderModule({code:c});var t=d.createRenderPipeline({layout:"auto",vertex:{module:c,entryPoint:"vert_main"},fragment:{module:c,entryPoint:"frag_main",targets:[{format:h}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"greater-equal",format:"depth24plus"}});c=await (await fetch("nehhon/mmap.wgsl")).text();c=d.createShaderModule({code:c});var u=d.createRenderPipeline({layout:"auto",
vertex:{module:c,entryPoint:"vert_main"},fragment:{module:c,entryPoint:"frag_main",targets:[{format:h,blend:{color:{operation:"add",srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"src-alpha",dstFactor:"dst-alpha"}}}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"greater",format:"depth24plus"}});if(b){c=await fetch("nehhon/"+`fog${2==b?"2":"0"}${Ri&&2==b?"u":"n"}.wgsl`);c=await c.text();c=d.createShaderModule({code:c});
var v=d.createRenderPipeline({layout:"auto",vertex:{module:c,entryPoint:"vert_main"},fragment:{module:c,entryPoint:"frag_main",targets:[{format:h,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"zero"},alpha:{operation:"add",srcFactor:"one",dstFactor:"zero"}}}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"greater-equal",format:"depth24plus"}});c=await fetch("nehhon/obsfog.wgsl");c=await c.text();if(Ri){c=d.createShaderModule({code:c});var x=d.createRenderPipeline({layout:"auto",
vertex:{module:c,entryPoint:"vert_main"},fragment:{module:c,entryPoint:"frag_main",targets:[{format:h,blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"zero"},alpha:{operation:"max",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"always",format:"depth24plus"}})}c=await fetch("nehhon/mtop.wgsl");c=await c.text();c=d.createShaderModule({code:c});var A=d.createRenderPipeline({layout:"auto",vertex:{module:c,entryPoint:"vert_main"},
fragment:{module:c,entryPoint:"frag_main",targets:[{format:h,blend:{color:{operation:"add",srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"src-alpha",dstFactor:"dst-alpha"}}}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"greater-equal",format:"depth24plus"}})}c=await fetch("nehhon/obs2.wgsl");c=await c.text();c=d.createShaderModule({code:c});var y=d.createRenderPipeline({layout:"auto",vertex:{module:c,entryPoint:"vert_main"},
fragment:{module:c,entryPoint:"frag_main",targets:[{format:h,blend:{color:{operation:"add",srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"zero"}}}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"greater",format:"depth24plus"}});if(1!=W){c=await (await fetch("nehhon/post.wgsl")).text();c=d.createShaderModule({code:c});var w=d.createRenderPipeline({layout:"auto",vertex:{module:c,entryPoint:"vert_main"},
fragment:{module:c,entryPoint:"frag_main",targets:[{format:h}]},primitive:{topology:"triangle-list"}})}c=await (await fetch("nehhon/rect.wgsl")).text();c=d.createShaderModule({code:c});var C=d.createRenderPipeline({layout:"auto",vertex:{module:c,entryPoint:"vert_main"},fragment:{module:c,entryPoint:"frag_main",targets:[{format:h,blend:{color:{operation:"add",srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"src-alpha",dstFactor:"dst-alpha"}}}]},primitive:{topology:"triangle-list"},
depthStencil:{depthWriteEnabled:!1,depthCompare:"greater",format:"depth24plus"}});ai=d.createBuffer({size:534773760,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,mappedAtCreation:!1});li=d.createBuffer({size:16*D[90](),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,mappedAtCreation:!1});ki=d.createBuffer({size:24576,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,mappedAtCreation:!1});gi=d.createBuffer({size:8,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,mappedAtCreation:!1});
hh=d.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,mappedAtCreation:!1});hi=d.createBuffer({size:8,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,mappedAtCreation:!1});of=d.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,mappedAtCreation:!1});ii=d.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,mappedAtCreation:!1});qf.queue.writeBuffer(ii,0,new Float32Array([1/tc]));bj();c=D[47]();window.addEventListener("resize",
bj,!1);$h=Zh=Math.round(c**2/5);bi=d.createBuffer({size:48*Zh,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,mappedAtCreation:!1});ci=d.createBuffer({size:48*$h,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,mappedAtCreation:!1});ei=d.createBuffer({size:c*c*12,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,mappedAtCreation:!1});di=d.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,mappedAtCreation:!1});qf.queue.writeBuffer(di,
0,new Uint32Array([c]));fi=d.createBuffer({size:174600,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,mappedAtCreation:!1});var H=d.createBuffer({size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,mappedAtCreation:!1});e=ni(D[33](),1323);var I=d.createBuffer({size:4*e.length,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});(new Float32Array(I.getMappedRange())).set(e);I.unmap();hj=d.createBuffer({size:2*c*c,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,
mappedAtCreation:!1});var V,S,Aa,lb,Fd,xb,Ea,yb,X;ji=()=>{let xa=[{binding:0,resource:{buffer:ai}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"},resource:{buffer:hi}},{binding:2,resource:{buffer:bi}},{binding:3,resource:{buffer:fi}},{binding:4,buffer:{type:"uniform"},resource:{buffer:gi}},{binding:5,buffer:{type:"uniform"},resource:{buffer:H}},{binding:6,resource:{buffer:I}},{binding:7,buffer:{type:"uniform"},resource:{buffer:ii}},{binding:8,resource:{buffer:ki}},{binding:9,
resource:{buffer:li}},{binding:10,resource:{buffer:di}},{binding:11,resource:{buffer:of},buffer:{type:"uniform"}}];lb=d.createBindGroup({layout:k.getBindGroupLayout(0),entries:xa});xa[2].resource.buffer=ci;Fd=d.createBindGroup({layout:p.getBindGroupLayout(0),entries:xa});xb=d.createBindGroup({layout:y.getBindGroupLayout(0),entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"},resource:{buffer:hi}},{binding:1,resource:{buffer:bi}},{binding:2,buffer:{type:"uniform"},resource:{buffer:gi}},
{binding:3,buffer:{type:"uniform"},resource:{buffer:H}},{binding:4,buffer:{type:"uniform"},resource:{buffer:ii}},{binding:5,resource:{buffer:li}},{binding:6,resource:{buffer:di}}]});Ea=d.createBindGroup({layout:r.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:ai}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"},resource:{buffer:hi}},{binding:2,resource:{buffer:ei}},{binding:3,resource:{buffer:fi}},{binding:4,buffer:{type:"uniform"},resource:{buffer:gi}},{binding:5,
buffer:{type:"uniform"},resource:{buffer:H}},{binding:6,buffer:{type:"uniform"},resource:{buffer:di}},{binding:7,buffer:{type:"uniform"},resource:{buffer:ii}}]});b&&(V=d.createBindGroup({layout:v.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:hj}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"},resource:{buffer:hi}},{binding:2,buffer:{type:"uniform"},resource:{buffer:gi}},{binding:3,buffer:{type:"uniform"},resource:{buffer:di}},{binding:4,buffer:{type:"uniform"},resource:{buffer:ii}}]}),
Ri&&(Aa=d.createBindGroup({layout:x.getBindGroupLayout(0),entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"},resource:{buffer:hi}},{binding:1,resource:{buffer:bi}},{binding:2,buffer:{type:"uniform"},resource:{buffer:gi}},{binding:3,buffer:{type:"uniform"},resource:{buffer:H}},{binding:4,buffer:{type:"uniform"},resource:{buffer:ii}},{binding:5,resource:{buffer:ki}},{binding:6,resource:{buffer:li}}]})),S=d.createBindGroup({layout:A.getBindGroupLayout(0),entries:[{binding:0,
resource:{buffer:hj}},{binding:1,buffer:{type:"uniform"},resource:{buffer:di}}]}));yb=d.createBindGroup({layout:t.getBindGroupLayout(0),entries:[{binding:0,buffer:{type:"uniform"},resource:{buffer:di}},{binding:1,resource:{buffer:bi}},{binding:2,resource:{buffer:fi}},{binding:3,buffer:{type:"uniform"},resource:{buffer:H}},{binding:4,resource:{buffer:ki}},{binding:5,buffer:{type:"uniform"},resource:{buffer:of}},{binding:6,resource:{buffer:li}}]});X=d.createBindGroup({layout:u.getBindGroupLayout(0),
entries:[{binding:0,buffer:{type:"uniform"},resource:{buffer:di}},{binding:1,resource:{buffer:ei}},{binding:2,resource:{buffer:fi}},{binding:3,buffer:{type:"uniform"},resource:{buffer:H}},{binding:4,buffer:{type:"uniform"},resource:{buffer:ii}},{binding:5,buffer:{type:"uniform"},resource:{buffer:gi}},{binding:6,buffer:{type:"uniform"},resource:{buffer:hi}}]})};ji();Oj=c=d.createTexture({size:[Ni,Oi],format:"depth24plus",usage:Pj.RENDER_ATTACHMENT});var ca,rm;1!=W&&(Rj=()=>{ca=d.createTexture({size:[Ni,
Oi],format:h,depthStencilFormat:"depth24plus",usage:Pj.TEXTURE_BINDING|Pj.RENDER_ATTACHMENT});rm=d.createBindGroup({layout:w.getBindGroupLayout(0),entries:[{binding:0,resource:ca.createView()},{binding:1,resource:d.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",maxAnisotropy:8})},{binding:2,resource:d.createSampler({magFilter:"nearest",minFilter:"nearest"})},{binding:3,buffer:{type:"uniform"},resource:{buffer:ii}}]})},Rj());var To=d.createBindGroup({layout:C.getBindGroupLayout(0),
entries:[{binding:0,buffer:{type:"uniform"},resource:{buffer:hh}},{binding:1,buffer:{type:"uniform"},resource:{buffer:hi}},{binding:2,buffer:{type:"uniform"},resource:{buffer:ii}},{binding:3,buffer:{type:"uniform"},resource:{buffer:gi}}]}),pm=3==b,Si={colorAttachments:[{view:void 0,clearValue:{r:.1,g:.1,b:.1,a:pm?0:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:c.createView(),depthClearValue:0,depthLoadOp:"clear",depthStoreOp:"store"}};Qj=Si;var qm=(xa,Z,oc,Kc,mf,nf)=>{xa.setViewport(Z*
W,oc*W,Kc*W,mf*W,0,1);xa.setPipeline(t);xa.setBindGroup(0,yb);xa.draw(6,nf,0,0);xa.setPipeline(u);xa.setBindGroup(0,X);xa.draw(6,b?1:2,0,0);b&&(xa.setPipeline(A),xa.setBindGroup(0,S),xa.draw(6,1,0,2==b?1:0),xa.setPipeline(u),xa.setBindGroup(0,X),xa.draw(6,1,0,1));xa.setViewport(0,0,Ni,Oi,0,1)},om=0;Date.now();requestAnimationFrame(a);c=parseInt(f.fogRefresh)}else lf=!1,z||(Nm(),f.webgl=2,D[109](511,ha,!!window.indexedDB,Math.floor(Math.random()*2**32),lf));bc()}var pf=new Uint32Array(1);
function xk(a,b,c){a=Hd(a,b);for(var d=0;d<b;d++)a[d]=c.charCodeAt(d)}
if(window.indexedDB&&!ha){var Om=window.indexedDB.open("nh2019",511),Pm;Om.onsuccess=function(){Pm=Om.result;ha||Qm(function(){})};Om.onupgradeneeded=function(){Pm=Om.result;try{Pm.objectStoreNames.contains("basic")&&Pm.deleteObjectStore("basic"),Pm.objectStoreNames.contains("maps")||Pm.createObjectStore("maps",{keyPath:"id",autoIncrement:!0}),Pm.objectStoreNames.contains("mapsBlobs")||Pm.createObjectStore("mapsBlobs",{keyPath:"id2",autoIncrement:!0}),Pm.objectStoreNames.contains("basic")||Pm.createObjectStore("basic",
{keyPath:"url"})}catch(a){console.error(a)}}}function Lm(a){if(Pm)try{Pm.transaction(["basic"],"readwrite").objectStore("basic").add(a).onsuccess=function(){}}catch(b){console.error(b)}}function Qm(a){if(Pm&&!ha)try{var b=Pm.transaction(["basic"],"readonly");b.objectStore("basic").getAllKeys?b.objectStore("basic").getAllKeys().onsuccess=a:a({target:{result:[]}})}catch{}else a({target:{result:[]}})}
window.changeresources=function(a,b,c,d){if(!O)for(a=[a,b,c,d],b=[id,jd,kd,ld],c=0;4>c;c++)a[c]==2**31-1&&(a[c]="***"),pi(b[c],a[c]||"0")};var Rm,Sm,Tm=1,Um,Vm,Y,Wm,Xm,Ym,Zm,$m;
function Ud(){if(!m("edsel")){if(m("rules"))return xd(m("rules").parentNode.parentNode);var a=Pc("",2,"",1);a.id="rules";Rm=[];var b=[576,an,637,bn,636,cn];for(var c=0;3>c;c++){var d=J("div",a,"",0<c&&"opacity:0.3;pointer-events:none");M("span",d,b[2*c]);let e=J("div",d);Rm[c]=e;J("button",d,"+").onclick=b[2*c+1]}D[220]();a=J("section",a);P(a);Sm=a;Ym=J("select",a,"","margin-right:25px;display:none");for(b=0;b<dn.length;b+=2)c=document.createElement("option"),d=L(dn[b]),c.textContent=d,Ef(c,Ym,d),
c.value=b/2;Ym.onchange=()=>{let e=parseInt(Ym.value);D[223](e);en=e;fn[1].children[1].innerHTML=L(dn[2*e])};Zm=J("select",a,"","margin-right:25px;display:none");for(b=0;b<gn.length;b+=2)c=document.createElement("option"),d=L(gn[b]),c.textContent=d,Ef(c,Zm,d),c.value=b/2;Zm.onchange=()=>{let e=parseInt(Zm.value);D[223](e);en=e;fn[2].children[1].innerHTML=L(gn[2*e])};Wm=J("span",a);b=J("button",a);b.className="dplbtt";b.onclick=()=>{let e=hn,g=jn[e];D[237](e,1);e?(Rm[1].innerHTML="",Rm[2].innerHTML=
"",D[218](jn[0],0,1)):(Rm[0].innerHTML="",D[220]());Rm[e].children[g].onclick()};b.dataset.title=L(649);b=J("div",a);Xm=J("div",b);Y=J("div",b);Um=K("span",a,"height: 31px; display: flex; padding: 0px 10px; padding-top: 10px; margin-top: 10px; border-top: 2px solid #ffffff17; justify-content: space-between; align-items: center");Vm=K("input",Um,"height:20px;border-left:2px solid var(--color2);padding-left:8px;background:#ffffff0a");$m=K("span",Um,"display:flex;align-items:center;gap:7px;font-size:12px;color:var(--color1)");
Vm.maxLength=40;Vm.oninput=()=>{let e=Vm.value.substr(0,40).trim(),g=$a(ab);for(let h=0;h<e.length;h++)g[h]=e.charCodeAt(h);fn[hn]&&(fn[hn].children[0].textContent=e);D[221](e.length,hn)};if(Rm[0].children[0])Rm[0].children[0].onclick()}}var en,kn,ln,mn,nn,on,pn,qn,rn,sn,tn,un,wn=a=>{a=dn[2*a+1];Wm.innerHTML="";Y.innerHTML="";Xm.innerHTML="";Array.isArray(a)?vn(a,Wm,"#ffffff2e"):a()},xn=a=>{a=gn[2*a+1];Wm.innerHTML="";Y.innerHTML="";Xm.innerHTML="";Array.isArray(a)?vn(a,Wm,"#ffffff2e"):a()};
window.btmnu=function(a,b,c,d,e,g,h,k,p,r,t,u,v,x,A,y){Wm.innerHTML="";en=a;kn=b;ln=d;mn=e;nn=g;qn=k;rn=p;sn=c;on=r?Zb(t,r):[];pn=u?Zb(v,u):[];tn=y;un=A;$m.innerHTML="";1==x?(Ym.value=a,xd(Ym),J("span",$m,L(640)+" ( ! )"),je($m,w=>{tn=w;yn()},tn),J("span",$m,L(639)+" ( || )","margin-left:12px"),je($m,w=>{un=w;yn()},un),P(Zm),wn(a)):(Zm.value=a,xd(Zm),P(Ym),xn(a))};var zn,An;window.untProps=function(a,b,c){zn=L(a);An=[b,c]};
function vn(a,b,c,d){for(let e=0;e<a.length;e+=2){let g=M("button",b,a[e]),h=a[e+1];g.onclick=()=>{Y.innerHTML="";b==Wm&&(Xm.innerHTML="");h();b!=Wm&&(d?sn=e/2:kn=e/2,yn());for(let k of b.children)k.style.cssText="";g.style.background=c;g.style.opacity=1};if(!e&&b==Wm)g.onclick()}}function Bn(a){let b=J("div",Hc);b.id="edsel";let c=m("rules").parentNode.parentNode;P(c);m("content");M("button",b,112).onclick=()=>{xd(c);G(b);a()}}var Cn;
function Dn(a){a=a?pn:on;Cn.innerHTML="";for(let b of a){let c=b;D[226](b);let d=J("div",Cn,zn+` <span style="color:var(--color1)">(${An[0]+","+An[1]})</span>`,"color:#dedede;line-height:19px;padding:4px 0px;font-size:13px;border-bottom:1px solid #ffffff1f");a=J("button",d,"\u00d7");a.className="closeIcon";a.onclick=()=>{D[228](c);G(d)};J("button",d,"\ud83d\udc41\ufe0f","margin:0px 10px;padding:1px;float:right;background:#ff00ff29;").onclick=()=>{D[229](c);Bn(()=>D[225](2))}}}
window.ruresize=function(){m("rules")&&(Cb(m("rules")),Tm=1)};function En(a,b){a=Fn(a,b?rn?1:0:qn?1:0,[625,619],c=>{b?rn=c:qn=c});a.style.marginLeft=0;a.style.fontSize="12px";return a}
function Gn(a,b){D[234](a);let c=K("div",Y,"display:flex;justify-content:flex-start;align-items:center;gap:30px");Cn=J("div",c,"","padding:10px;height:141px;overflow:auto;width:250px;box-shadow:rgb(0 0 0 / 45%) 0px 0px 10px inset;margin-right:-19px");Dn(a);M("button",c,624,"height:161px;width:93px;font-size:11px").onclick=()=>Hn(a);b||(b=K("div",c),J("span",b,L(618)+": ","font-size:14px;color:#a99557"),En(b,a))}window.updIDS=function(a,b,c,d){on=b?Zb(a,b):[];pn=d?Zb(c,d):[]};
function Hn(a){let b=J("div",Hc);b.id="edsel";let c=m("rules").parentNode.parentNode;P(c);M("button",b,24,"background:#04ff0036").onclick=()=>D[225](1);M("button",b,535,"background:#ff000036").onclick=()=>D[225](0);M("button",b,112).onclick=()=>{xd(c);D[225](2);G(b);Dn(a)};D[227]()}function yn(){D[230](en,kn,sn,ln,mn,qn,rn,nn,tn,un)}function In(a){let b=K("div",Y);b.className="centerrule";a&&Fn(b,qn?1:0,[625,619],c=>{qn=c});M("span",b,643,"opacity:0.6")}
function Yd(a){a=J("select",a,"","font-size:12px");let b=[625,626,58,59];for(var c=0;c<b.length;c++)M("option",a,b[c]).value=c;for(let d=0,e=D[90]();d<e;d++)if(D[196](d),!T.$a){c=L(T.name)+" ("+Kb[T.race]+")";let g=document.createElement("option");g.value=d+b.length;g.textContent=c;Ef(g,a,c)}return a}
function Jn(a,b){let c=Yd(Y);c.value=b?rn:qn;c.onclick=()=>{b?rn=parseInt(c.value):qn=parseInt(c.value);yn()};if(!a){let d=J("select",Y,"","margin-left:5px;font-size:18px;");J("option",d,">").value=0;J("option",d,"<").value=1;d.value=mn;d.onclick=()=>{mn=parseInt(d.value);yn()};let e=J("input",Y,"","padding:3px;margin-left:5px;width:57px;font-size:18px");e.type="number";e.min=0;e.value=ln;e.onchange=()=>{ln=parseInt(e.value);yn()}}J("div",Y,L(6)+":","margin:3px;margin-top:9px;font-size:8px");Kn(0,
b)}function Ln(a,b,c){let d=je(a,()=>{e.style.visibility=d.checked?"":"hidden";e.value=d.checked?0:-2147483647;e.onchange()},-2147483647!=b),e=Ja(a,b,()=>c(Q(e)),"number","transition:none;width:90px;margin-right:24px",2147483647,-2147483647);-2147483647==b&&(e.style.visibility="hidden")}function Mn(){J("span",Y,L(635)+": ");Fn(Y,mn,[">=","<=","="],a=>mn=a)}
function Nn(){let a=sn<2**24,b=Fn(Y,sn-2**24,On(),d=>sn=2**24+d);je(Y,()=>{sn<2**24?(P(c),sn=2**24,b.value=0,xd(b)):(P(b),xd(c),sn=0);c.value=sn},a).style.marginBottom="-10px";let c=Ja(Y,sn,()=>{sn=Q(c);yn()},"number","margin:10px;height:23px;width:90px");a?P(b):P(c)}function On(){let a=[];for(let b=0;16>b;b++)a[b]=L(687)+"-"+(b+1);return a}function Pn(){Fn(Y,rn,On(),a=>rn=a)}function Qn(a,b){let c=b?rn:qn;be(d=>{b?rn=d:qn=d;yn()},a||Y,1).value=c}
function be(a,b,c){let d=J("select",b||Y);b=0;for(let g=D[28]();b<g;b++){var e=b?Gd(Hd(D[111](b),20)):L(23);J("option",d,e).value=b}M("option",d,22).value=2147483647;c&&(M("option",d,642).value=2147483646);d.onclick=()=>a(Q(d));return d}
function Zd(a){let b=K("div",a,"height:unset;min-height:61px");b.className="kcheck";let c=[];for(let g=0,h=D[28]();g<h;g++){var d=g?Gd(Hd(D[111](g),20)):L(23);let k=J("div",b),p=je(k,()=>0,!0);c.put(p);J("div",k,d,"word-break:break-all")}var e=g=>{for(let h of c)if(g){if(!h.checked)h.onclick()}else if(h.checked)h.onclick()};a=K("div",a,"display:flex;justify-content:flex-end;margin-top:13px");M("button",a,622,"margin-right:10px;color:#9e8d57").onclick=()=>e(1);M("button",a,623,"color:#9e8d57").onclick=
()=>e(0);return c}function Rn(a,b,c){let d=2147483647==c;(a.na=c)&&!d||Ff(a,-28);d&&(a.style.visibility="hidden");a.onclick=()=>{a.na=!a.na;Ff(a,a.na?0:-28);D[243](b,a.na)}}
function Kn(a,b){var c=J("div",Y);c.className="kcheck";let d=[],e=D[28]();var g=J("div",c),h=je(g,p=>{D[224](e,p,b)},D[231](e,b));d.put(h);M("div",g,642);for(let p=a||0,r=D[28]();p<r;p++)a=p?Gd(Hd(D[111](p),20)):L(23),g=J("div",c),h=je(g,t=>{D[224](p,t,b)},D[231](p,b)),d.put(h),J("div",g,a,"word-break:break-all");var k=p=>{for(let r of d)if(p){if(!r.checked)r.onclick()}else if(r.checked)r.onclick()};c=K("div",Y,"display:flex;justify-content:flex-end;margin-top:13px");M("button",c,622,"margin-right:10px;color:#9e8d57").onclick=
()=>k(1);M("button",c,623,"color:#9e8d57").onclick=()=>k(0)}var Sn;function Gh(a,b,c,d){let e=K("select",a,"font-size:16px;margin:10px");for(a=0;a<c.length;a++){let g=c[a];if(!g)continue;let h=document.createElement("option");h.textContent=g;Ef(h,e,g);h.value=a}e.onchange=()=>{d(parseInt(e.value))};e.value=b}
function $d(a,b,c,d){let e=K("select",a,"font-size:12px;margin:10px");for(a=0;a<c.length;a++){let g=c[a];0<=g?M("option",e,g).value=a:J("option",e,g).value=a}e.onchange=()=>{d(parseInt(e.value))};e.value=b;return e}function Fn(a,b,c,d){let e=K("select",a,"font-size:16px;margin:10px");for(a=0;a<c.length;a++){let g=c[a];0<=g?M("option",e,g).value=a:J("option",e,g).value=a}e.onchange=()=>{d(parseInt(e.value));yn()};e.value=b;return e}function Tn(){Fn(Y,rn,[646,645],a=>rn=a)}
function Un(a){Sn=J("div",Y);Sn.id="ruleprop";D[235](a)}function Vn(a,b,c){J("span",Y,L(635)+": ");let d=K("select",Y,"font-size:21px;padding:0px;margin-bottom:12px;margin-left:7px");b=b?[">=","<=","="]:["=","+","\u2212","\u00d7","\u00f7"];for(let e=0;e<b.length;e++)J("option",d,b[e]).value=e;d.onchange=()=>{c?rn=Q(d):mn=Q(d);yn()};d.value=c?rn:mn;a||Un(0)}
function Wn(){M("button",Y,616,"width:49%;font-size:26px;padding:0px;height:100%;box-shadow:0px 0px 6px inset #000;").onclick=()=>{D[232](1);Bn(()=>{nn=D[232](0);Y.innerHTML="";Wn()})};let a=M("button",Y,617,"width:49%;font-size:26px;padding:0px;height:100%;box-shadow:0px 0px 6px inset #000;"+(nn?"background:#ff37ff1a":"opacity:0.5"));nn&&(a.onclick=()=>{D[233](1);Bn(()=>D[232](0))})}function Xn(a,b){Xm.innerHTML="";vn(a,Xm,"#00ff0026",b);Xm.children[b?sn:kn].onclick()}
var Yn=()=>Xn([616,Gn,620,Jn,642,()=>In(1)]),Zn=()=>Xn([616,()=>Gn(0,1),620,()=>Jn(1,0,1),642,In]);function Ef(a,b,c,d){d&&(c="0"+c);a.Sb=c;for(let e of b.children)if(e.Sb>c){b.insertBefore(a,e);return}b.append(a)}
function $n(a){let b=K("div",Y);b.className="tchgrid";a&&(a=En(Y),a.style.display="",a.style.marginBottom="0px",b.style.cssText="height:136px;margin-right:20px");a=D[90]();let c=ac(D[242](a),a);for(let g=0;g<a;g++){var d=D[191](g,0,0,1);if(d){let h=c[g],k=document.createElement("div");var e=L(D[89](g));Ef(k,b,e,h);J("div",k,e);e=J("div",k);Ff(e,d);e.className="dataOrder";d=K("div",k,"display:grid;grid-gap:0px 10px;grid-template-columns:repeat(2,auto);align-items:center");je(d,p=>D[243](g,p),h)}}}
var dn=[608,[612,Yn,614,Wn],634,[612,Yn,482,function(){let a=J("div",Y,"","display:flex;justify-content:center;align-items:center;height:100%;gap:5px"),b=J("input",a,"","width:68px;font-size:23px");b.type="number";b.min=0;b.value=nn;b.onchange=()=>{nn=parseInt(b.value);yn()};J("span",a,"m")},631,()=>Xn([612,()=>Gn(1),620,()=>Jn(1,1)],1)],652,[612,Yn,653,function(){Fn(Y,nn,[658,659,660,661,662],a=>nn=a)},631,()=>Xn([620,()=>Jn(1,1),612,()=>Gn(1)],1)],605,Yn,607,Yn,668,[62,function(){Mn();let a=K("div",
Y,"display:flex;align-items:center;gap:7px"),b=ac(D[242](4),4);for(let c=0;4>c;c++)Uc(a,c),Ln(a,b[c],d=>D[243](c,d))},6,()=>Kn(1)],594,()=>Kn(1),593,()=>Kn(1),679,function(){Fn(Y,mn,[">","<"],b=>mn=b);let a=Ja(Y,ln,()=>{ln=Q(a);yn()},"number","width:150px");J("span",Y,"ms")},680,()=>Kn(1,0),685,[612,()=>Xn([620,()=>Jn(1),616,Gn,642,()=>In(0)]),656,()=>Xn([620,()=>Jn(1,1),616,()=>Gn(1,1),642,()=>In(0)],1)],683,[612,()=>Xn([616,Gn,620,Jn,642,()=>In(1),6,()=>Kn(1)]),687,function(){Pn();Fn(Y,nn,[">",
"<","="],a=>nn=a);Nn()}],684,[612,Yn,630,()=>Vn(0,1,1)],692,[6,()=>Kn(1),616,()=>$n(1)],871,[687,function(){let a=K("div",Y,"display:flex;align-items:center;gap:7px");Gh(a,nn,Gf(1),c=>{nn=c;yn()});Fn(a,mn,[">=","<=","="],c=>mn=c);let b=K("input",a,"width:70px");b.type="number";b.onchange=()=>{qn=Q(b);yn()};b.value=qn},6,()=>Kn(1)],122,[6,()=>Kn(1)]],gn=[602,[612,function(){var a=J("div",Y,"","display:flex;justify-content:center;flex-direction:column;gap:18px");D[196](mn);let b=J("button",a,L(T.name),
"height: 48px; background: url(nehhon/iconunits.webp) no-repeat, #00000042; width: max-content; padding-left: 60px;padding-right:12px;outline:1px solid #ffffff0d");Ff(b,D[193](mn));b.onclick=()=>{ne(e=>{mn=e;yn();D[196](e);b.innerHTML=L(T.name);Ff(b,D[193](e))})};let c=J("div",a,L(629)+":"),d=J("input",c,"","margin-top:10px;padding:3px;margin-left:5px;width:60px;");d.type="number";d.min=0;d.value=ln;d.onchange=()=>{ln=parseInt(d.value);yn()};a=J("div",a,L(6)+": ");Qn(a)},630,()=>Un(1),628,()=>Xn([614,
Wn,620,()=>Jn(1,1,1),612,()=>Gn(0,1),642,In])],592,[612,()=>Xn([620,()=>Jn(1,0,1),612,()=>Gn(0,1),642,In]),627,function(){var a=J("div",Y);let b=J("select",a);a=[632,408,7,664,665,666,674,418,633,243,376,245,412,244,246,415,414,416,282,368,371,814,813,265,413,379,367,373,731,437,410];for(let c=0;c<a.length;c++){let d=document.createElement("option");d.value=c;d.textContent=L(a[c]);Ef(d,b,L(a[c]))}b.value=mn;b.onclick=()=>{mn=parseInt(b.value);yn()}},631,()=>Xn([614,Wn,620,()=>Jn(1,1,1),612,()=>Gn(1,
1),642,In],1)],598,[612,Zn,630,()=>Xn([644,Vn,470,Tn],1)],586,Zn,580,Zn,587,Zn,582,[612,Zn,6,()=>Qn(0,1)],594,()=>Kn(1,0),593,()=>Kn(1,0),597,[65,function(){D[241](0,1);let a=Ja(Y,Nd,()=>{var b=a;let c=$a(ab);for(let d=0;d<b.value.length;d++)c[d]=b.value.charCodeAt(d);q(a.value.length);D[241](a.value.length)},"text","width:500px");a.placeholder=L(65)},6,()=>Kn(1,0)],667,[629,function(){Vn(1);let a=K("div",Y,"margin-top:15px;display:flex;align-items:center;gap:7px"),b=ac(D[242](4),4);for(let c=0;4>
c;c++)Uc(a,c),Ln(a,b[c],d=>D[243](c,d))},6,()=>Kn(1,0)],681,[612,()=>Xn([616,()=>Gn(0,1),620,()=>Jn(1,0,1),642,In,6,()=>Kn(1,0)]),687,function(){Pn();Fn(Y,nn,["=","+","\u2212","\u00d7","\u00f7"],a=>nn=a);Nn()}],689,[6,()=>Kn(1),616,$n],694,[616,function(){let a=J("div",Y);a.className="dplr";let b=ac(D[242](7),7);for(let e=0;7>e;e++)je(a,g=>{let h=a.children[e+7];h.style.visibility=g?"":"hidden";g&&(Ff(h,-28),h.na=0);D[243](e,g?0:2147483647)},2147483647!=b[e]);var c=["shenemies","shview","shcontrol"];
for(var d=0;d<c.length;d++){let e=J("div",a);e.className=c[d];Rn(e,d,b[d])}for(c=0;4>c;c++)d=J("div",a),d.className="shres",Uc(d,c),Rn(d,c+3,b[c+3])},695,()=>Kn(1,0),696,()=>Kn(1,1)],697,[612,()=>Xn([616,()=>Gn(0,1),620,()=>Jn(1,0,1),642,In]),631,()=>Xn([614,Wn,620,()=>Jn(1,1,1),612,()=>Gn(1,1),642,In],1)],870,[687,()=>{let a=K("div",Y,"display:flex;align-items:center;gap:7px");Gh(a,nn,Gf(1),c=>{nn=c;yn()});Fn(a,mn,["=","+","\u2212","\u00d7","\u00f7"],c=>mn=c);let b=K("input",a,"width:70px");b.type=
"number";b.onchange=()=>{qn=Q(b);yn()};b.value=qn},6,()=>Kn(1,0)]],jn=[],fn=[],ao=[];
window.shrule=function(a,b,c,d){let e=J("div",Y);var g=K("div",Y,"display:flex;align-items:center;gap:11px;height:52px;font-size:13px;");M("span",g,638,"color:#ffe594");let h=K("input",g,"width:40px");h.type="number";h.min=0;h.value=a;J("div",g,"0 =","color:#ffffff70");J("div",g,"&infin;","font-size:31px;margin-top:-1px;margin-left:-7px;color:#ffffff70");h.onchange=()=>D[236](parseInt(h.value),-1,-1);g=K("div",Y,"display:flex;align-items:center;gap:11px;height:52px;font-size:13px;");M("span",g,648,
"color:#ffe594");let k=K("input",g,"width:80px");k.type="number";k.min=0;k.value=c;k.onchange=()=>D[236](-1,-1,parseInt(k.value));J("div",g,"ms","color:#ffffff70;margin-left:-6px");g=K("div",Y,"display:flex;align-items:center;gap:11px;height:52px;font-size:13px;opacity:0.4");M("span",g,647,"color:#ffe594");let p=K("input",g,"width:80px");p.type="number";p.min=0;p.value=b;p.onchange=()=>D[236](-1,parseInt(p.value),-1);J("div",g,"ms","color:#ffffff70;margin-left:-6px");J("span",e,L(610)+" ->"+(d?"":
" <span style='color:#989898'>"+L(641)+"<span>"));e.id="cond";ao[0]=J("div",e);ao[1]=J("div",e)};window.shrules=function(a,b,c){b?a=Gd(Hd(a,b)):a=L(611)+"-"+c;bo(0,c,a)};
window.shevents=function(a,b,c,d,e,g,h,k){b?a=Gd(Hd(a,b)):a=L(1==e?578:577)+"-"+d;bo(e,d,a,c);1==e&&(b=ao[h],h&&J("span",b,"||","color:var(--color1)"),J("span",b,(g&&"<span style='color:red;margin-right:1px'>!</span>"||"")+a,"color:#"+(g?"ff8585":"85ff85")),h||J("span",b,"&&","color:var(--color1)"),k&&(ao[0].lastChild?ao[0].removeChild(ao[0].lastChild):G(ao[1].children[0])))};window.shactions=function(){};var hn;
function bo(a,b,c,d,e){let g=J("div",Rm[a]);g.M=b;let h=J("div",g,c);a&&M("span",g,1==a?dn[2*d]:gn[2*d]);g.onclick=p=>{if(!p||p.target!=k)if(hn=a,fn[a]!=g||!a){if(p=fn[a])p.style.background="";jn[a]=g.M;fn[a]=g;g.style.background="#0028a247";Vm.value=h.innerHTML;if(0==a){Sm.show();kb(Y);kb(Xm);kb(Wm);P(Zm);P(Ym);kb($m);for(p=1;3>p;p++){kb(Rm[p]);Tm&&(m("rules").children[p+1].style.cssText="");let r=fn[p];r&&(r.style.background="",fn[p]=void 0)}Tm=0;D[218](g.M,0)}else p=fn[1==a?2:1],fn[1==a?2:1]=void 0,
p&&(p.style.background=""),D[222](g.M,a)}};let k=J("button",g,"\u00d7");k.className="closeIcon";k.onclick=()=>{let p=hn;G(g);D[237](a,0,g.M);for(var r=0;3>r;r++){let t=Rm[r];for(let u=0;u<t.children.length;u++)t.children[u].M=u}q(jn[0],g.M);r=jn[0]==g.M;if(fn[p]==g||r||!Rm[0].children.length)if(p&&jn[p]==g.M)fn[0].onclick();else if(Rm[0].children[0])Rm[0].children[0].onclick();else P(Sm),kb(Y),kb(Rm[1]),kb(Rm[2]);else if(r=fn[p].M,q(r,p),p)D[218](fn[0].M,1),D[222](r,p,1);else D[218](r,1)};e&&(g.onclick(),
Vm.oninput())}function an(){let a=D[217]();bo(0,a,L(611)+"-"+a,0,1)}function bn(){if(Rm[0].children.length){let a=D[219]();bo(1,a,L(578)+"-"+a,0,1)}}function cn(){if(Rm[0].children.length){let a=D[219](1);bo(2,a,L(577)+"-"+a,0,1)}}var O=!1;
function Jm(a){let b=Pc("",1);M("span",b,70,"margin-right:10px");let c=Ja(b,"",void 0,"number","",9999999,0);c.focus();M("button",b,675,"display:block;margin:auto;margin-top:20px").onclick=()=>{let d=D[251](Q(c));1==d?(Cb(b),a()):2==d?(Cb(b),alert(L(690))):alert(L(688))}}var co=a=>{lf=!1;z||(Nm(),D[109](511,ha,!!window.indexedDB,Math.floor(Math.random()*2**32),lf));O=!0;mk(a)};function Am(a){D[250]()?Jm(co):co(a)}
var eo=[{h:1,id:0,S:[0,2]},{h:3,id:1,S:[0,2]},{h:-1,oa:1,id:2},{h:6,oa:1,id:4,S:[0,2]},{h:5,id:6,S:[0,2]}],Sh;window.guname=(a,b)=>{Sh=a?Gd(Zb(b,a)):""};function te(a){let b=$a(ab),c=a.length;20<c&&(c=20);for(let d=0;d<c;d++)b[d]=a.charCodeAt(d);q(a);D[268](c)}
var ae=(a,b,c)=>{var d=c||Sn;let e=[];b=D[201](b);d=K("div",d);for(let h=0;h<eo.length;h++){let k=eo[h];if(0==k.id){if(!a[k.id]&&1==b)continue}else if(k.S&&0>k.S.indexOf(b))continue;J("div",d,k.name&&L(k.name),`background:url(nehhon/icons2.webp) 0px ${-20*k.h}px;width:20px;height:20px`);var g=a[k.id];let p=J("div",d),r=J("span",p),t;je(p,u=>{t.value=u?1:2147483647;if(t.onchange)t.onchange();u?xd(r):P(r)},2147483647!=g).style.cssText+="float:left;margin-right:5px;margin-top:-1px;";t=J("input",r);2147483647==
g&&P(r);t.type="number";t.value=g;e[k.id]=t;k.oa&&(J("span",r," / ","font-size:21px"),g=J("input",r),g.type="number",g.value=a[k.id+1],e[k.id+1]=g)}for(b=0;b<e.length;b++)e[b]&&(d=e[b],d.max=2147483647,d.min=-1);if(!c)for(c=0;c<a.length;c++)e[c]&&(e[c].onchange=()=>{for(var h=0;h<a.length;h++)e[h]&&(a[h]=parseInt(e[h].value));h=$a(ab);for(let k=0;k<a.length;k++)h[k]=a[k];D[123](2147483647)});return e};window.editProps2=ae;
var io=(a,b,c,d,e)=>{q(a,c);0>b&&(b=fo(b));if(!a)return D[202](b);var g=[{h:1,id:0,S:[0,2]},{h:3,id:1,S:[0,2]},{h:-1,oa:1,id:2},{h:6,oa:1,id:4,S:[0,2]},{h:5,id:6,S:[0,2]}];let h;e?h=Sn:(h=Pc(""),h.className="unitProps",d&&(h.className="viewonly"),h.parentNode.parentNode.style.position="fixed",h.style.minWidth="300px");let k=[],p;0<c||d||(J("span",h,L(516),"margin-right:15px;color:var(--color1)"),p=Dm(h));if(!e){var r=J("button",h);r.className="closeIcon";r.onclick=function(){Cb(h);if(!d){for(var v=
0;v<a.length;v++)k[v]&&(a[v]=parseInt(k[v].value));if(c){q(a);v=$a(ab);for(let x=0;x<a.length;x++)v[x]=a[x];D[123](c);q(k)}else{if(p.checked)n[go]&&(n[go]=0,n.splice(go+1,7));else{if(!n[go]){for(v=0;7>v;v++)n.splice(go+1,0,0);n[go]=1}q("s",a);for(v=0;7>v;v++)n[go+1+v]=a[v]}ho(0,n)}}}}b=D[201](b);if(O&&!e){r=K("div",h,!d&&!e&&"margin-top:14px");M("div",r,747);r=K("div",r,"display:flex;gap:11px");let v;je(r,x=>{v.style.display=x?"unset":"none";x||(Sh="",D[268](0))},Sh);v=K("input",r,"width:137px");
Sh||P(v);v.maxLength=20;v.onchange=()=>{te(v.value)};v.value=Sh}let t=K("div",h,!d&&!e&&"margin-top:34px");for(r=0;r<g.length;r++){let v=g[r];q(v.id,a[v.id]);if(0==v.id){if(!a[v.id]&&1==b)continue}else if(v.S&&0>v.S.indexOf(b))continue;J("div",t,v.name&&L(v.name),`background:url(nehhon/icons2.webp) 0px ${-20*v.h}px;width:20px;height:20px`);var u=J("div",t);let x=J("input",u);x.type="number";x.value=a[v.id];k[v.id]=x;v.oa&&c&&(J("span",u," / ","font-size:21px"),u=J("input",u),u.type="number",u.value=
a[v.id+1],k[v.id+1]=u)}for(g=0;g<k.length;g++)k[g]&&(b=k[g],d&&(b.disabled=!0),b.max=2147483647,b.min=-1,b.oninput=uh);if(c&&!e){J("span",t);b=J("select",t);for(let v=0,x=D[28]();v<x;v++)g=v?Gd(Hd(D[111](v),20)):L(23),Sc(D[132](v)),J("option",b,g).value=v;J("option",b,L(22)).value=2**31-1;b.value=a[7];k[7]=b}p&&(p.parentNode.style.display="inline",n[go]||(p.checked=!0,P(t)),p.onclick=function(){p.checked?P(t):t.style.display=""});if(e)for(e=0;e<a.length;e++)k[e]&&(k[e].onchange=()=>{for(var v=0;v<
a.length;v++)k[v]&&(a[v]=parseInt(k[v].value));q(a);v=$a(ab);for(let x=0;x<a.length;x++)v[x]=a[x];D[123](2147483647);q(k)})};window.editProps=io;function N(a){m(a)&&(m(a).style.display="none")}function pd(a){m(a)&&(m(a).style.display="block")}function ie(){let a=Pc("",1),b=D[254](),c=K("div",a,"display:flex;align-items:center;gap:8px");M("div",c,516);je(c,e=>{e?kb(d):(jo(d),D[252](3));D[254](1,!e)},!b);let d=J("div",a);b&&(jo(d),D[252](3))}
function jo(a){let b=D[28]();ko=K("div",a,`grid-template-columns:repeat(${b},auto)`);ko.className="dpltbl wbak";for(a=0;a<b**2;a++)J("div",ko);ko.children[0].style.height="calc(100% - 12px)"}var lo=[a=>{ko=K("div",a,"margin-top:10px;gap:10px 14px;display:grid;grid-template-columns:auto auto");ko.className="wbak";D[103](2)},a=>{jo(a);D[103](1)}],ko;function he(){let a=Pc("",1);M("span",a,620,"margin-bottom:5px");let b=D[246]();$d(a,b,[673,672],()=>{b=b?0:1;G(ko);lo[b](a)});lo[b](a)}
window.dpltbl0=function(a,b,c,d){b=Gd(Hd(b,20));K("div",ko,"padding-left:8px;border-left:2px solid "+Sc(c)).textContent=b;let e=Ja(ko,d,()=>{ke(e);D[105](a,Q(e))},"number","width:40px",1E3,0)};function mo(a,b,c,d){let e=ko.children;a.onmouseenter=()=>{e[b].style.background="#ffffff47";e[c*d].style.background="#ffffff47"};a.onmouseout=()=>{e[b].style.background="";e[c*d].style.background=""}}
window.dpltbl=function(a,b,c,d){b=Gd(Hd(b,20));let e=D[28](),g=$a(ab),h=ko.children;h[a].style.cssText=`align-self:end;writing-mode:vertical-rl;border-top:2px solid ${Sc(c)};padding:7px 5px`;h[a*e].style.cssText=`justify-self:end;border-left:2px solid ${Sc(c)};padding:5px 7px`;h[a].textContent=b;h[a*e].textContent=b;for(let k=0;k<e-1;k++){let p=k+1;if(3==d){if(p==a)continue;let r=je(h[a*e+p],()=>{D[245](r.checked,p,a,d)},g[p]);r.style.backgroundPositionX="0px";mo(r,p,a,e)}else if(0==d){if(k>=a-1)break;
let r=0,t=0,u=je(h[a*e+1+k],()=>{t=1;q(a,k+1,u.checked);D[245](u.checked,a,k+1);if(r)r=0;else v.onclick();t=0},g[k+1]);mo(u,k+1,a,e);let v=je(h[a+(1+k)*e],()=>{t||(r=1,u.onclick())},g[k+1]);v.style.opacity=.25;mo(v,a,k+1,e)}}};
window.chglmap=function(a,b){z.useProgram(U);Ca?(z.uniform1f(z.getUniformLocation(U,"mapSize"),2**Math.ceil(Math.log2(a))),z.uniform1f(z.getUniformLocation(U,"mapSize2"),a)):z.uniform1f(z.getUniformLocation(U,"mapSize"),a);z.useProgram(R);z.uniform1f(z.getUniformLocation(R,"mapSize"),a);z.uniform1f(z.getUniformLocation(R,"zMax"),96*a);b||(D[130](a),ce())};function Sc(a){for(a=a.toString(16);6>a.length;)a="0"+a;return"#"+a}
window.setupEditorPlayerTable=function(a,b,c,d,e){c=Gd(Hd(c,20));var g=Sc(b);b=de;let h=K("input",b,"width:13px");h.type="color";h.value=g;h.onchange=()=>{D[104](a,parseInt(h.value.substr(1),16));Ed()};g=J("input",b);g.value=c;g.ya=a;g.onchange=Fm;for(let p=0;4>p;p++){let r=K("input",b,"width:60px");r.type="number";r.value=e[p];r.onchange=()=>{D[107](a,Q(r),p)}}let k=je(b,()=>D[141](a,100*k.checked+1,0,1),d);J("button",b,"...","padding:3px 8px").onclick=()=>no(a);c=J("button",b);c.className="closeIcon";
c.onclick=()=>D[126](a)};function oo(){var a=po.data,b=qo.data,c=m("invrtimg").checked;q(c);var d=255*parseInt(m("rngcnvs").value)/100;for(let e=0;e<a.length;e+=4){let g=(a[e]+a[e+1]+a[e+2])/3;c&&g<d||!c&&g>=d?(b[e]=2,b[e+1]=29,b[e+2]=45):(b[e]=34,b[e+1]=55,b[e+2]=0);b[e+3]=255}m("prevcan").getContext("2d").putImageData(qo,0,0)}var po,qo;
function Dm(a){var b=document.createElement("label");b.className="container";var c=document.createElement("input");c.type="checkbox";c.checked=0;var d=document.createElement("span");d.className="checkmark";b.appendChild(c);b.appendChild(d);a.appendChild(b);return c}function ro(){this.H.innerHTML='<div style="background:url(nehhon/icons2.webp) no-repeat 0px -200px;width:20px;height:20px;display:inline-block;margin-bottom:-6px;"></div>x'+this.value/100}
function Fk(){this.H.innerHTML=this.value+"%"}function so(){this.H.innerHTML=this.value}function to(){this.H.innerHTML=this.value+"m"}function uo(){this.H.innerHTML=this.value+L(558)}function vo(){this.H.innerHTML=Ec(1E3*parseInt(this.value))}function wo(){this.H.innerHTML=this.value+"s"}
async function le(){let a=new Image;a.src=window.URL.createObjectURL(this.files[0]);await a.decode();var b=D[47](),c=m("mmimg");c.innerHTML="";var d=K("canvas",c,"position: static;margin:28px;display:block;width:291px");d.id="prevcan";var e=J("input",c);e.type="range";e.id="rngcnvs";Dk(e);e.oninput=function(){this.H.innerHTML=this.value+"%";oo()};e.H.innerHTML="50%";e.value=50;J("span",c,L(458),"margin-left:10px");c=Dm(c);c.id="invrtimg";c.onchange=oo;d.width=b;d.height=b;d=d.getContext("2d");d.imageSmoothingEnabled=
!0;d.fillStyle="#fff";d.fillRect(0,0,b,b);c=a.width;e=a.height;var g=b/(c>e?c:e);c=Math.floor(c*g);e=Math.floor(e*g);d.drawImage(a,(b-c)/2,(b-e)/2,c,e);po=d.getImageData(0,0,b,b);qo=new ImageData(b,b);oo();J("button",m("mmimg"),L(2),"margin-bottom:36px;margin-left:22px").onclick=xo;URL.revokeObjectURL(a.src)}function xo(){var a=D[186](),b=D[187](),c=D[47]();c=oi(D[78](1),c*c);var d=qo.data;for(let e=0;e<d.length;e+=4)c[e/4]=2==d[e]?b:a;q(c);D[124]();ce.update=!0}
function no(a){let b=Pc("",1);b.id="mapPropsXtra";if(D[141](a)){var c=J("div",b);for(let e=0;2>e;e++)Ja(c,D[141](a,0,e),function(){ke(this);this.value=D[141](a,Q(this)+1,e)},"number","",100,e?0:1),M("span",c,[10,34][e])}M("button",b,542,"display:block;margin:auto;margin-bottom:20px").onclick=()=>{D[140](a,1);Cb(b);no(a)};M("button",b,12,"display:block;margin:auto").onclick=()=>D[140](a);c=K("div",b,"margin-top:20px");let d=xh();d.unshift({name:L(42),id:4},{name:L(11),id:38});for(let e of d)Ja(c,D[139](a,
e.id),function(){D[139](a,e.id,Q(this)+1)},"number"),J("span",c,e.name)}var de;function Uc(a,b){a=J("img",a);a.src="nehhon/"+["gold","wood","food","stone"][b]+".gif";return a}function ee(){kb(de);J("button",de,"+").onclick=()=>D[114](1);M("div",de,6,"justify-self:baseline");for(let a=0;4>a;a++)Uc(de,a);M("div",de,20);J("div",de);J("div",de);D[103]()}window.editorPlayerTable=ee;
function Fm(){var a=17;this.value.length<a&&(a=this.value.length);for(var b=$a(ab),c=0;17>c;c++)b[c]=0;for(c=0;c<a;c++)b[c]=this.value.charCodeAt(c);D[106](this.ya);O&&Ed()}function yo(a){O&&(a.className="onlyrnd",a.dataset.nly="Only random maps")}var Km=[];
window.customMapTable=function(a,b,c,d,e,g,h){var k=m("custombody");k=J("tr",k);K("td",k,`background:rgb(${e},${g},${h})`).className="ucolor1";let p=J("td",k,Gd(Hd(b,20)),d?"color:var(--color1)":"");p.className="username1";Km[a-1]=p;D[246]()||(J("td",k,c).className="team1");k.onclick=()=>{for(let r of Km)r.style.cssText="";p.style.color="var(--color1)";D[113](a)}};
function jg(a,b,c,d,e){let g;c&&=L(c);if(d){g=document.createElement("div");let h=null;for(let k=0,p=a.children;k<p.length;k++)if(p[k].Eb>d){h=p[k];break}g.Eb=d;a.insertBefore(g,h)}else g=J("div",a);g.className=e?"dataOrder":"dataIcon";g.style.backgroundPositionY=b+"px";c&&(g.dataset.title=c);return g}window.stFST=function(a,b,c,d,e){T={race:a,D:b,name:c,priority:d,$a:e}};var T,zo;
function ne(a,b){let c=zb("",1);var d=J("table",c);if(b){M("thead",d,763);b=J("td",J("tbody",d));b.className="s3race";b.colSpan=4;var e=$a(zo);for(let k=0;k<e.length;k++){D[196](e[k]);if(!(k%3)){let p=[];var g=J("div",b);g.dataset.title=L(T.name);g.Cb=p;g.onclick=()=>{a(-1-k,p);Cb(c)}}var h=T.D;g.Cb.put(h);jg(g,h,0,T.priority)}}e=J("thead",d);g=J("tbody",d);b=J("tbody",d);c.parentNode.parentNode.style.position="fixed";J("div",d,L(60),"text-transform:uppercase;padding:11px;padding-top:23px;color:#0f0");
d=J("td",J("tbody",d),"","border:none");d.colSpan=4;c.id="selObj";for(h=0;4>h;h++)J("td",g),J("td",b),J("td",e,Kb[h]);e=D[90]();for(let k=0;k<e;k++){D[196](k);let p=D[194](k,1);h=T.race;let r=g.children[h];p||(p=D[194](k,0,1),r=b.children[h]);p||(p=D[194](k,0,0,1),r=d);p&&(jg(r,p,T.name,T.priority).onclick=()=>{a(k,p);Cb(c)})}}var Ao;function Bo(a,b,c){a=J("div",a);b=b?2==b?L(22):Rc(0,D[29](b)):L(23);a.dataset.selplayer=b;a.onclick=Co;a.Ub=c}var Do;
function Co(){this.innerHTML="";let a=J("div",this);J("div",a,L(23)).Qa=0;J("div",a,L(22)).Qa=2;Do=a;document.addEventListener("mouseup",Eo,{once:!0})}function Eo(a){a=a.target;void 0!=a.Qa&&(q(a.parentNode.parentNode),a.parentNode.parentNode.Ub(a.Qa),a.parentNode.parentNode.dataset.selplayer=a.innerHTML);G(Do)}var Fo,Go;function Ho(){let a=Q(bk[21]);Go.innerHTML=L(510)+": "+Ec(1E3*(Q(bk[24])*(a-1)+a*Q(bk[8])*60))}
function Io(a,b){return`<span>=</span> ${a}\u00d7${b}\u00b2/256\u00b2 <span>=</span> <span style="font-size:12px;font-family:'nh18';color:var(--color1);">${Math.round(a*b**2/65536)||1}</span>`}function Jo(){var a=parseInt(this.value);if(0>a||!a)this.value=a=0;9999<a&&(this.value=a=9999);n[this.ja]=a;if(this.Pa){a=n[0];let b=n[this.ja];this.Pa.innerHTML=n[this.ja+3]?Io(b,a):"";this.Pa.Db=b}}function Ko(a){n.push(1,1,a,10,0);ho(0,n)}function Lo(a){n.push(1,0,a,1,0);ho(0,n)}
function fo(a,b){b||=0;return $a(zo)[-(a+1)+b]}var go;
function ho(a,b){zo=new Yb(D[197](),48);$a(zo);Ao.innerHTML="";Fo.innerHTML="";for(var c=47;c<b.length;c+=5){let k=c;var d=b[k],e=b[k+1];let p=b[k+2],r=b[k+3],t=b[k+4],u=1==e;var g=J("tr",u?Fo:Ao);let v=J("td",g);var h=J("div",v,"",t&&"background-color:#ff00ff17 !important");h.className="sett2";if(t||!a)h.onclick=()=>{go=k+4;io(t?b.slice(k+5,k+5+7):0,p,0,a)};let x;if(0<=p)D[196](p),x=jg(v,T.D,T.name);else for(x=J("div",v),x.className="dataIcon3",D[196](fo(p)),x.dataset.title=L(T.name),h=0;3>h;h++){let y=
J("div",x),w=fo(p,h);D[196](w);y.style.backgroundPositionY=T.D+"px"}a||(x.onclick=()=>ne((y,w)=>{var C=x,H=k+2;q(w);if(0>y){C.className="dataIcon3";pi(C,"");for(let I=0;3>I;I++)J("div",C).style.backgroundPositionY=w[I]+"px"}else C.className="dataIcon",pi(C,""),C.style.backgroundPositionY=w+"px";C.dataset.title=L(D[89](0>y?fo(y):y));b[H]=y;q(y,C,b,H)},u));J("span",v,"\u00d7");let A=J("input",v);A.value=d;A.type="number";A.ja=k;A.oninput=Jo;A.onchange=Jo;if(u)e=rg(J("td",g,"","text-align:left"),r),
e.ja=k+3,e.max=35,e.style.width="116px",e.H.style.width="36px",e.oninput=function(){this.H.innerHTML=this.value+"m"},e.oninput(),e.onchange=Jo;else{let y=Dm(J("td",g));y.checked=r;d=J("td",g);d.className="finalRes";A.Pa=d;A.onchange();y.onchange=()=>{b[k+3]=y.checked?1:0;A.onchange()};a?(e=e?2==e?L(22):void 0:L(23),J("td",g,e,"font-size:13px;text-align:center")):Bo(J("td",g),e,w=>b[k+1]=w)}t&&(c+=7);a||(g=J("div",J("td",g)),g.className="closeIcon",g.onclick=()=>{b.splice(k,5+(t?7:0));ho(0,b)})}a||
(c=J("div",J("td",J("tr",Fo))),c.className="sum",c.onclick=()=>ne(Ko,1),c=J("div",J("td",J("tr",Ao))),c.className="sum",c.onclick=()=>ne(Lo))}function Mo(a){return`<td>${a||""}</td>`}function No(){for(let a of Oo)if(a.id&&ia[a.id]!=n[a.id])return!0;return!1}
function Po(a){var b=Oo,c=No();let d=J("div",a);for(let e of b){if(e.Ca){0==d.children.length&&G(d);d=J("div",a);continue}if(!e.id){J("div",d,"","margin-top:20px");J("div",d);continue}b=Qo(e.title,e.type,d);"input"==e.type&&(b.type="number");void 0!=e.min&&(b.min=e.min);e.max&&(b.max=e.max);e.step&&(b.step=e.step);e.oninput&&(b.oninput=e.oninput,b.oninput());e.h&&(J("img",b.parentNode,"","margin-right:3px",1).src="nehhon/"+e.h);e.options&&Ro(e.options,b);e.ib&&(b.style.cssText=e.ib);e.xa&&J("span",
b.parentNode,e.xa,"margin-left:4px;margin-right:10px",1);e.id&&So(e.id,b);let g=ia[e.id];if(29==e.id)g+="m";else if(35<=e.id&&38>=e.id)g+="s";else continue;J("div",b.parentNode,L(516)+" -> "+g)}return c}function uh(){ke(this)}function ke(a){var b=parseInt(a.min),c=parseInt(a.value);c>parseInt(a.max)?a.value=a.max:c<b?a.value=a.min:c||(a.value=0)}
function Td(){for(var a="",b=0,c=Xa.length;b<c;b++){var d=Xa[b];var e=b==D[97]()?"selected":"";a+=`<option value="${b}" ${e}>${d.name}</option>`}return a}function fk(a,b,c){var d=B.m?D[70]():D[28]()-1;if(0>=d)return a;if(b){if(80>Math.PI*a/d)return a=Math.round(80*d/Math.PI),Ka(Ch(L(25),a),"#d2bf61"),a}else if(b=13100*Math.PI*c**2/(5625*Math.PI),a**2/d<b)return a=Math.round(Math.sqrt(b*d)),ck||Ka(Ch(L(25),a),"#d2bf61"),a;return a}
window.updtrr=function(){bc(function(){D[122]();ce.update=!0;D[121]();Ad()})};function Uo(){var a=n;for(let b=0;b<bk.length;b++){let c=bk[b];c&&("checkbox"==c.type?c.checked=a[b]:c.value=a[b],"range"==c.type&&c.oninput&&c.oninput(),c.onchange||(c.onchange=uh))}}
var Vo,Wo,Oo=[{id:42,title:523,type:1},{id:17,title:395,type:1},{id:20,title:491,type:1},{id:40,title:508,type:1},{id:43,title:651,type:1},{id:44,title:869,type:1},{id:45,title:877,type:1},{Ca:1},{id:29,title:494,type:2,oninput:to,max:256,min:1,ib:"width:167px"},{Ca:1},{id:39,title:504,type:1},{id:33,title:501,type:2,oninput:ro,min:0,max:200,step:25},{id:32,title:500,oninput:ro,type:2,min:0,max:200,step:25},{id:31,title:499,oninput:ro,type:2,min:0,max:200,step:25},{id:34,title:71,oninput:function(){this.H.innerHTML=
"x"+this.value/100},type:2,min:100,max:500,step:100},{Ca:1},{id:41,title:511,type:2,oninput:so,min:10,max:1E3,step:10},{Ca:1},{title:502,id:35,h:"gold.gif",type:2,oninput:wo,min:1,max:30},{id:36,h:"wood.gif",type:2,oninput:wo,min:1,max:30},{id:37,h:"food1.webp",type:2,oninput:wo,min:1,max:30},{id:38,h:"stone.gif",type:2,oninput:wo,min:1,max:30},{},{id:30,title:495,type:"select",options:[89,496,497,498],xa:"\u25bc"},{id:25,h:"gold.gif",type:"input",max:5E4},{id:26,h:"wood.gif",type:"input",max:5E4},
{id:27,h:"food.gif",type:"input",max:5E4},{id:28,h:"stone.gif",type:"input",max:5E4}],Xo;function Yo(){var a=m("prstnpt").value,b=!Zo[a];Zo[a]=ak();f.presets4=JSON.stringify(Zo);b&&$o(a,n,Xo)}
function $o(a,b,c,d){let e=J("span",c,"","margin-right:10px;");J("button",e,(d?"<span style='color:#0ff;text-shadow:0px 0px 8px'>\u2714</span> ":"")+a,"color:var(--color1);margin-bottom:10px").onclick=()=>{n=b.slice();Vo.checked=0<n[8];Vo.onclick();Wo.checked=No();Wo.onchange(5);Uo();ho(0,n);bk[30].onchange();Ho()};d||(J("button",e,"\ud83d\udfa9","color:red;font-size:14px;line-height:14px;width:18px;background:#ff00002b;padding:0px;border-radius:0px").onclick=()=>{Zo[a]=void 0;f.presets4=JSON.stringify(Zo);
G(e)})}var Zo;function Qo(a,b,c){J("div",c,a&&L(a)||"");a=J("div",c);return b?1===b?Dm(a):2==b?rg(a):J(b,a):a}function Ro(a,b){for(let c=0;c<a.length;c++)J("option",b,L(a[c])).value=c}function je(a,b,c,d){let e=J("div",a,"","",d);e.className="check2";c&&(e.checked=c,e.style.backgroundPositionY="0");e.onclick=()=>{e.checked=!e.checked;e.style.backgroundPositionY=e.checked?"0":"";b(e.checked)};return e}var bk;function So(a,b){bk[a]=b;b.ja=a}
function fe(a){(a=5===a)&&m("mapconfiguration")&&Cb(m("mapconfiguration"));if(m("mapconfiguration"))m("mapconfiguration").parentNode.parentNode.style.display="table";else{var b=Pc("");b.id="mapconfiguration";bk=[];a&&(m("mapconfiguration").className="viewonly");var c=J("button",b);c.className="closeIcon";var d=J("div",b);d.id="mainconf";if(!O){var e=J("div",d,"","");for(var g=0;4>g;g++){J("img",e).src="nehhon/"+["gold","wood","food","stone"][g]+".gif";var h=J("input",e);So(1+g,h);h.min=-1E9;h.max=
1E9;h.step=100;h.type="number"}}if(O){var k=J("div",d);yo(k)}g=J("div",d);e=Qo(1,"input",g);e.step=32;e.min=96;e.max=2048;e.type="number";So(0,e);e.onchange=function(){var I=Q(this)||0;this.value=I=O?I:fk(I,bk[16].checked,Q(bk[29]));let V=document.getElementsByClassName("finalRes");for(let S of V)S.innerHTML&&(S.innerHTML=Io(S.Db,I));n[0]=I;ke(this)};e=Qo(26,"select",g);So(6,e);for(h=0;h<Xa.length;h++)J("option",e,Xa[h].name).value=h;e=Qo(27,"select",O?k:g);So(7,e);Ro([28,29,30,31,32,33,525,524],
e);e=Qo(35,"select",g);So(12,e);Ro([36,37,38,39],e);g=J("div",d);e=Qo(398,"select",g);So(19,e);Ro([399,400,401],e);O||(e=Qo(11,"input",g),So(9,e),e.type="number",e=Qo(42,"input",g),So(10,e),e.type="number",e.min=100,e.max=5E4);e=Qo(396,2,g);e.oninput=uo;So(18,e);e.style.width="150px";O||(g=J("div",d));e=Qo(394,1,O?k:g);So(16,e);e=Qo(393,2,O?k:g);So(15,e);e.oninput=Fk;e.style.width="150px";O&&k.parentNode.appendChild(k);O||(J("div",g,"","min-height:0px"),e=J("div",g,"","min-height:0px"),e.className=
"diffnfo",e.innerHTML='easy<span style="width:14px"></span>normal<span style="width:14px"></span>hard<span style="width:25px"></span>legend',e=Qo(10,2,g),e.oninput=Fk,So(11,e),e.style.width="150px",e.min=15,e.max=150,e=Qo(34,2,g),e.oninput=Fk,So(13,e),e.style.width="150px");M("button",b,737,"padding: 12px 15px;\n    width:max-content;\n    background: #fbd45c1c;\n    color:var(--color1);\n    box-shadow:0px 0px 20px #000;\n    border:1px solid rgb(243 205 90 / 8%);\n    margin-bottom: 18px;\n    font-size: 16px;\n    margin-top:-23px;\n    ").onclick=
()=>ge(a);d=J("div",b);d.id="br";let t=J("div",d);Vo=Qo(484,1,t);Vo.checked=0<n[8];t.children[0].style.color="var(--color1)";let u=Qo(487,"select",t);So(5,u);Ro([489,720,509],u);let v=Qo(485,2,t);v.min=1;v.max=60;v.oninput=uo;So(8,v);let x=Qo(490,"input",t);x.step=10;x.min=1;x.max=8E4;x.type="number";So(22,x);let A=Qo(486,2,t);A.min=0;A.max=3600;A.step=30;A.oninput=vo;So(14,A);let y=Qo(488,2,t);y.min=1;y.max=25;y.oninput=so;So(21,y);let w=Qo(492,2,t);w.min=0;w.max=100;w.oninput=to;So(23,w);let C=
Qo(493,"input",t);C.step=10;C.min=0;C.max=600;C.type="number";So(24,C);J("span",C.parentNode,"s");C.style.width="50px";C.addEventListener("input",Ho);v.addEventListener("input",Ho);y.addEventListener("input",Ho);J("div",t);J("div",t);J("div",t);Go=J("div",t,"","font-size:11px;color:#ffffff4d;line-height:0px;margin-top:11px;text-align:right");Vo.onclick=function(){this.checked?(y.value=3,A.value=600,x.value=55,v.value=3,w.value=4,u.value=1,C.value=15,y.oninput(),A.oninput(),v.oninput(),v.min=1,w.oninput(),
Ho()):(y.value=0,A.value=0,x.value=0,v.min=0,u.value=0,v.value=0,w.value=0,C.value=0);for(let I=2;I<t.children.length;I++){let V=t.children[I];this.checked?V.show():P(V)}};Vo.onclick();a&&(Vo.onclick=void 0,Vo.disabled=!0);d=J("div",b);d.id="advconf";J("span",d,L(503),"margin-right:9px");Wo=Dm(d);let H=J("div",d);Wo.checked=Po(H);Wo.onchange=function(I){if(Wo.checked)H.style.cssText="";else if(P(H),5!=I){for(let S of Oo)if(S.id){I=bk[S.id];var V=ia[S.id];"checkbox"==I.type?I.checked=!!V:I.value=V;
if(bk[S.id].oninput)bk[S.id].oninput()}bk[30].onchange()}};Wo.onchange(5);a&&(Wo.onchange=void 0,Wo.disabled=!0);d=J("div",b);d.id="rndtable";k=J("table",d);yo(k);e=J("table",d);yo(e);J("thead",e,`<td colspan=5>${L(481)}</td>`);J("thead",e,Mo()+`<td colspan=2>${L(483)}</td>`+Mo(L(6)));Ao=J("tbody",e);J("thead",k,`<td colspan=3>${L(480)}</td>`);J("thead",k,Mo()+Mo(L(482)));Fo=J("tbody",k);Fo.id="stobjs";if(!a){e=J("div",b,"","margin-top:42px;margin-bottom:-17px;max-width: 1287px;");e.id="presets";
Zo=k=f.presets4?JSON.parse(f.presets4):{};Xo=b=J("span",e,`<span style="color:#907d44;font-size:13px;margin-right:9px">${L(460)}:</span>`);for(var p in ma)$o(p,ma[p],b,1);for(var r in k)$o(r,k[r],b);p=J("span",e,"","display:inline-block");r=J("input",p,"","width:144px;font-size:12px;color:#ffd75d85");r.id="prstnpt";r.value="custom preset"+(Object.keys(k).length+1);p=J("button",p,L(8),"margin-left:6px");p.onclick=Yo;p.mc=b}Uo();ho(a,n);Vo.checked&&Ho();a||(bk[30].onchange=function(){for(let I=0;4>
I;I++)bk[25+I].parentNode.style.display=0<this.value?"unset":"none"},bk[30].onchange());c.onclick=a?function(){Cb(m("mapconfiguration"))}:function(){if(B.m)ek();else if(O){ak();dk();Cb(m("mapconfiguration"));return}m("mapconfiguration").parentNode.parentNode.style.display="none"};if(a){for(c=0;c<bk.length;c++)bk[c]&&(bk[c].disabled=!0);c=d.getElementsByTagName("input");for(p=0;p<c.length;p++)c[p].disabled=!0}}}function pi(a,b){a.innerHTML!=b&&(a.innerHTML=b)}function kb(a){a.innerHTML=""}
function Q(a){return parseInt(a.value)}function ap(a,b,c){a=J("button",a);a.className="closeIcon";a.onclick=c?function(){P(this.parentNode.parentNode.parentNode)}:b?function(){Cb(this.parentNode);location.hash="";setTimeout(Mf,200)}:function(){Cb(this.parentNode)}}
function jm(){var a=Pc("",2);a.id="Settings";if(1==f.sid){var b=J("div",a);let h=J("input",b);h.type="number";J("button",b,"ban").onclick=function(){q(parseInt(h.value),h.value);F(37,il(parseInt(h.value)));alert(1)};let k=J("input",b);k.type="number";J("button",b,"panic").onclick=function(){alert(3);F(47,fl(parseInt(k.value)))};let p=J("input",b);p.type="number";J("button",b,"vrsn").onclick=function(){alert(4);var u=parseInt(p.value);let v=new Uint8Array(3);v[1]=u&255;v[2]=u>>8&255;F(46,v)};var c=
J("div",b);let r=J("input",c);r.type="number";r.placeholder="04";let t=K("input",c,"margin-left:5px");t.type="number";J("button",b,"HRD").onclick=function(){let u=new Uint8Array(6);u[1]=Q(r);ob(u,2,Q(t));q(u);F(49,u)};J("button",b,"RE-HRD").onclick=function(){F(50)};J("button",b,"RE-BAN").onclick=function(){F(38);alert(2)}}b=J("div",a);M("span",b,15);f.sid?(c=K("div",b,"text-align:left"),J("span",c,f.name,"color:#0f0"),M("span",c,0,"margin-left:5px;color:#f0f;font-size:10px !important")):(c=J("input",
b),c.maxLength=17,c.value=String(l.name).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"'),c.onchange=bp,c.ra="name",c.spellcheck=!1);M("span",b,103);c=J("select",b);for(var d=0;3>d;d++)J("option",c,Kb[d]).value=d;c.value=f.civi||0;c.onchange=function(){f.civi=this.value};M("span",b,14);c=J("input",b);c.type="color";c.value=l.color;c.onchange=bp;c.ra="color";c.style.backgroundColor=l.color;M("span",b,718);c=J("select",b);d="en English es Espa\u00f1ol it Italiano pt Portugu\u00eas pl Polski cz \u010ce\u0161tina de Deutsch ru \u0420\u0443\u0441\u0441\u043a\u0438\u0439 bg \u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438".split(" ");
for(let h=0;h<d.length;h+=2)J("option",c,d[h+1]).value=d[h];c.value=l.Ia;c.onchange=function(){f.language=this.value;location.href=""};M("span",b,539);b=J("div",b);var e=J("div",b,"","cursor:url(nehhon/hand.gif),default;width:21px;height:15px;background:url(nehhon/flags.webp) -"+21*f.CCID+"px");let g=K("div",b,"max-height:256px;overflow:auto;width:265px;margin-top:5px;display:flex;flex-wrap:wrap;gap:11px");e.onclick=function(){g.innerHTML="";for(let h=0;h<gl.length;h++)K("div",g,"cursor:url(nehhon/hand.gif),default;width:21px;height:15px;background:url(nehhon/flags.webp) -"+
21*h+"px").onclick=()=>{f.CCID=h;e.style.backgroundPositionX=21*-h+"px";g.innerHTML="";F(36,fl(h))}};e.onchange=function(){f.CCID=this.value};b=J("div",a);M("span",b,569);c=J("select",b);J("option",c,"WebGL 1").value=1;J("option",c,"WebGL 2").value=2;navigator.gpu&&(J("option",c,"WebGPU").value=3);c.value=lf?3:Ca?1:2;c.onchange=function(){f.webgl=this.value;location.href=""};M("span",b,568);a=J("select",b);c=["No","SSAA 2x"];for(d=0;2>d;d++)J("option",a,c[d]).value=d+1;a.value=f.antialiasing2;a.onchange=
function(){f.antialiasing2=this.value};M("span",b,540);c=J("select",b);for(a=0;4>a;a++)M("option",c,570+a).value=a;c.value=f.fogRefresh;c.onchange=function(){f.fogRefresh=this.value};M("span",b,878);je(b,h=>{f.hlffps=h?1:0},1==f.hlffps);M("span",b,719);je(b,h=>{f.shadows=h},"true"==f.shadows);M("span",b,534);je(b,h=>{f.nodecals=h?0:1},1!=f.nodecals);M("span",b,459);je(b,h=>{f.theme=h},"true"==f.theme);ha||(M("span",b,43),je(b,h=>{f.fullscreen=h},"true"==f.fullscreen));window.SharedArrayBuffer&&(M("span",
b,567),je(b,h=>{f.multithreading=h},"true"==f.multithreading));M("span",b,541);b=J("div",b);c=J("input",b);c.type="range";c.max=100*Qi();c.min=25;c.step=25;c.value=f.pixelDensity1||100*Qi();Dk(c);c.oninput=function(){this.H.innerHTML=this.value+"%"};c.onchange=function(){f.pixelDensity1=this.value};c.oninput(1);c.style.width="96px"}function zb(a,b,c,d){let e=J("div",document.body);e.className="fwindow2";a=J("div",J("div",e),a,c);b&&ap(a,2==b,d);return a}
function Pc(a,b,c,d){let e=J("div",document.body);e.className="fwindow";a=J("div",J("div",e),a,c);b&&ap(a,2==b,d);return a}
function km(){var a=Pc("",2);a.id="aboutd";var b=J("div",a);K("div",b,"background-repeat:no-repeat;height:124px;background-position:center;margin-bottom:16px").className="svgnehhon";J("p",b,"Fully programmed by Donov");J("p",b,"Graphics and sounds are property of Haemimont Games");b=J("a",b);b.href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ABHGGGQ4TZFA2&source=url";b.target="_blank";K("img",b,"margin:19px 0px").src="nehhon/donate.gif";b=J("div",a);var c=[{i:"BTC",Ka:"3Jo5MJXWEZ6RHmuoJVAYehfJ8fZA12Y1TR"},
{i:"ETH",Ka:"0xe2Ee9244a6EfDE10E7b6D40d20eC6A839730C2Eb"},{i:"ZEN",Ka:"znhb95iBoiQtCdNCVgurHQgA75eYVqXuUMH"},{i:"XRP",Ka:"rPFXvVo2fYXVPdV9gCHQouHsMgMhQ2aUwM",sb:"370806536"}];for(var d of c){c=K("div",b,"text-align:left;margin:7px 0px");J("span",c,d.i,"width:42px;display:inline-block;color:var(--color1)");let e=K("input",c,"width:350px;cursor:text");e.disabled=!0;e.value=d.Ka;d.sb&&(J("span",c," memo: ","font-size:10px"),c=K("input",c,"width:80px;cursor:text"),c.disabled=!0,c.value=d.sb)}d=J("div",
a);J("div",d,"Contact:","margin-bottom:20px");b=J("a",d,"webmaster@nehhon.com");b.href="mailto:webmaster@nehhon.com";b.target="_blank";J("p",d);d=J("a",d,"@TzaredGame");d.href="https://twitter.com/TzaredGame";d.target="_blank";a=J("div",a);J("div",a,"Special thanks to","margin-bottom:20px");d=J("a",J("p",a),"CRAZYGAMES.COM");d.href="https://www.crazygames.com/c/io";d.target="_blank";K("img",a,"max-width:241px").src="nehhon/cloudflare.svg";J("p",a,"&");d='<a href="https://www.youtube.com/MayorceteGamingTV" target="_blank">Mayorcete</a>;Penetrenko;Remi Sluz;David Grau;PuppedToy;Ismael Carvajal;Alvaro Lopez;Gaboal;Nanyo Nanev;Miguel Rexi;Daniel Matos;Mikel Iglesias;Cristian Vargas;Debra Stokes;Irene;Edgaras;Hekas;<a href="https://soundcloud.com/diemiurgo" target="_blank" rel="noopener noreferrer">Diemiurgo</a>;<a href="https://www.youtube.com/user/rainheart666787" target="_blank" rel="noopener noreferrer">Sharp Rain</a>;Johannes Feulner;Marco Adorni;Eric Brown;Tommaso Bruno;PRG;Julian Kazior;JotaVilla;Francesco Castelli;FT21;Manolo;Mikhail;Witold;Michael (Macca);Vanilla Ice;Marcinm;Kurnaq;Gator;Pikachu;Sebaastian;Luca;Edward;Juan;Ivan;Marcel;Olmo;WMLS'.split(";");
a=K("div",a,"display:flex;flex-wrap:wrap;max-width:527px;gap:5px 11px;justify-content:center");for(let e of d)J("span",a,e,"padding: 2px 4px; border: solid #ffffff54; border-top: 0px; border-bottom: 0px; }")}function bp(){var a=this.value;"color"==this.type?this.style.backgroundColor=a:"name"==this.ra&&(a=Wl(a));if(a||"name"!=this.ra)l[this.ra]=a,f[this.ra]=a,xk(D[53](Gk()),17,f.name)}
if(ha){let a=J("button",m("index"));a.onclick=()=>{window.close()};a.style.cssText="z-index:1;position:fixed;top:-10px;right:-29px;font-size:45px;text-shadow: none;font-family: none;background: #7e0000;box-shadow: 0px 0px 20px #000;transform: rotate(45deg);   width: 87px;    height: 46px;";a.innerHTML="+"}m("rnd0").onclick=function(){location.hash="RandomMap"};m("sett").onclick=function(){location.hash="Settings"};let cp=document.getElementsByTagName("head")[0],dp=document.createElement("link");
dp.rel="stylesheet";dp.type="text/css";dp.href=l.Da+"b.css?v=511";dp.media="all";cp.appendChild(dp);function ep(){this.j="move attack die idle normal child shadow kirka meat food gold stone build tree milk trade spell milk1 wood jump dig cut mask water edge terrain plateau alpha decal".split(" ")}ep.prototype.index=function(a){return this.j.indexOf(a)};f.lastVersion=511;var Md=new ep;Za();var fp={0:"euro",1:"arab",2:"asia"};function gp(a,b){const c=b.length,d=a.length;var e=0;a:for(;e<c;e++){for(var g=0;g<d;g++)if(b[e+g]!==a[g])continue a;return e}return!1}function me(){q(this.files);var a=new FileReader;a.onload=function(){hp(this.result)};a.readAsArrayBuffer(this.files[0])}
function hp(a){let b=ip(a);a={grass:0,summer:4,deset:2,snow:3}[b.fc];q(a);var c=$a(ab);let d=b.qa.length+1;for(var e=0;e<d;e++)c[e]=0;e=1;for(let g of b.qa){for(let h=0;h<d;h++)c[h+e*d]=g.Lb[h];e++}q(c.slice(0,d*d));D[211](b.qa.length,a,b.tb);bc(function(){D[122]();ce.update=!0;D[121]();Ad();var g=oi(D[78](),b.tb**2);for(var h=0;h<g.length;h++)g[h]=b.ec[h];q(g);Hk(jp);D[124](1);ce.update=!0;g=1;for(var k of b.qa){h=$a(ab);for(let p=0;p<k.name.length;p++)h[p]=k.name.charCodeAt(p);D[213](g,k.color[0],
k.color[1],k.color[2],k.IA,k.race,k.resGold,k.resFood,k.resWood,k.resStone,k.name.length);g++}Ed();rf();for(let p of b.Ba)if(k=p.kingdom,10==k&&(k=0),9==k&&(k=2**31-1),g=kp[p.type+256*p.race],51==g&&23==p.WW&&(g=46),51==g&&q(p),void 0!=g)D[212](g,k,p.x32,p.y32,p.d,p.attack,p.defence,p.health,p.maxHealth,p.level,p.mana,p.xx21);Jd(b.name,0);Jd(b.description,1);Jd(b.Ib,2);Cb(m("mapPropsWindow"))})}
function lp(a){const b=a.length,c=new Uint16Array(a.length);for(var d=0;d<b;d++)c[d]=a.charCodeAt(d);return c}function mp(a,b){return gp(lp(a),b)+a.length}function np(a,b){a+=String.fromCharCode(0);return gp(lp(a),b)}function op(a,b,c){var d="";for(b+=a;a<b&&c[a];a++)d+=String.fromCharCode(c[a]);return d}
function ip(a){a=new Uint8Array(a);var b=gp([50,109,122,116],a)+6,c=a[b]+256*a[b+1],d=a[b+2]+(a[b+3]<<8)+(a[b+4]<<16);q("mapx:",c,"units",d);q("header",a[mp(".header",a)],"description",a[mp(".description",a)],"kingdominfo",a[mp(".kingdominfo",a)],"diplomacy",a[mp(".diplomacy",a)],"forbidden.upgrades",a[mp(".forbidden.upgrades",a)],"tiles",a[mp(".tiles",a)]);q(a);var e=2*c;b={};b.tb=c;b.xc=c;b.fb=!1;c="DIR2 WW0 WW utype xx56 xx2 xx562 type xx3 xxtra x32 y32 kingdom race id d health maxHealth attack defence xx8 level xx9 resistance xx11 mana xx12 xx13 xx14 xx15 xx16 xx17 xx18 xx19 xx20 xx21 xx22".split(" ");
var g="DIR2 WW0 WW utype xx56 xx2 xx562 type xx3 xxtra x32 y32 kingdom race id d health maxHealth attack defence xx8 level xx9 resistance xx11 mana xx12 xx13 xx14 xx15 xx16 xx17 xx18 xx19 xx20 xx21 resource".split(" "),h=e/2,k=20480+2*h*h,p={};h=0;for(var r=a.length;h<r;h++){var t=a[h];p[t]||(p[t]=[]);p[t].push(h)}p=[];var u={56:!0,58:!0,88:!0,72:!0};q(a.slice(k));h=k+1;for(r=a.length;h<r;h++)if(t=a[h],u[t]&&u[a[h+4]]){k={};t=72!==t?c:g;var v=h-8;let w=v;k.i2=v;for(var x=0,A=t.length;x<A;x++){var y=
t[x];"kingdom"==y||"race"==y||"xx21"==y||"xx22"==y?(k[y]=a[v],v++):(k[y]=a[v]+256*a[v+1],v+=2)}h+=v-w-8;p.push(k)}b.Ba=p;b.Ba.length>d&&(b.Ba.length=d);d=b.Ba;c=e/2;u=[];g=0;k=[];v=t=a[mp(".forbidden.upgrades",a)]+1;r=t*=512;for(h=a.length;r<h;r+=2){A=a[r];x=~~(r/512);for(p=8;p<c&&a[p+r]===(A+p/4)%256;p+=4);20<p&&(r=512*x,1==u.length&&(r=512*(x-(2-(x-v)%2))),p=a.slice(t,r),t-r&&(u[g++]=[t,r],k.push(p)),r+=512,2==u.length&&(r-=512),t=r)}u[g++]=[t,a.length];k={64:[u[0]],96:[u[0]],128:[u[0]],192:[u[1],
u[0],u[2],u[3]],256:[u[1],u[0],u[2],u[3]],384:[u[1],u[0],u[2],u[3],u[4],u[5],u[6]],512:[u[1],u[0],u[2],u[3],u[4],u[5],u[6],u[7],u[8],u[9]]}[c];q(u);u=new Uint8Array(c*c);t=new Uint8Array(c*c);jp=new Uint8Array(c*c);p=g=0;for(v=k.length;p<v;p++)if(h=k[p],g<c*c)for(r=h[0],h=h[1];r<h;r+=2)u[g]=a[r],t[g]=a[r+1],jp[g]=t[g]%8,8<=t[g]&&d.push({race:0,type:7,d:~~(t[g]/8)-1,x32:g%c,y32:~~(g/c)}),g++;pp(u,e);pp(t,e);b.ec=u;d=(e="grass",np("grass",a))||(e="summer",np("summer",a))||(e="desert",np("desert",a))||
(e="snow",np("snow",a));c=op(512*(a[mp(".description",a)]-1),512,a);b.description=c;b.Ib=op(d-64,64,a);b.name=op(d-128,64,a);b.fc=e;for(e=gp([192,4],a)+50;!a[e];)e++;d="name tzar active resGold resStone resFood resWood x6 race x8 x9 x10 x11 x12 x13 x14 AI x16 x17 x18 x19 x20".split(" ");c=d.length;g=[];r=[[41,115,255],[231,0,0],[57,115,16],[231,0,231],[255,255,0],[0,181,181],[255,156,33],[90,90,90]];q("kingdoms:",e);b.ic={0:0,9:0,10:0};for(p=0;8>p;p++){u={color:r[p]};for(k=0;k<c;k++)if(t=d[k],"name"==
t||"tzar"==t){for(u[t]="";!a[e];)e++;for(h=e+32;a[e];)u[t]+=String.fromCharCode(a[e]),e++;e=h}else u[t]=a[e]+(a[e+1]<<8)+(a[e+2]<<16)+(a[e+3]<<24),"race"==t&&(u[t]=a[e],u.racestr=fp[a[e]-1]),e+=4;g.push(u);b.ic[p+1]=g.length;1<g.length&&(u.IA=1);u.resources=[u.resGold,u.resWood,u.resFood,u.resStone];u.race--}q(g);b.qa=g;e=b.qa;d=512*(a[mp(".diplomacy",a)]-1);c=e.length;for(g=0;g<c;g++)if(h=[0],e[g])for(e[g].Lb=h,r=1;9>r;r++)e[r-1]&&(p=a[d],p=60>p&&r-1!=g?1:0,h.push(p)),d+=4;else d+=32;q(b);return b}
function pp(a,b){if(a&&a.length){b/=2;var c=~~(a.length/b);if(b){for(var d=document.createElement("canvas"),e=d.getContext("2d"),g=new ImageData(b,c),h=g.data,k=0,p=h.length;k<p;k+=4){var r=a[k/4];h[k]=r;h[k+1]=r;h[k+2]=r;h[k+3]=255}d.width=b;d.height=c;e.putImageData(g,0,0);document.body.appendChild(d)}}}
var jp,kp={7:7,15:78,16:77,19:37,20:39,21:38,22:131,23:73,24:75,25:76,27:59,28:58,30:132,31:40,32:130,36:60,38:42,39:55,40:32,41:44,42:56,43:57,61:45,62:13,63:20,64:35,72:43,110:27,133:36,136:74,257:10,258:61,259:0,260:4,261:3,262:6,263:1,264:19,67:51,267:8,270:2,273:5,274:9,300:12,301:14,302:15,303:23,304:30,305:25,306:28,307:18,308:34,309:33,310:41,311:11,312:17,314:26,315:29,316:16,321:24,322:31,513:79,514:90,515:80,516:81,517:83,519:82,522:85,529:89,530:87,541:91,545:86,547:84,556:63,557:102,
558:93,559:95,560:100,561:99,562:103,563:94,564:104,565:101,566:96,568:109,570:97,571:98,572:107,577:108,578:92,581:110,583:106,769:64,771:66,772:67,773:68,778:69,780:128,781:65,785:129,786:127,802:70,805:72,812:62,813:71,814:112,815:114,816:119,817:118,818:121,819:113,820:122,821:120,822:115,824:126,826:116,827:117,828:124,833:125,834:111,838:123,76:21,78:22};
