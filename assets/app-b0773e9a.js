var pp=Object.defineProperty;var vp=(e,t,n)=>t in e?pp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Na=(e,t,n)=>(vp(e,typeof t!="symbol"?t+"":t,n),n);const mp="modulepreload",gp=function(e){return"/"+e},Gl={},m=function(t,n,s){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=gp(i),i in Gl)return;Gl[i]=!0;const l=i.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(!!s)for(let d=a.length-1;d>=0;d--){const p=a[d];if(p.href===i&&(!l||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${r}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":mp,l||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),l)return new Promise((d,p)=>{c.addEventListener("load",d),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function qi(e,t){const n=Object.create(null),s=e.split(",");for(let a=0;a<s.length;a++)n[s[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Se={},On=[],ft=()=>{},fp=()=>!1,bp=/^on[^a-z]/,Ls=e=>bp.test(e),zi=e=>e.startsWith("onUpdate:"),Oe=Object.assign,Hi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hp=Object.prototype.hasOwnProperty,ge=(e,t)=>hp.call(e,t),W=Array.isArray,Dn=e=>xs(e)==="[object Map]",Xn=e=>xs(e)==="[object Set]",Kl=e=>xs(e)==="[object Date]",ne=e=>typeof e=="function",ce=e=>typeof e=="string",ks=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",jo=e=>Ae(e)&&ne(e.then)&&ne(e.catch),Fo=Object.prototype.toString,xs=e=>Fo.call(e),kp=e=>xs(e).slice(8,-1),No=e=>xs(e)==="[object Object]",Ui=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ds=qi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sa=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},yp=/-(\w)/g,ot=Sa(e=>e.replace(yp,(t,n)=>n?n.toUpperCase():"")),_p=/\B([A-Z])/g,yn=Sa(e=>e.replace(_p,"-$1").toLowerCase()),Os=Sa(e=>e.charAt(0).toUpperCase()+e.slice(1)),qa=Sa(e=>e?`on${Os(e)}`:""),ys=(e,t)=>!Object.is(e,t),ca=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},da=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},pa=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ep=e=>{const t=ce(e)?Number(e):NaN;return isNaN(t)?e:t};let Wl;const vi=()=>Wl||(Wl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ji(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],a=ce(s)?Ip(s):Ji(s);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ce(e))return e;if(Ae(e))return e}}const Ap=/;(?![^(]*\))/g,wp=/:([^]+)/,Sp=/\/\*[^]*?\*\//g;function Ip(e){const t={};return e.replace(Sp,"").split(Ap).forEach(n=>{if(n){const s=n.split(wp);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Gi(e){let t="";if(ce(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const s=Gi(e[n]);s&&(t+=s+" ")}else if(Ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Pp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tp=qi(Pp);function qo(e){return!!e||e===""}function Cp(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=bn(e[s],t[s]);return n}function bn(e,t){if(e===t)return!0;let n=Kl(e),s=Kl(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=ks(e),s=ks(t),n||s)return e===t;if(n=W(e),s=W(t),n||s)return n&&s?Cp(e,t):!1;if(n=Ae(e),s=Ae(t),n||s){if(!n||!s)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const l in e){const r=e.hasOwnProperty(l),u=t.hasOwnProperty(l);if(r&&!u||!r&&u||!bn(e[l],t[l]))return!1}}return String(e)===String(t)}function Ki(e,t){return e.findIndex(n=>bn(n,t))}const A4=e=>ce(e)?e:e==null?"":W(e)||Ae(e)&&(e.toString===Fo||!ne(e.toString))?JSON.stringify(e,zo,2):String(e),zo=(e,t)=>t&&t.__v_isRef?zo(e,t.value):Dn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,a])=>(n[`${s} =>`]=a,n),{})}:Xn(t)?{[`Set(${t.size})`]:[...t.values()]}:Ae(t)&&!W(t)&&!No(t)?String(t):t;let Ye;class Lp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ye,!t&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function xp(e,t=Ye){t&&t.active&&t.effects.push(e)}function Ho(){return Ye}function Op(e){Ye&&Ye.cleanups.push(e)}const Wi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Uo=e=>(e.w&Yt)>0,Jo=e=>(e.n&Yt)>0,Dp=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Yt},Rp=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const a=t[s];Uo(a)&&!Jo(a)?a.delete(e):t[n++]=a,a.w&=~Yt,a.n&=~Yt}t.length=n}},va=new WeakMap;let cs=0,Yt=1;const mi=30;let mt;const mn=Symbol(""),gi=Symbol("");class Qi{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xp(this,s)}run(){if(!this.active)return this.fn();let t=mt,n=Qt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=mt,mt=this,Qt=!0,Yt=1<<++cs,cs<=mi?Dp(this):Ql(this),this.fn()}finally{cs<=mi&&Rp(this),Yt=1<<--cs,mt=this.parent,Qt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mt===this?this.deferStop=!0:this.active&&(Ql(this),this.onStop&&this.onStop(),this.active=!1)}}function Ql(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Qt=!0;const Go=[];function Yn(){Go.push(Qt),Qt=!1}function Zn(){const e=Go.pop();Qt=e===void 0?!0:e}function Qe(e,t,n){if(Qt&&mt){let s=va.get(e);s||va.set(e,s=new Map);let a=s.get(n);a||s.set(n,a=Wi()),Ko(a)}}function Ko(e,t){let n=!1;cs<=mi?Jo(e)||(e.n|=Yt,n=!Uo(e)):n=!e.has(mt),n&&(e.add(mt),mt.deps.push(e))}function Rt(e,t,n,s,a,i){const l=va.get(e);if(!l)return;let r=[];if(t==="clear")r=[...l.values()];else if(n==="length"&&W(e)){const u=Number(s);l.forEach((c,d)=>{(d==="length"||d>=u)&&r.push(c)})}else switch(n!==void 0&&r.push(l.get(n)),t){case"add":W(e)?Ui(n)&&r.push(l.get("length")):(r.push(l.get(mn)),Dn(e)&&r.push(l.get(gi)));break;case"delete":W(e)||(r.push(l.get(mn)),Dn(e)&&r.push(l.get(gi)));break;case"set":Dn(e)&&r.push(l.get(mn));break}if(r.length===1)r[0]&&fi(r[0]);else{const u=[];for(const c of r)c&&u.push(...c);fi(Wi(u))}}function fi(e,t){const n=W(e)?e:[...e];for(const s of n)s.computed&&Xl(s);for(const s of n)s.computed||Xl(s)}function Xl(e,t){(e!==mt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Bp(e,t){var n;return(n=va.get(e))==null?void 0:n.get(t)}const Mp=qi("__proto__,__v_isRef,__isVue"),Wo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ks)),$p=Xi(),Vp=Xi(!1,!0),jp=Xi(!0),Yl=Fp();function Fp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=de(this);for(let i=0,l=this.length;i<l;i++)Qe(s,"get",i+"");const a=s[t](...n);return a===-1||a===!1?s[t](...n.map(de)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Yn();const s=de(this)[t].apply(this,n);return Zn(),s}}),e}function Np(e){const t=de(this);return Qe(t,"has",e),t.hasOwnProperty(e)}function Xi(e=!1,t=!1){return function(s,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?sv:ec:t?Zo:Yo).get(s))return s;const l=W(s);if(!e){if(l&&ge(Yl,a))return Reflect.get(Yl,a,i);if(a==="hasOwnProperty")return Np}const r=Reflect.get(s,a,i);return(ks(a)?Wo.has(a):Mp(a))||(e||Qe(s,"get",a),t)?r:Be(r)?l&&Ui(a)?r:r.value:Ae(r)?e?Mt(r):Ds(r):r}}const qp=Qo(),zp=Qo(!0);function Qo(e=!1){return function(n,s,a,i){let l=n[s];if(Nn(l)&&Be(l)&&!Be(a))return!1;if(!e&&(!ma(a)&&!Nn(a)&&(l=de(l),a=de(a)),!W(n)&&Be(l)&&!Be(a)))return l.value=a,!0;const r=W(n)&&Ui(s)?Number(s)<n.length:ge(n,s),u=Reflect.set(n,s,a,i);return n===de(i)&&(r?ys(a,l)&&Rt(n,"set",s,a):Rt(n,"add",s,a)),u}}function Hp(e,t){const n=ge(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Rt(e,"delete",t,void 0),s}function Up(e,t){const n=Reflect.has(e,t);return(!ks(t)||!Wo.has(t))&&Qe(e,"has",t),n}function Jp(e){return Qe(e,"iterate",W(e)?"length":mn),Reflect.ownKeys(e)}const Xo={get:$p,set:qp,deleteProperty:Hp,has:Up,ownKeys:Jp},Gp={get:jp,set(e,t){return!0},deleteProperty(e,t){return!0}},Kp=Oe({},Xo,{get:Vp,set:zp}),Yi=e=>e,Ia=e=>Reflect.getPrototypeOf(e);function Gs(e,t,n=!1,s=!1){e=e.__v_raw;const a=de(e),i=de(t);n||(t!==i&&Qe(a,"get",t),Qe(a,"get",i));const{has:l}=Ia(a),r=s?Yi:n?tl:_s;if(l.call(a,t))return r(e.get(t));if(l.call(a,i))return r(e.get(i));e!==a&&e.get(t)}function Ks(e,t=!1){const n=this.__v_raw,s=de(n),a=de(e);return t||(e!==a&&Qe(s,"has",e),Qe(s,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Ws(e,t=!1){return e=e.__v_raw,!t&&Qe(de(e),"iterate",mn),Reflect.get(e,"size",e)}function Zl(e){e=de(e);const t=de(this);return Ia(t).has.call(t,e)||(t.add(e),Rt(t,"add",e,e)),this}function er(e,t){t=de(t);const n=de(this),{has:s,get:a}=Ia(n);let i=s.call(n,e);i||(e=de(e),i=s.call(n,e));const l=a.call(n,e);return n.set(e,t),i?ys(t,l)&&Rt(n,"set",e,t):Rt(n,"add",e,t),this}function tr(e){const t=de(this),{has:n,get:s}=Ia(t);let a=n.call(t,e);a||(e=de(e),a=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return a&&Rt(t,"delete",e,void 0),i}function nr(){const e=de(this),t=e.size!==0,n=e.clear();return t&&Rt(e,"clear",void 0,void 0),n}function Qs(e,t){return function(s,a){const i=this,l=i.__v_raw,r=de(l),u=t?Yi:e?tl:_s;return!e&&Qe(r,"iterate",mn),l.forEach((c,d)=>s.call(a,u(c),u(d),i))}}function Xs(e,t,n){return function(...s){const a=this.__v_raw,i=de(a),l=Dn(i),r=e==="entries"||e===Symbol.iterator&&l,u=e==="keys"&&l,c=a[e](...s),d=n?Yi:t?tl:_s;return!t&&Qe(i,"iterate",u?gi:mn),{next(){const{value:p,done:v}=c.next();return v?{value:p,done:v}:{value:r?[d(p[0]),d(p[1])]:d(p),done:v}},[Symbol.iterator](){return this}}}}function Nt(e){return function(...t){return e==="delete"?!1:this}}function Wp(){const e={get(i){return Gs(this,i)},get size(){return Ws(this)},has:Ks,add:Zl,set:er,delete:tr,clear:nr,forEach:Qs(!1,!1)},t={get(i){return Gs(this,i,!1,!0)},get size(){return Ws(this)},has:Ks,add:Zl,set:er,delete:tr,clear:nr,forEach:Qs(!1,!0)},n={get(i){return Gs(this,i,!0)},get size(){return Ws(this,!0)},has(i){return Ks.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:Qs(!0,!1)},s={get(i){return Gs(this,i,!0,!0)},get size(){return Ws(this,!0)},has(i){return Ks.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:Qs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Xs(i,!1,!1),n[i]=Xs(i,!0,!1),t[i]=Xs(i,!1,!0),s[i]=Xs(i,!0,!0)}),[e,n,t,s]}const[Qp,Xp,Yp,Zp]=Wp();function Zi(e,t){const n=t?e?Zp:Yp:e?Xp:Qp;return(s,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?s:Reflect.get(ge(n,a)&&a in s?n:s,a,i)}const ev={get:Zi(!1,!1)},tv={get:Zi(!1,!0)},nv={get:Zi(!0,!1)},Yo=new WeakMap,Zo=new WeakMap,ec=new WeakMap,sv=new WeakMap;function av(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iv(e){return e.__v_skip||!Object.isExtensible(e)?0:av(kp(e))}function Ds(e){return Nn(e)?e:el(e,!1,Xo,ev,Yo)}function tc(e){return el(e,!1,Kp,tv,Zo)}function Mt(e){return el(e,!0,Gp,nv,ec)}function el(e,t,n,s,a){if(!Ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const l=iv(e);if(l===0)return e;const r=new Proxy(e,l===2?s:n);return a.set(e,r),r}function Rn(e){return Nn(e)?Rn(e.__v_raw):!!(e&&e.__v_isReactive)}function Nn(e){return!!(e&&e.__v_isReadonly)}function ma(e){return!!(e&&e.__v_isShallow)}function nc(e){return Rn(e)||Nn(e)}function de(e){const t=e&&e.__v_raw;return t?de(t):e}function sc(e){return da(e,"__v_skip",!0),e}const _s=e=>Ae(e)?Ds(e):e,tl=e=>Ae(e)?Mt(e):e;function nl(e){Qt&&mt&&(e=de(e),Ko(e.dep||(e.dep=Wi())))}function sl(e,t){e=de(e);const n=e.dep;n&&fi(n)}function Be(e){return!!(e&&e.__v_isRef===!0)}function F(e){return ac(e,!1)}function Ce(e){return ac(e,!0)}function ac(e,t){return Be(e)?e:new lv(e,t)}class lv{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:de(t),this._value=n?t:_s(t)}get value(){return nl(this),this._value}set value(t){const n=this.__v_isShallow||ma(t)||Nn(t);t=n?t:de(t),ys(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:_s(t),sl(this))}}function gn(e){return Be(e)?e.value:e}const rv={get:(e,t,n)=>gn(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const a=e[t];return Be(a)&&!Be(n)?(a.value=n,!0):Reflect.set(e,t,n,s)}};function ic(e){return Rn(e)?e:new Proxy(e,rv)}class ov{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>nl(this),()=>sl(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function cv(e){return new ov(e)}class uv{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Bp(de(this._object),this._key)}}class dv{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function es(e,t,n){return Be(e)?e:ne(e)?new dv(e):Ae(e)&&arguments.length>1?pv(e,t,n):F(e)}function pv(e,t,n){const s=e[t];return Be(s)?s:new uv(e,t,n)}class vv{constructor(t,n,s,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Qi(t,()=>{this._dirty||(this._dirty=!0,sl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=s}get value(){const t=de(this);return nl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function mv(e,t,n=!1){let s,a;const i=ne(e);return i?(s=e,a=ft):(s=e.get,a=e.set),new vv(s,a,i||!a,n)}function Xt(e,t,n,s){let a;try{a=s?e(...s):e()}catch(i){Rs(i,t,n)}return a}function rt(e,t,n,s){if(ne(e)){const i=Xt(e,t,n,s);return i&&jo(i)&&i.catch(l=>{Rs(l,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(rt(e[i],t,n,s));return a}function Rs(e,t,n,s=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const l=t.proxy,r=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,r)===!1)return}i=i.parent}const u=t.appContext.config.errorHandler;if(u){Xt(u,null,10,[e,l,r]);return}}gv(e,n,a,s)}function gv(e,t,n,s=!0){console.error(e)}let Es=!1,bi=!1;const Fe=[];let It=0;const Bn=[];let Ot=null,un=0;const lc=Promise.resolve();let al=null;function sn(e){const t=al||lc;return e?t.then(this?e.bind(this):e):t}function fv(e){let t=It+1,n=Fe.length;for(;t<n;){const s=t+n>>>1;As(Fe[s])<e?t=s+1:n=s}return t}function Pa(e){(!Fe.length||!Fe.includes(e,Es&&e.allowRecurse?It+1:It))&&(e.id==null?Fe.push(e):Fe.splice(fv(e.id),0,e),rc())}function rc(){!Es&&!bi&&(bi=!0,al=lc.then(oc))}function bv(e){const t=Fe.indexOf(e);t>It&&Fe.splice(t,1)}function hv(e){W(e)?Bn.push(...e):(!Ot||!Ot.includes(e,e.allowRecurse?un+1:un))&&Bn.push(e),rc()}function sr(e,t=Es?It+1:0){for(;t<Fe.length;t++){const n=Fe[t];n&&n.pre&&(Fe.splice(t,1),t--,n())}}function ga(e){if(Bn.length){const t=[...new Set(Bn)];if(Bn.length=0,Ot){Ot.push(...t);return}for(Ot=t,Ot.sort((n,s)=>As(n)-As(s)),un=0;un<Ot.length;un++)Ot[un]();Ot=null,un=0}}const As=e=>e.id==null?1/0:e.id,kv=(e,t)=>{const n=As(e)-As(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function oc(e){bi=!1,Es=!0,Fe.sort(kv);const t=ft;try{for(It=0;It<Fe.length;It++){const n=Fe[It];n&&n.active!==!1&&Xt(n,null,14)}}finally{It=0,Fe.length=0,ga(),Es=!1,al=null,(Fe.length||Bn.length)&&oc()}}function yv(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Se;let a=n;const i=t.startsWith("update:"),l=i&&t.slice(7);if(l&&l in s){const d=`${l==="modelValue"?"model":l}Modifiers`,{number:p,trim:v}=s[d]||Se;v&&(a=n.map(g=>ce(g)?g.trim():g)),p&&(a=n.map(pa))}let r,u=s[r=qa(t)]||s[r=qa(ot(t))];!u&&i&&(u=s[r=qa(yn(t))]),u&&rt(u,e,6,a);const c=s[r+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,rt(c,e,6,a)}}function cc(e,t,n=!1){const s=t.emitsCache,a=s.get(e);if(a!==void 0)return a;const i=e.emits;let l={},r=!1;if(!ne(e)){const u=c=>{const d=cc(c,t,!0);d&&(r=!0,Oe(l,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!r?(Ae(e)&&s.set(e,null),null):(W(i)?i.forEach(u=>l[u]=null):Oe(l,i),Ae(e)&&s.set(e,l),l)}function Ta(e,t){return!e||!Ls(t)?!1:(t=t.slice(2).replace(/Once$/,""),ge(e,t[0].toLowerCase()+t.slice(1))||ge(e,yn(t))||ge(e,t))}let je=null,Ca=null;function fa(e){const t=je;return je=e,Ca=e&&e.type.__scopeId||null,t}function w4(e){Ca=e}function S4(){Ca=null}function _v(e,t=je,n){if(!t||e._n)return e;const s=(...a)=>{s._d&&gr(-1);const i=fa(t);let l;try{l=e(...a)}finally{fa(i),s._d&&gr(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function za(e){const{type:t,vnode:n,proxy:s,withProxy:a,props:i,propsOptions:[l],slots:r,attrs:u,emit:c,render:d,renderCache:p,data:v,setupState:g,ctx:h,inheritAttrs:w}=e;let S,b;const y=fa(e);try{if(n.shapeFlag&4){const O=a||s;S=vt(d.call(O,O,p,i,g,v,h)),b=u}else{const O=t;S=vt(O.length>1?O(i,{attrs:u,slots:r,emit:c}):O(i,null)),b=t.props?u:Ev(u)}}catch(O){ms.length=0,Rs(O,e,1),S=Le(tt)}let L=S;if(b&&w!==!1){const O=Object.keys(b),{shapeFlag:z}=L;O.length&&z&7&&(l&&O.some(zi)&&(b=Av(b,l)),L=Zt(L,b))}return n.dirs&&(L=Zt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),S=L,fa(y),S}const Ev=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ls(n))&&((t||(t={}))[n]=e[n]);return t},Av=(e,t)=>{const n={};for(const s in e)(!zi(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function wv(e,t,n){const{props:s,children:a,component:i}=e,{props:l,children:r,patchFlag:u}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?ar(s,l,c):!!l;if(u&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const v=d[p];if(l[v]!==s[v]&&!Ta(c,v))return!0}}}else return(a||r)&&(!r||!r.$stable)?!0:s===l?!1:s?l?ar(s,l,c):!0:!!l;return!1}function ar(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let a=0;a<s.length;a++){const i=s[a];if(t[i]!==e[i]&&!Ta(n,i))return!0}return!1}function Sv({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Iv=e=>e.__isSuspense;function uc(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):hv(e)}function dc(e,t){return il(e,null,t)}const Ys={};function se(e,t,n){return il(e,t,n)}function il(e,t,{immediate:n,deep:s,flush:a,onTrack:i,onTrigger:l}=Se){var r;const u=Ho()===((r=Me)==null?void 0:r.scope)?Me:null;let c,d=!1,p=!1;if(Be(e)?(c=()=>e.value,d=ma(e)):Rn(e)?(c=()=>e,s=!0):W(e)?(p=!0,d=e.some(O=>Rn(O)||ma(O)),c=()=>e.map(O=>{if(Be(O))return O.value;if(Rn(O))return vn(O);if(ne(O))return Xt(O,u,2)})):ne(e)?t?c=()=>Xt(e,u,2):c=()=>{if(!(u&&u.isUnmounted))return v&&v(),rt(e,u,3,[g])}:c=ft,t&&s){const O=c;c=()=>vn(O())}let v,g=O=>{v=y.onStop=()=>{Xt(O,u,4)}},h;if(Hn)if(g=ft,t?n&&rt(t,u,3,[c(),p?[]:void 0,g]):c(),a==="sync"){const O=k1();h=O.__watcherHandles||(O.__watcherHandles=[])}else return ft;let w=p?new Array(e.length).fill(Ys):Ys;const S=()=>{if(y.active)if(t){const O=y.run();(s||d||(p?O.some((z,D)=>ys(z,w[D])):ys(O,w)))&&(v&&v(),rt(t,u,3,[O,w===Ys?void 0:p&&w[0]===Ys?[]:w,g]),w=O)}else y.run()};S.allowRecurse=!!t;let b;a==="sync"?b=S:a==="post"?b=()=>Ke(S,u&&u.suspense):(S.pre=!0,u&&(S.id=u.uid),b=()=>Pa(S));const y=new Qi(c,b);t?n?S():w=y.run():a==="post"?Ke(y.run.bind(y),u&&u.suspense):y.run();const L=()=>{y.stop(),u&&u.scope&&Hi(u.scope.effects,y)};return h&&h.push(L),L}function Pv(e,t,n){const s=this.proxy,a=ce(e)?e.includes(".")?pc(s,e):()=>s[e]:e.bind(s,s);let i;ne(t)?i=t:(i=t.handler,n=t);const l=Me;zn(this);const r=il(a,i.bind(s),n);return l?zn(l):fn(),r}function pc(e,t){const n=t.split(".");return()=>{let s=e;for(let a=0;a<n.length&&s;a++)s=s[n[a]];return s}}function vn(e,t){if(!Ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Be(e))vn(e.value,t);else if(W(e))for(let n=0;n<e.length;n++)vn(e[n],t);else if(Xn(e)||Dn(e))e.forEach(n=>{vn(n,t)});else if(No(e))for(const n in e)vn(e[n],t);return e}function I4(e,t){const n=je;if(n===null)return e;const s=Oa(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[l,r,u,c=Se]=t[i];l&&(ne(l)&&(l={mounted:l,updated:l}),l.deep&&vn(r),a.push({dir:l,instance:s,value:r,oldValue:void 0,arg:u,modifiers:c}))}return e}function St(e,t,n,s){const a=e.dirs,i=t&&t.dirs;for(let l=0;l<a.length;l++){const r=a[l];i&&(r.oldValue=i[l].value);let u=r.dir[s];u&&(Yn(),rt(u,n,8,[e.el,r,e,t]),Zn())}}function vc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pe(()=>{e.isMounted=!0}),rl(()=>{e.isUnmounting=!0}),e}const at=[Function,Array],mc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:at,onEnter:at,onAfterEnter:at,onEnterCancelled:at,onBeforeLeave:at,onLeave:at,onAfterLeave:at,onLeaveCancelled:at,onBeforeAppear:at,onAppear:at,onAfterAppear:at,onAppearCancelled:at},Tv={name:"BaseTransition",props:mc,setup(e,{slots:t}){const n=an(),s=vc();let a;return()=>{const i=t.default&&ll(t.default(),!0);if(!i||!i.length)return;let l=i[0];if(i.length>1){for(const w of i)if(w.type!==tt){l=w;break}}const r=de(e),{mode:u}=r;if(s.isLeaving)return Ha(l);const c=ir(l);if(!c)return Ha(l);const d=ws(c,r,s,n);Ss(c,d);const p=n.subTree,v=p&&ir(p);let g=!1;const{getTransitionKey:h}=c.type;if(h){const w=h();a===void 0?a=w:w!==a&&(a=w,g=!0)}if(v&&v.type!==tt&&(!dn(c,v)||g)){const w=ws(v,r,s,n);if(Ss(v,w),u==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ha(l);u==="in-out"&&c.type!==tt&&(w.delayLeave=(S,b,y)=>{const L=gc(s,v);L[String(v.key)]=v,S._leaveCb=()=>{b(),S._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=y})}return l}}},Cv=Tv;function gc(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function ws(e,t,n,s){const{appear:a,mode:i,persisted:l=!1,onBeforeEnter:r,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:p,onLeave:v,onAfterLeave:g,onLeaveCancelled:h,onBeforeAppear:w,onAppear:S,onAfterAppear:b,onAppearCancelled:y}=t,L=String(e.key),O=gc(n,e),z=(P,H)=>{P&&rt(P,s,9,H)},D=(P,H)=>{const U=H[1];z(P,H),W(P)?P.every(ae=>ae.length<=1)&&U():P.length<=1&&U()},$={mode:i,persisted:l,beforeEnter(P){let H=r;if(!n.isMounted)if(a)H=w||r;else return;P._leaveCb&&P._leaveCb(!0);const U=O[L];U&&dn(e,U)&&U.el._leaveCb&&U.el._leaveCb(),z(H,[P])},enter(P){let H=u,U=c,ae=d;if(!n.isMounted)if(a)H=S||u,U=b||c,ae=y||d;else return;let J=!1;const Z=P._enterCb=G=>{J||(J=!0,G?z(ae,[P]):z(U,[P]),$.delayedLeave&&$.delayedLeave(),P._enterCb=void 0)};H?D(H,[P,Z]):Z()},leave(P,H){const U=String(e.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return H();z(p,[P]);let ae=!1;const J=P._leaveCb=Z=>{ae||(ae=!0,H(),Z?z(h,[P]):z(g,[P]),P._leaveCb=void 0,O[U]===e&&delete O[U])};O[U]=e,v?D(v,[P,J]):J()},clone(P){return ws(P,t,n,s)}};return $}function Ha(e){if(Bs(e))return e=Zt(e),e.children=null,e}function ir(e){return Bs(e)?e.children?e.children[0]:void 0:e}function Ss(e,t){e.shapeFlag&6&&e.component?Ss(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ll(e,t=!1,n){let s=[],a=0;for(let i=0;i<e.length;i++){let l=e[i];const r=n==null?l.key:String(n)+String(l.key!=null?l.key:i);l.type===He?(l.patchFlag&128&&a++,s=s.concat(ll(l.children,t,r))):(t||l.type!==tt)&&s.push(r!=null?Zt(l,{key:r}):l)}if(a>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function B(e,t){return ne(e)?(()=>Oe({name:e.name},t,{setup:e}))():e}const Mn=e=>!!e.type.__asyncLoader;function _(e){ne(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:a=200,timeout:i,suspensible:l=!0,onError:r}=e;let u=null,c,d=0;const p=()=>(d++,u=null,v()),v=()=>{let g;return u||(g=u=t().catch(h=>{if(h=h instanceof Error?h:new Error(String(h)),r)return new Promise((w,S)=>{r(h,()=>w(p()),()=>S(h),d+1)});throw h}).then(h=>g!==u&&u?u:(h&&(h.__esModule||h[Symbol.toStringTag]==="Module")&&(h=h.default),c=h,h)))};return B({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return c},setup(){const g=Me;if(c)return()=>Ua(c,g);const h=y=>{u=null,Rs(y,g,13,!s)};if(l&&g.suspense||Hn)return v().then(y=>()=>Ua(y,g)).catch(y=>(h(y),()=>s?Le(s,{error:y}):null));const w=F(!1),S=F(),b=F(!!a);return a&&setTimeout(()=>{b.value=!1},a),i!=null&&setTimeout(()=>{if(!w.value&&!S.value){const y=new Error(`Async component timed out after ${i}ms.`);h(y),S.value=y}},i),v().then(()=>{w.value=!0,g.parent&&Bs(g.parent.vnode)&&Pa(g.parent.update)}).catch(y=>{h(y),S.value=y}),()=>{if(w.value&&c)return Ua(c,g);if(S.value&&s)return Le(s,{error:S.value});if(n&&!b.value)return Le(n)}}})}function Ua(e,t){const{ref:n,props:s,children:a,ce:i}=t.vnode,l=Le(e,s,a);return l.ref=n,l.ce=i,delete t.vnode.ce,l}const Bs=e=>e.type.__isKeepAlive;function Lv(e,t){fc(e,"a",t)}function xv(e,t){fc(e,"da",t)}function fc(e,t,n=Me){const s=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(La(t,s,n),n){let a=n.parent;for(;a&&a.parent;)Bs(a.parent.vnode)&&Ov(s,t,n,a),a=a.parent}}function Ov(e,t,n,s){const a=La(t,e,s,!0);_n(()=>{Hi(s[t],a)},n)}function La(e,t,n=Me,s=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{if(n.isUnmounted)return;Yn(),zn(n);const r=rt(t,n,e,l);return fn(),Zn(),r});return s?a.unshift(i):a.push(i),i}}const $t=e=>(t,n=Me)=>(!Hn||e==="sp")&&La(e,(...s)=>t(...s),n),Dv=$t("bm"),pe=$t("m"),Rv=$t("bu"),bc=$t("u"),rl=$t("bum"),_n=$t("um"),Bv=$t("sp"),Mv=$t("rtg"),$v=$t("rtc");function Vv(e,t=Me){La("ec",e,t)}const hc="components";function et(e,t){return Fv(hc,e,!0,t)||e}const jv=Symbol.for("v-ndc");function Fv(e,t,n=!0,s=!1){const a=je||Me;if(a){const i=a.type;if(e===hc){const r=f1(i,!1);if(r&&(r===t||r===ot(t)||r===Os(ot(t))))return i}const l=lr(a[e]||i[e],t)||lr(a.appContext[e],t);return!l&&s?i:l}}function lr(e,t){return e&&(e[t]||e[ot(t)]||e[Os(ot(t))])}function P4(e,t,n,s){let a;const i=n&&n[s];if(W(e)||ce(e)){a=new Array(e.length);for(let l=0,r=e.length;l<r;l++)a[l]=t(e[l],l,void 0,i&&i[l])}else if(typeof e=="number"){a=new Array(e);for(let l=0;l<e;l++)a[l]=t(l+1,l,void 0,i&&i[l])}else if(Ae(e))if(e[Symbol.iterator])a=Array.from(e,(l,r)=>t(l,r,void 0,i&&i[r]));else{const l=Object.keys(e);a=new Array(l.length);for(let r=0,u=l.length;r<u;r++){const c=l[r];a[r]=t(e[c],c,r,i&&i[r])}}else a=[];return n&&(n[s]=a),a}function T4(e,t,n={},s,a){if(je.isCE||je.parent&&Mn(je.parent)&&je.parent.isCE)return t!=="default"&&(n.name=t),Le("slot",n,s&&s());let i=e[t];i&&i._c&&(i._d=!1),Tc();const l=i&&kc(i(n)),r=Lc(He,{key:n.key||l&&l.key||`_${t}`},l||(s?s():[]),l&&e._===1?64:-2);return!a&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),i&&i._c&&(i._d=!0),r}function kc(e){return e.some(t=>ya(t)?!(t.type===tt||t.type===He&&!kc(t.children)):!0)?e:null}const hi=e=>e?Rc(e)?Oa(e)||e.proxy:hi(e.parent):null,ps=Oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>hi(e.parent),$root:e=>hi(e.root),$emit:e=>e.emit,$options:e=>ol(e),$forceUpdate:e=>e.f||(e.f=()=>Pa(e.update)),$nextTick:e=>e.n||(e.n=sn.bind(e.proxy)),$watch:e=>Pv.bind(e)}),Ja=(e,t)=>e!==Se&&!e.__isScriptSetup&&ge(e,t),Nv={get({_:e},t){const{ctx:n,setupState:s,data:a,props:i,accessCache:l,type:r,appContext:u}=e;let c;if(t[0]!=="$"){const g=l[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Ja(s,t))return l[t]=1,s[t];if(a!==Se&&ge(a,t))return l[t]=2,a[t];if((c=e.propsOptions[0])&&ge(c,t))return l[t]=3,i[t];if(n!==Se&&ge(n,t))return l[t]=4,n[t];ki&&(l[t]=0)}}const d=ps[t];let p,v;if(d)return t==="$attrs"&&Qe(e,"get",t),d(e);if((p=r.__cssModules)&&(p=p[t]))return p;if(n!==Se&&ge(n,t))return l[t]=4,n[t];if(v=u.config.globalProperties,ge(v,t))return v[t]},set({_:e},t,n){const{data:s,setupState:a,ctx:i}=e;return Ja(a,t)?(a[t]=n,!0):s!==Se&&ge(s,t)?(s[t]=n,!0):ge(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:a,propsOptions:i}},l){let r;return!!n[l]||e!==Se&&ge(e,l)||Ja(t,l)||(r=i[0])&&ge(r,l)||ge(s,l)||ge(ps,l)||ge(a.config.globalProperties,l)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ge(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function C4(e,t,n){const s=an();if(n&&n.local){const a=F(e[t]);return se(()=>e[t],i=>a.value=i),se(a,i=>{i!==e[t]&&s.emit(`update:${t}`,i)}),a}else return{__v_isRef:!0,get value(){return e[t]},set value(a){s.emit(`update:${t}`,a)}}}function rr(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ki=!0;function qv(e){const t=ol(e),n=e.proxy,s=e.ctx;ki=!1,t.beforeCreate&&or(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:l,watch:r,provide:u,inject:c,created:d,beforeMount:p,mounted:v,beforeUpdate:g,updated:h,activated:w,deactivated:S,beforeDestroy:b,beforeUnmount:y,destroyed:L,unmounted:O,render:z,renderTracked:D,renderTriggered:$,errorCaptured:P,serverPrefetch:H,expose:U,inheritAttrs:ae,components:J,directives:Z,filters:G}=t;if(c&&zv(c,s,null),l)for(const he in l){const te=l[he];ne(te)&&(s[he]=te.bind(n))}if(a){const he=a.call(n,n);Ae(he)&&(e.data=Ds(he))}if(ki=!0,i)for(const he in i){const te=i[he],ut=ne(te)?te.bind(n,n):ne(te.get)?te.get.bind(n,n):ft,At=!ne(te)&&ne(te.set)?te.set.bind(n):ft,Ge=A({get:ut,set:At});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:xe=>Ge.value=xe})}if(r)for(const he in r)yc(r[he],s,n,he);if(u){const he=ne(u)?u.call(n):u;Reflect.ownKeys(he).forEach(te=>{bt(te,he[te])})}d&&or(d,e,"c");function le(he,te){W(te)?te.forEach(ut=>he(ut.bind(n))):te&&he(te.bind(n))}if(le(Dv,p),le(pe,v),le(Rv,g),le(bc,h),le(Lv,w),le(xv,S),le(Vv,P),le($v,D),le(Mv,$),le(rl,y),le(_n,O),le(Bv,H),W(U))if(U.length){const he=e.exposed||(e.exposed={});U.forEach(te=>{Object.defineProperty(he,te,{get:()=>n[te],set:ut=>n[te]=ut})})}else e.exposed||(e.exposed={});z&&e.render===ft&&(e.render=z),ae!=null&&(e.inheritAttrs=ae),J&&(e.components=J),Z&&(e.directives=Z)}function zv(e,t,n=ft){W(e)&&(e=yi(e));for(const s in e){const a=e[s];let i;Ae(a)?"default"in a?i=fe(a.from||s,a.default,!0):i=fe(a.from||s):i=fe(a),Be(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[s]=i}}function or(e,t,n){rt(W(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function yc(e,t,n,s){const a=s.includes(".")?pc(n,s):()=>n[s];if(ce(e)){const i=t[e];ne(i)&&se(a,i)}else if(ne(e))se(a,e.bind(n));else if(Ae(e))if(W(e))e.forEach(i=>yc(i,t,n,s));else{const i=ne(e.handler)?e.handler.bind(n):t[e.handler];ne(i)&&se(a,i,e)}}function ol(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,r=i.get(t);let u;return r?u=r:!a.length&&!n&&!s?u=t:(u={},a.length&&a.forEach(c=>ba(u,c,l,!0)),ba(u,t,l)),Ae(t)&&i.set(t,u),u}function ba(e,t,n,s=!1){const{mixins:a,extends:i}=t;i&&ba(e,i,n,!0),a&&a.forEach(l=>ba(e,l,n,!0));for(const l in t)if(!(s&&l==="expose")){const r=Hv[l]||n&&n[l];e[l]=r?r(e[l],t[l]):t[l]}return e}const Hv={data:cr,props:ur,emits:ur,methods:us,computed:us,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:us,directives:us,watch:Jv,provide:cr,inject:Uv};function cr(e,t){return t?e?function(){return Oe(ne(e)?e.call(this,this):e,ne(t)?t.call(this,this):t)}:t:e}function Uv(e,t){return us(yi(e),yi(t))}function yi(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ze(e,t){return e?[...new Set([].concat(e,t))]:t}function us(e,t){return e?Oe(Object.create(null),e,t):t}function ur(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:Oe(Object.create(null),rr(e),rr(t??{})):t}function Jv(e,t){if(!e)return t;if(!t)return e;const n=Oe(Object.create(null),e);for(const s in t)n[s]=ze(e[s],t[s]);return n}function _c(){return{app:null,config:{isNativeTag:fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gv=0;function Kv(e,t){return function(s,a=null){ne(s)||(s=Oe({},s)),a!=null&&!Ae(a)&&(a=null);const i=_c(),l=new Set;let r=!1;const u=i.app={_uid:Gv++,_component:s,_props:a,_container:null,_context:i,_instance:null,version:y1,get config(){return i.config},set config(c){},use(c,...d){return l.has(c)||(c&&ne(c.install)?(l.add(c),c.install(u,...d)):ne(c)&&(l.add(c),c(u,...d))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,d){return d?(i.components[c]=d,u):i.components[c]},directive(c,d){return d?(i.directives[c]=d,u):i.directives[c]},mount(c,d,p){if(!r){const v=Le(s,a);return v.appContext=i,d&&t?t(v,c):e(v,c,p),r=!0,u._container=c,c.__vue_app__=u,Oa(v.component)||v.component.proxy}},unmount(){r&&(e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return i.provides[c]=d,u},runWithContext(c){ha=u;try{return c()}finally{ha=null}}};return u}}let ha=null;function bt(e,t){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[e]=t}}function fe(e,t,n=!1){const s=Me||je;if(s||ha){const a=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ha._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&ne(t)?t.call(s&&s.proxy):t}}function Wv(e,t,n,s=!1){const a={},i={};da(i,xa,1),e.propsDefaults=Object.create(null),Ec(e,t,a,i);for(const l in e.propsOptions[0])l in a||(a[l]=void 0);n?e.props=s?a:tc(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Qv(e,t,n,s){const{props:a,attrs:i,vnode:{patchFlag:l}}=e,r=de(a),[u]=e.propsOptions;let c=!1;if((s||l>0)&&!(l&16)){if(l&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let v=d[p];if(Ta(e.emitsOptions,v))continue;const g=t[v];if(u)if(ge(i,v))g!==i[v]&&(i[v]=g,c=!0);else{const h=ot(v);a[h]=_i(u,r,h,g,e,!1)}else g!==i[v]&&(i[v]=g,c=!0)}}}else{Ec(e,t,a,i)&&(c=!0);let d;for(const p in r)(!t||!ge(t,p)&&((d=yn(p))===p||!ge(t,d)))&&(u?n&&(n[p]!==void 0||n[d]!==void 0)&&(a[p]=_i(u,r,p,void 0,e,!0)):delete a[p]);if(i!==r)for(const p in i)(!t||!ge(t,p))&&(delete i[p],c=!0)}c&&Rt(e,"set","$attrs")}function Ec(e,t,n,s){const[a,i]=e.propsOptions;let l=!1,r;if(t)for(let u in t){if(ds(u))continue;const c=t[u];let d;a&&ge(a,d=ot(u))?!i||!i.includes(d)?n[d]=c:(r||(r={}))[d]=c:Ta(e.emitsOptions,u)||(!(u in s)||c!==s[u])&&(s[u]=c,l=!0)}if(i){const u=de(n),c=r||Se;for(let d=0;d<i.length;d++){const p=i[d];n[p]=_i(a,u,p,c[p],e,!ge(c,p))}}return l}function _i(e,t,n,s,a,i){const l=e[n];if(l!=null){const r=ge(l,"default");if(r&&s===void 0){const u=l.default;if(l.type!==Function&&!l.skipFactory&&ne(u)){const{propsDefaults:c}=a;n in c?s=c[n]:(zn(a),s=c[n]=u.call(null,t),fn())}else s=u}l[0]&&(i&&!r?s=!1:l[1]&&(s===""||s===yn(n))&&(s=!0))}return s}function Ac(e,t,n=!1){const s=t.propsCache,a=s.get(e);if(a)return a;const i=e.props,l={},r=[];let u=!1;if(!ne(e)){const d=p=>{u=!0;const[v,g]=Ac(p,t,!0);Oe(l,v),g&&r.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return Ae(e)&&s.set(e,On),On;if(W(i))for(let d=0;d<i.length;d++){const p=ot(i[d]);dr(p)&&(l[p]=Se)}else if(i)for(const d in i){const p=ot(d);if(dr(p)){const v=i[d],g=l[p]=W(v)||ne(v)?{type:v}:Oe({},v);if(g){const h=mr(Boolean,g.type),w=mr(String,g.type);g[0]=h>-1,g[1]=w<0||h<w,(h>-1||ge(g,"default"))&&r.push(p)}}}const c=[l,r];return Ae(e)&&s.set(e,c),c}function dr(e){return e[0]!=="$"}function pr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function vr(e,t){return pr(e)===pr(t)}function mr(e,t){return W(t)?t.findIndex(n=>vr(n,e)):ne(t)&&vr(t,e)?0:-1}const wc=e=>e[0]==="_"||e==="$stable",cl=e=>W(e)?e.map(vt):[vt(e)],Xv=(e,t,n)=>{if(t._n)return t;const s=_v((...a)=>cl(t(...a)),n);return s._c=!1,s},Sc=(e,t,n)=>{const s=e._ctx;for(const a in e){if(wc(a))continue;const i=e[a];if(ne(i))t[a]=Xv(a,i,s);else if(i!=null){const l=cl(i);t[a]=()=>l}}},Ic=(e,t)=>{const n=cl(t);e.slots.default=()=>n},Yv=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=de(t),da(t,"_",n)):Sc(t,e.slots={})}else e.slots={},t&&Ic(e,t);da(e.slots,xa,1)},Zv=(e,t,n)=>{const{vnode:s,slots:a}=e;let i=!0,l=Se;if(s.shapeFlag&32){const r=t._;r?n&&r===1?i=!1:(Oe(a,t),!n&&r===1&&delete a._):(i=!t.$stable,Sc(t,a)),l=t}else t&&(Ic(e,t),l={default:1});if(i)for(const r in a)!wc(r)&&!(r in l)&&delete a[r]};function ka(e,t,n,s,a=!1){if(W(e)){e.forEach((v,g)=>ka(v,t&&(W(t)?t[g]:t),n,s,a));return}if(Mn(s)&&!a)return;const i=s.shapeFlag&4?Oa(s.component)||s.component.proxy:s.el,l=a?null:i,{i:r,r:u}=e,c=t&&t.r,d=r.refs===Se?r.refs={}:r.refs,p=r.setupState;if(c!=null&&c!==u&&(ce(c)?(d[c]=null,ge(p,c)&&(p[c]=null)):Be(c)&&(c.value=null)),ne(u))Xt(u,r,12,[l,d]);else{const v=ce(u),g=Be(u);if(v||g){const h=()=>{if(e.f){const w=v?ge(p,u)?p[u]:d[u]:u.value;a?W(w)&&Hi(w,i):W(w)?w.includes(i)||w.push(i):v?(d[u]=[i],ge(p,u)&&(p[u]=d[u])):(u.value=[i],e.k&&(d[e.k]=u.value))}else v?(d[u]=l,ge(p,u)&&(p[u]=l)):g&&(u.value=l,e.k&&(d[e.k]=l))};l?(h.id=-1,Ke(h,n)):h()}}}let qt=!1;const Zs=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",ea=e=>e.nodeType===8;function e1(e){const{mt:t,p:n,o:{patchProp:s,createText:a,nextSibling:i,parentNode:l,remove:r,insert:u,createComment:c}}=e,d=(b,y)=>{if(!y.hasChildNodes()){n(null,b,y),ga(),y._vnode=b;return}qt=!1,p(y.firstChild,b,null,null,null),ga(),y._vnode=b,qt&&console.error("Hydration completed but contains mismatches.")},p=(b,y,L,O,z,D=!1)=>{const $=ea(b)&&b.data==="[",P=()=>w(b,y,L,O,z,$),{type:H,ref:U,shapeFlag:ae,patchFlag:J}=y;let Z=b.nodeType;y.el=b,J===-2&&(D=!1,y.dynamicChildren=null);let G=null;switch(H){case qn:Z!==3?y.children===""?(u(y.el=a(""),l(b),b),G=b):G=P():(b.data!==y.children&&(qt=!0,b.data=y.children),G=i(b));break;case tt:Z!==8||$?G=P():G=i(b);break;case vs:if($&&(b=i(b),Z=b.nodeType),Z===1||Z===3){G=b;const Pe=!y.children.length;for(let le=0;le<y.staticCount;le++)Pe&&(y.children+=G.nodeType===1?G.outerHTML:G.data),le===y.staticCount-1&&(y.anchor=G),G=i(G);return $?i(G):G}else P();break;case He:$?G=h(b,y,L,O,z,D):G=P();break;default:if(ae&1)Z!==1||y.type.toLowerCase()!==b.tagName.toLowerCase()?G=P():G=v(b,y,L,O,z,D);else if(ae&6){y.slotScopeIds=z;const Pe=l(b);if(t(y,Pe,null,L,O,Zs(Pe),D),G=$?S(b):i(b),G&&ea(G)&&G.data==="teleport end"&&(G=i(G)),Mn(y)){let le;$?(le=Le(He),le.anchor=G?G.previousSibling:Pe.lastChild):le=b.nodeType===3?Dc(""):Le("div"),le.el=b,y.component.subTree=le}}else ae&64?Z!==8?G=P():G=y.type.hydrate(b,y,L,O,z,D,e,g):ae&128&&(G=y.type.hydrate(b,y,L,O,Zs(l(b)),z,D,e,p))}return U!=null&&ka(U,null,O,y),G},v=(b,y,L,O,z,D)=>{D=D||!!y.dynamicChildren;const{type:$,props:P,patchFlag:H,shapeFlag:U,dirs:ae}=y,J=$==="input"&&ae||$==="option";if(J||H!==-1){if(ae&&St(y,null,L,"created"),P)if(J||!D||H&48)for(const G in P)(J&&G.endsWith("value")||Ls(G)&&!ds(G))&&s(b,G,null,P[G],!1,void 0,L);else P.onClick&&s(b,"onClick",null,P.onClick,!1,void 0,L);let Z;if((Z=P&&P.onVnodeBeforeMount)&&it(Z,L,y),ae&&St(y,null,L,"beforeMount"),((Z=P&&P.onVnodeMounted)||ae)&&uc(()=>{Z&&it(Z,L,y),ae&&St(y,null,L,"mounted")},O),U&16&&!(P&&(P.innerHTML||P.textContent))){let G=g(b.firstChild,y,b,L,O,z,D);for(;G;){qt=!0;const Pe=G;G=G.nextSibling,r(Pe)}}else U&8&&b.textContent!==y.children&&(qt=!0,b.textContent=y.children)}return b.nextSibling},g=(b,y,L,O,z,D,$)=>{$=$||!!y.dynamicChildren;const P=y.children,H=P.length;for(let U=0;U<H;U++){const ae=$?P[U]:P[U]=vt(P[U]);if(b)b=p(b,ae,O,z,D,$);else{if(ae.type===qn&&!ae.children)continue;qt=!0,n(null,ae,L,null,O,z,Zs(L),D)}}return b},h=(b,y,L,O,z,D)=>{const{slotScopeIds:$}=y;$&&(z=z?z.concat($):$);const P=l(b),H=g(i(b),y,P,L,O,z,D);return H&&ea(H)&&H.data==="]"?i(y.anchor=H):(qt=!0,u(y.anchor=c("]"),P,H),H)},w=(b,y,L,O,z,D)=>{if(qt=!0,y.el=null,D){const H=S(b);for(;;){const U=i(b);if(U&&U!==H)r(U);else break}}const $=i(b),P=l(b);return r(b),n(null,y,P,$,L,O,Zs(P),z),$},S=b=>{let y=0;for(;b;)if(b=i(b),b&&ea(b)&&(b.data==="["&&y++,b.data==="]")){if(y===0)return i(b);y--}return b};return[d,p]}const Ke=uc;function t1(e){return n1(e,e1)}function n1(e,t){const n=vi();n.__VUE__=!0;const{insert:s,remove:a,patchProp:i,createElement:l,createText:r,createComment:u,setText:c,setElementText:d,parentNode:p,nextSibling:v,setScopeId:g=ft,insertStaticContent:h}=e,w=(f,k,E,I=null,C=null,x=null,N=!1,M=null,j=!!k.dynamicChildren)=>{if(f===k)return;f&&!dn(f,k)&&(I=T(f),xe(f,C,x,!0),f=null),k.patchFlag===-2&&(j=!1,k.dynamicChildren=null);const{type:R,ref:X,shapeFlag:K}=k;switch(R){case qn:S(f,k,E,I);break;case tt:b(f,k,E,I);break;case vs:f==null&&y(k,E,I,N);break;case He:J(f,k,E,I,C,x,N,M,j);break;default:K&1?z(f,k,E,I,C,x,N,M,j):K&6?Z(f,k,E,I,C,x,N,M,j):(K&64||K&128)&&R.process(f,k,E,I,C,x,N,M,j,V)}X!=null&&C&&ka(X,f&&f.ref,x,k||f,!k)},S=(f,k,E,I)=>{if(f==null)s(k.el=r(k.children),E,I);else{const C=k.el=f.el;k.children!==f.children&&c(C,k.children)}},b=(f,k,E,I)=>{f==null?s(k.el=u(k.children||""),E,I):k.el=f.el},y=(f,k,E,I)=>{[f.el,f.anchor]=h(f.children,k,E,I,f.el,f.anchor)},L=({el:f,anchor:k},E,I)=>{let C;for(;f&&f!==k;)C=v(f),s(f,E,I),f=C;s(k,E,I)},O=({el:f,anchor:k})=>{let E;for(;f&&f!==k;)E=v(f),a(f),f=E;a(k)},z=(f,k,E,I,C,x,N,M,j)=>{N=N||k.type==="svg",f==null?D(k,E,I,C,x,N,M,j):H(f,k,C,x,N,M,j)},D=(f,k,E,I,C,x,N,M)=>{let j,R;const{type:X,props:K,shapeFlag:Y,transition:ee,dirs:re}=f;if(j=f.el=l(f.type,x,K&&K.is,K),Y&8?d(j,f.children):Y&16&&P(f.children,j,null,I,C,x&&X!=="foreignObject",N,M),re&&St(f,null,I,"created"),$(j,f,f.scopeId,N,I),K){for(const _e in K)_e!=="value"&&!ds(_e)&&i(j,_e,null,K[_e],x,f.children,I,C,De);"value"in K&&i(j,"value",null,K.value),(R=K.onVnodeBeforeMount)&&it(R,I,f)}re&&St(f,null,I,"beforeMount");const we=(!C||C&&!C.pendingBranch)&&ee&&!ee.persisted;we&&ee.beforeEnter(j),s(j,k,E),((R=K&&K.onVnodeMounted)||we||re)&&Ke(()=>{R&&it(R,I,f),we&&ee.enter(j),re&&St(f,null,I,"mounted")},C)},$=(f,k,E,I,C)=>{if(E&&g(f,E),I)for(let x=0;x<I.length;x++)g(f,I[x]);if(C){let x=C.subTree;if(k===x){const N=C.vnode;$(f,N,N.scopeId,N.slotScopeIds,C.parent)}}},P=(f,k,E,I,C,x,N,M,j=0)=>{for(let R=j;R<f.length;R++){const X=f[R]=M?Gt(f[R]):vt(f[R]);w(null,X,k,E,I,C,x,N,M)}},H=(f,k,E,I,C,x,N)=>{const M=k.el=f.el;let{patchFlag:j,dynamicChildren:R,dirs:X}=k;j|=f.patchFlag&16;const K=f.props||Se,Y=k.props||Se;let ee;E&&on(E,!1),(ee=Y.onVnodeBeforeUpdate)&&it(ee,E,k,f),X&&St(k,f,E,"beforeUpdate"),E&&on(E,!0);const re=C&&k.type!=="foreignObject";if(R?U(f.dynamicChildren,R,M,E,I,re,x):N||te(f,k,M,null,E,I,re,x,!1),j>0){if(j&16)ae(M,k,K,Y,E,I,C);else if(j&2&&K.class!==Y.class&&i(M,"class",null,Y.class,C),j&4&&i(M,"style",K.style,Y.style,C),j&8){const we=k.dynamicProps;for(let _e=0;_e<we.length;_e++){const Re=we[_e],dt=K[Re],An=Y[Re];(An!==dt||Re==="value")&&i(M,Re,dt,An,C,f.children,E,I,De)}}j&1&&f.children!==k.children&&d(M,k.children)}else!N&&R==null&&ae(M,k,K,Y,E,I,C);((ee=Y.onVnodeUpdated)||X)&&Ke(()=>{ee&&it(ee,E,k,f),X&&St(k,f,E,"updated")},I)},U=(f,k,E,I,C,x,N)=>{for(let M=0;M<k.length;M++){const j=f[M],R=k[M],X=j.el&&(j.type===He||!dn(j,R)||j.shapeFlag&70)?p(j.el):E;w(j,R,X,null,I,C,x,N,!0)}},ae=(f,k,E,I,C,x,N)=>{if(E!==I){if(E!==Se)for(const M in E)!ds(M)&&!(M in I)&&i(f,M,E[M],null,N,k.children,C,x,De);for(const M in I){if(ds(M))continue;const j=I[M],R=E[M];j!==R&&M!=="value"&&i(f,M,R,j,N,k.children,C,x,De)}"value"in I&&i(f,"value",E.value,I.value)}},J=(f,k,E,I,C,x,N,M,j)=>{const R=k.el=f?f.el:r(""),X=k.anchor=f?f.anchor:r("");let{patchFlag:K,dynamicChildren:Y,slotScopeIds:ee}=k;ee&&(M=M?M.concat(ee):ee),f==null?(s(R,E,I),s(X,E,I),P(k.children,E,X,C,x,N,M,j)):K>0&&K&64&&Y&&f.dynamicChildren?(U(f.dynamicChildren,Y,E,C,x,N,M),(k.key!=null||C&&k===C.subTree)&&Pc(f,k,!0)):te(f,k,E,X,C,x,N,M,j)},Z=(f,k,E,I,C,x,N,M,j)=>{k.slotScopeIds=M,f==null?k.shapeFlag&512?C.ctx.activate(k,E,I,N,j):G(k,E,I,C,x,N,j):Pe(f,k,j)},G=(f,k,E,I,C,x,N)=>{const M=f.component=d1(f,I,C);if(Bs(f)&&(M.ctx.renderer=V),p1(M),M.asyncDep){if(C&&C.registerDep(M,le),!f.el){const j=M.subTree=Le(tt);b(null,j,k,E)}return}le(M,f,k,E,C,x,N)},Pe=(f,k,E)=>{const I=k.component=f.component;if(wv(f,k,E))if(I.asyncDep&&!I.asyncResolved){he(I,k,E);return}else I.next=k,bv(I.update),I.update();else k.el=f.el,I.vnode=k},le=(f,k,E,I,C,x,N)=>{const M=()=>{if(f.isMounted){let{next:X,bu:K,u:Y,parent:ee,vnode:re}=f,we=X,_e;on(f,!1),X?(X.el=re.el,he(f,X,N)):X=re,K&&ca(K),(_e=X.props&&X.props.onVnodeBeforeUpdate)&&it(_e,ee,X,re),on(f,!0);const Re=za(f),dt=f.subTree;f.subTree=Re,w(dt,Re,p(dt.el),T(dt),f,C,x),X.el=Re.el,we===null&&Sv(f,Re.el),Y&&Ke(Y,C),(_e=X.props&&X.props.onVnodeUpdated)&&Ke(()=>it(_e,ee,X,re),C)}else{let X;const{el:K,props:Y}=k,{bm:ee,m:re,parent:we}=f,_e=Mn(k);if(on(f,!1),ee&&ca(ee),!_e&&(X=Y&&Y.onVnodeBeforeMount)&&it(X,we,k),on(f,!0),K&&ve){const Re=()=>{f.subTree=za(f),ve(K,f.subTree,f,C,null)};_e?k.type.__asyncLoader().then(()=>!f.isUnmounted&&Re()):Re()}else{const Re=f.subTree=za(f);w(null,Re,E,I,f,C,x),k.el=Re.el}if(re&&Ke(re,C),!_e&&(X=Y&&Y.onVnodeMounted)){const Re=k;Ke(()=>it(X,we,Re),C)}(k.shapeFlag&256||we&&Mn(we.vnode)&&we.vnode.shapeFlag&256)&&f.a&&Ke(f.a,C),f.isMounted=!0,k=E=I=null}},j=f.effect=new Qi(M,()=>Pa(R),f.scope),R=f.update=()=>j.run();R.id=f.uid,on(f,!0),R()},he=(f,k,E)=>{k.component=f;const I=f.vnode.props;f.vnode=k,f.next=null,Qv(f,k.props,I,E),Zv(f,k.children,E),Yn(),sr(),Zn()},te=(f,k,E,I,C,x,N,M,j=!1)=>{const R=f&&f.children,X=f?f.shapeFlag:0,K=k.children,{patchFlag:Y,shapeFlag:ee}=k;if(Y>0){if(Y&128){At(R,K,E,I,C,x,N,M,j);return}else if(Y&256){ut(R,K,E,I,C,x,N,M,j);return}}ee&8?(X&16&&De(R,C,x),K!==R&&d(E,K)):X&16?ee&16?At(R,K,E,I,C,x,N,M,j):De(R,C,x,!0):(X&8&&d(E,""),ee&16&&P(K,E,I,C,x,N,M,j))},ut=(f,k,E,I,C,x,N,M,j)=>{f=f||On,k=k||On;const R=f.length,X=k.length,K=Math.min(R,X);let Y;for(Y=0;Y<K;Y++){const ee=k[Y]=j?Gt(k[Y]):vt(k[Y]);w(f[Y],ee,E,null,C,x,N,M,j)}R>X?De(f,C,x,!0,!1,K):P(k,E,I,C,x,N,M,j,K)},At=(f,k,E,I,C,x,N,M,j)=>{let R=0;const X=k.length;let K=f.length-1,Y=X-1;for(;R<=K&&R<=Y;){const ee=f[R],re=k[R]=j?Gt(k[R]):vt(k[R]);if(dn(ee,re))w(ee,re,E,null,C,x,N,M,j);else break;R++}for(;R<=K&&R<=Y;){const ee=f[K],re=k[Y]=j?Gt(k[Y]):vt(k[Y]);if(dn(ee,re))w(ee,re,E,null,C,x,N,M,j);else break;K--,Y--}if(R>K){if(R<=Y){const ee=Y+1,re=ee<X?k[ee].el:I;for(;R<=Y;)w(null,k[R]=j?Gt(k[R]):vt(k[R]),E,re,C,x,N,M,j),R++}}else if(R>Y)for(;R<=K;)xe(f[R],C,x,!0),R++;else{const ee=R,re=R,we=new Map;for(R=re;R<=Y;R++){const Xe=k[R]=j?Gt(k[R]):vt(k[R]);Xe.key!=null&&we.set(Xe.key,R)}let _e,Re=0;const dt=Y-re+1;let An=!1,Hl=0;const is=new Array(dt);for(R=0;R<dt;R++)is[R]=0;for(R=ee;R<=K;R++){const Xe=f[R];if(Re>=dt){xe(Xe,C,x,!0);continue}let wt;if(Xe.key!=null)wt=we.get(Xe.key);else for(_e=re;_e<=Y;_e++)if(is[_e-re]===0&&dn(Xe,k[_e])){wt=_e;break}wt===void 0?xe(Xe,C,x,!0):(is[wt-re]=R+1,wt>=Hl?Hl=wt:An=!0,w(Xe,k[wt],E,null,C,x,N,M,j),Re++)}const Ul=An?s1(is):On;for(_e=Ul.length-1,R=dt-1;R>=0;R--){const Xe=re+R,wt=k[Xe],Jl=Xe+1<X?k[Xe+1].el:I;is[R]===0?w(null,wt,E,Jl,C,x,N,M,j):An&&(_e<0||R!==Ul[_e]?Ge(wt,E,Jl,2):_e--)}}},Ge=(f,k,E,I,C=null)=>{const{el:x,type:N,transition:M,children:j,shapeFlag:R}=f;if(R&6){Ge(f.component.subTree,k,E,I);return}if(R&128){f.suspense.move(k,E,I);return}if(R&64){N.move(f,k,E,V);return}if(N===He){s(x,k,E);for(let K=0;K<j.length;K++)Ge(j[K],k,E,I);s(f.anchor,k,E);return}if(N===vs){L(f,k,E);return}if(I!==2&&R&1&&M)if(I===0)M.beforeEnter(x),s(x,k,E),Ke(()=>M.enter(x),C);else{const{leave:K,delayLeave:Y,afterLeave:ee}=M,re=()=>s(x,k,E),we=()=>{K(x,()=>{re(),ee&&ee()})};Y?Y(x,re,we):we()}else s(x,k,E)},xe=(f,k,E,I=!1,C=!1)=>{const{type:x,props:N,ref:M,children:j,dynamicChildren:R,shapeFlag:X,patchFlag:K,dirs:Y}=f;if(M!=null&&ka(M,null,E,f,!0),X&256){k.ctx.deactivate(f);return}const ee=X&1&&Y,re=!Mn(f);let we;if(re&&(we=N&&N.onVnodeBeforeUnmount)&&it(we,k,f),X&6)Ft(f.component,E,I);else{if(X&128){f.suspense.unmount(E,I);return}ee&&St(f,null,k,"beforeUnmount"),X&64?f.type.remove(f,k,E,C,V,I):R&&(x!==He||K>0&&K&64)?De(R,k,E,!1,!0):(x===He&&K&384||!C&&X&16)&&De(j,k,E),I&&Pt(f)}(re&&(we=N&&N.onVnodeUnmounted)||ee)&&Ke(()=>{we&&it(we,k,f),ee&&St(f,null,k,"unmounted")},E)},Pt=f=>{const{type:k,el:E,anchor:I,transition:C}=f;if(k===He){st(E,I);return}if(k===vs){O(f);return}const x=()=>{a(E),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:N,delayLeave:M}=C,j=()=>N(E,x);M?M(f.el,x,j):j()}else x()},st=(f,k)=>{let E;for(;f!==k;)E=v(f),a(f),f=E;a(k)},Ft=(f,k,E)=>{const{bum:I,scope:C,update:x,subTree:N,um:M}=f;I&&ca(I),C.stop(),x&&(x.active=!1,xe(N,f,k,E)),M&&Ke(M,k),Ke(()=>{f.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},De=(f,k,E,I=!1,C=!1,x=0)=>{for(let N=x;N<f.length;N++)xe(f[N],k,E,I,C)},T=f=>f.shapeFlag&6?T(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),q=(f,k,E)=>{f==null?k._vnode&&xe(k._vnode,null,null,!0):w(k._vnode||null,f,k,null,null,null,E),sr(),ga(),k._vnode=f},V={p:w,um:xe,m:Ge,r:Pt,mt:G,mc:P,pc:te,pbc:U,n:T,o:e};let Q,ve;return t&&([Q,ve]=t(V)),{render:q,hydrate:Q,createApp:Kv(q,Q)}}function on({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Pc(e,t,n=!1){const s=e.children,a=t.children;if(W(s)&&W(a))for(let i=0;i<s.length;i++){const l=s[i];let r=a[i];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=a[i]=Gt(a[i]),r.el=l.el),n||Pc(l,r)),r.type===qn&&(r.el=l.el)}}function s1(e){const t=e.slice(),n=[0];let s,a,i,l,r;const u=e.length;for(s=0;s<u;s++){const c=e[s];if(c!==0){if(a=n[n.length-1],e[a]<c){t[s]=a,n.push(s);continue}for(i=0,l=n.length-1;i<l;)r=i+l>>1,e[n[r]]<c?i=r+1:l=r;c<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}const a1=e=>e.__isTeleport,He=Symbol.for("v-fgt"),qn=Symbol.for("v-txt"),tt=Symbol.for("v-cmt"),vs=Symbol.for("v-stc"),ms=[];let gt=null;function Tc(e=!1){ms.push(gt=e?null:[])}function i1(){ms.pop(),gt=ms[ms.length-1]||null}let Is=1;function gr(e){Is+=e}function Cc(e){return e.dynamicChildren=Is>0?gt||On:null,i1(),Is>0&&gt&&gt.push(e),e}function L4(e,t,n,s,a,i){return Cc(Oc(e,t,n,s,a,i,!0))}function Lc(e,t,n,s,a){return Cc(Le(e,t,n,s,a,!0))}function ya(e){return e?e.__v_isVNode===!0:!1}function dn(e,t){return e.type===t.type&&e.key===t.key}const xa="__vInternal",xc=({key:e})=>e??null,ua=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ce(e)||Be(e)||ne(e)?{i:je,r:e,k:t,f:!!n}:e:null);function Oc(e,t=null,n=null,s=0,a=null,i=e===He?0:1,l=!1,r=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&xc(t),ref:t&&ua(t),scopeId:Ca,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:je};return r?(ul(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=ce(n)?8:16),Is>0&&!l&&gt&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&gt.push(u),u}const Le=l1;function l1(e,t=null,n=null,s=0,a=null,i=!1){if((!e||e===jv)&&(e=tt),ya(e)){const r=Zt(e,t,!0);return n&&ul(r,n),Is>0&&!i&&gt&&(r.shapeFlag&6?gt[gt.indexOf(e)]=r:gt.push(r)),r.patchFlag|=-2,r}if(b1(e)&&(e=e.__vccOpts),t){t=r1(t);let{class:r,style:u}=t;r&&!ce(r)&&(t.class=Gi(r)),Ae(u)&&(nc(u)&&!W(u)&&(u=Oe({},u)),t.style=Ji(u))}const l=ce(e)?1:Iv(e)?128:a1(e)?64:Ae(e)?4:ne(e)?2:0;return Oc(e,t,n,s,a,l,i,!0)}function r1(e){return e?nc(e)||xa in e?Oe({},e):e:null}function Zt(e,t,n=!1){const{props:s,ref:a,patchFlag:i,children:l}=e,r=t?o1(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:r,key:r&&xc(r),ref:t&&t.ref?n&&a?W(a)?a.concat(ua(t)):[a,ua(t)]:ua(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==He?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zt(e.ssContent),ssFallback:e.ssFallback&&Zt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Dc(e=" ",t=0){return Le(qn,null,e,t)}function x4(e,t){const n=Le(vs,null,e);return n.staticCount=t,n}function O4(e="",t=!1){return t?(Tc(),Lc(tt,null,e)):Le(tt,null,e)}function vt(e){return e==null||typeof e=="boolean"?Le(tt):W(e)?Le(He,null,e.slice()):typeof e=="object"?Gt(e):Le(qn,null,String(e))}function Gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Zt(e)}function ul(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(s&65){const a=t.default;a&&(a._c&&(a._d=!1),ul(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(xa in t)?t._ctx=je:a===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ne(t)?(t={default:t,_ctx:je},n=32):(t=String(t),s&64?(n=16,t=[Dc(t)]):n=8);e.children=t,e.shapeFlag|=n}function o1(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const a in s)if(a==="class")t.class!==s.class&&(t.class=Gi([t.class,s.class]));else if(a==="style")t.style=Ji([t.style,s.style]);else if(Ls(a)){const i=t[a],l=s[a];l&&i!==l&&!(W(i)&&i.includes(l))&&(t[a]=i?[].concat(i,l):l)}else a!==""&&(t[a]=s[a])}return t}function it(e,t,n,s=null){rt(e,t,7,[n,s])}const c1=_c();let u1=0;function d1(e,t,n){const s=e.type,a=(t?t.appContext:e.appContext)||c1,i={uid:u1++,vnode:e,type:s,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ac(s,a),emitsOptions:cc(s,a),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=yv.bind(null,i),e.ce&&e.ce(i),i}let Me=null;const an=()=>Me||je;let dl,wn,fr="__VUE_INSTANCE_SETTERS__";(wn=vi()[fr])||(wn=vi()[fr]=[]),wn.push(e=>Me=e),dl=e=>{wn.length>1?wn.forEach(t=>t(e)):wn[0](e)};const zn=e=>{dl(e),e.scope.on()},fn=()=>{Me&&Me.scope.off(),dl(null)};function Rc(e){return e.vnode.shapeFlag&4}let Hn=!1;function p1(e,t=!1){Hn=t;const{props:n,children:s}=e.vnode,a=Rc(e);Wv(e,n,a,t),Yv(e,s);const i=a?v1(e,t):void 0;return Hn=!1,i}function v1(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=sc(new Proxy(e.ctx,Nv));const{setup:s}=n;if(s){const a=e.setupContext=s.length>1?g1(e):null;zn(e),Yn();const i=Xt(s,e,0,[e.props,a]);if(Zn(),fn(),jo(i)){if(i.then(fn,fn),t)return i.then(l=>{br(e,l,t)}).catch(l=>{Rs(l,e,0)});e.asyncDep=i}else br(e,i,t)}else Bc(e,t)}function br(e,t,n){ne(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ae(t)&&(e.setupState=ic(t)),Bc(e,n)}let hr;function Bc(e,t,n){const s=e.type;if(!e.render){if(!t&&hr&&!s.render){const a=s.template||ol(e).template;if(a){const{isCustomElement:i,compilerOptions:l}=e.appContext.config,{delimiters:r,compilerOptions:u}=s,c=Oe(Oe({isCustomElement:i,delimiters:r},l),u);s.render=hr(a,c)}}e.render=s.render||ft}zn(e),Yn(),qv(e),Zn(),fn()}function m1(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Qe(e,"get","$attrs"),t[n]}}))}function g1(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return m1(e)},slots:e.slots,emit:e.emit,expose:t}}function Oa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ic(sc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ps)return ps[n](e)},has(t,n){return n in t||n in ps}}))}function f1(e,t=!0){return ne(e)?e.displayName||e.name:e.name||t&&e.__name}function b1(e){return ne(e)&&"__vccOpts"in e}const A=(e,t)=>mv(e,t,Hn);function o(e,t,n){const s=arguments.length;return s===2?Ae(t)&&!W(t)?ya(t)?Le(e,null,[t]):Le(e,t):Le(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ya(n)&&(n=[n]),Le(e,t,n))}const h1=Symbol.for("v-scx"),k1=()=>fe(h1),y1="3.3.4",_1="http://www.w3.org/2000/svg",pn=typeof document<"u"?document:null,kr=pn&&pn.createElement("template"),E1={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const a=t?pn.createElementNS(_1,e):pn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&a.setAttribute("multiple",s.multiple),a},createText:e=>pn.createTextNode(e),createComment:e=>pn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,a,i){const l=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{kr.innerHTML=s?`<svg>${e}</svg>`:e;const r=kr.content;if(s){const u=r.firstChild;for(;u.firstChild;)r.appendChild(u.firstChild);r.removeChild(u)}t.insertBefore(r,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function A1(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function w1(e,t,n){const s=e.style,a=ce(n);if(n&&!a){if(t&&!ce(t))for(const i in t)n[i]==null&&Ei(s,i,"");for(const i in n)Ei(s,i,n[i])}else{const i=s.display;a?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=i)}}const yr=/\s*!important$/;function Ei(e,t,n){if(W(n))n.forEach(s=>Ei(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=S1(e,t);yr.test(n)?e.setProperty(yn(s),n.replace(yr,""),"important"):e[s]=n}}const _r=["Webkit","Moz","ms"],Ga={};function S1(e,t){const n=Ga[t];if(n)return n;let s=ot(t);if(s!=="filter"&&s in e)return Ga[t]=s;s=Os(s);for(let a=0;a<_r.length;a++){const i=_r[a]+s;if(i in e)return Ga[t]=i}return t}const Er="http://www.w3.org/1999/xlink";function I1(e,t,n,s,a){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Er,t.slice(6,t.length)):e.setAttributeNS(Er,t,n);else{const i=Tp(t);n==null||i&&!qo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function P1(e,t,n,s,a,i,l){if(t==="innerHTML"||t==="textContent"){s&&l(s,a,i),e[t]=n??"";return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){e._value=n;const c=r==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let u=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=qo(n):n==null&&c==="string"?(n="",u=!0):c==="number"&&(n=0,u=!0)}try{e[t]=n}catch{}u&&e.removeAttribute(t)}function Dt(e,t,n,s){e.addEventListener(t,n,s)}function T1(e,t,n,s){e.removeEventListener(t,n,s)}function C1(e,t,n,s,a=null){const i=e._vei||(e._vei={}),l=i[t];if(s&&l)l.value=s;else{const[r,u]=L1(t);if(s){const c=i[t]=D1(s,a);Dt(e,r,c,u)}else l&&(T1(e,r,l,u),i[t]=void 0)}}const Ar=/(?:Once|Passive|Capture)$/;function L1(e){let t;if(Ar.test(e)){t={};let s;for(;s=e.match(Ar);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):yn(e.slice(2)),t]}let Ka=0;const x1=Promise.resolve(),O1=()=>Ka||(x1.then(()=>Ka=0),Ka=Date.now());function D1(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;rt(R1(s,n.value),t,5,[s])};return n.value=e,n.attached=O1(),n}function R1(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>a=>!a._stopped&&s&&s(a))}else return t}const wr=/^on[a-z]/,B1=(e,t,n,s,a=!1,i,l,r,u)=>{t==="class"?A1(e,s,a):t==="style"?w1(e,n,s):Ls(t)?zi(t)||C1(e,t,n,s,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):M1(e,t,s,a))?P1(e,t,s,i,l,r,u):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),I1(e,t,s,a))};function M1(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&wr.test(t)&&ne(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||wr.test(t)&&ce(n)?!1:t in e}const zt="transition",ls="animation",en=(e,{slots:t})=>o(Cv,$c(e),t);en.displayName="Transition";const Mc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$1=en.props=Oe({},mc,Mc),cn=(e,t=[])=>{W(e)?e.forEach(n=>n(...t)):e&&e(...t)},Sr=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function $c(e){const t={};for(const J in e)J in Mc||(t[J]=e[J]);if(e.css===!1)return t;const{name:n="v",type:s,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:u=i,appearActiveClass:c=l,appearToClass:d=r,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,h=V1(a),w=h&&h[0],S=h&&h[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:L,onLeave:O,onLeaveCancelled:z,onBeforeAppear:D=b,onAppear:$=y,onAppearCancelled:P=L}=t,H=(J,Z,G)=>{Jt(J,Z?d:r),Jt(J,Z?c:l),G&&G()},U=(J,Z)=>{J._isLeaving=!1,Jt(J,p),Jt(J,g),Jt(J,v),Z&&Z()},ae=J=>(Z,G)=>{const Pe=J?$:y,le=()=>H(Z,J,G);cn(Pe,[Z,le]),Ir(()=>{Jt(Z,J?u:i),Ct(Z,J?d:r),Sr(Pe)||Pr(Z,s,w,le)})};return Oe(t,{onBeforeEnter(J){cn(b,[J]),Ct(J,i),Ct(J,l)},onBeforeAppear(J){cn(D,[J]),Ct(J,u),Ct(J,c)},onEnter:ae(!1),onAppear:ae(!0),onLeave(J,Z){J._isLeaving=!0;const G=()=>U(J,Z);Ct(J,p),jc(),Ct(J,v),Ir(()=>{J._isLeaving&&(Jt(J,p),Ct(J,g),Sr(O)||Pr(J,s,S,G))}),cn(O,[J,G])},onEnterCancelled(J){H(J,!1),cn(L,[J])},onAppearCancelled(J){H(J,!0),cn(P,[J])},onLeaveCancelled(J){U(J),cn(z,[J])}})}function V1(e){if(e==null)return null;if(Ae(e))return[Wa(e.enter),Wa(e.leave)];{const t=Wa(e);return[t,t]}}function Wa(e){return Ep(e)}function Ct(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Jt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Ir(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let j1=0;function Pr(e,t,n,s){const a=e._endId=++j1,i=()=>{a===e._endId&&s()};if(n)return setTimeout(i,n);const{type:l,timeout:r,propCount:u}=Vc(e,t);if(!l)return s();const c=l+"end";let d=0;const p=()=>{e.removeEventListener(c,v),i()},v=g=>{g.target===e&&++d>=u&&p()};setTimeout(()=>{d<u&&p()},r+1),e.addEventListener(c,v)}function Vc(e,t){const n=window.getComputedStyle(e),s=h=>(n[h]||"").split(", "),a=s(`${zt}Delay`),i=s(`${zt}Duration`),l=Tr(a,i),r=s(`${ls}Delay`),u=s(`${ls}Duration`),c=Tr(r,u);let d=null,p=0,v=0;t===zt?l>0&&(d=zt,p=l,v=i.length):t===ls?c>0&&(d=ls,p=c,v=u.length):(p=Math.max(l,c),d=p>0?l>c?zt:ls:null,v=d?d===zt?i.length:u.length:0);const g=d===zt&&/\b(transform|all)(,|$)/.test(s(`${zt}Property`).toString());return{type:d,timeout:p,propCount:v,hasTransform:g}}function Tr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Cr(n)+Cr(e[s])))}function Cr(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function jc(){return document.body.offsetHeight}const Fc=new WeakMap,Nc=new WeakMap,qc={name:"TransitionGroup",props:Oe({},$1,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=an(),s=vc();let a,i;return bc(()=>{if(!a.length)return;const l=e.moveClass||`${e.name||"v"}-move`;if(!U1(a[0].el,n.vnode.el,l))return;a.forEach(q1),a.forEach(z1);const r=a.filter(H1);jc(),r.forEach(u=>{const c=u.el,d=c.style;Ct(c,l),d.transform=d.webkitTransform=d.transitionDuration="";const p=c._moveCb=v=>{v&&v.target!==c||(!v||/transform$/.test(v.propertyName))&&(c.removeEventListener("transitionend",p),c._moveCb=null,Jt(c,l))};c.addEventListener("transitionend",p)})}),()=>{const l=de(e),r=$c(l);let u=l.tag||He;a=i,i=t.default?ll(t.default()):[];for(let c=0;c<i.length;c++){const d=i[c];d.key!=null&&Ss(d,ws(d,r,s,n))}if(a)for(let c=0;c<a.length;c++){const d=a[c];Ss(d,ws(d,r,s,n)),Fc.set(d,d.el.getBoundingClientRect())}return Le(u,null,i)}}},F1=e=>delete e.mode;qc.props;const N1=qc;function q1(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function z1(e){Nc.set(e,e.el.getBoundingClientRect())}function H1(e){const t=Fc.get(e),n=Nc.get(e),s=t.left-n.left,a=t.top-n.top;if(s||a){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${a}px)`,i.transitionDuration="0s",e}}function U1(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(l=>{l.split(/\s+/).forEach(r=>r&&s.classList.remove(r))}),n.split(/\s+/).forEach(l=>l&&s.classList.add(l)),s.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(s);const{hasTransform:i}=Vc(s);return a.removeChild(s),i}const tn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return W(t)?n=>ca(t,n):t};function J1(e){e.target.composing=!0}function Lr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const xr={created(e,{modifiers:{lazy:t,trim:n,number:s}},a){e._assign=tn(a);const i=s||a.props&&a.props.type==="number";Dt(e,t?"change":"input",l=>{if(l.target.composing)return;let r=e.value;n&&(r=r.trim()),i&&(r=pa(r)),e._assign(r)}),n&&Dt(e,"change",()=>{e.value=e.value.trim()}),t||(Dt(e,"compositionstart",J1),Dt(e,"compositionend",Lr),Dt(e,"change",Lr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:a}},i){if(e._assign=tn(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(a||e.type==="number")&&pa(e.value)===t))return;const l=t??"";e.value!==l&&(e.value=l)}},G1={deep:!0,created(e,t,n){e._assign=tn(n),Dt(e,"change",()=>{const s=e._modelValue,a=Un(e),i=e.checked,l=e._assign;if(W(s)){const r=Ki(s,a),u=r!==-1;if(i&&!u)l(s.concat(a));else if(!i&&u){const c=[...s];c.splice(r,1),l(c)}}else if(Xn(s)){const r=new Set(s);i?r.add(a):r.delete(a),l(r)}else l(zc(e,i))})},mounted:Or,beforeUpdate(e,t,n){e._assign=tn(n),Or(e,t,n)}};function Or(e,{value:t,oldValue:n},s){e._modelValue=t,W(t)?e.checked=Ki(t,s.props.value)>-1:Xn(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=bn(t,zc(e,!0)))}const K1={created(e,{value:t},n){e.checked=bn(t,n.props.value),e._assign=tn(n),Dt(e,"change",()=>{e._assign(Un(e))})},beforeUpdate(e,{value:t,oldValue:n},s){e._assign=tn(s),t!==n&&(e.checked=bn(t,s.props.value))}},W1={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const a=Xn(t);Dt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,l=>l.selected).map(l=>n?pa(Un(l)):Un(l));e._assign(e.multiple?a?new Set(i):i:i[0])}),e._assign=tn(s)},mounted(e,{value:t}){Dr(e,t)},beforeUpdate(e,t,n){e._assign=tn(n)},updated(e,{value:t}){Dr(e,t)}};function Dr(e,t){const n=e.multiple;if(!(n&&!W(t)&&!Xn(t))){for(let s=0,a=e.options.length;s<a;s++){const i=e.options[s],l=Un(i);if(n)W(t)?i.selected=Ki(t,l)>-1:i.selected=t.has(l);else if(bn(Un(i),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Un(e){return"_value"in e?e._value:e.value}function zc(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const D4={created(e,t,n){ta(e,t,n,null,"created")},mounted(e,t,n){ta(e,t,n,null,"mounted")},beforeUpdate(e,t,n,s){ta(e,t,n,s,"beforeUpdate")},updated(e,t,n,s){ta(e,t,n,s,"updated")}};function Q1(e,t){switch(e){case"SELECT":return W1;case"TEXTAREA":return xr;default:switch(t){case"checkbox":return G1;case"radio":return K1;default:return xr}}}function ta(e,t,n,s,a){const l=Q1(e.tagName,n.props&&n.props.type)[a];l&&l(e,t,n,s)}const X1=["ctrl","shift","alt","meta"],Y1={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>X1.some(n=>e[`${n}Key`]&&!t.includes(n))},R4=(e,t)=>(n,...s)=>{for(let a=0;a<t.length;a++){const i=Y1[t[a]];if(i&&i(n,t))return}return e(n,...s)},Z1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},B4=(e,t)=>n=>{if(!("key"in n))return;const s=yn(n.key);if(t.some(a=>a===s||Z1[a]===s))return e(n)},M4={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):rs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),rs(e,!0),s.enter(e)):s.leave(e,()=>{rs(e,!1)}):rs(e,t))},beforeUnmount(e,{value:t}){rs(e,t)}};function rs(e,t){e.style.display=t?e._vod:"none"}const em=Oe({patchProp:B1},E1);let Qa,Rr=!1;function tm(){return Qa=Rr?Qa:t1(em),Rr=!0,Qa}const nm=(...e)=>{const t=tm().createApp(...e),{mount:n}=t;return t.mount=s=>{const a=sm(s);if(a)return n(a,!0,a instanceof SVGElement)},t};function sm(e){return ce(e)?document.querySelector(e):e}const am={"v-8daa1a0e":()=>m(()=>import("./index.html-5e71fcbb.js"),[]).then(({data:e})=>e),"v-184f4da6":()=>m(()=>import("./intro.html-e1d4907a.js"),[]).then(({data:e})=>e),"v-2e3eac9e":()=>m(()=>import("./slides.html-27975832.js"),[]).then(({data:e})=>e),"v-2db914b0":()=>m(()=>import("./1、算法指标及排序算法.html-e5976ef0.js"),[]).then(({data:e})=>e),"v-434b990c":()=>m(()=>import("./2、基础数据结构.html-f58af6d8.js"),[]).then(({data:e})=>e),"v-013fe386":()=>m(()=>import("./3、基础算法.html-78e23787.js"),[]).then(({data:e})=>e),"v-f4face08":()=>m(()=>import("./index.html-5f7491fc.js"),[]).then(({data:e})=>e),"v-2c0b6453":()=>m(()=>import("./左神算法基础提升课学习笔记.html-6116062f.js"),[]).then(({data:e})=>e),"v-7f701d4a":()=>m(()=>import("./左神算法基础课学习笔记.html-8e34b3e8.js"),[]).then(({data:e})=>e),"v-e8550a0c":()=>m(()=>import("./算法总结.html-5da991f6.js"),[]).then(({data:e})=>e),"v-7bd30a60":()=>m(()=>import("./index.html-fa29b8c2.js"),[]).then(({data:e})=>e),"v-7dd7f45d":()=>m(()=>import("./index.html-fde9fbe5.js"),[]).then(({data:e})=>e),"v-2ccdf990":()=>m(()=>import("./index.html-2fb577b9.js"),[]).then(({data:e})=>e),"v-599fbcfb":()=>m(()=>import("./index.html-9cf5cc36.js"),[]).then(({data:e})=>e),"v-2365654c":()=>m(()=>import("./index.html-aec93843.js"),[]).then(({data:e})=>e),"v-2669abe4":()=>m(()=>import("./技巧.html-dce07a89.js"),[]).then(({data:e})=>e),"v-0041281f":()=>m(()=>import("./设计模式.html-b2845145.js"),[]).then(({data:e})=>e),"v-8577ef52":()=>m(()=>import("./elasticsearch.html-b906f663.js"),[]).then(({data:e})=>e),"v-4b591cc2":()=>m(()=>import("./基础总结.html-ade3667f.js"),[]).then(({data:e})=>e),"v-d1989f48":()=>m(()=>import("./基础总结.html-039a09e9.js"),[]).then(({data:e})=>e),"v-d1d1d3cc":()=>m(()=>import("./rabbitmq.html-0b585f15.js"),[]).then(({data:e})=>e),"v-f63cc7c8":()=>m(()=>import("./基础总结.html-7c85593f.js"),[]).then(({data:e})=>e),"v-632f1be4":()=>m(()=>import("./基础总结.html-3fd901b4.js"),[]).then(({data:e})=>e),"v-6fb57558":()=>m(()=>import("./源码分析.html-8b05df2d.js"),[]).then(({data:e})=>e),"v-2706221b":()=>m(()=>import("./springcloud项目尚医通总结.html-8b9d508c.js"),[]).then(({data:e})=>e),"v-7a9a6e12":()=>m(()=>import("./基础总结.html-d93815d8.js"),[]).then(({data:e})=>e),"v-97a18dc8":()=>m(()=>import("./基础总结.html-9b8551ae.js"),[]).then(({data:e})=>e),"v-7a1ee8c4":()=>m(()=>import("./swagger.html-d2e746d1.js"),[]).then(({data:e})=>e),"v-2ac42c0b":()=>m(()=>import("./activiti6基础笔记.html-30bfedf4.js"),[]).then(({data:e})=>e),"v-41f030d6":()=>m(()=>import("./第一行代码笔记.html-846f5efc.js"),[]).then(({data:e})=>e),"v-6d241b5d":()=>m(()=>import("./Bash基础笔记.html-524334d7.js"),[]).then(({data:e})=>e),"v-d3bc8416":()=>m(()=>import("./常用命令.html-7b8a05eb.js"),[]).then(({data:e})=>e),"v-2d51a49f":()=>m(()=>import("./docker命令.html-ed94a822.js"),[]).then(({data:e})=>e),"v-5b2d3140":()=>m(()=>import("./常用镜像命令.html-d00acd41.js"),[]).then(({data:e})=>e),"v-476eae3c":()=>m(()=>import("./maven深入学习笔记.html-0ef533b6.js"),[]).then(({data:e})=>e),"v-106ab87c":()=>m(()=>import("./yaml语法.html-cf89a792.js"),[]).then(({data:e})=>e),"v-5196b250":()=>m(()=>import("./java整合mysql.html-9332bfac.js"),[]).then(({data:e})=>e),"v-2179c7dc":()=>m(()=>import("./基础.html-f320bf39.js"),[]).then(({data:e})=>e),"v-468f0997":()=>m(()=>import("./Oracle基础总结.html-53459dd7.js"),[]).then(({data:e})=>e),"v-4f1a648a":()=>m(()=>import("./redis.html-e27d7c04.js"),[]).then(({data:e})=>e),"v-4d18a865":()=>m(()=>import("./index.html-d1e6dc6c.js"),[]).then(({data:e})=>e),"v-e25b971c":()=>m(()=>import("./index.html-5cf12674.js"),[]).then(({data:e})=>e),"v-9087045a":()=>m(()=>import("./StarterSwagger3.html-cb98ff89.js"),[]).then(({data:e})=>e),"v-0357f249":()=>m(()=>import("./CSS世界学习笔记.html-0ad15f18.js"),[]).then(({data:e})=>e),"v-c3c11a36":()=>m(()=>import("./JavaScript笔记.html-437d4385.js"),[]).then(({data:e})=>e),"v-4f00b37c":()=>m(()=>import("./JavaScript高级程序设计学习笔记.html-cf493342.js"),[]).then(({data:e})=>e),"v-eff6200a":()=>m(()=>import("./jquery_ajax笔记.html-63908a03.js"),[]).then(({data:e})=>e),"v-31bde1ba":()=>m(()=>import("./疯狂HTML5_CSS3_JavaScript讲义笔记.html-0e70f115.js"),[]).then(({data:e})=>e),"v-f33d5ffc":()=>m(()=>import("./疯狂前端开发讲义笔记.html-4ff4e24b.js"),[]).then(({data:e})=>e),"v-6e13ebe8":()=>m(()=>import("./JSP_Servlet笔记.html-aeffbb71.js"),[]).then(({data:e})=>e),"v-0f87f09a":()=>m(()=>import("./JUC.html-2d2483e7.js"),[]).then(({data:e})=>e),"v-3f21900f":()=>m(()=>import("./基础.html-826616bc.js"),[]).then(({data:e})=>e),"v-36970167":()=>m(()=>import("./学习笔记《java开发手册》.html-a2559375.js"),[]).then(({data:e})=>e),"v-86a4c8da":()=>m(()=>import("./学习笔记《疯狂Java讲义》.html-be4b6f3a.js"),[]).then(({data:e})=>e),"v-88b1b032":()=>m(()=>import("./学习笔记《码出高效：Java开发手册》.html-01660225.js"),[]).then(({data:e})=>e),"v-ab8fb5bc":()=>m(()=>import("./抽象类和接口.html-547853e0.js"),[]).then(({data:e})=>e),"v-7ad12457":()=>m(()=>import("./集合.html-b464b3e7.js"),[]).then(({data:e})=>e),"v-08abb1af":()=>m(()=>import("./note.html-157395cc.js"),[]).then(({data:e})=>e),"v-02544884":()=>m(()=>import("./mongodb.html-f1de7445.js"),[]).then(({data:e})=>e),"v-b7c7acc0":()=>m(()=>import("./Vue2.5开发去哪儿网App从零基础入门到实战项目学习笔记.html-230173ed.js"),[]).then(({data:e})=>e),"v-4d675cd4":()=>m(()=>import("./基础总结.html-9f47d6af.js"),[]).then(({data:e})=>e),"v-3706649a":()=>m(()=>import("./404.html-bb007e7c.js"),[]).then(({data:e})=>e),"v-42ef21ea":()=>m(()=>import("./index.html-15c8a236.js"),[]).then(({data:e})=>e),"v-01af5e14":()=>m(()=>import("./index.html-708df870.js"),[]).then(({data:e})=>e),"v-145ac574":()=>m(()=>import("./index.html-5a33631f.js"),[]).then(({data:e})=>e),"v-3607025c":()=>m(()=>import("./index.html-eea3f7d2.js"),[]).then(({data:e})=>e),"v-ec27c24a":()=>m(()=>import("./index.html-09275aea.js"),[]).then(({data:e})=>e),"v-4910ef8c":()=>m(()=>import("./index.html-01f34afc.js"),[]).then(({data:e})=>e),"v-747d1eb2":()=>m(()=>import("./index.html-7e2ddb84.js"),[]).then(({data:e})=>e),"v-0265bfe1":()=>m(()=>import("./index.html-852ebda6.js"),[]).then(({data:e})=>e),"v-1883faf2":()=>m(()=>import("./index.html-4399dab8.js"),[]).then(({data:e})=>e),"v-1b67f680":()=>m(()=>import("./index.html-385f02d5.js"),[]).then(({data:e})=>e),"v-58bf2fb7":()=>m(()=>import("./index.html-49d4cacd.js"),[]).then(({data:e})=>e),"v-3264841c":()=>m(()=>import("./index.html-99f15ddf.js"),[]).then(({data:e})=>e),"v-4d2542b5":()=>m(()=>import("./index.html-a1c426fb.js"),[]).then(({data:e})=>e),"v-2289dd5a":()=>m(()=>import("./index.html-292e95bc.js"),[]).then(({data:e})=>e),"v-d4424206":()=>m(()=>import("./index.html-51b0c86c.js"),[]).then(({data:e})=>e),"v-d973dcc4":()=>m(()=>import("./index.html-88029ef9.js"),[]).then(({data:e})=>e),"v-5ad92f12":()=>m(()=>import("./index.html-e120fba2.js"),[]).then(({data:e})=>e),"v-2f7a6abe":()=>m(()=>import("./index.html-4bd5aca0.js"),[]).then(({data:e})=>e),"v-d6ebcfaa":()=>m(()=>import("./index.html-47f3672e.js"),[]).then(({data:e})=>e),"v-ce71e5f6":()=>m(()=>import("./index.html-06cec637.js"),[]).then(({data:e})=>e),"v-461dbf8e":()=>m(()=>import("./index.html-cfc9140b.js"),[]).then(({data:e})=>e),"v-bfa2f968":()=>m(()=>import("./index.html-c822a11e.js"),[]).then(({data:e})=>e),"v-39ad1b74":()=>m(()=>import("./index.html-efa0532d.js"),[]).then(({data:e})=>e),"v-b82b2f16":()=>m(()=>import("./index.html-fb34a7c9.js"),[]).then(({data:e})=>e),"v-5329c232":()=>m(()=>import("./index.html-ee7caebe.js"),[]).then(({data:e})=>e),"v-d3f8a510":()=>m(()=>import("./index.html-bd84c462.js"),[]).then(({data:e})=>e),"v-846fe2d2":()=>m(()=>import("./index.html-53b53031.js"),[]).then(({data:e})=>e),"v-cc220acc":()=>m(()=>import("./index.html-599e5690.js"),[]).then(({data:e})=>e),"v-464b554e":()=>m(()=>import("./index.html-8e4bafcb.js"),[]).then(({data:e})=>e),"v-6b69a98c":()=>m(()=>import("./index.html-288bbf72.js"),[]).then(({data:e})=>e),"v-5bc93818":()=>m(()=>import("./index.html-0e5553da.js"),[]).then(({data:e})=>e),"v-744d024e":()=>m(()=>import("./index.html-ee08f8a4.js"),[]).then(({data:e})=>e),"v-e52c881c":()=>m(()=>import("./index.html-0b977aec.js"),[]).then(({data:e})=>e),"v-154dc4c4":()=>m(()=>import("./index.html-2f13bbcc.js"),[]).then(({data:e})=>e),"v-01560935":()=>m(()=>import("./index.html-e9d110f9.js"),[]).then(({data:e})=>e),"v-06be9332":()=>m(()=>import("./index.html-5a918ded.js"),[]).then(({data:e})=>e),"v-2687e471":()=>m(()=>import("./index.html-9479282f.js"),[]).then(({data:e})=>e),"v-7a2dbc66":()=>m(()=>import("./index.html-536277d1.js"),[]).then(({data:e})=>e),"v-b7d62b20":()=>m(()=>import("./index.html-45a37b61.js"),[]).then(({data:e})=>e),"v-4c00fee6":()=>m(()=>import("./index.html-b84d7b0e.js"),[]).then(({data:e})=>e),"v-b312914e":()=>m(()=>import("./index.html-eb917384.js"),[]).then(({data:e})=>e),"v-65eef823":()=>m(()=>import("./index.html-edffe0f2.js"),[]).then(({data:e})=>e),"v-2cce94e0":()=>m(()=>import("./index.html-55592f38.js"),[]).then(({data:e})=>e),"v-49f5e4d4":()=>m(()=>import("./index.html-931e73cc.js"),[]).then(({data:e})=>e),"v-757f190a":()=>m(()=>import("./index.html-96b00477.js"),[]).then(({data:e})=>e),"v-24cf7443":()=>m(()=>import("./index.html-022320ef.js"),[]).then(({data:e})=>e),"v-41e71c66":()=>m(()=>import("./index.html-d5238306.js"),[]).then(({data:e})=>e),"v-1e1f7399":()=>m(()=>import("./index.html-7cc61937.js"),[]).then(({data:e})=>e),"v-63bcc623":()=>m(()=>import("./index.html-d8597e00.js"),[]).then(({data:e})=>e),"v-08073caa":()=>m(()=>import("./index.html-2535caab.js"),[]).then(({data:e})=>e),"v-7d0ba9b4":()=>m(()=>import("./index.html-1458f3e8.js"),[]).then(({data:e})=>e),"v-0667aa78":()=>m(()=>import("./index.html-89737dbe.js"),[]).then(({data:e})=>e),"v-59fa8282":()=>m(()=>import("./index.html-aa00903c.js"),[]).then(({data:e})=>e),"v-6fcf7e02":()=>m(()=>import("./index.html-da0ace56.js"),[]).then(({data:e})=>e),"v-323f2b96":()=>m(()=>import("./index.html-8f53cfb6.js"),[]).then(({data:e})=>e),"v-424a813a":()=>m(()=>import("./index.html-fe42fcc6.js"),[]).then(({data:e})=>e),"v-97aefb08":()=>m(()=>import("./index.html-d672288c.js"),[]).then(({data:e})=>e),"v-4e0a37fd":()=>m(()=>import("./index.html-88bea764.js"),[]).then(({data:e})=>e),"v-9f510020":()=>m(()=>import("./index.html-240726d8.js"),[]).then(({data:e})=>e),"v-51acfcdb":()=>m(()=>import("./index.html-2085521d.js"),[]).then(({data:e})=>e),"v-79936c33":()=>m(()=>import("./index.html-8aa45997.js"),[]).then(({data:e})=>e),"v-4baa6010":()=>m(()=>import("./index.html-7bcda36e.js"),[]).then(({data:e})=>e),"v-1fc82282":()=>m(()=>import("./index.html-edf11e1d.js"),[]).then(({data:e})=>e),"v-29da37b8":()=>m(()=>import("./index.html-70154c1a.js"),[]).then(({data:e})=>e),"v-2303312e":()=>m(()=>import("./index.html-4e6cd9b4.js"),[]).then(({data:e})=>e),"v-57c0eac3":()=>m(()=>import("./index.html-45a9d477.js"),[]).then(({data:e})=>e),"v-55636bee":()=>m(()=>import("./index.html-5504710a.js"),[]).then(({data:e})=>e),"v-27fb5a12":()=>m(()=>import("./index.html-d8b74bf0.js"),[]).then(({data:e})=>e),"v-2831124d":()=>m(()=>import("./index.html-3b54d6af.js"),[]).then(({data:e})=>e),"v-99b9d3c8":()=>m(()=>import("./index.html-5bab0b0d.js"),[]).then(({data:e})=>e),"v-6106c001":()=>m(()=>import("./index.html-2b442d8c.js"),[]).then(({data:e})=>e),"v-5904f150":()=>m(()=>import("./index.html-7cf55d7a.js"),[]).then(({data:e})=>e),"v-1e90405c":()=>m(()=>import("./index.html-94361434.js"),[]).then(({data:e})=>e),"v-5e0b61bd":()=>m(()=>import("./index.html-0ef4edf7.js"),[]).then(({data:e})=>e),"v-297518da":()=>m(()=>import("./index.html-39ed20a3.js"),[]).then(({data:e})=>e),"v-9717cc36":()=>m(()=>import("./index.html-7209af5f.js"),[]).then(({data:e})=>e),"v-25365ef3":()=>m(()=>import("./index.html-6930b6fa.js"),[]).then(({data:e})=>e),"v-36e5af59":()=>m(()=>import("./index.html-36d23d70.js"),[]).then(({data:e})=>e),"v-1bee38ca":()=>m(()=>import("./index.html-f13374c1.js"),[]).then(({data:e})=>e),"v-8848dfa8":()=>m(()=>import("./index.html-350c6b78.js"),[]).then(({data:e})=>e),"v-a82bc73a":()=>m(()=>import("./index.html-71b464fd.js"),[]).then(({data:e})=>e),"v-3df94dfd":()=>m(()=>import("./index.html-1e155d25.js"),[]).then(({data:e})=>e),"v-0d1f4c3c":()=>m(()=>import("./index.html-d1d45f0b.js"),[]).then(({data:e})=>e),"v-e9c7e408":()=>m(()=>import("./index.html-c548900e.js"),[]).then(({data:e})=>e),"v-b3142c4c":()=>m(()=>import("./index.html-9b0dc7af.js"),[]).then(({data:e})=>e),"v-5831b135":()=>m(()=>import("./index.html-6ff40265.js"),[]).then(({data:e})=>e),"v-3b951558":()=>m(()=>import("./index.html-57282599.js"),[]).then(({data:e})=>e),"v-78cbe7bb":()=>m(()=>import("./index.html-b1191208.js"),[]).then(({data:e})=>e),"v-288e2c56":()=>m(()=>import("./index.html-d16d5b9d.js"),[]).then(({data:e})=>e),"v-94c7f10c":()=>m(()=>import("./index.html-2997b317.js"),[]).then(({data:e})=>e),"v-28a1d8bf":()=>m(()=>import("./index.html-ce700e36.js"),[]).then(({data:e})=>e),"v-4dc3ee15":()=>m(()=>import("./index.html-a860df88.js"),[]).then(({data:e})=>e),"v-245f5676":()=>m(()=>import("./index.html-e0955dfb.js"),[]).then(({data:e})=>e),"v-06ebc23c":()=>m(()=>import("./index.html-4bacd547.js"),[]).then(({data:e})=>e),"v-794d224b":()=>m(()=>import("./index.html-8ef20e38.js"),[]).then(({data:e})=>e),"v-65f6d381":()=>m(()=>import("./index.html-9d2370c8.js"),[]).then(({data:e})=>e),"v-b302da92":()=>m(()=>import("./index.html-940ed4e0.js"),[]).then(({data:e})=>e),"v-74379b30":()=>m(()=>import("./index.html-339be067.js"),[]).then(({data:e})=>e),"v-921953d4":()=>m(()=>import("./index.html-4421e73f.js"),[]).then(({data:e})=>e),"v-48e65760":()=>m(()=>import("./index.html-9b007397.js"),[]).then(({data:e})=>e)},im=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"icon","href":"/logo.png"}]],"locales":{"/":{"lang":"zh-CN","title":"Alooc","description":"Alooc的博客"}}}');var lm=([e,t,n])=>e==="meta"&&t.name?`${e}.${t.name}`:["title","base"].includes(e)?e:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,t,n]),rm=e=>{const t=new Set,n=[];return e.forEach(s=>{const a=lm(s);t.has(a)||(t.add(a),n.push(s))}),n},om=e=>e[e.length-1]==="/"||e.endsWith(".html")?e:`${e}/`,cm=e=>e.startsWith("ftp://"),En=e=>/^(https?:)?\/\//.test(e),um=/.md((\?|#).*)?$/,_a=(e,t="/")=>!!(En(e)||cm(e)||e.startsWith("/")&&!e.startsWith(t)&&!um.test(e)),Hc=e=>/^mailto:/.test(e),dm=e=>/^tel:/.test(e),Ms=e=>Object.prototype.toString.call(e)==="[object Object]",pl=e=>e[e.length-1]==="/"?e.slice(0,-1):e,Uc=e=>e[0]==="/"?e.slice(1):e,pm=(e,t)=>{const n=Object.keys(e).sort((s,a)=>{const i=a.split("/").length-s.split("/").length;return i!==0?i:a.length-s.length});for(const s of n)if(t.startsWith(s))return s;return"/"};const Jc={"v-8daa1a0e":_(()=>m(()=>import("./index.html-3d736842.js"),["assets/index.html-3d736842.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-184f4da6":_(()=>m(()=>import("./intro.html-842f32a4.js"),["assets/intro.html-842f32a4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2e3eac9e":_(()=>m(()=>import("./slides.html-6ebc604f.js"),["assets/slides.html-6ebc604f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2db914b0":_(()=>m(()=>import("./1、算法指标及排序算法.html-723e55e3.js"),["assets/1、算法指标及排序算法.html-723e55e3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-434b990c":_(()=>m(()=>import("./2、基础数据结构.html-e8fbea08.js"),["assets/2、基础数据结构.html-e8fbea08.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-013fe386":_(()=>m(()=>import("./3、基础算法.html-4fdf9ef5.js"),["assets/3、基础算法.html-4fdf9ef5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f4face08":_(()=>m(()=>import("./index.html-90ce1e28.js"),["assets/index.html-90ce1e28.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2c0b6453":_(()=>m(()=>import("./左神算法基础提升课学习笔记.html-1da5af43.js"),["assets/左神算法基础提升课学习笔记.html-1da5af43.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7f701d4a":_(()=>m(()=>import("./左神算法基础课学习笔记.html-24e7ec89.js"),["assets/左神算法基础课学习笔记.html-24e7ec89.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e8550a0c":_(()=>m(()=>import("./算法总结.html-cce03049.js"),["assets/算法总结.html-cce03049.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7bd30a60":_(()=>m(()=>import("./index.html-02166090.js"),["assets/index.html-02166090.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7dd7f45d":_(()=>m(()=>import("./index.html-50624044.js"),["assets/index.html-50624044.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2ccdf990":_(()=>m(()=>import("./index.html-45dad829.js"),["assets/index.html-45dad829.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-599fbcfb":_(()=>m(()=>import("./index.html-663e6097.js"),["assets/index.html-663e6097.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2365654c":_(()=>m(()=>import("./index.html-0b305a2b.js"),["assets/index.html-0b305a2b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2669abe4":_(()=>m(()=>import("./技巧.html-67f28344.js"),["assets/技巧.html-67f28344.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0041281f":_(()=>m(()=>import("./设计模式.html-931016f8.js"),["assets/设计模式.html-931016f8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8577ef52":_(()=>m(()=>import("./elasticsearch.html-1847f7eb.js"),["assets/elasticsearch.html-1847f7eb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4b591cc2":_(()=>m(()=>import("./基础总结.html-d84580f5.js"),["assets/基础总结.html-d84580f5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d1989f48":_(()=>m(()=>import("./基础总结.html-33d6a2dc.js"),["assets/基础总结.html-33d6a2dc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d1d1d3cc":_(()=>m(()=>import("./rabbitmq.html-e29d4937.js"),["assets/rabbitmq.html-e29d4937.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f63cc7c8":_(()=>m(()=>import("./基础总结.html-7a2c57eb.js"),["assets/基础总结.html-7a2c57eb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-632f1be4":_(()=>m(()=>import("./基础总结.html-4b50cfbd.js"),["assets/基础总结.html-4b50cfbd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6fb57558":_(()=>m(()=>import("./源码分析.html-58165165.js"),["assets/源码分析.html-58165165.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2706221b":_(()=>m(()=>import("./springcloud项目尚医通总结.html-7b745c5c.js"),["assets/springcloud项目尚医通总结.html-7b745c5c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7a9a6e12":_(()=>m(()=>import("./基础总结.html-dd441e75.js"),["assets/基础总结.html-dd441e75.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-97a18dc8":_(()=>m(()=>import("./基础总结.html-30e1b704.js"),["assets/基础总结.html-30e1b704.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7a1ee8c4":_(()=>m(()=>import("./swagger.html-33e8ce8b.js"),["assets/swagger.html-33e8ce8b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2ac42c0b":_(()=>m(()=>import("./activiti6基础笔记.html-1a29128a.js"),["assets/activiti6基础笔记.html-1a29128a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-41f030d6":_(()=>m(()=>import("./第一行代码笔记.html-e873e000.js"),["assets/第一行代码笔记.html-e873e000.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6d241b5d":_(()=>m(()=>import("./Bash基础笔记.html-b1d364c8.js"),["assets/Bash基础笔记.html-b1d364c8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d3bc8416":_(()=>m(()=>import("./常用命令.html-80d674d6.js"),["assets/常用命令.html-80d674d6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d51a49f":_(()=>m(()=>import("./docker命令.html-7656b916.js"),["assets/docker命令.html-7656b916.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5b2d3140":_(()=>m(()=>import("./常用镜像命令.html-5580e3ea.js"),["assets/常用镜像命令.html-5580e3ea.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-476eae3c":_(()=>m(()=>import("./maven深入学习笔记.html-6b0668d3.js"),["assets/maven深入学习笔记.html-6b0668d3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-106ab87c":_(()=>m(()=>import("./yaml语法.html-81d12ce5.js"),["assets/yaml语法.html-81d12ce5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5196b250":_(()=>m(()=>import("./java整合mysql.html-2d67230b.js"),["assets/java整合mysql.html-2d67230b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2179c7dc":_(()=>m(()=>import("./基础.html-35fe8111.js"),["assets/基础.html-35fe8111.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-468f0997":_(()=>m(()=>import("./Oracle基础总结.html-f69817ec.js"),["assets/Oracle基础总结.html-f69817ec.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4f1a648a":_(()=>m(()=>import("./redis.html-ddd947d1.js"),["assets/redis.html-ddd947d1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4d18a865":_(()=>m(()=>import("./index.html-68179536.js"),["assets/index.html-68179536.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e25b971c":_(()=>m(()=>import("./index.html-b4a94129.js"),["assets/index.html-b4a94129.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9087045a":_(()=>m(()=>import("./StarterSwagger3.html-1d2c55dd.js"),["assets/StarterSwagger3.html-1d2c55dd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0357f249":_(()=>m(()=>import("./CSS世界学习笔记.html-40529ef5.js"),["assets/CSS世界学习笔记.html-40529ef5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c3c11a36":_(()=>m(()=>import("./JavaScript笔记.html-32c25995.js"),["assets/JavaScript笔记.html-32c25995.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4f00b37c":_(()=>m(()=>import("./JavaScript高级程序设计学习笔记.html-f12afe71.js"),["assets/JavaScript高级程序设计学习笔记.html-f12afe71.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-eff6200a":_(()=>m(()=>import("./jquery_ajax笔记.html-465fe480.js"),["assets/jquery_ajax笔记.html-465fe480.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-31bde1ba":_(()=>m(()=>import("./疯狂HTML5_CSS3_JavaScript讲义笔记.html-901f6c7f.js"),["assets/疯狂HTML5_CSS3_JavaScript讲义笔记.html-901f6c7f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f33d5ffc":_(()=>m(()=>import("./疯狂前端开发讲义笔记.html-09981af7.js"),["assets/疯狂前端开发讲义笔记.html-09981af7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6e13ebe8":_(()=>m(()=>import("./JSP_Servlet笔记.html-acf9586c.js"),["assets/JSP_Servlet笔记.html-acf9586c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0f87f09a":_(()=>m(()=>import("./JUC.html-8e0f7ba3.js"),["assets/JUC.html-8e0f7ba3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3f21900f":_(()=>m(()=>import("./基础.html-acb29960.js"),["assets/基础.html-acb29960.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-36970167":_(()=>m(()=>import("./学习笔记《java开发手册》.html-e39ed230.js"),["assets/学习笔记《java开发手册》.html-e39ed230.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-86a4c8da":_(()=>m(()=>import("./学习笔记《疯狂Java讲义》.html-ca40334b.js"),["assets/学习笔记《疯狂Java讲义》.html-ca40334b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-88b1b032":_(()=>m(()=>import("./学习笔记《码出高效：Java开发手册》.html-af1070ad.js"),["assets/学习笔记《码出高效：Java开发手册》.html-af1070ad.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ab8fb5bc":_(()=>m(()=>import("./抽象类和接口.html-69ae160c.js"),["assets/抽象类和接口.html-69ae160c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7ad12457":_(()=>m(()=>import("./集合.html-b849aa0e.js"),["assets/集合.html-b849aa0e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-08abb1af":_(()=>m(()=>import("./note.html-0d9a134c.js"),["assets/note.html-0d9a134c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-02544884":_(()=>m(()=>import("./mongodb.html-01639f29.js"),["assets/mongodb.html-01639f29.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b7c7acc0":_(()=>m(()=>import("./Vue2.5开发去哪儿网App从零基础入门到实战项目学习笔记.html-d046790b.js"),["assets/Vue2.5开发去哪儿网App从零基础入门到实战项目学习笔记.html-d046790b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4d675cd4":_(()=>m(()=>import("./基础总结.html-8d4c476b.js"),["assets/基础总结.html-8d4c476b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3706649a":_(()=>m(()=>import("./404.html-55fd36f0.js"),["assets/404.html-55fd36f0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-42ef21ea":_(()=>m(()=>import("./index.html-7efdd755.js"),["assets/index.html-7efdd755.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01af5e14":_(()=>m(()=>import("./index.html-b4e18913.js"),["assets/index.html-b4e18913.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-145ac574":_(()=>m(()=>import("./index.html-98c2d0fc.js"),["assets/index.html-98c2d0fc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3607025c":_(()=>m(()=>import("./index.html-0f86d30b.js"),["assets/index.html-0f86d30b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ec27c24a":_(()=>m(()=>import("./index.html-a9c70848.js"),["assets/index.html-a9c70848.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4910ef8c":_(()=>m(()=>import("./index.html-32f9205f.js"),["assets/index.html-32f9205f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-747d1eb2":_(()=>m(()=>import("./index.html-444c1e33.js"),["assets/index.html-444c1e33.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0265bfe1":_(()=>m(()=>import("./index.html-b8512902.js"),["assets/index.html-b8512902.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1883faf2":_(()=>m(()=>import("./index.html-8a261392.js"),["assets/index.html-8a261392.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1b67f680":_(()=>m(()=>import("./index.html-9edd604c.js"),["assets/index.html-9edd604c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-58bf2fb7":_(()=>m(()=>import("./index.html-2d9a541e.js"),["assets/index.html-2d9a541e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3264841c":_(()=>m(()=>import("./index.html-124a1027.js"),["assets/index.html-124a1027.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4d2542b5":_(()=>m(()=>import("./index.html-ffc26292.js"),["assets/index.html-ffc26292.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2289dd5a":_(()=>m(()=>import("./index.html-9eb2d88c.js"),["assets/index.html-9eb2d88c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d4424206":_(()=>m(()=>import("./index.html-bccc0e1e.js"),["assets/index.html-bccc0e1e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d973dcc4":_(()=>m(()=>import("./index.html-2256e3c4.js"),["assets/index.html-2256e3c4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5ad92f12":_(()=>m(()=>import("./index.html-f9ae6111.js"),["assets/index.html-f9ae6111.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2f7a6abe":_(()=>m(()=>import("./index.html-92614f06.js"),["assets/index.html-92614f06.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d6ebcfaa":_(()=>m(()=>import("./index.html-76cd02e6.js"),["assets/index.html-76cd02e6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ce71e5f6":_(()=>m(()=>import("./index.html-12b1b470.js"),["assets/index.html-12b1b470.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-461dbf8e":_(()=>m(()=>import("./index.html-9ab86413.js"),["assets/index.html-9ab86413.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bfa2f968":_(()=>m(()=>import("./index.html-43c46a1b.js"),["assets/index.html-43c46a1b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-39ad1b74":_(()=>m(()=>import("./index.html-8f60d549.js"),["assets/index.html-8f60d549.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b82b2f16":_(()=>m(()=>import("./index.html-de9025e8.js"),["assets/index.html-de9025e8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5329c232":_(()=>m(()=>import("./index.html-7427b5b2.js"),["assets/index.html-7427b5b2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d3f8a510":_(()=>m(()=>import("./index.html-c61cea7f.js"),["assets/index.html-c61cea7f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-846fe2d2":_(()=>m(()=>import("./index.html-68b0f879.js"),["assets/index.html-68b0f879.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cc220acc":_(()=>m(()=>import("./index.html-62517054.js"),["assets/index.html-62517054.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-464b554e":_(()=>m(()=>import("./index.html-e4384727.js"),["assets/index.html-e4384727.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6b69a98c":_(()=>m(()=>import("./index.html-2b94e1c4.js"),["assets/index.html-2b94e1c4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5bc93818":_(()=>m(()=>import("./index.html-0606622c.js"),["assets/index.html-0606622c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-744d024e":_(()=>m(()=>import("./index.html-5de6afa8.js"),["assets/index.html-5de6afa8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e52c881c":_(()=>m(()=>import("./index.html-e35f6bd9.js"),["assets/index.html-e35f6bd9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-154dc4c4":_(()=>m(()=>import("./index.html-8ccbe747.js"),["assets/index.html-8ccbe747.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01560935":_(()=>m(()=>import("./index.html-f77eb4f6.js"),["assets/index.html-f77eb4f6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-06be9332":_(()=>m(()=>import("./index.html-b5a99f28.js"),["assets/index.html-b5a99f28.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2687e471":_(()=>m(()=>import("./index.html-c2a5589a.js"),["assets/index.html-c2a5589a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7a2dbc66":_(()=>m(()=>import("./index.html-546575b2.js"),["assets/index.html-546575b2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b7d62b20":_(()=>m(()=>import("./index.html-6c7f2713.js"),["assets/index.html-6c7f2713.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4c00fee6":_(()=>m(()=>import("./index.html-218240a1.js"),["assets/index.html-218240a1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b312914e":_(()=>m(()=>import("./index.html-ec428398.js"),["assets/index.html-ec428398.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-65eef823":_(()=>m(()=>import("./index.html-f3b56f8d.js"),["assets/index.html-f3b56f8d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2cce94e0":_(()=>m(()=>import("./index.html-d8710c6b.js"),["assets/index.html-d8710c6b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-49f5e4d4":_(()=>m(()=>import("./index.html-ae0f88fe.js"),["assets/index.html-ae0f88fe.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-757f190a":_(()=>m(()=>import("./index.html-3e9cbda3.js"),["assets/index.html-3e9cbda3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-24cf7443":_(()=>m(()=>import("./index.html-de3c4d44.js"),["assets/index.html-de3c4d44.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-41e71c66":_(()=>m(()=>import("./index.html-0d05bdae.js"),["assets/index.html-0d05bdae.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1e1f7399":_(()=>m(()=>import("./index.html-6b0b090b.js"),["assets/index.html-6b0b090b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-63bcc623":_(()=>m(()=>import("./index.html-abf228ec.js"),["assets/index.html-abf228ec.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-08073caa":_(()=>m(()=>import("./index.html-2f8eb768.js"),["assets/index.html-2f8eb768.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7d0ba9b4":_(()=>m(()=>import("./index.html-a2a05b07.js"),["assets/index.html-a2a05b07.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0667aa78":_(()=>m(()=>import("./index.html-595a427f.js"),["assets/index.html-595a427f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-59fa8282":_(()=>m(()=>import("./index.html-f97c1ad2.js"),["assets/index.html-f97c1ad2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6fcf7e02":_(()=>m(()=>import("./index.html-3813386b.js"),["assets/index.html-3813386b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-323f2b96":_(()=>m(()=>import("./index.html-5d4999ae.js"),["assets/index.html-5d4999ae.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-424a813a":_(()=>m(()=>import("./index.html-4775351f.js"),["assets/index.html-4775351f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-97aefb08":_(()=>m(()=>import("./index.html-774e426a.js"),["assets/index.html-774e426a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4e0a37fd":_(()=>m(()=>import("./index.html-5a7e0b9a.js"),["assets/index.html-5a7e0b9a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9f510020":_(()=>m(()=>import("./index.html-36d8642f.js"),["assets/index.html-36d8642f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-51acfcdb":_(()=>m(()=>import("./index.html-15224f98.js"),["assets/index.html-15224f98.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-79936c33":_(()=>m(()=>import("./index.html-6380661c.js"),["assets/index.html-6380661c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4baa6010":_(()=>m(()=>import("./index.html-15f8b4f0.js"),["assets/index.html-15f8b4f0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1fc82282":_(()=>m(()=>import("./index.html-a15347b3.js"),["assets/index.html-a15347b3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-29da37b8":_(()=>m(()=>import("./index.html-45e992d1.js"),["assets/index.html-45e992d1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2303312e":_(()=>m(()=>import("./index.html-86e43fa1.js"),["assets/index.html-86e43fa1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-57c0eac3":_(()=>m(()=>import("./index.html-983e917e.js"),["assets/index.html-983e917e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-55636bee":_(()=>m(()=>import("./index.html-f88f1c1e.js"),["assets/index.html-f88f1c1e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-27fb5a12":_(()=>m(()=>import("./index.html-01ed6cb0.js"),["assets/index.html-01ed6cb0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2831124d":_(()=>m(()=>import("./index.html-3450ca58.js"),["assets/index.html-3450ca58.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-99b9d3c8":_(()=>m(()=>import("./index.html-7a1dee1d.js"),["assets/index.html-7a1dee1d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6106c001":_(()=>m(()=>import("./index.html-9848c196.js"),["assets/index.html-9848c196.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5904f150":_(()=>m(()=>import("./index.html-b8fc3e43.js"),["assets/index.html-b8fc3e43.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1e90405c":_(()=>m(()=>import("./index.html-5bbbf735.js"),["assets/index.html-5bbbf735.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5e0b61bd":_(()=>m(()=>import("./index.html-4cf966ea.js"),["assets/index.html-4cf966ea.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-297518da":_(()=>m(()=>import("./index.html-23c5f02c.js"),["assets/index.html-23c5f02c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9717cc36":_(()=>m(()=>import("./index.html-c10e1956.js"),["assets/index.html-c10e1956.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-25365ef3":_(()=>m(()=>import("./index.html-be6c2948.js"),["assets/index.html-be6c2948.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-36e5af59":_(()=>m(()=>import("./index.html-4d0fd816.js"),["assets/index.html-4d0fd816.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1bee38ca":_(()=>m(()=>import("./index.html-91e39f49.js"),["assets/index.html-91e39f49.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8848dfa8":_(()=>m(()=>import("./index.html-ea9442c2.js"),["assets/index.html-ea9442c2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a82bc73a":_(()=>m(()=>import("./index.html-36b17f5f.js"),["assets/index.html-36b17f5f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3df94dfd":_(()=>m(()=>import("./index.html-1adcb8ba.js"),["assets/index.html-1adcb8ba.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0d1f4c3c":_(()=>m(()=>import("./index.html-26515e5a.js"),["assets/index.html-26515e5a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e9c7e408":_(()=>m(()=>import("./index.html-f837a97a.js"),["assets/index.html-f837a97a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b3142c4c":_(()=>m(()=>import("./index.html-04f4e8ac.js"),["assets/index.html-04f4e8ac.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5831b135":_(()=>m(()=>import("./index.html-ecb8e841.js"),["assets/index.html-ecb8e841.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3b951558":_(()=>m(()=>import("./index.html-54ffdb44.js"),["assets/index.html-54ffdb44.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-78cbe7bb":_(()=>m(()=>import("./index.html-ea0e6aeb.js"),["assets/index.html-ea0e6aeb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-288e2c56":_(()=>m(()=>import("./index.html-c51510d9.js"),["assets/index.html-c51510d9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-94c7f10c":_(()=>m(()=>import("./index.html-2cb71d23.js"),["assets/index.html-2cb71d23.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-28a1d8bf":_(()=>m(()=>import("./index.html-d9829d8d.js"),["assets/index.html-d9829d8d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4dc3ee15":_(()=>m(()=>import("./index.html-43ad4e0a.js"),["assets/index.html-43ad4e0a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-245f5676":_(()=>m(()=>import("./index.html-788741bf.js"),["assets/index.html-788741bf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-06ebc23c":_(()=>m(()=>import("./index.html-05b5f7d0.js"),["assets/index.html-05b5f7d0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-794d224b":_(()=>m(()=>import("./index.html-5d012ff7.js"),["assets/index.html-5d012ff7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-65f6d381":_(()=>m(()=>import("./index.html-1b20a69c.js"),["assets/index.html-1b20a69c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b302da92":_(()=>m(()=>import("./index.html-789d6316.js"),["assets/index.html-789d6316.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-74379b30":_(()=>m(()=>import("./index.html-119567a0.js"),["assets/index.html-119567a0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-921953d4":_(()=>m(()=>import("./index.html-2888c937.js"),["assets/index.html-2888c937.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-48e65760":_(()=>m(()=>import("./index.html-befa5bbe.js"),["assets/index.html-befa5bbe.js","assets/plugin-vue_export-helper-c27b6911.js"]))};var vm=Symbol(""),mm=F(am),Gc=Mt({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),Kt=F(Gc),ue=()=>Kt,Kc=Symbol(""),ke=()=>{const e=fe(Kc);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},Wc=Symbol(""),gm=()=>{const e=fe(Wc);if(!e)throw new Error("usePageHead() is called without provider.");return e},fm=Symbol(""),Qc=Symbol(""),vl=()=>{const e=fe(Qc);if(!e)throw new Error("usePageLang() is called without provider.");return e},Xc=Symbol(""),bm=()=>{const e=fe(Xc);if(!e)throw new Error("usePageLayout() is called without provider.");return e},ml=Symbol(""),Vt=()=>{const e=fe(ml);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},Ln=F(im),Yc=()=>Ln,Zc=Symbol(""),$s=()=>{const e=fe(Zc);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},hm=Symbol(""),km="Layout",ym="NotFound",Lt=Ds({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageData:async e=>{const t=mm.value[e];return await(t==null?void 0:t())??Gc},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,t,n)=>{const s=ce(t.description)?t.description:n.description,a=[...W(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:s}]];return rm(a)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(n=>!!n).join(" | "),resolvePageLang:e=>e.lang||"en",resolvePageLayout:(e,t)=>{let n;if(e.path){const s=e.frontmatter.layout;ce(s)?n=s:n=km}else n=ym;return t[n]},resolveRouteLocale:(e,t)=>pm(e,t),resolveSiteLocaleData:(e,t)=>({...e,...e.locales[t]})}),Da=B({name:"ClientOnly",setup(e,t){const n=F(!1);return pe(()=>{n.value=!0}),()=>{var s,a;return n.value?(a=(s=t.slots).default)==null?void 0:a.call(s):null}}}),gl=B({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const t=ue(),n=A(()=>Jc[e.pageKey||t.value.key]);return()=>n.value?o(n.value):o("div","404 Not Found")}}),_t=(e={})=>e,Te=e=>En(e)?e:`/${Uc(e)}`;const _m={};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Tn=typeof window<"u";function Em(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ye=Object.assign;function Xa(e,t){const n={};for(const s in t){const a=t[s];n[s]=kt(a)?a.map(e):e(a)}return n}const gs=()=>{},kt=Array.isArray,Am=/\/$/,wm=e=>e.replace(Am,"");function Ya(e,t,n="/"){let s,a={},i="",l="";const r=t.indexOf("#");let u=t.indexOf("?");return r<u&&r>=0&&(u=-1),u>-1&&(s=t.slice(0,u),i=t.slice(u+1,r>-1?r:t.length),a=e(i)),r>-1&&(s=s||t.slice(0,r),l=t.slice(r,t.length)),s=Tm(s??t,n),{fullPath:s+(i&&"?")+i+l,path:s,query:a,hash:l}}function Sm(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Br(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Im(e,t,n){const s=t.matched.length-1,a=n.matched.length-1;return s>-1&&s===a&&Jn(t.matched[s],n.matched[a])&&eu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Jn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function eu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Pm(e[n],t[n]))return!1;return!0}function Pm(e,t){return kt(e)?Mr(e,t):kt(t)?Mr(t,e):e===t}function Mr(e,t){return kt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Tm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),a=s[s.length-1];(a===".."||a===".")&&s.push("");let i=n.length-1,l,r;for(l=0;l<s.length;l++)if(r=s[l],r!==".")if(r==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(l-(l===s.length?1:0)).join("/")}var Ps;(function(e){e.pop="pop",e.push="push"})(Ps||(Ps={}));var fs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(fs||(fs={}));function Cm(e){if(!e)if(Tn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),wm(e)}const Lm=/^[^#]+#/;function xm(e,t){return e.replace(Lm,"#")+t}function Om(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Ra=()=>({left:window.pageXOffset,top:window.pageYOffset});function Dm(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Om(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $r(e,t){return(history.state?history.state.position-t:-1)+e}const Ai=new Map;function Rm(e,t){Ai.set(e,t)}function Bm(e){const t=Ai.get(e);return Ai.delete(e),t}let Mm=()=>location.protocol+"//"+location.host;function tu(e,t){const{pathname:n,search:s,hash:a}=t,i=e.indexOf("#");if(i>-1){let r=a.includes(e.slice(i))?e.slice(i).length:1,u=a.slice(r);return u[0]!=="/"&&(u="/"+u),Br(u,"")}return Br(n,e)+s+a}function $m(e,t,n,s){let a=[],i=[],l=null;const r=({state:v})=>{const g=tu(e,location),h=n.value,w=t.value;let S=0;if(v){if(n.value=g,t.value=v,l&&l===h){l=null;return}S=w?v.position-w.position:0}else s(g);a.forEach(b=>{b(n.value,h,{delta:S,type:Ps.pop,direction:S?S>0?fs.forward:fs.back:fs.unknown})})};function u(){l=n.value}function c(v){a.push(v);const g=()=>{const h=a.indexOf(v);h>-1&&a.splice(h,1)};return i.push(g),g}function d(){const{history:v}=window;v.state&&v.replaceState(ye({},v.state,{scroll:Ra()}),"")}function p(){for(const v of i)v();i=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:c,destroy:p}}function Vr(e,t,n,s=!1,a=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:a?Ra():null}}function Vm(e){const{history:t,location:n}=window,s={value:tu(e,n)},a={value:t.state};a.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(u,c,d){const p=e.indexOf("#"),v=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+u:Mm()+e+u;try{t[d?"replaceState":"pushState"](c,"",v),a.value=c}catch(g){console.error(g),n[d?"replace":"assign"](v)}}function l(u,c){const d=ye({},t.state,Vr(a.value.back,u,a.value.forward,!0),c,{position:a.value.position});i(u,d,!0),s.value=u}function r(u,c){const d=ye({},a.value,t.state,{forward:u,scroll:Ra()});i(d.current,d,!0);const p=ye({},Vr(s.value,u,null),{position:d.position+1},c);i(u,p,!1),s.value=u}return{location:s,state:a,push:r,replace:l}}function jm(e){e=Cm(e);const t=Vm(e),n=$m(e,t.state,t.location,t.replace);function s(i,l=!0){l||n.pauseListeners(),history.go(i)}const a=ye({location:"",base:e,go:s,createHref:xm.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Fm(e){return typeof e=="string"||e&&typeof e=="object"}function nu(e){return typeof e=="string"||typeof e=="symbol"}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},su=Symbol("");var jr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(jr||(jr={}));function Gn(e,t){return ye(new Error,{type:e,[su]:!0},t)}function Tt(e,t){return e instanceof Error&&su in e&&(t==null||!!(e.type&t))}const Fr="[^/]+?",Nm={sensitive:!1,strict:!1,start:!0,end:!0},qm=/[.+*?^${}()[\]/\\]/g;function zm(e,t){const n=ye({},Nm,t),s=[];let a=n.start?"^":"";const i=[];for(const c of e){const d=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let p=0;p<c.length;p++){const v=c[p];let g=40+(n.sensitive?.25:0);if(v.type===0)p||(a+="/"),a+=v.value.replace(qm,"\\$&"),g+=40;else if(v.type===1){const{value:h,repeatable:w,optional:S,regexp:b}=v;i.push({name:h,repeatable:w,optional:S});const y=b||Fr;if(y!==Fr){g+=10;try{new RegExp(`(${y})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${h}" (${y}): `+O.message)}}let L=w?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;p||(L=S&&c.length<2?`(?:/${L})`:"/"+L),S&&(L+="?"),a+=L,g+=20,S&&(g+=-8),w&&(g+=-20),y===".*"&&(g+=-50)}d.push(g)}s.push(d)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const l=new RegExp(a,n.sensitive?"":"i");function r(c){const d=c.match(l),p={};if(!d)return null;for(let v=1;v<d.length;v++){const g=d[v]||"",h=i[v-1];p[h.name]=g&&h.repeatable?g.split("/"):g}return p}function u(c){let d="",p=!1;for(const v of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const g of v)if(g.type===0)d+=g.value;else if(g.type===1){const{value:h,repeatable:w,optional:S}=g,b=h in c?c[h]:"";if(kt(b)&&!w)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const y=kt(b)?b.join("/"):b;if(!y)if(S)v.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${h}"`);d+=y}}return d||"/"}return{re:l,score:s,keys:i,parse:r,stringify:u}}function Hm(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Um(e,t){let n=0;const s=e.score,a=t.score;for(;n<s.length&&n<a.length;){const i=Hm(s[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-s.length)===1){if(Nr(s))return 1;if(Nr(a))return-1}return a.length-s.length}function Nr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Jm={type:0,value:""},Gm=/[a-zA-Z0-9_]/;function Km(e){if(!e)return[[]];if(e==="/")return[[Jm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const a=[];let i;function l(){i&&a.push(i),i=[]}let r=0,u,c="",d="";function p(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),c="")}function v(){c+=u}for(;r<e.length;){if(u=e[r++],u==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:u==="/"?(c&&p(),l()):u===":"?(p(),n=1):v();break;case 4:v(),n=s;break;case 1:u==="("?n=2:Gm.test(u)?v():(p(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&r--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=3:d+=u;break;case 3:p(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&r--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),p(),l(),a}function Wm(e,t,n){const s=zm(Km(e.path),n),a=ye(s,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Qm(e,t){const n=[],s=new Map;t=Hr({strict:!1,end:!0,sensitive:!1},t);function a(d){return s.get(d)}function i(d,p,v){const g=!v,h=Xm(d);h.aliasOf=v&&v.record;const w=Hr(t,d),S=[h];if("alias"in d){const L=typeof d.alias=="string"?[d.alias]:d.alias;for(const O of L)S.push(ye({},h,{components:v?v.record.components:h.components,path:O,aliasOf:v?v.record:h}))}let b,y;for(const L of S){const{path:O}=L;if(p&&O[0]!=="/"){const z=p.record.path,D=z[z.length-1]==="/"?"":"/";L.path=p.record.path+(O&&D+O)}if(b=Wm(L,p,w),v?v.alias.push(b):(y=y||b,y!==b&&y.alias.push(b),g&&d.name&&!zr(b)&&l(d.name)),h.children){const z=h.children;for(let D=0;D<z.length;D++)i(z[D],b,v&&v.children[D])}v=v||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&u(b)}return y?()=>{l(y)}:gs}function l(d){if(nu(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(l),p.alias.forEach(l))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(l),d.alias.forEach(l))}}function r(){return n}function u(d){let p=0;for(;p<n.length&&Um(d,n[p])>=0&&(d.record.path!==n[p].record.path||!au(d,n[p]));)p++;n.splice(p,0,d),d.record.name&&!zr(d)&&s.set(d.record.name,d)}function c(d,p){let v,g={},h,w;if("name"in d&&d.name){if(v=s.get(d.name),!v)throw Gn(1,{location:d});w=v.record.name,g=ye(qr(p.params,v.keys.filter(y=>!y.optional).map(y=>y.name)),d.params&&qr(d.params,v.keys.map(y=>y.name))),h=v.stringify(g)}else if("path"in d)h=d.path,v=n.find(y=>y.re.test(h)),v&&(g=v.parse(h),w=v.record.name);else{if(v=p.name?s.get(p.name):n.find(y=>y.re.test(p.path)),!v)throw Gn(1,{location:d,currentLocation:p});w=v.record.name,g=ye({},p.params,d.params),h=v.stringify(g)}const S=[];let b=v;for(;b;)S.unshift(b.record),b=b.parent;return{name:w,path:h,params:g,matched:S,meta:Zm(S)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:c,removeRoute:l,getRoutes:r,getRecordMatcher:a}}function qr(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Xm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ym(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ym(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function zr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Zm(e){return e.reduce((t,n)=>ye(t,n.meta),{})}function Hr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function au(e,t){return t.children.some(n=>n===e||au(e,n))}const iu=/#/g,e0=/&/g,t0=/\//g,n0=/=/g,s0=/\?/g,lu=/\+/g,a0=/%5B/g,i0=/%5D/g,ru=/%5E/g,l0=/%60/g,ou=/%7B/g,r0=/%7C/g,cu=/%7D/g,o0=/%20/g;function fl(e){return encodeURI(""+e).replace(r0,"|").replace(a0,"[").replace(i0,"]")}function c0(e){return fl(e).replace(ou,"{").replace(cu,"}").replace(ru,"^")}function wi(e){return fl(e).replace(lu,"%2B").replace(o0,"+").replace(iu,"%23").replace(e0,"%26").replace(l0,"`").replace(ou,"{").replace(cu,"}").replace(ru,"^")}function u0(e){return wi(e).replace(n0,"%3D")}function d0(e){return fl(e).replace(iu,"%23").replace(s0,"%3F")}function p0(e){return e==null?"":d0(e).replace(t0,"%2F")}function Ea(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function v0(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<s.length;++a){const i=s[a].replace(lu," "),l=i.indexOf("="),r=Ea(l<0?i:i.slice(0,l)),u=l<0?null:Ea(i.slice(l+1));if(r in t){let c=t[r];kt(c)||(c=t[r]=[c]),c.push(u)}else t[r]=u}return t}function Ur(e){let t="";for(let n in e){const s=e[n];if(n=u0(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(kt(s)?s.map(i=>i&&wi(i)):[s&&wi(s)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function m0(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=kt(s)?s.map(a=>a==null?null:""+a):s==null?s:""+s)}return t}const g0=Symbol(""),Jr=Symbol(""),Ba=Symbol(""),bl=Symbol(""),Si=Symbol("");function os(){let e=[];function t(s){return e.push(s),()=>{const a=e.indexOf(s);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Wt(e,t,n,s,a){const i=s&&(s.enterCallbacks[a]=s.enterCallbacks[a]||[]);return()=>new Promise((l,r)=>{const u=p=>{p===!1?r(Gn(4,{from:n,to:t})):p instanceof Error?r(p):Fm(p)?r(Gn(2,{from:t,to:p})):(i&&s.enterCallbacks[a]===i&&typeof p=="function"&&i.push(p),l())},c=e.call(s&&s.instances[a],t,n,u);let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(p=>r(p))})}function Za(e,t,n,s){const a=[];for(const i of e)for(const l in i.components){let r=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(f0(r)){const c=(r.__vccOpts||r)[t];c&&a.push(Wt(c,n,s,i,l))}else{let u=r();a.push(()=>u.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));const d=Em(c)?c.default:c;i.components[l]=d;const v=(d.__vccOpts||d)[t];return v&&Wt(v,n,s,i,l)()}))}}return a}function f0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ii(e){const t=fe(Ba),n=fe(bl),s=A(()=>t.resolve(gn(e.to))),a=A(()=>{const{matched:u}=s.value,{length:c}=u,d=u[c-1],p=n.matched;if(!d||!p.length)return-1;const v=p.findIndex(Jn.bind(null,d));if(v>-1)return v;const g=Gr(u[c-2]);return c>1&&Gr(d)===g&&p[p.length-1].path!==g?p.findIndex(Jn.bind(null,u[c-2])):v}),i=A(()=>a.value>-1&&y0(n.params,s.value.params)),l=A(()=>a.value>-1&&a.value===n.matched.length-1&&eu(n.params,s.value.params));function r(u={}){return k0(u)?t[gn(e.replace)?"replace":"push"](gn(e.to)).catch(gs):Promise.resolve()}return{route:s,href:A(()=>s.value.href),isActive:i,isExactActive:l,navigate:r}}const b0=B({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ii,setup(e,{slots:t}){const n=Ds(Ii(e)),{options:s}=fe(Ba),a=A(()=>({[Kr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Kr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:o("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),h0=b0;function k0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function y0(e,t){for(const n in t){const s=t[n],a=e[n];if(typeof s=="string"){if(s!==a)return!1}else if(!kt(a)||a.length!==s.length||s.some((i,l)=>i!==a[l]))return!1}return!0}function Gr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Kr=(e,t,n)=>e??t??n,_0=B({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=fe(Si),a=A(()=>e.route||s.value),i=fe(Jr,0),l=A(()=>{let c=gn(i);const{matched:d}=a.value;let p;for(;(p=d[c])&&!p.components;)c++;return c}),r=A(()=>a.value.matched[l.value]);bt(Jr,A(()=>l.value+1)),bt(g0,r),bt(Si,a);const u=F();return se(()=>[u.value,r.value,e.name],([c,d,p],[v,g,h])=>{d&&(d.instances[p]=c,g&&g!==d&&c&&c===v&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),c&&d&&(!g||!Jn(d,g)||!v)&&(d.enterCallbacks[p]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=a.value,d=e.name,p=r.value,v=p&&p.components[d];if(!v)return Wr(n.default,{Component:v,route:c});const g=p.props[d],h=g?g===!0?c.params:typeof g=="function"?g(c):g:null,S=o(v,ye({},h,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(p.instances[d]=null)},ref:u}));return Wr(n.default,{Component:S,route:c})||S}}});function Wr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const uu=_0;function E0(e){const t=Qm(e.routes,e),n=e.parseQuery||v0,s=e.stringifyQuery||Ur,a=e.history,i=os(),l=os(),r=os(),u=Ce(xt);let c=xt;Tn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Xa.bind(null,T=>""+T),p=Xa.bind(null,p0),v=Xa.bind(null,Ea);function g(T,q){let V,Q;return nu(T)?(V=t.getRecordMatcher(T),Q=q):Q=T,t.addRoute(Q,V)}function h(T){const q=t.getRecordMatcher(T);q&&t.removeRoute(q)}function w(){return t.getRoutes().map(T=>T.record)}function S(T){return!!t.getRecordMatcher(T)}function b(T,q){if(q=ye({},q||u.value),typeof T=="string"){const E=Ya(n,T,q.path),I=t.resolve({path:E.path},q),C=a.createHref(E.fullPath);return ye(E,I,{params:v(I.params),hash:Ea(E.hash),redirectedFrom:void 0,href:C})}let V;if("path"in T)V=ye({},T,{path:Ya(n,T.path,q.path).path});else{const E=ye({},T.params);for(const I in E)E[I]==null&&delete E[I];V=ye({},T,{params:p(E)}),q.params=p(q.params)}const Q=t.resolve(V,q),ve=T.hash||"";Q.params=d(v(Q.params));const f=Sm(s,ye({},T,{hash:c0(ve),path:Q.path})),k=a.createHref(f);return ye({fullPath:f,hash:ve,query:s===Ur?m0(T.query):T.query||{}},Q,{redirectedFrom:void 0,href:k})}function y(T){return typeof T=="string"?Ya(n,T,u.value.path):ye({},T)}function L(T,q){if(c!==T)return Gn(8,{from:q,to:T})}function O(T){return $(T)}function z(T){return O(ye(y(T),{replace:!0}))}function D(T){const q=T.matched[T.matched.length-1];if(q&&q.redirect){const{redirect:V}=q;let Q=typeof V=="function"?V(T):V;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=y(Q):{path:Q},Q.params={}),ye({query:T.query,hash:T.hash,params:"path"in Q?{}:T.params},Q)}}function $(T,q){const V=c=b(T),Q=u.value,ve=T.state,f=T.force,k=T.replace===!0,E=D(V);if(E)return $(ye(y(E),{state:typeof E=="object"?ye({},ve,E.state):ve,force:f,replace:k}),q||V);const I=V;I.redirectedFrom=q;let C;return!f&&Im(s,Q,V)&&(C=Gn(16,{to:I,from:Q}),Ge(Q,Q,!0,!1)),(C?Promise.resolve(C):U(I,Q)).catch(x=>Tt(x)?Tt(x,2)?x:At(x):te(x,I,Q)).then(x=>{if(x){if(Tt(x,2))return $(ye({replace:k},y(x.to),{state:typeof x.to=="object"?ye({},ve,x.to.state):ve,force:f}),q||I)}else x=J(I,Q,!0,k,ve);return ae(I,Q,x),x})}function P(T,q){const V=L(T,q);return V?Promise.reject(V):Promise.resolve()}function H(T){const q=st.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(T):T()}function U(T,q){let V;const[Q,ve,f]=A0(T,q);V=Za(Q.reverse(),"beforeRouteLeave",T,q);for(const E of Q)E.leaveGuards.forEach(I=>{V.push(Wt(I,T,q))});const k=P.bind(null,T,q);return V.push(k),De(V).then(()=>{V=[];for(const E of i.list())V.push(Wt(E,T,q));return V.push(k),De(V)}).then(()=>{V=Za(ve,"beforeRouteUpdate",T,q);for(const E of ve)E.updateGuards.forEach(I=>{V.push(Wt(I,T,q))});return V.push(k),De(V)}).then(()=>{V=[];for(const E of f)if(E.beforeEnter)if(kt(E.beforeEnter))for(const I of E.beforeEnter)V.push(Wt(I,T,q));else V.push(Wt(E.beforeEnter,T,q));return V.push(k),De(V)}).then(()=>(T.matched.forEach(E=>E.enterCallbacks={}),V=Za(f,"beforeRouteEnter",T,q),V.push(k),De(V))).then(()=>{V=[];for(const E of l.list())V.push(Wt(E,T,q));return V.push(k),De(V)}).catch(E=>Tt(E,8)?E:Promise.reject(E))}function ae(T,q,V){r.list().forEach(Q=>H(()=>Q(T,q,V)))}function J(T,q,V,Q,ve){const f=L(T,q);if(f)return f;const k=q===xt,E=Tn?history.state:{};V&&(Q||k?a.replace(T.fullPath,ye({scroll:k&&E&&E.scroll},ve)):a.push(T.fullPath,ve)),u.value=T,Ge(T,q,V,k),At()}let Z;function G(){Z||(Z=a.listen((T,q,V)=>{if(!Ft.listening)return;const Q=b(T),ve=D(Q);if(ve){$(ye(ve,{replace:!0}),Q).catch(gs);return}c=Q;const f=u.value;Tn&&Rm($r(f.fullPath,V.delta),Ra()),U(Q,f).catch(k=>Tt(k,12)?k:Tt(k,2)?($(k.to,Q).then(E=>{Tt(E,20)&&!V.delta&&V.type===Ps.pop&&a.go(-1,!1)}).catch(gs),Promise.reject()):(V.delta&&a.go(-V.delta,!1),te(k,Q,f))).then(k=>{k=k||J(Q,f,!1),k&&(V.delta&&!Tt(k,8)?a.go(-V.delta,!1):V.type===Ps.pop&&Tt(k,20)&&a.go(-1,!1)),ae(Q,f,k)}).catch(gs)}))}let Pe=os(),le=os(),he;function te(T,q,V){At(T);const Q=le.list();return Q.length?Q.forEach(ve=>ve(T,q,V)):console.error(T),Promise.reject(T)}function ut(){return he&&u.value!==xt?Promise.resolve():new Promise((T,q)=>{Pe.add([T,q])})}function At(T){return he||(he=!T,G(),Pe.list().forEach(([q,V])=>T?V(T):q()),Pe.reset()),T}function Ge(T,q,V,Q){const{scrollBehavior:ve}=e;if(!Tn||!ve)return Promise.resolve();const f=!V&&Bm($r(T.fullPath,0))||(Q||!V)&&history.state&&history.state.scroll||null;return sn().then(()=>ve(T,q,f)).then(k=>k&&Dm(k)).catch(k=>te(k,T,q))}const xe=T=>a.go(T);let Pt;const st=new Set,Ft={currentRoute:u,listening:!0,addRoute:g,removeRoute:h,hasRoute:S,getRoutes:w,resolve:b,options:e,push:O,replace:z,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:l.add,afterEach:r.add,onError:le.add,isReady:ut,install(T){const q=this;T.component("RouterLink",h0),T.component("RouterView",uu),T.config.globalProperties.$router=q,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>gn(u)}),Tn&&!Pt&&u.value===xt&&(Pt=!0,O(a.location).catch(ve=>{}));const V={};for(const ve in xt)Object.defineProperty(V,ve,{get:()=>u.value[ve],enumerable:!0});T.provide(Ba,q),T.provide(bl,tc(V)),T.provide(Si,u);const Q=T.unmount;st.add(T),T.unmount=function(){st.delete(T),st.size<1&&(c=xt,Z&&Z(),Z=null,u.value=xt,Pt=!1,he=!1),Q()}}};function De(T){return T.reduce((q,V)=>q.then(()=>H(V)),Promise.resolve())}return Ft}function A0(e,t){const n=[],s=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let l=0;l<i;l++){const r=t.matched[l];r&&(e.matched.find(c=>Jn(c,r))?s.push(r):n.push(r));const u=e.matched[l];u&&(t.matched.find(c=>Jn(c,u))||a.push(u))}return[n,s,a]}function qe(){return fe(Ba)}function Et(){return fe(bl)}var Ue=Uint8Array,xn=Uint16Array,w0=Int32Array,du=new Ue([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),pu=new Ue([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),S0=new Ue([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),vu=function(e,t){for(var n=new xn(31),s=0;s<31;++s)n[s]=t+=1<<e[s-1];for(var a=new w0(n[30]),s=1;s<30;++s)for(var i=n[s];i<n[s+1];++i)a[i]=i-n[s]<<5|s;return{b:n,r:a}},mu=vu(du,2),gu=mu.b,I0=mu.r;gu[28]=258,I0[258]=28;var P0=vu(pu,0),T0=P0.b,Pi=new xn(32768);for(var Ie=0;Ie<32768;++Ie){var Ht=(Ie&43690)>>1|(Ie&21845)<<1;Ht=(Ht&52428)>>2|(Ht&13107)<<2,Ht=(Ht&61680)>>4|(Ht&3855)<<4,Pi[Ie]=((Ht&65280)>>8|(Ht&255)<<8)>>1}var bs=function(e,t,n){for(var s=e.length,a=0,i=new xn(t);a<s;++a)e[a]&&++i[e[a]-1];var l=new xn(t);for(a=1;a<t;++a)l[a]=l[a-1]+i[a-1]<<1;var r;if(n){r=new xn(1<<t);var u=15-t;for(a=0;a<s;++a)if(e[a])for(var c=a<<4|e[a],d=t-e[a],p=l[e[a]-1]++<<d,v=p|(1<<d)-1;p<=v;++p)r[Pi[p]>>u]=c}else for(r=new xn(s),a=0;a<s;++a)e[a]&&(r[a]=Pi[l[e[a]-1]++]>>15-e[a]);return r},Vs=new Ue(288);for(var Ie=0;Ie<144;++Ie)Vs[Ie]=8;for(var Ie=144;Ie<256;++Ie)Vs[Ie]=9;for(var Ie=256;Ie<280;++Ie)Vs[Ie]=7;for(var Ie=280;Ie<288;++Ie)Vs[Ie]=8;var fu=new Ue(32);for(var Ie=0;Ie<32;++Ie)fu[Ie]=5;var C0=bs(Vs,9,1),L0=bs(fu,5,1),ei=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},pt=function(e,t,n){var s=t/8|0;return(e[s]|e[s+1]<<8)>>(t&7)&n},ti=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},x0=function(e){return(e+7)/8|0},hl=function(e,t,n){(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var s=new Ue(n-t);return s.set(e.subarray(t,n)),s},O0=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],lt=function(e,t,n){var s=new Error(t||O0[e]);if(s.code=e,Error.captureStackTrace&&Error.captureStackTrace(s,lt),!n)throw s;return s},D0=function(e,t,n,s){var a=e.length,i=s?s.length:0;if(!a||t.f&&!t.l)return n||new Ue(0);var l=!n||t.i!=2,r=t.i;n||(n=new Ue(a*3));var u=function(Q){var ve=n.length;if(Q>ve){var f=new Ue(Math.max(ve*2,Q));f.set(n),n=f}},c=t.f||0,d=t.p||0,p=t.b||0,v=t.l,g=t.d,h=t.m,w=t.n,S=a*8;do{if(!v){c=pt(e,d,1);var b=pt(e,d+1,3);if(d+=3,b)if(b==1)v=C0,g=L0,h=9,w=5;else if(b==2){var z=pt(e,d,31)+257,D=pt(e,d+10,15)+4,$=z+pt(e,d+5,31)+1;d+=14;for(var P=new Ue($),H=new Ue(19),U=0;U<D;++U)H[S0[U]]=pt(e,d+U*3,7);d+=D*3;for(var ae=ei(H),J=(1<<ae)-1,Z=bs(H,ae,1),U=0;U<$;){var G=Z[pt(e,d,J)];d+=G&15;var y=G>>4;if(y<16)P[U++]=y;else{var Pe=0,le=0;for(y==16?(le=3+pt(e,d,3),d+=2,Pe=P[U-1]):y==17?(le=3+pt(e,d,7),d+=3):y==18&&(le=11+pt(e,d,127),d+=7);le--;)P[U++]=Pe}}var he=P.subarray(0,z),te=P.subarray(z);h=ei(he),w=ei(te),v=bs(he,h,1),g=bs(te,w,1)}else lt(1);else{var y=x0(d)+4,L=e[y-4]|e[y-3]<<8,O=y+L;if(O>a){r&&lt(0);break}l&&u(p+L),n.set(e.subarray(y,O),p),t.b=p+=L,t.p=d=O*8,t.f=c;continue}if(d>S){r&&lt(0);break}}l&&u(p+131072);for(var ut=(1<<h)-1,At=(1<<w)-1,Ge=d;;Ge=d){var Pe=v[ti(e,d)&ut],xe=Pe>>4;if(d+=Pe&15,d>S){r&&lt(0);break}if(Pe||lt(2),xe<256)n[p++]=xe;else if(xe==256){Ge=d,v=null;break}else{var Pt=xe-254;if(xe>264){var U=xe-257,st=du[U];Pt=pt(e,d,(1<<st)-1)+gu[U],d+=st}var Ft=g[ti(e,d)&At],De=Ft>>4;Ft||lt(3),d+=Ft&15;var te=T0[De];if(De>3){var st=pu[De];te+=ti(e,d)&(1<<st)-1,d+=st}if(d>S){r&&lt(0);break}l&&u(p+131072);var T=p+Pt;if(p<te){var q=i-te,V=Math.min(te,T);for(q+p<0&&lt(3);p<V;++p)n[p]=s[q+p]}for(;p<T;p+=4)n[p]=n[p-te],n[p+1]=n[p+1-te],n[p+2]=n[p+2-te],n[p+3]=n[p+3-te];p=T}}t.l=v,t.p=Ge,t.b=p,t.f=c,v&&(c=1,t.m=h,t.d=g,t.n=w)}while(!c);return p==n.length?n:hl(n,0,p)},R0=new Ue(0),B0=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&lt(6,"invalid zlib data"),(e[1]>>5&1)==+!t&&lt(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function M0(e,t){return D0(e.subarray(B0(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var Qr=typeof TextEncoder<"u"&&new TextEncoder,Ti=typeof TextDecoder<"u"&&new TextDecoder,$0=0;try{Ti.decode(R0,{stream:!0}),$0=1}catch{}var V0=function(e){for(var t="",n=0;;){var s=e[n++],a=(s>127)+(s>223)+(s>239);if(n+a>e.length)return{s:t,r:hl(e,n-1)};a?a==3?(s=((s&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|s>>10,56320|s&1023)):a&1?t+=String.fromCharCode((s&31)<<6|e[n++]&63):t+=String.fromCharCode((s&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(s)}};function j0(e,t){if(t){for(var n=new Ue(e.length),s=0;s<e.length;++s)n[s]=e.charCodeAt(s);return n}if(Qr)return Qr.encode(e);for(var a=e.length,i=new Ue(e.length+(e.length>>1)),l=0,r=function(d){i[l++]=d},s=0;s<a;++s){if(l+5>i.length){var u=new Ue(l+8+(a-s<<1));u.set(i),i=u}var c=e.charCodeAt(s);c<128||t?r(c):c<2048?(r(192|c>>6),r(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|e.charCodeAt(++s)&1023,r(240|c>>18),r(128|c>>12&63),r(128|c>>6&63),r(128|c&63)):(r(224|c>>12),r(128|c>>6&63),r(128|c&63))}return hl(i,0,l)}function F0(e,t){if(t){for(var n="",s=0;s<e.length;s+=16384)n+=String.fromCharCode.apply(null,e.subarray(s,s+16384));return n}else{if(Ti)return Ti.decode(e);var a=V0(e),i=a.s,n=a.r;return n.length&&lt(8),i}}const ie=({name:e="",color:t="currentColor"},{slots:n})=>{var s;return o("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:t,"aria-label":`${e} icon`},(s=n.default)==null?void 0:s.call(n))};ie.displayName="IconBase";const ln=({size:e=48,stroke:t=4,wrapper:n=!0,height:s=2*e})=>{const a=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[o("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),o("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round"},[o("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),o("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return n?o("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${s}px`},a):a};ln.displayName="LoadingIcon";const bu=(e,{slots:t})=>{var n;return(n=t.default)==null?void 0:n.call(t)},kl=(e="")=>{if(e){if(typeof e=="number")return new Date(e);const t=Date.parse(e.toString());if(!Number.isNaN(t))return new Date(t)}return null},Ma=(e,t)=>{let n=1;for(let s=0;s<e.length;s++)n+=e.charCodeAt(s),n+=n<<10,n^=n>>6;return n+=n<<3,n^=n>>11,n%t},yl=Array.isArray,N0=e=>typeof e=="function",q0=e=>typeof e=="string";var z0=e=>e.startsWith("ftp://"),_l=e=>/^(https?:)?\/\//.test(e),H0=/.md((\?|#).*)?$/,U0=(e,t="/")=>!!(_l(e)||z0(e)||e.startsWith("/")&&!e.startsWith(t)&&!H0.test(e)),hs=e=>Object.prototype.toString.call(e)==="[object Object]";function J0(){const e=F(!1);return an()&&pe(()=>{e.value=!0}),e}function G0(e){return J0(),A(()=>!!e())}const K0=e=>typeof e=="function",Bt=e=>typeof e=="string",Kn=(e,t)=>Bt(e)&&e.startsWith(t),Sn=(e,t)=>Bt(e)&&e.endsWith(t),ts=Object.entries,W0=Object.fromEntries,nt=Object.keys,Xr=(e,...t)=>{if(t.length===0)return e;const n=t.shift()||null;return n&&ts(n).forEach(([s,a])=>{s==="__proto__"||s==="constructor"||(hs(e[s])&&hs(a)?Xr(e[s],a):yl(a)?e[s]=[...a]:hs(a)?e[s]={...a}:e[s]=n[s])}),Xr(e,...t)},Q0=e=>(e.endsWith(".md")&&(e=`${e.slice(0,-3)}.html`),!e.endsWith("/")&&!e.endsWith(".html")&&(e=`${e}.html`),e=e.replace(/(^|\/)(?:README|index).html$/i,"$1"),e),hu=e=>{const[t,n=""]=e.split("#");return t?`${Q0(t)}${n?`#${n}`:""}`:e},Yr=e=>hs(e)&&Bt(e.name),Ts=(e,t=!1)=>e?yl(e)?e.map(n=>Bt(n)?{name:n}:Yr(n)?n:null).filter(n=>n!==null):Bt(e)?[{name:e}]:Yr(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t?"":"| false"} | undefined\`, but got`,e),[]):[],ku=(e,t)=>{if(e){if(yl(e)&&e.every(Bt))return e;if(Bt(e))return[e];console.error(`Expect ${t||"value"} to be \`string[] | string | undefined\`, but got`,e)}return[]},yu=e=>ku(e,"category"),_u=e=>ku(e,"tag"),$a=e=>Kn(e,"/");let X0=class{constructor(){Na(this,"containerElement");Na(this,"messageElements",{});const t="message-container",n=document.getElementById(t);n?this.containerElement=n:(this.containerElement=document.createElement("div"),this.containerElement.id=t,document.body.appendChild(this.containerElement))}pop(t,n=2e3){const s=document.createElement("div"),a=Date.now();return s.className="message move-in",s.innerHTML=t,this.containerElement.appendChild(s),this.messageElements[a]=s,n>0&&setTimeout(()=>{this.close(a)},n),a}close(t){if(t){const n=this.messageElements[t];n.classList.remove("move-in"),n.classList.add("move-out"),n.addEventListener("animationend",()=>{n.remove(),delete this.messageElements[t]})}else nt(this.messageElements).forEach(n=>this.close(Number(n)))}destroy(){document.body.removeChild(this.containerElement)}};const Eu=/#.*$/u,Y0=e=>{const t=Eu.exec(e);return t?t[0]:""},Zr=e=>decodeURI(e).replace(Eu,"").replace(/(index)?\.(md|html)$/,""),El=(e,t)=>{if(t===void 0)return!1;const n=Zr(e.path),s=Zr(t),a=Y0(t);return a?a===e.hash&&(!s||n===s):n===s},hn=e=>{const t=atob(e);return F0(M0(j0(t,!0)))},Z0=e=>_l(e)?e:`https://github.com/${e}`,Au=e=>!_l(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,Wn=(e,...t)=>{const n=e.resolve(...t),s=n.matched[n.matched.length-1];if(!(s!=null&&s.redirect))return n;const{redirect:a}=s,i=N0(a)?a(n):a,l=q0(i)?{path:i}:i;return Wn(e,{hash:n.hash,query:n.query,params:n.params,...l})},e2=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget){const t=e.currentTarget.getAttribute("target");if(t!=null&&t.match(/\b_blank\b/i))return}return e.preventDefault(),!0}},$e=({to:e=""},{slots:t})=>{var n;const s=qe(),a=(i={})=>e2(i)?s.push(e).catch():Promise.resolve();return o("a",{class:"vp-link",href:Te(hu(e)),onClick:a},(n=t.default)==null?void 0:n.call(t))};$e.displayName="VPLink";const wu=()=>o(ie,{name:"github"},()=>o("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));wu.displayName="GitHubIcon";const Su=()=>o(ie,{name:"gitlab"},()=>o("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));Su.displayName="GitLabIcon";const Iu=()=>o(ie,{name:"gitee"},()=>o("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Iu.displayName="GiteeIcon";const Pu=()=>o(ie,{name:"bitbucket"},()=>o("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));Pu.displayName="BitbucketIcon";const Tu=()=>o(ie,{name:"source"},()=>o("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));Tu.displayName="SourceIcon";const ht=(e,t)=>{const n=t?t._instance:an();return hs(n==null?void 0:n.appContext.components)&&(e in n.appContext.components||ot(e)in n.appContext.components||Os(ot(e))in n.appContext.components)},t2=()=>G0(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),n2=()=>{const e=t2();return A(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},ns=e=>{const t=Vt();return A(()=>e[t.value])};var s2=Object.defineProperty,a2=Object.defineProperties,i2=Object.getOwnPropertyDescriptors,eo=Object.getOwnPropertySymbols,l2=Object.prototype.hasOwnProperty,r2=Object.prototype.propertyIsEnumerable,to=(e,t,n)=>t in e?s2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o2=(e,t)=>{for(var n in t||(t={}))l2.call(t,n)&&to(e,n,t[n]);if(eo)for(var n of eo(t))r2.call(t,n)&&to(e,n,t[n]);return e},c2=(e,t)=>a2(e,i2(t));function no(e,t){var n;const s=Ce();return dc(()=>{s.value=e()},c2(o2({},t),{flush:(n=t==null?void 0:t.flush)!=null?n:"sync"})),Mt(s)}function yt(e){return Ho()?(Op(e),!0):!1}function Ne(e){return typeof e=="function"?e():gn(e)}const kn=typeof window<"u",nn=()=>{},Ci=u2();function u2(){var e;return kn&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Al(e,t){function n(...s){return new Promise((a,i)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(a).catch(i)})}return n}const Cu=e=>e();function d2(e,t={}){let n,s,a=nn;const i=r=>{clearTimeout(r),a(),a=nn};return r=>{const u=Ne(e),c=Ne(t.maxWait);return n&&i(n),u<=0||c!==void 0&&c<=0?(s&&(i(s),s=null),Promise.resolve(r())):new Promise((d,p)=>{a=t.rejectOnCancel?p:d,c&&!s&&(s=setTimeout(()=>{n&&i(n),s=null,d(r())},c)),n=setTimeout(()=>{s&&i(s),s=null,d(r())},u)})}}function p2(e,t=!0,n=!0,s=!1){let a=0,i,l=!0,r=nn,u;const c=()=>{i&&(clearTimeout(i),i=void 0,r(),r=nn)};return p=>{const v=Ne(e),g=Date.now()-a,h=()=>u=p();return c(),v<=0?(a=Date.now(),h()):(g>v&&(n||!l)?(a=Date.now(),h()):t&&(u=new Promise((w,S)=>{r=s?S:w,i=setTimeout(()=>{a=Date.now(),l=!0,w(h()),c()},Math.max(0,v-g))})),!n&&!i&&(i=setTimeout(()=>l=!0,v)),l=!1,u)}}function v2(e=Cu){const t=F(!0);function n(){t.value=!1}function s(){t.value=!0}const a=(...i)=>{t.value&&e(...i)};return{isActive:Mt(t),pause:n,resume:s,eventFilter:a}}function Lu(...e){if(e.length!==1)return es(...e);const t=e[0];return typeof t=="function"?Mt(cv(()=>({get:t,set:nn}))):F(t)}function xu(e,t=200,n={}){return Al(d2(t,n),e)}function m2(e,t=200,n=!1,s=!0,a=!1){return Al(p2(t,n,s,a),e)}function wl(e,t=!0){an()?pe(e):t?e():sn(e)}function g2(e){an()&&_n(e)}function f2(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:a=!1}=n;let i=null;const l=F(!1);function r(){i&&(clearInterval(i),i=null)}function u(){l.value=!1,r()}function c(){const d=Ne(t);d<=0||(l.value=!0,a&&e(),r(),i=setInterval(e,d))}if(s&&kn&&c(),Be(t)||typeof t=="function"){const d=se(t,()=>{l.value&&kn&&c()});yt(d)}return yt(u),{isActive:l,pause:u,resume:c}}function b2(e,t,n={}){const{immediate:s=!0}=n,a=F(!1);let i=null;function l(){i&&(clearTimeout(i),i=null)}function r(){a.value=!1,l()}function u(...c){l(),a.value=!0,i=setTimeout(()=>{a.value=!1,i=null,e(...c)},Ne(t))}return s&&(a.value=!0,kn&&u()),yt(r),{isPending:Mt(a),start:u,stop:r}}function Li(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,a=Be(e),i=F(e);function l(r){if(arguments.length)return i.value=r,i.value;{const u=Ne(n);return i.value=i.value===u?Ne(s):u,i.value}}return a?l:[i,l]}var so=Object.getOwnPropertySymbols,h2=Object.prototype.hasOwnProperty,k2=Object.prototype.propertyIsEnumerable,y2=(e,t)=>{var n={};for(var s in e)h2.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&so)for(var s of so(e))t.indexOf(s)<0&&k2.call(e,s)&&(n[s]=e[s]);return n};function _2(e,t,n={}){const s=n,{eventFilter:a=Cu}=s,i=y2(s,["eventFilter"]);return se(e,Al(a,t),i)}var E2=Object.defineProperty,A2=Object.defineProperties,w2=Object.getOwnPropertyDescriptors,Aa=Object.getOwnPropertySymbols,Ou=Object.prototype.hasOwnProperty,Du=Object.prototype.propertyIsEnumerable,ao=(e,t,n)=>t in e?E2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S2=(e,t)=>{for(var n in t||(t={}))Ou.call(t,n)&&ao(e,n,t[n]);if(Aa)for(var n of Aa(t))Du.call(t,n)&&ao(e,n,t[n]);return e},I2=(e,t)=>A2(e,w2(t)),P2=(e,t)=>{var n={};for(var s in e)Ou.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Aa)for(var s of Aa(e))t.indexOf(s)<0&&Du.call(e,s)&&(n[s]=e[s]);return n};function T2(e,t,n={}){const s=n,{eventFilter:a}=s,i=P2(s,["eventFilter"]),{eventFilter:l,pause:r,resume:u,isActive:c}=v2(a);return{stop:_2(e,t,I2(S2({},i),{eventFilter:l})),pause:r,resume:u,isActive:c}}function Ze(e){var t;const n=Ne(e);return(t=n==null?void 0:n.$el)!=null?t:n}const ct=kn?window:void 0,Sl=kn?window.document:void 0,C2=kn?window.navigator:void 0;function Ve(...e){let t,n,s,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,a]=e,t=ct):[t,n,s,a]=e,!t)return nn;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const i=[],l=()=>{i.forEach(d=>d()),i.length=0},r=(d,p,v,g)=>(d.addEventListener(p,v,g),()=>d.removeEventListener(p,v,g)),u=se(()=>[Ze(t),Ne(a)],([d,p])=>{l(),d&&i.push(...n.flatMap(v=>s.map(g=>r(d,v,g,p))))},{immediate:!0,flush:"post"}),c=()=>{u(),l()};return yt(c),c}let io=!1;function L2(e,t,n={}){const{window:s=ct,ignore:a=[],capture:i=!0,detectIframe:l=!1}=n;if(!s)return;Ci&&!io&&(io=!0,Array.from(s.document.body.children).forEach(v=>v.addEventListener("click",nn)));let r=!0;const u=v=>a.some(g=>{if(typeof g=="string")return Array.from(s.document.querySelectorAll(g)).some(h=>h===v.target||v.composedPath().includes(h));{const h=Ze(g);return h&&(v.target===h||v.composedPath().includes(h))}}),d=[Ve(s,"click",v=>{const g=Ze(e);if(!(!g||g===v.target||v.composedPath().includes(g))){if(v.detail===0&&(r=!u(v)),!r){r=!0;return}t(v)}},{passive:!0,capture:i}),Ve(s,"pointerdown",v=>{const g=Ze(e);g&&(r=!v.composedPath().includes(g)&&!u(v))},{passive:!0}),l&&Ve(s,"blur",v=>{setTimeout(()=>{var g;const h=Ze(e);((g=s.document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!(h!=null&&h.contains(s.document.activeElement))&&t(v)},0)})].filter(Boolean);return()=>d.forEach(v=>v())}function x2(){const e=F(!1);return an()&&pe(()=>{e.value=!0}),e}function js(e){const t=x2();return A(()=>(t.value,!!e()))}function O2(e,t={}){const{immediate:n=!0,window:s=ct}=t,a=F(!1);let i=0,l=null;function r(d){if(!a.value||!s)return;const p=d-(i||d);e({delta:p,timestamp:d}),i=d,l=s.requestAnimationFrame(r)}function u(){!a.value&&s&&(a.value=!0,l=s.requestAnimationFrame(r))}function c(){a.value=!1,l!=null&&s&&(s.cancelAnimationFrame(l),l=null)}return n&&u(),yt(c),{isActive:Mt(a),pause:c,resume:u}}function Ru(e,t={}){const{window:n=ct}=t,s=js(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const i=F(!1),l=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",r):a.removeListener(r))},r=()=>{s.value&&(l(),a=n.matchMedia(Lu(e).value),i.value=!!(a!=null&&a.matches),a&&("addEventListener"in a?a.addEventListener("change",r):a.addListener(r)))};return dc(r),yt(()=>l()),i}function D2(e={}){const{navigator:t=C2,read:n=!1,source:s,copiedDuring:a=1500,legacy:i=!1}=e,l=["copy","cut"],r=js(()=>t&&"clipboard"in t),u=A(()=>r.value||i),c=F(""),d=F(!1),p=b2(()=>d.value=!1,a);function v(){r.value?t.clipboard.readText().then(S=>{c.value=S}):c.value=w()}if(u.value&&n)for(const S of l)Ve(S,v);async function g(S=Ne(s)){u.value&&S!=null&&(r.value?await t.clipboard.writeText(S):h(S),c.value=S,d.value=!0,p.start())}function h(S){const b=document.createElement("textarea");b.value=S??"",b.style.position="absolute",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),b.remove()}function w(){var S,b,y;return(y=(b=(S=document==null?void 0:document.getSelection)==null?void 0:S.call(document))==null?void 0:b.toString())!=null?y:""}return{isSupported:u,text:c,copied:d,copy:g}}const na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sa="__vueuse_ssr_handlers__",R2=B2();function B2(){return sa in na||(na[sa]=na[sa]||{}),na[sa]}function M2(e,t){return R2[e]||t}function $2(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var V2=Object.defineProperty,lo=Object.getOwnPropertySymbols,j2=Object.prototype.hasOwnProperty,F2=Object.prototype.propertyIsEnumerable,ro=(e,t,n)=>t in e?V2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,oo=(e,t)=>{for(var n in t||(t={}))j2.call(t,n)&&ro(e,n,t[n]);if(lo)for(var n of lo(t))F2.call(t,n)&&ro(e,n,t[n]);return e};const N2={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},co="vueuse-storage";function ss(e,t,n,s={}){var a;const{flush:i="pre",deep:l=!0,listenToStorageChanges:r=!0,writeDefaults:u=!0,mergeDefaults:c=!1,shallow:d,window:p=ct,eventFilter:v,onError:g=P=>{console.error(P)}}=s,h=(d?Ce:F)(t);if(!n)try{n=M2("getDefaultStorage",()=>{var P;return(P=ct)==null?void 0:P.localStorage})()}catch(P){g(P)}if(!n)return h;const w=Ne(t),S=$2(w),b=(a=s.serializer)!=null?a:N2[S],{pause:y,resume:L}=T2(h,()=>O(h.value),{flush:i,deep:l,eventFilter:v});return p&&r&&(Ve(p,"storage",$),Ve(p,co,D)),$(),h;function O(P){try{if(P==null)n.removeItem(e);else{const H=b.write(P),U=n.getItem(e);U!==H&&(n.setItem(e,H),p&&p.dispatchEvent(new CustomEvent(co,{detail:{key:e,oldValue:U,newValue:H,storageArea:n}})))}}catch(H){g(H)}}function z(P){const H=P?P.newValue:n.getItem(e);if(H==null)return u&&w!==null&&n.setItem(e,b.write(w)),w;if(!P&&c){const U=b.read(H);return typeof c=="function"?c(U,w):S==="object"&&!Array.isArray(U)?oo(oo({},w),U):U}else return typeof H!="string"?H:b.read(H)}function D(P){$(P.detail)}function $(P){if(!(P&&P.storageArea!==n)){if(P&&P.key==null){h.value=w;return}if(!(P&&P.key!==e)){y();try{h.value=z(P)}catch(H){g(H)}finally{P?sn(L):L()}}}}}function q2(e){return Ru("(prefers-color-scheme: dark)",e)}var uo=Object.getOwnPropertySymbols,z2=Object.prototype.hasOwnProperty,H2=Object.prototype.propertyIsEnumerable,U2=(e,t)=>{var n={};for(var s in e)z2.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&uo)for(var s of uo(e))t.indexOf(s)<0&&H2.call(e,s)&&(n[s]=e[s]);return n};function Bu(e,t,n={}){const s=n,{window:a=ct}=s,i=U2(s,["window"]);let l;const r=js(()=>a&&"MutationObserver"in a),u=()=>{l&&(l.disconnect(),l=void 0)},c=se(()=>Ze(e),p=>{u(),r.value&&a&&p&&(l=new MutationObserver(t),l.observe(p,i))},{immediate:!0}),d=()=>{u(),c()};return yt(d),{isSupported:r,stop:d}}var po=Object.getOwnPropertySymbols,J2=Object.prototype.hasOwnProperty,G2=Object.prototype.propertyIsEnumerable,K2=(e,t)=>{var n={};for(var s in e)J2.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&po)for(var s of po(e))t.indexOf(s)<0&&G2.call(e,s)&&(n[s]=e[s]);return n};function W2(e,t,n={}){const s=n,{window:a=ct}=s,i=K2(s,["window"]);let l;const r=js(()=>a&&"ResizeObserver"in a),u=()=>{l&&(l.disconnect(),l=void 0)},c=A(()=>Array.isArray(e)?e.map(v=>Ze(v)):[Ze(e)]),d=se(c,v=>{if(u(),r.value&&a){l=new ResizeObserver(t);for(const g of v)g&&l.observe(g,i)}},{immediate:!0,flush:"post",deep:!0}),p=()=>{u(),d()};return yt(p),{isSupported:r,stop:p}}function Q2(e,t={width:0,height:0},n={}){const{window:s=ct,box:a="content-box"}=n,i=A(()=>{var u,c;return(c=(u=Ze(e))==null?void 0:u.namespaceURI)==null?void 0:c.includes("svg")}),l=F(t.width),r=F(t.height);return W2(e,([u])=>{const c=a==="border-box"?u.borderBoxSize:a==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(s&&i.value){const d=Ze(e);if(d){const p=s.getComputedStyle(d);l.value=Number.parseFloat(p.width),r.value=Number.parseFloat(p.height)}}else if(c){const d=Array.isArray(c)?c:[c];l.value=d.reduce((p,{inlineSize:v})=>p+v,0),r.value=d.reduce((p,{blockSize:v})=>p+v,0)}else l.value=u.contentRect.width,r.value=u.contentRect.height},n),se(()=>Ze(e),u=>{l.value=u?t.width:0,r.value=u?t.height:0}),{width:l,height:r}}const vo=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Il(e,t={}){const{document:n=Sl,autoExit:s=!1}=t,a=A(()=>{var b;return(b=Ze(e))!=null?b:n==null?void 0:n.querySelector("html")}),i=F(!1),l=A(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(b=>n&&b in n||a.value&&b in a.value)),r=A(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(b=>n&&b in n||a.value&&b in a.value)),u=A(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(b=>n&&b in n||a.value&&b in a.value)),c=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(b=>n&&b in n),d=js(()=>a.value&&n&&l.value!==void 0&&r.value!==void 0&&u.value!==void 0),p=()=>c?(n==null?void 0:n[c])===a.value:!1,v=()=>{if(u.value){if(n&&n[u.value]!=null)return n[u.value];{const b=a.value;if((b==null?void 0:b[u.value])!=null)return!!b[u.value]}}return!1};async function g(){if(!(!d.value||!i.value)){if(r.value)if((n==null?void 0:n[r.value])!=null)await n[r.value]();else{const b=a.value;(b==null?void 0:b[r.value])!=null&&await b[r.value]()}i.value=!1}}async function h(){if(!d.value||i.value)return;v()&&await g();const b=a.value;l.value&&(b==null?void 0:b[l.value])!=null&&(await b[l.value](),i.value=!0)}async function w(){await(i.value?g():h())}const S=()=>{const b=v();(!b||b&&p())&&(i.value=b)};return Ve(n,vo,S,!1),Ve(()=>Ze(a),vo,S,!1),s&&yt(g),{isSupported:d,isFullscreen:i,enter:h,exit:g,toggle:w}}var X2=Object.defineProperty,mo=Object.getOwnPropertySymbols,Y2=Object.prototype.hasOwnProperty,Z2=Object.prototype.propertyIsEnumerable,go=(e,t,n)=>t in e?X2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,eg=(e,t)=>{for(var n in t||(t={}))Y2.call(t,n)&&go(e,n,t[n]);if(mo)for(var n of mo(t))Z2.call(t,n)&&go(e,n,t[n]);return e};function V4(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,s=F(new Date),a=()=>s.value=new Date,i=n==="requestAnimationFrame"?O2(a,{immediate:!0}):f2(a,n,{immediate:!0});return t?eg({now:s},i):s}function ni(e,t=nn,n={}){const{immediate:s=!0,manual:a=!1,type:i="text/javascript",async:l=!0,crossOrigin:r,referrerPolicy:u,noModule:c,defer:d,document:p=Sl,attrs:v={}}=n,g=F(null);let h=null;const w=y=>new Promise((L,O)=>{const z=P=>(g.value=P,L(P),P);if(!p){L(!1);return}let D=!1,$=p.querySelector(`script[src="${Ne(e)}"]`);$?$.hasAttribute("data-loaded")&&z($):($=p.createElement("script"),$.type=i,$.async=l,$.src=Ne(e),d&&($.defer=d),r&&($.crossOrigin=r),c&&($.noModule=c),u&&($.referrerPolicy=u),Object.entries(v).forEach(([P,H])=>$==null?void 0:$.setAttribute(P,H)),D=!0),$.addEventListener("error",P=>O(P)),$.addEventListener("abort",P=>O(P)),$.addEventListener("load",()=>{$.setAttribute("data-loaded","true"),t($),z($)}),D&&($=p.head.appendChild($)),y||z($)}),S=(y=!0)=>(h||(h=w(y)),h),b=()=>{if(!p)return;h=null,g.value&&(g.value=null);const y=p.querySelector(`script[src="${Ne(e)}"]`);y&&p.head.removeChild(y)};return s&&!a&&wl(S),a||g2(b),{scriptTag:g,load:S,unload:b}}function Mu(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:Mu(n)}}function tg(e){const t=e||window.event,n=t.target;return Mu(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}function $u(e,t=!1){const n=F(t);let s=null,a;se(Lu(e),r=>{if(r){const u=r;a=u.style.overflow,n.value&&(u.style.overflow="hidden")}},{immediate:!0});const i=()=>{const r=Ne(e);!r||n.value||(Ci&&(s=Ve(r,"touchmove",u=>{tg(u)},{passive:!1})),r.style.overflow="hidden",n.value=!0)},l=()=>{const r=Ne(e);!r||!n.value||(Ci&&(s==null||s()),r.style.overflow=a,n.value=!1)};return yt(l),A({get(){return n.value},set(r){r?i():l()}})}function Vu(e,t,n={}){const{window:s=ct}=n;return ss(e,t,s==null?void 0:s.sessionStorage,n)}let ng=0;function j4(e,t={}){const n=F(!1),{document:s=Sl,immediate:a=!0,manual:i=!1,id:l=`vueuse_styletag_${++ng}`}=t,r=F(e);let u=()=>{};const c=()=>{if(!s)return;const p=s.getElementById(l)||s.createElement("style");p.isConnected||(p.type="text/css",p.id=l,t.media&&(p.media=t.media),s.head.appendChild(p)),!n.value&&(u=se(r,v=>{p.textContent=v},{immediate:!0}),n.value=!0)},d=()=>{!s||!n.value||(u(),s.head.removeChild(s.getElementById(l)),n.value=!1)};return a&&!i&&wl(c),i||yt(d),{id:l,css:r,unload:d,load:c,isLoaded:Mt(n)}}function sg({window:e=ct}={}){if(!e)return{x:F(0),y:F(0)};const t=F(e.scrollX),n=F(e.scrollY);return Ve(e,"scroll",()=>{t.value=e.scrollX,n.value=e.scrollY},{capture:!1,passive:!0}),{x:t,y:n}}function ag(e={}){const{window:t=ct,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:a=!0,includeScrollbar:i=!0}=e,l=F(n),r=F(s),u=()=>{t&&(i?(l.value=t.innerWidth,r.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,r.value=t.document.documentElement.clientHeight))};if(u(),wl(u),Ve("resize",u,{passive:!0}),a){const c=Ru("(orientation: portrait)");se(c,()=>u())}return{width:l,height:r}}const ju=({type:e="info",text:t="",vertical:n,color:s},{slots:a})=>{var i;return o("span",{class:["vp-badge",e,{diy:s}],style:{verticalAlign:n??!1,backgroundColor:s??!1}},((i=a.default)==null?void 0:i.call(a))||t)};ju.displayName="Badge";var ig=B({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const t=A(()=>{const s=["font-icon icon"],a=`fas fa-${e.icon}`;return s.push("fa-fw fa-sm"),s.push(e.icon.includes(" ")?e.icon:a),s}),n=A(()=>{const s={};return e.color&&(s.color=e.color),e.size&&(s["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),nt(s).length?s:null});return()=>e.icon?o("span",{key:e.icon,class:t.value,style:n.value}):null}});const Fu=()=>o(ie,{name:"back-to-top"},()=>[o("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),o("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);Fu.displayName="BackToTopIcon";var lg=B({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(e){const t=ke(),n=ns({"/":{backToTop:"返回顶部"}}),s=Ce(),{height:a}=Q2(s),{height:i}=ag(),{y:l}=sg(),r=A(()=>t.value.backToTop!==!1&&l.value>e.threshold),u=A(()=>l.value/(a.value-i.value));return pe(()=>{s.value=document.body}),()=>o(en,{name:"fade"},()=>r.value?o("button",{type:"button",class:"vp-back-to-top-button","aria-label":n.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[e.noProgress?null:o("svg",{class:"vp-scroll-progress"},o("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*u.value*100}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}})),o(Fu)]):null)}});const rg=_t({enhance:({app:e})=>{ht("Badge")||e.component("Badge",ju),ht("FontIcon")||e.component("FontIcon",ig)},setup:()=>{ni("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),ni("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),ni("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}})},rootComponents:[()=>o(lg,{})]});function og(e,t,n){var s,a,i;t===void 0&&(t=50),n===void 0&&(n={});var l=(s=n.isImmediate)!=null&&s,r=(a=n.callback)!=null&&a,u=n.maxWait,c=Date.now(),d=[];function p(){if(u!==void 0){var g=Date.now()-c;if(g+t>=u)return u-g}return t}var v=function(){var g=[].slice.call(arguments),h=this;return new Promise(function(w,S){var b=l&&i===void 0;if(i!==void 0&&clearTimeout(i),i=setTimeout(function(){if(i=void 0,c=Date.now(),!l){var L=e.apply(h,g);r&&r(L),d.forEach(function(O){return(0,O.resolve)(L)}),d=[]}},p()),b){var y=e.apply(h,g);return r&&r(y),w(y)}d.push({resolve:w,reject:S})})};return v.cancel=function(g){i!==void 0&&clearTimeout(i),d.forEach(function(h){return(0,h.reject)(g)}),d=[]},v}const cg=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:s=5})=>{const a=qe(),l=og(()=>{var w,S;const r=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(r-0)<s){fo(a,"");return}const c=window.innerHeight+r,d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),p=Math.abs(d-c)<s,v=Array.from(document.querySelectorAll(e)),h=Array.from(document.querySelectorAll(t)).filter(b=>v.some(y=>y.hash===b.hash));for(let b=0;b<h.length;b++){const y=h[b],L=h[b+1],O=r>=(((w=y.parentElement)==null?void 0:w.offsetTop)??0)-s,z=!L||r<(((S=L.parentElement)==null?void 0:S.offsetTop)??0)-s;if(!(O&&z))continue;const $=decodeURIComponent(a.currentRoute.value.hash),P=decodeURIComponent(y.hash);if($===P)return;if(p){for(let H=b+1;H<h.length;H++)if($===decodeURIComponent(h[H].hash))return}fo(a,P);return}},n);pe(()=>{window.addEventListener("scroll",l)}),rl(()=>{window.removeEventListener("scroll",l)})},fo=async(e,t)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace({query:e.currentRoute.value.query,hash:t}).finally(()=>e.options.scrollBehavior=n)},ug=".vp-sidebar-link, .toc-link",dg=".header-anchor",pg=200,vg=5,mg=_t({setup(){cg({headerLinkSelector:ug,headerAnchorSelector:dg,delay:pg,offset:vg})}});let Nu=()=>null;const qu=Symbol(""),gg=e=>{Nu=e},fg=()=>fe(qu),bg=e=>{e.provide(qu,Nu)};var hg=B({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean},setup(e){const t=fg(),n=ns({"/":{title:"目录",empty:"暂无目录"}}),s=ue(),a=qe(),i=Yc(),l=c=>{const d=c.I;return typeof d>"u"||d},r=()=>{const c=e.base||s.value.path.replace(/\/[^/]+$/,"/"),d=a.getRoutes(),p=[];return d.filter(({meta:v,path:g})=>{if(!Kn(g,c)||g===c)return!1;if(c==="/"){const h=nt(i.value.locales).filter(w=>w!=="/");if(g==="/404.html"||h.some(w=>Kn(g,w)))return!1}return(Sn(g,".html")&&!Sn(g,"/index.html")||Sn(g,"/"))&&l(v)}).map(({path:v,meta:g})=>{const h=v.substring(c.length).split("/").length;return{title:g.t||"",icon:g.i,base:v.replace(/\/[^/]+\/?$/,"/"),order:g.O||null,level:Sn(v,"/")?h-1:h,path:v}}).filter(({title:v,level:g})=>v&&g<=e.level).sort(({title:v,level:g,path:h,order:w},{title:S,level:b,path:y,order:L})=>g-b||(Sn(h,"/index.html")?-1:Sn(y,"/index.html")?1:w===null?L===null?v.localeCompare(S):L:L===null?w:w>0?L>0?w-L:-1:L<0?w-L:1)).forEach(v=>{var g;const{base:h,level:w}=v;switch(w){case 1:p.push(v);break;case 2:{const S=p.find(b=>b.path===h);S&&(S.children??(S.children=[])).push(v);break}default:{const S=p.find(b=>b.path===h.replace(/\/[^/]+\/$/,"/"));if(S){const b=(g=S.children)==null?void 0:g.find(y=>y.path===h);b&&(b.children??(b.children=[])).push(v)}}}}),p},u=A(()=>r());return()=>o("div",{class:"vp-catalog"},[o("h2",{class:"vp-catalog-main-title"},n.value.title),u.value.length?u.value.map(({children:c=[],icon:d,path:p,title:v},g)=>[o("h3",{id:v,class:["vp-catalog-child-title",{"has-children":c.length}]},[o("a",{href:`#${v}`,class:"header-anchor","aria-hidden":!0},"#"),o($e,{class:"vp-catalog-title",to:p},()=>[e.index?`${g+1}.`:null,d&&t?o(t,{icon:d}):null,v||p])]),c.length?o("ul",{class:"vp-catalog-child-catalogs"},c.map(({children:h=[],icon:w,path:S,title:b},y)=>o("li",{class:"vp-child-catalog"},[o("div",{class:["vp-catalog-sub-title",{"has-children":h.length}]},[o("a",{href:`#${b}`,class:"header-anchor"},"#"),o($e,{class:"vp-catalog-title",to:S},()=>[e.index?`${g+1}.${y+1}`:null,w&&t?o(t,{icon:w}):null,b||S])]),h.length?o("div",{class:"v-sub-catalogs"},h.map(({icon:L,path:O,title:z},D)=>o($e,{class:"vp-sub-catalog",to:O},()=>[e.index?`${g+1}.${y+1}.${D+1}`:null,L&&t?o(t,{icon:L}):null,z||O]))):null]))):null]):o("p",{class:"vp-empty-catalog"},n.value.empty)])}}),kg=_t({enhance:({app:e})=>{bg(e),ht("AutoCatalog",e)||e.component("AutoCatalog",hg)}});const yg=o("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[o("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),o("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),zu=B({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const t=Vt(),n=A(()=>e.locales[t.value]??{openInNewWindow:"open in new window"});return()=>o("span",[yg,o("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}}),_g={},Eg=_t({enhance({app:e}){e.component("ExternalLinkIcon",o(zu,{locales:_g}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const me={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const t=me.isStarted();e=si(e,me.settings.minimum,1),me.status=e===1?null:e;const n=me.render(!t),s=n.querySelector(me.settings.barSelector),a=me.settings.speed,i=me.settings.easing;return n.offsetWidth,Ag(l=>{aa(s,{transform:"translate3d("+bo(e)+"%,0,0)",transition:"all "+a+"ms "+i}),e===1?(aa(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){aa(n,{transition:"all "+a+"ms linear",opacity:"0"}),setTimeout(function(){me.remove(),l()},a)},a)):setTimeout(()=>l(),a)}),me},isStarted:()=>typeof me.status=="number",start:()=>{me.status||me.set(0);const e=()=>{setTimeout(()=>{me.status&&(me.trickle(),e())},me.settings.trickleSpeed)};return me.settings.trickle&&e(),me},done:e=>!e&&!me.status?me:me.inc(.3+.5*Math.random()).set(1),inc:e=>{let t=me.status;return t?(typeof e!="number"&&(e=(1-t)*si(Math.random()*t,.1,.95)),t=si(t+e,0,.994),me.set(t)):me.start()},trickle:()=>me.inc(Math.random()*me.settings.trickleRate),render:e=>{if(me.isRendered())return document.getElementById("nprogress");ho(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=me.settings.template;const n=t.querySelector(me.settings.barSelector),s=e?"-100":bo(me.status||0),a=document.querySelector(me.settings.parent);return aa(n,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),a!==document.body&&ho(a,"nprogress-custom-parent"),a==null||a.appendChild(t),t},remove:()=>{ko(document.documentElement,"nprogress-busy"),ko(document.querySelector(me.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&wg(e)},isRendered:()=>!!document.getElementById("nprogress")},si=(e,t,n)=>e<t?t:e>n?n:e,bo=e=>(-1+e)*100,Ag=function(){const e=[];function t(){const n=e.shift();n&&n(t)}return function(n){e.push(n),e.length===1&&t()}}(),aa=function(){const e=["Webkit","O","Moz","ms"],t={};function n(l){return l.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(r,u){return u.toUpperCase()})}function s(l){const r=document.body.style;if(l in r)return l;let u=e.length;const c=l.charAt(0).toUpperCase()+l.slice(1);let d;for(;u--;)if(d=e[u]+c,d in r)return d;return l}function a(l){return l=n(l),t[l]??(t[l]=s(l))}function i(l,r,u){r=a(r),l.style[r]=u}return function(l,r){for(const u in r){const c=r[u];c!==void 0&&Object.prototype.hasOwnProperty.call(r,u)&&i(l,u,c)}}}(),Hu=(e,t)=>(typeof e=="string"?e:Pl(e)).indexOf(" "+t+" ")>=0,ho=(e,t)=>{const n=Pl(e),s=n+t;Hu(n,t)||(e.className=s.substring(1))},ko=(e,t)=>{const n=Pl(e);if(!Hu(e,t))return;const s=n.replace(" "+t+" "," ");e.className=s.substring(1,s.length-1)},Pl=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),wg=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)};const Sg=()=>{pe(()=>{const e=qe(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||me.start()}),e.afterEach(n=>{t.add(n.path),me.done()})})},Ig=_t({setup(){Sg()}}),Pg=JSON.parse('{"encrypt":{"config":{"/zh/demo/encrypt.html":["$2a$10$ClGtbz4GX9B2LxdYQ/V47.XSXMcw9QIwQJGuaCBjFXVJMKsrF6k92"]}},"author":{"name":"Alooc","url":"https://alooc.github.io"},"logo":"/logo.png","repo":"alooc","docsDir":"src","blog":{"medias":{"GitHub":"https://github.com/alooc"},"avatar":"/avatar.jpg","roundAvatar":false},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":[{"text":"首页","link":"/"},{"text":"培根","children":[{"text":"算法","icon":"pen-to-square","prefix":"/blog/algorithm/","children":[{"text":"基础","icon":"pen-to-square","link":"base/"}]}]},{"text":"归档","children":[{"text":"算法","link":"/blog/old/algorithm/"},{"text":"数据库","link":"/blog/old/database/"},{"text":"语言","link":"/blog/old/language/"},{"text":"技术","link":"/blog/old/beskill/"},{"text":"框架","link":"/blog/old/beframework/"},{"text":"前端","icon":"pen-to-square","prefix":"/blog/old/fe/","children":[{"text":"技术","icon":"pen-to-square","link":"skill/"},{"text":"框架","icon":"pen-to-square","link":"framework/"}]},{"text":"其他","link":"/blog/skill/"}]}],"sidebar":{"/zh/":["",{"text":"如何使用","icon":"laptop-code","prefix":"demo/","link":"demo/","children":"structure"},{"text":"文章","icon":"book","prefix":"posts/","children":"structure"},"intro","slides"]},"footer":"默认页脚","displayFooter":true,"blog":{"description":"一个前端开发者","intro":"/intro.html"}}}}'),Tg=F(Pg),Uu=()=>Tg,Ju=Symbol(""),Cg=()=>{const e=fe(Ju);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},Lg=(e,t)=>{const{locales:n,...s}=e;return{...s,...n==null?void 0:n[t]}},xg=_t({enhance({app:e}){const t=Uu(),n=e._context.provides[ml],s=A(()=>Lg(t.value,n.value));e.provide(Ju,s),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return s.value}}})}}),Og={"Content-Type":"application/json"},Dg=({serverURL:e,lang:t,paths:n,signal:s})=>(({serverURL:a,lang:i,paths:l,type:r,signal:u})=>fetch(`${a}/article?path=${encodeURIComponent(l.join(","))}&type=${encodeURIComponent(r.join(","))}&lang=${i}`,{signal:u}).then(c=>c.json()))({serverURL:e,lang:t,paths:n,type:["time"],signal:s}).then(a=>Array.isArray(a)?a:[a]),Rg=e=>(({serverURL:t,lang:n,path:s,type:a,action:i})=>fetch(`${t}/article?lang=${n}`,{method:"POST",headers:Og,body:JSON.stringify({path:s,type:a,action:i})}).then(l=>l.json()))({...e,type:"time",action:"inc"}),yo=e=>{const t=((n="")=>n.replace(/\/$/u,""))(e);return/^(https?:)?\/\//.test(t)?t:`https://${t}`},Bg=e=>{e.name!=="AbortError"&&console.error(e.message)},_o=e=>e.dataset.path||e.getAttribute("id"),Eo=(e,t)=>{t.forEach((n,s)=>{n.innerText=e[s].toString()})},Mg=({serverURL:e,path:t=window.location.pathname,selector:n=".waline-pageview-count",update:s=!0,lang:a=navigator.language})=>{const i=new AbortController,l=Array.from(document.querySelectorAll(n)),r=c=>{const d=_o(c);return d!==null&&t!==d},u=c=>Dg({serverURL:yo(e),paths:c.map(d=>_o(d)||t),lang:a,signal:i.signal}).then(d=>Eo(d,c)).catch(Bg);if(s){const c=l.filter(p=>!r(p)),d=l.filter(r);Rg({serverURL:yo(e),path:t,lang:a}).then(p=>Eo(new Array(c.length).fill(p),c)),d.length&&u(d)}else u(l);return i.abort.bind(i)};const $g={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://waline-comment.vuejs.press"};let Vg=$g;const Gu=Symbol(""),Ku=()=>fe(Gu),jg=Ku,Fg=e=>{e.provide(Gu,Vg)},Ng={"/":{placeholder:"请留言。(填写邮箱可在被回复时收到邮件提醒)"}};m(()=>import("./waline-meta-56fbc549.js"),[]);var qg=B({name:"WalineComment",props:{identifier:{type:String,required:!0}},setup(e){const t=jg(),n=ke(),s=vl(),a=ns(Ng);let i;const l=!!t.serverURL,r=A(()=>{if(!l)return!1;const c=t.pageview!==!1,d=n.value.pageview;return!!d||c!==!1&&d!==!1}),u=A(()=>({lang:s.value==="zh-CN"?"zh-CN":"en",locale:a.value,dark:"html.dark",...t,path:e.identifier}));return pe(()=>{se(()=>e.identifier,()=>{i==null||i(),r.value&&sn().then(()=>{setTimeout(()=>{i=Mg({serverURL:t.serverURL,path:e.identifier})},t.delay||800)})},{immediate:!0})}),()=>l?o("div",{id:"comment",class:"waline-wrapper"},o(_({loader:async()=>(await m(()=>import("./component-ba9c05e8.js"),[])).Waline,loadingComponent:ln}),u.value)):null}}),zg=B({name:"CommentService",props:{darkmode:Boolean},setup(e){const t=Ku(),n=ue(),s=ke(),a=t.comment!==!1,i=A(()=>s.value.comment||a&&s.value.comment!==!1);return()=>o(qg,{identifier:s.value.commentID||n.value.path,darkmode:e.darkmode,style:{display:i.value?"block":"none"}})}}),Hg=_t({enhance:({app:e})=>{Fg(e),e.component("CommentService",zg)}});const Ug=800,Jg=2e3,Gg={"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},Kg=!1,Wg=['.theme-hope-content div[class*="language-"] pre'],Ao=!1,ai=new Map,Qg=()=>{const{copy:e}=D2({legacy:!0}),t=ns(Gg),n=ue(),s=n2(),a=r=>{if(!r.hasAttribute("copy-code-registered")){const u=document.createElement("button");u.type="button",u.classList.add("copy-code-button"),u.innerHTML='<div class="copy-icon" />',u.setAttribute("aria-label",t.value.copy),u.setAttribute("data-copied",t.value.copied),r.parentElement&&r.parentElement.insertBefore(u,r),r.setAttribute("copy-code-registered","")}},i=()=>sn().then(()=>new Promise(r=>{setTimeout(()=>{Wg.forEach(u=>{document.querySelectorAll(u).forEach(a)}),r()},Ug)})),l=(r,u,c)=>{let{innerText:d=""}=u;/language-(shellscript|shell|bash|sh|zsh)/.test(r.classList.toString())&&(d=d.replace(/^ *(\$|>) /gm,"")),e(d).then(()=>{c.classList.add("copied"),clearTimeout(ai.get(c));const p=setTimeout(()=>{c.classList.remove("copied"),c.blur(),ai.delete(c)},Jg);ai.set(c,p)})};pe(()=>{(!s.value||Ao)&&i(),Ve("click",r=>{const u=r.target;if(u.matches('div[class*="language-"] > button.copy')){const c=u.parentElement,d=u.nextElementSibling;d&&l(c,d,u)}else if(u.matches('div[class*="language-"] div.copy-icon')){const c=u.parentElement,d=c.parentElement,p=c.nextElementSibling;p&&l(d,p,c)}}),se(()=>n.value.path,()=>{(!s.value||Ao)&&i()})})};var Xg=_t({setup:()=>{Qg()}});const Yg=(e,t)=>t==="json"?JSON.parse(e):new Function(`let config,__chart_js_config__;
{
${e}
__chart_js_config__=config;
}
return __chart_js_config__;`)();var Zg=B({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(e){const t=Ce(),n=Ce(),s=F(!0);return pe(async()=>{const[{default:a}]=await Promise.all([m(()=>import("./auto-fa8841cf.js"),[]),new Promise(r=>setTimeout(r,800))]);a.defaults.maintainAspectRatio=!1;const i=Yg(hn(e.config),e.type),l=n.value.getContext("2d");new a(l,i),s.value=!1}),()=>[e.title?o("div",{class:"chartjs-title"},decodeURIComponent(e.title)):null,s.value?o(ln,{class:"chartjs-loading",height:192}):null,o("div",{ref:t,class:"chartjs-wrapper",id:e.id,style:{display:s.value?"none":"block"}},o("canvas",{ref:n,height:400}))]}});const ia=ss("VUEPRESS_CODE_TAB_STORE",{});var ef=B({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const n=F(e.active),s=Ce([]),a=()=>{e.tabId&&(ia.value[e.tabId]=e.data[n.value].id)},i=(c=n.value)=>{n.value=c<s.value.length-1?c+1:0,s.value[n.value].focus()},l=(c=n.value)=>{n.value=c>0?c-1:s.value.length-1,s.value[n.value].focus()},r=(c,d)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),n.value=d):c.key==="ArrowRight"?(c.preventDefault(),i()):c.key==="ArrowLeft"&&(c.preventDefault(),l()),e.tabId&&(ia.value[e.tabId]=e.data[n.value].id)},u=()=>{if(e.tabId){const c=e.data.findIndex(({id:d})=>ia.value[e.tabId]===d);if(c!==-1)return c}return e.active};return pe(()=>{n.value=u(),se(()=>ia.value[e.tabId],(c,d)=>{if(e.tabId&&c!==d){const p=e.data.findIndex(({id:v})=>v===c);p!==-1&&(n.value=p)}})}),()=>e.data.length?o("div",{class:"vp-code-tabs"},[o("div",{class:"vp-code-tabs-nav",role:"tablist"},e.data.map(({id:c},d)=>{const p=d===n.value;return o("button",{type:"button",ref:v=>{v&&(s.value[d]=v)},class:["vp-code-tab-nav",{active:p}],role:"tab","aria-controls":`codetab-${e.id}-${d}`,"aria-selected":p,onClick:()=>{n.value=d,a()},onKeydown:v=>r(v,d)},t[`title${d}`]({value:c,isActive:p}))})),e.data.map(({id:c},d)=>{const p=d===n.value;return o("div",{class:["vp-code-tab",{active:p}],id:`codetab-${e.id}-${d}`,role:"tabpanel","aria-expanded":p},t[`tab${d}`]({value:c,isActive:p}))})]):null}});const Wu=({active:e=!1},{slots:t})=>{var n;return o("div",{class:["code-group-item",{active:e}],"aria-selected":e},(n=t.default)==null?void 0:n.call(t))};Wu.displayName="CodeGroupItem";const tf=B({name:"CodeGroup",slots:Object,setup(e,{slots:t}){const n=F(-1),s=Ce([]),a=(r=n.value)=>{n.value=r<s.value.length-1?r+1:0,s.value[n.value].focus()},i=(r=n.value)=>{n.value=r>0?r-1:s.value.length-1,s.value[n.value].focus()},l=(r,u)=>{r.key===" "||r.key==="Enter"?(r.preventDefault(),n.value=u):r.key==="ArrowRight"?(r.preventDefault(),a(u)):r.key==="ArrowLeft"&&(r.preventDefault(),i(u))};return()=>{var r;const u=(((r=t.default)==null?void 0:r.call(t))||[]).filter(c=>c.type.name==="CodeGroupItem").map(c=>(c.props===null&&(c.props={}),c));return u.length===0?null:(n.value<0||n.value>u.length-1?(n.value=u.findIndex(c=>"active"in c.props),n.value===-1&&(n.value=0)):u.forEach((c,d)=>{c.props.active=d===n.value}),o("div",{class:"code-group"},[o("div",{class:"code-group-nav"},u.map((c,d)=>{const p=d===n.value;return o("button",{type:"button",ref:v=>{v&&(s.value[d]=v)},class:["code-group-nav-tab",{active:p}],"aria-pressed":p,"aria-expanded":p,onClick:()=>{n.value=d},onKeydown:v=>l(v,d)},c.props.title)})),u]))}}});const nf=()=>o(ie,{name:"back"},()=>o("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),sf=()=>o(ie,{name:"home"},()=>o("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"})),af='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',lf='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',rf='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';const ii={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},wo={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},of=(e,t,n)=>{const s=document.createElement(e);return Ms(t)&&nt(t).forEach(a=>{if(a.indexOf("data"))s[a]=t[a];else{const i=a.replace("data","");s.dataset[i]=t[a]}}),n&&n.forEach(a=>{s.appendChild(a)}),s},Tl=e=>({...ii,...e,jsLib:Array.from(new Set([...ii.jsLib||[],...e.jsLib||[]])),cssLib:Array.from(new Set([...ii.cssLib||[],...e.cssLib||[]]))}),$n=(e,t)=>{if(e[t]!==void 0)return e[t];const n=new Promise(s=>{var a;const i=document.createElement("script");i.src=t,(a=document.querySelector("body"))==null||a.appendChild(i),i.onload=()=>{s()}});return e[t]=n,n},cf=(e,t)=>{if(t.css&&Array.from(e.childNodes).every(n=>n.nodeName!=="STYLE")){const n=of("style",{innerHTML:t.css});e.appendChild(n)}},uf=(e,t,n)=>{const s=n.getScript();if(s&&Array.from(t.childNodes).every(a=>a.nodeName!=="SCRIPT")){const a=document.createElement("script");a.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e} .vp-code-demo-display').shadowRoot;
${s}}`)),t.appendChild(a)}},df=e=>{const t=nt(e),n={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(s=>{const a=t.filter(i=>wo[s].types.includes(i));if(a.length){const i=a[0];n[s]=[e[i].replace(/^\n|\n$/g,""),wo[s].map[i]||i]}}),n.isLegal=(!n.html.length||n.html[1]==="none")&&(!n.js.length||n.js[1]==="none")&&(!n.css.length||n.css[1]==="none"),n},Qu=e=>e.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),Xu=e=>`<div id="app">
${Qu(e)}
</div>`,pf=e=>`${e.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,vf=e=>e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),Yu=e=>`(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?module.exports.default:module.exports;})({})`,mf=(e,t)=>{const n=Tl(t),s=e.js[0]||"";return{...n,html:Qu(e.html[0]||""),js:s,css:e.css[0]||"",isLegal:e.isLegal,getScript:()=>{var a;return n.useBabel?((a=window.Babel.transform(s,{presets:["es2015"]}))==null?void 0:a.code)||"":s}}},gf=/<template>([\s\S]+)<\/template>/u,ff=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,bf=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,hf=(e,t)=>{const n=Tl(t),s=e.html[0]||"",a=gf.exec(s),i=ff.exec(s),l=bf.exec(s),r=a?a[1].replace(/^\n|\n$/g,""):"",[u="",c=""]=i?[i[4].replace(/^\n|\n$/g,""),i[3]]:[],[d="",p=""]=l?[l[4].replace(/^\n|\n$/g,""),l[3]]:[],v=c===""&&(p===""||p==="css");return{...n,html:Xu(r),js:vf(u),css:d,isLegal:v,jsLib:[n.vue,...n.jsLib],getScript:()=>{var g,h;const w=t.useBabel?((h=(g=window.Babel)==null?void 0:g.transform(u,{presets:["es2015"]}))==null?void 0:h.code)||"":u.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${Yu(w)};appOptions.template=\`${r.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},kf=(e,t)=>{const n=Tl(t);return{...n,html:Xu(""),js:pf(e.js[0]||""),css:e.css[0]||(e.js[0]?e.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:e.isLegal,jsLib:[n.react,n.reactDOM,...n.jsLib],jsx:!0,getScript:()=>{var s,a;const i=((a=(s=window.Babel)==null?void 0:s.transform(e.js[0]||"",{presets:["es2015","react"]}))==null?void 0:a.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${Yu(i)}))`}}},Vn={},yf=e=>Promise.all([$n(Vn,e.babel),$n(Vn,e.react),$n(Vn,e.reactDOM)]),_f=e=>{const t=[$n(Vn,e.vue)];return e.useBabel&&t.push($n(Vn,e.babel)),Promise.all(t)},Ef=e=>e.useBabel?$n(Vn,e.babel):Promise.resolve();var Af=B({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const[n,s]=Li(!1),a=Ce(),i=Ce(),l=F("0"),r=F(!1),u=A(()=>JSON.parse(e.config?hn(e.config):"{}")),c=A(()=>{const h=JSON.parse(hn(e.code));return df(h)}),d=A(()=>e.type==="react"?kf(c.value,u.value):e.type==="vue"?hf(c.value,u.value):mf(c.value,u.value)),p=A(()=>d.value.isLegal),v=(h=!1)=>{const w=a.value.attachShadow({mode:"open"}),S=document.createElement("div");S.classList.add("code-demo-app"),w.appendChild(S),p.value?(h&&(S.innerHTML=d.value.html),cf(w,d.value),uf(e.id,w,d.value),l.value="0"):l.value="auto",r.value=!0},g=()=>{switch(e.type){case"react":return yf(d.value).then(()=>v());case"vue":return _f(d.value).then(()=>v());default:return Ef(d.value).then(()=>v(!0))}};return pe(()=>{setTimeout(()=>{g()},800)}),()=>{var h;return o("div",{class:"vp-code-demo",id:e.id},[o("div",{class:"vp-code-demo-header"},[d.value.isLegal?o("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",n.value?"down":"end"],onClick:()=>{l.value=n.value?"0":`${i.value.clientHeight+13.8}px`,s()}}):null,e.title?o("span",{class:"vp-code-demo-title"},decodeURIComponent(e.title)):null,d.value.isLegal&&d.value.jsfiddle!==!1?o("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[o("input",{type:"hidden",name:"html",value:d.value.html}),o("input",{type:"hidden",name:"js",value:d.value.js}),o("input",{type:"hidden",name:"css",value:d.value.css}),o("input",{type:"hidden",name:"wrap",value:"1"}),o("input",{type:"hidden",name:"panel_js",value:"3"}),o("input",{type:"hidden",name:"resources",value:[...d.value.cssLib,...d.value.jsLib].join(",")}),o("button",{type:"submit",class:"jsfiddle-button",innerHTML:lf,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!d.value.isLegal||d.value.codepen!==!1?o("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[o("input",{type:"hidden",name:"data",value:JSON.stringify({html:d.value.html,js:d.value.js,css:d.value.css,js_external:d.value.jsLib.join(";"),css_external:d.value.cssLib.join(";"),layout:d.value.codepenLayout,html_pre_processor:c.value?c.value.html[1]:"none",js_pre_processor:c.value?c.value.js[1]:d.value.jsx?"babel":"none",css_pre_processor:c.value?c.value.css[1]:"none",editors:d.value.codepenEditors})}),o("button",{type:"submit",innerHTML:af,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),r.value?null:o(ln,{class:"vp-code-demo-loading"}),o("div",{ref:a,class:"vp-code-demo-display",style:{display:p.value&&r.value?"block":"none"}}),o("div",{class:"vp-code-demo-code-wrapper",style:{height:l.value}},o("div",{ref:i,class:"vp-code-demo-codes"},(h=t.default)==null?void 0:h.call(t)))])}}});const wf=(async()=>{}).constructor,Sf=(e,t,n)=>t==="js"?wf("myChart",`let width,height,option,__echarts_config__;
{
${e}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(n):Promise.resolve({option:JSON.parse(e)});var If=B({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(e){const t=F(!0),n=Ce();let s;return Ve("resize",xu(()=>s==null?void 0:s.resize(),100)),pe(()=>{Promise.all([m(()=>import("./index-ae8c1e74.js"),[]),new Promise(a=>setTimeout(a,800))]).then(async([a])=>{s=a.init(n.value);const{option:i,...l}=await Sf(hn(e.config),e.type,s);s.resize(l),s.setOption(i),t.value=!1})}),_n(()=>{s==null||s.dispose()}),()=>[e.title?o("div",{class:"echarts-title"},decodeURIComponent(e.title)):null,o("div",{class:"echarts-wrapper"},[o("div",{ref:n,class:"echarts-container",id:e.id}),t.value?o(ln,{class:"echarts-loading",height:360}):null])]}});var Cl={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},Pf={...Cl,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},Tf={...Cl,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"}}},Cf={...Cl,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}};const So={ant:Pf,vue:Cf,pie:Tf};var Lf=B({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(e){let t=null;const n=Ce(),s=F(!0),a=F(1),i=A(()=>So[e.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${e.preset}`),So.vue)),l=r=>r<419?.8:r>1280?1:.9;return pe(()=>{Promise.all([m(()=>import("./flowchart-d65a1d8e.js"),[]),new Promise(r=>setTimeout(r,800))]).then(([{parse:r}])=>{t=r(hn(e.code)),a.value=l(window.innerWidth),s.value=!1,t.draw(e.id,{...i.value,scale:a.value})}),Ve("resize",xu(()=>{if(t){const r=l(window.innerWidth);a.value!==r&&(a.value=r,t.draw(e.id,{...i.value,scale:r}))}},100))}),()=>[s.value?o(ln,{class:"flowchart-loading",height:192}):null,o("div",{ref:n,class:["flowchart-wrapper",e.preset],id:e.id,style:{display:s.value?"none":"block"}})]}});let xf={};const Zu=Symbol(""),Of=()=>fe(Zu),Df=e=>{e.provide(Zu,xf)},In={useMaxWidth:!1},Rf=e=>({dark:e,background:e?"#1e1e1e":"#fff",primaryColor:e?"#389d70":"#4abf8a",primaryBorderColor:e?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:e?"#fff":"#000",secondaryTextColor:e?"#ddd":"#333",tertiaryColor:e?"#282828":"#efeef4",tertiaryBorderColor:e?"#bbb":"#242424",tertiaryTextColor:e?"#ddd":"#333",noteBkgColor:e?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:e?"#f6d365":"#333",lineColor:e?"#d3d3d3":"#333",textColor:e?"#fff":"#242424",mainBkg:e?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:e?"#389d70":"#4abf8a",nodeTextColor:e?"#fff":"#242424",signalTextColor:e?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:e?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var Bf=B({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(e){const{themeVariables:t,...n}=Of(),s=Ce(),a=A(()=>hn(e.code)),i=F(""),l=F(!1),r=async()=>{const[{default:d}]=await Promise.all([m(()=>import("./mermaid.core-7036dfde.js").then(p=>p.aN),["assets/mermaid.core-7036dfde.js","assets/commonjsHelpers-042e6b4d.js"]),new Promise(p=>setTimeout(p,800))]);d.initialize({theme:"base",themeVariables:{...Rf(l.value),...K0(t)?t(l.value):t},flowchart:In,sequence:In,journey:In,gantt:In,er:In,pie:In,...n,startOnLoad:!1}),i.value=(await d.render(e.id,a.value)).svg},u=()=>{const{body:d}=document,p=document.createElement("div");p.classList.add("mermaid-preview"),p.innerHTML=i.value,d.appendChild(p),p.addEventListener("click",()=>{d.removeChild(p)})},c=()=>{const d=`data:image/svg+xml;charset=utf8,${i.value.replace(/<br>/g,"<br />").replace(/%/g,"%25").replace(/"/g,"%22").replace(/'/g,"%27").replace(/&/g,"%26").replace(/#/g,"%23").replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E")}`,p=document.createElement("a");p.setAttribute("href",d),p.setAttribute("download",`${e.id}.svg`),p.click()};return pe(()=>{const d=document.documentElement,p=()=>d.classList.contains("dark")||d.getAttribute("data-theme")==="dark";l.value=p(),r(),Bu(d,()=>{l.value=p()},{attributeFilter:["class","data-theme"],attributes:!0}),se(l,()=>r())}),()=>[o("div",{class:"mermaid-actions"},[o("button",{class:"preview-button",onClick:()=>u(),title:"preview",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>'}),o("button",{class:"download-button",onClick:()=>c(),title:"download",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>'})]),o("div",{ref:s,class:"mermaid-wrapper"},i.value?o("div",{class:"mermaid-content",innerHTML:i.value}):o(ln,{class:"mermaid-loading",height:96}))]}});let Mf={};const ed=Symbol(""),$f=()=>fe(ed),Vf=e=>{e.provide(ed,Mf)},jf={showCompileOutput:!1,clearConsole:!1,ssr:!1};let Ff=jf;const td=Symbol(""),F4=()=>fe(td),Nf=e=>{e.provide(td,Ff)},qf=()=>m(()=>import("./highlight.esm-75b11b9d.js"),[]),zf=()=>m(()=>import("./markdown.esm-0191f9da.js"),[]),Hf=()=>m(()=>import("./math.esm-70a288c8.js"),[]),Uf=()=>m(()=>import("./notes.esm-a106bb2c.js"),[]),Jf=()=>m(()=>import("./reveal.esm-ec5549c1.js"),[]),Gf=()=>m(()=>import("./search.esm-7e6792e2.js"),[]),Kf=()=>m(()=>import("./zoom.esm-b83b91d0.js"),[]);const Wf=()=>[Jf(),zf(),qf(),Hf(),Gf(),Uf(),Kf()];var Qf=B({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(e){const t=$f(),n=ke(),s=F(""),a=F(!0),i=Ce();let l=null;const r=async u=>{const c=[new Promise(g=>setTimeout(g,800)),...Wf()],[,d,...p]=await Promise.all(c),v=new d.default(u,{backgroundTransition:"slide",hash:n.value.layout==="Slide",mouseWheel:n.value.layout==="Slide",transition:"slide",slideNumber:!0,...t,...n.value.reveal||{},embedded:n.value.layout!=="Slide",plugins:[...p.map(({default:g})=>g),...t.plugins??[]]});return await v.initialize(),v};return pe(async()=>{const u=i.value;u&&(s.value=hn(e.code),u.setAttribute("id",e.id),u.setAttribute("data-theme",e.theme),l=await r(u),a.value=!1)}),_n(()=>{l==null||l.destroy()}),()=>o("div",{class:"vp-reveal"},[o("div",{ref:i,class:["reveal","reveal-viewport"]},o("div",{class:"slides",innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${s.value}<\/script></section>`})),a.value?o(ln,{class:"reveal-loading",height:400}):null])}});var Xf=B({name:"Playground",props:{title:{type:String,default:""},link:{type:String,required:!0}},setup(e){return()=>[o("div",{class:"vp-playground"},[o("div",{class:"vp-playground-header"},[e.title?o("div",{class:"vp-playground-title"},decodeURIComponent(e.title)):null,o("div",{class:"vp-playground-actions"},[o("a",{class:"vp-playground-action",href:decodeURIComponent(e.link),target:"_blank",innerHTML:rf})])]),o("div",{class:"vp-playground-container"},o("iframe",{src:decodeURIComponent(e.link)}))])]}});const li=ss("VUEPRESS_TAB_STORE",{});var Yf=B({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const n=F(e.active),s=Ce([]),a=()=>{e.tabId&&(li.value[e.tabId]=e.data[n.value].id)},i=(c=n.value)=>{n.value=c<s.value.length-1?c+1:0,s.value[n.value].focus()},l=(c=n.value)=>{n.value=c>0?c-1:s.value.length-1,s.value[n.value].focus()},r=(c,d)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),n.value=d):c.key==="ArrowRight"?(c.preventDefault(),i()):c.key==="ArrowLeft"&&(c.preventDefault(),l()),a()},u=()=>{if(e.tabId){const c=e.data.findIndex(({id:d})=>li.value[e.tabId]===d);if(c!==-1)return c}return e.active};return pe(()=>{n.value=u(),se(()=>li.value[e.tabId],(c,d)=>{if(e.tabId&&c!==d){const p=e.data.findIndex(({id:v})=>v===c);p!==-1&&(n.value=p)}})}),()=>e.data.length?o("div",{class:"vp-tabs"},[o("div",{class:"vp-tabs-nav",role:"tablist"},e.data.map(({id:c},d)=>{const p=d===n.value;return o("button",{type:"button",ref:v=>{v&&(s.value[d]=v)},class:["vp-tab-nav",{active:p}],role:"tab","aria-controls":`tab-${e.id}-${d}`,"aria-selected":p,onClick:()=>{n.value=d,a()},onKeydown:v=>r(v,d)},t[`title${d}`]({value:c,isActive:p}))})),e.data.map(({id:c},d)=>{const p=d===n.value;return o("div",{class:["vp-tab",{active:p}],id:`tab-${e.id}-${d}`,role:"tabpanel","aria-expanded":p},t[`tab${d}`]({value:c,isActive:p}))})]):null}});const Zf=_t({enhance:({app:e})=>{e.component("ChartJS",Zg),e.component("CodeTabs",ef),ht("CodeGroup",e)||e.component("CodeGroup",tf),ht("CodeGroupItem",e)||e.component("CodeGroupItem",Wu),e.component("CodeDemo",Af),e.component("ECharts",If),e.component("FlowChart",Lf),Df(e),e.component("Mermaid",Bf),Vf(e),e.component("Presentation",Qf),e.component("Playground",Xf),e.component("Tabs",Yf),Nf(e),e.component("VuePlayground",_(()=>m(()=>import("./VuePlayground-f4551ddd.js"),[])))},setup:()=>{}});let e3={};const nd=Symbol(""),t3=()=>fe(nd),n3=e=>{e.provide(nd,e3)};const s3=".theme-hope-content :not(a) > img:not([no-view])",a3={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},i3=800,l3='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',r3=e=>ce(e)?Array.from(document.querySelectorAll(e)):e.map(t=>Array.from(document.querySelectorAll(t))).flat(),sd=e=>new Promise((t,n)=>{e.complete?t({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>t(sd(e)),e.onerror=s=>n(s))}),o3=()=>{const{isSupported:e,toggle:t}=Il(),n=t3(),s=ns(a3),a=ue();let i;const l=u=>{u.on("uiRegister",()=>{e&&u.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{t()}}),u.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(c,d)=>{c.setAttribute("download",""),c.setAttribute("target","_blank"),c.setAttribute("rel","noopener"),d.on("change",()=>{c.setAttribute("href",d.currSlide.data.src)})}}),u.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(c,d)=>{const p=[];let v=-1;for(let g=0;g<d.getNumItems();g++){const h=document.createElement("div");h.className="photo-swipe-bullet",h.onclick=w=>{d.goTo(p.indexOf(w.target))},p.push(h),c.appendChild(h)}d.on("change",()=>{v>=0&&p[v].classList.remove("active"),p[d.currIndex].classList.add("active"),v=d.currIndex})}})})},r=()=>Promise.all([m(()=>import("./photoswipe.esm-5794cde2.js"),[]),sn().then(()=>new Promise(u=>setTimeout(u,i3)).then(()=>r3(s3)))]).then(([{default:u},c])=>{const d=c.map(p=>({html:l3,element:p,msrc:p.src}));c.forEach((p,v)=>{const g=()=>{i=new u({preloaderDelay:0,showHideAnimationType:"zoom",...s.value,...n,dataSource:d,index:v,closeOnVerticalDrag:!0,wheelToZoom:!1}),l(i),i.addFilter("thumbEl",()=>p),i.addFilter("placeholderSrc",()=>p.src),i.init()};p.style.cursor="zoom-in",p.addEventListener("click",()=>{g()}),p.addEventListener("keypress",({key:h})=>{h==="Enter"&&g()})}),c.forEach((p,v)=>{sd(p).then(g=>{d.splice(v,1,g),i==null||i.refreshSlideContent(v)})})});pe(()=>{Ve("wheel",()=>{i==null||i.close()}),r(),se(()=>a.value.path,()=>r())})};var c3=_t({enhance:({app:e})=>{n3(e)},setup:()=>{o3()}});const ad=()=>{const e=ue();return A(()=>e.value.readingTime??null)},xi=typeof{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}}>"u"?null:{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},id=(e,t)=>{const{minutes:n,words:s}=e,{less1Minute:a,word:i,time:l}=t;return{time:n<1?a:l.replace("$time",Math.round(n).toString()),words:i.replace("$word",s.toString())}},Io={words:"",time:""},ld=()=>xi?ns(xi):A(()=>null),u3=()=>{if(typeof xi>"u")return A(()=>Io);const e=ad(),t=ld();return A(()=>e.value&&t.value?id(e.value,t.value):Io)},rn=()=>Uu(),oe=()=>Cg(),as=()=>A(()=>!!rn().value.pure);var ri=B({name:"EmptyComponent",setup:()=>()=>null});const d3="719px",p3="1440px",v3="false",Ll={mobileBreakPoint:d3,pcBreakPoint:p3,enableThemeColor:v3},xl={"/zh/demo/":[],"/zh/posts/":[]},rd=e=>{const{icon:t="",color:n,size:s}=e,a={};return n&&(a.color=n),s&&(a.height=Number.isNaN(Number(s))?s:`${s}px`),En(t)?o("img",{class:"icon",src:t,"no-view":"",style:a}):$a(t)?o("img",{class:"icon",src:Te(t),"no-view":"",style:a}):o(et("FontIcon"),e)};rd.displayName="HopeIcon";var Je=rd,Ee=(e=>(e.type="y",e.title="t",e.shortTitle="s",e.icon="i",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e.index="I",e.order="O",e))(Ee||{}),od=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(od||{});const jn=(e,t,n=!1)=>{const s=encodeURI(t);let a=Wn(e,hu(s));a.name==="404"&&(a=Wn(e,s));const{fullPath:i,meta:l,name:r}=a;return{text:!n&&l[Ee.shortTitle]?l[Ee.shortTitle]:l[Ee.title]||t,link:r==="404"?t:i,...l[Ee.icon]?{icon:l[Ee.icon]}:{}}},Fs=()=>{const e=qe(),t=Et();return n=>{if(n)if($a(n))t.path!==n&&e.push(n);else if(En(n)||Hc(n))window&&window.open(n);else{const s=t.path.slice(0,t.path.lastIndexOf("/"));e.push(`${s}/${encodeURI(n)}`)}}},cd=()=>{const e=oe(),t=ke();return A(()=>{const{author:n}=t.value;return n?Ts(n):n===!1?[]:Ts(e.value.author,!1)})},m3=()=>{const e=ke();return A(()=>yu(e.value.category).map(t=>{var n,s;return{name:t,path:((s=(n=fe(Symbol.for("categoryMap")))==null?void 0:n.value.map[t])==null?void 0:s.path)||""}}))},g3=()=>{const e=ke();return A(()=>_u(e.value.tag).map(t=>{var n,s;return{name:t,path:((s=(n=fe(Symbol.for("tagMap")))==null?void 0:n.value.map[t])==null?void 0:s.path)||""}}))},f3=()=>{const e=ke(),t=ue();return A(()=>{const n=kl(e.value.date);if(n)return n;const{createdTime:s}=t.value.git||{};return s?new Date(s):null})},b3=()=>{const e=oe(),t=ue(),n=ke(),s=cd(),a=m3(),i=g3(),l=f3(),r=ad(),u=u3(),c=A(()=>({author:s.value,category:a.value,date:l.value,localizedDate:t.value.localizedDate,tag:i.value,isOriginal:n.value.isOriginal||!1,readingTime:r.value,readingTimeLocale:u.value,pageview:"pageview"in n.value?n.value.pageview:!0})),d=A(()=>"pageInfo"in n.value?n.value.pageInfo:"pageInfo"in e.value?e.value.pageInfo:null);return{info:c,items:d}},{mobileBreakPoint:h3,pcBreakPoint:k3}=Ll,Po=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,Ns=()=>{const e=F(!1),t=F(!1),n=()=>{e.value=window.innerWidth<=(Po(h3)??719),t.value=window.innerWidth>=(Po(k3)??1440)};return pe(()=>{n(),Ve("resize",n,!1),Ve("orientationchange",n,!1)}),{isMobile:e,isPC:t}},ud=Symbol(""),qs=()=>{const e=fe(ud);if(!e)throw new Error("useDarkmode() is called without provider.");return e},y3=e=>{const t=rn(),n=q2(),s=ss("vuepress-theme-hope-scheme","auto"),a=A(()=>t.value.darkmode||"switch"),i=A(()=>{const r=a.value;return r==="disable"?!1:r==="enable"?!0:r==="auto"?n.value:r==="toggle"?s.value==="dark":s.value==="dark"||s.value==="auto"&&n.value}),l=A(()=>{const r=a.value;return r==="switch"||r==="toggle"});e.provide(ud,{canToggle:l,config:a,isDarkmode:i,status:s}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>i.value}})},_3=()=>{const{isDarkmode:e}=qs(),t=(n=e.value)=>document.documentElement.setAttribute("data-theme",n?"dark":"light");pe(()=>{se(e,t,{immediate:!0})})};var We=B({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(e,{attrs:t,emit:n,slots:s}){const a=Et(),i=Yc(),l=es(e,"config"),r=A(()=>En(l.value.link)),u=A(()=>Hc(l.value.link)||dm(l.value.link)),c=A(()=>u.value?void 0:l.value.target||(r.value?"_blank":void 0)),d=A(()=>c.value==="_blank"),p=A(()=>!r.value&&!u.value&&!d.value),v=A(()=>u.value?void 0:l.value.rel||(d.value?"noopener noreferrer":void 0)),g=A(()=>l.value.ariaLabel||l.value.text),h=A(()=>{if(e.exact)return!1;const S=nt(i.value.locales);return S.length?S.every(b=>b!==l.value.link):l.value.link!=="/"}),w=A(()=>p.value?l.value.activeMatch?new RegExp(l.value.activeMatch).test(a.path):h.value?Kn(a.path,l.value.link):a.path===l.value.link:!1);return()=>{const{before:S,after:b,default:y}=s,{text:L,icon:O,link:z}=l.value;return p.value?o($e,{to:z,"aria-label":g.value,...t,class:["nav-link",{active:w.value},t.class],onFocusout:()=>n("focusout")},()=>y?y():[S?S():o(Je,{icon:O}),L,b==null?void 0:b()]):o("a",{href:z,rel:v.value,target:c.value,"aria-label":g.value,...t,class:["nav-link",t.class],onFocusout:()=>n("focusout")},y?y():[S?S():o(Je,{icon:O}),L,e.noExternalLinkIcon?null:o(zu),b==null?void 0:b()])}}});const Qn=(e,t,n=!1)=>"activeMatch"in t?new RegExp(t.activeMatch).test(e.path):El(e,t.link)?!0:t.children&&!n?t.children.some(s=>Qn(e,s)):!1,dd=(e,t)=>t.type==="group"?t.children.some(n=>n.type==="group"?dd(e,n):n.type==="page"&&Qn(e,n,!0))||"prefix"in t&&El(e,t.prefix):!1,pd=(e,t)=>ce(e.link)?o(We,{...t,config:e}):o("p",t,[o(Je,{icon:e.icon}),e.text]),vd=e=>{const t=Et();return e?o("ul",{class:"vp-sidebar-sub-headers"},e.map(n=>{const s=Qn(t,n,!0);return o("li",{class:"vp-sidebar-sub-header"},[pd(n,{class:["vp-sidebar-link","vp-heading",{active:s}]}),vd(n.children)])})):null},oi=(e="",t="")=>$a(t)?t:`${om(e)}${t}`,E3=(e,t)=>{const n=ue();return{type:"heading",text:e.title,link:`${n.value.path}#${e.slug}`,children:Ol(e.children,t)}},Ol=(e,t)=>t>0?e.map(n=>E3(n,t-1)):[],md=e=>{const t=ue();return Ol(t.value.headers,e)},Oi=(e,t,n="")=>{const s=qe(),a=ue(),i=(l,r=n)=>{var u;const c=ce(l)?jn(s,oi(r,l)):l.link?{...l,..._a(l.link)?{}:{link:jn(s,oi(r,l.link)).link}}:l;if("children"in c){const d=oi(r,c.prefix),p=c.children==="structure"?xl[d]:c.children;return{type:"group",...c,prefix:d,children:p.map(v=>i(v,d))}}return{type:"page",...c,children:c.link===a.value.path?Ol(((u=a.value.headers[0])==null?void 0:u.level)===1?a.value.headers[0].children:a.value.headers,t):[]}};return e.map(l=>i(l))},A3=(e,t)=>{const n=ue(),s=nt(e).sort((a,i)=>i.length-a.length);for(const a of s)if(Kn(decodeURI(n.value.path),a)){const i=e[a];return i?Oi(i==="structure"?xl[a]:i==="heading"?md(t):i,t,a):[]}return console.warn(`${n.value.path} is missing sidebar config.`),[]},w3=(e,t)=>{const n=Vt();return e===!1?[]:e==="heading"?md(t):e==="structure"?Oi(xl[n.value],t,n.value):W(e)?Oi(e,t):Ms(e)?A3(e,t):[]},gd=Symbol(""),S3=()=>{const e=ke(),t=oe(),n=A(()=>e.value.home?!1:e.value.sidebar??t.value.sidebar??"structure"),s=A(()=>e.value.headerDepth??t.value.headerDepth??2),a=A(()=>w3(n.value,s.value));bt(gd,a)},Dl=()=>{const e=fe(gd);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};var I3=B({name:"PageFooter",setup(){const e=ke(),t=oe(),n=cd(),s=A(()=>{const{copyright:l,footer:r}=e.value;return r!==!1&&!!(l||r||t.value.displayFooter)}),a=A(()=>{const{footer:l}=e.value;return l===!1?!1:ce(l)?l:t.value.footer||""}),i=A(()=>"copyright"in e.value?e.value.copyright:"copyright"in t.value?t.value.copyright:n.value.length?`Copyright © ${new Date().getFullYear()} ${n.value[0].name}`:!1);return()=>s.value?o("footer",{class:"vp-footer-wrapper"},[a.value?o("div",{class:"vp-footer",innerHTML:a.value}):null,i.value?o("div",{class:"vp-copyright",innerHTML:i.value}):null]):null}}),P3=B({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const n=ue(),s=es(e,"config"),a=A(()=>s.value.ariaLabel||s.value.text),i=F(!1);se(()=>n.value.path,()=>{i.value=!1});const l=r=>{r.detail===0&&(i.value=!i.value)};return()=>{var r;return o("div",{class:["dropdown-wrapper",{open:i.value}]},[o("button",{type:"button",class:"dropdown-title","aria-label":a.value,onClick:l},[((r=t.title)==null?void 0:r.call(t))||o("span",{class:"title"},[o(Je,{icon:s.value.icon}),e.config.text]),o("span",{class:"arrow"}),o("ul",{class:"nav-dropdown"},s.value.children.map((u,c)=>{const d=c===s.value.children.length-1;return o("li",{class:"dropdown-item"},"children"in u?[o("h4",{class:"dropdown-subtitle"},u.link?o(We,{config:u,onFocusout:()=>{u.children.length===0&&d&&(i.value=!1)}}):o("span",u.text)),o("ul",{class:"dropdown-subitem-wrapper"},u.children.map((p,v)=>o("li",{class:"dropdown-subitem"},o(We,{config:p,onFocusout:()=>{v===u.children.length-1&&d&&(i.value=!1)}}))))]:o(We,{config:u,onFocusout:()=>{d&&(i.value=!1)}}))}))])])}}});const fd=(e,t,n="")=>ce(t)?jn(e,`${n}${t}`):"children"in t?{...t,...t.link&&!_a(t.link)?jn(e,`${n}${t.link}`):{},children:t.children.map(s=>fd(e,s,`${n}${t.prefix||""}`))}:{...t,link:_a(t.link)?t.link:jn(e,`${n}${t.link}`).link},bd=()=>{const e=oe(),t=qe(),n=()=>(e.value.navbar||[]).map(a=>fd(t,a)),s=F(n());return se(e,()=>{s.value=n()}),s},T3=()=>{const e=oe(),t=A(()=>e.value.repo||null),n=A(()=>t.value?Z0(t.value):null),s=A(()=>t.value?Au(t.value):null),a=A(()=>n.value?e.value.repoLabel??(s.value===null?"Source":s.value):null);return A(()=>!n.value||!a.value||e.value.repoDisplay===!1?null:{type:s.value||"Source",label:a.value,link:n.value})};var C3=B({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(e){const t=ue(),n=es(e,"config"),s=A(()=>n.value.ariaLabel||n.value.text),a=F(!1);se(()=>t.value.path,()=>{a.value=!1});const i=(l,r)=>r[r.length-1]===l;return()=>[o("button",{type:"button",class:["nav-screen-dropdown-title",{active:a.value}],"aria-label":s.value,onClick:()=>{a.value=!a.value}},[o("span",{class:"title"},[o(Je,{icon:n.value.icon}),e.config.text]),o("span",{class:["arrow",a.value?"down":"end"]})]),o("ul",{class:["nav-screen-dropdown",{hide:!a.value}]},n.value.children.map(l=>o("li",{class:"dropdown-item"},"children"in l?[o("h4",{class:"dropdown-subtitle"},l.link?o(We,{config:l,onFocusout:()=>{i(l,n.value.children)&&l.children.length===0&&(a.value=!1)}}):o("span",l.text)),o("ul",{class:"dropdown-subitem-wrapper"},l.children.map(r=>o("li",{class:"dropdown-subitem"},o(We,{config:r,onFocusout:()=>{i(r,l.children)&&i(l,n.value.children)&&(a.value=!1)}}))))]:o(We,{config:l,onFocusout:()=>{i(l,n.value.children)&&(a.value=!1)}}))))]}}),L3=B({name:"NavScreenLinks",setup(){const e=bd();return()=>e.value.length?o("nav",{class:"nav-screen-links"},e.value.map(t=>o("div",{class:"navbar-links-item"},"children"in t?o(C3,{config:t}):o(We,{config:t})))):null}});const hd=()=>o(ie,{name:"dark"},()=>o("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));hd.displayName="DarkIcon";const kd=()=>o(ie,{name:"light"},()=>o("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));kd.displayName="LightIcon";const yd=()=>o(ie,{name:"auto"},()=>o("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));yd.displayName="AutoIcon";const _d=()=>o(ie,{name:"enter-fullscreen"},()=>o("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));_d.displayName="EnterFullScreenIcon";const Ed=()=>o(ie,{name:"cancel-fullscreen"},()=>o("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Ed.displayName="CancelFullScreenIcon";const Ad=()=>o(ie,{name:"outlook"},()=>[o("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);Ad.displayName="OutlookIcon";var wd=B({name:"AppearanceSwitch",setup(){const{config:e,status:t}=qs(),n=()=>{e.value==="switch"?t.value={light:"dark",dark:"auto",auto:"light"}[t.value]:t.value=t.value==="light"?"dark":"light"};return()=>o("button",{type:"button",id:"appearance-switch",onClick:()=>n()},[o(yd,{style:{display:t.value==="auto"?"block":"none"}}),o(hd,{style:{display:t.value==="dark"?"block":"none"}}),o(kd,{style:{display:t.value==="light"?"block":"none"}})])}}),x3=B({name:"AppearanceMode",setup(){const e=oe(),{canToggle:t}=qs(),n=A(()=>e.value.outlookLocales.darkmode);return()=>t.value?o("div",{class:"appearance-wrapper"},[o("label",{class:"appearance-title",for:"appearance-switch"},n.value),o(wd)]):null}});const ci="VUEPRESS_THEME_COLOR";var O3=B({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(e){const t=(n="")=>{const s=document.documentElement.classList,a=nt(e.themeColor);if(!n){localStorage.removeItem(ci),s.remove(...a);return}s.remove(...a.filter(i=>i!==n)),s.add(n),localStorage.setItem(ci,n)};return pe(()=>{const n=localStorage.getItem(ci);n&&t(n)}),()=>o("ul",{id:"theme-color-picker"},[o("li",o("span",{class:"theme-color",onClick:()=>t()})),ts(e.themeColor).map(([n,s])=>o("li",o("span",{style:{background:s},onClick:()=>t(n)})))])}});const Fn=Ll.enableThemeColor==="true",D3=Fn?W0(ts(Ll).filter(([e])=>e.startsWith("theme-"))):{};var R3=B({name:"ThemeColor",setup(){const e=oe(),t=A(()=>e.value.outlookLocales.themeColor);return()=>Fn?o("div",{class:"theme-color-wrapper"},[o("label",{class:"theme-color-title",for:"theme-color-picker"},t.value),o(O3,{themeColor:D3})]):null}}),Sd=B({name:"ToggleFullScreenButton",setup(){const e=oe(),{isSupported:t,isFullscreen:n,toggle:s}=Il(),a=A(()=>e.value.outlookLocales.fullscreen);return()=>t?o("div",{class:"full-screen-wrapper"},[o("label",{class:"full-screen-title",for:"full-screen-switch"},a.value),o("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:n.value,onClick:()=>s()},n.value?o(Ed):o(_d))]):null}}),Id=B({name:"OutlookSettings",setup(){const e=rn(),t=as(),n=A(()=>!t.value&&e.value.fullscreen);return()=>o(Da,()=>[Fn?o(R3):null,o(x3),n.value?o(Sd):null])}}),B3=B({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(e,{emit:t,slots:n}){const s=ue(),{isMobile:a}=Ns(),i=Ce(),l=$u(i);return pe(()=>{i.value=document.body,se(a,r=>{!r&&e.show&&(l.value=!1,t("close"))}),se(()=>s.value.path,()=>{l.value=!1,t("close")})}),_n(()=>{l.value=!1}),()=>o(en,{name:"fade",onEnter:()=>{l.value=!0},onAfterLeave:()=>{l.value=!1}},()=>{var r,u;return e.show?o("div",{id:"nav-screen"},o("div",{class:"vp-nav-screen-container"},[(r=n.before)==null?void 0:r.call(n),o(L3),o("div",{class:"vp-outlook-wrapper"},o(Id)),(u=n.after)==null?void 0:u.call(n)])):null})}}),M3=B({name:"NavbarBrand",setup(){const e=Vt(),t=$s(),n=oe(),s=A(()=>n.value.home||e.value),a=A(()=>t.value.title),i=A(()=>n.value.navTitle??a.value),l=A(()=>n.value.logo?Te(n.value.logo):null),r=A(()=>n.value.logoDark?Te(n.value.logoDark):null);return()=>o($e,{to:s.value,class:"vp-brand"},()=>[l.value?o("img",{class:["vp-nav-logo",{light:!!r.value}],src:l.value,alt:a.value}):null,r.value?o("img",{class:["vp-nav-logo dark"],src:r.value,alt:a.value}):null,i.value?o("span",{class:["vp-site-name",{"hide-in-pad":l.value&&n.value.hideSiteNameOnMobile!==!1}]},i.value):null])}}),$3=B({name:"NavbarLinks",setup(){const e=bd();return()=>e.value.length?o("nav",{class:"vp-nav-links"},e.value.map(t=>o("div",{class:"nav-item hide-in-mobile"},"children"in t?o(P3,{config:t}):o(We,{config:t})))):null}}),V3=B({name:"RepoLink",components:{BitbucketIcon:Pu,GiteeIcon:Iu,GitHubIcon:wu,GitLabIcon:Su,SourceIcon:Tu},setup(){const e=T3();return()=>e.value?o("div",{class:"nav-item vp-repo"},o("a",{class:"vp-repo-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},o(et(`${e.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const Pd=({active:e=!1},{emit:t})=>o("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>t("toggle")},o("span",[o("span",{class:"vp-top"}),o("span",{class:"vp-middle"}),o("span",{class:"vp-bottom"})]));Pd.displayName="ToggleNavbarButton";var j3=Pd;const Di=(e,{emit:t})=>o("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>t("toggle")},o("span",{class:"icon"}));Di.displayName="ToggleSidebarButton",Di.emits=["toggle"];var F3=Di,N3=B({name:"OutlookButton",setup(){const{isSupported:e}=Il(),t=rn(),n=as(),s=ue(),{canToggle:a}=qs(),i=F(!1),l=A(()=>!n.value&&t.value.fullscreen&&e);return se(()=>s.value.path,()=>{i.value=!1}),()=>a.value||l.value||Fn?o("div",{class:"nav-item hide-in-mobile"},a.value&&!l.value&&!Fn?o(wd):l.value&&!a.value&&!Fn?o(Sd):o("button",{type:"button",class:["outlook-button",{open:i.value}],tabindex:"-1","aria-hidden":!0},[o(Ad),o("div",{class:"outlook-dropdown"},o(Id))])):null}}),q3=B({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:t,slots:n}){const s=oe(),{isMobile:a}=Ns(),i=F(!1),l=A(()=>{const{navbarAutoHide:d="mobile"}=s.value;return d!=="none"&&(d==="always"||a.value)}),r=A(()=>s.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),u={Brand:M3,Language:ri,Links:$3,Repo:V3,Outlook:N3,Search:ht("Docsearch")?et("Docsearch"):ht("SearchBox")?et("SearchBox"):ri},c=d=>u[d]??(ht(d)?et(d):ri);return()=>{var d,p,v,g,h,w;return[o("header",{id:"navbar",class:["vp-navbar",{"auto-hide":l.value,"hide-icon":s.value.navbarIcon===!1}]},[o("div",{class:"vp-navbar-start"},[o(F3,{onToggle:()=>{i.value&&(i.value=!1),t("toggleSidebar")}}),(d=n.startBefore)==null?void 0:d.call(n),(r.value.start||[]).map(S=>o(c(S))),(p=n.startAfter)==null?void 0:p.call(n)]),o("div",{class:"vp-navbar-center"},[(v=n.centerBefore)==null?void 0:v.call(n),(r.value.center||[]).map(S=>o(c(S))),(g=n.centerAfter)==null?void 0:g.call(n)]),o("div",{class:"vp-navbar-end"},[(h=n.endBefore)==null?void 0:h.call(n),(r.value.end||[]).map(S=>o(c(S))),(w=n.endAfter)==null?void 0:w.call(n),o(j3,{active:i.value,onToggle:()=>{i.value=!i.value}})])]),o(B3,{show:i.value,onClose:()=>{i.value=!1}},{before:()=>{var S;return(S=n.screenTop)==null?void 0:S.call(n)},after:()=>{var S;return(S=n.screenBottom)==null?void 0:S.call(n)}})]}}}),z3=B({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const t=Et();return()=>[pd(e.config,{class:["vp-sidebar-link",`vp-sidebar-${e.config.type}`,{active:Qn(t,e.config,!0)}],exact:!0}),vd(e.config.children)]}}),H3=B({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:t}){const n=Et(),s=A(()=>Qn(n,e.config)),a=A(()=>Qn(n,e.config,!0));return()=>{const{collapsible:i,children:l=[],icon:r,prefix:u,link:c,text:d}=e.config;return o("section",{class:"vp-sidebar-group"},[o(i?"button":"p",{class:["vp-sidebar-heading",{clickable:i||c,exact:a.value,active:s.value}],...i?{type:"button",onClick:()=>t("toggle"),onKeydown:p=>{p.key==="Enter"&&t("toggle")}}:{}},[o(Je,{icon:r}),c?o(We,{class:"vp-sidebar-title",config:{text:d,link:c},noExternalLinkIcon:!0}):o("span",{class:"vp-sidebar-title"},d),i?o("span",{class:["vp-arrow",e.open?"down":"end"]}):null]),e.open||!i?o(Td,{key:u,config:l}):null])}}}),Td=B({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const t=Et(),n=F(-1),s=a=>{n.value=a===n.value?-1:a};return se(()=>t.path,()=>{const a=e.config.findIndex(i=>dd(t,i));n.value=a},{immediate:!0,flush:"post"}),()=>o("ul",{class:"vp-sidebar-links"},e.config.map((a,i)=>o("li",a.type==="group"?o(H3,{config:a,open:i===n.value,onToggle:()=>s(i)}):o(z3,{config:a}))))}}),U3=B({name:"SideBar",slots:Object,setup(e,{slots:t}){const n=Et(),s=oe(),a=Dl(),i=Ce();return pe(()=>{se(()=>n.hash,l=>{const r=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n.path}${l}"]`);if(!r)return;const{top:u,height:c}=i.value.getBoundingClientRect(),{top:d,height:p}=r.getBoundingClientRect();d<u?r.scrollIntoView(!0):d+p>u+c&&r.scrollIntoView(!1)})}),()=>{var l,r,u;return o("aside",{ref:i,id:"sidebar",class:["vp-sidebar",{"hide-icon":s.value.sidebarIcon===!1}]},[(l=t.top)==null?void 0:l.call(t),((r=t.default)==null?void 0:r.call(t))||o(Td,{config:a.value}),(u=t.bottom)==null?void 0:u.call(t)])}}}),Rl=B({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:t}){const n=qe(),s=ue(),a=ke(),i=oe(),{isMobile:l,isPC:r}=Ns(),[u,c]=Li(!1),[d,p]=Li(!1),v=Dl(),g=F(!1),h=A(()=>e.noNavbar||a.value.navbar===!1||i.value.navbar===!1?!1:!!(s.value.title||i.value.logo||i.value.repo||i.value.navbar)),w=A(()=>e.noSidebar?!1:a.value.sidebar!==!1&&v.value.length!==0&&!a.value.home),S=A(()=>e.noToc||a.value.home?!1:a.value.toc||i.value.toc!==!1&&a.value.toc!==!1),b={x:0,y:0},y=D=>{b.x=D.changedTouches[0].clientX,b.y=D.changedTouches[0].clientY},L=D=>{const $=D.changedTouches[0].clientX-b.x,P=D.changedTouches[0].clientY-b.y;Math.abs($)>Math.abs(P)*1.5&&Math.abs($)>40&&($>0&&b.x<=80?c(!0):c(!1))},O=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let z=0;return Ve("scroll",m2(()=>{const D=O();D<=58||D<z?g.value=!1:z+200<D&&!u.value&&(g.value=!0),z=D},300,!0)),se(l,D=>{D||c(!1)}),pe(()=>{const D=$u(document.body);se(u,P=>{D.value=P});const $=n.afterEach(()=>{c(!1)});_n(()=>{D.value=!1,$()})}),()=>o(ht("GlobalEncrypt")?et("GlobalEncrypt"):bu,()=>o("div",{class:["theme-container",{"no-navbar":!h.value,"no-sidebar":!w.value&&!(t.sidebar||t.sidebarTop||t.sidebarBottom),"has-toc":S.value,"hide-navbar":g.value,"sidebar-collapsed":!l.value&&!r.value&&d.value,"sidebar-open":l.value&&u.value},e.containerClass,a.value.containerClass||""],onTouchStart:y,onTouchEnd:L},[h.value?o(q3,{onToggleSidebar:()=>c()},{startBefore:()=>{var D;return(D=t.navbarStartBefore)==null?void 0:D.call(t)},startAfter:()=>{var D;return(D=t.navbarStartAfter)==null?void 0:D.call(t)},centerBefore:()=>{var D;return(D=t.navbarCenterBefore)==null?void 0:D.call(t)},centerAfter:()=>{var D;return(D=t.navbarCenterAfter)==null?void 0:D.call(t)},endBefore:()=>{var D;return(D=t.navbarEndBefore)==null?void 0:D.call(t)},endAfter:()=>{var D;return(D=t.navbarEndAfter)==null?void 0:D.call(t)},screenTop:()=>{var D;return(D=t.navScreenTop)==null?void 0:D.call(t)},screenBottom:()=>{var D;return(D=t.navScreenBottom)==null?void 0:D.call(t)}}):null,o(en,{name:"fade"},()=>u.value?o("div",{class:"vp-sidebar-mask",onClick:()=>c(!1)}):null),o(en,{name:"fade"},()=>l.value?null:o("div",{class:"toggle-sidebar-wrapper",onClick:()=>p()},o("span",{class:["arrow",d.value?"end":"start"]}))),o(U3,{},{...t.sidebar?{default:()=>t.sidebar()}:{},top:()=>{var D;return(D=t.sidebarTop)==null?void 0:D.call(t)},bottom:()=>{var D;return(D=t.sidebarBottom)==null?void 0:D.call(t)}}),t.default(),o(I3)]))}}),be=B({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(e,{slots:t}){const n=a=>{a.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,a.style.transform="translateY(-20px)",a.style.opacity="0"},s=a=>{a.style.transform="translateY(0)",a.style.opacity="1"};return()=>o(e.type==="single"?en:N1,{name:"drop",appear:e.appear,onAppear:n,onAfterAppear:s,onEnter:n,onAfterEnter:s,onBeforeLeave:n},()=>t.default())}});const Ri=({custom:e})=>o(gl,{class:["theme-hope-content",{custom:e}]});Ri.displayName="MarkdownContent",Ri.props={custom:Boolean};var Bl=Ri;const Cd=()=>o(ie,{name:"author"},()=>o("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));Cd.displayName="AuthorIcon";const Ld=()=>o(ie,{name:"calendar"},()=>o("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));Ld.displayName="CalendarIcon";const xd=()=>o(ie,{name:"category"},()=>o("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));xd.displayName="CategoryIcon";const Od=()=>o(ie,{name:"eye"},()=>o("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));Od.displayName="EyeIcon";const Dd=()=>o(ie,{name:"fire"},()=>o("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));Dd.displayName="FireIcon";const Rd=()=>o(ie,{name:"print"},()=>o("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));Rd.displayName="PrintIcon";const Bd=()=>o(ie,{name:"tag"},()=>o("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Bd.displayName="TagIcon";const Md=()=>o(ie,{name:"timer"},()=>o("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Md.displayName="TimerIcon";const $d=()=>o(ie,{name:"word"},()=>[o("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),o("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);$d.displayName="WordIcon";const jt=()=>{const e=oe();return A(()=>e.value.metaLocales)};var J3=B({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(e){const t=jt();return()=>e.author.length?o("span",{class:"page-author-info","aria-label":`${t.value.author}${e.pure?"":"🖊"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Cd),o("span",e.author.map(n=>n.url?o("a",{class:"page-author-item",href:n.url,target:"_blank",rel:"noopener noreferrer"},n.name):o("span",{class:"page-author-item"},n.name))),o("span",{property:"author",content:e.author.map(n=>n.name).join(", ")})]):null}}),G3=B({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(e){const t=qe(),n=ue(),s=jt(),a=(i,l="")=>{l&&n.value.path!==l&&(i.preventDefault(),t.push(l))};return()=>e.category.length?o("span",{class:"page-category-info","aria-label":`${s.value.category}${e.pure?"":"🌈"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(xd),e.category.map(({name:i,path:l})=>o("span",{class:["page-category-item",{[`category${Ma(i,9)}`]:!e.pure,clickable:l}],role:l?"navigation":"",onClick:r=>a(r,l)},i)),o("meta",{property:"articleSection",content:e.category.map(({name:i})=>i).join(",")})]):null}}),K3=B({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(e){const t=vl(),n=jt();return()=>e.date?o("span",{class:"page-date-info","aria-label":`${n.value.date}${e.pure?"":"📅"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Ld),o("span",o(Da,()=>e.localizedDate||e.date.toLocaleDateString(t.value))),o("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),W3=B({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const t=jt();return()=>e.isOriginal?o("span",{class:"page-original-info"},t.value.origin):null}}),Q3=B({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(e){const t=Et(),n=jt(),s=Ce(),a=F(0);return Bu(s,()=>{const i=s.value.textContent;i&&!isNaN(Number(i))&&(a.value=Number(i))},{childList:!0}),()=>e.pageview?o("span",{class:"page-pageview-info","aria-label":`${n.value.views}${e.pure?"":"🔢"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(a.value<1e3?Od:Dd),o("span",{ref:s,id:"ArtalkPV",class:"waline-pageview-count","data-path":ce(e.pageview)?e.pageview:Te(t.path)},"...")]):null}}),X3=B({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=jt(),n=A(()=>{if(!e.readingTime)return null;const{minutes:s}=e.readingTime;return s<1?"PT1M":`PT${Math.round(s)}M`});return()=>{var s,a;return(s=e.readingTimeLocale)!=null&&s.time?o("span",{class:"page-reading-time-info","aria-label":`${t.value.readingTime}${e.pure?"":"⌛"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Md),o("span",(a=e.readingTimeLocale)==null?void 0:a.time),o("meta",{property:"timeRequired",content:n.value})]):null}}}),Y3=B({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(e){const t=qe(),n=ue(),s=jt(),a=(i,l="")=>{l&&n.value.path!==l&&(i.preventDefault(),t.push(l))};return()=>e.tag.length?o("span",{class:"page-tag-info","aria-label":`${s.value.tag}${e.pure?"":"🏷"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Bd),e.tag.map(({name:i,path:l})=>o("span",{class:["page-tag-item",{[`tag${Ma(i,9)}`]:!e.pure,clickable:l}],role:l?"navigation":"",onClick:r=>a(r,l)},i)),o("meta",{property:"keywords",content:e.tag.map(({name:i})=>i).join(",")})]):null}}),Z3=B({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=jt();return()=>{var n,s,a;return(n=e.readingTimeLocale)!=null&&n.words?o("span",{class:"page-word-info","aria-label":`${t.value.words}${e.pure?"":"🔠"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o($d),o("span",(s=e.readingTimeLocale)==null?void 0:s.words),o("meta",{property:"wordCount",content:(a=e.readingTime)==null?void 0:a.words})]):null}}}),Vd=B({name:"PageInfo",components:{AuthorInfo:J3,CategoryInfo:G3,DateInfo:K3,OriginalInfo:W3,PageViewInfo:Q3,ReadingTimeInfo:X3,TagInfo:Y3,WordInfo:Z3},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const t=as();return()=>e.items?o("div",{class:"page-info"},e.items.map(n=>o(et(`${n}Info`),{...e.info,pure:t.value}))):null}}),eb=B({name:"PrintButton",setup(){const e=rn(),t=oe();return()=>e.value.print===!1?null:o("button",{type:"button",class:"print-button",title:t.value.metaLocales.print,onClick:()=>{window.print()}},o(Rd))}});const tb=({title:e,level:t,slug:n})=>o($e,{to:`#${n}`,class:["toc-link",`level${t}`]},()=>e),Bi=(e,t)=>{const n=Et();return e.length&&t>0?o("ul",{class:"toc-list"},e.map(s=>{const a=Bi(s.children,t-1);return[o("li",{class:["toc-item",{active:El(n,`#${s.slug}`)}]},tb(s)),a?o("li",a):null]})):null};var jd=B({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(e,{slots:t}){const n=Et(),s=ue(),a=jt(),i=Ce(),l=F("-1.7rem"),r=c=>{var d;(d=i.value)==null||d.scrollTo({top:c,behavior:"smooth"})},u=()=>{if(i.value){const c=document.querySelector(".toc-item.active");c?l.value=`${c.getBoundingClientRect().top-i.value.getBoundingClientRect().top+i.value.scrollTop}px`:l.value="-1.7rem"}else l.value="-1.7rem"};return pe(()=>{se(()=>n.hash,c=>{if(i.value){const d=document.querySelector(`#toc a.toc-link[href$="${c}"]`);if(!d)return;const{top:p,height:v}=i.value.getBoundingClientRect(),{top:g,height:h}=d.getBoundingClientRect();g<p?r(i.value.scrollTop+g-p):g+h>p+v&&r(i.value.scrollTop+g+h-p-v)}}),se(()=>n.fullPath,()=>u(),{flush:"post",immediate:!0})}),()=>{var c,d;const p=e.items.length?Bi(e.items,e.headerDepth):s.value.headers?Bi(s.value.headers,e.headerDepth):null;return p?o("div",{class:"toc-place-holder"},[o("aside",{id:"toc"},[(c=t.before)==null?void 0:c.call(t),o("div",{class:"toc-header"},[a.value.toc,o(eb)]),o("div",{class:"toc-wrapper",ref:i},[p,o("div",{class:"toc-marker",style:{top:l.value}})]),(d=t.after)==null?void 0:d.call(t)])]):null}}}),Ml=B({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=ue(),n=oe(),s=Ce(),a=({target:i})=>{const l=document.querySelector(i.hash);if(l){const r=()=>{l.removeAttribute("tabindex"),l.removeEventListener("blur",r)};l.setAttribute("tabindex","-1"),l.addEventListener("blur",r),l.focus(),window.scrollTo(0,0)}};return pe(()=>{se(()=>t.value.path,()=>s.value.focus())}),()=>[o("span",{ref:s,tabindex:"-1"}),o("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:a},n.value.routeLocales.skipToContent)]}});let ui=null,la=null;const nb={wait:()=>ui,pending:()=>{ui=new Promise(e=>la=e)},resolve:()=>{la==null||la(),ui=null,la=null}},Fd=()=>nb;var Nd=B({name:"FadeSlideY",slots:Object,setup(e,{slots:t}){const{resolve:n,pending:s}=Fd();return()=>o(en,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:n,onBeforeLeave:s},()=>{var a;return(a=t.default)==null?void 0:a.call(t)})}});const sb=(e,t)=>{const n=e.replace(t,"/").split("/"),s=[];let a=pl(t);return n.forEach((i,l)=>{l!==n.length-1?(a+=`${i}/`,s.push({link:a,name:i||"Home"})):i!==""&&(a+=i,s.push({link:a,name:i}))}),s},qd=(e,{slots:t})=>{var n,s;const{bgImage:a,bgImageDark:i,bgImageStyle:l,color:r,description:u,image:c,imageDark:d,header:p,features:v=[]}=e;return o("div",{class:"vp-feature-wrapper"},[a?o("div",{class:["vp-feature-bg",{light:i}],style:[{"background-image":`url(${a})`},l]}):null,i?o("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${i})`},l]}):null,o("div",{class:"vp-feature",style:r?{color:r}:{}},[((n=t.image)==null?void 0:n.call(t,e))||[c?o("img",{class:["vp-feature-image",{light:d}],src:Te(c),alt:p}):null,d?o("img",{class:"vp-feature-image dark",src:Te(d),alt:p}):null],((s=t.info)==null?void 0:s.call(t,e))||[p?o("h2",{class:"vp-feature-header"},p):null,u?o("p",{class:"vp-feature-description",innerHTML:u}):null],v.length?o("div",{class:"vp-features"},v.map(({icon:g,title:h,details:w,link:S})=>{const b=[o("h3",{class:"vp-feature-title"},[o(Je,{icon:g}),o("span",{innerHTML:h})]),o("p",{class:"vp-feature-details",innerHTML:w})];return S?_a(S)?o("a",{class:"vp-feature-item link",href:S,role:"navigation","aria-label":h,target:"_blank"},b):o($e,{class:"vp-feature-item link",to:S,role:"navigation","aria-label":h},()=>b):o("div",{class:"vp-feature-item"},b)})):null])])};qd.displayName="FeaturePanel";var To=qd,ab=B({name:"HeroInfo",slots:Object,setup(e,{slots:t}){const n=ke(),s=$s(),a=A(()=>n.value.heroFullScreen??!1),i=A(()=>{const{heroText:c,tagline:d}=n.value;return{text:c??s.value.title??"Hello",tagline:d??s.value.description??"",isFullScreen:a.value}}),l=A(()=>{const{heroText:c,heroImage:d,heroImageDark:p,heroAlt:v,heroImageStyle:g}=n.value;return{image:d?Te(d):null,imageDark:p?Te(p):null,heroStyle:g,alt:v||c||"hero image",isFullScreen:a.value}}),r=A(()=>{const{bgImage:c,bgImageDark:d,bgImageStyle:p}=n.value;return{image:Bt(c)?Te(c):null,imageDark:Bt(d)?Te(d):null,bgStyle:p,isFullScreen:a.value}}),u=A(()=>n.value.actions??[]);return()=>{var c,d,p;return o("header",{class:["vp-hero-info-wrapper",{fullscreen:a.value}]},[((c=t.heroBg)==null?void 0:c.call(t,r.value))||[r.value.image?o("div",{class:["vp-hero-mask",{light:r.value.imageDark}],style:[{"background-image":`url(${r.value.image})`},r.value.bgStyle]}):null,r.value.imageDark?o("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${r.value.imageDark})`},r.value.bgStyle]}):null],o("div",{class:"vp-hero-info"},[((d=t.heroImage)==null?void 0:d.call(t,l.value))||o(be,{appear:!0,type:"group"},()=>[l.value.image?o("img",{key:"light",class:["vp-hero-image",{light:l.value.imageDark}],style:l.value.heroStyle,src:l.value.image,alt:l.value.alt}):null,l.value.imageDark?o("img",{key:"dark",class:"vp-hero-image dark",style:l.value.heroStyle,src:l.value.imageDark,alt:l.value.alt}):null]),((p=t.heroInfo)==null?void 0:p.call(t,i.value))??o("div",{class:"vp-hero-infos"},[i.value.text?o(be,{appear:!0,delay:.04},()=>o("h1",{id:"main-title"},i.value.text)):null,i.value.tagline?o(be,{appear:!0,delay:.08},()=>o("p",{class:"vp-description",innerHTML:i.value.tagline})):null,u.value.length?o(be,{appear:!0,delay:.12},()=>o("p",{class:"vp-actions"},u.value.map(v=>o(We,{class:["vp-action",v.type||"default"],config:v,noExternalLinkIcon:!0})))):null])])])}}});const zd=(e,{slots:t})=>{var n,s,a;const{bgImage:i,bgImageDark:l,bgImageStyle:r,color:u,description:c,image:d,imageDark:p,header:v,highlights:g=[],type:h="un-order"}=e;return o("div",{class:"vp-highlight-wrapper",style:u?{color:u}:{}},[i?o("div",{class:["vp-highlight-bg",{light:l}],style:[{"background-image":`url(${i})`},r]}):null,l?o("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${l})`},r]}):null,o("div",{class:"vp-highlight"},[((n=t.image)==null?void 0:n.call(t,e))||[d?o("img",{class:["vp-highlight-image",{light:p}],src:Te(d),alt:v}):null,p?o("img",{class:"vp-highlight-image dark",src:Te(p),alt:v}):null],((s=t.info)==null?void 0:s.call(t,e))||[o("div",{class:"vp-highlight-info-wrapper"},o("div",{class:"vp-highlight-info"},[v?o("h2",{class:"vp-highlight-header",innerHTML:v}):null,c?o("p",{class:"vp-highlight-description",innerHTML:c}):null,((a=t.highlights)==null?void 0:a.call(t,g))||o(h==="order"?"ol":h==="no-order"?"dl":"ul",{class:"vp-highlights"},g.map(({icon:w,title:S,details:b,link:y})=>{const L=[o(h==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[w?o(Je,{class:"vp-highlight-icon",icon:w}):null,o("span",{innerHTML:S})]),b?o(h==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:b}):null];return o(h==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:y}]},y?U0(y)?o("a",{class:"vp-highlight-item link",href:y,role:"navigation","aria-label":S,target:"_blank"},L):o($e,{class:"vp-highlight-item link",to:y,role:"navigation","aria-label":S},()=>L):o("div",{class:"vp-highlight-item"},L))}))]))]])])};zd.displayName="HighlightPanel";var ib=zd,lb=B({name:"HomePage",slots:Object,setup(e,{slots:t}){const n=as(),s=ke(),a=A(()=>{const{features:l}=s.value;return W(l)?l:null}),i=A(()=>{const{highlights:l}=s.value;return W(l)?l:null});return()=>{var l,r,u,c;return o("main",{id:"main-content",class:["vp-project-home ",{pure:n.value}],"aria-labelledby":s.value.heroText===null?"":"main-title"},[(l=t.top)==null?void 0:l.call(t),o(ab),((r=i.value)==null?void 0:r.map(d=>"features"in d?o(To,d):o(ib,d)))||(a.value?o(be,{appear:!0,delay:.24},()=>o(To,{features:a.value})):null),(u=t.center)==null?void 0:u.call(t),o(be,{appear:!0,delay:.32},()=>o(Bl)),(c=t.bottom)==null?void 0:c.call(t)])}}}),rb=B({name:"BreadCrumb",setup(){const e=qe(),t=ue(),n=Vt(),s=ke(),a=oe(),i=Ce([]),l=A(()=>(s.value.breadcrumb||s.value.breadcrumb!==!1&&a.value.breadcrumb!==!1)&&i.value.length>1),r=A(()=>s.value.breadcrumbIcon||s.value.breadcrumbIcon!==!1&&a.value.breadcrumbIcon!==!1),u=()=>{const c=e.getRoutes(),d=sb(t.value.path,n.value).map(({link:p,name:v})=>{const g=c.find(h=>h.path===p);if(g){const{meta:h,path:w}=Wn(e,g.path);return{title:h[Ee.shortTitle]||h[Ee.title]||v,icon:h[Ee.icon],path:w}}return null}).filter(p=>p!==null);d.length>1&&(i.value=d)};return pe(()=>{u(),se(()=>t.value.path,u)}),()=>o("nav",{class:["vp-breadcrumb",{disable:!l.value}]},l.value?o("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},i.value.map((c,d)=>o("li",{class:{"is-active":i.value.length-1===d},property:"itemListElement",typeof:"ListItem"},[o($e,{to:c.path,property:"item",typeof:"WebPage"},()=>[r.value?o(Je,{icon:c.icon}):null,o("span",{property:"name"},c.title||"Unknown")]),o("meta",{property:"position",content:d+1})]))):[])}});const Co=e=>{const t=qe();return e===!1?!1:ce(e)?jn(t,e,!0):Ms(e)?e:null},Mi=(e,t,n)=>{const s=e.findIndex(a=>a.link===t);if(s!==-1){const a=e[s+n];return a!=null&&a.link?a:null}for(const a of e)if(a.children){const i=Mi(a.children,t,n);if(i)return i}return null};var ob=B({name:"PageNav",setup(){const e=oe(),t=ke(),n=Dl(),s=ue(),a=Fs(),i=A(()=>{const r=Co(t.value.prev);return r===!1?null:r||(e.value.prevLink===!1?null:Mi(n.value,s.value.path,-1))}),l=A(()=>{const r=Co(t.value.next);return r===!1?null:r||(e.value.nextLink===!1?null:Mi(n.value,s.value.path,1))});return Ve("keydown",r=>{r.altKey&&(r.key==="ArrowRight"?l.value&&(a(l.value.link),r.preventDefault()):r.key==="ArrowLeft"&&i.value&&(a(i.value.link),r.preventDefault()))}),()=>i.value||l.value?o("nav",{class:"vp-page-nav"},[i.value?o(We,{class:"prev",config:i.value},()=>{var r,u;return[o("div",{class:"hint"},[o("span",{class:"arrow start"}),e.value.metaLocales.prev]),o("div",{class:"link"},[o(Je,{icon:(r=i.value)==null?void 0:r.icon}),(u=i.value)==null?void 0:u.text])]}):null,l.value?o(We,{class:"next",config:l.value},()=>{var r,u;return[o("div",{class:"hint"},[e.value.metaLocales.next,o("span",{class:"arrow end"})]),o("div",{class:"link"},[(r=l.value)==null?void 0:r.text,o(Je,{icon:(u=l.value)==null?void 0:u.icon})])]}):null]):null}});const cb={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},ub=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:s,editLinkPattern:a})=>{if(!s)return null;const i=Au(e);let l;return a?l=a:i!==null&&(l=cb[i]),l?l.replace(/:repo/,En(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,Uc(`${pl(n)}/${s}`)):null},db=()=>{const e=oe(),t=ue(),n=ke();return A(()=>{const{repo:s,docsRepo:a=s,docsBranch:i="main",docsDir:l="",editLink:r,editLinkPattern:u=""}=e.value;if(!(n.value.editLink??r??!0)||!a)return null;const c=ub({docsRepo:a,docsBranch:i,docsDir:l,editLinkPattern:u,filePathRelative:t.value.filePathRelative});return c?{text:e.value.metaLocales.editLink,link:c}:null})},pb=()=>{const e=$s(),t=oe(),n=ue(),s=ke();return A(()=>{var a,i;return!(s.value.lastUpdated??t.value.lastUpdated??!0)||!((a=n.value.git)!=null&&a.updatedTime)?null:new Date((i=n.value.git)==null?void 0:i.updatedTime).toLocaleString(e.value.lang)})},vb=()=>{const e=oe(),t=ue(),n=ke();return A(()=>{var s;return n.value.contributors??e.value.contributors??!0?((s=t.value.git)==null?void 0:s.contributors)??null:null})};var mb=B({name:"PageTitle",setup(){const e=ue(),t=ke(),n=oe(),{info:s,items:a}=b3();return()=>o("div",{class:"vp-page-title"},[o("h1",[n.value.titleIcon===!1?null:o(Je,{icon:t.value.icon}),e.value.title]),o(Vd,{info:s.value,...a.value===null?{}:{items:a.value}}),o("hr")])}});const Hd=()=>o(ie,{name:"edit"},()=>[o("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),o("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Hd.displayName="EditIcon";var gb=B({name:"PageMeta",setup(){const e=oe(),t=db(),n=pb(),s=vb();return()=>{const{metaLocales:a}=e.value;return o("footer",{class:"page-meta"},[t.value?o("div",{class:"meta-item edit-link"},o(We,{class:"label",config:t.value},{before:()=>o(Hd)})):null,o("div",{class:"meta-item git-info"},[n.value?o("div",{class:"update-time"},[o("span",{class:"label"},`${a.lastUpdated}: `),o(Da,()=>o("span",{class:"info"},n.value))]):null,s.value&&s.value.length?o("div",{class:"contributors"},[o("span",{class:"label"},`${a.contributors}: `),s.value.map(({email:i,name:l},r)=>[o("span",{class:"contributor",title:`email: ${i}`},l),r!==s.value.length-1?",":""])]):null])])}}}),fb=B({name:"NormalPage",slots:Object,setup(e,{slots:t}){const n=ke(),s=ue(),{isDarkmode:a}=qs(),i=oe(),l=A(()=>n.value.toc||n.value.toc!==!1&&i.value.toc!==!1);return()=>o("main",{id:"main-content",class:"vp-page"},o(ht("LocalEncrypt")?et("LocalEncrypt"):bu,()=>{var r,u,c,d;return[(r=t.top)==null?void 0:r.call(t),n.value.cover?o("img",{class:"page-cover",src:Te(n.value.cover),alt:s.value.title,"no-view":""}):null,o(rb),o(mb),l.value?o(jd,{headerDepth:n.value.headerDepth??i.value.headerDepth??2},{before:()=>{var p;return(p=t.tocBefore)==null?void 0:p.call(t)},after:()=>{var p;return(p=t.tocAfter)==null?void 0:p.call(t)}}):null,(u=t.contentBefore)==null?void 0:u.call(t),o(Bl),(c=t.contentAfter)==null?void 0:c.call(t),o(gb),o(ob),ht("CommentService")?o(et("CommentService"),{darkmode:a.value}):null,(d=t.bottom)==null?void 0:d.call(t)]}))}}),bb=B({name:"Layout",setup(){const e=rn(),t=oe(),n=ue(),s=ke(),{isMobile:a}=Ns(),i=A(()=>{var l,r;return((l=t.value.blog)==null?void 0:l.sidebarDisplay)||((r=e.value.blog)==null?void 0:r.sidebarDisplay)||"mobile"});return()=>[o(Ml),o(Rl,{},{default:()=>s.value.home?o(lb):o(Nd,()=>o(fb,{key:n.value.path})),...i.value!=="none"?{navScreenBottom:()=>o(et("BloggerInfo"))}:{},...!a.value&&i.value==="always"?{sidebar:()=>o(et("BloggerInfo"))}:{}})]}}),hb=B({name:"NotFoundHint",setup(){const e=oe(),t=()=>{const n=e.value.routeLocales.notFoundMsg;return n[Math.floor(Math.random()*n.length)]};return()=>o("div",{class:"not-found-hint"},[o("p",{class:"error-code"},"404"),o("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),o("p",{class:"error-hint"},t())])}}),kb=B({name:"NotFound",slots:Object,setup(e,{slots:t}){const n=Vt(),s=oe(),{navigate:a}=Ii({to:s.value.home??n.value});return()=>[o(Ml),o(Rl,{noSidebar:!0},()=>{var i;return o("main",{id:"main-content",class:"vp-page not-found"},((i=t.default)==null?void 0:i.call(t))||[o(hb),o("div",{class:"actions"},[o("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},s.value.routeLocales.back),o("button",{type:"button",class:"action-button",onClick:()=>a()},s.value.routeLocales.home)])])})]}});const yb={GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>'},_b={category:{"/":{path:"/category/",map:{算法:{path:"/category/%E7%AE%97%E6%B3%95/",keys:["v-2db914b0","v-434b990c","v-013fe386","v-2c0b6453","v-7f701d4a","v-e8550a0c"]},技巧:{path:"/category/%E6%8A%80%E5%B7%A7/",keys:["v-2669abe4","v-0041281f"]},后端框架:{path:"/category/%E5%90%8E%E7%AB%AF%E6%A1%86%E6%9E%B6/",keys:["v-8577ef52","v-d1d1d3cc","v-7a1ee8c4","v-4b591cc2","v-d1989f48","v-f63cc7c8","v-632f1be4","v-6fb57558","v-2706221b","v-7a9a6e12","v-97a18dc8"]},elk:{path:"/category/elk/",keys:["v-8577ef52"]},Mybatis:{path:"/category/mybatis/",keys:["v-4b591cc2"]},"MyBatis-Plus":{path:"/category/mybatis-plus/",keys:["v-d1989f48"]},RabbitMQ:{path:"/category/rabbitmq/",keys:["v-d1d1d3cc"]},Spring:{path:"/category/spring/",keys:["v-f63cc7c8"]},SpringBoot:{path:"/category/springboot/",keys:["v-632f1be4","v-6fb57558"]},SpringCloud:{path:"/category/springcloud/",keys:["v-2706221b","v-7a9a6e12"]},SpringMVC:{path:"/category/springmvc/",keys:["v-97a18dc8"]},swagger:{path:"/category/swagger/",keys:["v-7a1ee8c4"]},后端技术:{path:"/category/%E5%90%8E%E7%AB%AF%E6%8A%80%E6%9C%AF/",keys:["v-2ac42c0b","v-41f030d6","v-6d241b5d","v-d3bc8416","v-2d51a49f","v-5b2d3140","v-476eae3c","v-106ab87c"]},activiti:{path:"/category/activiti/",keys:["v-2ac42c0b"]},android:{path:"/category/android/",keys:["v-41f030d6"]},Bash:{path:"/category/bash/",keys:["v-6d241b5d","v-d3bc8416"]},docker:{path:"/category/docker/",keys:["v-2d51a49f","v-5b2d3140"]},maven:{path:"/category/maven/",keys:["v-476eae3c"]},yaml:{path:"/category/yaml/",keys:["v-106ab87c"]},数据库:{path:"/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",keys:["v-4f1a648a","v-02544884","v-5196b250","v-2179c7dc","v-468f0997"]},Mysql:{path:"/category/mysql/",keys:["v-5196b250","v-2179c7dc"]},Oracle:{path:"/category/oracle/",keys:["v-468f0997"]},Redis:{path:"/category/redis/",keys:["v-4f1a648a"]},编程语言:{path:"/category/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/",keys:["v-0357f249","v-c3c11a36","v-4f00b37c","v-eff6200a","v-31bde1ba","v-f33d5ffc","v-6e13ebe8","v-0f87f09a","v-3f21900f","v-36970167","v-86a4c8da","v-88b1b032","v-ab8fb5bc","v-7ad12457","v-08abb1af"]},前端:{path:"/category/%E5%89%8D%E7%AB%AF/",keys:["v-0357f249","v-c3c11a36","v-4f00b37c","v-eff6200a","v-31bde1ba","v-f33d5ffc"]},Java:{path:"/category/java/",keys:["v-6e13ebe8","v-0f87f09a","v-3f21900f","v-36970167","v-86a4c8da","v-88b1b032","v-ab8fb5bc","v-7ad12457"]},Python:{path:"/category/python/",keys:["v-08abb1af"]},NoSql:{path:"/category/nosql/",keys:["v-02544884"]},MongoDB:{path:"/category/mongodb/",keys:["v-02544884"]},前端框架:{path:"/category/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/",keys:["v-b7c7acc0"]},vue:{path:"/category/vue/",keys:["v-b7c7acc0"]},前端技术:{path:"/category/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/",keys:["v-4d675cd4"]},websocket:{path:"/category/websocket/",keys:["v-4d675cd4"]}}}},tag:{"/":{path:"/tag/",map:{算法:{path:"/tag/%E7%AE%97%E6%B3%95/",keys:["v-2db914b0","v-434b990c","v-013fe386","v-2c0b6453","v-7f701d4a","v-e8550a0c"]},技巧:{path:"/tag/%E6%8A%80%E5%B7%A7/",keys:["v-2669abe4","v-0041281f"]},elk:{path:"/tag/elk/",keys:["v-8577ef52"]},elasticsearch:{path:"/tag/elasticsearch/",keys:["v-8577ef52"]},Mybatis:{path:"/tag/mybatis/",keys:["v-4b591cc2"]},"MyBatis-Plus":{path:"/tag/mybatis-plus/",keys:["v-d1989f48"]},RabbitMQ:{path:"/tag/rabbitmq/",keys:["v-d1d1d3cc"]},Spring:{path:"/tag/spring/",keys:["v-f63cc7c8"]},SpringBoot:{path:"/tag/springboot/",keys:["v-632f1be4","v-6fb57558"]},SpringCloud:{path:"/tag/springcloud/",keys:["v-2706221b","v-7a9a6e12"]},项目总结:{path:"/tag/%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/",keys:["v-2706221b","v-b7c7acc0"]},SpringMVC:{path:"/tag/springmvc/",keys:["v-97a18dc8"]},swagger:{path:"/tag/swagger/",keys:["v-7a1ee8c4"]},activiti:{path:"/tag/activiti/",keys:["v-2ac42c0b"]},工作流:{path:"/tag/%E5%B7%A5%E4%BD%9C%E6%B5%81/",keys:["v-2ac42c0b"]},android:{path:"/tag/android/",keys:["v-41f030d6"]},Bash:{path:"/tag/bash/",keys:["v-6d241b5d","v-d3bc8416"]},docker:{path:"/tag/docker/",keys:["v-2d51a49f","v-5b2d3140"]},maven:{path:"/tag/maven/",keys:["v-476eae3c"]},yaml:{path:"/tag/yaml/",keys:["v-106ab87c"]},数据库:{path:"/tag/%E6%95%B0%E6%8D%AE%E5%BA%93/",keys:["v-5196b250","v-2179c7dc"]},Mysql:{path:"/tag/mysql/",keys:["v-5196b250","v-2179c7dc"]},Oracle:{path:"/tag/oracle/",keys:["v-468f0997"]},Redis:{path:"/tag/redis/",keys:["v-4f1a648a"]},CSS:{path:"/tag/css/",keys:["v-0357f249"]},JavaScript:{path:"/tag/javascript/",keys:["v-c3c11a36","v-4f00b37c","v-eff6200a"]},HTML:{path:"/tag/html/",keys:["v-31bde1ba","v-f33d5ffc"]},Java:{path:"/tag/java/",keys:["v-6e13ebe8","v-0f87f09a","v-3f21900f","v-36970167","v-86a4c8da","v-88b1b032","v-ab8fb5bc","v-7ad12457"]},Python:{path:"/tag/python/",keys:["v-08abb1af"]},MongoDB:{path:"/tag/mongodb/",keys:["v-02544884"]},vue:{path:"/tag/vue/",keys:["v-b7c7acc0"]},websocket:{path:"/tag/websocket/",keys:["v-4d675cd4"]}}}}},Eb={article:{"/":{path:"/article/",keys:["v-184f4da6","v-2e3eac9e","v-2db914b0","v-434b990c","v-013fe386","v-f4face08","v-7bd30a60","v-7dd7f45d","v-2ccdf990","v-599fbcfb","v-2365654c","v-8577ef52","v-d1d1d3cc","v-7a1ee8c4","v-4f1a648a","v-4d18a865","v-e25b971c","v-9087045a","v-02544884","v-2c0b6453","v-7f701d4a","v-e8550a0c","v-2669abe4","v-0041281f","v-4b591cc2","v-d1989f48","v-f63cc7c8","v-632f1be4","v-6fb57558","v-2706221b","v-7a9a6e12","v-97a18dc8","v-2ac42c0b","v-41f030d6","v-6d241b5d","v-d3bc8416","v-2d51a49f","v-5b2d3140","v-476eae3c","v-106ab87c","v-5196b250","v-2179c7dc","v-468f0997","v-0357f249","v-c3c11a36","v-4f00b37c","v-eff6200a","v-31bde1ba","v-f33d5ffc","v-6e13ebe8","v-0f87f09a","v-3f21900f","v-36970167","v-86a4c8da","v-88b1b032","v-ab8fb5bc","v-7ad12457","v-08abb1af","v-b7c7acc0","v-4d675cd4"]}},star:{"/":{path:"/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-184f4da6","v-2e3eac9e","v-2db914b0","v-434b990c","v-013fe386","v-f4face08","v-7bd30a60","v-7dd7f45d","v-2ccdf990","v-599fbcfb","v-2365654c","v-8577ef52","v-d1d1d3cc","v-7a1ee8c4","v-4f1a648a","v-4d18a865","v-e25b971c","v-9087045a","v-02544884","v-2c0b6453","v-7f701d4a","v-e8550a0c","v-2669abe4","v-0041281f","v-4b591cc2","v-d1989f48","v-f63cc7c8","v-632f1be4","v-6fb57558","v-2706221b","v-7a9a6e12","v-97a18dc8","v-2ac42c0b","v-41f030d6","v-6d241b5d","v-d3bc8416","v-2d51a49f","v-5b2d3140","v-476eae3c","v-106ab87c","v-5196b250","v-2179c7dc","v-468f0997","v-0357f249","v-c3c11a36","v-4f00b37c","v-eff6200a","v-31bde1ba","v-f33d5ffc","v-6e13ebe8","v-0f87f09a","v-3f21900f","v-36970167","v-86a4c8da","v-88b1b032","v-ab8fb5bc","v-7ad12457","v-08abb1af","v-b7c7acc0","v-4d675cd4"]}}},Lo=F(_b),Ud=(e="")=>{const t=ue(),n=qe(),s=Vt();return A(()=>{var a;const i=e||((a=ke().value.blog)==null?void 0:a.key)||"";if(!i)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const l=n.getRoutes();if(!Lo.value[i])throw new Error(`useBlogCategory: key ${i} is invalid`);const r=Lo.value[i][s.value],u={path:r.path,map:{}};for(const c in r.map){const d=r.map[c];u.map[c]={path:d.path,items:[]};for(const p of d.keys){const v=l.find(({name:g})=>g===p);if(v){const g=Wn(n,v.path);u.map[c].items.push({path:g.path,info:g.meta})}}t.value.path===d.path&&(u.currentItems=u.map[c].items)}return u})},xo=F(Eb),Va=(e="")=>{const t=qe(),n=Vt();return A(()=>{var s;const a=e||((s=ke().value.blog)==null?void 0:s.key)||"";if(!a)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!xo.value[a])throw new Error(`useBlogType: key ${e} is invalid`);const i=t.getRoutes(),l=xo.value[a][n.value],r={path:l.path,items:[]};for(const u of l.keys){const c=i.find(({name:d})=>d===u);if(c){const d=Wn(t,c.path);r.items.push({path:d.path,info:d.meta})}}return r})};const Ab="/assets/hero-197a9d2d.jpg",Jd=Symbol.for("categoryMap"),zs=()=>{const e=fe(Jd);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},wb=()=>{const e=Ud("category");bt(Jd,e)},Hs=()=>{const e=rn(),t=oe();return A(()=>({...e.value.blog,...t.value.blog}))},Gd=Symbol.for("tagMap"),Us=()=>{const e=fe(Gd);if(!e)throw new Error("useTagMap() is called without provider.");return e},Sb=()=>{const e=Ud("tag");bt(Gd,e)},Ib=e=>{const t=oe();return A(()=>{const{[Ee.author]:n}=e.value;return n?Ts(n):n===!1?[]:Ts(t.value.author,!1)})},Pb=e=>{const t=zs();return A(()=>yu(e.value[Ee.category]).map(n=>({name:n,path:t.value.map[n].path})))},Tb=e=>{const t=Us();return A(()=>_u(e.value[Ee.tag]).map(n=>({name:n,path:t.value.map[n].path})))},Cb=e=>A(()=>{const{[Ee.date]:t}=e.value;return kl(t)}),Lb=e=>{const t=es(e,"info"),n=Hs(),s=Ib(t),a=Pb(t),i=Tb(t),l=Cb(t),r=ld(),u=A(()=>({author:s.value,category:a.value,date:l.value,localizedDate:t.value[Ee.localizedDate]||"",tag:i.value,isOriginal:t.value[Ee.isOriginal]||!1,readingTime:t.value[Ee.readingTime]||null,readingTimeLocale:t.value[Ee.readingTime]&&r.value?id(t.value[Ee.readingTime],r.value):null,pageview:e.path})),c=A(()=>n.value.articleInfo);return{info:u,items:c}},Kd=Symbol(""),Js=()=>{const e=fe(Kd);if(!e)throw new Error("useArticles() is called without provider.");return e},xb=()=>{const e=Va("article");bt(Kd,e)},Wd=Symbol(""),$l=()=>{const e=fe(Wd);if(!e)throw new Error("useStars() is called without provider.");return e},Ob=()=>{const e=Va("star");bt(Wd,e)},Qd=Symbol(""),Vl=()=>{const e=fe(Qd);if(!e)throw new Error("useTimelines() is called without provider.");return e},Db=()=>{const e=Va("timeline"),t=A(()=>{const n=[];return e.value.items.forEach(({info:s,path:a})=>{const i=kl(s[Ee.date]),l=i==null?void 0:i.getFullYear(),r=i?i.getMonth()+1:null,u=i==null?void 0:i.getDate();l&&r&&u&&((!n[0]||n[0].year!==l)&&n.unshift({year:l,items:[]}),n[0].items.push({date:`${r}/${u}`,info:s,path:a}))}),{...e.value,config:n.reverse()}});bt(Qd,t)},Rb=()=>{xb(),wb(),Ob(),Sb(),Db()};var Bb=B({name:"SocialMedia",setup(){const e=Hs(),t=as(),n=A(()=>{const s=e.value.medias;return s?ts(s).map(([a,i])=>({name:a,icon:yb[a],url:i})):[]});return()=>n.value.length?o("div",{class:"vp-social-medias"},n.value.map(({name:s,icon:a,url:i})=>o("a",{class:"vp-social-media",href:i,rel:"noopener noreferrer",target:"_blank","aria-label":s,...t.value?{}:{"data-balloon-pos":"up"},innerHTML:a}))):null}}),jl=B({name:"BloggerInfo",setup(){const e=Hs(),t=$s(),n=oe(),s=Js(),a=zs(),i=Us(),l=Vl(),r=Fs(),u=A(()=>{var v;return e.value.name||((v=Ts(n.value.author)[0])==null?void 0:v.name)||t.value.title}),c=A(()=>e.value.avatar||n.value.logo),d=A(()=>n.value.blogLocales),p=A(()=>e.value.intro);return()=>{const{article:v,category:g,tag:h,timeline:w}=d.value,S=[[s.value.path,s.value.items.length,v],[a.value.path,nt(a.value.map).length,g],[i.value.path,nt(i.value.map).length,h],[l.value.path,l.value.items.length,w]];return o("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[o("div",{class:"vp-blogger",...p.value?{style:{cursor:"pointer"},"aria-label":d.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>r(p.value)}:{}},[c.value?o("img",{class:["vp-blogger-avatar",{round:e.value.roundAvatar}],src:Te(c.value),property:"image",alt:"Blogger Avatar"}):null,u.value?o("div",{class:"vp-blogger-name",property:"name"},u.value):null,e.value.description?o("div",{class:"vp-blogger-description",innerHTML:e.value.description}):null,p.value?o("meta",{property:"url",content:Te(p.value)}):null]),o("div",{class:"vp-blog-counts"},S.map(([b,y,L])=>o($e,{class:"vp-blog-count",to:b},()=>[o("div",{class:"count"},y),o("div",L)]))),o(Bb)])}}});const $i=()=>o(ie,{name:"category"},()=>o("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));$i.displayName="CategoryIcon";const Vi=()=>o(ie,{name:"tag"},()=>o("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Vi.displayName="TagIcon";const Fl=()=>o(ie,{name:"timeline"},()=>o("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Fl.displayName="TimelineIcon";const Xd=()=>o(ie,{name:"slides"},()=>o("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));Xd.displayName="SlideIcon";const Yd=()=>o(ie,{name:"sticky"},()=>[o("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);Yd.displayName="StickyIcon";const wa=()=>o(ie,{name:"article"},()=>o("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));wa.displayName="ArticleIcon";const Zd=()=>o(ie,{name:"book"},()=>o("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));Zd.displayName="BookIcon";const ep=()=>o(ie,{name:"link"},()=>o("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));ep.displayName="LinkIcon";const tp=()=>o(ie,{name:"project"},()=>o("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));tp.displayName="ProjectIcon";const np=()=>o(ie,{name:"friend"},()=>o("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));np.displayName="FriendIcon";const ji=()=>o(ie,{name:"slide-down"},()=>o("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));ji.displayName="SlideDownIcon";const sp=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});sp.displayName="EmptyIcon";const ap=()=>o(ie,{name:"lock"},()=>o("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));ap.displayName="LockIcon";var Mb=B({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const n=es(e,"info"),{info:s,items:a}=Lb(e);return()=>{var i,l,r;const{[Ee.title]:u,[Ee.type]:c,[Ee.isEncrypted]:d=!1,[Ee.cover]:p,[Ee.excerpt]:v,[Ee.sticky]:g}=n.value,h=s.value;return o("div",{class:"vp-article-wrapper"},o("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((i=t.cover)==null?void 0:i.call(t,{cover:p}))||(p?[o("img",{class:"vp-article-cover",src:Te(p)}),o("meta",{property:"image",content:Te(p)})]:[]),g?o(Yd):null,o($e,{to:e.path},()=>{var w;return((w=t.title)==null?void 0:w.call(t,{title:u,isEncrypted:d,type:c}))||o("header",{class:"vp-article-title"},[d?o(ap):null,c===od.slide?o(Xd):null,o("span",{property:"headline"},u)])}),((l=t.excerpt)==null?void 0:l.call(t,{excerpt:v}))||(v?o("div",{class:"vp-article-excerpt",innerHTML:v}):null),o("hr",{class:"vp-article-hr"}),((r=t.info)==null?void 0:r.call(t,{info:h}))||o(Vd,{info:h,...a.value?{items:a.value}:{}})]))}}}),$b=B({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:t}){let n;const s=oe(),a=F(""),i=A(()=>s.value.paginationLocales),l=A(()=>Math.ceil(e.total/e.perPage)),r=A(()=>!!l.value&&l.value!==1),u=A(()=>l.value<7?!1:e.current>4),c=A(()=>l.value<7?!1:e.current<l.value-3),d=A(()=>{const{current:g}=e;let h=1,w=l.value;const S=[];l.value>=7&&(g<=4&&g<l.value-3?(h=1,w=5):g>4&&g>=l.value-3?(w=l.value,h=l.value-4):l.value>7&&(h=g-2,w=g+2));for(let b=h;b<=w;b++)S.push(b);return S}),p=g=>t("updateCurrentPage",g),v=g=>{const h=parseInt(g);h<=l.value&&h>0?p(h):n.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${i.value.errorText.replace(/\$page/g,l.value.toString())}`)};return pe(()=>{n=new X0}),()=>o("div",{class:"vp-pagination"},r.value?o("div",{class:"vp-pagination-list"},[o("div",{class:"vp-pagination-number "},[e.current>1?o("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>p(e.current-1)},i.value.prev):null,u.value?[o("div",{role:"navigation",onClick:()=>p(1)},1),o("div",{class:"ellipsis"},"...")]:null,d.value.map(g=>o("div",{key:g,class:{active:e.current===g},role:"navigation",onClick:()=>p(g)},g)),c.value?[o("div",{class:"ellipsis"},"..."),o("div",{role:"navigation",onClick:()=>p(l.value)},l.value)]:null,e.current<l.value?o("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>p(e.current+1)},i.value.next):null]),o("div",{class:"vp-pagination-nav"},[o("label",{for:"navigation-text"},`${i.value.navigate}: `),o("input",{id:"navigation-text",value:a.value,onInput:({target:g})=>{a.value=g.value},onKeydown:g=>{g.key==="Enter"&&(g.preventDefault(),v(a.value))}}),o("button",{class:"vp-pagination-button",role:"navigation",title:i.value.action,onClick:()=>v(a.value)},i.value.action)])]):[])}}),Nl=B({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const t=Et(),n=qe(),s=Hs(),a=F(1),i=A(()=>s.value.articlePerPage||10),l=A(()=>e.items.slice((a.value-1)*i.value,a.value*i.value)),r=u=>{a.value=u;const c={...t.query};c.page===u.toString()||u===1&&!c.page||(u===1?delete c.page:c.page=u.toString(),n.push({path:t.path,query:c}))};return pe(()=>{const{page:u}=t.query;r(u?Number(u):1),m(()=>import("./pageview-f85b323a.js"),[]).then(({updatePageview:c})=>{c()}),se(a,()=>{const c=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,c)},100)}),se(()=>t.query,({page:c})=>{r(c?Number(c):1)})}),()=>o("div",{id:"article-list",class:"vp-article-list"},l.value.length?[...l.value.map(({info:u,path:c},d)=>o(be,{appear:!0,delay:d*.04},()=>o(Mb,{key:c,info:u,path:c}))),o($b,{current:a.value,perPage:i.value,total:e.items.length,onUpdateCurrentPage:r})]:o(sp))}}),ql=B({name:"CategoryList",setup(){const e=ue(),t=zs();return()=>o("ul",{class:"vp-category-list"},ts(t.value.map).map(([n,{path:s,items:a}])=>o("li",{class:["vp-category",`vp-category${Ma(n,9)}`,{active:s===e.value.path}]},o($e,{to:s},()=>[n,o("span",{class:"count"},a.length)]))))}}),zl=B({name:"TagList",setup(){const e=ke(),t=Us(),n=s=>{var a;return s===((a=e.value.blog)==null?void 0:a.name)};return()=>o("ul",{class:"tag-list-wrapper"},ts(t.value.map).map(([s,{path:a,items:i}])=>o("li",{class:["tag",`tag${Ma(s,9)}`,{active:n(s)}]},o($e,{to:a},()=>[s,o("span",{class:"tag-num"},i.length)]))))}}),Vb=B({name:"TimelineList",setup(){const e=oe(),t=Vl(),n=Fs(),s=A(()=>e.value.blogLocales.timeline);return()=>o("div",{class:"timeline-list-wrapper"},[o("div",{class:"timeline-list-title",onClick:()=>n(t.value.path)},[o(Fl),o("span",{class:"num"},t.value.items.length),s.value]),o("hr"),o("div",{class:"timeline-content"},o("ul",{class:"timeline-list"},t.value.config.map(({year:a,items:i},l)=>o(be,{appear:!0,delay:.08*(l+1)},()=>o("li",[o("h3",{class:"timeline-year"},a),o("ul",{class:"timeline-year-wrapper"},i.map(({date:r,info:u,path:c})=>o("li",{class:"timeline-item"},[o("span",{class:"timeline-date"},r),o($e,{class:"timeline-title",to:c},()=>u[Ee.title])])))])))))])}}),ip=B({name:"InfoList",setup(){const e=oe(),t=Js(),n=zs(),s=A(()=>nt(n.value.map).length),a=$l(),i=Us(),l=A(()=>nt(i.value.map).length),r=Fs(),u=F("article"),c=A(()=>e.value.blogLocales),d=[["article",wa],["category",$i],["tag",Vi],["timeline",Fl]];return()=>o("div",{class:"vp-blog-infos"},[o("div",{class:"vp-blog-type-switcher"},d.map(([p,v])=>o("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{u.value=p}},o("div",{class:["icon-wrapper",{active:u.value===p}],"aria-label":c.value[p],"data-balloon-pos":"up"},o(v))))),o(be,()=>u.value==="article"?o("div",{class:"vp-sticky-article-wrapper"},[o("div",{class:"title",onClick:()=>r(t.value.path)},[o(wa),o("span",{class:"num"},t.value.items.length),c.value.article]),o("hr"),o("ul",{class:"vp-sticky-articles"},a.value.items.map(({info:p,path:v},g)=>o(be,{appear:!0,delay:.08*(g+1)},()=>o("li",{class:"vp-sticky-article"},o($e,{to:v},()=>p[Ee.title])))))]):u.value==="category"?o("div",{class:"vp-category-wrapper"},[s.value?o("div",{class:"title",onClick:()=>r(n.value.path)},[o($i),o("span",{class:"num"},s.value),c.value.category]):null,o("hr"),o(be,{delay:.04},()=>o(ql))]):u.value==="tag"?o("div",{class:"vp-tag-wrapper"},[l.value?o("div",{class:"title",onClick:()=>r(i.value.path)},[o(Vi),o("span",{class:"num"},l.value),c.value.tag]):null,o("hr"),o(be,{delay:.04},()=>o(zl))]):o(be,()=>o(Vb)))])}}),ja=B({name:"BlogWrapper",slots:Object,setup(e,{slots:t}){const{isMobile:n}=Ns();return()=>[o(Ml),o(Rl,{noSidebar:!0,noToc:!0},{default:()=>t.default(),navScreenBottom:()=>o(jl),...n.value?{sidebar:()=>o(ip)}:{}})]}});const lp=()=>o("aside",{class:"vp-blog-info-wrapper"},[o(be,()=>o(jl)),o(be,{delay:.04},()=>o(ip))]);lp.displayName="InfoPanel";var Fa=lp,jb=B({name:"BlogPage",components:{CategoryList:ql,TagList:zl},setup(){const e=ue(),t=ke(),n=zs(),s=Us(),a=A(()=>t.value.blog||{}),i=A(()=>{const{key:r=""}=a.value;return r==="category"?"CategoryList":r==="tag"?"TagList":null}),l=A(()=>{const{name:r="",key:u=""}=a.value;return u==="category"?r?n.value.map[r].items:[]:u==="tag"?r?s.value.map[r].items:[]:[]});return()=>o(ja,()=>o("div",{class:"vp-page vp-blog"},o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(be,()=>i.value?o(et(i.value)):null),a.value.name?o(be,{appear:!0,delay:.24},()=>o(Nl,{key:e.value.path,items:l.value})):null]),o(be,{delay:.16},()=>o(Fa,{key:"blog"}))])))}}),Fb=B({name:"BlogHero",slots:Object,setup(e,{slots:t}){const n=ke(),s=$s(),a=Ce(),i=A(()=>n.value.heroFullScreen??!1),l=A(()=>{const{heroText:u,heroImage:c,heroImageDark:d,heroAlt:p,heroImageStyle:v,tagline:g}=n.value;return{text:u??s.value.title??"Hello",image:c?Te(c):null,imageDark:d?Te(d):null,heroStyle:v,alt:p||u||"hero image",tagline:g??"",isFullScreen:i.value}}),r=A(()=>{const{bgImage:u,bgImageDark:c,bgImageStyle:d}=n.value;return{image:ce(u)?Te(u):u===!1?null:Ab,imageDark:ce(c)?Te(c):null,bgStyle:d,isFullScreen:i.value}});return()=>{var u,c;return n.value.hero===!1?null:o("div",{ref:a,class:["vp-blog-hero",{fullscreen:i.value,"no-bg":!r.value.image}]},[((u=t.heroBg)==null?void 0:u.call(t,r.value))||[r.value.image?o("div",{class:["vp-blog-mask",{light:r.value.imageDark}],style:[{background:`url(${r.value.image}) center/cover no-repeat`},r.value.bgStyle]}):null,r.value.imageDark?o("div",{class:"vp-blog-mask dark",style:[{background:`url(${r.value.imageDark}) center/cover no-repeat`},r.value.bgStyle]}):null],((c=t.heroInfo)==null?void 0:c.call(t,l.value))||[o(be,{appear:!0,type:"group",delay:.04},()=>[l.value.image?o("img",{key:"light",class:["vp-blog-hero-image",{light:l.value.imageDark}],style:l.value.heroStyle,src:l.value.image,alt:l.value.alt}):null,l.value.imageDark?o("img",{key:"dark",class:"vp-blog-hero-image dark",style:l.value.heroStyle,src:l.value.imageDark,alt:l.value.alt}):null]),o(be,{appear:!0,delay:.08},()=>l.value.text?o("h1",{class:"vp-blog-hero-title"},l.value.text):null),o(be,{appear:!0,delay:.12},()=>l.value.tagline?o("p",{class:"vp-blog-hero-description",innerHTML:l.value.tagline}):null)],l.value.isFullScreen?o("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:a.value.clientHeight,behavior:"smooth"})}},[o(ji),o(ji)]):null])}}});const Nb=["link","article","book","project","friend"];var qb=B({name:"ProjectPanel",components:{ArticleIcon:wa,BookIcon:Zd,FriendIcon:np,LinkIcon:ep,ProjectIcon:tp},setup(){const e=ke(),t=as(),n=Fs(),s=(a="",i="icon")=>Nb.includes(a)?o(et(`${a}-icon`)):En(a)?o("img",{class:"vp-project-image",src:a,alt:i}):$a(a)?o("img",{class:"vp-project-image",src:Te(a),alt:i}):o(Je,{icon:a});return()=>{var a;return(a=e.value.projects)!=null&&a.length?o("div",{class:"vp-project-panel"},e.value.projects.map(({icon:i,link:l,name:r,desc:u},c)=>o("div",{class:["vp-project-card",{[`project${c%9}`]:!t.value}],onClick:()=>n(l)},[s(i,r),o("div",{class:"vp-project-name"},r),o("div",{class:"vp-project-desc"},u)]))):null}}}),zb=B({name:"BlogHome",setup(){const e=Js();return()=>o("div",{class:"vp-page vp-blog"},[o(Fb),o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(be,{appear:!0,delay:.16},()=>o(qb)),o(be,{appear:!0,delay:.24},()=>o(Nl,{items:e.value.items}))]),o(be,{appear:!0,delay:.16},()=>o(Fa,{key:"blog"}))]),o(be,{appear:!0,delay:.28},()=>o(Bl))])}}),Hb=B({name:"BlogHome",setup(){return()=>o(ja,()=>o(zb))}}),rp=B({name:"ArticleType",setup(){const e=ue(),t=Vt(),n=oe(),s=Js(),a=$l(),i=A(()=>{const l=n.value.blogLocales;return[{text:l.all,path:s.value.path},{text:l.star,path:a.value.path},...[].map(({key:r,path:u})=>({text:l[r],path:u.replace(/^\//,t.value)}))]});return()=>o("ul",{class:"vp-article-type-wrapper"},i.value.map(l=>o("li",{class:["vp-article-type",{active:l.path===e.value.path}]},o($e,{to:l.path},()=>l.text))))}}),Ub=B({name:"BlogPage",setup(){const e=Va(),t=ke(),n=ue(),s=Js(),a=$l(),i=A(()=>{const{key:l="",type:r}=t.value.blog||{};return l==="star"?a.value.items:r==="type"&&l?e.value.items:s.value.items});return()=>o(ja,()=>o("div",{class:"vp-page vp-blog"},o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(be,()=>o(rp)),o(be,{appear:!0,delay:.24},()=>o(Nl,{key:n.value.path,items:i.value}))]),o(be,{delay:.16},()=>o(Fa,{key:"blog"}))])))}}),Jb=B({name:"TimelineItems",setup(){const e=Hs(),t=oe(),n=Vl(),s=A(()=>e.value.timeline||t.value.blogLocales.timelineTitle),a=A(()=>n.value.config.map(({year:i})=>({title:i.toString(),level:2,slug:i.toString(),children:[]})));return()=>o("div",{class:"timeline-wrapper"},o("ul",{class:"timeline-content"},[o(be,()=>o("li",{class:"motto"},s.value)),o(jd,{items:a.value}),n.value.config.map(({year:i,items:l},r)=>o(be,{appear:!0,delay:.08*(r+1),type:"group"},()=>[o("h3",{key:"title",id:i,class:"timeline-year-title"},o("span",i)),o("li",{key:"content",class:"timeline-year-list"},[o("ul",{class:"timeline-year-wrapper"},l.map(({date:u,info:c,path:d})=>o("li",{class:"timeline-item"},[o("span",{class:"timeline-date"},u),o($e,{class:"timeline-title",to:d},()=>c[Ee.title])])))])]))]))}}),Gb=B({name:"Timeline",components:{ArticleType:rp,CategoryList:ql,TagList:zl},setup(){return()=>o(ja,()=>o("div",{class:"vp-page vp-blog"},o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(be,{appear:!0,delay:.24},()=>o(Jb))]),o(be,{delay:.16},()=>o(Fa,{key:"blog"}))])))}});const Pn="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),di=Array.from({length:64},(e,t)=>t),ra=e=>Array(e).fill(-1),Ut=[...ra(46),0,1,...di.slice(54,64),...ra(7),...di.slice(2,28),...ra(6),...di.slice(28,54),...ra(5)],Oo=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],Do=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],op=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],Fi=(e,t)=>{if(t<=0||t>e.length)throw Error(`Illegal len: ${t}`);let n=0,s,a;const i=[];for(;n<t;){if(s=e[n++]&255,i.push(Pn[s>>2&63]),s=(s&3)<<4,n>=t){i.push(Pn[s&63]);break}if(a=e[n++]&255,s|=a>>4&15,i.push(Pn[s&63]),s=(a&15)<<2,n>=t){i.push(Pn[s&63]);break}a=e[n++]&255,s|=a>>6&3,i.push(Pn[s&63]),i.push(Pn[a&63])}return i.join("")},Kb=(e,t)=>{if(t<=0)throw Error(`Illegal len: ${t}`);const n=e.length;let s=0,a=0,i,l,r,u,c,d;const p=[];for(;s<n-1&&a<t&&(d=e.charCodeAt(s++),i=d<Ut.length?Ut[d]:-1,d=e.charCodeAt(s++),l=d<Ut.length?Ut[d]:-1,!(i==-1||l==-1||(c=i<<2>>>0,c|=(l&48)>>4,p.push(String.fromCharCode(c)),++a>=t||s>=n)||(d=e.charCodeAt(s++),r=d<Ut.length?Ut[d]:-1,r==-1)||(c=(l&15)<<4>>>0,c|=(r&60)>>2,p.push(String.fromCharCode(c)),++a>=t||s>=n)));)d=e.charCodeAt(s++),u=d<Ut.length?Ut[d]:-1,c=(r&3)<<6>>>0,c|=u,p.push(String.fromCharCode(c)),++a;return p.map(v=>v.charCodeAt(0))},Wb=(e,t)=>{let n=null;for(typeof e=="number"&&(n=e,e=()=>null);n!==null||(n=e())!==null;)n<128?t(n&127):n<2048?(t(n>>6&31|192),t(n&63|128)):n<65536?(t(n>>12&15|224),t(n>>6&63|128),t(n&63|128)):(t(n>>18&7|240),t(n>>12&63|128),t(n>>6&63|128),t(n&63|128)),n=null},Qb=(e,t)=>{let n,s=null;for(;(n=s!==null?s:e())!==null;){if(n>=55296&&n<=57343&&(s=e())!==null&&s>=56320&&s<=57343){t((n-55296)*1024+s-56320+65536),s=null;continue}t(n)}s!==null&&t(s)},Xb=(e,t)=>{Qb(e,function(n){Wb(n,t)})},Yb=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout,Zb=e=>{const t=[];let n=0;return Xb(()=>n>=e.length?null:e.charCodeAt(n++),s=>{t.push(s)}),t},Cs=(e,t,n,s)=>{let a,i=e[t],l=e[t+1];return i^=n[0],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],l^=a^n[1],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],i^=a^n[2],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],l^=a^n[3],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],i^=a^n[4],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],l^=a^n[5],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],i^=a^n[6],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],l^=a^n[7],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],i^=a^n[8],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],l^=a^n[9],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],i^=a^n[10],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],l^=a^n[11],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],i^=a^n[12],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],l^=a^n[13],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],i^=a^n[14],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],l^=a^n[15],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],i^=a^n[16],e[t]=l^n[16+1],e[t+1]=i,e},Cn=(e,t)=>{let n=0;for(let s=0;s<4;++s)n=n<<8|e[t]&255,t=(t+1)%e.length;return{key:n,offp:t}},Ro=(e,t,n)=>{const s=t.length,a=n.length;let i=0,l=[0,0],r;for(let u=0;u<s;u++)r=Cn(e,i),i=r.offp,t[u]=t[u]^r.key;for(let u=0;u<s;u+=2)l=Cs(l,0,t,n),t[u]=l[0],t[u+1]=l[1];for(let u=0;u<a;u+=2)l=Cs(l,0,t,n),n[u]=l[0],n[u+1]=l[1]},e4=(e,t,n,s)=>{const a=n.length,i=s.length;let l=0,r=[0,0],u;for(let c=0;c<a;c++)u=Cn(t,l),l=u.offp,n[c]=n[c]^u.key;l=0;for(let c=0;c<a;c+=2)u=Cn(e,l),l=u.offp,r[0]^=u.key,u=Cn(e,l),l=u.offp,r[1]^=u.key,r=Cs(r,0,n,s),n[c]=r[0],n[c+1]=r[1];for(let c=0;c<i;c+=2)u=Cn(e,l),l=u.offp,r[0]^=u.key,u=Cn(e,l),l=u.offp,r[1]^=u.key,r=Cs(r,0,n,s),s[c]=r[0],s[c+1]=r[1]},Bo=(e,t,n,s,a)=>{const i=op.slice(),l=i.length;if(n<4||n>31){const v=new Error(`Illegal number of rounds (4-31): ${n}`);if(s===!1)return Promise.reject(v);throw v}if(t.length!==16){const v=new Error(`Illegal salt length: ${t.length} != 16`);if(s===!1)return Promise.reject(v);throw v}n=1<<n>>>0;let r,u,c=0,d;Int32Array?(r=new Int32Array(Oo),u=new Int32Array(Do)):(r=Oo.slice(),u=Do.slice()),e4(t,e,r,u);const p=()=>{if(a&&a(c/n),c<n){const v=Date.now();for(;c<n&&(c=c+1,Ro(e,r,u),Ro(t,r,u),!(Date.now()-v>100)););}else{for(c=0;c<64;c++)for(d=0;d<l>>1;d++)Cs(i,d<<1,r,u);const v=[];for(c=0;c<l;c++)v.push((i[c]>>24&255)>>>0),v.push((i[c]>>16&255)>>>0),v.push((i[c]>>8&255)>>>0),v.push((i[c]&255)>>>0);return s===!1?Promise.resolve(v):v}if(s===!1)return new Promise(v=>Yb(()=>{p().then(v)}))};if(s===!1)return p();{let v;for(;;)if(typeof(v=p())<"u")return v||[]}},t4=e=>{try{let t;return(self.crypto||self.msCrypto).getRandomValues(t=new Uint32Array(e)),Array.prototype.slice.call(t)}catch{throw Error("WebCryptoAPI is not available")}},n4=(e=10)=>{if(typeof e!="number")throw Error("Illegal arguments: "+typeof e);e<4?e=4:e>31&&(e=31);const t=[];return t.push("$2a$"),e<10&&t.push("0"),t.push(e.toString()),t.push("$"),t.push(Fi(t4(16),16)),t.join("")};function s4(e,t,n,s){if(typeof e!="string"||typeof t!="string"){const g=new Error("Invalid string / salt: Not a string");if(n===!1)return Promise.reject(g);throw g}let a,i;if(t.charAt(0)!=="$"||t.charAt(1)!=="2"){const g=new Error("Invalid salt version: "+t.substring(0,2));if(n===!1)return Promise.reject(g);throw g}if(t.charAt(2)==="$")a=String.fromCharCode(0),i=3;else{if(a=t.charAt(2),a!=="a"&&a!=="b"&&a!=="y"||t.charAt(3)!=="$"){const g=Error("Invalid salt revision: "+t.substring(2,4));if(n===!1)return Promise.reject(g);throw g}i=4}if(t.charAt(i+2)>"$"){const g=new Error("Missing salt rounds");if(n===!1)return Promise.reject(g);throw g}const l=parseInt(t.substring(i,i+1),10)*10,r=parseInt(t.substring(i+1,i+2),10),u=l+r,c=t.substring(i+3,i+25);e+=a>="a"?"\0":"";const d=Zb(e),p=Kb(c,16),v=g=>{const h=[];return h.push("$2"),a>="a"&&h.push(a),h.push("$"),u<10&&h.push("0"),h.push(u.toString()),h.push("$"),h.push(Fi(p,p.length)),h.push(Fi(g,op.length*4-1)),h.join("")};return n===!1?Bo(d,p,u,!1,s).then(g=>v(g)):v(Bo(d,p,u,!0,s))}const a4=(e,t=10)=>{if(typeof t=="number"&&(t=n4(t)),typeof e!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof t);return s4(e,t,!0)},Ni=(e,t)=>{if(typeof e!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof t);return t.length!==60?!1:a4(e,t.substring(0,t.length-31))===t},cp=()=>o(ie,{name:"lock"},()=>o("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));cp.displayName="LockIcon";var up=B({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup(e,{emit:t}){const n=ke(),s=oe(),a=F(""),i=F(!1),l=F(!1),r=A(()=>s.value.encryptLocales);let u=null;const c=()=>{u&&clearTimeout(u),i.value=!1,t("verify",a.value,l.value),sn().then(()=>{i.value=!0,u=setTimeout(()=>{i.value=!1},1e3)})};return()=>o("div",{class:["vp-decrypt-layer",{expand:e.full||n.value.home}]},o("div",{class:"vp-decrypt-modal"},[o("div",{class:["vp-decrypt-hint",{tried:i.value}]},i.value?r.value.errorHint:o(cp,{"aria-label":r.value.iconLabel})),o("div",{class:"vp-decrypt-input"},[o("input",{type:"password",value:a.value,placeholder:r.value.placeholder,onInput:({target:d})=>{a.value=d.value},onKeydown:({key:d})=>{d==="Enter"&&c()}})]),o("div",{class:"vp-remember-password"},[o("input",{type:"checkbox",value:l.value,onChange:()=>l.value=!l.value}),r.value.remember]),o("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>c()},"OK")]))}});const dp=()=>{const e=rn();return A(()=>e.value.encrypt||{})},Mo="VUEPRESS_HOPE_GLOBAL_TOKEN",i4=()=>{const e=dp(),t=ss(Mo,""),n=Vu(Mo,""),s=A(()=>{const{global:i=!1,admin:l=[]}=e.value;return i&&l.length>0}),a=A(()=>{if(s.value){if(t.value)return e.value.admin.some(i=>Ni(t.value,i));if(n.value)return e.value.admin.some(i=>Ni(n.value,i))}return!1});return{isEncrypted:s,isDecrypted:a,validate:(i,l=!1)=>{(l?t:n).value=i}}},pi=(e="",t)=>!!e&&Ni(e,t),$o="VUEPRESS_HOPE_PATH_TOKEN",l4=()=>{const e=ue(),t=dp(),n=ss($o,{}),s=Vu($o,{}),a=l=>Ms(t.value.config)?nt(t.value.config).filter(r=>Kn(decodeURI(l),r)).sort((r,u)=>u.length-r.length):[],i=l=>{const r=a(l);if(r.length>0){const{config:u={}}=t.value;return{isEncrypted:!0,isDecrypted:r.some(c=>n.value[c]&&u[c].some(d=>pi(n.value[c],d))||s.value[c]&&u[c].some(d=>pi(s.value[c],d)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:A(()=>i(e.value.path)),getStatus:i,validate:(l,r=!1)=>{const{config:u={}}=t.value,c=a(e.value.path);for(const d of c)if(u[d].filter(p=>pi(l,p))){(r?n:s).value[d]=l;break}}}};var r4=B({name:"GlobalEncrypt",slots:Object,setup(e,{slots:t}){const{isDecrypted:n,isEncrypted:s,validate:a}=i4(),i=F(!1);return pe(()=>{i.value=!0}),()=>o(Nd,()=>s.value?i.value?n.value?t.default():o(up,{full:!0,onVerify:a}):null:t.default())}}),o4=B({name:"LocalEncrypt",slots:Object,setup(e,{slots:t}){const{status:n,validate:s}=l4(),a=F(!1);return pe(()=>{a.value=!0}),()=>{const{isEncrypted:i,isDecrypted:l}=n.value;return i?a.value?l?t.default()||null:o(up,{full:!0,onVerify:s}):null:t.default()||null}}});var c4=B({name:"SlidePage",setup(){const e=qe(),t=F(!1),n=Ce(),s=()=>{t.value=!t.value},a=()=>{t.value=!1},i=()=>{a(),window.history.go(-1)},l=()=>{a(),e.push("/")};return L2(n,a),()=>o("div",{class:"vp-reveal-page"},[o(gl),o("div",{ref:n,class:["vp-reveal-menu",{active:t.value}]},[o("button",{type:"button",class:"menu-button",onClick:()=>s()},o("span",{class:"icon"})),o("button",{type:"button",class:"back-button",onClick:()=>i()},o(nf)),o("button",{type:"button",class:"home-button",onClick:()=>l()},o(sf))])])}});gg(Je);const u4=_t({enhance:({app:e,router:t})=>{const{scrollBehavior:n}=t.options;t.options.scrollBehavior=async(...s)=>(await Fd().wait(),n(...s)),y3(e),e.component("HopeIcon",Je),e.component("VPLink",$e),e.component("BloggerInfo",jl),e.component("GlobalEncrypt",r4),e.component("LocalEncrypt",o4)},setup:()=>{_3(),S3(),Rb()},layouts:{Layout:bb,NotFound:kb,BlogCategory:jb,BlogHome:Hb,BlogType:Ub,Timeline:Gb,Slide:c4}}),oa=[_m,rg,mg,kg,Eg,Ig,xg,Hg,Xg,Zf,c3,u4],d4=[["v-8daa1a0e","/",{y:"h",t:"Alooc的博客",i:"home"},["/README.md"]],["v-184f4da6","/intro.html",{d:172684892e4,v:"/assets/images/cover3.jpg",e:`<h1> 介绍页</h1>
<p>将你的个人介绍和档案放置在此处。</p>
`,r:{minutes:.08,words:23},y:"a",t:"介绍页",i:"circle-info"},[":md"]],["v-2e3eac9e","/slides.html",{d:172684892e4,e:`<!-- markdownlint-disable MD024 MD033 MD051 -->
`,r:{minutes:3.24,words:973},y:"s",t:"Slide page",i:"person-chalkboard"},[":md"]],["v-2db914b0","/blog/algorithm/base/1%E3%80%81%E7%AE%97%E6%B3%95%E6%8C%87%E6%A0%87%E5%8F%8A%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.html",{d:172684892e4,c:["算法"],g:"算法",e:`<h1> 一、衡量算法的指标</h1>
<h2> 1. 时间复杂度</h2>
<p>大致估计算法执行时间的量级。</p>
<blockquote>
<p>master公式计算递归复杂度，只适用于子问题规模一致，用到时直接百度公式</p>
</blockquote>
<h2> 2. 空间复杂度</h2>
<p>大致估计算法执行所需内存空间的量级</p>
<h2> 3. 对数器</h2>
<p>使用最笨方法实现一个最基本的算法，作为对数器，来校验算法是否正确。</p>
<h1> 二、排序算法</h1>
<h2> 1. 如何分类</h2>
<h3> a. 是否基于元素之间的比较进行排序</h3>
<pre><code>- 基于比较的排序：插入、冒泡、归并等
- 不基于比较的排序：桶排序，基数排序
</code></pre>`,r:{minutes:7.77,words:2331},y:"a",t:"1、算法指标及排序算法"},["/blog/algorithm/base/1、算法指标及排序算法.html","/blog/algorithm/base/1、算法指标及排序算法.md",":md"]],["v-434b990c","/blog/algorithm/base/2%E3%80%81%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html",{d:172684892e4,c:["算法"],g:"算法",e:`<h1> 1. 基础数据结构概述</h1>
<ul>
<li>数组</li>
<li>链表</li>
<li>栈</li>
<li>队列</li>
<li>堆、加强堆</li>
<li>树
<ul>
<li>二叉树</li>
<li>完全二叉树</li>
<li>搜索二叉树</li>
<li>平衡二叉树</li>
</ul>
</li>
<li>并查集</li>
<li>图</li>
<li>滑动窗口</li>
<li>单调栈</li>
<li>哈希表</li>
<li>有序表</li>
<li>红黑树</li>
</ul>
<h1> 2. 基础数据结构详解</h1>
<h2> 1. 数组</h2>`,r:{minutes:2.08,words:623},y:"a",t:"2、基础数据结构"},["/blog/algorithm/base/2、基础数据结构.html","/blog/algorithm/base/2、基础数据结构.md",":md"]],["v-013fe386","/blog/algorithm/base/3%E3%80%81%E5%9F%BA%E7%A1%80%E7%AE%97%E6%B3%95.html",{d:172684892e4,c:["算法"],g:"算法",e:`<blockquote>
<p>左神NB</p>
</blockquote>
<h1> 1. 贪心算法</h1>
<ul>
<li>1、最自然智慧的算法</li>
<li>2、用一种局部最功利的标准，总是做出在当前看来最好的选择</li>
<li>3、难点在于证明局部最功利的标准可以得到全局最优解</li>
<li>4、对于贪心算法的学习主要以增加阅历为主</li>
</ul>
<h1> 2. 暴力递归</h1>
<ul>
<li>暴力递归就是尝试</li>
<li>1、把问题转换为规模缩小了的同类问题的子问题</li>
<li>2、有明确的不需要继续进行递归的条件（base case)</li>
<li>3、有当得到了子问题的结果之后的决策过程</li>
<li>4、不记录每一个子问题的解</li>
</ul>`,r:{minutes:3.66,words:1099},y:"a",t:"2、基础算法"},["/blog/algorithm/base/3、基础算法.html","/blog/algorithm/base/3、基础算法.md",":md"]],["v-f4face08","/blog/old/algorithm/",{d:172684892e4,e:`<h1> 算法</h1>
<ul>
<li><a href="/blog/algorithm/%E7%AE%97%E6%B3%95%E6%80%BB%E7%BB%93.html" target="blank">算法总结</a></li>
<li><a href="/blog/algorithm/%E5%B7%A6%E7%A5%9E%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80%E8%AF%BE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html" target="blank">左神算法基础课学习笔记</a></li>
<li><a href="/blog/algorithm/%E5%B7%A6%E7%A5%9E%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80%E6%8F%90%E5%8D%87%E8%AF%BE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html" target="blank">左神算法基础提升课学习笔记</a></li>
</ul>`,r:{minutes:.21,words:64},y:"a",t:"算法"},["/blog/old/algorithm/README.md"]],["v-2c0b6453","/blog/old/algorithm/%E5%B7%A6%E7%A5%9E%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80%E6%8F%90%E5%8D%87%E8%AF%BE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["算法"],g:"算法",r:{minutes:.1,words:29},y:"a",t:"左神算法基础提升课学习笔记"},["/blog/old/algorithm/左神算法基础提升课学习笔记.html","/blog/old/algorithm/左神算法基础提升课学习笔记.md",":md"]],["v-7f701d4a","/blog/old/algorithm/%E5%B7%A6%E7%A5%9E%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80%E8%AF%BE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["算法"],g:"算法",e:`<p>时间复杂度：</p>
<p>​	<img src="https://raw.githubusercontent.com/alooc/images/main/image-20220225114342859.png" alt="image-20220225114342859" loading="lazy"></p>
<p>异或运算 不同为1 相同为0</p>
<p>取一个数最右侧的1 eor &amp; (~eor + 1)</p>
<figure><img src="https://raw.githubusercontent.com/alooc/images/main/image-20220308211917740.png" alt="image-20220308211917740" tabindex="0" loading="lazy"><figcaption>image-20220308211917740</figcaption></figure>`,r:{minutes:2.65,words:796},y:"a",t:"左神算法基础课学习笔记"},["/blog/old/algorithm/左神算法基础课学习笔记.html","/blog/old/algorithm/左神算法基础课学习笔记.md",":md"]],["v-e8550a0c","/blog/old/algorithm/%E7%AE%97%E6%B3%95%E6%80%BB%E7%BB%93.html",{d:1577869375e3,l:"2020年1月1日",c:["算法"],g:"算法",e:`<h1> 一、排序算法</h1>
<h2> 选择性排序：</h2>
<p><code>对[0.....n-1] 长度为n的数组排序</code></p>
<h3> 1. 选择排序</h3>
<ul>
<li>从0开始遍历数组：
<ul>
<li>后面位置依次与当前位置比较
<ul>
<li>小于当前位置的交换</li>
</ul>
</li>
</ul>
</li>
<li>遍历结束，排序结束</li>
</ul>
<p><strong>O(n²)</strong></p>
<p><strong>O(1)</strong></p>
<p><strong>不稳定</strong></p>
<h3> 2. 冒泡排序</h3>`,r:{minutes:2.82,words:846},y:"a",t:"基础算法总结"},["/blog/old/algorithm/算法总结.html","/blog/old/algorithm/算法总结.md",":md"]],["v-7bd30a60","/blog/old/beframework/",{d:172684892e4,e:`<h1> 后端框架</h1>
<ul>
<li>
<p>Mybatis</p>
<ul>
<li><a href="/blog/beframework/mybatis/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html" target="blank">基础总结</a></li>
</ul>
</li>
<li>
<p>Mybatis-Plus</p>
<ul>
<li><a href="/blog/beframework/mybatisplus/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html" target="blank">基础总结</a></li>
</ul>
</li>
<li>
<p>Spring</p>
<ul>
<li>Spring
<ul>
<li><a href="/blog/beframework/spring/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html" target="blank">基础总结</a></li>
</ul>
</li>
<li>SpringMVC
<ul>
<li><a href="/blog/beframework/springmvc/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html" target="blank">基础总结</a></li>
</ul>
</li>
<li>SpringBoot
<ul>
<li><a href="/blog/beframework/springboot/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html" target="blank">基础总结</a></li>
<li><a href="/blog/beframework/springboot/%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90.html" target="blank">源码分析</a></li>
</ul>
</li>
<li>SpringCloud
<ul>
<li><a href="/blog/beframework/springcloud/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html" target="blank">基础总结</a></li>
<li><a href="/blog/beframework/springcloud/springcloud%E9%A1%B9%E7%9B%AE%E5%B0%9A%E5%8C%BB%E9%80%9A%E6%80%BB%E7%BB%93.html" target="blank">springcloud项目《尚医通》总结</a></li>
</ul>
</li>
</ul>
</li>
<li>
<p>Swagger</p>
<ul>
<li><a href="/blog/beframework/swagger/swagger.html" target="blank">简单使用</a></li>
</ul>
</li>
<li>
<p>ELK</p>
<ul>
<li><a href="/blog/beframework/elk/elasticsearch.html" target="blank">Elasticsearch</a></li>
</ul>
</li>
</ul>`,r:{minutes:.36,words:108},y:"a",t:"后端框架"},["/blog/old/beframework/README.md"]],["v-7dd7f45d","/blog/old/beskill/",{d:172684892e4,e:`<h1> 后端技术</h1>
<ul>
<li><a href="/blog/beskill/activiti/activiti6%E5%9F%BA%E7%A1%80%E7%AC%94%E8%AE%B0.html" target="blank">activiti6基础笔记</a></li>
<li><a href="/blog/beskill/android/%E7%AC%AC%E4%B8%80%E8%A1%8C%E4%BB%A3%E7%A0%81%E7%AC%94%E8%AE%B0.html" target="blank">Android第一行代码笔记</a></li>
<li>Bash
<ul>
<li><a href="/blog/beskill/bash/Bash%E5%9F%BA%E7%A1%80%E7%AC%94%E8%AE%B0.html" target="blank">Bash基础笔记</a></li>
<li><a href="/blog/beskill/bash/%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html" target="blank">常用命令</a></li>
</ul>
</li>
<li>Docker
<ul>
<li><a href="/blog/beskill/docker/docker%E5%91%BD%E4%BB%A4.html" target="blank">docker命令</a></li>
<li><a href="/blog/beskill/docker/%E5%B8%B8%E7%94%A8%E9%95%9C%E5%83%8F%E5%91%BD%E4%BB%A4.html" target="blank">常用镜像命令</a></li>
</ul>
</li>
<li><a href="/blog/beskill/maven/maven%E6%B7%B1%E5%85%A5%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html" target="blank">maven深入学习笔记</a></li>
<li><a href="/blog/beskill/yaml/yaml%E8%AF%AD%E6%B3%95.html" target="blank">yaml语法</a></li>
</ul>`,r:{minutes:.33,words:98},y:"a",t:"后端技术"},["/blog/old/beskill/README.md"]],["v-2ccdf990","/blog/old/database/",{d:172684892e4,e:`<h1> 数据库</h1>
<ul>
<li><a href="/blog/database/mysql/%E5%9F%BA%E7%A1%80.html" target="blank">基础</a></li>
<li><a href="/blog/database/mysql/java%E6%95%B4%E5%90%88mysql.html" target="blank">java整合mysql</a></li>
<li><a href="/blog/database/oracle/Oracle%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html" target="blank">Oracle基础总结</a></li>
</ul>`,r:{minutes:.09,words:28},y:"a",t:"数据库"},["/blog/old/database/README.md"]],["v-599fbcfb","/blog/old/language/",{d:172684892e4,e:`<h1> 编程语言</h1>
<ul>
<li>前端
<ul>
<li><a href="/blog/language/fe/CSS%E4%B8%96%E7%95%8C%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html" target="blank">《CSS世界》学习笔记</a></li>
<li><a href="/blog/language/fe/JavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html" target="blank">《JavaScript高级程序设计》学习笔记</a></li>
<li><a href="/blog/language/fe/JavaScript%E7%AC%94%E8%AE%B0.html" target="blank">JavaScript笔记</a></li>
<li><a href="/blog/language/fe/jquery_ajax%E7%AC%94%E8%AE%B0.html" target="blank">jquery_ajax笔记</a></li>
<li><a href="/blog/language/fe/%E7%96%AF%E7%8B%82HTML5+CSS3+JavaScript%E8%AE%B2%E4%B9%89%E7%AC%94%E8%AE%B0.html" target="blank">疯狂HTML5+CSS3+JavaScript讲义笔记</a></li>
<li><a href="/blog/language/fe/%E7%96%AF%E7%8B%82%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E8%AE%B2%E4%B9%89%E7%AC%94%E8%AE%B0.html" target="blank">疯狂前端开发讲义笔记</a></li>
</ul>
</li>
<li>Java
<ul>
<li><a href="/blog/language/java/JSP_Servlet%E7%AC%94%E8%AE%B0.html" target="blank">JSP_Servlet笔记</a></li>
<li><a href="/blog/language/java/JUC.html" target="blank">JUC</a></li>
<li><a href="/blog/language/java/%E6%8A%BD%E8%B1%A1%E7%B1%BB%E5%92%8C%E6%8E%A5%E5%8F%A3.html" target="blank">抽象类和接口</a></li>
<li><a href="/blog/language/java/%E5%9F%BA%E7%A1%80.html" target="blank">基础</a></li>
<li><a href="/blog/language/java/%E9%9B%86%E5%90%88.html" target="blank">集合</a></li>
<li><a href="/blog/language/java/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%E3%80%8Ajava%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C%E3%80%8B.html" target="blank">学习笔记《java开发手册》</a></li>
<li><a href="/blog/language/java/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%E3%80%8A%E7%96%AF%E7%8B%82Java%E8%AE%B2%E4%B9%89%E3%80%8B.html" target="blank">学习笔记《疯狂Java讲义》</a></li>
<li><a href="/blog/language/java/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%E3%80%8A%E7%A0%81%E5%87%BA%E9%AB%98%E6%95%88%EF%BC%9AJava%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C%E3%80%8B.html" target="blank">学习笔记《码出高效：Java开发手册》</a></li>
</ul>
</li>
<li>Python
<ul>
<li><a href="/blog/language/python/note.html" target="blank">基础总结</a></li>
</ul>
</li>
</ul>`,r:{minutes:.7,words:210},y:"a",t:"编程语言"},["/blog/old/language/README.md"]],["v-2365654c","/blog/old/skill/",{d:172684892e4,e:`<h1> 技巧</h1>
<ul>
<li><a href="/blog/skill/%E6%8A%80%E5%B7%A7.html" target="blank">技巧</a></li>
<li><a href="/blog/skill/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html" target="blank">设计模式</a></li>
</ul>
`,r:{minutes:.06,words:18},y:"a",t:"技巧"},["/blog/old/skill/README.md"]],["v-2669abe4","/blog/old/skill/%E6%8A%80%E5%B7%A7.html",{d:1577869375e3,l:"2020年1月1日",c:["技巧"],g:["技巧"],e:`<blockquote>
<p>对某一个工具的了解程度关系到了我们的开发工作量</p>
</blockquote>
<p><a href="https://www.xuxueli.com/xxl-job/" target="_blank" rel="noopener noreferrer">https://www.xuxueli.com/xxl-job/</a></p>
`,r:{minutes:.17,words:51},y:"a",t:"常用开发技巧总结Ing"},["/blog/old/skill/技巧.html","/blog/old/skill/技巧.md",":md"]],["v-0041281f","/blog/old/skill/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html",{d:1577869375e3,l:"2020年1月1日",c:["技巧"],g:["技巧"],e:`<h1> 0、UML</h1>
<figure><img src="https://raw.githubusercontent.com/alooc/images/main/blog/1679451590308-007a8ca7-908b-4625-a742-4b294844180.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://raw.githubusercontent.com/alooc/images/main/blog/1679451610891-0cb9e106-3e35-407f-a06b-436aaf070f5e.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:6.18,words:1853},y:"a",t:"设计模式"},["/blog/old/skill/设计模式.html","/blog/old/skill/设计模式.md",":md"]],["v-8577ef52","/blog/old/beframework/elk/elasticsearch.html",{d:172684892e4,c:["后端框架","elk"],g:["elk","elasticsearch"],e:`<blockquote>
<p><strong>ELK 到底是什么呢？</strong> “ELK”是三个开源项目的首字母缩写，这三个项目分别是：Elasticsearch、Logstash 和 Kibana。Elasticsearch 是一个搜索和分析引擎。Logstash 是服务器端数据处理管道，能够同时从多个来源采集数据，转换数据，然后将数据发送到诸如 Elasticsearch 等“存储库”中。Kibana 则可以让用户在 Elasticsearch 中使用图形和图表对数据进行可视化。<a href="https://www.elastic.co/cn/what-is/elk-stack" target="_blank" rel="noopener noreferrer">ELK</a></p>
</blockquote>`,r:{minutes:1.5,words:450},y:"a",t:"elasticsearch使用指南"},[":md"]],["v-4b591cc2","/blog/old/beframework/mybatis/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html",{d:1577869375e3,l:"2020年1月1日",c:["后端框架","Mybatis"],g:"Mybatis",e:`<h1> 使用JDBC</h1>
<h2> 1. 使用</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span>  <span class="token keyword">void</span> <span class="token function">testConnection5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    	<span class="token comment">//1.加载配置文件</span>
        <span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">ConnectionTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"jdbc.properties"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Properties</span> pros <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pros<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//2.读取配置信息</span>
        <span class="token class-name">String</span> user <span class="token operator">=</span> pros<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> pros<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> pros<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> driverClass <span class="token operator">=</span> pros<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"driverClass"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3.加载驱动</span>
        <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>driverClass<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//4.获取连接</span>
        <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>user<span class="token punctuation">,</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:12.31,words:3693},y:"a",t:"MyBatis基础用法总结"},["/blog/old/beframework/mybatis/基础总结.html","/blog/old/beframework/mybatis/基础总结.md",":md"]],["v-d1989f48","/blog/old/beframework/mybatisplus/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html",{d:1577869375e3,l:"2020年1月1日",c:["后端框架","MyBatis-Plus"],g:"MyBatis-Plus",e:`<h1> MyBatis-Plus</h1>
<h2> 1. 引入</h2>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mp.version</span><span class="token punctuation">&gt;</span></span>3.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mp.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>freemarker.version</span><span class="token punctuation">&gt;</span></span>2.3.31<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>freemarker.version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>	
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--mybatis-plus启动器--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${mp.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--lombok用于简化实体类开发--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--mysql驱动--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--自动生成代码--&gt;</span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-generator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${mp.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.freemarker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>freemarker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${freemarker.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.13,words:2140},y:"a",t:"MyBatis-Plus基础用法总结"},["/blog/old/beframework/mybatisplus/基础总结.html","/blog/old/beframework/mybatisplus/基础总结.md",":md"]],["v-d1d1d3cc","/blog/old/beframework/rabbitmq/rabbitmq.html",{d:172684892e4,c:["后端框架","RabbitMQ"],g:["RabbitMQ"],e:`<h1> 前置概念了解：</h1>
<h3> 什么是AMQP 和 JMS？</h3>
<p><strong>AMQP</strong>：即Advanced Message Queuing Protocol，是一个应用层标准高级消息队列协议，提供统一消息服务。是应用层协议的一个开放标准，为面向消息的中间件设计。基于此协议的客户端与消息中间件可传递消息，并不受客户端/中间件不同产品，不同的开发语言等条件的限制。<strong>Erlang中的实现有RabbitMQ</strong>等。</p>
<p><strong>JMS</strong>：即Java消息服务（Java Message Service）<strong>应用程序接口</strong>，由sun公司提出，并且sun公司定义好了接口。包括create、send、recieve。只要想使用它，就得实现它定义的接口。 消息服务是一个与具体平台无关的API，绝大多数MOM提供商都对JMS提供支持。不好的地方是语言层面的限制，只能为JAVA，这其实稍微有点和微服务的观点相违背。要求语言只能是JAVA，而不能是py等。</p>`,r:{minutes:2.56,words:768},y:"a",t:"RabbitMQ使用指南"},[":md"]],["v-f63cc7c8","/blog/old/beframework/spring/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html",{d:1577869375e3,l:"2020年1月1日",c:["后端框架","Spring"],g:"Spring",e:`<h1> Spring的基本用法：</h1>
<p>​	<code>spring是一个很普通但很实用的一个框架，它提取了大量实际开发中需要重复解决的步骤，将这些步骤抽象成一个框架。</code></p>
<h2> 1.spring简介：</h2>
<ul>
<li>spring5<br>
- Spring Core Container(即Spring容器)代表了Spring框架的核心机制。<br>
​</li>
</ul>
<h2> 2.spring入门：</h2>
<p><code>21个jar包</code></p>
<ul>
<li>
<p>实用spring管理bean：</p>
<ul>
<li>
<p>spring核心容器理论：spring核心容器就是一个超级大工厂，所有的对象都会被当成spring核心容器管理的对象。</p>
</li>
<li>
<p>Spring对Bean没有任何要求，只要是java类，将会当作bean处理</p>
</li>
<li>
<p>对于Spring框架而言，一切Java对象都是Bean。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
					...
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>spring通过反射机制从xml文件中获取bean对象：</p>
<ul>
<li>
<p>​	spring底层大概的执行代码：</p>
<ul>
<li>
<p>创建bean：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> idStr<span class="token operator">=</span>bean中的id<span class="token punctuation">;</span>
<span class="token class-name">String</span> classStr<span class="token operator">=</span>bean中的<span class="token keyword">class</span><span class="token punctuation">;</span>
<span class="token class-name">Class</span> clazz<span class="token operator">=</span><span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>classStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Object</span> obj<span class="token operator">=</span>clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
spring的容器container<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>idStr<span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>设置参数（调用setter方法）：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> nameStr<span class="token operator">=</span>属性的name<span class="token punctuation">;</span>
<span class="token class-name">String</span> refStr<span class="token operator">=</span>属性的引用ref，某一个bean的id 或某个value参数值<span class="token punctuation">;</span>
<span class="token class-name">String</span> setterName<span class="token operator">=</span><span class="token string">"set"</span><span class="token operator">+</span>nameStr<span class="token punctuation">.</span><span class="token function">subString</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span>nameStr<span class="token punctuation">.</span><span class="token function">subString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>生成方法名 setName
<span class="token class-name">Object</span> paramBean<span class="token operator">=</span>container<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>refStr<span class="token punctuation">)</span>
<span class="token class-name">Method</span> setter<span class="token operator">=</span>clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span>setterName<span class="token punctuation">,</span>paramBean<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
setter<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>paramBean<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>在程序中访问bean:</p>
<ul>
<li>
<p>​		<code>ApplicationContext</code>是最常用的接口，	有两个实现类：</p>
<ul>
<li>
<p><code>ClassPathXmlApplicationContext</code>	从类加载路径下搜索配置文件，并根据配置文件创建spring容器</p>
</li>
<li>
<p><code>FileSystemXmlApplicationContext</code>	从文件系统的相对路径或绝对路径中搜索配置文件，并根据配置文件创建spring容器</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ApplicationContext</span> ctx<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">"beans.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span> p<span class="token operator">=</span>ctx<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"person"</span><span class="token punctuation">,</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>获取对象的两个方法：</p>
<ul>
<li>
<p><code>Object getBean(String id)</code> 需要强制类型转换:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Person</span> p<span class="token operator">=</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span>ctx<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"person"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code>T getBean(String id,Class&lt;T&gt; requiredType)</code> 无需进行强制类型转换：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Person</span> p<span class="token operator">=</span>ctx<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"person"</span><span class="token punctuation">,</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:19.41,words:5823},y:"a",t:"Spring基础用法总结"},["/blog/old/beframework/spring/基础总结.html","/blog/old/beframework/spring/基础总结.md",":md"]],["v-632f1be4","/blog/old/beframework/springboot/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html",{d:1577869375e3,l:"2020年1月1日",c:["后端框架","SpringBoot"],g:"SpringBoot",e:`<p>简介，简单项目配置：</p>
<p>application.yml</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
<span class="token comment">#    url: jdbc:mysql://localhost:3306/db_account</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/atguigudb<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=UTF-8&amp;serverTimezone=UTC</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> root
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver


    <span class="token key atrule">druid</span><span class="token punctuation">:</span>
      <span class="token key atrule">aop-patterns</span><span class="token punctuation">:</span> com.atguigu.admin.*  <span class="token comment">#springbean监控</span>
      <span class="token key atrule">filters</span><span class="token punctuation">:</span> stat<span class="token punctuation">,</span>wall<span class="token punctuation">,</span>slf4j  <span class="token comment">#所有开启的功能</span>

      <span class="token key atrule">stat-view-servlet</span><span class="token punctuation">:</span>  <span class="token comment">#监控页配置</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">login-username</span><span class="token punctuation">:</span> admin
        <span class="token key atrule">login-password</span><span class="token punctuation">:</span> admin
        <span class="token key atrule">resetEnable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

      <span class="token key atrule">web-stat-filter</span><span class="token punctuation">:</span>  <span class="token comment">#web监控</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">urlPattern</span><span class="token punctuation">:</span> /*
        <span class="token key atrule">exclusions</span><span class="token punctuation">:</span> <span class="token string">'*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*'</span>


      <span class="token key atrule">filter</span><span class="token punctuation">:</span>
        <span class="token key atrule">stat</span><span class="token punctuation">:</span> <span class="token comment">#sql监控</span>
          <span class="token key atrule">slow-sql-millis</span><span class="token punctuation">:</span> <span class="token number">1000</span>
          <span class="token key atrule">logSlowSql</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">wall</span><span class="token punctuation">:</span> <span class="token comment">#防火墙</span>
          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">config</span><span class="token punctuation">:</span>
            <span class="token key atrule">drop-table-allow</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>



  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> r<span class="token punctuation">-</span>bp1nc7reqesxisgxpipd.redis.rds.aliyuncs.com
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> lfy<span class="token punctuation">:</span>Lfy123456
    <span class="token key atrule">client-type</span><span class="token punctuation">:</span> jedis
    <span class="token key atrule">jedis</span><span class="token punctuation">:</span>
      <span class="token key atrule">pool</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token comment">#    url: redis://lfy:Lfy123456@r-bp1nc7reqesxisgxpipd.redis.rds.aliyuncs.com:6379</span>
<span class="token comment">#    lettuce:</span>
<span class="token comment">#      pool:</span>
<span class="token comment">#        max-active: 10</span>
<span class="token comment">#        min-idle: 5</span>



  <span class="token comment">#    type: com.zaxxer.hikari.HikariDataSource</span>
  <span class="token key atrule">jdbc</span><span class="token punctuation">:</span>
    <span class="token key atrule">template</span><span class="token punctuation">:</span>
      <span class="token key atrule">query-timeout</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">boot</span><span class="token punctuation">:</span>
    <span class="token key atrule">admin</span><span class="token punctuation">:</span>
      <span class="token key atrule">client</span><span class="token punctuation">:</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">8888</span>
        <span class="token key atrule">instance</span><span class="token punctuation">:</span>
          <span class="token key atrule">prefer-ip</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#使用ip注册进来</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> boot<span class="token punctuation">-</span>05<span class="token punctuation">-</span>web<span class="token punctuation">-</span>admin




<span class="token comment"># 配置mybatis规则、使用MyBatisPlus则此项配置无效</span>
<span class="token comment">#mybatis:</span>
<span class="token comment">##  config-location: classpath:mybatis/mybatis-config.xml</span>
<span class="token comment">#  mapper-locations: classpath:mybatis/mapper/*.xml</span>
<span class="token comment">#  configuration:  # 指定mybatis全局配置文件中的相关配置项</span>
<span class="token comment">#    map-underscore-to-camel-case: true</span>


<span class="token comment"># management 是所有actuator的配置</span>
<span class="token comment"># management.endpoint.端点名.xxxx  对某个端点的具体配置</span>
<span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled-by-default</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#默认开启所有监控端点  true</span>
    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
        <span class="token key atrule">include</span><span class="token punctuation">:</span> <span class="token string">'*'</span> <span class="token comment"># 以web方式暴露所有端点</span>

  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>   <span class="token comment">#对某个端点的具体配置</span>
    <span class="token key atrule">health</span><span class="token punctuation">:</span>
      <span class="token key atrule">show-details</span><span class="token punctuation">:</span> always
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

    <span class="token key atrule">info</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

    <span class="token key atrule">beans</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

    <span class="token key atrule">metrics</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">info</span><span class="token punctuation">:</span>
  <span class="token key atrule">appName</span><span class="token punctuation">:</span> boot<span class="token punctuation">-</span>admin
  <span class="token key atrule">appVersion</span><span class="token punctuation">:</span> 1.0.0
  <span class="token key atrule">mavenProjectName</span><span class="token punctuation">:</span> @project.artifactId@
  <span class="token key atrule">mavenProjectVersion</span><span class="token punctuation">:</span> @project.version@




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.92,words:1777},y:"a",t:"SpringBoot基础总结"},["/blog/old/beframework/springboot/基础总结.html","/blog/old/beframework/springboot/基础总结.md",":md"]],["v-6fb57558","/blog/old/beframework/springboot/%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90.html",{d:1577869375e3,l:"2020年1月1日",c:["后端框架","SpringBoot"],g:"SpringBoot",e:`<h1> 自动配置原理</h1>
<h2> 启动类中有一个注解</h2>
<h2> 该注解源码：</h2>
<h2> @EnableAutoConfiguration</h2>
<h2> @Condition 使其可以按需加载组件</h2>
<h1> 静态资源配置原理</h1>
<h2> SpringMVC功能的自动配置类 WebMvcAutoConfiguration</h2>
<h1> 请求映射原理</h1>
<h1> 参数处理原理</h1>
<h1> 拦截器原理</h1>
<h1> 原理解析</h1>
`,r:{minutes:.31,words:94},y:"a",t:"SpringBoot源码分析"},["/blog/old/beframework/springboot/源码分析.html","/blog/old/beframework/springboot/源码分析.md",":md"]],["v-2706221b","/blog/old/beframework/springcloud/springcloud%E9%A1%B9%E7%9B%AE%E5%B0%9A%E5%8C%BB%E9%80%9A%E6%80%BB%E7%BB%93.html",{d:1577869375e3,l:"2020年1月1日",c:["后端框架","SpringCloud"],g:["SpringCloud","项目总结"],e:`<h1> 1、父子模块的搭建</h1>
<h2> 父模块的pom文件</h2>
<p><code>新建springboot项目作为父模块，删除不用的文件夹</code></p>
<p><code>在父模块的pom文件中进行依赖的版本控制</code></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modules</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>common<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>common/common-util<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>common/service-util<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>model<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>service<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>service/service_user<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>service/service_hosp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>service/service_cmn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>hospital-manage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>service_client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>service_client/service_cmn_client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>module</span><span class="token punctuation">&gt;</span></span>service_gateway<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>module</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modules</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.1.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- lookup parent from repository --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.apple<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>yygh_parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yygh_parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>yygh_parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--依赖的版本--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cloud.version</span><span class="token punctuation">&gt;</span></span>Hoxton.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cloud.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>alibaba.version</span><span class="token punctuation">&gt;</span></span>2.2.0.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>alibaba.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mybatis-plus.version</span><span class="token punctuation">&gt;</span></span>3.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mybatis-plus.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mysql.version</span><span class="token punctuation">&gt;</span></span>8.0.23<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mysql.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swagger.version</span><span class="token punctuation">&gt;</span></span>2.7.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swagger.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jwt.version</span><span class="token punctuation">&gt;</span></span>0.7.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jwt.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fastjson.version</span><span class="token punctuation">&gt;</span></span>1.2.29<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fastjson.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>httpclient.version</span><span class="token punctuation">&gt;</span></span>4.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>httpclient.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>easyexcel.version</span><span class="token punctuation">&gt;</span></span>2.2.0-beta2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>easyexcel.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aliyun.version</span><span class="token punctuation">&gt;</span></span>4.5.30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aliyun.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>oss.version</span><span class="token punctuation">&gt;</span></span>3.10.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>oss.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jodatime.version</span><span class="token punctuation">&gt;</span></span>2.10.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jodatime.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teaOpenapi.version</span><span class="token punctuation">&gt;</span></span>0.2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teaOpenapi.version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--配置dependencyManagement锁定依赖的版本--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencyManagement</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${cloud.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-alibaba-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${alibaba.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-bus-amqp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.0.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

            <span class="token comment">&lt;!--mybatis-plus 持久层--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${mybatis-plus.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${mysql.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

            <span class="token comment">&lt;!--swagger--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springfox-swagger2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${swagger.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--swagger ui--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springfox-swagger-ui<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${swagger.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.jsonwebtoken<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jjwt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${jwt.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.httpcomponents<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>httpclient<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${httpclient.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>fastjson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${fastjson.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>easyexcel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${easyexcel.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>aliyun-java-sdk-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${aliyun.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--
            &lt;dependency&gt;
                &lt;groupId&gt;com.aliyun.oss&lt;/groupId&gt;
                &lt;artifactId&gt;aliyun-sdk-oss&lt;/artifactId&gt;
                &lt;version&gt;\${oss.version}&lt;/version&gt;
            &lt;/dependency&gt;
--&gt;</span>
            <span class="token comment">&lt;!--日期时间工具--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>joda-time<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>joda-time<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${jodatime.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--阿里云新版sdk--&gt;</span>
            <span class="token comment">&lt;!--&lt;dependency&gt;
                &lt;groupId&gt;com.aliyun&lt;/groupId&gt;
                &lt;artifactId&gt;tea-openapi&lt;/artifactId&gt;
                &lt;version&gt;\${teaOpenapi.version}&lt;/version&gt;
            &lt;/dependency&gt;--&gt;</span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencyManagement</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:21.86,words:6557},y:"a",t:"《尚医通》项目总结"},["/blog/old/beframework/springcloud/springcloud项目尚医通总结.html","/blog/old/beframework/springcloud/springcloud项目尚医通总结.md",":md"]],["v-7a9a6e12","/blog/old/beframework/springcloud/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html",{d:1577869375e3,l:"2020年1月1日",c:["后端框架","SpringCloud"],g:["SpringCloud"],e:`<h1> 概念</h1>
<h2> 1.集群：同一个业务，部署在多个服务器</h2>
<p>​	（不同的服务器运行同样的代码，干同一件事）</p>
<h2> 2.分布式：一个业务分拆多个子业务，部署在不同的服务器上</h2>
<p>​	（不同的服务器，运行不同的代码，为了同一个目的）</p>
<h2> 3.为什么需要springcloud：一个大项目拆分出多个模块后，会出现各种各样的问题，</h2>
<p>​	而springcloud提供了一整套的解决方案。</p>
<h2> 4.springcloud功能:</h2>
<p>​	基础功能：<br>
​		服务治理  Spring Cloud Eureka<br>
​		客户端负载均衡  Spring Cloud Ribbon<br>
​		服务容错保护  Spring Cloud Hystrix<br>
​		声明式服务调用  Spring Cloud Feign<br>
​		API网关服务  Spring Cloud Zuul<br>
​		分布式配置中心  Spring Cloud Config<br>
​	高级功能：<br>
​		消息总线  Spring Cloud  Bus<br>
​		消息驱动的微服务  Spring Cloud Stream<br>
​		分布式服务跟踪  Spring Cloud Sleuth</p>`,r:{minutes:1.48,words:445},y:"a",t:"SpringCloud基础总结"},["/blog/old/beframework/springcloud/基础总结.html","/blog/old/beframework/springcloud/基础总结.md",":md"]],["v-97a18dc8","/blog/old/beframework/springmvc/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html",{d:1577869375e3,l:"2020年1月1日",c:["后端框架","SpringMVC"],g:"SpringMVC",e:`<h1> 第一章 Java EE应用</h1>
<pre><code>## Java EE架构：
	Domain Object(领域对象层)
	DAO(Data Access Object 数据访问层)  在其他框架中的别名 EAO(Entity)    		Mapper层
	Service (业务逻辑层)
	Controller(控制器层)
	View(表现层)  组成：jsp页面等
(上层组件的实现依赖于下层组件的功能，下层组件支持上层组的实现)

servlet 3.x规范：提供功能：异步请求，注解，增强的Servlet API，非阻塞I/O

jsp只负责简单的显示逻辑
中间层将底层信息封装成JavaBean集，即DTO（数据传输对象），传输DTO给JSP页面
</code></pre>`,r:{minutes:12.68,words:3803},y:"a",t:"SpringMVC基础用法总结"},["/blog/old/beframework/springmvc/基础总结.html","/blog/old/beframework/springmvc/基础总结.md",":md"]],["v-7a1ee8c4","/blog/old/beframework/swagger/swagger.html",{d:172684892e4,c:["后端框架","swagger"],g:["swagger"],e:`<h1> 是什么：</h1>
<blockquote>
<p>Swagger是一个规范完整的API框架，用于生成、描述、调用和可视化Restful风格的Web服务的接口文档。</p>
</blockquote>
<blockquote>
<p>springfox是swagger的一个开源实现，用在以SpringBoot作为后台的开发框架中。swagger是一款流行的API管理管理。 springfox实现了Swagger UI 和Swagger-Core。 在SpringBoot开发中，可以很方便地使用maven和gradle引入。</p>
<p>Springfox 是一个集成了 Swagger，基于 Sring MVC/Spring Webflux 实现的一 个 Swagger 描述文件生成框架，通过使用它定义的一些描述接口的注解自动生成 Swagger 的描述文件，使 Swagger 能够展示并调用接口。springfox通过spring-plugin的方式将Plugin注册到Spring上下文中，然后使用这些plugin进行API的扫描工作，这里的扫描工作其实也就是构造Documentation的工作，把扫描出的结果封装成Documentation并放入到DocumentationCache内存缓存中，之后swagger-ui界面展示的API信息通过Swagger2Controller暴露，Swagger2Controller内部直接从DocumentationCache中寻找Documentation。是一个开源的API Doc的框架， 它的前身是swagger-springmvc，可以将我们的Controller中的方法以文档的形式展现。官方定义为： Automated JSON API documentation for API's built with Spring。</p>
</blockquote>`,r:{minutes:5.46,words:1637},y:"a",t:"swagger使用指南"},[":md"]],["v-2ac42c0b","/blog/old/beskill/activiti/activiti6%E5%9F%BA%E7%A1%80%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["后端技术","activiti"],g:["activiti","工作流"],e:`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>first-demo：
步骤：设计流程，配置流程引擎，加载流程文件，启动流程。

数据库表的含义
url driver user password

配置文件

工作流引擎设计的一致原则是：强调流程服务的可嵌入性和可扩展性

jbpm3,jbpm5 activiti5:
	jBPM3 是一个完整的工作流系统实现，面向开发人员，
		目的在于简化对组织核心流程进行支撑的软件创建，不支持标准。

	jBPM4 引入 PVM，使其拥有更强大的扩展性，同时增加 BPMS 特性，
		这些特性包括了对 BPMN 的支持、面向业务人员的 Web 建模器和简单统计分析功能的加入。

	jBPM5 基于原先的 Drools Flow，支持 BPMN，通过与 Drools 的合并支持 BAM，
		通过内容仓库增加对流程可视化的支持。由于放弃了 jBPM4 的 PVM，引擎的可扩展性受到损害，并且不再支持 jPDL。

	Activiti5 基于 jBPM4，与 Alfresco 的集成增加了其流程可视化与管理能力，
		同时通过创新的 Activiti Cycle 协作组件支持流程相关人员之间的协调，最后，它加强了集成能力。

******************************************************************
第一章 Activiti介绍
	BPMN   Business Process Modeling Notation  业务流程模型和符号
	BPMN 2.0 定义了5个基础的元素类别：
		流对象 Flow Object :在一个业务流程中，流对象是用于定义行为的图形元素，主要有事件Events、活动Activities、和网关 Gateways 三种流对象 
		数据 Data :主要有数据对象 Data Objects、数据输入 Data Inputs 、数据输出 Data Outputs 和数据存储 Data Stores 四种元素
		连接对象 Connecting Objects :用于连接流对象，顺序流 Sequence Flows、消息流 Message Flows、关联 Associations 和数据关联 Data Associations 四种连接流对象的方式
		泳道 Swimlanes :泳道提供了两种途径用于组织基础的模型元素，分别是池 Pools 和道 Lanes
		制品 Artifacts :制品主要用于为流程提供附加信息，当前制品包括组 Group 和 注释 Text Annotation

第二章 安装运行Activiti
	开发第一个应用：
		1.引入jar包
		2.写配置文件 activiti的配置文件默认是resource中的activiti.cgf.xml
			示例：
				&lt;?xml version="1.0" encoding="UTF-8"?&gt;
				&lt;beans xmlns="http://www.springframework.org/schema/beans"
				       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
				       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"&gt;
					&lt;!-- 流程引擎配置的bean --&gt;
					&lt;bean id="processEngineConfiguration"
						class="org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration"&gt;
						&lt;property name="jdbcUrl" value="jdbc:mysql://localhost:3306/act?useUnicode=true&amp;amp; characterEncoding=utf8&amp;amp; useSSL=false&amp;amp; serverTimezone=UTC&amp;amp; rewriteBatchedStatements=true" /&gt;
						&lt;property name="jdbcDriver" value="com.mysql.cj.jdbc.Driver" /&gt;
						&lt;property name="jdbcUsername" value="root" /&gt;
						&lt;property name="jdbcPassword" value="root" /&gt;
						&lt;property name="databaseSchemaUpdate" value="true" /&gt;
					&lt;/bean&gt;
				&lt;/beans&gt;

		3.创建bpmn文件 
		4.类文件启动示例：

			// 创建流程引擎
			ProcessEngine engine = ProcessEngines.getDefaultProcessEngine();

		★//部署层面
			// 得到流程存储服务组件，相当于流程仓库，可部署流程，kickstart App
			RepositoryService repositoryService = engine.getRepositoryService();
			
		★//启动层面
			// 得到运行时服务组件，运行服务，启动流程  启动流程
			RuntimeService runtimeService = engine.getRuntimeService();
			
		★//流程处理层面
			// 获取流程任务组件    流程启动后，使用
			TaskService taskService = engine.getTaskService();
			// 部署流程文件
			repositoryService.createDeployment()
					.addClasspathResource("bpmn/First.bpmn").deploy();
			// 启动流程
			runtimeService.startProcessInstanceByKey("process1");
			// 查询第一个任务
			Task task = taskService.createTaskQuery().singleResult();
			System.out.println("第一个任务完成前，当前任务名称：" + task.getName());
			// 完成第一个任务
			taskService.complete(task.getId());
			// 查询第二个任务
			task = taskService.createTaskQuery().singleResult();
			System.out.println("第二个任务完成前，当前任务名称：" + task.getName());
			// 完成第二个任务（流程结束）
			taskService.complete(task.getId());
			task = taskService.createTaskQuery().singleResult();
			System.out.println("流程结束后，查找任务：" + task);
			// 退出
	
第三章 Activiti数据库设计
	activiti流程引擎的数据表分为5大类，各类职责不同，有统一的命名规范
	
	1.通用数据表：只存放通用资源， ACT_GE
		资源表 ACT_GE_BYTEARRAY 
			保存与流程引擎相关的资源
			一般用来保存字符串、流程文件的内容、流程图片内容
		属性表 ACT_GE_PROPERTY
			属性的键值对
	2.流程存储表：保存流程定义和部署信息 ACT_RE
		部署数据表 ACT_RE_DEPLOYMENT
			保存部署信息
		流程定义表 ACT_RE_PROCDEF
			保存流程文件 .bpmn
	3.身份数据表：有关身份数据的几张表 ACT_ID
		用户表 ACT_ID_USER
			保存用户信息
		用户账号（信息）表 ACT_ID_INFO
			activiti将用户、用户账号和用户信息分三种数据，用户表保存用户的数据，
			而其他两个被保存在这个表中
		用户组表 ACT_ID_GROUP
			用户组数据（组名称，组类型）
		关系表 ACT_ID_MEMBERSHIP
			保存用户属于哪个组
	4.运行时数据表：保存流程在运行过程中所产生的数据，例如流程实例、执行流、任务等 ACT_RU
		流程实例（执行流）表 ACT_RU_EXECUTION
		流程任务表 ACT_RU_TASK
		流程参数表 ACT_RU_VARIABLE
		流程与身份关系表 ACT_RU_IDENTITYLINK
		工作数据表
			ACT_RU_JOB
			ACT_RU_DEADLEFTER_JOB
			ACT_RU_SUSPENDED_JOB
			ACT_RU_TIMER_JOB
		事件描述表 ACT_RU_EVENT_SUBSCR
	5.历史数据表：流程引擎的日志表，操作过的流程元素将会被记录到历史表中 ACT_HI
		流程实例表 ACT_HI_PROCINST
		流程明细表 ACT_HI_DETAIL
		历史任务表和历史行为表 ACT_HI_TASKINST
		附件表和评论表 ACT_HI_ATTACHMENT
	6.DMN 规则引擎表
		activiti6加入了DMN规范的规则引擎模块
			1.决策部署表  ACT_DMN_DEPLOYMENT
				类似于流程定义部署，每次部署，向部署表中写入部署数据
			2.决策表 ACT_DMN_DECISION_TABLE
				决策类似于流程定义，保存决策模型
			3.部署资源表 ACT_DMN_DEPLOYMENT_RESOURCE
				规则引擎相关的资源，例如决策文件、图片

第四章 Activiti流程引擎配置
	1.流程引擎对象
		ProcessEngineConfiguration对象代表一个Activiti流程引擎的全部配置
			该对象的静态方法读取配置文件，生成实例
		1.
		/**
		 * 使用createProcessEngineConfigurationFromResourceDefault方法
		 * 创建ProcessEngineConfiguration实例
		 * @author Administrator
		 *
		 */
		//使用Activiti默认的方式创建ProcessEngineConfiguration
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResourceDefault();	
		2.
		/**
		 * 使用CreateProcessEngineConfigurationFromResource方法创建ProcessEngineConfiguration实例
		 * 
		 * @author Administrator
		 * 
		 */
		// 指定配置文件创建ProcessEngineConfiguration
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource("my-activiti1.xml");
		3.
		/**
		 * 使用createProcessEngineConfigurationFromInputStream方法创建ProcessEngineConfiguration
		 * 
		 * @author yangenxiong
		 * 
		 */
		File file = new File("resource/input-stream.xml");
		// 得到文件输入流
		InputStream fis = new FileInputStream(file);
		// 使用createProcessEngineConfigurationFromInputStream方法创建ProcessEngineConfiguration
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromInputStream(fis);
		4.
		/**
		 * 使用createStandaloneInMemProcessEngineConfiguration创建ProcessEngineConfiguration
		 * 
		 * @author yangenxiong
		 * 
		 */
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createStandaloneInMemProcessEngineConfiguration();
		// 值为create-drop
		System.out.println(config.getDatabaseSchemaUpdate());
		// 值为jdbc:h2:mem:activiti
		System.out.println(config.getJdbcUrl());
		5.
		/**
		 * 使用CreateStandaloneProcessEngineConfiguration方法创建ProcessEngineConfiguration
		 * 
		 * @author yangenxiong
		 * 
		 */
		 ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createStandaloneProcessEngineConfiguration();
		// 默认值为 false
		System.out.println(config.getDatabaseSchemaUpdate());
		// 默认值为 jdbc:h2:tcp://localhost/~/activiti
		System.out.println(config.getJdbcUrl());
	2.数据源配置
	3.其他属性配置
		history配置
		asyncExecutorActivate配置
		邮件服务器配置
	示例：
		************************************************************************************
		&lt;!-- 将databaseType设置为oracle --&gt;
		&lt;bean id="processEngineConfiguration"
			class="org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration"&gt;
			&lt;property name="jdbcUrl" value="jdbc:mysql://localhost:3306/act" /&gt;
			&lt;property name="jdbcDriver" value="com.mysql.jdbc.Driver" /&gt;
			&lt;property name="jdbcUsername" value="root" /&gt;
			&lt;property name="jdbcPassword" value="123456" /&gt;
			&lt;property name="databaseSchemaUpdate" value="create-drop"/&gt;
			&lt;property name="databaseType" value="oracle"/&gt;
		&lt;/bean&gt;
		// 读取Activiti配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource("database-type.xml");
		// 启动Activiti
		ProcessEngine engine = config.buildProcessEngine();
		// 关闭流程引擎
		engine.close();
		************************************************************************************
		&lt;!-- 使用C3P0数据源 --&gt;
		&lt;bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource"&gt;
			&lt;property name="driverClass" value="com.mysql.jdbc.Driver" /&gt;
			&lt;property name="jdbcUrl" value="jdbc:mysql://localhost:3306/act" /&gt;
			&lt;property name="user" value="root" /&gt;
			&lt;property name="password" value="123456" /&gt;
		&lt;/bean&gt;

		&lt;bean id="processEngineConfiguration"
			class="org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration"&gt;
			&lt;property name="dataSource" ref="dataSource" /&gt;
		&lt;/bean&gt;
		// 读取c3p0-config.xml配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource("config/c3p0-config.xml");
		// 能正常输出，即完成配置
		DataSource ds = config.getDataSource();
		// 查询数据库元信息，如果能查询则表示连接成功
		ds.getConnection().getMetaData();
		// 结果为 com.mchange.v2.c3p0.ComboPooledDataSource
		System.out.println(config.getDataSource().getClass().getName());
		
		或者

		&lt;!-- 不初始化任何属性 --&gt;
		&lt;bean id="processEngineConfiguration"
			class="org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration"&gt;
		&lt;/bean&gt;
		// 创建C3P0数据源
		ComboPooledDataSource ds = new ComboPooledDataSource();
		// 设置JDBC连接的各个属性
		ds.setUser("root");
		ds.setPassword("123456");
		ds.setJdbcUrl("jdbc:mysql://localhost:3306/act");
		ds.setDriverClass("com.mysql.jdbc.Driver");
		// 验证是否连接成功
		ds.getConnection().getMetaData();

		// 读取Activiti配置文件
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource("config/c3p0-coding.xml");
		// 为ProcessEngineConfiguration设置dataSource属性
		config.setDataSource(ds);
		System.out.println(config.getDataSource());
		************************************************************************************
		&lt;!-- 将databaseSchemaUpdate设置为false --&gt;
		&lt;bean id="processEngineConfiguration"
			class="org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration"&gt;
			&lt;property name="jdbcUrl" value="jdbc:mysql://localhost:3306/act" /&gt;
			&lt;property name="jdbcDriver" value="com.mysql.jdbc.Driver" /&gt;
			&lt;property name="jdbcUsername" value="root" /&gt;
			&lt;property name="jdbcPassword" value="123456" /&gt;
			&lt;property name="databaseSchemaUpdate" value="false"/&gt;
		&lt;/bean&gt;
		//读取Activiti配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource("schemaUpdate-false.xml");
		//启动Activiti
		config.buildProcessEngine();
		************************************************************************************
		&lt;!-- 将databaseSchemaUpdate设置为true --&gt;
		&lt;bean id="processEngineConfiguration"
			class="org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration"&gt;
			&lt;property name="jdbcUrl" value="jdbc:mysql://localhost:3306/act" /&gt;
			&lt;property name="jdbcDriver" value="com.mysql.jdbc.Driver" /&gt;
			&lt;property name="jdbcUsername" value="root" /&gt;
			&lt;property name="jdbcPassword" value="123456" /&gt;
			&lt;property name="databaseSchemaUpdate" value="true"/&gt;
		&lt;/bean&gt;
		//读取Activiti配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource("schemaUpdate-true.xml");
		System.out.println(config.getClass().getName());
		//启动Activiti
		config.buildProcessEngine();
		************************************************************************************
		&lt;!-- 将databaseSchemaUpdate设置为create-drop --&gt;
		&lt;bean id="processEngineConfiguration"
			class="org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration"&gt;
			&lt;property name="jdbcUrl" value="jdbc:mysql://localhost:3306/act" /&gt;
			&lt;property name="jdbcDriver" value="com.mysql.jdbc.Driver" /&gt;
			&lt;property name="jdbcUsername" value="root" /&gt;
			&lt;property name="jdbcPassword" value="123456" /&gt;
			&lt;property name="databaseSchemaUpdate" value="create-drop"/&gt;
		&lt;/bean&gt;
		// 读取Activiti配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource("schemaUpdate-create-drop.xml");
		// 启动Activiti
		ProcessEngine engine = config.buildProcessEngine();
		// 关闭流程引擎
		engine.close();
		************************************************************************************
		&lt;bean id="processEngineConfiguration"
			class="org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration"&gt;
			&lt;property name="jdbcUrl" value="jdbc:mysql://localhost:3306/act" /&gt;
			&lt;property name="jdbcDriver" value="com.mysql.jdbc.Driver" /&gt;
			&lt;property name="jdbcUsername" value="root" /&gt;
			&lt;property name="jdbcPassword" value="123456" /&gt;
			&lt;property name="databaseSchemaUpdate" value="true"/&gt;
			&lt;property name="history" value="activity"/&gt;  activiti/audit/full/none/
		&lt;/bean&gt;
		// 读取Activiti配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource("history-activity.xml");		
		//初始化流程引擎
		ProcessEngine engine = config.buildProcessEngine();
		//得到流程存储对象
		RepositoryService repositoryService = engine.getRepositoryService();
		//部署流程文件
		repositoryService.createDeployment().addClasspathResource("bpmn/history.bpmn20.xml").deploy();
		//得到运行服务对象
		RuntimeService runtimeService = engine.getRuntimeService();
		//创建参数
		Map&lt;String, Object&gt; vars = new HashMap&lt;String, Object&gt;();
		vars.put("day", 10);
		//开始流程
		ProcessInstance pi = runtimeService.startProcessInstanceByKey("vacationProcess", vars);
		System.exit(0);
		************************************************************************************
		&lt;bean id="processEngineConfiguration"
		class="org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration"&gt;
			&lt;property name="jdbcUrl" value="jdbc:mysql://localhost:3306/act" /&gt;
			&lt;property name="jdbcDriver" value="com.mysql.jdbc.Driver" /&gt;
			&lt;property name="jdbcUsername" value="root" /&gt;
			&lt;property name="jdbcPassword" value="123456" /&gt;
			&lt;property name="mailServerHost" value="smtp.163.com"&gt;&lt;/property&gt;
			&lt;property name="mailServerPort" value="25"&gt;&lt;/property&gt;
			&lt;property name="mailServerDefaultFrom" value="yangenxiong@163.com"&gt;&lt;/property&gt;
			&lt;property name="mailServerUsername" value="yangenxiong@163.com"&gt;&lt;/property&gt;
			&lt;property name="mailServerPassword" value="123456"&gt;&lt;/property&gt;
		&lt;/bean&gt;
		************************************************************************************

		************************************************************************************
	4.ProcessEngineCofiguration bean
		继承接口ProcessEngineCofiguration或ProcessEngineCofigurationImpl，
		自定义引擎启动类。
	5.Activiti的命令拦截器
		未学习

第五章 流程引擎的创建
	和汽车发动机启动很像
	1.ProcessEngineConfiguration的buildProcessEngine方法创建
	先读后配，相当于配置检查
		// 读取配置
		ProcessEngineConfiguration config = ProcessEngineConfiguration
				.createProcessEngineConfigurationFromResource("build_engine.xml");
		// 创建ProcessEngine
		ProcessEngine engine = config.buildProcessEngine();
	2.ProcessEngines对象
		调用ProcessEngines的init方法
			// 初始化ProcessEngines的Map,
			// 再加载Activiti默认的配置文件（classpath下的activiti.cfg.xml文件）
			// 如果与Spring整合，则读取classpath下的activiti-context.xml文件

			ProcessEngines.init();

			// 得到ProcessEngines的Map
			Map&lt;String, ProcessEngine&gt; engines = ProcessEngines.getProcessEngines();
			System.out.println(engines.size());
			System.out.println(engines.get("default"));
		注册与注销ProcessEngine实例
			//读取自定义配置
			ProcessEngineConfiguration config = ProcessEngineConfiguration.
					createProcessEngineConfigurationFromResource("register.xml");
			//创建ProcessEngine实例
			ProcessEngine engine = config.buildProcessEngine();
			//获取ProcessEngine的Map
			Map&lt;String, ProcessEngine&gt; engines = ProcessEngines.getProcessEngines();
			System.out.println("注册后引擎数：" + engines.size());
			//注销ProcessEngine实例
			ProcessEngines.unregister( engine);
			System.out.println("调用unregister后引擎数：" + engines.size());
		使用ProcessEngines的retry方法
			//得到资源文件的URL实例
			ClassLoader cl = Retry.class.getClassLoader();
			URL url = cl.getResource("retry.xml");
			//调用retry方法创建ProcessEngine实例
			ProcessEngineInfo info = ProcessEngines.retry(url.toString());
			//得到流程实例保存对象
			Map&lt;String, ProcessEngine&gt; engines = ProcessEngines.getProcessEngines();
			System.out.println("调用retry方法后引擎数：" + engines.size());	
		使用ProcessEngines的destroy方法
			// 进行初始化并且返回默认的ProcessEngine实例
			ProcessEngine engine = ProcessEngines.getDefaultProcessEngine();
			System.out.println("调用getDefaultProcessEngine方法后引擎数量："
					+ ProcessEngines.getProcessEngines().size());
			// 调用销毁方法
			ProcessEngines.destroy();
			// 最终结果为0
			System.out.println("调用destroy方法后引擎数量："
					+ ProcessEngines.getProcessEngines().size());

			// 得到资源文件的URL实例
			ClassLoader cl = Destroy.class.getClassLoader();
			URL url = cl.getResource("activiti.cfg.xml");
			// 调用retry方法创建ProcessEngine实例
			ProcessEngines.retry(url.toString());
			System.out.println("只调用 retry方法后引擎数量："
					+ ProcessEngines.getProcessEngines().size());
			// 调用销毁方法，没有效果
			ProcessEngines.destroy();
			System.out.println("调用destory无效果，引擎数量："
					+ ProcessEngines.getProcessEngines().size());
	3.ProcessEngine对象
		一个ProcessEngine实例代表一个流程引擎，实例中保存着各个服务组件的实例，根据这些服务组件，可以操作流程实例
		、任务、系统角色等数据。

		1.服务组件：
			好像J2EE的Service层，通过getXXXService方法得到实例
			包含的实例：
				RespositoryService:提供一系列管理流程定义和流程部署的API
				RuntimeService:在流程运行时对流程实例进行管理与控制
				TaskService:对流程任务进行管理，例如任务提醒、任务完成和创建任务等
				IdentityService:提供对流程角色数据进行管理的API，这些角色数据包括用户组、用户及它们之间的关系
				ManagementService:提供对流程引擎进行管理和维护的服务
				HistoryService:对流程的历史数据进行操作，包括查询、删除这些历史数据
				DynamicBpmnService:使用该服务，可以不需要重新部署流程模型，就可以实现对流程模型的修改
		2.关闭流程引擎：
			engine.close();
			根据配置中databaseSchemeUpdate属性判断是否删除数据库	
		3.流程引擎名称:
			默认名称时default
			使用config.setProcessEngineName("test");
			示例：
				ProcessEngineConfiguration config = ProcessEngineConfiguration.
				createProcessEngineConfigurationFromResource("name.xml");
				//设置流程引擎名称
				config.setProcessEngineName("test");
				ProcessEngine engine = config.buildProcessEngine();
				//根据名称查询流程引擎
				ProcessEngine engineTest = ProcessEngines.getProcessEngine("test");
				System.out.println("创建的引擎实例：" + engine);
				System.out.println("查询的引擎实例：" + engineTest);
	
第六章 用户组与用户
	1.用户组管理：
		1.Group对象：
			通过业务层组件去创建
			IdentityService
		2.创建用户组：
			id,name,type 然后保存，
				技巧：group.setId(null) 可以让数据库自动生成主键id
		3.修改用户组：
			setter
		4.删除用户组：
			deleteGroup(id)
	2.Activiti数据查询：
		Activiti提供了一套数据查询API供开发者使用，可以使用各个服务组件的createXXXQuery方法来获取这些查询对象。
		
		1.查询对象：
			Query是多有查询对象的父接口，提供了很多基础的方法：
				asc	设置查询结果的排序方式为升序
				count	计算查询结果的数据量
				desc	降序
				list	封装查询结果，返回相应类型的集合
				listPage	分页返回查询结果
				singleResult	查询单条符合条件的数据，没有返回null,多条抛出异常
		2.list方法：
			// 使用list方法查询全部的部署数据
			List&lt;Group&gt; datas = identityService.createGroupQuery().list();
		3.listPage方法：
			//调用listPage方法，从索引为2的记录开始，查询3条记录
			List&lt;Group&gt; datas = identityService.createGroupQuery().listPage(2, 3);
		4.count方法：
			// 使用list方法查询全部的部署数据
			long size = identityService.createGroupQuery().count();
		5.排序方法：
			List&lt;Group&gt; datas = identityService.createGroupQuery().orderByGroupName().asc().list();
		6.ID排序问题：
			主键均是字符型，排序要额外处理
		7.多字段排序：
			List&lt;Group&gt; datas = identityService.createGroupQuery()
				.orderByGroupId().desc()
				.orderByGroupName().asc().list();
		8.singleResult方法
		9.用户组数据查询：
			相应的数据查询对象除了拥有基类的方法，还有自己的方法：
			// groupId方法
			Group groupA = identityService.createGroupQuery().groupId(aId).singleResult();
			
			// groupName方法
			Group groupB = identityService.createGroupQuery().groupName("GroupB").singleResult();
			
			// groupType方法
			Group groupC = identityService.createGroupQuery().groupType("typeC").singleResult();
			
			// groupNameLike方法
			List&lt;Group&gt; groups = identityService.createGroupQuery().groupNameLike("%group%").list();

		10.原生SQL查询：
			createNativeGroupQuery()
			groups = identityService.createNativeGroupQuery()
				.sql("select * from ACT_ID_GROUP where NAME_ = #{name}")
				.parameter("name", "GroupD").list();
	
	3.用户管理：
		User对象
		添加用户 newUser  saveUser
		修改用户
		删除用户
		验证用户密码 checkPassWord  是用户密码，不是用户的账号密码
		用户数据查询 UserQuery对象
		设置认证用户 setAuthenticatedUserId 多线程中使用
	4.用户信息管理：
		添加和删除用户信息：
			用为ACT_ID_INFO数据结构是key-value，没有查询对象,通过id+key可以查到记录
			setUserInfo(String userId,String key,String value)
			deleteUserInfo(String userId,String key)
			示例：
				// 创建用户
				creatUser(identityService, id, "angus", "young", "yangenxiong@163.com", "abc");
				// 创建一个用户信息
				identityService.setUserInfo(id, "age", "30");
				// 创建第二个用户信息
				identityService.setUserInfo(id, "weight", "60KG");
				// 删除用户年龄信息
				identityService.deleteUserInfo(id, "age");
		查询用户信息：
			getUserInfo(String userId,String key)
		设置用户图片：
			setUserPicture
			getUserPicture

			先转为byte array，再存储，图片存放再资源表中，用户信息表存的是图片在的资源表的id
				// 读取图片并转换为byte数组
				FileInputStream fis = new FileInputStream(new File("resource/artifact/picture.png"));		
				BufferedImage img = ImageIO.read(fis);
				ByteArrayOutputStream output = new ByteArrayOutputStream();
				ImageIO.write(img, "png", output);
				//获取图片的byte数组
				byte[] picArray = output.toByteArray();		
				// 创建Picture实例
				Picture picture = new Picture(picArray, "angus image");
				// 为用户设置图片
				identityService.setUserPicture(id, picture);	
	5.用户组和用户的关系：
		多对多，中间表ACT_ID_MEMBERSHIP

		绑定关系：
			// 绑定关系
			identityService.createMembership(user.getId(), group.getId());
		接触绑定：
			// 删除绑定关系
			identityService.deleteMembership(user.getId(), group.getId());
		查询用户组下的用户：
			使用用户的查询对象  memberOfGroup(group.getId())
				List&lt;User&gt; users = identityService.createUserQuery()
				.memberOfGroup(group.getId()).list();
		查询用户所属的用户组：
			使用用户组的查询对象 groupMenber(user.getId())
				List&lt;Group&gt; groups = identityService.createGroupQuery()
						.groupMember(user.getId()).list();
	
第七章 流程存储
	RepositoryService 主要对Activiti中的流程存储的相关数据进行操作，这些操作包括对流程存储数据的管理、
		流程部署以及对流程的基本操作等。
	1.流程文件部署：
		RepositoryService负责对流程文件的部署以及流程定义的管理
		
		1.Deployment对象：
			只提供getter方法
		2.DeploymentBuilder对象：
			DeploymentBuilder builder = repositoryService.createDeployment();
		3.添加输入流资源：
			builder.addInputStream("inputa",a)
				// 第一个资源输入流
				InputStream is1 = new FileInputStream(new File(
						"resource/artifact/flow_inputstream1.png"));
				// 第二个资源输入流
				InputStream is2 = new FileInputStream(new File(
						"resource/artifact/flow_inputstream1.png"));
				// 创建DeploymentBuilder实例
				DeploymentBuilder builder = repositoryService.createDeployment();
				// 为DeploymentBuilder添加资源输入流
				builder.addInputStream("inputA", is1);
				builder.addInputStream("inputB", is2);
				// 执行部署方法
				builder.deploy();

		4.添加classpath资源：
			builder.addClasspathResource("artifact/classpath.png")
				//添加classpath下的资源
				builder.addClasspathResource("artifact/classpath.png");
				//执行部署（写入到数据库中）
				builder.deploy();
		5.添加字符串资源：
			//添加String资源
			builder.addString("test", "this is string method");
			//执行部署（写入到数据库中）
			builder.deploy();
		6.添加压缩包资源：
			//获取zip文件的输入流
			FileInputStream fis = new FileInputStream(new File("resource/artifact/ZipInputStream.zip"));
			//读取zip文件，创建ZipInputStream对象
			ZipInputStream zi = new ZipInputStream(fis);
			//添加Zip压缩包资源
			builder.addZipInputStream(zi);
			//执行部署（写入到数据库中）
			builder.deploy();
		7.添加BPMN模型资源：
			addBpmnModel 
			addBytes
		8.修改部署信息：
			//设置各个属性
			builder.name("crazyit").tenantId("tenanId").key("myKey").category("myCategory");
		9.过滤重复部署：
			重复部署不再写入数据库，若不同，添加方法后，仍会修改数据库
			builderB.enableDuplicateFiltering();
		10.取消部署时的验证：
			默认情况下，在部署时会对流程的XML文件进行验证，包括验证是否符合BPMN规范、定义的流程是否可执行。
				builderB.addClasspathResource("bpmn/bpmnError.bpmn")
				.disableBpmnValidation().deploy();
	2.流程定义的管理：
		中止流程定义、激活流程定义和设置流程权限
		
		1.ProcessDefinition对象：
			有很多getter方法
		2.流程部署：
			将流程的描述文件写入数据库
		3.流程图部署：
		4.流程图自动生成：
			不自动生成 ，在配置文件中加&lt;property name="createDiagramOnDeploy" value="false" /&gt;
		5.中止与激活流程定义：
		6.流程定义缓存配置：
		7.自定义缓存
			自定义Java类，维护map
	3.流程定义的权限：
		activiti没有拦截检查，完全由开发者定义用户权限，然后根据表来查询
		1.设置流程定义的用户权限：
			repositoryService.addCandidateStarterUser(def.getId(), "user1");
		2.设置流程定义的用户权限：
			repositoryService.addCandidateStarterGroup(def.getId(), "group1");
		3.IdentityLink对象：
			对应表 ACT_RU_IDENTITYLINK
		4.查询权限数据：
			// 根据用户查询用权限的流程定义
			List&lt;ProcessDefinition&gt; defs = repositoryService
					.createProcessDefinitionQuery().startableByUser("user1").list();

			// 根据流程定义查询用户组数据
			List&lt;Group&gt; groups = identityService.createGroupQuery()
					.potentialStarter(def.getId()).list();
			
			// 根据流程定义查询用户数据
			List&lt;User&gt; users = identityService.createUserQuery()
					.potentialStarter(def.getId()).list();
			
			// 根据流程定义查询全部的 IdentityLink（ACT_RU_IDENTITYLINK表） 数据
			List&lt;IdentityLink&gt; links = repositoryService
					.getIdentityLinksForProcessDefinition(def.getId());	
	4.RepositoryService数据查询与删除：
		1.查询部署资源
			// 查询资源文件
			InputStream is = repositoryService.getResourceAsStream(dep.getId(), 
				"artifact/GetResource.txt");
			// 读取输入流
			int count = is.available();
			byte[] contents = new byte[count];
			is.read(contents);
			String result = new String(contents);
		2.查询流程文件
		3.查询流程图
		4.查询部署的资源名称
		5.删除部署资源
		6.DeploymentQuery对象
		7.ProcessDefinitionQuery对象

第八章 流程任务管理
	1.任务的创建和删除：
		1.Task接口：
			ACT_RU_TASK
		2.创建与保存Task实例：
			newTask
			saveTask
		3.删除任务：
			多个删除方法
	2.任务权限：
		1.设置候选用户组
		2.设置候选用户
		3.权限数据查询
			用户组和用户的Query对象没有提供根据任务ID查询用户组和用户的方法
		4.设置任务持有人：
			setOwner
		5.设置任务代理人
			setAssignee
		6.添加任务权限数据
		7.删除用户组权限
		8.删除用户权限
	3.任务参数：
		参数类型分为流程参数和任务参数
		1.基本类型参数设置：
			setVariable
		2.序列化参数：
			对象必须实现序列化接口
		3.获取参数
			getVariable(taskId,argName)
		4.参数作用域：
			setVariableLocal 局部参数
			getVariableLocal 
		5.设置多个参数：
			setVariables
			setVariablesLocal	
				//初始化参数
				Map&lt;String,Object&gt; vars = new HashMap&lt;String, Object&gt;();
				vars.put("days", 10);
				vars.put("target", "欧洲");
				taskService.setVariables(task1.getId(), vars);
			或使用序列化对象
		6.数据对象：
			BPMN文件中的dataObject元素
				Map&lt;String, DataObject&gt; objs = taskService.getDataObjects(task.getId());
	
	4.任务附件管理：
		1.Attachment对象：
		2.创建任务附件：
			// 设置任务附件
			taskService.createAttachment("web url", task.getId(), pi.getId(), "163.com", 
					"163 web page", "http://www.163.com");
			// 创建图片输入流
			InputStream is = new FileInputStream(new File("resource/artifact/result.png"));
			// 设置输入流为任务附件
			taskService.createAttachment("web url", task.getId(), pi.getId(), "163.com", 
					"163 web page", is);
		3.附件查询：
		4.删除附件
	5.任务评论和事件记录：
		1.Comment对象:
		2.新增任务评论
			addComment
		3.事件的记录
		4.数据查询
	6.任务声明与完成：
		1.任务声明：
			claim
		2.任务完成：
			complete

第九章 流程控制
	TaskService主要用于任务管理，包括任务操作、任务数据管理等
	IdentityService主要用于管理流程的身份数据
	RepositoryService主要管理流程部署的数据
	RuntimeService主要用于管理流程在运行时产生的数据，以及对流程进行操作的API

	流程运行时产生的数据包括流程参数、事件、流程 实例及执行流等
	流程的操作包括启动流程，流程前进等

	1.流程实例与执行流：
		1.流程实例与执行流的概念：
			启动一个流程时，会创建一个流程实例，每个流程实例至少有一个执行流
		2.流程实例和执行流对象 ProcessInstance Execution
	2.启动流程:
		RuntimeService提供流程启动的多个方法，命名均为startProcessInstanceByXXX
			XXX可以是流程定义的ID、Key【流程描述文件中process的id属性】和message
		1.startProcessInstanceById方法：
		2.startProcessInstanceByKey方法
		3.startProcessInstanceByMessage方法
			消息事件
	3.流程参数：
		1.设置与查询流程参数：
			设置需要传入执行流的ID
			查询需要传入执行流的ID和参数名称
			setViriable
		2.流程参数的作用域：
			局部只作用域执行流
			setViriableLocal
		3.其他设置参数的方法：
			setViriables
			setViriablesLocal
	4.流程操作：
		启动流程、发送信号、中断流程、激活流程
		1.流程触发：
			对于receiveTask等流程节点，使用trigger方法进行触发，使流程往前进行
		2.触发信号事件：
			事件节点是在流程中记录事件发生的流程元素，BPMN2 规范中主要有两种类型的事件：
				捕获事件Catching 需要信号才能前进 
					// 发送信号给事件，流程结束
					runtimeService.signalEventReceived("testSignal");
				抛出事件Throwing
		3.触发消息事件：
			消息事件节点
				// 触发消息事件
				runtimeService.messageEventReceived("testMsg", exe.getId());
		4.中断和激活流程：
			SUSPENSION_STATE_字段保存中断状态，1为活跃，2为中断
				runtimeService.suspendProcessInstanceById(pi.getId());
				runtimeService.activateProcessInstanceById(pi.getId());
		5.删除流程：
			runtimeService.deleteProcessInstance(pi.getId(), "abc");
	5.流程数据查询：
		1.执行流查询：
		2.流程实例查询
			
第十章 历史数据管理和流程引擎管理
	历史数据：
		activiti删除的流程定义、流程任务和流程实例的数据
		已经完成的流程实例以及相关数据
	ManagementService可以查询引擎数据库信息、工作信息，直接对数据库操作
	
	1.历史数据管理：
		1.历史流程实例查询：
			historyService.createHistoricProcessInstanceQuery()
		2.历史任务查询：
			historyService.createHistoricTaskInstanceQuery()
		3.历史行为查询：
			historyService.createHistoricActivityInstanceQuery()
		4.历史流程明细查询：
			流程的明细信息包括流程参数和流程表单属性
				默认情况下，Activiti不会记录明细，当history配置为full级别时，才会记录
		5.删除历史流程实例和历史任务：
			historyService.deleteHistoricProcessInstance(pi1.getId());
			级联删除实例
	2.工作的产生：
		异步工作时，用工作表保存任务
			一般的工作 ACT_RU_JOB
			定时中断任务 ACT_RU_SUSPENDED_JOB
			定时任务 ACT_RU_TIMER_JOB
		1.异步任务产生的工作：
			Java Service Task主要用于在任务中调用外部的Java 类
		2.定义中间事件产生的工作：
			定义了定时器相关的节点，会在某个定义的时间点上执行。
			可以加入定时器的节点：
				中间事件节点、流程开始事件节点和边界事件节点
		3.定义边界事件产生的工作：
		4.定时开始事件产生的工作
		5.流程抛出事件产生的工作
		6.暂停工作的产生
		7.无法执行的工作
	3.工作管理：
		ManagementService提供工作查询对象（对象返回job实例）
		1.工作查询对象：	
			4个：
				JobQuery
				TimerJobQuery
				SuspendedJobQuery
				DeadLetterJobQuery
		2.获取工作异常信息：
			getXXXJobExceptionStacktrace
		3.转移与删除工作：
			move
			delete
	4.数据库管理：
		1.查询引擎属性
		2.数据表信息查询
		3.数据库操作
		4.数据表查询
	
第十一章 流程事件
	要点：
		BPMN的事件分类
		各种流程的事件定义
		开始事件的应用
		结束事件的应用
		边界事件的应用
		中间事件的应用
	
	1.事件分类：
		1.按照事件的位置分类：
			开始事件：表示流程开始的事件
			结束事件：表示流程结束的事件
			中间事件：出现在流程中，单独作为流程节点的事件
			边界事件：附属于某个流程节点（如子流程，流程任务）的事件
		2.按照事件的特性分类：
			Catching事件
			Throwing事件
				开始事件是Catching
				结束事件是throwing
				边界时catching
				中间 都有
	2.事件定义：
		与事件结合
	3.开始事件：
		无指定开始事件
		定时器开始事件
		消息开始事件
		错误开始事件
	4.结束事件：
		无指定结束事件
		错误结束事件
		取消结束事件
		中止结束事件
	5.边界事件
		定时器
		信号
		错误
		取消
	6.中间事件
		定时器  捕获
		信号 捕获 抛出
		消息 抛出	
	7.补偿事件
		补偿边界
			事务子流程取消触发
			补偿中间触发
		补偿中间

第十二章 流程任务
	BPMN任务概述
	用户任务的应用
	指定服务任务的行为
	WebService任务的应用
	脚本任务的应用
	任务监听器的使用
	流程监听器的使用

	1.用户任务：
		1.分配任务候选人
			&lt;userTask id="usertask1" name="Task1"&gt;
				&lt;potentialOwner&gt;
					&lt;resourceAssignmentExpression&gt;
						&lt;formalExpression&gt;user(angus), group(management), boss
						&lt;/formalExpression&gt;
					&lt;/resourceAssignmentExpression&gt;
				&lt;/potentialOwner&gt;
			&lt;/userTask&gt;
		2.分配任务代理人
			&lt;userTask id="usertask1" name="Task 1"&gt;
				&lt;humanPerformer&gt;
					&lt;resourceAssignmentExpression&gt;
						&lt;formalExpression&gt;user1&lt;/formalExpression&gt;
					&lt;/resourceAssignmentExpression&gt;
				&lt;/humanPerformer&gt;
			&lt;/userTask&gt;
		3.权限分配扩展
			使用activiti扩展来分配任务的候选人和代理人
				&lt;userTask id="usertask1" name="Assignee" activiti:assignee="user1"&gt;&lt;/userTask&gt;
				&lt;userTask id="usertask2" name="Candidate User"
					activiti:candidateUsers="user1, user2"&gt;&lt;/userTask&gt;
				&lt;userTask id="usertask3" name="Candidate Group"
					activiti:candidateGroups="group1,group2"&gt;&lt;/userTask&gt;
		4.使用任务监听器进行权限分配
			设置监听类
				public class UserTaskListener implements TaskListener {

					public void notify(DelegateTask delegateTask) {
						System.out.println("使用任务监听器设置任务权限");
						delegateTask.setAssignee("user1");
						delegateTask.addCandidateGroup("group1");
						delegateTask.addCandidateUser("user1");		
					}
				}
			配置监听器
				&lt;userTask id="usertask1" name="Assignee"&gt;
					&lt;extensionElements&gt;
						&lt;activiti:taskListener event="create"
							class="org.crazyit.activiti.UserTaskListener"&gt;&lt;/activiti:taskListener&gt;
					&lt;/extensionElements&gt;
				&lt;/userTask&gt;
		5.使用JUEL分配权限
			
			&lt;userTask id="usertask2" name="Task 1" activiti:assignee="\${authService.getUserAssignee()}"&gt;&lt;/userTask&gt;
			&lt;userTask id="usertask3" name="Task 2" activiti:candidateUsers="\${authService.getCandidateUsers()}"&gt;&lt;/userTask&gt;
			&lt;userTask id="usertask4" name="Task 3" activiti:candidateGroups="\${authService.getCandidateGroups()}"&gt;&lt;/userTask&gt;
			&lt;userTask id="usertask5" name="Task 4" activiti:assignee="\${authService.lastUser}"&gt;&lt;/userTask&gt;
		
			服务Bean
			public class AuthService implements Serializable {
	
				private String lastUser = "angus";
				
				public String getLastUser() {
					return this.lastUser;
				}
				
				public AuthService() {
					System.out.println("create AuthService");
				}

				//使用方法为任务指定代理人
				public String getUserAssignee() {
					return "crazyit";
				}
				
				//使用方法为任务指定候选人
				public List&lt;String&gt; getCandidateUsers() {
					List&lt;String&gt; result = new ArrayList&lt;String&gt;();
					result.add("user1");
					result.add("user2");
					return result;
				}
				
				//使用方法为任务指定候选用户组
				public List&lt;String&gt; getCandidateGroups() {
					List&lt;String&gt; result = new ArrayList&lt;String&gt;();
					result.add("group1");
					result.add("group2");
					return result;
				}
			}

			添加流程变量
			Map&lt;String, Object&gt; vars = new HashMap&lt;String, Object&gt;();
			vars.put("authService", new AuthService());
			// 启动流程
			ProcessInstance pi = runtimeService.startProcessInstanceByKey("process1", vars);
					
	2.服务任务：
		activiti:class: JavaDelegate或ActivitiBehavior的实现类
		activiti:delegateExpression  
		activiti:expression 直接调用bean
		
		1.实现JavaDelegate
			
			public class MyJavaDelegate implements JavaDelegate, Serializable {

				public void execute(DelegateExecution execution) {
					System.out.println(" 实现  JavaDelegate 的  JavaSeviceTask: " + this);
				}
			}
			activiti:class方式：

				&lt;serviceTask id="servicetask1" name="Service Task 1"
					activiti:class="org.crazyit.activiti.MyJavaDelegate"&gt;&lt;/serviceTask&gt;

			activiti:delegateExpression 方式：
				Map&lt;String, Object&gt; vars = new HashMap&lt;String, Object&gt;();
				vars.put("myDelegate", new MyJavaDelegate());
				// 启动流程
				ProcessInstance pi = runtimeService.startProcessInstanceByKey("process1", vars);

				&lt;serviceTask id="servicetask1" name="Service Task"
					activiti:delegateExpression="\${myDelegate}"&gt;&lt;/serviceTask&gt;
			
		2.使用普通的JavaBean
			调用Bean方法和属性

			Bean类：
				public class MyJavaBean implements Serializable {

					private String name = "crazyit";
					
					public String getName() {
						return this.name;
					}
					
					public void print(Execution exe) {
						System.out.println("使用Java Bean的print方法：" + exe.getId());
					}
				}
			
			BPMN：
				&lt;serviceTask id="servicetask1" name="Service Task"
					activiti:expression="\${myBean.print(execution)}"&gt;&lt;/serviceTask&gt;
				&lt;serviceTask id="servicetask2" name="Service Task"
					activiti:expression="\${execution.setVariable('myName', myBean.name)}"&gt;&lt;/serviceTask&gt;
			设置参数：
				Map&lt;String, Object&gt; vars = new HashMap&lt;String, Object&gt;();
				vars.put("myBean", new MyJavaBean());
				// 启动流程
				ProcessInstance pi = runtimeService.startProcessInstanceByKey(
						"process1", vars);
		3.Shell任务：
			执行cmd命令
	
	3.流程与任务监听器：
		
		任务监听器taskListener  设置event  ="create/complete/assignment"表示用户任务创建时调用监听器
			&lt;userTask id="usertask1" name="User Task"&gt;
				&lt;extensionElements&gt;
					&lt;activiti:taskListener event="create"
						class="org.crazyit.activiti.PropertyConfigListener" /&gt;
				&lt;/extensionElements&gt;
			&lt;/userTask&gt;

			属性注入，往任务监听器中注入属性
				&lt;userTask id="usertask1" name="User Task"&gt;
					&lt;extensionElements&gt;
						&lt;activiti:taskListener event="create"
							class="org.crazyit.activiti.PropertyInjection"&gt;
							&lt;activiti:field name="userName" stringValue="crazyit" /&gt;
						&lt;/activiti:taskListener&gt;
					&lt;/extensionElements&gt;
				&lt;/userTask&gt;
				监听器类：
					public class PropertyInjection implements TaskListener {

						private Expression userName;
						
						public void setUserName(Expression userName) {
							this.userName = userName;
						}
						
						public void notify(DelegateTask delegateTask) {
							System.out.println("属性注入后的值：" + this.userName.getValue(null));
						}
					}
		
		流程监听器：
			&lt;activiti:executionListener event="XXXXX"
				class="org.crazyit.activiti.ExecutionListenerInvocation"&gt;
				&lt;activiti:field name="message"&gt;
					&lt;activiti:string&gt;&lt;/activiti:string&gt;
				&lt;/activiti:field&gt;
			&lt;/activiti:executionListener&gt;
			


			
			&lt;process id="process1" name="process1" isExecutable="true"&gt;
				&lt;extensionElements&gt;
					&lt;activiti:executionListener event="end"
						class="org.crazyit.activiti.ExecutionListenerInvocation"&gt;
						&lt;activiti:field name="message"&gt;
							&lt;activiti:string&gt;&lt;![CDATA[流程结束]]&gt;&lt;/activiti:string&gt;
						&lt;/activiti:field&gt;
					&lt;/activiti:executionListener&gt;
					&lt;activiti:executionListener event="start"
						class="org.crazyit.activiti.ExecutionListenerInvocation"&gt;
						&lt;activiti:field name="message"&gt;
							&lt;activiti:string&gt;&lt;![CDATA[流程开始]]&gt;&lt;/activiti:string&gt;
						&lt;/activiti:field&gt;
					&lt;/activiti:executionListener&gt;
				&lt;/extensionElements&gt;
				&lt;startEvent id="startevent1" name="Start"&gt;&lt;/startEvent&gt;
				&lt;userTask id="usertask1" name="Task 1"&gt;
					&lt;extensionElements&gt;
						&lt;activiti:executionListener event="end"
							class="org.crazyit.activiti.ExecutionListenerInvocation"&gt;
							&lt;activiti:field name="message"&gt;
								&lt;activiti:string&gt;&lt;![CDATA[用户任务结束]]&gt;&lt;/activiti:string&gt;
							&lt;/activiti:field&gt;
						&lt;/activiti:executionListener&gt;
						&lt;activiti:executionListener event="start"
							class="org.crazyit.activiti.ExecutionListenerInvocation"&gt;
							&lt;activiti:field name="message"&gt;
								&lt;activiti:string&gt;&lt;![CDATA[用户任务开始]]&gt;&lt;/activiti:string&gt;
							&lt;/activiti:field&gt;
						&lt;/activiti:executionListener&gt;
					&lt;/extensionElements&gt;
				&lt;/userTask&gt;
				&lt;exclusiveGateway id="exclusivegateway1" name="Exclusive Gateway"&gt;
					&lt;extensionElements&gt;
						&lt;activiti:executionListener event="start"
							class="org.crazyit.activiti.ExecutionListenerInvocation"&gt;
							&lt;activiti:field name="message"&gt;
								&lt;activiti:string&gt;&lt;![CDATA[网关开始]]&gt;&lt;/activiti:string&gt;
							&lt;/activiti:field&gt;
						&lt;/activiti:executionListener&gt;
					&lt;/extensionElements&gt;
				&lt;/exclusiveGateway&gt;
				&lt;intermediateThrowEvent id="signalintermediatethrowevent1"
					name="SignalThrowEvent"&gt;
					&lt;extensionElements&gt;
						&lt;activiti:executionListener event="end"
							class="org.crazyit.activiti.ExecutionListenerInvocation"&gt;
							&lt;activiti:field name="message"&gt;
								&lt;activiti:string&gt;&lt;![CDATA[中间事件结束]]&gt;&lt;/activiti:string&gt;
							&lt;/activiti:field&gt;
						&lt;/activiti:executionListener&gt;
						&lt;activiti:executionListener event="start"
							class="org.crazyit.activiti.ExecutionListenerInvocation"&gt;
							&lt;activiti:field name="message"&gt;
								&lt;activiti:string&gt;&lt;![CDATA[中间事件开始]]&gt;&lt;/activiti:string&gt;
							&lt;/activiti:field&gt;
						&lt;/activiti:executionListener&gt;
					&lt;/extensionElements&gt;
				&lt;/intermediateThrowEvent&gt;
				&lt;endEvent id="endevent1" name="End"&gt;&lt;/endEvent&gt;
				&lt;sequenceFlow id="flow1" sourceRef="startevent1"
					targetRef="exclusivegateway1"&gt;
					&lt;extensionElements&gt;
						&lt;activiti:executionListener 
							class="org.crazyit.activiti.ExecutionListenerInvocation"&gt;
							&lt;activiti:field name="message" stringValue="从开始事件到网关的顺序流"/&gt;
						&lt;/activiti:executionListener&gt;
					&lt;/extensionElements&gt;	
				&lt;/sequenceFlow&gt;
				&lt;sequenceFlow id="flow3" sourceRef="usertask1"
					targetRef="signalintermediatethrowevent1"&gt;&lt;/sequenceFlow&gt;
				&lt;sequenceFlow id="flow4" sourceRef="signalintermediatethrowevent1"
					targetRef="endevent1"&gt;&lt;/sequenceFlow&gt;
				&lt;sequenceFlow id="flow5" sourceRef="exclusivegateway1"
					targetRef="usertask1"&gt;&lt;/sequenceFlow&gt;
			&lt;/process&gt;
				
第十三章 其他流程元素	
	1.子流程：
		1.嵌入式子流程
			&lt;subProcess id="subprocess1" name="Sub Process"&gt;
				&lt;startEvent id="startevent2" name="Start"&gt;&lt;/startEvent&gt;
				&lt;serviceTask id="usertask2" name="Sub Task"
					activiti:class="org.crazyit.activiti.EmbededJavaDelegate"&gt;&lt;/serviceTask&gt;
				&lt;endEvent id="endevent1" name="End"&gt;&lt;/endEvent&gt;
				&lt;sequenceFlow id="flow3" sourceRef="startevent2"
					targetRef="usertask2"&gt;&lt;/sequenceFlow&gt;
				&lt;sequenceFlow id="flow4" sourceRef="usertask2"
					targetRef="endevent1"&gt;&lt;/sequenceFlow&gt;
			&lt;/subProcess&gt;
		
		
		
		2.调用式子流程

			&lt;callActivity id="subprocess1" name="人事、总监子流程" calledElement="SubProcess"&gt;
				&lt;extensionElements&gt;
					&lt;activiti:in source="days" target="newDays"&gt;&lt;/activiti:in&gt;
					&lt;activiti:out source="myDays" target="resultDays"&gt;&lt;/activiti:out&gt;
				&lt;/extensionElements&gt;
			&lt;/callActivity&gt;
			
			// 部署流程文件
			repositoryService
					.createDeployment()
					.addClasspathResource(
							"bpmn/CallActivityVariable.bpmn")
					.addClasspathResource("bpmn/SubProcess.bpmn")
					.deploy();		

		3.事件子流程
		4.事务子流程
		5.特别子流程
			bpmn不指定子流程的执行顺序,实际运行时指定运行顺序
			&lt;adHocSubProcess id="adhocSubProcess" ordering="Sequential"&gt;
				&lt;userTask id="subProcessTask" name="Task in subprocess" /&gt;
				&lt;userTask id="subProcessTask2" name="Task2 in subprocess" /&gt;
			&lt;/adHocSubProcess&gt;
			
			// 查询子流程的执行流
			Execution exe = runtimeService.createExecutionQuery()
					.processInstanceId(pi.getId()).activityId("adhocSubProcess")
					.singleResult();
			// 让执行流到达第二个任务
			runtimeService.executeActivityInAdhocSubProcess(exe.getId(),
					"subProcessTask2");	
			
			// 完成第二个任务
			Task subProcessTask2 = taskService.createTaskQuery()
					.processInstanceId(pi.getId())
					.taskDefinitionKey("subProcessTask2").singleResult();
			taskService.complete(subProcessTask2.getId());

			// 完成特别子流程✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
			//✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
			runtimeService.completeAdhocSubProcess(exe.getId());
			//✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓✓
		
	2.顺序流与网关：
		顺序流：
			条件顺序流
				&lt;sequenceFlow id="flow4" name="小于等于5天" sourceRef="exclusivegateway1"
					targetRef="usertask2"&gt;
					&lt;conditionExpression xsi:type="tFormalExpression"&gt;
					&lt;![CDATA[
					\${days &lt;= 5}
					]]&gt;
					&lt;/conditionExpression&gt;
				&lt;/sequenceFlow&gt;
				&lt;sequenceFlow id="flow5" name="大于5天" sourceRef="exclusivegateway1"
					targetRef="usertask3"&gt;
					&lt;conditionExpression xsi:type="tFormalExpression"&gt;
					&lt;![CDATA[
					\${days &gt; 5}
					]]&gt;
					&lt;/conditionExpression&gt;
				&lt;/sequenceFlow&gt;

				执行示例：
				Map&lt;String, Object&gt; vars = new HashMap&lt;String, Object&gt;();
				vars.put("days", 6);
				ProcessInstance pi = runtimeService.startProcessInstanceByKey(
				"process1", vars);
			默认顺序流
				&lt;userTask id="usertask1" name="填写请假申请" default="flow1"&gt;&lt;/userTask&gt;
				
				&lt;sequenceFlow id="flow1" sourceRef="usertask1" targetRef="usertask2"&gt;&lt;/sequenceFlow&gt;

				&lt;sequenceFlow id="flow2" sourceRef="usertask1" targetRef="usertask3"&gt;
					&lt;conditionExpression xsi:type="tFormalExpression"&gt;&lt;![CDATA[
					\${days &gt; 5}
					]]&gt;&lt;/conditionExpression&gt;
				&lt;/sequenceFlow&gt;
				
		流程网关：
			单向网关
			并行网关
			兼容网关
			事件网关
			组合网关（Activiti不支持）

			单向网关
			并行网关：
				分叉 合并
			兼容网关：
				单向网关和并行网关结合
			事件网关：
				哪个事件先触发，就转向哪一个执行流
				事件网关只会选择最先触发的事件所在的分支向前执行
	
	3.流程活动的特性：
		1.多实例活动
			&lt;multiInstanceLoopCharacteristics
				isSequential="true"&gt;
				&lt;loopCardinality&gt;2&lt;/loopCardinality&gt;
			&lt;/multiInstanceLoopCharacteristics&gt;
		2.设置循环数据
			&lt;multiInstanceLoopCharacteristics
				isSequential="false" activiti:collection="datas1"&gt;
			&lt;/multiInstanceLoopCharacteristics&gt;
			
			List&lt;String&gt; datas1 = new ArrayList&lt;String&gt;();
			datas1.add("a");
			datas1.add("b");
			Map&lt;String, Object&gt; vars = new HashMap&lt;String, Object&gt;();
			vars.put("datas1", datas1);
			ProcessInstance pi = runtimeService.startProcessInstanceByKey(
				"process1", vars);
		3.获取循环元素
			&lt;multiInstanceLoopCharacteristics
				isSequential="true" activiti:collection="datas1"
				activiti:elementVariable="data"&gt;
			&lt;/multiInstanceLoopCharacteristics&gt;

			public class ServiceB implements JavaDelegate {

				public void execute(DelegateExecution execution) {
				
					System.out.println("获取循环参数：" + execution.getVariable("data"));
				}
			}
		4.循环的内置参数
			nrOfInstances:实例总数
			nrOfActiveInstances:当前正在执行的实例总数	
			nrOfCompletedInstances:已经完成的实例总数
			loopCounter:当前循环的索引
		5.循环结束条件
			&lt;completionCondition&gt;\${nrOfCompletedInstances &gt;= 2}&lt;/completionCondition&gt;
			
			&lt;multiInstanceLoopCharacteristics
				isSequential="true" activiti:collection="\${datas}"
				activiti:elementVariable="data"&gt;
				&lt;completionCondition&gt;\${nrOfCompletedInstances &gt;= 2}&lt;/completionCondition&gt;
			&lt;/multiInstanceLoopCharacteristics&gt;

第十四章 Activiti与规则引擎			
	1.Drools介绍与运行
		代码与业务规则分离
	2.规则语法
		全局变量
		函数
		规则属性
			activation-group 激活组，组内只有一个规则会被激活
			salience 优先级
		条件语法
			when then
		行为语法
			修改事实对象
			insert
			update
	3.Activiti整合Drools
		&lt;property name="customPostDeployers"&gt;
			&lt;list&gt;
				&lt;bean class="org.activiti.engine.impl.rules.RulesDeployer" /&gt;
			&lt;/list&gt;
		&lt;/property&gt;	
		
		&lt;businessRuleTask id="businessruletask1" name="匹配销售规则" 
			activiti:ruleVariablesInput="\${member}" 
			activiti:resultVariable="members"&gt; &lt;/businessRuleTask&gt;

第十五章 基于DMN的Activiti规则引擎
	1.DMN规范
	2.规则引擎使用
	3.MVEL表达式

第十六章 整合第三方框架
	
	引擎，各种服务，都可以直接注入

第十七章 Rest
	
第十八章 
	表单
	流程图与XML的转换
	回退
	会签
	



		
		
		

	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:27.52,words:8255},y:"a",t:"activiti6笔记"},["/blog/old/beskill/activiti/activiti6基础笔记.html","/blog/old/beskill/activiti/activiti6基础笔记.md",":md"]],["v-41f030d6","/blog/old/beskill/android/%E7%AC%AC%E4%B8%80%E8%A1%8C%E4%BB%A3%E7%A0%81%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["后端技术","android"],g:["android"],e:`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.
	log工具使用方便强大

	不要再使用system.out.println打印日志了，
	注意Javaweb中的自动化测试

2.
	Activity 包含用户界面的组件
	
	使用intent连接活动之间的跳转和数据传输
	活动的声明周期，运行、暂停、停止、销毁
		运行：在栈顶，正在操作
		暂停：仍显示在界面中，但不是栈顶，不是正在操作的对象
		停止：栈中存在，界面不存在
		销毁：栈中没有

		onCreate
		onRestart onStart
		onResume
		onPause
		onStop    
		onDestory
	活动的启动模式：
		标准启动，是默认的
		singleTop  该活动如果在栈顶的话，启动时，不再创建新的实例 ;但是，栈中已经存在，却不在栈顶，仍会创建一个新的实例
		singleTask 该活动再栈中存在，直接将它上面的栈中元素出栈，然后取出它，不会创建新的实例;但是，取出的活动，已经销毁了
		singleInstance  创建新的返回栈，共享返回栈
	
	活动的最佳实践：	
		编程中有很多小技巧，使用这些技巧可以带来极大的便利
			继承的妙用
		
			可以写一个所有活动和器父类之间的中间类，用它来统一这些活动的行为

		知晓当前的活动
		随时随地退出程序  写一个管理活动类来管理，活动创建时添加，活动销毁时减少，并添加一个可以销毁全部活动的方法
		启动活动的最佳写法，传递数据时单独写一个方法

3.
	控件
	布局
	ListView
	Recycler

4.
	碎片
	动态的增加碎片
	返回栈
	 
	代码域xml结合开发




	Java 的回调机制


	内容提供者
	服务
	网络


12 MaterialDesign
	ToolBar  
	滑动菜单 DrawerLayout
	悬浮按钮 FloatingActionButton
	交互式通知 Snackbar

	CoordinatorLayout 
	CardView

	AppBarLayout  解决标题栏被遮挡的问题

	下拉刷新 SwipeRefreshLayout

	可折叠式标题栏 CollaspingToolbarLayout

	系统工作栏透明

13 高级技巧

	1.自定义自己的Application类

	2.Intent传输对象

	3.定制自己的日志工具，在自定义类中控制log的打印等级

	4.调试Andriod程序

	5.创建定时任务

	6.多窗口模式编程     分屏

	7.Lambda表达式
		
	implementation 'de.hdodenhof:circleimageview:3.1.0'
	implementation 'com.android.support:design:28.0.0'

	implementation 'androidx.recyclerview:recyclerview:1.1.0'

	implementation 'androidx.cardview:cardview:1.0.0'

	implementation 'com.github.bumptech.glide:glide:4.5.0'	
	 annotationProcessor 'com.github.bumptech.glide:compiler:4.5.0'

	implementation 'org.litepal.android:java:3.0.0'

	implementation 'com.squareup.okhttp3:okhttp:4.5.0'

	implementation 'com.google.code.gson:gson:2.8.6'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.06,words:619},y:"a",t:"第一行代码笔记"},["/blog/old/beskill/android/第一行代码笔记.html","/blog/old/beskill/android/第一行代码笔记.md",":md"]],["v-6d241b5d","/blog/old/beskill/bash/Bash%E5%9F%BA%E7%A1%80%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["后端技术","Bash"],g:["Bash"],e:`<p><em><a href="https://wangdoc.com/bash/intro.html" target="_blank" rel="noopener noreferrer">https://wangdoc.com/bash/intro.html</a></em><br>
<em><a href="https://github.com/wangdoc/bash-tutorial" target="_blank" rel="noopener noreferrer">https://github.com/wangdoc/bash-tutorial</a></em></p>
<h4> 1. 变量</h4>`,r:{minutes:12.07,words:3622},y:"a",t:"Bash脚本笔记"},["/blog/old/beskill/bash/Bash基础笔记.html","/blog/old/beskill/bash/Bash基础笔记.md",":md"]],["v-d3bc8416","/blog/old/beskill/bash/%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html",{d:1577869375e3,l:"2020年1月1日",c:["后端技术","Bash"],g:["Bash"],e:`<ol>
<li>系统监控</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">top</span>

<span class="token function">free</span>

<span class="token function">uptime</span>

<span class="token function">ps</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.1,words:31},y:"a",t:"Bash常用命令"},["/blog/old/beskill/bash/常用命令.html","/blog/old/beskill/bash/常用命令.md",":md"]],["v-2d51a49f","/blog/old/beskill/docker/docker%E5%91%BD%E4%BB%A4.html",{d:1577869375e3,l:"2020年1月1日",c:["后端技术","docker"],g:["docker"],e:`<blockquote>
<p>windows 安装使用</p>
</blockquote>
<ol>
<li>
<p>安装exe</p>
</li>
<li>
<p>安装wsl,wsl2</p>
</li>
</ol>
<p><a href="https://docs.microsoft.com/zh-cn/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package" target="_blank" rel="noopener noreferrer">https://docs.microsoft.com/zh-cn/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package</a></p>`,r:{minutes:4.52,words:1355},y:"a",t:"docker基础笔记"},["/blog/old/beskill/docker/docker命令.html","/blog/old/beskill/docker/docker命令.md",":md"]],["v-5b2d3140","/blog/old/beskill/docker/%E5%B8%B8%E7%94%A8%E9%95%9C%E5%83%8F%E5%91%BD%E4%BB%A4.html",{d:1577869375e3,l:"2020年1月1日",c:["后端技术","docker"],g:["docker"],e:`<ol>
<li>
<p>tomcat</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> erms <span class="token parameter variable">-p</span> <span class="token number">23301</span>:8080 <span class="token parameter variable">-v</span> /usr/local/erms:/usr/local/tomcat/webapps/test <span class="token parameter variable">-d</span> tomcat  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>`,r:{minutes:.12,words:36},y:"a",t:"docker常用镜像"},["/blog/old/beskill/docker/常用镜像命令.html","/blog/old/beskill/docker/常用镜像命令.md",":md"]],["v-476eae3c","/blog/old/beskill/maven/maven%E6%B7%B1%E5%85%A5%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["后端技术","maven"],g:["maven"],e:`<p>maven的作用远不止所看到的这么简单。</p>
<p>常用的插件：<a href="https://my.oschina.net/lion1220/blog/4449702" target="_blank" rel="noopener noreferrer">https://my.oschina.net/lion1220/blog/4449702</a></p>
<ul>
<li>maven-jar-plugin    <a href="https://www.jianshu.com/p/d44f713b1ec9" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/d44f713b1ec9</a></li>
<li>exec-maven-plugin    <a href="https://www.pkslow.com/archives/codehaus-mojo-exec-maven-plugin" target="_blank" rel="noopener noreferrer">https://www.pkslow.com/archives/codehaus-mojo-exec-maven-plugin</a></li>
<li>maven-assembly-plugin    <a href="https://segmentfault.com/a/1190000016237395" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000016237395</a></li>
</ul>`,r:{minutes:.98,words:294},y:"a",t:"maven笔记"},["/blog/old/beskill/maven/maven深入学习笔记.html","/blog/old/beskill/maven/maven深入学习笔记.md",":md"]],["v-106ab87c","/blog/old/beskill/yaml/yaml%E8%AF%AD%E6%B3%95.html",{d:1577869375e3,l:"2020年1月1日",c:["后端技术","yaml"],g:["yaml"],e:`<blockquote>
<p>YAML设计目标是方便人们读写，它实质上是一种通用的数据串行化格式</p>
</blockquote>
<h6> 1. 基本语法规则</h6>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 大小写敏感
<span class="token list punctuation">-</span> 使用缩进表示层级关系
<span class="token list punctuation">-</span> 缩进时不允许使用Tab键，只允许使用空格
<span class="token list punctuation">-</span> 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.52,words:157},y:"a",t:"yaml语法"},["/blog/old/beskill/yaml/yaml语法.html","/blog/old/beskill/yaml/yaml语法.md",":md"]],["v-5196b250","/blog/old/database/mysql/java%E6%95%B4%E5%90%88mysql.html",{d:1577869375e3,l:"2020年1月1日",c:["数据库","Mysql"],g:["数据库","Mysql"],e:`<h1> Java</h1>
<h1> Oracle</h1>
<h1> Mysql</h1>
<h2> 1. 基本的select语句</h2>
<h3> DDL: 数据定义语言</h3>
<h4> 1. create</h4>
<h4> 2. drop</h4>
<h4> 3. alter</h4>
<h3> DML: 数据操作语言</h3>
<h4> 1. insert</h4>
<h4> 2. delete</h4>
<h4> 3. update</h4>
<h3> DCL: 数据控制语言</h3>
<h4> 1. grant</h4>
<h4> 2. revoke</h4>
<h4> 3. commit</h4>`,r:{minutes:13.52,words:4055},y:"a",t:"mysql使用"},["/blog/old/database/mysql/java整合mysql.html","/blog/old/database/mysql/java整合mysql.md",":md"]],["v-2179c7dc","/blog/old/database/mysql/%E5%9F%BA%E7%A1%80.html",{d:1577869375e3,l:"2020年1月1日",c:["数据库","Mysql"],g:["数据库","Mysql"],e:`<h1> 1.Mysql环境</h1>
<h2> 主要的目录结构</h2>
<h1> 2. 基本的select语句</h1>
<ul>
<li>sql的分类：
<ul>
<li>DQL:    select</li>
<li>DDL:    create, drop, alter</li>
<li>DML:    update, insert, delete</li>
<li>DCL:    grant, revoke, commit, rollback, savepoint</li>
</ul>
</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">join</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">on</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">where</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">and</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">or</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">group</span> <span class="token keyword">by</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">having</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">order</span> <span class="token keyword">by</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>



<span class="token comment">#方式1：</span>
<span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">FROM</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">WHERE</span> 多表的连接条件
<span class="token operator">AND</span> 不包含组函数的过滤条件
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">HAVING</span> 包含组函数的过滤条件
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">ASC</span><span class="token operator">/</span><span class="token keyword">DESC</span>
<span class="token keyword">LIMIT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">#方式2：</span>
<span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">FROM</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">JOIN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">ON</span> 多表的连接条件
<span class="token keyword">JOIN</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">ON</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">WHERE</span> 不包含组函数的过滤条件
<span class="token operator">AND</span><span class="token operator">/</span><span class="token operator">OR</span> 不包含组函数的过滤条件
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">HAVING</span> 包含组函数的过滤条件
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">ASC</span><span class="token operator">/</span><span class="token keyword">DESC</span>
<span class="token keyword">LIMIT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">#其中：</span>
<span class="token comment">#（1）from：从哪些表中筛选</span>
<span class="token comment">#（2）on：关联多表查询时，去除笛卡尔积</span>
<span class="token comment">#（3）where：从表中筛选的条件</span>
<span class="token comment">#（4）group by：分组依据</span>
<span class="token comment">#（5）having：在统计结果中再次筛选</span>
<span class="token comment">#（6）order by：排序</span>
<span class="token comment">#（7）limit：分页</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.78,words:1735},y:"a",t:"Mysql基础知识"},["/blog/old/database/mysql/基础.html","/blog/old/database/mysql/基础.md",":md"]],["v-468f0997","/blog/old/database/oracle/Oracle%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html",{d:1577869375e3,l:"2020年1月1日",c:["数据库","Oracle"],g:["Oracle"],e:`<h1> 游标</h1>
<h1> 索引</h1>
<p>​	创建、删除、位图索引、组合索引<br>
​		create index index_name on table_name(table_column)</p>
<h1> 触发器</h1>
<p>​	语句级触发器<br>
​	行级触发器<br>
​		触发器功能：<br>
​			1.允许/限制对表的修改<br>
​			2.自动生成派生列，比如自增字段<br>
​			3.强制数据一致性<br>
​			4.提供审计和日志记录<br>
​			5.防止无效的事务处理<br>
​			6.启用复杂的业务逻辑<br>
​		create or replace trigger tri_name<br>
​			[before | after | instead of] tri_event<br>
​			on table_name | view_name | user_name |db_name<br>
​				[ for each row] [when tri_condition]<br>
​		begin<br>
​			plsql_sentences;<br>
​		end tri_name;<br>
​</p>`,r:{minutes:2.91,words:873},y:"a",t:"Oracle基础总结"},["/blog/old/database/oracle/Oracle基础总结.html","/blog/old/database/oracle/Oracle基础总结.md",":md"]],["v-4f1a648a","/blog/old/database/redis/redis.html",{d:172684892e4,c:["数据库","Redis"],g:["Redis"],r:{minutes:.07,words:22},y:"a",t:"Redis使用指南"},[":md"]],["v-4d18a865","/blog/old/fe/framework/",{d:172684892e4,e:`<h1> 前端框架</h1>
<ul>
<li><a href="/blog/fe/framework/vue/Vue2.5%E5%BC%80%E5%8F%91%E5%8E%BB%E5%93%AA%E5%84%BF%E7%BD%91App%E4%BB%8E%E9%9B%B6%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%E5%88%B0%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html" target="blank">《Vue2.5开发去哪儿网App 从零基础入门到实战项目》学习笔记</a></li>
</ul>`,r:{minutes:.17,words:51},y:"a",t:"前端框架"},["/blog/old/fe/framework/README.md"]],["v-e25b971c","/blog/old/fe/skill/",{d:172684892e4,e:`<h1> 前端技术</h1>
<ul>
<li><a href="/blog/fe/skill/websocket/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html" target="blank">WebSocket基础总结</a></li>
</ul>
`,r:{minutes:.05,words:15},y:"a",t:"前端技术"},["/blog/old/fe/skill/README.md"]],["v-9087045a","/blog/old/fe/skill/StarterSwagger3.html",{d:172684892e4,e:`<h1> Swagger3</h1>
<h1> 1、是什么</h1>
<p>用于生成、描述和调用restful接口的web服务</p>
`,r:{minutes:.07,words:21},y:"a",t:"Swagger3"},[":md"]],["v-0357f249","/blog/old/language/fe/CSS%E4%B8%96%E7%95%8C%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","前端"],g:["CSS"],e:`<h1> 1. 概述</h1>
<h6> 1. <code>在css的世界里，页面上的任何看似简单的呈现都是由许许多多css属性共同作用的结果</code></h6>
<h6> 2. <code>每个css属性在css世界中都是有其存在的原因的，都是和其他多个css属性发生着千丝万缕的关系的·	</code></h6>
<h6> 3. Cascading Style Sheets</h6>
<ul>
<li>
<p>CSS世界的诞生就是为图文信息展示服务的</p>
</li>
<li>
<p>流是css世界中的一种基本的定位和布局机制，可以理解为现实世界的一套物理规则。</p>
</li>
<li>
<p>css世界中的构建基石是HTML,HTML中最具代表性的两个基石是div 和 span (对应着水和木头)</p>
</li>
</ul>`,r:{minutes:5.59,words:1678},y:"a",t:"《CSS世界》学习笔记"},["/blog/old/language/fe/CSS世界学习笔记.html","/blog/old/language/fe/CSS世界学习笔记.md",":md"]],["v-c3c11a36","/blog/old/language/fe/JavaScript%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","前端"],g:["JavaScript"],e:`<p>javascript高级编程</p>
<p>变量定义、流程控制、运算符</p>
<p>Javascript函数<br>
不是面向对象的<br>
有点像Java方法，但并不一样</p>
<pre><code>在Java里，类是一等公民，类是可以独立存在的程序单元
在JavaScript里，函数是一等公民
函数永远是独立存在的！！！即使定义在一个类中也是独立存在的。（call）

定义函数的方法:
	第一种：
		function 函数名(p1,p2){
			函数执行体
			return ;
			}
	第二种：用function定义匿名函数
		function (p1,p2){
			函数执行体
			return ;
			}
	第三种：直接用function的构造器来创建函数
		new Function(p1,p2,p3,...,pn,"return ;")
			语法繁琐之处在于，设置函数执行体时，参数很难传递。
</code></pre>`,r:{minutes:6.27,words:1880},y:"a",t:"JavaScript笔记"},["/blog/old/language/fe/JavaScript笔记.html","/blog/old/language/fe/JavaScript笔记.md",":md"]],["v-4f00b37c","/blog/old/language/fe/JavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","前端"],g:["JavaScript"],e:`<h1> 1. 什么是JavaScript</h1>
<h6> javascript历史回顾</h6>
<p>Mocha（后改名为LiveScript） =》 改名为JavaScript =》 ECMAScript作为实现JavaScript的标准</p>
<h6> JavaScript是什么</h6>
<p>完整的JavaScript的实现包括：核心（ECMAScript），文档对象模型（DOM），浏览器对象模型（BOM）</p>
<p>ECMAScript定义：语法，类型，语句，关键字，保留字，操作符，全局对象</p>
<p>DOM：Document Object Model 文档对象模型是一个API，用于在HTML中使用扩展的XML <code>DOM通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容和结构。使用DOM API可以轻松地删除、添加、替换、修改节点</code></p>`,r:{minutes:27.53,words:8260},y:"a",t:"《JavaScript高级程序设计》学习笔记"},["/blog/old/language/fe/JavaScript高级程序设计学习笔记.html","/blog/old/language/fe/JavaScript高级程序设计学习笔记.md",":md"]],["v-eff6200a","/blog/old/language/fe/jquery_ajax%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","前端"],g:["JavaScript"],e:`<p>ajax [javascript xmlhttprequest   xml,html,json]</p>
<p>一、Ajax</p>
<p>jquery对ajax多了大量的封装<br>
jquery使用三层封装：<br>
最低层封装方法为:$.ajax()<br>
封装最底层实现了第二层的三种方法：<br>
.load()<br>
$.get()<br>
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">.</mi><mi>p</mi><mi>o</mi><mi>s</mi><mi>t</mi><mo stretchy="false">(</mo><mo stretchy="false">)</mo><mtext>最高层是：</mtext></mrow><annotation encoding="application/x-tex">.post()
		最高层是：</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">.</span><span class="mord mathnormal">p</span><span class="mord mathnormal">os</span><span class="mord mathnormal">t</span><span class="mopen">(</span><span class="mclose">)</span><span class="mord cjk_fallback">最高层是：</span></span></span></span>.getScript()	和 $.getJSON()</p>`,r:{minutes:3.57,words:1070},y:"a",t:"jquery-ajax笔记"},["/blog/old/language/fe/jquery_ajax笔记.html","/blog/old/language/fe/jquery_ajax笔记.md",":md"]],["v-31bde1ba","/blog/old/language/fe/%E7%96%AF%E7%8B%82HTML5_CSS3_JavaScript%E8%AE%B2%E4%B9%89%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","前端"],g:["HTML"],e:`<h1> html5：</h1>
<pre><code>输入和显示
</code></pre>
<h1> css  选择器 外部样式表</h1>
<pre><code>	位置，布局，大小，颜色
选择器：
	1.普通选择器
	2.伪元素选择器
	3.伪类选择器
		结构性
		元素状态
		其他
			js中修改：
				行内属性
					document.body.style.backgroundColor="#232323"
				元素类
					document.getElementById("id").className="solid"


属性：
	1.与内容相关：
		content 与伪元素选择器一起使用，插入新内容
	2.字体与文本相关
	3.背景、边框和边距相关
	4.大小、定位和轮廓相关
		border-sizing 控制宽高的控制范围：值：
			content-box
			border-box
			inherit
		calc(40%-10px)
		定位相关：
			position
			z-index
			left
			bottom
			right
			top
		轮廓相关:
			outline
			outline-color
			outline-style:none,dotted,dashed,solid,double,groove,ridge,inset,outset
			outline-width 
			outline-offset
	5.盒模型与布局相关
		隐藏：disable:none 释放空间 visibility:hidden 仍占用空间
		inline-block
		flex
	6.表格列表相关
	7.变形和动画相关
</code></pre>`,r:{minutes:1.39,words:418},y:"a",t:"疯狂HTML5+CSS3+JavaScript讲义笔记"},["/blog/old/language/fe/疯狂HTML5_CSS3_JavaScript讲义笔记.html","/blog/old/language/fe/疯狂HTML5+CSS3+JavaScript讲义笔记.html","/blog/old/language/fe/%E7%96%AF%E7%8B%82HTML5+CSS3+JavaScript%E8%AE%B2%E4%B9%89%E7%AC%94%E8%AE%B0.html","/blog/old/language/fe/疯狂HTML5+CSS3+JavaScript讲义笔记.md","/blog/old/language/fe/%E7%96%AF%E7%8B%82HTML5+CSS3+JavaScript%E8%AE%B2%E4%B9%89%E7%AC%94%E8%AE%B0.md"]],["v-f33d5ffc","/blog/old/language/fe/%E7%96%AF%E7%8B%82%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E8%AE%B2%E4%B9%89%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","前端"],g:["HTML"],e:`<p>Ajax 即“Asynchronous Javascript And XML”（异步 JavaScript 和 XML），<br>
是指一种创建交互式、快速动态网页应用的网页开发技术，<br>
无需重新加载整个网页的情况下，<br>
能够更新部分网页的技术。</p>
<p>XMLHttpRequest是Ajax的核心，JavaScript是Ajax技术的黏合剂</p>
<p>整个Ajax应用的工作过程：<br>
1.JavaScript脚本使用XMLHttpRequest对象向服务器发送请求。<br>
发送请求时，既可以发送GET请求，也可以发送POST请求。<br>
2.JavaScript脚本使用XMLHttpRequest对象解析服务器响应数据。<br>
3.JavaScript脚本通过DOM动态更新HTML页面。也可以为服务器响应数据增加CSS样式表，<br>
在当前网页的某个部分加以显示。</p>`,r:{minutes:1.31,words:393},y:"a",t:"疯狂前端开发讲义笔记"},["/blog/old/language/fe/疯狂前端开发讲义笔记.html","/blog/old/language/fe/疯狂前端开发讲义笔记.md",":md"]],["v-6e13ebe8","/blog/old/language/java/JSP_Servlet%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","Java"],g:["Java"],e:`<h1> 1.web.xml：</h1>
<ul>
<li>配置JSP</li>
<li>配置和管理Servlet</li>
<li>配置和管理Listener</li>
<li>配置和管理Filter</li>
<li>配置标签库</li>
<li>配置JSP属性</li>
<li>配置和管理JASS授权认证</li>
<li>配置和管理资源引用</li>
<li>Web应用的首页<br>
<!--配置Web应用的首页--><br>
<br>
metadata-complete:该属性接受true和false两个属性值。为true时，该web应用不会加载注解配置的web组件（如Servlet,Filter,Listener等）</li>
</ul>`,r:{minutes:8.14,words:2442},y:"a",t:"JSP/Servlet及相关技术详解"},["/blog/old/language/java/JSP_Servlet笔记.html","/blog/old/language/java/JSP_Servlet笔记.md",":md"]],["v-0f87f09a","/blog/old/language/java/JUC.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","Java"],g:["Java"],e:`<h1> 1. 概念</h1>
<ul>
<li>JUC: java.utl.concrrent</li>
<li>进程和线程</li>
<li>wait和sleep</li>
<li>并发和并行</li>
<li>管程
<ul>
<li>Monitor监视器，也称锁，是一种同步机制，保证同一时间，只有一个线程访问被保护数据或代码</li>
<li>JVM同步资源的进入和退出，是用管程对象实现的</li>
</ul>
</li>
<li>用户线程和守护线程：
<ul>
<li>自定义线程，</li>
<li>后台的线程，比如垃圾回收</li>
<li>主线程结束，自定义线程仍在，如果没有用户线程，只有守护线程，JVM结束</li>
</ul>
</li>
</ul>`,r:{minutes:6.08,words:1825},y:"a",t:"JUC"},[":md"]],["v-3f21900f","/blog/old/language/java/%E5%9F%BA%E7%A1%80.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","Java"],g:["Java"],e:`<h1> 数据类型</h1>
<ul>
<li>
<p>基本数据类型</p>
<ul>
<li>数值型
<ul>
<li>整数类型
<ul>
<li>byte 字节 = 8bit 位</li>
<li>short     2字节16位</li>
<li>int    4字节32位    包装器类有-128——127的常量池   <code>是Java的默认整数类型</code></li>
<li>long    8字节64位</li>
</ul>
</li>
<li>浮点类型
<ul>
<li>float 4字节</li>
<li>double 8字节 <code>是Java默认的浮点数据类型</code></li>
</ul>
</li>
<li>字符型 char 2字节</li>
<li>布尔型 boolean 1字节</li>
</ul>
</li>
</ul>
</li>
<li>
<p>引用数据类型</p>
<ul>
<li>类</li>
<li>接口</li>
<li>数组</li>
</ul>
</li>
</ul>`,r:{minutes:2.02,words:607},y:"a",t:"基础"},["/blog/old/language/java/基础.html","/blog/old/language/java/基础.md",":md"]],["v-36970167","/blog/old/language/java/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%E3%80%8Ajava%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C%E3%80%8B.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","Java"],g:["Java"],e:`<h1> 第一章 计算机基础</h1>
<p>​	计算机组成原理<br>
​	计算机引论<br>
​	计算机网络<br>
​	信息安全</p>
<h1> 第二章 面向对象</h1>
<p>​	抽象、封装、继承、多态</p>
<pre><code>使用静态内部类的好处：
     * 1.作用域不会扩散到包外
     * 2.可以通过“外部类.内部类”的方式直接访问
     * 3.内部类可以访问外部类中的所有静态属性和方法
访问控制级别要从严处理
序列化：
	1.Java原生 效率低
	2.Hessian
	3.json序列化
	。。。其他序列化工具 

方法：
	方法体中要对传入的参数保持理性的不信任。
		方法的第一步骤并不是功能实现，而应该是参数预处理：
			1.入参保护：判断参数是否超过服务处理能力
			2.参数校验：视具体情况而定
POJO（简单的Java对象），通常是只包含getter、setter、toString方法的简单类
		DO\\BO\\DTO\\VO\\AO
	POJO作为数据载体，通常用于数据传输，不应该包含任何业务逻辑。
泛型定义时，约定俗成的符号：
	E 代表 Element，用于集合中的元素
	T 代表 the Type of object，表示某个类
	K 代表 Key，V 代表 Value，用于键值对元素。
9种基本数据类型：
	boolean byte char short int long float double  
		表示生活中的真假、字符、整数和小数
	refvar
		面向对象世界中的引用变量，也叫引用句柄
		引用 4B     引用指向的对象 最小12B
对象的存储空间的分配的单位是8个字节

包装类

String StringBuilder StringBuffer
</code></pre>`,r:{minutes:3.27,words:980},y:"a",t:"《Java开发手册》学习笔记"},["/blog/old/language/java/学习笔记《java开发手册》.html","/blog/old/language/java/学习笔记《java开发手册》.md",":md"]],["v-86a4c8da","/blog/old/language/java/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%E3%80%8A%E7%96%AF%E7%8B%82Java%E8%AE%B2%E4%B9%89%E3%80%8B.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","Java"],g:["Java"],e:`<p>一、java语言概述<br>
Java先编译后解释<br>
JVM细节：指令集，寄存器，类文件的格式，栈，垃圾回收堆，存储区</p>
<p>二、理解面向对象<br>
继承<br>
封装<br>
多态<br>
任何简单或复杂的算法都可以由顺序结构、选择结构和循环结构这三种基本的结构组合生成<br>
UML的使用<br>
在Java语言中，除8个基本数据值之外，一切都是对象，而对象就是面向对象程序设计的中心</p>
<p>三、数据类型和运算符<br>
直接量<br>
算术运算符<br>
复制运算符<br>
比较运算符<br>
逻辑运算符<br>
位运算符<br>
类型相关运算符</p>
<p>四、流程控制与数组<br>
数组：<br>
int[] a=new int[n];<br>
int[] a={};<br>
a[i];<br>
a.length;<br>
foreach循环(遍历数组和集合更加简洁)：<br>
for(type variableName:array|collection){<br>
//variableName自动迭代访问每个元素<br>
}</p>`,r:{minutes:2.04,words:613},y:"a",t:"《疯狂Java讲义》学习笔记"},["/blog/old/language/java/学习笔记《疯狂Java讲义》.html","/blog/old/language/java/学习笔记《疯狂Java讲义》.md",":md"]],["v-88b1b032","/blog/old/language/java/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%E3%80%8A%E7%A0%81%E5%87%BA%E9%AB%98%E6%95%88%EF%BC%9AJava%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C%E3%80%8B.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","Java"],g:["Java"],e:`<h1> 一、计算机基础</h1>
<h1> 二、面向对象</h1>
<h1> 三、代码风格</h1>
<h1> 四、走进JVM</h1>
<h1> 五、异常与日志</h1>
<h1> 六、数据机构与集合</h1>
<h1> 七、并发与多线程</h1>
<h1> 八、单元测试</h1>
<h1> 九、代码规约</h1>
`,r:{minutes:.27,words:80},y:"a",t:"《码出高效：Java开发手册》学习笔记"},["/blog/old/language/java/学习笔记《码出高效：Java开发手册》.html","/blog/old/language/java/学习笔记《码出高效：Java开发手册》.md",":md"]],["v-ab8fb5bc","/blog/old/language/java/%E6%8A%BD%E8%B1%A1%E7%B1%BB%E5%92%8C%E6%8E%A5%E5%8F%A3.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","Java"],g:["Java"],e:`<blockquote>
<blockquote>
<p>通过抽象类和接口，实现面向对象、多态、代码解耦</p>
</blockquote>
</blockquote>
<ol>
<li>
<p>抽象类</p>
<p>抽象：从具体的事物抽出、概括出他们共同的方面、本质属性与关系等，而将个别的、非本质的方面、属性与关系舍弃，这种思维过程，成为抽象。简单来说，就是取共性化抽象。</p>
<p>一个类，使用abstract修饰</p>
<p>特点：</p>
<pre><code> - 包含抽象方法的类必须被声明为抽象类，抽象类可以不包含抽象方法
 - 抽象类不能被实例化
 - 可以包含具体的属性和方法
 - 继承抽象类或实现接口的类，若未实现所有方法，则须声明为抽象类
</code></pre>
</li>
<li>
<p>接口</p>
<p>接口不是类，类描述对象的属性和方法，接口则包含类要实现的方法。</p>
<p>接口用来指定标准</p>
<ul>
<li>在Java中，接口类型可以用来声明一个变量，他们可以成为一个空指针，或是被绑定在一个以此接口实现的对象。</li>
</ul>
<p>接口特性：</p>
<ul>
<li>方法被隐式指定为<code>public abstract</code></li>
<li>变量被隐式指定为<code>public static final</code></li>
<li>接口中的方法不能在接口中实现</li>
</ul>
</li>
<li>
<p>总结</p>
<ol>
<li>
<p>抽象类是对一组具有相同属性和方法的逻辑上有关系的事物的一种抽象，而接口则是对一组具有相同属性和方法的逻辑上不相关的事物的一种抽象。</p>
</li>
<li>
<p>工厂模式，实现类的创建与使用的分离</p>
</li>
<li>
<p>实例，Datax-web中Json的构建：</p>
<p>​	构建Json:<br>
​			处理读，多数据源<br>
​			处理写，多数据源<br>
​	抽象插件类   插件接口，定义插件的标准<br>
​			读抽象类<br>
​			写抽象类<br>
​	工厂类，实例化需要的插件</p>
</li>
</ol>
</li>
</ol>`,r:{minutes:1.57,words:471},y:"a",t:"抽象类和接口"},["/blog/old/language/java/抽象类和接口.html","/blog/old/language/java/抽象类和接口.md",":md"]],["v-7ad12457","/blog/old/language/java/%E9%9B%86%E5%90%88.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","Java"],g:["Java"],e:`<h1> 集合框架图</h1>
<figure><figcaption>Snipaste_2022-05-13_11-31-20</figcaption></figure>
<h1> List</h1>
<figure><figcaption>Snipaste_2022-05-16_11-34-16</figcaption></figure>
<figure><figcaption>Snipaste_2022-05-13_11-48-42</figcaption></figure>
<h1> Set</h1>
<figure><figcaption>Snipaste_2022-05-16_12-14-58</figcaption></figure>`,r:{minutes:.49,words:147},y:"a",t:"集合"},["/blog/old/language/java/集合.html","/blog/old/language/java/集合.md",":md"]],["v-08abb1af","/blog/old/language/python/note.html",{d:1577869375e3,l:"2020年1月1日",c:["编程语言","Python"],g:["Python"],e:`<p>WSGI 工具箱<br>
模板引 Jinja2</p>
<p>web框架：<br>
Django<br>
Flask<br>
Werkzeug</p>
`,r:{minutes:.12,words:35},y:"a",t:"Python学习笔记"},[":md"]],["v-02544884","/blog/old/database/nosql/mongodb/mongodb.html",{d:172684892e4,c:["数据库","NoSql","MongoDB"],g:["MongoDB"],e:`<h1> 1、简介</h1>
<h2> 1.1、NoSQL简介</h2>
<blockquote>
<p>NoSQL，指的是非关系型的数据库。NoSQL有时也称作Not Only SQL的缩写，是对不同于传统的关系型数据库的数据库管理系统的统称。</p>
<p>NoSQL用于超大规模数据的存储。（例如谷歌或Facebook每天为他们的用户收集万亿比特的数据）。这些类型的数据存储不需要固定的模式，无需多余操作就可以横向扩展。</p>
</blockquote>
<p><code>NoSQL 数据库分类</code></p>
<table>
<thead>
<tr>
<th>类型</th>
<th>部分代表</th>
<th>特点</th>
</tr>
</thead>
<tbody>
<tr>
<td>列存储</td>
<td>Hbase、Cassandra、Hypertable</td>
<td>顾名思义，是按列存储数据的。最大的特点是方便存储结构化和半结构化数据，方便做数据压缩，对针对某一列或者某几列的查询有非常大的IO优势。</td>
</tr>
<tr>
<td>文档存储</td>
<td>MongoDB、CouchDB</td>
<td>文档存储一般用类似json的格式存储，存储的内容是文档型的。这样也就有有机会对某些字段建立索引，实现关系数据库的某些功能。</td>
</tr>
<tr>
<td>key-value存储</td>
<td>Tokyo Cabinet / Tyrant、Berkeley DB、MemcacheDBRedis</td>
<td>可以通过key快速查询到其value。一般来说，存储不管value的格式，照单全收。（Redis包含了其他功能）</td>
</tr>
<tr>
<td>图存储</td>
<td>Neo4J、FlockDB</td>
<td>图形关系的最佳存储。使用传统关系数据库来解决的话性能低下，而且设计使用不方便。</td>
</tr>
<tr>
<td>对象存储</td>
<td>db4o、Versant</td>
<td>通过类似面向对象语言的语法操作数据库，通过对象的方式存取数据。</td>
</tr>
<tr>
<td>xml数据库</td>
<td>Berkeley DB XML、BaseX</td>
<td>高效的存储XML数据，并支持XML的内部查询语法，比如XQuery,Xpath。</td>
</tr>
</tbody>
</table>`,r:{minutes:3.54,words:1063},y:"a",t:"MongoDB使用指南"},[":md"]],["v-b7c7acc0","/blog/old/fe/framework/vue/Vue2.5%E5%BC%80%E5%8F%91%E5%8E%BB%E5%93%AA%E5%84%BF%E7%BD%91App%E4%BB%8E%E9%9B%B6%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%E5%88%B0%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html",{d:1577869375e3,l:"2020年1月1日",c:["前端框架","vue"],g:["vue","项目总结"],e:`<blockquote>
<p>大纲</p>
</blockquote>
<p>​	基础内容，<br>
​		基础语法，MVVM模式，组件化<br>
​		生命周期，动画特效<br>
​	实战项目，	<br>
​		环境搭建，使用git，数据模拟，本地开发<br>
​		联调，真机测试，上线<br>
​	辅助：<br>
​		Axios,Vue Router,Vuex,异步组件,Stylus,递归组件,插件,公用组件<br>
​	课程安排：<br>
​		1.课程介绍<br>
​		2.Vue初探<br>
​		3-5.基础知识精讲<br>
​		6-9.Vue项目实战<br>
​		10.项目测试上线流程及后续学习指南<br>
​	准备：	<br>
​		.js<br>
​		ES6<br>
​		webpack<br>
​		npm<br>
​	课程收获：<br>
​		彻底入门Vue的使用<br>
​		理解整个Vue项目的开发流程<br>
​		移动端页面布局技巧<br>
​		上手中型Vue项目的开发<br>
​		规范的代码编写</p>`,r:{minutes:9.57,words:2871},y:"a",t:"《Vue2.5开发去哪儿网App 从零基础入门到实战项目》学习笔记"},["/blog/old/fe/framework/vue/Vue2.5开发去哪儿网App从零基础入门到实战项目学习笔记.html","/blog/old/fe/framework/vue/Vue2.5开发去哪儿网App从零基础入门到实战项目学习笔记.md",":md"]],["v-4d675cd4","/blog/old/fe/skill/websocket/%E5%9F%BA%E7%A1%80%E6%80%BB%E7%BB%93.html",{d:1577869375e3,l:"2020年1月1日",c:["前端技术","websocket"],g:["websocket"],e:`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.websocket是什么：
	websocket 基于TCP的一种新的网络协议，全双工  允许服务器主动向客户端发送消息

	
	具体原理是什么：
		浏览器发送websocket连线请求，服务器回应。只需一次握手，就可建立一条快速通道，进行数据传输
	


2.原生websocket的使用
	1.引入依赖
		&lt;dependency&gt;
		    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
		    &lt;artifactId&gt;spring-boot-starter-websocket&lt;/artifactId&gt;
		&lt;/dependency&gt;
	2.配置类
		springboot使用配置类开启终端，前端可以借此连接服务器
	3.编写websocketServer的具体实现类
		该类处理使用websocket时的连接关闭和消息处理
	4.前端调用
		通过controller调用websocketServer的具体实现类的方法
		前端可以使用WebSocket的API
3.sockjs + stomp的使用
	比原生的好用
	1.引入依赖
		&lt;dependency&gt;
		    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
		    &lt;artifactId&gt;spring-boot-starter-websocket&lt;/artifactId&gt;
		&lt;/dependency&gt;
		还要引入sockjs.min.js和stomp.min.js
	2.配置类
		开启sockjs的终端
		配置消息代理，一个是服务端向客户端发送消息的代理，
				一个是客户端向服务端发送消息的代理
	3.控制器类实现业务
		@MessageMapping处理客户端给服务端发送的消息
		@SendTo 指定服务端向客户端发送消息
	4.前端调用
		实现四个方法即可
			1.连接，订阅消息
			2.断开连接
			3.发送消息
			4.显示消息

	
	
	

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.2,words:360},y:"a",t:"websocket笔记"},["/blog/old/fe/skill/websocket/基础总结.html","/blog/old/fe/skill/websocket/基础总结.md",":md"]],["v-3706649a","/404.html",{y:"p",t:""},[]],["v-42ef21ea","/blog/algorithm/base/",{y:"p",t:"Base"},[]],["v-01af5e14","/blog/algorithm/",{y:"p",t:"Algorithm"},[]],["v-145ac574","/blog/",{y:"p",t:"Blog"},[]],["v-3607025c","/blog/old/",{y:"p",t:"Old"},[]],["v-ec27c24a","/blog/old/beframework/elk/",{y:"p",t:"Elk"},[]],["v-4910ef8c","/blog/old/beframework/mybatis/",{y:"p",t:"Mybatis"},[]],["v-747d1eb2","/blog/old/beframework/mybatisplus/",{y:"p",t:"Mybatisplus"},[]],["v-0265bfe1","/blog/old/beframework/rabbitmq/",{y:"p",t:"Rabbitmq"},[]],["v-1883faf2","/blog/old/beframework/spring/",{y:"p",t:"Spring"},[]],["v-1b67f680","/blog/old/beframework/springboot/",{y:"p",t:"Springboot"},[]],["v-58bf2fb7","/blog/old/beframework/springcloud/",{y:"p",t:"Springcloud"},[]],["v-3264841c","/blog/old/beframework/springmvc/",{y:"p",t:"Springmvc"},[]],["v-4d2542b5","/blog/old/beframework/swagger/",{y:"p",t:"Swagger"},[]],["v-2289dd5a","/blog/old/beskill/activiti/",{y:"p",t:"Activiti"},[]],["v-d4424206","/blog/old/beskill/android/",{y:"p",t:"Android"},[]],["v-d973dcc4","/blog/old/beskill/bash/",{y:"p",t:"Bash"},[]],["v-5ad92f12","/blog/old/beskill/docker/",{y:"p",t:"Docker"},[]],["v-2f7a6abe","/blog/old/beskill/maven/",{y:"p",t:"Maven"},[]],["v-d6ebcfaa","/blog/old/beskill/yaml/",{y:"p",t:"Yaml"},[]],["v-ce71e5f6","/blog/old/database/mysql/",{y:"p",t:"Mysql"},[]],["v-461dbf8e","/blog/old/database/oracle/",{y:"p",t:"Oracle"},[]],["v-bfa2f968","/blog/old/database/redis/",{y:"p",t:"Redis"},[]],["v-39ad1b74","/blog/old/fe/",{y:"p",t:"Fe"},[]],["v-b82b2f16","/blog/old/language/fe/",{y:"p",t:"Fe"},[]],["v-5329c232","/blog/old/language/java/",{y:"p",t:"Java"},[]],["v-d3f8a510","/blog/old/language/python/",{y:"p",t:"Python"},[]],["v-846fe2d2","/blog/old/database/nosql/mongodb/",{y:"p",t:"Mongodb"},[]],["v-cc220acc","/blog/old/database/nosql/",{y:"p",t:"Nosql"},[]],["v-464b554e","/blog/old/fe/framework/vue/",{y:"p",t:"Vue"},[]],["v-6b69a98c","/blog/old/fe/skill/websocket/",{y:"p",t:"Websocket"},[]],["v-5bc93818","/category/",{y:"p",t:"分类",I:0},[]],["v-744d024e","/tag/",{y:"p",t:"标签",I:0},[]],["v-e52c881c","/article/",{y:"p",t:"文章",I:0},[]],["v-154dc4c4","/star/",{y:"p",t:"收藏",I:0},[]],["v-01560935","/timeline/",{y:"p",t:"时间轴",I:0},[]],["v-06be9332","/category/%E7%AE%97%E6%B3%95/",{y:"p",t:"算法 分类",I:0},["/category/算法/"]],["v-2687e471","/tag/%E7%AE%97%E6%B3%95/",{y:"p",t:"标签: 算法",I:0},["/tag/算法/"]],["v-7a2dbc66","/category/%E6%8A%80%E5%B7%A7/",{y:"p",t:"技巧 分类",I:0},["/category/技巧/"]],["v-b7d62b20","/tag/%E6%8A%80%E5%B7%A7/",{y:"p",t:"标签: 技巧",I:0},["/tag/技巧/"]],["v-4c00fee6","/category/%E5%90%8E%E7%AB%AF%E6%A1%86%E6%9E%B6/",{y:"p",t:"后端框架 分类",I:0},["/category/后端框架/"]],["v-b312914e","/tag/elk/",{y:"p",t:"标签: elk",I:0},[]],["v-65eef823","/category/elk/",{y:"p",t:"elk 分类",I:0},[]],["v-2cce94e0","/tag/elasticsearch/",{y:"p",t:"标签: elasticsearch",I:0},[]],["v-49f5e4d4","/category/mybatis/",{y:"p",t:"Mybatis 分类",I:0},[]],["v-757f190a","/tag/mybatis/",{y:"p",t:"标签: Mybatis",I:0},[]],["v-24cf7443","/category/mybatis-plus/",{y:"p",t:"MyBatis-Plus 分类",I:0},[]],["v-41e71c66","/tag/mybatis-plus/",{y:"p",t:"标签: MyBatis-Plus",I:0},[]],["v-1e1f7399","/category/rabbitmq/",{y:"p",t:"RabbitMQ 分类",I:0},[]],["v-63bcc623","/tag/rabbitmq/",{y:"p",t:"标签: RabbitMQ",I:0},[]],["v-08073caa","/category/spring/",{y:"p",t:"Spring 分类",I:0},[]],["v-7d0ba9b4","/tag/spring/",{y:"p",t:"标签: Spring",I:0},[]],["v-0667aa78","/category/springboot/",{y:"p",t:"SpringBoot 分类",I:0},[]],["v-59fa8282","/tag/springboot/",{y:"p",t:"标签: SpringBoot",I:0},[]],["v-6fcf7e02","/category/springcloud/",{y:"p",t:"SpringCloud 分类",I:0},[]],["v-323f2b96","/tag/springcloud/",{y:"p",t:"标签: SpringCloud",I:0},[]],["v-424a813a","/category/springmvc/",{y:"p",t:"SpringMVC 分类",I:0},[]],["v-97aefb08","/tag/%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/",{y:"p",t:"标签: 项目总结",I:0},["/tag/项目总结/"]],["v-4e0a37fd","/category/swagger/",{y:"p",t:"swagger 分类",I:0},[]],["v-9f510020","/tag/springmvc/",{y:"p",t:"标签: SpringMVC",I:0},[]],["v-51acfcdb","/category/%E5%90%8E%E7%AB%AF%E6%8A%80%E6%9C%AF/",{y:"p",t:"后端技术 分类",I:0},["/category/后端技术/"]],["v-79936c33","/tag/swagger/",{y:"p",t:"标签: swagger",I:0},[]],["v-4baa6010","/category/activiti/",{y:"p",t:"activiti 分类",I:0},[]],["v-1fc82282","/tag/activiti/",{y:"p",t:"标签: activiti",I:0},[]],["v-29da37b8","/category/android/",{y:"p",t:"android 分类",I:0},[]],["v-2303312e","/tag/%E5%B7%A5%E4%BD%9C%E6%B5%81/",{y:"p",t:"标签: 工作流",I:0},["/tag/工作流/"]],["v-57c0eac3","/category/bash/",{y:"p",t:"Bash 分类",I:0},[]],["v-55636bee","/tag/android/",{y:"p",t:"标签: android",I:0},[]],["v-27fb5a12","/category/docker/",{y:"p",t:"docker 分类",I:0},[]],["v-2831124d","/tag/bash/",{y:"p",t:"标签: Bash",I:0},[]],["v-99b9d3c8","/category/maven/",{y:"p",t:"maven 分类",I:0},[]],["v-6106c001","/tag/docker/",{y:"p",t:"标签: docker",I:0},[]],["v-5904f150","/category/yaml/",{y:"p",t:"yaml 分类",I:0},[]],["v-1e90405c","/tag/maven/",{y:"p",t:"标签: maven",I:0},[]],["v-5e0b61bd","/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",{y:"p",t:"数据库 分类",I:0},["/category/数据库/"]],["v-297518da","/tag/yaml/",{y:"p",t:"标签: yaml",I:0},[]],["v-9717cc36","/category/mysql/",{y:"p",t:"Mysql 分类",I:0},[]],["v-25365ef3","/tag/%E6%95%B0%E6%8D%AE%E5%BA%93/",{y:"p",t:"标签: 数据库",I:0},["/tag/数据库/"]],["v-36e5af59","/category/oracle/",{y:"p",t:"Oracle 分类",I:0},[]],["v-1bee38ca","/tag/mysql/",{y:"p",t:"标签: Mysql",I:0},[]],["v-8848dfa8","/category/redis/",{y:"p",t:"Redis 分类",I:0},[]],["v-a82bc73a","/tag/oracle/",{y:"p",t:"标签: Oracle",I:0},[]],["v-3df94dfd","/category/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/",{y:"p",t:"编程语言 分类",I:0},["/category/编程语言/"]],["v-0d1f4c3c","/tag/redis/",{y:"p",t:"标签: Redis",I:0},[]],["v-e9c7e408","/category/%E5%89%8D%E7%AB%AF/",{y:"p",t:"前端 分类",I:0},["/category/前端/"]],["v-b3142c4c","/tag/css/",{y:"p",t:"标签: CSS",I:0},[]],["v-5831b135","/category/java/",{y:"p",t:"Java 分类",I:0},[]],["v-3b951558","/tag/javascript/",{y:"p",t:"标签: JavaScript",I:0},[]],["v-78cbe7bb","/category/python/",{y:"p",t:"Python 分类",I:0},[]],["v-288e2c56","/tag/html/",{y:"p",t:"标签: HTML",I:0},[]],["v-94c7f10c","/category/nosql/",{y:"p",t:"NoSql 分类",I:0},[]],["v-28a1d8bf","/tag/java/",{y:"p",t:"标签: Java",I:0},[]],["v-4dc3ee15","/category/mongodb/",{y:"p",t:"MongoDB 分类",I:0},[]],["v-245f5676","/tag/python/",{y:"p",t:"标签: Python",I:0},[]],["v-06ebc23c","/category/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/",{y:"p",t:"前端框架 分类",I:0},["/category/前端框架/"]],["v-794d224b","/tag/mongodb/",{y:"p",t:"标签: MongoDB",I:0},[]],["v-65f6d381","/category/vue/",{y:"p",t:"vue 分类",I:0},[]],["v-b302da92","/tag/vue/",{y:"p",t:"标签: vue",I:0},[]],["v-74379b30","/category/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/",{y:"p",t:"前端技术 分类",I:0},["/category/前端技术/"]],["v-921953d4","/tag/websocket/",{y:"p",t:"标签: websocket",I:0},[]],["v-48e65760","/category/websocket/",{y:"p",t:"websocket 分类",I:0},[]]];var Vo=B({name:"Vuepress",setup(){const e=bm();return()=>o(e.value)}}),p4=()=>d4.reduce((e,[t,n,s,a])=>(e.push({name:t,path:n,component:Vo,meta:s},{path:n.endsWith("/")?n+"index.html":n.substring(0,n.length-5),redirect:n},...a.map(i=>({path:i===":md"?n.substring(0,n.length-5)+".md":i,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:Vo}]),v4=jm,m4=()=>{const e=E0({history:v4(pl("/")),routes:p4(),scrollBehavior:(t,n,s)=>s||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{var s;(t.path!==n.path||n===xt)&&([Kt.value]=await Promise.all([Lt.resolvePageData(t.name),(s=Jc[t.name])==null?void 0:s.__asyncLoader()]))}),e},g4=e=>{e.component("ClientOnly",Da),e.component("Content",gl)},f4=(e,t,n)=>{const s=A(()=>Lt.resolveLayouts(n)),a=no(()=>t.currentRoute.value.path),i=no(()=>Lt.resolveRouteLocale(Ln.value.locales,a.value)),l=A(()=>Lt.resolveSiteLocaleData(Ln.value,i.value)),r=A(()=>Lt.resolvePageFrontmatter(Kt.value)),u=A(()=>Lt.resolvePageHeadTitle(Kt.value,l.value)),c=A(()=>Lt.resolvePageHead(u.value,r.value,l.value)),d=A(()=>Lt.resolvePageLang(Kt.value)),p=A(()=>Lt.resolvePageLayout(Kt.value,s.value));return e.provide(vm,s),e.provide(Kc,r),e.provide(fm,u),e.provide(Wc,c),e.provide(Qc,d),e.provide(Xc,p),e.provide(ml,i),e.provide(Zc,l),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>r.value},$head:{get:()=>c.value},$headTitle:{get:()=>u.value},$lang:{get:()=>d.value},$page:{get:()=>Kt.value},$routeLocale:{get:()=>i.value},$site:{get:()=>Ln.value},$siteLocale:{get:()=>l.value},$withBase:{get:()=>Te}}),{layouts:s,pageData:Kt,pageFrontmatter:r,pageHead:c,pageHeadTitle:u,pageLang:d,pageLayout:p,routeLocale:i,siteData:Ln,siteLocaleData:l}},b4=()=>{const e=gm(),t=vl(),n=F([]),s=()=>{e.value.forEach(i=>{const l=h4(i);l&&n.value.push(l)})},a=()=>{document.documentElement.lang=t.value,n.value.forEach(i=>{i.parentNode===document.head&&document.head.removeChild(i)}),n.value.splice(0,n.value.length),e.value.forEach(i=>{const l=k4(i);l!==null&&(document.head.appendChild(l),n.value.push(l))})};bt(hm,a),pe(()=>{s(),a(),se(()=>e.value,a)})},h4=([e,t,n=""])=>{const s=Object.entries(t).map(([r,u])=>ce(u)?`[${r}=${JSON.stringify(u)}]`:u===!0?`[${r}]`:"").join(""),a=`head > ${e}${s}`;return Array.from(document.querySelectorAll(a)).find(r=>r.innerText===n)||null},k4=([e,t,n])=>{if(!ce(e))return null;const s=document.createElement(e);return Ms(t)&&Object.entries(t).forEach(([a,i])=>{ce(i)?s.setAttribute(a,i):i===!0&&s.setAttribute(a,"")}),ce(n)&&s.appendChild(document.createTextNode(n)),s},y4=nm,_4=async()=>{var n;const e=y4({name:"VuepressApp",setup(){var s;b4();for(const a of oa)(s=a.setup)==null||s.call(a);return()=>[o(uu),...oa.flatMap(({rootComponents:a=[]})=>a.map(i=>o(i)))]}}),t=m4();g4(e),f4(e,t,oa);for(const s of oa)await((n=s.enhance)==null?void 0:n.call(s,{app:e,router:t,siteData:Ln}));return e.use(t),{app:e,router:t}};_4().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{S4 as $,Gi as A,ss as B,ln as C,_n as D,Ds as E,He as F,I4 as G,D4 as H,xr as I,Be as J,M4 as K,j4 as L,bt as M,sn as N,ni as O,xu as P,Mg as Q,y1 as R,dc as S,es as T,T4 as U,R4 as V,en as W,B4 as X,C4 as Y,w4 as Z,m as _,O4 as a,x4 as b,L4 as c,_4 as createVueApp,Oc as d,Dc as e,Le as f,B as g,F4 as h,F as i,A as j,pe as k,o as l,se as m,rl as n,Tc as o,P4 as p,Ji as q,et as r,Ce as s,fe as t,V4 as u,Xr as v,_v as w,Lc as x,gn as y,A4 as z};
