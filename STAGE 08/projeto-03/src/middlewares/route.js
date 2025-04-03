import { routes } from "../routes/index.js"
import { Database } from "../database/database.js"
import { queryParams } from "../utils/query.js"

const database = new Database()

export function routeHandler(request, response) {
   const route = routes.find((route) => {
      return route.method === request.method && route.path.test(request.url)
   })

   if(route) {
      const routeParams = request.url.match(route.path)

      const { query, ...params } = routeParams.groups

      request.query = query ? queryParams(query) : {}

      request.params = params

      return route.func({ request, response, database })
   }

   return response.writeHead(404).end("Not Found")
}