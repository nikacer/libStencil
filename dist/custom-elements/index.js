import { attachShadow, h, Fragment, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}img{width:50%}#padre div{position:absolute;right:0px;top:0px;width:50%;text-align:center;vertical-align:middle;background-color:red;color:white;height:50vh;animation:test 2s ease-in infinite}#padre{position:relative}@keyframes test{from{background:turquoise}to{background:violet;scale:30px}}.formTest input,.formTest button{padding:20px}";

const MyComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return (h(Fragment, null, h("div", { id: "padre" }, h("img", { src: "https://picsum.photos/600/400" }), h("div", null, "Hello, World! I'm ", this.getText())), h("form", { class: "formTest" }, h("input", { type: "text", placeholder: "Prueba de inputs" }), h("button", null, "Enviar formulario"))));
  }
  static get style() { return myComponentCss; }
};

const MyComponent$1 = /*@__PURE__*/proxyCustomElement(MyComponent, [1,"my-component",{"first":[1],"middle":[1],"last":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      MyComponent$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { MyComponent$1 as MyComponent, defineCustomElements };
