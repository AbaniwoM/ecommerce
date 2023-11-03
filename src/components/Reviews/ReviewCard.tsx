import star from "../../assets/star.svg";
import "./ReviewCard.scss";

interface ReviewCardProps {
  review_img: string;
  review_text: string;
}

const ReviewCard = ({review_img, review_text}: ReviewCardProps) => {
  return (
    <div className="reviewCard d-flex gap-3 flex-column align-items-center">
        <div className="d-flex pt-1 gap-1">
            <img src={star} alt="star" className="prod-star" />
            <img src={star} alt="star" className="prod-star" />
            <img src={star} alt="star" className="prod-star" />
            <img src={star} alt="star" className="prod-star" />
            <img src={star} alt="star" className="prod-star" />
        </div>
        <p className="text-center">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className="d-flex gap-2">
            <img src={review_img} alt="review-img" className="reviewImg" />
            <p className="reviewText">{review_text}</p>
        </div>
    </div>
  )
}

export default ReviewCard;