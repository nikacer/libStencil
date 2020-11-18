'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-38025520.js');

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}img{width:50%}#padre div{position:absolute;right:0px;top:0px;width:50%;text-align:center;vertical-align:middle;background-color:red;color:white;height:50vh;animation:test 2s ease-in infinite}#padre{position:relative}@keyframes test{from{background:turquoise}to{background:violet;scale:30px}}.formTest input,.formTest button{padding:20px}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return (index.h(index.Fragment, null, index.h("div", { id: "padre" }, index.h("img", { src: "https://picsum.photos/600/400" }), index.h("div", null, "Hello, World! I'm ", this.getText())), index.h("form", { class: "formTest" }, index.h("input", { type: "text", placeholder: "Prueba de inputs" }), index.h("button", null, "Enviar formulario"))));
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
