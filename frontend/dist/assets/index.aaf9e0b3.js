(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function g(){}function F(e){return e()}function O(){return Object.create(null)}function y(e){e.forEach(F)}function B(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function T(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function z(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode&&e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function L(){return M(" ")}function N(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function C(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function D(e){return Array.from(e.childNodes)}function G(e,t){t=""+t,e.data!==t&&(e.data=t)}function P(e,t){e.value=t==null?"":t}let v;function m(e){v=e}const p=[],S=[];let _=[];const j=[],H=Promise.resolve();let x=!1;function J(){x||(x=!0,H.then(q))}function k(e){_.push(e)}const b=new Set;let h=0;function q(){if(h!==0)return;const e=v;do{try{for(;h<p.length;){const t=p[h];h++,m(t),Q(t.$$)}}catch(t){throw p.length=0,h=0,t}for(m(null),p.length=0,h=0;S.length;)S.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];b.has(n)||(b.add(n),n())}_.length=0}while(p.length);for(;j.length;)j.pop()();x=!1,b.clear(),m(e)}function Q(e){if(e.fragment!==null){e.update(),y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(k)}}function R(e){const t=[],n=[];_.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),_=t}const U=new Set;function V(e,t){e&&e.i&&(U.delete(e),e.i(t))}function W(e,t,n,o){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),o||k(()=>{const c=e.$$.on_mount.map(F).filter(B);e.$$.on_destroy?e.$$.on_destroy.push(...c):y(c),e.$$.on_mount=[]}),i.forEach(k)}function X(e,t){const n=e.$$;n.fragment!==null&&(R(n.after_update),y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(p.push(e),J(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,o,r,i,c,l=[-1]){const a=v;m(e);const s=e.$$={fragment:null,ctx:[],props:i,update:g,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:O(),dirty:l,skip_bound:!1,root:t.target||a.$$.root};c&&c(s.root);let f=!1;if(s.ctx=n?n(e,t.props||{},(u,w,...E)=>{const A=E.length?E[0]:w;return s.ctx&&r(s.ctx[u],s.ctx[u]=A)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](A),f&&Y(e,u)),w}):[],s.update(),f=!0,y(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const u=D(t.target);s.fragment&&s.fragment.l(u),u.forEach(I)}else s.fragment&&s.fragment.c();t.intro&&V(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),q()}m(a)}class ee{$destroy(){X(this,1),this.$destroy=g}$on(t,n){if(!B(n))return g;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!T(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function te(e){return window.go.main.App.ProcessFile(e)}function ne(e){let t,n,o,r,i,c,l,a,s;return{c(){t=$("main"),n=$("p"),o=M(e[1]),r=L(),i=$("button"),i.textContent="Save",c=L(),l=$("textarea"),C(i,"class","btn"),C(l,"class","content-area svelte-1ob6hcd")},m(f,u){z(f,t,u),d(t,n),d(n,o),d(t,r),d(t,i),d(t,c),d(t,l),P(l,e[0]),a||(s=[N(i,"click",e[2]),N(l,"input",e[3])],a=!0)},p(f,[u]){u&2&&G(o,f[1]),u&1&&P(l,f[0])},i:g,o:g,d(f){f&&I(t),a=!1,y(s)}}}function re(e,t,n){let o="",r="";function i(){te(o).then(l=>n(1,r=l))}function c(){o=this.value,n(0,o)}return[o,r,i,c]}class oe extends ee{constructor(t){super(),Z(this,t,re,ne,K,{})}}new oe({target:document.getElementById("app")});