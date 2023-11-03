import Category from "./Category/Category"
import Color from "./Color/Color"
import Price from "./Price/Price"
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo__container">
            <Category />
            <Price />
            <Color />
        </div>
      </section>
    </>
  )
}

export default Sidebar;