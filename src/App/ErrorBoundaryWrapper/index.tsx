import { NotFounded } from "@/components/NotFound";
import { ErrorBoundary } from "react-error-boundary";

function ErrorBoundaryWrapper({ children }: { children: React.ReactNode }) {
  const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
    return <NotFounded />;
  };

  return (
    <>
      <ErrorBoundary fallback={<ErrorFallback />}>{children}</ErrorBoundary>
    </>
  );
}

export default ErrorBoundaryWrapper;
