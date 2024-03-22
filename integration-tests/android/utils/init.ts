import { remote } from "webdriverio";

export async function launchExpoAndroid(remoteOptions: any) {
  const client = await remote(remoteOptions);
  await client.terminateApp(remoteOptions.capabilities["appium:appPackage"] ?? '');
  await client.startActivity(remoteOptions.capabilities["appium:appPackage"] ?? '', remoteOptions.capabilities["appium:appActivity"] ?? ''); //Reload to force update
  await client.execute('mobile:deepLink', { url: 'exp://127.0.0.1:8081', package: remoteOptions.capabilities["appium:appPackage"] ?? '' });
  return client;
}
