import React from "react";
import { useEffect } from "react";
import Navbar from "components/AppNavbar/AppNavbar";
import Footer from "components/Footer/Footer";
import SideBar from "components/SideBar/SideBar";
import BlogArticlePage from "pages/ArticlePage/ArticlePage";
import Homepage from "pages/Homepage/Homepage";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import ResultsPage from "pages/ResultsPage/ResultsPage";
import ReactGA from "react-ga4";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  //Lifecycle
  useEffect(() => {
    if (process.env.REACT_APP_GA_ID) {
      ReactGA.initialize(process.env.REACT_APP_GA_ID);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return (
    <div id="outer-container">
      <SideBar />
      <main id="page-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article" element={<BlogArticlePage />} />
          <Route path="/article/search" element={<ResultsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
