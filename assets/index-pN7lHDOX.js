(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const fh=()=>{};var ra={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},dh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],u=n[e++],c=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,c=i+2<n.length,f=c?n[i+2]:0,d=o>>2,g=(o&3)<<4|u>>4;let v=(u&15)<<2|f>>6,A=f&63;c||(A=64,a||(v=64)),r.push(e[d],e[g],e[v],e[A])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ku(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):dh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const g=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||f==null||g==null)throw new ph;const v=o<<2|u>>4;if(r.push(v),f!==64){const A=u<<4&240|f>>2;if(r.push(A),g!==64){const b=f<<6&192|g;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ph extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gh=function(n){const t=ku(n);return Mu.encodeByteArray(t,!0)},Ar=function(n){return gh(n).replace(/\./g,"")},mh=function(n){try{return Mu.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=()=>_h().__FIREBASE_DEFAULTS__,vh=()=>{if(typeof process>"u"||typeof ra>"u")return;const n=ra.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Eh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&mh(n[1]);return t&&JSON.parse(t)},As=()=>{try{return fh()||yh()||vh()||Eh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wh=n=>{var t,e;return(e=(t=As())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Th=n=>{const t=wh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ou=()=>{var n;return(n=As())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ar(JSON.stringify(e)),Ar(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sh(){var n;const t=(n=As())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ch(){return!Sh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bh(){try{return typeof indexedDB=="object"}catch{return!1}}function Ph(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="FirebaseError";class Ke extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=xh,Object.setPrototypeOf(this,Ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lu.prototype.create)}}class Lu{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Vh(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Ke(i,u,r)}}function Vh(n,t){return n.replace(Dh,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Dh=/\{\$([^}]+)}/g;function Rr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(ia(o)&&ia(a)){if(!Rr(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function ia(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(n){return n&&n._delegate?n._delegate:n}class Rn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ih;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Oh(t))try{this.getOrInitializeService({instanceIdentifier:fe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=fe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=fe){return this.instances.has(t)}getOptions(t=fe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=fe){return this.component?this.component.multipleInstances?t:fe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mh(n){return n===fe?void 0:n}function Oh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new kh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const Fh={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Uh=q.INFO,Bh={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},$h=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Bh[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fu{constructor(t){this.name=t,this._logLevel=Uh,this._logHandler=$h,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Fh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}const qh=(n,t)=>t.some(e=>n instanceof e);let sa,oa;function zh(){return sa||(sa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jh(){return oa||(oa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uu=new WeakMap,zi=new WeakMap,Bu=new WeakMap,xi=new WeakMap,Rs=new WeakMap;function Hh(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Zt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Uu.set(e,n)}).catch(()=>{}),Rs.set(t,n),t}function Gh(n){if(zi.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});zi.set(n,t)}let ji={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return zi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Bu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Zt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Kh(n){ji=n(ji)}function Qh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Vi(this),t,...e);return Bu.set(r,t.sort?t.sort():[t]),Zt(r)}:jh().includes(n)?function(...t){return n.apply(Vi(this),t),Zt(Uu.get(this))}:function(...t){return Zt(n.apply(Vi(this),t))}}function Wh(n){return typeof n=="function"?Qh(n):(n instanceof IDBTransaction&&Gh(n),qh(n,zh())?new Proxy(n,ji):n)}function Zt(n){if(n instanceof IDBRequest)return Hh(n);if(xi.has(n))return xi.get(n);const t=Wh(n);return t!==n&&(xi.set(n,t),Rs.set(t,n)),t}const Vi=n=>Rs.get(n);function Xh(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),u=Zt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Zt(a.result),c.oldVersion,c.newVersion,Zt(a.transaction),c)}),e&&a.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),u.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const Yh=["get","getKey","getAll","getAllKeys","count"],Jh=["put","add","delete","clear"],Di=new Map;function aa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Di.get(t))return Di.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Jh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Yh.includes(e)))return;const o=async function(a,...u){const c=this.transaction(a,i?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[e](...u),i&&c.done]))[0]};return Di.set(t,o),o}Kh(n=>({...n,get:(t,e,r)=>aa(t,e)||n.get(t,e,r),has:(t,e)=>!!aa(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(tf(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function tf(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hi="@firebase/app",ua="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Fu("@firebase/app"),ef="@firebase/app-compat",nf="@firebase/analytics-compat",rf="@firebase/analytics",sf="@firebase/app-check-compat",of="@firebase/app-check",af="@firebase/auth",uf="@firebase/auth-compat",lf="@firebase/database",cf="@firebase/data-connect",hf="@firebase/database-compat",ff="@firebase/functions",df="@firebase/functions-compat",pf="@firebase/installations",gf="@firebase/installations-compat",mf="@firebase/messaging",_f="@firebase/messaging-compat",yf="@firebase/performance",vf="@firebase/performance-compat",Ef="@firebase/remote-config",wf="@firebase/remote-config-compat",Tf="@firebase/storage",If="@firebase/storage-compat",Af="@firebase/firestore",Rf="@firebase/vertexai",Sf="@firebase/firestore-compat",Cf="firebase",bf="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="[DEFAULT]",Pf={[Hi]:"fire-core",[ef]:"fire-core-compat",[rf]:"fire-analytics",[nf]:"fire-analytics-compat",[of]:"fire-app-check",[sf]:"fire-app-check-compat",[af]:"fire-auth",[uf]:"fire-auth-compat",[lf]:"fire-rtdb",[cf]:"fire-data-connect",[hf]:"fire-rtdb-compat",[ff]:"fire-fn",[df]:"fire-fn-compat",[pf]:"fire-iid",[gf]:"fire-iid-compat",[mf]:"fire-fcm",[_f]:"fire-fcm-compat",[yf]:"fire-perf",[vf]:"fire-perf-compat",[Ef]:"fire-rc",[wf]:"fire-rc-compat",[Tf]:"fire-gcs",[If]:"fire-gcs-compat",[Af]:"fire-fst",[Sf]:"fire-fst-compat",[Rf]:"fire-vertex","fire-js":"fire-js",[Cf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Map,xf=new Map,Ki=new Map;function la(n,t){try{n.container.addComponent(t)}catch(e){zt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Cr(n){const t=n.name;if(Ki.has(t))return zt.debug(`There were multiple attempts to register component ${t}.`),!1;Ki.set(t,n);for(const e of Sr.values())la(e,n);for(const e of xf.values())la(e,n);return!0}function Vf(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Df(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},te=new Lu("app","Firebase",Nf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=bf;function $u(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gi,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw te.create("bad-app-name",{appName:String(i)});if(e||(e=Ou()),!e)throw te.create("no-options");const o=Sr.get(i);if(o){if(Rr(e,o.options)&&Rr(r,o.config))return o;throw te.create("duplicate-app",{appName:i})}const a=new Lh(i);for(const c of Ki.values())a.addComponent(c);const u=new kf(e,r,a);return Sr.set(i,u),u}function Of(n=Gi){const t=Sr.get(n);if(!t&&n===Gi&&Ou())return $u();if(!t)throw te.create("no-app",{appName:n});return t}function De(n,t,e){var r;let i=(r=Pf[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zt.warn(u.join(" "));return}Cr(new Rn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="firebase-heartbeat-database",Ff=1,Sn="firebase-heartbeat-store";let Ni=null;function qu(){return Ni||(Ni=Xh(Lf,Ff,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Sn)}catch(e){console.warn(e)}}}}).catch(n=>{throw te.create("idb-open",{originalErrorMessage:n.message})})),Ni}async function Uf(n){try{const e=(await qu()).transaction(Sn),r=await e.objectStore(Sn).get(zu(n));return await e.done,r}catch(t){if(t instanceof Ke)zt.warn(t.message);else{const e=te.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zt.warn(e.message)}}}async function ca(n,t){try{const r=(await qu()).transaction(Sn,"readwrite");await r.objectStore(Sn).put(t,zu(n)),await r.done}catch(e){if(e instanceof Ke)zt.warn(e.message);else{const r=te.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});zt.warn(r.message)}}}function zu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=1024,$f=30;class qf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new jf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ha();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>$f){const a=Hf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){zt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ha(),{heartbeatsToSend:r,unsentEntries:i}=zf(this._heartbeatsCache.heartbeats),o=Ar(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return zt.warn(e),""}}}function ha(){return new Date().toISOString().substring(0,10)}function zf(n,t=Bf){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),fa(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),fa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class jf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bh()?Ph().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Uf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return ca(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return ca(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function fa(n){return Ar(JSON.stringify({version:2,heartbeats:n})).length}function Hf(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n){Cr(new Rn("platform-logger",t=>new Zh(t),"PRIVATE")),Cr(new Rn("heartbeat",t=>new qf(t),"PRIVATE")),De(Hi,ua,n),De(Hi,ua,"esm2017"),De("fire-js","")}Gf("");var Kf="firebase",Qf="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De(Kf,Qf,"app");var da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ee,ju;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function y(){}y.prototype=m.prototype,T.D=m.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(w,E,I){for(var _=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)_[ct-2]=arguments[ct];return m.prototype[E].apply(w,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,y){y||(y=0);var w=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)w[E]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(E=0;16>E;++E)w[E]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=T.g[0],y=T.g[1],E=T.g[2];var I=T.g[3],_=m+(I^y&(E^I))+w[0]+3614090360&4294967295;m=y+(_<<7&4294967295|_>>>25),_=I+(E^m&(y^E))+w[1]+3905402710&4294967295,I=m+(_<<12&4294967295|_>>>20),_=E+(y^I&(m^y))+w[2]+606105819&4294967295,E=I+(_<<17&4294967295|_>>>15),_=y+(m^E&(I^m))+w[3]+3250441966&4294967295,y=E+(_<<22&4294967295|_>>>10),_=m+(I^y&(E^I))+w[4]+4118548399&4294967295,m=y+(_<<7&4294967295|_>>>25),_=I+(E^m&(y^E))+w[5]+1200080426&4294967295,I=m+(_<<12&4294967295|_>>>20),_=E+(y^I&(m^y))+w[6]+2821735955&4294967295,E=I+(_<<17&4294967295|_>>>15),_=y+(m^E&(I^m))+w[7]+4249261313&4294967295,y=E+(_<<22&4294967295|_>>>10),_=m+(I^y&(E^I))+w[8]+1770035416&4294967295,m=y+(_<<7&4294967295|_>>>25),_=I+(E^m&(y^E))+w[9]+2336552879&4294967295,I=m+(_<<12&4294967295|_>>>20),_=E+(y^I&(m^y))+w[10]+4294925233&4294967295,E=I+(_<<17&4294967295|_>>>15),_=y+(m^E&(I^m))+w[11]+2304563134&4294967295,y=E+(_<<22&4294967295|_>>>10),_=m+(I^y&(E^I))+w[12]+1804603682&4294967295,m=y+(_<<7&4294967295|_>>>25),_=I+(E^m&(y^E))+w[13]+4254626195&4294967295,I=m+(_<<12&4294967295|_>>>20),_=E+(y^I&(m^y))+w[14]+2792965006&4294967295,E=I+(_<<17&4294967295|_>>>15),_=y+(m^E&(I^m))+w[15]+1236535329&4294967295,y=E+(_<<22&4294967295|_>>>10),_=m+(E^I&(y^E))+w[1]+4129170786&4294967295,m=y+(_<<5&4294967295|_>>>27),_=I+(y^E&(m^y))+w[6]+3225465664&4294967295,I=m+(_<<9&4294967295|_>>>23),_=E+(m^y&(I^m))+w[11]+643717713&4294967295,E=I+(_<<14&4294967295|_>>>18),_=y+(I^m&(E^I))+w[0]+3921069994&4294967295,y=E+(_<<20&4294967295|_>>>12),_=m+(E^I&(y^E))+w[5]+3593408605&4294967295,m=y+(_<<5&4294967295|_>>>27),_=I+(y^E&(m^y))+w[10]+38016083&4294967295,I=m+(_<<9&4294967295|_>>>23),_=E+(m^y&(I^m))+w[15]+3634488961&4294967295,E=I+(_<<14&4294967295|_>>>18),_=y+(I^m&(E^I))+w[4]+3889429448&4294967295,y=E+(_<<20&4294967295|_>>>12),_=m+(E^I&(y^E))+w[9]+568446438&4294967295,m=y+(_<<5&4294967295|_>>>27),_=I+(y^E&(m^y))+w[14]+3275163606&4294967295,I=m+(_<<9&4294967295|_>>>23),_=E+(m^y&(I^m))+w[3]+4107603335&4294967295,E=I+(_<<14&4294967295|_>>>18),_=y+(I^m&(E^I))+w[8]+1163531501&4294967295,y=E+(_<<20&4294967295|_>>>12),_=m+(E^I&(y^E))+w[13]+2850285829&4294967295,m=y+(_<<5&4294967295|_>>>27),_=I+(y^E&(m^y))+w[2]+4243563512&4294967295,I=m+(_<<9&4294967295|_>>>23),_=E+(m^y&(I^m))+w[7]+1735328473&4294967295,E=I+(_<<14&4294967295|_>>>18),_=y+(I^m&(E^I))+w[12]+2368359562&4294967295,y=E+(_<<20&4294967295|_>>>12),_=m+(y^E^I)+w[5]+4294588738&4294967295,m=y+(_<<4&4294967295|_>>>28),_=I+(m^y^E)+w[8]+2272392833&4294967295,I=m+(_<<11&4294967295|_>>>21),_=E+(I^m^y)+w[11]+1839030562&4294967295,E=I+(_<<16&4294967295|_>>>16),_=y+(E^I^m)+w[14]+4259657740&4294967295,y=E+(_<<23&4294967295|_>>>9),_=m+(y^E^I)+w[1]+2763975236&4294967295,m=y+(_<<4&4294967295|_>>>28),_=I+(m^y^E)+w[4]+1272893353&4294967295,I=m+(_<<11&4294967295|_>>>21),_=E+(I^m^y)+w[7]+4139469664&4294967295,E=I+(_<<16&4294967295|_>>>16),_=y+(E^I^m)+w[10]+3200236656&4294967295,y=E+(_<<23&4294967295|_>>>9),_=m+(y^E^I)+w[13]+681279174&4294967295,m=y+(_<<4&4294967295|_>>>28),_=I+(m^y^E)+w[0]+3936430074&4294967295,I=m+(_<<11&4294967295|_>>>21),_=E+(I^m^y)+w[3]+3572445317&4294967295,E=I+(_<<16&4294967295|_>>>16),_=y+(E^I^m)+w[6]+76029189&4294967295,y=E+(_<<23&4294967295|_>>>9),_=m+(y^E^I)+w[9]+3654602809&4294967295,m=y+(_<<4&4294967295|_>>>28),_=I+(m^y^E)+w[12]+3873151461&4294967295,I=m+(_<<11&4294967295|_>>>21),_=E+(I^m^y)+w[15]+530742520&4294967295,E=I+(_<<16&4294967295|_>>>16),_=y+(E^I^m)+w[2]+3299628645&4294967295,y=E+(_<<23&4294967295|_>>>9),_=m+(E^(y|~I))+w[0]+4096336452&4294967295,m=y+(_<<6&4294967295|_>>>26),_=I+(y^(m|~E))+w[7]+1126891415&4294967295,I=m+(_<<10&4294967295|_>>>22),_=E+(m^(I|~y))+w[14]+2878612391&4294967295,E=I+(_<<15&4294967295|_>>>17),_=y+(I^(E|~m))+w[5]+4237533241&4294967295,y=E+(_<<21&4294967295|_>>>11),_=m+(E^(y|~I))+w[12]+1700485571&4294967295,m=y+(_<<6&4294967295|_>>>26),_=I+(y^(m|~E))+w[3]+2399980690&4294967295,I=m+(_<<10&4294967295|_>>>22),_=E+(m^(I|~y))+w[10]+4293915773&4294967295,E=I+(_<<15&4294967295|_>>>17),_=y+(I^(E|~m))+w[1]+2240044497&4294967295,y=E+(_<<21&4294967295|_>>>11),_=m+(E^(y|~I))+w[8]+1873313359&4294967295,m=y+(_<<6&4294967295|_>>>26),_=I+(y^(m|~E))+w[15]+4264355552&4294967295,I=m+(_<<10&4294967295|_>>>22),_=E+(m^(I|~y))+w[6]+2734768916&4294967295,E=I+(_<<15&4294967295|_>>>17),_=y+(I^(E|~m))+w[13]+1309151649&4294967295,y=E+(_<<21&4294967295|_>>>11),_=m+(E^(y|~I))+w[4]+4149444226&4294967295,m=y+(_<<6&4294967295|_>>>26),_=I+(y^(m|~E))+w[11]+3174756917&4294967295,I=m+(_<<10&4294967295|_>>>22),_=E+(m^(I|~y))+w[2]+718787259&4294967295,E=I+(_<<15&4294967295|_>>>17),_=y+(I^(E|~m))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var y=m-this.blockSize,w=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=y;)i(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<m;)if(w[E++]=T.charCodeAt(I++),E==this.blockSize){i(this,w),E=0;break}}else for(;I<m;)if(w[E++]=T[I++],E==this.blockSize){i(this,w),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var y=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=y&255,y/=256;for(this.u(T),T=Array(16),m=y=0;4>m;++m)for(var w=0;32>w;w+=8)T[y++]=this.g[m]>>>w&255;return T};function o(T,m){var y=u;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=m(T)}function a(T,m){this.h=m;for(var y=[],w=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;w&&I==m||(y[E]=I,w=!1)}this.g=y}var u={};function c(T){return-128<=T&&128>T?o(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return V(f(-T));for(var m=[],y=1,w=0;T>=y;w++)m[w]=T/y|0,y*=4294967296;return new a(m,0)}function d(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return V(d(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(m,8)),w=g,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),_=parseInt(T.substring(E,E+I),m);8>I?(I=f(Math.pow(m,I)),w=w.j(I).add(f(_))):(w=w.j(y),w=w.add(f(_)))}return w}var g=c(0),v=c(1),A=c(16777216);n=a.prototype,n.m=function(){if(N(this))return-V(this).m();for(var T=0,m=1,y=0;y<this.g.length;y++){var w=this.i(y);T+=(0<=w?w:4294967296+w)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(N(this))return"-"+V(this).toString(T);for(var m=f(Math.pow(T,6)),y=this,w="";;){var E=Q(y,m).g;y=j(y,E.j(m));var I=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=E,b(y))return I+w;for(;6>I.length;)I="0"+I;w=I+w}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=j(this,T),N(T)?-1:b(T)?0:1};function V(T){for(var m=T.g.length,y=[],w=0;w<m;w++)y[w]=~T.g[w];return new a(y,~T.h).add(v)}n.abs=function(){return N(this)?V(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],w=0,E=0;E<=m;E++){var I=w+(this.i(E)&65535)+(T.i(E)&65535),_=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);w=_>>>16,I&=65535,_&=65535,y[E]=_<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function j(T,m){return T.add(V(m))}n.j=function(T){if(b(this)||b(T))return g;if(N(this))return N(T)?V(this).j(V(T)):V(V(this).j(T));if(N(T))return V(this.j(V(T)));if(0>this.l(A)&&0>T.l(A))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,y=[],w=0;w<2*m;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var E=0;E<T.g.length;E++){var I=this.i(w)>>>16,_=this.i(w)&65535,ct=T.i(E)>>>16,Gt=T.i(E)&65535;y[2*w+2*E]+=_*Gt,U(y,2*w+2*E),y[2*w+2*E+1]+=I*Gt,U(y,2*w+2*E+1),y[2*w+2*E+1]+=_*ct,U(y,2*w+2*E+1),y[2*w+2*E+2]+=I*ct,U(y,2*w+2*E+2)}for(w=0;w<m;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=m;w<2*m;w++)y[w]=0;return new a(y,0)};function U(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function F(T,m){this.g=T,this.h=m}function Q(T,m){if(b(m))throw Error("division by zero");if(b(T))return new F(g,g);if(N(T))return m=Q(V(T),m),new F(V(m.g),V(m.h));if(N(m))return m=Q(T,V(m)),new F(V(m.g),m.h);if(30<T.g.length){if(N(T)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var y=v,w=m;0>=w.l(T);)y=K(y),w=K(w);var E=X(y,1),I=X(w,1);for(w=X(w,2),y=X(y,2);!b(w);){var _=I.add(w);0>=_.l(T)&&(E=E.add(y),I=_),w=X(w,1),y=X(y,1)}return m=j(T,E.j(m)),new F(E,m)}for(E=g;0<=T.l(m);){for(y=Math.max(1,Math.floor(T.m()/m.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),I=f(y),_=I.j(m);N(_)||0<_.l(T);)y-=w,I=f(y),_=I.j(m);b(I)&&(I=v),E=E.add(I),T=j(T,_)}return new F(E,T)}n.A=function(T){return Q(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)&T.i(w);return new a(y,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)|T.i(w);return new a(y,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)^T.i(w);return new a(y,this.h^T.h)};function K(T){for(var m=T.g.length+1,y=[],w=0;w<m;w++)y[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(y,T.h)}function X(T,m){var y=m>>5;m%=32;for(var w=T.g.length-y,E=[],I=0;I<w;I++)E[I]=0<m?T.i(I+y)>>>m|T.i(I+y+1)<<32-m:T.i(I+y);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ju=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,ee=a}).apply(typeof da<"u"?da:typeof self<"u"?self:typeof window<"u"?window:{});var sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hu,pn,Gu,gr,Qi,Ku,Qu,Wu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,h){return s==Array.prototype||s==Object.prototype||(s[l]=h.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof sr=="object"&&sr];for(var l=0;l<s.length;++l){var h=s[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function i(s,l){if(l)t:{var h=r;s=s.split(".");for(var p=0;p<s.length-1;p++){var R=s[p];if(!(R in h))break t;h=h[R]}s=s[s.length-1],p=h[s],l=l(p),l!=p&&l!=null&&t(h,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var h=0,p=!1,R={next:function(){if(!p&&h<s.length){var S=h++;return{value:l(S,s[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function f(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function d(s,l,h){return s.call.apply(s.bind,arguments)}function g(s,l,h){if(!s)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),s.apply(l,R)}}return function(){return s.apply(l,arguments)}}function v(s,l,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,v.apply(null,arguments)}function A(s,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),s.apply(this,p)}}function b(s,l){function h(){}h.prototype=l.prototype,s.aa=l.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(p,R,S){for(var P=Array(arguments.length-2),W=2;W<arguments.length;W++)P[W-2]=arguments[W];return l.prototype[R].apply(p,P)}}function N(s){const l=s.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=s[p];return h}return[]}function V(s,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(c(p)){const R=s.length||0,S=p.length||0;s.length=R+S;for(let P=0;P<S;P++)s[R+P]=p[P]}else s.push(p)}}class j{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function U(s){return/^[\s\xa0]*$/.test(s)}function F(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function Q(s){return Q[" "](s),s}Q[" "]=function(){};var K=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function X(s,l,h){for(const p in s)l.call(h,s[p],p,s)}function T(s,l){for(const h in s)l.call(void 0,s[h],h,s)}function m(s){const l={};for(const h in s)l[h]=s[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(s,l){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)s[h]=p[h];for(let S=0;S<y.length;S++)h=y[S],Object.prototype.hasOwnProperty.call(p,h)&&(s[h]=p[h])}}function E(s){var l=1;s=s.split(":");const h=[];for(;0<l&&s.length;)h.push(s.shift()),l--;return s.length&&h.push(s.join(":")),h}function I(s){u.setTimeout(()=>{throw s},0)}function _(){var s=At;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class ct{constructor(){this.h=this.g=null}add(l,h){const p=Gt.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Gt=new j(()=>new Te,s=>s.reset());class Te{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Vt,Dt=!1,At=new ct,no=()=>{const s=u.Promise.resolve(void 0);Vt=()=>{s.then(Dc)}};var Dc=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(h){I(h)}var l=Gt;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}Dt=!1};function Kt(){this.s=this.s,this.C=this.C}Kt.prototype.s=!1,Kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Nc=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};u.addEventListener("test",h,l),u.removeEventListener("test",h,l)}catch{}return s}();function Je(s,l){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,p=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(K){t:{try{Q(l.nodeName);var R=!0;break t}catch{}R=!1}R||(l=null)}}else h=="mouseover"?l=s.fromElement:h=="mouseout"&&(l=s.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:kc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Je.aa.h.call(this)}}b(Je,ht);var kc={2:"touch",3:"pen",4:"mouse"};Je.prototype.h=function(){Je.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Bn="closure_listenable_"+(1e6*Math.random()|0),Mc=0;function Oc(s,l,h,p,R){this.listener=s,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=R,this.key=++Mc,this.da=this.fa=!1}function $n(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function qn(s){this.src=s,this.g={},this.h=0}qn.prototype.add=function(s,l,h,p,R){var S=s.toString();s=this.g[S],s||(s=this.g[S]=[],this.h++);var P=ui(s,l,p,R);return-1<P?(l=s[P],h||(l.fa=!1)):(l=new Oc(l,this.src,S,!!p,R),l.fa=h,s.push(l)),l};function ai(s,l){var h=l.type;if(h in s.g){var p=s.g[h],R=Array.prototype.indexOf.call(p,l,void 0),S;(S=0<=R)&&Array.prototype.splice.call(p,R,1),S&&($n(l),s.g[h].length==0&&(delete s.g[h],s.h--))}}function ui(s,l,h,p){for(var R=0;R<s.length;++R){var S=s[R];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return R}return-1}var li="closure_lm_"+(1e6*Math.random()|0),ci={};function ro(s,l,h,p,R){if(Array.isArray(l)){for(var S=0;S<l.length;S++)ro(s,l[S],h,p,R);return null}return h=oo(h),s&&s[Bn]?s.K(l,h,f(p)?!!p.capture:!1,R):Lc(s,l,h,!1,p,R)}function Lc(s,l,h,p,R,S){if(!l)throw Error("Invalid event type");var P=f(R)?!!R.capture:!!R,W=fi(s);if(W||(s[li]=W=new qn(s)),h=W.add(l,h,p,P,S),h.proxy)return h;if(p=Fc(),h.proxy=p,p.src=s,p.listener=h,s.addEventListener)Nc||(R=P),R===void 0&&(R=!1),s.addEventListener(l.toString(),p,R);else if(s.attachEvent)s.attachEvent(so(l.toString()),p);else if(s.addListener&&s.removeListener)s.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Fc(){function s(h){return l.call(s.src,s.listener,h)}const l=Uc;return s}function io(s,l,h,p,R){if(Array.isArray(l))for(var S=0;S<l.length;S++)io(s,l[S],h,p,R);else p=f(p)?!!p.capture:!!p,h=oo(h),s&&s[Bn]?(s=s.i,l=String(l).toString(),l in s.g&&(S=s.g[l],h=ui(S,h,p,R),-1<h&&($n(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete s.g[l],s.h--)))):s&&(s=fi(s))&&(l=s.g[l.toString()],s=-1,l&&(s=ui(l,h,p,R)),(h=-1<s?l[s]:null)&&hi(h))}function hi(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[Bn])ai(l.i,s);else{var h=s.type,p=s.proxy;l.removeEventListener?l.removeEventListener(h,p,s.capture):l.detachEvent?l.detachEvent(so(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=fi(l))?(ai(h,s),h.h==0&&(h.src=null,l[li]=null)):$n(s)}}}function so(s){return s in ci?ci[s]:ci[s]="on"+s}function Uc(s,l){if(s.da)s=!0;else{l=new Je(l,this);var h=s.listener,p=s.ha||s.src;s.fa&&hi(s),s=h.call(p,l)}return s}function fi(s){return s=s[li],s instanceof qn?s:null}var di="__closure_events_fn_"+(1e9*Math.random()>>>0);function oo(s){return typeof s=="function"?s:(s[di]||(s[di]=function(l){return s.handleEvent(l)}),s[di])}function ft(){Kt.call(this),this.i=new qn(this),this.M=this,this.F=null}b(ft,Kt),ft.prototype[Bn]=!0,ft.prototype.removeEventListener=function(s,l,h,p){io(this,s,l,h,p)};function yt(s,l){var h,p=s.F;if(p)for(h=[];p;p=p.F)h.push(p);if(s=s.M,p=l.type||l,typeof l=="string")l=new ht(l,s);else if(l instanceof ht)l.target=l.target||s;else{var R=l;l=new ht(p,s),w(l,R)}if(R=!0,h)for(var S=h.length-1;0<=S;S--){var P=l.g=h[S];R=zn(P,p,!0,l)&&R}if(P=l.g=s,R=zn(P,p,!0,l)&&R,R=zn(P,p,!1,l)&&R,h)for(S=0;S<h.length;S++)P=l.g=h[S],R=zn(P,p,!1,l)&&R}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var h=s.g[l],p=0;p<h.length;p++)$n(h[p]);delete s.g[l],s.h--}}this.F=null},ft.prototype.K=function(s,l,h,p){return this.i.add(String(s),l,!1,h,p)},ft.prototype.L=function(s,l,h,p){return this.i.add(String(s),l,!0,h,p)};function zn(s,l,h,p){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,S=0;S<l.length;++S){var P=l[S];if(P&&!P.da&&P.capture==h){var W=P.listener,at=P.ha||P.src;P.fa&&ai(s.i,P),R=W.call(at,p)!==!1&&R}}return R&&!p.defaultPrevented}function ao(s,l,h){if(typeof s=="function")h&&(s=v(s,h));else if(s&&typeof s.handleEvent=="function")s=v(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(s,l||0)}function uo(s){s.g=ao(()=>{s.g=null,s.i&&(s.i=!1,uo(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class Bc extends Kt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:uo(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(s){Kt.call(this),this.h=s,this.g={}}b(Ze,Kt);var lo=[];function co(s){X(s.g,function(l,h){this.g.hasOwnProperty(h)&&hi(l)},s),s.g={}}Ze.prototype.N=function(){Ze.aa.N.call(this),co(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pi=u.JSON.stringify,$c=u.JSON.parse,qc=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function gi(){}gi.prototype.h=null;function ho(s){return s.h||(s.h=s.i())}function fo(){}var tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mi(){ht.call(this,"d")}b(mi,ht);function _i(){ht.call(this,"c")}b(_i,ht);var ue={},po=null;function jn(){return po=po||new ft}ue.La="serverreachability";function go(s){ht.call(this,ue.La,s)}b(go,ht);function en(s){const l=jn();yt(l,new go(l))}ue.STAT_EVENT="statevent";function mo(s,l){ht.call(this,ue.STAT_EVENT,s),this.stat=l}b(mo,ht);function vt(s){const l=jn();yt(l,new mo(l,s))}ue.Ma="timingevent";function _o(s,l){ht.call(this,ue.Ma,s),this.size=l}b(_o,ht);function nn(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},l)}function rn(){this.g=!0}rn.prototype.xa=function(){this.g=!1};function zc(s,l,h,p,R,S){s.info(function(){if(s.g)if(S)for(var P="",W=S.split("&"),at=0;at<W.length;at++){var G=W[at].split("=");if(1<G.length){var dt=G[0];G=G[1];var pt=dt.split("_");P=2<=pt.length&&pt[1]=="type"?P+(dt+"="+G+"&"):P+(dt+"=redacted&")}}else P=null;else P=S;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+l+`
`+h+`
`+P})}function jc(s,l,h,p,R,S,P){s.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+l+`
`+h+`
`+S+" "+P})}function Ie(s,l,h,p){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+Gc(s,h)+(p?" "+p:"")})}function Hc(s,l){s.info(function(){return"TIMEOUT: "+l})}rn.prototype.info=function(){};function Gc(s,l){if(!s.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var p=h[s];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var S=R[0];if(S!="noop"&&S!="stop"&&S!="close")for(var P=1;P<R.length;P++)R[P]=""}}}}return pi(h)}catch{return l}}var Hn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yi;function Gn(){}b(Gn,gi),Gn.prototype.g=function(){return new XMLHttpRequest},Gn.prototype.i=function(){return{}},yi=new Gn;function Qt(s,l,h,p){this.j=s,this.i=l,this.l=h,this.R=p||1,this.U=new Ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vo}function vo(){this.i=null,this.g="",this.h=!1}var Eo={},vi={};function Ei(s,l,h){s.L=1,s.v=Xn(Bt(l)),s.m=h,s.P=!0,wo(s,null)}function wo(s,l){s.F=Date.now(),Kn(s),s.A=Bt(s.v);var h=s.A,p=s.R;Array.isArray(p)||(p=[String(p)]),Mo(h.i,"t",p),s.C=0,h=s.j.J,s.h=new vo,s.g=Zo(s.j,h?l:null,!s.m),0<s.O&&(s.M=new Bc(v(s.Y,s,s.g),s.O)),l=s.U,h=s.g,p=s.ca;var R="readystatechange";Array.isArray(R)||(R&&(lo[0]=R.toString()),R=lo);for(var S=0;S<R.length;S++){var P=ro(h,R[S],p||l.handleEvent,!1,l.h||l);if(!P)break;l.g[P.key]=P}l=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),en(),zc(s.i,s.u,s.A,s.l,s.R,s.m)}Qt.prototype.ca=function(s){s=s.target;const l=this.M;l&&$t(s)==3?l.j():this.Y(s)},Qt.prototype.Y=function(s){try{if(s==this.g)t:{const pt=$t(this.g);var l=this.g.Ba();const Se=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||qo(this.g)))){this.J||pt!=4||l==7||(l==8||0>=Se?en(3):en(2)),wi(this);var h=this.g.Z();this.X=h;e:if(To(this)){var p=qo(this.g);s="";var R=p.length,S=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){le(this),sn(this);var P="";break e}this.h.i=new u.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,s+=this.h.i.decode(p[l],{stream:!(S&&l==R-1)});p.length=0,this.h.g+=s,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=h==200,jc(this.i,this.u,this.A,this.l,this.R,pt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var W,at=this.g;if((W=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(W)){var G=W;break e}}G=null}if(h=G)Ie(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ti(this,h);else{this.o=!1,this.s=3,vt(12),le(this),sn(this);break t}}if(this.P){h=!0;let Ct;for(;!this.J&&this.C<P.length;)if(Ct=Kc(this,P),Ct==vi){pt==4&&(this.s=4,vt(14),h=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==Eo){this.s=4,vt(15),Ie(this.i,this.l,P,"[Invalid Chunk]"),h=!1;break}else Ie(this.i,this.l,Ct,null),Ti(this,Ct);if(To(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||P.length!=0||this.h.h||(this.s=1,vt(16),h=!1),this.o=this.o&&h,!h)Ie(this.i,this.l,P,"[Invalid Chunked Response]"),le(this),sn(this);else if(0<P.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),bi(dt),dt.M=!0,vt(11))}}else Ie(this.i,this.l,P,null),Ti(this,P);pt==4&&le(this),this.o&&!this.J&&(pt==4?Wo(this.j,this):(this.o=!1,Kn(this)))}else ch(this.g),h==400&&0<P.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),le(this),sn(this)}}}catch{}finally{}};function To(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Kc(s,l){var h=s.C,p=l.indexOf(`
`,h);return p==-1?vi:(h=Number(l.substring(h,p)),isNaN(h)?Eo:(p+=1,p+h>l.length?vi:(l=l.slice(p,p+h),s.C=p+h,l)))}Qt.prototype.cancel=function(){this.J=!0,le(this)};function Kn(s){s.S=Date.now()+s.I,Io(s,s.I)}function Io(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=nn(v(s.ba,s),l)}function wi(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Qt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Hc(this.i,this.A),this.L!=2&&(en(),vt(17)),le(this),this.s=2,sn(this)):Io(this,this.S-s)};function sn(s){s.j.G==0||s.J||Wo(s.j,s)}function le(s){wi(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,co(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function Ti(s,l){try{var h=s.j;if(h.G!=0&&(h.g==s||Ii(h.h,s))){if(!s.K&&Ii(h.h,s)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)nr(h),tr(h);else break t;Ci(h),vt(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=nn(v(h.Za,h),6e3));if(1>=So(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else he(h,11)}else if((s.K||h.g==s)&&nr(h),!U(l))for(R=h.Da.g.parse(l),l=0;l<R.length;l++){let G=R[l];if(h.T=G[0],G=G[1],h.G==2)if(G[0]=="c"){h.K=G[1],h.ia=G[2];const dt=G[3];dt!=null&&(h.la=dt,h.j.info("VER="+h.la));const pt=G[4];pt!=null&&(h.Aa=pt,h.j.info("SVER="+h.Aa));const Se=G[5];Se!=null&&typeof Se=="number"&&0<Se&&(p=1.5*Se,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Ct=s.g;if(Ct){const ir=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ir){var S=p.h;S.g||ir.indexOf("spdy")==-1&&ir.indexOf("quic")==-1&&ir.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ai(S,S.h),S.h=null))}if(p.D){const Pi=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Pi&&(p.ya=Pi,Y(p.I,p.D,Pi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var P=s;if(p.qa=Jo(p,p.J?p.ia:null,p.W),P.K){Co(p.h,P);var W=P,at=p.L;at&&(W.I=at),W.B&&(wi(W),Kn(W)),p.g=P}else Ko(p);0<h.i.length&&er(h)}else G[0]!="stop"&&G[0]!="close"||he(h,7);else h.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?he(h,7):Si(h):G[0]!="noop"&&h.l&&h.l.ta(G),h.v=0)}}en(4)}catch{}}var Qc=class{constructor(s,l){this.g=s,this.map=l}};function Ao(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ro(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function So(s){return s.h?1:s.g?s.g.size:0}function Ii(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function Ai(s,l){s.g?s.g.add(l):s.h=l}function Co(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}Ao.prototype.cancel=function(){if(this.i=bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function bo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const h of s.g.values())l=l.concat(h.D);return l}return N(s.i)}function Wc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(c(s)){for(var l=[],h=s.length,p=0;p<h;p++)l.push(s[p]);return l}l=[],h=0;for(p in s)l[h++]=s[p];return l}function Xc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(c(s)||typeof s=="string"){var l=[];s=s.length;for(var h=0;h<s;h++)l.push(h);return l}l=[],h=0;for(const p in s)l[h++]=p;return l}}}function Po(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(c(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var h=Xc(s),p=Wc(s),R=p.length,S=0;S<R;S++)l.call(void 0,p[S],h&&h[S],s)}var xo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yc(s,l){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var p=s[h].indexOf("="),R=null;if(0<=p){var S=s[h].substring(0,p);R=s[h].substring(p+1)}else S=s[h];l(S,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ce(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ce){this.h=s.h,Qn(this,s.j),this.o=s.o,this.g=s.g,Wn(this,s.s),this.l=s.l;var l=s.i,h=new un;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Vo(this,h),this.m=s.m}else s&&(l=String(s).match(xo))?(this.h=!1,Qn(this,l[1]||"",!0),this.o=on(l[2]||""),this.g=on(l[3]||"",!0),Wn(this,l[4]),this.l=on(l[5]||"",!0),Vo(this,l[6]||"",!0),this.m=on(l[7]||"")):(this.h=!1,this.i=new un(null,this.h))}ce.prototype.toString=function(){var s=[],l=this.j;l&&s.push(an(l,Do,!0),":");var h=this.g;return(h||l=="file")&&(s.push("//"),(l=this.o)&&s.push(an(l,Do,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(an(h,h.charAt(0)=="/"?th:Zc,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",an(h,nh)),s.join("")};function Bt(s){return new ce(s)}function Qn(s,l,h){s.j=h?on(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function Wn(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function Vo(s,l,h){l instanceof un?(s.i=l,rh(s.i,s.h)):(h||(l=an(l,eh)),s.i=new un(l,s.h))}function Y(s,l,h){s.i.set(l,h)}function Xn(s){return Y(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function on(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function an(s,l,h){return typeof s=="string"?(s=encodeURI(s).replace(l,Jc),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Jc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Do=/[#\/\?@]/g,Zc=/[#\?:]/g,th=/[#\?]/g,eh=/[#\?@]/g,nh=/#/g;function un(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function Wt(s){s.g||(s.g=new Map,s.h=0,s.i&&Yc(s.i,function(l,h){s.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=un.prototype,n.add=function(s,l){Wt(this),this.i=null,s=Ae(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(l),this.h+=1,this};function No(s,l){Wt(s),l=Ae(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function ko(s,l){return Wt(s),l=Ae(s,l),s.g.has(l)}n.forEach=function(s,l){Wt(this),this.g.forEach(function(h,p){h.forEach(function(R){s.call(l,R,p,this)},this)},this)},n.na=function(){Wt(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const R=s[p];for(let S=0;S<R.length;S++)h.push(l[p])}return h},n.V=function(s){Wt(this);let l=[];if(typeof s=="string")ko(this,s)&&(l=l.concat(this.g.get(Ae(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)l=l.concat(s[h])}return l},n.set=function(s,l){return Wt(this),this.i=null,s=Ae(this,s),ko(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function Mo(s,l,h){No(s,l),0<h.length&&(s.i=null,s.g.set(Ae(s,l),N(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const S=encodeURIComponent(String(p)),P=this.V(p);for(p=0;p<P.length;p++){var R=S;P[p]!==""&&(R+="="+encodeURIComponent(String(P[p]))),s.push(R)}}return this.i=s.join("&")};function Ae(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function rh(s,l){l&&!s.j&&(Wt(s),s.i=null,s.g.forEach(function(h,p){var R=p.toLowerCase();p!=R&&(No(this,p),Mo(this,R,h))},s)),s.j=l}function ih(s,l){const h=new rn;if(u.Image){const p=new Image;p.onload=A(Xt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=A(Xt,h,"TestLoadImage: error",!1,l,p),p.onabort=A(Xt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=A(Xt,h,"TestLoadImage: timeout",!1,l,p),u.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=s}else l(!1)}function sh(s,l){const h=new rn,p=new AbortController,R=setTimeout(()=>{p.abort(),Xt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:p.signal}).then(S=>{clearTimeout(R),S.ok?Xt(h,"TestPingServer: ok",!0,l):Xt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),Xt(h,"TestPingServer: error",!1,l)})}function Xt(s,l,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function oh(){this.g=new qc}function ah(s,l,h){const p=h||"";try{Po(s,function(R,S){let P=R;f(R)&&(P=pi(R)),l.push(p+S+"="+encodeURIComponent(P))})}catch(R){throw l.push(p+"type="+encodeURIComponent("_badmap")),R}}function Yn(s){this.l=s.Ub||null,this.j=s.eb||!1}b(Yn,gi),Yn.prototype.g=function(){return new Jn(this.l,this.j)},Yn.prototype.i=function(s){return function(){return s}}({});function Jn(s,l){ft.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Jn,ft),n=Jn.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,cn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ln(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Oo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Oo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?ln(this):cn(this),this.readyState==3&&Oo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,ln(this))},n.Qa=function(s){this.g&&(this.response=s,ln(this))},n.ga=function(){this.g&&ln(this)};function ln(s){s.readyState=4,s.l=null,s.j=null,s.v=null,cn(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=l.next();return s.join(`\r
`)};function cn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Lo(s){let l="";return X(s,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Ri(s,l,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Lo(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):Y(s,l,h))}function Z(s){ft.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Z,ft);var uh=/^https?$/i,lh=["POST","PUT"];n=Z.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yi.g(),this.v=this.o?ho(this.o):ho(yi),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(S){Fo(this,S);return}if(s=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),R=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(lh,l,void 0))||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,P]of h)this.g.setRequestHeader(S,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$o(this),this.u=!0,this.g.send(s),this.u=!1}catch(S){Fo(this,S)}};function Fo(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Uo(s),Zn(s)}function Uo(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,yt(this,"complete"),yt(this,"abort"),Zn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zn(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Bo(this):this.bb())},n.bb=function(){Bo(this)};function Bo(s){if(s.h&&typeof a<"u"&&(!s.v[1]||$t(s)!=4||s.Z()!=2)){if(s.u&&$t(s)==4)ao(s.Ea,0,s);else if(yt(s,"readystatechange"),$t(s)==4){s.h=!1;try{const P=s.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var p;if(p=P===0){var R=String(s.D).match(xo)[1]||null;!R&&u.self&&u.self.location&&(R=u.self.location.protocol.slice(0,-1)),p=!uh.test(R?R.toLowerCase():"")}h=p}if(h)yt(s,"complete"),yt(s,"success");else{s.m=6;try{var S=2<$t(s)?s.g.statusText:""}catch{S=""}s.l=S+" ["+s.Z()+"]",Uo(s)}}finally{Zn(s)}}}}function Zn(s,l){if(s.g){$o(s);const h=s.g,p=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||yt(s,"ready");try{h.onreadystatechange=p}catch{}}}function $o(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function $t(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),$c(l)}};function qo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function ch(s){const l={};s=(s.g&&2<=$t(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<s.length;p++){if(U(s[p]))continue;var h=E(s[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[R]||[];l[R]=S,S.push(h)}T(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hn(s,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||l}function zo(s){this.Aa=0,this.i=[],this.j=new rn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hn("baseRetryDelayMs",5e3,s),this.cb=hn("retryDelaySeedMs",1e4,s),this.Wa=hn("forwardChannelMaxRetries",2,s),this.wa=hn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ao(s&&s.concurrentRequestLimit),this.Da=new oh,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=zo.prototype,n.la=8,n.G=1,n.connect=function(s,l,h,p){vt(0),this.W=s,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Jo(this,null,this.W),er(this)};function Si(s){if(jo(s),s.G==3){var l=s.U++,h=Bt(s.I);if(Y(h,"SID",s.K),Y(h,"RID",l),Y(h,"TYPE","terminate"),fn(s,h),l=new Qt(s,s.j,l),l.L=2,l.v=Xn(Bt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=l.v,h=!0),h||(l.g=Zo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Kn(l)}Yo(s)}function tr(s){s.g&&(bi(s),s.g.cancel(),s.g=null)}function jo(s){tr(s),s.u&&(u.clearTimeout(s.u),s.u=null),nr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function er(s){if(!Ro(s.h)&&!s.s){s.s=!0;var l=s.Ga;Vt||no(),Dt||(Vt(),Dt=!0),At.add(l,s),s.B=0}}function hh(s,l){return So(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=nn(v(s.Ga,s,l),Xo(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const R=new Qt(this,this.j,s);let S=this.o;if(this.S&&(S?(S=m(S),w(S,this.S)):S=this.S),this.m!==null||this.O||(R.H=S,S=null),this.P)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=Go(this,R,l),h=Bt(this.I),Y(h,"RID",s),Y(h,"CVER",22),this.D&&Y(h,"X-HTTP-Session-Id",this.D),fn(this,h),S&&(this.O?l="headers="+encodeURIComponent(String(Lo(S)))+"&"+l:this.m&&Ri(h,this.m,S)),Ai(this.h,R),this.Ua&&Y(h,"TYPE","init"),this.P?(Y(h,"$req",l),Y(h,"SID","null"),R.T=!0,Ei(R,h,null)):Ei(R,h,l),this.G=2}}else this.G==3&&(s?Ho(this,s):this.i.length==0||Ro(this.h)||Ho(this))};function Ho(s,l){var h;l?h=l.l:h=s.U++;const p=Bt(s.I);Y(p,"SID",s.K),Y(p,"RID",h),Y(p,"AID",s.T),fn(s,p),s.m&&s.o&&Ri(p,s.m,s.o),h=new Qt(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),l&&(s.i=l.D.concat(s.i)),l=Go(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ai(s.h,h),Ei(h,p,l)}function fn(s,l){s.H&&X(s.H,function(h,p){Y(l,p,h)}),s.l&&Po({},function(h,p){Y(l,p,h)})}function Go(s,l,h){h=Math.min(s.i.length,h);var p=s.l?v(s.l.Na,s.l,s):null;t:{var R=s.i;let S=-1;for(;;){const P=["count="+h];S==-1?0<h?(S=R[0].g,P.push("ofs="+S)):S=0:P.push("ofs="+S);let W=!0;for(let at=0;at<h;at++){let G=R[at].g;const dt=R[at].map;if(G-=S,0>G)S=Math.max(0,R[at].g-100),W=!1;else try{ah(dt,P,"req"+G+"_")}catch{p&&p(dt)}}if(W){p=P.join("&");break t}}}return s=s.i.splice(0,h),l.D=s,p}function Ko(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;Vt||no(),Dt||(Vt(),Dt=!0),At.add(l,s),s.v=0}}function Ci(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=nn(v(s.Fa,s),Xo(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Qo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=nn(v(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),tr(this),Qo(this))};function bi(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Qo(s){s.g=new Qt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=Bt(s.qa);Y(l,"RID","rpc"),Y(l,"SID",s.K),Y(l,"AID",s.T),Y(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&Y(l,"TO",s.ja),Y(l,"TYPE","xmlhttp"),fn(s,l),s.m&&s.o&&Ri(l,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=Xn(Bt(l)),h.m=null,h.P=!0,wo(h,s)}n.Za=function(){this.C!=null&&(this.C=null,tr(this),Ci(this),vt(19))};function nr(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Wo(s,l){var h=null;if(s.g==l){nr(s),bi(s),s.g=null;var p=2}else if(Ii(s.h,l))h=l.D,Co(s.h,l),p=1;else return;if(s.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var R=s.B;p=jn(),yt(p,new _o(p,h)),er(s)}else Ko(s);else if(R=l.s,R==3||R==0&&0<l.X||!(p==1&&hh(s,l)||p==2&&Ci(s)))switch(h&&0<h.length&&(l=s.h,l.i=l.i.concat(h)),R){case 1:he(s,5);break;case 4:he(s,10);break;case 3:he(s,6);break;default:he(s,2)}}}function Xo(s,l){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*l}function he(s,l){if(s.j.info("Error code "+l),l==2){var h=v(s.fb,s),p=s.Xa;const R=!p;p=new ce(p||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Qn(p,"https"),Xn(p),R?ih(p.toString(),h):sh(p.toString(),h)}else vt(2);s.G=0,s.l&&s.l.sa(l),Yo(s),jo(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Yo(s){if(s.G=0,s.ka=[],s.l){const l=bo(s.h);(l.length!=0||s.i.length!=0)&&(V(s.ka,l),V(s.ka,s.i),s.h.i.length=0,N(s.i),s.i.length=0),s.l.ra()}}function Jo(s,l,h){var p=h instanceof ce?Bt(h):new ce(h);if(p.g!="")l&&(p.g=l+"."+p.g),Wn(p,p.s);else{var R=u.location;p=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var S=new ce(null);p&&Qn(S,p),l&&(S.g=l),R&&Wn(S,R),h&&(S.l=h),p=S}return h=s.D,l=s.ya,h&&l&&Y(p,h,l),Y(p,"VER",s.la),fn(s,p),p}function Zo(s,l,h){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new Z(new Yn({eb:h})):new Z(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ta(){}n=ta.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function rr(){}rr.prototype.g=function(s,l){return new Rt(s,l)};function Rt(s,l){ft.call(this),this.g=new zo(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!U(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!U(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new Re(this)}b(Rt,ft),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Si(this.g)},Rt.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=pi(s),s=h);l.i.push(new Qc(l.Ya++,s)),l.G==3&&er(l)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Si(this.g),delete this.g,Rt.aa.N.call(this)};function ea(s){mi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){t:{for(const h in l){s=h;break t}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}b(ea,mi);function na(){_i.call(this),this.status=1}b(na,_i);function Re(s){this.g=s}b(Re,ta),Re.prototype.ua=function(){yt(this.g,"a")},Re.prototype.ta=function(s){yt(this.g,new ea(s))},Re.prototype.sa=function(s){yt(this.g,new na)},Re.prototype.ra=function(){yt(this.g,"b")},rr.prototype.createWebChannel=rr.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Wu=function(){return new rr},Qu=function(){return jn()},Ku=ue,Qi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hn.NO_ERROR=0,Hn.TIMEOUT=8,Hn.HTTP_ERROR=6,gr=Hn,yo.COMPLETE="complete",Gu=yo,fo.EventType=tn,tn.OPEN="a",tn.CLOSE="b",tn.ERROR="c",tn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,pn=fo,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Hu=Z}).apply(typeof sr<"u"?sr:typeof self<"u"?self:typeof window<"u"?window:{});const pa="@firebase/firestore",ga="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Fu("@firebase/firestore");function Ce(){return ye.logLevel}function D(n,...t){if(ye.logLevel<=q.DEBUG){const e=t.map(Ss);ye.debug(`Firestore (${Qe}): ${n}`,...e)}}function jt(n,...t){if(ye.logLevel<=q.ERROR){const e=t.map(Ss);ye.error(`Firestore (${Qe}): ${n}`,...e)}}function Le(n,...t){if(ye.logLevel<=q.WARN){const e=t.map(Ss);ye.warn(`Firestore (${Qe}): ${n}`,...e)}}function Ss(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Xu(n,r,e)}function Xu(n,t,e){let r=`FIRESTORE (${Qe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw jt(r),new Error(r)}function J(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Xu(t,i,r)}function z(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Ke{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class Xf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Yf{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){J(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let o=new ge;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ge,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=o;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ge)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new Yu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string",2055,{h:t}),new mt(t)}}class Jf{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Zf{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Jf(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ma{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class td{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Df(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){J(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ma(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(J(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ma(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=ed(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Wi(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),i=t.codePointAt(e);if(r!==i){if(r<128&&i<128)return B(r,i);{const o=Ju(),a=rd(o.encode(_a(n,e)),o.encode(_a(t,e)));return a!==0?a:B(r,i)}}e+=r>65535?2:1}return B(n.length,t.length)}function _a(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function rd(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return B(n[e],t[e]);return B(n.length,t.length)}function Fe(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=-62135596800,va=1e6;class It{static now(){return It.fromMillis(Date.now())}static fromDate(t){return It.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*va);return new It(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ya)throw new k(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/va}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-ya;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static fromTimestamp(t){return new O(t)}static min(){return new O(new It(0,0))}static max(){return new O(new It(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="__name__";class Nt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Nt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Nt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Nt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=Nt.isNumericId(t),i=Nt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Nt.extractNumericId(t).compare(Nt.extractNumericId(e)):Wi(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ee.fromString(t.substring(4,t.length-2))}}class tt extends Nt{construct(t,e,r){return new tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const id=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Nt{construct(t,e,r){return new Et(t,e,r)}static isValidIdentifier(t){return id.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ea}static keyField(){return new Et([Ea])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new k(x.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new k(x.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new k(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new k(x.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Et(e)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(tt.fromString(t))}static fromName(t){return new M(tt.fromString(t).popFirst(5))}static empty(){return new M(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new tt(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=-1;function sd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=O.fromTimestamp(r===1e9?new It(e+1,0):new It(e,r));return new ne(i,M.empty(),t)}function od(n){return new ne(n.readTime,n.key,Cn)}class ne{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ne(O.min(),M.empty(),Cn)}static max(){return new ne(O.max(),M.empty(),Cn)}}function ad(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ld{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==ud)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let i=0,o=0,a=!1;t.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&e()},c=>r(c))}),a=!0,o===i&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(i=>i?C.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,i)=>{const o=t.length,a=new Array(o);let u=0;for(let c=0;c<o;c++){const f=c;e(t[f]).next(d=>{a[f]=d,++u,u===o&&r(a)},d=>i(d))}})}static doWhile(t,e){return new C((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function cd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function We(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Kr.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=-1;function Qr(n){return n==null}function Xi(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="";function fd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=wa(t)),t=dd(n.get(e),t);return wa(t)}function dd(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Zu:e+="";break;default:e+=o}}return e}function wa(n){return n+Zu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function kn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function pd(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new or(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new or(this.root,t,this.comparator,!1)}getReverseIterator(){return new or(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new or(this.root,t,this.comparator,!0)}}class or{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ut(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ia(this.data.getIterator())}getIteratorFrom(t){return new Ia(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class Ia{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.fields=t,t.sort(Et.comparator)}static empty(){return new Yt([])}unionWith(t){let e=new st(Et.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Yt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new tl("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const gd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function re(n){if(J(!!n,39018),typeof n=="string"){let t=0;const e=gd.exec(n);if(J(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ie(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="server_timestamp",nl="__type__",rl="__previous_value__",il="__local_write_time__";function Cs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[nl])===null||e===void 0?void 0:e.stringValue)===el}function Wr(n){const t=n.mapValue.fields[rl];return Cs(t)?Wr(t):t}function bn(n){const t=re(n.mapValue.fields[il].timestampValue);return new It(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t,e,r,i,o,a,u,c,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=f}}const br="(default)";class Pn{constructor(t,e){this.projectId=t,this.database=e||br}static empty(){return new Pn("","")}get isDefaultDatabase(){return this.database===br}isEqual(t){return t instanceof Pn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="__type__",yd="__max__",ar={mapValue:{}},vd="__vector__",Yi="value";function se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Cs(n)?4:wd(n)?9007199254740991:Ed(n)?10:11:L(28295,{value:n})}function Lt(n,t){if(n===t)return!0;const e=se(n);if(e!==se(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return bn(n).isEqual(bn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=re(i.timestampValue),u=re(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return ie(i.bytesValue).isEqual(ie(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return et(i.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return et(i.integerValue)===et(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=et(i.doubleValue),u=et(o.doubleValue);return a===u?Xi(a)===Xi(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Fe(n.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Ta(a)!==Ta(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!Lt(a[c],u[c])))return!1;return!0}(n,t);default:return L(52216,{left:n})}}function xn(n,t){return(n.values||[]).find(e=>Lt(e,t))!==void 0}function Ue(n,t){if(n===t)return 0;const e=se(n),r=se(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=et(o.integerValue||o.doubleValue),c=et(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(n,t);case 3:return Aa(n.timestampValue,t.timestampValue);case 4:return Aa(bn(n),bn(t));case 5:return Wi(n.stringValue,t.stringValue);case 6:return function(o,a){const u=ie(o),c=ie(a);return u.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),c=a.split("/");for(let f=0;f<u.length&&f<c.length;f++){const d=B(u[f],c[f]);if(d!==0)return d}return B(u.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=B(et(o.latitude),et(a.latitude));return u!==0?u:B(et(o.longitude),et(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ra(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,c,f,d;const g=o.fields||{},v=a.fields||{},A=(u=g[Yi])===null||u===void 0?void 0:u.arrayValue,b=(c=v[Yi])===null||c===void 0?void 0:c.arrayValue,N=B(((f=A==null?void 0:A.values)===null||f===void 0?void 0:f.length)||0,((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:Ra(A,b)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===ar.mapValue&&a===ar.mapValue)return 0;if(o===ar.mapValue)return 1;if(a===ar.mapValue)return-1;const u=o.fields||{},c=Object.keys(u),f=a.fields||{},d=Object.keys(f);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const v=Wi(c[g],d[g]);if(v!==0)return v;const A=Ue(u[c[g]],f[d[g]]);if(A!==0)return A}return B(c.length,d.length)}(n.mapValue,t.mapValue);default:throw L(23264,{Pe:e})}}function Aa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=re(n),r=re(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function Ra(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ue(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function Be(n){return Ji(n)}function Ji(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=re(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ie(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Ji(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ji(e.fields[a])}`;return i+"}"}(n.mapValue):L(61005,{value:n})}function mr(n){switch(se(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Wr(n);return t?16+mr(t):16;case 5:return 2*n.stringValue.length;case 6:return ie(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+mr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return kn(r.fields,(o,a)=>{i+=o.length+mr(a)}),i}(n.mapValue);default:throw L(13486,{value:n})}}function Zi(n){return!!n&&"integerValue"in n}function bs(n){return!!n&&"arrayValue"in n}function Sa(n){return!!n&&"nullValue"in n}function Ca(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ki(n){return!!n&&"mapValue"in n}function Ed(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[_d])===null||e===void 0?void 0:e.stringValue)===vd}function wn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return kn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=wn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=wn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function wd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===yd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this.value=t}static empty(){return new kt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ki(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=wn(e)}setAll(t){let e=Et.emptyPath(),r={},i=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const c=this.getFieldsMap(e);this.applyChanges(c,r,i),r={},i=[],e=u.popLast()}a?r[u.lastSegment()]=wn(a):i.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());ki(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];ki(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){kn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new kt(wn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,r,i,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new _t(t,0,O.min(),O.min(),O.min(),kt.empty(),0)}static newFoundDocument(t,e,r,i){return new _t(t,1,e,O.min(),r,i,0)}static newNoDocument(t,e){return new _t(t,2,e,O.min(),O.min(),kt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,O.min(),O.min(),kt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e){this.position=t,this.inclusive=e}}function ba(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=Ue(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Lt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Td(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{}class it extends sl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ad(t,e,r):e==="array-contains"?new Cd(t,r):e==="in"?new bd(t,r):e==="not-in"?new Pd(t,r):e==="array-contains-any"?new xd(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Rd(t,r):new Sd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ue(e,this.value)):e!==null&&se(this.value)===se(e)&&this.matchesComparison(Ue(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends sl{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Ft(t,e)}matches(t){return ol(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function ol(n){return n.op==="and"}function al(n){return Id(n)&&ol(n)}function Id(n){for(const t of n.filters)if(t instanceof Ft)return!1;return!0}function ts(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+Be(n.value);if(al(n))return n.filters.map(t=>ts(t)).join(",");{const t=n.filters.map(e=>ts(e)).join(",");return`${n.op}(${t})`}}function ul(n,t){return n instanceof it?function(r,i){return i instanceof it&&r.op===i.op&&r.field.isEqual(i.field)&&Lt(r.value,i.value)}(n,t):n instanceof Ft?function(r,i){return i instanceof Ft&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&ul(a,i.filters[u]),!0):!1}(n,t):void L(19439)}function ll(n){return n instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${Be(e.value)}`}(n):n instanceof Ft?function(e){return e.op.toString()+" {"+e.getFilters().map(ll).join(" ,")+"}"}(n):"Filter"}class Ad extends it{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Rd extends it{constructor(t,e){super(t,"in",e),this.keys=cl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Sd extends it{constructor(t,e){super(t,"not-in",e),this.keys=cl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function cl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Cd extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return bs(e)&&xn(e.arrayValue,this.value)}}class bd extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&xn(this.value.arrayValue,e)}}class Pd extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(xn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!xn(this.value.arrayValue,e)}}class xd extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!bs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>xn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,e=null,r=[],i=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.Ie=null}}function xa(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Vd(n,t,e,r,i,o,a)}function Ps(n){const t=z(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ts(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Qr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Be(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Be(r)).join(",")),t.Ie=e}return t.Ie}function xs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Td(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ul(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Pa(n.startAt,t.startAt)&&Pa(n.endAt,t.endAt)}function es(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,e=null,r=[],i=[],o=null,a="F",u=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Dd(n,t,e,r,i,o,a,u){return new Xr(n,t,e,r,i,o,a,u)}function hl(n){return new Xr(n)}function Va(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Nd(n){return n.collectionGroup!==null}function Tn(n){const t=z(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new st(Et.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new xr(o,r))}),e.has(Et.keyField().canonicalString())||t.Ee.push(new xr(Et.keyField(),r))}return t.Ee}function Mt(n){const t=z(n);return t.de||(t.de=kd(t,Tn(n))),t.de}function kd(n,t){if(n.limitType==="F")return xa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new xr(i.field,o)});const e=n.endAt?new Pr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Pr(n.startAt.position,n.startAt.inclusive):null;return xa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ns(n,t,e){return new Xr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Yr(n,t){return xs(Mt(n),Mt(t))&&n.limitType===t.limitType}function fl(n){return`${Ps(Mt(n))}|lt:${n.limitType}`}function be(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>ll(i)).join(", ")}]`),Qr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Be(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Be(i)).join(",")),`Target(${r})`}(Mt(n))}; limitType=${n.limitType})`}function Jr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Tn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,u,c){const f=ba(a,u,c);return a.inclusive?f<=0:f<0}(r.startAt,Tn(r),i)||r.endAt&&!function(a,u,c){const f=ba(a,u,c);return a.inclusive?f>=0:f>0}(r.endAt,Tn(r),i))}(n,t)}function Md(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function dl(n){return(t,e)=>{let r=!1;for(const i of Tn(n)){const o=Od(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Od(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,u){const c=a.data.field(o),f=u.data.field(o);return c!==null&&f!==null?Ue(c,f):L(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){kn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return pd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=new nt(M.comparator);function oe(){return Ld}const pl=new nt(M.comparator);function gn(...n){let t=pl;for(const e of n)t=t.insert(e.key,e);return t}function Fd(n){let t=pl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function de(){return In()}function gl(){return In()}function In(){return new we(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ud=new st(M.comparator);function H(...n){let t=Ud;for(const e of n)t=t.add(e);return t}const Bd=new st(B);function $d(){return Bd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xi(t)?"-0":t}}function zd(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this._=void 0}}function jd(n,t,e){return n instanceof rs?function(i,o){const a={fields:{[nl]:{stringValue:el},[il]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Cs(o)&&(o=Wr(o)),o&&(a.fields[rl]=o),{mapValue:a}}(e,t):n instanceof Vr?ml(n,t):n instanceof Dr?_l(n,t):function(i,o){const a=Gd(i,o),u=Da(a)+Da(i.Re);return Zi(a)&&Zi(i.Re)?zd(u):qd(i.serializer,u)}(n,t)}function Hd(n,t,e){return n instanceof Vr?ml(n,t):n instanceof Dr?_l(n,t):e}function Gd(n,t){return n instanceof is?function(r){return Zi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class rs extends Zr{}class Vr extends Zr{constructor(t){super(),this.elements=t}}function ml(n,t){const e=yl(t);for(const r of n.elements)e.some(i=>Lt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Dr extends Zr{constructor(t){super(),this.elements=t}}function _l(n,t){let e=yl(t);for(const r of n.elements)e=e.filter(i=>!Lt(i,r));return{arrayValue:{values:e}}}class is extends Zr{constructor(t,e){super(),this.serializer=t,this.Re=e}}function Da(n){return et(n.integerValue||n.doubleValue)}function yl(n){return bs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Kd(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Vr&&i instanceof Vr||r instanceof Dr&&i instanceof Dr?Fe(r.elements,i.elements,Lt):r instanceof is&&i instanceof is?Lt(r.Re,i.Re):r instanceof rs&&i instanceof rs}(n.transform,t.transform)}class me{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new me}static exists(t){return new me(void 0,t)}static updateTime(t){return new me(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _r(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Vs{}function vl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Wd(n.key,me.none()):new Ds(n.key,n.data,me.none());{const e=n.data,r=kt.empty();let i=new st(Et.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new ti(n.key,r,new Yt(i.toArray()),me.none())}}function Qd(n,t,e){n instanceof Ds?function(i,o,a){const u=i.value.clone(),c=ka(i.fieldTransforms,o,a.transformResults);u.setAll(c),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof ti?function(i,o,a){if(!_r(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=ka(i.fieldTransforms,o,a.transformResults),c=o.data;c.setAll(El(i)),c.setAll(u),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function An(n,t,e,r){return n instanceof Ds?function(o,a,u,c){if(!_r(o.precondition,a))return u;const f=o.value.clone(),d=Ma(o.fieldTransforms,c,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ti?function(o,a,u,c){if(!_r(o.precondition,a))return u;const f=Ma(o.fieldTransforms,c,a),d=a.data;return d.setAll(El(o)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(g=>g.field))}(n,t,e,r):function(o,a,u){return _r(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Na(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fe(r,i,(o,a)=>Kd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ds extends Vs{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ti extends Vs{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function El(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ka(n,t,e){const r=new Map;J(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,u=t.data.field(o.field);r.set(o.field,Hd(a,u,e[i]))}return r}function Ma(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,jd(o,a,t))}return r}class Wd extends Vs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Qd(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=An(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=An(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=gl();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(i.key)?null:u;const c=vl(a,u);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),H())}isEqual(t){return this.batchId===t.batchId&&Fe(this.mutations,t.mutations,(e,r)=>Na(e,r))&&Fe(this.baseMutations,t.baseMutations,(e,r)=>Na(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,$;function wl(n){if(n===void 0)return jt("GRPC error has no .code"),x.UNKNOWN;switch(n){case rt.OK:return x.OK;case rt.CANCELLED:return x.CANCELLED;case rt.UNKNOWN:return x.UNKNOWN;case rt.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case rt.INTERNAL:return x.INTERNAL;case rt.UNAVAILABLE:return x.UNAVAILABLE;case rt.UNAUTHENTICATED:return x.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case rt.NOT_FOUND:return x.NOT_FOUND;case rt.ALREADY_EXISTS:return x.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return x.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case rt.ABORTED:return x.ABORTED;case rt.OUT_OF_RANGE:return x.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return x.UNIMPLEMENTED;case rt.DATA_LOSS:return x.DATA_LOSS;default:return L(39323,{code:n})}}($=rt||(rt={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=new ee([4294967295,4294967295],0);function Oa(n){const t=Ju().encode(n),e=new ju;return e.update(t),new Uint8Array(e.digest())}function La(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ee([e,r],0),new ee([i,o],0)]}class Ns{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new mn(`Invalid padding: ${e}`);if(r<0)throw new mn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new mn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new mn(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=ee.fromNumber(this.pe)}we(t,e,r){let i=t.add(e.multiply(ee.fromNumber(r)));return i.compare(Zd)===1&&(i=new ee([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=Oa(t),[r,i]=La(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);if(!this.be(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ns(o,i,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.pe===0)return;const e=Oa(t),[r,i]=La(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class mn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Mn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ei(O.min(),i,new nt(B),oe(),H())}}class Mn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Mn(r,e,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,r,i){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=i}}class Tl{constructor(t,e){this.targetId=t,this.Ce=e}}class Il{constructor(t,e,r=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Fa{constructor(){this.Fe=0,this.Me=Ua(),this.xe=lt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=H(),e=H(),r=H();return this.Me.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:L(38017,{changeType:o})}}),new Mn(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=Ua()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,J(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class tp{constructor(t){this.ze=t,this.je=new Map,this.He=oe(),this.Je=ur(),this.Ye=ur(),this.Ze=new nt(B)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:L(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,i)=>{this.it(i)&&e(i)})}ot(t){const e=t.targetId,r=t.Ce.count,i=this._t(e);if(i){const o=i.target;if(es(o))if(r===0){const a=new M(o.path);this.tt(e,a,_t.newNoDocument(a,O.min()))}else J(r===1,20013,{expectedCount:r});else{const a=this.ut(e);if(a!==r){const u=this.ct(t),c=u?this.lt(u,t,a):1;if(c!==0){this.st(e);const f=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,u;try{a=ie(r).toUint8Array()}catch(c){if(c instanceof tl)return Le("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new Ns(a,i,o)}catch(c){return Le(c instanceof mn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.pe===0?null:u}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.ze.Pt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.tt(e,o,null),i++)}),i}It(t){const e=new Map;this.je.forEach((o,a)=>{const u=this._t(a);if(u){if(o.current&&es(u.target)){const c=new M(u.target.path);this.Et(c).has(a)||this.dt(a,c)||this.tt(a,c,_t.newNoDocument(c,t))}o.Le&&(e.set(a,o.qe()),o.Qe())}});let r=H();this.Ye.forEach((o,a)=>{let u=!0;a.forEachWhile(c=>{const f=this._t(c);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(t));const i=new ei(t,e,this.Ze,this.He,r);return this.He=oe(),this.Je=ur(),this.Ye=ur(),this.Ze=new nt(B),i}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const i=this.rt(t);this.dt(t,e)?i.$e(e,1):i.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Fa,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new st(B),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new st(B),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Fa),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function ur(){return new nt(M.comparator)}function Ua(){return new nt(M.comparator)}const ep={asc:"ASCENDING",desc:"DESCENDING"},np={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rp={and:"AND",or:"OR"};class ip{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ss(n,t){return n.useProto3Json||Qr(t)?t:{value:t}}function sp(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function op(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ne(n){return J(!!n,49232),O.fromTimestamp(function(e){const r=re(e);return new It(r.seconds,r.nanos)}(n))}function ap(n,t){return os(n,t).canonicalString()}function os(n,t){const e=function(i){return new tt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Al(n){const t=tt.fromString(n);return J(Pl(t),10190,{key:t.toString()}),t}function Mi(n,t){const e=Al(t);if(e.get(1)!==n.databaseId.projectId)throw new k(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Sl(e))}function Rl(n,t){return ap(n.databaseId,t)}function up(n){const t=Al(n);return t.length===4?tt.emptyPath():Sl(t)}function Ba(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Sl(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function lp(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,d){return f.useProto3Json?(J(d===void 0||typeof d=="string",58123),lt.fromBase64String(d||"")):(J(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),lt.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(f){const d=f.code===void 0?x.UNKNOWN:wl(f.code);return new k(d,f.message||"")}(a);e=new Il(r,i,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Mi(n,r.document.name),o=Ne(r.document.updateTime),a=r.document.createTime?Ne(r.document.createTime):O.min(),u=new kt({mapValue:{fields:r.document.fields}}),c=_t.newFoundDocument(i,o,a,u),f=r.targetIds||[],d=r.removedTargetIds||[];e=new yr(f,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Mi(n,r.document),o=r.readTime?Ne(r.readTime):O.min(),a=_t.newNoDocument(i,o),u=r.removedTargetIds||[];e=new yr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Mi(n,r.document),o=r.removedTargetIds||[];e=new yr([],o,i,null)}else{if(!("filter"in t))return L(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Jd(i,o),u=r.targetId;e=new Tl(u,a)}}return e}function cp(n,t){return{documents:[Rl(n,t.path)]}}function hp(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Rl(n,i);const o=function(f){if(f.length!==0)return bl(Ft.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(d=>function(v){return{field:Pe(v.field),direction:pp(v.dir)}}(d))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=ss(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{gt:e,parent:i}}function fp(n){let t=up(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){J(r===1,65062);const d=e.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let o=[];e.where&&(o=function(g){const v=Cl(g);return v instanceof Ft&&al(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(v=>function(b){return new xr(xe(b.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(v))}(e.orderBy));let u=null;e.limit&&(u=function(g){let v;return v=typeof g=="object"?g.value:g,Qr(v)?null:v}(e.limit));let c=null;e.startAt&&(c=function(g){const v=!!g.before,A=g.values||[];return new Pr(A,v)}(e.startAt));let f=null;return e.endAt&&(f=function(g){const v=!g.before,A=g.values||[];return new Pr(A,v)}(e.endAt)),Dd(t,i,a,o,u,"F",c,f)}function dp(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Cl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=xe(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=xe(e.unaryFilter.field);return it.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=xe(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xe(e.unaryFilter.field);return it.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}}(n):n.fieldFilter!==void 0?function(e){return it.create(xe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ft.create(e.compositeFilter.filters.map(r=>Cl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}}(e.compositeFilter.op))}(n):L(30097,{filter:n})}function pp(n){return ep[n]}function gp(n){return np[n]}function mp(n){return rp[n]}function Pe(n){return{fieldPath:n.canonicalString()}}function xe(n){return Et.fromServerFormat(n.fieldPath)}function bl(n){return n instanceof it?function(e){if(e.op==="=="){if(Ca(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NAN"}};if(Sa(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ca(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NOT_NAN"}};if(Sa(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pe(e.field),op:gp(e.op),value:e.value}}}(n):n instanceof Ft?function(e){const r=e.getFilters().map(i=>bl(i));return r.length===1?r[0]:{compositeFilter:{op:mp(e.op),filters:r}}}(n):L(54877,{filter:n})}function Pl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e,r,i,o=O.min(),a=O.min(),u=lt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(t){return new Jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t){this.wt=t}}function yp(n){const t=fp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ns(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.yn=new Ep}addToCollectionParentIndex(t,e){return this.yn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.yn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(ne.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(ne.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Ep{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new st(tt.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new st(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xl=41943040;class wt{static withCacheSize(t){return new wt(t,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(xl,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new $e(0)}static ir(){return new $e(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="LruGarbageCollector",wp=1048576;function za([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class Tp{constructor(t){this.cr=t,this.buffer=new st(za),this.lr=0}hr(){return++this.lr}Pr(t){const e=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();za(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ip{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){D(qa,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){We(e)?D(qa,"Ignoring IndexedDB error during garbage collection: ",e):await Gr(e)}await this.Ir(3e5)})}}class Ap{constructor(t,e){this.Er=t,this.params=e}calculateTargetCount(t,e){return this.Er.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return C.resolve(Kr.le);const r=new Tp(e);return this.Er.forEachTarget(t,i=>r.Pr(i.sequenceNumber)).next(()=>this.Er.Ar(t,i=>r.Pr(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Er.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Er.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve($a)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$a):this.Rr(t,e))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,e){let r,i,o,a,u,c,f;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(t,i))).next(g=>(r=g,u=Date.now(),this.removeTargets(t,r,e))).next(g=>(o=g,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(g=>(f=Date.now(),Ce()<=q.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(c-u)+`ms
	Removed ${g} documents in `+(f-c)+`ms
Total Duration: ${f-d}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:g})))}}function Rp(n,t){return new Ap(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this.changes=new we(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&An(r.mutation,i,Yt.empty(),It.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,H()).next(()=>r))}getLocalViewOfDocuments(t,e,r=H()){const i=de();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=gn();return o.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=de();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,H()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,i){let o=oe();const a=In(),u=function(){return In()}();return e.forEach((c,f)=>{const d=r.get(f.key);i.has(f.key)&&(d===void 0||d.mutation instanceof ti)?o=o.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),An(d.mutation,f,d.mutation.getFieldMask(),It.now())):a.set(f.key,Yt.empty())}),this.recalculateAndSaveOverlays(t,o).next(c=>(c.forEach((f,d)=>a.set(f,d)),e.forEach((f,d)=>{var g;return u.set(f,new Cp(d,(g=a.get(f))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(t,e){const r=In();let i=new nt((a,u)=>a-u),o=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(c=>{const f=e.get(c);if(f===null)return;let d=r.get(c)||Yt.empty();d=u.applyToLocalView(f,d),r.set(c,d);const g=(i.get(u.batchId)||H()).add(c);i=i.insert(u.batchId,g)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),f=c.key,d=c.value,g=gl();d.forEach(v=>{if(!o.has(v)){const A=vl(e.get(v),r.get(v));A!==null&&g.set(v,A),o=o.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,g))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Nd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(de());let u=Cn,c=o;return a.next(f=>C.forEach(f,(d,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),o.get(d)?C.resolve():this.remoteDocumentCache.getEntry(t,d).next(v=>{c=c.insert(d,v)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,c,f,H())).next(d=>({batchId:u,changes:Fd(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let i=gn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=gn();return this.indexManager.getCollectionParents(t,o).next(u=>C.forEach(u,c=>{const f=function(g,v){return new Xr(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,c.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(d=>{d.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((c,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,_t.newInvalidDocument(d)))});let u=gn();return a.forEach((c,f)=>{const d=o.get(c);d!==void 0&&An(d.mutation,f,Yt.empty(),It.now()),Jr(e,f)&&(u=u.insert(c,f))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,e){return C.resolve(this.Fr.get(e))}saveBundleMetadata(t,e){return this.Fr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Ne(i.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Mr.get(e))}saveNamedQuery(t,e){return this.Mr.set(e.name,function(i){return{name:i.name,query:yp(i.bundledQuery),readTime:Ne(i.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.overlays=new nt(M.comparator),this.Or=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=de();return C.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.St(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Or.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Or.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=de(),o=e.length+1,a=new M(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,f=c.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&c.largestBatchId>r&&i.set(c.getKey(),c)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new nt((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let d=o.get(f.largestBatchId);d===null&&(d=de(),o=o.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const u=de(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((f,d)=>u.set(f,d)),!(u.size()>=i)););return C.resolve(u)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Or.get(i.largestBatchId).delete(r.key);this.Or.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Yd(e,r));let o=this.Or.get(e);o===void 0&&(o=H(),this.Or.set(e,o)),this.Or.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.Nr=new st(ot.Br),this.Lr=new st(ot.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,e){const r=new ot(t,e);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Qr(new ot(t,e))}$r(t,e){t.forEach(r=>this.removeReference(r,e))}Ur(t){const e=new M(new tt([])),r=new ot(e,t),i=new ot(e,t+1),o=[];return this.Lr.forEachInRange([r,i],a=>{this.Qr(a),o.push(a.key)}),o}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const e=new M(new tt([])),r=new ot(e,t),i=new ot(e,t+1);let o=H();return this.Lr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ot(t,0),r=this.Nr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ot{constructor(t,e){this.key=t,this.Gr=e}static Br(t,e){return M.comparator(t.key,e.key)||B(t.Gr,e.Gr)}static kr(t,e){return B(t.Gr,e.Gr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Jn=1,this.zr=new st(ot.Br)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Xd(o,e,r,i);this.mutationQueue.push(a);for(const u of i)this.zr=this.zr.add(new ot(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.jr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Hr(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?hd:this.Jn-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.zr.forEachInRange([r,i],a=>{const u=this.jr(a.Gr);o.push(u)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new st(B);return e.forEach(i=>{const o=new ot(i,0),a=new ot(i,Number.POSITIVE_INFINITY);this.zr.forEachInRange([o,a],u=>{r=r.add(u.Gr)})}),C.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new ot(new M(o),0);let u=new st(B);return this.zr.forEachWhile(c=>{const f=c.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(u=u.add(c.Gr)),!0)},a),C.resolve(this.Jr(u))}Jr(t){const e=[];return t.forEach(r=>{const i=this.jr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){J(this.Yr(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return C.forEach(e.mutations,i=>{const o=new ot(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.zr=r})}Xn(t){}containsKey(t,e){const r=new ot(e,0),i=this.zr.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Yr(t,e){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const e=this.Hr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(t){this.Zr=t,this.docs=function(){return new nt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.Zr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=oe();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=oe();const a=e.path,u=new M(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:f,value:{document:d}}=c.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||ad(od(d),r)<=0||(i.has(d.key)||Jr(e,d))&&(o=o.insert(d.key,d.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L(9500)}Xr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new kp(this)}getSize(t){return C.resolve(this.size)}}class kp extends Sp{constructor(t){super(),this.vr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.vr.addEntry(t,i)):this.vr.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.vr.getEntry(t,e)}getAllFromCache(t,e){return this.vr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(t){this.persistence=t,this.ei=new we(e=>Ps(e),xs),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.ti=0,this.ni=new ks,this.targetCount=0,this.ri=$e.rr()}forEachTarget(t,e){return this.ei.forEach((r,i)=>e(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ti&&(this.ti=e),C.resolve()}ar(t){this.ei.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ri=new $e(e),this.highestTargetId=e),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,e){return this.ar(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.ar(e),C.resolve()}removeTargetData(t,e){return this.ei.delete(e.target),this.ni.Ur(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.ei.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.ei.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.ei.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.ni.qr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.ni.$r(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ni.Ur(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ni.Wr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.ni.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t,e){this.ii={},this.overlays={},this.si=new Kr(0),this.oi=!1,this.oi=!0,this._i=new Vp,this.referenceDelegate=t(this),this.ai=new Mp(this),this.indexManager=new vp,this.remoteDocumentCache=function(i){return new Np(i)}(r=>this.referenceDelegate.ui(r)),this.serializer=new _p(e),this.ci=new Pp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new xp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ii[t.toKey()];return r||(r=new Dp(e,this.referenceDelegate),this.ii[t.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new Op(this.si.next());return this.referenceDelegate.li(),r(i).next(o=>this.referenceDelegate.hi(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Pi(t,e){return C.or(Object.values(this.ii).map(r=>()=>r.containsKey(t,e)))}}class Op extends ld{constructor(t){super(),this.currentSequenceNumber=t}}class Ms{constructor(t){this.persistence=t,this.Ti=new ks,this.Ii=null}static Ei(t){return new Ms(t)}get di(){if(this.Ii)return this.Ii;throw L(60996)}addReference(t,e,r){return this.Ti.addReference(r,e),this.di.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Ti.removeReference(r,e),this.di.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ti.Ur(e.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}li(){this.Ii=new Set}hi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,r=>{const i=M.fromPath(r);return this.Ai(t,i).next(o=>{o||e.removeEntry(i,O.min())})}).next(()=>(this.Ii=null,e.apply(t)))}updateLimboDocument(t,e){return this.Ai(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}ui(t){return 0}Ai(t,e){return C.or([()=>C.resolve(this.Ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Pi(t,e)])}}class Nr{constructor(t,e){this.persistence=t,this.Ri=new we(r=>fd(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Rp(this,e)}static Ei(t,e){return new Nr(t,e)}li(){}hi(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Vr(t){let e=0;return this.Ar(t,r=>{e++}).next(()=>e)}Ar(t,e){return C.forEach(this.Ri,(r,i)=>this.gr(t,r,i).next(o=>o?C.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Xr(t,a=>this.gr(t,a,e).next(u=>{u||(r++,o.removeEntry(a,O.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.Ri.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.Ri.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.Ri.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.Ri.set(e,t.currentSequenceNumber),C.resolve()}ui(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=mr(t.data.value)),e}gr(t,e,r){return C.or([()=>this.persistence.Pi(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.Ri.get(e);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.ls=r,this.hs=i}static Ps(t,e){let r=H(),i=H();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Os(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return Ch()?8:cd(Rh())>0?6:4}()}initialize(t,e){this.As=t,this.indexManager=e,this.Ts=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Vs(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Lp;return this.fs(t,e,a).next(u=>{if(o.result=u,this.Is)return this.gs(t,e,a,u.size)})}).next(()=>o.result)}gs(t,e,r,i){return r.documentReadCount<this.Es?(Ce()<=q.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",be(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),C.resolve()):(Ce()<=q.DEBUG&&D("QueryEngine","Query:",be(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Ce()<=q.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",be(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):C.resolve())}Rs(t,e){if(Va(e))return C.resolve(null);let r=Mt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ns(e,null,"F"),r=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=H(...o);return this.As.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(c=>{const f=this.ps(e,u);return this.ys(e,f,a,c.readTime)?this.Rs(t,ns(e,null,"F")):this.ws(t,f,e,c)}))})))}Vs(t,e,r,i){return Va(e)||i.isEqual(O.min())?C.resolve(null):this.As.getDocuments(t,r).next(o=>{const a=this.ps(e,o);return this.ys(e,a,r,i)?C.resolve(null):(Ce()<=q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),be(e)),this.ws(t,a,e,sd(i,Cn)).next(u=>u))})}ps(t,e){let r=new st(dl(t));return e.forEach((i,o)=>{Jr(t,o)&&(r=r.add(o))}),r}ys(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}fs(t,e,r){return Ce()<=q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",be(e)),this.As.getDocumentsMatchingQuery(t,e,ne.min(),r)}ws(t,e,r,i){return this.As.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="LocalStore",Up=3e8;class Bp{constructor(t,e,r,i){this.persistence=t,this.bs=e,this.serializer=i,this.Ss=new nt(B),this.Ds=new we(o=>Ps(o),xs),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(r)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new bp(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ss))}}function $p(n,t,e,r){return new Bp(n,t,e,r)}async function Dl(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Fs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let c=H();for(const f of i){a.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}for(const f of o){u.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(r,c).next(f=>({Ms:f,removedBatchIds:a,addedBatchIds:u}))})})}function Nl(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ai.getLastRemoteSnapshotVersion(e))}function qp(n,t){const e=z(n),r=t.snapshotVersion;let i=e.Ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Cs.newChangeBuffer({trackRemovals:!0});i=e.Ss;const u=[];t.targetChanges.forEach((d,g)=>{const v=i.get(g);if(!v)return;u.push(e.ai.removeMatchingKeys(o,d.removedDocuments,g).next(()=>e.ai.addMatchingKeys(o,d.addedDocuments,g)));let A=v.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(g)!==null?A=A.withResumeToken(lt.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):d.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(d.resumeToken,r)),i=i.insert(g,A),function(N,V,j){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Up?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(v,A,d)&&u.push(e.ai.updateTargetData(o,A))});let c=oe(),f=H();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,d))}),u.push(zp(o,a,t.documentUpdates).next(d=>{c=d.xs,f=d.Os})),!r.isEqual(O.min())){const d=e.ai.getLastRemoteSnapshotVersion(o).next(g=>e.ai.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(d)}return C.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,c,f)).next(()=>c)}).then(o=>(e.Ss=i,o))}function zp(n,t,e){let r=H(),i=H();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=oe();return e.forEach((u,c)=>{const f=o.get(u);c.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(u)),c.isNoDocument()&&c.version.isEqual(O.min())?(t.removeEntry(u,c.readTime),a=a.insert(u,c)):!f.isValidDocument()||c.version.compareTo(f.version)>0||c.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(c),a=a.insert(u,c)):D(Ls,"Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",c.version)}),{xs:a,Os:i}})}function jp(n,t){const e=z(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.ai.getTargetData(r,t).next(o=>o?(i=o,C.resolve(i)):e.ai.allocateTargetId(r).next(a=>(i=new Jt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.ai.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ss=e.Ss.insert(r.targetId,r),e.Ds.set(t,r.targetId)),r})}async function as(n,t,e){const r=z(n),i=r.Ss.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!We(a))throw a;D(Ls,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ss=r.Ss.remove(t),r.Ds.delete(i.target)}function ja(n,t,e){const r=z(n);let i=O.min(),o=H();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,f,d){const g=z(c),v=g.Ds.get(d);return v!==void 0?C.resolve(g.Ss.get(v)):g.ai.getTargetData(f,d)}(r,a,Mt(t)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(a,u.targetId).next(c=>{o=c})}).next(()=>r.bs.getDocumentsMatchingQuery(a,t,e?i:O.min(),e?o:H())).next(u=>(Hp(r,Md(t),u),{documents:u,Ns:o})))}function Hp(n,t,e){let r=n.vs.get(t)||O.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.vs.set(t,r)}class Ha{constructor(){this.activeTargetIds=$d()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Gp{constructor(){this.So=new Ha,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,e,r){this.Do[t]=e}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new Ha,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{vo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="ConnectivityMonitor";class Ka{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){D(Ga,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){D(Ga,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr=null;function us(){return lr===null?lr=function(){return 268435456+Math.round(2147483648*Math.random())}():lr++,"0x"+lr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="RestConnection",Qp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Wp{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Lo=e+"://"+t.host,this.ko=`projects/${r}/databases/${i}`,this.qo=this.databaseId.database===br?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Qo(t,e,r,i,o){const a=us(),u=this.$o(t,e.toUriEncodedString());D(Oi,`Sending RPC '${t}' ${a}:`,u,r);const c={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(c,i,o),this.Ko(t,u,c,r).then(f=>(D(Oi,`Received RPC '${t}' ${a}: `,f),f),f=>{throw Le(Oi,`RPC '${t}' ${a} failed with error: `,f,"url: ",u,"request:",r),f})}Wo(t,e,r,i,o,a){return this.Qo(t,e,r,i,o)}Uo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qe}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}$o(t,e){const r=Qp[t];return`${this.Lo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class Yp extends Wp{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,e,r,i){const o=us();return new Promise((a,u)=>{const c=new Hu;c.setWithCredentials(!0),c.listenOnce(Gu.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case gr.NO_ERROR:const d=c.getResponseJson();D(gt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(d)),a(d);break;case gr.TIMEOUT:D(gt,`RPC '${t}' ${o} timed out`),u(new k(x.DEADLINE_EXCEEDED,"Request time out"));break;case gr.HTTP_ERROR:const g=c.getStatus();if(D(gt,`RPC '${t}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let v=c.getResponseJson();Array.isArray(v)&&(v=v[0]);const A=v==null?void 0:v.error;if(A&&A.status&&A.message){const b=function(V){const j=V.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(j)>=0?j:x.UNKNOWN}(A.status);u(new k(b,A.message))}else u(new k(x.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new k(x.UNAVAILABLE,"Connection failed."));break;default:L(9055,{s_:t,streamId:o,o_:c.getLastErrorCode(),__:c.getLastError()})}}finally{D(gt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);D(gt,`RPC '${t}' ${o} sending request:`,i),c.send(e,"POST",f,r,15)})}a_(t,e,r){const i=us(),o=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Wu(),u=Qu(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Uo(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const d=o.join("");D(gt,`Creating RPC '${t}' stream ${i}: ${d}`,c);const g=a.createWebChannel(d,c);let v=!1,A=!1;const b=new Xp({Go:V=>{A?D(gt,`Not sending because RPC '${t}' stream ${i} is closed:`,V):(v||(D(gt,`Opening RPC '${t}' stream ${i} transport.`),g.open(),v=!0),D(gt,`RPC '${t}' stream ${i} sending:`,V),g.send(V))},zo:()=>g.close()}),N=(V,j,U)=>{V.listen(j,F=>{try{U(F)}catch(Q){setTimeout(()=>{throw Q},0)}})};return N(g,pn.EventType.OPEN,()=>{A||(D(gt,`RPC '${t}' stream ${i} transport opened.`),b.t_())}),N(g,pn.EventType.CLOSE,()=>{A||(A=!0,D(gt,`RPC '${t}' stream ${i} transport closed`),b.r_())}),N(g,pn.EventType.ERROR,V=>{A||(A=!0,Le(gt,`RPC '${t}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),b.r_(new k(x.UNAVAILABLE,"The operation could not be completed")))}),N(g,pn.EventType.MESSAGE,V=>{var j;if(!A){const U=V.data[0];J(!!U,16349);const F=U,Q=(F==null?void 0:F.error)||((j=F[0])===null||j===void 0?void 0:j.error);if(Q){D(gt,`RPC '${t}' stream ${i} received error:`,Q);const K=Q.status;let X=function(y){const w=rt[y];if(w!==void 0)return wl(w)}(K),T=Q.message;X===void 0&&(X=x.INTERNAL,T="Unknown error status: "+K+" with message "+Q.message),A=!0,b.r_(new k(X,T)),g.close()}else D(gt,`RPC '${t}' stream ${i} received:`,U),b.i_(U)}}),N(u,Ku.STAT_EVENT,V=>{V.stat===Qi.PROXY?D(gt,`RPC '${t}' stream ${i} detected buffering proxy`):V.stat===Qi.NOPROXY&&D(gt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.n_()},0),b}}function Li(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n){return new ip(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,e,r=1e3,i=1.5,o=6e4){this.bi=t,this.timerId=e,this.u_=r,this.c_=i,this.l_=o,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const e=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.h_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,i,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="PersistentStream";class Jp{constructor(t,e,r,i,o,a,u,c){this.bi=t,this.R_=r,this.V_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new Ml(t,e)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,e){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():e&&e.code===x.RESOURCE_EXHAUSTED?(jt(e.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):e&&e.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(e)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),e=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.m_===e&&this.B_(r,i)},r=>{t(()=>{const i=new k(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(i)})})}B_(t,e){const r=this.N_(this.m_);this.stream=this.k_(t,e),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(i=>{r(()=>this.L_(i))}),this.stream.onMessage(i=>{r(()=>++this.p_==1?this.q_(i):this.onNext(i))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return D(Qa,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return e=>{this.bi.enqueueAndForget(()=>this.m_===t?e():(D(Qa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zp extends Jp{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}k_(t,e){return this.connection.a_("Listen",t,e)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const e=lp(this.serializer,t),r=function(o){if(!("targetChange"in o))return O.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?O.min():a.readTime?Ne(a.readTime):O.min()}(t);return this.listener.Q_(e,r)}U_(t){const e={};e.database=Ba(this.serializer),e.addTarget=function(o,a){let u;const c=a.target;if(u=es(c)?{documents:cp(o,c)}:{query:hp(o,c).gt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=op(o,a.resumeToken);const f=ss(o,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(O.min())>0){u.readTime=sp(o,a.snapshotVersion.toTimestamp());const f=ss(o,a.expectedCount);f!==null&&(u.expectedCount=f)}return u}(this.serializer,t);const r=dp(this.serializer,t);r&&(e.labels=r),this.F_(e)}K_(t){const e={};e.database=Ba(this.serializer),e.removeTarget=t,this.F_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{}class eg extends tg{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.J_=!1}Y_(){if(this.J_)throw new k(x.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,e,r,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Qo(t,os(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(x.UNKNOWN,o.toString())})}Wo(t,e,r,i,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Wo(t,os(e,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(x.UNKNOWN,a.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class ng{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(jt(e),this.ea=!1):D("OnlineStateTracker",e)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="RemoteStore";class rg{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=o,this.ca.vo(a=>{r.enqueueAndForget(async()=>{Ln(this)&&(D(qe,"Restarting streams for network reachability change."),await async function(c){const f=z(c);f.aa.add(4),await On(f),f.la.set("Unknown"),f.aa.delete(4),await ni(f)}(this))})}),this.la=new ng(r,i)}}async function ni(n){if(Ln(n))for(const t of n.ua)await t(!0)}async function On(n){for(const t of n.ua)await t(!1)}function Ol(n,t){const e=z(n);e._a.has(t.targetId)||(e._a.set(t.targetId,t),$s(e)?Bs(e):Xe(e).b_()&&Us(e,t))}function Fs(n,t){const e=z(n),r=Xe(e);e._a.delete(t),r.b_()&&Ll(e,t),e._a.size===0&&(r.b_()?r.v_():Ln(e)&&e.la.set("Unknown"))}function Us(n,t){if(n.ha.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Xe(n).U_(t)}function Ll(n,t){n.ha.Ke(t),Xe(n).K_(t)}function Bs(n){n.ha=new tp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n._a.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),Xe(n).start(),n.la.ta()}function $s(n){return Ln(n)&&!Xe(n).w_()&&n._a.size>0}function Ln(n){return z(n).aa.size===0}function Fl(n){n.ha=void 0}async function ig(n){n.la.set("Online")}async function sg(n){n._a.forEach((t,e)=>{Us(n,t)})}async function og(n,t){Fl(n),$s(n)?(n.la.ia(t),Bs(n)):n.la.set("Unknown")}async function ag(n,t,e){if(n.la.set("Online"),t instanceof Il&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i._a.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i._a.delete(u),i.ha.removeTarget(u))}(n,t)}catch(r){D(qe,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Wa(n,r)}else if(t instanceof yr?n.ha.Xe(t):t instanceof Tl?n.ha.ot(t):n.ha.nt(t),!e.isEqual(O.min()))try{const r=await Nl(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.ha.It(a);return u.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const d=o._a.get(f);d&&o._a.set(f,d.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,f)=>{const d=o._a.get(c);if(!d)return;o._a.set(c,d.withResumeToken(lt.EMPTY_BYTE_STRING,d.snapshotVersion)),Ll(o,c);const g=new Jt(d.target,c,f,d.sequenceNumber);Us(o,g)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){D(qe,"Failed to raise snapshot:",r),await Wa(n,r)}}async function Wa(n,t,e){if(!We(t))throw t;n.aa.add(1),await On(n),n.la.set("Offline"),e||(e=()=>Nl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(qe,"Retrying IndexedDB access"),await e(),n.aa.delete(1),await ni(n)})}async function Xa(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),D(qe,"RemoteStore received new credentials");const r=Ln(e);e.aa.add(3),await On(e),r&&e.la.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.aa.delete(3),await ni(e)}async function ug(n,t){const e=z(n);t?(e.aa.delete(2),await ni(e)):t||(e.aa.add(2),await On(e),e.la.set("Unknown"))}function Xe(n){return n.Pa||(n.Pa=function(e,r,i){const o=z(e);return o.Y_(),new Zp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{jo:ig.bind(null,n),Jo:sg.bind(null,n),Zo:og.bind(null,n),Q_:ag.bind(null,n)}),n.ua.push(async t=>{t?(n.Pa.D_(),$s(n)?Bs(n):n.la.set("Unknown")):(await n.Pa.stop(),Fl(n))})),n.Pa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,u=new qs(t,e,a,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(x.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ul(n,t){if(jt("AsyncQueue",`${t}: ${n}`),We(n))return new k(x.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{static emptySet(t){return new ke(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=gn(),this.sortedSet=new nt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ke)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ke;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.Ia=new nt(M.comparator)}track(t){const e=t.doc.key,r=this.Ia.get(e);r?t.type!==0&&r.type===3?this.Ia=this.Ia.insert(e,t):t.type===3&&r.type!==1?this.Ia=this.Ia.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Ia=this.Ia.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Ia=this.Ia.remove(e):t.type===1&&r.type===2?this.Ia=this.Ia.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):L(63341,{Vt:t,Ea:r}):this.Ia=this.Ia.insert(e,t)}da(){const t=[];return this.Ia.inorderTraversal((e,r)=>{t.push(r)}),t}}class ze{constructor(t,e,r,i,o,a,u,c,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new ze(t,e,ke.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Yr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(t=>t.ma())}}class cg{constructor(){this.queries=Ja(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(e,r){const i=z(e),o=i.queries;i.queries=Ja(),o.forEach((a,u)=>{for(const c of u.Ra)c.onError(r)})})(this,new k(x.ABORTED,"Firestore shutting down"))}}function Ja(){return new we(n=>fl(n),Yr)}async function hg(n,t){const e=z(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.Va()&&t.ma()&&(r=2):(o=new lg,r=t.ma()?0:1);try{switch(r){case 0:o.Aa=await e.onListen(i,!0);break;case 1:o.Aa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const u=Ul(a,`Initialization of query '${be(t.query)}' failed`);return void t.onError(u)}e.queries.set(i,o),o.Ra.push(t),t.ga(e.onlineState),o.Aa&&t.pa(o.Aa)&&zs(e)}async function fg(n,t){const e=z(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.Ra.indexOf(t);a>=0&&(o.Ra.splice(a,1),o.Ra.length===0?i=t.ma()?0:1:!o.Va()&&t.ma()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function dg(n,t){const e=z(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const u of a.Ra)u.pa(i)&&(r=!0);a.Aa=i}}r&&zs(e)}function pg(n,t,e){const r=z(n),i=r.queries.get(t);if(i)for(const o of i.Ra)o.onError(e);r.queries.delete(t)}function zs(n){n.fa.forEach(t=>{t.next()})}var ls,Za;(Za=ls||(ls={})).ya="default",Za.Cache="cache";class gg{constructor(t,e,r){this.query=t,this.wa=e,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ze(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ba?this.Da(t)&&(this.wa.next(t),e=!0):this.va(t,this.onlineState)&&(this.Ca(t),e=!0),this.Sa=t,e}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let e=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),e=!0),e}va(t,e){if(!t.fromCache||!this.ma())return!0;const r=e!=="Offline";return(!this.options.Fa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Da(t){if(t.docChanges.length>0)return!0;const e=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Ca(t){t=ze.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==ls.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t){this.key=t}}class $l{constructor(t){this.key=t}}class mg{constructor(t,e){this.query=t,this.qa=e,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=H(),this.mutatedKeys=H(),this.Ua=dl(t),this.Ka=new ke(this.Ua)}get Wa(){return this.qa}Ga(t,e){const r=e?e.za:new Ya,i=e?e.Ka:this.Ka;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,u=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,g)=>{const v=i.get(d),A=Jr(this.query,g)?g:null,b=!!v&&this.mutatedKeys.has(v.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let V=!1;v&&A?v.data.isEqual(A.data)?b!==N&&(r.track({type:3,doc:A}),V=!0):this.ja(v,A)||(r.track({type:2,doc:A}),V=!0,(c&&this.Ua(A,c)>0||f&&this.Ua(A,f)<0)&&(u=!0)):!v&&A?(r.track({type:0,doc:A}),V=!0):v&&!A&&(r.track({type:1,doc:v}),V=!0,(c||f)&&(u=!0)),V&&(A?(a=a.add(A),o=N?o.add(d):o.delete(d)):(a=a.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{Ka:a,za:r,ys:u,mutatedKeys:o}}ja(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const a=t.za.da();a.sort((d,g)=>function(A,b){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Vt:V})}};return N(A)-N(b)}(d.type,g.type)||this.Ua(d.doc,g.doc)),this.Ha(r),i=i!=null&&i;const u=e&&!i?this.Ja():[],c=this.$a.size===0&&this.current&&!i?1:0,f=c!==this.Qa;return this.Qa=c,a.length!==0||f?{snapshot:new ze(this.query,t.Ka,o,a,t.mutatedKeys,c===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:u}:{Ya:u}}ga(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Ya,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach(e=>this.qa=this.qa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.qa=this.qa.delete(e)),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=H(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const e=[];return t.forEach(r=>{this.$a.has(r)||e.push(new $l(r))}),this.$a.forEach(r=>{t.has(r)||e.push(new Bl(r))}),e}Xa(t){this.qa=t.Ns,this.$a=H();const e=this.Ga(t.documents);return this.applyChanges(e,!0)}eu(){return ze.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const js="SyncEngine";class _g{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class yg{constructor(t){this.key=t,this.tu=!1}}class vg{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.nu={},this.ru=new we(u=>fl(u),Yr),this.iu=new Map,this.su=new Set,this.ou=new nt(M.comparator),this._u=new Map,this.au=new ks,this.uu={},this.cu=new Map,this.lu=$e.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function Eg(n,t,e=!0){const r=Gl(n);let i;const o=r.ru.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.eu()):i=await ql(r,t,e,!0),i}async function wg(n,t){const e=Gl(n);await ql(e,t,!0,!1)}async function ql(n,t,e,r){const i=await jp(n.localStore,Mt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await Tg(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Ol(n.remoteStore,i),u}async function Tg(n,t,e,r,i){n.Pu=(g,v,A)=>async function(N,V,j,U){let F=V.view.Ga(j);F.ys&&(F=await ja(N.localStore,V.query,!1).then(({documents:T})=>V.view.Ga(T,F)));const Q=U&&U.targetChanges.get(V.targetId),K=U&&U.targetMismatches.get(V.targetId)!=null,X=V.view.applyChanges(F,N.isPrimaryClient,Q,K);return eu(N,V.targetId,X.Ya),X.snapshot}(n,g,v,A);const o=await ja(n.localStore,t,!0),a=new mg(t,o.Ns),u=a.Ga(o.documents),c=Mn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=a.applyChanges(u,n.isPrimaryClient,c);eu(n,e,f.Ya);const d=new _g(t,e,a);return n.ru.set(t,d),n.iu.has(e)?n.iu.get(e).push(t):n.iu.set(e,[t]),f.snapshot}async function Ig(n,t,e){const r=z(n),i=r.ru.get(t),o=r.iu.get(i.targetId);if(o.length>1)return r.iu.set(i.targetId,o.filter(a=>!Yr(a,t))),void r.ru.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await as(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Fs(r.remoteStore,i.targetId),cs(r,i.targetId)}).catch(Gr)):(cs(r,i.targetId),await as(r.localStore,i.targetId,!0))}async function Ag(n,t){const e=z(n),r=e.ru.get(t),i=e.iu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Fs(e.remoteStore,r.targetId))}async function zl(n,t){const e=z(n);try{const r=await qp(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e._u.get(o);a&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.tu=!0:i.modifiedDocuments.size>0?J(a.tu,14607):i.removedDocuments.size>0&&(J(a.tu,42227),a.tu=!1))}),await Hl(e,r,t)}catch(r){await Gr(r)}}function tu(n,t,e){const r=z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ru.forEach((o,a)=>{const u=a.view.ga(t);u.snapshot&&i.push(u.snapshot)}),function(a,u){const c=z(a);c.onlineState=u;let f=!1;c.queries.forEach((d,g)=>{for(const v of g.Ra)v.ga(u)&&(f=!0)}),f&&zs(c)}(r.eventManager,t),i.length&&r.nu.Q_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Rg(n,t,e){const r=z(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r._u.get(t),o=i&&i.key;if(o){let a=new nt(M.comparator);a=a.insert(o,_t.newNoDocument(o,O.min()));const u=H().add(o),c=new ei(O.min(),new Map,new nt(B),a,u);await zl(r,c),r.ou=r.ou.remove(o),r._u.delete(t),Hs(r)}else await as(r.localStore,t,!1).then(()=>cs(r,t,e)).catch(Gr)}function cs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.iu.get(t))n.ru.delete(r),e&&n.nu.Tu(r,e);n.iu.delete(t),n.isPrimaryClient&&n.au.Ur(t).forEach(r=>{n.au.containsKey(r)||jl(n,r)})}function jl(n,t){n.su.delete(t.path.canonicalString());const e=n.ou.get(t);e!==null&&(Fs(n.remoteStore,e),n.ou=n.ou.remove(t),n._u.delete(e),Hs(n))}function eu(n,t,e){for(const r of e)r instanceof Bl?(n.au.addReference(r.key,t),Sg(n,r)):r instanceof $l?(D(js,"Document no longer in limbo: "+r.key),n.au.removeReference(r.key,t),n.au.containsKey(r.key)||jl(n,r.key)):L(19791,{Iu:r})}function Sg(n,t){const e=t.key,r=e.path.canonicalString();n.ou.get(e)||n.su.has(r)||(D(js,"New document in limbo: "+e),n.su.add(r),Hs(n))}function Hs(n){for(;n.su.size>0&&n.ou.size<n.maxConcurrentLimboResolutions;){const t=n.su.values().next().value;n.su.delete(t);const e=new M(tt.fromString(t)),r=n.lu.next();n._u.set(r,new yg(e)),n.ou=n.ou.insert(e,r),Ol(n.remoteStore,new Jt(Mt(hl(e.path)),r,"TargetPurposeLimboResolution",Kr.le))}}async function Hl(n,t,e){const r=z(n),i=[],o=[],a=[];r.ru.isEmpty()||(r.ru.forEach((u,c)=>{a.push(r.Pu(c,t,e).then(f=>{var d;if((f||e)&&r.isPrimaryClient){const g=f?!f.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(f){i.push(f);const g=Os.Ps(c.targetId,f);o.push(g)}}))}),await Promise.all(a),r.nu.Q_(i),await async function(c,f){const d=z(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>C.forEach(f,v=>C.forEach(v.ls,A=>d.persistence.referenceDelegate.addReference(g,v.targetId,A)).next(()=>C.forEach(v.hs,A=>d.persistence.referenceDelegate.removeReference(g,v.targetId,A)))))}catch(g){if(!We(g))throw g;D(Ls,"Failed to update sequence numbers: "+g)}for(const g of f){const v=g.targetId;if(!g.fromCache){const A=d.Ss.get(v),b=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(b);d.Ss=d.Ss.insert(v,N)}}}(r.localStore,o))}async function Cg(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){D(js,"User change. New user:",t.toKey());const r=await Dl(e.localStore,t);e.currentUser=t,function(o,a){o.cu.forEach(u=>{u.forEach(c=>{c.reject(new k(x.CANCELLED,a))})}),o.cu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Hl(e,r.Ms)}}function bg(n,t){const e=z(n),r=e._u.get(t);if(r&&r.tu)return H().add(r.key);{let i=H();const o=e.iu.get(t);if(!o)return i;for(const a of o){const u=e.ru.get(a);i=i.unionWith(u.view.Wa)}return i}}function Gl(n){const t=z(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=zl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=bg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rg.bind(null,t),t.nu.Q_=dg.bind(null,t.eventManager),t.nu.Tu=pg.bind(null,t.eventManager),t}class kr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=kl(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,e){return null}fu(t,e){return null}Vu(t){return $p(this.persistence,new Fp,t.initialUser,this.serializer)}Ru(t){return new Vl(Ms.Ei,this.serializer)}Au(t){return new Gp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kr.provider={build:()=>new kr};class Pg extends kr{constructor(t){super(),this.cacheSizeBytes=t}mu(t,e){J(this.persistence.referenceDelegate instanceof Nr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ip(r,t.asyncQueue,e)}Ru(t){const e=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new Vl(r=>Nr.Ei(r,e),this.serializer)}}class hs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cg.bind(null,this.syncEngine),await ug(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new cg}()}createDatastore(t){const e=kl(t.databaseInfo.databaseId),r=function(o){return new Yp(o)}(t.databaseInfo);return function(o,a,u,c){return new eg(o,a,u,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,u){return new rg(r,i,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>tu(this.syncEngine,e,0),function(){return Ka.C()?new Ka:new Kp}())}createSyncEngine(t,e){return function(i,o,a,u,c,f,d){const g=new vg(i,o,a,u,c,f);return d&&(g.hu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=z(i);D(qe,"RemoteStore shutting down."),o.aa.add(5),await On(o),o.ca.shutdown(),o.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}hs.provider={build:()=>new hs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="FirestoreClient";class Vg{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=nd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{D(ae,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D(ae,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ul(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Fi(n,t){n.asyncQueue.verifyOperationInProgress(),D(ae,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Dl(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function nu(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Dg(n);D(ae,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Xa(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Xa(t.remoteStore,i)),n._onlineComponents=t}async function Dg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(ae,"Using user provided OfflineComponentProvider");try{await Fi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Le("Error using user provided cache. Falling back to memory cache: "+e),await Fi(n,new kr)}}else D(ae,"Using default OfflineComponentProvider"),await Fi(n,new Pg(void 0));return n._offlineComponents}async function Ng(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(ae,"Using user provided OnlineComponentProvider"),await nu(n,n._uninitializedComponentsProvider._online)):(D(ae,"Using default OnlineComponentProvider"),await nu(n,new hs))),n._onlineComponents}async function kg(n){const t=await Ng(n),e=t.eventManager;return e.onListen=Eg.bind(null,t.syncEngine),e.onUnlisten=Ig.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=wg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ag.bind(null,t.syncEngine),e}function Mg(n,t,e={}){const r=new ge;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,c,f){const d=new xg({next:v=>{d.yu(),a.enqueueAndForget(()=>fg(o,g)),v.fromCache&&c.source==="server"?f.reject(new k(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(v)},error:v=>f.reject(v)}),g=new gg(u,d,{includeMetadataChanges:!0,Fa:!0});return hg(o,g)}(await kg(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=new Map;function Og(n,t,e,r){if(t===!0&&r===!0)throw new k(x.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function iu(n){if(M.isDocumentKey(n))throw new k(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Lg(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function fs(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Lg(n);throw new k(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="firestore.googleapis.com",su=!0;class ou{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ql,this.ssl=su}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:su;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=xl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<wp)throw new k(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Og("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(x.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Gs{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ou({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ou(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wf;switch(r.type){case"firstParty":return new Zf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ru.get(e);r&&(D("ComponentProvider","Removing Datastore"),ru.delete(e),r.terminate())}(this),Promise.resolve()}}function Fg(n,t,e,r={}){var i;const o=(n=fs(n,Gs))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),u=`${t}:${e}`;o.host!==Ql&&o.host!==u&&Le("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:!1,emulatorOptions:r});if(!Rr(c,a)&&(n._setSettings(c),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=mt.MOCK_USER;else{f=Ah(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new k(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new mt(g)}n._authCredentials=new Xf(new Yu(f,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ri(this.firestore,t,this._query)}}class Ye{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Me(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ye(this.firestore,t,this._key)}}class Me extends ri{constructor(t,e,r){super(t,e,hl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ye(this.firestore,null,new M(t))}withConverter(t){return new Me(this.firestore,t,this._path)}}function Wl(n,t,...e){if(n=Nh(n),n instanceof Gs){const r=tt.fromString(t,...e);return iu(r),new Me(n,null,r)}{if(!(n instanceof Ye||n instanceof Me))throw new k(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return iu(r),new Me(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="AsyncQueue";class uu{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new Ml(this,"async_queue_retry"),this.ju=()=>{const r=Li();r&&D(au,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=t;const e=Li();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const e=Li();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const e=new ge;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!We(t))throw t;D(au,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const e=this.Hu.then(()=>(this.Wu=!0,t().catch(r=>{throw this.Ku=r,this.Wu=!1,jt("INTERNAL UNHANDLED ERROR: ",lu(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=e,e}enqueueAfterDelay(t,e,r){this.Ju(),this.zu.indexOf(t)>-1&&(e=0);const i=qs.createAndSchedule(this,t,e,r,o=>this.Xu(o));return this.Uu.push(i),i}Ju(){this.Ku&&L(47125,{ec:lu(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const e of this.Uu)if(e.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Uu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const e=this.Uu.indexOf(t);this.Uu.splice(e,1)}}function lu(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Xl extends Gs{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new uu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new uu(t),this._firestoreClient=void 0,await t}}}function Ug(n,t){const e=typeof n=="object"?n:Of(),r=typeof n=="string"?n:br,i=Vf(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Th("firestore");o&&Fg(i,...o)}return i}function Bg(n){if(n._terminated)throw new k(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$g(n),n._firestoreClient}function $g(n){var t,e,r;const i=n._freezeSettings(),o=function(u,c,f,d){return new md(u,c,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Kl(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Vg(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Mr(lt.fromBase64String(t))}catch(e){throw new k(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Mr(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}const jg=new RegExp("[~\\*/\\[\\]]");function Hg(n,t,e){if(t.search(jg)>=0)throw cu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Yl(...t.split("."))._internalPath}catch{throw cu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function cu(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let a="";return new k(x.INVALID_ARGUMENT,o+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Gg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Zl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Gg extends Jl{data(){return super.data()}}function Zl(n,t){return typeof t=="string"?Hg(n,t):t instanceof Yl?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qg{convertValue(t,e="none"){switch(se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return kn(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e[Yi].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>et(a.doubleValue));return new zg(o)}convertGeoPoint(t){return new qg(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Wr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(bn(t));default:return null}}convertTimestamp(t){const e=re(t);return new It(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=tt.fromString(t);J(Pl(r),9688,{name:t});const i=new Pn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(e)||jt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Wg extends Jl{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Zl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class vr extends Wg{data(t={}){return super.data(t)}}class Xg{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new cr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new vr(this._firestore,this._userDataWriter,r.key,r,new cr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const c=new vr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new cr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const c=new vr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new cr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,d=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),d=a.indexOf(u.doc.key)),{type:Yg(u.type),doc:c,oldIndex:f,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Yg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}class Jg extends Qg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Mr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ye(this.firestore,null,e)}}function tc(n){n=fs(n,ri);const t=fs(n.firestore,Xl),e=Bg(t),r=new Jg(t);return Kg(n._query),Mg(e,n._query).then(i=>new Xg(t,r,n,i))}(function(t,e=!0){(function(i){Qe=i})(Mf),Cr(new Rn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Xl(new Yf(r.getProvider("auth-internal")),new td(a,r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new k(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pn(f.options.projectId,d)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),De(pa,ga,t),De(pa,ga,"esm2017")})();const Zg={apiKey:"AIzaSyC2iEglIw9_iVOivgN9pvfj7t1KL_P407o",authDomain:"piestorm-6bc02.firebaseapp.com",projectId:"piestorm-6bc02",storageBucket:"piestorm-6bc02.firebasestorage.app",messagingSenderId:"150432134556",appId:"1:150432134556:web:3c57c2bdce168090edc459",measurementId:"G-BL2GXMFNZB"},tm=$u(Zg),ec=Ug(tm);function Er(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function em(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function nc(n){let t,e,r;n.length!==2?(t=Er,e=(u,c)=>Er(n(u),c),r=(u,c)=>n(u)-c):(t=n===Er||n===em?n:nm,e=n,r=n);function i(u,c,f=0,d=u.length){if(f<d){if(t(c,c)!==0)return d;do{const g=f+d>>>1;e(u[g],c)<0?f=g+1:d=g}while(f<d)}return f}function o(u,c,f=0,d=u.length){if(f<d){if(t(c,c)!==0)return d;do{const g=f+d>>>1;e(u[g],c)<=0?f=g+1:d=g}while(f<d)}return f}function a(u,c,f=0,d=u.length){const g=i(u,c,f,d-1);return g>f&&r(u[g-1],c)>-r(u[g],c)?g-1:g}return{left:i,center:a,right:o}}function nm(){return 0}function rm(n){return n===null?NaN:+n}const im=nc(Er),sm=im.right;nc(rm).center;const om=Math.sqrt(50),am=Math.sqrt(10),um=Math.sqrt(2);function Or(n,t,e){const r=(t-n)/Math.max(0,e),i=Math.floor(Math.log10(r)),o=r/Math.pow(10,i),a=o>=om?10:o>=am?5:o>=um?2:1;let u,c,f;return i<0?(f=Math.pow(10,-i)/a,u=Math.round(n*f),c=Math.round(t*f),u/f<n&&++u,c/f>t&&--c,f=-f):(f=Math.pow(10,i)*a,u=Math.round(n/f),c=Math.round(t/f),u*f<n&&++u,c*f>t&&--c),c<u&&.5<=e&&e<2?Or(n,t,e*2):[u,c,f]}function lm(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];const r=t<n,[i,o,a]=r?Or(t,n,e):Or(n,t,e);if(!(o>=i))return[];const u=o-i+1,c=new Array(u);if(r)if(a<0)for(let f=0;f<u;++f)c[f]=(o-f)/-a;else for(let f=0;f<u;++f)c[f]=(o-f)*a;else if(a<0)for(let f=0;f<u;++f)c[f]=(i+f)/-a;else for(let f=0;f<u;++f)c[f]=(i+f)*a;return c}function ds(n,t,e){return t=+t,n=+n,e=+e,Or(n,t,e)[2]}function cm(n,t,e){t=+t,n=+n,e=+e;const r=t<n,i=r?ds(t,n,e):ds(n,t,e);return(r?-1:1)*(i<0?1/-i:i)}function hm(n,t){let e;if(t===void 0)for(const r of n)r!=null&&(e<r||e===void 0&&r>=r)&&(e=r);else{let r=-1;for(let i of n)(i=t(i,++r,n))!=null&&(e<i||e===void 0&&i>=i)&&(e=i)}return e}function fm(n){return n}var Ui=1,Bi=2,ps=3,_n=4,hu=1e-6;function dm(n){return"translate("+n+",0)"}function pm(n){return"translate(0,"+n+")"}function gm(n){return t=>+n(t)}function mm(n,t){return t=Math.max(0,n.bandwidth()-t*2)/2,n.round()&&(t=Math.round(t)),e=>+n(e)+t}function _m(){return!this.__axis}function rc(n,t){var e=[],r=null,i=null,o=6,a=6,u=3,c=typeof window<"u"&&window.devicePixelRatio>1?0:.5,f=n===Ui||n===_n?-1:1,d=n===_n||n===Bi?"x":"y",g=n===Ui||n===ps?dm:pm;function v(A){var b=r??(t.ticks?t.ticks.apply(t,e):t.domain()),N=i??(t.tickFormat?t.tickFormat.apply(t,e):fm),V=Math.max(o,0)+u,j=t.range(),U=+j[0]+c,F=+j[j.length-1]+c,Q=(t.bandwidth?mm:gm)(t.copy(),c),K=A.selection?A.selection():A,X=K.selectAll(".domain").data([null]),T=K.selectAll(".tick").data(b,t).order(),m=T.exit(),y=T.enter().append("g").attr("class","tick"),w=T.select("line"),E=T.select("text");X=X.merge(X.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),T=T.merge(y),w=w.merge(y.append("line").attr("stroke","currentColor").attr(d+"2",f*o)),E=E.merge(y.append("text").attr("fill","currentColor").attr(d,f*V).attr("dy",n===Ui?"0em":n===ps?"0.71em":"0.32em")),A!==K&&(X=X.transition(A),T=T.transition(A),w=w.transition(A),E=E.transition(A),m=m.transition(A).attr("opacity",hu).attr("transform",function(I){return isFinite(I=Q(I))?g(I+c):this.getAttribute("transform")}),y.attr("opacity",hu).attr("transform",function(I){var _=this.parentNode.__axis;return g((_&&isFinite(_=_(I))?_:Q(I))+c)})),m.remove(),X.attr("d",n===_n||n===Bi?a?"M"+f*a+","+U+"H"+c+"V"+F+"H"+f*a:"M"+c+","+U+"V"+F:a?"M"+U+","+f*a+"V"+c+"H"+F+"V"+f*a:"M"+U+","+c+"H"+F),T.attr("opacity",1).attr("transform",function(I){return g(Q(I)+c)}),w.attr(d+"2",f*o),E.attr(d,f*V).text(N),K.filter(_m).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",n===Bi?"start":n===_n?"end":"middle"),K.each(function(){this.__axis=Q})}return v.scale=function(A){return arguments.length?(t=A,v):t},v.ticks=function(){return e=Array.from(arguments),v},v.tickArguments=function(A){return arguments.length?(e=A==null?[]:Array.from(A),v):e.slice()},v.tickValues=function(A){return arguments.length?(r=A==null?null:Array.from(A),v):r&&r.slice()},v.tickFormat=function(A){return arguments.length?(i=A,v):i},v.tickSize=function(A){return arguments.length?(o=a=+A,v):o},v.tickSizeInner=function(A){return arguments.length?(o=+A,v):o},v.tickSizeOuter=function(A){return arguments.length?(a=+A,v):a},v.tickPadding=function(A){return arguments.length?(u=+A,v):u},v.offset=function(A){return arguments.length?(c=+A,v):c},v}function ym(n){return rc(ps,n)}function vm(n){return rc(_n,n)}var Em={value:()=>{}};function ic(){for(var n=0,t=arguments.length,e={},r;n<t;++n){if(!(r=arguments[n]+"")||r in e||/[\s.]/.test(r))throw new Error("illegal type: "+r);e[r]=[]}return new wr(e)}function wr(n){this._=n}function wm(n,t){return n.trim().split(/^|\s+/).map(function(e){var r="",i=e.indexOf(".");if(i>=0&&(r=e.slice(i+1),e=e.slice(0,i)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:r}})}wr.prototype=ic.prototype={constructor:wr,on:function(n,t){var e=this._,r=wm(n+"",e),i,o=-1,a=r.length;if(arguments.length<2){for(;++o<a;)if((i=(n=r[o]).type)&&(i=Tm(e[i],n.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<a;)if(i=(n=r[o]).type)e[i]=fu(e[i],n.name,t);else if(t==null)for(i in e)e[i]=fu(e[i],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new wr(n)},call:function(n,t){if((i=arguments.length-2)>0)for(var e=new Array(i),r=0,i,o;r<i;++r)e[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],r=0,i=o.length;r<i;++r)o[r].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],i=0,o=r.length;i<o;++i)r[i].value.apply(t,e)}};function Tm(n,t){for(var e=0,r=n.length,i;e<r;++e)if((i=n[e]).name===t)return i.value}function fu(n,t,e){for(var r=0,i=n.length;r<i;++r)if(n[r].name===t){n[r]=Em,n=n.slice(0,r).concat(n.slice(r+1));break}return e!=null&&n.push({name:t,value:e}),n}var gs="http://www.w3.org/1999/xhtml";const du={svg:"http://www.w3.org/2000/svg",xhtml:gs,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ii(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),du.hasOwnProperty(t)?{space:du[t],local:n}:n}function Im(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===gs&&t.documentElement.namespaceURI===gs?t.createElement(n):t.createElementNS(e,n)}}function Am(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function sc(n){var t=ii(n);return(t.local?Am:Im)(t)}function Rm(){}function Ks(n){return n==null?Rm:function(){return this.querySelector(n)}}function Sm(n){typeof n!="function"&&(n=Ks(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var o=t[i],a=o.length,u=r[i]=new Array(a),c,f,d=0;d<a;++d)(c=o[d])&&(f=n.call(c,c.__data__,d,o))&&("__data__"in c&&(f.__data__=c.__data__),u[d]=f);return new St(r,this._parents)}function Cm(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function bm(){return[]}function oc(n){return n==null?bm:function(){return this.querySelectorAll(n)}}function Pm(n){return function(){return Cm(n.apply(this,arguments))}}function xm(n){typeof n=="function"?n=Pm(n):n=oc(n);for(var t=this._groups,e=t.length,r=[],i=[],o=0;o<e;++o)for(var a=t[o],u=a.length,c,f=0;f<u;++f)(c=a[f])&&(r.push(n.call(c,c.__data__,f,a)),i.push(c));return new St(r,i)}function ac(n){return function(){return this.matches(n)}}function uc(n){return function(t){return t.matches(n)}}var Vm=Array.prototype.find;function Dm(n){return function(){return Vm.call(this.children,n)}}function Nm(){return this.firstElementChild}function km(n){return this.select(n==null?Nm:Dm(typeof n=="function"?n:uc(n)))}var Mm=Array.prototype.filter;function Om(){return Array.from(this.children)}function Lm(n){return function(){return Mm.call(this.children,n)}}function Fm(n){return this.selectAll(n==null?Om:Lm(typeof n=="function"?n:uc(n)))}function Um(n){typeof n!="function"&&(n=ac(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var o=t[i],a=o.length,u=r[i]=[],c,f=0;f<a;++f)(c=o[f])&&n.call(c,c.__data__,f,o)&&u.push(c);return new St(r,this._parents)}function lc(n){return new Array(n.length)}function Bm(){return new St(this._enter||this._groups.map(lc),this._parents)}function Lr(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}Lr.prototype={constructor:Lr,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function $m(n){return function(){return n}}function qm(n,t,e,r,i,o){for(var a=0,u,c=t.length,f=o.length;a<f;++a)(u=t[a])?(u.__data__=o[a],r[a]=u):e[a]=new Lr(n,o[a]);for(;a<c;++a)(u=t[a])&&(i[a]=u)}function zm(n,t,e,r,i,o,a){var u,c,f=new Map,d=t.length,g=o.length,v=new Array(d),A;for(u=0;u<d;++u)(c=t[u])&&(v[u]=A=a.call(c,c.__data__,u,t)+"",f.has(A)?i[u]=c:f.set(A,c));for(u=0;u<g;++u)A=a.call(n,o[u],u,o)+"",(c=f.get(A))?(r[u]=c,c.__data__=o[u],f.delete(A)):e[u]=new Lr(n,o[u]);for(u=0;u<d;++u)(c=t[u])&&f.get(v[u])===c&&(i[u]=c)}function jm(n){return n.__data__}function Hm(n,t){if(!arguments.length)return Array.from(this,jm);var e=t?zm:qm,r=this._parents,i=this._groups;typeof n!="function"&&(n=$m(n));for(var o=i.length,a=new Array(o),u=new Array(o),c=new Array(o),f=0;f<o;++f){var d=r[f],g=i[f],v=g.length,A=Gm(n.call(d,d&&d.__data__,f,r)),b=A.length,N=u[f]=new Array(b),V=a[f]=new Array(b),j=c[f]=new Array(v);e(d,g,N,V,j,A,t);for(var U=0,F=0,Q,K;U<b;++U)if(Q=N[U]){for(U>=F&&(F=U+1);!(K=V[F])&&++F<b;);Q._next=K||null}}return a=new St(a,r),a._enter=u,a._exit=c,a}function Gm(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function Km(){return new St(this._exit||this._groups.map(lc),this._parents)}function Qm(n,t,e){var r=this.enter(),i=this,o=this.exit();return typeof n=="function"?(r=n(r),r&&(r=r.selection())):r=r.append(n+""),t!=null&&(i=t(i),i&&(i=i.selection())),e==null?o.remove():e(o),r&&i?r.merge(i).order():i}function Wm(n){for(var t=n.selection?n.selection():n,e=this._groups,r=t._groups,i=e.length,o=r.length,a=Math.min(i,o),u=new Array(i),c=0;c<a;++c)for(var f=e[c],d=r[c],g=f.length,v=u[c]=new Array(g),A,b=0;b<g;++b)(A=f[b]||d[b])&&(v[b]=A);for(;c<i;++c)u[c]=e[c];return new St(u,this._parents)}function Xm(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var r=n[t],i=r.length-1,o=r[i],a;--i>=0;)(a=r[i])&&(o&&a.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(a,o),o=a);return this}function Ym(n){n||(n=Jm);function t(g,v){return g&&v?n(g.__data__,v.__data__):!g-!v}for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a=e[o],u=a.length,c=i[o]=new Array(u),f,d=0;d<u;++d)(f=a[d])&&(c[d]=f);c.sort(t)}return new St(i,this._parents).order()}function Jm(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function Zm(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function t_(){return Array.from(this)}function e_(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var r=n[t],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null}function n_(){let n=0;for(const t of this)++n;return n}function r_(){return!this.node()}function i_(n){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var i=t[e],o=0,a=i.length,u;o<a;++o)(u=i[o])&&n.call(u,u.__data__,o,i);return this}function s_(n){return function(){this.removeAttribute(n)}}function o_(n){return function(){this.removeAttributeNS(n.space,n.local)}}function a_(n,t){return function(){this.setAttribute(n,t)}}function u_(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function l_(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function c_(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function h_(n,t){var e=ii(n);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((t==null?e.local?o_:s_:typeof t=="function"?e.local?c_:l_:e.local?u_:a_)(e,t))}function cc(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function f_(n){return function(){this.style.removeProperty(n)}}function d_(n,t,e){return function(){this.style.setProperty(n,t,e)}}function p_(n,t,e){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(n):this.style.setProperty(n,r,e)}}function g_(n,t,e){return arguments.length>1?this.each((t==null?f_:typeof t=="function"?p_:d_)(n,t,e??"")):je(this.node(),n)}function je(n,t){return n.style.getPropertyValue(t)||cc(n).getComputedStyle(n,null).getPropertyValue(t)}function m_(n){return function(){delete this[n]}}function __(n,t){return function(){this[n]=t}}function y_(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function v_(n,t){return arguments.length>1?this.each((t==null?m_:typeof t=="function"?y_:__)(n,t)):this.node()[n]}function hc(n){return n.trim().split(/^|\s+/)}function Qs(n){return n.classList||new fc(n)}function fc(n){this._node=n,this._names=hc(n.getAttribute("class")||"")}fc.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function dc(n,t){for(var e=Qs(n),r=-1,i=t.length;++r<i;)e.add(t[r])}function pc(n,t){for(var e=Qs(n),r=-1,i=t.length;++r<i;)e.remove(t[r])}function E_(n){return function(){dc(this,n)}}function w_(n){return function(){pc(this,n)}}function T_(n,t){return function(){(t.apply(this,arguments)?dc:pc)(this,n)}}function I_(n,t){var e=hc(n+"");if(arguments.length<2){for(var r=Qs(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each((typeof t=="function"?T_:t?E_:w_)(e,t))}function A_(){this.textContent=""}function R_(n){return function(){this.textContent=n}}function S_(n){return function(){var t=n.apply(this,arguments);this.textContent=t??""}}function C_(n){return arguments.length?this.each(n==null?A_:(typeof n=="function"?S_:R_)(n)):this.node().textContent}function b_(){this.innerHTML=""}function P_(n){return function(){this.innerHTML=n}}function x_(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t??""}}function V_(n){return arguments.length?this.each(n==null?b_:(typeof n=="function"?x_:P_)(n)):this.node().innerHTML}function D_(){this.nextSibling&&this.parentNode.appendChild(this)}function N_(){return this.each(D_)}function k_(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function M_(){return this.each(k_)}function O_(n){var t=typeof n=="function"?n:sc(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function L_(){return null}function F_(n,t){var e=typeof n=="function"?n:sc(n),r=t==null?L_:typeof t=="function"?t:Ks(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})}function U_(){var n=this.parentNode;n&&n.removeChild(this)}function B_(){return this.each(U_)}function $_(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function q_(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function z_(n){return this.select(n?q_:$_)}function j_(n){return arguments.length?this.property("__data__",n):this.node().__data__}function H_(n){return function(t){n.call(this,t,this.__data__)}}function G_(n){return n.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}function K_(n){return function(){var t=this.__on;if(t){for(var e=0,r=-1,i=t.length,o;e<i;++e)o=t[e],(!n.type||o.type===n.type)&&o.name===n.name?this.removeEventListener(o.type,o.listener,o.options):t[++r]=o;++r?t.length=r:delete this.__on}}}function Q_(n,t,e){return function(){var r=this.__on,i,o=H_(t);if(r){for(var a=0,u=r.length;a<u;++a)if((i=r[a]).type===n.type&&i.name===n.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=e),i.value=t;return}}this.addEventListener(n.type,o,e),i={type:n.type,name:n.name,value:t,listener:o,options:e},r?r.push(i):this.__on=[i]}}function W_(n,t,e){var r=G_(n+""),i,o=r.length,a;if(arguments.length<2){var u=this.node().__on;if(u){for(var c=0,f=u.length,d;c<f;++c)for(i=0,d=u[c];i<o;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(u=t?Q_:K_,i=0;i<o;++i)this.each(u(r[i],t,e));return this}function gc(n,t,e){var r=cc(n),i=r.CustomEvent;typeof i=="function"?i=new i(t,e):(i=r.document.createEvent("Event"),e?(i.initEvent(t,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(t,!1,!1)),n.dispatchEvent(i)}function X_(n,t){return function(){return gc(this,n,t)}}function Y_(n,t){return function(){return gc(this,n,t.apply(this,arguments))}}function J_(n,t){return this.each((typeof t=="function"?Y_:X_)(n,t))}function*Z_(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var r=n[t],i=0,o=r.length,a;i<o;++i)(a=r[i])&&(yield a)}var ty=[null];function St(n,t){this._groups=n,this._parents=t}function Fn(){return new St([[document.documentElement]],ty)}function ey(){return this}St.prototype=Fn.prototype={constructor:St,select:Sm,selectAll:xm,selectChild:km,selectChildren:Fm,filter:Um,data:Hm,enter:Bm,exit:Km,join:Qm,merge:Wm,selection:ey,order:Xm,sort:Ym,call:Zm,nodes:t_,node:e_,size:n_,empty:r_,each:i_,attr:h_,style:g_,property:v_,classed:I_,text:C_,html:V_,raise:N_,lower:M_,append:O_,insert:F_,remove:B_,clone:z_,datum:j_,on:W_,dispatch:J_,[Symbol.iterator]:Z_};function pu(n){return new St([[document.querySelector(n)]],[document.documentElement])}function Ws(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function mc(n,t){var e=Object.create(n.prototype);for(var r in t)e[r]=t[r];return e}function Un(){}var Vn=.7,Fr=1/Vn,Oe="\\s*([+-]?\\d+)\\s*",Dn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ot="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",ny=/^#([0-9a-f]{3,8})$/,ry=new RegExp(`^rgb\\(${Oe},${Oe},${Oe}\\)$`),iy=new RegExp(`^rgb\\(${Ot},${Ot},${Ot}\\)$`),sy=new RegExp(`^rgba\\(${Oe},${Oe},${Oe},${Dn}\\)$`),oy=new RegExp(`^rgba\\(${Ot},${Ot},${Ot},${Dn}\\)$`),ay=new RegExp(`^hsl\\(${Dn},${Ot},${Ot}\\)$`),uy=new RegExp(`^hsla\\(${Dn},${Ot},${Ot},${Dn}\\)$`),gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ws(Un,ve,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:mu,formatHex:mu,formatHex8:ly,formatHsl:cy,formatRgb:_u,toString:_u});function mu(){return this.rgb().formatHex()}function ly(){return this.rgb().formatHex8()}function cy(){return _c(this).formatHsl()}function _u(){return this.rgb().formatRgb()}function ve(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=ny.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?yu(t):e===3?new Tt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?hr(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?hr(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=ry.exec(n))?new Tt(t[1],t[2],t[3],1):(t=iy.exec(n))?new Tt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=sy.exec(n))?hr(t[1],t[2],t[3],t[4]):(t=oy.exec(n))?hr(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=ay.exec(n))?wu(t[1],t[2]/100,t[3]/100,1):(t=uy.exec(n))?wu(t[1],t[2]/100,t[3]/100,t[4]):gu.hasOwnProperty(n)?yu(gu[n]):n==="transparent"?new Tt(NaN,NaN,NaN,0):null}function yu(n){return new Tt(n>>16&255,n>>8&255,n&255,1)}function hr(n,t,e,r){return r<=0&&(n=t=e=NaN),new Tt(n,t,e,r)}function hy(n){return n instanceof Un||(n=ve(n)),n?(n=n.rgb(),new Tt(n.r,n.g,n.b,n.opacity)):new Tt}function ms(n,t,e,r){return arguments.length===1?hy(n):new Tt(n,t,e,r??1)}function Tt(n,t,e,r){this.r=+n,this.g=+t,this.b=+e,this.opacity=+r}Ws(Tt,ms,mc(Un,{brighter(n){return n=n==null?Fr:Math.pow(Fr,n),new Tt(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Vn:Math.pow(Vn,n),new Tt(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Tt(_e(this.r),_e(this.g),_e(this.b),Ur(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:vu,formatHex:vu,formatHex8:fy,formatRgb:Eu,toString:Eu}));function vu(){return`#${pe(this.r)}${pe(this.g)}${pe(this.b)}`}function fy(){return`#${pe(this.r)}${pe(this.g)}${pe(this.b)}${pe((isNaN(this.opacity)?1:this.opacity)*255)}`}function Eu(){const n=Ur(this.opacity);return`${n===1?"rgb(":"rgba("}${_e(this.r)}, ${_e(this.g)}, ${_e(this.b)}${n===1?")":`, ${n})`}`}function Ur(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function _e(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function pe(n){return n=_e(n),(n<16?"0":"")+n.toString(16)}function wu(n,t,e,r){return r<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new Pt(n,t,e,r)}function _c(n){if(n instanceof Pt)return new Pt(n.h,n.s,n.l,n.opacity);if(n instanceof Un||(n=ve(n)),!n)return new Pt;if(n instanceof Pt)return n;n=n.rgb();var t=n.r/255,e=n.g/255,r=n.b/255,i=Math.min(t,e,r),o=Math.max(t,e,r),a=NaN,u=o-i,c=(o+i)/2;return u?(t===o?a=(e-r)/u+(e<r)*6:e===o?a=(r-t)/u+2:a=(t-e)/u+4,u/=c<.5?o+i:2-o-i,a*=60):u=c>0&&c<1?0:a,new Pt(a,u,c,n.opacity)}function dy(n,t,e,r){return arguments.length===1?_c(n):new Pt(n,t,e,r??1)}function Pt(n,t,e,r){this.h=+n,this.s=+t,this.l=+e,this.opacity=+r}Ws(Pt,dy,mc(Un,{brighter(n){return n=n==null?Fr:Math.pow(Fr,n),new Pt(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Vn:Math.pow(Vn,n),new Pt(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*t,i=2*e-r;return new Tt($i(n>=240?n-240:n+120,i,r),$i(n,i,r),$i(n<120?n+240:n-120,i,r),this.opacity)},clamp(){return new Pt(Tu(this.h),fr(this.s),fr(this.l),Ur(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Ur(this.opacity);return`${n===1?"hsl(":"hsla("}${Tu(this.h)}, ${fr(this.s)*100}%, ${fr(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Tu(n){return n=(n||0)%360,n<0?n+360:n}function fr(n){return Math.max(0,Math.min(1,n||0))}function $i(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}const Xs=n=>()=>n;function py(n,t){return function(e){return n+e*t}}function gy(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(r){return Math.pow(n+r*t,e)}}function my(n){return(n=+n)==1?yc:function(t,e){return e-t?gy(t,e,n):Xs(isNaN(t)?e:t)}}function yc(n,t){var e=t-n;return e?py(n,e):Xs(isNaN(n)?t:n)}const Br=function n(t){var e=my(t);function r(i,o){var a=e((i=ms(i)).r,(o=ms(o)).r),u=e(i.g,o.g),c=e(i.b,o.b),f=yc(i.opacity,o.opacity);return function(d){return i.r=a(d),i.g=u(d),i.b=c(d),i.opacity=f(d),i+""}}return r.gamma=n,r}(1);function _y(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,r=t.slice(),i;return function(o){for(i=0;i<e;++i)r[i]=n[i]*(1-o)+t[i]*o;return r}}function yy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function vy(n,t){var e=t?t.length:0,r=n?Math.min(e,n.length):0,i=new Array(r),o=new Array(e),a;for(a=0;a<r;++a)i[a]=Ys(n[a],t[a]);for(;a<e;++a)o[a]=t[a];return function(u){for(a=0;a<r;++a)o[a]=i[a](u);return o}}function Ey(n,t){var e=new Date;return n=+n,t=+t,function(r){return e.setTime(n*(1-r)+t*r),e}}function bt(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function wy(n,t){var e={},r={},i;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in n?e[i]=Ys(n[i],t[i]):r[i]=t[i];return function(o){for(i in e)r[i]=e[i](o);return r}}var _s=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,qi=new RegExp(_s.source,"g");function Ty(n){return function(){return n}}function Iy(n){return function(t){return n(t)+""}}function vc(n,t){var e=_s.lastIndex=qi.lastIndex=0,r,i,o,a=-1,u=[],c=[];for(n=n+"",t=t+"";(r=_s.exec(n))&&(i=qi.exec(t));)(o=i.index)>e&&(o=t.slice(e,o),u[a]?u[a]+=o:u[++a]=o),(r=r[0])===(i=i[0])?u[a]?u[a]+=i:u[++a]=i:(u[++a]=null,c.push({i:a,x:bt(r,i)})),e=qi.lastIndex;return e<t.length&&(o=t.slice(e),u[a]?u[a]+=o:u[++a]=o),u.length<2?c[0]?Iy(c[0].x):Ty(t):(t=c.length,function(f){for(var d=0,g;d<t;++d)u[(g=c[d]).i]=g.x(f);return u.join("")})}function Ys(n,t){var e=typeof t,r;return t==null||e==="boolean"?Xs(t):(e==="number"?bt:e==="string"?(r=ve(t))?(t=r,Br):vc:t instanceof ve?Br:t instanceof Date?Ey:yy(t)?_y:Array.isArray(t)?vy:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?wy:bt)(n,t)}function Ay(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}var Iu=180/Math.PI,ys={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ec(n,t,e,r,i,o){var a,u,c;return(a=Math.sqrt(n*n+t*t))&&(n/=a,t/=a),(c=n*e+t*r)&&(e-=n*c,r-=t*c),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,c/=u),n*r<t*e&&(n=-n,t=-t,c=-c,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(t,n)*Iu,skewX:Math.atan(c)*Iu,scaleX:a,scaleY:u}}var dr;function Ry(n){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?ys:Ec(t.a,t.b,t.c,t.d,t.e,t.f)}function Sy(n){return n==null||(dr||(dr=document.createElementNS("http://www.w3.org/2000/svg","g")),dr.setAttribute("transform",n),!(n=dr.transform.baseVal.consolidate()))?ys:(n=n.matrix,Ec(n.a,n.b,n.c,n.d,n.e,n.f))}function wc(n,t,e,r){function i(f){return f.length?f.pop()+" ":""}function o(f,d,g,v,A,b){if(f!==g||d!==v){var N=A.push("translate(",null,t,null,e);b.push({i:N-4,x:bt(f,g)},{i:N-2,x:bt(d,v)})}else(g||v)&&A.push("translate("+g+t+v+e)}function a(f,d,g,v){f!==d?(f-d>180?d+=360:d-f>180&&(f+=360),v.push({i:g.push(i(g)+"rotate(",null,r)-2,x:bt(f,d)})):d&&g.push(i(g)+"rotate("+d+r)}function u(f,d,g,v){f!==d?v.push({i:g.push(i(g)+"skewX(",null,r)-2,x:bt(f,d)}):d&&g.push(i(g)+"skewX("+d+r)}function c(f,d,g,v,A,b){if(f!==g||d!==v){var N=A.push(i(A)+"scale(",null,",",null,")");b.push({i:N-4,x:bt(f,g)},{i:N-2,x:bt(d,v)})}else(g!==1||v!==1)&&A.push(i(A)+"scale("+g+","+v+")")}return function(f,d){var g=[],v=[];return f=n(f),d=n(d),o(f.translateX,f.translateY,d.translateX,d.translateY,g,v),a(f.rotate,d.rotate,g,v),u(f.skewX,d.skewX,g,v),c(f.scaleX,f.scaleY,d.scaleX,d.scaleY,g,v),f=d=null,function(A){for(var b=-1,N=v.length,V;++b<N;)g[(V=v[b]).i]=V.x(A);return g.join("")}}}var Cy=wc(Ry,"px, ","px)","deg)"),by=wc(Sy,", ",")",")"),He=0,yn=0,dn=0,Tc=1e3,$r,vn,qr=0,Ee=0,si=0,Nn=typeof performance=="object"&&performance.now?performance:Date,Ic=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Js(){return Ee||(Ic(Py),Ee=Nn.now()+si)}function Py(){Ee=0}function zr(){this._call=this._time=this._next=null}zr.prototype=Ac.prototype={constructor:zr,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Js():+e)+(t==null?0:+t),!this._next&&vn!==this&&(vn?vn._next=this:$r=this,vn=this),this._call=n,this._time=e,vs()},stop:function(){this._call&&(this._call=null,this._time=1/0,vs())}};function Ac(n,t,e){var r=new zr;return r.restart(n,t,e),r}function xy(){Js(),++He;for(var n=$r,t;n;)(t=Ee-n._time)>=0&&n._call.call(void 0,t),n=n._next;--He}function Au(){Ee=(qr=Nn.now())+si,He=yn=0;try{xy()}finally{He=0,Dy(),Ee=0}}function Vy(){var n=Nn.now(),t=n-qr;t>Tc&&(si-=t,qr=n)}function Dy(){for(var n,t=$r,e,r=1/0;t;)t._call?(r>t._time&&(r=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:$r=e);vn=n,vs(r)}function vs(n){if(!He){yn&&(yn=clearTimeout(yn));var t=n-Ee;t>24?(n<1/0&&(yn=setTimeout(Au,n-Nn.now()-si)),dn&&(dn=clearInterval(dn))):(dn||(qr=Nn.now(),dn=setInterval(Vy,Tc)),He=1,Ic(Au))}}function Ru(n,t,e){var r=new zr;return t=t==null?0:+t,r.restart(i=>{r.stop(),n(i+t)},t,e),r}var Ny=ic("start","end","cancel","interrupt"),ky=[],Rc=0,Su=1,Es=2,Tr=3,Cu=4,ws=5,Ir=6;function oi(n,t,e,r,i,o){var a=n.__transition;if(!a)n.__transition={};else if(e in a)return;My(n,e,{name:t,index:r,group:i,on:Ny,tween:ky,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Rc})}function Zs(n,t){var e=xt(n,t);if(e.state>Rc)throw new Error("too late; already scheduled");return e}function Ut(n,t){var e=xt(n,t);if(e.state>Tr)throw new Error("too late; already running");return e}function xt(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function My(n,t,e){var r=n.__transition,i;r[t]=e,e.timer=Ac(o,0,e.time);function o(f){e.state=Su,e.timer.restart(a,e.delay,e.time),e.delay<=f&&a(f-e.delay)}function a(f){var d,g,v,A;if(e.state!==Su)return c();for(d in r)if(A=r[d],A.name===e.name){if(A.state===Tr)return Ru(a);A.state===Cu?(A.state=Ir,A.timer.stop(),A.on.call("interrupt",n,n.__data__,A.index,A.group),delete r[d]):+d<t&&(A.state=Ir,A.timer.stop(),A.on.call("cancel",n,n.__data__,A.index,A.group),delete r[d])}if(Ru(function(){e.state===Tr&&(e.state=Cu,e.timer.restart(u,e.delay,e.time),u(f))}),e.state=Es,e.on.call("start",n,n.__data__,e.index,e.group),e.state===Es){for(e.state=Tr,i=new Array(v=e.tween.length),d=0,g=-1;d<v;++d)(A=e.tween[d].value.call(n,n.__data__,e.index,e.group))&&(i[++g]=A);i.length=g+1}}function u(f){for(var d=f<e.duration?e.ease.call(null,f/e.duration):(e.timer.restart(c),e.state=ws,1),g=-1,v=i.length;++g<v;)i[g].call(n,d);e.state===ws&&(e.on.call("end",n,n.__data__,e.index,e.group),c())}function c(){e.state=Ir,e.timer.stop(),delete r[t];for(var f in r)return;delete n.__transition}}function Oy(n,t){var e=n.__transition,r,i,o=!0,a;if(e){t=t==null?null:t+"";for(a in e){if((r=e[a]).name!==t){o=!1;continue}i=r.state>Es&&r.state<ws,r.state=Ir,r.timer.stop(),r.on.call(i?"interrupt":"cancel",n,n.__data__,r.index,r.group),delete e[a]}o&&delete n.__transition}}function Ly(n){return this.each(function(){Oy(this,n)})}function Fy(n,t){var e,r;return function(){var i=Ut(this,n),o=i.tween;if(o!==e){r=e=o;for(var a=0,u=r.length;a<u;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function Uy(n,t,e){var r,i;if(typeof e!="function")throw new Error;return function(){var o=Ut(this,n),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:t,value:e},c=0,f=i.length;c<f;++c)if(i[c].name===t){i[c]=u;break}c===f&&i.push(u)}o.tween=i}}function By(n,t){var e=this._id;if(n+="",arguments.length<2){for(var r=xt(this.node(),e).tween,i=0,o=r.length,a;i<o;++i)if((a=r[i]).name===n)return a.value;return null}return this.each((t==null?Fy:Uy)(e,n,t))}function to(n,t,e){var r=n._id;return n.each(function(){var i=Ut(this,r);(i.value||(i.value={}))[t]=e.apply(this,arguments)}),function(i){return xt(i,r).value[t]}}function Sc(n,t){var e;return(typeof t=="number"?bt:t instanceof ve?Br:(e=ve(t))?(t=e,Br):vc)(n,t)}function $y(n){return function(){this.removeAttribute(n)}}function qy(n){return function(){this.removeAttributeNS(n.space,n.local)}}function zy(n,t,e){var r,i=e+"",o;return function(){var a=this.getAttribute(n);return a===i?null:a===r?o:o=t(r=a,e)}}function jy(n,t,e){var r,i=e+"",o;return function(){var a=this.getAttributeNS(n.space,n.local);return a===i?null:a===r?o:o=t(r=a,e)}}function Hy(n,t,e){var r,i,o;return function(){var a,u=e(this),c;return u==null?void this.removeAttribute(n):(a=this.getAttribute(n),c=u+"",a===c?null:a===r&&c===i?o:(i=c,o=t(r=a,u)))}}function Gy(n,t,e){var r,i,o;return function(){var a,u=e(this),c;return u==null?void this.removeAttributeNS(n.space,n.local):(a=this.getAttributeNS(n.space,n.local),c=u+"",a===c?null:a===r&&c===i?o:(i=c,o=t(r=a,u)))}}function Ky(n,t){var e=ii(n),r=e==="transform"?by:Sc;return this.attrTween(n,typeof t=="function"?(e.local?Gy:Hy)(e,r,to(this,"attr."+n,t)):t==null?(e.local?qy:$y)(e):(e.local?jy:zy)(e,r,t))}function Qy(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function Wy(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function Xy(n,t){var e,r;function i(){var o=t.apply(this,arguments);return o!==r&&(e=(r=o)&&Wy(n,o)),e}return i._value=t,i}function Yy(n,t){var e,r;function i(){var o=t.apply(this,arguments);return o!==r&&(e=(r=o)&&Qy(n,o)),e}return i._value=t,i}function Jy(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var r=ii(n);return this.tween(e,(r.local?Xy:Yy)(r,t))}function Zy(n,t){return function(){Zs(this,n).delay=+t.apply(this,arguments)}}function tv(n,t){return t=+t,function(){Zs(this,n).delay=t}}function ev(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?Zy:tv)(t,n)):xt(this.node(),t).delay}function nv(n,t){return function(){Ut(this,n).duration=+t.apply(this,arguments)}}function rv(n,t){return t=+t,function(){Ut(this,n).duration=t}}function iv(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?nv:rv)(t,n)):xt(this.node(),t).duration}function sv(n,t){if(typeof t!="function")throw new Error;return function(){Ut(this,n).ease=t}}function ov(n){var t=this._id;return arguments.length?this.each(sv(t,n)):xt(this.node(),t).ease}function av(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;Ut(this,n).ease=e}}function uv(n){if(typeof n!="function")throw new Error;return this.each(av(this._id,n))}function lv(n){typeof n!="function"&&(n=ac(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var o=t[i],a=o.length,u=r[i]=[],c,f=0;f<a;++f)(c=o[f])&&n.call(c,c.__data__,f,o)&&u.push(c);return new Ht(r,this._parents,this._name,this._id)}function cv(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,r=t.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c=t[u],f=e[u],d=c.length,g=a[u]=new Array(d),v,A=0;A<d;++A)(v=c[A]||f[A])&&(g[A]=v);for(;u<r;++u)a[u]=t[u];return new Ht(a,this._parents,this._name,this._id)}function hv(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function fv(n,t,e){var r,i,o=hv(t)?Zs:Ut;return function(){var a=o(this,n),u=a.on;u!==r&&(i=(r=u).copy()).on(t,e),a.on=i}}function dv(n,t){var e=this._id;return arguments.length<2?xt(this.node(),e).on.on(n):this.each(fv(e,n,t))}function pv(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function gv(){return this.on("end.remove",pv(this._id))}function mv(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Ks(n));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u=r[a],c=u.length,f=o[a]=new Array(c),d,g,v=0;v<c;++v)(d=u[v])&&(g=n.call(d,d.__data__,v,u))&&("__data__"in d&&(g.__data__=d.__data__),f[v]=g,oi(f[v],t,e,v,f,xt(d,e)));return new Ht(o,this._parents,t,e)}function _v(n){var t=this._name,e=this._id;typeof n!="function"&&(n=oc(n));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var c=r[u],f=c.length,d,g=0;g<f;++g)if(d=c[g]){for(var v=n.call(d,d.__data__,g,c),A,b=xt(d,e),N=0,V=v.length;N<V;++N)(A=v[N])&&oi(A,t,e,N,v,b);o.push(v),a.push(d)}return new Ht(o,a,t,e)}var yv=Fn.prototype.constructor;function vv(){return new yv(this._groups,this._parents)}function Ev(n,t){var e,r,i;return function(){var o=je(this,n),a=(this.style.removeProperty(n),je(this,n));return o===a?null:o===e&&a===r?i:i=t(e=o,r=a)}}function Cc(n){return function(){this.style.removeProperty(n)}}function wv(n,t,e){var r,i=e+"",o;return function(){var a=je(this,n);return a===i?null:a===r?o:o=t(r=a,e)}}function Tv(n,t,e){var r,i,o;return function(){var a=je(this,n),u=e(this),c=u+"";return u==null&&(c=u=(this.style.removeProperty(n),je(this,n))),a===c?null:a===r&&c===i?o:(i=c,o=t(r=a,u))}}function Iv(n,t){var e,r,i,o="style."+t,a="end."+o,u;return function(){var c=Ut(this,n),f=c.on,d=c.value[o]==null?u||(u=Cc(t)):void 0;(f!==e||i!==d)&&(r=(e=f).copy()).on(a,i=d),c.on=r}}function Av(n,t,e){var r=(n+="")=="transform"?Cy:Sc;return t==null?this.styleTween(n,Ev(n,r)).on("end.style."+n,Cc(n)):typeof t=="function"?this.styleTween(n,Tv(n,r,to(this,"style."+n,t))).each(Iv(this._id,n)):this.styleTween(n,wv(n,r,t),e).on("end.style."+n,null)}function Rv(n,t,e){return function(r){this.style.setProperty(n,t.call(this,r),e)}}function Sv(n,t,e){var r,i;function o(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&Rv(n,a,e)),r}return o._value=t,o}function Cv(n,t,e){var r="style."+(n+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,Sv(n,t,e??""))}function bv(n){return function(){this.textContent=n}}function Pv(n){return function(){var t=n(this);this.textContent=t??""}}function xv(n){return this.tween("text",typeof n=="function"?Pv(to(this,"text",n)):bv(n==null?"":n+""))}function Vv(n){return function(t){this.textContent=n.call(this,t)}}function Dv(n){var t,e;function r(){var i=n.apply(this,arguments);return i!==e&&(t=(e=i)&&Vv(i)),t}return r._value=n,r}function Nv(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,Dv(n))}function kv(){for(var n=this._name,t=this._id,e=bc(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],u=a.length,c,f=0;f<u;++f)if(c=a[f]){var d=xt(c,t);oi(c,n,e,f,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Ht(r,this._parents,n,e)}function Mv(){var n,t,e=this,r=e._id,i=e.size();return new Promise(function(o,a){var u={value:a},c={value:function(){--i===0&&o()}};e.each(function(){var f=Ut(this,r),d=f.on;d!==n&&(t=(n=d).copy(),t._.cancel.push(u),t._.interrupt.push(u),t._.end.push(c)),f.on=t}),i===0&&o()})}var Ov=0;function Ht(n,t,e,r){this._groups=n,this._parents=t,this._name=e,this._id=r}function bc(){return++Ov}var qt=Fn.prototype;Ht.prototype={constructor:Ht,select:mv,selectAll:_v,selectChild:qt.selectChild,selectChildren:qt.selectChildren,filter:lv,merge:cv,selection:vv,transition:kv,call:qt.call,nodes:qt.nodes,node:qt.node,size:qt.size,empty:qt.empty,each:qt.each,on:dv,attr:Ky,attrTween:Jy,style:Av,styleTween:Cv,text:xv,textTween:Nv,remove:gv,tween:By,delay:ev,duration:iv,ease:ov,easeVarying:uv,end:Mv,[Symbol.iterator]:qt[Symbol.iterator]};function Lv(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var Fv={time:null,delay:0,duration:250,ease:Lv};function Uv(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function Bv(n){var t,e;n instanceof Ht?(t=n._id,n=n._name):(t=bc(),(e=Fv).time=Js(),n=n==null?null:n+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],u=a.length,c,f=0;f<u;++f)(c=a[f])&&oi(c,n,t,f,a,e||Uv(c,t));return new Ht(r,this._parents,n,t)}Fn.prototype.interrupt=Ly;Fn.prototype.transition=Bv;function $v(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function jr(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,r=n.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+n.slice(e+1)]}function Ge(n){return n=jr(Math.abs(n)),n?n[1]:NaN}function qv(n,t){return function(e,r){for(var i=e.length,o=[],a=0,u=n[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),o.push(e.substring(i-=u,i+u)),!((c+=u+1)>r));)u=n[a=(a+1)%n.length];return o.reverse().join(t)}}function zv(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var jv=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Hr(n){if(!(t=jv.exec(n)))throw new Error("invalid format: "+n);var t;return new eo({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Hr.prototype=eo.prototype;function eo(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}eo.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Hv(n){t:for(var t=n.length,e=1,r=-1,i;e<t;++e)switch(n[e]){case".":r=i=e;break;case"0":r===0&&(r=e),i=e;break;default:if(!+n[e])break t;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(i+1):n}var Pc;function Gv(n,t){var e=jr(n,t);if(!e)return n+"";var r=e[0],i=e[1],o=i-(Pc=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+jr(n,Math.max(0,t+o-1))[0]}function bu(n,t){var e=jr(n,t);if(!e)return n+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const Pu={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:$v,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>bu(n*100,t),r:bu,s:Gv,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function xu(n){return n}var Vu=Array.prototype.map,Du=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Kv(n){var t=n.grouping===void 0||n.thousands===void 0?xu:qv(Vu.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",i=n.decimal===void 0?".":n.decimal+"",o=n.numerals===void 0?xu:zv(Vu.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",u=n.minus===void 0?"−":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function f(g){g=Hr(g);var v=g.fill,A=g.align,b=g.sign,N=g.symbol,V=g.zero,j=g.width,U=g.comma,F=g.precision,Q=g.trim,K=g.type;K==="n"?(U=!0,K="g"):Pu[K]||(F===void 0&&(F=12),Q=!0,K="g"),(V||v==="0"&&A==="=")&&(V=!0,v="0",A="=");var X=N==="$"?e:N==="#"&&/[boxX]/.test(K)?"0"+K.toLowerCase():"",T=N==="$"?r:/[%p]/.test(K)?a:"",m=Pu[K],y=/[defgprs%]/.test(K);F=F===void 0?6:/[gprs]/.test(K)?Math.max(1,Math.min(21,F)):Math.max(0,Math.min(20,F));function w(E){var I=X,_=T,ct,Gt,Te;if(K==="c")_=m(E)+_,E="";else{E=+E;var Vt=E<0||1/E<0;if(E=isNaN(E)?c:m(Math.abs(E),F),Q&&(E=Hv(E)),Vt&&+E==0&&b!=="+"&&(Vt=!1),I=(Vt?b==="("?b:u:b==="-"||b==="("?"":b)+I,_=(K==="s"?Du[8+Pc/3]:"")+_+(Vt&&b==="("?")":""),y){for(ct=-1,Gt=E.length;++ct<Gt;)if(Te=E.charCodeAt(ct),48>Te||Te>57){_=(Te===46?i+E.slice(ct+1):E.slice(ct))+_,E=E.slice(0,ct);break}}}U&&!V&&(E=t(E,1/0));var Dt=I.length+E.length+_.length,At=Dt<j?new Array(j-Dt+1).join(v):"";switch(U&&V&&(E=t(At+E,At.length?j-_.length:1/0),At=""),A){case"<":E=I+E+_+At;break;case"=":E=I+At+E+_;break;case"^":E=At.slice(0,Dt=At.length>>1)+I+E+_+At.slice(Dt);break;default:E=At+I+E+_;break}return o(E)}return w.toString=function(){return g+""},w}function d(g,v){var A=f((g=Hr(g),g.type="f",g)),b=Math.max(-8,Math.min(8,Math.floor(Ge(v)/3)))*3,N=Math.pow(10,-b),V=Du[8+b/3];return function(j){return A(N*j)+V}}return{format:f,formatPrefix:d}}var pr,xc,Vc;Qv({thousands:",",grouping:[3],currency:["$",""]});function Qv(n){return pr=Kv(n),xc=pr.format,Vc=pr.formatPrefix,pr}function Wv(n){return Math.max(0,-Ge(Math.abs(n)))}function Xv(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Ge(t)/3)))*3-Ge(Math.abs(n)))}function Yv(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,Ge(t)-Ge(n))+1}function Jv(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function Zv(n){return function(){return n}}function t0(n){return+n}var Nu=[0,1];function Ve(n){return n}function Ts(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:Zv(isNaN(t)?NaN:.5)}function e0(n,t){var e;return n>t&&(e=n,n=t,t=e),function(r){return Math.max(n,Math.min(t,r))}}function n0(n,t,e){var r=n[0],i=n[1],o=t[0],a=t[1];return i<r?(r=Ts(i,r),o=e(a,o)):(r=Ts(r,i),o=e(o,a)),function(u){return o(r(u))}}function r0(n,t,e){var r=Math.min(n.length,t.length)-1,i=new Array(r),o=new Array(r),a=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<r;)i[a]=Ts(n[a],n[a+1]),o[a]=e(t[a],t[a+1]);return function(u){var c=sm(n,u,1,r)-1;return o[c](i[c](u))}}function i0(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function s0(){var n=Nu,t=Nu,e=Ys,r,i,o,a=Ve,u,c,f;function d(){var v=Math.min(n.length,t.length);return a!==Ve&&(a=e0(n[0],n[v-1])),u=v>2?r0:n0,c=f=null,g}function g(v){return v==null||isNaN(v=+v)?o:(c||(c=u(n.map(r),t,e)))(r(a(v)))}return g.invert=function(v){return a(i((f||(f=u(t,n.map(r),bt)))(v)))},g.domain=function(v){return arguments.length?(n=Array.from(v,t0),d()):n.slice()},g.range=function(v){return arguments.length?(t=Array.from(v),d()):t.slice()},g.rangeRound=function(v){return t=Array.from(v),e=Ay,d()},g.clamp=function(v){return arguments.length?(a=v?!0:Ve,d()):a!==Ve},g.interpolate=function(v){return arguments.length?(e=v,d()):e},g.unknown=function(v){return arguments.length?(o=v,g):o},function(v,A){return r=v,i=A,d()}}function o0(){return s0()(Ve,Ve)}function a0(n,t,e,r){var i=cm(n,t,e),o;switch(r=Hr(r??",f"),r.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(t));return r.precision==null&&!isNaN(o=Xv(i,a))&&(r.precision=o),Vc(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(o=Yv(i,Math.max(Math.abs(n),Math.abs(t))))&&(r.precision=o-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(o=Wv(i))&&(r.precision=o-(r.type==="%")*2);break}}return xc(r)}function u0(n){var t=n.domain;return n.ticks=function(e){var r=t();return lm(r[0],r[r.length-1],e??10)},n.tickFormat=function(e,r){var i=t();return a0(i[0],i[i.length-1],e??10,r)},n.nice=function(e){e==null&&(e=10);var r=t(),i=0,o=r.length-1,a=r[i],u=r[o],c,f,d=10;for(u<a&&(f=a,a=u,u=f,f=i,i=o,o=f);d-- >0;){if(f=ds(a,u,e),f===c)return r[i]=a,r[o]=u,t(r);if(f>0)a=Math.floor(a/f)*f,u=Math.ceil(u/f)*f;else if(f<0)a=Math.ceil(a*f)/f,u=Math.floor(u*f)/f;else break;c=f}return n},n}function Is(){var n=o0();return n.copy=function(){return i0(n,Is())},Jv.apply(n,arguments),u0(n)}function En(n,t,e){this.k=n,this.x=t,this.y=e}En.prototype={constructor:En,scale:function(n){return n===1?this:new En(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new En(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};En.prototype;const l0=async()=>{const c=await c0();console.log(c),pu("#time-temp").select("svg").remove();const f=pu("#time-temp").append("svg").attr("width",1e3).attr("height",400).append("g").attr("transform","translate(40, 20)"),d=Is().domain([0,23]).range([0,940]),g=Is().domain([0,hm(c,v=>v.temp)]).nice().range([350,0]);f.append("g").attr("transform","translate(0, 350)").call(ym(d).ticks(24).tickFormat(v=>`${String(v).padStart(2,"0")}:00`)).selectAll("path, line").attr("stroke","white"),f.selectAll(".tick text").attr("fill","white"),f.append("g").call(vm(g).ticks(12)).selectAll("path, line").attr("stroke","white"),f.selectAll("text").attr("fill","white"),f.selectAll(".dot").data(c).enter().append("circle").attr("class","dot").attr("cx",v=>d(v.hour)).attr("cy",v=>g(v.temp)).attr("r",5).attr("fill","white")};async function c0(){const n=await tc(Wl(ec,"sensor-data")),t=[];for(const e of n.docs)t.push({hour:e.data().time_stamp.toDate().getHours(),temp:e.data()["temp-f"]});return t}async function h0(){return await tc(Wl(ec,"sensor-data"))}async function f0(){const n=await h0();d0(n),l0()}f0();async function d0(n){let t=n.docs[0].data().time_stamp.toDate(),e=t.toLocaleDateString(),r=t.toLocaleTimeString();document.getElementById("location").textContent=n.docs[0].data().location,document.getElementById("date").textContent=e,document.getElementById("time").textContent=r,document.getElementById("temp").textContent=n.docs[0].data()["temp-c"],document.getElementById("pressure").textContent=n.docs[0].data().pressure,document.getElementById("humidity").textContent=n.docs[0].data().humidity}
