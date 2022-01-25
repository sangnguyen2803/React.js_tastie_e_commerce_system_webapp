import axios from "axios";

import { GET_PRODUCT_LIST } from "store/actions/types";

//Get product list
export const getProductListAPI = (providerId) => async (dispatch) => {
  try {
    const endpoint = `/v1/api/provider/dashboard/menu-overview/${providerId}/get-list-product`;
    const res = await axios.get(endpoint);
    if (res.data?.status) {
      if (!res.data.result) return [];
      dispatch({
        type: GET_PRODUCT_LIST,
        payload: { productList: res.data.result },
      });
      return res.data.result;
    }
    return [];
  } catch (err) {
    console.log(err);
  }
};

//Add product
export const addProductAPI = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  var today = new Date();
  var currentDateTime =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();
  data.create_at = currentDateTime;
  data.update_at = currentDateTime;
  const body = JSON.stringify(data);
  console.log(body);
  try {
    const endpoint = `/v1/api/provider/dashboard/menu-overview/add-item`;
    const res = await axios.post(endpoint, body, config);
    console.log(res.data);
    if (res.data?.status) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err.response.data.errors);
    return false;
  }
};