import "./Products.scss";
import cheries from "../../assets/cherries.png";
import veges from "../../assets/vegetables.jpg";
import dessert from "../../assets/dessert.jpg";
import oliveOil from "../../assets/oliveoil.jpg";
import strawberry from "../../assets/strawberries.jpg";
import ProductCard from "../ProductCard/ProductCard";


const Products = () => {
  return (
    <div className="m-5">
      <div className="d-flex flex-column align-items-center text-center p-5">
        <h2>Best Selling Products</h2>
        <img src={cheries} alt="cheries" className="cherry-img" />
      </div>
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <div>
            {
               <ProductCard 
                prod_img={veges}
                prod_para={"Vegetables"}
                prod_text={"Vege Combo"}
                prod_amt={"₦4500"}
               /> 
            }
        </div>
        <div>
            {
               <ProductCard 
                prod_img={strawberry}
                prod_para={"Fruits"}
                prod_text={"Strawberries"}
                prod_amt={"₦4500"}
               /> 
            }
        </div>
        <div>
            {
               <ProductCard 
                prod_img={oliveOil}
                prod_para={"Fruits"}
                prod_text={"Olive Oil"}
                prod_amt={"₦4000"}
               /> 
            }
        </div>
        <div>
            {
               <ProductCard 
                prod_img={dessert}
                prod_para={"Dessert"}
                prod_text={"Cup Cakes"}
                prod_amt={"₦5500"}
               /> 
            }
        </div>
      </div>
    </div>
  );
};

export default Products;
