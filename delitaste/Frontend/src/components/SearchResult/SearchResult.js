import { withRouter } from "react-router-dom";
import NavBar from "../Commons/Layout/NavBar/NavBar";
import Footer from "../Commons/Layout/Footer/Footer";
import React, { Fragment, useEffect, useState } from "react";
import ToolBar from "../Commons/Layout/Toolbar/Toolbar";
import "./SearchResult.scss";
import SearchContent from "components/SearchResult/SearchContent/SearchContent";
import HomeBodySidebar from "components/HomePage/HomeBody/HomeBodySidebar";
import { useLocation } from "react-router-dom";

function SearchResult(props) {
  const location = useLocation();
  const [currentSortMode, setCurrentSortMode] = useState(1);
  const [showScrollbar, setShowScrollbar] = useState("hidden");
  const [totalResult, setTotalResult] = useState();
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    var query = queryParams.get("q");
    var type = queryParams.get("type");
    setQuery(query);
    setType(type);
  }, [location]);
  return (
    <Fragment>
      <NavBar fixed={true} hideBreadcrumb={true} />
      <div className="main">
        <div className="home-content">
          <HomeBodySidebar
            type={2}
            query={query}
            totalResult={totalResult}
            showScrollbar={showScrollbar}
            setShowScrollbar={setShowScrollbar}
            currentSortMode={currentSortMode}
            setCurrentSortMode={setCurrentSortMode}
          />
          <SearchContent
            query={query}
            setQuery={setQuery}
            type={type}
            setType={setType}
            setTotalResult={setTotalResult}
          />
        </div>
      </div>
      <Footer />
      <ToolBar />
    </Fragment>
  );
}

export default withRouter(SearchResult);