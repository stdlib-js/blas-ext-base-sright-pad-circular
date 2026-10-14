"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var f=d(function(D,p){
function R(e,r,a,t,u,i,s,v){var n,c,x,q,o;if(e<=0)return i;for(r<0&&(r=0),x=e+r,o=0,n=u,c=v,q=0;q<x;q++)i[c]=a[n],c+=s,o+=1,o===e?(o=0,n=u):n+=t;return i}p.exports=R
});var h=d(function(F,g){
var y=require('@stdlib/strided-base-stride2offset/dist'),_=f();function E(e,r,a,t,u,i){var s,v;return r<0&&(r=0),s=y(e,t),v=y(e+r,i),_(e,r,a,t,s,u,i,v)}g.exports=E
});var P=d(function(G,C){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=h(),O=f();M(j,"ndarray",O);C.exports=j
});var b=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=P(),l,m=w(b(__dirname,"./native.js"));z(m)?l=A:l=m;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
