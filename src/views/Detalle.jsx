import { useContext } from "react";
import { useParams } from "react-router-dom"
import { PizzaContext } from "../context/PizzaContext";
import { Button } from "react-bootstrap";

const Detalle = () => {
  const {pizzas, setPizzas, total, setTotal} = useContext(PizzaContext)
  const {id} = useParams();
  const index = pizzas.findIndex ((p) => p.id === id)
  const pizzaActual = pizzas[index];

  const addToCart = () => {
    const isInCart = pizzas.some((p) => p.id === id);

    if (isInCart) {
        const updatedPizzas = pizzas.map((p) =>
        p.id === id ? { ...p, cantidad: (p.cantidad || 0) + 1 } : p
      );
      setPizzas(updatedPizzas);
    } else {
      setPizzas([...pizzas, { ...pizzaActual, cantidad: 1 }]);
    }
    const newTotal = total + pizzaActual.price;
    setTotal(newTotal);
  };

  return (
    < div style={{ padding:"20px", border:"1px solid black", margin:"20px"}}>
      <div style={{display:'flex'}}>
        <div>
          <img src={pizzaActual.img} style={{width:'28vw'}}/>
        </div>
        <div style={{display:'flex', flexDirection:'column', marginLeft:" 10px"}}>
          <h2>{pizzaActual.name}</h2>
          <p>{pizzaActual.desc}</p>
          <h4>Ingredientes:</h4>
          <ul>
              {pizzaActual.ingredients.map((ingredient, index) => (
                <li key={index} style={{ listStyleType: "none", marginBottom: "8px" }}>
                  <span role="img" aria-label="pizza" style={{ marginRight: "8px" }}>
                    🍕
                  </span>
                  {ingredient}
                </li>
              ))}
            </ul>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <h3>$ {pizzaActual.price}</h3>
            <Button style={{width:"100px", backgroundColor:"#0F6C0B", border:"none"}} onClick={addToCart}>🛒Añadir</Button>
          </div>
          
        </div>
      </div>
   </div>
  )
}

export default Detalle