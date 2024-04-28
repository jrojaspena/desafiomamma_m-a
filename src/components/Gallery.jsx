import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"
import PizzaCard from "./PizzaCard"

const Gallery = () => {
  const {pizzas} = useContext(PizzaContext)
  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:"50px", margin:"50px 100px", maxWidth:"100%"}} >
      {
        pizzas.map((p) => {
          return <PizzaCard key={p.id} pizza={p}></PizzaCard>
        })
      }
    </div>
  )
}

export default Gallery