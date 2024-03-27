import { SessionCommands } from '../../common/commands/register';
import RegisterLocators from '../locators/register';
import { TestAppAndroid } from './app';

describe('Registration account flow', function () {
  let app: TestAppAndroid;
  let registrationCommands: SessionCommands;

  const userData = {
    username: 'valendemotest2@gmail.com',
    password: 'Password123',
  };

  this.beforeAll(async function () {
    app = new TestAppAndroid();
    await app.init();
  });

  before(async function () {
    registrationCommands = new SessionCommands(app.getDriver(), RegisterLocators);
  });

  it('Should register', async function () {
    if (!process.env.APPIUM_TEST_USERNAME || !process.env.APPIUM_TEST_PASSWORD) {
      throw new Error('Invalid test user data');
    }
    await registrationCommands.register(userData.username, userData.password);
  });

  after(async function () {
    await app.quit();
  });
});
