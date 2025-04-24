import type { CapacitorConfig } from "@capacitor/cli";
import { loadEnv } from "vite";

const credentials = loadEnv("", process.cwd(), "");
const KEY_STORE_PATH = credentials.KEY_STORE_PATH;
const KEY_STORE_ALIAS = credentials.KEY_STORE_ALIAS;
const KEY_STORE_PASSWORD = credentials.KEY_STORE_PASSWORD;
const KEY_STORE_ALIAS_PASSWORD = credentials.KEY_STORE_ALIAS_PASSWORD;

const config: CapacitorConfig = {
  appId: "com.notea.app",
  appName: "notea",
  webDir: "dist",

  android: {
    buildOptions: {
      releaseType: "APK",
      keystorePath: KEY_STORE_PATH,
      keystoreAlias: KEY_STORE_ALIAS,
      keystorePassword: KEY_STORE_PASSWORD,
      keystoreAliasPassword: KEY_STORE_ALIAS_PASSWORD,
    },
  },
};

export default config;
