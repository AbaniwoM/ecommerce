import heroImg from "../../assets/vegetables-hero.png";
// import HeroCard from "../HeroCard/HeroCard";
import "./Hero.scss";
import shipping from "../../assets/truck.svg";
import products from "../../assets/patch-check.svg";
import savings from "../../assets/cash.svg";
import returns from "../../assets/recycle.svg";

const Hero = () => {
  return (
    <div>
    <div className="d-flex flex-row justify-content-around align-items-center m-5 pt-5 pb-4">
        <div className="hero__wrap">
        <img src={heroImg} alt="hero-img" className="hero__img" />
        <div className="hero__text">
            <h3>Best Quality Products</h3>
            <h1>Foodstuff Delivered <br /> Smoothly</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button type="button" className="btn btn-success">SHOP NOW</button>
        </div>
        </div>
    </div>
    {/* <div className="bg-dark d-flex gap-4 justify-content-center align-items-center p-5 flex-wrap">
       <div>
        {
            <HeroCard 
               img_src={shipping}
               text={"Free Shipping"}
               paragraph={"Above ₦2500 Only"}
            />
        }
       </div> 
       <div className="certProd">
        {
            <HeroCard 
               img_src={products}
               text={"Certified Products"}
               paragraph={"100% Guarantee"}
            />
        }
       </div>
       <div>
        {
            <HeroCard 
               img_src={savings}
               text={"Huge Savings"}
               paragraph={"At Lowest Price"}
            />
        }
       </div>
       <div className="easyReturns">
        {
            <HeroCard 
               img_src={returns}
               text={"Easy Returns"}
               paragraph={"No Questions Asked"}
            />
        }
       </div>
    </div> */}

    <div className="hero__products">
        <div className="product__container">
        <div className="product__item">
            <img src={shipping} alt="shipping" className="hero__images" />
            <div className="product__text">
                <h5>Free Shipping</h5>
                <p>Above ₦2500 Only</p>
            </div>
        </div>
        </div>
        <div className="product__container">
        <div className="product__item">
            <img src={products} alt="products" className="hero__images" />
            <div>
                <h5>Certified Products</h5>
                <p>100% Guarantee</p>
            </div>
        </div>
        </div>
        <div className="product__container">
        <div className="product__item">
            <img src={savings} alt="savings" className="hero__images"/>
            <div>
                <h5>Huge Savings</h5>
                <p>At Lowest Prices</p>
            </div>
        </div>
        </div>
        <div className="product__container">
        <div className="product__item">
            <img src={returns} alt="returns" className="hero__images" />
            <div>
                <h5>Easy Returns</h5>
                <p>No Questions Asked</p>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Hero;
