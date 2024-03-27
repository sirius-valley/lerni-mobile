import { CommandsInterface } from '../commandsInterface';
import { LoginLocatorsType } from '../locators/types';

export class SessionCommands extends CommandsInterface {
  loginLocators: LoginLocatorsType;

  constructor(driver: WebdriverIO.Browser, loginLocators: LoginLocatorsType) {
    super(driver);
    this.loginLocators = loginLocators;
  }

  async login(username: string, password: string) {
    await this.tapElement(this.loginLocators.loginButton);

    await Promise.all([
      await this.setValueOfElement(this.loginLocators.emailInput, username),
      await this.setValueOfElement(this.loginLocators.passwordInput, password),
    ]);
    await this.tapElement(this.loginLocators.loginButton);
  }
  async verifyToast(message: string) {
    await this.checkElementExists(this.loginLocators.toast);
    const messageChecked = await (await this.findElement(this.loginLocators.toastText)).getText();

    if (message != messageChecked) throw Error('Toast message is not correct!');
  }
  async loginDisabled() {
    const loginButtonElement = await this.findElement(this.loginLocators.loginButton);
    const loginButtonElementEnabled = await loginButtonElement.getAttribute('enabled');

    await this.tapElement(this.loginLocators.loginButton);
    if (!loginButtonElementEnabled) throw new Error('Login button is enabled and it shouldnt!');
  }
}
