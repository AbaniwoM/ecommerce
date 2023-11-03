import "./Reviews.scss";
import cheries from "../../assets/cherries.png";
import ReviewCard from "./ReviewCard";
import reviewImg from "../../assets/woman-happy.jpg";
import reviewImgTwo from "../../assets/man-smile.jpg";
import arrowRight from "../../assets/arrow-right-short.svg";


const Reviews = () => {
  return (
    <div className="m-5">
        <div className="d-flex flex-column align-items-center text-center p-5">
            <h2>Customers Reviews</h2>
            <img src={cheries} alt="cheries" className="cherry-img" />
        </div>
        <div className="d-flex flex-wrap gap-5 justify-space-around reviewCards">
        <div>
            {
               <ReviewCard 
                  review_img={reviewImg}
                  review_text={"Mila Kunis"}
               />
            }
        </div>
        <div className="d-flex flex-column align-items-center text-center gap-3 text-white reviewMidCard">
            <h1>Deal of The Day 15% Off On All Vegetables!</h1>
            <p>I am text block. Click edit button to change this tex em ips</p>
            <button type="button" className="btn btn-success btn-md d-flex justify-content-center align-items-center gap-2">
              SHOP NOW
              <img src={arrowRight} alt="arrow-right" className="arrow-right" />
            </button>
        </div>
        <div>
            {
               <ReviewCard 
                  review_img={reviewImgTwo}
                  review_text={"Mike Sendler"}
               />
            }
        </div>
        </div>
    </div>
  )
}

export default Reviews;