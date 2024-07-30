import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./pages/Main";
import Introduce from "./pages/Introduce";
import Business from "./pages/Business";
import Gallery from "./pages/Gallery";
import GalleryDetail from "./pages/GalleryDetail";
import Question from "./pages/Question";
import AddGallery from "./admin/AddGallery";

const App: React.FC = () => {
  return (
    <div className="w-screen">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/business" element={<Business />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          <Route path="/question" element={<Question />} />
          <Route path="/admin/gallery" element={<AddGallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
