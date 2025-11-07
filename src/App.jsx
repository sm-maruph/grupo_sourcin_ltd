import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Woven from "./pages/services/Woven";
import Knit from "./pages/services/Knit";
import Sample from "./pages/services/Sample";
import Merchandising from "./pages/services/Merchandising";
// import Clients from "./pages/Clients";
import Compliance from "./pages/Compliance";
// import Services from "./pages/Services";
import Footer from "./components/Footer";
import TopStrip from "./components/navbar/TopStrip"; // optional if you have one
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-neutral dark:bg-gray-950">
        <TopStrip
          phone="+88 01711556131"
          email="zamal@gruposourcing.com"
          address="House 256, Road: 03 (East Side) DOHS Baridhara, Dhaka-1206, Bangladesh "
          onSearch={(q) => console.log("search:", q)}
        />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Services */}
            <Route path="/services/woven" element={<Woven />} />
            <Route path="/services/knit" element={<Knit />} />
            <Route path="/services/sample" element={<Sample />} />
            <Route path="/services/merchandising" element={<Merchandising />} />

            {/*<Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} /> */}
            <Route path="/compliance" element={<Compliance />} />
          </Routes>
        </main>
        <FloatingWhatsApp />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
