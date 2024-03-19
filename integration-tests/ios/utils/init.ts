import { remote, RemoteOptions } from "webdriverio";

async function expoDeepLink(driver: WebdriverIO.Browser) {
  const urlFieldSelector = 'label == "Address"';
  const urlField = await driver.$(`-ios predicate string:${ urlFieldSelector }`);
  await urlField.setValue('exp://127.0.0.1:8081/\uE007');
}

async function handleFirstLaunch(driver: WebdriverIO.Browser) {
  try {
    const gotItSelector = 'label == "Got it"';
    const gotIt = await driver.$(`-ios predicate string:${gotItSelector}`);
    await gotIt.click();
    await reloadExpo(driver);
  } catch (err) {
    console.log('No need to handle first launch');
  }
}

async function reloadExpo(driver: WebdriverIO.Browser) {
  await driver.shake();
  const reloadSelector = 'type == \'XCUIElementTypeOther\' && name == \'Reload\'';
  const reload = await driver.$(`-ios predicate string:${ reloadSelector }`);
  await reload.click();
}

export async function launchExpoIOS(remoteOptions: RemoteOptions) {
  const driver = await remote(remoteOptions);
  await driver.execute('mobile: launchApp', { bundleId: 'com.apple.mobilesafari' });
  await expoDeepLink(driver);
  await handleFirstLaunch(driver);
  await reloadExpo(driver);
  return driver;
}
