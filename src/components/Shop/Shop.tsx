import ShopCard from "./ShopCard";
import shopFruit from "../../assets/grapes.png";
import shopVeg from "../../assets/bellpeppers.png";
import shopLegume from "../../assets/mealgea.png";
import arrowRight from "../../assets/arrow-right-short.svg";
import "./Shop.scss";

export const Shop = () => {
  return (
    <div className="shopItems d-flex justify-content-center gap-4 flex-wrap">
      <div>
        {
          <ShopCard 
            shop_text={"Farm Fresh Fruits"}
            shop_para={"Ut sollicitudin quam vel purus tempus, vel eleifend felis varius."}
            shop_img={shopFruit}
          />
        }
      </div>
      <div>
        {
          <ShopCard 
            shop_text={"Fresh Vegetables"}
            shop_para={"Aliquam porta justo nibh, id laoreet sapien sodales vitae justo."}
            shop_img={shopVeg}
          />
        }
      </div>
      <div>
        {
          <ShopCard 
            shop_text={"Organic Legume"}
            shop_para={"Phasellus sed urna mattis, viverra libero sed, aliquam est."}
            shop_img={shopLegume}
          />
        }
      </div>
      
    </div>
    
  )
}

export const Content = () => {
  return (
    <div className="d-flex justify-content-around bg-dark text-white pt-5 pb-5 flex-wrap text-center">
        <h1>Get 25% Off On Your First Purchase!</h1>
        <button type="button" className="btn btn-success btn-md d-flex justify-content-center align-items-center gap-2">
        SHOP NOW
        <img src={arrowRight} alt="arrow-right" className="arrow-right" />
        </button>
    </div>
  )
}

export const SubContent = () => {
  return (
    <div className="subItems d-flex justify-content-center pt-4 pb-4 text-center">
      <h4>Try It For Free. No Registration Needed.</h4>
    </div>
  )
}

