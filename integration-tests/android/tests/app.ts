import { androidRemoteOptions } from "../../common/projectCapabilities";
import { launchExpoAndroid } from "../utils/init";

class TestAppAndroid {
  private driver: WebdriverIO.Browser | undefined;

  async init() {
    this.driver = await launchExpoAndroid(androidRemoteOptions);
  }

  async quit() {
    if (!this.driver) {
      return;
    }

    await this.driver.deleteSession();
  }

  getDriver() {
    if (!this.driver) {
      throw new Error("Driver uninitialized");
    }
    return this.driver;
  }
}

export { TestAppAndroid };
