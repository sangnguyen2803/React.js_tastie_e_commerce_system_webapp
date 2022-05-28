import { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faDotCircle,
  faTimesCircle,
} from "@fortawesome/fontawesome-free-solid";
import { css } from "@emotion/react";
import orderListData from "components/MerchantDashboard/DashboardFeatures/MDOrder/data/orderListData";
import "../Panel.scss";
import ViewOrderDetail from "./OrderHandler/ViewOrderDetail";
import ProgressBar from "components/Commons/ProgressBar/ProgressBar";
import io from "socket.io-client";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { getAllOrderAPI } from "store/actions/ProviderAction/ProviderAction";
import {
  getAllProductFromOrderAPI,
  getOrderStatusAPI,
} from "store/actions/OrderAction/OrderAction";

import Loader from "react-spinners/ScaleLoader";
// let socket;

function OrderDetail(props) {
  const [loading, setLoading] = useState(false);
  const { user, getAllOrderAPI, getAllProductFromOrderAPI, getOrderStatusAPI } =
    props;
  const [statusOnView, setStatusOnView] = useState();
  const [orderList, setOrderList] = useState([]);
  const [orderSummary, setOrderSummary] = useState(orderList[0]);
  const [orderItems, setOrderItems] = useState([]);
  const [incomingOrder, setIncomingOrder] = useState({
    order: null,
    customer: null,
    order_code: null,
  });
  let [color, setColor] = useState("#910000");
  const override = css`
    display: block;
    border-color: #910000;
    font-size: 14px;
    color: red;
  `;
  const socket = io(`http://localhost:3015`);

  const filterOrderList = (type) => {
    const filteredOrderList = orderListData.filter(
      (order) => order.order_status === type
    );
    setOrderList(filteredOrderList);
  };
  useEffect(() => {
    filterOrderList(props.type);
  }, [props.type]);

  useEffect(() => {
    if (incomingOrder.order_code) {
      console.log(incomingOrder);
    }
  }, [incomingOrder]);
  useEffect(() => {
    async function fetchAllOrders(id) {
      setLoading(false);
      let limit = 200;
      let offset = 1;
      console.log(id);
      const result = await getAllOrderAPI(id, limit, offset);
      result.sort(function (a, b) {
        return new Date(b.update_at) - new Date(a.update_at);
      });
      setOrderList(result);
      setLoading(true);
    }
    if (user.provider_id !== -1) {
      fetchAllOrders(user.provider_id);
      return;
    }
    setLoading(true);
  }, [user.provider_id]);
  useEffect(() => {
    socket.emit("provider-join-room", `provider-${user.provider_id}`);
    socket.on(
      "provider-received-order",
      async (orderData, customerData, order_code) => {
        const result1 = await getAllProductFromOrderAPI(order_code);
        const result2 = await getOrderStatusAPI(order_code);
        let limit = 20;
        let offset = 1;
        const result3 = await getAllOrderAPI(user.provider_id, limit, offset);
        let temp = result3.filter((item) => item.order_code === order_code);
        let status = temp[0]["MAX(os.order_status_name)"];
        setStatusOnView(status);
        Promise.all([result1, result2, result3]).then((data) => {
          setOrderItems(data[0]);
          setOrderSummary(data[1]);
          setOrderList(data[2]);
        });
      }
    );
  }, [user.provider_id]);

  const viewOrderDetail = (code) => {
    console.log("hello1");
    async function fetchOrderDetail(orderCode) {
      const result1 = await getAllProductFromOrderAPI(orderCode);
      const result2 = await getOrderStatusAPI(orderCode);

      Promise.all([result1, result2]).then((data) => {
        console.log(data[0]);
        console.log(data[1]);
        console.log("hello2");
        setOrderItems(data[0]);
        setOrderSummary(data[1]);
      });
    }
    fetchOrderDetail(code);
  };

  const mapOrderStatusIcon = (status) => {
    switch (status) {
      case 5:
        return (
          <>
            <FontAwesomeIcon
              className="o-order-icon-history done"
              icon={faCheckCircle}
            />
            <span className="order-status-text-green">Completed</span>
          </>
        );
      case 6:
        return (
          <>
            <FontAwesomeIcon
              className="o-order-icon-history cancel"
              icon={faTimesCircle}
            />
            <span className="order-status-text-red">Unable to delivery</span>
          </>
        );
      default:
        return (
          <>
            <FontAwesomeIcon
              className="o-order-icon-history inprogress"
              icon={faDotCircle}
            />
            <span className="order-status-text-blue">In progress</span>
          </>
        );
    }
  };

  return (
    <Fragment>
      <div className="double-panel-container">
        <div className="main-detail-panel-wrapper">
          <div className="panel-detail-title">Your orders</div>
          <div className="product-list-info-row">
            <div className="product-list-info">
              <div className="product-stock-quantity">
                {orderList.length} Orders
              </div>
              <div className="product-stock-quantity-description">
                {props.type} orders: {orderList.length}
              </div>
              <div className="product-progress-bar">
                <ProgressBar
                  bgcolor="#940000"
                  progress={`${orderList.length}`}
                  height="6px"
                  length={200}
                />
              </div>
            </div>
          </div>
          <div className="o-order-container">
            <div className="o-order-header-row">
              <div className="o-order o-order-icon">Order status</div>
              <div className="o-order o-order-id">Order Id</div>
              <div className="o-order o-order-name">Customer name</div>
              <div className="o-order o-order-time">Submitted time</div>
              <div className="o-order o-order-quantity">Payment</div>
              <div className="o-order o-order-price">Total</div>
            </div>
          </div>
          {loading ? (
            <div className="o-order-container">
              {orderList?.map((order) => (
                <div
                  className="o-order-row"
                  onClick={() => viewOrderDetail(order.order_code)}
                  key={order.order_code}
                  style={
                    orderSummary?.order_code === order?.order_code
                      ? { backgroundColor: "#f3f3f3", transition: "0.3s" }
                      : { backgroundColor: "white" }
                  }
                >
                  {mapOrderStatusIcon(order["MAX(ods.order_status_name)"])}
                  <div className="o-order o-order-id">{order.order_code}</div>
                  <div className="o-order o-order-name">
                    {`${order.user_first_name} ${order.user_last_name}`}
                  </div>
                  <div className="o-order-time">{order.update_at}</div>
                  <div className="o-order-quantity">{order.payment_name}</div>
                  <div className="o-order-price">
                    $ {order.total_amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="o-order-container"
              style={{
                height: 500,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "2px solid #d8d8d8",
                borderLeft: "2px solid #d8d8d8",
                borderRight: "2px solid #d8d8d8",
                gap: 10,
              }}
            >
              <Loader
                color={color}
                loading={true}
                css={override}
                size={100}
                margin={3}
                speedMultiplier={0.8}
              />
              <span className="o-order-container-text">
                Please wait for a while ...
              </span>
            </div>
          )}
        </div>
        <div className="sub-detail-panel-wrapper" style={{ paddingTop: "0" }}>
          <ViewOrderDetail
            orderItems={orderItems}
            orderSummary={orderSummary}
            orderStatus={statusOnView}
            socket={socket}
          />
        </div>
      </div>
    </Fragment>
  );
}

OrderDetail.propTypes = {
  user: PropTypes.object.isRequired,
  getAllOrderAPI: PropTypes.func.isRequired,
  getAllProductFromOrderAPI: PropTypes.func.isRequired,
  getOrderStatusAPI: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.UserReducer,
});

export default withRouter(
  connect(mapStateToProps, {
    getAllOrderAPI,
    getAllProductFromOrderAPI,
    getOrderStatusAPI,
  })(OrderDetail)
);
