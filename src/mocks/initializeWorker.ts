import { StartOptions } from "msw/browser";
import { worker } from "./browser";

const localConfig: StartOptions = {
  onUnhandledRequest: "bypass",
};

const remoteConfig: StartOptions = {
  ...localConfig,
  serviceWorker: {
    url: "/ecotravel/mockServiceWorker.js",
  },
};

const config =
  import.meta.env.MODE === "development" ? localConfig : remoteConfig;

export const initializeWorker = async () => {
  await worker.start(config);
};
