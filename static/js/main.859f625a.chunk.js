(this.webpackJsonpeulaqunesykaxm=this.webpackJsonpeulaqunesykaxm||[]).push([[0],{41:function(l,n,u){l.exports=u(52)},46:function(l,n,u){},47:function(l,n,u){},52:function(l,n,u){"use strict";u.r(n);var e=u(0),t=u.n(e),a=u(6),r=u.n(a),c=(u(46),u(23)),s=u(30),o=u(31),i=u(34),m=u(33),p=(u(47),u(82)),E=u(81),b=u(80),h=u(78),d=u(79),v=u(77),k=function(l){Object(i.a)(u,l);var n=Object(m.a)(u);function u(){return Object(s.a)(this,u),n.apply(this,arguments)}return Object(o.a)(u,[{key:"render",value:function(){return null===this.props.value?e.createElement("button",{className:"square-null",onClick:this.props.onClick}):"string"===typeof this.props.value?e.createElement("button",{className:"square"},this.props.value):this.props.value<=.1?e.createElement("button",{className:"square-low",onClick:this.props.onClick},"\xd7"):this.props.value<.4?e.createElement("button",{className:"square-low",onClick:this.props.onClick}):this.props.value<=.6?e.createElement("button",{className:"square-normal",onClick:this.props.onClick}):this.props.value<.9?e.createElement("button",{className:"square-high",onClick:this.props.onClick}):this.props.value<=1?e.createElement("button",{className:"square-high",onClick:this.props.onClick},"\u25cb"):e.createElement("button",{className:"square"},this.props.value)}}]),u}(e.Component);var f=function(){var l=e.useState(!1),n=Object(c.a)(l,2),u=n[0],t=n[1],a=e.useState(""),r=Object(c.a)(a,2),s=r[0],o=r[1],i=e.useState(""),m=Object(c.a)(i,2),f=m[0],C=m[1],g=e.useState(e.createElement("span",null)),q=Object(c.a)(g,2),y=q[0],N=q[1],j=function(){t(!1)},O=function(l){return e.createElement(k,{value:l})},w=["i","y","u","o","e","a","p","fh","f","t","c","x","k","q","h","r","z","m","n","r","l","j","w","b","vh","v","d","s","g","dz","ph","ts","ch","ng","sh","th","dh","kh","rkh","rl"],S=[[0,.5,.25,.03,.01,.1,.07,null,.1,.13,.04,.17,null,null,.33,.01,null,.03,.17,.01,.07,.02,null,null,null,.25,0,0,null,null,null,null,null,null,.33,null,.33,null,null,.33],[.2,null,null,.46,.04,.6,null,null,null,null,.33,null,.25,null,null,.06,null,.2,null,.06,.2,.11,null,null,null,null,.05,.08,null,null,null,null,null,null,null,null,null,null,null,null],[.07,null,.33,.06,.03,.17,.25,null,.14,.09,.11,.13,.14,null,null,.07,.33,.03,.2,.07,.14,.05,null,.33,null,null,.04,.01,.33,null,.17,null,null,null,null,null,null,null,null,null],[.05,null,null,.18,.52,.67,.07,null,null,.13,.03,null,null,null,null,.03,null,.09,.33,.03,.03,.44,null,.13,null,null,.04,.01,null,null,null,null,null,null,null,null,null,null,null,null],[.02,null,.09,.21,.1,.1,.1,null,.25,.02,.01,.02,null,null,.33,0,null,.04,.03,0,.01,.01,.33,.33,null,.33,.01,0,.17,null,null,null,null,null,.33,null,null,null,null,.2],[.2,.5,.15,.16,.22,.47,.11,null,.13,.02,.02,.03,.02,null,.33,.01,.33,.02,.04,.01,.02,.01,.33,.14,null,.2,0,0,null,null,null,null,null,null,.33,null,null,null,null,null],[.08,null,.25,.05,.02,.17,null,null,null,.33,.6,.33,null,null,null,.25,.33,null,null,.25,.7,.25,.33,null,null,null,.75,.78,null,null,null,null,null,null,.67,null,null,null,null,null],[.67,null,null,null,.33,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[.25,.14,.25,.02,.01,.17,null,null,.67,null,.75,.75,null,null,null,.13,null,null,.5,.13,null,null,null,null,null,null,.5,.88,null,null,null,null,null,null,null,null,null,null,null,null],[.03,null,.2,0,.01,.03,.67,null,.67,.88,.67,.75,null,null,.89,.22,.67,.67,.95,.22,.76,.04,null,.75,null,null,.91,.84,null,null,null,null,null,null,.67,null,null,null,null,.67],[.25,null,null,.01,.06,.2,null,null,.17,.2,null,.83,.33,.33,.33,.5,null,.33,.33,.5,.67,.33,null,null,null,.33,.75,null,null,null,null,null,.33,null,null,null,null,null,null,null],[.06,null,.03,.01,.01,.08,.75,null,.25,.67,.86,.67,null,null,.67,null,null,null,null,null,.78,.18,null,.67,null,null,.86,.93,null,null,null,null,null,null,null,null,null,null,null,null],[.01,null,.13,.01,.01,.13,null,null,.8,.67,.75,null,null,null,null,.73,null,.67,.86,.73,.56,.43,null,.25,null,.67,.96,.9,null,null,null,null,null,null,null,null,null,null,null,null],[.33,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[.33,null,null,.07,.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[.19,.17,null,.6,.22,.07,.2,.33,.03,0,.2,.17,.17,null,.67,.13,.33,.11,.01,.13,.01,.03,null,.33,null,.04,.08,.02,.07,null,null,null,null,null,null,null,null,null,null,null],[.13,null,null,.05,.02,.33,.67,null,null,null,.67,null,.67,null,null,null,null,null,.04,null,null,.17,null,null,null,null,null,.67,null,null,null,null,null,null,null,null,null,null,null,null],[.24,.14,.2,.08,.04,.08,null,null,null,.5,.81,null,null,null,null,.55,null,.5,.75,.55,.67,.29,null,null,null,null,.99,.97,null,.33,null,null,null,null,.67,null,null,null,null,null],[.01,.33,.04,0,.01,.06,.42,null,.2,.01,.78,.6,.33,.1,null,.91,null,.83,.67,.91,.73,.51,null,.5,null,.67,.56,.75,null,null,null,null,null,null,.67,null,null,null,null,null],[.19,.17,null,.6,.22,.07,.2,.33,.03,0,.2,.17,.17,null,.67,.13,.33,.11,.01,.13,.01,.03,null,.33,null,.04,.08,.02,.07,null,null,null,null,null,null,null,null,null,null,null],[.01,.25,.11,0,0,.01,.75,null,.33,.18,.91,.6,.17,.33,null,.81,null,.02,.67,.81,.57,.05,null,.67,null,.33,.46,.88,null,null,null,null,null,null,null,null,null,null,null,null],[.14,null,.07,.02,.03,.2,null,null,null,null,.8,null,null,null,null,.25,null,null,.75,.25,.56,.5,.67,null,null,null,.71,.55,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[.08,.33,null,.03,.02,.04,null,null,.67,null,null,null,null,null,null,.14,null,null,null,.14,.83,.17,null,null,null,null,.3,.8,null,null,null,null,null,null,null,null,null,null,null,null],[.07,null,null,.02,.02,.11,null,null,null,.67,.75,null,null,null,null,.33,null,null,.67,.33,.75,.6,.67,null,null,null,.7,.68,null,null,null,null,null,null,.75,null,null,null,null,null],[.11,.25,.13,.01,.01,.1,.44,null,.67,.23,.82,.87,null,null,null,.77,null,.46,.6,.77,.67,.02,null,.07,null,.33,.9,.9,null,null,null,null,null,null,null,null,null,null,null,null],[.05,null,.33,.08,.04,.2,null,null,null,.67,.83,.67,null,null,null,.25,null,.33,.2,.25,.17,null,null,.67,null,null,.71,.7,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,.33,.33,.01,null,null,null,null,.67,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,.67,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[.33,null,null,.25,.33,.25,null,null,null,null,null,.5,null,null,null,null,null,null,null,null,.5,null,null,null,null,null,.5,.69,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,.33,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,.33,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,.33,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,.67,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[.12,null,.33,.05,.04,.11,null,null,.75,null,null,null,null,null,null,null,null,null,.67,null,.8,.75,null,null,null,.67,.38,.58,null,null,null,null,null,null,null,null,null,null,null,null]];return e.createElement("div",null,e.createElement("div",null,e.createElement("div",{className:"board-row"},O(" "),w.map((function(l){return O(l)}))),w.map((function(l,n){return e.createElement("div",{className:"board-row"},O(l),S[n].map((function(n,u){return function(l,n,u,t){return e.createElement(k,{value:l,onClick:t})}(n,0,w[u],(function(){t(!0),o(l),C(w[u]),N(function(l){if(null===l)return e.createElement("span",null,e.createElement("b",null,"\u8cc7\u6599\u4e0d\u8db3\u3067\u3059\u3002"));var n="\u30b3\u30fc\u30d1\u30b9\u306e\u60c5\u5831\u306b\u3088\u308b\u3068\u3001\u3053\u306e\u7d44\u307f\u5408\u308f\u305b\u306e\u7de9\u885d\u97f3\u306e\u51fa\u73fe\u7387\u306f"+Math.round(100*l).toString()+"%\u3067\u3059\u3002";return l<=.1?e.createElement("span",null,n,e.createElement("br",null),"\u3088\u3063\u3066\u3001\u7de9\u885d\u97f3\u306f",e.createElement("b",null,"\u4ed8\u3051\u306a\u3044\u3079\u304d"),"\u3067\u3059\u3002"):l<.4?e.createElement("span",null,n,e.createElement("br",null),"\u3088\u3063\u3066\u3001\u7de9\u885d\u97f3\u306f",e.createElement("b",null,"\u4ed8\u3051\u306a\u3044\u307b\u3046\u304c\u3044\u3044"),"\u3067\u3059\u3002"):l<=.6?e.createElement("span",null,n,e.createElement("br",null),"\u3088\u3063\u3066\u3001\u7de9\u885d\u97f3\u306f",e.createElement("b",null,"\u4ed8\u3051\u3066\u3082\u4ed8\u3051\u306a\u304f\u3066\u3082\u3044\u3044"),"\u3067\u3059\u3002"):l<.9?e.createElement("span",null,n,e.createElement("br",null),"\u3088\u3063\u3066\u3001\u7de9\u885d\u97f3\u306f",e.createElement("b",null,"\u4ed8\u3051\u305f\u307b\u3046\u304c\u3044\u3044"),"\u3067\u3059\u3002"):l<=1?e.createElement("span",null,n,e.createElement("br",null),"\u3088\u3063\u3066\u3001\u7de9\u885d\u97f3\u306f",e.createElement("b",null,"\u4ed8\u3051\u308b\u3079\u304d"),"\u3067\u3059\u3002"):e.createElement("span",null,e.createElement("b",null,"\u8cc7\u6599\u4e0d\u8db3\u3067\u3059\u3002"))}(n))}))})))}))),e.createElement(E.a,{open:u,onClose:j,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},e.createElement(v.a,{id:"alert-dialog-title"},s+" + "+f),e.createElement(h.a,null,e.createElement(d.a,{id:"alert-dialog-description"},y)),e.createElement(b.a,null,e.createElement(p.a,{onClick:j,color:"primary",autoFocus:!0},"OK"))))};r.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement("h1",null,"\u30ea\u30d1\u30e9\u30a4\u30f3\u8a9e\u306e\u7de9\u885d\u6bcd\u97f3\u306b\u3064\u3044\u3066"),t.a.createElement(f,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.859f625a.chunk.js.map