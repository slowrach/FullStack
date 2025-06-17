import { BrowserRouter } from "react-router";
import { Auth } from "./auth";
import { Employee } from "./employee";
import { Admin } from "./admin";

export function Routes(){
   return (
      <BrowserRouter>
         <Admin />
      </BrowserRouter>
   )
}