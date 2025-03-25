import { Request, Response } from "express"
import { z } from "zod" 

export class SessionFuncs {
   async create(request: Request, response: Response) {
      const bodySchema = z.object({
         email: z.string().email(),
         password: z.string().trim().min(5)
      })

      const { email, password } = bodySchema.parse(request.body)

      return response.status(201).json()
   }
}