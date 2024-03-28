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
}
