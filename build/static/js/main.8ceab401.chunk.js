(window["webpackJsonp@fseehawer/react-circular-slider"]=window["webpackJsonp@fseehawer/react-circular-slider"]||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(5),l=a.n(n),c=(a(13),a(1)),i=a(6),s=a(7),u=function(e){var t=e.isDragging,a=e.knobPosition,r=e.knobColor,n=e.knobRadius,l=void 0===n?12:n,i=e.knobSize,s=void 0===i?36:i,u=e.onMouseDown,d=c.a.create({knob:{position:"absolute",left:"-".concat(s/2,"px"),top:"-".concat(s/2,"px"),cursor:"grab",zIndex:3},dragging:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{animationDuration:"1500ms",transformOrigin:"50% 50%",animationIterationCount:"infinite",animationTimingFunction:"ease-out",animationName:[{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.8)"},"100%":{transform:"scale(1)"}}]}});return o.a.createElement("div",{style:{transform:"translate(".concat(a.x,"px, ").concat(a.y,"px)")},className:Object(c.b)(d.knob,t&&d.dragging),onMouseDown:u,onTouchStart:u},o.a.createElement("svg",{width:"".concat(s,"px"),height:"".concat(s,"px"),viewBox:"0 0 ".concat(s," ").concat(s)},o.a.createElement("circle",{className:Object(c.b)(d.animation,t&&d.pause),fill:r,fillOpacity:"0.2",stroke:"none",cx:s/2,cy:s/2,r:s/2}),o.a.createElement("circle",{fill:r,stroke:"none",cx:s/2,cy:s/2,r:l}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:"8",height:"1"})))},d=function(e){var t=e.labelColor,a=e.labelFontSize,r=e.labelValueFontSize,n=e.labelVerticalOffset,l=e.label,i=e.value,s=c.a.create({labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(t),zIndex:1},value:{fontSize:"".concat(r),marginBottom:"calc(".concat(n,")")}});return o.a.createElement("div",{className:Object(c.b)(s.labels)},o.a.createElement("div",{style:{fontSize:a}},l),o.a.createElement("div",{className:Object(c.b)(s.value)},o.a.createElement("code",null,i)))},p=function(e){var t=e.width,a=e.label,r=e.strokeDasharray,n=e.strokeDashoffset,l=e.progressColorFrom,i=e.progressColorTo,s=e.trackColor,u=e.progressSize,d=e.trackSize,p=e.svgFullPath,b=e.progressLineCap,m=c.a.create({svg:{position:"relative",zIndex:2}});return o.a.createElement("svg",{width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 ".concat(t," ").concat(t),overflow:"visible",className:Object(c.b)(m.svg)},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:a,x1:"100%",x2:"0%"},o.a.createElement("stop",{offset:"0%",stopColor:l}),o.a.createElement("stop",{offset:"100%",stopColor:i}))),o.a.createElement("circle",{strokeWidth:d,fill:"none",stroke:s,cx:t/2,cy:t/2,r:t/2}),o.a.createElement("path",{ref:p,strokeDasharray:r,strokeDashoffset:n,strokeWidth:u,strokeLinecap:"round"!==b?"butt":"round",fill:"none",stroke:"url(#".concat(a,")"),d:"\n                        M ".concat(t/2,", ").concat(t/2,"\n                        m 0, -").concat(t/2,"\n                        a ").concat(t/2,",").concat(t/2," 0 0,1 0,").concat(t,"\n                        a -").concat(t/2,",-").concat(t/2," 0 0,1 0,-").concat(t,"\n                    ")}))};function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g="ontouchstart"in window,f={DOWN:g?"touchstart":"mousedown",UP:g?"touchend":"mouseup",MOVE:g?"touchmove":"mousemove"},h=function(e){var t=e.label,a=void 0===t?"DEGREES":t,n=e.width,l=void 0===n?280:n,i=e.knobColor,b=void 0===i?"#4e63ea":i,g=e.labelColor,h=void 0===g?"#272b77":g,v=e.labelFontSize,E=void 0===v?"1rem":v,C=e.labelValueFontSize,O=void 0===C?"4rem":C,k=e.labelVerticalOffset,w=void 0===k?"2rem":k,F=e.progressColorFrom,y=void 0===F?"#80C3F3":F,S=e.progressColorTo,x=void 0===S?"#4990E2":S,j=e.progressSize,D=void 0===j?6:j,z=e.trackColor,P=void 0===z?"#DDDEFB":z,M=e.trackSize,A=void 0===M?6:M,N=e.data,I=void 0===N?[]:N,L=e.placeKnobAtIndex,T=void 0===L?0:L,V=e.progressLineCap,B=void 0===V?"round":V,R=e.onChange,K=void 0===R?function(e){}:R,U=Object(r.useState)({mounted:!1,isDragging:!1,width:l,radius:l/2,label:0,radians:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0}),W=Object(s.a)(U,2),X=W[0],Y=W[1],G=Object(r.useRef)(null),J=Object(r.useRef)(null),H=Object(r.useCallback)((function(){var e=G.current.getBoundingClientRect(),t=window.pageXOffset||document.documentElement.scrollLeft,a=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+a,left:e.left+t}}),[]),Q=Object(r.useCallback)((function(e){var t=X.radius,a=e+1.571,r=(a>0?a:2*Math.PI+a)*(360/(2*Math.PI)),o=X.dashFullArray-r/360*X.dashFullArray,n=0;if(I.length){var l=Math.ceil(360/I.length);n=Math.floor(r/l)}var c=I.length?I[n]:Math.round(r);Y((function(a){return m({},a,{dashFullOffset:o,label:c,knob:{x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}})})),K(c)}),[X.dashFullArray,X.radius,I,1.571,K]),Z=Object(r.useCallback)((function(e){Y((function(e){return m({},e,{isDragging:!0})}))}),[]),q=Object(r.useCallback)((function(e){if(e.preventDefault(),X.isDragging){var t;"touchmove"===e.type&&(t=e.changedTouches[0]);var a=("touchmove"===e.type?t.pageX:e.pageX)-(H().left+X.radius),r=("touchmove"===e.type?t.pageY:e.pageY)-(H().top+X.radius),o=Math.atan2(r,a);Q(o)}}),[X.isDragging,X.radius,Q,H]),$=function(e){Y((function(e){return m({},e,{isDragging:!1})}))};Object(r.useEffect)((function(){var e=J.current.getTotalLength();Y((function(t){return m({},t,{mounted:!0,dashFullArray:e})}))}),[]),Object(r.useEffect)((function(){var e=I.length,t=T>e-1?e:T;if(t&&e){var a=t*Math.ceil(360/e)*Math.PI/180-1.571;return Q(a)}return Q(-1.566)}),[X.dashFullArray,T,I.length,1.571]),Object(r.useEffect)((function(){if(X.isDragging)return window.addEventListener(f.MOVE,q,{passive:!1}),window.addEventListener(f.UP,$,{passive:!1}),function(){window.removeEventListener(f.MOVE,q),window.removeEventListener(f.UP,$)}}),[X.isDragging,q]);var _=c.a.create({circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in"},mounted:{opacity:1}});return o.a.createElement("div",{className:Object(c.b)(_.circularSlider,X.mounted&&_.mounted),ref:G},o.a.createElement(p,{width:l,label:a,strokeDasharray:X.dashFullArray,strokeDashoffset:X.dashFullOffset,progressColorFrom:y,progressColorTo:x,trackColor:P,progressSize:D,trackSize:A,svgFullPath:J,progressLineCap:B}),o.a.createElement(u,{isDragging:X.isDragging,knobPosition:{x:X.knob.x,y:X.knob.y},knobColor:b,onMouseDown:Z}),o.a.createElement(d,{labelColor:h,labelFontSize:E,labelVerticalOffset:w,labelValueFontSize:O,label:a,value:"".concat(X.label)}))},v=function(){var e=c.a.create({wrapper:{margin:"2rem"},h2:{borderBottom:"1px solid #eeeeee",paddingBottom:"0.5rem"},h3:{margin:"2rem 0"}});return o.a.createElement("div",{className:Object(c.b)(e.wrapper)},o.a.createElement("h2",{className:Object(c.b)(e.h2)},"react-circular-slider"),o.a.createElement("h3",{className:Object(c.b)(e.h3)},"example 1:"),o.a.createElement("pre",null,"<CircularSlider\n    onChange={onSliderChange}\n/>"),o.a.createElement("p",null,"\xa0"),o.a.createElement(h,{onChange:function(e){console.log(e)}}),o.a.createElement("p",null,"\xa0"),o.a.createElement("h3",{className:Object(c.b)(e.h3)},"example 2:"),o.a.createElement("pre",null,'<CircularSlider\n    label="savings"\n    data=["1\u20ac","2\u20ac",...]\n    placeKnobAtIndex={10}\n    labelColor="#005a58"\n    knobColor="#005a58"\n    progressColorFrom="#00bfbd"\n    progressColorTo="#005a58"\n    progressSize={24}\n    trackColor="#eeeeee"\n    trackSize={24}\n/>'),o.a.createElement("p",null,"\xa0"),o.a.createElement(h,{label:"savings",labelColor:"#005a58",knobColor:"#005a58",progressColorFrom:"#00bfbd",progressColorTo:"#009c9a",progressSize:24,trackColor:"#eeeeee",trackSize:24,placeKnobAtIndex:10,data:["1\u20ac","2\u20ac","3\u20ac","4\u20ac","5\u20ac","6\u20ac","7\u20ac","8\u20ac","9\u20ac","10\u20ac","20\u20ac","30\u20ac","40\u20ac","50\u20ac","60\u20ac","70\u20ac","80\u20ac","90\u20ac","100\u20ac","200\u20ac","300\u20ac","400\u20ac","500\u20ac","600\u20ac","700\u20ac","800\u20ac","900\u20ac","1000\u20ac","2000\u20ac","3000\u20ac","4000\u20ac","5000\u20ac","6000\u20ac","7000\u20ac","8000\u20ac","9000\u20ac","10000\u20ac"]}),o.a.createElement("p",null,"\xa0"),o.a.createElement("h3",{className:Object(c.b)(e.h3)},"example 3:"),o.a.createElement("pre",null,'<CircularSlider\n    label="Alphabet"\n    width={200}\n    data=["A","B","C",...]\n    labelColor="#212121"\n    labelValueFontSize="6rem"\n    knobColor="#212121"\n    progressLineCap="flat"\n    progressColorFrom="#ff8500"\n    progressColorTo="#a15400"\n    progressSize={8}\n    trackColor="#eeeeee"\n    trackSize={4}\n/>'),o.a.createElement("p",null,"\xa0"),o.a.createElement(h,{label:"Alphabet",width:250,labelColor:"#212121",labelValueFontSize:"6rem",knobColor:"#212121",progressColorFrom:"#ff8500",progressColorTo:"#a15400",progressSize:8,trackColor:"#eeeeee",trackSize:4,progressLineCap:"flat",data:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}),o.a.createElement("p",null,"\xa0"))};l.a.render(o.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.8ceab401.chunk.js.map