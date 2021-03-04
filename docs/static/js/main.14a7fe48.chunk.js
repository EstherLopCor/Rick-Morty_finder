(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(4),s=c.n(r),i=(c(9),c(2)),l=(c(10),function(){return fetch("//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,specie:e.species,gender:e.gender,location:e.location.name,img:e.image}}))}))}),o=(c(11),c(0)),j=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("img",{src:"../images/logo.png",alt:"Rick and Morty"})})},u=(c(13),function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:"search",children:"Busca tu personaje"}),Object(o.jsx)("input",{className:"input",placeholder:"p.e. Rick",type:"text",name:"name",id:"name",onChange:function(t){e.handleFilter({key:"name",value:t.target.value})}})]})}),h=(c(14),function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:"specie",children:"Especie"}),Object(o.jsxs)("select",{className:"select",name:"specie",id:"specie",onChange:function(t){e.handleFilter({key:"specie",value:t.target.value})},children:[Object(o.jsx)("option",{value:"all",children:"Todos"}),Object(o.jsx)("option",{value:"Human",children:"Humano"}),Object(o.jsx)("option",{value:"Alien",children:"Alien"})]})]})}),m=(c(15),function(e){return Object(o.jsxs)("form",{className:"form",action:"",children:[Object(o.jsx)(u,{handleFilter:e.handleFilter}),Object(o.jsx)(h,{handleFilter:e.handleFilter})]})}),b=(c(16),function(e){return Object(o.jsxs)("article",{className:"article",children:[Object(o.jsx)("img",{className:"article__img",src:e.character.img,alt:""}),Object(o.jsx)("h4",{className:"article__name",children:e.character.name}),Object(o.jsx)("p",{className:"article__text",children:e.character.specie})]})}),d=(c(17),function(e){var t=e.characters.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(b,{character:e})},e.id)}));return Object(o.jsx)("section",{children:Object(o.jsx)("ul",{className:"list",children:t})})}),f=(c(18),function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsxs)("small",{className:"footer__text",children:["Made with ",Object(o.jsx)("span",{className:"footer__heart",children:"\u2764 "})," by ",Object(o.jsx)("span",{}),Object(o.jsx)("a",{className:"footer__link",href:"https://github.com/EstLopCor",title:"Visita mi GitHub",target:"_blank",children:"EstLopCor"}),Object(o.jsx)("span",{})," 2021"]})})}),O=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),u=s[0],h=s[1],b=Object(n.useState)("all"),O=Object(i.a)(b,2),p=O[0],x=O[1];Object(n.useEffect)((function(){l().then((function(e){return a(e)}))}),[]);var g=c.filter((function(e){return e.name.toUpperCase().includes(u.toUpperCase())})).filter((function(e){return"all"===p||e.specie===p}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)("main",{children:[Object(o.jsx)(m,{handleFilter:function(e){"name"===e.key?h(e.value):"specie"===e.key&&x(e.value)}}),Object(o.jsx)(d,{characters:g})]}),Object(o.jsx)(f,{})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.14a7fe48.chunk.js.map