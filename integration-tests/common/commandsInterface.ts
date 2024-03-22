export class CommandsInterface {
  driver: WebdriverIO.Browser;

  static MAX_ELEMENT_WAIT_THRESHOLD_MS = 13000;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  async findElement(
    elementLocator: string,
    timeout: number = CommandsInterface.MAX_ELEMENT_WAIT_THRESHOLD_MS,
  ) {
    const element = await this.driver.$(elementLocator);
    await element.waitForExist({
      timeout: timeout,
    });
    return element;
  }

  async tapElement(
    elementLocator: string,
    timeout: number = CommandsInterface.MAX_ELEMENT_WAIT_THRESHOLD_MS,
  ) {
    const element = await this.findElement(elementLocator, timeout);
    return element.click();
  }

  async setValueOfElement(
    elementLocator: string,
    value: string,
    timeout: number = CommandsInterface.MAX_ELEMENT_WAIT_THRESHOLD_MS,
  ) {
    const element = await this.findElement(elementLocator, timeout);
    await element.setValue(value);
  }

  async checkElementExists(
    elementLocator: string,
    timeout: number = CommandsInterface.MAX_ELEMENT_WAIT_THRESHOLD_MS,
  ) {
    try {
      await this.findElement(elementLocator, timeout);
      return true;
    } catch (e) {
      return false;
    }
  }
}
