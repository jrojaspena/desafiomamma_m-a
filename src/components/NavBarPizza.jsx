import { NavLink, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";


const NavBarPizza = () => {
  const navigate = useNavigate();
  const {total} = useContext(PizzaContext);
  const verCarrito = (e) => {
    navigate('/carrito');
  }
  return (
    <Navbar expand="lg" className="bg-success d-flex justify-content-md-between fs-3 sticky-top" >
      <div>
        <NavLink to="/pizzeria_mammamia" className="nav-link" style={{color:'white', paddingLeft:'30px'}}>
        🍕Pizzería Mamma Mia!
        </NavLink> 
        </div>
      <div style={{display:'flex'}}>
         < Button variant="success" onClick={(e) => verCarrito(e)}> <BsCart4 style={{fontSize:'30px'}}/></Button> 
          <div style={{marginRight:'2em', color:'white'}}>$ {total}</div>
      </div>
    </Navbar>
  )
}

export default NavBarPizza