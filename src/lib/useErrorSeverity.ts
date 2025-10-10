/**
 * Maps an error to severity.
 */
export function mapErrorToSeverity(error: Error): string {
  const msg = error.message.toLowerCase();
  if (error.name.includes("TypeError") || error.name.includes("ReferenceError"))
    return "high";
  if (msg.includes("timeout") || msg.includes("network")) return "medium";
  if (msg.includes("auth") || msg.includes("validation")) return "low";
  return "error";
}
