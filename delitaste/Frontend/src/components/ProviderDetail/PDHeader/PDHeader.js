import { withRouter } from "react-router-dom";
import withAuth from "components/HigherOrderComponents(HOC)/withAuth";
import NavBar from "../../Commons/Layout/NavBar/NavBar";
import Footer from "../../Commons/Layout/Footer/Footer";
import React, { Fragment, useState, useEffect } from "react";
import ToolBar from "../../Commons/Layout/Toolbar/Toolbar";
import VoucherToolBar from "../../Commons/Layout/Toolbar/VoucherToolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Commons/Button/Button";
import ButtonGroup from "components/Commons/Button/ButtonGroup/ButtonGroup";
import {
  faClock,
  faHeart as faHeart2,
  faMapMarkerAlt,
  faStar,
  faCalendarPlus,
  faComment,
} from "@fortawesome/fontawesome-free-solid";
import { faHeart as faHeart1 } from "@fortawesome/fontawesome-free-regular";
import Background from "assets/home_banner.png";
import "../ProviderDetail.scss";

function PDHeader(props) {
  const [providerInfo, setProviderInfo] = useState(props.item);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <Fragment>
      <div className="p-d-header-container">
        <div className="p-d-provider-image">
          <img src={providerInfo.provider_photo} />
          <div className="p-d-provider-interaction-wrapper">
            <FontAwesomeIcon
              className="p-d-icon-for-liking"
              style={{ zIndex: 1 }}
              icon={faHeart1}
            />
          </div>
        </div>
        <div className="p-d-provider-info">
          <div className="p-d-sub-head-title">Restaurant</div>
          <div className="p-d-title">{providerInfo.provider_name}</div>
          <div className="p-d-note">
            $0.49 Delivery Fee&nbsp;•&nbsp;Delivered in 35 to 45 min
          </div>
          <div className="p-d-sub-title-1">
            <div className="p-d-sub-title-content">
              <FontAwesomeIcon className="p-d-icon" icon={faMapMarkerAlt} />
              &nbsp;
              <span>{providerInfo.address}</span>
            </div>
          </div>
          <div className="p-d-sub-title-1">
            <div className="p-d-sub-title-content">
              <FontAwesomeIcon className="p-d-icon" icon={faStar} />
              &nbsp;
              <span>
                {providerInfo.rating}/5 ({providerInfo.rating_total} ratings)
              </span>
            </div>
            &nbsp;•&nbsp;
            <span className="p-d-sub-title-content">
              {providerInfo.dietary}
            </span>
            &nbsp;•&nbsp;
            <span className="p-d-sub-title-content">
              {providerInfo.price_range}
            </span>
          </div>
          <div className="p-d-sub-title-2">
            <FontAwesomeIcon className="p-d-icon" icon={faClock} />
            &nbsp;
            <span className="p-d-sub-title-content">
              Open until 17:00 PM
              <br />
              <span style={{ fontSize: "12px" }}>
                Every day: 10:00 AM - 17:00 PM
              </span>
            </span>
          </div>
          <ButtonGroup
            float="flex-end"
            gap={10}
            mgRight={5}
            mgTop={10}
            mgBottom={10}
          >
            <Button
              prefix={<FontAwesomeIcon icon={faComment} />}
              color={"black"}
              bgColor={"#ECECEC"}
              justifyContent={"center"}
              label={"Feedback"}
              width={100}
              height={30}
            />
            <Button
              color={"black"}
              bgColor={"#ECECEC"}
              justifyContent={"center"}
              label={"Schedule"}
              prefix={<FontAwesomeIcon icon={faCalendarPlus} />}
              width={100}
              height={30}
            />
          </ButtonGroup>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(PDHeader);