import { randomUUID } from 'crypto';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotification(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: recipient,
    });
    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: recipient }),
        expect.objectContaining({ recipientId: recipient }),
      ]),
    );
  });
});
