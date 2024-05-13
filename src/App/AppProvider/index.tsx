import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import theme from "@/themes";
import { BrowserRouter } from "react-router-dom";

function AppProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <MantineProvider theme={theme}>
        <ModalsProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}

export default AppProvider;
