import { Request, Response } from "express"
import { prisma } from "../database/prisma"
import { z } from "zod"

export class TeamFuncs {
   async create(request: Request, response: Response) {
      const bodySchema = z.object({
         name: z.string().trim().min(1),
         description: z.optional(z.string().trim().min(1))
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

   async update(request: Request, response: Response) {
      const paramsSchema = z.object({
         id: z.string().uuid(),
      })

      const bodySchema = z.object({
         name: z.optional(z.string().trim().min(1)),
         description: z.optional(z.string().trim().min(1))
      })

      const { id } = paramsSchema.parse(request.params)
      const { name, description } = bodySchema.parse(request.body)

      await prisma.teams.update({
         data: {
            name,
            description,
         },
         where: {
            id,
         },
      })

      return response.json()
   }

   async remove(request: Request, response: Response) {
      const paramsSchema = z.object({
         id: z.string().uuid()
      })

      const { id } = paramsSchema.parse(request.params)

      await prisma.teams.delete({ where: { id } })

      return response.json()
   }

   async show(request: Request, response: Response) {
      const teams = await prisma.teams.findMany()

      return response.json({ teams })
   }
}