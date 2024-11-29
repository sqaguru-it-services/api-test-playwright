import merge from "deepmerge";
import { AppConfig } from "./app-config.interface";

function getAppConfig(): AppConfig {
  let defaultConfig = require(`./config-default.json`);
  if (process.env.TEST_ENV === undefined) {
    throw `'TEST_ENV' environment variable is ${process.env.TEST_ENV}`;
  }
  let envConfig = require(`./config-${process.env.TEST_ENV}.json`);
  console.log("=== app config");
  const appConfig: any = merge(merge(defaultConfig, envConfig), {executionEnv: process.env.TEST_ENV});
  console.log(appConfig);
  return appConfig;
}

const appConfig = getAppConfig();

export { getAppConfig, appConfig };