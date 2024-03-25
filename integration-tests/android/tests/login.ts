import { SessionCommands } from '../../common/commands/login';
//import { createTestUser } from '../../utils/requester';
import LoginLocators from '../locators/login';
import { TestAppAndroid } from './app';

describe('Login flow', function () {
  let app: TestAppAndroid;
  let sessionCommands: SessionCommands;

  const userData = {};

  this.beforeAll(async function () {
    app = new TestAppAndroid();
    await app.init();
    //createTestUser(userData);
  });

  before(async function () {
    sessionCommands = new SessionCommands(app.getDriver(), LoginLocators);
  });

  it('Should input login credentials', async function () {
    if (!process.env.APPIUM_TEST_USERNAME || !process.env.APPIUM_TEST_PASSWORD) {
      throw new Error('Invalid test user data');
    }
    await sessionCommands.login(process.env.APPIUM_TEST_USERNAME, process.env.APPIUM_TEST_PASSWORD);
  });

  after(async function () {
    await app.quit();
  });
});
