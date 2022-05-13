import { Fragment, useState, useRef, useEffect } from "react";

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

//components
import RouteWithSubRoutes from "components/Commons/RouteWithSubRoutes";
import { routes } from "config/routes";
//common screen
import HomeScreen from "./HomeScreen/HomeScreen";
import UserSignInScreen from "./UserAdmissionScreen/UserSignInScreen";
import UserRegistrationScreen from "./UserAdmissionScreen/UserRegistrationScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import MerchantRegistrationScreen from "./MerchantRegistrationScreen/MerchantRegistrationScreen";
import SignContractScreen from "./MerchantRegistrationScreen/SignContractScreen/SignContractScreen";
import MerchantFormScreen from "./MerchantRegistrationScreen/MerchantFormScreen";
import ProviderDetailScreen from "./ProviderDetailScreen/ProviderDetailScreen";
//merchant registration form screen
import ServiceInfoForm from "components/MerchantRegistration/Forms/DetailMerchantForm/ServiceInfoForm";
import RegisteredRepresentativeForm from "components/MerchantRegistration/Forms/DetailMerchantForm/RegisteredRepresentativeForm";
import BusinessUnitForm from "components/MerchantRegistration/Forms/DetailMerchantForm/BusinessUnitForm";
import ProductDetailForm from "components/MerchantRegistration/Forms/DetailMerchantForm/ProductDetailForm";
import BankInfoForm from "components/MerchantRegistration/Forms/DetailMerchantForm/BankInfoForm";
import withAuth from "components/HigherOrderComponents(HOC)/withAuth";
import DialogBox from "components/Commons/Overlay/DialogBox/DialogBox";
import MerchantDashboardScreen from "./MerchantDashboardScreen/MerchantDashboardScreen";
import OrderCheckoutScreen from "./OrderCheckoutScreen/OrderCheckoutScreen";
import OrderTrackingScreen from "./OrderTrackingScreen/OrderTrackingScreen";
import SearchScreen from "./SearchScreen/SearchScreen";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const history = createBrowserHistory();

function RootScreen(props) {
  return (
    <Fragment>
      <Router history={history}>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/home" component={HomeScreen} />
        <Route exact path="/sign-up" component={UserRegistrationScreen} />
        <Route exact path="/sign-in" component={UserSignInScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route
          exact
          path="/provider-detail/:id"
          component={ProviderDetailScreen}
        />
        <Route
          exact
          path="/order-checkout/:uid"
          component={OrderCheckoutScreen}
        />
        <Route
          exact
          path="/order-tracking/:order_code"
          component={OrderTrackingScreen}
        />
        <Route
          exact
          path="/merchant-registration"
          component={MerchantRegistrationScreen}
        />
        <Route
          exact
          path="/merchant-sign-contract"
          component={SignContractScreen}
        />
        <Route exact path="/merchant-registration/:id/service">
          <MerchantFormScreen>
            <ServiceInfoForm />
          </MerchantFormScreen>
        </Route>
        <Route exact path="/merchant-registration/:id/representative">
          <MerchantFormScreen>
            <RegisteredRepresentativeForm />
          </MerchantFormScreen>
        </Route>
        <Route exact path="/merchant-registration/:id/business-unit">
          <MerchantFormScreen>
            <BusinessUnitForm />
          </MerchantFormScreen>
        </Route>
        <Route exact path="/merchant-registration/:id/product-detail">
          <MerchantFormScreen>
            <ProductDetailForm />
          </MerchantFormScreen>
        </Route>
        <Route exact path="/merchant-registration/:id/bank">
          <MerchantFormScreen>
            <BankInfoForm />
          </MerchantFormScreen>
        </Route>
        <Route path="/merchant-dashboard" component={MerchantDashboardScreen} />

        <Route exact path="/:lang(en|vi)/" component={HomeScreen} />
        <Route exact path="/:lang(en|vi)/home" component={HomeScreen} />
        <Route
          exact
          path="/:lang(en|vi)/sign-in"
          component={UserSignInScreen}
        />
        <Route
          exact
          path="/:lang(en|vi)/sign-up"
          component={UserRegistrationScreen}
        />
        <Route
          exact
          path="/:lang(en|vi)/merchant-registration"
          component={MerchantRegistrationScreen}
        />
      </Router>
    </Fragment>
  );
}

export default connect(null, null)(RootScreen);
