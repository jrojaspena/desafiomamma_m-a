import NavBarPizza from "./components/NavBarPizza"
import  {Route, Routes} from "react-router-dom"
import Home from "./views/Home"
import Carrito from "./views/Carrito"
import NotFound from "./views/NotFound"
import Detalle from "./views/Detalle"
function App() {
  return ( 
    <>
     <NavBarPizza/>
     <Routes>
      <Route path="/pizzeria_mammamia" element= {<Home></Home>} ></Route>
      <Route path="/detalle/:id" element= {<Detalle></Detalle>}></Route>
      <Route path="/carrito" element= {<Carrito></Carrito>}></Route>
      <Route path="*" element= {<NotFound></NotFound>}></Route>
     </Routes>
     </>
  )
}

export default App