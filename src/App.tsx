import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import Everything from "./screens/Everything/Everything";
import Groceries from "./screens/Groceries/Groceries";
import Homepage from "./screens/Homepage/Homepage";
import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <div>
      <Router>
        <RouterCover>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/everything" element={<Everything />} />
        </RouterCover>
      </Router>
    </div>
  )
}

export default App;
