import path from "node:path"
import { create } from "../funcs/create.js"
import { index } from "../funcs/index.js"
import { update } from "../funcs/update.js"
import { updateStatus } from "../funcs/updateStatus.js"
import { remove } from "../funcs/remove.js"

export const tickets = [
   {
      method: "POST",
      path: "/tickets",
      func: create,
   },

   {
      method: "GET",
      path: "/tickets",
      func: index,
   },

   {
      method: "PUT",
      path: "/tickets/:id",
      func: update,
   },

   {
      method: "PATCH",
      path: "/tickets/:id/close",
      func: updateStatus,
   },

   {
      method: "DELETE",
      path: "/tickets/:id",
      func: remove,
   }
]