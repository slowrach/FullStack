import { Request, Response } from "express"
import { z } from "zod"
import { prisma } from "@/database/prisma"
import { AppError } from "@/utils/AppError"

export class RefundFuncs {
   async create(request: Request, response: Response) {
      const bodySchema = z.object({
         name: z.string().trim().min(1),
         category: z.enum(["food", "others", "services", "transport"]),
         value: z.number().positive(),
         filename: z.string().trim().min(10)
      })

      const { name, category, value, filename } = bodySchema.parse(request.body)

      if(!request.user?.id){
         throw new AppError("Unauthorized", 401)
      }

      const refund = await prisma.refund.create({
         data: {
            name,
            category,
            value,
            filename,
            userId: request.user.id
         }
      })

      response.status(201).json(refund)
   }

   async index(request: Request, response: Response) {
      const querySchema = z.object({
         name: z.string().optional().default(""),
         page: z.coerce.number().optional().default(1),
         perPage: z.coerce.number().optional().default(10),
      })

      const { name, page, perPage } = querySchema.parse(request.query)

      const skip = (page - 1) * perPage

      const refunds = await prisma.refund.findMany({
         skip,
         take: perPage,
         where: {
            user: {
               name: {
                  contains: name.trim(),
               }
            }
         },
         include: { 
            user: { select: 
               { name: true } 
            } 
         },
         orderBy: {
            createdAt: "desc"
         },
      })

      const records = await prisma.refund.count({
         where: {
            user: {
               name: {
                  contains: name.trim(),
               }
            }
         },
      })

      const totalPages = Math.ceil(records / perPage)

      response.json({
         refunds,
         pagination: {
            page,
            perPage,
            records,
            totalPages: totalPages > 0 ? totalPages : 1, 
         }
      })
   }

   async show(request: Request, response: Response) {
      const paramsSchema = z.object({
         id: z.string().uuid(),
      })

      const { id } = paramsSchema.parse(request.params)

      const refund = await prisma.refund.findFirst({ where: { id }, include: { user: { select: { name: true } } } })

      response.json(refund)
   }
}