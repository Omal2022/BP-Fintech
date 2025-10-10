// components/error/ErrorBoundaryWrapper.tsx
// Purpose: Strongly-typed functional Error Boundary wrapper for production use.
// Wraps app children, logs errors with context (route, userId),
// and shows a friendly fallback UI via react-error-boundary.

import React, { FC, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { mapErrorToSeverity } from "../../lib/useErrorSeverity"



interface RootState {
  user?: {
    id?: string | number | null;
  };
}

interface ErrorBoundaryWrapperProps {
  children: ReactNode;
}

interface ErrorInfo {
  componentStack?: string;
}

const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ children }) => {
  const location = useLocation();
  const userId = useSelector<RootState, string | number | null>(
    (state) => state.user?.id ?? null
  );

  const handleError = (error: Error, info: ErrorInfo): void => {
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

    // Uncomment this line when the logger is ready
    // logError(payload);

    console.warn("🚨 An error occurred and was logged:", payload);
  };

  const handleReset = (): void => {
    console.log("🔄 Retrying the failed section...");
    window.location.reload();
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback as React.ComponentType<FallbackProps>}
      onError={handleError}
      onReset={handleReset}
      resetKeys={[location.pathname]}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWrapper;
