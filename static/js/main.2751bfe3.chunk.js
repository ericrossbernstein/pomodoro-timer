(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),o=(a(9),a(1));function i(e){var t=Math.floor(e/60).toString().padStart(2,"0"),a=Math.round(e%60).toString().padStart(2,"0");return"".concat(t,":").concat(a)}var l=function(e){var t=e.timerState,a=e.onBreak,n=e.breakDuration,c=e.focusDuration;return t.stop?null:a?r.a.createElement("h2",{"data-testid":"session-title"},"On Break for ",i(n)," minutes"):r.a.createElement("h2",{"data-testid":"session-title"},"Focusing for ",i(c)," minutes")};var u=function(e){var t=e.timerState,a=e.remainingTime;return!t.stop&&r.a.createElement("p",{className:"lead","data-testid":"session-sub-title"},i(a)," remaining")};var m=function(e){return e.timerState.pause&&r.a.createElement("h3",null,"PAUSED")};var p=function(e){var t=e.timerState,a=e.progressPercent;return!t.stop&&r.a.createElement("div",{className:"progress",style:{height:"20px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":a,style:{width:"".concat(a,"%")}}))};var d=function(){var e,t={play:!1,pause:!1,stop:!0},a=Object(n.useState)(t),c=Object(o.a)(a,2),s=c[0],d=c[1],b=Object(n.useState)(!1),E=Object(o.a)(b,2),f=E[0],v=E[1],N=Object(n.useState)(1500),y=Object(o.a)(N,2),g=y[0],S=y[1],h=Object(n.useState)(300),O=Object(o.a)(h,2),j=O[0],k=O[1],w=Object(n.useState)(g),D=Object(o.a)(w,2),C=D[0],M=D[1],x=Object(n.useState)(0),A=Object(o.a)(x,2),B=A[0],P=A[1];function T(){d({play:!0,pause:!1,stop:!1})}function I(e){return Math.abs(e)>60?S((function(t){return t+e})):k((function(t){return t+e}))}return function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){0===C?function(){new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play(),M(f?g:j);v((function(e){return!e})),P(0)}():(M((function(e){return e-1})),function(){if(f){var e=Math.round(100*(j-C)/j);P(e)}else{var t=Math.round(100*(g-C)/g);P(t)}}())}),s.play?1e3:null),r.a.createElement("div",{className:"pomodoro"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-focus"},"Focus Duration: ",i(g)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-focus",onClick:function(){return I(-300)},disabled:s.play||300===g},r.a.createElement("span",{className:"oi oi-minus"})),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-focus",onClick:function(){return I(300)},disabled:s.play||3600===g},r.a.createElement("span",{className:"oi oi-plus"}))))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"float-right"},r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-break"},"Break Duration: ",i(j)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-break",onClick:function(){return I(-60)},disabled:s.play||60===j},r.a.createElement("span",{className:"oi oi-minus"})),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-break",onClick:function(){return I(60)},disabled:s.play||900===j},r.a.createElement("span",{className:"oi oi-plus"}))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group btn-group-lg mb-2",role:"group","aria-label":"Timer controls"},r.a.createElement("button",{type:"button",className:"btn btn-primary","data-testid":"play-pause",title:"Start or pause timer",onClick:function(){s.play?d({play:!1,pause:!0,stop:!1}):s.pause?T():s.stop&&(T(),M(f?j:g))}},r.a.createElement("span",{className:(e={oi:!0,"oi-media-play":!s.play,"oi-media-pause":s.play},Object.entries(e).reduce((function(e,t){var a=Object(o.a)(t,2),n=a[0],r=a[1];return e.concat(r?n:void 0)}),[]).filter((function(e){return void 0!==e})).join(" "))})),r.a.createElement("button",{type:"button",className:"btn btn-secondary",title:"Stop the session",disabled:!s.play,onClick:function(){d(t),v(!1),P(0),M(g)}},r.a.createElement("span",{className:"oi oi-media-stop"}))))),r.a.createElement("div",null,r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement(l,{timerState:s,onBreak:f,focusDuration:g,breakDuration:j}),r.a.createElement(u,{timerState:s,remainingTime:C}))),r.a.createElement("div",null,r.a.createElement(m,{timerState:s})),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement(p,{timerState:s,progressPercent:B})))))};var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header container"},r.a.createElement("h1",null,"Pomodoro Timer")),r.a.createElement("div",{className:"container"},r.a.createElement(d,null)))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.2751bfe3.chunk.js.map