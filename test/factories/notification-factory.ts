import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { randomUUID } from 'crypto';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade 3'),
    recipientId: randomUUID(),
    ...override,
  });
}
