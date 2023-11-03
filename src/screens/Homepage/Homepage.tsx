import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import Reviews from "../../components/Reviews/Reviews";
import { Content, Shop, SubContent } from "../../components/Shop/Shop";

const Homepage = () => {
  return (
    <div>
       <Header />
       <Hero /> 
       <Products />
       <Shop />
       <Content />
       <SubContent />
       <Reviews />
       <Footer />
    </div>
  )
}

export default Homepage;