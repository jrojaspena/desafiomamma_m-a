import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"
import { Button } from "react-bootstrap"


const Carrito = () => {
  const {pizzas, total, setPizzas, setTotal} =useContext(PizzaContext);

  const handleIncrement = (id) => {
    const updatedPizzas = pizzas.map((p) =>
      p.id === id ? { ...p, cantidad: (p.cantidad || 0) + 1 } : p
    );

    setPizzas(updatedPizzas);
    recalculateTotal(updatedPizzas);
  };

  const handleDecrement = (id) => {
    const updatedPizzas = pizzas.map((p) =>
      p.id === id ? { ...p, cantidad: Math.max(0, (p.cantidad || 0) - 1) } : p
    );

    setPizzas(updatedPizzas);
    recalculateTotal(updatedPizzas);
  };

  const recalculateTotal = (updatedPizzas) => {
    const newTotal = updatedPizzas.reduce((acc, p) => acc + (p.cantidad || 0) * p.price, 0);
    setTotal(newTotal);
  };
  return (
    <div style={{display:'flex', flexDirection:'column', padding:'40px'}}>
      <h4>Detalles del pedido:</h4>
      <hr />
      {
        pizzas.filter((p) => typeof p.cantidad != 'undefined' && p.cantidad > 0).map((p)=> {
          return (
          <div key={pizzas.id} style={{display:'flex', justifyContent:'space-between', alignItems: 'center', marginBottom: '10px'}}>
             <div style={{display:"flex"}}>
               <img src={p.img} style={{width:'5vw'}}/>
               <h5 style={{ padding:"15px"}}>{p.name}</h5>
             </div>
             <div style={{display:"flex",alignItems:"center", justifyContent:"space-evenly"}}>
              <h5 style={{padding:"15px"}}>${p.cantidad * p.price}</h5>
              <div style={{display:'flex'}}>
                <Button onClick={() => handleDecrement(p.id)} variant="danger">-</Button>
                <h5 style={{padding:"4px"}}>{p.cantidad}</h5>
                <Button onClick={() => handleIncrement(p.id)} variant="primary">+</Button>
              </div>
             </div>
          </div>
          )
        })
      }
      <hr />
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <h3>Total a Pagar:</h3>
        <h4> ${total}</h4>
      </div>
      <Button variant='success' style={{display:"flex", width:"100px"}}>Ir a Pagar</Button>
    </div>
  )
}

export default Carrito