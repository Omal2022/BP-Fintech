// ✅ Correct: type-only imports for TypeScript 5+ with verbatimModuleSyntax
import type { ErrorInfo, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorFallback from "./ErrorFallback";
import { mapErrorToSeverity } from "../../lib/useErrorSeverity";
import { logError } from "../../lib/errorLogger";
import type { RootState } from "../../store/store";

interface Props {
  children: ReactNode;
}

const ErrorBoundaryWrapper = ({ children }: Props) => {
  const location = useLocation();
  const userId = useSelector((state: RootState) => state.auth.user);

  const handleError = (error: Error, info: ErrorInfo) => {
    logError({
      timestamp: new Date().toISOString(),
      route: location.pathname,
      userId,
      errorName: error.name,
      errorMessage: error.message,
      stack: error.stack,
      componentStack: info.componentStack ?? undefined,
      severity: mapErrorToSeverity(error),
    });

    console.warn("We encountered an issue. It has been logged.");
  };

  const handleReset = () => {
    console.log("Retrying failed section...");
    window.location.reload();
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={handleError}
      onReset={handleReset}
      resetKeys={[location.pathname]}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWrapper;
