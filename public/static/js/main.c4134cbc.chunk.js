(this["webpackJsonpbudget-app"]=this["webpackJsonpbudget-app"]||[]).push([[0],{14:function(e,t,a){e.exports={EntryItem:"EntryItem_EntryItem__3JYAN",Description:"EntryItem_Description__3eQUe",Value:"EntryItem_Value__24PZB",Expense:"EntryItem_Expense__S1z4K",Percentage:"EntryItem_Percentage__1hBmF",Delete:"EntryItem_Delete__39Ufp"}},16:function(e,t,a){e.exports={BudgetToast:"BudgetToast_BudgetToast__3aEHS",Expense:"BudgetToast_Expense__3R7K-",Title:"BudgetToast_Title__1ZlYt",Value:"BudgetToast_Value__3lKg1",Percentage:"BudgetToast_Percentage__lhm83"}},18:function(e,t,a){e.exports={EntryList:"EntryList_EntryList__1v4Ch",Title:"EntryList_Title__2TxVq",Expense:"EntryList_Expense__K5t9X",Sort:"EntryList_Sort__1F_PF"}},21:function(e,t,a){e.exports={LogoText:"LogoText_LogoText__3ZtIm",Title:"LogoText_Title__t6hJU",InlineTitle:"LogoText_InlineTitle__1gSOL"}},22:function(e,t,a){e.exports={Board:"Board_Board__2IuC6",BudgetOverview:"Board_BudgetOverview__2WsC_",BudgetLists:"Board_BudgetLists__3IKpV"}},24:function(e,t,a){e.exports={Logo:"Logo_Logo__1c1jk",LogoImg:"Logo_LogoImg__2rnlo",LogoText:"Logo_LogoText__3MWJk"}},25:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__3IS6a",LogOut:"Toolbar_LogOut__3yNOE"}},26:function(e,t,a){e.exports={BudgetOverview:"BudgetOverview_BudgetOverview__1MXkH",Title:"BudgetOverview_Title__3mCmZ",Value:"BudgetOverview_Value__2Fo9M"}},30:function(e,t,a){e.exports={Input:"Input_Input__1fsVd",ErrorMessage:"Input_ErrorMessage__gRCQR"}},31:function(e,t,a){e.exports={Auth:"Auth_Auth__29SLs",authModeChanger:"Auth_authModeChanger__2KNo6"}},46:function(e,t,a){e.exports={TextContainer:"TextContainer_TextContainer__24g9n"}},47:function(e,t,a){e.exports={Button:"Button_Button__2QnLE"}},48:function(e,t,a){e.exports=a.p+"static/media/logo.175dec45.png"},50:function(e,t,a){e.exports={Select:"Select_Select__3rrZJ"}},51:function(e,t,a){e.exports={NewEntryForm:"NewEntryForm_NewEntryForm__2Ofby"}},52:function(e,t,a){e.exports={PlusButton:"PlusButton_PlusButton__3hP7q"}},53:function(e,t,a){e.exports=a(81)},58:function(e,t,a){},7:function(e,t,a){e.exports={Large:"Form_Large__3_SbC",Small:"Form_Small__2BK4r",Expense:"Form_Expense__2NW9m",Income:"Form_Income__140MX",Invalid:"Form_Invalid__2PPLW"}},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(44),s=a.n(o),c=a(17),l=(a(58),a(10)),i=a(11),u=a(13),m=a(12),p=a(1),d=a(9),g=a(6),v=a(45),h=a.n(v).a.create({baseURL:"http://127.0.0.1:8080"}),E=a(30),_=a.n(E),f=a(7),y=a.n(f),b=r.a.forwardRef((function(e,t){var a=[_.a.Input];e.invalid&&a.push(y.a.Invalid),"large"===e.size?a.push(y.a.Large):"small"===e.size&&a.push(y.a.Small),"expense"===e.entryType?a.push(y.a.Expense):"income"===e.entryType&&a.push(y.a.Income);var n=null;return(e.withError||e.errorMessage)&&(n=r.a.createElement("span",{className:_.a.ErrorMessage},e.errorMessage?e.errorMessage:" ")),r.a.createElement("div",null,r.a.createElement("input",{className:a.join(" "),type:e.type?e.type:"text",value:e.value,placeholder:e.placeholder,ref:t,onChange:e.onChange}),n)})),x=a(46),L=a.n(x),N=function(e){return r.a.createElement("div",{className:L.a.TextContainer,style:e.style},e.children)},O=a(47),T=a.n(O),I=function(e){return r.a.createElement("button",{className:T.a.Button,onClick:e.onClick},e.children)},S=a(21),j=a.n(S),C=function(e){var t;return t=e.inline?r.a.createElement("p",{className:j.a.InlineTitle},"BudgetBoard"):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:j.a.Title},"Budget"),r.a.createElement("p",{className:j.a.Title},"Board")),r.a.createElement("div",{className:j.a.LogoText,style:e.style},t)},B=a(48),w=a.n(B),M=a(24),k=a.n(M),F=function(e){return r.a.createElement("div",{className:k.a.Logo,style:e.style},r.a.createElement("div",{className:k.a.LogoImg},r.a.createElement("img",{src:w.a,alt:"Logo.png"})),r.a.createElement("div",{className:k.a.LogoText},r.a.createElement(C,{inline:e.inline})))},D=function(e,t){return(t?"income"===t?"+ ":"- ":e>=0?"+ ":"- ")+Math.abs(e).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")},P=function(e,t){if(0===t)return"---";if(0===e)return"0%";var a=Math.round(e/t*100);return 0===a&&(a="<1"),a+"%"},A=function(e,t,a){var n=e[a],r=t[a];if("description"===a){var o=n.toLowerCase();n=r.toLowerCase(),r=o.toLowerCase()}return n>r?-1:r>n?1:0},V=function(e,t,a){if(0===e.length)e.push(t);else{for(var n=0;n<e.length;n++)if(A(e[n],t,a)>0)return e.splice(n,0,t),e;e.push(t)}return e},z=function(){return{token:localStorage.getItem("token"),username:localStorage.getItem("username")}},H=function(e,t){localStorage.setItem("token",e),localStorage.setItem("username",t)},K=a(31),J=a.n(K),R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={authForm:{username:{value:"",errorMessage:""},password:{value:"",errorMessage:""}},isLoggingIn:!0},e.componentDidMount=function(){z().token&&e.props.history.replace("/board")},e.updateElement=function(t,a,n){e.setState((function(e){return{authForm:Object(g.a)(Object(g.a)({},e.authForm),{},Object(d.a)({},t,Object(g.a)(Object(g.a)({},e.authForm[t]),{},Object(d.a)({},a,n))))}}))},e.formIsValid=function(){var t=!0,a=e.state.authForm;for(var n in a)a[n].value.length?a[n].errorMessage&&e.updateElement(n,"errorMessage",""):(e.updateElement(n,"errorMessage","Must provide a ".concat(n)),t=!1);return t},e.onSubmitHandler=function(t){if(t.preventDefault(),e.formIsValid()){var a={username:e.state.authForm.username.value,password:e.state.authForm.password.value},n=e.state.isLoggingIn?"/login":"/signin";h.post(n,a).then((function(t){var a=t.data.user.username,n=t.data.token;H(n,a),e.props.history.replace("/board")})).catch((function(t){var a=t.response;if(a&&400===a.status){var n=a.data[0].field,r=a.data[0].error;e.updateElement(n,"errorMessage",r)}else alert("Could not connect to database....")}))}},e.onChangeAuthModeHandler=function(){e.setState((function(e){return{isLoggingIn:!e.isLoggingIn}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:J.a.Auth},r.a.createElement(N,null,r.a.createElement(F,{style:{fontSize:"2em"}}),r.a.createElement("form",{onSubmit:this.onSubmitHandler},r.a.createElement(b,{value:this.state.authForm.username.value,withError:!0,invalid:""!==this.state.authForm.username.errorMessage,errorMessage:this.state.authForm.username.errorMessage,placeholder:"Username",onChange:function(t){return e.updateElement("username","value",t.target.value)}}),r.a.createElement(b,{type:"password",value:this.state.authForm.password.value,withError:!0,invalid:""!==this.state.authForm.password.errorMessage,errorMessage:this.state.authForm.password.errorMessage,placeholder:"Password",onChange:function(t){return e.updateElement("password","value",t.target.value)}}),r.a.createElement(I,null,this.state.isLoggingIn?"Log In":"Sign In")),r.a.createElement("div",{className:J.a.authModeChanger},r.a.createElement("p",null,this.state.isLoggingIn?"No account yet? ":"Already have an account ",r.a.createElement("span",{onClick:this.onChangeAuthModeHandler},this.state.isLoggingIn?"Create one!":"Log in!")))))}}]),a}(n.Component),W=a(27),U=a(25),Z=a.n(U),Q=function(e){return r.a.createElement("header",{className:Z.a.Toolbar},r.a.createElement("div",{className:Z.a.Logo},r.a.createElement(F,{style:{fontSize:"0.5em"},inline:!0})),r.a.createElement("div",null,r.a.createElement("p",null,"Logged as ",e.username,". ",r.a.createElement(c.b,{to:"/logout"},r.a.createElement("span",{className:Z.a.LogOut},"Leave.")))))},X=a(16),Y=a.n(X),q=function(e){var t=[Y.a.BudgetToast,"clearfix"],a=[Y.a.Percentage];return"expense"===e.type&&(t.push(Y.a.Expense),a.push(Y.a.Expense)),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:Y.a.Title},e.type),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:Y.a.Value},e.value),r.a.createElement("div",{className:a.join(" ")},e.percentage)))},$=a(26),G=a.n($),ee=function(e){return r.a.createElement("div",{className:G.a.BudgetOverview},r.a.createElement("div",{className:G.a.Title},"Your current budget:"),r.a.createElement("div",{className:G.a.Value},D(e.total)),r.a.createElement(q,{type:"income",value:D(e.income,"income")}),r.a.createElement(q,{type:"expense",value:D(e.expense,"expense"),percentage:P(e.expense,e.income)}))},te=a(28),ae=a(50),ne=a.n(ae),re=function(e){var t=[ne.a.Select];return"expense"===e.entryType?t.push(y.a.Expense):"income"===e.entryType&&t.push(y.a.Income),r.a.createElement("select",{className:t.join(" "),onChange:e.onChange},e.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.content)})))},oe=a(51),se=a.n(oe),ce=a(52),le=a.n(ce),ie=function(e){var t=[le.a.PlusButton];return"expense"===e.entryType?t.push(y.a.Expense):"income"===e.entryType&&t.push(y.a.Income),r.a.createElement("button",{className:t.join(" ")},r.a.createElement("i",{className:"fas fa-plus"}))},ue=[{value:"income",content:"Income"},{value:"expense",content:"Expense"}],me=function(e){var t=Object(n.useState)("income"),a=Object(te.a)(t,2),o=a[0],s=a[1],c=Object(n.useState)({value:"",valid:!0}),l=Object(te.a)(c,2),i=l[0],u=l[1],m=Object(n.useState)({value:"",valid:!0}),p=Object(te.a)(m,2),d=p[0],v=p[1],h=Object(n.useRef)();return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),function(){var e=!0;return i.value.length||(u(Object(g.a)(Object(g.a)({},i),{},{valid:!1})),e=!1),d.value.length||(v(Object(g.a)(Object(g.a)({},d),{},{valid:!1})),e=!1),e}()&&(console.log("submiting"),e.onSubmit(o,i.value,parseInt(d.value)),u({value:"",valid:!0}),v({value:"",valid:!0}),h.current.focus())},className:se.a.NewEntryForm},r.a.createElement(re,{options:ue,entryType:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement(b,{value:i.value,invalid:!i.valid,placeholder:"Add a description",size:"large",entryType:o,ref:h,onChange:function(e){return u({value:e.target.value,valid:!0})}}),r.a.createElement(b,{value:d.value,type:"number",invalid:!d.valid,placeholder:"Value",size:"small",entryType:o,onChange:function(e){return v({value:e.target.value,valid:!0})}}),r.a.createElement(ie,{entryType:o}))},pe=a(14),de=a.n(pe),ge=function(e){var t=[de.a.Value],a=[de.a.Percentage];return"expense"===e.type&&(t.push(de.a.Expense),a.push(de.a.Expense)),r.a.createElement("div",{className:de.a.EntryItem+" clearfix"},r.a.createElement("div",{className:de.a.Description},e.description),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:t.join(" ")},D(e.value,e.type)),r.a.createElement("div",{className:a.join(" ")},e.percentage),r.a.createElement("div",{className:de.a.Delete},r.a.createElement("button",{onClick:e.onDeleteEntry},r.a.createElement("i",{className:"far fa-trash-alt"})))))},ve=a(18),he=a.n(ve),Ee=function(e){var t="Income",a=[he.a.Title];"expense"===e.type&&(t="Expense",a.push(he.a.Expense));var n=e.list.map((function(t){return r.a.createElement(ge,{key:t._id,description:t.description,value:t.value,percentage:P(t.value,e.total),onDeleteEntry:function(){return e.onDeleteEntry(t._id,e.type)},type:e.type})}));return r.a.createElement("div",{className:he.a.EntryList},r.a.createElement("div",{className:he.a.Header+" clearfix"},r.a.createElement("div",{className:a.join(" ")},t),r.a.createElement("div",{className:he.a.Sort,onChange:function(t){return e.onChangeSortMethod(e.type,t.target.value)}},r.a.createElement("input",{type:"radio",name:"".concat(e.type,"_sort"),id:"".concat(e.type,"_sort_date"),defaultChecked:!0,value:"date"}),r.a.createElement("label",{htmlFor:"".concat(e.type,"_sort_date")},r.a.createElement("i",{className:"far fa-calendar-alt"})),r.a.createElement("input",{type:"radio",name:"".concat(e.type,"_sort"),id:"".concat(e.type,"_sort_description"),value:"description"}),r.a.createElement("label",{htmlFor:"".concat(e.type,"_sort_description")},r.a.createElement("i",{className:"fas fa-sort-alpha-down"})),r.a.createElement("input",{type:"radio",name:"".concat(e.type,"_sort"),id:"".concat(e.type,"_sort_value"),value:"value"}),r.a.createElement("label",{htmlFor:"".concat(e.type,"_sort_value")},r.a.createElement("i",{className:"fas fa-dollar-sign"})))),r.a.createElement("div",null,n))},_e=a(22),fe=a.n(_e),ye=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",budget:0,income:0,expense:0,incomeSort:"date",incomeList:[],expenseSort:"date",expenseList:[],token:""},e.componentDidMount=function(){var t=z();t.token||e.props.history.replace("/"),h.get("/all-entries?auth="+t.token).then((function(a){var n=a.data.incomes,r=a.data.expenses;n.sort((function(t,a){return A(t,a,e.state.incomeSort)})),r.sort((function(t,a){return A(t,a,e.state.expenseSort)}));var o=n.reduce((function(e,t){return e+t.value}),0),s=r.reduce((function(e,t){return e+t.value}),0),c=o-s;e.setState({username:t.username,budget:c,income:o,expense:s,incomeList:n,expenseList:r,token:t.token})})).catch((function(e){console.log(e)}))},e.updateTotals=function(t,a){var n={budget:e.state.budget,income:e.state.income,expense:e.state.expense};n["".concat(t)]+=a,n.budget=n.income-n.expense,e.setState(Object(g.a)({},n))},e.onAddNewEntry=function(t,a,n){h.post("/".concat(t,"?auth=").concat(e.state.token),{description:a,value:n}).then((function(r){var o=r.data._id,s=r.data.date,c=Object(W.a)(e.state["".concat(t,"List")]);V(c,{description:a,value:n,date:s,_id:o},e.state["".concat(t,"Sort")]),e.setState(Object(d.a)({},"".concat(t,"List"),c)),e.updateTotals(t,n)})).catch((function(e){console.log(e),e.response.data?alert(e.response.data):alert("Could not connect to database....")}))},e.onDeleteEntry=function(t,a){console.log(a),h.delete("/".concat(a,"/").concat(t,"?auth=").concat(e.state.token)).then((function(n){var r=Object(W.a)(e.state["".concat(a,"List")]),o=r.findIndex((function(e){return e._id===t})),s=r.splice(o,1)[0];e.setState(Object(d.a)({},"".concat(a,"List"),r)),e.updateTotals(a,-s.value)})).catch((function(e){console.log(e.response),e.response?alert(e.response.data):alert("Could not connect to database....")}))},e.onChangeSortMethod=function(t,a){var n,r=Object(W.a)(e.state["".concat(t,"List")]);r.sort((function(e,t){return A(e,t,a)})),e.setState((n={},Object(d.a)(n,"".concat(t,"List"),r),Object(d.a)(n,"".concat(t,"Sort"),a),n))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:fe.a.Board},r.a.createElement(Q,{username:this.state.username}),r.a.createElement("div",{className:fe.a.BudgetOverview},r.a.createElement(ee,{total:this.state.budget,income:this.state.income,expense:this.state.expense})),r.a.createElement("div",{className:fe.a.Form},r.a.createElement(me,{onSubmit:this.onAddNewEntry})),r.a.createElement("div",{className:fe.a.BudgetLists},r.a.createElement(Ee,{type:"income",sort:this.state.incomeSort,list:this.state.incomeList,total:this.state.income,onDeleteEntry:this.onDeleteEntry,onChangeSortMethod:this.onChangeSortMethod}),r.a.createElement(Ee,{type:"expense",sort:this.state.expenseSort,list:this.state.expenseList,total:this.state.income,onDeleteEntry:this.onDeleteEntry,onChangeSortMethod:this.onChangeSortMethod})))}}]),a}(n.Component),be=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){localStorage.removeItem("token"),localStorage.removeItem("userId")}},{key:"render",value:function(){return r.a.createElement(p.a,{to:"/"})}}]),a}(n.Component),xe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/board",component:ye}),r.a.createElement(p.b,{path:"/logout",component:be}),r.a.createElement(p.b,{path:"/",exact:!0,component:R}),r.a.createElement(p.a,{to:"/"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(c.a,null,r.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.c4134cbc.chunk.js.map