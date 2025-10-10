/**
 * User-friendly fallback UI when an error occurs.
 */
import React, { useState } from "react";

interface Props {
  error: Error;
  resetErrorBoundary: () => void;
  componentStack?: string;
}

const ErrorFallback: React.FC<Props> = ({ error, resetErrorBoundary, componentStack }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Read from environment variable
  const showDevDetails = import.meta.env.VITE_SHOW_ERROR_DETAILS === "true";

  return (
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

      {showDevDetails && (
        <div className="mt-4 text-left">
          <button
            className="mb-2"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide details" : "Show details"}
          </button>

          {showDetails && (
            <div className="bg-gray-100 p-2 rounded">
              <pre className="text-sm">{error.message}</pre>
              <pre className="text-xs text-gray-700">{error.stack}</pre>
              {componentStack && (
                <pre className="text-xs text-gray-600">{componentStack}</pre>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ErrorFallback;
