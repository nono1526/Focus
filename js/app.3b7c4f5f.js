(function(t){function e(e){for(var s,a,r=e[0],c=e[1],u=e[2],l=0,m=[];l<r.length;l++)a=r[l],n[a]&&m.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,a=1;a<i.length;a++){var c=i[a];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={app:0},o=[];function a(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9d1da014"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],i=n[t];if(0!==i)if(i)e.push(i[2]);else{var s=new Promise(function(e,s){i=n[t]=[e,s]});e.push(i[2]=s);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=a(t),o=function(e){c.onerror=c.onload=null,clearTimeout(u);var i=n[t];if(0!==i){if(i){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+s+": "+o+")");a.type=s,a.request=o,i[1](a)}n[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"045d":function(t,e,i){},"0c7a":function(t,e,i){t.exports=i.p+"img/play-button.32f1c68b.svg"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.actionClass,attrs:{id:"app"}},[s("main-background",{attrs:{status:t.status,visible:t.isEdit,remainTime:t.counter,fullTime:t.fullTime}}),s("div",{staticClass:"top-space ",class:t.actionClass},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.isEdit,expression:"isEdit"}],staticClass:"back",class:t.actionClass,on:{click:t.back}},[s("img",{attrs:{src:i("c012")}}),t._v(" Back\n    ")]),s("h2",{directives:[{name:"show",rawName:"v-show",value:"mid"===t.status&&!t.isEdit,expression:"status === 'mid' && !isEdit"}],staticClass:"title"},[t._v("Start to focus")])]),s("ul",{directives:[{name:"show",rawName:"v-show",value:!t.isSetting,expression:"!isSetting"}],staticClass:"todos ",class:t.actionClass},[s("transition-group",t._l(t.todos,function(e,i){return s("li",{key:i,staticClass:"todos__tile",class:{show:!e.done},on:{click:function(i){return t.doneTask(e)}}},[s("div",{staticClass:"tile__btn",class:{active:e.done}}),s("div",{staticClass:"tile__text"},[t._v(t._s(e.text))])])}),0)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isSetting,expression:"isSetting"}],staticClass:"setting",class:{show:t.isSetting}},[s("h3",[t._v("Focus time: "+t._s(t.focusTime/60/1e3)+" minutes")]),s("div",{staticClass:"setting__row"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.newFocusTime,expression:"newFocusTime",modifiers:{number:!0}}],staticClass:"edit__textfield mr-10",attrs:{type:"text",placeHolder:"Set focus time / min"},domProps:{value:t.newFocusTime},on:{input:function(e){e.target.composing||(t.newFocusTime=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),s("f-btn",{on:{click:t.setFocusTime}},[t._v("\n        SET\n      ")])],1),s("h3",[t._v("Breath time: "+t._s(t.breathTime/1e3)+" seconds")]),s("div",{staticClass:"setting__row"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.newRelaxTime,expression:"newRelaxTime",modifiers:{number:!0}}],staticClass:"edit__textfield mr-10",attrs:{type:"text",placeHolder:"Set breath time / sec"},domProps:{value:t.newRelaxTime},on:{input:function(e){e.target.composing||(t.newRelaxTime=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),s("f-btn",{on:{click:t.setRelaxTime}},[t._v("\n        SET\n      ")])],1)]),s("div",{staticClass:"toolbar ",class:t.actionClass},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isPause&&!t.isEdit,expression:"!isPause && !isEdit"}],staticClass:"toolbar__actions actions--main"},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.isWaiting,expression:"isWaiting"}],staticClass:"action__btn",attrs:{src:i("eef4")},on:{click:function(e){t.isEdit=!0}}}),s("img",{directives:[{name:"show",rawName:"v-show",value:!t.isWaiting,expression:"!isWaiting"}],staticClass:"action__btn",attrs:{src:i("ec7e")},on:{click:t.togglePause}}),s("img",{directives:[{name:"show",rawName:"v-show",value:t.isWaiting,expression:"isWaiting"}],staticClass:"action__btn",attrs:{src:i("5830")},on:{click:t.startTask}}),s("img",{directives:[{name:"show",rawName:"v-show",value:t.isWaiting,expression:"isWaiting"}],staticClass:"action__btn",attrs:{src:i("99f0")},on:{click:t.showSetting}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isPause&&!t.isEdit,expression:"isPause && !isEdit"}],staticClass:"toolbar__actions actions--pause"},[s("f-btn",{staticClass:"mr-10",on:{click:t.togglePause}},[t._v("Coutinue "),s("img",{staticStyle:{"margin-left":"5px"},attrs:{src:i("0c7a"),width:"15px"}})]),s("f-btn",{staticClass:"ml-10",attrs:{outline:""},on:{click:t.stop}},[t._v("Quit")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isEdit&&!t.isSetting,expression:"isEdit && !isSetting"}],staticClass:"toolbar__actions actions--edit"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"edit__textfield",attrs:{type:"text",placeHolder:"Let's get things done"},domProps:{value:t.newTask},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask(e)},input:function(e){e.target.composing||(t.newTask=e.target.value)}}}),s("img",{staticClass:"add__task",attrs:{src:i("eef4")},on:{click:t.addTask}})])])],1)},o=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("canvas",{ref:"bg",class:{top:"top"===t.status,bottom:"bottom"===t.status,hide:t.visible},attrs:{id:"main"}}),s("canvas",{ref:"blur",class:{top:"top"===t.status,bottom:"bottom"===t.status,hide:t.visible},attrs:{id:"blur"}}),s("div",{staticClass:"focus",class:{top:"top"===t.status,bottom:"bottom"===t.status}},[t._v(t._s("bottom"===t.status?"Breath Time":"Focus"))]),s("div",{staticClass:"time",class:{top:"top"===t.status,bottom:"bottom"===t.status}},[t._v(t._s(t.remainMinutes)+":"+t._s(t.remainSeconds))]),s("img",{ref:"dotWh",staticClass:"dotWh",attrs:{src:i("db14"),height:"100%"}})])},r=[],c=(i("6c7b"),i("c5f6"),Math.PI/180),u=window.innerWidth,l=window.innerHeight,d={name:"main-background",props:{status:String,remainTime:Number,visible:{default:!1,type:Boolean},fullTime:Number},data:function(){return{publicPath:"",canvas:null,ctx:null,time:0,blurCanvas:null,blurCtx:null,timer:null,moon:{x:u/2,y:2*l/5,r:120},requestId:0,bgc:{r:22,g:22,b:22,a:.9},running:!1}},computed:{remainMinutes:function(){return Math.floor(this.remainTime/1e3/60)},remainSeconds:function(){var t=this.remainTime/1e3%60;return"".concat(t<10?"0":"").concat(t)}},methods:{init:function(){var t=this;this.canvas=this.$refs["bg"],this.blurCanvas=this.$refs["blur"],this.canvas.width=u,this.canvas.height=l,this.blurCanvas.width=u,this.blurCanvas.height=l,this.ctx=this.canvas.getContext("2d"),this.blurCtx=this.blurCanvas.getContext("2d"),this.timer=window.setInterval(function(){t.time++},1e3/30),this.requestId=window.requestAnimationFrame(function(){t.draw(t.ctx,!1),t.draw(t.blurCtx,!0)})},draw:function(t,e){var i=this;t.fillStyle="rgba(".concat(this.bgc.r,",").concat(this.bgc.g,", ").concat(this.bgc.b,", ").concat(this.bgc.a,")"),e&&(t.filter="blur(16px)",t.fillStyle="rgba(55, 55, 61, .56)"),t.rect(0,0,u,l),t.fill(),t.beginPath();var s="mid"===this.status?this.moon.y+10*Math.cos(this.time/30)-30:this.moon.y;if("top"===this.status?(t.shadowBlur=100,t.shadowColor="#FEFFF9"):t.shadowBlur=0,t.arc(this.moon.x,s,this.moon.r,0,2*Math.PI),t.fillStyle="#FEFFF9",t.fill(),"top"===this.status){t.beginPath(),t.arc(this.moon.x,s,this.moon.r+13,0,2*Math.PI),t.strokeStyle="rgba(254, 255, 249, 0.3)",t.stroke();var n=(360-this.remainTime/this.fullTime*360-90)*c;t.beginPath();var o=this.moon.r+13,a=o*Math.cos(n),r=o*Math.sin(n);t.arc(this.moon.x+a,this.moon.y+r,3,0,360*c),t.fillStyle="#FEFFF9",t.fill(),t.beginPath(),t.arc(this.moon.x,s,o,-90*c,n),t.strokeStyle="#FEFFF9",t.stroke(),t.beginPath()}this.requestId=window.requestAnimationFrame(function(){i.draw(t,e)})},runTop:function(){var t=this,e=3*l/10;this.moon.y>e&&(this.moon.y-=30,this.moon.r-=5,this.bgc.r+=3,this.bgc.g+=3,this.bgc.b+=3,window.setTimeout(function(){return t.runTop()},1e3/30))},runMid:function(t){var e=this,i=2*l/5;t?this.moon.y>i?(this.moon.y-=13,this.moon.r+=2,this.bgc.r=22,this.bgc.g=22,this.bgc.b=22,window.setTimeout(function(){return e.runMid(t)},1e3/30)):(this.moon.r=120,this.moon.y=i,this.running=!1):this.moon.y<i?(this.moon.y+=20,this.moon.r+=5,this.bgc.r-=3,this.bgc.g-=3,this.bgc.b-=3,window.setTimeout(function(){return e.runMid(t)},1e3/30)):(this.moon.r=120,this.moon.y=i,this.running=!1)},runBottom:function(){var t=this,e=l/2;this.moon.y<e?(this.moon.y+=20,this.bgc.r-=3,this.bgc.g-=3,this.bgc.b-=3,window.setTimeout(function(){return t.runBottom()},1e3/30)):this.running=!1}},watch:{status:function(t,e){this.running=!0;var i={top:this.runTop,mid:this.runMid,bottom:this.runBottom};window.setTimeout(function(){return i[t]("bottom"===e)},1e3/30)}},mounted:function(){this.init()},beforeDestroy:function(){window.clearInterval(this.timer),window.cancelAnimationFrame(this.requestId)}},m=d,h=(i("c03e"),i("2877")),f=Object(h["a"])(m,a,r,!1,null,"efb4d730",null),p=f.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",t._g(t._b({staticClass:"f-btn",class:{outline:t.outline}},"button",t.$attrs,!1),t.$listeners),[t._t("default")],2)},v=[],g={name:"f-btn",props:{outline:Boolean}},w=g,T=(i("9886"),Object(h["a"])(w,b,v,!1,null,"2796ca82",null)),_=T.exports,x=6e4,y="mid",k="top",C="bottom",S={components:{MainBackground:p,FBtn:_},data:function(){return{newFocusTime:1,newRelaxTime:30,newTask:"",isEdit:!1,focusTime:x,breathTime:3e4,status:"mid",counter:25*x,todos:[],countTimer:null,isPause:!1,isSetting:!1}},computed:{fullTime:function(){return this.newFocusTime*x},isWaiting:function(){return this.status===y},actionClass:function(){return{mid:"mid"===this.status,top:"top"===this.status,bottom:"bottom"===this.status,edit:this.isEdit}}},mounted:function(){var t=this,e=window.localStorage.getItem("todos");e&&(this.todos=JSON.parse(e).filter(function(t){return!t.done})),window.addEventListener("beforeunload",function(e){return t.beforeunloadHandler(e)})},beforeDestroy:function(){var t=this;window.removeEventListener("beforeunload",function(e){return t.beforeunloadHandler(e)})},methods:{setFocusTime:function(){this.focusTime=this.newFocusTime*x},setRelaxTime:function(){this.breathTime=1e3*this.newRelaxTime},back:function(){this.isEdit=!1,this.isSetting=!1},beforeunloadHandler:function(){window.localStorage.setItem("todos",JSON.stringify(this.todos.filter(function(t){return!t.done})))},showSetting:function(){this.isEdit=!0,this.isSetting=!0},addTask:function(){this.todos.push({text:this.newTask,done:!1}),this.newTask="",window.localStorage.setItem("todos",JSON.stringify(this.todos))},stop:function(){this.status=y,window.clearTimeout(this.countTimer),this.counter=this.focusTime,this.isPause=!this.isPause},countdown:function(){var t=this;this.countTimer=window.setTimeout(function(){t.counter-=1e3,t.counter>0?t.countdown():t.nextStatus()},1e3)},nextStatus:function(){this.status===k?(this.status=C,this.counter=this.breathTime,this.countdown()):(this.status=y,this.counter=this.focusTime)},startTask:function(){this.status===y&&(this.counter=this.focusTime,this.status=k,this.countdown())},doneTask:function(t){t.done=!t.done},togglePause:function(){this.isPause?this.countdown():window.clearTimeout(this.countTimer),this.isPause=!this.isPause}}},E=S,P=(i("7faf"),Object(h["a"])(E,n,o,!1,null,null,null)),F=P.exports,N=i("8c4f"),O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"})},M=[],j={name:"home",components:{}},B=j,W=Object(h["a"])(B,O,M,!1,null,null,null),I=W.exports;s["a"].use(N["a"]);var $=new N["a"]({routes:[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:function(){return i.e("about").then(i.bind(null,"f820"))}}]}),R=i("2f62");s["a"].use(R["a"]);var q=new R["a"].Store({state:{},mutations:{},actions:{}}),A=i("9483");Object(A["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});i("6cdd");s["a"].config.productionTip=!1,new s["a"]({router:$,store:q,render:function(t){return t(F)}}).$mount("#app")},5830:function(t,e,i){t.exports=i.p+"img/play.4ed3e950.svg"},"6cdd":function(t,e,i){t.exports=i.p+"fonts/Hijrnotes_PERSONAL_USE_ONLY.f30ff0f1.ttf"},"7faf":function(t,e,i){"use strict";var s=i("8fba"),n=i.n(s);n.a},"8a89":function(t,e,i){},"8fba":function(t,e,i){},9886:function(t,e,i){"use strict";var s=i("8a89"),n=i.n(s);n.a},"99f0":function(t,e,i){t.exports=i.p+"img/Settings.63b5b63e.svg"},c012:function(t,e,i){t.exports=i.p+"img/left-arrow.6396bcf4.svg"},c03e:function(t,e,i){"use strict";var s=i("045d"),n=i.n(s);n.a},db14:function(t,e,i){t.exports=i.p+"img/dotWh.f44f27f1.png"},ec7e:function(t,e,i){t.exports=i.p+"img/pause.1e68d2c4.svg"},eef4:function(t,e,i){t.exports=i.p+"img/add.1eebf3ab.svg"}});
//# sourceMappingURL=app.3b7c4f5f.js.map