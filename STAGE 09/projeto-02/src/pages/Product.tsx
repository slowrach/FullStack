import { useSearchParams } from "react-router"

export function Product(){
   const [params] = useSearchParams()
   const category = params.get("category")

   return (
      <div>
         <a href="/">Voltar</a>
         <h1>Produtos</h1>

         {category &&(<span>Categoria: <strong>{category}</strong></span>)}

         <div className="cards">
            <a href="/products/1">Laptop 1</a>
            <a href="/products/2">Laptop 2</a>
            <a href="/products/3">Laptop 3</a>
            <a href="/products/4">Laptop 4</a>
            <a href="/products/5">Laptop 5</a>
         </div>
      </div>
   )
}