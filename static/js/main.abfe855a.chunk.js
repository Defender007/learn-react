(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),u=a(9),o=a(1),i=a(2),m=a(4),h=a(3),s=a(5),b=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Remove")))},E=function(e){var t=e.characterData.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete")))});return r.a.createElement("tbody",null,t)},d=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.characterData,a=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(b,null),r.a.createElement(E,{characterData:t,removeCharacter:a}))}}]),t}(n.Component),f=a(8),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.onFormSubmit=function(e){e.preventDefault(),a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",job:""},a.state=a.initialState,a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Job"),r.a.createElement("input",{type:"text",name:"job",value:a,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},a.removeCharacter=function(e){var t=a.state.characters;a.setState({characters:t.filter(function(t,a){return a!==e})})},a.handleSubmit=function(e){a.setState({characters:[].concat(Object(u.a)(a.state.characters),[e])})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"React Tutorial"),r.a.createElement("p",null,"Add a character with a name and a job to the table."),r.a.createElement(d,{characterData:e,removeCharacter:this.removeCharacter}),r.a.createElement("h3",null,"Add New"),r.a.createElement(p,{handleSubmit:this.handleSubmit}))}}]),t}(n.Component);a(16);l.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.abfe855a.chunk.js.map