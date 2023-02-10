import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Buy from "./screens/buy";
import Home from "./screens/home";
import Rent from "./screens/rent";
import Owners from "./screens/owners";
import Agents from "./screens/agents";
import Login from "./screens/login";
import Footer from "./components/footer";






function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-a-property" element={<Buy /> } />
        <Route path="/rent-a-property" element={ <Rent /> } />
        <Route path="/home-owners" element={<Owners /> } />
        <Route path="/agents" element={<Agents />} />
        <Route path="/login" element={<Login /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
