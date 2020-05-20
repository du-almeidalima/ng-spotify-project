import {Component, Input} from '@angular/core';
import {MessageSeverity} from "../../models/enums/message-severity";
import {ResponseMessage} from "../../models/response-message";

@Component({
  selector: 'app-response-message',
  template: `
    <div [ngClass]="[styleClass, 'mtop-5']">
      <ng-content></ng-content>
      <p>{{message.message}}</p>
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
