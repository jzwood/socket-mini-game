"use strict";function addFormListener(e,t){e.addEventListener("submit",function(e){e.preventDefault();var n=document.querySelector("#m");return t.emit(msgId,n.value),appendMsg(n.value),n.value="",!1},!1)}function appendMsg(e){var t=document.querySelector(".template").content;t.querySelector("li").textContent=e;var n=document.importNode(t,!0),a=document.querySelector("#messages");return a.appendChild(n),!1}function setup(){canvasWidth=640,canvasHeight=480,fleet=[];createCanvas(canvasWidth,canvasHeight).parent("sketch-container");frameRate(10)}function draw(){function e(e){if(e){if(Array.isArray(e))return 0;var t;if(r&&r(e),"object"==typeof e&&"function"==typeof(t=e[o]))return r&&r(void 0),t.call(e);if(r&&r(void 0),e+""=="[object Generator]")return e}throw new Error(e+" is not iterable")}var t,n,a,o="undefined"!=typeof Symbol&&Symbol&&Symbol.iterator||"@@iterator",r="undefined"!=typeof Symbol&&Symbol&&Symbol.__setObjectSetter__;background("#ECEEFB"),t=e(fleet),a=0===t,n=a?fleet.length:void 0;for(var i;a?t<n:!(n=t.next()).done;)i=a?fleet[t++]:n.value,i.update();t=n=a=void 0}function newShip(e,t){var n={name:e},a=100,o=100,r=2,i=Math.PI/3,d=15,c=function(){fill(t);var e=3*Math.PI/4;quad(a+.75*d*Math.cos(i),o+.75*d*Math.sin(i),a+d*Math.cos(i-e),o+d*Math.sin(i-e),a-.5*d*Math.cos(i),o-.5*d*Math.sin(i),a+d*Math.cos(i+e),o+d*Math.sin(i+e))};return n.rotate=function(e){i+=e},n.update=function(){a=mod(a+r*Math.cos(i),canvasWidth),o=mod(o+r*Math.sin(i),canvasHeight),c()},n}var io,isPrivate=location.href.indexOf("/private"),socket=io(isPrivate>0?"/private":"/public"),msgId="7ydhidjf";document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("form");addFormListener(e,socket),socket.on("init",function(e){appendMsg(e)})},!1);var fleet=void 0,canvasWidth=void 0,canvasHeight=void 0,createCanvas=void 0,background=void 0,frameRate=void 0,fill=void 0,quad=void 0,mod=function(e,t){for(var n=e%t;n<0;)n+=t;return n};