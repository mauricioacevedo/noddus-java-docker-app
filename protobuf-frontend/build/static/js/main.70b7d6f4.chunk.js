(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);a(10),a(12);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=(a(19),a(2)),i=a(3),s=a(5),m=a(4),u=a(6),d=(a(21),a(1)),h=(a(23),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).saveProto=e.saveProto.bind(Object(d.a)(Object(d.a)(e))),e.state={status:"Ready!"},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"saveProto",value:function(e){var t=this;e.preventDefault();var a=e.target,n={},r=!0,l=!1,o=void 0;try{for(var c,i=a.elements[Symbol.iterator]();!(r=(c=i.next()).done);r=!0){var s=c.value;"BUTTON"!==s.tagName&&(n[s.name]=s.value)}}catch(u){l=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(l)throw o}}var m=n.host;""===m&&(m="localhost"),fetch("http://"+m+":8080/create",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){console.log(e),t.setState({status:e.status})}).catch(function(e){console.log(e),e=String(e),t.setState({status:e})})}},{key:"handleChange",value:function(e){this.setState(e.target.name=e.target.value)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{className:"container text-center",align:"center",onSubmit:this.saveProto},r.a.createElement("center",null,r.a.createElement("h1",null,"Protobuf Form")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row",align:"center"},r.a.createElement("label",{htmlFor:"id",value:!0},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Id: \xa0"),r.a.createElement("input",{type:"text",name:"id",id:"id"})),r.a.createElement("div",{className:"row",align:"center"},r.a.createElement("label",{htmlFor:"id"},"Name: \xa0"),r.a.createElement("input",{type:"text",name:"name",id:"name"})),r.a.createElement("div",{align:"center"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"status-text"}," ",this.state.status)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row",align:"center"},r.a.createElement("label",{htmlFor:"host"},"Host: \xa0"),r.a.createElement("input",{type:"text",name:"host",id:"host"})),r.a.createElement("div",{className:"row",align:"center"},r.a.createElement("label",{htmlFor:"note"},"Note: for a Docker Toolbox installation you must especify the VM IP address"))),r.a.createElement("footer",{className:"navbar-fixed-bottom footer-color"},r.a.createElement("div",{className:"container blue"},r.a.createElement("div",{className:"row"},r.a.createElement("p",null,r.a.createElement("font",{color:"white",size:"4"},"Mauricio Acevedo - ",r.a.createElement("a",{href:"https://www.linkedin.com/in/macevedg/"},"LinkedIn")," "))))))}}]),t}(n.Component)),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(25)}},[[9,2,1]]]);
//# sourceMappingURL=main.70b7d6f4.chunk.js.map