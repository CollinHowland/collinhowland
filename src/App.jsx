import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThoughtsPost from "./pages/ThoughtsPost";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Thoughts from "./pages/Thoughts";
import Fun from "./pages/Fun";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/thoughts/:slug" element={<ThoughtsPost />} />
            <Route path="/fun" element={<Fun />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
