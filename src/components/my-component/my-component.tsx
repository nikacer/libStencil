import { Component, Prop, h, Fragment } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <Fragment>
        <div id="padre">
          <img src="https://picsum.photos/600/400"></img>
          <div>Hello, World! I'm {this.getText()}</div>
        </div>
        <form class="formTest">
          <input type="text" placeholder="Prueba de inputs" />
          <button>Enviar formulario</button>
        </form>
      </Fragment>
    );
  }
}
