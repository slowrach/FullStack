import http from "node:http"

const products = [
   {id: 1, name: "skate", price: 542.50},
   {id: 2, name: "bola de basquete", price: 130},
   {id: 3, name: "tênis da nike", price: 360.99}
]

export const app = http.createServer((request, response) => {
   if(request.method === "GET" && request.url === "/products") {
      response.setHeader("Content-Type", "application/json")
      
      response.end(JSON.stringify(products))
   }
})

