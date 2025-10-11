export type Severity = "high" | "medium" | "low" | "error";

/**
 * Maps an error to severity.
 */
export function mapErrorToSeverity(error: Error): Severity {
  const msg = error.message.toLowerCase();
  if (error.name.includes("TypeError") || error.name.includes("ReferenceError"))
    return "high";
  if (msg.includes("timeout") || msg.includes("network")) return "medium";
  if (msg.includes("auth") || msg.includes("validation")) return "low";
  return "error";
}
