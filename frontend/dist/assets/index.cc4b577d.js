(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function k(){}function U(e){return e()}function S(){return Object.create(null)}function E(e){e.forEach(U)}function z(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function h(e,t){e.appendChild(t)}function G(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function R(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function L(){return A(" ")}function T(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function B(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function V(e){return Array.from(e.childNodes)}function W(e,t){t=""+t,e.data!==t&&(e.data=t)}function I(e,t){e.value=t==null?"":t}let F;function x(e){F=e}const b=[],M=[];let w=[];const q=[],X=Promise.resolve();let N=!1;function Y(){N||(N=!0,X.then(H))}function C(e){w.push(e)}const O=new Set;let y=0;function H(){if(y!==0)return;const e=F;do{try{for(;y<b.length;){const t=b[y];y++,x(t),Z(t.$$)}}catch(t){throw b.length=0,y=0,t}for(x(null),b.length=0,y=0;M.length;)M.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];O.has(n)||(O.add(n),n())}w.length=0}while(b.length);for(;q.length;)q.pop()();N=!1,O.clear(),x(e)}function Z(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}function ee(e){const t=[],n=[];w.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),w=t}const te=new Set;function ne(e,t){e&&e.i&&(te.delete(e),e.i(t))}function re(e,t,n,o){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,n),o||C(()=>{const f=e.$$.on_mount.map(U).filter(z);e.$$.on_destroy?e.$$.on_destroy.push(...f):E(f),e.$$.on_mount=[]}),l.forEach(C)}function oe(e,t){const n=e.$$;n.fragment!==null&&(ee(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function le(e,t){e.$$.dirty[0]===-1&&(b.push(e),Y(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(e,t,n,o,r,l,f,m=[-1]){const a=F;x(e);const i=e.$$={fragment:null,ctx:[],props:l,update:k,not_equal:r,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:S(),dirty:m,skip_bound:!1,root:t.target||a.$$.root};f&&f(i.root);let _=!1;if(i.ctx=n?n(e,t.props||{},(d,v,...p)=>{const c=p.length?p[0]:v;return i.ctx&&r(i.ctx[d],i.ctx[d]=c)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](c),_&&le(e,d)),v}):[],i.update(),_=!0,E(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const d=V(t.target);i.fragment&&i.fragment.l(d),d.forEach(j)}else i.fragment&&i.fragment.c();t.intro&&ne(e.$$.fragment),re(e,t.target,t.anchor,t.customElement),H()}x(a)}class ce{$destroy(){oe(this,1),this.$destroy=k}$on(t,n){if(!z(n))return k;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function se(e){return window.go.main.App.ListFiles(e)}function ue(e){return window.go.main.App.ProcessFile(e)}function D(e,t,n){const o=e.slice();return o[8]=t[n],o}function K(e){let t,n=e[8]+"",o;return{c(){t=$("li"),o=A(n)},m(r,l){G(r,t,l),h(t,o)},p:k,d(r){r&&j(t)}}}function fe(e){let t,n,o,r,l,f,m,a,i,_,d,v,p=e[2],c=[];for(let s=0;s<p.length;s+=1)c[s]=K(D(e,p,s));return{c(){t=$("main"),n=$("ul");for(let s=0;s<c.length;s+=1)c[s].c();o=L(),r=$("p"),l=A(e[1]),f=A(" content"),m=L(),a=$("button"),a.textContent="Save",i=L(),_=$("textarea"),B(a,"class","btn"),B(_,"class","content-area svelte-1ob6hcd")},m(s,g){G(s,t,g),h(t,n);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(n,null);h(t,o),h(t,r),h(r,l),h(r,f),h(t,m),h(t,a),h(t,i),h(t,_),I(_,e[0]),d||(v=[T(a,"click",e[3]),T(_,"input",e[4])],d=!0)},p(s,[g]){if(g&4){p=s[2];let u;for(u=0;u<p.length;u+=1){const P=D(s,p,u);c[u]?c[u].p(P,g):(c[u]=K(P),c[u].c(),c[u].m(n,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=p.length}g&2&&W(l,s[1]),g&1&&I(_,s[0])},i:k,o:k,d(s){s&&j(t),R(c,s),d=!1,E(v)}}}function ae(e,t,n){let o="",r="",l=["one","two"];se("/Users/billyarnold/Documents/projects/Tailor");function f(){ue(o).then(a=>n(1,r=a))}function m(){o=this.value,n(0,o)}return[o,r,l,f,m]}class de extends ce{constructor(t){super(),ie(this,t,ae,fe,J,{})}}new de({target:document.getElementById("app")});
