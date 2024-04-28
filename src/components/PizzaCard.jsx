import { useContext } from 'react'
import {Card, Button} from 'react-bootstrap'
import { PizzaContext } from '../context/PizzaContext'
import { useNavigate } from 'react-router-dom';

const PizzaCard = ({pizza}) => {
  const {pizzas, setPizzas, setTotal} = useContext(PizzaContext);
  const navigate = useNavigate();

  const handleClick = () => {
    const index = pizzas.findIndex((p) => p.id === pizza.id);
    const pizzaCarrito = [...pizzas];
    if (typeof pizzaCarrito[index].cantidad != 'undefined') {
      pizzaCarrito[index].cantidad++;
    } else {
      pizzaCarrito[index].cantidad = 1;
    }

    setPizzas([...pizzaCarrito]);
    setTotal(prev => prev + pizza.price);
  }

  const handleDetalle = () => {
    navigate(`/detalle/${pizza.id}`);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
      <Card.Title>{pizza.name}</Card.Title>
      <Card.Text>
      
        <h5>Ingredientes:</h5>
        {pizza.ingredients.map((ingredient, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="pizza" style={{ marginRight: '8px' }}>
              🍕
            </span>
            {ingredient}</li>
      ))}
        
      </Card.Text>
      <div>
        <h2>$ {pizza.price}</h2>
      <Button onClick={handleDetalle} style={{backgroundColor:"#0F6C0B",border:"none", marginRight:"10px" }}>Detalles 👀</Button>
      <Button variant="danger" onClick={handleClick} style={{border:"none" }}>Añadir 🛒</Button>
      </div>
      </Card.Body>
    </Card>
  )
}

export default PizzaCard