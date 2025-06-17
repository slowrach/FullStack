import { Route, Routes } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { NotFound } from "../pages/NotFound";
import { Dashboard } from "../pages/Dashboard";

export function Admin(){
   return (
      <Routes>
         <Route path="/" element={<AppLayout />} >
            <Route path="/" element={<Dashboard />} />
         </Route>

         <Route path="*" element={<NotFound />} />
      </Routes>
   )
}