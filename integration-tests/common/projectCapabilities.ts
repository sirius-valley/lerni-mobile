import { RemoteCapability } from "@wdio/types/build/Capabilities";

const APPIUM_HOST = process.env.APPIUM_HOST || 'localhost';
const APPIUM_PORT = process.env.APPIUM_PORT ? parseInt(process.env.APPIUM_PORT, 10) : 4723;
const DEFAULT_WAIT_TIMEOUT = 60000;

export const commonCapabilities = {
  'appium:settings': {
    waitForSelectorTimeout: DEFAULT_WAIT_TIMEOUT,
  },
};

export const androidCapabilities: RemoteCapability = {
  ...commonCapabilities,
  "appium:platformName": 'android',
  "appium:deviceName": 'Android',
  "appium:automationName": 'UiAutomator2',
  'appium:appPackage': 'host.exp.exponent',
  "appium:intentAction": 'android.intent.action.VIEW',
  "appium:appActivity": 'host.exp.exponent.experience.HomeActivity',
  "appium:appWaitForLaunch": true,
  "appium:noReset": true,
  //'appium:appPackage': 'com.fabrizioserial.lerni',
  //'appium:appActivity': 'com.fabrizioserial.lerni.MainActivity',
};

export const iOSCapabilities: RemoteCapability = {
  ...commonCapabilities,
  "appium:platformName": 'iOS',
  "appium:platformVersion": '16.0',
  "appium:deviceName": 'iPhone 14 Pro',
  "appium:automationName": 'XCUITest',
  "appium:bundleId": 'com.apple.mobilesafari',
  "appium:autoAcceptAlerts": true,
  "appium:appWaitForLaunch": true,
  "appium:noReset": true,
  //"appium:app": "com.fabrizioserial.lerni",
};

export const iOSRemoteOptions = {
  hostname: APPIUM_HOST,
  port: APPIUM_PORT,
  capabilities: iOSCapabilities,
};

export const androidRemoteOptions = {
  hostname: APPIUM_HOST,
  port: APPIUM_PORT,
  capabilities: androidCapabilities,
};
