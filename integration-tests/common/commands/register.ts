import { CommandsInterface } from '../commandsInterface';
import { RegistrationLocatorsType } from '../locators/types';

export class SessionCommands extends CommandsInterface {
  registerLocators: RegistrationLocatorsType;

  constructor(driver: WebdriverIO.Browser, registerLocators: RegistrationLocatorsType) {
    super(driver);
    this.registerLocators = registerLocators;
  }

  async register(username: string, password: string) {
    await this.tapElement(this.registerLocators.goRegister);

    await Promise.all([
      await this.setValueOfElement(this.registerLocators.emailInput, username),
      await this.setValueOfElement(this.registerLocators.passwordInput, password),
    ]);

    await this.tapElement(this.registerLocators.registerButton);
  }
}
