import { randomUUID } from 'crypto';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotification(
      notificationsRepository,
    );
    const recipient = randomUUID();

    await notificationsRepository.create(
      makeNotification({ recipientId: recipient }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: recipient }),
    );
    await notificationsRepository.create(makeNotification());

    const { count } = await countRecipientNotifications.execute({
      recipientId: recipient,
    });
    expect(count).toEqual(2);
  });
});
