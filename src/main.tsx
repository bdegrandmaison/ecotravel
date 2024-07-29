import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import dayjs from "dayjs";
import { ConfigProvider, Spin } from "antd";
import locale from "antd/locale/fr_FR";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initializeWorker } from "./mocks/initializeWorker";
import "dayjs/locale/fr";
import "antd/dist/reset.css";

dayjs.locale("fr");

const queryClient = new QueryClient();

const AppWrapper = lazy(() => initializeWorker().then(() => import("./App")));

const PageLoading = () => <Spin size="large" fullscreen />;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={locale}>
        <Suspense fallback={<PageLoading />}>
          <AppWrapper />
        </Suspense>
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
