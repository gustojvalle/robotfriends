(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{128:function(e,t,n){},425:function(e,t,n){},426:function(e,t,n){},428:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(5),o=n.n(c),s=n(16),a=n.n(s),i=(n(128),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,429)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))}),h=n(49),l=n(50),u=n(52),b=n(51),d=(n(129),n(425),function(e){e.robots;throw new Error("Nooooooo")}),j=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"tc pa2",children:Object(r.jsx)("input",{onChange:t,className:"pa3 ba b---green bg-lightest-blue tc",type:"search",placeholder:"search robots"})})},f=(n(426),function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})}),g=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(l.a)(n,[{key:"componenDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return!0===this.state.hasError?Object(r.jsx)("h1",{children:"Well well well, it has failed"}):this.props.children}}]),n}(c.Component),p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value}),console.log(t)},e.state={robots:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;return fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"tc light-green f2",children:"RoboFriends"}),Object(r.jsx)(j,{searchChange:this.onSearchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(g,{children:Object(r.jsx)(d,{className:"tc",robots:c})})})]}):Object(r.jsx)("h1",{className:"tc f0 shadow-5  ",children:" Loading "})}}]),n}(c.Component);n(427);a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),i()}},[[428,1,2]]]);
//# sourceMappingURL=main.6a9289a8.chunk.js.map