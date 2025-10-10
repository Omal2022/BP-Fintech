/**
 * User-friendly fallback UI when an error occurs.
 */
import React from "react";

interface Props {
  error: Error;
  resetErrorBoundary: () => void;
  componentStack?: string;
}

const ErrorFallback: React.FC<Props> = ({ error, resetErrorBoundary }) => (
  <div
    role="alert"
    aria-live="assertive"
    className="flex flex-col items-center justify-center min-h-[60vh]"
  >
    <h1 className="text-2xl font-bold mb-3">Something went wrong.</h1>
    <p className="mb-4">Please try again or reload the page.</p>
    <div className="flex gap-3">
      <button onClick={resetErrorBoundary}>Retry</button>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>

    {process.env.NODE_ENV !== "production" && (
      <details className="mt-4 text-left">
        <summary>Show details</summary>
        <pre>{error.message}</pre>
        <pre>{error.stack}</pre>
      </details>
    )}
  </div>
);

export default ErrorFallback;
