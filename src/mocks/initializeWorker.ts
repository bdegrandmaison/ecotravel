import { worker } from "./browser";

export const initializeWorker = async () => {
  await worker.start({ onUnhandledRequest: "bypass" });
};
