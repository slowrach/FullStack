import { Request, Response } from "express"
import { prisma } from "../database/prisma" 
import { z } from "zod"
import { AppError } from "../utils/AppError"

export class TaskFuncs {
   async create(request: Request, response: Response) {
      const bodySchema = z.object({
         title: z.string().trim().min(1),
         description: z.optional(z.string().trim().min(1)),
         assignedTo: z.string(),
      })

      const { title, description, assignedTo } = bodySchema.parse(request.body)

      const team = await prisma.members.findUnique({ where: { userId: assignedTo }, select: { teamId: true } })

      const team_id = team?.teamId

      if (!team_id) {
         throw new AppError("You can't create a task, because you don't belong to a team")
      }

      await prisma.tasks.create({
         data: {
            title,
            description,
            assignedTo,
            teamId: team_id
         }
      }) 
            
      return response.status(201).json()
   }

   async show(request: Request, response: Response) {
      const paramsSchema = z.object({
         id: z.string().uuid()
      })

      const { id } = paramsSchema.parse(request.params)

      const task = await prisma.tasks.findUnique({ where:  { id }})

      if(request.user?.role === "member" && request.user.id !== task?.assignedTo) {
         throw new AppError("The user can be only see their tasks", 401)
      }

      return response.json(task)
   }

   async update(request: Request, response: Response) {
      const paramsSchema = z.object({
         id: z.string().uuid()
      })

      const bodySchema = z.object({
         title: z.optional(z.string()),
         description: z.optional(z.string()),
         status: z.optional(z.enum(["pending", "in_progress", "completed"])),
         priority: z.optional(z.enum(["high", "medium", "low"]))
      })

      const { id } = paramsSchema.parse(request.params)

      const { title, description, status, priority } = bodySchema.parse(request.body)

      const taskUpdate = await prisma.tasks.findUnique({ where: { id } })

      if(request.user?.role === "member" && request.user.id !== taskUpdate?.assignedTo) {
         throw new AppError("The user can only update their tasks", 401)
      }

      await prisma.tasks.update({
         data: {
            title,
            description,
            status,
            priority
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

      await prisma.tasks.delete({ where: { id } })

      return response.json()
   }
}