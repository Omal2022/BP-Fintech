export interface ValidationErrors {
  email?: string;
  password?: string;
}

import type { ValidationErrors } from "../types/auth";


/**
 * Validate email and password inputs
 * @param email - The user's email input
 * @param password - The user's password input
 * @returns Object containing errors (if any)
 */
export const validateInputs = (
  email: string,
  password: string
): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Email validation
  if (!email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  // Password validation
  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  return errors;
};
