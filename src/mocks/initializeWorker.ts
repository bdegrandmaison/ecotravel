import { worker } from "./browser";

export const initializeWorker = async () => {
  await worker.start({
    findWorker(scriptUrl, mockServiceWorkerUrl) {
      return scriptUrl.includes("mockServiceWorker");
    },
    onUnhandledRequest: "bypass",
  });
};
