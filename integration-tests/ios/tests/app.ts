import { iOSRemoteOptions } from '../../common/projectCapabilities';
import { launchExpoIOS } from '../utils/init';

class TestAppIOS {
  private driver: WebdriverIO.Browser | undefined;

  async init() {
    this.driver = await launchExpoIOS(iOSRemoteOptions);
  }

  async quit() {
    if (!this.driver) {
      return;
    }

    await this.driver.deleteSession();
  }

  getDriver() {
    if (!this.driver) {
      throw new Error('Driver uninitialized');
    }
    return this.driver;
  }
}

export { TestAppIOS };
