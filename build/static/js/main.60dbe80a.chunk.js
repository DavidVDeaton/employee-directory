(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{43:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),c=s.n(n),r=s(15),o=s.n(r),i=s(16),l=s(17),d=s(19),j=s(18);s(5);var h=function(e){return e.employees.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{children:[Object(a.jsx)("img",{src:e.picture.thumbnail,alt:"employee"})," ",e.name.first," ",e.name.last]}),Object(a.jsx)("td",{children:e.gender}),Object(a.jsxs)("td",{children:[e.location.city,", ",e.location.state]}),Object(a.jsx)("td",{children:e.email})]},e.login.uuid)}))};var u=function(e){return Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Full name"}),Object(a.jsx)("th",{children:"Gender"}),Object(a.jsx)("th",{children:"City/State"}),Object(a.jsx)("th",{children:"Email"})]})})},m=s(3),b=s.n(m),O=function(){return b.a.get("https://randomuser.me/api/?results=5&nat=us")},x=s(6);var p=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),s=t[0],c=t[1],r=Object(n.useState)(""),o=Object(x.a)(r,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){b.a.get("https://randomuser.me/api/?results=5&nat=us").then((function(e){c({male:e.data.results[0].gender}),l({female:e.data.results[0].gender})}))}),[]),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("button",{className:"btn btn-primary",style:{backgroundColor:"purple",marginRight:"10px"},onClick:s.male,children:"Male"}),Object(a.jsx)("button",{className:"btn btn-primary",style:{backgroundColor:"purple"},onClick:i.female,children:"Female"})]})})},f={margin:"25px",fontSize:"0.9em",minWidth:"400px",overflow:"hidden"},y=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).onchange=function(t){e.setState({search:t.target.value}),console.log(e.state.search)},e.state={employees:[],search:""},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({employees:t.data.results})}))}},{key:"render",value:function(){var e=this,t=this.state.employees.filter((function(t){return-1!==t.gender.toLowerCase().indexOf(e.state.search.toLowerCase())||-1!==t.name.first.toLowerCase().indexOf(e.state.search.toLowerCase())||-1!==t.name.last.toLowerCase().indexOf(e.state.search.toLowerCase())||-1!==t.location.city.toLowerCase().indexOf(e.state.search.toLowerCase())||-1!==t.location.state.toLowerCase().indexOf(e.state.search.toLowerCase())||-1!==t.email.toLowerCase().indexOf(e.state.search.toLowerCase())}));return Object(a.jsxs)("div",{className:"body",children:[Object(a.jsx)("nav",{className:"orange",children:"Employee Directory"}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("input",{style:{marginTop:"15px"},type:"text",className:"col",placeholder:"Search for an employee",onChange:this.onchange})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("table",{className:"col-sm",style:f,children:[Object(a.jsx)(u,{}),Object(a.jsx)("tbody",{children:Object(a.jsx)(h,{employees:t})})]})}),Object(a.jsx)(p,{})]})]})}}]),s}(c.a.Component);s(42);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))},5:function(e,t,s){}},[[43,1,2]]]);
//# sourceMappingURL=main.60dbe80a.chunk.js.map