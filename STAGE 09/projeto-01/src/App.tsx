import "./global.css"
import { useState, useEffect } from "react"
import { Button } from "./components/button/button"
import styles from "./app.module.css"

export function App(){
   const [count, setCount] = useState(0)

   function add() {
      setCount(count + 1)
   }

   function del() {
      if (count > 0) {
         setCount(count - 1)
      }
   }

   useEffect(() => {
      console.log("o estado mudou")
   }, [count])

   return (
      <div className={styles.container}>
         <Button name="+" onClick={add}/>

         <span>{count}</span>

         <Button name="-" onClick={del}/>
      </div>
   )
}
