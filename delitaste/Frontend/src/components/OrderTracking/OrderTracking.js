import withAuth from "components/HigherOrderComponents(HOC)/withAuth";
import NavBar from "../Commons/Layout/NavBar/NavBar";
import Footer from "../Commons/Layout/Footer/Footer";
import React, { Fragment, useState, useEffect } from "react";
import ToolBar from "../Commons/Layout/Toolbar/Toolbar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./OrderTracking.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderStatus from "components/OrderTracking/OrderStatus/OrderStatus";
import OTOrderDetail from "components/OrderTracking/OTOrderDetail/OTOrderDetail";
import ReactMapGl, { Source, Layer, Marker, Popup } from "react-map-gl";
import Modal from "components/Commons/Overlay/Popup/Modal/Modal";
import io from "socket.io-client";
import axios from "axios";
import RateShipper from "./RateShipper/RateShipper";
import { addNotificationAPI } from "store/actions/OrderAction/OrderAction";
import {
  getAllProductFromOrderAPI,
  getOrderStatusAPI,
} from "store/actions/OrderAction/OrderAction";
import RateProvider from "./RateProvider/RateProvider";

function OrderTracking(props) {
  const { user, getAllProductFromOrderAPI, getOrderStatusAPI, match } = props;
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    latitude: 10.768685473523648,
    longitude: 106.68057155417674,
    zoom: 16,
  });
  const [departureCoordinates, setDepartureCoordinates] = useState([
    106.68057155417674, 10.768685473523648,
  ]);
  const [arrivalCoordinates, setArrivalCoordinates] = useState([
    106.68060027236189, 10.75909421616193,
  ]);
  const [loading, setLoading] = useState(false);
  const [routes, setRoutes] = useState([]);
  const { order_code } = props.match.params;
  const [showPopup, setShowPopup] = useState(false);
  const [showRatingShipper, setShowRatingShipper] = useState(false);
  const [showRatingProvider, setShowRatingProvider] = useState(false);

  const [currentStatus, setCurrentStatus] = useState(1);
  const [submittedStatus, setSubmittedStatus] = useState(true);
  const [assignedStatus, setAssignedStatus] = useState(false);
  const [confirmedStatus, setConfirmedStatus] = useState(false);
  const [pickedStatus, setPickedStatus] = useState(false);
  const [completedStatus, setCompletedStatus] = useState(false);
  const [cancelStatus, setCancelStatus] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [orderSummary, setOrderSummary] = useState([]);
  const [showOrderDetail, setShowOrderDetail] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  const [orderData, setOrderData] = useState({
    merchant_name: null,
    items: [],
    num_items: 0,
    delivery_fee: 0,
  });

  useEffect(() => {
    setSubmittedStatus(1 <= currentStatus ? true : false);
    setAssignedStatus(2 <= currentStatus ? true : false);
    setConfirmedStatus(3 <= currentStatus ? true : false);
    setPickedStatus(4 <= currentStatus ? true : false);
    setCompletedStatus(5 <= currentStatus ? true : false);
    setCancelStatus(6 <= currentStatus ? true : false);
    setShowRatingShipper(currentStatus === 5 ? true : false);
  }, [currentStatus]);

  useEffect(() => {
    if (currentStatus === 1 && orderData.items.length !== 0) {
      user.socket.emit("join-room", order_code);
      user.socket.emit(
        "customer-submit-order",
        orderData.items,
        {
          user_id: user.profile.user_id,
          name: user.profile.first_name + " " + user.profile.last_name,
          phone: user.profile.phone,
          address: user.currentAddress.address,
          location: {
            latitude: 10.799635410926035,
            longitude: 106.6735069727208,
          },
        },
        {
          name: orderData.merchant_name,
          address: "135B Tran Hung Dao, Cau Ong Lanh, District 1",
          provider_id: orderItems.provider_id,
          location: {
            latitude: 10.770426270078108,
            longitude: 106.69433674255707,
          },
        },
        order_code
      );
    }
  }, [orderData, currentStatus]);

  useEffect(() => {
    user.socket.emit("join-room", order_code);
    //order status 2
    user.socket.on("order-accepted", (message) => {
      setAssignedStatus(true);
      setCurrentStatus(2);
    });
    //order status 3
    user.socket.on("order-confirmed-from-provider", () => {
      setConfirmedStatus(true);
      setCurrentStatus(3);
    });
    //order status 4
    user.socket.on("shipper-on-the-way", (message) => {
      setPickedStatus(true);
      setCurrentStatus(4);
    });
    //order status 5
    user.socket.on("shipper-has-arrived", (message) => {
      setPickedStatus(true);
      setCurrentStatus(5);
    });
    return () => {
      user.socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const code = match.params.order_code;
    async function fetchingOrder(orderCode) {
      const result1 = await getAllProductFromOrderAPI(orderCode);
      const result2 = await getOrderStatusAPI(orderCode);
      Promise.all([result1, result2]).then((data) => {
        console.log(result1);
        console.log(result2);
        setOrderItems(result1);
        setOrderSummary(result2);
        if (data[0] && data[1]) {
          setOrderData((prev) => ({
            ...prev,
            provider_id: data[0].provider_id,
            merchant_name: data[0].merchant_name,
            items: data[0].items,
            num_items: data[0].num_items,
            delivery_fee: data[0].delivery_fee,
          }));
          const status = [
            "Submitted",
            "Assigned",
            "Confirmed",
            "Picked",
            "Completed",
          ];
          setCurrentStatus(
            status.indexOf(
              data[1].order_status[data[1].order_status.length - 1]
                .order_status_name
            ) + 1
          );
        }
      });
      setLoading(true);
    }
    fetchingOrder(code);
  }, []);

  useEffect(() => {
    async function fetchingRoutesAndDirections() {
      const endpoint = `https://api.mapbox.com/directions/v5/mapbox/driving/${departureCoordinates[0]},${departureCoordinates[1]};${arrivalCoordinates[0]},${arrivalCoordinates[1]}?geometries=geojson&access_token=pk.eyJ1IjoiaG9hbmduYW0yNDMiLCJhIjoiY2t1dHJxdjdlMHg5ZDJwbnlpcmo0a2NnMiJ9.DUrlIOzvO6-kWt-VCKZW1g`;
      const res = await axios.get(endpoint);
      const points = res.data.routes[0].geometry.coordinates;
      points.unshift(departureCoordinates);
      points.push(arrivalCoordinates);
      setRoutes(points);
    }
    fetchingRoutesAndDirections();
  }, []);

  const dataOne = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: routes,
    },
  };

  return (
    <Fragment>
      <NavBar fixed={true} />

      <div className="order-tracking-container">
        <div className="order-tracking-left-side">
          <ReactMapGl
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken="pk.eyJ1IjoiaG9hbmduYW0yNDMiLCJhIjoiY2t1dHJxdjdlMHg5ZDJwbnlpcmo0a2NnMiJ9.DUrlIOzvO6-kWt-VCKZW1g"
          >
            <Source id="polylineLayer" type="geojson" data={dataOne}>
              <Layer
                id="lineLayer"
                type="line"
                source="my-data"
                layout={{
                  "line-join": "round",
                  "line-cap": "round",
                }}
                paint={{
                  "line-color": "rgba(3, 170, 238, 0.5)",
                  "line-width": 10,
                }}
              />
            </Source>
            <Marker
              latitude={departureCoordinates[1]}
              longitude={departureCoordinates[0]}
              offsetLeft={-20}
              offsetTop={-30}
            >
              <img
                alt="marker"
                onClick={() => setShowPopup(true)}
                style={{ height: 30, width: 30 }}
                src="https://xuonginthanhpho.com/wp-content/uploads/2020/03/map-marker-icon.png"
              />
            </Marker>
            <Marker
              alt="marker"
              latitude={arrivalCoordinates[1]}
              longitude={arrivalCoordinates[0]}
              offsetLeft={-20}
              offsetTop={-30}
            >
              <img
                style={{ height: 30, width: 30 }}
                alt="marker"
                src="https://xuonginthanhpho.com/wp-content/uploads/2020/03/map-marker-icon.png"
              />
            </Marker>
          </ReactMapGl>
        </div>
        <div className="order-tracking-right-side">
          <div className="order-status-container">
            <div className="order-status-timing">
              <div className="or-s-main-text">14</div>
              <div className="or-s-sub-text">mins</div>
            </div>
            <div className="order-status-header">
              <span className="or-s-main-text-header">
                {orderItems?.merchant_name}
              </span>
              <span className="or-s-sub-text-header">
                Total:{" "}
                <span className="highlight-main-text">
                  $ {orderSummary?.subtotal?.toFixed(2)}{" "}
                </span>{" "}
                "(2 items)"
              </span>
              <span className="or-s-sub-text-header">
                Delivery estimated:{" "}
                <span className="highlight-main-text">2021-06-04 16:30 </span>
              </span>
            </div>
          </div>
          <div className="or-s-stepper-wrapper">
            <div
              className={
                submittedStatus
                  ? "or-s-stepper-node-checked"
                  : "or-s-stepper-node-not-checked"
              }
            >
              <span className="or-s-stepper-node-index">1</span>
              <span className="or-s-stepper-node-title">Submitted</span>
            </div>
            <div
              className={
                assignedStatus
                  ? "or-s-stepper-line-checked"
                  : "or-s-stepper-line-not-checked"
              }
            ></div>
            <div
              className={
                assignedStatus
                  ? "or-s-stepper-node-checked"
                  : "or-s-stepper-node-not-checked"
              }
            >
              <span className="or-s-stepper-node-index">2</span>
              <span className="or-s-stepper-node-title">Assigning</span>
            </div>
            <div
              className={
                confirmedStatus
                  ? "or-s-stepper-line-checked"
                  : "or-s-stepper-line-not-checked"
              }
            ></div>
            <div
              className={
                confirmedStatus
                  ? "or-s-stepper-node-checked"
                  : "or-s-stepper-node-not-checked"
              }
            >
              <span className="or-s-stepper-node-index">3</span>
              <span className="or-s-stepper-node-title">Confirmed</span>
            </div>
            <div
              className={
                pickedStatus
                  ? "or-s-stepper-line-checked"
                  : "or-s-stepper-line-not-checked"
              }
            ></div>
            <div
              className={
                pickedStatus
                  ? "or-s-stepper-node-checked"
                  : "or-s-stepper-node-not-checked"
              }
            >
              <span className="or-s-stepper-node-index">4</span>
              <span className="or-s-stepper-node-title">Picked</span>
            </div>
            <div
              className={
                completedStatus
                  ? "or-s-stepper-line-checked"
                  : "or-s-stepper-line-not-checked"
              }
            ></div>
            <div
              className={
                completedStatus
                  ? "or-s-stepper-node-checked"
                  : "or-s-stepper-node-not-checked"
              }
            >
              <span className="or-s-stepper-node-index">5</span>
              <span className="or-s-stepper-node-title">Completed</span>
            </div>
          </div>
          <OTOrderDetail
            orderItems={orderItems}
            orderSummary={orderSummary}
            showOrderDetail={showOrderDetail}
            setShowOrderDetail={setShowOrderDetail}
          />
          {!showOrderDetail && (
            <OrderStatus
              status={currentStatus}
              showOrderDetail={showOrderDetail}
              setShowOrderDetail={setShowOrderDetail}
            />
          )}
        </div>
      </div>
      <Modal
        openModal={showRatingShipper}
        closeModal={() => {
          setShowRatingShipper(false);
          setShowRatingProvider(true);
        }}
        transparent={0.5}
        title={"Rate Shipper"}
        width={40}
        height={600}
        padding="0% 0%"
        hideHeader={true}
      >
        <RateShipper
          setVisible={setShowRatingShipper}
          orderSummary={orderSummary}
        />
      </Modal>
      <Modal
        openModal={showRatingProvider}
        closeModal={() => {
          setShowRatingProvider(false);
        }}
        transparent={0.5}
        title={"Rate Order"}
        width={40}
        height={500}
        padding="0% 0%"
        hideHeader={true}
      >
        <RateProvider
          setVisible={setShowRatingProvider}
          orderSummary={orderSummary}
        />
      </Modal>
    </Fragment>
  );
}

OrderTracking.propTypes = {
  user: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  getAllProductFromOrderAPI: PropTypes.func.isRequired,
  getOrderStatusAPI: PropTypes.func.isRequired,
  addNotificationAPI: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.UserReducer,
  product: state.ProductReducer,
});

export default withRouter(
  withAuth(
    connect(mapStateToProps, {
      getAllProductFromOrderAPI,
      getOrderStatusAPI,
      addNotificationAPI,
    })(OrderTracking)
  )
);
