import { Request, Response } from "express"
import { z } from "zod"

export class TeamsFuncs {
   async create(request: Request, response: Response) {
      const bodySchema = z.object({
         name: z.string().trim().min(1),
         description: z.string().trim().min(1)
      })

      const { name, description } = bodySchema.parse(request.body)

      return response.status(201).json()
   }
}