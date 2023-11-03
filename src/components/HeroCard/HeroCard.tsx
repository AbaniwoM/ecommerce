import "./HeroCard.scss";

interface HeroCardProps {
   img_src: string;
   text: string;
   paragraph: string;
}

const HeroCard = ({ img_src, text, paragraph }: HeroCardProps) => {
  return (
   <div className="card-cover bg-secondary">
      <div className="card-items d-flex gap-3">
      <div className="text-success">
         <img src={img_src} alt="image" className="hero-img" />
      </div>
      <div className="d-flex flex-column text-white">
         <div className="card-text fs-6 fw-bold">{text}</div>
         <div>{paragraph}</div>
      </div>
      </div>
    </div>
  )
}

export default HeroCard;