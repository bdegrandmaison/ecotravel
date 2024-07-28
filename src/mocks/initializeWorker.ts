import { worker } from "./browser";

export const initializeWorker = async () => {
  await worker.start({
    serviceWorker: {
      url: "/ecotravel/mockServiceWorker.js",
    },
    onUnhandledRequest: "bypass",
  });
};
