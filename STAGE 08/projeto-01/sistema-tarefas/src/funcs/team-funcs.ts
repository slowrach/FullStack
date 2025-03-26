import { Request, Response } from "express"
import { prisma } from "../database/prisma"
import { z } from "zod"

export class TeamFuncs {
   async create(request: Request, response: Response) {
      const bodySchema = z.object({
         name: z.string().trim().min(1),
         description: z.string().trim().min(1)
      })

      const { name, description } = bodySchema.parse(request.body)

      await prisma.teams.create({
         data: {
            name,
            description
         }
      })

      return response.status(201).json()
   }
}