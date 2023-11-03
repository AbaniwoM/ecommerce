import { Header } from "../../components/Header/Header";
import Recommended from "../../components/Recommended/Recommended";
import Sidebar from "../../components/Sidebar/Sidebar";

const Everything = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        <div className="recommended__flex">
          <Recommended />
        </div>
    </div>
  )
}

export default Everything;