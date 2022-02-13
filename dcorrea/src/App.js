import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
