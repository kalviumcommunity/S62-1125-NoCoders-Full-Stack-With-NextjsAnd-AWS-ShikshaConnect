import { z } from "zod";

// User schema for validation (matches the existing API structure)
export const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  total: z.number().min(1, "Total must be greater than 0").max(1000000, "Total cannot exceed 1,000,000"),
});

// Test data schema
export const testSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title cannot exceed 100 characters"),
  description: z.string().min(10, "Description must be at least 10 characters long").max(500, "Description cannot exceed 500 characters"),
  category: z.enum(["frontend", "backend", "fullstack", "devops"]),
  difficulty: z.enum(["beginner", "intermediate", "advanced"])
});

// Shared types inferred from schemas
export type UserInput = z.infer<typeof userSchema>;
export type TestInput = z.infer<typeof testSchema>;
