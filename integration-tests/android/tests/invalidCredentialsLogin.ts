import { SessionCommands } from '../../common/commands/login';
import LoginLocators from '../locators/login';
import { TC_L_4, TC_L_5, TC_L_6, TC_L_7 } from '../utils/userData';
import { TestAppAndroid } from './app';

describe('Login invalid', function () {
  let app: TestAppAndroid;
  let sessionCommands: SessionCommands;

  this.beforeAll(async function () {
    app = new TestAppAndroid();
    await app.init();
  });

  before(async function () {
    sessionCommands = new SessionCommands(app.getDriver(), LoginLocators);
  });

  it('TC_L_7 - Login button should be disabled because of incorrect password', async function () {
    await sessionCommands.login(TC_L_7.username, TC_L_7.password);
    await sessionCommands.verifyToast('Invalid credentials');
  });
  it('TC_L_4 - App should display a toast because of non registered email but valid password', async function () {
    await sessionCommands.login(TC_L_4.username, TC_L_4.password);
    await sessionCommands.verifyToast('User with provided email not found');
  });
  it('TC_L_5 - Login button should be disabled because of registered email but invalid password', async function () {
    await sessionCommands.login(TC_L_5.username, TC_L_5.password);
    await sessionCommands.loginDisabled();
  });
  it('TC_L_6 - Login button should be disabled because of non registered email and invalid password', async function () {
    await sessionCommands.login(TC_L_6.username, TC_L_6.password);
    await sessionCommands.loginDisabled();
  });

  after(async function () {
    await app.quit();
  });
});
