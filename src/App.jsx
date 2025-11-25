import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamMembersPage from "./pages/TeamMembersPage";
import TeamMemberDetailPage from "../src/pages/TeamMemberDetail";
import History from "../src/pages/OurHistory";
import Faq from "../src/pages/Faq";
import About from "../src/pages/About";
import Services from "../src/pages/Services";
import Home from "../src/pages/Home";
import Blog from "../src/pages/Blog";
import Portfolio from "../src/pages/Portfolio";
import PortfolioDetailsPage from "../src/pages/PortfolioDetailsPage";
import Contact from "../src/pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-members" element={<TeamMembersPage />} />
        <Route path="/team/:id" element={<TeamMemberDetailPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/* FIXED ROUTE */}
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/portfolio/:id" element={<PortfolioDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;



