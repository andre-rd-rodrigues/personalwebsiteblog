import React from "react";
import { useEffect } from "react";
import Navbar from "components/AppNavbar/AppNavbar";
import BlogSidebar from "components/BlogSidebar/BlogSidebar";
import Footer from "components/Footer/Footer";
import BlogArticlePage from "pages/ArticlePage/BlogArticlePage";
import BlogHomepage from "pages/Homepage/BlogHomepage";
import BlogResultsPage from "pages/ResultsPage/BlogResultsPage";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  //Lifecycle
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div id="outer-container">
      <BlogSidebar />
      <main id="page-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogHomepage />} />
          <Route path="/artigo" element={<BlogArticlePage />} />
          <Route path="/artigo/search" element={<BlogResultsPage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
