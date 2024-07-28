import { worker } from "./browser";

export const initializeWorker = async () => {
  await worker.start({
    serviceWorker: {
      url:
        import.meta.env.MODE === "production"
          ? "/ecotravel/mockServiceWorker"
          : "mockServiceWorker.js",
    },
    onUnhandledRequest: "bypass",
  });
};
