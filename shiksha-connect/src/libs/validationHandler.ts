import { ZodError } from "zod";
import type { ZodIssue } from "zod";

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResponse {
  success: false;
  message: string;
  errors: ValidationError[];
}

export function handleZodError(error: ZodError): ValidationResponse {
  const errors = error.errors.map((err: ZodIssue) => ({
    field: err.path.join('.'),
    message: err.message
  }));

  return {
    success: false,
    message: "Validation Error",
    errors
  };
}

export function createValidationResponse(errors: ValidationError[]): ValidationResponse {
  return {
    success: false,
    message: "Validation Error",
    errors
  };
}
