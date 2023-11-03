import arrowRight from "../../assets/arrow-right-short.svg";
import "./ShopCard.scss";

interface ShopCardProps {
  shop_text: string;
  shop_para: string;
  shop_img: string;
}

const ShopCard = ({shop_text, shop_para, shop_img}:ShopCardProps) => {
  return (
    <div className="shop-box d-flex flex-column bg-white gap-3">
      <div className="fw-bold fs-5">{shop_text}</div>
      <div>{shop_para}</div> 
      <button type="button" className="btn btn-success btn-md d-flex justify-content-center align-items-center gap-2">
        SHOP NOW
        <img src={arrowRight} alt="arrow-right" className="arrow-right" />
      </button>
      <img src={shop_img} alt="shop-img" className="shop-img"/>
    </div>
  )
}

export default ShopCard;