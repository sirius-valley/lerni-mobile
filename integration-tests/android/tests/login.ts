import { SessionCommands } from '../../common/commands/login';
//import { createTestUser } from '../../utils/requester';
import LoginLocators from '../locators/login';
import { TC_L_1, TC_L_5, TC_L_6 } from '../utils/userData';
import { TestAppAndroid } from './app';

describe('Login flow', function () {
  let app: TestAppAndroid;
  let sessionCommands: SessionCommands;

  this.beforeAll(async function () {
    app = new TestAppAndroid();
    await app.init();
    //createTestUser(userData);
  });

  before(async function () {
    sessionCommands = new SessionCommands(app.getDriver(), LoginLocators);
  });

  it('TC_L_1 - Should input login credentials ', async function () {
    if (!process.env.APPIUM_TEST_USERNAME || !process.env.APPIUM_TEST_PASSWORD) {
      throw new Error('Invalid test user data');
    }
    await sessionCommands.login(TC_L_1.username, TC_L_1.password);
  });

  after(async function () {
    await app.quit();
  });
});
