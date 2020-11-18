import { r as registerInstance, h, F as Fragment } from './index-659eef67.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}img{width:50%}#padre div{position:absolute;right:0px;top:0px;width:50%;text-align:center;vertical-align:middle;background-color:red;color:white;height:50vh;animation:test 2s ease-in infinite}#padre{position:relative}@keyframes test{from{background:turquoise}to{background:violet;scale:30px}}.formTest input,.formTest button{padding:20px}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return (h(Fragment, null, h("div", { id: "padre" }, h("img", { src: "https://picsum.photos/600/400" }), h("div", null, "Hello, World! I'm ", this.getText())), h("form", { class: "formTest" }, h("input", { type: "text", placeholder: "Prueba de inputs" }), h("button", null, "Enviar formulario"))));
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
