import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import theme from "@/themes";
import { BrowserRouter } from "react-router-dom";
import { Notifications } from "@mantine/notifications";

function AppProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <ModalsProvider />
          <Notifications position="top-right" />
          {children}
        </MantineProvider>
      </BrowserRouter >
    </>
  );
}

export default AppProvider;
