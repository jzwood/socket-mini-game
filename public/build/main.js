"use strict";function newController(e,t){var n=newUser(),o=newAnimator(e,t);return{onEnter:function(e,t,o){13===o&&(n.readInput(),e.emit("clientDataPush",t,n.getRule()))},getColor:function(e){return o.getColor(e)},setSize:function(e){o.setSize(e)},update:function(e){o.setState(e)},animate:function(){o.draw()}}}function newAnimator(e,t){var n=[],o=["#000000","#ff00ff","#00ffff","#00ff00","#ffff00","#ff0000"],r=0,i=0;return{draw:function(){for(var e=0,a=n.length;e<a;e++)t.fill(o[n[e]]),t.rect(i*(e%r),i*~~(e/r),i,i)},getColor:function(e){return e>0&&e<o.length?o[e]:"#fff"},setSize:function(t){e=t,i=e/r},setState:function(t){n=t.slice(0),r=Math.sqrt(n.length),i=e/r}}}function newUser(){function e(e){var t=e.split("/").map(function(e){return e.trim()}).join("/");return t}var t=[],n=document.querySelector(".wrapper__terminal");return{readInput:function(){t.push(e(n.value))},getRule:function(){var e=t.slice(-1).toString();return e.length?e:"/"}}}function app(e){function t(){var t=location.href.indexOf("/private");socket=io(t>0?"/private":"/public");var i=window.location.pathname.slice(-40);e.noStroke(),e.stroke("#111111"),e.strokeWeight(1),e.strokeCap(e.SQUARE),e.windowResized=function(){e.windowWidth<n+2*r?(o.setSize(e.windowWidth-r),e.resizeCanvas(e.windowWidth-r,e.windowWidth-r)):(o.setSize(n),e.resizeCanvas(n+1,n+1))},socket.emit("init",i);var a=document.querySelector(".wrapper__terminal"),c=document.querySelector(".wrapper__dollar");document.querySelector(".warning");socket.on("colorAssignment",function(e){var t=o.getColor(e);c.style.color=t,a.style.color=t}),socket.on("updateBoard",function(e){o.update(e)}),socket.on("removeInputfield",function(e){a.remove(),e.textContent=e}),addKeyPressListener(socket,i,o.onEnter)}var n=500,o=newController(n,e),r=20;e.setup=function(){var i=e.windowWidth<n+2*r?(o.setSize(e.windowWidth-r),e.createCanvas(e.windowWidth-r,e.windowWidth-r)):(o.setSize(n),e.createCanvas(n+1,n+1));i.parent("wrapper__canvas"),i.class("wrapper__canvas__p5"),console.log("waiting for network connection");var a=window.setInterval(function(){console.count("connection attempts"),io&&(console.log("network connected"),t(),window.clearInterval(a))},100)},e.draw=function(){e.background("#000"),o.animate()}}function addKeyPressListener(e,t,n){var o=500;document.addEventListener("keydown",function(r){throttle(n(e,t,r.keyCode),o)},!1)}function throttle(e,t){var n=0;return function(){var o=arguments,r=this,i=+new Date;i>=n+t&&(n=i,e.apply(r,o))}}var io,socket,p5App=new window.p5(app);