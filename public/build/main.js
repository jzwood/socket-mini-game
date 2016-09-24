"use strict";function setup(){canvasWidth=640,canvasHeight=480,fleet=new Map;createCanvas(canvasWidth,canvasHeight).parent("sketch-container");frameRate(10)}function draw(){function t(t){if(t){if(Array.isArray(t))return 0;var n;if(a&&a(t),"object"==typeof t&&"function"==typeof(n=t[i]))return a&&a(void 0),n.call(t);if(a&&a(void 0),t+""=="[object Generator]")return t}throw new Error(t+" is not iterable")}var n,e,o,i="undefined"!=typeof Symbol&&Symbol&&Symbol.iterator||"@@iterator",a="undefined"!=typeof Symbol&&Symbol&&Symbol.__setObjectSetter__;background("#ECEEFB");var c=void 0,r=void 0;for(n=t(fleet),o=0===n,e=o?fleet.length:void 0;o?n<e:!(e=n.next()).done;)c=(r=o?fleet[n++]:e.value)[0],r=r[1],r.update();n=e=o=void 0,c=void 0,r=void 0}function initShip(t){var n=newShip(t,"#FF9E9E");fleet.set(t,n)}function newShip(t,n){var e={name:t},o=100,i=100,a=2,c=Math.PI/3,r=15,s=function(){fill(n);var t=3*Math.PI/4;quad(o+.75*r*Math.cos(c),i+.75*r*Math.sin(c),o+r*Math.cos(c-t),i+r*Math.sin(c-t),o-.5*r*Math.cos(c),i-.5*r*Math.sin(c),o+r*Math.cos(c+t),i+r*Math.sin(c+t))};return e.rotate=function(t){c+=t},e.update=function(){o=mod(o+a*Math.cos(c),canvasWidth),i=mod(i+a*Math.sin(c),canvasHeight),s()},e}function onConnect(t){isConnected||(isConnected=!0),initShip(t.socketId)}function initSocketListener(t){socket.on(t.input,function(t){onInput(t)}),socket.on(t.newroom,function(t){onNewRoom(t)})}function onInput(t){}function onNewRoom(t){}var fleet=void 0,canvasWidth=void 0,canvasHeight=void 0,createCanvas=void 0,background=void 0,frameRate=void 0,fill=void 0,quad=void 0,mod=function(t,n){for(var e=t%n;e<0;)e+=n;return e},io,socket,isConnected=!1,isPrivate=location.href.indexOf("/private");socket=io(isPrivate>0?"/private":"/public"),socket.on("init",function(t){isConnected||initSocketListener(t.channel),onConnect(t)});