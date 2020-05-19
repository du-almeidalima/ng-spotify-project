import {Component, Input} from '@angular/core';
import {MessageSeverity} from "../../models/enums/message-severity";
import {ResponseMessage} from "../../models/response-message";

@Component({
  selector: 'app-response-message',
  template: `
    <div [ngClass]="styleClass">
      <h3>Something went wrong</h3>
      <p>{{message}}</p>
    </div>
  `,
  styles: []
})
export class ResponseMessageComponent {

  @Input()
  message: ResponseMessage;

  constructor() { }

  get styleClass() {
    switch (this.message.severity) {
      case MessageSeverity.ERROR:
        return 'error-message'

      default:
        return 'default-message';
    }
  }
}
