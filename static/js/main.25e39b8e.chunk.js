(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(9),i=c.n(s),r=(c(14),c(5)),u=c(2),b=c(8),o=(c(15),c(0)),j=Object(n.memo)((function(e){var t=e.item,c=t.title,n=t.count;return Object(o.jsxs)("li",{className:"habit__comp",children:[Object(o.jsx)("span",{className:"habit-name",children:c}),Object(o.jsx)("span",{className:"habit-count",children:n}),Object(o.jsx)("button",{onClick:function(){e.increaseCount(e.item)},className:"habit-button habit-increase",children:Object(o.jsx)("i",{className:"fas fa-plus-square"})}),Object(o.jsx)("button",{onClick:function(){e.decreaseCount(e.item)},className:"habit-button habit-decrease",children:Object(o.jsx)("i",{className:"fas fa-minus-square"})}),Object(o.jsx)("button",{className:"habit-button habit-delete",onClick:function(){e.deleteItem(e.item)},children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})})),l=Object(n.memo)((function(e){return Object(o.jsx)("ul",{className:"habit__list",children:e.habits.map((function(t,c){return Object(o.jsx)(j,{item:t,increaseCount:e.increaseCount,decreaseCount:e.decreaseCount,deleteItem:e.deleteItem},c)}))})})),m=Object(n.memo)((function(e){var t=e.tracks;return Object(o.jsxs)("header",{className:"habit__header",children:[Object(o.jsx)("span",{className:"habit__title",children:"Track Habit!"}),Object(o.jsx)("div",{className:"header__count",children:t})]})})),d=Object(n.memo)((function(e){var t=a.a.createRef();return Object(o.jsx)("div",{className:"habit__input",children:Object(o.jsxs)("form",{onSubmit:function(c){c.preventDefault();var n=t.current.value;""!==n&&(e.addHabits(n),t.current.value="")},className:"input__form",children:[Object(o.jsx)("input",{ref:t,name:"item",type:"text",placeholder:"item",className:"input__additem"}),Object(o.jsx)("button",{className:"input__addbtn",children:"Add Item"})]})})})),O=Object(n.memo)((function(e){var t=e.resetCount;return Object(o.jsx)("div",{className:"habit__reset",children:Object(o.jsx)("button",{onClick:t,className:"reset__button",children:"Reset All"})})})),f=Object(n.memo)((function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(b.a)(s,2),j=i[0],f=i[1],h=function(e){var t=0;if("object"===typeof e)return e.forEach((function(e){e.count>0&&t++})),t};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(m,{tracks:j}),Object(o.jsx)(d,{addHabits:function(e){var t=Object(u.a)(c),n={title:e,count:0};t.push(n),a(t)}}),Object(o.jsx)(l,{habits:c,increaseCount:function(e){var t=Object(u.a)(c).map((function(t){if(e.title===t.title){var c=Object(r.a)({},t);return c.count++,c}return t})),n=h(t);a(t),f(n)},decreaseCount:function(e){if(!(e.count<=0)){var t=Object(u.a)(c).map((function(t){if(e.title===t.title){var c=Object(r.a)({},t);return c.count--,c}return t})),n=h(t);a(t),f(n)}},deleteItem:function(e){var t=Object(u.a)(c).filter((function(t){return t!==e})),n=h(t);a(t),f(n)}}),Object(o.jsx)(O,{resetCount:function(){var e=Object(u.a)(c).map((function(e){if(0===e.count)return e;var t=Object(r.a)({},e);return t.count=0,t})),t=h(c);a(e),f(t)}})]})}));c(17);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.25e39b8e.chunk.js.map