import { Route, Routes } from "react-router"
import { Layout } from "../components/layout/Layout"
import { Home } from "../pages/Home"
import { Product } from "../pages/Product"
import { Laptop } from "../pages/Laptop"
import { NotFound } from "../pages/NotFound"

export function AppRoutes(){
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<Laptop />}/>
         </Route>

         <Route path="*" element={<NotFound />} />
      </Routes>
   )
}