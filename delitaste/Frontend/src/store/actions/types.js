//Prefix: SET, UPDATE, MAP, REMOVE,

//-- User Actions:
//1 Registration (Sign up)
export const MAP_REGISTRATION_FORM = "MAP_REGISTRATION_FORM";
export const UPDATE_REGISTER_STEP_STYLING = "UPDATE_REGISTER_STEP_STYLING";
export const UPDATE_REGISTRATION_FORM = "UPDATE_REGISTRATION_FORM,";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const CHECK_DUPLICATION_SUCCESS = "CHECK_DUPLICATION_SUCCESS";
//2 Authentication (Sign in + Sign out)
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const SIGN_OUT = "SIGN_OUT";
//3 Email Verification
export const SET_EMAIL_VERIFICATION_CODE = "SET_EMAIL_VERIFICATION_CODE";
export const SET_EMAIL_VERIFICATION_STATUS = "SET_EMAIL_VERIFICATION_STATUS";
//4 Access Token
export const RETRIEVE_TOKEN = "RETRIEVE_TOKEN";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const SET_LOADING = "SET_LOADING";
//5 Common UI Component (Alert + Dialog box)
export const SET_ALERT_NOTIFICATION = "SET_ALERT_NOTIFICATION";
export const REMOVE_ALERT_NOTIFICATION = "REMOVE_ALERT_NOTIFICATION";
export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";
export const SET_DIALOG_BOX = "SET_DIALOG_BOX";
export const REMOVE_DIALOG_BOX = "REMOVE_DIALOG_BOX";
//6 Checkout
export const GET_ADDRESS_BOOK = "GET_ADDRESS_BOOK";
//-- Provider Actions
//1 Get provider information
export const GET_DETAIL_PROVIDER_INFO = "GET_DETAIL_PROVIDER_INFO";
export const UPDATE_MERCHANT_FORM_API = "UPDATE_MERCHANT_FORM_API";
export const UPDATE_MERCHANT_SUCCESS = "UPDATE_MERCHANT_SUCCESS";
export const UPDATE_MERCHANT_FAIL = "UPDATE_MERCHANT_FAIL";
export const CREATE_MERCHANT = "CREATE_MERCHANT";
//2 Update provider registration form (Form 1 + 2 + 3 + 4 + 5)
export const UPDATE_SERVICE_INFO_FORM = "UPDATE_SERVICE_INFO_FORM";
export const UPDATE_REPRESENTATIVE_INFO_FORM = "UPDATE_BUSINESS_UNIT_INFO_FORM";
export const UPDATE_BUSINESS_UNIT_INFO_FORM = "UPDATE_BUSINESS_UNIT_INFO_FORM";
export const UPDATE_PRODUCT_DETAIL_INFO_FORM =
  "UPDATE_PRODUCT_DETAIL_INFO_FORM";
export const UPDATE_BANK_INFO_FORM = "UPDATE_BANK_INFO_FORM";

//-- Product Actions
//1 Products
export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";

//Cart
export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_CART = "REMOVE_CART";
export const UPDATE_CART = "UPDATE_CART";
export const INCREASE_PRODUCT = "INCREASE_PRODUCT_QUANTITY";
export const DESCREASE_PRODUCT = "DESCREASE_PRODUCT_QUANTITY";
//Provider
export const GET_PROVIDER_DETAIL = "GET_PROVIDER_DETAIL";
export const SET_DASHBOARD_PROVIDER = "SET_DASHBOARD_PROVIDER";
export const SET_ORDER_LIST = "SET_ORDER_LIST";
export const SET_TOP_PRODUCT_BY_SALES = "SET_TOP_PRODUCT_BY_SALES";
export const SET_TOP_PRODUCT_BY_UNIT = "SET_TOP_PRODUCT_BY_UNIT";
//Address
export const GET_CONTACT = "GET_CONTACT";
//Socket
export const SOCKET_CONNECTION = "SOCKET_CONNECTION";
