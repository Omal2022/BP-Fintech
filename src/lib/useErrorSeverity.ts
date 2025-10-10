// src/lib/useErrorSeverity.ts
export function mapErrorToSeverity(error: Error, info?: any): "high" | "medium" | "low" {
  if (error.name.includes("TypeError") || error.name.includes("ReferenceError")) return "high";
  if (error.message.match(/timeout|NetworkError|fetch/i)) return "medium";
  if (error.message.match(/validation|Invalid|Auth/i)) return "low";
  return "low";
}
