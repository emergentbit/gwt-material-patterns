function GwtMaterialPatterns(){var O='bootstrap',P='begin',Q='gwt.codesvr.GwtMaterialPatterns=',R='gwt.codesvr=',S='GwtMaterialPatterns',T='startup',U='DUMMY',V=0,W=1,X='iframe',Y='javascript:""',Z='position:absolute; width:0; height:0; border:none; left: -1000px;',$=' top: -1000px;',_='CSS1Compat',ab='<!doctype html>',bb='',cb='<html><head><\/head><body><\/body><\/html>',db='undefined',eb='DOMContentLoaded',fb=50,gb='Chrome',hb='eval("',ib='");',jb='script',kb='javascript',lb='moduleStartup',mb='moduleRequested',nb='Failed to load ',ob='head',pb='meta',qb='name',rb='GwtMaterialPatterns::',sb='::',tb='gwt:property',ub='content',vb='=',wb='gwt:onPropertyErrorFn',xb='Bad handler "',yb='" for "gwt:onPropertyErrorFn"',zb='gwt:onLoadErrorFn',Ab='" for "gwt:onLoadErrorFn"',Bb='#',Cb='?',Db='/',Eb='img',Fb='clear.cache.gif',Gb='baseUrl',Hb='GwtMaterialPatterns.nocache.js',Ib='base',Jb='//',Kb='selectingPermutation',Lb='GwtMaterialPatterns.devmode.js',Mb='F6E2160CD9A3ADD63664ACDCBC054C96',Nb=':',Ob=10,Pb='.cache.js',Qb='link',Rb='rel',Sb='stylesheet',Tb='href',Ub='loadExternalRefs',Vb='css/animation.css',Wb='css/material-icons.css',Xb='css/materialize.min.css',Yb='css/overridecss.css',Zb='css/materialize.blue.css',$b='css/overridecss.blue.css',_b='end',ac='http:',bc='file:',cc='_gwt_dummy_',dc='__gwtDevModeHook:GwtMaterialPatterns',ec='Ignoring non-whitelisted Dev Mode URL: ',fc=':moduleBase';var o=window;var p=document;r(O,P);function q(){var a=o.location.search;return a.indexOf(Q)!=-1||a.indexOf(R)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:a,millis:(new Date).getTime(),type:b})}}
GwtMaterialPatterns.__sendStats=r;GwtMaterialPatterns.__moduleName=S;GwtMaterialPatterns.__errFn=null;GwtMaterialPatterns.__moduleBase=U;GwtMaterialPatterns.__softPermutationId=V;GwtMaterialPatterns.__computePropValue=null;GwtMaterialPatterns.__getPropMap=null;GwtMaterialPatterns.__installRunAsyncCode=function(){};GwtMaterialPatterns.__gwtStartLoadingFragment=function(){return null};GwtMaterialPatterns.__gwt_isKnownPropertyValue=function(){return false};GwtMaterialPatterns.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[S]={moduleName:S};GwtMaterialPatterns.__moduleStartupDone=function(e){var f=t[S].bindings;t[S].bindings=function(){var a=f?f():{};var b=e[GwtMaterialPatterns.__softPermutationId];for(var c=V;c<b.length;c++){var d=b[c];a[d[V]]=d[W]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(X);a.src=Y;a.id=S;a.style.cssText=Z+$;a.tabIndex=-1;p.body.appendChild(a);u=a.contentDocument;if(!u){u=a.contentWindow.document}u.open();var b=document.compatMode==_?ab:bb;u.write(b+cb);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==db){return typeof p.body!=db&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(p.removeEventListener){p.removeEventListener(eb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(eb,d,false)}var e=setInterval(function(){if(b()){d()}},fb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(gb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(hb));for(var i=V;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(W,j.length-W)))}h.appendChild(e.createTextNode(ib));g=e.createElement(jb);g.language=kb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=V;i<c.length;i++){g=e.createElement(jb);g.language=kb;g.text=c[i];f.appendChild(g);d(f,g)}}}
GwtMaterialPatterns.onScriptDownloaded=function(a){l(function(){m(a)})};r(lb,mb);var n=p.createElement(jb);n.src=k;if(GwtMaterialPatterns.__errFn){n.onerror=function(){GwtMaterialPatterns.__errFn(S,new Error(nb+code))}}p.getElementsByTagName(ob)[V].appendChild(n)}
GwtMaterialPatterns.__startLoadingFragment=function(a){return D(a)};GwtMaterialPatterns.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(jb);d.language=kb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(pb);for(var g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(qb),k;if(j){j=j.replace(rb,bb);if(j.indexOf(sb)>=V){continue}if(j==tb){k=i.getAttribute(ub);if(k){var l,m=k.indexOf(vb);if(m>=V){j=k.substring(V,m);l=k.substring(m+W)}else{j=k;l=bb}c[j]=l}}else if(j==wb){k=i.getAttribute(ub);if(k){try{d=eval(k)}catch(a){alert(xb+k+yb)}}}else if(j==zb){k=i.getAttribute(ub);if(k){try{e=eval(k)}catch(a){alert(xb+k+Ab)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;GwtMaterialPatterns.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(Bb);if(b==-1){b=a.length}var c=a.indexOf(Cb);if(c==-1){c=a.length}var d=a.lastIndexOf(Db,Math.min(c,b));return d>=V?a.substring(V,d+W):bb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Eb);b.src=a+Fb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Gb);if(a!=null){return a}return bb}
function h(){var a=p.getElementsByTagName(jb);for(var b=V;b<a.length;++b){if(a[b].src.indexOf(Hb)!=-1){return e(a[b].src)}}return bb}
function i(){var a=p.getElementsByTagName(Ib);if(a.length>V){return a[a.length-W].href}return bb}
function j(){var a=p.location;return a.href==a.protocol+Jb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==bb){k=h()}if(k==bb){k=i()}if(k==bb&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return GwtMaterialPatterns.__moduleBase+a}
function F(){var f=[];var g=V;var h=[];var i=[];function j(a){var b=i[a](),c=h[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
__gwt_isKnownPropertyValue=function(a,b){return b in h[a]};GwtMaterialPatterns.__getPropMap=function(){var a={};for(var b in h){if(h.hasOwnProperty(b)){a[b]=j(b)}}return a};GwtMaterialPatterns.__computePropValue=j;o.__gwt_activeModules[S].bindings=GwtMaterialPatterns.__getPropMap;r(O,Kb);if(q()){return D(Lb)}var k;try{k=Mb;var l=k.indexOf(Nb);if(l!=-1){g=parseInt(k.substring(l+W),Ob);k=k.substring(V,l)}}catch(a){}GwtMaterialPatterns.__softPermutationId=g;return D(k+Pb)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=p.createElement(Qb);b.setAttribute(Rb,Sb);b.setAttribute(Tb,D(a));p.getElementsByTagName(ob)[V].appendChild(b);__gwt_stylesLoaded[a]=true}}
r(Ub,P);c(Vb);c(Wb);c(Xb);c(Yb);c(Zb);c($b);r(Ub,_b)}
B();GwtMaterialPatterns.__moduleBase=C();t[S].moduleBase=GwtMaterialPatterns.__moduleBase;var H=F();if(o){var I=!!(o.location.protocol==ac||o.location.protocol==bc);o.__gwt_activeModules[S].canRedirect=I;function J(){var b=cc;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(I&&J()){var K=dc;var L=o.sessionStorage[K];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)){if(L&&(window.console&&console.log)){console.log(ec+L)}L=bb}if(L&&!o[K]){o[K]=true;o[K+fc]=C();var M=p.createElement(jb);M.src=L;var N=p.getElementsByTagName(ob)[V];N.insertBefore(M,N.firstElementChild||N.children[V]);return false}}}G();r(O,_b);A(H);return true}
GwtMaterialPatterns.succeeded=GwtMaterialPatterns();