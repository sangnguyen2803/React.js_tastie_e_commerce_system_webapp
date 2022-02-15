import { withRouter } from "react-router-dom";
import withAuth from "components/HigherOrderComponents(HOC)/withAuth";
import NavBar from "../Commons/Layout/NavBar/NavBar";
import Footer from "../Commons/Layout/Footer/Footer";
import MainContent from "./MainContent/MainContent";
import React, { Fragment, useState, useEffect } from "react";
import ToolBar from "../Commons/Layout/Toolbar/Toolbar";
import VoucherToolBar from "../Commons/Layout/Toolbar/VoucherToolbar";
import Background from "assets/home_banner.png";
import "./Home.scss";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeBodySidebar from "./HomeBody/HomeBodySidebar";
import HomeBodyContent from "./HomeBody/HomeBodyContent";

const backgroundStyling = {
  background: `url(${Background})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function Home(props) {
  const [showScrollbar, setShowScrollbar] = useState("hidden");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  const listenScrollEvent = (e) => {
    if (window.scrollY > 420) {
      setShowScrollbar("auto");
    } else {
      setShowScrollbar("hidden");
    }
  };

  return (
    <Fragment>
      <NavBar fixed={true} />
      <div className="main">
        <HomeHeader />
        <HomeBanner />
        <div className="home-content">
          <HomeBodySidebar
            showScrollbar={showScrollbar}
            setShowScrollbar={setShowScrollbar}
          />
          <HomeBodyContent />
        </div>
      </div>
      <Footer />
      <VoucherToolBar />
      <ToolBar />
    </Fragment>
  );
}

export default withRouter(Home);
