import React, { FC, useEffect, useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  errorMessage?: string;
  stack?: string;
  componentStack?: string;
}

const ErrorDetailsModal: FC<Props> = ({ isOpen, onClose, errorMessage, stack, componentStack }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
    >
      <div className="bg-white p-6 rounded w-3/4 max-w-lg">
        <h3 className="text-xl font-bold mb-3">Error Details</h3>
        <pre className="mb-2"><strong>Message:</strong> {errorMessage}</pre>
        <pre className="mb-2"><strong>Stack:</strong> {stack}</pre>
        {componentStack && <pre className="mb-2"><strong>Component Stack:</strong> {componentStack}</pre>}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() =>
              navigator.clipboard.writeText(`${errorMessage}\n${stack}\n${componentStack}`)
            }
          >
            Copy Details
          </button>
          <button ref={closeRef} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorDetailsModal;
