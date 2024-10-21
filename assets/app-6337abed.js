var dd=Object.defineProperty;var vd=(n,t,s)=>t in n?dd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var Na=(n,t,s)=>(vd(n,typeof t!="symbol"?t+"":t,s),s);const md="modulepreload",gd=function(n){return"/"+n},Gi={},v=function(t,s,e){if(!s||s.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(s.map(l=>{if(l=gd(l),l in Gi)return;Gi[l]=!0;const i=l.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(!!e)for(let u=a.length-1;u>=0;u--){const d=a[u];if(d.href===l&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${o}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":md,i||(c.as="script",c.crossOrigin=""),c.href=l,document.head.appendChild(c),i)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};function ql(n,t){const s=Object.create(null),e=n.split(",");for(let a=0;a<e.length;a++)s[e[a]]=!0;return t?a=>!!s[a.toLowerCase()]:a=>!!s[a]}const Sn={},Ds=[],kt=()=>{},bd=()=>!1,kd=/^on[^a-z]/,Ce=n=>kd.test(n),zl=n=>n.startsWith("onUpdate:"),On=Object.assign,Hl=(n,t)=>{const s=n.indexOf(t);s>-1&&n.splice(s,1)},fd=Object.prototype.hasOwnProperty,bn=(n,t)=>fd.call(n,t),K=Array.isArray,Os=n=>Le(n)==="[object Map]",Ys=n=>Le(n)==="[object Set]",Wi=n=>Le(n)==="[object Date]",sn=n=>typeof n=="function",pn=n=>typeof n=="string",he=n=>typeof n=="symbol",wn=n=>n!==null&&typeof n=="object",jr=n=>wn(n)&&sn(n.then)&&sn(n.catch),Fr=Object.prototype.toString,Le=n=>Fr.call(n),hd=n=>Le(n).slice(8,-1),Nr=n=>Le(n)==="[object Object]",Ul=n=>pn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ue=ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=n=>{const t=Object.create(null);return s=>t[s]||(t[s]=n(s))},yd=/-(\w)/g,ct=Ia(n=>n.replace(yd,(t,s)=>s?s.toUpperCase():"")),_d=/\B([A-Z])/g,ys=Ia(n=>n.replace(_d,"-$1").toLowerCase()),De=Ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),qa=Ia(n=>n?`on${De(n)}`:""),ye=(n,t)=>!Object.is(n,t),ca=(n,t)=>{for(let s=0;s<n.length;s++)n[s](t)},ua=(n,t,s)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:s})},da=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Ed=n=>{const t=pn(n)?Number(n):NaN;return isNaN(t)?n:t};let Ki;const vl=()=>Ki||(Ki=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jl(n){if(K(n)){const t={};for(let s=0;s<n.length;s++){const e=n[s],a=pn(e)?Sd(e):Jl(e);if(a)for(const l in a)t[l]=a[l]}return t}else{if(pn(n))return n;if(wn(n))return n}}const Ad=/;(?![^(]*\))/g,wd=/:([^]+)/,Id=/\/\*[^]*?\*\//g;function Sd(n){const t={};return n.replace(Id,"").split(Ad).forEach(s=>{if(s){const e=s.split(wd);e.length>1&&(t[e[0].trim()]=e[1].trim())}}),t}function Gl(n){let t="";if(pn(n))t=n;else if(K(n))for(let s=0;s<n.length;s++){const e=Gl(n[s]);e&&(t+=e+" ")}else if(wn(n))for(const s in n)n[s]&&(t+=s+" ");return t.trim()}const Pd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Td=ql(Pd);function qr(n){return!!n||n===""}function xd(n,t){if(n.length!==t.length)return!1;let s=!0;for(let e=0;s&&e<n.length;e++)s=ks(n[e],t[e]);return s}function ks(n,t){if(n===t)return!0;let s=Wi(n),e=Wi(t);if(s||e)return s&&e?n.getTime()===t.getTime():!1;if(s=he(n),e=he(t),s||e)return n===t;if(s=K(n),e=K(t),s||e)return s&&e?xd(n,t):!1;if(s=wn(n),e=wn(t),s||e){if(!s||!e)return!1;const a=Object.keys(n).length,l=Object.keys(t).length;if(a!==l)return!1;for(const i in n){const o=n.hasOwnProperty(i),p=t.hasOwnProperty(i);if(o&&!p||!o&&p||!ks(n[i],t[i]))return!1}}return String(n)===String(t)}function Wl(n,t){return n.findIndex(s=>ks(s,t))}const A3=n=>pn(n)?n:n==null?"":K(n)||wn(n)&&(n.toString===Fr||!sn(n.toString))?JSON.stringify(n,zr,2):String(n),zr=(n,t)=>t&&t.__v_isRef?zr(n,t.value):Os(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[e,a])=>(s[`${e} =>`]=a,s),{})}:Ys(t)?{[`Set(${t.size})`]:[...t.values()]}:wn(t)&&!K(t)&&!Nr(t)?String(t):t;let Zn;class Cd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Zn,!t&&Zn&&(this.index=(Zn.scopes||(Zn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const s=Zn;try{return Zn=this,t()}finally{Zn=s}}}on(){Zn=this}off(){Zn=this.parent}stop(t){if(this._active){let s,e;for(s=0,e=this.effects.length;s<e;s++)this.effects[s].stop();for(s=0,e=this.cleanups.length;s<e;s++)this.cleanups[s]();if(this.scopes)for(s=0,e=this.scopes.length;s<e;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ld(n,t=Zn){t&&t.active&&t.effects.push(n)}function Hr(){return Zn}function Dd(n){Zn&&Zn.cleanups.push(n)}const Kl=n=>{const t=new Set(n);return t.w=0,t.n=0,t},Ur=n=>(n.w&Zt)>0,Jr=n=>(n.n&Zt)>0,Od=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=Zt},Rd=n=>{const{deps:t}=n;if(t.length){let s=0;for(let e=0;e<t.length;e++){const a=t[e];Ur(a)&&!Jr(a)?a.delete(n):t[s++]=a,a.w&=~Zt,a.n&=~Zt}t.length=s}},va=new WeakMap;let ce=0,Zt=1;const ml=30;let gt;const ms=Symbol(""),gl=Symbol("");class Ql{constructor(t,s=null,e){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Ld(this,e)}run(){if(!this.active)return this.fn();let t=gt,s=Yt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=gt,gt=this,Yt=!0,Zt=1<<++ce,ce<=ml?Od(this):Qi(this),this.fn()}finally{ce<=ml&&Rd(this),Zt=1<<--ce,gt=this.parent,Yt=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gt===this?this.deferStop=!0:this.active&&(Qi(this),this.onStop&&this.onStop(),this.active=!1)}}function Qi(n){const{deps:t}=n;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(n);t.length=0}}let Yt=!0;const Gr=[];function Xs(){Gr.push(Yt),Yt=!1}function Zs(){const n=Gr.pop();Yt=n===void 0?!0:n}function Yn(n,t,s){if(Yt&&gt){let e=va.get(n);e||va.set(n,e=new Map);let a=e.get(s);a||e.set(s,a=Kl()),Wr(a)}}function Wr(n,t){let s=!1;ce<=ml?Jr(n)||(n.n|=Zt,s=!Ur(n)):s=!n.has(gt),s&&(n.add(gt),gt.deps.push(n))}function Bt(n,t,s,e,a,l){const i=va.get(n);if(!i)return;let o=[];if(t==="clear")o=[...i.values()];else if(s==="length"&&K(n)){const p=Number(e);i.forEach((c,u)=>{(u==="length"||u>=p)&&o.push(c)})}else switch(s!==void 0&&o.push(i.get(s)),t){case"add":K(n)?Ul(s)&&o.push(i.get("length")):(o.push(i.get(ms)),Os(n)&&o.push(i.get(gl)));break;case"delete":K(n)||(o.push(i.get(ms)),Os(n)&&o.push(i.get(gl)));break;case"set":Os(n)&&o.push(i.get(ms));break}if(o.length===1)o[0]&&bl(o[0]);else{const p=[];for(const c of o)c&&p.push(...c);bl(Kl(p))}}function bl(n,t){const s=K(n)?n:[...n];for(const e of s)e.computed&&Yi(e);for(const e of s)e.computed||Yi(e)}function Yi(n,t){(n!==gt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function Bd(n,t){var s;return(s=va.get(n))==null?void 0:s.get(t)}const Md=ql("__proto__,__v_isRef,__isVue"),Kr=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(he)),$d=Yl(),Vd=Yl(!1,!0),jd=Yl(!0),Xi=Fd();function Fd(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...s){const e=dn(this);for(let l=0,i=this.length;l<i;l++)Yn(e,"get",l+"");const a=e[t](...s);return a===-1||a===!1?e[t](...s.map(dn)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...s){Xs();const e=dn(this)[t].apply(this,s);return Zs(),e}}),n}function Nd(n){const t=dn(this);return Yn(t,"has",n),t.hasOwnProperty(n)}function Yl(n=!1,t=!1){return function(e,a,l){if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&l===(n?t?ev:nc:t?Zr:Xr).get(e))return e;const i=K(e);if(!n){if(i&&bn(Xi,a))return Reflect.get(Xi,a,l);if(a==="hasOwnProperty")return Nd}const o=Reflect.get(e,a,l);return(he(a)?Kr.has(a):Md(a))||(n||Yn(e,"get",a),t)?o:Mn(o)?i&&Ul(a)?o:o.value:wn(o)?n?$t(o):Oe(o):o}}const qd=Qr(),zd=Qr(!0);function Qr(n=!1){return function(s,e,a,l){let i=s[e];if(Ns(i)&&Mn(i)&&!Mn(a))return!1;if(!n&&(!ma(a)&&!Ns(a)&&(i=dn(i),a=dn(a)),!K(s)&&Mn(i)&&!Mn(a)))return i.value=a,!0;const o=K(s)&&Ul(e)?Number(e)<s.length:bn(s,e),p=Reflect.set(s,e,a,l);return s===dn(l)&&(o?ye(a,i)&&Bt(s,"set",e,a):Bt(s,"add",e,a)),p}}function Hd(n,t){const s=bn(n,t);n[t];const e=Reflect.deleteProperty(n,t);return e&&s&&Bt(n,"delete",t,void 0),e}function Ud(n,t){const s=Reflect.has(n,t);return(!he(t)||!Kr.has(t))&&Yn(n,"has",t),s}function Jd(n){return Yn(n,"iterate",K(n)?"length":ms),Reflect.ownKeys(n)}const Yr={get:$d,set:qd,deleteProperty:Hd,has:Ud,ownKeys:Jd},Gd={get:jd,set(n,t){return!0},deleteProperty(n,t){return!0}},Wd=On({},Yr,{get:Vd,set:zd}),Xl=n=>n,Sa=n=>Reflect.getPrototypeOf(n);function Ge(n,t,s=!1,e=!1){n=n.__v_raw;const a=dn(n),l=dn(t);s||(t!==l&&Yn(a,"get",t),Yn(a,"get",l));const{has:i}=Sa(a),o=e?Xl:s?ti:_e;if(i.call(a,t))return o(n.get(t));if(i.call(a,l))return o(n.get(l));n!==a&&n.get(t)}function We(n,t=!1){const s=this.__v_raw,e=dn(s),a=dn(n);return t||(n!==a&&Yn(e,"has",n),Yn(e,"has",a)),n===a?s.has(n):s.has(n)||s.has(a)}function Ke(n,t=!1){return n=n.__v_raw,!t&&Yn(dn(n),"iterate",ms),Reflect.get(n,"size",n)}function Zi(n){n=dn(n);const t=dn(this);return Sa(t).has.call(t,n)||(t.add(n),Bt(t,"add",n,n)),this}function no(n,t){t=dn(t);const s=dn(this),{has:e,get:a}=Sa(s);let l=e.call(s,n);l||(n=dn(n),l=e.call(s,n));const i=a.call(s,n);return s.set(n,t),l?ye(t,i)&&Bt(s,"set",n,t):Bt(s,"add",n,t),this}function to(n){const t=dn(this),{has:s,get:e}=Sa(t);let a=s.call(t,n);a||(n=dn(n),a=s.call(t,n)),e&&e.call(t,n);const l=t.delete(n);return a&&Bt(t,"delete",n,void 0),l}function so(){const n=dn(this),t=n.size!==0,s=n.clear();return t&&Bt(n,"clear",void 0,void 0),s}function Qe(n,t){return function(e,a){const l=this,i=l.__v_raw,o=dn(i),p=t?Xl:n?ti:_e;return!n&&Yn(o,"iterate",ms),i.forEach((c,u)=>e.call(a,p(c),p(u),l))}}function Ye(n,t,s){return function(...e){const a=this.__v_raw,l=dn(a),i=Os(l),o=n==="entries"||n===Symbol.iterator&&i,p=n==="keys"&&i,c=a[n](...e),u=s?Xl:t?ti:_e;return!t&&Yn(l,"iterate",p?gl:ms),{next(){const{value:d,done:m}=c.next();return m?{value:d,done:m}:{value:o?[u(d[0]),u(d[1])]:u(d),done:m}},[Symbol.iterator](){return this}}}}function qt(n){return function(...t){return n==="delete"?!1:this}}function Kd(){const n={get(l){return Ge(this,l)},get size(){return Ke(this)},has:We,add:Zi,set:no,delete:to,clear:so,forEach:Qe(!1,!1)},t={get(l){return Ge(this,l,!1,!0)},get size(){return Ke(this)},has:We,add:Zi,set:no,delete:to,clear:so,forEach:Qe(!1,!0)},s={get(l){return Ge(this,l,!0)},get size(){return Ke(this,!0)},has(l){return We.call(this,l,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:Qe(!0,!1)},e={get(l){return Ge(this,l,!0,!0)},get size(){return Ke(this,!0)},has(l){return We.call(this,l,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:Qe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{n[l]=Ye(l,!1,!1),s[l]=Ye(l,!0,!1),t[l]=Ye(l,!1,!0),e[l]=Ye(l,!0,!0)}),[n,s,t,e]}const[Qd,Yd,Xd,Zd]=Kd();function Zl(n,t){const s=t?n?Zd:Xd:n?Yd:Qd;return(e,a,l)=>a==="__v_isReactive"?!n:a==="__v_isReadonly"?n:a==="__v_raw"?e:Reflect.get(bn(s,a)&&a in e?s:e,a,l)}const nv={get:Zl(!1,!1)},tv={get:Zl(!1,!0)},sv={get:Zl(!0,!1)},Xr=new WeakMap,Zr=new WeakMap,nc=new WeakMap,ev=new WeakMap;function av(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lv(n){return n.__v_skip||!Object.isExtensible(n)?0:av(hd(n))}function Oe(n){return Ns(n)?n:ni(n,!1,Yr,nv,Xr)}function tc(n){return ni(n,!1,Wd,tv,Zr)}function $t(n){return ni(n,!0,Gd,sv,nc)}function ni(n,t,s,e,a){if(!wn(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const l=a.get(n);if(l)return l;const i=lv(n);if(i===0)return n;const o=new Proxy(n,i===2?e:s);return a.set(n,o),o}function Rs(n){return Ns(n)?Rs(n.__v_raw):!!(n&&n.__v_isReactive)}function Ns(n){return!!(n&&n.__v_isReadonly)}function ma(n){return!!(n&&n.__v_isShallow)}function sc(n){return Rs(n)||Ns(n)}function dn(n){const t=n&&n.__v_raw;return t?dn(t):n}function ec(n){return ua(n,"__v_skip",!0),n}const _e=n=>wn(n)?Oe(n):n,ti=n=>wn(n)?$t(n):n;function si(n){Yt&&gt&&(n=dn(n),Wr(n.dep||(n.dep=Kl())))}function ei(n,t){n=dn(n);const s=n.dep;s&&bl(s)}function Mn(n){return!!(n&&n.__v_isRef===!0)}function F(n){return ac(n,!1)}function Cn(n){return ac(n,!0)}function ac(n,t){return Mn(n)?n:new iv(n,t)}class iv{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:dn(t),this._value=s?t:_e(t)}get value(){return si(this),this._value}set value(t){const s=this.__v_isShallow||ma(t)||Ns(t);t=s?t:dn(t),ye(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:_e(t),ei(this))}}function gs(n){return Mn(n)?n.value:n}const ov={get:(n,t,s)=>gs(Reflect.get(n,t,s)),set:(n,t,s,e)=>{const a=n[t];return Mn(a)&&!Mn(s)?(a.value=s,!0):Reflect.set(n,t,s,e)}};function lc(n){return Rs(n)?n:new Proxy(n,ov)}class rv{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:e}=t(()=>si(this),()=>ei(this));this._get=s,this._set=e}get value(){return this._get()}set value(t){this._set(t)}}function cv(n){return new rv(n)}class pv{constructor(t,s,e){this._object=t,this._key=s,this._defaultValue=e,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Bd(dn(this._object),this._key)}}class uv{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function ne(n,t,s){return Mn(n)?n:sn(n)?new uv(n):wn(n)&&arguments.length>1?dv(n,t,s):F(n)}function dv(n,t,s){const e=n[t];return Mn(e)?e:new pv(n,t,s)}class vv{constructor(t,s,e,a){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ql(t,()=>{this._dirty||(this._dirty=!0,ei(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=e}get value(){const t=dn(this);return si(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function mv(n,t,s=!1){let e,a;const l=sn(n);return l?(e=n,a=kt):(e=n.get,a=n.set),new vv(e,a,l||!a,s)}function Xt(n,t,s,e){let a;try{a=e?n(...e):n()}catch(l){Re(l,t,s)}return a}function rt(n,t,s,e){if(sn(n)){const l=Xt(n,t,s,e);return l&&jr(l)&&l.catch(i=>{Re(i,t,s)}),l}const a=[];for(let l=0;l<n.length;l++)a.push(rt(n[l],t,s,e));return a}function Re(n,t,s,e=!0){const a=t?t.vnode:null;if(t){let l=t.parent;const i=t.proxy,o=s;for(;l;){const c=l.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,i,o)===!1)return}l=l.parent}const p=t.appContext.config.errorHandler;if(p){Xt(p,null,10,[n,i,o]);return}}gv(n,s,a,e)}function gv(n,t,s,e=!0){console.error(n)}let Ee=!1,kl=!1;const Nn=[];let Pt=0;const Bs=[];let Ot=null,ps=0;const ic=Promise.resolve();let ai=null;function as(n){const t=ai||ic;return n?t.then(this?n.bind(this):n):t}function bv(n){let t=Pt+1,s=Nn.length;for(;t<s;){const e=t+s>>>1;Ae(Nn[e])<n?t=e+1:s=e}return t}function Pa(n){(!Nn.length||!Nn.includes(n,Ee&&n.allowRecurse?Pt+1:Pt))&&(n.id==null?Nn.push(n):Nn.splice(bv(n.id),0,n),oc())}function oc(){!Ee&&!kl&&(kl=!0,ai=ic.then(rc))}function kv(n){const t=Nn.indexOf(n);t>Pt&&Nn.splice(t,1)}function fv(n){K(n)?Bs.push(...n):(!Ot||!Ot.includes(n,n.allowRecurse?ps+1:ps))&&Bs.push(n),oc()}function eo(n,t=Ee?Pt+1:0){for(;t<Nn.length;t++){const s=Nn[t];s&&s.pre&&(Nn.splice(t,1),t--,s())}}function ga(n){if(Bs.length){const t=[...new Set(Bs)];if(Bs.length=0,Ot){Ot.push(...t);return}for(Ot=t,Ot.sort((s,e)=>Ae(s)-Ae(e)),ps=0;ps<Ot.length;ps++)Ot[ps]();Ot=null,ps=0}}const Ae=n=>n.id==null?1/0:n.id,hv=(n,t)=>{const s=Ae(n)-Ae(t);if(s===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return s};function rc(n){kl=!1,Ee=!0,Nn.sort(hv);const t=kt;try{for(Pt=0;Pt<Nn.length;Pt++){const s=Nn[Pt];s&&s.active!==!1&&Xt(s,null,14)}}finally{Pt=0,Nn.length=0,ga(),Ee=!1,ai=null,(Nn.length||Bs.length)&&rc()}}function yv(n,t,...s){if(n.isUnmounted)return;const e=n.vnode.props||Sn;let a=s;const l=t.startsWith("update:"),i=l&&t.slice(7);if(i&&i in e){const u=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:m}=e[u]||Sn;m&&(a=s.map(g=>pn(g)?g.trim():g)),d&&(a=s.map(da))}let o,p=e[o=qa(t)]||e[o=qa(ct(t))];!p&&l&&(p=e[o=qa(ys(t))]),p&&rt(p,n,6,a);const c=e[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,rt(c,n,6,a)}}function cc(n,t,s=!1){const e=t.emitsCache,a=e.get(n);if(a!==void 0)return a;const l=n.emits;let i={},o=!1;if(!sn(n)){const p=c=>{const u=cc(c,t,!0);u&&(o=!0,On(i,u))};!s&&t.mixins.length&&t.mixins.forEach(p),n.extends&&p(n.extends),n.mixins&&n.mixins.forEach(p)}return!l&&!o?(wn(n)&&e.set(n,null),null):(K(l)?l.forEach(p=>i[p]=null):On(i,l),wn(n)&&e.set(n,i),i)}function Ta(n,t){return!n||!Ce(t)?!1:(t=t.slice(2).replace(/Once$/,""),bn(n,t[0].toLowerCase()+t.slice(1))||bn(n,ys(t))||bn(n,t))}let Fn=null,xa=null;function ba(n){const t=Fn;return Fn=n,xa=n&&n.type.__scopeId||null,t}function w3(n){xa=n}function I3(){xa=null}function _v(n,t=Fn,s){if(!t||n._n)return n;const e=(...a)=>{e._d&&bo(-1);const l=ba(t);let i;try{i=n(...a)}finally{ba(l),e._d&&bo(1)}return i};return e._n=!0,e._c=!0,e._d=!0,e}function za(n){const{type:t,vnode:s,proxy:e,withProxy:a,props:l,propsOptions:[i],slots:o,attrs:p,emit:c,render:u,renderCache:d,data:m,setupState:g,ctx:f,inheritAttrs:w}=n;let I,k;const y=ba(n);try{if(s.shapeFlag&4){const D=a||e;I=mt(u.call(D,D,d,l,g,m,f)),k=p}else{const D=t;I=mt(D.length>1?D(l,{attrs:p,slots:o,emit:c}):D(l,null)),k=t.props?p:Ev(p)}}catch(D){me.length=0,Re(D,n,1),I=Ln(st)}let C=I;if(k&&w!==!1){const D=Object.keys(k),{shapeFlag:z}=C;D.length&&z&7&&(i&&D.some(zl)&&(k=Av(k,i)),C=ns(C,k))}return s.dirs&&(C=ns(C),C.dirs=C.dirs?C.dirs.concat(s.dirs):s.dirs),s.transition&&(C.transition=s.transition),I=C,ba(y),I}const Ev=n=>{let t;for(const s in n)(s==="class"||s==="style"||Ce(s))&&((t||(t={}))[s]=n[s]);return t},Av=(n,t)=>{const s={};for(const e in n)(!zl(e)||!(e.slice(9)in t))&&(s[e]=n[e]);return s};function wv(n,t,s){const{props:e,children:a,component:l}=n,{props:i,children:o,patchFlag:p}=t,c=l.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&p>=0){if(p&1024)return!0;if(p&16)return e?ao(e,i,c):!!i;if(p&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(i[m]!==e[m]&&!Ta(c,m))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:e===i?!1:e?i?ao(e,i,c):!0:!!i;return!1}function ao(n,t,s){const e=Object.keys(t);if(e.length!==Object.keys(n).length)return!0;for(let a=0;a<e.length;a++){const l=e[a];if(t[l]!==n[l]&&!Ta(s,l))return!0}return!1}function Iv({vnode:n,parent:t},s){for(;t&&t.subTree===n;)(n=t.vnode).el=s,t=t.parent}const Sv=n=>n.__isSuspense;function pc(n,t){t&&t.pendingBranch?K(n)?t.effects.push(...n):t.effects.push(n):fv(n)}function uc(n,t){return li(n,null,t)}const Xe={};function en(n,t,s){return li(n,t,s)}function li(n,t,{immediate:s,deep:e,flush:a,onTrack:l,onTrigger:i}=Sn){var o;const p=Hr()===((o=$n)==null?void 0:o.scope)?$n:null;let c,u=!1,d=!1;if(Mn(n)?(c=()=>n.value,u=ma(n)):Rs(n)?(c=()=>n,e=!0):K(n)?(d=!0,u=n.some(D=>Rs(D)||ma(D)),c=()=>n.map(D=>{if(Mn(D))return D.value;if(Rs(D))return vs(D);if(sn(D))return Xt(D,p,2)})):sn(n)?t?c=()=>Xt(n,p,2):c=()=>{if(!(p&&p.isUnmounted))return m&&m(),rt(n,p,3,[g])}:c=kt,t&&e){const D=c;c=()=>vs(D())}let m,g=D=>{m=y.onStop=()=>{Xt(D,p,4)}},f;if(Hs)if(g=kt,t?s&&rt(t,p,3,[c(),d?[]:void 0,g]):c(),a==="sync"){const D=hm();f=D.__watcherHandles||(D.__watcherHandles=[])}else return kt;let w=d?new Array(n.length).fill(Xe):Xe;const I=()=>{if(y.active)if(t){const D=y.run();(e||u||(d?D.some((z,O)=>ye(z,w[O])):ye(D,w)))&&(m&&m(),rt(t,p,3,[D,w===Xe?void 0:d&&w[0]===Xe?[]:w,g]),w=D)}else y.run()};I.allowRecurse=!!t;let k;a==="sync"?k=I:a==="post"?k=()=>Kn(I,p&&p.suspense):(I.pre=!0,p&&(I.id=p.uid),k=()=>Pa(I));const y=new Ql(c,k);t?s?I():w=y.run():a==="post"?Kn(y.run.bind(y),p&&p.suspense):y.run();const C=()=>{y.stop(),p&&p.scope&&Hl(p.scope.effects,y)};return f&&f.push(C),C}function Pv(n,t,s){const e=this.proxy,a=pn(n)?n.includes(".")?dc(e,n):()=>e[n]:n.bind(e,e);let l;sn(t)?l=t:(l=t.handler,s=t);const i=$n;zs(this);const o=li(a,l.bind(e),s);return i?zs(i):bs(),o}function dc(n,t){const s=t.split(".");return()=>{let e=n;for(let a=0;a<s.length&&e;a++)e=e[s[a]];return e}}function vs(n,t){if(!wn(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),Mn(n))vs(n.value,t);else if(K(n))for(let s=0;s<n.length;s++)vs(n[s],t);else if(Ys(n)||Os(n))n.forEach(s=>{vs(s,t)});else if(Nr(n))for(const s in n)vs(n[s],t);return n}function S3(n,t){const s=Fn;if(s===null)return n;const e=Da(s)||s.proxy,a=n.dirs||(n.dirs=[]);for(let l=0;l<t.length;l++){let[i,o,p,c=Sn]=t[l];i&&(sn(i)&&(i={mounted:i,updated:i}),i.deep&&vs(o),a.push({dir:i,instance:e,value:o,oldValue:void 0,arg:p,modifiers:c}))}return n}function St(n,t,s,e){const a=n.dirs,l=t&&t.dirs;for(let i=0;i<a.length;i++){const o=a[i];l&&(o.oldValue=l[i].value);let p=o.dir[e];p&&(Xs(),rt(p,s,8,[n.el,o,n,t]),Zs())}}function vc(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vn(()=>{n.isMounted=!0}),oi(()=>{n.isUnmounting=!0}),n}const lt=[Function,Array],mc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},Tv={name:"BaseTransition",props:mc,setup(n,{slots:t}){const s=ls(),e=vc();let a;return()=>{const l=t.default&&ii(t.default(),!0);if(!l||!l.length)return;let i=l[0];if(l.length>1){for(const w of l)if(w.type!==st){i=w;break}}const o=dn(n),{mode:p}=o;if(e.isLeaving)return Ha(i);const c=lo(i);if(!c)return Ha(i);const u=we(c,o,e,s);Ie(c,u);const d=s.subTree,m=d&&lo(d);let g=!1;const{getTransitionKey:f}=c.type;if(f){const w=f();a===void 0?a=w:w!==a&&(a=w,g=!0)}if(m&&m.type!==st&&(!us(c,m)||g)){const w=we(m,o,e,s);if(Ie(m,w),p==="out-in")return e.isLeaving=!0,w.afterLeave=()=>{e.isLeaving=!1,s.update.active!==!1&&s.update()},Ha(i);p==="in-out"&&c.type!==st&&(w.delayLeave=(I,k,y)=>{const C=gc(e,m);C[String(m.key)]=m,I._leaveCb=()=>{k(),I._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return i}}},xv=Tv;function gc(n,t){const{leavingVNodes:s}=n;let e=s.get(t.type);return e||(e=Object.create(null),s.set(t.type,e)),e}function we(n,t,s,e){const{appear:a,mode:l,persisted:i=!1,onBeforeEnter:o,onEnter:p,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:m,onAfterLeave:g,onLeaveCancelled:f,onBeforeAppear:w,onAppear:I,onAfterAppear:k,onAppearCancelled:y}=t,C=String(n.key),D=gc(s,n),z=(P,H)=>{P&&rt(P,e,9,H)},O=(P,H)=>{const U=H[1];z(P,H),K(P)?P.every(an=>an.length<=1)&&U():P.length<=1&&U()},$={mode:l,persisted:i,beforeEnter(P){let H=o;if(!s.isMounted)if(a)H=w||o;else return;P._leaveCb&&P._leaveCb(!0);const U=D[C];U&&us(n,U)&&U.el._leaveCb&&U.el._leaveCb(),z(H,[P])},enter(P){let H=p,U=c,an=u;if(!s.isMounted)if(a)H=I||p,U=k||c,an=y||u;else return;let J=!1;const Z=P._enterCb=G=>{J||(J=!0,G?z(an,[P]):z(U,[P]),$.delayedLeave&&$.delayedLeave(),P._enterCb=void 0)};H?O(H,[P,Z]):Z()},leave(P,H){const U=String(n.key);if(P._enterCb&&P._enterCb(!0),s.isUnmounting)return H();z(d,[P]);let an=!1;const J=P._leaveCb=Z=>{an||(an=!0,H(),Z?z(f,[P]):z(g,[P]),P._leaveCb=void 0,D[U]===n&&delete D[U])};D[U]=n,m?O(m,[P,J]):J()},clone(P){return we(P,t,s,e)}};return $}function Ha(n){if(Be(n))return n=ns(n),n.children=null,n}function lo(n){return Be(n)?n.children?n.children[0]:void 0:n}function Ie(n,t){n.shapeFlag&6&&n.component?Ie(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function ii(n,t=!1,s){let e=[],a=0;for(let l=0;l<n.length;l++){let i=n[l];const o=s==null?i.key:String(s)+String(i.key!=null?i.key:l);i.type===Un?(i.patchFlag&128&&a++,e=e.concat(ii(i.children,t,o))):(t||i.type!==st)&&e.push(o!=null?ns(i,{key:o}):i)}if(a>1)for(let l=0;l<e.length;l++)e[l].patchFlag=-2;return e}function B(n,t){return sn(n)?(()=>On({name:n.name},t,{setup:n}))():n}const Ms=n=>!!n.type.__asyncLoader;function _(n){sn(n)&&(n={loader:n});const{loader:t,loadingComponent:s,errorComponent:e,delay:a=200,timeout:l,suspensible:i=!0,onError:o}=n;let p=null,c,u=0;const d=()=>(u++,p=null,m()),m=()=>{let g;return p||(g=p=t().catch(f=>{if(f=f instanceof Error?f:new Error(String(f)),o)return new Promise((w,I)=>{o(f,()=>w(d()),()=>I(f),u+1)});throw f}).then(f=>g!==p&&p?p:(f&&(f.__esModule||f[Symbol.toStringTag]==="Module")&&(f=f.default),c=f,f)))};return B({name:"AsyncComponentWrapper",__asyncLoader:m,get __asyncResolved(){return c},setup(){const g=$n;if(c)return()=>Ua(c,g);const f=y=>{p=null,Re(y,g,13,!e)};if(i&&g.suspense||Hs)return m().then(y=>()=>Ua(y,g)).catch(y=>(f(y),()=>e?Ln(e,{error:y}):null));const w=F(!1),I=F(),k=F(!!a);return a&&setTimeout(()=>{k.value=!1},a),l!=null&&setTimeout(()=>{if(!w.value&&!I.value){const y=new Error(`Async component timed out after ${l}ms.`);f(y),I.value=y}},l),m().then(()=>{w.value=!0,g.parent&&Be(g.parent.vnode)&&Pa(g.parent.update)}).catch(y=>{f(y),I.value=y}),()=>{if(w.value&&c)return Ua(c,g);if(I.value&&e)return Ln(e,{error:I.value});if(s&&!k.value)return Ln(s)}}})}function Ua(n,t){const{ref:s,props:e,children:a,ce:l}=t.vnode,i=Ln(n,e,a);return i.ref=s,i.ce=l,delete t.vnode.ce,i}const Be=n=>n.type.__isKeepAlive;function Cv(n,t){bc(n,"a",t)}function Lv(n,t){bc(n,"da",t)}function bc(n,t,s=$n){const e=n.__wdc||(n.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return n()});if(Ca(t,e,s),s){let a=s.parent;for(;a&&a.parent;)Be(a.parent.vnode)&&Dv(e,t,s,a),a=a.parent}}function Dv(n,t,s,e){const a=Ca(t,n,e,!0);_s(()=>{Hl(e[t],a)},s)}function Ca(n,t,s=$n,e=!1){if(s){const a=s[n]||(s[n]=[]),l=t.__weh||(t.__weh=(...i)=>{if(s.isUnmounted)return;Xs(),zs(s);const o=rt(t,s,n,i);return bs(),Zs(),o});return e?a.unshift(l):a.push(l),l}}const Vt=n=>(t,s=$n)=>(!Hs||n==="sp")&&Ca(n,(...e)=>t(...e),s),Ov=Vt("bm"),vn=Vt("m"),Rv=Vt("bu"),kc=Vt("u"),oi=Vt("bum"),_s=Vt("um"),Bv=Vt("sp"),Mv=Vt("rtg"),$v=Vt("rtc");function Vv(n,t=$n){Ca("ec",n,t)}const fc="components";function tt(n,t){return Fv(fc,n,!0,t)||n}const jv=Symbol.for("v-ndc");function Fv(n,t,s=!0,e=!1){const a=Fn||$n;if(a){const l=a.type;if(n===fc){const o=bm(l,!1);if(o&&(o===t||o===ct(t)||o===De(ct(t))))return l}const i=io(a[n]||l[n],t)||io(a.appContext[n],t);return!i&&e?l:i}}function io(n,t){return n&&(n[t]||n[ct(t)]||n[De(ct(t))])}function P3(n,t,s,e){let a;const l=s&&s[e];if(K(n)||pn(n)){a=new Array(n.length);for(let i=0,o=n.length;i<o;i++)a[i]=t(n[i],i,void 0,l&&l[i])}else if(typeof n=="number"){a=new Array(n);for(let i=0;i<n;i++)a[i]=t(i+1,i,void 0,l&&l[i])}else if(wn(n))if(n[Symbol.iterator])a=Array.from(n,(i,o)=>t(i,o,void 0,l&&l[o]));else{const i=Object.keys(n);a=new Array(i.length);for(let o=0,p=i.length;o<p;o++){const c=i[o];a[o]=t(n[c],c,o,l&&l[o])}}else a=[];return s&&(s[e]=a),a}function T3(n,t,s={},e,a){if(Fn.isCE||Fn.parent&&Ms(Fn.parent)&&Fn.parent.isCE)return t!=="default"&&(s.name=t),Ln("slot",s,e&&e());let l=n[t];l&&l._c&&(l._d=!1),Tc();const i=l&&hc(l(s)),o=Cc(Un,{key:s.key||i&&i.key||`_${t}`},i||(e?e():[]),i&&n._===1?64:-2);return!a&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),l&&l._c&&(l._d=!0),o}function hc(n){return n.some(t=>ya(t)?!(t.type===st||t.type===Un&&!hc(t.children)):!0)?n:null}const fl=n=>n?Rc(n)?Da(n)||n.proxy:fl(n.parent):null,de=On(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fl(n.parent),$root:n=>fl(n.root),$emit:n=>n.emit,$options:n=>ri(n),$forceUpdate:n=>n.f||(n.f=()=>Pa(n.update)),$nextTick:n=>n.n||(n.n=as.bind(n.proxy)),$watch:n=>Pv.bind(n)}),Ja=(n,t)=>n!==Sn&&!n.__isScriptSetup&&bn(n,t),Nv={get({_:n},t){const{ctx:s,setupState:e,data:a,props:l,accessCache:i,type:o,appContext:p}=n;let c;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return e[t];case 2:return a[t];case 4:return s[t];case 3:return l[t]}else{if(Ja(e,t))return i[t]=1,e[t];if(a!==Sn&&bn(a,t))return i[t]=2,a[t];if((c=n.propsOptions[0])&&bn(c,t))return i[t]=3,l[t];if(s!==Sn&&bn(s,t))return i[t]=4,s[t];hl&&(i[t]=0)}}const u=de[t];let d,m;if(u)return t==="$attrs"&&Yn(n,"get",t),u(n);if((d=o.__cssModules)&&(d=d[t]))return d;if(s!==Sn&&bn(s,t))return i[t]=4,s[t];if(m=p.config.globalProperties,bn(m,t))return m[t]},set({_:n},t,s){const{data:e,setupState:a,ctx:l}=n;return Ja(a,t)?(a[t]=s,!0):e!==Sn&&bn(e,t)?(e[t]=s,!0):bn(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(l[t]=s,!0)},has({_:{data:n,setupState:t,accessCache:s,ctx:e,appContext:a,propsOptions:l}},i){let o;return!!s[i]||n!==Sn&&bn(n,i)||Ja(t,i)||(o=l[0])&&bn(o,i)||bn(e,i)||bn(de,i)||bn(a.config.globalProperties,i)},defineProperty(n,t,s){return s.get!=null?n._.accessCache[t]=0:bn(s,"value")&&this.set(n,t,s.value,null),Reflect.defineProperty(n,t,s)}};function x3(n,t,s){const e=ls();if(s&&s.local){const a=F(n[t]);return en(()=>n[t],l=>a.value=l),en(a,l=>{l!==n[t]&&e.emit(`update:${t}`,l)}),a}else return{__v_isRef:!0,get value(){return n[t]},set value(a){e.emit(`update:${t}`,a)}}}function oo(n){return K(n)?n.reduce((t,s)=>(t[s]=null,t),{}):n}let hl=!0;function qv(n){const t=ri(n),s=n.proxy,e=n.ctx;hl=!1,t.beforeCreate&&ro(t.beforeCreate,n,"bc");const{data:a,computed:l,methods:i,watch:o,provide:p,inject:c,created:u,beforeMount:d,mounted:m,beforeUpdate:g,updated:f,activated:w,deactivated:I,beforeDestroy:k,beforeUnmount:y,destroyed:C,unmounted:D,render:z,renderTracked:O,renderTriggered:$,errorCaptured:P,serverPrefetch:H,expose:U,inheritAttrs:an,components:J,directives:Z,filters:G}=t;if(c&&zv(c,e,null),i)for(const hn in i){const tn=i[hn];sn(tn)&&(e[hn]=tn.bind(s))}if(a){const hn=a.call(s,s);wn(hn)&&(n.data=Oe(hn))}if(hl=!0,l)for(const hn in l){const tn=l[hn],ut=sn(tn)?tn.bind(s,s):sn(tn.get)?tn.get.bind(s,s):kt,wt=!sn(tn)&&sn(tn.set)?tn.set.bind(s):kt,Wn=A({get:ut,set:wt});Object.defineProperty(e,hn,{enumerable:!0,configurable:!0,get:()=>Wn.value,set:Dn=>Wn.value=Dn})}if(o)for(const hn in o)yc(o[hn],e,s,hn);if(p){const hn=sn(p)?p.call(s):p;Reflect.ownKeys(hn).forEach(tn=>{ft(tn,hn[tn])})}u&&ro(u,n,"c");function on(hn,tn){K(tn)?tn.forEach(ut=>hn(ut.bind(s))):tn&&hn(tn.bind(s))}if(on(Ov,d),on(vn,m),on(Rv,g),on(kc,f),on(Cv,w),on(Lv,I),on(Vv,P),on($v,O),on(Mv,$),on(oi,y),on(_s,D),on(Bv,H),K(U))if(U.length){const hn=n.exposed||(n.exposed={});U.forEach(tn=>{Object.defineProperty(hn,tn,{get:()=>s[tn],set:ut=>s[tn]=ut})})}else n.exposed||(n.exposed={});z&&n.render===kt&&(n.render=z),an!=null&&(n.inheritAttrs=an),J&&(n.components=J),Z&&(n.directives=Z)}function zv(n,t,s=kt){K(n)&&(n=yl(n));for(const e in n){const a=n[e];let l;wn(a)?"default"in a?l=kn(a.from||e,a.default,!0):l=kn(a.from||e):l=kn(a),Mn(l)?Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:()=>l.value,set:i=>l.value=i}):t[e]=l}}function ro(n,t,s){rt(K(n)?n.map(e=>e.bind(t.proxy)):n.bind(t.proxy),t,s)}function yc(n,t,s,e){const a=e.includes(".")?dc(s,e):()=>s[e];if(pn(n)){const l=t[n];sn(l)&&en(a,l)}else if(sn(n))en(a,n.bind(s));else if(wn(n))if(K(n))n.forEach(l=>yc(l,t,s,e));else{const l=sn(n.handler)?n.handler.bind(s):t[n.handler];sn(l)&&en(a,l,n)}}function ri(n){const t=n.type,{mixins:s,extends:e}=t,{mixins:a,optionsCache:l,config:{optionMergeStrategies:i}}=n.appContext,o=l.get(t);let p;return o?p=o:!a.length&&!s&&!e?p=t:(p={},a.length&&a.forEach(c=>ka(p,c,i,!0)),ka(p,t,i)),wn(t)&&l.set(t,p),p}function ka(n,t,s,e=!1){const{mixins:a,extends:l}=t;l&&ka(n,l,s,!0),a&&a.forEach(i=>ka(n,i,s,!0));for(const i in t)if(!(e&&i==="expose")){const o=Hv[i]||s&&s[i];n[i]=o?o(n[i],t[i]):t[i]}return n}const Hv={data:co,props:po,emits:po,methods:pe,computed:pe,beforeCreate:Hn,created:Hn,beforeMount:Hn,mounted:Hn,beforeUpdate:Hn,updated:Hn,beforeDestroy:Hn,beforeUnmount:Hn,destroyed:Hn,unmounted:Hn,activated:Hn,deactivated:Hn,errorCaptured:Hn,serverPrefetch:Hn,components:pe,directives:pe,watch:Jv,provide:co,inject:Uv};function co(n,t){return t?n?function(){return On(sn(n)?n.call(this,this):n,sn(t)?t.call(this,this):t)}:t:n}function Uv(n,t){return pe(yl(n),yl(t))}function yl(n){if(K(n)){const t={};for(let s=0;s<n.length;s++)t[n[s]]=n[s];return t}return n}function Hn(n,t){return n?[...new Set([].concat(n,t))]:t}function pe(n,t){return n?On(Object.create(null),n,t):t}function po(n,t){return n?K(n)&&K(t)?[...new Set([...n,...t])]:On(Object.create(null),oo(n),oo(t??{})):t}function Jv(n,t){if(!n)return t;if(!t)return n;const s=On(Object.create(null),n);for(const e in t)s[e]=Hn(n[e],t[e]);return s}function _c(){return{app:null,config:{isNativeTag:bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gv=0;function Wv(n,t){return function(e,a=null){sn(e)||(e=On({},e)),a!=null&&!wn(a)&&(a=null);const l=_c(),i=new Set;let o=!1;const p=l.app={_uid:Gv++,_component:e,_props:a,_container:null,_context:l,_instance:null,version:ym,get config(){return l.config},set config(c){},use(c,...u){return i.has(c)||(c&&sn(c.install)?(i.add(c),c.install(p,...u)):sn(c)&&(i.add(c),c(p,...u))),p},mixin(c){return l.mixins.includes(c)||l.mixins.push(c),p},component(c,u){return u?(l.components[c]=u,p):l.components[c]},directive(c,u){return u?(l.directives[c]=u,p):l.directives[c]},mount(c,u,d){if(!o){const m=Ln(e,a);return m.appContext=l,u&&t?t(m,c):n(m,c,d),o=!0,p._container=c,c.__vue_app__=p,Da(m.component)||m.component.proxy}},unmount(){o&&(n(null,p._container),delete p._container.__vue_app__)},provide(c,u){return l.provides[c]=u,p},runWithContext(c){fa=p;try{return c()}finally{fa=null}}};return p}}let fa=null;function ft(n,t){if($n){let s=$n.provides;const e=$n.parent&&$n.parent.provides;e===s&&(s=$n.provides=Object.create(e)),s[n]=t}}function kn(n,t,s=!1){const e=$n||Fn;if(e||fa){const a=e?e.parent==null?e.vnode.appContext&&e.vnode.appContext.provides:e.parent.provides:fa._context.provides;if(a&&n in a)return a[n];if(arguments.length>1)return s&&sn(t)?t.call(e&&e.proxy):t}}function Kv(n,t,s,e=!1){const a={},l={};ua(l,La,1),n.propsDefaults=Object.create(null),Ec(n,t,a,l);for(const i in n.propsOptions[0])i in a||(a[i]=void 0);s?n.props=e?a:tc(a):n.type.props?n.props=a:n.props=l,n.attrs=l}function Qv(n,t,s,e){const{props:a,attrs:l,vnode:{patchFlag:i}}=n,o=dn(a),[p]=n.propsOptions;let c=!1;if((e||i>0)&&!(i&16)){if(i&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(Ta(n.emitsOptions,m))continue;const g=t[m];if(p)if(bn(l,m))g!==l[m]&&(l[m]=g,c=!0);else{const f=ct(m);a[f]=_l(p,o,f,g,n,!1)}else g!==l[m]&&(l[m]=g,c=!0)}}}else{Ec(n,t,a,l)&&(c=!0);let u;for(const d in o)(!t||!bn(t,d)&&((u=ys(d))===d||!bn(t,u)))&&(p?s&&(s[d]!==void 0||s[u]!==void 0)&&(a[d]=_l(p,o,d,void 0,n,!0)):delete a[d]);if(l!==o)for(const d in l)(!t||!bn(t,d))&&(delete l[d],c=!0)}c&&Bt(n,"set","$attrs")}function Ec(n,t,s,e){const[a,l]=n.propsOptions;let i=!1,o;if(t)for(let p in t){if(ue(p))continue;const c=t[p];let u;a&&bn(a,u=ct(p))?!l||!l.includes(u)?s[u]=c:(o||(o={}))[u]=c:Ta(n.emitsOptions,p)||(!(p in e)||c!==e[p])&&(e[p]=c,i=!0)}if(l){const p=dn(s),c=o||Sn;for(let u=0;u<l.length;u++){const d=l[u];s[d]=_l(a,p,d,c[d],n,!bn(c,d))}}return i}function _l(n,t,s,e,a,l){const i=n[s];if(i!=null){const o=bn(i,"default");if(o&&e===void 0){const p=i.default;if(i.type!==Function&&!i.skipFactory&&sn(p)){const{propsDefaults:c}=a;s in c?e=c[s]:(zs(a),e=c[s]=p.call(null,t),bs())}else e=p}i[0]&&(l&&!o?e=!1:i[1]&&(e===""||e===ys(s))&&(e=!0))}return e}function Ac(n,t,s=!1){const e=t.propsCache,a=e.get(n);if(a)return a;const l=n.props,i={},o=[];let p=!1;if(!sn(n)){const u=d=>{p=!0;const[m,g]=Ac(d,t,!0);On(i,m),g&&o.push(...g)};!s&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!l&&!p)return wn(n)&&e.set(n,Ds),Ds;if(K(l))for(let u=0;u<l.length;u++){const d=ct(l[u]);uo(d)&&(i[d]=Sn)}else if(l)for(const u in l){const d=ct(u);if(uo(d)){const m=l[u],g=i[d]=K(m)||sn(m)?{type:m}:On({},m);if(g){const f=go(Boolean,g.type),w=go(String,g.type);g[0]=f>-1,g[1]=w<0||f<w,(f>-1||bn(g,"default"))&&o.push(d)}}}const c=[i,o];return wn(n)&&e.set(n,c),c}function uo(n){return n[0]!=="$"}function vo(n){const t=n&&n.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:n===null?"null":""}function mo(n,t){return vo(n)===vo(t)}function go(n,t){return K(t)?t.findIndex(s=>mo(s,n)):sn(t)&&mo(t,n)?0:-1}const wc=n=>n[0]==="_"||n==="$stable",ci=n=>K(n)?n.map(mt):[mt(n)],Yv=(n,t,s)=>{if(t._n)return t;const e=_v((...a)=>ci(t(...a)),s);return e._c=!1,e},Ic=(n,t,s)=>{const e=n._ctx;for(const a in n){if(wc(a))continue;const l=n[a];if(sn(l))t[a]=Yv(a,l,e);else if(l!=null){const i=ci(l);t[a]=()=>i}}},Sc=(n,t)=>{const s=ci(t);n.slots.default=()=>s},Xv=(n,t)=>{if(n.vnode.shapeFlag&32){const s=t._;s?(n.slots=dn(t),ua(t,"_",s)):Ic(t,n.slots={})}else n.slots={},t&&Sc(n,t);ua(n.slots,La,1)},Zv=(n,t,s)=>{const{vnode:e,slots:a}=n;let l=!0,i=Sn;if(e.shapeFlag&32){const o=t._;o?s&&o===1?l=!1:(On(a,t),!s&&o===1&&delete a._):(l=!t.$stable,Ic(t,a)),i=t}else t&&(Sc(n,t),i={default:1});if(l)for(const o in a)!wc(o)&&!(o in i)&&delete a[o]};function ha(n,t,s,e,a=!1){if(K(n)){n.forEach((m,g)=>ha(m,t&&(K(t)?t[g]:t),s,e,a));return}if(Ms(e)&&!a)return;const l=e.shapeFlag&4?Da(e.component)||e.component.proxy:e.el,i=a?null:l,{i:o,r:p}=n,c=t&&t.r,u=o.refs===Sn?o.refs={}:o.refs,d=o.setupState;if(c!=null&&c!==p&&(pn(c)?(u[c]=null,bn(d,c)&&(d[c]=null)):Mn(c)&&(c.value=null)),sn(p))Xt(p,o,12,[i,u]);else{const m=pn(p),g=Mn(p);if(m||g){const f=()=>{if(n.f){const w=m?bn(d,p)?d[p]:u[p]:p.value;a?K(w)&&Hl(w,l):K(w)?w.includes(l)||w.push(l):m?(u[p]=[l],bn(d,p)&&(d[p]=u[p])):(p.value=[l],n.k&&(u[n.k]=p.value))}else m?(u[p]=i,bn(d,p)&&(d[p]=i)):g&&(p.value=i,n.k&&(u[n.k]=i))};i?(f.id=-1,Kn(f,s)):f()}}}let zt=!1;const Ze=n=>/svg/.test(n.namespaceURI)&&n.tagName!=="foreignObject",na=n=>n.nodeType===8;function nm(n){const{mt:t,p:s,o:{patchProp:e,createText:a,nextSibling:l,parentNode:i,remove:o,insert:p,createComment:c}}=n,u=(k,y)=>{if(!y.hasChildNodes()){s(null,k,y),ga(),y._vnode=k;return}zt=!1,d(y.firstChild,k,null,null,null),ga(),y._vnode=k,zt&&console.error("Hydration completed but contains mismatches.")},d=(k,y,C,D,z,O=!1)=>{const $=na(k)&&k.data==="[",P=()=>w(k,y,C,D,z,$),{type:H,ref:U,shapeFlag:an,patchFlag:J}=y;let Z=k.nodeType;y.el=k,J===-2&&(O=!1,y.dynamicChildren=null);let G=null;switch(H){case qs:Z!==3?y.children===""?(p(y.el=a(""),i(k),k),G=k):G=P():(k.data!==y.children&&(zt=!0,k.data=y.children),G=l(k));break;case st:Z!==8||$?G=P():G=l(k);break;case ve:if($&&(k=l(k),Z=k.nodeType),Z===1||Z===3){G=k;const Tn=!y.children.length;for(let on=0;on<y.staticCount;on++)Tn&&(y.children+=G.nodeType===1?G.outerHTML:G.data),on===y.staticCount-1&&(y.anchor=G),G=l(G);return $?l(G):G}else P();break;case Un:$?G=f(k,y,C,D,z,O):G=P();break;default:if(an&1)Z!==1||y.type.toLowerCase()!==k.tagName.toLowerCase()?G=P():G=m(k,y,C,D,z,O);else if(an&6){y.slotScopeIds=z;const Tn=i(k);if(t(y,Tn,null,C,D,Ze(Tn),O),G=$?I(k):l(k),G&&na(G)&&G.data==="teleport end"&&(G=l(G)),Ms(y)){let on;$?(on=Ln(Un),on.anchor=G?G.previousSibling:Tn.lastChild):on=k.nodeType===3?Oc(""):Ln("div"),on.el=k,y.component.subTree=on}}else an&64?Z!==8?G=P():G=y.type.hydrate(k,y,C,D,z,O,n,g):an&128&&(G=y.type.hydrate(k,y,C,D,Ze(i(k)),z,O,n,d))}return U!=null&&ha(U,null,D,y),G},m=(k,y,C,D,z,O)=>{O=O||!!y.dynamicChildren;const{type:$,props:P,patchFlag:H,shapeFlag:U,dirs:an}=y,J=$==="input"&&an||$==="option";if(J||H!==-1){if(an&&St(y,null,C,"created"),P)if(J||!O||H&48)for(const G in P)(J&&G.endsWith("value")||Ce(G)&&!ue(G))&&e(k,G,null,P[G],!1,void 0,C);else P.onClick&&e(k,"onClick",null,P.onClick,!1,void 0,C);let Z;if((Z=P&&P.onVnodeBeforeMount)&&it(Z,C,y),an&&St(y,null,C,"beforeMount"),((Z=P&&P.onVnodeMounted)||an)&&pc(()=>{Z&&it(Z,C,y),an&&St(y,null,C,"mounted")},D),U&16&&!(P&&(P.innerHTML||P.textContent))){let G=g(k.firstChild,y,k,C,D,z,O);for(;G;){zt=!0;const Tn=G;G=G.nextSibling,o(Tn)}}else U&8&&k.textContent!==y.children&&(zt=!0,k.textContent=y.children)}return k.nextSibling},g=(k,y,C,D,z,O,$)=>{$=$||!!y.dynamicChildren;const P=y.children,H=P.length;for(let U=0;U<H;U++){const an=$?P[U]:P[U]=mt(P[U]);if(k)k=d(k,an,D,z,O,$);else{if(an.type===qs&&!an.children)continue;zt=!0,s(null,an,C,null,D,z,Ze(C),O)}}return k},f=(k,y,C,D,z,O)=>{const{slotScopeIds:$}=y;$&&(z=z?z.concat($):$);const P=i(k),H=g(l(k),y,P,C,D,z,O);return H&&na(H)&&H.data==="]"?l(y.anchor=H):(zt=!0,p(y.anchor=c("]"),P,H),H)},w=(k,y,C,D,z,O)=>{if(zt=!0,y.el=null,O){const H=I(k);for(;;){const U=l(k);if(U&&U!==H)o(U);else break}}const $=l(k),P=i(k);return o(k),s(null,y,P,$,C,D,Ze(P),z),$},I=k=>{let y=0;for(;k;)if(k=l(k),k&&na(k)&&(k.data==="["&&y++,k.data==="]")){if(y===0)return l(k);y--}return k};return[u,d]}const Kn=pc;function tm(n){return sm(n,nm)}function sm(n,t){const s=vl();s.__VUE__=!0;const{insert:e,remove:a,patchProp:l,createElement:i,createText:o,createComment:p,setText:c,setElementText:u,parentNode:d,nextSibling:m,setScopeId:g=kt,insertStaticContent:f}=n,w=(b,h,E,S=null,x=null,L=null,N=!1,M=null,j=!!h.dynamicChildren)=>{if(b===h)return;b&&!us(b,h)&&(S=T(b),Dn(b,x,L,!0),b=null),h.patchFlag===-2&&(j=!1,h.dynamicChildren=null);const{type:R,ref:Y,shapeFlag:W}=h;switch(R){case qs:I(b,h,E,S);break;case st:k(b,h,E,S);break;case ve:b==null&&y(h,E,S,N);break;case Un:J(b,h,E,S,x,L,N,M,j);break;default:W&1?z(b,h,E,S,x,L,N,M,j):W&6?Z(b,h,E,S,x,L,N,M,j):(W&64||W&128)&&R.process(b,h,E,S,x,L,N,M,j,V)}Y!=null&&x&&ha(Y,b&&b.ref,L,h||b,!h)},I=(b,h,E,S)=>{if(b==null)e(h.el=o(h.children),E,S);else{const x=h.el=b.el;h.children!==b.children&&c(x,h.children)}},k=(b,h,E,S)=>{b==null?e(h.el=p(h.children||""),E,S):h.el=b.el},y=(b,h,E,S)=>{[b.el,b.anchor]=f(b.children,h,E,S,b.el,b.anchor)},C=({el:b,anchor:h},E,S)=>{let x;for(;b&&b!==h;)x=m(b),e(b,E,S),b=x;e(h,E,S)},D=({el:b,anchor:h})=>{let E;for(;b&&b!==h;)E=m(b),a(b),b=E;a(h)},z=(b,h,E,S,x,L,N,M,j)=>{N=N||h.type==="svg",b==null?O(h,E,S,x,L,N,M,j):H(b,h,x,L,N,M,j)},O=(b,h,E,S,x,L,N,M)=>{let j,R;const{type:Y,props:W,shapeFlag:X,transition:nn,dirs:rn}=b;if(j=b.el=i(b.type,L,W&&W.is,W),X&8?u(j,b.children):X&16&&P(b.children,j,null,S,x,L&&Y!=="foreignObject",N,M),rn&&St(b,null,S,"created"),$(j,b,b.scopeId,N,S),W){for(const En in W)En!=="value"&&!ue(En)&&l(j,En,null,W[En],L,b.children,S,x,Rn);"value"in W&&l(j,"value",null,W.value),(R=W.onVnodeBeforeMount)&&it(R,S,b)}rn&&St(b,null,S,"beforeMount");const In=(!x||x&&!x.pendingBranch)&&nn&&!nn.persisted;In&&nn.beforeEnter(j),e(j,h,E),((R=W&&W.onVnodeMounted)||In||rn)&&Kn(()=>{R&&it(R,S,b),In&&nn.enter(j),rn&&St(b,null,S,"mounted")},x)},$=(b,h,E,S,x)=>{if(E&&g(b,E),S)for(let L=0;L<S.length;L++)g(b,S[L]);if(x){let L=x.subTree;if(h===L){const N=x.vnode;$(b,N,N.scopeId,N.slotScopeIds,x.parent)}}},P=(b,h,E,S,x,L,N,M,j=0)=>{for(let R=j;R<b.length;R++){const Y=b[R]=M?Wt(b[R]):mt(b[R]);w(null,Y,h,E,S,x,L,N,M)}},H=(b,h,E,S,x,L,N)=>{const M=h.el=b.el;let{patchFlag:j,dynamicChildren:R,dirs:Y}=h;j|=b.patchFlag&16;const W=b.props||Sn,X=h.props||Sn;let nn;E&&rs(E,!1),(nn=X.onVnodeBeforeUpdate)&&it(nn,E,h,b),Y&&St(h,b,E,"beforeUpdate"),E&&rs(E,!0);const rn=x&&h.type!=="foreignObject";if(R?U(b.dynamicChildren,R,M,E,S,rn,L):N||tn(b,h,M,null,E,S,rn,L,!1),j>0){if(j&16)an(M,h,W,X,E,S,x);else if(j&2&&W.class!==X.class&&l(M,"class",null,X.class,x),j&4&&l(M,"style",W.style,X.style,x),j&8){const In=h.dynamicProps;for(let En=0;En<In.length;En++){const Bn=In[En],dt=W[Bn],As=X[Bn];(As!==dt||Bn==="value")&&l(M,Bn,dt,As,x,b.children,E,S,Rn)}}j&1&&b.children!==h.children&&u(M,h.children)}else!N&&R==null&&an(M,h,W,X,E,S,x);((nn=X.onVnodeUpdated)||Y)&&Kn(()=>{nn&&it(nn,E,h,b),Y&&St(h,b,E,"updated")},S)},U=(b,h,E,S,x,L,N)=>{for(let M=0;M<h.length;M++){const j=b[M],R=h[M],Y=j.el&&(j.type===Un||!us(j,R)||j.shapeFlag&70)?d(j.el):E;w(j,R,Y,null,S,x,L,N,!0)}},an=(b,h,E,S,x,L,N)=>{if(E!==S){if(E!==Sn)for(const M in E)!ue(M)&&!(M in S)&&l(b,M,E[M],null,N,h.children,x,L,Rn);for(const M in S){if(ue(M))continue;const j=S[M],R=E[M];j!==R&&M!=="value"&&l(b,M,R,j,N,h.children,x,L,Rn)}"value"in S&&l(b,"value",E.value,S.value)}},J=(b,h,E,S,x,L,N,M,j)=>{const R=h.el=b?b.el:o(""),Y=h.anchor=b?b.anchor:o("");let{patchFlag:W,dynamicChildren:X,slotScopeIds:nn}=h;nn&&(M=M?M.concat(nn):nn),b==null?(e(R,E,S),e(Y,E,S),P(h.children,E,Y,x,L,N,M,j)):W>0&&W&64&&X&&b.dynamicChildren?(U(b.dynamicChildren,X,E,x,L,N,M),(h.key!=null||x&&h===x.subTree)&&Pc(b,h,!0)):tn(b,h,E,Y,x,L,N,M,j)},Z=(b,h,E,S,x,L,N,M,j)=>{h.slotScopeIds=M,b==null?h.shapeFlag&512?x.ctx.activate(h,E,S,N,j):G(h,E,S,x,L,N,j):Tn(b,h,j)},G=(b,h,E,S,x,L,N)=>{const M=b.component=um(b,S,x);if(Be(b)&&(M.ctx.renderer=V),dm(M),M.asyncDep){if(x&&x.registerDep(M,on),!b.el){const j=M.subTree=Ln(st);k(null,j,h,E)}return}on(M,b,h,E,x,L,N)},Tn=(b,h,E)=>{const S=h.component=b.component;if(wv(b,h,E))if(S.asyncDep&&!S.asyncResolved){hn(S,h,E);return}else S.next=h,kv(S.update),S.update();else h.el=b.el,S.vnode=h},on=(b,h,E,S,x,L,N)=>{const M=()=>{if(b.isMounted){let{next:Y,bu:W,u:X,parent:nn,vnode:rn}=b,In=Y,En;rs(b,!1),Y?(Y.el=rn.el,hn(b,Y,N)):Y=rn,W&&ca(W),(En=Y.props&&Y.props.onVnodeBeforeUpdate)&&it(En,nn,Y,rn),rs(b,!0);const Bn=za(b),dt=b.subTree;b.subTree=Bn,w(dt,Bn,d(dt.el),T(dt),b,x,L),Y.el=Bn.el,In===null&&Iv(b,Bn.el),X&&Kn(X,x),(En=Y.props&&Y.props.onVnodeUpdated)&&Kn(()=>it(En,nn,Y,rn),x)}else{let Y;const{el:W,props:X}=h,{bm:nn,m:rn,parent:In}=b,En=Ms(h);if(rs(b,!1),nn&&ca(nn),!En&&(Y=X&&X.onVnodeBeforeMount)&&it(Y,In,h),rs(b,!0),W&&mn){const Bn=()=>{b.subTree=za(b),mn(W,b.subTree,b,x,null)};En?h.type.__asyncLoader().then(()=>!b.isUnmounted&&Bn()):Bn()}else{const Bn=b.subTree=za(b);w(null,Bn,E,S,b,x,L),h.el=Bn.el}if(rn&&Kn(rn,x),!En&&(Y=X&&X.onVnodeMounted)){const Bn=h;Kn(()=>it(Y,In,Bn),x)}(h.shapeFlag&256||In&&Ms(In.vnode)&&In.vnode.shapeFlag&256)&&b.a&&Kn(b.a,x),b.isMounted=!0,h=E=S=null}},j=b.effect=new Ql(M,()=>Pa(R),b.scope),R=b.update=()=>j.run();R.id=b.uid,rs(b,!0),R()},hn=(b,h,E)=>{h.component=b;const S=b.vnode.props;b.vnode=h,b.next=null,Qv(b,h.props,S,E),Zv(b,h.children,E),Xs(),eo(),Zs()},tn=(b,h,E,S,x,L,N,M,j=!1)=>{const R=b&&b.children,Y=b?b.shapeFlag:0,W=h.children,{patchFlag:X,shapeFlag:nn}=h;if(X>0){if(X&128){wt(R,W,E,S,x,L,N,M,j);return}else if(X&256){ut(R,W,E,S,x,L,N,M,j);return}}nn&8?(Y&16&&Rn(R,x,L),W!==R&&u(E,W)):Y&16?nn&16?wt(R,W,E,S,x,L,N,M,j):Rn(R,x,L,!0):(Y&8&&u(E,""),nn&16&&P(W,E,S,x,L,N,M,j))},ut=(b,h,E,S,x,L,N,M,j)=>{b=b||Ds,h=h||Ds;const R=b.length,Y=h.length,W=Math.min(R,Y);let X;for(X=0;X<W;X++){const nn=h[X]=j?Wt(h[X]):mt(h[X]);w(b[X],nn,E,null,x,L,N,M,j)}R>Y?Rn(b,x,L,!0,!1,W):P(h,E,S,x,L,N,M,j,W)},wt=(b,h,E,S,x,L,N,M,j)=>{let R=0;const Y=h.length;let W=b.length-1,X=Y-1;for(;R<=W&&R<=X;){const nn=b[R],rn=h[R]=j?Wt(h[R]):mt(h[R]);if(us(nn,rn))w(nn,rn,E,null,x,L,N,M,j);else break;R++}for(;R<=W&&R<=X;){const nn=b[W],rn=h[X]=j?Wt(h[X]):mt(h[X]);if(us(nn,rn))w(nn,rn,E,null,x,L,N,M,j);else break;W--,X--}if(R>W){if(R<=X){const nn=X+1,rn=nn<Y?h[nn].el:S;for(;R<=X;)w(null,h[R]=j?Wt(h[R]):mt(h[R]),E,rn,x,L,N,M,j),R++}}else if(R>X)for(;R<=W;)Dn(b[R],x,L,!0),R++;else{const nn=R,rn=R,In=new Map;for(R=rn;R<=X;R++){const Xn=h[R]=j?Wt(h[R]):mt(h[R]);Xn.key!=null&&In.set(Xn.key,R)}let En,Bn=0;const dt=X-rn+1;let As=!1,Hi=0;const le=new Array(dt);for(R=0;R<dt;R++)le[R]=0;for(R=nn;R<=W;R++){const Xn=b[R];if(Bn>=dt){Dn(Xn,x,L,!0);continue}let It;if(Xn.key!=null)It=In.get(Xn.key);else for(En=rn;En<=X;En++)if(le[En-rn]===0&&us(Xn,h[En])){It=En;break}It===void 0?Dn(Xn,x,L,!0):(le[It-rn]=R+1,It>=Hi?Hi=It:As=!0,w(Xn,h[It],E,null,x,L,N,M,j),Bn++)}const Ui=As?em(le):Ds;for(En=Ui.length-1,R=dt-1;R>=0;R--){const Xn=rn+R,It=h[Xn],Ji=Xn+1<Y?h[Xn+1].el:S;le[R]===0?w(null,It,E,Ji,x,L,N,M,j):As&&(En<0||R!==Ui[En]?Wn(It,E,Ji,2):En--)}}},Wn=(b,h,E,S,x=null)=>{const{el:L,type:N,transition:M,children:j,shapeFlag:R}=b;if(R&6){Wn(b.component.subTree,h,E,S);return}if(R&128){b.suspense.move(h,E,S);return}if(R&64){N.move(b,h,E,V);return}if(N===Un){e(L,h,E);for(let W=0;W<j.length;W++)Wn(j[W],h,E,S);e(b.anchor,h,E);return}if(N===ve){C(b,h,E);return}if(S!==2&&R&1&&M)if(S===0)M.beforeEnter(L),e(L,h,E),Kn(()=>M.enter(L),x);else{const{leave:W,delayLeave:X,afterLeave:nn}=M,rn=()=>e(L,h,E),In=()=>{W(L,()=>{rn(),nn&&nn()})};X?X(L,rn,In):In()}else e(L,h,E)},Dn=(b,h,E,S=!1,x=!1)=>{const{type:L,props:N,ref:M,children:j,dynamicChildren:R,shapeFlag:Y,patchFlag:W,dirs:X}=b;if(M!=null&&ha(M,null,E,b,!0),Y&256){h.ctx.deactivate(b);return}const nn=Y&1&&X,rn=!Ms(b);let In;if(rn&&(In=N&&N.onVnodeBeforeUnmount)&&it(In,h,b),Y&6)Nt(b.component,E,S);else{if(Y&128){b.suspense.unmount(E,S);return}nn&&St(b,null,h,"beforeUnmount"),Y&64?b.type.remove(b,h,E,x,V,S):R&&(L!==Un||W>0&&W&64)?Rn(R,h,E,!1,!0):(L===Un&&W&384||!x&&Y&16)&&Rn(j,h,E),S&&Tt(b)}(rn&&(In=N&&N.onVnodeUnmounted)||nn)&&Kn(()=>{In&&it(In,h,b),nn&&St(b,null,h,"unmounted")},E)},Tt=b=>{const{type:h,el:E,anchor:S,transition:x}=b;if(h===Un){at(E,S);return}if(h===ve){D(b);return}const L=()=>{a(E),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(b.shapeFlag&1&&x&&!x.persisted){const{leave:N,delayLeave:M}=x,j=()=>N(E,L);M?M(b.el,L,j):j()}else L()},at=(b,h)=>{let E;for(;b!==h;)E=m(b),a(b),b=E;a(h)},Nt=(b,h,E)=>{const{bum:S,scope:x,update:L,subTree:N,um:M}=b;S&&ca(S),x.stop(),L&&(L.active=!1,Dn(N,b,h,E)),M&&Kn(M,h),Kn(()=>{b.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Rn=(b,h,E,S=!1,x=!1,L=0)=>{for(let N=L;N<b.length;N++)Dn(b[N],h,E,S,x)},T=b=>b.shapeFlag&6?T(b.component.subTree):b.shapeFlag&128?b.suspense.next():m(b.anchor||b.el),q=(b,h,E)=>{b==null?h._vnode&&Dn(h._vnode,null,null,!0):w(h._vnode||null,b,h,null,null,null,E),eo(),ga(),h._vnode=b},V={p:w,um:Dn,m:Wn,r:Tt,mt:G,mc:P,pc:tn,pbc:U,n:T,o:n};let Q,mn;return t&&([Q,mn]=t(V)),{render:q,hydrate:Q,createApp:Wv(q,Q)}}function rs({effect:n,update:t},s){n.allowRecurse=t.allowRecurse=s}function Pc(n,t,s=!1){const e=n.children,a=t.children;if(K(e)&&K(a))for(let l=0;l<e.length;l++){const i=e[l];let o=a[l];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[l]=Wt(a[l]),o.el=i.el),s||Pc(i,o)),o.type===qs&&(o.el=i.el)}}function em(n){const t=n.slice(),s=[0];let e,a,l,i,o;const p=n.length;for(e=0;e<p;e++){const c=n[e];if(c!==0){if(a=s[s.length-1],n[a]<c){t[e]=a,s.push(e);continue}for(l=0,i=s.length-1;l<i;)o=l+i>>1,n[s[o]]<c?l=o+1:i=o;c<n[s[l]]&&(l>0&&(t[e]=s[l-1]),s[l]=e)}}for(l=s.length,i=s[l-1];l-- >0;)s[l]=i,i=t[i];return s}const am=n=>n.__isTeleport,Un=Symbol.for("v-fgt"),qs=Symbol.for("v-txt"),st=Symbol.for("v-cmt"),ve=Symbol.for("v-stc"),me=[];let bt=null;function Tc(n=!1){me.push(bt=n?null:[])}function lm(){me.pop(),bt=me[me.length-1]||null}let Se=1;function bo(n){Se+=n}function xc(n){return n.dynamicChildren=Se>0?bt||Ds:null,lm(),Se>0&&bt&&bt.push(n),n}function C3(n,t,s,e,a,l){return xc(Dc(n,t,s,e,a,l,!0))}function Cc(n,t,s,e,a){return xc(Ln(n,t,s,e,a,!0))}function ya(n){return n?n.__v_isVNode===!0:!1}function us(n,t){return n.type===t.type&&n.key===t.key}const La="__vInternal",Lc=({key:n})=>n??null,pa=({ref:n,ref_key:t,ref_for:s})=>(typeof n=="number"&&(n=""+n),n!=null?pn(n)||Mn(n)||sn(n)?{i:Fn,r:n,k:t,f:!!s}:n:null);function Dc(n,t=null,s=null,e=0,a=null,l=n===Un?0:1,i=!1,o=!1){const p={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Lc(t),ref:t&&pa(t),scopeId:xa,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:e,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Fn};return o?(pi(p,s),l&128&&n.normalize(p)):s&&(p.shapeFlag|=pn(s)?8:16),Se>0&&!i&&bt&&(p.patchFlag>0||l&6)&&p.patchFlag!==32&&bt.push(p),p}const Ln=im;function im(n,t=null,s=null,e=0,a=null,l=!1){if((!n||n===jv)&&(n=st),ya(n)){const o=ns(n,t,!0);return s&&pi(o,s),Se>0&&!l&&bt&&(o.shapeFlag&6?bt[bt.indexOf(n)]=o:bt.push(o)),o.patchFlag|=-2,o}if(km(n)&&(n=n.__vccOpts),t){t=om(t);let{class:o,style:p}=t;o&&!pn(o)&&(t.class=Gl(o)),wn(p)&&(sc(p)&&!K(p)&&(p=On({},p)),t.style=Jl(p))}const i=pn(n)?1:Sv(n)?128:am(n)?64:wn(n)?4:sn(n)?2:0;return Dc(n,t,s,e,a,i,l,!0)}function om(n){return n?sc(n)||La in n?On({},n):n:null}function ns(n,t,s=!1){const{props:e,ref:a,patchFlag:l,children:i}=n,o=t?rm(e||{},t):e;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Lc(o),ref:t&&t.ref?s&&a?K(a)?a.concat(pa(t)):[a,pa(t)]:pa(t):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:i,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Un?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ns(n.ssContent),ssFallback:n.ssFallback&&ns(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Oc(n=" ",t=0){return Ln(qs,null,n,t)}function L3(n,t){const s=Ln(ve,null,n);return s.staticCount=t,s}function D3(n="",t=!1){return t?(Tc(),Cc(st,null,n)):Ln(st,null,n)}function mt(n){return n==null||typeof n=="boolean"?Ln(st):K(n)?Ln(Un,null,n.slice()):typeof n=="object"?Wt(n):Ln(qs,null,String(n))}function Wt(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ns(n)}function pi(n,t){let s=0;const{shapeFlag:e}=n;if(t==null)t=null;else if(K(t))s=16;else if(typeof t=="object")if(e&65){const a=t.default;a&&(a._c&&(a._d=!1),pi(n,a()),a._c&&(a._d=!0));return}else{s=32;const a=t._;!a&&!(La in t)?t._ctx=Fn:a===3&&Fn&&(Fn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else sn(t)?(t={default:t,_ctx:Fn},s=32):(t=String(t),e&64?(s=16,t=[Oc(t)]):s=8);n.children=t,n.shapeFlag|=s}function rm(...n){const t={};for(let s=0;s<n.length;s++){const e=n[s];for(const a in e)if(a==="class")t.class!==e.class&&(t.class=Gl([t.class,e.class]));else if(a==="style")t.style=Jl([t.style,e.style]);else if(Ce(a)){const l=t[a],i=e[a];i&&l!==i&&!(K(l)&&l.includes(i))&&(t[a]=l?[].concat(l,i):i)}else a!==""&&(t[a]=e[a])}return t}function it(n,t,s,e=null){rt(n,t,7,[s,e])}const cm=_c();let pm=0;function um(n,t,s){const e=n.type,a=(t?t.appContext:n.appContext)||cm,l={uid:pm++,vnode:n,type:e,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ac(e,a),emitsOptions:cc(e,a),emit:null,emitted:null,propsDefaults:Sn,inheritAttrs:e.inheritAttrs,ctx:Sn,data:Sn,props:Sn,attrs:Sn,slots:Sn,refs:Sn,setupState:Sn,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=yv.bind(null,l),n.ce&&n.ce(l),l}let $n=null;const ls=()=>$n||Fn;let ui,ws,ko="__VUE_INSTANCE_SETTERS__";(ws=vl()[ko])||(ws=vl()[ko]=[]),ws.push(n=>$n=n),ui=n=>{ws.length>1?ws.forEach(t=>t(n)):ws[0](n)};const zs=n=>{ui(n),n.scope.on()},bs=()=>{$n&&$n.scope.off(),ui(null)};function Rc(n){return n.vnode.shapeFlag&4}let Hs=!1;function dm(n,t=!1){Hs=t;const{props:s,children:e}=n.vnode,a=Rc(n);Kv(n,s,a,t),Xv(n,e);const l=a?vm(n,t):void 0;return Hs=!1,l}function vm(n,t){const s=n.type;n.accessCache=Object.create(null),n.proxy=ec(new Proxy(n.ctx,Nv));const{setup:e}=s;if(e){const a=n.setupContext=e.length>1?gm(n):null;zs(n),Xs();const l=Xt(e,n,0,[n.props,a]);if(Zs(),bs(),jr(l)){if(l.then(bs,bs),t)return l.then(i=>{fo(n,i,t)}).catch(i=>{Re(i,n,0)});n.asyncDep=l}else fo(n,l,t)}else Bc(n,t)}function fo(n,t,s){sn(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:wn(t)&&(n.setupState=lc(t)),Bc(n,s)}let ho;function Bc(n,t,s){const e=n.type;if(!n.render){if(!t&&ho&&!e.render){const a=e.template||ri(n).template;if(a){const{isCustomElement:l,compilerOptions:i}=n.appContext.config,{delimiters:o,compilerOptions:p}=e,c=On(On({isCustomElement:l,delimiters:o},i),p);e.render=ho(a,c)}}n.render=e.render||kt}zs(n),Xs(),qv(n),Zs(),bs()}function mm(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(t,s){return Yn(n,"get","$attrs"),t[s]}}))}function gm(n){const t=s=>{n.exposed=s||{}};return{get attrs(){return mm(n)},slots:n.slots,emit:n.emit,expose:t}}function Da(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(lc(ec(n.exposed)),{get(t,s){if(s in t)return t[s];if(s in de)return de[s](n)},has(t,s){return s in t||s in de}}))}function bm(n,t=!0){return sn(n)?n.displayName||n.name:n.name||t&&n.__name}function km(n){return sn(n)&&"__vccOpts"in n}const A=(n,t)=>mv(n,t,Hs);function r(n,t,s){const e=arguments.length;return e===2?wn(t)&&!K(t)?ya(t)?Ln(n,null,[t]):Ln(n,t):Ln(n,null,t):(e>3?s=Array.prototype.slice.call(arguments,2):e===3&&ya(s)&&(s=[s]),Ln(n,t,s))}const fm=Symbol.for("v-scx"),hm=()=>kn(fm),ym="3.3.4",_m="http://www.w3.org/2000/svg",ds=typeof document<"u"?document:null,yo=ds&&ds.createElement("template"),Em={insert:(n,t,s)=>{t.insertBefore(n,s||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,s,e)=>{const a=t?ds.createElementNS(_m,n):ds.createElement(n,s?{is:s}:void 0);return n==="select"&&e&&e.multiple!=null&&a.setAttribute("multiple",e.multiple),a},createText:n=>ds.createTextNode(n),createComment:n=>ds.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ds.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,s,e,a,l){const i=s?s.previousSibling:t.lastChild;if(a&&(a===l||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),s),!(a===l||!(a=a.nextSibling)););else{yo.innerHTML=e?`<svg>${n}</svg>`:n;const o=yo.content;if(e){const p=o.firstChild;for(;p.firstChild;)o.appendChild(p.firstChild);o.removeChild(p)}t.insertBefore(o,s)}return[i?i.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function Am(n,t,s){const e=n._vtc;e&&(t=(t?[t,...e]:[...e]).join(" ")),t==null?n.removeAttribute("class"):s?n.setAttribute("class",t):n.className=t}function wm(n,t,s){const e=n.style,a=pn(s);if(s&&!a){if(t&&!pn(t))for(const l in t)s[l]==null&&El(e,l,"");for(const l in s)El(e,l,s[l])}else{const l=e.display;a?t!==s&&(e.cssText=s):t&&n.removeAttribute("style"),"_vod"in n&&(e.display=l)}}const _o=/\s*!important$/;function El(n,t,s){if(K(s))s.forEach(e=>El(n,t,e));else if(s==null&&(s=""),t.startsWith("--"))n.setProperty(t,s);else{const e=Im(n,t);_o.test(s)?n.setProperty(ys(e),s.replace(_o,""),"important"):n[e]=s}}const Eo=["Webkit","Moz","ms"],Ga={};function Im(n,t){const s=Ga[t];if(s)return s;let e=ct(t);if(e!=="filter"&&e in n)return Ga[t]=e;e=De(e);for(let a=0;a<Eo.length;a++){const l=Eo[a]+e;if(l in n)return Ga[t]=l}return t}const Ao="http://www.w3.org/1999/xlink";function Sm(n,t,s,e,a){if(e&&t.startsWith("xlink:"))s==null?n.removeAttributeNS(Ao,t.slice(6,t.length)):n.setAttributeNS(Ao,t,s);else{const l=Td(t);s==null||l&&!qr(s)?n.removeAttribute(t):n.setAttribute(t,l?"":s)}}function Pm(n,t,s,e,a,l,i){if(t==="innerHTML"||t==="textContent"){e&&i(e,a,l),n[t]=s??"";return}const o=n.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=s;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=s??"";c!==u&&(n.value=u),s==null&&n.removeAttribute(t);return}let p=!1;if(s===""||s==null){const c=typeof n[t];c==="boolean"?s=qr(s):s==null&&c==="string"?(s="",p=!0):c==="number"&&(s=0,p=!0)}try{n[t]=s}catch{}p&&n.removeAttribute(t)}function Rt(n,t,s,e){n.addEventListener(t,s,e)}function Tm(n,t,s,e){n.removeEventListener(t,s,e)}function xm(n,t,s,e,a=null){const l=n._vei||(n._vei={}),i=l[t];if(e&&i)i.value=e;else{const[o,p]=Cm(t);if(e){const c=l[t]=Om(e,a);Rt(n,o,c,p)}else i&&(Tm(n,o,i,p),l[t]=void 0)}}const wo=/(?:Once|Passive|Capture)$/;function Cm(n){let t;if(wo.test(n)){t={};let e;for(;e=n.match(wo);)n=n.slice(0,n.length-e[0].length),t[e[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ys(n.slice(2)),t]}let Wa=0;const Lm=Promise.resolve(),Dm=()=>Wa||(Lm.then(()=>Wa=0),Wa=Date.now());function Om(n,t){const s=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=s.attached)return;rt(Rm(e,s.value),t,5,[e])};return s.value=n,s.attached=Dm(),s}function Rm(n,t){if(K(t)){const s=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0},t.map(e=>a=>!a._stopped&&e&&e(a))}else return t}const Io=/^on[a-z]/,Bm=(n,t,s,e,a=!1,l,i,o,p)=>{t==="class"?Am(n,e,a):t==="style"?wm(n,s,e):Ce(t)?zl(t)||xm(n,t,s,e,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Mm(n,t,e,a))?Pm(n,t,e,l,i,o,p):(t==="true-value"?n._trueValue=e:t==="false-value"&&(n._falseValue=e),Sm(n,t,e,a))};function Mm(n,t,s,e){return e?!!(t==="innerHTML"||t==="textContent"||t in n&&Io.test(t)&&sn(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||Io.test(t)&&pn(s)?!1:t in n}const Ht="transition",ie="animation",ts=(n,{slots:t})=>r(xv,$c(n),t);ts.displayName="Transition";const Mc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$m=ts.props=On({},mc,Mc),cs=(n,t=[])=>{K(n)?n.forEach(s=>s(...t)):n&&n(...t)},So=n=>n?K(n)?n.some(t=>t.length>1):n.length>1:!1;function $c(n){const t={};for(const J in n)J in Mc||(t[J]=n[J]);if(n.css===!1)return t;const{name:s="v",type:e,duration:a,enterFromClass:l=`${s}-enter-from`,enterActiveClass:i=`${s}-enter-active`,enterToClass:o=`${s}-enter-to`,appearFromClass:p=l,appearActiveClass:c=i,appearToClass:u=o,leaveFromClass:d=`${s}-leave-from`,leaveActiveClass:m=`${s}-leave-active`,leaveToClass:g=`${s}-leave-to`}=n,f=Vm(a),w=f&&f[0],I=f&&f[1],{onBeforeEnter:k,onEnter:y,onEnterCancelled:C,onLeave:D,onLeaveCancelled:z,onBeforeAppear:O=k,onAppear:$=y,onAppearCancelled:P=C}=t,H=(J,Z,G)=>{Gt(J,Z?u:o),Gt(J,Z?c:i),G&&G()},U=(J,Z)=>{J._isLeaving=!1,Gt(J,d),Gt(J,g),Gt(J,m),Z&&Z()},an=J=>(Z,G)=>{const Tn=J?$:y,on=()=>H(Z,J,G);cs(Tn,[Z,on]),Po(()=>{Gt(Z,J?p:l),Ct(Z,J?u:o),So(Tn)||To(Z,e,w,on)})};return On(t,{onBeforeEnter(J){cs(k,[J]),Ct(J,l),Ct(J,i)},onBeforeAppear(J){cs(O,[J]),Ct(J,p),Ct(J,c)},onEnter:an(!1),onAppear:an(!0),onLeave(J,Z){J._isLeaving=!0;const G=()=>U(J,Z);Ct(J,d),jc(),Ct(J,m),Po(()=>{J._isLeaving&&(Gt(J,d),Ct(J,g),So(D)||To(J,e,I,G))}),cs(D,[J,G])},onEnterCancelled(J){H(J,!1),cs(C,[J])},onAppearCancelled(J){H(J,!0),cs(P,[J])},onLeaveCancelled(J){U(J),cs(z,[J])}})}function Vm(n){if(n==null)return null;if(wn(n))return[Ka(n.enter),Ka(n.leave)];{const t=Ka(n);return[t,t]}}function Ka(n){return Ed(n)}function Ct(n,t){t.split(/\s+/).forEach(s=>s&&n.classList.add(s)),(n._vtc||(n._vtc=new Set)).add(t)}function Gt(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.remove(e));const{_vtc:s}=n;s&&(s.delete(t),s.size||(n._vtc=void 0))}function Po(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let jm=0;function To(n,t,s,e){const a=n._endId=++jm,l=()=>{a===n._endId&&e()};if(s)return setTimeout(l,s);const{type:i,timeout:o,propCount:p}=Vc(n,t);if(!i)return e();const c=i+"end";let u=0;const d=()=>{n.removeEventListener(c,m),l()},m=g=>{g.target===n&&++u>=p&&d()};setTimeout(()=>{u<p&&d()},o+1),n.addEventListener(c,m)}function Vc(n,t){const s=window.getComputedStyle(n),e=f=>(s[f]||"").split(", "),a=e(`${Ht}Delay`),l=e(`${Ht}Duration`),i=xo(a,l),o=e(`${ie}Delay`),p=e(`${ie}Duration`),c=xo(o,p);let u=null,d=0,m=0;t===Ht?i>0&&(u=Ht,d=i,m=l.length):t===ie?c>0&&(u=ie,d=c,m=p.length):(d=Math.max(i,c),u=d>0?i>c?Ht:ie:null,m=u?u===Ht?l.length:p.length:0);const g=u===Ht&&/\b(transform|all)(,|$)/.test(e(`${Ht}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:g}}function xo(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((s,e)=>Co(s)+Co(n[e])))}function Co(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function jc(){return document.body.offsetHeight}const Fc=new WeakMap,Nc=new WeakMap,qc={name:"TransitionGroup",props:On({},$m,{tag:String,moveClass:String}),setup(n,{slots:t}){const s=ls(),e=vc();let a,l;return kc(()=>{if(!a.length)return;const i=n.moveClass||`${n.name||"v"}-move`;if(!Um(a[0].el,s.vnode.el,i))return;a.forEach(qm),a.forEach(zm);const o=a.filter(Hm);jc(),o.forEach(p=>{const c=p.el,u=c.style;Ct(c,i),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=m=>{m&&m.target!==c||(!m||/transform$/.test(m.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,Gt(c,i))};c.addEventListener("transitionend",d)})}),()=>{const i=dn(n),o=$c(i);let p=i.tag||Un;a=l,l=t.default?ii(t.default()):[];for(let c=0;c<l.length;c++){const u=l[c];u.key!=null&&Ie(u,we(u,o,e,s))}if(a)for(let c=0;c<a.length;c++){const u=a[c];Ie(u,we(u,o,e,s)),Fc.set(u,u.el.getBoundingClientRect())}return Ln(p,null,l)}}},Fm=n=>delete n.mode;qc.props;const Nm=qc;function qm(n){const t=n.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function zm(n){Nc.set(n,n.el.getBoundingClientRect())}function Hm(n){const t=Fc.get(n),s=Nc.get(n),e=t.left-s.left,a=t.top-s.top;if(e||a){const l=n.el.style;return l.transform=l.webkitTransform=`translate(${e}px,${a}px)`,l.transitionDuration="0s",n}}function Um(n,t,s){const e=n.cloneNode();n._vtc&&n._vtc.forEach(i=>{i.split(/\s+/).forEach(o=>o&&e.classList.remove(o))}),s.split(/\s+/).forEach(i=>i&&e.classList.add(i)),e.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(e);const{hasTransform:l}=Vc(e);return a.removeChild(e),l}const ss=n=>{const t=n.props["onUpdate:modelValue"]||!1;return K(t)?s=>ca(t,s):t};function Jm(n){n.target.composing=!0}function Lo(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Do={created(n,{modifiers:{lazy:t,trim:s,number:e}},a){n._assign=ss(a);const l=e||a.props&&a.props.type==="number";Rt(n,t?"change":"input",i=>{if(i.target.composing)return;let o=n.value;s&&(o=o.trim()),l&&(o=da(o)),n._assign(o)}),s&&Rt(n,"change",()=>{n.value=n.value.trim()}),t||(Rt(n,"compositionstart",Jm),Rt(n,"compositionend",Lo),Rt(n,"change",Lo))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,modifiers:{lazy:s,trim:e,number:a}},l){if(n._assign=ss(l),n.composing||document.activeElement===n&&n.type!=="range"&&(s||e&&n.value.trim()===t||(a||n.type==="number")&&da(n.value)===t))return;const i=t??"";n.value!==i&&(n.value=i)}},Gm={deep:!0,created(n,t,s){n._assign=ss(s),Rt(n,"change",()=>{const e=n._modelValue,a=Us(n),l=n.checked,i=n._assign;if(K(e)){const o=Wl(e,a),p=o!==-1;if(l&&!p)i(e.concat(a));else if(!l&&p){const c=[...e];c.splice(o,1),i(c)}}else if(Ys(e)){const o=new Set(e);l?o.add(a):o.delete(a),i(o)}else i(zc(n,l))})},mounted:Oo,beforeUpdate(n,t,s){n._assign=ss(s),Oo(n,t,s)}};function Oo(n,{value:t,oldValue:s},e){n._modelValue=t,K(t)?n.checked=Wl(t,e.props.value)>-1:Ys(t)?n.checked=t.has(e.props.value):t!==s&&(n.checked=ks(t,zc(n,!0)))}const Wm={created(n,{value:t},s){n.checked=ks(t,s.props.value),n._assign=ss(s),Rt(n,"change",()=>{n._assign(Us(n))})},beforeUpdate(n,{value:t,oldValue:s},e){n._assign=ss(e),t!==s&&(n.checked=ks(t,e.props.value))}},Km={deep:!0,created(n,{value:t,modifiers:{number:s}},e){const a=Ys(t);Rt(n,"change",()=>{const l=Array.prototype.filter.call(n.options,i=>i.selected).map(i=>s?da(Us(i)):Us(i));n._assign(n.multiple?a?new Set(l):l:l[0])}),n._assign=ss(e)},mounted(n,{value:t}){Ro(n,t)},beforeUpdate(n,t,s){n._assign=ss(s)},updated(n,{value:t}){Ro(n,t)}};function Ro(n,t){const s=n.multiple;if(!(s&&!K(t)&&!Ys(t))){for(let e=0,a=n.options.length;e<a;e++){const l=n.options[e],i=Us(l);if(s)K(t)?l.selected=Wl(t,i)>-1:l.selected=t.has(i);else if(ks(Us(l),t)){n.selectedIndex!==e&&(n.selectedIndex=e);return}}!s&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Us(n){return"_value"in n?n._value:n.value}function zc(n,t){const s=t?"_trueValue":"_falseValue";return s in n?n[s]:t}const O3={created(n,t,s){ta(n,t,s,null,"created")},mounted(n,t,s){ta(n,t,s,null,"mounted")},beforeUpdate(n,t,s,e){ta(n,t,s,e,"beforeUpdate")},updated(n,t,s,e){ta(n,t,s,e,"updated")}};function Qm(n,t){switch(n){case"SELECT":return Km;case"TEXTAREA":return Do;default:switch(t){case"checkbox":return Gm;case"radio":return Wm;default:return Do}}}function ta(n,t,s,e,a){const i=Qm(n.tagName,s.props&&s.props.type)[a];i&&i(n,t,s,e)}const Ym=["ctrl","shift","alt","meta"],Xm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Ym.some(s=>n[`${s}Key`]&&!t.includes(s))},R3=(n,t)=>(s,...e)=>{for(let a=0;a<t.length;a++){const l=Xm[t[a]];if(l&&l(s,t))return}return n(s,...e)},Zm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},B3=(n,t)=>s=>{if(!("key"in s))return;const e=ys(s.key);if(t.some(a=>a===e||Zm[a]===e))return n(s)},M3={beforeMount(n,{value:t},{transition:s}){n._vod=n.style.display==="none"?"":n.style.display,s&&t?s.beforeEnter(n):oe(n,t)},mounted(n,{value:t},{transition:s}){s&&t&&s.enter(n)},updated(n,{value:t,oldValue:s},{transition:e}){!t!=!s&&(e?t?(e.beforeEnter(n),oe(n,!0),e.enter(n)):e.leave(n,()=>{oe(n,!1)}):oe(n,t))},beforeUnmount(n,{value:t}){oe(n,t)}};function oe(n,t){n.style.display=t?n._vod:"none"}const n1=On({patchProp:Bm},Em);let Qa,Bo=!1;function t1(){return Qa=Bo?Qa:tm(n1),Bo=!0,Qa}const s1=(...n)=>{const t=t1().createApp(...n),{mount:s}=t;return t.mount=e=>{const a=e1(e);if(a)return s(a,!0,a instanceof SVGElement)},t};function e1(n){return pn(n)?document.querySelector(n):n}const a1={"v-8daa1a0e":()=>v(()=>import("./index.html-5e71fcbb.js"),[]).then(({data:n})=>n),"v-184f4da6":()=>v(()=>import("./intro.html-e1d4907a.js"),[]).then(({data:n})=>n),"v-2e3eac9e":()=>v(()=>import("./slides.html-27975832.js"),[]).then(({data:n})=>n),"v-2db914b0":()=>v(()=>import("./1、算法指标及排序算法.html-e5976ef0.js"),[]).then(({data:n})=>n),"v-434b990c":()=>v(()=>import("./2、基础数据结构.html-7f805f70.js"),[]).then(({data:n})=>n),"v-013fe386":()=>v(()=>import("./3、基础算法.html-4fb7abed.js"),[]).then(({data:n})=>n),"v-594a4121":()=>v(()=>import("./index.html-21bc224e.js"),[]).then(({data:n})=>n),"v-2251dc2c":()=>v(()=>import("./instruction.html-d827305e.js"),[]).then(({data:n})=>n),"v-f4face08":()=>v(()=>import("./index.html-5f7491fc.js"),[]).then(({data:n})=>n),"v-2c0b6453":()=>v(()=>import("./左神算法基础提升课学习笔记.html-6116062f.js"),[]).then(({data:n})=>n),"v-7f701d4a":()=>v(()=>import("./左神算法基础课学习笔记.html-8e34b3e8.js"),[]).then(({data:n})=>n),"v-e8550a0c":()=>v(()=>import("./算法总结.html-5da991f6.js"),[]).then(({data:n})=>n),"v-7bd30a60":()=>v(()=>import("./index.html-fa29b8c2.js"),[]).then(({data:n})=>n),"v-7dd7f45d":()=>v(()=>import("./index.html-fde9fbe5.js"),[]).then(({data:n})=>n),"v-2ccdf990":()=>v(()=>import("./index.html-2fb577b9.js"),[]).then(({data:n})=>n),"v-599fbcfb":()=>v(()=>import("./index.html-9cf5cc36.js"),[]).then(({data:n})=>n),"v-2365654c":()=>v(()=>import("./index.html-aec93843.js"),[]).then(({data:n})=>n),"v-2669abe4":()=>v(()=>import("./技巧.html-dce07a89.js"),[]).then(({data:n})=>n),"v-0041281f":()=>v(()=>import("./设计模式.html-b2845145.js"),[]).then(({data:n})=>n),"v-37cb64ed":()=>v(()=>import("./canvas.html-4161a88e.js"),[]).then(({data:n})=>n),"v-33ad279c":()=>v(()=>import("./echarts-basic.html-fecffdfc.js"),[]).then(({data:n})=>n),"v-b64bd99a":()=>v(()=>import("./echarts.html-52d8df98.js"),[]).then(({data:n})=>n),"v-f1eac03e":()=>v(()=>import("./scene.html-f4f89b35.js"),[]).then(({data:n})=>n),"v-26aad609":()=>v(()=>import("./svg.html-f2a31e54.js"),[]).then(({data:n})=>n),"v-2dac4d22":()=>v(()=>import("./tech.html-d634f9fb.js"),[]).then(({data:n})=>n),"v-8ee507d2":()=>v(()=>import("./guide.html-c6666968.js"),[]).then(({data:n})=>n),"v-00d412b2":()=>v(()=>import("./intro.html-898fb8ce.js"),[]).then(({data:n})=>n),"v-4251ce4f":()=>v(()=>import("./qa.html-11512737.js"),[]).then(({data:n})=>n),"v-946db9a6":()=>v(()=>import("./summary.html-b7f804b7.js"),[]).then(({data:n})=>n),"v-8577ef52":()=>v(()=>import("./elasticsearch.html-b906f663.js"),[]).then(({data:n})=>n),"v-4b591cc2":()=>v(()=>import("./基础总结.html-ade3667f.js"),[]).then(({data:n})=>n),"v-d1989f48":()=>v(()=>import("./基础总结.html-039a09e9.js"),[]).then(({data:n})=>n),"v-d1d1d3cc":()=>v(()=>import("./rabbitmq.html-0b585f15.js"),[]).then(({data:n})=>n),"v-f63cc7c8":()=>v(()=>import("./基础总结.html-7c85593f.js"),[]).then(({data:n})=>n),"v-632f1be4":()=>v(()=>import("./基础总结.html-3fd901b4.js"),[]).then(({data:n})=>n),"v-6fb57558":()=>v(()=>import("./源码分析.html-8b05df2d.js"),[]).then(({data:n})=>n),"v-2706221b":()=>v(()=>import("./springcloud项目尚医通总结.html-8b9d508c.js"),[]).then(({data:n})=>n),"v-7a9a6e12":()=>v(()=>import("./基础总结.html-d93815d8.js"),[]).then(({data:n})=>n),"v-97a18dc8":()=>v(()=>import("./基础总结.html-9b8551ae.js"),[]).then(({data:n})=>n),"v-7a1ee8c4":()=>v(()=>import("./swagger.html-d2e746d1.js"),[]).then(({data:n})=>n),"v-2ac42c0b":()=>v(()=>import("./activiti6基础笔记.html-30bfedf4.js"),[]).then(({data:n})=>n),"v-41f030d6":()=>v(()=>import("./第一行代码笔记.html-846f5efc.js"),[]).then(({data:n})=>n),"v-6d241b5d":()=>v(()=>import("./Bash基础笔记.html-524334d7.js"),[]).then(({data:n})=>n),"v-d3bc8416":()=>v(()=>import("./常用命令.html-7b8a05eb.js"),[]).then(({data:n})=>n),"v-2d51a49f":()=>v(()=>import("./docker命令.html-ed94a822.js"),[]).then(({data:n})=>n),"v-5b2d3140":()=>v(()=>import("./常用镜像命令.html-d00acd41.js"),[]).then(({data:n})=>n),"v-476eae3c":()=>v(()=>import("./maven深入学习笔记.html-0ef533b6.js"),[]).then(({data:n})=>n),"v-106ab87c":()=>v(()=>import("./yaml语法.html-cf89a792.js"),[]).then(({data:n})=>n),"v-5196b250":()=>v(()=>import("./java整合mysql.html-9332bfac.js"),[]).then(({data:n})=>n),"v-2179c7dc":()=>v(()=>import("./基础.html-f320bf39.js"),[]).then(({data:n})=>n),"v-468f0997":()=>v(()=>import("./Oracle基础总结.html-53459dd7.js"),[]).then(({data:n})=>n),"v-4f1a648a":()=>v(()=>import("./redis.html-e27d7c04.js"),[]).then(({data:n})=>n),"v-4d18a865":()=>v(()=>import("./index.html-d1e6dc6c.js"),[]).then(({data:n})=>n),"v-e25b971c":()=>v(()=>import("./index.html-5cf12674.js"),[]).then(({data:n})=>n),"v-9087045a":()=>v(()=>import("./StarterSwagger3.html-cb98ff89.js"),[]).then(({data:n})=>n),"v-0357f249":()=>v(()=>import("./CSS世界学习笔记.html-0ad15f18.js"),[]).then(({data:n})=>n),"v-c3c11a36":()=>v(()=>import("./JavaScript笔记.html-437d4385.js"),[]).then(({data:n})=>n),"v-4f00b37c":()=>v(()=>import("./JavaScript高级程序设计学习笔记.html-cf493342.js"),[]).then(({data:n})=>n),"v-eff6200a":()=>v(()=>import("./jquery_ajax笔记.html-63908a03.js"),[]).then(({data:n})=>n),"v-31bde1ba":()=>v(()=>import("./疯狂HTML5_CSS3_JavaScript讲义笔记.html-0e70f115.js"),[]).then(({data:n})=>n),"v-f33d5ffc":()=>v(()=>import("./疯狂前端开发讲义笔记.html-4ff4e24b.js"),[]).then(({data:n})=>n),"v-6e13ebe8":()=>v(()=>import("./JSP_Servlet笔记.html-aeffbb71.js"),[]).then(({data:n})=>n),"v-0f87f09a":()=>v(()=>import("./JUC.html-2d2483e7.js"),[]).then(({data:n})=>n),"v-3f21900f":()=>v(()=>import("./基础.html-826616bc.js"),[]).then(({data:n})=>n),"v-36970167":()=>v(()=>import("./学习笔记《java开发手册》.html-a2559375.js"),[]).then(({data:n})=>n),"v-86a4c8da":()=>v(()=>import("./学习笔记《疯狂Java讲义》.html-be4b6f3a.js"),[]).then(({data:n})=>n),"v-88b1b032":()=>v(()=>import("./学习笔记《码出高效：Java开发手册》.html-01660225.js"),[]).then(({data:n})=>n),"v-ab8fb5bc":()=>v(()=>import("./抽象类和接口.html-547853e0.js"),[]).then(({data:n})=>n),"v-7ad12457":()=>v(()=>import("./集合.html-b464b3e7.js"),[]).then(({data:n})=>n),"v-08abb1af":()=>v(()=>import("./note.html-157395cc.js"),[]).then(({data:n})=>n),"v-02544884":()=>v(()=>import("./mongodb.html-f1de7445.js"),[]).then(({data:n})=>n),"v-b7c7acc0":()=>v(()=>import("./Vue2.5开发去哪儿网App从零基础入门到实战项目学习笔记.html-230173ed.js"),[]).then(({data:n})=>n),"v-4d675cd4":()=>v(()=>import("./基础总结.html-9f47d6af.js"),[]).then(({data:n})=>n),"v-3706649a":()=>v(()=>import("./404.html-bb007e7c.js"),[]).then(({data:n})=>n),"v-42ef21ea":()=>v(()=>import("./index.html-15c8a236.js"),[]).then(({data:n})=>n),"v-01af5e14":()=>v(()=>import("./index.html-708df870.js"),[]).then(({data:n})=>n),"v-145ac574":()=>v(()=>import("./index.html-5a33631f.js"),[]).then(({data:n})=>n),"v-a1ad3d48":()=>v(()=>import("./index.html-2682a58d.js"),[]).then(({data:n})=>n),"v-3607025c":()=>v(()=>import("./index.html-eea3f7d2.js"),[]).then(({data:n})=>n),"v-922f6dd8":()=>v(()=>import("./index.html-02441c9e.js"),[]).then(({data:n})=>n),"v-511fb93a":()=>v(()=>import("./index.html-6d692732.js"),[]).then(({data:n})=>n),"v-ec27c24a":()=>v(()=>import("./index.html-09275aea.js"),[]).then(({data:n})=>n),"v-4910ef8c":()=>v(()=>import("./index.html-01f34afc.js"),[]).then(({data:n})=>n),"v-747d1eb2":()=>v(()=>import("./index.html-7e2ddb84.js"),[]).then(({data:n})=>n),"v-0265bfe1":()=>v(()=>import("./index.html-852ebda6.js"),[]).then(({data:n})=>n),"v-1883faf2":()=>v(()=>import("./index.html-4399dab8.js"),[]).then(({data:n})=>n),"v-1b67f680":()=>v(()=>import("./index.html-385f02d5.js"),[]).then(({data:n})=>n),"v-58bf2fb7":()=>v(()=>import("./index.html-49d4cacd.js"),[]).then(({data:n})=>n),"v-3264841c":()=>v(()=>import("./index.html-99f15ddf.js"),[]).then(({data:n})=>n),"v-4d2542b5":()=>v(()=>import("./index.html-a1c426fb.js"),[]).then(({data:n})=>n),"v-2289dd5a":()=>v(()=>import("./index.html-292e95bc.js"),[]).then(({data:n})=>n),"v-d4424206":()=>v(()=>import("./index.html-51b0c86c.js"),[]).then(({data:n})=>n),"v-d973dcc4":()=>v(()=>import("./index.html-88029ef9.js"),[]).then(({data:n})=>n),"v-5ad92f12":()=>v(()=>import("./index.html-e120fba2.js"),[]).then(({data:n})=>n),"v-2f7a6abe":()=>v(()=>import("./index.html-4bd5aca0.js"),[]).then(({data:n})=>n),"v-d6ebcfaa":()=>v(()=>import("./index.html-47f3672e.js"),[]).then(({data:n})=>n),"v-ce71e5f6":()=>v(()=>import("./index.html-06cec637.js"),[]).then(({data:n})=>n),"v-461dbf8e":()=>v(()=>import("./index.html-cfc9140b.js"),[]).then(({data:n})=>n),"v-bfa2f968":()=>v(()=>import("./index.html-c822a11e.js"),[]).then(({data:n})=>n),"v-39ad1b74":()=>v(()=>import("./index.html-efa0532d.js"),[]).then(({data:n})=>n),"v-b82b2f16":()=>v(()=>import("./index.html-fb34a7c9.js"),[]).then(({data:n})=>n),"v-5329c232":()=>v(()=>import("./index.html-ee7caebe.js"),[]).then(({data:n})=>n),"v-d3f8a510":()=>v(()=>import("./index.html-bd84c462.js"),[]).then(({data:n})=>n),"v-846fe2d2":()=>v(()=>import("./index.html-53b53031.js"),[]).then(({data:n})=>n),"v-cc220acc":()=>v(()=>import("./index.html-599e5690.js"),[]).then(({data:n})=>n),"v-464b554e":()=>v(()=>import("./index.html-8e4bafcb.js"),[]).then(({data:n})=>n),"v-6b69a98c":()=>v(()=>import("./index.html-288bbf72.js"),[]).then(({data:n})=>n),"v-5bc93818":()=>v(()=>import("./index.html-0e5553da.js"),[]).then(({data:n})=>n),"v-744d024e":()=>v(()=>import("./index.html-ee08f8a4.js"),[]).then(({data:n})=>n),"v-e52c881c":()=>v(()=>import("./index.html-0b977aec.js"),[]).then(({data:n})=>n),"v-154dc4c4":()=>v(()=>import("./index.html-2f13bbcc.js"),[]).then(({data:n})=>n),"v-01560935":()=>v(()=>import("./index.html-e9d110f9.js"),[]).then(({data:n})=>n),"v-06be9332":()=>v(()=>import("./index.html-5a918ded.js"),[]).then(({data:n})=>n),"v-2687e471":()=>v(()=>import("./index.html-9479282f.js"),[]).then(({data:n})=>n),"v-7a2dbc66":()=>v(()=>import("./index.html-536277d1.js"),[]).then(({data:n})=>n),"v-b7d62b20":()=>v(()=>import("./index.html-45a37b61.js"),[]).then(({data:n})=>n),"v-4c00fee6":()=>v(()=>import("./index.html-b84d7b0e.js"),[]).then(({data:n})=>n),"v-b312914e":()=>v(()=>import("./index.html-eb917384.js"),[]).then(({data:n})=>n),"v-65eef823":()=>v(()=>import("./index.html-edffe0f2.js"),[]).then(({data:n})=>n),"v-2cce94e0":()=>v(()=>import("./index.html-55592f38.js"),[]).then(({data:n})=>n),"v-49f5e4d4":()=>v(()=>import("./index.html-931e73cc.js"),[]).then(({data:n})=>n),"v-757f190a":()=>v(()=>import("./index.html-96b00477.js"),[]).then(({data:n})=>n),"v-24cf7443":()=>v(()=>import("./index.html-022320ef.js"),[]).then(({data:n})=>n),"v-41e71c66":()=>v(()=>import("./index.html-d5238306.js"),[]).then(({data:n})=>n),"v-1e1f7399":()=>v(()=>import("./index.html-7cc61937.js"),[]).then(({data:n})=>n),"v-63bcc623":()=>v(()=>import("./index.html-d8597e00.js"),[]).then(({data:n})=>n),"v-08073caa":()=>v(()=>import("./index.html-2535caab.js"),[]).then(({data:n})=>n),"v-7d0ba9b4":()=>v(()=>import("./index.html-1458f3e8.js"),[]).then(({data:n})=>n),"v-0667aa78":()=>v(()=>import("./index.html-89737dbe.js"),[]).then(({data:n})=>n),"v-59fa8282":()=>v(()=>import("./index.html-aa00903c.js"),[]).then(({data:n})=>n),"v-6fcf7e02":()=>v(()=>import("./index.html-da0ace56.js"),[]).then(({data:n})=>n),"v-323f2b96":()=>v(()=>import("./index.html-8f53cfb6.js"),[]).then(({data:n})=>n),"v-424a813a":()=>v(()=>import("./index.html-fe42fcc6.js"),[]).then(({data:n})=>n),"v-97aefb08":()=>v(()=>import("./index.html-d672288c.js"),[]).then(({data:n})=>n),"v-4e0a37fd":()=>v(()=>import("./index.html-88bea764.js"),[]).then(({data:n})=>n),"v-9f510020":()=>v(()=>import("./index.html-240726d8.js"),[]).then(({data:n})=>n),"v-51acfcdb":()=>v(()=>import("./index.html-2085521d.js"),[]).then(({data:n})=>n),"v-79936c33":()=>v(()=>import("./index.html-8aa45997.js"),[]).then(({data:n})=>n),"v-4baa6010":()=>v(()=>import("./index.html-7bcda36e.js"),[]).then(({data:n})=>n),"v-1fc82282":()=>v(()=>import("./index.html-edf11e1d.js"),[]).then(({data:n})=>n),"v-29da37b8":()=>v(()=>import("./index.html-70154c1a.js"),[]).then(({data:n})=>n),"v-2303312e":()=>v(()=>import("./index.html-4e6cd9b4.js"),[]).then(({data:n})=>n),"v-57c0eac3":()=>v(()=>import("./index.html-45a9d477.js"),[]).then(({data:n})=>n),"v-55636bee":()=>v(()=>import("./index.html-5504710a.js"),[]).then(({data:n})=>n),"v-27fb5a12":()=>v(()=>import("./index.html-d8b74bf0.js"),[]).then(({data:n})=>n),"v-2831124d":()=>v(()=>import("./index.html-3b54d6af.js"),[]).then(({data:n})=>n),"v-99b9d3c8":()=>v(()=>import("./index.html-5bab0b0d.js"),[]).then(({data:n})=>n),"v-6106c001":()=>v(()=>import("./index.html-2b442d8c.js"),[]).then(({data:n})=>n),"v-5904f150":()=>v(()=>import("./index.html-7cf55d7a.js"),[]).then(({data:n})=>n),"v-1e90405c":()=>v(()=>import("./index.html-94361434.js"),[]).then(({data:n})=>n),"v-5e0b61bd":()=>v(()=>import("./index.html-0ef4edf7.js"),[]).then(({data:n})=>n),"v-297518da":()=>v(()=>import("./index.html-39ed20a3.js"),[]).then(({data:n})=>n),"v-9717cc36":()=>v(()=>import("./index.html-7209af5f.js"),[]).then(({data:n})=>n),"v-25365ef3":()=>v(()=>import("./index.html-6930b6fa.js"),[]).then(({data:n})=>n),"v-36e5af59":()=>v(()=>import("./index.html-36d23d70.js"),[]).then(({data:n})=>n),"v-1bee38ca":()=>v(()=>import("./index.html-f13374c1.js"),[]).then(({data:n})=>n),"v-8848dfa8":()=>v(()=>import("./index.html-350c6b78.js"),[]).then(({data:n})=>n),"v-a82bc73a":()=>v(()=>import("./index.html-71b464fd.js"),[]).then(({data:n})=>n),"v-3df94dfd":()=>v(()=>import("./index.html-1e155d25.js"),[]).then(({data:n})=>n),"v-0d1f4c3c":()=>v(()=>import("./index.html-d1d45f0b.js"),[]).then(({data:n})=>n),"v-e9c7e408":()=>v(()=>import("./index.html-c548900e.js"),[]).then(({data:n})=>n),"v-b3142c4c":()=>v(()=>import("./index.html-9b0dc7af.js"),[]).then(({data:n})=>n),"v-5831b135":()=>v(()=>import("./index.html-6ff40265.js"),[]).then(({data:n})=>n),"v-3b951558":()=>v(()=>import("./index.html-57282599.js"),[]).then(({data:n})=>n),"v-78cbe7bb":()=>v(()=>import("./index.html-b1191208.js"),[]).then(({data:n})=>n),"v-288e2c56":()=>v(()=>import("./index.html-d16d5b9d.js"),[]).then(({data:n})=>n),"v-94c7f10c":()=>v(()=>import("./index.html-2997b317.js"),[]).then(({data:n})=>n),"v-28a1d8bf":()=>v(()=>import("./index.html-ce700e36.js"),[]).then(({data:n})=>n),"v-4dc3ee15":()=>v(()=>import("./index.html-a860df88.js"),[]).then(({data:n})=>n),"v-245f5676":()=>v(()=>import("./index.html-e0955dfb.js"),[]).then(({data:n})=>n),"v-06ebc23c":()=>v(()=>import("./index.html-4bacd547.js"),[]).then(({data:n})=>n),"v-794d224b":()=>v(()=>import("./index.html-8ef20e38.js"),[]).then(({data:n})=>n),"v-65f6d381":()=>v(()=>import("./index.html-9d2370c8.js"),[]).then(({data:n})=>n),"v-b302da92":()=>v(()=>import("./index.html-940ed4e0.js"),[]).then(({data:n})=>n),"v-74379b30":()=>v(()=>import("./index.html-339be067.js"),[]).then(({data:n})=>n),"v-921953d4":()=>v(()=>import("./index.html-4421e73f.js"),[]).then(({data:n})=>n),"v-48e65760":()=>v(()=>import("./index.html-9b007397.js"),[]).then(({data:n})=>n)},l1=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"icon","href":"/logo.png"}]],"locales":{"/":{"lang":"zh-CN","title":"Alooc","description":"Alooc的博客"}}}');var i1=([n,t,s])=>n==="meta"&&t.name?`${n}.${t.name}`:["title","base"].includes(n)?n:n==="template"&&t.id?`${n}.${t.id}`:JSON.stringify([n,t,s]),o1=n=>{const t=new Set,s=[];return n.forEach(e=>{const a=i1(e);t.has(a)||(t.add(a),s.push(e))}),s},r1=n=>n[n.length-1]==="/"||n.endsWith(".html")?n:`${n}/`,c1=n=>n.startsWith("ftp://"),Es=n=>/^(https?:)?\/\//.test(n),p1=/.md((\?|#).*)?$/,_a=(n,t="/")=>!!(Es(n)||c1(n)||n.startsWith("/")&&!n.startsWith(t)&&!p1.test(n)),Hc=n=>/^mailto:/.test(n),u1=n=>/^tel:/.test(n),Me=n=>Object.prototype.toString.call(n)==="[object Object]",di=n=>n[n.length-1]==="/"?n.slice(0,-1):n,Uc=n=>n[0]==="/"?n.slice(1):n,d1=(n,t)=>{const s=Object.keys(n).sort((e,a)=>{const l=a.split("/").length-e.split("/").length;return l!==0?l:a.length-e.length});for(const e of s)if(t.startsWith(e))return e;return"/"};const Jc={"v-8daa1a0e":_(()=>v(()=>import("./index.html-ec72f458.js"),["assets/index.html-ec72f458.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-184f4da6":_(()=>v(()=>import("./intro.html-6d2de616.js"),["assets/intro.html-6d2de616.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2e3eac9e":_(()=>v(()=>import("./slides.html-bec0ce0f.js"),["assets/slides.html-bec0ce0f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2db914b0":_(()=>v(()=>import("./1、算法指标及排序算法.html-f0d3b4cb.js"),["assets/1、算法指标及排序算法.html-f0d3b4cb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-434b990c":_(()=>v(()=>import("./2、基础数据结构.html-4a93282c.js"),["assets/2、基础数据结构.html-4a93282c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-013fe386":_(()=>v(()=>import("./3、基础算法.html-ed17acbb.js"),["assets/3、基础算法.html-ed17acbb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-594a4121":_(()=>v(()=>import("./index.html-18265390.js"),["assets/index.html-18265390.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2251dc2c":_(()=>v(()=>import("./instruction.html-871ec33e.js"),["assets/instruction.html-871ec33e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f4face08":_(()=>v(()=>import("./index.html-66019d5e.js"),["assets/index.html-66019d5e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2c0b6453":_(()=>v(()=>import("./左神算法基础提升课学习笔记.html-94bfb476.js"),["assets/左神算法基础提升课学习笔记.html-94bfb476.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7f701d4a":_(()=>v(()=>import("./左神算法基础课学习笔记.html-4bc33f3c.js"),["assets/左神算法基础课学习笔记.html-4bc33f3c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e8550a0c":_(()=>v(()=>import("./算法总结.html-2c038065.js"),["assets/算法总结.html-2c038065.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7bd30a60":_(()=>v(()=>import("./index.html-37b4de71.js"),["assets/index.html-37b4de71.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7dd7f45d":_(()=>v(()=>import("./index.html-9e6f615d.js"),["assets/index.html-9e6f615d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2ccdf990":_(()=>v(()=>import("./index.html-71bf47fb.js"),["assets/index.html-71bf47fb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-599fbcfb":_(()=>v(()=>import("./index.html-4e9f5dc1.js"),["assets/index.html-4e9f5dc1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2365654c":_(()=>v(()=>import("./index.html-8964364c.js"),["assets/index.html-8964364c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2669abe4":_(()=>v(()=>import("./技巧.html-05dc4ee0.js"),["assets/技巧.html-05dc4ee0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0041281f":_(()=>v(()=>import("./设计模式.html-16faa5f7.js"),["assets/设计模式.html-16faa5f7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-37cb64ed":_(()=>v(()=>import("./canvas.html-5fb4a24b.js"),["assets/canvas.html-5fb4a24b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-33ad279c":_(()=>v(()=>import("./echarts-basic.html-1c929599.js"),["assets/echarts-basic.html-1c929599.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b64bd99a":_(()=>v(()=>import("./echarts.html-d99c1775.js"),["assets/echarts.html-d99c1775.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f1eac03e":_(()=>v(()=>import("./scene.html-e2050d11.js"),["assets/scene.html-e2050d11.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-26aad609":_(()=>v(()=>import("./svg.html-d5916bef.js"),["assets/svg.html-d5916bef.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2dac4d22":_(()=>v(()=>import("./tech.html-102fd318.js"),["assets/tech.html-102fd318.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8ee507d2":_(()=>v(()=>import("./guide.html-d83b97bf.js"),["assets/guide.html-d83b97bf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-00d412b2":_(()=>v(()=>import("./intro.html-2dc8d5f2.js"),["assets/intro.html-2dc8d5f2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4251ce4f":_(()=>v(()=>import("./qa.html-f6d8861d.js"),["assets/qa.html-f6d8861d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-946db9a6":_(()=>v(()=>import("./summary.html-3c9a0e3e.js"),["assets/summary.html-3c9a0e3e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8577ef52":_(()=>v(()=>import("./elasticsearch.html-cf8133c9.js"),["assets/elasticsearch.html-cf8133c9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4b591cc2":_(()=>v(()=>import("./基础总结.html-462b346b.js"),["assets/基础总结.html-462b346b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d1989f48":_(()=>v(()=>import("./基础总结.html-240e60a6.js"),["assets/基础总结.html-240e60a6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d1d1d3cc":_(()=>v(()=>import("./rabbitmq.html-5b001aa6.js"),["assets/rabbitmq.html-5b001aa6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f63cc7c8":_(()=>v(()=>import("./基础总结.html-30ef41fa.js"),["assets/基础总结.html-30ef41fa.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-632f1be4":_(()=>v(()=>import("./基础总结.html-cb405779.js"),["assets/基础总结.html-cb405779.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6fb57558":_(()=>v(()=>import("./源码分析.html-6ff4de45.js"),["assets/源码分析.html-6ff4de45.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2706221b":_(()=>v(()=>import("./springcloud项目尚医通总结.html-fac9150f.js"),["assets/springcloud项目尚医通总结.html-fac9150f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7a9a6e12":_(()=>v(()=>import("./基础总结.html-421e07da.js"),["assets/基础总结.html-421e07da.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-97a18dc8":_(()=>v(()=>import("./基础总结.html-33bb4d0f.js"),["assets/基础总结.html-33bb4d0f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7a1ee8c4":_(()=>v(()=>import("./swagger.html-aad53fc0.js"),["assets/swagger.html-aad53fc0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2ac42c0b":_(()=>v(()=>import("./activiti6基础笔记.html-c46dc66c.js"),["assets/activiti6基础笔记.html-c46dc66c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-41f030d6":_(()=>v(()=>import("./第一行代码笔记.html-7752af5e.js"),["assets/第一行代码笔记.html-7752af5e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6d241b5d":_(()=>v(()=>import("./Bash基础笔记.html-ab425402.js"),["assets/Bash基础笔记.html-ab425402.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d3bc8416":_(()=>v(()=>import("./常用命令.html-bf6c3e8b.js"),["assets/常用命令.html-bf6c3e8b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d51a49f":_(()=>v(()=>import("./docker命令.html-7d986ec0.js"),["assets/docker命令.html-7d986ec0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5b2d3140":_(()=>v(()=>import("./常用镜像命令.html-96eb2190.js"),["assets/常用镜像命令.html-96eb2190.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-476eae3c":_(()=>v(()=>import("./maven深入学习笔记.html-816c5b57.js"),["assets/maven深入学习笔记.html-816c5b57.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-106ab87c":_(()=>v(()=>import("./yaml语法.html-8897a858.js"),["assets/yaml语法.html-8897a858.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5196b250":_(()=>v(()=>import("./java整合mysql.html-08724e14.js"),["assets/java整合mysql.html-08724e14.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2179c7dc":_(()=>v(()=>import("./基础.html-93d7ad69.js"),["assets/基础.html-93d7ad69.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-468f0997":_(()=>v(()=>import("./Oracle基础总结.html-b15581ed.js"),["assets/Oracle基础总结.html-b15581ed.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4f1a648a":_(()=>v(()=>import("./redis.html-74069ee2.js"),["assets/redis.html-74069ee2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4d18a865":_(()=>v(()=>import("./index.html-4fecfb99.js"),["assets/index.html-4fecfb99.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e25b971c":_(()=>v(()=>import("./index.html-576a18bc.js"),["assets/index.html-576a18bc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9087045a":_(()=>v(()=>import("./StarterSwagger3.html-b2c1d595.js"),["assets/StarterSwagger3.html-b2c1d595.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0357f249":_(()=>v(()=>import("./CSS世界学习笔记.html-955f982a.js"),["assets/CSS世界学习笔记.html-955f982a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c3c11a36":_(()=>v(()=>import("./JavaScript笔记.html-629b27d1.js"),["assets/JavaScript笔记.html-629b27d1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4f00b37c":_(()=>v(()=>import("./JavaScript高级程序设计学习笔记.html-63f2fc41.js"),["assets/JavaScript高级程序设计学习笔记.html-63f2fc41.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-eff6200a":_(()=>v(()=>import("./jquery_ajax笔记.html-c0a91ab7.js"),["assets/jquery_ajax笔记.html-c0a91ab7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-31bde1ba":_(()=>v(()=>import("./疯狂HTML5_CSS3_JavaScript讲义笔记.html-af4095c3.js"),["assets/疯狂HTML5_CSS3_JavaScript讲义笔记.html-af4095c3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f33d5ffc":_(()=>v(()=>import("./疯狂前端开发讲义笔记.html-a956ec23.js"),["assets/疯狂前端开发讲义笔记.html-a956ec23.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6e13ebe8":_(()=>v(()=>import("./JSP_Servlet笔记.html-ec759327.js"),["assets/JSP_Servlet笔记.html-ec759327.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0f87f09a":_(()=>v(()=>import("./JUC.html-364d1b5e.js"),["assets/JUC.html-364d1b5e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3f21900f":_(()=>v(()=>import("./基础.html-c9311ae6.js"),["assets/基础.html-c9311ae6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-36970167":_(()=>v(()=>import("./学习笔记《java开发手册》.html-b98ebebd.js"),["assets/学习笔记《java开发手册》.html-b98ebebd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-86a4c8da":_(()=>v(()=>import("./学习笔记《疯狂Java讲义》.html-c0bf029a.js"),["assets/学习笔记《疯狂Java讲义》.html-c0bf029a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-88b1b032":_(()=>v(()=>import("./学习笔记《码出高效：Java开发手册》.html-425c6cca.js"),["assets/学习笔记《码出高效：Java开发手册》.html-425c6cca.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ab8fb5bc":_(()=>v(()=>import("./抽象类和接口.html-7d3594e2.js"),["assets/抽象类和接口.html-7d3594e2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7ad12457":_(()=>v(()=>import("./集合.html-74609300.js"),["assets/集合.html-74609300.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-08abb1af":_(()=>v(()=>import("./note.html-47416463.js"),["assets/note.html-47416463.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-02544884":_(()=>v(()=>import("./mongodb.html-9b0ed475.js"),["assets/mongodb.html-9b0ed475.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b7c7acc0":_(()=>v(()=>import("./Vue2.5开发去哪儿网App从零基础入门到实战项目学习笔记.html-de0fea7c.js"),["assets/Vue2.5开发去哪儿网App从零基础入门到实战项目学习笔记.html-de0fea7c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4d675cd4":_(()=>v(()=>import("./基础总结.html-a3eca995.js"),["assets/基础总结.html-a3eca995.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3706649a":_(()=>v(()=>import("./404.html-25e75b20.js"),["assets/404.html-25e75b20.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-42ef21ea":_(()=>v(()=>import("./index.html-2125938a.js"),["assets/index.html-2125938a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01af5e14":_(()=>v(()=>import("./index.html-a97aa90a.js"),["assets/index.html-a97aa90a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-145ac574":_(()=>v(()=>import("./index.html-310e9dd1.js"),["assets/index.html-310e9dd1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a1ad3d48":_(()=>v(()=>import("./index.html-85c0acb6.js"),["assets/index.html-85c0acb6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3607025c":_(()=>v(()=>import("./index.html-f42accff.js"),["assets/index.html-f42accff.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-922f6dd8":_(()=>v(()=>import("./index.html-4a182f73.js"),["assets/index.html-4a182f73.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-511fb93a":_(()=>v(()=>import("./index.html-202b386b.js"),["assets/index.html-202b386b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ec27c24a":_(()=>v(()=>import("./index.html-4db8fc12.js"),["assets/index.html-4db8fc12.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4910ef8c":_(()=>v(()=>import("./index.html-757676c3.js"),["assets/index.html-757676c3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-747d1eb2":_(()=>v(()=>import("./index.html-61c1f86b.js"),["assets/index.html-61c1f86b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0265bfe1":_(()=>v(()=>import("./index.html-6f13f038.js"),["assets/index.html-6f13f038.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1883faf2":_(()=>v(()=>import("./index.html-eb3a1387.js"),["assets/index.html-eb3a1387.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1b67f680":_(()=>v(()=>import("./index.html-c1e2b192.js"),["assets/index.html-c1e2b192.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-58bf2fb7":_(()=>v(()=>import("./index.html-7f05ba24.js"),["assets/index.html-7f05ba24.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3264841c":_(()=>v(()=>import("./index.html-31b7a9ac.js"),["assets/index.html-31b7a9ac.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4d2542b5":_(()=>v(()=>import("./index.html-2533de30.js"),["assets/index.html-2533de30.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2289dd5a":_(()=>v(()=>import("./index.html-1b7ed2a1.js"),["assets/index.html-1b7ed2a1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d4424206":_(()=>v(()=>import("./index.html-7e601a54.js"),["assets/index.html-7e601a54.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d973dcc4":_(()=>v(()=>import("./index.html-6d37879c.js"),["assets/index.html-6d37879c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5ad92f12":_(()=>v(()=>import("./index.html-1f3bf3b7.js"),["assets/index.html-1f3bf3b7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2f7a6abe":_(()=>v(()=>import("./index.html-c7aa80f9.js"),["assets/index.html-c7aa80f9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d6ebcfaa":_(()=>v(()=>import("./index.html-2af4cf75.js"),["assets/index.html-2af4cf75.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ce71e5f6":_(()=>v(()=>import("./index.html-191887f7.js"),["assets/index.html-191887f7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-461dbf8e":_(()=>v(()=>import("./index.html-d7a19165.js"),["assets/index.html-d7a19165.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bfa2f968":_(()=>v(()=>import("./index.html-59b289a7.js"),["assets/index.html-59b289a7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-39ad1b74":_(()=>v(()=>import("./index.html-00134673.js"),["assets/index.html-00134673.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b82b2f16":_(()=>v(()=>import("./index.html-d6ec98de.js"),["assets/index.html-d6ec98de.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5329c232":_(()=>v(()=>import("./index.html-acc4c6e3.js"),["assets/index.html-acc4c6e3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d3f8a510":_(()=>v(()=>import("./index.html-7aa61f91.js"),["assets/index.html-7aa61f91.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-846fe2d2":_(()=>v(()=>import("./index.html-377598b8.js"),["assets/index.html-377598b8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cc220acc":_(()=>v(()=>import("./index.html-7cf95dac.js"),["assets/index.html-7cf95dac.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-464b554e":_(()=>v(()=>import("./index.html-22ba78d3.js"),["assets/index.html-22ba78d3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6b69a98c":_(()=>v(()=>import("./index.html-279cd214.js"),["assets/index.html-279cd214.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5bc93818":_(()=>v(()=>import("./index.html-d978945e.js"),["assets/index.html-d978945e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-744d024e":_(()=>v(()=>import("./index.html-c206caab.js"),["assets/index.html-c206caab.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e52c881c":_(()=>v(()=>import("./index.html-9ae15301.js"),["assets/index.html-9ae15301.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-154dc4c4":_(()=>v(()=>import("./index.html-d6a1710f.js"),["assets/index.html-d6a1710f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01560935":_(()=>v(()=>import("./index.html-8d914c0d.js"),["assets/index.html-8d914c0d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-06be9332":_(()=>v(()=>import("./index.html-ce82487f.js"),["assets/index.html-ce82487f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2687e471":_(()=>v(()=>import("./index.html-80ceccc2.js"),["assets/index.html-80ceccc2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7a2dbc66":_(()=>v(()=>import("./index.html-1b45dad2.js"),["assets/index.html-1b45dad2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b7d62b20":_(()=>v(()=>import("./index.html-da096401.js"),["assets/index.html-da096401.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4c00fee6":_(()=>v(()=>import("./index.html-8b91b11d.js"),["assets/index.html-8b91b11d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b312914e":_(()=>v(()=>import("./index.html-4ef2d003.js"),["assets/index.html-4ef2d003.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-65eef823":_(()=>v(()=>import("./index.html-35100e7c.js"),["assets/index.html-35100e7c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2cce94e0":_(()=>v(()=>import("./index.html-f459fb07.js"),["assets/index.html-f459fb07.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-49f5e4d4":_(()=>v(()=>import("./index.html-b32579da.js"),["assets/index.html-b32579da.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-757f190a":_(()=>v(()=>import("./index.html-4fcc018d.js"),["assets/index.html-4fcc018d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-24cf7443":_(()=>v(()=>import("./index.html-1bcc97d7.js"),["assets/index.html-1bcc97d7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-41e71c66":_(()=>v(()=>import("./index.html-8da36f3a.js"),["assets/index.html-8da36f3a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1e1f7399":_(()=>v(()=>import("./index.html-03b6a083.js"),["assets/index.html-03b6a083.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-63bcc623":_(()=>v(()=>import("./index.html-d059f9cf.js"),["assets/index.html-d059f9cf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-08073caa":_(()=>v(()=>import("./index.html-05d4c672.js"),["assets/index.html-05d4c672.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7d0ba9b4":_(()=>v(()=>import("./index.html-850fbc73.js"),["assets/index.html-850fbc73.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0667aa78":_(()=>v(()=>import("./index.html-cc04f872.js"),["assets/index.html-cc04f872.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-59fa8282":_(()=>v(()=>import("./index.html-f8e29683.js"),["assets/index.html-f8e29683.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6fcf7e02":_(()=>v(()=>import("./index.html-1bf6a118.js"),["assets/index.html-1bf6a118.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-323f2b96":_(()=>v(()=>import("./index.html-ac4640ed.js"),["assets/index.html-ac4640ed.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-424a813a":_(()=>v(()=>import("./index.html-545d20fa.js"),["assets/index.html-545d20fa.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-97aefb08":_(()=>v(()=>import("./index.html-8471e94f.js"),["assets/index.html-8471e94f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4e0a37fd":_(()=>v(()=>import("./index.html-db3e2635.js"),["assets/index.html-db3e2635.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9f510020":_(()=>v(()=>import("./index.html-1fc17446.js"),["assets/index.html-1fc17446.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-51acfcdb":_(()=>v(()=>import("./index.html-ab132060.js"),["assets/index.html-ab132060.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-79936c33":_(()=>v(()=>import("./index.html-495678d9.js"),["assets/index.html-495678d9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4baa6010":_(()=>v(()=>import("./index.html-c8a4e04f.js"),["assets/index.html-c8a4e04f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1fc82282":_(()=>v(()=>import("./index.html-ff639984.js"),["assets/index.html-ff639984.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-29da37b8":_(()=>v(()=>import("./index.html-dfc7424f.js"),["assets/index.html-dfc7424f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2303312e":_(()=>v(()=>import("./index.html-99880afa.js"),["assets/index.html-99880afa.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-57c0eac3":_(()=>v(()=>import("./index.html-eee2d9ca.js"),["assets/index.html-eee2d9ca.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-55636bee":_(()=>v(()=>import("./index.html-2da4cb21.js"),["assets/index.html-2da4cb21.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-27fb5a12":_(()=>v(()=>import("./index.html-922821e9.js"),["assets/index.html-922821e9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2831124d":_(()=>v(()=>import("./index.html-a7464760.js"),["assets/index.html-a7464760.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-99b9d3c8":_(()=>v(()=>import("./index.html-ff672503.js"),["assets/index.html-ff672503.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6106c001":_(()=>v(()=>import("./index.html-b10f8fd0.js"),["assets/index.html-b10f8fd0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5904f150":_(()=>v(()=>import("./index.html-8b638182.js"),["assets/index.html-8b638182.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1e90405c":_(()=>v(()=>import("./index.html-55dc130e.js"),["assets/index.html-55dc130e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5e0b61bd":_(()=>v(()=>import("./index.html-1df5768d.js"),["assets/index.html-1df5768d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-297518da":_(()=>v(()=>import("./index.html-b523b4ea.js"),["assets/index.html-b523b4ea.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9717cc36":_(()=>v(()=>import("./index.html-39a19160.js"),["assets/index.html-39a19160.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-25365ef3":_(()=>v(()=>import("./index.html-756a7694.js"),["assets/index.html-756a7694.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-36e5af59":_(()=>v(()=>import("./index.html-93868e6d.js"),["assets/index.html-93868e6d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1bee38ca":_(()=>v(()=>import("./index.html-caf06f5a.js"),["assets/index.html-caf06f5a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8848dfa8":_(()=>v(()=>import("./index.html-421728c4.js"),["assets/index.html-421728c4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a82bc73a":_(()=>v(()=>import("./index.html-b9ef23d3.js"),["assets/index.html-b9ef23d3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3df94dfd":_(()=>v(()=>import("./index.html-5cd0e55c.js"),["assets/index.html-5cd0e55c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0d1f4c3c":_(()=>v(()=>import("./index.html-9d6e3118.js"),["assets/index.html-9d6e3118.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e9c7e408":_(()=>v(()=>import("./index.html-19e36d11.js"),["assets/index.html-19e36d11.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b3142c4c":_(()=>v(()=>import("./index.html-f8ad35e8.js"),["assets/index.html-f8ad35e8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5831b135":_(()=>v(()=>import("./index.html-ca5c5080.js"),["assets/index.html-ca5c5080.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3b951558":_(()=>v(()=>import("./index.html-c164d6a1.js"),["assets/index.html-c164d6a1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-78cbe7bb":_(()=>v(()=>import("./index.html-e94d09ca.js"),["assets/index.html-e94d09ca.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-288e2c56":_(()=>v(()=>import("./index.html-77b01f96.js"),["assets/index.html-77b01f96.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-94c7f10c":_(()=>v(()=>import("./index.html-e3b04c12.js"),["assets/index.html-e3b04c12.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-28a1d8bf":_(()=>v(()=>import("./index.html-3a0377d0.js"),["assets/index.html-3a0377d0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4dc3ee15":_(()=>v(()=>import("./index.html-c4b1ec7b.js"),["assets/index.html-c4b1ec7b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-245f5676":_(()=>v(()=>import("./index.html-279645cf.js"),["assets/index.html-279645cf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-06ebc23c":_(()=>v(()=>import("./index.html-05883a47.js"),["assets/index.html-05883a47.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-794d224b":_(()=>v(()=>import("./index.html-ec988700.js"),["assets/index.html-ec988700.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-65f6d381":_(()=>v(()=>import("./index.html-95297d23.js"),["assets/index.html-95297d23.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b302da92":_(()=>v(()=>import("./index.html-a4dfd1ef.js"),["assets/index.html-a4dfd1ef.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-74379b30":_(()=>v(()=>import("./index.html-c856aea7.js"),["assets/index.html-c856aea7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-921953d4":_(()=>v(()=>import("./index.html-6c5be6d1.js"),["assets/index.html-6c5be6d1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-48e65760":_(()=>v(()=>import("./index.html-cbd54e7b.js"),["assets/index.html-cbd54e7b.js","assets/plugin-vue_export-helper-c27b6911.js"]))};var v1=Symbol(""),m1=F(a1),Gc=$t({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),Kt=F(Gc),un=()=>Kt,Wc=Symbol(""),yn=()=>{const n=kn(Wc);if(!n)throw new Error("usePageFrontmatter() is called without provider.");return n},Kc=Symbol(""),g1=()=>{const n=kn(Kc);if(!n)throw new Error("usePageHead() is called without provider.");return n},b1=Symbol(""),Qc=Symbol(""),vi=()=>{const n=kn(Qc);if(!n)throw new Error("usePageLang() is called without provider.");return n},Yc=Symbol(""),k1=()=>{const n=kn(Yc);if(!n)throw new Error("usePageLayout() is called without provider.");return n},mi=Symbol(""),jt=()=>{const n=kn(mi);if(!n)throw new Error("useRouteLocale() is called without provider.");return n},Cs=F(l1),Xc=()=>Cs,Zc=Symbol(""),$e=()=>{const n=kn(Zc);if(!n)throw new Error("useSiteLocaleData() is called without provider.");return n},f1=Symbol(""),h1="Layout",y1="NotFound",Lt=Oe({resolveLayouts:n=>n.reduce((t,s)=>({...t,...s.layouts}),{}),resolvePageData:async n=>{const t=m1.value[n];return await(t==null?void 0:t())??Gc},resolvePageFrontmatter:n=>n.frontmatter,resolvePageHead:(n,t,s)=>{const e=pn(t.description)?t.description:s.description,a=[...K(t.head)?t.head:[],...s.head,["title",{},n],["meta",{name:"description",content:e}]];return o1(a)},resolvePageHeadTitle:(n,t)=>[n.title,t.title].filter(s=>!!s).join(" | "),resolvePageLang:n=>n.lang||"en",resolvePageLayout:(n,t)=>{let s;if(n.path){const e=n.frontmatter.layout;pn(e)?s=e:s=h1}else s=y1;return t[s]},resolveRouteLocale:(n,t)=>d1(n,t),resolveSiteLocaleData:(n,t)=>({...n,...n.locales[t]})}),Oa=B({name:"ClientOnly",setup(n,t){const s=F(!1);return vn(()=>{s.value=!0}),()=>{var e,a;return s.value?(a=(e=t.slots).default)==null?void 0:a.call(e):null}}}),gi=B({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(n){const t=un(),s=A(()=>Jc[n.pageKey||t.value.key]);return()=>s.value?r(s.value):r("div","404 Not Found")}}),Et=(n={})=>n,xn=n=>Es(n)?n:`/${Uc(n)}`;const _1={};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ts=typeof window<"u";function E1(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const _n=Object.assign;function Ya(n,t){const s={};for(const e in t){const a=t[e];s[e]=yt(a)?a.map(n):n(a)}return s}const ge=()=>{},yt=Array.isArray,A1=/\/$/,w1=n=>n.replace(A1,"");function Xa(n,t,s="/"){let e,a={},l="",i="";const o=t.indexOf("#");let p=t.indexOf("?");return o<p&&o>=0&&(p=-1),p>-1&&(e=t.slice(0,p),l=t.slice(p+1,o>-1?o:t.length),a=n(l)),o>-1&&(e=e||t.slice(0,o),i=t.slice(o,t.length)),e=T1(e??t,s),{fullPath:e+(l&&"?")+l+i,path:e,query:a,hash:i}}function I1(n,t){const s=t.query?n(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function Mo(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function S1(n,t,s){const e=t.matched.length-1,a=s.matched.length-1;return e>-1&&e===a&&Js(t.matched[e],s.matched[a])&&np(t.params,s.params)&&n(t.query)===n(s.query)&&t.hash===s.hash}function Js(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function np(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const s in n)if(!P1(n[s],t[s]))return!1;return!0}function P1(n,t){return yt(n)?$o(n,t):yt(t)?$o(t,n):n===t}function $o(n,t){return yt(t)?n.length===t.length&&n.every((s,e)=>s===t[e]):n.length===1&&n[0]===t}function T1(n,t){if(n.startsWith("/"))return n;if(!n)return t;const s=t.split("/"),e=n.split("/"),a=e[e.length-1];(a===".."||a===".")&&e.push("");let l=s.length-1,i,o;for(i=0;i<e.length;i++)if(o=e[i],o!==".")if(o==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+e.slice(i-(i===e.length?1:0)).join("/")}var Pe;(function(n){n.pop="pop",n.push="push"})(Pe||(Pe={}));var be;(function(n){n.back="back",n.forward="forward",n.unknown=""})(be||(be={}));function x1(n){if(!n)if(Ts){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),w1(n)}const C1=/^[^#]+#/;function L1(n,t){return n.replace(C1,"#")+t}function D1(n,t){const s=document.documentElement.getBoundingClientRect(),e=n.getBoundingClientRect();return{behavior:t.behavior,left:e.left-s.left-(t.left||0),top:e.top-s.top-(t.top||0)}}const Ra=()=>({left:window.pageXOffset,top:window.pageYOffset});function O1(n){let t;if("el"in n){const s=n.el,e=typeof s=="string"&&s.startsWith("#"),a=typeof s=="string"?e?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!a)return;t=D1(a,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Vo(n,t){return(history.state?history.state.position-t:-1)+n}const Al=new Map;function R1(n,t){Al.set(n,t)}function B1(n){const t=Al.get(n);return Al.delete(n),t}let M1=()=>location.protocol+"//"+location.host;function tp(n,t){const{pathname:s,search:e,hash:a}=t,l=n.indexOf("#");if(l>-1){let o=a.includes(n.slice(l))?n.slice(l).length:1,p=a.slice(o);return p[0]!=="/"&&(p="/"+p),Mo(p,"")}return Mo(s,n)+e+a}function $1(n,t,s,e){let a=[],l=[],i=null;const o=({state:m})=>{const g=tp(n,location),f=s.value,w=t.value;let I=0;if(m){if(s.value=g,t.value=m,i&&i===f){i=null;return}I=w?m.position-w.position:0}else e(g);a.forEach(k=>{k(s.value,f,{delta:I,type:Pe.pop,direction:I?I>0?be.forward:be.back:be.unknown})})};function p(){i=s.value}function c(m){a.push(m);const g=()=>{const f=a.indexOf(m);f>-1&&a.splice(f,1)};return l.push(g),g}function u(){const{history:m}=window;m.state&&m.replaceState(_n({},m.state,{scroll:Ra()}),"")}function d(){for(const m of l)m();l=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:p,listen:c,destroy:d}}function jo(n,t,s,e=!1,a=!1){return{back:n,current:t,forward:s,replaced:e,position:window.history.length,scroll:a?Ra():null}}function V1(n){const{history:t,location:s}=window,e={value:tp(n,s)},a={value:t.state};a.value||l(e.value,{back:null,current:e.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(p,c,u){const d=n.indexOf("#"),m=d>-1?(s.host&&document.querySelector("base")?n:n.slice(d))+p:M1()+n+p;try{t[u?"replaceState":"pushState"](c,"",m),a.value=c}catch(g){console.error(g),s[u?"replace":"assign"](m)}}function i(p,c){const u=_n({},t.state,jo(a.value.back,p,a.value.forward,!0),c,{position:a.value.position});l(p,u,!0),e.value=p}function o(p,c){const u=_n({},a.value,t.state,{forward:p,scroll:Ra()});l(u.current,u,!0);const d=_n({},jo(e.value,p,null),{position:u.position+1},c);l(p,d,!1),e.value=p}return{location:e,state:a,push:o,replace:i}}function j1(n){n=x1(n);const t=V1(n),s=$1(n,t.state,t.location,t.replace);function e(l,i=!0){i||s.pauseListeners(),history.go(l)}const a=_n({location:"",base:n,go:e,createHref:L1.bind(null,n)},t,s);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function F1(n){return typeof n=="string"||n&&typeof n=="object"}function sp(n){return typeof n=="string"||typeof n=="symbol"}const Dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ep=Symbol("");var Fo;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Fo||(Fo={}));function Gs(n,t){return _n(new Error,{type:n,[ep]:!0},t)}function xt(n,t){return n instanceof Error&&ep in n&&(t==null||!!(n.type&t))}const No="[^/]+?",N1={sensitive:!1,strict:!1,start:!0,end:!0},q1=/[.+*?^${}()[\]/\\]/g;function z1(n,t){const s=_n({},N1,t),e=[];let a=s.start?"^":"";const l=[];for(const c of n){const u=c.length?[]:[90];s.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const m=c[d];let g=40+(s.sensitive?.25:0);if(m.type===0)d||(a+="/"),a+=m.value.replace(q1,"\\$&"),g+=40;else if(m.type===1){const{value:f,repeatable:w,optional:I,regexp:k}=m;l.push({name:f,repeatable:w,optional:I});const y=k||No;if(y!==No){g+=10;try{new RegExp(`(${y})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${f}" (${y}): `+D.message)}}let C=w?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;d||(C=I&&c.length<2?`(?:/${C})`:"/"+C),I&&(C+="?"),a+=C,g+=20,I&&(g+=-8),w&&(g+=-20),y===".*"&&(g+=-50)}u.push(g)}e.push(u)}if(s.strict&&s.end){const c=e.length-1;e[c][e[c].length-1]+=.7000000000000001}s.strict||(a+="/?"),s.end?a+="$":s.strict&&(a+="(?:/|$)");const i=new RegExp(a,s.sensitive?"":"i");function o(c){const u=c.match(i),d={};if(!u)return null;for(let m=1;m<u.length;m++){const g=u[m]||"",f=l[m-1];d[f.name]=g&&f.repeatable?g.split("/"):g}return d}function p(c){let u="",d=!1;for(const m of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of m)if(g.type===0)u+=g.value;else if(g.type===1){const{value:f,repeatable:w,optional:I}=g,k=f in c?c[f]:"";if(yt(k)&&!w)throw new Error(`Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`);const y=yt(k)?k.join("/"):k;if(!y)if(I)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${f}"`);u+=y}}return u||"/"}return{re:i,score:e,keys:l,parse:o,stringify:p}}function H1(n,t){let s=0;for(;s<n.length&&s<t.length;){const e=t[s]-n[s];if(e)return e;s++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function U1(n,t){let s=0;const e=n.score,a=t.score;for(;s<e.length&&s<a.length;){const l=H1(e[s],a[s]);if(l)return l;s++}if(Math.abs(a.length-e.length)===1){if(qo(e))return 1;if(qo(a))return-1}return a.length-e.length}function qo(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const J1={type:0,value:""},G1=/[a-zA-Z0-9_]/;function W1(n){if(!n)return[[]];if(n==="/")return[[J1]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(g){throw new Error(`ERR (${s})/"${c}": ${g}`)}let s=0,e=s;const a=[];let l;function i(){l&&a.push(l),l=[]}let o=0,p,c="",u="";function d(){c&&(s===0?l.push({type:0,value:c}):s===1||s===2||s===3?(l.length>1&&(p==="*"||p==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:c,regexp:u,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):t("Invalid state to consume buffer"),c="")}function m(){c+=p}for(;o<n.length;){if(p=n[o++],p==="\\"&&s!==2){e=s,s=4;continue}switch(s){case 0:p==="/"?(c&&d(),i()):p===":"?(d(),s=1):m();break;case 4:m(),s=e;break;case 1:p==="("?s=2:G1.test(p)?m():(d(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&o--);break;case 2:p===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+p:s=3:u+=p;break;case 3:d(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&o--,u="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),i(),a}function K1(n,t,s){const e=z1(W1(n.path),s),a=_n(e,{record:n,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Q1(n,t){const s=[],e=new Map;t=Uo({strict:!1,end:!0,sensitive:!1},t);function a(u){return e.get(u)}function l(u,d,m){const g=!m,f=Y1(u);f.aliasOf=m&&m.record;const w=Uo(t,u),I=[f];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of C)I.push(_n({},f,{components:m?m.record.components:f.components,path:D,aliasOf:m?m.record:f}))}let k,y;for(const C of I){const{path:D}=C;if(d&&D[0]!=="/"){const z=d.record.path,O=z[z.length-1]==="/"?"":"/";C.path=d.record.path+(D&&O+D)}if(k=K1(C,d,w),m?m.alias.push(k):(y=y||k,y!==k&&y.alias.push(k),g&&u.name&&!Ho(k)&&i(u.name)),f.children){const z=f.children;for(let O=0;O<z.length;O++)l(z[O],k,m&&m.children[O])}m=m||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&p(k)}return y?()=>{i(y)}:ge}function i(u){if(sp(u)){const d=e.get(u);d&&(e.delete(u),s.splice(s.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=s.indexOf(u);d>-1&&(s.splice(d,1),u.record.name&&e.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function o(){return s}function p(u){let d=0;for(;d<s.length&&U1(u,s[d])>=0&&(u.record.path!==s[d].record.path||!ap(u,s[d]));)d++;s.splice(d,0,u),u.record.name&&!Ho(u)&&e.set(u.record.name,u)}function c(u,d){let m,g={},f,w;if("name"in u&&u.name){if(m=e.get(u.name),!m)throw Gs(1,{location:u});w=m.record.name,g=_n(zo(d.params,m.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&zo(u.params,m.keys.map(y=>y.name))),f=m.stringify(g)}else if("path"in u)f=u.path,m=s.find(y=>y.re.test(f)),m&&(g=m.parse(f),w=m.record.name);else{if(m=d.name?e.get(d.name):s.find(y=>y.re.test(d.path)),!m)throw Gs(1,{location:u,currentLocation:d});w=m.record.name,g=_n({},d.params,u.params),f=m.stringify(g)}const I=[];let k=m;for(;k;)I.unshift(k.record),k=k.parent;return{name:w,path:f,params:g,matched:I,meta:Z1(I)}}return n.forEach(u=>l(u)),{addRoute:l,resolve:c,removeRoute:i,getRoutes:o,getRecordMatcher:a}}function zo(n,t){const s={};for(const e of t)e in n&&(s[e]=n[e]);return s}function Y1(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:X1(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function X1(n){const t={},s=n.props||!1;if("component"in n)t.default=s;else for(const e in n.components)t[e]=typeof s=="object"?s[e]:s;return t}function Ho(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Z1(n){return n.reduce((t,s)=>_n(t,s.meta),{})}function Uo(n,t){const s={};for(const e in n)s[e]=e in t?t[e]:n[e];return s}function ap(n,t){return t.children.some(s=>s===n||ap(n,s))}const lp=/#/g,ng=/&/g,tg=/\//g,sg=/=/g,eg=/\?/g,ip=/\+/g,ag=/%5B/g,lg=/%5D/g,op=/%5E/g,ig=/%60/g,rp=/%7B/g,og=/%7C/g,cp=/%7D/g,rg=/%20/g;function bi(n){return encodeURI(""+n).replace(og,"|").replace(ag,"[").replace(lg,"]")}function cg(n){return bi(n).replace(rp,"{").replace(cp,"}").replace(op,"^")}function wl(n){return bi(n).replace(ip,"%2B").replace(rg,"+").replace(lp,"%23").replace(ng,"%26").replace(ig,"`").replace(rp,"{").replace(cp,"}").replace(op,"^")}function pg(n){return wl(n).replace(sg,"%3D")}function ug(n){return bi(n).replace(lp,"%23").replace(eg,"%3F")}function dg(n){return n==null?"":ug(n).replace(tg,"%2F")}function Ea(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function vg(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let a=0;a<e.length;++a){const l=e[a].replace(ip," "),i=l.indexOf("="),o=Ea(i<0?l:l.slice(0,i)),p=i<0?null:Ea(l.slice(i+1));if(o in t){let c=t[o];yt(c)||(c=t[o]=[c]),c.push(p)}else t[o]=p}return t}function Jo(n){let t="";for(let s in n){const e=n[s];if(s=pg(s),e==null){e!==void 0&&(t+=(t.length?"&":"")+s);continue}(yt(e)?e.map(l=>l&&wl(l)):[e&&wl(e)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+s,l!=null&&(t+="="+l))})}return t}function mg(n){const t={};for(const s in n){const e=n[s];e!==void 0&&(t[s]=yt(e)?e.map(a=>a==null?null:""+a):e==null?e:""+e)}return t}const gg=Symbol(""),Go=Symbol(""),Ba=Symbol(""),ki=Symbol(""),Il=Symbol("");function re(){let n=[];function t(e){return n.push(e),()=>{const a=n.indexOf(e);a>-1&&n.splice(a,1)}}function s(){n=[]}return{add:t,list:()=>n.slice(),reset:s}}function Qt(n,t,s,e,a){const l=e&&(e.enterCallbacks[a]=e.enterCallbacks[a]||[]);return()=>new Promise((i,o)=>{const p=d=>{d===!1?o(Gs(4,{from:s,to:t})):d instanceof Error?o(d):F1(d)?o(Gs(2,{from:t,to:d})):(l&&e.enterCallbacks[a]===l&&typeof d=="function"&&l.push(d),i())},c=n.call(e&&e.instances[a],t,s,p);let u=Promise.resolve(c);n.length<3&&(u=u.then(p)),u.catch(d=>o(d))})}function Za(n,t,s,e){const a=[];for(const l of n)for(const i in l.components){let o=l.components[i];if(!(t!=="beforeRouteEnter"&&!l.instances[i]))if(bg(o)){const c=(o.__vccOpts||o)[t];c&&a.push(Qt(c,s,e,l,i))}else{let p=o();a.push(()=>p.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${l.path}"`));const u=E1(c)?c.default:c;l.components[i]=u;const m=(u.__vccOpts||u)[t];return m&&Qt(m,s,e,l,i)()}))}}return a}function bg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Sl(n){const t=kn(Ba),s=kn(ki),e=A(()=>t.resolve(gs(n.to))),a=A(()=>{const{matched:p}=e.value,{length:c}=p,u=p[c-1],d=s.matched;if(!u||!d.length)return-1;const m=d.findIndex(Js.bind(null,u));if(m>-1)return m;const g=Wo(p[c-2]);return c>1&&Wo(u)===g&&d[d.length-1].path!==g?d.findIndex(Js.bind(null,p[c-2])):m}),l=A(()=>a.value>-1&&yg(s.params,e.value.params)),i=A(()=>a.value>-1&&a.value===s.matched.length-1&&np(s.params,e.value.params));function o(p={}){return hg(p)?t[gs(n.replace)?"replace":"push"](gs(n.to)).catch(ge):Promise.resolve()}return{route:e,href:A(()=>e.value.href),isActive:l,isExactActive:i,navigate:o}}const kg=B({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sl,setup(n,{slots:t}){const s=Oe(Sl(n)),{options:e}=kn(Ba),a=A(()=>({[Ko(n.activeClass,e.linkActiveClass,"router-link-active")]:s.isActive,[Ko(n.exactActiveClass,e.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const l=t.default&&t.default(s);return n.custom?l:r("a",{"aria-current":s.isExactActive?n.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:a.value},l)}}}),fg=kg;function hg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function yg(n,t){for(const s in t){const e=t[s],a=n[s];if(typeof e=="string"){if(e!==a)return!1}else if(!yt(a)||a.length!==e.length||e.some((l,i)=>l!==a[i]))return!1}return!0}function Wo(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ko=(n,t,s)=>n??t??s,_g=B({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:s}){const e=kn(Il),a=A(()=>n.route||e.value),l=kn(Go,0),i=A(()=>{let c=gs(l);const{matched:u}=a.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),o=A(()=>a.value.matched[i.value]);ft(Go,A(()=>i.value+1)),ft(gg,o),ft(Il,a);const p=F();return en(()=>[p.value,o.value,n.name],([c,u,d],[m,g,f])=>{u&&(u.instances[d]=c,g&&g!==u&&c&&c===m&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Js(u,g)||!m)&&(u.enterCallbacks[d]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=a.value,u=n.name,d=o.value,m=d&&d.components[u];if(!m)return Qo(s.default,{Component:m,route:c});const g=d.props[u],f=g?g===!0?c.params:typeof g=="function"?g(c):g:null,I=r(m,_n({},f,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(d.instances[u]=null)},ref:p}));return Qo(s.default,{Component:I,route:c})||I}}});function Qo(n,t){if(!n)return null;const s=n(t);return s.length===1?s[0]:s}const pp=_g;function Eg(n){const t=Q1(n.routes,n),s=n.parseQuery||vg,e=n.stringifyQuery||Jo,a=n.history,l=re(),i=re(),o=re(),p=Cn(Dt);let c=Dt;Ts&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ya.bind(null,T=>""+T),d=Ya.bind(null,dg),m=Ya.bind(null,Ea);function g(T,q){let V,Q;return sp(T)?(V=t.getRecordMatcher(T),Q=q):Q=T,t.addRoute(Q,V)}function f(T){const q=t.getRecordMatcher(T);q&&t.removeRoute(q)}function w(){return t.getRoutes().map(T=>T.record)}function I(T){return!!t.getRecordMatcher(T)}function k(T,q){if(q=_n({},q||p.value),typeof T=="string"){const E=Xa(s,T,q.path),S=t.resolve({path:E.path},q),x=a.createHref(E.fullPath);return _n(E,S,{params:m(S.params),hash:Ea(E.hash),redirectedFrom:void 0,href:x})}let V;if("path"in T)V=_n({},T,{path:Xa(s,T.path,q.path).path});else{const E=_n({},T.params);for(const S in E)E[S]==null&&delete E[S];V=_n({},T,{params:d(E)}),q.params=d(q.params)}const Q=t.resolve(V,q),mn=T.hash||"";Q.params=u(m(Q.params));const b=I1(e,_n({},T,{hash:cg(mn),path:Q.path})),h=a.createHref(b);return _n({fullPath:b,hash:mn,query:e===Jo?mg(T.query):T.query||{}},Q,{redirectedFrom:void 0,href:h})}function y(T){return typeof T=="string"?Xa(s,T,p.value.path):_n({},T)}function C(T,q){if(c!==T)return Gs(8,{from:q,to:T})}function D(T){return $(T)}function z(T){return D(_n(y(T),{replace:!0}))}function O(T){const q=T.matched[T.matched.length-1];if(q&&q.redirect){const{redirect:V}=q;let Q=typeof V=="function"?V(T):V;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=y(Q):{path:Q},Q.params={}),_n({query:T.query,hash:T.hash,params:"path"in Q?{}:T.params},Q)}}function $(T,q){const V=c=k(T),Q=p.value,mn=T.state,b=T.force,h=T.replace===!0,E=O(V);if(E)return $(_n(y(E),{state:typeof E=="object"?_n({},mn,E.state):mn,force:b,replace:h}),q||V);const S=V;S.redirectedFrom=q;let x;return!b&&S1(e,Q,V)&&(x=Gs(16,{to:S,from:Q}),Wn(Q,Q,!0,!1)),(x?Promise.resolve(x):U(S,Q)).catch(L=>xt(L)?xt(L,2)?L:wt(L):tn(L,S,Q)).then(L=>{if(L){if(xt(L,2))return $(_n({replace:h},y(L.to),{state:typeof L.to=="object"?_n({},mn,L.to.state):mn,force:b}),q||S)}else L=J(S,Q,!0,h,mn);return an(S,Q,L),L})}function P(T,q){const V=C(T,q);return V?Promise.reject(V):Promise.resolve()}function H(T){const q=at.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(T):T()}function U(T,q){let V;const[Q,mn,b]=Ag(T,q);V=Za(Q.reverse(),"beforeRouteLeave",T,q);for(const E of Q)E.leaveGuards.forEach(S=>{V.push(Qt(S,T,q))});const h=P.bind(null,T,q);return V.push(h),Rn(V).then(()=>{V=[];for(const E of l.list())V.push(Qt(E,T,q));return V.push(h),Rn(V)}).then(()=>{V=Za(mn,"beforeRouteUpdate",T,q);for(const E of mn)E.updateGuards.forEach(S=>{V.push(Qt(S,T,q))});return V.push(h),Rn(V)}).then(()=>{V=[];for(const E of b)if(E.beforeEnter)if(yt(E.beforeEnter))for(const S of E.beforeEnter)V.push(Qt(S,T,q));else V.push(Qt(E.beforeEnter,T,q));return V.push(h),Rn(V)}).then(()=>(T.matched.forEach(E=>E.enterCallbacks={}),V=Za(b,"beforeRouteEnter",T,q),V.push(h),Rn(V))).then(()=>{V=[];for(const E of i.list())V.push(Qt(E,T,q));return V.push(h),Rn(V)}).catch(E=>xt(E,8)?E:Promise.reject(E))}function an(T,q,V){o.list().forEach(Q=>H(()=>Q(T,q,V)))}function J(T,q,V,Q,mn){const b=C(T,q);if(b)return b;const h=q===Dt,E=Ts?history.state:{};V&&(Q||h?a.replace(T.fullPath,_n({scroll:h&&E&&E.scroll},mn)):a.push(T.fullPath,mn)),p.value=T,Wn(T,q,V,h),wt()}let Z;function G(){Z||(Z=a.listen((T,q,V)=>{if(!Nt.listening)return;const Q=k(T),mn=O(Q);if(mn){$(_n(mn,{replace:!0}),Q).catch(ge);return}c=Q;const b=p.value;Ts&&R1(Vo(b.fullPath,V.delta),Ra()),U(Q,b).catch(h=>xt(h,12)?h:xt(h,2)?($(h.to,Q).then(E=>{xt(E,20)&&!V.delta&&V.type===Pe.pop&&a.go(-1,!1)}).catch(ge),Promise.reject()):(V.delta&&a.go(-V.delta,!1),tn(h,Q,b))).then(h=>{h=h||J(Q,b,!1),h&&(V.delta&&!xt(h,8)?a.go(-V.delta,!1):V.type===Pe.pop&&xt(h,20)&&a.go(-1,!1)),an(Q,b,h)}).catch(ge)}))}let Tn=re(),on=re(),hn;function tn(T,q,V){wt(T);const Q=on.list();return Q.length?Q.forEach(mn=>mn(T,q,V)):console.error(T),Promise.reject(T)}function ut(){return hn&&p.value!==Dt?Promise.resolve():new Promise((T,q)=>{Tn.add([T,q])})}function wt(T){return hn||(hn=!T,G(),Tn.list().forEach(([q,V])=>T?V(T):q()),Tn.reset()),T}function Wn(T,q,V,Q){const{scrollBehavior:mn}=n;if(!Ts||!mn)return Promise.resolve();const b=!V&&B1(Vo(T.fullPath,0))||(Q||!V)&&history.state&&history.state.scroll||null;return as().then(()=>mn(T,q,b)).then(h=>h&&O1(h)).catch(h=>tn(h,T,q))}const Dn=T=>a.go(T);let Tt;const at=new Set,Nt={currentRoute:p,listening:!0,addRoute:g,removeRoute:f,hasRoute:I,getRoutes:w,resolve:k,options:n,push:D,replace:z,go:Dn,back:()=>Dn(-1),forward:()=>Dn(1),beforeEach:l.add,beforeResolve:i.add,afterEach:o.add,onError:on.add,isReady:ut,install(T){const q=this;T.component("RouterLink",fg),T.component("RouterView",pp),T.config.globalProperties.$router=q,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(p)}),Ts&&!Tt&&p.value===Dt&&(Tt=!0,D(a.location).catch(mn=>{}));const V={};for(const mn in Dt)Object.defineProperty(V,mn,{get:()=>p.value[mn],enumerable:!0});T.provide(Ba,q),T.provide(ki,tc(V)),T.provide(Il,p);const Q=T.unmount;at.add(T),T.unmount=function(){at.delete(T),at.size<1&&(c=Dt,Z&&Z(),Z=null,p.value=Dt,Tt=!1,hn=!1),Q()}}};function Rn(T){return T.reduce((q,V)=>q.then(()=>H(V)),Promise.resolve())}return Nt}function Ag(n,t){const s=[],e=[],a=[],l=Math.max(t.matched.length,n.matched.length);for(let i=0;i<l;i++){const o=t.matched[i];o&&(n.matched.find(c=>Js(c,o))?e.push(o):s.push(o));const p=n.matched[i];p&&(t.matched.find(c=>Js(c,p))||a.push(p))}return[s,e,a]}function zn(){return kn(Ba)}function At(){return kn(ki)}var Jn=Uint8Array,Ls=Uint16Array,wg=Int32Array,up=new Jn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dp=new Jn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ig=new Jn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),vp=function(n,t){for(var s=new Ls(31),e=0;e<31;++e)s[e]=t+=1<<n[e-1];for(var a=new wg(s[30]),e=1;e<30;++e)for(var l=s[e];l<s[e+1];++l)a[l]=l-s[e]<<5|e;return{b:s,r:a}},mp=vp(up,2),gp=mp.b,Sg=mp.r;gp[28]=258,Sg[258]=28;var Pg=vp(dp,0),Tg=Pg.b,Pl=new Ls(32768);for(var Pn=0;Pn<32768;++Pn){var Ut=(Pn&43690)>>1|(Pn&21845)<<1;Ut=(Ut&52428)>>2|(Ut&13107)<<2,Ut=(Ut&61680)>>4|(Ut&3855)<<4,Pl[Pn]=((Ut&65280)>>8|(Ut&255)<<8)>>1}var ke=function(n,t,s){for(var e=n.length,a=0,l=new Ls(t);a<e;++a)n[a]&&++l[n[a]-1];var i=new Ls(t);for(a=1;a<t;++a)i[a]=i[a-1]+l[a-1]<<1;var o;if(s){o=new Ls(1<<t);var p=15-t;for(a=0;a<e;++a)if(n[a])for(var c=a<<4|n[a],u=t-n[a],d=i[n[a]-1]++<<u,m=d|(1<<u)-1;d<=m;++d)o[Pl[d]>>p]=c}else for(o=new Ls(e),a=0;a<e;++a)n[a]&&(o[a]=Pl[i[n[a]-1]++]>>15-n[a]);return o},Ve=new Jn(288);for(var Pn=0;Pn<144;++Pn)Ve[Pn]=8;for(var Pn=144;Pn<256;++Pn)Ve[Pn]=9;for(var Pn=256;Pn<280;++Pn)Ve[Pn]=7;for(var Pn=280;Pn<288;++Pn)Ve[Pn]=8;var bp=new Jn(32);for(var Pn=0;Pn<32;++Pn)bp[Pn]=5;var xg=ke(Ve,9,1),Cg=ke(bp,5,1),nl=function(n){for(var t=n[0],s=1;s<n.length;++s)n[s]>t&&(t=n[s]);return t},vt=function(n,t,s){var e=t/8|0;return(n[e]|n[e+1]<<8)>>(t&7)&s},tl=function(n,t){var s=t/8|0;return(n[s]|n[s+1]<<8|n[s+2]<<16)>>(t&7)},Lg=function(n){return(n+7)/8|0},fi=function(n,t,s){(t==null||t<0)&&(t=0),(s==null||s>n.length)&&(s=n.length);var e=new Jn(s-t);return e.set(n.subarray(t,s)),e},Dg=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ot=function(n,t,s){var e=new Error(t||Dg[n]);if(e.code=n,Error.captureStackTrace&&Error.captureStackTrace(e,ot),!s)throw e;return e},Og=function(n,t,s,e){var a=n.length,l=e?e.length:0;if(!a||t.f&&!t.l)return s||new Jn(0);var i=!s||t.i!=2,o=t.i;s||(s=new Jn(a*3));var p=function(Q){var mn=s.length;if(Q>mn){var b=new Jn(Math.max(mn*2,Q));b.set(s),s=b}},c=t.f||0,u=t.p||0,d=t.b||0,m=t.l,g=t.d,f=t.m,w=t.n,I=a*8;do{if(!m){c=vt(n,u,1);var k=vt(n,u+1,3);if(u+=3,k)if(k==1)m=xg,g=Cg,f=9,w=5;else if(k==2){var z=vt(n,u,31)+257,O=vt(n,u+10,15)+4,$=z+vt(n,u+5,31)+1;u+=14;for(var P=new Jn($),H=new Jn(19),U=0;U<O;++U)H[Ig[U]]=vt(n,u+U*3,7);u+=O*3;for(var an=nl(H),J=(1<<an)-1,Z=ke(H,an,1),U=0;U<$;){var G=Z[vt(n,u,J)];u+=G&15;var y=G>>4;if(y<16)P[U++]=y;else{var Tn=0,on=0;for(y==16?(on=3+vt(n,u,3),u+=2,Tn=P[U-1]):y==17?(on=3+vt(n,u,7),u+=3):y==18&&(on=11+vt(n,u,127),u+=7);on--;)P[U++]=Tn}}var hn=P.subarray(0,z),tn=P.subarray(z);f=nl(hn),w=nl(tn),m=ke(hn,f,1),g=ke(tn,w,1)}else ot(1);else{var y=Lg(u)+4,C=n[y-4]|n[y-3]<<8,D=y+C;if(D>a){o&&ot(0);break}i&&p(d+C),s.set(n.subarray(y,D),d),t.b=d+=C,t.p=u=D*8,t.f=c;continue}if(u>I){o&&ot(0);break}}i&&p(d+131072);for(var ut=(1<<f)-1,wt=(1<<w)-1,Wn=u;;Wn=u){var Tn=m[tl(n,u)&ut],Dn=Tn>>4;if(u+=Tn&15,u>I){o&&ot(0);break}if(Tn||ot(2),Dn<256)s[d++]=Dn;else if(Dn==256){Wn=u,m=null;break}else{var Tt=Dn-254;if(Dn>264){var U=Dn-257,at=up[U];Tt=vt(n,u,(1<<at)-1)+gp[U],u+=at}var Nt=g[tl(n,u)&wt],Rn=Nt>>4;Nt||ot(3),u+=Nt&15;var tn=Tg[Rn];if(Rn>3){var at=dp[Rn];tn+=tl(n,u)&(1<<at)-1,u+=at}if(u>I){o&&ot(0);break}i&&p(d+131072);var T=d+Tt;if(d<tn){var q=l-tn,V=Math.min(tn,T);for(q+d<0&&ot(3);d<V;++d)s[d]=e[q+d]}for(;d<T;d+=4)s[d]=s[d-tn],s[d+1]=s[d+1-tn],s[d+2]=s[d+2-tn],s[d+3]=s[d+3-tn];d=T}}t.l=m,t.p=Wn,t.b=d,t.f=c,m&&(c=1,t.m=f,t.d=g,t.n=w)}while(!c);return d==s.length?s:fi(s,0,d)},Rg=new Jn(0),Bg=function(n,t){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&ot(6,"invalid zlib data"),(n[1]>>5&1)==+!t&&ot(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function Mg(n,t){return Og(n.subarray(Bg(n,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var Yo=typeof TextEncoder<"u"&&new TextEncoder,Tl=typeof TextDecoder<"u"&&new TextDecoder,$g=0;try{Tl.decode(Rg,{stream:!0}),$g=1}catch{}var Vg=function(n){for(var t="",s=0;;){var e=n[s++],a=(e>127)+(e>223)+(e>239);if(s+a>n.length)return{s:t,r:fi(n,s-1)};a?a==3?(e=((e&15)<<18|(n[s++]&63)<<12|(n[s++]&63)<<6|n[s++]&63)-65536,t+=String.fromCharCode(55296|e>>10,56320|e&1023)):a&1?t+=String.fromCharCode((e&31)<<6|n[s++]&63):t+=String.fromCharCode((e&15)<<12|(n[s++]&63)<<6|n[s++]&63):t+=String.fromCharCode(e)}};function jg(n,t){if(t){for(var s=new Jn(n.length),e=0;e<n.length;++e)s[e]=n.charCodeAt(e);return s}if(Yo)return Yo.encode(n);for(var a=n.length,l=new Jn(n.length+(n.length>>1)),i=0,o=function(u){l[i++]=u},e=0;e<a;++e){if(i+5>l.length){var p=new Jn(i+8+(a-e<<1));p.set(l),l=p}var c=n.charCodeAt(e);c<128||t?o(c):c<2048?(o(192|c>>6),o(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|n.charCodeAt(++e)&1023,o(240|c>>18),o(128|c>>12&63),o(128|c>>6&63),o(128|c&63)):(o(224|c>>12),o(128|c>>6&63),o(128|c&63))}return fi(l,0,i)}function Fg(n,t){if(t){for(var s="",e=0;e<n.length;e+=16384)s+=String.fromCharCode.apply(null,n.subarray(e,e+16384));return s}else{if(Tl)return Tl.decode(n);var a=Vg(n),l=a.s,s=a.r;return s.length&&ot(8),l}}const ln=({name:n="",color:t="currentColor"},{slots:s})=>{var e;return r("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${n}-icon`],viewBox:"0 0 1024 1024",fill:t,"aria-label":`${n} icon`},(e=s.default)==null?void 0:e.call(s))};ln.displayName="IconBase";const is=({size:n=48,stroke:t=4,wrapper:s=!0,height:e=2*n})=>{const a=r("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[r("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),r("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round"},[r("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),r("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return s?r("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${e}px`},a):a};is.displayName="LoadingIcon";const kp=(n,{slots:t})=>{var s;return(s=t.default)==null?void 0:s.call(t)},hi=(n="")=>{if(n){if(typeof n=="number")return new Date(n);const t=Date.parse(n.toString());if(!Number.isNaN(t))return new Date(t)}return null},Ma=(n,t)=>{let s=1;for(let e=0;e<n.length;e++)s+=n.charCodeAt(e),s+=s<<10,s^=s>>6;return s+=s<<3,s^=s>>11,s%t},yi=Array.isArray,Ng=n=>typeof n=="function",qg=n=>typeof n=="string";var zg=n=>n.startsWith("ftp://"),_i=n=>/^(https?:)?\/\//.test(n),Hg=/.md((\?|#).*)?$/,Ug=(n,t="/")=>!!(_i(n)||zg(n)||n.startsWith("/")&&!n.startsWith(t)&&!Hg.test(n)),fe=n=>Object.prototype.toString.call(n)==="[object Object]";function Jg(){const n=F(!1);return ls()&&vn(()=>{n.value=!0}),n}function Gg(n){return Jg(),A(()=>!!n())}const Wg=n=>typeof n=="function",Mt=n=>typeof n=="string",Ws=(n,t)=>Mt(n)&&n.startsWith(t),Is=(n,t)=>Mt(n)&&n.endsWith(t),te=Object.entries,Kg=Object.fromEntries,et=Object.keys,Xo=(n,...t)=>{if(t.length===0)return n;const s=t.shift()||null;return s&&te(s).forEach(([e,a])=>{e==="__proto__"||e==="constructor"||(fe(n[e])&&fe(a)?Xo(n[e],a):yi(a)?n[e]=[...a]:fe(a)?n[e]={...a}:n[e]=s[e])}),Xo(n,...t)},Qg=n=>(n.endsWith(".md")&&(n=`${n.slice(0,-3)}.html`),!n.endsWith("/")&&!n.endsWith(".html")&&(n=`${n}.html`),n=n.replace(/(^|\/)(?:README|index).html$/i,"$1"),n),fp=n=>{const[t,s=""]=n.split("#");return t?`${Qg(t)}${s?`#${s}`:""}`:n},Zo=n=>fe(n)&&Mt(n.name),Te=(n,t=!1)=>n?yi(n)?n.map(s=>Mt(s)?{name:s}:Zo(s)?s:null).filter(s=>s!==null):Mt(n)?[{name:n}]:Zo(n)?[n]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t?"":"| false"} | undefined\`, but got`,n),[]):[],hp=(n,t)=>{if(n){if(yi(n)&&n.every(Mt))return n;if(Mt(n))return[n];console.error(`Expect ${t||"value"} to be \`string[] | string | undefined\`, but got`,n)}return[]},yp=n=>hp(n,"category"),_p=n=>hp(n,"tag"),$a=n=>Ws(n,"/");let Yg=class{constructor(){Na(this,"containerElement");Na(this,"messageElements",{});const t="message-container",s=document.getElementById(t);s?this.containerElement=s:(this.containerElement=document.createElement("div"),this.containerElement.id=t,document.body.appendChild(this.containerElement))}pop(t,s=2e3){const e=document.createElement("div"),a=Date.now();return e.className="message move-in",e.innerHTML=t,this.containerElement.appendChild(e),this.messageElements[a]=e,s>0&&setTimeout(()=>{this.close(a)},s),a}close(t){if(t){const s=this.messageElements[t];s.classList.remove("move-in"),s.classList.add("move-out"),s.addEventListener("animationend",()=>{s.remove(),delete this.messageElements[t]})}else et(this.messageElements).forEach(s=>this.close(Number(s)))}destroy(){document.body.removeChild(this.containerElement)}};const Ep=/#.*$/u,Xg=n=>{const t=Ep.exec(n);return t?t[0]:""},nr=n=>decodeURI(n).replace(Ep,"").replace(/(index)?\.(md|html)$/,""),Ei=(n,t)=>{if(t===void 0)return!1;const s=nr(n.path),e=nr(t),a=Xg(t);return a?a===n.hash&&(!e||s===e):s===e},fs=n=>{const t=atob(n);return Fg(Mg(jg(t,!0)))},Zg=n=>_i(n)?n:`https://github.com/${n}`,Ap=n=>!_i(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,Ks=(n,...t)=>{const s=n.resolve(...t),e=s.matched[s.matched.length-1];if(!(e!=null&&e.redirect))return s;const{redirect:a}=e,l=Ng(a)?a(s):a,i=qg(l)?{path:l}:l;return Ks(n,{hash:s.hash,query:s.query,params:s.params,...i})},n0=n=>{if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget){const t=n.currentTarget.getAttribute("target");if(t!=null&&t.match(/\b_blank\b/i))return}return n.preventDefault(),!0}},Vn=({to:n=""},{slots:t})=>{var s;const e=zn(),a=(l={})=>n0(l)?e.push(n).catch():Promise.resolve();return r("a",{class:"vp-link",href:xn(fp(n)),onClick:a},(s=t.default)==null?void 0:s.call(t))};Vn.displayName="VPLink";const wp=()=>r(ln,{name:"github"},()=>r("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));wp.displayName="GitHubIcon";const Ip=()=>r(ln,{name:"gitlab"},()=>r("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));Ip.displayName="GitLabIcon";const Sp=()=>r(ln,{name:"gitee"},()=>r("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Sp.displayName="GiteeIcon";const Pp=()=>r(ln,{name:"bitbucket"},()=>r("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));Pp.displayName="BitbucketIcon";const Tp=()=>r(ln,{name:"source"},()=>r("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));Tp.displayName="SourceIcon";const ht=(n,t)=>{const s=t?t._instance:ls();return fe(s==null?void 0:s.appContext.components)&&(n in s.appContext.components||ct(n)in s.appContext.components||De(ct(n))in s.appContext.components)},t0=()=>Gg(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),s0=()=>{const n=t0();return A(()=>n.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},se=n=>{const t=jt();return A(()=>n[t.value])};var e0=Object.defineProperty,a0=Object.defineProperties,l0=Object.getOwnPropertyDescriptors,tr=Object.getOwnPropertySymbols,i0=Object.prototype.hasOwnProperty,o0=Object.prototype.propertyIsEnumerable,sr=(n,t,s)=>t in n?e0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,r0=(n,t)=>{for(var s in t||(t={}))i0.call(t,s)&&sr(n,s,t[s]);if(tr)for(var s of tr(t))o0.call(t,s)&&sr(n,s,t[s]);return n},c0=(n,t)=>a0(n,l0(t));function er(n,t){var s;const e=Cn();return uc(()=>{e.value=n()},c0(r0({},t),{flush:(s=t==null?void 0:t.flush)!=null?s:"sync"})),$t(e)}function _t(n){return Hr()?(Dd(n),!0):!1}function qn(n){return typeof n=="function"?n():gs(n)}const hs=typeof window<"u",es=()=>{},xl=p0();function p0(){var n;return hs&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Ai(n,t){function s(...e){return new Promise((a,l)=>{Promise.resolve(n(()=>t.apply(this,e),{fn:t,thisArg:this,args:e})).then(a).catch(l)})}return s}const xp=n=>n();function u0(n,t={}){let s,e,a=es;const l=o=>{clearTimeout(o),a(),a=es};return o=>{const p=qn(n),c=qn(t.maxWait);return s&&l(s),p<=0||c!==void 0&&c<=0?(e&&(l(e),e=null),Promise.resolve(o())):new Promise((u,d)=>{a=t.rejectOnCancel?d:u,c&&!e&&(e=setTimeout(()=>{s&&l(s),e=null,u(o())},c)),s=setTimeout(()=>{e&&l(e),e=null,u(o())},p)})}}function d0(n,t=!0,s=!0,e=!1){let a=0,l,i=!0,o=es,p;const c=()=>{l&&(clearTimeout(l),l=void 0,o(),o=es)};return d=>{const m=qn(n),g=Date.now()-a,f=()=>p=d();return c(),m<=0?(a=Date.now(),f()):(g>m&&(s||!i)?(a=Date.now(),f()):t&&(p=new Promise((w,I)=>{o=e?I:w,l=setTimeout(()=>{a=Date.now(),i=!0,w(f()),c()},Math.max(0,m-g))})),!s&&!l&&(l=setTimeout(()=>i=!0,m)),i=!1,p)}}function v0(n=xp){const t=F(!0);function s(){t.value=!1}function e(){t.value=!0}const a=(...l)=>{t.value&&n(...l)};return{isActive:$t(t),pause:s,resume:e,eventFilter:a}}function Cp(...n){if(n.length!==1)return ne(...n);const t=n[0];return typeof t=="function"?$t(cv(()=>({get:t,set:es}))):F(t)}function Lp(n,t=200,s={}){return Ai(u0(t,s),n)}function m0(n,t=200,s=!1,e=!0,a=!1){return Ai(d0(t,s,e,a),n)}function wi(n,t=!0){ls()?vn(n):t?n():as(n)}function g0(n){ls()&&_s(n)}function b0(n,t=1e3,s={}){const{immediate:e=!0,immediateCallback:a=!1}=s;let l=null;const i=F(!1);function o(){l&&(clearInterval(l),l=null)}function p(){i.value=!1,o()}function c(){const u=qn(t);u<=0||(i.value=!0,a&&n(),o(),l=setInterval(n,u))}if(e&&hs&&c(),Mn(t)||typeof t=="function"){const u=en(t,()=>{i.value&&hs&&c()});_t(u)}return _t(p),{isActive:i,pause:p,resume:c}}function k0(n,t,s={}){const{immediate:e=!0}=s,a=F(!1);let l=null;function i(){l&&(clearTimeout(l),l=null)}function o(){a.value=!1,i()}function p(...c){i(),a.value=!0,l=setTimeout(()=>{a.value=!1,l=null,n(...c)},qn(t))}return e&&(a.value=!0,hs&&p()),_t(o),{isPending:$t(a),start:p,stop:o}}function Cl(n=!1,t={}){const{truthyValue:s=!0,falsyValue:e=!1}=t,a=Mn(n),l=F(n);function i(o){if(arguments.length)return l.value=o,l.value;{const p=qn(s);return l.value=l.value===p?qn(e):p,l.value}}return a?i:[l,i]}var ar=Object.getOwnPropertySymbols,f0=Object.prototype.hasOwnProperty,h0=Object.prototype.propertyIsEnumerable,y0=(n,t)=>{var s={};for(var e in n)f0.call(n,e)&&t.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&ar)for(var e of ar(n))t.indexOf(e)<0&&h0.call(n,e)&&(s[e]=n[e]);return s};function _0(n,t,s={}){const e=s,{eventFilter:a=xp}=e,l=y0(e,["eventFilter"]);return en(n,Ai(a,t),l)}var E0=Object.defineProperty,A0=Object.defineProperties,w0=Object.getOwnPropertyDescriptors,Aa=Object.getOwnPropertySymbols,Dp=Object.prototype.hasOwnProperty,Op=Object.prototype.propertyIsEnumerable,lr=(n,t,s)=>t in n?E0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,I0=(n,t)=>{for(var s in t||(t={}))Dp.call(t,s)&&lr(n,s,t[s]);if(Aa)for(var s of Aa(t))Op.call(t,s)&&lr(n,s,t[s]);return n},S0=(n,t)=>A0(n,w0(t)),P0=(n,t)=>{var s={};for(var e in n)Dp.call(n,e)&&t.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&Aa)for(var e of Aa(n))t.indexOf(e)<0&&Op.call(n,e)&&(s[e]=n[e]);return s};function T0(n,t,s={}){const e=s,{eventFilter:a}=e,l=P0(e,["eventFilter"]),{eventFilter:i,pause:o,resume:p,isActive:c}=v0(a);return{stop:_0(n,t,S0(I0({},l),{eventFilter:i})),pause:o,resume:p,isActive:c}}function nt(n){var t;const s=qn(n);return(t=s==null?void 0:s.$el)!=null?t:s}const pt=hs?window:void 0,Ii=hs?window.document:void 0,x0=hs?window.navigator:void 0;function jn(...n){let t,s,e,a;if(typeof n[0]=="string"||Array.isArray(n[0])?([s,e,a]=n,t=pt):[t,s,e,a]=n,!t)return es;Array.isArray(s)||(s=[s]),Array.isArray(e)||(e=[e]);const l=[],i=()=>{l.forEach(u=>u()),l.length=0},o=(u,d,m,g)=>(u.addEventListener(d,m,g),()=>u.removeEventListener(d,m,g)),p=en(()=>[nt(t),qn(a)],([u,d])=>{i(),u&&l.push(...s.flatMap(m=>e.map(g=>o(u,m,g,d))))},{immediate:!0,flush:"post"}),c=()=>{p(),i()};return _t(c),c}let ir=!1;function C0(n,t,s={}){const{window:e=pt,ignore:a=[],capture:l=!0,detectIframe:i=!1}=s;if(!e)return;xl&&!ir&&(ir=!0,Array.from(e.document.body.children).forEach(m=>m.addEventListener("click",es)));let o=!0;const p=m=>a.some(g=>{if(typeof g=="string")return Array.from(e.document.querySelectorAll(g)).some(f=>f===m.target||m.composedPath().includes(f));{const f=nt(g);return f&&(m.target===f||m.composedPath().includes(f))}}),u=[jn(e,"click",m=>{const g=nt(n);if(!(!g||g===m.target||m.composedPath().includes(g))){if(m.detail===0&&(o=!p(m)),!o){o=!0;return}t(m)}},{passive:!0,capture:l}),jn(e,"pointerdown",m=>{const g=nt(n);g&&(o=!m.composedPath().includes(g)&&!p(m))},{passive:!0}),i&&jn(e,"blur",m=>{setTimeout(()=>{var g;const f=nt(n);((g=e.document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!(f!=null&&f.contains(e.document.activeElement))&&t(m)},0)})].filter(Boolean);return()=>u.forEach(m=>m())}function L0(){const n=F(!1);return ls()&&vn(()=>{n.value=!0}),n}function je(n){const t=L0();return A(()=>(t.value,!!n()))}function D0(n,t={}){const{immediate:s=!0,window:e=pt}=t,a=F(!1);let l=0,i=null;function o(u){if(!a.value||!e)return;const d=u-(l||u);n({delta:d,timestamp:u}),l=u,i=e.requestAnimationFrame(o)}function p(){!a.value&&e&&(a.value=!0,i=e.requestAnimationFrame(o))}function c(){a.value=!1,i!=null&&e&&(e.cancelAnimationFrame(i),i=null)}return s&&p(),_t(c),{isActive:$t(a),pause:c,resume:p}}function Rp(n,t={}){const{window:s=pt}=t,e=je(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let a;const l=F(!1),i=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",o):a.removeListener(o))},o=()=>{e.value&&(i(),a=s.matchMedia(Cp(n).value),l.value=!!(a!=null&&a.matches),a&&("addEventListener"in a?a.addEventListener("change",o):a.addListener(o)))};return uc(o),_t(()=>i()),l}function O0(n={}){const{navigator:t=x0,read:s=!1,source:e,copiedDuring:a=1500,legacy:l=!1}=n,i=["copy","cut"],o=je(()=>t&&"clipboard"in t),p=A(()=>o.value||l),c=F(""),u=F(!1),d=k0(()=>u.value=!1,a);function m(){o.value?t.clipboard.readText().then(I=>{c.value=I}):c.value=w()}if(p.value&&s)for(const I of i)jn(I,m);async function g(I=qn(e)){p.value&&I!=null&&(o.value?await t.clipboard.writeText(I):f(I),c.value=I,u.value=!0,d.start())}function f(I){const k=document.createElement("textarea");k.value=I??"",k.style.position="absolute",k.style.opacity="0",document.body.appendChild(k),k.select(),document.execCommand("copy"),k.remove()}function w(){var I,k,y;return(y=(k=(I=document==null?void 0:document.getSelection)==null?void 0:I.call(document))==null?void 0:k.toString())!=null?y:""}return{isSupported:p,text:c,copied:u,copy:g}}const sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ea="__vueuse_ssr_handlers__",R0=B0();function B0(){return ea in sa||(sa[ea]=sa[ea]||{}),sa[ea]}function M0(n,t){return R0[n]||t}function $0(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var V0=Object.defineProperty,or=Object.getOwnPropertySymbols,j0=Object.prototype.hasOwnProperty,F0=Object.prototype.propertyIsEnumerable,rr=(n,t,s)=>t in n?V0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,cr=(n,t)=>{for(var s in t||(t={}))j0.call(t,s)&&rr(n,s,t[s]);if(or)for(var s of or(t))F0.call(t,s)&&rr(n,s,t[s]);return n};const N0={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},pr="vueuse-storage";function ee(n,t,s,e={}){var a;const{flush:l="pre",deep:i=!0,listenToStorageChanges:o=!0,writeDefaults:p=!0,mergeDefaults:c=!1,shallow:u,window:d=pt,eventFilter:m,onError:g=P=>{console.error(P)}}=e,f=(u?Cn:F)(t);if(!s)try{s=M0("getDefaultStorage",()=>{var P;return(P=pt)==null?void 0:P.localStorage})()}catch(P){g(P)}if(!s)return f;const w=qn(t),I=$0(w),k=(a=e.serializer)!=null?a:N0[I],{pause:y,resume:C}=T0(f,()=>D(f.value),{flush:l,deep:i,eventFilter:m});return d&&o&&(jn(d,"storage",$),jn(d,pr,O)),$(),f;function D(P){try{if(P==null)s.removeItem(n);else{const H=k.write(P),U=s.getItem(n);U!==H&&(s.setItem(n,H),d&&d.dispatchEvent(new CustomEvent(pr,{detail:{key:n,oldValue:U,newValue:H,storageArea:s}})))}}catch(H){g(H)}}function z(P){const H=P?P.newValue:s.getItem(n);if(H==null)return p&&w!==null&&s.setItem(n,k.write(w)),w;if(!P&&c){const U=k.read(H);return typeof c=="function"?c(U,w):I==="object"&&!Array.isArray(U)?cr(cr({},w),U):U}else return typeof H!="string"?H:k.read(H)}function O(P){$(P.detail)}function $(P){if(!(P&&P.storageArea!==s)){if(P&&P.key==null){f.value=w;return}if(!(P&&P.key!==n)){y();try{f.value=z(P)}catch(H){g(H)}finally{P?as(C):C()}}}}}function q0(n){return Rp("(prefers-color-scheme: dark)",n)}var ur=Object.getOwnPropertySymbols,z0=Object.prototype.hasOwnProperty,H0=Object.prototype.propertyIsEnumerable,U0=(n,t)=>{var s={};for(var e in n)z0.call(n,e)&&t.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&ur)for(var e of ur(n))t.indexOf(e)<0&&H0.call(n,e)&&(s[e]=n[e]);return s};function Bp(n,t,s={}){const e=s,{window:a=pt}=e,l=U0(e,["window"]);let i;const o=je(()=>a&&"MutationObserver"in a),p=()=>{i&&(i.disconnect(),i=void 0)},c=en(()=>nt(n),d=>{p(),o.value&&a&&d&&(i=new MutationObserver(t),i.observe(d,l))},{immediate:!0}),u=()=>{p(),c()};return _t(u),{isSupported:o,stop:u}}var dr=Object.getOwnPropertySymbols,J0=Object.prototype.hasOwnProperty,G0=Object.prototype.propertyIsEnumerable,W0=(n,t)=>{var s={};for(var e in n)J0.call(n,e)&&t.indexOf(e)<0&&(s[e]=n[e]);if(n!=null&&dr)for(var e of dr(n))t.indexOf(e)<0&&G0.call(n,e)&&(s[e]=n[e]);return s};function K0(n,t,s={}){const e=s,{window:a=pt}=e,l=W0(e,["window"]);let i;const o=je(()=>a&&"ResizeObserver"in a),p=()=>{i&&(i.disconnect(),i=void 0)},c=A(()=>Array.isArray(n)?n.map(m=>nt(m)):[nt(n)]),u=en(c,m=>{if(p(),o.value&&a){i=new ResizeObserver(t);for(const g of m)g&&i.observe(g,l)}},{immediate:!0,flush:"post",deep:!0}),d=()=>{p(),u()};return _t(d),{isSupported:o,stop:d}}function Q0(n,t={width:0,height:0},s={}){const{window:e=pt,box:a="content-box"}=s,l=A(()=>{var p,c;return(c=(p=nt(n))==null?void 0:p.namespaceURI)==null?void 0:c.includes("svg")}),i=F(t.width),o=F(t.height);return K0(n,([p])=>{const c=a==="border-box"?p.borderBoxSize:a==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(e&&l.value){const u=nt(n);if(u){const d=e.getComputedStyle(u);i.value=Number.parseFloat(d.width),o.value=Number.parseFloat(d.height)}}else if(c){const u=Array.isArray(c)?c:[c];i.value=u.reduce((d,{inlineSize:m})=>d+m,0),o.value=u.reduce((d,{blockSize:m})=>d+m,0)}else i.value=p.contentRect.width,o.value=p.contentRect.height},s),en(()=>nt(n),p=>{i.value=p?t.width:0,o.value=p?t.height:0}),{width:i,height:o}}const vr=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Si(n,t={}){const{document:s=Ii,autoExit:e=!1}=t,a=A(()=>{var k;return(k=nt(n))!=null?k:s==null?void 0:s.querySelector("html")}),l=F(!1),i=A(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(k=>s&&k in s||a.value&&k in a.value)),o=A(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(k=>s&&k in s||a.value&&k in a.value)),p=A(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(k=>s&&k in s||a.value&&k in a.value)),c=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(k=>s&&k in s),u=je(()=>a.value&&s&&i.value!==void 0&&o.value!==void 0&&p.value!==void 0),d=()=>c?(s==null?void 0:s[c])===a.value:!1,m=()=>{if(p.value){if(s&&s[p.value]!=null)return s[p.value];{const k=a.value;if((k==null?void 0:k[p.value])!=null)return!!k[p.value]}}return!1};async function g(){if(!(!u.value||!l.value)){if(o.value)if((s==null?void 0:s[o.value])!=null)await s[o.value]();else{const k=a.value;(k==null?void 0:k[o.value])!=null&&await k[o.value]()}l.value=!1}}async function f(){if(!u.value||l.value)return;m()&&await g();const k=a.value;i.value&&(k==null?void 0:k[i.value])!=null&&(await k[i.value](),l.value=!0)}async function w(){await(l.value?g():f())}const I=()=>{const k=m();(!k||k&&d())&&(l.value=k)};return jn(s,vr,I,!1),jn(()=>nt(a),vr,I,!1),e&&_t(g),{isSupported:u,isFullscreen:l,enter:f,exit:g,toggle:w}}var Y0=Object.defineProperty,mr=Object.getOwnPropertySymbols,X0=Object.prototype.hasOwnProperty,Z0=Object.prototype.propertyIsEnumerable,gr=(n,t,s)=>t in n?Y0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,nb=(n,t)=>{for(var s in t||(t={}))X0.call(t,s)&&gr(n,s,t[s]);if(mr)for(var s of mr(t))Z0.call(t,s)&&gr(n,s,t[s]);return n};function V3(n={}){const{controls:t=!1,interval:s="requestAnimationFrame"}=n,e=F(new Date),a=()=>e.value=new Date,l=s==="requestAnimationFrame"?D0(a,{immediate:!0}):b0(a,s,{immediate:!0});return t?nb({now:e},l):e}function sl(n,t=es,s={}){const{immediate:e=!0,manual:a=!1,type:l="text/javascript",async:i=!0,crossOrigin:o,referrerPolicy:p,noModule:c,defer:u,document:d=Ii,attrs:m={}}=s,g=F(null);let f=null;const w=y=>new Promise((C,D)=>{const z=P=>(g.value=P,C(P),P);if(!d){C(!1);return}let O=!1,$=d.querySelector(`script[src="${qn(n)}"]`);$?$.hasAttribute("data-loaded")&&z($):($=d.createElement("script"),$.type=l,$.async=i,$.src=qn(n),u&&($.defer=u),o&&($.crossOrigin=o),c&&($.noModule=c),p&&($.referrerPolicy=p),Object.entries(m).forEach(([P,H])=>$==null?void 0:$.setAttribute(P,H)),O=!0),$.addEventListener("error",P=>D(P)),$.addEventListener("abort",P=>D(P)),$.addEventListener("load",()=>{$.setAttribute("data-loaded","true"),t($),z($)}),O&&($=d.head.appendChild($)),y||z($)}),I=(y=!0)=>(f||(f=w(y)),f),k=()=>{if(!d)return;f=null,g.value&&(g.value=null);const y=d.querySelector(`script[src="${qn(n)}"]`);y&&d.head.removeChild(y)};return e&&!a&&wi(I),a||g0(k),{scriptTag:g,load:I,unload:k}}function Mp(n){const t=window.getComputedStyle(n);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&n.clientWidth<n.scrollWidth||t.overflowY==="auto"&&n.clientHeight<n.scrollHeight)return!0;{const s=n.parentNode;return!s||s.tagName==="BODY"?!1:Mp(s)}}function tb(n){const t=n||window.event,s=t.target;return Mp(s)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}function $p(n,t=!1){const s=F(t);let e=null,a;en(Cp(n),o=>{if(o){const p=o;a=p.style.overflow,s.value&&(p.style.overflow="hidden")}},{immediate:!0});const l=()=>{const o=qn(n);!o||s.value||(xl&&(e=jn(o,"touchmove",p=>{tb(p)},{passive:!1})),o.style.overflow="hidden",s.value=!0)},i=()=>{const o=qn(n);!o||!s.value||(xl&&(e==null||e()),o.style.overflow=a,s.value=!1)};return _t(i),A({get(){return s.value},set(o){o?l():i()}})}function Vp(n,t,s={}){const{window:e=pt}=s;return ee(n,t,e==null?void 0:e.sessionStorage,s)}let sb=0;function j3(n,t={}){const s=F(!1),{document:e=Ii,immediate:a=!0,manual:l=!1,id:i=`vueuse_styletag_${++sb}`}=t,o=F(n);let p=()=>{};const c=()=>{if(!e)return;const d=e.getElementById(i)||e.createElement("style");d.isConnected||(d.type="text/css",d.id=i,t.media&&(d.media=t.media),e.head.appendChild(d)),!s.value&&(p=en(o,m=>{d.textContent=m},{immediate:!0}),s.value=!0)},u=()=>{!e||!s.value||(p(),e.head.removeChild(e.getElementById(i)),s.value=!1)};return a&&!l&&wi(c),l||_t(u),{id:i,css:o,unload:u,load:c,isLoaded:$t(s)}}function eb({window:n=pt}={}){if(!n)return{x:F(0),y:F(0)};const t=F(n.scrollX),s=F(n.scrollY);return jn(n,"scroll",()=>{t.value=n.scrollX,s.value=n.scrollY},{capture:!1,passive:!0}),{x:t,y:s}}function ab(n={}){const{window:t=pt,initialWidth:s=1/0,initialHeight:e=1/0,listenOrientation:a=!0,includeScrollbar:l=!0}=n,i=F(s),o=F(e),p=()=>{t&&(l?(i.value=t.innerWidth,o.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,o.value=t.document.documentElement.clientHeight))};if(p(),wi(p),jn("resize",p,{passive:!0}),a){const c=Rp("(orientation: portrait)");en(c,()=>p())}return{width:i,height:o}}const jp=({type:n="info",text:t="",vertical:s,color:e},{slots:a})=>{var l;return r("span",{class:["vp-badge",n,{diy:e}],style:{verticalAlign:s??!1,backgroundColor:e??!1}},((l=a.default)==null?void 0:l.call(a))||t)};jp.displayName="Badge";var lb=B({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(n){const t=A(()=>{const e=["font-icon icon"],a=`fas fa-${n.icon}`;return e.push("fa-fw fa-sm"),e.push(n.icon.includes(" ")?n.icon:a),e}),s=A(()=>{const e={};return n.color&&(e.color=n.color),n.size&&(e["font-size"]=Number.isNaN(Number(n.size))?n.size:`${n.size}px`),et(e).length?e:null});return()=>n.icon?r("span",{key:n.icon,class:t.value,style:s.value}):null}});const Fp=()=>r(ln,{name:"back-to-top"},()=>[r("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),r("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);Fp.displayName="BackToTopIcon";var ib=B({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(n){const t=yn(),s=se({"/":{backToTop:"返回顶部"}}),e=Cn(),{height:a}=Q0(e),{height:l}=ab(),{y:i}=eb(),o=A(()=>t.value.backToTop!==!1&&i.value>n.threshold),p=A(()=>i.value/(a.value-l.value));return vn(()=>{e.value=document.body}),()=>r(ts,{name:"fade"},()=>o.value?r("button",{type:"button",class:"vp-back-to-top-button","aria-label":s.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[n.noProgress?null:r("svg",{class:"vp-scroll-progress"},r("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*p.value*100}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}})),r(Fp)]):null)}});const ob=Et({enhance:({app:n})=>{ht("Badge")||n.component("Badge",jp),ht("FontIcon")||n.component("FontIcon",lb)},setup:()=>{sl("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),sl("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),sl("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}})},rootComponents:[()=>r(ib,{})]});function rb(n,t,s){var e,a,l;t===void 0&&(t=50),s===void 0&&(s={});var i=(e=s.isImmediate)!=null&&e,o=(a=s.callback)!=null&&a,p=s.maxWait,c=Date.now(),u=[];function d(){if(p!==void 0){var g=Date.now()-c;if(g+t>=p)return p-g}return t}var m=function(){var g=[].slice.call(arguments),f=this;return new Promise(function(w,I){var k=i&&l===void 0;if(l!==void 0&&clearTimeout(l),l=setTimeout(function(){if(l=void 0,c=Date.now(),!i){var C=n.apply(f,g);o&&o(C),u.forEach(function(D){return(0,D.resolve)(C)}),u=[]}},d()),k){var y=n.apply(f,g);return o&&o(y),w(y)}u.push({resolve:w,reject:I})})};return m.cancel=function(g){l!==void 0&&clearTimeout(l),u.forEach(function(f){return(0,f.reject)(g)}),u=[]},m}const cb=({headerLinkSelector:n,headerAnchorSelector:t,delay:s,offset:e=5})=>{const a=zn(),i=rb(()=>{var w,I;const o=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(o-0)<e){br(a,"");return}const c=window.innerHeight+o,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),d=Math.abs(u-c)<e,m=Array.from(document.querySelectorAll(n)),f=Array.from(document.querySelectorAll(t)).filter(k=>m.some(y=>y.hash===k.hash));for(let k=0;k<f.length;k++){const y=f[k],C=f[k+1],D=o>=(((w=y.parentElement)==null?void 0:w.offsetTop)??0)-e,z=!C||o<(((I=C.parentElement)==null?void 0:I.offsetTop)??0)-e;if(!(D&&z))continue;const $=decodeURIComponent(a.currentRoute.value.hash),P=decodeURIComponent(y.hash);if($===P)return;if(d){for(let H=k+1;H<f.length;H++)if($===decodeURIComponent(f[H].hash))return}br(a,P);return}},s);vn(()=>{window.addEventListener("scroll",i)}),oi(()=>{window.removeEventListener("scroll",i)})},br=async(n,t)=>{const{scrollBehavior:s}=n.options;n.options.scrollBehavior=void 0,await n.replace({query:n.currentRoute.value.query,hash:t}).finally(()=>n.options.scrollBehavior=s)},pb=".vp-sidebar-link, .toc-link",ub=".header-anchor",db=200,vb=5,mb=Et({setup(){cb({headerLinkSelector:pb,headerAnchorSelector:ub,delay:db,offset:vb})}});let Np=()=>null;const qp=Symbol(""),gb=n=>{Np=n},bb=()=>kn(qp),kb=n=>{n.provide(qp,Np)};var fb=B({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean},setup(n){const t=bb(),s=se({"/":{title:"目录",empty:"暂无目录"}}),e=un(),a=zn(),l=Xc(),i=c=>{const u=c.I;return typeof u>"u"||u},o=()=>{const c=n.base||e.value.path.replace(/\/[^/]+$/,"/"),u=a.getRoutes(),d=[];return u.filter(({meta:m,path:g})=>{if(!Ws(g,c)||g===c)return!1;if(c==="/"){const f=et(l.value.locales).filter(w=>w!=="/");if(g==="/404.html"||f.some(w=>Ws(g,w)))return!1}return(Is(g,".html")&&!Is(g,"/index.html")||Is(g,"/"))&&i(m)}).map(({path:m,meta:g})=>{const f=m.substring(c.length).split("/").length;return{title:g.t||"",icon:g.i,base:m.replace(/\/[^/]+\/?$/,"/"),order:g.O||null,level:Is(m,"/")?f-1:f,path:m}}).filter(({title:m,level:g})=>m&&g<=n.level).sort(({title:m,level:g,path:f,order:w},{title:I,level:k,path:y,order:C})=>g-k||(Is(f,"/index.html")?-1:Is(y,"/index.html")?1:w===null?C===null?m.localeCompare(I):C:C===null?w:w>0?C>0?w-C:-1:C<0?w-C:1)).forEach(m=>{var g;const{base:f,level:w}=m;switch(w){case 1:d.push(m);break;case 2:{const I=d.find(k=>k.path===f);I&&(I.children??(I.children=[])).push(m);break}default:{const I=d.find(k=>k.path===f.replace(/\/[^/]+\/$/,"/"));if(I){const k=(g=I.children)==null?void 0:g.find(y=>y.path===f);k&&(k.children??(k.children=[])).push(m)}}}}),d},p=A(()=>o());return()=>r("div",{class:"vp-catalog"},[r("h2",{class:"vp-catalog-main-title"},s.value.title),p.value.length?p.value.map(({children:c=[],icon:u,path:d,title:m},g)=>[r("h3",{id:m,class:["vp-catalog-child-title",{"has-children":c.length}]},[r("a",{href:`#${m}`,class:"header-anchor","aria-hidden":!0},"#"),r(Vn,{class:"vp-catalog-title",to:d},()=>[n.index?`${g+1}.`:null,u&&t?r(t,{icon:u}):null,m||d])]),c.length?r("ul",{class:"vp-catalog-child-catalogs"},c.map(({children:f=[],icon:w,path:I,title:k},y)=>r("li",{class:"vp-child-catalog"},[r("div",{class:["vp-catalog-sub-title",{"has-children":f.length}]},[r("a",{href:`#${k}`,class:"header-anchor"},"#"),r(Vn,{class:"vp-catalog-title",to:I},()=>[n.index?`${g+1}.${y+1}`:null,w&&t?r(t,{icon:w}):null,k||I])]),f.length?r("div",{class:"v-sub-catalogs"},f.map(({icon:C,path:D,title:z},O)=>r(Vn,{class:"vp-sub-catalog",to:D},()=>[n.index?`${g+1}.${y+1}.${O+1}`:null,C&&t?r(t,{icon:C}):null,z||D]))):null]))):null]):r("p",{class:"vp-empty-catalog"},s.value.empty)])}}),hb=Et({enhance:({app:n})=>{kb(n),ht("AutoCatalog",n)||n.component("AutoCatalog",fb)}});const yb=r("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[r("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),zp=B({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(n){const t=jt(),s=A(()=>n.locales[t.value]??{openInNewWindow:"open in new window"});return()=>r("span",[yb,r("span",{class:"external-link-icon-sr-only"},s.value.openInNewWindow)])}}),_b={},Eb=Et({enhance({app:n}){n.component("ExternalLinkIcon",r(zp,{locales:_b}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const gn={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:n=>{const t=gn.isStarted();n=el(n,gn.settings.minimum,1),gn.status=n===1?null:n;const s=gn.render(!t),e=s.querySelector(gn.settings.barSelector),a=gn.settings.speed,l=gn.settings.easing;return s.offsetWidth,Ab(i=>{aa(e,{transform:"translate3d("+kr(n)+"%,0,0)",transition:"all "+a+"ms "+l}),n===1?(aa(s,{transition:"none",opacity:"1"}),s.offsetWidth,setTimeout(function(){aa(s,{transition:"all "+a+"ms linear",opacity:"0"}),setTimeout(function(){gn.remove(),i()},a)},a)):setTimeout(()=>i(),a)}),gn},isStarted:()=>typeof gn.status=="number",start:()=>{gn.status||gn.set(0);const n=()=>{setTimeout(()=>{gn.status&&(gn.trickle(),n())},gn.settings.trickleSpeed)};return gn.settings.trickle&&n(),gn},done:n=>!n&&!gn.status?gn:gn.inc(.3+.5*Math.random()).set(1),inc:n=>{let t=gn.status;return t?(typeof n!="number"&&(n=(1-t)*el(Math.random()*t,.1,.95)),t=el(t+n,0,.994),gn.set(t)):gn.start()},trickle:()=>gn.inc(Math.random()*gn.settings.trickleRate),render:n=>{if(gn.isRendered())return document.getElementById("nprogress");fr(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=gn.settings.template;const s=t.querySelector(gn.settings.barSelector),e=n?"-100":kr(gn.status||0),a=document.querySelector(gn.settings.parent);return aa(s,{transition:"all 0 linear",transform:"translate3d("+e+"%,0,0)"}),a!==document.body&&fr(a,"nprogress-custom-parent"),a==null||a.appendChild(t),t},remove:()=>{hr(document.documentElement,"nprogress-busy"),hr(document.querySelector(gn.settings.parent),"nprogress-custom-parent");const n=document.getElementById("nprogress");n&&wb(n)},isRendered:()=>!!document.getElementById("nprogress")},el=(n,t,s)=>n<t?t:n>s?s:n,kr=n=>(-1+n)*100,Ab=function(){const n=[];function t(){const s=n.shift();s&&s(t)}return function(s){n.push(s),n.length===1&&t()}}(),aa=function(){const n=["Webkit","O","Moz","ms"],t={};function s(i){return i.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(o,p){return p.toUpperCase()})}function e(i){const o=document.body.style;if(i in o)return i;let p=n.length;const c=i.charAt(0).toUpperCase()+i.slice(1);let u;for(;p--;)if(u=n[p]+c,u in o)return u;return i}function a(i){return i=s(i),t[i]??(t[i]=e(i))}function l(i,o,p){o=a(o),i.style[o]=p}return function(i,o){for(const p in o){const c=o[p];c!==void 0&&Object.prototype.hasOwnProperty.call(o,p)&&l(i,p,c)}}}(),Hp=(n,t)=>(typeof n=="string"?n:Pi(n)).indexOf(" "+t+" ")>=0,fr=(n,t)=>{const s=Pi(n),e=s+t;Hp(s,t)||(n.className=e.substring(1))},hr=(n,t)=>{const s=Pi(n);if(!Hp(n,t))return;const e=s.replace(" "+t+" "," ");n.className=e.substring(1,e.length-1)},Pi=n=>(" "+(n.className||"")+" ").replace(/\s+/gi," "),wb=n=>{n&&n.parentNode&&n.parentNode.removeChild(n)};const Ib=()=>{vn(()=>{const n=zn(),t=new Set;t.add(n.currentRoute.value.path),n.beforeEach(s=>{t.has(s.path)||gn.start()}),n.afterEach(s=>{t.add(s.path),gn.done()})})},Sb=Et({setup(){Ib()}}),Pb=JSON.parse('{"encrypt":{"config":{"/zh/demo/encrypt.html":["$2a$10$Z40Ee9AilenFkouW1A4ujuh0UTppVMj9imEEtThKHREkwGSxpjbVm"]}},"author":{"name":"Alooc","url":"https://alooc.github.io"},"logo":"/logo.png","repo":"alooc","docsDir":"src","blog":{"medias":{"GitHub":"https://github.com/alooc"},"avatar":"/avatar.jpg","roundAvatar":false},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":[{"text":"首页","link":"/"},{"text":"培根","children":[{"text":"算法","icon":"pen-to-square","prefix":"/blog/algorithm/","children":[{"text":"基础","icon":"pen-to-square","link":"base/"}]},{"text":"前端","icon":"pen-to-square","prefix":"/blog/fe/","children":[{"text":"数据可视化","icon":"pen-to-square","link":"dvguide/"}]}]},{"text":"归档","children":[{"text":"算法","link":"/blog/old/algorithm/"},{"text":"数据库","link":"/blog/old/database/"},{"text":"语言","link":"/blog/old/language/"},{"text":"技术","link":"/blog/old/beskill/"},{"text":"框架","link":"/blog/old/beframework/"},{"text":"前端","icon":"pen-to-square","prefix":"/blog/old/fe/","children":[{"text":"技术","icon":"pen-to-square","link":"skill/"},{"text":"框架","icon":"pen-to-square","link":"framework/"}]},{"text":"其他","link":"/blog/skill/"}]}],"sidebar":{"collapsable":false,"/blog/fe/":[{"text":"数据可视化","prefix":"dvguide/","link":"dvguide/","collapsible":false,"children":[{"text":"指南","collapsible":true,"children":[""]},{"text":"基础阶段","collapsible":true,"children":["guide/scene","guide/tech","guide/canvas","guide/svg","guide/echarts","guide/echarts-basic"]},{"text":"数据报表项目","collapsible":true,"children":["report/intro","report/guide","report/qa","report/summary"]}]}]},"footer":"默认页脚","displayFooter":true,"blog":{"description":"一个前端开发者","intro":"/intro.html"}}}}'),Tb=F(Pb),Up=()=>Tb,Jp=Symbol(""),xb=()=>{const n=kn(Jp);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},Cb=(n,t)=>{const{locales:s,...e}=n;return{...e,...s==null?void 0:s[t]}},Lb=Et({enhance({app:n}){const t=Up(),s=n._context.provides[mi],e=A(()=>Cb(t.value,s.value));n.provide(Jp,e),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return e.value}}})}}),Db={"Content-Type":"application/json"},Ob=({serverURL:n,lang:t,paths:s,signal:e})=>(({serverURL:a,lang:l,paths:i,type:o,signal:p})=>fetch(`${a}/article?path=${encodeURIComponent(i.join(","))}&type=${encodeURIComponent(o.join(","))}&lang=${l}`,{signal:p}).then(c=>c.json()))({serverURL:n,lang:t,paths:s,type:["time"],signal:e}).then(a=>Array.isArray(a)?a:[a]),Rb=n=>(({serverURL:t,lang:s,path:e,type:a,action:l})=>fetch(`${t}/article?lang=${s}`,{method:"POST",headers:Db,body:JSON.stringify({path:e,type:a,action:l})}).then(i=>i.json()))({...n,type:"time",action:"inc"}),yr=n=>{const t=((s="")=>s.replace(/\/$/u,""))(n);return/^(https?:)?\/\//.test(t)?t:`https://${t}`},Bb=n=>{n.name!=="AbortError"&&console.error(n.message)},_r=n=>n.dataset.path||n.getAttribute("id"),Er=(n,t)=>{t.forEach((s,e)=>{s.innerText=n[e].toString()})},Mb=({serverURL:n,path:t=window.location.pathname,selector:s=".waline-pageview-count",update:e=!0,lang:a=navigator.language})=>{const l=new AbortController,i=Array.from(document.querySelectorAll(s)),o=c=>{const u=_r(c);return u!==null&&t!==u},p=c=>Ob({serverURL:yr(n),paths:c.map(u=>_r(u)||t),lang:a,signal:l.signal}).then(u=>Er(u,c)).catch(Bb);if(e){const c=i.filter(d=>!o(d)),u=i.filter(o);Rb({serverURL:yr(n),path:t,lang:a}).then(d=>Er(new Array(c.length).fill(d),c)),u.length&&p(u)}else p(i);return l.abort.bind(l)};const $b={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://waline-comment.vuejs.press"};let Vb=$b;const Gp=Symbol(""),Wp=()=>kn(Gp),jb=Wp,Fb=n=>{n.provide(Gp,Vb)},Nb={"/":{placeholder:"请留言。(填写邮箱可在被回复时收到邮件提醒)"}};v(()=>import("./waline-meta-56fbc549.js"),[]);var qb=B({name:"WalineComment",props:{identifier:{type:String,required:!0}},setup(n){const t=jb(),s=yn(),e=vi(),a=se(Nb);let l;const i=!!t.serverURL,o=A(()=>{if(!i)return!1;const c=t.pageview!==!1,u=s.value.pageview;return!!u||c!==!1&&u!==!1}),p=A(()=>({lang:e.value==="zh-CN"?"zh-CN":"en",locale:a.value,dark:"html.dark",...t,path:n.identifier}));return vn(()=>{en(()=>n.identifier,()=>{l==null||l(),o.value&&as().then(()=>{setTimeout(()=>{l=Mb({serverURL:t.serverURL,path:n.identifier})},t.delay||800)})},{immediate:!0})}),()=>i?r("div",{id:"comment",class:"waline-wrapper"},r(_({loader:async()=>(await v(()=>import("./component-edad73e7.js"),[])).Waline,loadingComponent:is}),p.value)):null}}),zb=B({name:"CommentService",props:{darkmode:Boolean},setup(n){const t=Wp(),s=un(),e=yn(),a=t.comment!==!1,l=A(()=>e.value.comment||a&&e.value.comment!==!1);return()=>r(qb,{identifier:e.value.commentID||s.value.path,darkmode:n.darkmode,style:{display:l.value?"block":"none"}})}}),Hb=Et({enhance:({app:n})=>{Fb(n),n.component("CommentService",zb)}});const Ub=800,Jb=2e3,Gb={"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},Wb=!1,Kb=['.theme-hope-content div[class*="language-"] pre'],Ar=!1,al=new Map,Qb=()=>{const{copy:n}=O0({legacy:!0}),t=se(Gb),s=un(),e=s0(),a=o=>{if(!o.hasAttribute("copy-code-registered")){const p=document.createElement("button");p.type="button",p.classList.add("copy-code-button"),p.innerHTML='<div class="copy-icon" />',p.setAttribute("aria-label",t.value.copy),p.setAttribute("data-copied",t.value.copied),o.parentElement&&o.parentElement.insertBefore(p,o),o.setAttribute("copy-code-registered","")}},l=()=>as().then(()=>new Promise(o=>{setTimeout(()=>{Kb.forEach(p=>{document.querySelectorAll(p).forEach(a)}),o()},Ub)})),i=(o,p,c)=>{let{innerText:u=""}=p;/language-(shellscript|shell|bash|sh|zsh)/.test(o.classList.toString())&&(u=u.replace(/^ *(\$|>) /gm,"")),n(u).then(()=>{c.classList.add("copied"),clearTimeout(al.get(c));const d=setTimeout(()=>{c.classList.remove("copied"),c.blur(),al.delete(c)},Jb);al.set(c,d)})};vn(()=>{(!e.value||Ar)&&l(),jn("click",o=>{const p=o.target;if(p.matches('div[class*="language-"] > button.copy')){const c=p.parentElement,u=p.nextElementSibling;u&&i(c,u,p)}else if(p.matches('div[class*="language-"] div.copy-icon')){const c=p.parentElement,u=c.parentElement,d=c.nextElementSibling;d&&i(u,d,c)}}),en(()=>s.value.path,()=>{(!e.value||Ar)&&l()})})};var Yb=Et({setup:()=>{Qb()}});const Xb=(n,t)=>t==="json"?JSON.parse(n):new Function(`let config,__chart_js_config__;
{
${n}
__chart_js_config__=config;
}
return __chart_js_config__;`)();var Zb=B({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(n){const t=Cn(),s=Cn(),e=F(!0);return vn(async()=>{const[{default:a}]=await Promise.all([v(()=>import("./auto-fa8841cf.js"),[]),new Promise(o=>setTimeout(o,800))]);a.defaults.maintainAspectRatio=!1;const l=Xb(fs(n.config),n.type),i=s.value.getContext("2d");new a(i,l),e.value=!1}),()=>[n.title?r("div",{class:"chartjs-title"},decodeURIComponent(n.title)):null,e.value?r(is,{class:"chartjs-loading",height:192}):null,r("div",{ref:t,class:"chartjs-wrapper",id:n.id,style:{display:e.value?"none":"block"}},r("canvas",{ref:s,height:400}))]}});const la=ee("VUEPRESS_CODE_TAB_STORE",{});var n2=B({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(n,{slots:t}){const s=F(n.active),e=Cn([]),a=()=>{n.tabId&&(la.value[n.tabId]=n.data[s.value].id)},l=(c=s.value)=>{s.value=c<e.value.length-1?c+1:0,e.value[s.value].focus()},i=(c=s.value)=>{s.value=c>0?c-1:e.value.length-1,e.value[s.value].focus()},o=(c,u)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),s.value=u):c.key==="ArrowRight"?(c.preventDefault(),l()):c.key==="ArrowLeft"&&(c.preventDefault(),i()),n.tabId&&(la.value[n.tabId]=n.data[s.value].id)},p=()=>{if(n.tabId){const c=n.data.findIndex(({id:u})=>la.value[n.tabId]===u);if(c!==-1)return c}return n.active};return vn(()=>{s.value=p(),en(()=>la.value[n.tabId],(c,u)=>{if(n.tabId&&c!==u){const d=n.data.findIndex(({id:m})=>m===c);d!==-1&&(s.value=d)}})}),()=>n.data.length?r("div",{class:"vp-code-tabs"},[r("div",{class:"vp-code-tabs-nav",role:"tablist"},n.data.map(({id:c},u)=>{const d=u===s.value;return r("button",{type:"button",ref:m=>{m&&(e.value[u]=m)},class:["vp-code-tab-nav",{active:d}],role:"tab","aria-controls":`codetab-${n.id}-${u}`,"aria-selected":d,onClick:()=>{s.value=u,a()},onKeydown:m=>o(m,u)},t[`title${u}`]({value:c,isActive:d}))})),n.data.map(({id:c},u)=>{const d=u===s.value;return r("div",{class:["vp-code-tab",{active:d}],id:`codetab-${n.id}-${u}`,role:"tabpanel","aria-expanded":d},t[`tab${u}`]({value:c,isActive:d}))})]):null}});const Kp=({active:n=!1},{slots:t})=>{var s;return r("div",{class:["code-group-item",{active:n}],"aria-selected":n},(s=t.default)==null?void 0:s.call(t))};Kp.displayName="CodeGroupItem";const t2=B({name:"CodeGroup",slots:Object,setup(n,{slots:t}){const s=F(-1),e=Cn([]),a=(o=s.value)=>{s.value=o<e.value.length-1?o+1:0,e.value[s.value].focus()},l=(o=s.value)=>{s.value=o>0?o-1:e.value.length-1,e.value[s.value].focus()},i=(o,p)=>{o.key===" "||o.key==="Enter"?(o.preventDefault(),s.value=p):o.key==="ArrowRight"?(o.preventDefault(),a(p)):o.key==="ArrowLeft"&&(o.preventDefault(),l(p))};return()=>{var o;const p=(((o=t.default)==null?void 0:o.call(t))||[]).filter(c=>c.type.name==="CodeGroupItem").map(c=>(c.props===null&&(c.props={}),c));return p.length===0?null:(s.value<0||s.value>p.length-1?(s.value=p.findIndex(c=>"active"in c.props),s.value===-1&&(s.value=0)):p.forEach((c,u)=>{c.props.active=u===s.value}),r("div",{class:"code-group"},[r("div",{class:"code-group-nav"},p.map((c,u)=>{const d=u===s.value;return r("button",{type:"button",ref:m=>{m&&(e.value[u]=m)},class:["code-group-nav-tab",{active:d}],"aria-pressed":d,"aria-expanded":d,onClick:()=>{s.value=u},onKeydown:m=>i(m,u)},c.props.title)})),p]))}}});const s2=()=>r(ln,{name:"back"},()=>r("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),e2=()=>r(ln,{name:"home"},()=>r("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"})),a2='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',l2='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',i2='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';const ll={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},wr={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},o2=(n,t,s)=>{const e=document.createElement(n);return Me(t)&&et(t).forEach(a=>{if(a.indexOf("data"))e[a]=t[a];else{const l=a.replace("data","");e.dataset[l]=t[a]}}),s&&s.forEach(a=>{e.appendChild(a)}),e},Ti=n=>({...ll,...n,jsLib:Array.from(new Set([...ll.jsLib||[],...n.jsLib||[]])),cssLib:Array.from(new Set([...ll.cssLib||[],...n.cssLib||[]]))}),$s=(n,t)=>{if(n[t]!==void 0)return n[t];const s=new Promise(e=>{var a;const l=document.createElement("script");l.src=t,(a=document.querySelector("body"))==null||a.appendChild(l),l.onload=()=>{e()}});return n[t]=s,s},r2=(n,t)=>{if(t.css&&Array.from(n.childNodes).every(s=>s.nodeName!=="STYLE")){const s=o2("style",{innerHTML:t.css});n.appendChild(s)}},c2=(n,t,s)=>{const e=s.getScript();if(e&&Array.from(t.childNodes).every(a=>a.nodeName!=="SCRIPT")){const a=document.createElement("script");a.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${n} .vp-code-demo-display').shadowRoot;
${e}}`)),t.appendChild(a)}},p2=n=>{const t=et(n),s={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(e=>{const a=t.filter(l=>wr[e].types.includes(l));if(a.length){const l=a[0];s[e]=[n[l].replace(/^\n|\n$/g,""),wr[e].map[l]||l]}}),s.isLegal=(!s.html.length||s.html[1]==="none")&&(!s.js.length||s.js[1]==="none")&&(!s.css.length||s.css[1]==="none"),s},Qp=n=>n.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),Yp=n=>`<div id="app">
${Qp(n)}
</div>`,u2=n=>`${n.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,d2=n=>n.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),Xp=n=>`(function(exports){var module={};module.exports=exports;${n};return module.exports.__esModule?module.exports.default:module.exports;})({})`,v2=(n,t)=>{const s=Ti(t),e=n.js[0]||"";return{...s,html:Qp(n.html[0]||""),js:e,css:n.css[0]||"",isLegal:n.isLegal,getScript:()=>{var a;return s.useBabel?((a=window.Babel.transform(e,{presets:["es2015"]}))==null?void 0:a.code)||"":e}}},m2=/<template>([\s\S]+)<\/template>/u,g2=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,b2=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,k2=(n,t)=>{const s=Ti(t),e=n.html[0]||"",a=m2.exec(e),l=g2.exec(e),i=b2.exec(e),o=a?a[1].replace(/^\n|\n$/g,""):"",[p="",c=""]=l?[l[4].replace(/^\n|\n$/g,""),l[3]]:[],[u="",d=""]=i?[i[4].replace(/^\n|\n$/g,""),i[3]]:[],m=c===""&&(d===""||d==="css");return{...s,html:Yp(o),js:d2(p),css:u,isLegal:m,jsLib:[s.vue,...s.jsLib],getScript:()=>{var g,f;const w=t.useBabel?((f=(g=window.Babel)==null?void 0:g.transform(p,{presets:["es2015"]}))==null?void 0:f.code)||"":p.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${Xp(w)};appOptions.template=\`${o.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},f2=(n,t)=>{const s=Ti(t);return{...s,html:Yp(""),js:u2(n.js[0]||""),css:n.css[0]||(n.js[0]?n.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:n.isLegal,jsLib:[s.react,s.reactDOM,...s.jsLib],jsx:!0,getScript:()=>{var e,a;const l=((a=(e=window.Babel)==null?void 0:e.transform(n.js[0]||"",{presets:["es2015","react"]}))==null?void 0:a.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${Xp(l)}))`}}},Vs={},h2=n=>Promise.all([$s(Vs,n.babel),$s(Vs,n.react),$s(Vs,n.reactDOM)]),y2=n=>{const t=[$s(Vs,n.vue)];return n.useBabel&&t.push($s(Vs,n.babel)),Promise.all(t)},_2=n=>n.useBabel?$s(Vs,n.babel):Promise.resolve();var E2=B({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(n,{slots:t}){const[s,e]=Cl(!1),a=Cn(),l=Cn(),i=F("0"),o=F(!1),p=A(()=>JSON.parse(n.config?fs(n.config):"{}")),c=A(()=>{const f=JSON.parse(fs(n.code));return p2(f)}),u=A(()=>n.type==="react"?f2(c.value,p.value):n.type==="vue"?k2(c.value,p.value):v2(c.value,p.value)),d=A(()=>u.value.isLegal),m=(f=!1)=>{const w=a.value.attachShadow({mode:"open"}),I=document.createElement("div");I.classList.add("code-demo-app"),w.appendChild(I),d.value?(f&&(I.innerHTML=u.value.html),r2(w,u.value),c2(n.id,w,u.value),i.value="0"):i.value="auto",o.value=!0},g=()=>{switch(n.type){case"react":return h2(u.value).then(()=>m());case"vue":return y2(u.value).then(()=>m());default:return _2(u.value).then(()=>m(!0))}};return vn(()=>{setTimeout(()=>{g()},800)}),()=>{var f;return r("div",{class:"vp-code-demo",id:n.id},[r("div",{class:"vp-code-demo-header"},[u.value.isLegal?r("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",s.value?"down":"end"],onClick:()=>{i.value=s.value?"0":`${l.value.clientHeight+13.8}px`,e()}}):null,n.title?r("span",{class:"vp-code-demo-title"},decodeURIComponent(n.title)):null,u.value.isLegal&&u.value.jsfiddle!==!1?r("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[r("input",{type:"hidden",name:"html",value:u.value.html}),r("input",{type:"hidden",name:"js",value:u.value.js}),r("input",{type:"hidden",name:"css",value:u.value.css}),r("input",{type:"hidden",name:"wrap",value:"1"}),r("input",{type:"hidden",name:"panel_js",value:"3"}),r("input",{type:"hidden",name:"resources",value:[...u.value.cssLib,...u.value.jsLib].join(",")}),r("button",{type:"submit",class:"jsfiddle-button",innerHTML:l2,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!u.value.isLegal||u.value.codepen!==!1?r("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[r("input",{type:"hidden",name:"data",value:JSON.stringify({html:u.value.html,js:u.value.js,css:u.value.css,js_external:u.value.jsLib.join(";"),css_external:u.value.cssLib.join(";"),layout:u.value.codepenLayout,html_pre_processor:c.value?c.value.html[1]:"none",js_pre_processor:c.value?c.value.js[1]:u.value.jsx?"babel":"none",css_pre_processor:c.value?c.value.css[1]:"none",editors:u.value.codepenEditors})}),r("button",{type:"submit",innerHTML:a2,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),o.value?null:r(is,{class:"vp-code-demo-loading"}),r("div",{ref:a,class:"vp-code-demo-display",style:{display:d.value&&o.value?"block":"none"}}),r("div",{class:"vp-code-demo-code-wrapper",style:{height:i.value}},r("div",{ref:l,class:"vp-code-demo-codes"},(f=t.default)==null?void 0:f.call(t)))])}}});const A2=(async()=>{}).constructor,w2=(n,t,s)=>t==="js"?A2("myChart",`let width,height,option,__echarts_config__;
{
${n}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(s):Promise.resolve({option:JSON.parse(n)});var I2=B({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(n){const t=F(!0),s=Cn();let e;return jn("resize",Lp(()=>e==null?void 0:e.resize(),100)),vn(()=>{Promise.all([v(()=>import("./index-ae8c1e74.js"),[]),new Promise(a=>setTimeout(a,800))]).then(async([a])=>{e=a.init(s.value);const{option:l,...i}=await w2(fs(n.config),n.type,e);e.resize(i),e.setOption(l),t.value=!1})}),_s(()=>{e==null||e.dispose()}),()=>[n.title?r("div",{class:"echarts-title"},decodeURIComponent(n.title)):null,r("div",{class:"echarts-wrapper"},[r("div",{ref:s,class:"echarts-container",id:n.id}),t.value?r(is,{class:"echarts-loading",height:360}):null])]}});var xi={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},S2={...xi,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},P2={...xi,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"}}},T2={...xi,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}};const Ir={ant:S2,vue:T2,pie:P2};var x2=B({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(n){let t=null;const s=Cn(),e=F(!0),a=F(1),l=A(()=>Ir[n.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${n.preset}`),Ir.vue)),i=o=>o<419?.8:o>1280?1:.9;return vn(()=>{Promise.all([v(()=>import("./flowchart-d65a1d8e.js"),[]),new Promise(o=>setTimeout(o,800))]).then(([{parse:o}])=>{t=o(fs(n.code)),a.value=i(window.innerWidth),e.value=!1,t.draw(n.id,{...l.value,scale:a.value})}),jn("resize",Lp(()=>{if(t){const o=i(window.innerWidth);a.value!==o&&(a.value=o,t.draw(n.id,{...l.value,scale:o}))}},100))}),()=>[e.value?r(is,{class:"flowchart-loading",height:192}):null,r("div",{ref:s,class:["flowchart-wrapper",n.preset],id:n.id,style:{display:e.value?"none":"block"}})]}});let C2={};const Zp=Symbol(""),L2=()=>kn(Zp),D2=n=>{n.provide(Zp,C2)},Ss={useMaxWidth:!1},O2=n=>({dark:n,background:n?"#1e1e1e":"#fff",primaryColor:n?"#389d70":"#4abf8a",primaryBorderColor:n?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:n?"#fff":"#000",secondaryTextColor:n?"#ddd":"#333",tertiaryColor:n?"#282828":"#efeef4",tertiaryBorderColor:n?"#bbb":"#242424",tertiaryTextColor:n?"#ddd":"#333",noteBkgColor:n?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:n?"#f6d365":"#333",lineColor:n?"#d3d3d3":"#333",textColor:n?"#fff":"#242424",mainBkg:n?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:n?"#389d70":"#4abf8a",nodeTextColor:n?"#fff":"#242424",signalTextColor:n?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:n?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var R2=B({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(n){const{themeVariables:t,...s}=L2(),e=Cn(),a=A(()=>fs(n.code)),l=F(""),i=F(!1),o=async()=>{const[{default:u}]=await Promise.all([v(()=>import("./mermaid.core-9659f151.js").then(d=>d.aN),["assets/mermaid.core-9659f151.js","assets/commonjsHelpers-042e6b4d.js"]),new Promise(d=>setTimeout(d,800))]);u.initialize({theme:"base",themeVariables:{...O2(i.value),...Wg(t)?t(i.value):t},flowchart:Ss,sequence:Ss,journey:Ss,gantt:Ss,er:Ss,pie:Ss,...s,startOnLoad:!1}),l.value=(await u.render(n.id,a.value)).svg},p=()=>{const{body:u}=document,d=document.createElement("div");d.classList.add("mermaid-preview"),d.innerHTML=l.value,u.appendChild(d),d.addEventListener("click",()=>{u.removeChild(d)})},c=()=>{const u=`data:image/svg+xml;charset=utf8,${l.value.replace(/<br>/g,"<br />").replace(/%/g,"%25").replace(/"/g,"%22").replace(/'/g,"%27").replace(/&/g,"%26").replace(/#/g,"%23").replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E")}`,d=document.createElement("a");d.setAttribute("href",u),d.setAttribute("download",`${n.id}.svg`),d.click()};return vn(()=>{const u=document.documentElement,d=()=>u.classList.contains("dark")||u.getAttribute("data-theme")==="dark";i.value=d(),o(),Bp(u,()=>{i.value=d()},{attributeFilter:["class","data-theme"],attributes:!0}),en(i,()=>o())}),()=>[r("div",{class:"mermaid-actions"},[r("button",{class:"preview-button",onClick:()=>p(),title:"preview",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>'}),r("button",{class:"download-button",onClick:()=>c(),title:"download",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>'})]),r("div",{ref:e,class:"mermaid-wrapper"},l.value?r("div",{class:"mermaid-content",innerHTML:l.value}):r(is,{class:"mermaid-loading",height:96}))]}});let B2={};const nu=Symbol(""),M2=()=>kn(nu),$2=n=>{n.provide(nu,B2)},V2={showCompileOutput:!1,clearConsole:!1,ssr:!1};let j2=V2;const tu=Symbol(""),F3=()=>kn(tu),F2=n=>{n.provide(tu,j2)},N2=()=>v(()=>import("./highlight.esm-75b11b9d.js"),[]),q2=()=>v(()=>import("./markdown.esm-0191f9da.js"),[]),z2=()=>v(()=>import("./math.esm-70a288c8.js"),[]),H2=()=>v(()=>import("./notes.esm-a106bb2c.js"),[]),U2=()=>v(()=>import("./reveal.esm-ec5549c1.js"),[]),J2=()=>v(()=>import("./search.esm-7e6792e2.js"),[]),G2=()=>v(()=>import("./zoom.esm-b83b91d0.js"),[]);const W2=()=>[U2(),q2(),N2(),z2(),J2(),H2(),G2()];var K2=B({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(n){const t=M2(),s=yn(),e=F(""),a=F(!0),l=Cn();let i=null;const o=async p=>{const c=[new Promise(g=>setTimeout(g,800)),...W2()],[,u,...d]=await Promise.all(c),m=new u.default(p,{backgroundTransition:"slide",hash:s.value.layout==="Slide",mouseWheel:s.value.layout==="Slide",transition:"slide",slideNumber:!0,...t,...s.value.reveal||{},embedded:s.value.layout!=="Slide",plugins:[...d.map(({default:g})=>g),...t.plugins??[]]});return await m.initialize(),m};return vn(async()=>{const p=l.value;p&&(e.value=fs(n.code),p.setAttribute("id",n.id),p.setAttribute("data-theme",n.theme),i=await o(p),a.value=!1)}),_s(()=>{i==null||i.destroy()}),()=>r("div",{class:"vp-reveal"},[r("div",{ref:l,class:["reveal","reveal-viewport"]},r("div",{class:"slides",innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${e.value}<\/script></section>`})),a.value?r(is,{class:"reveal-loading",height:400}):null])}});var Q2=B({name:"Playground",props:{title:{type:String,default:""},link:{type:String,required:!0}},setup(n){return()=>[r("div",{class:"vp-playground"},[r("div",{class:"vp-playground-header"},[n.title?r("div",{class:"vp-playground-title"},decodeURIComponent(n.title)):null,r("div",{class:"vp-playground-actions"},[r("a",{class:"vp-playground-action",href:decodeURIComponent(n.link),target:"_blank",innerHTML:i2})])]),r("div",{class:"vp-playground-container"},r("iframe",{src:decodeURIComponent(n.link)}))])]}});const il=ee("VUEPRESS_TAB_STORE",{});var Y2=B({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(n,{slots:t}){const s=F(n.active),e=Cn([]),a=()=>{n.tabId&&(il.value[n.tabId]=n.data[s.value].id)},l=(c=s.value)=>{s.value=c<e.value.length-1?c+1:0,e.value[s.value].focus()},i=(c=s.value)=>{s.value=c>0?c-1:e.value.length-1,e.value[s.value].focus()},o=(c,u)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),s.value=u):c.key==="ArrowRight"?(c.preventDefault(),l()):c.key==="ArrowLeft"&&(c.preventDefault(),i()),a()},p=()=>{if(n.tabId){const c=n.data.findIndex(({id:u})=>il.value[n.tabId]===u);if(c!==-1)return c}return n.active};return vn(()=>{s.value=p(),en(()=>il.value[n.tabId],(c,u)=>{if(n.tabId&&c!==u){const d=n.data.findIndex(({id:m})=>m===c);d!==-1&&(s.value=d)}})}),()=>n.data.length?r("div",{class:"vp-tabs"},[r("div",{class:"vp-tabs-nav",role:"tablist"},n.data.map(({id:c},u)=>{const d=u===s.value;return r("button",{type:"button",ref:m=>{m&&(e.value[u]=m)},class:["vp-tab-nav",{active:d}],role:"tab","aria-controls":`tab-${n.id}-${u}`,"aria-selected":d,onClick:()=>{s.value=u,a()},onKeydown:m=>o(m,u)},t[`title${u}`]({value:c,isActive:d}))})),n.data.map(({id:c},u)=>{const d=u===s.value;return r("div",{class:["vp-tab",{active:d}],id:`tab-${n.id}-${u}`,role:"tabpanel","aria-expanded":d},t[`tab${u}`]({value:c,isActive:d}))})]):null}});const X2=Et({enhance:({app:n})=>{n.component("ChartJS",Zb),n.component("CodeTabs",n2),ht("CodeGroup",n)||n.component("CodeGroup",t2),ht("CodeGroupItem",n)||n.component("CodeGroupItem",Kp),n.component("CodeDemo",E2),n.component("ECharts",I2),n.component("FlowChart",x2),D2(n),n.component("Mermaid",R2),$2(n),n.component("Presentation",K2),n.component("Playground",Q2),n.component("Tabs",Y2),F2(n),n.component("VuePlayground",_(()=>v(()=>import("./VuePlayground-6bce6033.js"),[])))},setup:()=>{}});let Z2={};const su=Symbol(""),nk=()=>kn(su),tk=n=>{n.provide(su,Z2)};const sk=".theme-hope-content :not(a) > img:not([no-view])",ek={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},ak=800,lk='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',ik=n=>pn(n)?Array.from(document.querySelectorAll(n)):n.map(t=>Array.from(document.querySelectorAll(t))).flat(),eu=n=>new Promise((t,s)=>{n.complete?t({type:"image",element:n,src:n.src,width:n.naturalWidth,height:n.naturalHeight,alt:n.alt,msrc:n.src}):(n.onload=()=>t(eu(n)),n.onerror=e=>s(e))}),ok=()=>{const{isSupported:n,toggle:t}=Si(),s=nk(),e=se(ek),a=un();let l;const i=p=>{p.on("uiRegister",()=>{n&&p.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{t()}}),p.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(c,u)=>{c.setAttribute("download",""),c.setAttribute("target","_blank"),c.setAttribute("rel","noopener"),u.on("change",()=>{c.setAttribute("href",u.currSlide.data.src)})}}),p.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(c,u)=>{const d=[];let m=-1;for(let g=0;g<u.getNumItems();g++){const f=document.createElement("div");f.className="photo-swipe-bullet",f.onclick=w=>{u.goTo(d.indexOf(w.target))},d.push(f),c.appendChild(f)}u.on("change",()=>{m>=0&&d[m].classList.remove("active"),d[u.currIndex].classList.add("active"),m=u.currIndex})}})})},o=()=>Promise.all([v(()=>import("./photoswipe.esm-5794cde2.js"),[]),as().then(()=>new Promise(p=>setTimeout(p,ak)).then(()=>ik(sk)))]).then(([{default:p},c])=>{const u=c.map(d=>({html:lk,element:d,msrc:d.src}));c.forEach((d,m)=>{const g=()=>{l=new p({preloaderDelay:0,showHideAnimationType:"zoom",...e.value,...s,dataSource:u,index:m,closeOnVerticalDrag:!0,wheelToZoom:!1}),i(l),l.addFilter("thumbEl",()=>d),l.addFilter("placeholderSrc",()=>d.src),l.init()};d.style.cursor="zoom-in",d.addEventListener("click",()=>{g()}),d.addEventListener("keypress",({key:f})=>{f==="Enter"&&g()})}),c.forEach((d,m)=>{eu(d).then(g=>{u.splice(m,1,g),l==null||l.refreshSlideContent(m)})})});vn(()=>{jn("wheel",()=>{l==null||l.close()}),o(),en(()=>a.value.path,()=>o())})};var rk=Et({enhance:({app:n})=>{tk(n)},setup:()=>{ok()}});const au=()=>{const n=un();return A(()=>n.value.readingTime??null)},Ll=typeof{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}}>"u"?null:{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},lu=(n,t)=>{const{minutes:s,words:e}=n,{less1Minute:a,word:l,time:i}=t;return{time:s<1?a:i.replace("$time",Math.round(s).toString()),words:l.replace("$word",e.toString())}},Sr={words:"",time:""},iu=()=>Ll?se(Ll):A(()=>null),ck=()=>{if(typeof Ll>"u")return A(()=>Sr);const n=au(),t=iu();return A(()=>n.value&&t.value?lu(n.value,t.value):Sr)},os=()=>Up(),cn=()=>xb(),ae=()=>A(()=>!!os().value.pure);var ol=B({name:"EmptyComponent",setup:()=>()=>null});const pk="719px",uk="1440px",dk="false",Ci={mobileBreakPoint:pk,pcBreakPoint:uk,enableThemeColor:dk},Li={},ou=n=>{const{icon:t="",color:s,size:e}=n,a={};return s&&(a.color=s),e&&(a.height=Number.isNaN(Number(e))?e:`${e}px`),Es(t)?r("img",{class:"icon",src:t,"no-view":"",style:a}):$a(t)?r("img",{class:"icon",src:xn(t),"no-view":"",style:a}):r(tt("FontIcon"),n)};ou.displayName="HopeIcon";var Gn=ou,An=(n=>(n.type="y",n.title="t",n.shortTitle="s",n.icon="i",n.author="a",n.date="d",n.localizedDate="l",n.category="c",n.tag="g",n.isEncrypted="n",n.isOriginal="o",n.readingTime="r",n.excerpt="e",n.sticky="u",n.cover="v",n.index="I",n.order="O",n))(An||{}),ru=(n=>(n.article="a",n.home="h",n.slide="s",n.page="p",n))(ru||{});const js=(n,t,s=!1)=>{const e=encodeURI(t);let a=Ks(n,fp(e));a.name==="404"&&(a=Ks(n,e));const{fullPath:l,meta:i,name:o}=a;return{text:!s&&i[An.shortTitle]?i[An.shortTitle]:i[An.title]||t,link:o==="404"?t:l,...i[An.icon]?{icon:i[An.icon]}:{}}},Fe=()=>{const n=zn(),t=At();return s=>{if(s)if($a(s))t.path!==s&&n.push(s);else if(Es(s)||Hc(s))window&&window.open(s);else{const e=t.path.slice(0,t.path.lastIndexOf("/"));n.push(`${e}/${encodeURI(s)}`)}}},cu=()=>{const n=cn(),t=yn();return A(()=>{const{author:s}=t.value;return s?Te(s):s===!1?[]:Te(n.value.author,!1)})},vk=()=>{const n=yn();return A(()=>yp(n.value.category).map(t=>{var s,e;return{name:t,path:((e=(s=kn(Symbol.for("categoryMap")))==null?void 0:s.value.map[t])==null?void 0:e.path)||""}}))},mk=()=>{const n=yn();return A(()=>_p(n.value.tag).map(t=>{var s,e;return{name:t,path:((e=(s=kn(Symbol.for("tagMap")))==null?void 0:s.value.map[t])==null?void 0:e.path)||""}}))},gk=()=>{const n=yn(),t=un();return A(()=>{const s=hi(n.value.date);if(s)return s;const{createdTime:e}=t.value.git||{};return e?new Date(e):null})},bk=()=>{const n=cn(),t=un(),s=yn(),e=cu(),a=vk(),l=mk(),i=gk(),o=au(),p=ck(),c=A(()=>({author:e.value,category:a.value,date:i.value,localizedDate:t.value.localizedDate,tag:l.value,isOriginal:s.value.isOriginal||!1,readingTime:o.value,readingTimeLocale:p.value,pageview:"pageview"in s.value?s.value.pageview:!0})),u=A(()=>"pageInfo"in s.value?s.value.pageInfo:"pageInfo"in n.value?n.value.pageInfo:null);return{info:c,items:u}},{mobileBreakPoint:kk,pcBreakPoint:fk}=Ci,Pr=n=>n.endsWith("px")?Number(n.slice(0,-2)):null,Ne=()=>{const n=F(!1),t=F(!1),s=()=>{n.value=window.innerWidth<=(Pr(kk)??719),t.value=window.innerWidth>=(Pr(fk)??1440)};return vn(()=>{s(),jn("resize",s,!1),jn("orientationchange",s,!1)}),{isMobile:n,isPC:t}},pu=Symbol(""),qe=()=>{const n=kn(pu);if(!n)throw new Error("useDarkmode() is called without provider.");return n},hk=n=>{const t=os(),s=q0(),e=ee("vuepress-theme-hope-scheme","auto"),a=A(()=>t.value.darkmode||"switch"),l=A(()=>{const o=a.value;return o==="disable"?!1:o==="enable"?!0:o==="auto"?s.value:o==="toggle"?e.value==="dark":e.value==="dark"||e.value==="auto"&&s.value}),i=A(()=>{const o=a.value;return o==="switch"||o==="toggle"});n.provide(pu,{canToggle:i,config:a,isDarkmode:l,status:e}),Object.defineProperties(n.config.globalProperties,{$isDarkmode:{get:()=>l.value}})},yk=()=>{const{isDarkmode:n}=qe(),t=(s=n.value)=>document.documentElement.setAttribute("data-theme",s?"dark":"light");vn(()=>{en(n,t,{immediate:!0})})};var Qn=B({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(n,{attrs:t,emit:s,slots:e}){const a=At(),l=Xc(),i=ne(n,"config"),o=A(()=>Es(i.value.link)),p=A(()=>Hc(i.value.link)||u1(i.value.link)),c=A(()=>p.value?void 0:i.value.target||(o.value?"_blank":void 0)),u=A(()=>c.value==="_blank"),d=A(()=>!o.value&&!p.value&&!u.value),m=A(()=>p.value?void 0:i.value.rel||(u.value?"noopener noreferrer":void 0)),g=A(()=>i.value.ariaLabel||i.value.text),f=A(()=>{if(n.exact)return!1;const I=et(l.value.locales);return I.length?I.every(k=>k!==i.value.link):i.value.link!=="/"}),w=A(()=>d.value?i.value.activeMatch?new RegExp(i.value.activeMatch).test(a.path):f.value?Ws(a.path,i.value.link):a.path===i.value.link:!1);return()=>{const{before:I,after:k,default:y}=e,{text:C,icon:D,link:z}=i.value;return d.value?r(Vn,{to:z,"aria-label":g.value,...t,class:["nav-link",{active:w.value},t.class],onFocusout:()=>s("focusout")},()=>y?y():[I?I():r(Gn,{icon:D}),C,k==null?void 0:k()]):r("a",{href:z,rel:m.value,target:c.value,"aria-label":g.value,...t,class:["nav-link",t.class],onFocusout:()=>s("focusout")},y?y():[I?I():r(Gn,{icon:D}),C,n.noExternalLinkIcon?null:r(zp),k==null?void 0:k()])}}});const Qs=(n,t,s=!1)=>"activeMatch"in t?new RegExp(t.activeMatch).test(n.path):Ei(n,t.link)?!0:t.children&&!s?t.children.some(e=>Qs(n,e)):!1,uu=(n,t)=>t.type==="group"?t.children.some(s=>s.type==="group"?uu(n,s):s.type==="page"&&Qs(n,s,!0))||"prefix"in t&&Ei(n,t.prefix):!1,du=(n,t)=>pn(n.link)?r(Qn,{...t,config:n}):r("p",t,[r(Gn,{icon:n.icon}),n.text]),vu=n=>{const t=At();return n?r("ul",{class:"vp-sidebar-sub-headers"},n.map(s=>{const e=Qs(t,s,!0);return r("li",{class:"vp-sidebar-sub-header"},[du(s,{class:["vp-sidebar-link","vp-heading",{active:e}]}),vu(s.children)])})):null},rl=(n="",t="")=>$a(t)?t:`${r1(n)}${t}`,_k=(n,t)=>{const s=un();return{type:"heading",text:n.title,link:`${s.value.path}#${n.slug}`,children:Di(n.children,t)}},Di=(n,t)=>t>0?n.map(s=>_k(s,t-1)):[],mu=n=>{const t=un();return Di(t.value.headers,n)},Dl=(n,t,s="")=>{const e=zn(),a=un(),l=(i,o=s)=>{var p;const c=pn(i)?js(e,rl(o,i)):i.link?{...i,..._a(i.link)?{}:{link:js(e,rl(o,i.link)).link}}:i;if("children"in c){const u=rl(o,c.prefix),d=c.children==="structure"?Li[u]:c.children;return{type:"group",...c,prefix:u,children:d.map(m=>l(m,u))}}return{type:"page",...c,children:c.link===a.value.path?Di(((p=a.value.headers[0])==null?void 0:p.level)===1?a.value.headers[0].children:a.value.headers,t):[]}};return n.map(i=>l(i))},Ek=(n,t)=>{const s=un(),e=et(n).sort((a,l)=>l.length-a.length);for(const a of e)if(Ws(decodeURI(s.value.path),a)){const l=n[a];return l?Dl(l==="structure"?Li[a]:l==="heading"?mu(t):l,t,a):[]}return console.warn(`${s.value.path} is missing sidebar config.`),[]},Ak=(n,t)=>{const s=jt();return n===!1?[]:n==="heading"?mu(t):n==="structure"?Dl(Li[s.value],t,s.value):K(n)?Dl(n,t):Me(n)?Ek(n,t):[]},gu=Symbol(""),wk=()=>{const n=yn(),t=cn(),s=A(()=>n.value.home?!1:n.value.sidebar??t.value.sidebar??"structure"),e=A(()=>n.value.headerDepth??t.value.headerDepth??2),a=A(()=>Ak(s.value,e.value));ft(gu,a)},Oi=()=>{const n=kn(gu);if(!n)throw new Error("useSidebarItems() is called without provider.");return n};var Ik=B({name:"PageFooter",setup(){const n=yn(),t=cn(),s=cu(),e=A(()=>{const{copyright:i,footer:o}=n.value;return o!==!1&&!!(i||o||t.value.displayFooter)}),a=A(()=>{const{footer:i}=n.value;return i===!1?!1:pn(i)?i:t.value.footer||""}),l=A(()=>"copyright"in n.value?n.value.copyright:"copyright"in t.value?t.value.copyright:s.value.length?`Copyright © ${new Date().getFullYear()} ${s.value[0].name}`:!1);return()=>e.value?r("footer",{class:"vp-footer-wrapper"},[a.value?r("div",{class:"vp-footer",innerHTML:a.value}):null,l.value?r("div",{class:"vp-copyright",innerHTML:l.value}):null]):null}}),Sk=B({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(n,{slots:t}){const s=un(),e=ne(n,"config"),a=A(()=>e.value.ariaLabel||e.value.text),l=F(!1);en(()=>s.value.path,()=>{l.value=!1});const i=o=>{o.detail===0&&(l.value=!l.value)};return()=>{var o;return r("div",{class:["dropdown-wrapper",{open:l.value}]},[r("button",{type:"button",class:"dropdown-title","aria-label":a.value,onClick:i},[((o=t.title)==null?void 0:o.call(t))||r("span",{class:"title"},[r(Gn,{icon:e.value.icon}),n.config.text]),r("span",{class:"arrow"}),r("ul",{class:"nav-dropdown"},e.value.children.map((p,c)=>{const u=c===e.value.children.length-1;return r("li",{class:"dropdown-item"},"children"in p?[r("h4",{class:"dropdown-subtitle"},p.link?r(Qn,{config:p,onFocusout:()=>{p.children.length===0&&u&&(l.value=!1)}}):r("span",p.text)),r("ul",{class:"dropdown-subitem-wrapper"},p.children.map((d,m)=>r("li",{class:"dropdown-subitem"},r(Qn,{config:d,onFocusout:()=>{m===p.children.length-1&&u&&(l.value=!1)}}))))]:r(Qn,{config:p,onFocusout:()=>{u&&(l.value=!1)}}))}))])])}}});const bu=(n,t,s="")=>pn(t)?js(n,`${s}${t}`):"children"in t?{...t,...t.link&&!_a(t.link)?js(n,`${s}${t.link}`):{},children:t.children.map(e=>bu(n,e,`${s}${t.prefix||""}`))}:{...t,link:_a(t.link)?t.link:js(n,`${s}${t.link}`).link},ku=()=>{const n=cn(),t=zn(),s=()=>(n.value.navbar||[]).map(a=>bu(t,a)),e=F(s());return en(n,()=>{e.value=s()}),e},Pk=()=>{const n=cn(),t=A(()=>n.value.repo||null),s=A(()=>t.value?Zg(t.value):null),e=A(()=>t.value?Ap(t.value):null),a=A(()=>s.value?n.value.repoLabel??(e.value===null?"Source":e.value):null);return A(()=>!s.value||!a.value||n.value.repoDisplay===!1?null:{type:e.value||"Source",label:a.value,link:s.value})};var Tk=B({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(n){const t=un(),s=ne(n,"config"),e=A(()=>s.value.ariaLabel||s.value.text),a=F(!1);en(()=>t.value.path,()=>{a.value=!1});const l=(i,o)=>o[o.length-1]===i;return()=>[r("button",{type:"button",class:["nav-screen-dropdown-title",{active:a.value}],"aria-label":e.value,onClick:()=>{a.value=!a.value}},[r("span",{class:"title"},[r(Gn,{icon:s.value.icon}),n.config.text]),r("span",{class:["arrow",a.value?"down":"end"]})]),r("ul",{class:["nav-screen-dropdown",{hide:!a.value}]},s.value.children.map(i=>r("li",{class:"dropdown-item"},"children"in i?[r("h4",{class:"dropdown-subtitle"},i.link?r(Qn,{config:i,onFocusout:()=>{l(i,s.value.children)&&i.children.length===0&&(a.value=!1)}}):r("span",i.text)),r("ul",{class:"dropdown-subitem-wrapper"},i.children.map(o=>r("li",{class:"dropdown-subitem"},r(Qn,{config:o,onFocusout:()=>{l(o,i.children)&&l(i,s.value.children)&&(a.value=!1)}}))))]:r(Qn,{config:i,onFocusout:()=>{l(i,s.value.children)&&(a.value=!1)}}))))]}}),xk=B({name:"NavScreenLinks",setup(){const n=ku();return()=>n.value.length?r("nav",{class:"nav-screen-links"},n.value.map(t=>r("div",{class:"navbar-links-item"},"children"in t?r(Tk,{config:t}):r(Qn,{config:t})))):null}});const fu=()=>r(ln,{name:"dark"},()=>r("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));fu.displayName="DarkIcon";const hu=()=>r(ln,{name:"light"},()=>r("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));hu.displayName="LightIcon";const yu=()=>r(ln,{name:"auto"},()=>r("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));yu.displayName="AutoIcon";const _u=()=>r(ln,{name:"enter-fullscreen"},()=>r("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));_u.displayName="EnterFullScreenIcon";const Eu=()=>r(ln,{name:"cancel-fullscreen"},()=>r("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Eu.displayName="CancelFullScreenIcon";const Au=()=>r(ln,{name:"outlook"},()=>[r("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);Au.displayName="OutlookIcon";var wu=B({name:"AppearanceSwitch",setup(){const{config:n,status:t}=qe(),s=()=>{n.value==="switch"?t.value={light:"dark",dark:"auto",auto:"light"}[t.value]:t.value=t.value==="light"?"dark":"light"};return()=>r("button",{type:"button",id:"appearance-switch",onClick:()=>s()},[r(yu,{style:{display:t.value==="auto"?"block":"none"}}),r(fu,{style:{display:t.value==="dark"?"block":"none"}}),r(hu,{style:{display:t.value==="light"?"block":"none"}})])}}),Ck=B({name:"AppearanceMode",setup(){const n=cn(),{canToggle:t}=qe(),s=A(()=>n.value.outlookLocales.darkmode);return()=>t.value?r("div",{class:"appearance-wrapper"},[r("label",{class:"appearance-title",for:"appearance-switch"},s.value),r(wu)]):null}});const cl="VUEPRESS_THEME_COLOR";var Lk=B({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(n){const t=(s="")=>{const e=document.documentElement.classList,a=et(n.themeColor);if(!s){localStorage.removeItem(cl),e.remove(...a);return}e.remove(...a.filter(l=>l!==s)),e.add(s),localStorage.setItem(cl,s)};return vn(()=>{const s=localStorage.getItem(cl);s&&t(s)}),()=>r("ul",{id:"theme-color-picker"},[r("li",r("span",{class:"theme-color",onClick:()=>t()})),te(n.themeColor).map(([s,e])=>r("li",r("span",{style:{background:e},onClick:()=>t(s)})))])}});const Fs=Ci.enableThemeColor==="true",Dk=Fs?Kg(te(Ci).filter(([n])=>n.startsWith("theme-"))):{};var Ok=B({name:"ThemeColor",setup(){const n=cn(),t=A(()=>n.value.outlookLocales.themeColor);return()=>Fs?r("div",{class:"theme-color-wrapper"},[r("label",{class:"theme-color-title",for:"theme-color-picker"},t.value),r(Lk,{themeColor:Dk})]):null}}),Iu=B({name:"ToggleFullScreenButton",setup(){const n=cn(),{isSupported:t,isFullscreen:s,toggle:e}=Si(),a=A(()=>n.value.outlookLocales.fullscreen);return()=>t?r("div",{class:"full-screen-wrapper"},[r("label",{class:"full-screen-title",for:"full-screen-switch"},a.value),r("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:s.value,onClick:()=>e()},s.value?r(Eu):r(_u))]):null}}),Su=B({name:"OutlookSettings",setup(){const n=os(),t=ae(),s=A(()=>!t.value&&n.value.fullscreen);return()=>r(Oa,()=>[Fs?r(Ok):null,r(Ck),s.value?r(Iu):null])}}),Rk=B({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(n,{emit:t,slots:s}){const e=un(),{isMobile:a}=Ne(),l=Cn(),i=$p(l);return vn(()=>{l.value=document.body,en(a,o=>{!o&&n.show&&(i.value=!1,t("close"))}),en(()=>e.value.path,()=>{i.value=!1,t("close")})}),_s(()=>{i.value=!1}),()=>r(ts,{name:"fade",onEnter:()=>{i.value=!0},onAfterLeave:()=>{i.value=!1}},()=>{var o,p;return n.show?r("div",{id:"nav-screen"},r("div",{class:"vp-nav-screen-container"},[(o=s.before)==null?void 0:o.call(s),r(xk),r("div",{class:"vp-outlook-wrapper"},r(Su)),(p=s.after)==null?void 0:p.call(s)])):null})}}),Bk=B({name:"NavbarBrand",setup(){const n=jt(),t=$e(),s=cn(),e=A(()=>s.value.home||n.value),a=A(()=>t.value.title),l=A(()=>s.value.navTitle??a.value),i=A(()=>s.value.logo?xn(s.value.logo):null),o=A(()=>s.value.logoDark?xn(s.value.logoDark):null);return()=>r(Vn,{to:e.value,class:"vp-brand"},()=>[i.value?r("img",{class:["vp-nav-logo",{light:!!o.value}],src:i.value,alt:a.value}):null,o.value?r("img",{class:["vp-nav-logo dark"],src:o.value,alt:a.value}):null,l.value?r("span",{class:["vp-site-name",{"hide-in-pad":i.value&&s.value.hideSiteNameOnMobile!==!1}]},l.value):null])}}),Mk=B({name:"NavbarLinks",setup(){const n=ku();return()=>n.value.length?r("nav",{class:"vp-nav-links"},n.value.map(t=>r("div",{class:"nav-item hide-in-mobile"},"children"in t?r(Sk,{config:t}):r(Qn,{config:t})))):null}}),$k=B({name:"RepoLink",components:{BitbucketIcon:Pp,GiteeIcon:Sp,GitHubIcon:wp,GitLabIcon:Ip,SourceIcon:Tp},setup(){const n=Pk();return()=>n.value?r("div",{class:"nav-item vp-repo"},r("a",{class:"vp-repo-link",href:n.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":n.value.label},r(tt(`${n.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const Pu=({active:n=!1},{emit:t})=>r("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":n}],"aria-label":"Toggle Navbar","aria-expanded":n,"aria-controls":"nav-screen",onClick:()=>t("toggle")},r("span",[r("span",{class:"vp-top"}),r("span",{class:"vp-middle"}),r("span",{class:"vp-bottom"})]));Pu.displayName="ToggleNavbarButton";var Vk=Pu;const Ol=(n,{emit:t})=>r("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>t("toggle")},r("span",{class:"icon"}));Ol.displayName="ToggleSidebarButton",Ol.emits=["toggle"];var jk=Ol,Fk=B({name:"OutlookButton",setup(){const{isSupported:n}=Si(),t=os(),s=ae(),e=un(),{canToggle:a}=qe(),l=F(!1),i=A(()=>!s.value&&t.value.fullscreen&&n);return en(()=>e.value.path,()=>{l.value=!1}),()=>a.value||i.value||Fs?r("div",{class:"nav-item hide-in-mobile"},a.value&&!i.value&&!Fs?r(wu):i.value&&!a.value&&!Fs?r(Iu):r("button",{type:"button",class:["outlook-button",{open:l.value}],tabindex:"-1","aria-hidden":!0},[r(Au),r("div",{class:"outlook-dropdown"},r(Su))])):null}}),Nk=B({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(n,{emit:t,slots:s}){const e=cn(),{isMobile:a}=Ne(),l=F(!1),i=A(()=>{const{navbarAutoHide:u="mobile"}=e.value;return u!=="none"&&(u==="always"||a.value)}),o=A(()=>e.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),p={Brand:Bk,Language:ol,Links:Mk,Repo:$k,Outlook:Fk,Search:ht("Docsearch")?tt("Docsearch"):ht("SearchBox")?tt("SearchBox"):ol},c=u=>p[u]??(ht(u)?tt(u):ol);return()=>{var u,d,m,g,f,w;return[r("header",{id:"navbar",class:["vp-navbar",{"auto-hide":i.value,"hide-icon":e.value.navbarIcon===!1}]},[r("div",{class:"vp-navbar-start"},[r(jk,{onToggle:()=>{l.value&&(l.value=!1),t("toggleSidebar")}}),(u=s.startBefore)==null?void 0:u.call(s),(o.value.start||[]).map(I=>r(c(I))),(d=s.startAfter)==null?void 0:d.call(s)]),r("div",{class:"vp-navbar-center"},[(m=s.centerBefore)==null?void 0:m.call(s),(o.value.center||[]).map(I=>r(c(I))),(g=s.centerAfter)==null?void 0:g.call(s)]),r("div",{class:"vp-navbar-end"},[(f=s.endBefore)==null?void 0:f.call(s),(o.value.end||[]).map(I=>r(c(I))),(w=s.endAfter)==null?void 0:w.call(s),r(Vk,{active:l.value,onToggle:()=>{l.value=!l.value}})])]),r(Rk,{show:l.value,onClose:()=>{l.value=!1}},{before:()=>{var I;return(I=s.screenTop)==null?void 0:I.call(s)},after:()=>{var I;return(I=s.screenBottom)==null?void 0:I.call(s)}})]}}}),qk=B({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(n){const t=At();return()=>[du(n.config,{class:["vp-sidebar-link",`vp-sidebar-${n.config.type}`,{active:Qs(t,n.config,!0)}],exact:!0}),vu(n.config.children)]}}),zk=B({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(n,{emit:t}){const s=At(),e=A(()=>Qs(s,n.config)),a=A(()=>Qs(s,n.config,!0));return()=>{const{collapsible:l,children:i=[],icon:o,prefix:p,link:c,text:u}=n.config;return r("section",{class:"vp-sidebar-group"},[r(l?"button":"p",{class:["vp-sidebar-heading",{clickable:l||c,exact:a.value,active:e.value}],...l?{type:"button",onClick:()=>t("toggle"),onKeydown:d=>{d.key==="Enter"&&t("toggle")}}:{}},[r(Gn,{icon:o}),c?r(Qn,{class:"vp-sidebar-title",config:{text:u,link:c},noExternalLinkIcon:!0}):r("span",{class:"vp-sidebar-title"},u),l?r("span",{class:["vp-arrow",n.open?"down":"end"]}):null]),n.open||!l?r(Tu,{key:p,config:i}):null])}}}),Tu=B({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(n){const t=At(),s=F(-1),e=a=>{s.value=a===s.value?-1:a};return en(()=>t.path,()=>{const a=n.config.findIndex(l=>uu(t,l));s.value=a},{immediate:!0,flush:"post"}),()=>r("ul",{class:"vp-sidebar-links"},n.config.map((a,l)=>r("li",a.type==="group"?r(zk,{config:a,open:l===s.value,onToggle:()=>e(l)}):r(qk,{config:a}))))}}),Hk=B({name:"SideBar",slots:Object,setup(n,{slots:t}){const s=At(),e=cn(),a=Oi(),l=Cn();return vn(()=>{en(()=>s.hash,i=>{const o=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${s.path}${i}"]`);if(!o)return;const{top:p,height:c}=l.value.getBoundingClientRect(),{top:u,height:d}=o.getBoundingClientRect();u<p?o.scrollIntoView(!0):u+d>p+c&&o.scrollIntoView(!1)})}),()=>{var i,o,p;return r("aside",{ref:l,id:"sidebar",class:["vp-sidebar",{"hide-icon":e.value.sidebarIcon===!1}]},[(i=t.top)==null?void 0:i.call(t),((o=t.default)==null?void 0:o.call(t))||r(Tu,{config:a.value}),(p=t.bottom)==null?void 0:p.call(t)])}}}),Ri=B({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(n,{slots:t}){const s=zn(),e=un(),a=yn(),l=cn(),{isMobile:i,isPC:o}=Ne(),[p,c]=Cl(!1),[u,d]=Cl(!1),m=Oi(),g=F(!1),f=A(()=>n.noNavbar||a.value.navbar===!1||l.value.navbar===!1?!1:!!(e.value.title||l.value.logo||l.value.repo||l.value.navbar)),w=A(()=>n.noSidebar?!1:a.value.sidebar!==!1&&m.value.length!==0&&!a.value.home),I=A(()=>n.noToc||a.value.home?!1:a.value.toc||l.value.toc!==!1&&a.value.toc!==!1),k={x:0,y:0},y=O=>{k.x=O.changedTouches[0].clientX,k.y=O.changedTouches[0].clientY},C=O=>{const $=O.changedTouches[0].clientX-k.x,P=O.changedTouches[0].clientY-k.y;Math.abs($)>Math.abs(P)*1.5&&Math.abs($)>40&&($>0&&k.x<=80?c(!0):c(!1))},D=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let z=0;return jn("scroll",m0(()=>{const O=D();O<=58||O<z?g.value=!1:z+200<O&&!p.value&&(g.value=!0),z=O},300,!0)),en(i,O=>{O||c(!1)}),vn(()=>{const O=$p(document.body);en(p,P=>{O.value=P});const $=s.afterEach(()=>{c(!1)});_s(()=>{O.value=!1,$()})}),()=>r(ht("GlobalEncrypt")?tt("GlobalEncrypt"):kp,()=>r("div",{class:["theme-container",{"no-navbar":!f.value,"no-sidebar":!w.value&&!(t.sidebar||t.sidebarTop||t.sidebarBottom),"has-toc":I.value,"hide-navbar":g.value,"sidebar-collapsed":!i.value&&!o.value&&u.value,"sidebar-open":i.value&&p.value},n.containerClass,a.value.containerClass||""],onTouchStart:y,onTouchEnd:C},[f.value?r(Nk,{onToggleSidebar:()=>c()},{startBefore:()=>{var O;return(O=t.navbarStartBefore)==null?void 0:O.call(t)},startAfter:()=>{var O;return(O=t.navbarStartAfter)==null?void 0:O.call(t)},centerBefore:()=>{var O;return(O=t.navbarCenterBefore)==null?void 0:O.call(t)},centerAfter:()=>{var O;return(O=t.navbarCenterAfter)==null?void 0:O.call(t)},endBefore:()=>{var O;return(O=t.navbarEndBefore)==null?void 0:O.call(t)},endAfter:()=>{var O;return(O=t.navbarEndAfter)==null?void 0:O.call(t)},screenTop:()=>{var O;return(O=t.navScreenTop)==null?void 0:O.call(t)},screenBottom:()=>{var O;return(O=t.navScreenBottom)==null?void 0:O.call(t)}}):null,r(ts,{name:"fade"},()=>p.value?r("div",{class:"vp-sidebar-mask",onClick:()=>c(!1)}):null),r(ts,{name:"fade"},()=>i.value?null:r("div",{class:"toggle-sidebar-wrapper",onClick:()=>d()},r("span",{class:["arrow",u.value?"end":"start"]}))),r(Hk,{},{...t.sidebar?{default:()=>t.sidebar()}:{},top:()=>{var O;return(O=t.sidebarTop)==null?void 0:O.call(t)},bottom:()=>{var O;return(O=t.sidebarBottom)==null?void 0:O.call(t)}}),t.default(),r(Ik)]))}}),fn=B({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(n,{slots:t}){const s=a=>{a.style.transition=`transform ${n.duration}s ease-in-out ${n.delay}s, opacity ${n.duration}s ease-in-out ${n.delay}s`,a.style.transform="translateY(-20px)",a.style.opacity="0"},e=a=>{a.style.transform="translateY(0)",a.style.opacity="1"};return()=>r(n.type==="single"?ts:Nm,{name:"drop",appear:n.appear,onAppear:s,onAfterAppear:e,onEnter:s,onAfterEnter:e,onBeforeLeave:s},()=>t.default())}});const Rl=({custom:n})=>r(gi,{class:["theme-hope-content",{custom:n}]});Rl.displayName="MarkdownContent",Rl.props={custom:Boolean};var Bi=Rl;const xu=()=>r(ln,{name:"author"},()=>r("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));xu.displayName="AuthorIcon";const Cu=()=>r(ln,{name:"calendar"},()=>r("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));Cu.displayName="CalendarIcon";const Lu=()=>r(ln,{name:"category"},()=>r("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Lu.displayName="CategoryIcon";const Du=()=>r(ln,{name:"eye"},()=>r("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));Du.displayName="EyeIcon";const Ou=()=>r(ln,{name:"fire"},()=>r("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));Ou.displayName="FireIcon";const Ru=()=>r(ln,{name:"print"},()=>r("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));Ru.displayName="PrintIcon";const Bu=()=>r(ln,{name:"tag"},()=>r("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Bu.displayName="TagIcon";const Mu=()=>r(ln,{name:"timer"},()=>r("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Mu.displayName="TimerIcon";const $u=()=>r(ln,{name:"word"},()=>[r("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),r("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);$u.displayName="WordIcon";const Ft=()=>{const n=cn();return A(()=>n.value.metaLocales)};var Uk=B({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(n){const t=Ft();return()=>n.author.length?r("span",{class:"page-author-info","aria-label":`${t.value.author}${n.pure?"":"🖊"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[r(xu),r("span",n.author.map(s=>s.url?r("a",{class:"page-author-item",href:s.url,target:"_blank",rel:"noopener noreferrer"},s.name):r("span",{class:"page-author-item"},s.name))),r("span",{property:"author",content:n.author.map(s=>s.name).join(", ")})]):null}}),Jk=B({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(n){const t=zn(),s=un(),e=Ft(),a=(l,i="")=>{i&&s.value.path!==i&&(l.preventDefault(),t.push(i))};return()=>n.category.length?r("span",{class:"page-category-info","aria-label":`${e.value.category}${n.pure?"":"🌈"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[r(Lu),n.category.map(({name:l,path:i})=>r("span",{class:["page-category-item",{[`category${Ma(l,9)}`]:!n.pure,clickable:i}],role:i?"navigation":"",onClick:o=>a(o,i)},l)),r("meta",{property:"articleSection",content:n.category.map(({name:l})=>l).join(",")})]):null}}),Gk=B({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(n){const t=vi(),s=Ft();return()=>n.date?r("span",{class:"page-date-info","aria-label":`${s.value.date}${n.pure?"":"📅"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[r(Cu),r("span",r(Oa,()=>n.localizedDate||n.date.toLocaleDateString(t.value))),r("meta",{property:"datePublished",content:n.date.toISOString()||""})]):null}}),Wk=B({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(n){const t=Ft();return()=>n.isOriginal?r("span",{class:"page-original-info"},t.value.origin):null}}),Kk=B({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(n){const t=At(),s=Ft(),e=Cn(),a=F(0);return Bp(e,()=>{const l=e.value.textContent;l&&!isNaN(Number(l))&&(a.value=Number(l))},{childList:!0}),()=>n.pageview?r("span",{class:"page-pageview-info","aria-label":`${s.value.views}${n.pure?"":"🔢"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[r(a.value<1e3?Du:Ou),r("span",{ref:e,id:"ArtalkPV",class:"waline-pageview-count","data-path":pn(n.pageview)?n.pageview:xn(t.path)},"...")]):null}}),Qk=B({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const t=Ft(),s=A(()=>{if(!n.readingTime)return null;const{minutes:e}=n.readingTime;return e<1?"PT1M":`PT${Math.round(e)}M`});return()=>{var e,a;return(e=n.readingTimeLocale)!=null&&e.time?r("span",{class:"page-reading-time-info","aria-label":`${t.value.readingTime}${n.pure?"":"⌛"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[r(Mu),r("span",(a=n.readingTimeLocale)==null?void 0:a.time),r("meta",{property:"timeRequired",content:s.value})]):null}}}),Yk=B({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(n){const t=zn(),s=un(),e=Ft(),a=(l,i="")=>{i&&s.value.path!==i&&(l.preventDefault(),t.push(i))};return()=>n.tag.length?r("span",{class:"page-tag-info","aria-label":`${e.value.tag}${n.pure?"":"🏷"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[r(Bu),n.tag.map(({name:l,path:i})=>r("span",{class:["page-tag-item",{[`tag${Ma(l,9)}`]:!n.pure,clickable:i}],role:i?"navigation":"",onClick:o=>a(o,i)},l)),r("meta",{property:"keywords",content:n.tag.map(({name:l})=>l).join(",")})]):null}}),Xk=B({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const t=Ft();return()=>{var s,e,a;return(s=n.readingTimeLocale)!=null&&s.words?r("span",{class:"page-word-info","aria-label":`${t.value.words}${n.pure?"":"🔠"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[r($u),r("span",(e=n.readingTimeLocale)==null?void 0:e.words),r("meta",{property:"wordCount",content:(a=n.readingTime)==null?void 0:a.words})]):null}}}),Vu=B({name:"PageInfo",components:{AuthorInfo:Uk,CategoryInfo:Jk,DateInfo:Gk,OriginalInfo:Wk,PageViewInfo:Kk,ReadingTimeInfo:Qk,TagInfo:Yk,WordInfo:Xk},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(n){const t=ae();return()=>n.items?r("div",{class:"page-info"},n.items.map(s=>r(tt(`${s}Info`),{...n.info,pure:t.value}))):null}}),Zk=B({name:"PrintButton",setup(){const n=os(),t=cn();return()=>n.value.print===!1?null:r("button",{type:"button",class:"print-button",title:t.value.metaLocales.print,onClick:()=>{window.print()}},r(Ru))}});const nf=({title:n,level:t,slug:s})=>r(Vn,{to:`#${s}`,class:["toc-link",`level${t}`]},()=>n),Bl=(n,t)=>{const s=At();return n.length&&t>0?r("ul",{class:"toc-list"},n.map(e=>{const a=Bl(e.children,t-1);return[r("li",{class:["toc-item",{active:Ei(s,`#${e.slug}`)}]},nf(e)),a?r("li",a):null]})):null};var ju=B({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(n,{slots:t}){const s=At(),e=un(),a=Ft(),l=Cn(),i=F("-1.7rem"),o=c=>{var u;(u=l.value)==null||u.scrollTo({top:c,behavior:"smooth"})},p=()=>{if(l.value){const c=document.querySelector(".toc-item.active");c?i.value=`${c.getBoundingClientRect().top-l.value.getBoundingClientRect().top+l.value.scrollTop}px`:i.value="-1.7rem"}else i.value="-1.7rem"};return vn(()=>{en(()=>s.hash,c=>{if(l.value){const u=document.querySelector(`#toc a.toc-link[href$="${c}"]`);if(!u)return;const{top:d,height:m}=l.value.getBoundingClientRect(),{top:g,height:f}=u.getBoundingClientRect();g<d?o(l.value.scrollTop+g-d):g+f>d+m&&o(l.value.scrollTop+g+f-d-m)}}),en(()=>s.fullPath,()=>p(),{flush:"post",immediate:!0})}),()=>{var c,u;const d=n.items.length?Bl(n.items,n.headerDepth):e.value.headers?Bl(e.value.headers,n.headerDepth):null;return d?r("div",{class:"toc-place-holder"},[r("aside",{id:"toc"},[(c=t.before)==null?void 0:c.call(t),r("div",{class:"toc-header"},[a.value.toc,r(Zk)]),r("div",{class:"toc-wrapper",ref:l},[d,r("div",{class:"toc-marker",style:{top:i.value}})]),(u=t.after)==null?void 0:u.call(t)])]):null}}}),Mi=B({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(n){const t=un(),s=cn(),e=Cn(),a=({target:l})=>{const i=document.querySelector(l.hash);if(i){const o=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",o)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",o),i.focus(),window.scrollTo(0,0)}};return vn(()=>{en(()=>t.value.path,()=>e.value.focus())}),()=>[r("span",{ref:e,tabindex:"-1"}),r("a",{href:`#${n.content}`,class:"vp-skip-link sr-only",onClick:a},s.value.routeLocales.skipToContent)]}});let pl=null,ia=null;const tf={wait:()=>pl,pending:()=>{pl=new Promise(n=>ia=n)},resolve:()=>{ia==null||ia(),pl=null,ia=null}},Fu=()=>tf;var Nu=B({name:"FadeSlideY",slots:Object,setup(n,{slots:t}){const{resolve:s,pending:e}=Fu();return()=>r(ts,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:s,onBeforeLeave:e},()=>{var a;return(a=t.default)==null?void 0:a.call(t)})}});const sf=(n,t)=>{const s=n.replace(t,"/").split("/"),e=[];let a=di(t);return s.forEach((l,i)=>{i!==s.length-1?(a+=`${l}/`,e.push({link:a,name:l||"Home"})):l!==""&&(a+=l,e.push({link:a,name:l}))}),e},qu=(n,{slots:t})=>{var s,e;const{bgImage:a,bgImageDark:l,bgImageStyle:i,color:o,description:p,image:c,imageDark:u,header:d,features:m=[]}=n;return r("div",{class:"vp-feature-wrapper"},[a?r("div",{class:["vp-feature-bg",{light:l}],style:[{"background-image":`url(${a})`},i]}):null,l?r("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${l})`},i]}):null,r("div",{class:"vp-feature",style:o?{color:o}:{}},[((s=t.image)==null?void 0:s.call(t,n))||[c?r("img",{class:["vp-feature-image",{light:u}],src:xn(c),alt:d}):null,u?r("img",{class:"vp-feature-image dark",src:xn(u),alt:d}):null],((e=t.info)==null?void 0:e.call(t,n))||[d?r("h2",{class:"vp-feature-header"},d):null,p?r("p",{class:"vp-feature-description",innerHTML:p}):null],m.length?r("div",{class:"vp-features"},m.map(({icon:g,title:f,details:w,link:I})=>{const k=[r("h3",{class:"vp-feature-title"},[r(Gn,{icon:g}),r("span",{innerHTML:f})]),r("p",{class:"vp-feature-details",innerHTML:w})];return I?_a(I)?r("a",{class:"vp-feature-item link",href:I,role:"navigation","aria-label":f,target:"_blank"},k):r(Vn,{class:"vp-feature-item link",to:I,role:"navigation","aria-label":f},()=>k):r("div",{class:"vp-feature-item"},k)})):null])])};qu.displayName="FeaturePanel";var Tr=qu,ef=B({name:"HeroInfo",slots:Object,setup(n,{slots:t}){const s=yn(),e=$e(),a=A(()=>s.value.heroFullScreen??!1),l=A(()=>{const{heroText:c,tagline:u}=s.value;return{text:c??e.value.title??"Hello",tagline:u??e.value.description??"",isFullScreen:a.value}}),i=A(()=>{const{heroText:c,heroImage:u,heroImageDark:d,heroAlt:m,heroImageStyle:g}=s.value;return{image:u?xn(u):null,imageDark:d?xn(d):null,heroStyle:g,alt:m||c||"hero image",isFullScreen:a.value}}),o=A(()=>{const{bgImage:c,bgImageDark:u,bgImageStyle:d}=s.value;return{image:Mt(c)?xn(c):null,imageDark:Mt(u)?xn(u):null,bgStyle:d,isFullScreen:a.value}}),p=A(()=>s.value.actions??[]);return()=>{var c,u,d;return r("header",{class:["vp-hero-info-wrapper",{fullscreen:a.value}]},[((c=t.heroBg)==null?void 0:c.call(t,o.value))||[o.value.image?r("div",{class:["vp-hero-mask",{light:o.value.imageDark}],style:[{"background-image":`url(${o.value.image})`},o.value.bgStyle]}):null,o.value.imageDark?r("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${o.value.imageDark})`},o.value.bgStyle]}):null],r("div",{class:"vp-hero-info"},[((u=t.heroImage)==null?void 0:u.call(t,i.value))||r(fn,{appear:!0,type:"group"},()=>[i.value.image?r("img",{key:"light",class:["vp-hero-image",{light:i.value.imageDark}],style:i.value.heroStyle,src:i.value.image,alt:i.value.alt}):null,i.value.imageDark?r("img",{key:"dark",class:"vp-hero-image dark",style:i.value.heroStyle,src:i.value.imageDark,alt:i.value.alt}):null]),((d=t.heroInfo)==null?void 0:d.call(t,l.value))??r("div",{class:"vp-hero-infos"},[l.value.text?r(fn,{appear:!0,delay:.04},()=>r("h1",{id:"main-title"},l.value.text)):null,l.value.tagline?r(fn,{appear:!0,delay:.08},()=>r("p",{class:"vp-description",innerHTML:l.value.tagline})):null,p.value.length?r(fn,{appear:!0,delay:.12},()=>r("p",{class:"vp-actions"},p.value.map(m=>r(Qn,{class:["vp-action",m.type||"default"],config:m,noExternalLinkIcon:!0})))):null])])])}}});const zu=(n,{slots:t})=>{var s,e,a;const{bgImage:l,bgImageDark:i,bgImageStyle:o,color:p,description:c,image:u,imageDark:d,header:m,highlights:g=[],type:f="un-order"}=n;return r("div",{class:"vp-highlight-wrapper",style:p?{color:p}:{}},[l?r("div",{class:["vp-highlight-bg",{light:i}],style:[{"background-image":`url(${l})`},o]}):null,i?r("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${i})`},o]}):null,r("div",{class:"vp-highlight"},[((s=t.image)==null?void 0:s.call(t,n))||[u?r("img",{class:["vp-highlight-image",{light:d}],src:xn(u),alt:m}):null,d?r("img",{class:"vp-highlight-image dark",src:xn(d),alt:m}):null],((e=t.info)==null?void 0:e.call(t,n))||[r("div",{class:"vp-highlight-info-wrapper"},r("div",{class:"vp-highlight-info"},[m?r("h2",{class:"vp-highlight-header",innerHTML:m}):null,c?r("p",{class:"vp-highlight-description",innerHTML:c}):null,((a=t.highlights)==null?void 0:a.call(t,g))||r(f==="order"?"ol":f==="no-order"?"dl":"ul",{class:"vp-highlights"},g.map(({icon:w,title:I,details:k,link:y})=>{const C=[r(f==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[w?r(Gn,{class:"vp-highlight-icon",icon:w}):null,r("span",{innerHTML:I})]),k?r(f==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:k}):null];return r(f==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:y}]},y?Ug(y)?r("a",{class:"vp-highlight-item link",href:y,role:"navigation","aria-label":I,target:"_blank"},C):r(Vn,{class:"vp-highlight-item link",to:y,role:"navigation","aria-label":I},()=>C):r("div",{class:"vp-highlight-item"},C))}))]))]])])};zu.displayName="HighlightPanel";var af=zu,lf=B({name:"HomePage",slots:Object,setup(n,{slots:t}){const s=ae(),e=yn(),a=A(()=>{const{features:i}=e.value;return K(i)?i:null}),l=A(()=>{const{highlights:i}=e.value;return K(i)?i:null});return()=>{var i,o,p,c;return r("main",{id:"main-content",class:["vp-project-home ",{pure:s.value}],"aria-labelledby":e.value.heroText===null?"":"main-title"},[(i=t.top)==null?void 0:i.call(t),r(ef),((o=l.value)==null?void 0:o.map(u=>"features"in u?r(Tr,u):r(af,u)))||(a.value?r(fn,{appear:!0,delay:.24},()=>r(Tr,{features:a.value})):null),(p=t.center)==null?void 0:p.call(t),r(fn,{appear:!0,delay:.32},()=>r(Bi)),(c=t.bottom)==null?void 0:c.call(t)])}}}),of=B({name:"BreadCrumb",setup(){const n=zn(),t=un(),s=jt(),e=yn(),a=cn(),l=Cn([]),i=A(()=>(e.value.breadcrumb||e.value.breadcrumb!==!1&&a.value.breadcrumb!==!1)&&l.value.length>1),o=A(()=>e.value.breadcrumbIcon||e.value.breadcrumbIcon!==!1&&a.value.breadcrumbIcon!==!1),p=()=>{const c=n.getRoutes(),u=sf(t.value.path,s.value).map(({link:d,name:m})=>{const g=c.find(f=>f.path===d);if(g){const{meta:f,path:w}=Ks(n,g.path);return{title:f[An.shortTitle]||f[An.title]||m,icon:f[An.icon],path:w}}return null}).filter(d=>d!==null);u.length>1&&(l.value=u)};return vn(()=>{p(),en(()=>t.value.path,p)}),()=>r("nav",{class:["vp-breadcrumb",{disable:!i.value}]},i.value?r("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},l.value.map((c,u)=>r("li",{class:{"is-active":l.value.length-1===u},property:"itemListElement",typeof:"ListItem"},[r(Vn,{to:c.path,property:"item",typeof:"WebPage"},()=>[o.value?r(Gn,{icon:c.icon}):null,r("span",{property:"name"},c.title||"Unknown")]),r("meta",{property:"position",content:u+1})]))):[])}});const xr=n=>{const t=zn();return n===!1?!1:pn(n)?js(t,n,!0):Me(n)?n:null},Ml=(n,t,s)=>{const e=n.findIndex(a=>a.link===t);if(e!==-1){const a=n[e+s];return a!=null&&a.link?a:null}for(const a of n)if(a.children){const l=Ml(a.children,t,s);if(l)return l}return null};var rf=B({name:"PageNav",setup(){const n=cn(),t=yn(),s=Oi(),e=un(),a=Fe(),l=A(()=>{const o=xr(t.value.prev);return o===!1?null:o||(n.value.prevLink===!1?null:Ml(s.value,e.value.path,-1))}),i=A(()=>{const o=xr(t.value.next);return o===!1?null:o||(n.value.nextLink===!1?null:Ml(s.value,e.value.path,1))});return jn("keydown",o=>{o.altKey&&(o.key==="ArrowRight"?i.value&&(a(i.value.link),o.preventDefault()):o.key==="ArrowLeft"&&l.value&&(a(l.value.link),o.preventDefault()))}),()=>l.value||i.value?r("nav",{class:"vp-page-nav"},[l.value?r(Qn,{class:"prev",config:l.value},()=>{var o,p;return[r("div",{class:"hint"},[r("span",{class:"arrow start"}),n.value.metaLocales.prev]),r("div",{class:"link"},[r(Gn,{icon:(o=l.value)==null?void 0:o.icon}),(p=l.value)==null?void 0:p.text])]}):null,i.value?r(Qn,{class:"next",config:i.value},()=>{var o,p;return[r("div",{class:"hint"},[n.value.metaLocales.next,r("span",{class:"arrow end"})]),r("div",{class:"link"},[(o=i.value)==null?void 0:o.text,r(Gn,{icon:(p=i.value)==null?void 0:p.icon})])]}):null]):null}});const cf={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},pf=({docsRepo:n,docsBranch:t,docsDir:s,filePathRelative:e,editLinkPattern:a})=>{if(!e)return null;const l=Ap(n);let i;return a?i=a:l!==null&&(i=cf[l]),i?i.replace(/:repo/,Es(n)?n:`https://github.com/${n}`).replace(/:branch/,t).replace(/:path/,Uc(`${di(s)}/${e}`)):null},uf=()=>{const n=cn(),t=un(),s=yn();return A(()=>{const{repo:e,docsRepo:a=e,docsBranch:l="main",docsDir:i="",editLink:o,editLinkPattern:p=""}=n.value;if(!(s.value.editLink??o??!0)||!a)return null;const c=pf({docsRepo:a,docsBranch:l,docsDir:i,editLinkPattern:p,filePathRelative:t.value.filePathRelative});return c?{text:n.value.metaLocales.editLink,link:c}:null})},df=()=>{const n=$e(),t=cn(),s=un(),e=yn();return A(()=>{var a,l;return!(e.value.lastUpdated??t.value.lastUpdated??!0)||!((a=s.value.git)!=null&&a.updatedTime)?null:new Date((l=s.value.git)==null?void 0:l.updatedTime).toLocaleString(n.value.lang)})},vf=()=>{const n=cn(),t=un(),s=yn();return A(()=>{var e;return s.value.contributors??n.value.contributors??!0?((e=t.value.git)==null?void 0:e.contributors)??null:null})};var mf=B({name:"PageTitle",setup(){const n=un(),t=yn(),s=cn(),{info:e,items:a}=bk();return()=>r("div",{class:"vp-page-title"},[r("h1",[s.value.titleIcon===!1?null:r(Gn,{icon:t.value.icon}),n.value.title]),r(Vu,{info:e.value,...a.value===null?{}:{items:a.value}}),r("hr")])}});const Hu=()=>r(ln,{name:"edit"},()=>[r("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),r("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Hu.displayName="EditIcon";var gf=B({name:"PageMeta",setup(){const n=cn(),t=uf(),s=df(),e=vf();return()=>{const{metaLocales:a}=n.value;return r("footer",{class:"page-meta"},[t.value?r("div",{class:"meta-item edit-link"},r(Qn,{class:"label",config:t.value},{before:()=>r(Hu)})):null,r("div",{class:"meta-item git-info"},[s.value?r("div",{class:"update-time"},[r("span",{class:"label"},`${a.lastUpdated}: `),r(Oa,()=>r("span",{class:"info"},s.value))]):null,e.value&&e.value.length?r("div",{class:"contributors"},[r("span",{class:"label"},`${a.contributors}: `),e.value.map(({email:l,name:i},o)=>[r("span",{class:"contributor",title:`email: ${l}`},i),o!==e.value.length-1?",":""])]):null])])}}}),bf=B({name:"NormalPage",slots:Object,setup(n,{slots:t}){const s=yn(),e=un(),{isDarkmode:a}=qe(),l=cn(),i=A(()=>s.value.toc||s.value.toc!==!1&&l.value.toc!==!1);return()=>r("main",{id:"main-content",class:"vp-page"},r(ht("LocalEncrypt")?tt("LocalEncrypt"):kp,()=>{var o,p,c,u;return[(o=t.top)==null?void 0:o.call(t),s.value.cover?r("img",{class:"page-cover",src:xn(s.value.cover),alt:e.value.title,"no-view":""}):null,r(of),r(mf),i.value?r(ju,{headerDepth:s.value.headerDepth??l.value.headerDepth??2},{before:()=>{var d;return(d=t.tocBefore)==null?void 0:d.call(t)},after:()=>{var d;return(d=t.tocAfter)==null?void 0:d.call(t)}}):null,(p=t.contentBefore)==null?void 0:p.call(t),r(Bi),(c=t.contentAfter)==null?void 0:c.call(t),r(gf),r(rf),ht("CommentService")?r(tt("CommentService"),{darkmode:a.value}):null,(u=t.bottom)==null?void 0:u.call(t)]}))}}),kf=B({name:"Layout",setup(){const n=os(),t=cn(),s=un(),e=yn(),{isMobile:a}=Ne(),l=A(()=>{var i,o;return((i=t.value.blog)==null?void 0:i.sidebarDisplay)||((o=n.value.blog)==null?void 0:o.sidebarDisplay)||"mobile"});return()=>[r(Mi),r(Ri,{},{default:()=>e.value.home?r(lf):r(Nu,()=>r(bf,{key:s.value.path})),...l.value!=="none"?{navScreenBottom:()=>r(tt("BloggerInfo"))}:{},...!a.value&&l.value==="always"?{sidebar:()=>r(tt("BloggerInfo"))}:{}})]}}),ff=B({name:"NotFoundHint",setup(){const n=cn(),t=()=>{const s=n.value.routeLocales.notFoundMsg;return s[Math.floor(Math.random()*s.length)]};return()=>r("div",{class:"not-found-hint"},[r("p",{class:"error-code"},"404"),r("h1",{class:"error-title"},n.value.routeLocales.notFoundTitle),r("p",{class:"error-hint"},t())])}}),hf=B({name:"NotFound",slots:Object,setup(n,{slots:t}){const s=jt(),e=cn(),{navigate:a}=Sl({to:e.value.home??s.value});return()=>[r(Mi),r(Ri,{noSidebar:!0},()=>{var l;return r("main",{id:"main-content",class:"vp-page not-found"},((l=t.default)==null?void 0:l.call(t))||[r(ff),r("div",{class:"actions"},[r("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},e.value.routeLocales.back),r("button",{type:"button",class:"action-button",onClick:()=>a()},e.value.routeLocales.home)])])})]}});const yf={GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>'},_f={category:{"/":{path:"/category/",map:{算法:{path:"/category/%E7%AE%97%E6%B3%95/",keys:["v-2db914b0","v-434b990c","v-013fe386","v-2c0b6453","v-7f701d4a","v-e8550a0c"]},技巧:{path:"/category/%E6%8A%80%E5%B7%A7/",keys:["v-2669abe4","v-0041281f"]},后端框架:{path:"/category/%E5%90%8E%E7%AB%AF%E6%A1%86%E6%9E%B6/",keys:["v-8577ef52","v-d1d1d3cc","v-7a1ee8c4","v-4b591cc2","v-d1989f48","v-f63cc7c8","v-632f1be4","v-6fb57558","v-2706221b","v-7a9a6e12","v-97a18dc8"]},elk:{path:"/category/elk/",keys:["v-8577ef52"]},Mybatis:{path:"/category/mybatis/",keys:["v-4b591cc2"]},"MyBatis-Plus":{path:"/category/mybatis-plus/",keys:["v-d1989f48"]},RabbitMQ:{path:"/category/rabbitmq/",keys:["v-d1d1d3cc"]},Spring:{path:"/category/spring/",keys:["v-f63cc7c8"]},SpringBoot:{path:"/category/springboot/",keys:["v-632f1be4","v-6fb57558"]},SpringCloud:{path:"/category/springcloud/",keys:["v-2706221b","v-7a9a6e12"]},SpringMVC:{path:"/category/springmvc/",keys:["v-97a18dc8"]},swagger:{path:"/category/swagger/",keys:["v-7a1ee8c4"]},后端技术:{path:"/category/%E5%90%8E%E7%AB%AF%E6%8A%80%E6%9C%AF/",keys:["v-2ac42c0b","v-41f030d6","v-6d241b5d","v-d3bc8416","v-2d51a49f","v-5b2d3140","v-476eae3c","v-106ab87c"]},activiti:{path:"/category/activiti/",keys:["v-2ac42c0b"]},android:{path:"/category/android/",keys:["v-41f030d6"]},Bash:{path:"/category/bash/",keys:["v-6d241b5d","v-d3bc8416"]},docker:{path:"/category/docker/",keys:["v-2d51a49f","v-5b2d3140"]},maven:{path:"/category/maven/",keys:["v-476eae3c"]},yaml:{path:"/category/yaml/",keys:["v-106ab87c"]},数据库:{path:"/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",keys:["v-4f1a648a","v-02544884","v-5196b250","v-2179c7dc","v-468f0997"]},Mysql:{path:"/category/mysql/",keys:["v-5196b250","v-2179c7dc"]},Oracle:{path:"/category/oracle/",keys:["v-468f0997"]},Redis:{path:"/category/redis/",keys:["v-4f1a648a"]},编程语言:{path:"/category/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/",keys:["v-0357f249","v-c3c11a36","v-4f00b37c","v-eff6200a","v-31bde1ba","v-f33d5ffc","v-6e13ebe8","v-0f87f09a","v-3f21900f","v-36970167","v-86a4c8da","v-88b1b032","v-ab8fb5bc","v-7ad12457","v-08abb1af"]},前端:{path:"/category/%E5%89%8D%E7%AB%AF/",keys:["v-0357f249","v-c3c11a36","v-4f00b37c","v-eff6200a","v-31bde1ba","v-f33d5ffc"]},Java:{path:"/category/java/",keys:["v-6e13ebe8","v-0f87f09a","v-3f21900f","v-36970167","v-86a4c8da","v-88b1b032","v-ab8fb5bc","v-7ad12457"]},Python:{path:"/category/python/",keys:["v-08abb1af"]},NoSql:{path:"/category/nosql/",keys:["v-02544884"]},MongoDB:{path:"/category/mongodb/",keys:["v-02544884"]},前端框架:{path:"/category/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/",keys:["v-b7c7acc0"]},vue:{path:"/category/vue/",keys:["v-b7c7acc0"]},前端技术:{path:"/category/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/",keys:["v-4d675cd4"]},websocket:{path:"/category/websocket/",keys:["v-4d675cd4"]}}}},tag:{"/":{path:"/tag/",map:{算法:{path:"/tag/%E7%AE%97%E6%B3%95/",keys:["v-2db914b0","v-434b990c","v-013fe386","v-2c0b6453","v-7f701d4a","v-e8550a0c"]},技巧:{path:"/tag/%E6%8A%80%E5%B7%A7/",keys:["v-2669abe4","v-0041281f"]},elk:{path:"/tag/elk/",keys:["v-8577ef52"]},elasticsearch:{path:"/tag/elasticsearch/",keys:["v-8577ef52"]},Mybatis:{path:"/tag/mybatis/",keys:["v-4b591cc2"]},"MyBatis-Plus":{path:"/tag/mybatis-plus/",keys:["v-d1989f48"]},RabbitMQ:{path:"/tag/rabbitmq/",keys:["v-d1d1d3cc"]},Spring:{path:"/tag/spring/",keys:["v-f63cc7c8"]},SpringBoot:{path:"/tag/springboot/",keys:["v-632f1be4","v-6fb57558"]},SpringCloud:{path:"/tag/springcloud/",keys:["v-2706221b","v-7a9a6e12"]},项目总结:{path:"/tag/%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/",keys:["v-2706221b","v-b7c7acc0"]},SpringMVC:{path:"/tag/springmvc/",keys:["v-97a18dc8"]},swagger:{path:"/tag/swagger/",keys:["v-7a1ee8c4"]},activiti:{path:"/tag/activiti/",keys:["v-2ac42c0b"]},工作流:{path:"/tag/%E5%B7%A5%E4%BD%9C%E6%B5%81/",keys:["v-2ac42c0b"]},android:{path:"/tag/android/",keys:["v-41f030d6"]},Bash:{path:"/tag/bash/",keys:["v-6d241b5d","v-d3bc8416"]},docker:{path:"/tag/docker/",keys:["v-2d51a49f","v-5b2d3140"]},maven:{path:"/tag/maven/",keys:["v-476eae3c"]},yaml:{path:"/tag/yaml/",keys:["v-106ab87c"]},数据库:{path:"/tag/%E6%95%B0%E6%8D%AE%E5%BA%93/",keys:["v-5196b250","v-2179c7dc"]},Mysql:{path:"/tag/mysql/",keys:["v-5196b250","v-2179c7dc"]},Oracle:{path:"/tag/oracle/",keys:["v-468f0997"]},Redis:{path:"/tag/redis/",keys:["v-4f1a648a"]},CSS:{path:"/tag/css/",keys:["v-0357f249"]},JavaScript:{path:"/tag/javascript/",keys:["v-c3c11a36","v-4f00b37c","v-eff6200a"]},HTML:{path:"/tag/html/",keys:["v-31bde1ba","v-f33d5ffc"]},Java:{path:"/tag/java/",keys:["v-6e13ebe8","v-0f87f09a","v-3f21900f","v-36970167","v-86a4c8da","v-88b1b032","v-ab8fb5bc","v-7ad12457"]},Python:{path:"/tag/python/",keys:["v-08abb1af"]},MongoDB:{path:"/tag/mongodb/",keys:["v-02544884"]},vue:{path:"/tag/vue/",keys:["v-b7c7acc0"]},websocket:{path:"/tag/websocket/",keys:["v-4d675cd4"]}}}}},Ef={article:{"/":{path:"/article/",keys:["v-594a4121","v-2251dc2c","v-37cb64ed","v-33ad279c","v-b64bd99a","v-f1eac03e","v-26aad609","v-2dac4d22","v-8ee507d2","v-00d412b2","v-4251ce4f","v-946db9a6","v-184f4da6","v-2e3eac9e","v-2db914b0","v-434b990c","v-013fe386","v-f4face08","v-7bd30a60","v-7dd7f45d","v-2ccdf990","v-599fbcfb","v-2365654c","v-8577ef52","v-d1d1d3cc","v-7a1ee8c4","v-4f1a648a","v-4d18a865","v-e25b971c","v-9087045a","v-02544884","v-2c0b6453","v-7f701d4a","v-e8550a0c","v-2669abe4","v-0041281f","v-4b591cc2","v-d1989f48","v-f63cc7c8","v-632f1be4","v-6fb57558","v-2706221b","v-7a9a6e12","v-97a18dc8","v-2ac42c0b","v-41f030d6","v-6d241b5d","v-d3bc8416","v-2d51a49f","v-5b2d3140","v-476eae3c","v-106ab87c","v-5196b250","v-2179c7dc","v-468f0997","v-0357f249","v-c3c11a36","v-4f00b37c","v-eff6200a","v-31bde1ba","v-f33d5ffc","v-6e13ebe8","v-0f87f09a","v-3f21900f","v-36970167","v-86a4c8da","v-88b1b032","v-ab8fb5bc","v-7ad12457","v-08abb1af","v-b7c7acc0","v-4d675cd4"]}},star:{"/":{path:"/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-594a4121","v-2251dc2c","v-37cb64ed","v-33ad279c","v-b64bd99a","v-f1eac03e","v-26aad609","v-2dac4d22","v-8ee507d2","v-00d412b2","v-4251ce4f","v-946db9a6","v-184f4da6","v-2e3eac9e","v-2db914b0","v-434b990c","v-013fe386","v-f4face08","v-7bd30a60","v-7dd7f45d","v-2ccdf990","v-599fbcfb","v-2365654c","v-8577ef52","v-d1d1d3cc","v-7a1ee8c4","v-4f1a648a","v-4d18a865","v-e25b971c","v-9087045a","v-02544884","v-2c0b6453","v-7f701d4a","v-e8550a0c","v-2669abe4","v-0041281f","v-4b591cc2","v-d1989f48","v-f63cc7c8","v-632f1be4","v-6fb57558","v-2706221b","v-7a9a6e12","v-97a18dc8","v-2ac42c0b","v-41f030d6","v-6d241b5d","v-d3bc8416","v-2d51a49f","v-5b2d3140","v-476eae3c","v-106ab87c","v-5196b250","v-2179c7dc","v-468f0997","v-0357f249","v-c3c11a36","v-4f00b37c","v-eff6200a","v-31bde1ba","v-f33d5ffc","v-6e13ebe8","v-0f87f09a","v-3f21900f","v-36970167","v-86a4c8da","v-88b1b032","v-ab8fb5bc","v-7ad12457","v-08abb1af","v-b7c7acc0","v-4d675cd4"]}}},Cr=F(_f),Uu=(n="")=>{const t=un(),s=zn(),e=jt();return A(()=>{var a;const l=n||((a=yn().value.blog)==null?void 0:a.key)||"";if(!l)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const i=s.getRoutes();if(!Cr.value[l])throw new Error(`useBlogCategory: key ${l} is invalid`);const o=Cr.value[l][e.value],p={path:o.path,map:{}};for(const c in o.map){const u=o.map[c];p.map[c]={path:u.path,items:[]};for(const d of u.keys){const m=i.find(({name:g})=>g===d);if(m){const g=Ks(s,m.path);p.map[c].items.push({path:g.path,info:g.meta})}}t.value.path===u.path&&(p.currentItems=p.map[c].items)}return p})},Lr=F(Ef),Va=(n="")=>{const t=zn(),s=jt();return A(()=>{var e;const a=n||((e=yn().value.blog)==null?void 0:e.key)||"";if(!a)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!Lr.value[a])throw new Error(`useBlogType: key ${n} is invalid`);const l=t.getRoutes(),i=Lr.value[a][s.value],o={path:i.path,items:[]};for(const p of i.keys){const c=l.find(({name:u})=>u===p);if(c){const u=Ks(t,c.path);o.items.push({path:u.path,info:u.meta})}}return o})};const Af="/assets/hero-197a9d2d.jpg",Ju=Symbol.for("categoryMap"),ze=()=>{const n=kn(Ju);if(!n)throw new Error("useCategoryMap() is called without provider.");return n},wf=()=>{const n=Uu("category");ft(Ju,n)},He=()=>{const n=os(),t=cn();return A(()=>({...n.value.blog,...t.value.blog}))},Gu=Symbol.for("tagMap"),Ue=()=>{const n=kn(Gu);if(!n)throw new Error("useTagMap() is called without provider.");return n},If=()=>{const n=Uu("tag");ft(Gu,n)},Sf=n=>{const t=cn();return A(()=>{const{[An.author]:s}=n.value;return s?Te(s):s===!1?[]:Te(t.value.author,!1)})},Pf=n=>{const t=ze();return A(()=>yp(n.value[An.category]).map(s=>({name:s,path:t.value.map[s].path})))},Tf=n=>{const t=Ue();return A(()=>_p(n.value[An.tag]).map(s=>({name:s,path:t.value.map[s].path})))},xf=n=>A(()=>{const{[An.date]:t}=n.value;return hi(t)}),Cf=n=>{const t=ne(n,"info"),s=He(),e=Sf(t),a=Pf(t),l=Tf(t),i=xf(t),o=iu(),p=A(()=>({author:e.value,category:a.value,date:i.value,localizedDate:t.value[An.localizedDate]||"",tag:l.value,isOriginal:t.value[An.isOriginal]||!1,readingTime:t.value[An.readingTime]||null,readingTimeLocale:t.value[An.readingTime]&&o.value?lu(t.value[An.readingTime],o.value):null,pageview:n.path})),c=A(()=>s.value.articleInfo);return{info:p,items:c}},Wu=Symbol(""),Je=()=>{const n=kn(Wu);if(!n)throw new Error("useArticles() is called without provider.");return n},Lf=()=>{const n=Va("article");ft(Wu,n)},Ku=Symbol(""),$i=()=>{const n=kn(Ku);if(!n)throw new Error("useStars() is called without provider.");return n},Df=()=>{const n=Va("star");ft(Ku,n)},Qu=Symbol(""),Vi=()=>{const n=kn(Qu);if(!n)throw new Error("useTimelines() is called without provider.");return n},Of=()=>{const n=Va("timeline"),t=A(()=>{const s=[];return n.value.items.forEach(({info:e,path:a})=>{const l=hi(e[An.date]),i=l==null?void 0:l.getFullYear(),o=l?l.getMonth()+1:null,p=l==null?void 0:l.getDate();i&&o&&p&&((!s[0]||s[0].year!==i)&&s.unshift({year:i,items:[]}),s[0].items.push({date:`${o}/${p}`,info:e,path:a}))}),{...n.value,config:s.reverse()}});ft(Qu,t)},Rf=()=>{Lf(),wf(),Df(),If(),Of()};var Bf=B({name:"SocialMedia",setup(){const n=He(),t=ae(),s=A(()=>{const e=n.value.medias;return e?te(e).map(([a,l])=>({name:a,icon:yf[a],url:l})):[]});return()=>s.value.length?r("div",{class:"vp-social-medias"},s.value.map(({name:e,icon:a,url:l})=>r("a",{class:"vp-social-media",href:l,rel:"noopener noreferrer",target:"_blank","aria-label":e,...t.value?{}:{"data-balloon-pos":"up"},innerHTML:a}))):null}}),ji=B({name:"BloggerInfo",setup(){const n=He(),t=$e(),s=cn(),e=Je(),a=ze(),l=Ue(),i=Vi(),o=Fe(),p=A(()=>{var m;return n.value.name||((m=Te(s.value.author)[0])==null?void 0:m.name)||t.value.title}),c=A(()=>n.value.avatar||s.value.logo),u=A(()=>s.value.blogLocales),d=A(()=>n.value.intro);return()=>{const{article:m,category:g,tag:f,timeline:w}=u.value,I=[[e.value.path,e.value.items.length,m],[a.value.path,et(a.value.map).length,g],[l.value.path,et(l.value.map).length,f],[i.value.path,i.value.items.length,w]];return r("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[r("div",{class:"vp-blogger",...d.value?{style:{cursor:"pointer"},"aria-label":u.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>o(d.value)}:{}},[c.value?r("img",{class:["vp-blogger-avatar",{round:n.value.roundAvatar}],src:xn(c.value),property:"image",alt:"Blogger Avatar"}):null,p.value?r("div",{class:"vp-blogger-name",property:"name"},p.value):null,n.value.description?r("div",{class:"vp-blogger-description",innerHTML:n.value.description}):null,d.value?r("meta",{property:"url",content:xn(d.value)}):null]),r("div",{class:"vp-blog-counts"},I.map(([k,y,C])=>r(Vn,{class:"vp-blog-count",to:k},()=>[r("div",{class:"count"},y),r("div",C)]))),r(Bf)])}}});const $l=()=>r(ln,{name:"category"},()=>r("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));$l.displayName="CategoryIcon";const Vl=()=>r(ln,{name:"tag"},()=>r("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Vl.displayName="TagIcon";const Fi=()=>r(ln,{name:"timeline"},()=>r("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Fi.displayName="TimelineIcon";const Yu=()=>r(ln,{name:"slides"},()=>r("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));Yu.displayName="SlideIcon";const Xu=()=>r(ln,{name:"sticky"},()=>[r("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);Xu.displayName="StickyIcon";const wa=()=>r(ln,{name:"article"},()=>r("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));wa.displayName="ArticleIcon";const Zu=()=>r(ln,{name:"book"},()=>r("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));Zu.displayName="BookIcon";const nd=()=>r(ln,{name:"link"},()=>r("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));nd.displayName="LinkIcon";const td=()=>r(ln,{name:"project"},()=>r("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));td.displayName="ProjectIcon";const sd=()=>r(ln,{name:"friend"},()=>r("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));sd.displayName="FriendIcon";const jl=()=>r(ln,{name:"slide-down"},()=>r("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));jl.displayName="SlideDownIcon";const ed=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});ed.displayName="EmptyIcon";const ad=()=>r(ln,{name:"lock"},()=>r("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));ad.displayName="LockIcon";var Mf=B({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(n,{slots:t}){const s=ne(n,"info"),{info:e,items:a}=Cf(n);return()=>{var l,i,o;const{[An.title]:p,[An.type]:c,[An.isEncrypted]:u=!1,[An.cover]:d,[An.excerpt]:m,[An.sticky]:g}=s.value,f=e.value;return r("div",{class:"vp-article-wrapper"},r("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((l=t.cover)==null?void 0:l.call(t,{cover:d}))||(d?[r("img",{class:"vp-article-cover",src:xn(d)}),r("meta",{property:"image",content:xn(d)})]:[]),g?r(Xu):null,r(Vn,{to:n.path},()=>{var w;return((w=t.title)==null?void 0:w.call(t,{title:p,isEncrypted:u,type:c}))||r("header",{class:"vp-article-title"},[u?r(ad):null,c===ru.slide?r(Yu):null,r("span",{property:"headline"},p)])}),((i=t.excerpt)==null?void 0:i.call(t,{excerpt:m}))||(m?r("div",{class:"vp-article-excerpt",innerHTML:m}):null),r("hr",{class:"vp-article-hr"}),((o=t.info)==null?void 0:o.call(t,{info:f}))||r(Vu,{info:f,...a.value?{items:a.value}:{}})]))}}}),$f=B({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(n,{emit:t}){let s;const e=cn(),a=F(""),l=A(()=>e.value.paginationLocales),i=A(()=>Math.ceil(n.total/n.perPage)),o=A(()=>!!i.value&&i.value!==1),p=A(()=>i.value<7?!1:n.current>4),c=A(()=>i.value<7?!1:n.current<i.value-3),u=A(()=>{const{current:g}=n;let f=1,w=i.value;const I=[];i.value>=7&&(g<=4&&g<i.value-3?(f=1,w=5):g>4&&g>=i.value-3?(w=i.value,f=i.value-4):i.value>7&&(f=g-2,w=g+2));for(let k=f;k<=w;k++)I.push(k);return I}),d=g=>t("updateCurrentPage",g),m=g=>{const f=parseInt(g);f<=i.value&&f>0?d(f):s.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${l.value.errorText.replace(/\$page/g,i.value.toString())}`)};return vn(()=>{s=new Yg}),()=>r("div",{class:"vp-pagination"},o.value?r("div",{class:"vp-pagination-list"},[r("div",{class:"vp-pagination-number "},[n.current>1?r("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>d(n.current-1)},l.value.prev):null,p.value?[r("div",{role:"navigation",onClick:()=>d(1)},1),r("div",{class:"ellipsis"},"...")]:null,u.value.map(g=>r("div",{key:g,class:{active:n.current===g},role:"navigation",onClick:()=>d(g)},g)),c.value?[r("div",{class:"ellipsis"},"..."),r("div",{role:"navigation",onClick:()=>d(i.value)},i.value)]:null,n.current<i.value?r("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>d(n.current+1)},l.value.next):null]),r("div",{class:"vp-pagination-nav"},[r("label",{for:"navigation-text"},`${l.value.navigate}: `),r("input",{id:"navigation-text",value:a.value,onInput:({target:g})=>{a.value=g.value},onKeydown:g=>{g.key==="Enter"&&(g.preventDefault(),m(a.value))}}),r("button",{class:"vp-pagination-button",role:"navigation",title:l.value.action,onClick:()=>m(a.value)},l.value.action)])]):[])}}),Ni=B({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(n){const t=At(),s=zn(),e=He(),a=F(1),l=A(()=>e.value.articlePerPage||10),i=A(()=>n.items.slice((a.value-1)*l.value,a.value*l.value)),o=p=>{a.value=p;const c={...t.query};c.page===p.toString()||p===1&&!c.page||(p===1?delete c.page:c.page=p.toString(),s.push({path:t.path,query:c}))};return vn(()=>{const{page:p}=t.query;o(p?Number(p):1),v(()=>import("./pageview-4ca95f65.js"),[]).then(({updatePageview:c})=>{c()}),en(a,()=>{const c=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,c)},100)}),en(()=>t.query,({page:c})=>{o(c?Number(c):1)})}),()=>r("div",{id:"article-list",class:"vp-article-list"},i.value.length?[...i.value.map(({info:p,path:c},u)=>r(fn,{appear:!0,delay:u*.04},()=>r(Mf,{key:c,info:p,path:c}))),r($f,{current:a.value,perPage:l.value,total:n.items.length,onUpdateCurrentPage:o})]:r(ed))}}),qi=B({name:"CategoryList",setup(){const n=un(),t=ze();return()=>r("ul",{class:"vp-category-list"},te(t.value.map).map(([s,{path:e,items:a}])=>r("li",{class:["vp-category",`vp-category${Ma(s,9)}`,{active:e===n.value.path}]},r(Vn,{to:e},()=>[s,r("span",{class:"count"},a.length)]))))}}),zi=B({name:"TagList",setup(){const n=yn(),t=Ue(),s=e=>{var a;return e===((a=n.value.blog)==null?void 0:a.name)};return()=>r("ul",{class:"tag-list-wrapper"},te(t.value.map).map(([e,{path:a,items:l}])=>r("li",{class:["tag",`tag${Ma(e,9)}`,{active:s(e)}]},r(Vn,{to:a},()=>[e,r("span",{class:"tag-num"},l.length)]))))}}),Vf=B({name:"TimelineList",setup(){const n=cn(),t=Vi(),s=Fe(),e=A(()=>n.value.blogLocales.timeline);return()=>r("div",{class:"timeline-list-wrapper"},[r("div",{class:"timeline-list-title",onClick:()=>s(t.value.path)},[r(Fi),r("span",{class:"num"},t.value.items.length),e.value]),r("hr"),r("div",{class:"timeline-content"},r("ul",{class:"timeline-list"},t.value.config.map(({year:a,items:l},i)=>r(fn,{appear:!0,delay:.08*(i+1)},()=>r("li",[r("h3",{class:"timeline-year"},a),r("ul",{class:"timeline-year-wrapper"},l.map(({date:o,info:p,path:c})=>r("li",{class:"timeline-item"},[r("span",{class:"timeline-date"},o),r(Vn,{class:"timeline-title",to:c},()=>p[An.title])])))])))))])}}),ld=B({name:"InfoList",setup(){const n=cn(),t=Je(),s=ze(),e=A(()=>et(s.value.map).length),a=$i(),l=Ue(),i=A(()=>et(l.value.map).length),o=Fe(),p=F("article"),c=A(()=>n.value.blogLocales),u=[["article",wa],["category",$l],["tag",Vl],["timeline",Fi]];return()=>r("div",{class:"vp-blog-infos"},[r("div",{class:"vp-blog-type-switcher"},u.map(([d,m])=>r("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{p.value=d}},r("div",{class:["icon-wrapper",{active:p.value===d}],"aria-label":c.value[d],"data-balloon-pos":"up"},r(m))))),r(fn,()=>p.value==="article"?r("div",{class:"vp-sticky-article-wrapper"},[r("div",{class:"title",onClick:()=>o(t.value.path)},[r(wa),r("span",{class:"num"},t.value.items.length),c.value.article]),r("hr"),r("ul",{class:"vp-sticky-articles"},a.value.items.map(({info:d,path:m},g)=>r(fn,{appear:!0,delay:.08*(g+1)},()=>r("li",{class:"vp-sticky-article"},r(Vn,{to:m},()=>d[An.title])))))]):p.value==="category"?r("div",{class:"vp-category-wrapper"},[e.value?r("div",{class:"title",onClick:()=>o(s.value.path)},[r($l),r("span",{class:"num"},e.value),c.value.category]):null,r("hr"),r(fn,{delay:.04},()=>r(qi))]):p.value==="tag"?r("div",{class:"vp-tag-wrapper"},[i.value?r("div",{class:"title",onClick:()=>o(l.value.path)},[r(Vl),r("span",{class:"num"},i.value),c.value.tag]):null,r("hr"),r(fn,{delay:.04},()=>r(zi))]):r(fn,()=>r(Vf)))])}}),ja=B({name:"BlogWrapper",slots:Object,setup(n,{slots:t}){const{isMobile:s}=Ne();return()=>[r(Mi),r(Ri,{noSidebar:!0,noToc:!0},{default:()=>t.default(),navScreenBottom:()=>r(ji),...s.value?{sidebar:()=>r(ld)}:{}})]}});const id=()=>r("aside",{class:"vp-blog-info-wrapper"},[r(fn,()=>r(ji)),r(fn,{delay:.04},()=>r(ld))]);id.displayName="InfoPanel";var Fa=id,jf=B({name:"BlogPage",components:{CategoryList:qi,TagList:zi},setup(){const n=un(),t=yn(),s=ze(),e=Ue(),a=A(()=>t.value.blog||{}),l=A(()=>{const{key:o=""}=a.value;return o==="category"?"CategoryList":o==="tag"?"TagList":null}),i=A(()=>{const{name:o="",key:p=""}=a.value;return p==="category"?o?s.value.map[o].items:[]:p==="tag"?o?e.value.map[o].items:[]:[]});return()=>r(ja,()=>r("div",{class:"vp-page vp-blog"},r("div",{class:"blog-page-wrapper"},[r("main",{id:"main-content",class:"vp-blog-main"},[r(fn,()=>l.value?r(tt(l.value)):null),a.value.name?r(fn,{appear:!0,delay:.24},()=>r(Ni,{key:n.value.path,items:i.value})):null]),r(fn,{delay:.16},()=>r(Fa,{key:"blog"}))])))}}),Ff=B({name:"BlogHero",slots:Object,setup(n,{slots:t}){const s=yn(),e=$e(),a=Cn(),l=A(()=>s.value.heroFullScreen??!1),i=A(()=>{const{heroText:p,heroImage:c,heroImageDark:u,heroAlt:d,heroImageStyle:m,tagline:g}=s.value;return{text:p??e.value.title??"Hello",image:c?xn(c):null,imageDark:u?xn(u):null,heroStyle:m,alt:d||p||"hero image",tagline:g??"",isFullScreen:l.value}}),o=A(()=>{const{bgImage:p,bgImageDark:c,bgImageStyle:u}=s.value;return{image:pn(p)?xn(p):p===!1?null:Af,imageDark:pn(c)?xn(c):null,bgStyle:u,isFullScreen:l.value}});return()=>{var p,c;return s.value.hero===!1?null:r("div",{ref:a,class:["vp-blog-hero",{fullscreen:l.value,"no-bg":!o.value.image}]},[((p=t.heroBg)==null?void 0:p.call(t,o.value))||[o.value.image?r("div",{class:["vp-blog-mask",{light:o.value.imageDark}],style:[{background:`url(${o.value.image}) center/cover no-repeat`},o.value.bgStyle]}):null,o.value.imageDark?r("div",{class:"vp-blog-mask dark",style:[{background:`url(${o.value.imageDark}) center/cover no-repeat`},o.value.bgStyle]}):null],((c=t.heroInfo)==null?void 0:c.call(t,i.value))||[r(fn,{appear:!0,type:"group",delay:.04},()=>[i.value.image?r("img",{key:"light",class:["vp-blog-hero-image",{light:i.value.imageDark}],style:i.value.heroStyle,src:i.value.image,alt:i.value.alt}):null,i.value.imageDark?r("img",{key:"dark",class:"vp-blog-hero-image dark",style:i.value.heroStyle,src:i.value.imageDark,alt:i.value.alt}):null]),r(fn,{appear:!0,delay:.08},()=>i.value.text?r("h1",{class:"vp-blog-hero-title"},i.value.text):null),r(fn,{appear:!0,delay:.12},()=>i.value.tagline?r("p",{class:"vp-blog-hero-description",innerHTML:i.value.tagline}):null)],i.value.isFullScreen?r("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:a.value.clientHeight,behavior:"smooth"})}},[r(jl),r(jl)]):null])}}});const Nf=["link","article","book","project","friend"];var qf=B({name:"ProjectPanel",components:{ArticleIcon:wa,BookIcon:Zu,FriendIcon:sd,LinkIcon:nd,ProjectIcon:td},setup(){const n=yn(),t=ae(),s=Fe(),e=(a="",l="icon")=>Nf.includes(a)?r(tt(`${a}-icon`)):Es(a)?r("img",{class:"vp-project-image",src:a,alt:l}):$a(a)?r("img",{class:"vp-project-image",src:xn(a),alt:l}):r(Gn,{icon:a});return()=>{var a;return(a=n.value.projects)!=null&&a.length?r("div",{class:"vp-project-panel"},n.value.projects.map(({icon:l,link:i,name:o,desc:p},c)=>r("div",{class:["vp-project-card",{[`project${c%9}`]:!t.value}],onClick:()=>s(i)},[e(l,o),r("div",{class:"vp-project-name"},o),r("div",{class:"vp-project-desc"},p)]))):null}}}),zf=B({name:"BlogHome",setup(){const n=Je();return()=>r("div",{class:"vp-page vp-blog"},[r(Ff),r("div",{class:"blog-page-wrapper"},[r("main",{id:"main-content",class:"vp-blog-main"},[r(fn,{appear:!0,delay:.16},()=>r(qf)),r(fn,{appear:!0,delay:.24},()=>r(Ni,{items:n.value.items}))]),r(fn,{appear:!0,delay:.16},()=>r(Fa,{key:"blog"}))]),r(fn,{appear:!0,delay:.28},()=>r(Bi))])}}),Hf=B({name:"BlogHome",setup(){return()=>r(ja,()=>r(zf))}}),od=B({name:"ArticleType",setup(){const n=un(),t=jt(),s=cn(),e=Je(),a=$i(),l=A(()=>{const i=s.value.blogLocales;return[{text:i.all,path:e.value.path},{text:i.star,path:a.value.path},...[].map(({key:o,path:p})=>({text:i[o],path:p.replace(/^\//,t.value)}))]});return()=>r("ul",{class:"vp-article-type-wrapper"},l.value.map(i=>r("li",{class:["vp-article-type",{active:i.path===n.value.path}]},r(Vn,{to:i.path},()=>i.text))))}}),Uf=B({name:"BlogPage",setup(){const n=Va(),t=yn(),s=un(),e=Je(),a=$i(),l=A(()=>{const{key:i="",type:o}=t.value.blog||{};return i==="star"?a.value.items:o==="type"&&i?n.value.items:e.value.items});return()=>r(ja,()=>r("div",{class:"vp-page vp-blog"},r("div",{class:"blog-page-wrapper"},[r("main",{id:"main-content",class:"vp-blog-main"},[r(fn,()=>r(od)),r(fn,{appear:!0,delay:.24},()=>r(Ni,{key:s.value.path,items:l.value}))]),r(fn,{delay:.16},()=>r(Fa,{key:"blog"}))])))}}),Jf=B({name:"TimelineItems",setup(){const n=He(),t=cn(),s=Vi(),e=A(()=>n.value.timeline||t.value.blogLocales.timelineTitle),a=A(()=>s.value.config.map(({year:l})=>({title:l.toString(),level:2,slug:l.toString(),children:[]})));return()=>r("div",{class:"timeline-wrapper"},r("ul",{class:"timeline-content"},[r(fn,()=>r("li",{class:"motto"},e.value)),r(ju,{items:a.value}),s.value.config.map(({year:l,items:i},o)=>r(fn,{appear:!0,delay:.08*(o+1),type:"group"},()=>[r("h3",{key:"title",id:l,class:"timeline-year-title"},r("span",l)),r("li",{key:"content",class:"timeline-year-list"},[r("ul",{class:"timeline-year-wrapper"},i.map(({date:p,info:c,path:u})=>r("li",{class:"timeline-item"},[r("span",{class:"timeline-date"},p),r(Vn,{class:"timeline-title",to:u},()=>c[An.title])])))])]))]))}}),Gf=B({name:"Timeline",components:{ArticleType:od,CategoryList:qi,TagList:zi},setup(){return()=>r(ja,()=>r("div",{class:"vp-page vp-blog"},r("div",{class:"blog-page-wrapper"},[r("main",{id:"main-content",class:"vp-blog-main"},[r(fn,{appear:!0,delay:.24},()=>r(Jf))]),r(fn,{delay:.16},()=>r(Fa,{key:"blog"}))])))}});const Ps="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),ul=Array.from({length:64},(n,t)=>t),oa=n=>Array(n).fill(-1),Jt=[...oa(46),0,1,...ul.slice(54,64),...oa(7),...ul.slice(2,28),...oa(6),...ul.slice(28,54),...oa(5)],Dr=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],Or=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],rd=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],Fl=(n,t)=>{if(t<=0||t>n.length)throw Error(`Illegal len: ${t}`);let s=0,e,a;const l=[];for(;s<t;){if(e=n[s++]&255,l.push(Ps[e>>2&63]),e=(e&3)<<4,s>=t){l.push(Ps[e&63]);break}if(a=n[s++]&255,e|=a>>4&15,l.push(Ps[e&63]),e=(a&15)<<2,s>=t){l.push(Ps[e&63]);break}a=n[s++]&255,e|=a>>6&3,l.push(Ps[e&63]),l.push(Ps[a&63])}return l.join("")},Wf=(n,t)=>{if(t<=0)throw Error(`Illegal len: ${t}`);const s=n.length;let e=0,a=0,l,i,o,p,c,u;const d=[];for(;e<s-1&&a<t&&(u=n.charCodeAt(e++),l=u<Jt.length?Jt[u]:-1,u=n.charCodeAt(e++),i=u<Jt.length?Jt[u]:-1,!(l==-1||i==-1||(c=l<<2>>>0,c|=(i&48)>>4,d.push(String.fromCharCode(c)),++a>=t||e>=s)||(u=n.charCodeAt(e++),o=u<Jt.length?Jt[u]:-1,o==-1)||(c=(i&15)<<4>>>0,c|=(o&60)>>2,d.push(String.fromCharCode(c)),++a>=t||e>=s)));)u=n.charCodeAt(e++),p=u<Jt.length?Jt[u]:-1,c=(o&3)<<6>>>0,c|=p,d.push(String.fromCharCode(c)),++a;return d.map(m=>m.charCodeAt(0))},Kf=(n,t)=>{let s=null;for(typeof n=="number"&&(s=n,n=()=>null);s!==null||(s=n())!==null;)s<128?t(s&127):s<2048?(t(s>>6&31|192),t(s&63|128)):s<65536?(t(s>>12&15|224),t(s>>6&63|128),t(s&63|128)):(t(s>>18&7|240),t(s>>12&63|128),t(s>>6&63|128),t(s&63|128)),s=null},Qf=(n,t)=>{let s,e=null;for(;(s=e!==null?e:n())!==null;){if(s>=55296&&s<=57343&&(e=n())!==null&&e>=56320&&e<=57343){t((s-55296)*1024+e-56320+65536),e=null;continue}t(s)}e!==null&&t(e)},Yf=(n,t)=>{Qf(n,function(s){Kf(s,t)})},Xf=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout,Zf=n=>{const t=[];let s=0;return Yf(()=>s>=n.length?null:n.charCodeAt(s++),e=>{t.push(e)}),t},xe=(n,t,s,e)=>{let a,l=n[t],i=n[t+1];return l^=s[0],a=e[l>>>24],a+=e[256|l>>16&255],a^=e[512|l>>8&255],a+=e[768|l&255],i^=a^s[1],a=e[i>>>24],a+=e[256|i>>16&255],a^=e[512|i>>8&255],a+=e[768|i&255],l^=a^s[2],a=e[l>>>24],a+=e[256|l>>16&255],a^=e[512|l>>8&255],a+=e[768|l&255],i^=a^s[3],a=e[i>>>24],a+=e[256|i>>16&255],a^=e[512|i>>8&255],a+=e[768|i&255],l^=a^s[4],a=e[l>>>24],a+=e[256|l>>16&255],a^=e[512|l>>8&255],a+=e[768|l&255],i^=a^s[5],a=e[i>>>24],a+=e[256|i>>16&255],a^=e[512|i>>8&255],a+=e[768|i&255],l^=a^s[6],a=e[l>>>24],a+=e[256|l>>16&255],a^=e[512|l>>8&255],a+=e[768|l&255],i^=a^s[7],a=e[i>>>24],a+=e[256|i>>16&255],a^=e[512|i>>8&255],a+=e[768|i&255],l^=a^s[8],a=e[l>>>24],a+=e[256|l>>16&255],a^=e[512|l>>8&255],a+=e[768|l&255],i^=a^s[9],a=e[i>>>24],a+=e[256|i>>16&255],a^=e[512|i>>8&255],a+=e[768|i&255],l^=a^s[10],a=e[l>>>24],a+=e[256|l>>16&255],a^=e[512|l>>8&255],a+=e[768|l&255],i^=a^s[11],a=e[i>>>24],a+=e[256|i>>16&255],a^=e[512|i>>8&255],a+=e[768|i&255],l^=a^s[12],a=e[l>>>24],a+=e[256|l>>16&255],a^=e[512|l>>8&255],a+=e[768|l&255],i^=a^s[13],a=e[i>>>24],a+=e[256|i>>16&255],a^=e[512|i>>8&255],a+=e[768|i&255],l^=a^s[14],a=e[l>>>24],a+=e[256|l>>16&255],a^=e[512|l>>8&255],a+=e[768|l&255],i^=a^s[15],a=e[i>>>24],a+=e[256|i>>16&255],a^=e[512|i>>8&255],a+=e[768|i&255],l^=a^s[16],n[t]=i^s[16+1],n[t+1]=l,n},xs=(n,t)=>{let s=0;for(let e=0;e<4;++e)s=s<<8|n[t]&255,t=(t+1)%n.length;return{key:s,offp:t}},Rr=(n,t,s)=>{const e=t.length,a=s.length;let l=0,i=[0,0],o;for(let p=0;p<e;p++)o=xs(n,l),l=o.offp,t[p]=t[p]^o.key;for(let p=0;p<e;p+=2)i=xe(i,0,t,s),t[p]=i[0],t[p+1]=i[1];for(let p=0;p<a;p+=2)i=xe(i,0,t,s),s[p]=i[0],s[p+1]=i[1]},n3=(n,t,s,e)=>{const a=s.length,l=e.length;let i=0,o=[0,0],p;for(let c=0;c<a;c++)p=xs(t,i),i=p.offp,s[c]=s[c]^p.key;i=0;for(let c=0;c<a;c+=2)p=xs(n,i),i=p.offp,o[0]^=p.key,p=xs(n,i),i=p.offp,o[1]^=p.key,o=xe(o,0,s,e),s[c]=o[0],s[c+1]=o[1];for(let c=0;c<l;c+=2)p=xs(n,i),i=p.offp,o[0]^=p.key,p=xs(n,i),i=p.offp,o[1]^=p.key,o=xe(o,0,s,e),e[c]=o[0],e[c+1]=o[1]},Br=(n,t,s,e,a)=>{const l=rd.slice(),i=l.length;if(s<4||s>31){const m=new Error(`Illegal number of rounds (4-31): ${s}`);if(e===!1)return Promise.reject(m);throw m}if(t.length!==16){const m=new Error(`Illegal salt length: ${t.length} != 16`);if(e===!1)return Promise.reject(m);throw m}s=1<<s>>>0;let o,p,c=0,u;Int32Array?(o=new Int32Array(Dr),p=new Int32Array(Or)):(o=Dr.slice(),p=Or.slice()),n3(t,n,o,p);const d=()=>{if(a&&a(c/s),c<s){const m=Date.now();for(;c<s&&(c=c+1,Rr(n,o,p),Rr(t,o,p),!(Date.now()-m>100)););}else{for(c=0;c<64;c++)for(u=0;u<i>>1;u++)xe(l,u<<1,o,p);const m=[];for(c=0;c<i;c++)m.push((l[c]>>24&255)>>>0),m.push((l[c]>>16&255)>>>0),m.push((l[c]>>8&255)>>>0),m.push((l[c]&255)>>>0);return e===!1?Promise.resolve(m):m}if(e===!1)return new Promise(m=>Xf(()=>{d().then(m)}))};if(e===!1)return d();{let m;for(;;)if(typeof(m=d())<"u")return m||[]}},t3=n=>{try{let t;return(self.crypto||self.msCrypto).getRandomValues(t=new Uint32Array(n)),Array.prototype.slice.call(t)}catch{throw Error("WebCryptoAPI is not available")}},s3=(n=10)=>{if(typeof n!="number")throw Error("Illegal arguments: "+typeof n);n<4?n=4:n>31&&(n=31);const t=[];return t.push("$2a$"),n<10&&t.push("0"),t.push(n.toString()),t.push("$"),t.push(Fl(t3(16),16)),t.join("")};function e3(n,t,s,e){if(typeof n!="string"||typeof t!="string"){const g=new Error("Invalid string / salt: Not a string");if(s===!1)return Promise.reject(g);throw g}let a,l;if(t.charAt(0)!=="$"||t.charAt(1)!=="2"){const g=new Error("Invalid salt version: "+t.substring(0,2));if(s===!1)return Promise.reject(g);throw g}if(t.charAt(2)==="$")a=String.fromCharCode(0),l=3;else{if(a=t.charAt(2),a!=="a"&&a!=="b"&&a!=="y"||t.charAt(3)!=="$"){const g=Error("Invalid salt revision: "+t.substring(2,4));if(s===!1)return Promise.reject(g);throw g}l=4}if(t.charAt(l+2)>"$"){const g=new Error("Missing salt rounds");if(s===!1)return Promise.reject(g);throw g}const i=parseInt(t.substring(l,l+1),10)*10,o=parseInt(t.substring(l+1,l+2),10),p=i+o,c=t.substring(l+3,l+25);n+=a>="a"?"\0":"";const u=Zf(n),d=Wf(c,16),m=g=>{const f=[];return f.push("$2"),a>="a"&&f.push(a),f.push("$"),p<10&&f.push("0"),f.push(p.toString()),f.push("$"),f.push(Fl(d,d.length)),f.push(Fl(g,rd.length*4-1)),f.join("")};return s===!1?Br(u,d,p,!1,e).then(g=>m(g)):m(Br(u,d,p,!0,e))}const a3=(n,t=10)=>{if(typeof t=="number"&&(t=s3(t)),typeof n!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof n+", "+typeof t);return e3(n,t,!0)},Nl=(n,t)=>{if(typeof n!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof n+", "+typeof t);return t.length!==60?!1:a3(n,t.substring(0,t.length-31))===t},cd=()=>r(ln,{name:"lock"},()=>r("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));cd.displayName="LockIcon";var pd=B({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup(n,{emit:t}){const s=yn(),e=cn(),a=F(""),l=F(!1),i=F(!1),o=A(()=>e.value.encryptLocales);let p=null;const c=()=>{p&&clearTimeout(p),l.value=!1,t("verify",a.value,i.value),as().then(()=>{l.value=!0,p=setTimeout(()=>{l.value=!1},1e3)})};return()=>r("div",{class:["vp-decrypt-layer",{expand:n.full||s.value.home}]},r("div",{class:"vp-decrypt-modal"},[r("div",{class:["vp-decrypt-hint",{tried:l.value}]},l.value?o.value.errorHint:r(cd,{"aria-label":o.value.iconLabel})),r("div",{class:"vp-decrypt-input"},[r("input",{type:"password",value:a.value,placeholder:o.value.placeholder,onInput:({target:u})=>{a.value=u.value},onKeydown:({key:u})=>{u==="Enter"&&c()}})]),r("div",{class:"vp-remember-password"},[r("input",{type:"checkbox",value:i.value,onChange:()=>i.value=!i.value}),o.value.remember]),r("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>c()},"OK")]))}});const ud=()=>{const n=os();return A(()=>n.value.encrypt||{})},Mr="VUEPRESS_HOPE_GLOBAL_TOKEN",l3=()=>{const n=ud(),t=ee(Mr,""),s=Vp(Mr,""),e=A(()=>{const{global:l=!1,admin:i=[]}=n.value;return l&&i.length>0}),a=A(()=>{if(e.value){if(t.value)return n.value.admin.some(l=>Nl(t.value,l));if(s.value)return n.value.admin.some(l=>Nl(s.value,l))}return!1});return{isEncrypted:e,isDecrypted:a,validate:(l,i=!1)=>{(i?t:s).value=l}}},dl=(n="",t)=>!!n&&Nl(n,t),$r="VUEPRESS_HOPE_PATH_TOKEN",i3=()=>{const n=un(),t=ud(),s=ee($r,{}),e=Vp($r,{}),a=i=>Me(t.value.config)?et(t.value.config).filter(o=>Ws(decodeURI(i),o)).sort((o,p)=>p.length-o.length):[],l=i=>{const o=a(i);if(o.length>0){const{config:p={}}=t.value;return{isEncrypted:!0,isDecrypted:o.some(c=>s.value[c]&&p[c].some(u=>dl(s.value[c],u))||e.value[c]&&p[c].some(u=>dl(e.value[c],u)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:A(()=>l(n.value.path)),getStatus:l,validate:(i,o=!1)=>{const{config:p={}}=t.value,c=a(n.value.path);for(const u of c)if(p[u].filter(d=>dl(i,d))){(o?s:e).value[u]=i;break}}}};var o3=B({name:"GlobalEncrypt",slots:Object,setup(n,{slots:t}){const{isDecrypted:s,isEncrypted:e,validate:a}=l3(),l=F(!1);return vn(()=>{l.value=!0}),()=>r(Nu,()=>e.value?l.value?s.value?t.default():r(pd,{full:!0,onVerify:a}):null:t.default())}}),r3=B({name:"LocalEncrypt",slots:Object,setup(n,{slots:t}){const{status:s,validate:e}=i3(),a=F(!1);return vn(()=>{a.value=!0}),()=>{const{isEncrypted:l,isDecrypted:i}=s.value;return l?a.value?i?t.default()||null:r(pd,{full:!0,onVerify:e}):null:t.default()||null}}});var c3=B({name:"SlidePage",setup(){const n=zn(),t=F(!1),s=Cn(),e=()=>{t.value=!t.value},a=()=>{t.value=!1},l=()=>{a(),window.history.go(-1)},i=()=>{a(),n.push("/")};return C0(s,a),()=>r("div",{class:"vp-reveal-page"},[r(gi),r("div",{ref:s,class:["vp-reveal-menu",{active:t.value}]},[r("button",{type:"button",class:"menu-button",onClick:()=>e()},r("span",{class:"icon"})),r("button",{type:"button",class:"back-button",onClick:()=>l()},r(s2)),r("button",{type:"button",class:"home-button",onClick:()=>i()},r(e2))])])}});gb(Gn);const p3=Et({enhance:({app:n,router:t})=>{const{scrollBehavior:s}=t.options;t.options.scrollBehavior=async(...e)=>(await Fu().wait(),s(...e)),hk(n),n.component("HopeIcon",Gn),n.component("VPLink",Vn),n.component("BloggerInfo",ji),n.component("GlobalEncrypt",o3),n.component("LocalEncrypt",r3)},setup:()=>{yk(),wk(),Rf()},layouts:{Layout:kf,NotFound:hf,BlogCategory:jf,BlogHome:Hf,BlogType:Uf,Timeline:Gf,Slide:c3}}),ra=[_1,ob,mb,hb,Eb,Sb,Lb,Hb,Yb,X2,rk,p3],u3=[["v-8daa1a0e","/",{y:"h",t:"Alooc的博客",i:"home"},["/README.md"]],["v-184f4da6","/intro.html",{d:172684892e4,v:"/assets/images/cover3.jpg",e:`<h1> 介绍页</h1>
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
</ul>`,r:{minutes:7.75,words:2324},y:"a",t:"2、基础算法"},["/blog/algorithm/base/3、基础算法.html","/blog/algorithm/base/3、基础算法.md",":md"]],["v-594a4121","/blog/fe/dvguide/",{d:1728660112e3,e:`<h1> 学习指南</h1>
<p>课程将分为两个主要阶段：基础阶段、数据报表项目</p>
`,r:{minutes:.08,words:25},y:"a",t:"学习指南"},["/blog/fe/dvguide/README.md"]],["v-2251dc2c","/blog/fe/dvguide/instruction.html",{d:1728660112e3,e:`<h1> 课程说明</h1>
<h2> 课程心路</h2>
<p>很多同学都在期待这门课程，大家希望通过管理后台自主上传电子书，但由于这个功能较为复杂，经过数月的筹备，这门课程终于与大家见面了。这门课程将贯穿前两门课程，形成功能闭环。</p>
<p>这门课程的难度是三门课程中最大的，中后台技术本来就比较复杂，涉及登录、token 认证、异常处理、界面框架等等，再加上电子书解析，涉及 epub 的原理、xml 解析、zip 解压、文件上传等等诸多技术点，所以这门课的难度是空前的，学习这门课程需要持续的积累和坚持，但我相信每一位慕课网的用户都是非常优秀的，大家一定可以完成这门课程，完成预期的学习目标。</p>`,r:{minutes:3.45,words:1034},y:"a",t:"课程说明"},[":md"]],["v-f4face08","/blog/old/algorithm/",{d:172684892e4,e:`<h1> 算法</h1>
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
<figure><img src="https://raw.githubusercontent.com/alooc/images/main/blog/1679451610891-0cb9e106-3e35-407f-a06b-436aaf070f5e.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:6.18,words:1853},y:"a",t:"设计模式"},["/blog/old/skill/设计模式.html","/blog/old/skill/设计模式.md",":md"]],["v-37cb64ed","/blog/fe/dvguide/guide/canvas.html",{d:1728660112e3,e:`<h1> canvas</h1>
<p><code>canvas</code> 是 HTML5 的新特性，它允许我们使用 <code>canvas</code> 元素在网页上通过 JavaScript 绘制图像。</p>
<h2> canvas标签</h2>
<p><code>&lt;canvas&gt;</code> 标签只是图形容器，相当于一个画布，<code>canvas</code> 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成，相当于使用画笔在画布上画画。</p>
<p><strong>注意：必须指定宽高</strong></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>charts<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>800<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.76,words:527},y:"a",t:"canvas"},[":md"]],["v-33ad279c","/blog/fe/dvguide/guide/echarts-basic.html",{d:1728660112e3,e:`<h1> ECharts 基本概念</h1>
<h2> ECharts 基本概念: 系列</h2>
<p>系列（series）是指：一组数值映射成对应的图</p>
<figure><img src="https://book.youbaobao.xyz/datav-res/datav/datav-echarts-series.jpg" alt="系列" tabindex="0" loading="lazy"><figcaption>系列</figcaption></figure>
<h2> 案例：多系列混合</h2>
<iframe src="https://book.youbaobao.xyz/datav-res/examples/test-echarts-series.html" width="100%" height="400">
<details class="hint-container details"><summary>详情</summary>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">#chart</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'chart'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span>
      <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'一季度'</span><span class="token punctuation">,</span> <span class="token string">'二季度'</span><span class="token punctuation">,</span> <span class="token string">'三季度'</span><span class="token punctuation">,</span> <span class="token string">'四季度'</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'pie'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'65%'</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'分类1'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">50</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'分类2'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">60</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'分类3'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">55</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'分类4'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">70</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">79</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">,</span> <span class="token number">72</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="echarts-4-0-新特性-dataset" tabindex="-1"><a class="header-anchor" href="#echarts-4-0-新特性-dataset" aria-hidden="true">#</a> ECharts 4.0 新特性：dataset</h2>
<p>ECharts 4 开始支持了 数据集（dataset）组件用于单独的数据集声明，从而数据可以单独管理，被多个组件复用，并且可以自由指定数据到视觉的映射。这一特性能将逻辑和数据分离，带来更好的复用，并易于理解。</p>
<figure><img src="https://book.youbaobao.xyz/datav-res/datav/datav-echarts-series2.jpg" alt="系列2" tabindex="0" loading="lazy"><figcaption>系列2</figcaption></figure>
<h2 id="案例-dataset-移植" tabindex="-1"><a class="header-anchor" href="#案例-dataset-移植" aria-hidden="true">#</a> 案例：dataset 移植</h2>
<iframe 
  src="https://book.youbaobao.xyz/datav-res/examples/test-echarts-series-dataset.html"
  width="100%"
  height="400"
/>
<details class="hint-container details"><summary>详情</summary>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">#chart</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'chart'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span>
      <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'category'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dataset</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token string">'一季度'</span><span class="token punctuation">,</span> <span class="token number">79</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">'分类1'</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">'二季度'</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token string">'分类2'</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">'三季度'</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> <span class="token string">'分类3'</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">'四季度'</span><span class="token punctuation">,</span> <span class="token number">72</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">'分类4'</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'pie'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'65%'</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
          <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">itemName</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="echarts-基本概念-组件" tabindex="-1"><a class="header-anchor" href="#echarts-基本概念-组件" aria-hidden="true">#</a> ECharts 基本概念: 组件</h2>
<p>ECharts 中除了绘图之外其他部分，都可抽象为 「组件」。例如，ECharts 中至少有这些组件：xAxis（直角坐标系 X 轴）、yAxis（直角坐标系 Y 轴）、grid（直角坐标系底板）、angleAxis（极坐标系角度轴）...</p>
<figure><img src="https://book.youbaobao.xyz/datav-res/datav/datav-echarts-component.jpg" alt="组件" tabindex="0" loading="lazy"><figcaption>组件</figcaption></figure>
<h2 id="案例-各种组件" tabindex="-1"><a class="header-anchor" href="#案例-各种组件" aria-hidden="true">#</a> 案例：各种组件</h2>
<iframe 
  src="https://book.youbaobao.xyz/datav-res/examples/test-echarts-component.html"
  width="100%"
  height="450"
/>
<details class="hint-container details"><summary>详情</summary>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">#chart</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'chart'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span>
      <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'数据可视化'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">subtext</span><span class="token operator">:</span> <span class="token string">'慕课网数据可视化体系课'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'category'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'分类'</span><span class="token punctuation">,</span>
            <span class="token comment">// 强制设置图形为圆。</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'circle'</span><span class="token punctuation">,</span>
            <span class="token comment">// 设置文本为红色</span>
            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'red'</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'折线图'</span><span class="token punctuation">,</span> <span class="token string">'柱状图'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">100</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">toolbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">feature</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">dataZoom</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token string">'none'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">restore</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">saveAsImage</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dataZoom</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">70</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dataset</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token string">'一季度'</span><span class="token punctuation">,</span> <span class="token number">79</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">'分类1'</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">'二季度'</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token string">'分类2'</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">'三季度'</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> <span class="token string">'分类3'</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">'四季度'</span><span class="token punctuation">,</span> <span class="token number">72</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">'分类4'</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
          <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">70</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'分类'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'pie'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'65%'</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
          <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">itemName</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'折线图'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'柱状图'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="echarts-基本概念-定位" tabindex="-1"><a class="header-anchor" href="#echarts-基本概念-定位" aria-hidden="true">#</a> ECharts 基本概念：定位</h2>
<p>大多数组件都提供了定位属性，我们可以采用类似 CSS absolute 的定位属性来控制组件的位置，下面这个案例可以通过修改 grid 组件定位来控制图表的位置</p>
<figure><img src="https://book.youbaobao.xyz/datav-res/datav/datav-echarts-position.jpg" alt="定位" tabindex="0" loading="lazy"><figcaption>定位</figcaption></figure>
<iframe 
  src="https://book.youbaobao.xyz/datav-res/examples/test-echarts-position.html"
  width="100%"
  height="450"
/>
<details class="hint-container details"><summary>详情</summary>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">#chart</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      top: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      left: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      right: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      bottom: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">let</span> _left <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">let</span> _top <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">let</span> _bottom <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">let</span> _right <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">const</span> topInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'top'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> leftInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'left'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> bottomInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'bottom'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> rightInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'right'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'chart'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span>
      <span class="token keyword">function</span> <span class="token function">addInputEvent</span><span class="token punctuation">(</span><span class="token parameter">dom<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dom<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          value <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
          <span class="token keyword">switch</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">'top'</span><span class="token operator">:</span>
              _top <span class="token operator">=</span> value
              <span class="token keyword">break</span>
            <span class="token keyword">case</span> <span class="token string">'left'</span><span class="token operator">:</span>
              _left <span class="token operator">=</span> value
              <span class="token keyword">break</span>
            <span class="token keyword">case</span> <span class="token string">'bottom'</span><span class="token operator">:</span>
              _bottom <span class="token operator">=</span> value
              <span class="token keyword">break</span>
            <span class="token keyword">case</span> <span class="token string">'right'</span><span class="token operator">:</span>
              _right <span class="token operator">=</span> value
              <span class="token keyword">break</span>
          <span class="token punctuation">}</span>
          <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'数据可视化'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">subtext</span><span class="token operator">:</span> <span class="token string">'慕课网数据可视化体系课'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'category'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataset</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">[</span><span class="token string">'一季度'</span><span class="token punctuation">,</span> <span class="token number">79</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">'分类1'</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">'二季度'</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token string">'分类2'</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">'三季度'</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> <span class="token string">'分类3'</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">'四季度'</span><span class="token punctuation">,</span> <span class="token number">72</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">'分类4'</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> _left<span class="token punctuation">,</span>
            <span class="token literal-property property">top</span><span class="token operator">:</span> _top<span class="token punctuation">,</span>
            <span class="token literal-property property">right</span><span class="token operator">:</span> _right<span class="token punctuation">,</span>
            <span class="token literal-property property">bottom</span><span class="token operator">:</span> _bottom
          <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'折线图'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        topInput<span class="token punctuation">.</span>value <span class="token operator">=</span> _top
        leftInput<span class="token punctuation">.</span>value <span class="token operator">=</span> _left
        bottomInput<span class="token punctuation">.</span>value <span class="token operator">=</span> _bottom
        rightInput<span class="token punctuation">.</span>value <span class="token operator">=</span> _right
        <span class="token function">addInputEvent</span><span class="token punctuation">(</span>topInput<span class="token punctuation">,</span> <span class="token string">'top'</span><span class="token punctuation">)</span>
        <span class="token function">addInputEvent</span><span class="token punctuation">(</span>leftInput<span class="token punctuation">,</span> <span class="token string">'left'</span><span class="token punctuation">)</span>
        <span class="token function">addInputEvent</span><span class="token punctuation">(</span>bottomInput<span class="token punctuation">,</span> <span class="token string">'bottom'</span><span class="token punctuation">)</span>
        <span class="token function">addInputEvent</span><span class="token punctuation">(</span>rightInput<span class="token punctuation">,</span> <span class="token string">'right'</span><span class="token punctuation">)</span>
        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="echarts-基本概念-坐标系" tabindex="-1"><a class="header-anchor" href="#echarts-基本概念-坐标系" aria-hidden="true">#</a> ECharts 基本概念：坐标系</h2>
<p>很多系列，例如 line（折线图）、bar（柱状图）、scatter（散点图）、heatmap（热力图）等等，需要运行在 “坐标系” 上。坐标系用于布局这些图，以及显示数据的刻度等等。例如 ECharts 中至少支持这些坐标系：直角坐标系、极坐标系、地理坐标系（GEO）、单轴坐标系、日历坐标系 等。其他一些系列，例如 pie（饼图）、tree（树图）等等，并不依赖坐标系，能独立存在。还有一些图，例如 graph（关系图）等，既能独立存在，也能布局在坐标系中，依据用户的设定而来。</p>
<p>一个坐标系，可能由多个组件协作而成。我们以最常见的直角坐标系来举例。直角坐标系中，包括有 xAxis（直角坐标系 X 轴）、yAxis（直角坐标系 Y 轴）、grid（直角坐标系底板）三种组件。xAxis、yAxis 被 grid 自动引用并组织起来，共同工作。</p>
<h2 id="案例-散点图" tabindex="-1"><a class="header-anchor" href="#案例-散点图" aria-hidden="true">#</a> 案例：散点图</h2>
<p>我们来看下图，这是最简单的使用直角坐标系的方式：只声明了 xAxis、yAxis 和一个 scatter（散点图系列），ECharts 会为它们创建 grid 并进行关联：</p>
<figure><img src="https://book.youbaobao.xyz/datav-res/datav/datav-echarts-axis.jpg" alt="坐标系" tabindex="0" loading="lazy"><figcaption>坐标系</figcaption></figure>
<iframe 
  src="https://book.youbaobao.xyz/datav-res/examples/test-echarts-axis.html"
  width="100%"
  height="450"
/>
<details class="hint-container details"><summary>详情</summary>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">#chart</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'chart'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span>
      <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dataset</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'scatter'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">encode</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="案例-双坐标系" tabindex="-1"><a class="header-anchor" href="#案例-双坐标系" aria-hidden="true">#</a> 案例：双坐标系</h2>
<p>再来看下图，两个 yAxis，共享了一个 xAxis。两个 series，也共享了这个 xAxis，但是分别使用不同的 yAxis，使用 yAxisIndex 来指定它自己使用的是哪个 yAxis：</p>
<figure><img src="https://book.youbaobao.xyz/datav-res/datav/datav-echarts-axis2.jpg" alt="坐标系" tabindex="0" loading="lazy"><figcaption>坐标系</figcaption></figure>
<iframe 
  src="https://book.youbaobao.xyz/datav-res/examples/test-echarts-axis2.html"
  width="100%"
  height="400"
/>
<details class="hint-container details"><summary>详情</summary>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">#chart</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'chart'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span>
      <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'category'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">100</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">100</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dataset</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token string">'product'</span><span class="token punctuation">,</span> <span class="token string">'2012'</span><span class="token punctuation">,</span> <span class="token string">'2013'</span><span class="token punctuation">,</span> <span class="token string">'2014'</span><span class="token punctuation">,</span> <span class="token string">'2015'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">'Matcha Latte'</span><span class="token punctuation">,</span> <span class="token number">41.1</span><span class="token punctuation">,</span> <span class="token number">30.4</span><span class="token punctuation">,</span> <span class="token number">65.1</span><span class="token punctuation">,</span> <span class="token number">53.3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">'Milk Tea'</span><span class="token punctuation">,</span> <span class="token number">86.5</span><span class="token punctuation">,</span> <span class="token number">92.1</span><span class="token punctuation">,</span> <span class="token number">85.7</span><span class="token punctuation">,</span> <span class="token number">83.1</span><span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token literal-property property">seriesLayoutBy</span><span class="token operator">:</span> <span class="token string">'row'</span><span class="token punctuation">,</span> <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span> <span class="token literal-property property">seriesLayoutBy</span><span class="token operator">:</span> <span class="token string">'row'</span><span class="token punctuation">,</span> <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="案例-多坐标系" tabindex="-1"><a class="header-anchor" href="#案例-多坐标系" aria-hidden="true">#</a> 案例：多坐标系</h2>
<p>再来看下图，一个 ECharts 实例中，有多个 grid，每个 grid 分别有 xAxis、yAxis，他们使用 xAxisIndex、yAxisIndex、gridIndex 来指定引用关系：</p>
<figure><img src="https://book.youbaobao.xyz/datav-res/datav/datav-echarts-axis3.jpg" alt="坐标系" tabindex="0" loading="lazy"><figcaption>坐标系</figcaption></figure>
<iframe 
  src="https://book.youbaobao.xyz/datav-res/examples/test-echarts-axis3.html"
  width="100%"
  height="400"
/>
<details class="hint-container details"><summary>详情</summary>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">#chart</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'chart'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span>
      <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">gridIndex</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">gridIndex</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">gridIndex</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">gridIndex</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dataset</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token string">'product'</span><span class="token punctuation">,</span> <span class="token string">'2012'</span><span class="token punctuation">,</span> <span class="token string">'2013'</span><span class="token punctuation">,</span> <span class="token string">'2014'</span><span class="token punctuation">,</span> <span class="token string">'2015'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">'Matcha Latte'</span><span class="token punctuation">,</span> <span class="token number">41.1</span><span class="token punctuation">,</span> <span class="token number">30.4</span><span class="token punctuation">,</span> <span class="token number">65.1</span><span class="token punctuation">,</span> <span class="token number">53.3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">'Milk Tea'</span><span class="token punctuation">,</span> <span class="token number">86.5</span><span class="token punctuation">,</span> <span class="token number">92.1</span><span class="token punctuation">,</span> <span class="token number">85.7</span><span class="token punctuation">,</span> <span class="token number">83.1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token string">'Cheese Cocoa'</span><span class="token punctuation">,</span> <span class="token number">24.1</span><span class="token punctuation">,</span> <span class="token number">67.2</span><span class="token punctuation">,</span> <span class="token number">79.5</span><span class="token punctuation">,</span> <span class="token number">86.4</span><span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">'55%'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">'55%'</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token literal-property property">seriesLayoutBy</span><span class="token operator">:</span> <span class="token string">'row'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token literal-property property">seriesLayoutBy</span><span class="token operator">:</span> <span class="token string">'row'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token literal-property property">seriesLayoutBy</span><span class="token operator">:</span> <span class="token string">'row'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token literal-property property">xAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token literal-property property">xAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token literal-property property">xAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token literal-property property">xAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</iframe>`,r:{minutes:6.04,words:1811},y:"a",t:"ECharts 基本概念"},[":md"]],["v-b64bd99a","/blog/fe/dvguide/guide/echarts.html",{d:1728660112e3,e:`<h1> ECharts 入门</h1>
<h2> 入门案例：销售柱状图</h2>
<iframe src="https://book.youbaobao.xyz/datav-res/examples/test-echarts.html" width="100%" height="400">
<details class="hint-container details"><summary>详情</summary>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">#chart</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'chart'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span>
      chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'快速入门ECharts开发'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'食品'</span><span class="token punctuation">,</span> <span class="token string">'数码'</span><span class="token punctuation">,</span> <span class="token string">'服饰'</span><span class="token punctuation">,</span> <span class="token string">'箱包'</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<blockquote>
<p>思考：ECharts 的绘图流程是怎样的？</p>
</blockquote>
<details class="hint-container details"><summary>详情</summary>
<ol>
<li>引入 js 库</li>
<li>编写渲染容器 DOM，添加 width 和 height 样式属性</li>
<li>获取渲染 DOM 对象</li>
<li>初始化 ECharts 对象</li>
<li>编写 option 参数</li>
<li>调用 setOption 完成渲染</li>
</ol>
</details>
<h2 id="进阶案例-多-echarts-实例" tabindex="-1"><a class="header-anchor" href="#进阶案例-多-echarts-实例" aria-hidden="true">#</a> 进阶案例：多 ECharts 实例</h2>
<iframe 
  src="https://book.youbaobao.xyz/datav-res/examples/test-echarts-multi.html"
  width="100%"
  height="700"
/>
<details class="hint-container details"><summary>详情</summary>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">#chart</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">#chart2</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>这是第一个 echarts 图表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>这是第二个 echarts 图表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chart2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'chart'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> chartDom2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'chart2'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span>
      <span class="token keyword">const</span> chart2 <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom2<span class="token punctuation">)</span>
      <span class="token keyword">const</span> option1 <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Mon'</span><span class="token punctuation">,</span> <span class="token string">'Tue'</span><span class="token punctuation">,</span> <span class="token string">'Wed'</span><span class="token punctuation">,</span> <span class="token string">'Thu'</span><span class="token punctuation">,</span> <span class="token string">'Fri'</span><span class="token punctuation">,</span> <span class="token string">'Sat'</span><span class="token punctuation">,</span> <span class="token string">'Sun'</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'value'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">820</span><span class="token punctuation">,</span> <span class="token number">932</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">,</span> <span class="token number">934</span><span class="token punctuation">,</span> <span class="token number">1290</span><span class="token punctuation">,</span> <span class="token number">1330</span><span class="token punctuation">,</span> <span class="token number">1320</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">areaStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> option2 <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'高度(km)与气温(°C)变化关系'</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'axis'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">'Temperature : &lt;br/>{b}km : {c}°C'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">'3%'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">'4%'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">'3%'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'value'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">'{value} °C'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">onZero</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">'{value} km'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token string">'10'</span><span class="token punctuation">,</span> <span class="token string">'20'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'40'</span><span class="token punctuation">,</span> <span class="token string">'50'</span><span class="token punctuation">,</span> <span class="token string">'60'</span><span class="token punctuation">,</span> <span class="token string">'70'</span><span class="token punctuation">,</span> <span class="token string">'80'</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'高度(km)与气温(°C)变化关系'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">'rgba(0,0,0,0.4)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowBlur</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token literal-property property">shadowOffsetY</span><span class="token operator">:</span> <span class="token number">10</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">56.5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">46.5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">22.1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2.5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">27.7</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">55.7</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">76.5</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option1<span class="token punctuation">)</span>
      chart2<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option2<span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</iframe>`,r:{minutes:1.29,words:386},y:"a",t:"ECharts 入门"},[":md"]],["v-f1eac03e","/blog/fe/dvguide/guide/scene.html",{d:1728660112e3,e:`<h1> 数据可视化应用场景</h1>
<h2> 什么是数据可视化？</h2>
<p>基本概念</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>数据可视化，是关于数据视觉表现形式的科学技术研究</p>
</div>
<p>这个概念向我们传达了两个信息：</p>
<ul>
<li>数据可视化是一门学科</li>
<li>数据可视化与数据和视觉有关</li>
</ul>
<p>数据可视化简单理解，就是将数据转换成易于人员辨识和理解的视觉表现形式，如各种 2D 图表、3D 图表、地图、矢量图等等，随着技术的不断进步，数据可视化的边界也在不断扩大</p>`,r:{minutes:2.47,words:741},y:"a",t:"数据可视化应用场景"},[":md"]],["v-26aad609","/blog/fe/dvguide/guide/svg.html",{d:1728660112e3,e:`<h1> svg</h1>
<p>SVG是一种基于 XML 的图像文件格式，它的英文全称为Scalable Vector Graphics，意思为可缩放的矢量图形</p>
<h2> 基本的 SVG 元素</h2>
<p>你可以深入 SVG 复杂的细节，但这对我们即将创建的图标不是必须的。以下列表涵盖了我们将用到的构建块。</p>
<ul>
<li>
<p><code>&lt;svg&gt;</code> 包裹并定义整个矢量图。<code>&lt;svg&gt;</code> 标签之于矢量图就如同 <code>&lt;html&gt;</code> 标签之于一个 web 页面。</p>
</li>
<li>
<p><code>&lt;line&gt;</code> 创建一条直线。</p>
</li>
<li>
<p><code>&lt;polyline&gt;</code> 创建折线。</p>
</li>
<li>
<p><code>&lt;rect&gt;</code> 创建矩形。</p>
</li>
<li>
<p><code>&lt;circle&gt;</code> 创建圆。</p>
</li>
<li>
<p><code>&lt;ellipse&gt;</code> 创建圆和椭圆。</p>
</li>
<li>
<p><code>&lt;polygon&gt;</code> 创建多边形。</p>
</li>
<li>
<p><code>&lt;path&gt;</code> 通过指定点以及点和点之间的线来创建任意形状。</p>
</li>
</ul>`,r:{minutes:1.89,words:566},y:"a",t:"svg"},[":md"]],["v-2dac4d22","/blog/fe/dvguide/guide/tech.html",{d:1728660112e3,e:`<h1> 数据可视化前端技术选型</h1>
<h2> 数据可视化解决方案</h2>
<p>前端数据可视化解决方案如下：</p>
<figure><img src="https://book.youbaobao.xyz/datav-res/datav/datav-tech-arch.png" alt="可视化解决方案" tabindex="0" loading="lazy"><figcaption>可视化解决方案</figcaption></figure>
<h2> Skia</h2>
<p><a href="https://github.com/google/skia" target="_blank" rel="noopener noreferrer">Skia</a> 是 Chrome 和 Android 的底层 2D 绘图引擎，具体可参考<a href="https://baike.baidu.com/item/skia/1287196" target="_blank" rel="noopener noreferrer">百度百科</a>，Skia 采用 C++ 编程，由于它位于浏览器的更底层，所以我们平常接触较少</p>`,r:{minutes:.7,words:210},y:"a",t:"数据可视化前端技术选型"},[":md"]],["v-8ee507d2","/blog/fe/dvguide/report/guide.html",{d:1728660112e3,e:`<h1> 数据报表项目指南</h1>
<h2> 创建项目</h2>
<ul>
<li>安装 vue-cli</li>
<li>初始化项目</li>
<li>安装 vue-router</li>
<li>安装 element-ui</li>
</ul>
<h2> 静态页面开发阶段</h2>
<ul>
<li>核心指标</li>
<li>销售业绩</li>
<li>区域排名</li>
<li>分类排名</li>
<li>销售分布</li>
<li>转化率</li>
<li>热门搜索</li>
</ul>
<h2> API 联调</h2>
<ul>
<li>请求封装</li>
<li>API 编写</li>
<li>API 联调</li>
<li>功能测试</li>
</ul>`,r:{minutes:.27,words:81},y:"a",t:"数据报表项目指南"},[":md"]],["v-00d412b2","/blog/fe/dvguide/report/intro.html",{d:1728660112e3,e:`<h1> 数据报表项目</h1>
`,r:{minutes:.05,words:14},y:"a",t:"数据报表项目"},[":md"]],["v-4251ce4f","/blog/fe/dvguide/report/qa.html",{d:1728660112e3,e:`<h1> 常见问题</h1>
<h2> vue create 失败</h2>
<p>npm 安装有可能会导致失败，建议加上淘宝镜像：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vue create imooc-datav-report-dev <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.37,words:112},y:"a",t:"常见问题"},[":md"]],["v-946db9a6","/blog/fe/dvguide/report/summary.html",{d:1728660112e3,e:`<h1> 知识点汇总</h1>
<h2> Vue</h2>
<h3> mixins</h3>
<p>用于抽取公共代码</p>
<ul>
<li>定义 mixins</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> CommonCard <span class="token keyword">from</span> <span class="token string">'../components/CommonCard/index'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    CommonCard
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.51,words:454},y:"a",t:"知识点汇总"},[":md"]],["v-8577ef52","/blog/old/beframework/elk/elasticsearch.html",{d:172684892e4,c:["后端框架","elk"],g:["elk","elasticsearch"],e:`<blockquote>
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

	
	
	

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.2,words:360},y:"a",t:"websocket笔记"},["/blog/old/fe/skill/websocket/基础总结.html","/blog/old/fe/skill/websocket/基础总结.md",":md"]],["v-3706649a","/404.html",{y:"p",t:""},[]],["v-42ef21ea","/blog/algorithm/base/",{y:"p",t:"Base"},[]],["v-01af5e14","/blog/algorithm/",{y:"p",t:"Algorithm"},[]],["v-145ac574","/blog/",{y:"p",t:"Blog"},[]],["v-a1ad3d48","/blog/fe/",{y:"p",t:"Fe"},[]],["v-3607025c","/blog/old/",{y:"p",t:"Old"},[]],["v-922f6dd8","/blog/fe/dvguide/guide/",{y:"p",t:"Guide"},[]],["v-511fb93a","/blog/fe/dvguide/report/",{y:"p",t:"Report"},[]],["v-ec27c24a","/blog/old/beframework/elk/",{y:"p",t:"Elk"},[]],["v-4910ef8c","/blog/old/beframework/mybatis/",{y:"p",t:"Mybatis"},[]],["v-747d1eb2","/blog/old/beframework/mybatisplus/",{y:"p",t:"Mybatisplus"},[]],["v-0265bfe1","/blog/old/beframework/rabbitmq/",{y:"p",t:"Rabbitmq"},[]],["v-1883faf2","/blog/old/beframework/spring/",{y:"p",t:"Spring"},[]],["v-1b67f680","/blog/old/beframework/springboot/",{y:"p",t:"Springboot"},[]],["v-58bf2fb7","/blog/old/beframework/springcloud/",{y:"p",t:"Springcloud"},[]],["v-3264841c","/blog/old/beframework/springmvc/",{y:"p",t:"Springmvc"},[]],["v-4d2542b5","/blog/old/beframework/swagger/",{y:"p",t:"Swagger"},[]],["v-2289dd5a","/blog/old/beskill/activiti/",{y:"p",t:"Activiti"},[]],["v-d4424206","/blog/old/beskill/android/",{y:"p",t:"Android"},[]],["v-d973dcc4","/blog/old/beskill/bash/",{y:"p",t:"Bash"},[]],["v-5ad92f12","/blog/old/beskill/docker/",{y:"p",t:"Docker"},[]],["v-2f7a6abe","/blog/old/beskill/maven/",{y:"p",t:"Maven"},[]],["v-d6ebcfaa","/blog/old/beskill/yaml/",{y:"p",t:"Yaml"},[]],["v-ce71e5f6","/blog/old/database/mysql/",{y:"p",t:"Mysql"},[]],["v-461dbf8e","/blog/old/database/oracle/",{y:"p",t:"Oracle"},[]],["v-bfa2f968","/blog/old/database/redis/",{y:"p",t:"Redis"},[]],["v-39ad1b74","/blog/old/fe/",{y:"p",t:"Fe"},[]],["v-b82b2f16","/blog/old/language/fe/",{y:"p",t:"Fe"},[]],["v-5329c232","/blog/old/language/java/",{y:"p",t:"Java"},[]],["v-d3f8a510","/blog/old/language/python/",{y:"p",t:"Python"},[]],["v-846fe2d2","/blog/old/database/nosql/mongodb/",{y:"p",t:"Mongodb"},[]],["v-cc220acc","/blog/old/database/nosql/",{y:"p",t:"Nosql"},[]],["v-464b554e","/blog/old/fe/framework/vue/",{y:"p",t:"Vue"},[]],["v-6b69a98c","/blog/old/fe/skill/websocket/",{y:"p",t:"Websocket"},[]],["v-5bc93818","/category/",{y:"p",t:"分类",I:0},[]],["v-744d024e","/tag/",{y:"p",t:"标签",I:0},[]],["v-e52c881c","/article/",{y:"p",t:"文章",I:0},[]],["v-154dc4c4","/star/",{y:"p",t:"收藏",I:0},[]],["v-01560935","/timeline/",{y:"p",t:"时间轴",I:0},[]],["v-06be9332","/category/%E7%AE%97%E6%B3%95/",{y:"p",t:"算法 分类",I:0},["/category/算法/"]],["v-2687e471","/tag/%E7%AE%97%E6%B3%95/",{y:"p",t:"标签: 算法",I:0},["/tag/算法/"]],["v-7a2dbc66","/category/%E6%8A%80%E5%B7%A7/",{y:"p",t:"技巧 分类",I:0},["/category/技巧/"]],["v-b7d62b20","/tag/%E6%8A%80%E5%B7%A7/",{y:"p",t:"标签: 技巧",I:0},["/tag/技巧/"]],["v-4c00fee6","/category/%E5%90%8E%E7%AB%AF%E6%A1%86%E6%9E%B6/",{y:"p",t:"后端框架 分类",I:0},["/category/后端框架/"]],["v-b312914e","/tag/elk/",{y:"p",t:"标签: elk",I:0},[]],["v-65eef823","/category/elk/",{y:"p",t:"elk 分类",I:0},[]],["v-2cce94e0","/tag/elasticsearch/",{y:"p",t:"标签: elasticsearch",I:0},[]],["v-49f5e4d4","/category/mybatis/",{y:"p",t:"Mybatis 分类",I:0},[]],["v-757f190a","/tag/mybatis/",{y:"p",t:"标签: Mybatis",I:0},[]],["v-24cf7443","/category/mybatis-plus/",{y:"p",t:"MyBatis-Plus 分类",I:0},[]],["v-41e71c66","/tag/mybatis-plus/",{y:"p",t:"标签: MyBatis-Plus",I:0},[]],["v-1e1f7399","/category/rabbitmq/",{y:"p",t:"RabbitMQ 分类",I:0},[]],["v-63bcc623","/tag/rabbitmq/",{y:"p",t:"标签: RabbitMQ",I:0},[]],["v-08073caa","/category/spring/",{y:"p",t:"Spring 分类",I:0},[]],["v-7d0ba9b4","/tag/spring/",{y:"p",t:"标签: Spring",I:0},[]],["v-0667aa78","/category/springboot/",{y:"p",t:"SpringBoot 分类",I:0},[]],["v-59fa8282","/tag/springboot/",{y:"p",t:"标签: SpringBoot",I:0},[]],["v-6fcf7e02","/category/springcloud/",{y:"p",t:"SpringCloud 分类",I:0},[]],["v-323f2b96","/tag/springcloud/",{y:"p",t:"标签: SpringCloud",I:0},[]],["v-424a813a","/category/springmvc/",{y:"p",t:"SpringMVC 分类",I:0},[]],["v-97aefb08","/tag/%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/",{y:"p",t:"标签: 项目总结",I:0},["/tag/项目总结/"]],["v-4e0a37fd","/category/swagger/",{y:"p",t:"swagger 分类",I:0},[]],["v-9f510020","/tag/springmvc/",{y:"p",t:"标签: SpringMVC",I:0},[]],["v-51acfcdb","/category/%E5%90%8E%E7%AB%AF%E6%8A%80%E6%9C%AF/",{y:"p",t:"后端技术 分类",I:0},["/category/后端技术/"]],["v-79936c33","/tag/swagger/",{y:"p",t:"标签: swagger",I:0},[]],["v-4baa6010","/category/activiti/",{y:"p",t:"activiti 分类",I:0},[]],["v-1fc82282","/tag/activiti/",{y:"p",t:"标签: activiti",I:0},[]],["v-29da37b8","/category/android/",{y:"p",t:"android 分类",I:0},[]],["v-2303312e","/tag/%E5%B7%A5%E4%BD%9C%E6%B5%81/",{y:"p",t:"标签: 工作流",I:0},["/tag/工作流/"]],["v-57c0eac3","/category/bash/",{y:"p",t:"Bash 分类",I:0},[]],["v-55636bee","/tag/android/",{y:"p",t:"标签: android",I:0},[]],["v-27fb5a12","/category/docker/",{y:"p",t:"docker 分类",I:0},[]],["v-2831124d","/tag/bash/",{y:"p",t:"标签: Bash",I:0},[]],["v-99b9d3c8","/category/maven/",{y:"p",t:"maven 分类",I:0},[]],["v-6106c001","/tag/docker/",{y:"p",t:"标签: docker",I:0},[]],["v-5904f150","/category/yaml/",{y:"p",t:"yaml 分类",I:0},[]],["v-1e90405c","/tag/maven/",{y:"p",t:"标签: maven",I:0},[]],["v-5e0b61bd","/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",{y:"p",t:"数据库 分类",I:0},["/category/数据库/"]],["v-297518da","/tag/yaml/",{y:"p",t:"标签: yaml",I:0},[]],["v-9717cc36","/category/mysql/",{y:"p",t:"Mysql 分类",I:0},[]],["v-25365ef3","/tag/%E6%95%B0%E6%8D%AE%E5%BA%93/",{y:"p",t:"标签: 数据库",I:0},["/tag/数据库/"]],["v-36e5af59","/category/oracle/",{y:"p",t:"Oracle 分类",I:0},[]],["v-1bee38ca","/tag/mysql/",{y:"p",t:"标签: Mysql",I:0},[]],["v-8848dfa8","/category/redis/",{y:"p",t:"Redis 分类",I:0},[]],["v-a82bc73a","/tag/oracle/",{y:"p",t:"标签: Oracle",I:0},[]],["v-3df94dfd","/category/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/",{y:"p",t:"编程语言 分类",I:0},["/category/编程语言/"]],["v-0d1f4c3c","/tag/redis/",{y:"p",t:"标签: Redis",I:0},[]],["v-e9c7e408","/category/%E5%89%8D%E7%AB%AF/",{y:"p",t:"前端 分类",I:0},["/category/前端/"]],["v-b3142c4c","/tag/css/",{y:"p",t:"标签: CSS",I:0},[]],["v-5831b135","/category/java/",{y:"p",t:"Java 分类",I:0},[]],["v-3b951558","/tag/javascript/",{y:"p",t:"标签: JavaScript",I:0},[]],["v-78cbe7bb","/category/python/",{y:"p",t:"Python 分类",I:0},[]],["v-288e2c56","/tag/html/",{y:"p",t:"标签: HTML",I:0},[]],["v-94c7f10c","/category/nosql/",{y:"p",t:"NoSql 分类",I:0},[]],["v-28a1d8bf","/tag/java/",{y:"p",t:"标签: Java",I:0},[]],["v-4dc3ee15","/category/mongodb/",{y:"p",t:"MongoDB 分类",I:0},[]],["v-245f5676","/tag/python/",{y:"p",t:"标签: Python",I:0},[]],["v-06ebc23c","/category/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/",{y:"p",t:"前端框架 分类",I:0},["/category/前端框架/"]],["v-794d224b","/tag/mongodb/",{y:"p",t:"标签: MongoDB",I:0},[]],["v-65f6d381","/category/vue/",{y:"p",t:"vue 分类",I:0},[]],["v-b302da92","/tag/vue/",{y:"p",t:"标签: vue",I:0},[]],["v-74379b30","/category/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/",{y:"p",t:"前端技术 分类",I:0},["/category/前端技术/"]],["v-921953d4","/tag/websocket/",{y:"p",t:"标签: websocket",I:0},[]],["v-48e65760","/category/websocket/",{y:"p",t:"websocket 分类",I:0},[]]];var Vr=B({name:"Vuepress",setup(){const n=k1();return()=>r(n.value)}}),d3=()=>u3.reduce((n,[t,s,e,a])=>(n.push({name:t,path:s,component:Vr,meta:e},{path:s.endsWith("/")?s+"index.html":s.substring(0,s.length-5),redirect:s},...a.map(l=>({path:l===":md"?s.substring(0,s.length-5)+".md":l,redirect:s}))),n),[{name:"404",path:"/:catchAll(.*)",component:Vr}]),v3=j1,m3=()=>{const n=Eg({history:v3(di("/")),routes:d3(),scrollBehavior:(t,s,e)=>e||(t.hash?{el:t.hash}:{top:0})});return n.beforeResolve(async(t,s)=>{var e;(t.path!==s.path||s===Dt)&&([Kt.value]=await Promise.all([Lt.resolvePageData(t.name),(e=Jc[t.name])==null?void 0:e.__asyncLoader()]))}),n},g3=n=>{n.component("ClientOnly",Oa),n.component("Content",gi)},b3=(n,t,s)=>{const e=A(()=>Lt.resolveLayouts(s)),a=er(()=>t.currentRoute.value.path),l=er(()=>Lt.resolveRouteLocale(Cs.value.locales,a.value)),i=A(()=>Lt.resolveSiteLocaleData(Cs.value,l.value)),o=A(()=>Lt.resolvePageFrontmatter(Kt.value)),p=A(()=>Lt.resolvePageHeadTitle(Kt.value,i.value)),c=A(()=>Lt.resolvePageHead(p.value,o.value,i.value)),u=A(()=>Lt.resolvePageLang(Kt.value)),d=A(()=>Lt.resolvePageLayout(Kt.value,e.value));return n.provide(v1,e),n.provide(Wc,o),n.provide(b1,p),n.provide(Kc,c),n.provide(Qc,u),n.provide(Yc,d),n.provide(mi,l),n.provide(Zc,i),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>o.value},$head:{get:()=>c.value},$headTitle:{get:()=>p.value},$lang:{get:()=>u.value},$page:{get:()=>Kt.value},$routeLocale:{get:()=>l.value},$site:{get:()=>Cs.value},$siteLocale:{get:()=>i.value},$withBase:{get:()=>xn}}),{layouts:e,pageData:Kt,pageFrontmatter:o,pageHead:c,pageHeadTitle:p,pageLang:u,pageLayout:d,routeLocale:l,siteData:Cs,siteLocaleData:i}},k3=()=>{const n=g1(),t=vi(),s=F([]),e=()=>{n.value.forEach(l=>{const i=f3(l);i&&s.value.push(i)})},a=()=>{document.documentElement.lang=t.value,s.value.forEach(l=>{l.parentNode===document.head&&document.head.removeChild(l)}),s.value.splice(0,s.value.length),n.value.forEach(l=>{const i=h3(l);i!==null&&(document.head.appendChild(i),s.value.push(i))})};ft(f1,a),vn(()=>{e(),a(),en(()=>n.value,a)})},f3=([n,t,s=""])=>{const e=Object.entries(t).map(([o,p])=>pn(p)?`[${o}=${JSON.stringify(p)}]`:p===!0?`[${o}]`:"").join(""),a=`head > ${n}${e}`;return Array.from(document.querySelectorAll(a)).find(o=>o.innerText===s)||null},h3=([n,t,s])=>{if(!pn(n))return null;const e=document.createElement(n);return Me(t)&&Object.entries(t).forEach(([a,l])=>{pn(l)?e.setAttribute(a,l):l===!0&&e.setAttribute(a,"")}),pn(s)&&e.appendChild(document.createTextNode(s)),e},y3=s1,_3=async()=>{var s;const n=y3({name:"VuepressApp",setup(){var e;k3();for(const a of ra)(e=a.setup)==null||e.call(a);return()=>[r(pp),...ra.flatMap(({rootComponents:a=[]})=>a.map(l=>r(l)))]}}),t=m3();g3(n),b3(n,t,ra);for(const e of ra)await((s=e.enhance)==null?void 0:s.call(e,{app:n,router:t,siteData:Cs}));return n.use(t),{app:n,router:t}};_3().then(({app:n,router:t})=>{t.isReady().then(()=>{n.mount("#app")})});export{I3 as $,Gl as A,ee as B,is as C,_s as D,Oe as E,Un as F,S3 as G,O3 as H,Do as I,Mn as J,M3 as K,j3 as L,ft as M,as as N,sl as O,Lp as P,Mb as Q,ym as R,uc as S,ne as T,T3 as U,R3 as V,ts as W,B3 as X,x3 as Y,w3 as Z,v as _,D3 as a,L3 as b,C3 as c,_3 as createVueApp,Dc as d,Oc as e,Ln as f,B as g,F3 as h,F as i,A as j,vn as k,r as l,en as m,oi as n,Tc as o,P3 as p,Jl as q,tt as r,Cn as s,kn as t,V3 as u,Xo as v,_v as w,Cc as x,gs as y,A3 as z};
