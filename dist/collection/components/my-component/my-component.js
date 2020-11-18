import { Component, Prop, h, Fragment } from '@stencil/core';
import { format } from '../../utils/utils';
export class MyComponent {
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return (h(Fragment, null,
      h("div", { id: "padre" },
        h("img", { src: "https://picsum.photos/600/400" }),
        h("div", null,
          "Hello, World! I'm ",
          this.getText())),
      h("form", { class: "formTest" },
        h("input", { type: "text", placeholder: "Prueba de inputs" }),
        h("button", null, "Enviar formulario"))));
  }
  static get is() { return "my-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get properties() { return {
    "first": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The first name"
      },
      "attribute": "first",
      "reflect": false
    },
    "middle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The middle name"
      },
      "attribute": "middle",
      "reflect": false
    },
    "last": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The last name"
      },
      "attribute": "last",
      "reflect": false
    }
  }; }
}
