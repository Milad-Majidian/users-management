// import "./App.css";
import "@/variable/variable.css";
import Router from "@/router";
import AppProvider from "./AppProvider";
import "@mantine/core/styles.css";
import ErrorBoundaryWrapper from "./ErrorBoundaryWrapper";
import Header from "@/components/Header";
import { ContactContext } from "@/context";
import { useState } from "react";

function App() {
  return (
    <>
      <ErrorBoundaryWrapper>
        <AppProvider>
          <Header />
          <Router />
        </AppProvider>
      </ErrorBoundaryWrapper>
    </>
  );
}

export default App;
