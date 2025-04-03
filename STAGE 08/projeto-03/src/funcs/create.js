import { randomUUID } from "node:crypto"

export function create({ request, response, database }) {
   const {equipment, description, username} = request.body

   const ticket = {
      id: randomUUID(),
      equipment, 
      description,
      username,
      status: "open",
      created: new Date(),
   }

   database.new("tickets", ticket)

   response.writeHead(201).end(JSON.stringify(ticket))
}