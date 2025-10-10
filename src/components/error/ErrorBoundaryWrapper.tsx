// components/error/ErrorBoundaryWrapper.tsx
// Purpose: Functional Error Boundary wrapper for production use.
// Wraps app children, logs errors with context (route, userId),
// and shows a friendly fallback UI via react-error-boundary.

// import React, { FC, ReactNode } from "react"; 
import { ErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";
import ErrorFallback from "./ErrorFallback";
// import { logError } from "../../lib/errorLogger";
import { mapErrorToSeverity } from "../../lib/useErrorSeverity";
import { useSelector } from "react-redux";

interface Props {
  children: ReactNode;
}

const ErrorBoundaryWrapper: FC<Props> = ({ children }) => {
  const location = useLocation();
  const userId = useSelector((state: any) => state.user?.id || null);

  const handleError = (error: Error, info: { componentStack?: string }) => {
    const payload = {
      timestamp: new Date().toISOString(),
      route: location.pathname,
      userId,
      errorName: error.name,
      errorMessage: error.message,
      stack: error.stack,
      componentStack: info.componentStack,
      severity: mapErrorToSeverity(error, info),
    };

    logError(payload);
    console.warn("We encountered an issue — it has been logged.");
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
