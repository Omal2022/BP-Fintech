
import type { ErrorLogPayload } from "../types/error";

export const logError = (payload: ErrorLogPayload): void => {
  if (import.meta.env.DEV) {
    console.error("[ErrorBoundary]", payload);
  } else {
    console.error("[ErrorBoundary]", payload);
  }
};