parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PYKy":[function(require,module,exports) {
function e(e,o){return r(e)||t(e,o)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function t(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}function r(e){if(Array.isArray(e))return e}var o=new(window.AudioContext||window.webkitAudioContext),i=o.createAnalyser();i.smoothingTimeConstant=0;var a=document.getElementById("numbers"),c=document.getElementById("history");if(navigator.mediaDevices.getUserMedia){console.log("getUserMedia supported.");var u={audio:!0};navigator.mediaDevices.getUserMedia(u).then(function(e){source=o.createMediaStreamSource(e),source.connect(i),p()}).catch(function(e){console.log("The following gUM error occured: "+e)})}else console.log("getUserMedia not supported on your browser!");i.fftSize=2048;var l=i.frequencyBinCount,f=new Uint8Array(l);i.getByteTimeDomainData(f);var s=document.getElementById("oscilloscope"),d=s.getContext("2d"),g=s.clientWidth,y=s.clientHeight,m=!1,v=0,w=Date.now(),h=20;function p(){requestAnimationFrame(p),i.getByteFrequencyData(f),d.fillStyle="rgb(0, 0, 0)",d.fillRect(0,0,g,y);for(var e,n=g/l*.9,t=0,r=0;r<l;r++)e=f[r],A(r)?d.fillStyle="rgb(0,255,0)":d.fillStyle="rgb(255,0,0)",d.fillRect(t,y-e/2,n,e/2),t+=n+1;var o=D(f).join(""),a=parseInt(o,2);v===a?!m&&Date.now()-w>h&&(C({binaryString:o,intValue:a}),m=!0):(w=Date.now(),v=a,m=!1)}var b=150,M=[[47,50],[54,57],[61,64],[69,71],[76,78],[83,85],[89,92],[96,99]],S=M.map(function(e){return Math.round((e[0]+e[1])/2)});function D(e){return S.map(function(n){return(e[n]>b)+0}).reverse()}function A(n){return M.some(function(t){var r=e(t,2),o=r[0],i=r[1];return n>=o&&n<=i})}function C(e){var n=e.binaryString,t=e.intValue,r=String.fromCharCode(t);a.innerHTML="".concat(n," -- ").concat(t," -- ").concat(r),c.innerHTML=c.innerHTML+r}p();
},{}]},{},["PYKy"], null)
//# sourceMappingURL=/ears.6f9e0cf4.js.map