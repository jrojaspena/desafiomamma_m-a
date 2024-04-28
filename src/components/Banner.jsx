import { Carousel, Image } from "react-bootstrap"

const Banner = () => {
  return (
    <Carousel style={{width:'100%'}}>
    <Carousel.Item>
      <Image src="https://orders.pizzadelight.com/assets/img/pizzadelight/banner.jpg"  text="First slide" />
      <Carousel.Caption>
        <h1 className="fw-bold text-center mb-5">¡Pizzería Mamma Mia!</h1>
        <h3 className="mb-5 pb-5">¡Tenemos las mejores pizzas que podrás encontrar!</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src="https://www.webstaurantstore.com/uploads/seo_category/2023/3/pizza-supplies-header.jpg" style={{width:'100%'}} text="Second slide" />
      <Carousel.Caption>
        <h1 className="fw-bold text-center mb-5">¡Pizzería Mamma Mia!</h1>
        <h3 className="mb-5 pb-5">¡Tenemos las mejores pizzas que podrás encontrar!</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Banner