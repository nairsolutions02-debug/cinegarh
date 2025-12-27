import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import { OriginalsPage, OriginalDetail } from "./pages/Originals";
import { RecordsPage, RecordDetail } from "./pages/Records";
import Experience from "./pages/Experience";
import Community from "./pages/Community";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/originals" element={<OriginalsPage />} />
            <Route path="/originals/:id" element={<OriginalDetail />} />
            <Route path="/records" element={<RecordsPage />} />
            <Route path="/records/:id" element={<RecordDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/community" element={<Community />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
