import type { CapacitorConfig } from "@capacitor/cli";
import { loadEnv } from "vite";

const credentials = loadEnv("", process.cwd(), "KEY_");

const {
  KEY_STORE_PATH,
  KEY_STORE_ALIAS,
  KEY_STORE_PASSWORD,
  KEY_STORE_ALIAS_PASSWORD,
} = credentials;

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
