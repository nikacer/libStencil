import { Component, Prop, h, Fragment, Event, EventEmitter } from '@stencil/core';
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

  @Event({ eventName: 'respuesta' })
  respuesta: EventEmitter<string>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private generateMessage(e) {
    console.log(this.respuesta);

    setTimeout(() => {
      this.respuesta.emit('text');
    }, 500);

    e.preventDefault();
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
          <button onClick={this.generateMessage}>Enviar formulario</button>
        </form>
      </Fragment>
    );
  }
}
