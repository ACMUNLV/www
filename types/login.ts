import { z } from 'zod'

export const loginSchema = z
  .object({
    email: z
      .string()
      .email()
      .refine((email) => email.endsWith('@unlv.nevada.edu'), {
        message: 'Email must end with @unlv.nevada.edu',
      }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
    confirmPassword: z.string().min(6, { message: 'Confirm Password must be at least 6 characters.' }).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.confirmPassword && data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        message: "Passwords don't match",
        code: z.ZodIssueCode.custom,
      })
    }
  })

export type LoginFormData = z.infer<typeof loginSchema>
