!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(global,(function(){return(()=>{"use strict";var e={919:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.percent=t.vMax=t.vMin=t.vh=t.vw=t.rem=t.em=t.pc=t.pt=t.inches=t.mm=t.cm=t.ex=t.px=void 0,t.px=function(e){return e+"px"},t.ex=function(e){return e+"ex"},t.cm=function(e){return e+"cm"},t.mm=function(e){return e+"mm"},t.inches=function(e){return e+"in"},t.pt=function(e){return e+"pt"},t.pc=function(e){return e+"pc"},t.em=function(e){return e+"em"},t.rem=function(e){return e+"rem"},t.vw=function(e){return e+"vw"},t.vh=function(e){return e+"vh"},t.vMin=function(e){return e+"vmin"},t.vMax=function(e){return e+"vmax"},t.percent=function(e){return e+"%"}},225:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return u(t,e),t},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},c=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var u=arguments[t],i=0,a=u.length;i<a;i++,o++)r[o]=u[i];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.createThemeContainer=t.createGlobalTheme=t.createVariableSet=t.createVariable=t.units=void 0;var f=i(n(297)),l=i(n(919));t.units=l;var s=0;t.createVariable=function(e){var t=e.toString()+"_"+s++;return{get:function(){return"var(--"+t+")"},set:function(e){return"--"+t+": "+("function"==typeof e?e():e||"unset")}}},t.createVariableSet=function(){return new Proxy({},{get:function(e,n){var r=function(){return e[n]||(e[n]=t.createVariable(n)),e[n].get()};return r.set=function(r){return e[n]||(e[n]=t.createVariable(n)),e[n].set(r)},r.get=function(){return r()},r.toString=function(){return r()},r}})},t.createGlobalTheme=function(e){var t=function(t){var n=t.override,r=void 0===n?[]:n,o=f.useMemo((function(){return":root {"+c(e,r).map((function(e){var t=e[0],n=e[1];return t.set(n)})).join(";")+"}"}),[e,r]);return f.useEffect((function(){var e,t=document.createElement("style");return t.innerHTML=o,null===(e=document.head)||void 0===e||e.appendChild(t),function(){var e;null===(e=document.head)||void 0===e||e.removeChild(t)}}),[o]),null};return t.displayName="GlobalTheme",t},t.createThemeContainer=function(e,t){return function(n){var o=n.className,u=n.style,i=a(n,["className","style"]),c=f.useMemo((function(){return"theme-container-"+Math.random().toString(36).substr(2)}),[]);return f.useEffect((function(){var e,n=document.createElement("style");return n.innerHTML="."+c+" { "+t.map((function(e){var t=e[0],n=e[1];return t.set(n)})).join(";")+" }",null===(e=document.head)||void 0===e||e.appendChild(n),function(){var e;null===(e=document.head)||void 0===e||e.removeChild(n)}}),[]),f.default.createElement(e,r({style:u,className:c+" "+o},i))}}},297:e=>{e.exports=require("react")}},t={};return function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}(225)})()}));