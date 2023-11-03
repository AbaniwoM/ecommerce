/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import "./Header.scss";
import { MdShoppingCart } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import Hamburger from "./Hamburger";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const navigate = useNavigate();
  return (
    <div className="header bg-success text-white d-flex justify-content-around align-items-center">
        <div className="header__left gap-3 d-flex align-items-center">
            <div className="logo__text fs-5" onClick={() => navigate("/")}>LOGO</div>
            <div className="left__list d-flex gap-3">
                <li onClick={() => navigate("/everything")}>Everything</li>
                <li onClick={() => navigate("/groceries")}>Groceries</li>
            </div>
        </div>
        <div className="header__right gap-4 d-flex text-decoration-none align-items-center">
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
            <div>₦/$19.00</div>
            <div className="header__detail fs-5"><MdShoppingCart /></div>
            <div className="header__detail fs-5"><BsFillPersonFill /></div>
        </div>
        <div className="hamburger">
          <Hamburger />
        </div>
    </div>
  )
}
