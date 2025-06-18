import { BrowserRouter } from "react-router";
import { Auth } from "./auth";
import { Employee } from "./employee";
import { Admin } from "./admin";

const session = {
   user: {
      role: "admin",
   }
}

export function Routes(){
   function RouteUser(){
      switch (session.user.role) {
         case "admin":
            return <Admin />
         case "employee":
            return <Employee />
         default:
            return <Auth />
      }
   }

   return (
      <BrowserRouter>
         <RouteUser />
      </BrowserRouter>
   )
}