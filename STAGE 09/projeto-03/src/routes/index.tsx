import { BrowserRouter } from "react-router";
import { Auth } from "./auth";
import { Employee } from "./employee";

export function Routes(){
   return (
      <BrowserRouter>
         <Employee />
      </BrowserRouter>
   )
}