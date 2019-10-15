(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),u=n.n(c),o=n(1),s=n.n(o),i=n(3),l=n(4),p=n(5),m=n.n(p),f="https://glacial-cliffs-64027.herokuapp.com/api/persons",d={getData:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get(f);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),createPerson:function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post(f,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),deleteId:function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.delete("".concat(f,"/").concat(t));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),updateId:function(){var e=Object(i.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,r=t.number,e.next=3,m.a.put("".concat(f,"/").concat(n),{name:a,number:r,id:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},v=function(e){var t=e.value,n=e.handleChange;return r.a.createElement("div",{className:"Filter"},r.a.createElement("div",null,"filter shown with"),r.a.createElement("input",{defaultValue:t,onChange:n}))},h=function(e){var t=e.newName,n=e.handleNameChange,a=e.newNumber,c=e.handleNumberChange,u=e.handleClick;return r.a.createElement("div",{className:"PersonForm"},r.a.createElement("form",null,r.a.createElement("div",null,"name:"," ",r.a.createElement("input",{type:"text",value:t,onChange:n})),r.a.createElement("div",null,"number:"," ",r.a.createElement("input",{type:"text",value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{onClick:u},"add"))))},b=function(e){var t=e.persons,n=e.handleDelete,a=t.map((function(e){return r.a.createElement("div",{key:e.id},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return n(e)}},"delete"))}));return r.a.createElement("div",{className:"Persons"},a)},w=(n(39),function(e){var t=e.notification,n=t.message,a=t.type;return r.a.createElement("div",{className:"Notification ".concat(a)},n)}),E=d.getData,k=d.createPerson,x=d.deleteId,g=d.updateId,j=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),o=Object(l.a)(u,2),p=o[0],m=o[1],f=Object(a.useState)(""),d=Object(l.a)(f,2),j=d[0],O=d[1],y=Object(a.useState)(!0),C=Object(l.a)(y,2),N=C[0],D=C[1],I=Object(a.useState)(""),S=Object(l.a)(I,2),P=S[0],L=S[1],A=Object(a.useState)(),F=Object(l.a)(A,2),J=F[0],B=F[1];Object(a.useEffect)((function(){T()}),[]);var T=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.t0=c,e.next=4,E();case 4:e.t1=e.sent,(0,e.t0)(e.t1),D(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.id,window.confirm("Delete ".concat(n,"?")),e.next=4,x(a);case 4:T();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.confirm("".concat(t.name," is already added to phonebook, replace the old number with a new one?")),e.next=3,g(t,n);case 3:B({type:"success",message:"Updated ".concat(t.name)}),T(),q();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){setTimeout((function(){B(null)}),5e3)},z=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={name:p,number:j},!n.some((function(e){return e.name===p}))){e.next=16;break}return r=n.find((function(e){return e.name===p})).id,e.prev=4,e.next=7,V(a,r);case 7:e.next=14;break;case 9:e.prev=9,e.t0=e.catch(4),B({type:"error",message:"Information of ".concat(a.name," has already been removed from server")}),T(),q();case 14:e.next=31;break;case 16:return e.prev=16,e.t1=c,e.t2=n,e.next=21,k(a);case 21:e.t3=e.sent,e.t4=e.t2.concat.call(e.t2,e.t3),(0,e.t1)(e.t4),B({type:"success",message:"Added ".concat(a.name)}),q(),e.next=31;break;case 28:e.prev=28,e.t5=e.catch(16),console.error(e.t5);case 31:case"end":return e.stop()}}),e,null,[[4,9],[16,28]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),J?r.a.createElement(w,{notification:J}):r.a.createElement("div",null),r.a.createElement(v,{value:P,handleChange:function(e){return L(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(h,{newName:p,handleNameChange:function(e){return m(e.target.value)},newNumber:j,handleNumberChange:function(e){return O(e.target.value)},handleClick:z}),r.a.createElement("h3",null,"Numbers"),N?r.a.createElement("div",null,"Loading..."):r.a.createElement(b,{persons:function(e){return e.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())}))}(n),handleDelete:U}))};u.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a5b9705a.chunk.js.map