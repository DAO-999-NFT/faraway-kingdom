import sendpulse from 'sendpulse-api';

const API_USER_ID = 'Подставлял натоящиие значения';
const API_SECRET = 'поменял чтобы в иистории никто не увидел';
const TOKEN_STORAGE = '/tmp/';

class EmailApi {
  isReady: boolean = false;

  constructor() {
    sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, () => {
      this.isReady = true;
    });
  }

  saveEmail(email: string) {
    sendpulse.addEmails(
      (res: any) => {
        console.log('🚀 - res:', res);
        return console.log(`Email: ${email} has been saved!`);
      },
      89518038,
      [email],
    );
  }
}

export const emailApi = new EmailApi();
