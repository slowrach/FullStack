import { Request, Response } from "express"
import { z } from "zod" 

export class UserFuncs {
   async create(request: Request, response: Response) {
      const bodySchema = z.object({
         name: z.string().trim().min(1),
         email: z.string().email(),
         password: z.string().trim().min(5)
      })

      const { name, email, password } = bodySchema.parse(request.body)

      return response.status(201).json({ name, email, password })
   }
}