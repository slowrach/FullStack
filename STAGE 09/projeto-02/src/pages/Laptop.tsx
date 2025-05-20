import { useParams, useNavigate } from "react-router"

export function Laptop() {
   const { id } = useParams()
   const navigate = useNavigate()
   
   return (
      <div>
         <button type="button" onClick={() => navigate(-1)}>Voltar</button>
         <h2>Detalhes do Produto Laptop</h2>
         <span>ID do produto: <strong>{ id }</strong></span>
      </div>
   )
}