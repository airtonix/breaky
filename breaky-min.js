!function(e,n,t,o){var r=0,f={},i={},a=[];function u(){for(var e=f[breaky.value].on,n=e.length,t=f[breaky.value].off,o=t.length,r=0;r<n;r++)i[e[r]].active||(i[e[r]].fn(),i[e[r]].active=!0);for(r=0;r<o;r++)i[t[r]].active=!1}function b(t,o){return e.getComputedStyle(n.querySelector(t),":"+o).getPropertyValue("content").replace(/\"/g,"").replace(/\'/g,"")}function y(e,n){if(Array.prototype.indexOf)return e.indexOf(n);for(var t=0,o=e.length;t<o;t++)if(n===e[t])return t}function l(){breakpointsLength=a.length;for(var e=0;e<breakpointsLength;e++)f[a[e]]={},f[a[e]].on=[],f[a[e]].off=[]}function d(e,n,t,o){var b;b=e,i[++r]={},i[r].fn=b,i[r].active=!1,function(e,n,t){for(var o=y(a,e),i=y(a,t),b=0;b<a.length;b++)b==o&&"at"==n||b<=o&&"below"==n||b>=o&&"above"==n||o<=b&&b<=i&&"between"==n?f[a[b]].on.push(r):f[a[b]].off.push(r);u()}(n,t,o)}breaky={below:function(e,n){d(n,e,"below")},above:function(e,n){d(n,e,"above")},between:function(e,n,t){d(t,e,"between",n)},at:function(e,n){d(n,e,"at")},initIE8:function(n,t){e.getComputedStyle||(a=n,l(),breaky.value=t)},init:function(){a=b("html","before").split(","),l(),breaky.value=b("body","before"),e.onresize=function(){breaky.value!==b("body","before")&&(breaky.value=b("body","before"),u())}}},n.body?e.getComputedStyle&&breaky.init():"function"==typeof jQuery?jQuery(function(){e.getComputedStyle&&breaky.init()}):n.addEventListener("DOMContentLoaded",function(n){e.getComputedStyle&&breaky.init()}),(void 0!==e?e:"undefined"!=typeof self?self:{}).breaky=breaky,"function"==typeof define&&define.amd?define(function(){return breaky}):"undefined"!=typeof module&&module.exports?module.exports=breaky:e.breaky=breaky}(window,document);
