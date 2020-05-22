import {MessageSeverity} from './enums/message-severity';

export interface ResponseMessage {
  message: string;
  severity: MessageSeverity;
}
