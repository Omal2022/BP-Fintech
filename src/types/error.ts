import type { Severity } from "../lib/useErrorSeverity";

export interface ErrorLogPayload {
  timestamp: string;
  route: string;
  userId: string | null;
  errorName: string;
  errorMessage: string;
  stack?: string;
  componentStack?: string;
  severity: Severity;
}