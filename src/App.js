

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";

import TopBar from "./Components/TopBar/TopBar";
import Footer from "./Components/Footer/Footer";

import "./App.css"
import AboutPage from "./Components/AboutPage/AboutPage";
import Contact_Us from "./Components/Contact_Us/Contact_Us";
import Donations from "./Components/Donations/Donations";
import Recipient from "./Components/Recipient/Recipient";
import Donar from "./Components/Donar/Donar";
import FAQs from "./Components/FAQs/FAQs";
import UsamaFaheem from "./Components/UsamaFaheemAhmed/UsamaFaheem";

function App() {
  return (
    <div className="container-fluid p-0 m-0">
      <BrowserRouter>
        {/* Top Bar */}
        <TopBar />


        {/* Top Side Bar */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/contactUs" element={<Contact_Us />} />
          <Route path="/Explore" element={<Donations />} />
          <Route path="/AddRecipient" element={<Recipient />} />
          <Route path="/addDonar" element={<Donar />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/UsamaFaheemAhmed" element={<UsamaFaheem />} />
        </Routes>

        <div className="donate_footer text-light">
          <Footer />
        </div>

        {/* Footer */}
      </BrowserRouter>


    </div>
  );
}

export default App;
