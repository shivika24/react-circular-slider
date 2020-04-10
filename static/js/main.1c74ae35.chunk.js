(window["webpackJsonp@fseehawer/react-circular-slider"]=window["webpackJsonp@fseehawer/react-circular-slider"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=(a(11),a(1)),c=a(2),s=a(5),d=function(e,t){switch(t.type){case"init":case"setKnobPosition":return Object(i.a)({},e,{},t.payload);case"onMouseDown":case"onMouseUp":case"setInitialKnobPosition":return Object(i.a)({},e,{},t.payload);default:throw new Error}},u=null;"undefined"!==typeof window&&(u=window);var p=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u,r=Object(n.useRef)(null);Object(n.useEffect)((function(){r.current=t}),[t]),Object(n.useEffect)((function(){if(null!==u&&(a&&a.addEventListener)){var t=function(e){return r.current(e)};return a.addEventListener(e,t,{passive:!1}),function(){a.removeEventListener(e,t)}}}),[e,a])},f=(a(12),function(e){var t=e.isDragging,a=e.knobPosition,o=e.knobColor,l=e.knobRadius,c=void 0===l?12:l,s=e.knobSize,d=void 0===s?36:s,u=e.onMouseDown,p=e.trackSize,f=e.children,m={knob:{position:"absolute",left:"-".concat(d/2-p/2,"px"),top:"-".concat(d/2-p/2,"px"),cursor:"grab",zIndex:3},dragging:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{transformOrigin:"50% 50%",animationTimingFunction:"ease-out",animation:"pulse 1500ms infinite"}};return r.a.createElement("div",{style:Object(i.a)({transform:"translate(".concat(a.x,"px, ").concat(a.y,"px)")},m.knob,{},t&&m.dragging),onMouseDown:u,onTouchStart:u},r.a.createElement("svg",{width:"".concat(d,"px"),height:"".concat(d,"px"),viewBox:"0 0 ".concat(d," ").concat(d)},r.a.createElement("circle",{style:Object(i.a)({},m.animation,{},t&&m.pause),fill:o,fillOpacity:"0.2",stroke:"none",cx:d/2,cy:d/2,r:d/2}),r.a.createElement("circle",{fill:o,stroke:"none",cx:d/2,cy:d/2,r:c}),f||r.a.createElement(n.Fragment,null,r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:"8",height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:"8",height:"1"}),r.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:"8",height:"1"}))))}),m=function(e){var t=e.labelColor,a=e.labelBottom,n=e.labelFontSize,o=e.valueFontSize,l=e.appendToValue,c=e.prependToValue,s=e.verticalOffset,d=e.hideLabelValue,u=e.label,p=e.value,f={labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(t),userSelect:"none",zIndex:1},value:{fontSize:"".concat(o),position:"relative"},bottomMargin:{marginBottom:"calc(".concat(s,")")},appended:{position:"absolute",right:"0",top:"0",transform:"translate(100%, 0)"},prepended:{position:"absolute",left:"0",top:"0",transform:"translate(-100%, 0)"},hide:{display:"none"}};return r.a.createElement("div",{style:Object(i.a)({},f.labels,{},d&&f.hide)},a||r.a.createElement("div",{style:{fontSize:n}},u),r.a.createElement("div",{style:Object(i.a)({},f.value,{},!a&&f.bottomMargin)},r.a.createElement("code",null,r.a.createElement("span",{style:f.prepended},c),p,r.a.createElement("span",{style:f.appended},l))),a&&r.a.createElement("div",{style:{fontSize:n}},u))},g=function(e){var t=e.width,a=e.label,n=e.direction,o=e.strokeDasharray,l=e.strokeDashoffset,i=e.progressColorFrom,c=e.progressColorTo,s=e.trackColor,d=e.progressSize,u=e.trackSize,p=e.svgFullPath,f=e.radiansOffset,m=e.progressLineCap,g={svg:{position:"relative",zIndex:2},path:{transform:"rotate(".concat(f,"rad) ").concat(-1===n?"scale(-1, 1)":"scale(1, 1)"),transformOrigin:"center center"}},h=u/2,b=t/2-h;return r.a.createElement("svg",{width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 ".concat(t," ").concat(t),overflow:"visible",style:g.svg},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:a,x1:"100%",x2:"0%"},r.a.createElement("stop",{offset:"0%",stopColor:i}),r.a.createElement("stop",{offset:"100%",stopColor:c}))),r.a.createElement("circle",{strokeWidth:u,fill:"none",stroke:s,cx:t/2,cy:t/2,r:b}),r.a.createElement("path",{style:g.path,ref:p,strokeDasharray:o,strokeDashoffset:l,strokeWidth:d,strokeLinecap:"round"!==m?"butt":"round",fill:"none",stroke:"url(#".concat(a,")"),d:"\n                        M ".concat(t/2,", ").concat(t/2,"\n                        m 0, -").concat(t/2-h,"\n                        a ").concat(t/2-h,",").concat(t/2-h," 0 0,1 0,").concat(t-2*h,"\n                        a -").concat(t/2-h,",-").concat(t/2-h," 0 0,1 0,-").concat(t-2*h,"\n                    ")}))},h={pageXOffset:0,pageYOffset:0},b={documentElement:{scrollLeft:0,scrollTop:0}};"undefined"!==typeof window&&(h=window,b=document);var v="ontouchstart"in h,y={DOWN:v?"touchstart":"mousedown",UP:v?"touchend":"mouseup",MOVE:v?"touchmove":"mousemove"},E={top:Math.PI/2,right:0,bottom:-Math.PI/2,left:-Math.PI},k=function(e){return e<0?-1:1},x=function(e){return e*Math.PI/180},w=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a},C=function(e){var t=e.current.getBoundingClientRect(),a=h.pageXOffset||b.documentElement.scrollLeft,n=h.pageYOffset||b.documentElement.scrollTop;return{top:t.top+n,left:t.left+a}},O={circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in"},mounted:{opacity:1}},F=function(e){var t=e.label,a=void 0===t?"ANGLE":t,o=e.width,l=void 0===o?280:o,u=e.direction,h=void 0===u?1:u,b=e.min,v=void 0===b?0:b,F=e.max,S=void 0===F?360:F,z=e.knobColor,j=void 0===z?"#4e63ea":z,P=e.knobPosition,D=void 0===P?"top":P,M=e.labelColor,T=void 0===M?"#272b77":M,I=e.labelBottom,L=void 0!==I&&I,R=e.labelFontSize,V=void 0===R?"1rem":R,B=e.valueFontSize,A=void 0===B?"3rem":B,N=e.appendToValue,K=void 0===N?"":N,U=e.prependToValue,X=void 0===U?"":U,Y=e.verticalOffset,W=void 0===Y?"1.5rem":Y,G=e.hideLabelValue,H=void 0!==G&&G,J=e.progressColorFrom,$=void 0===J?"#80C3F3":J,Q=e.progressColorTo,Z=void 0===Q?"#4990E2":Q,_=e.progressSize,q=void 0===_?8:_,ee=e.trackColor,te=void 0===ee?"#DDDEFB":ee,ae=e.trackSize,ne=void 0===ae?8:ae,re=e.data,oe=void 0===re?[]:re,le=e.dataIndex,ie=void 0===le?0:le,ce=e.progressLineCap,se=void 0===ce?"round":ce,de=e.children,ue=e.onChange,pe=void 0===ue?function(e){}:ue,fe={mounted:!1,isDragging:!1,width:l,radius:l/2,knobPosition:D,label:0,data:oe,radians:0,offset:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0},me=Object(n.useReducer)(d,fe),ge=Object(s.a)(me,2),he=ge[0],be=ge[1],ve=Object(n.useRef)(null),ye=Object(n.useRef)(null),Ee=Object(n.useCallback)((function(e){var t=he.radius-ne/2,a=e+E[D],n=(a>0?a:2*Math.PI+a)*(360/(2*Math.PI)),r=n/360*he.dashFullArray;n=-1===k(h)?360-n:n;var o=(he.data.length-1)/360,l=Math.round(n*o);he.data[l]!==he.label&&pe(he.data[l]),be({type:"setKnobPosition",payload:{dashFullOffset:-1===k(h)?r:he.dashFullArray-r,label:he.data[l],knob:{x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}}})}),[he.dashFullArray,he.radius,he.data,he.label,D,h,pe]),ke=Object(n.useCallback)((function(e){if(he.isDragging){var t;e.preventDefault(),"touchmove"===e.type&&(t=e.changedTouches[0]);var a=("touchmove"===e.type?t.pageX:e.pageX)-(C(ve).left+he.radius),n=("touchmove"===e.type?t.pageY:e.pageY)-(C(ve).top+he.radius),r=Math.atan2(n,a);Ee(r)}}),[he.isDragging,he.radius,Ee]);return Object(n.useEffect)((function(){be({type:"init",payload:{mounted:!0,data:he.data.length?Object(c.a)(he.data):Object(c.a)(w(v,S)),dashFullArray:ye.current.getTotalLength?ye.current.getTotalLength():0}})}),[S,v]),Object(n.useEffect)((function(){var e=he.data.length,t=ie>e-1?e-1:ie;if(e){var a=360/e,n=x(a)/2;if(be({type:"setInitialKnobPosition",payload:{radians:Math.PI/2-E[he.knobPosition],offset:n}}),t){var r=k(h)*t*a,o=x(r)-E[he.knobPosition];return Ee(o+n*k(h))}Ee(-E[he.knobPosition]*k(h)+n*k(h))}}),[he.dashFullArray,he.knobPosition,he.data.length,ie,h]),p(y.MOVE,ke),p(y.UP,(function(){be({type:"onMouseUp",payload:{isDragging:!1}})})),r.a.createElement("div",{style:Object(i.a)({},O.circularSlider,{},he.mounted&&O.mounted),ref:ve},r.a.createElement(g,{width:l,label:a.split(" ").join(""),direction:h,strokeDasharray:he.dashFullArray,strokeDashoffset:he.dashFullOffset,svgFullPath:ye,progressSize:q,progressColorFrom:$,progressColorTo:Z,progressLineCap:se,trackColor:te,trackSize:ne,radiansOffset:he.radians}),r.a.createElement(f,{isDragging:he.isDragging,knobPosition:{x:he.knob.x,y:he.knob.y},knobColor:j,trackSize:ne,onMouseDown:function(){be({type:"onMouseDown",payload:{isDragging:!0}})}},de),r.a.createElement(m,{label:a,labelColor:T,labelBottom:L,labelFontSize:V,verticalOffset:W,valueFontSize:A,appendToValue:K,prependToValue:X,hideLabelValue:H,value:"".concat(he.label)}))};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var j=r.a.createElement("g",null,r.a.createElement("path",{fill:"#ffffff",d:"M495.9,990c-3.9-5.6-7.2-11.6-11.7-16.6c-40.1-44.6-80.4-89-120.6-133.6c-4.6-5-8.7-10.4-15.9-19c33.1,0,62.5,0,93.1,0c0-88.9,0-175.3,0-262.9c-86.8,0-173.1,0-261.6,0c0,30.6,0,60.1,0,94.9C120.9,600.2,66.3,550.9,10,500.1c55.9-50.6,110.5-100,168.6-152.5c0,32.5,0,60.7,0,90.2c88.6,0,174.9,0,262.3,0c0-85.6,0-170.8,0-258.4c-30.1,0-59.6,0-94.4,0C399.5,120.8,448.7,66.3,499.5,10c50.7,56.2,100,110.8,152.8,169.2c-33.8,0-62.6,0-92.6,0c0,87.6,0,172.6,0,258.9c86.6,0,172.4,0,260.3,0c0-29.1,0-57.5,0-91.8c59,53.3,113.9,102.9,170.1,153.8c-56.2,50.7-110.8,100.1-169,152.5c0-33.9,0-63.3,0-94.3c-88,0-173.7,0-261.4,0c-0.4,4.9-1.3,10.4-1.3,15.8c-0.1,75.9,0.4,151.9-0.5,227.8c-0.2,16.2,5.8,19.3,20,18.7c22.9-0.9,45.9-0.2,74.9-0.2C599.7,879.2,549.7,934.6,499.8,990C498.5,990,497.2,990,495.9,990z"})),P=function(e){var t=e.svgRef,a=e.title,n=z(e,["svgRef","title"]);return r.a.createElement("svg",S({x:"0px",y:"0px",viewBox:"0 0 1000 1000",enableBackground:"new 0 0 1000 1000",xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,j)},D=r.a.forwardRef((function(e,t){return r.a.createElement(P,S({svgRef:t},e))}));a.p;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var I=function(e){var t=e.svgRef,a=e.title,n=T(e,["svgRef","title"]);return r.a.createElement("svg",M({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 473.931 473.931",style:{enableBackground:"new 0 0 473.931 473.931"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("circle",{style:{fill:"#FFC10E"},cx:236.966,cy:236.966,r:236.966}),r.a.createElement("path",{style:{fill:"#333333"},d:"M81.391,237.127c0,85.911,69.649,155.56,155.56,155.56c85.915,0,155.567-69.649,155.567-155.56 H81.391z"}),r.a.createElement("path",{style:{fill:"#CA2027"},d:"M150.452,298.705c0,47.771,38.731,86.498,86.498,86.498c47.775,0,86.502-38.731,86.502-86.498 H150.452z"}),r.a.createElement("g",null,r.a.createElement("circle",{style:{fill:"#333333"},cx:164.937,cy:155.231,r:37.216}),r.a.createElement("circle",{style:{fill:"#333333"},cx:305.664,cy:155.231,r:37.216})))},L=r.a.forwardRef((function(e,t){return r.a.createElement(I,M({svgRef:t},e))})),R=(a.p,function(){var e={wrapper:{margin:"2rem"},h3:{margin:"3rem 0 2rem 0"},pre:{fontSize:"0.9rem",borderRadius:"0.3rem",backgroundColor:"#eeeeee",padding:"0.5rem"},slider:{padding:"0 0 0.5rem 0"}};return r.a.createElement("div",{style:e.wrapper},r.a.createElement("h3",{style:e.h3},'Anticlockwise rotation with the knob positioned to the right and "\xb0" appended to the value:'),r.a.createElement("div",{style:e.slider},r.a.createElement(F,{direction:-1,knobPosition:"right",appendToValue:"\xb0",valueFontSize:"4rem"})),r.a.createElement("pre",{className:e.pre},'<CircularSlider\n    min={0}\n    max={360}\n    direction={-1}\n    knobPosition="right"\n    appendToValue="\xb0"\n    valueFontSize="4rem"\n/>'),r.a.createElement("h3",{className:e.h3},'An initial value of 20, "$" prepended and "K" appended to the value with a custom knob icon and the label on the bottom:'),r.a.createElement("div",{className:e.slider},r.a.createElement(F,{label:"savings account",min:0,max:100,dataIndex:20,prependToValue:"$",appendToValue:"K",labelColor:"#005a58",labelBottom:!0,knobColor:"#005a58",progressColorFrom:"#00bfbd",progressColorTo:"#009c9a",progressSize:24,trackColor:"#eeeeee",trackSize:24},r.a.createElement(D,{x:"9",y:"9",width:"18px",height:"18px"}))),r.a.createElement("pre",{className:e.pre},'import { ReactComponent as PowerIcon } from \'./assets/power.svg\';\n.\n.\n.\n<CircularSlider\n    label="savings"\n    min={0}\n    max={100}\n    dataIndex={20}\n    prependToValue="$"\n    appendToValue="K"\n    labelColor="#005a58"\n    labelBottom={true}\n    knobColor="#005a58"\n    progressColorFrom="#00bfbd"\n    progressColorTo="#005a58"\n    progressSize={24}\n    trackColor="#eeeeee"\n    trackSize={24}\n>\n    <DragIcon x="9" y="8" width="18px" height="18px" />\n</CircularSlider>'),r.a.createElement("h3",{className:e.h3},"A flat line cap with the track size smaller than the progress track size and a smiley knob:"),r.a.createElement("div",{className:e.slider},r.a.createElement(F,{label:"Alphabet",progressLineCap:"flat",dataIndex:1,width:250,labelColor:"#212121",valueFontSize:"6rem",verticalOffset:"1rem",knobColor:"#212121",progressColorFrom:"#ff8500",progressColorTo:"#a15400",progressSize:8,trackColor:"#eeeeee",trackSize:4,data:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")},r.a.createElement(L,{x:"9",y:"9",width:"18px",height:"18px"}))),r.a.createElement("pre",{className:e.pre},'\nimport { ReactComponent as EmojiIcon } from \'./assets/emoji.svg\';\n.\n.\n.\n<CircularSlider\n    width={200}\n    progressLineCap="flat"\n    dataIndex={1}\n    label="Alphabet"\n    data=["A","B","C"]//...\n    labelColor="#212121"\n    valueFontSize="6rem"\n    verticalOffset="1rem"\n    knobColor="#212121"\n    progressColorFrom="#ff8500"\n    progressColorTo="#a15400"\n    progressSize={8}\n    trackColor="#eeeeee"\n    trackSize={4}\n>\n    <EmojiIcon x="9" y="9" width="18px" height="18px" />\n</CircularSlider>'))});l.a.render(r.a.createElement(R,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.1c74ae35.chunk.js.map