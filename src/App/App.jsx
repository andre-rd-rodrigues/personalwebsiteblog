import React from "react";
import { useEffect } from "react";
import Navbar from "components/AppNavbar/AppNavbar";
import BlogSidebar from "components/BlogSidebar/BlogSidebar";
import Footer from "components/Footer/Footer";
import BlogArticlePage from "pages/ArticlePage/BlogArticlePage";
import BlogHomepage from "pages/Homepage/BlogHomepage";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import BlogResultsPage from "pages/ResultsPage/BlogResultsPage";
import ReactGA from "react-ga";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  //Lifecycle
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return (
    <div id="outer-container">
      <BlogSidebar />
      <main id="page-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogHomepage />} />
          <Route path="/artigo" element={<BlogArticlePage />} />
          <Route path="/artigo/search" element={<BlogResultsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
