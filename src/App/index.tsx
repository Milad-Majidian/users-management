// import "./App.css";
import "@/variable/variable.css";
import Router from "@/router";
import AppProvider from "./AppProvider";
import "@mantine/core/styles.css";
import ErrorBoundaryWrapper from "./ErrorBoundaryWrapper";
import Header from "@/components/Header";
import '@mantine/notifications/styles.css';

function App() {
  return (
    <>
      <ErrorBoundaryWrapper>
        <AppProvider>
          <Router />
        </AppProvider>
      </ErrorBoundaryWrapper>
    </>
  );
}

export default App;
