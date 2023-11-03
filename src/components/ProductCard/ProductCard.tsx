import "./ProductCard.scss";
import star from "../../assets/star.svg";

interface ProductCardProps {
   prod_img : string;
   prod_para: string;
   prod_text: string;
   prod_amt: string;
}

const ProductCard = ({prod_img, prod_para, prod_text, prod_amt}: ProductCardProps) => {
  return (
    <div className="d-flex flex-column align-items-center">
       <div>
          <img src={prod_img} alt="prod-image" className="prod-img" />
       </div> 
       <div className="pt-3">{prod_para}</div>
       <div className="fs-5 fw-bold" style={{cursor: "pointer"}}>{prod_text}</div>
       <div className="d-flex pt-1">
         <img src={star} alt="star" className="prod-star" />
         <img src={star} alt="star" className="prod-star" />
         <img src={star} alt="star" className="prod-star" />
         <img src={star} alt="star" className="prod-star" />
         <img src={star} alt="star" className="prod-star" />
       </div>
       <div className="pt-1">{prod_amt}</div>
    </div>
  )
}

export default ProductCard;