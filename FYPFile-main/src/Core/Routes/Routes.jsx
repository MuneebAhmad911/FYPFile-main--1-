import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";
import {
  LayoutStore,
  HomeStore,
  ProductPage,
} from "../../EcommeraceModule/pages";
import ProductSearchContainer from "../../EcommeraceModule/Containers/ProductSearchContainer/ProductSearchContainer";
import {
  Layout,
  HomeEscrow,
  LayoutEscrow,
  SignIn,
  SignUP,
} from "../../EscrowModule/Pages";
import {
  StartEscrow,
  LoggedInLayout,
  EscrowHistory,
  EscrowDisputes,
  EscrowPayments,
  MakeContracts,
  LoggedInNavBar,
} from "../../EscrowModule/Pages/LoggedInPages";

import DisputeDetailsWrapper from "../../EscrowModule/Pages/LoggedInPages/Details/DetailsWrapper/DisputeDetailsWrapper/DisputeDetailsWrapper";
import EscrowDetailsWrapper from "../../EscrowModule/Pages/LoggedInPages/Details/DetailsWrapper/EscrowDetailsWrapper/EscrowDetailsWrapper";
import {
  Escrow,
  Benefits,
  TrustBridge,
  Contact,
  FAQ,
  SupportCenter,
} from "../../EscrowModule/Modules/Header/index";
import ProfileSetting from "../../EscrowModule/Pages/LoggedInPages/ProfileSetting/ProfileSetting/ProfileSetting";
import {
  IsUserLoggedIn,
  UserContext,
} from "../../EscrowModule/providers/Hooks/useEscrowContext";
import FileDispute from "../../EscrowModule/Pages/LoggedInPages/DIsputeModule/FileDisputeComponent/FileDispute";
import PaymentContainer from "../../EscrowModule/Pages/LoggedInPages/Details/ProceedToPaymentComponent/Payment/PaymenPageContainer/PaymentContainer";
import ProductComparisonContainer from "../../EcommeraceModule/Containers/ProductComparisonContainer/ProductComparisonContainer";
import CartContainer from "../../EcommeraceModule/Containers/CartContainer/CartContainer";
import WishlistContainer from "../../EcommeraceModule/Containers/WishlistContainer/WishlistContainer";
import {
  Orders,
  Addproduct,
  Dashboard,
  MianLayout,
  Productlist,
} from "../../Dashboard/SellerDashboard/SellerDashboardComponents/ExportSellerDashboardComponents";
import { AdminDashboard } from "../../Dashboard/AdminDashboard/SellerDashboardComponents/ExportAdminDashboardComponents";
import UpdateDispute from "../../Dashboard/AdminDashboard/UpdateDispute/UpdateDispute";
import {
  AllowedGoodsServices,
  CurrencyOptions,
  Disputes,
  PaymentOptions,
  Security,
} from "../../EscrowModule/Pages/SideBarLinksPages/Index";
import DisputeAdmin from "../../Dashboard/AdminDashboard/SellerDashboardComponents/Page/Dispute/DisputeAdmin";
import DisputeSeller from "../../Dashboard/SellerDashboard/SellerDashboardComponents/Page/Dispute/DisputeSeller";
import EscrowSeller from "../../Dashboard/SellerDashboard/SellerDashboardComponents/Page/Escrow/EscrowSeller";
import AdminGuidance from "../../Dashboard/AdminDashboard/AdminGuidance/AdminGuidance";
import PaymentHistory from "../../Dashboard/SellerDashboard/SellerDashboardComponents/Page/Payment/PaymentHistory";
import StripeCheckout from "../../PaymentForm";
function Routes() {
  const { isUserLoggedIn } = useContext(IsUserLoggedIn);
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <ReactRoutes>
          {/* <Route path="*" element={<Home />} /> */}
          <Route path="/store" element={<LayoutStore />}>
            <Route index element={<HomeStore />} />
            <Route path="Products" element={<ProductPage />} />
            <Route path="cart" element={<CartContainer />} />
            <Route path="wishlist" element={<WishlistContainer />} />
            <Route path="product" element={<ProductSearchContainer />} />
            <Route path="compare" element={<ProductComparisonContainer />} />
          </Route>
          <Route path="*" element={<LayoutEscrow />}>
            <Route index element={<HomeEscrow />} />
          </Route>
          <Route path="/" element={<LayoutEscrow isHome={false} />}>
            <Route path="SignIn" element={<SignIn />} />
            <Route path="SignUp" element={<SignUP />} />
          </Route>
          {/* {isUserLoggedIn && user.role == "Seller" && ( */}
            <>
              <Route path="/dashboard" element={<MianLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="product-list" element={<Productlist />} />
                <Route path="product" element={<Addproduct />} />
                <Route path="ProfileSetting" element={<ProfileSetting />} />
                <Route path="dispute" element={<DisputeSeller />} />
                <Route path="escrow" element={<EscrowSeller />} />
                <Route path="ProfileSetting" element={<ProfileSetting />} />
                <Route path="paymenthistory" element={<PaymentHistory />} />
              </Route>
              <Route path="/StartEscrow" element={<StartEscrow />} />
              <Route path="/Contract" element={<MakeContracts />} />
              <Route path="/Payment" element={<PaymentContainer />} />
              <Route path="/FileDispute" element={<FileDispute />} />
            </>
          {/* )} */}

          {isUserLoggedIn && user.role == "Buyer" && (
            <>
              <Route path="/StartEscrow" element={<StartEscrow />} />
              <Route path="/Contract" element={<MakeContracts />} />
              <Route path="/Payment" element={<PaymentContainer />} />
              <Route path="/FileDispute" element={<FileDispute />} />
              <Route
                path="/escrowdashboard"
                element={<LoggedInLayout isAdmin={false} />}
              >
                <Route index element={<EscrowHistory />} />
                <Route path="EscrowDisputes" element={<EscrowDisputes />} />
                <Route path="EscrowPayments" element={<EscrowPayments />} />
                <Route path="ProfileSetting" element={<ProfileSetting />} />
                <Route
                  path="escrowdetails"
                  element={<EscrowDetailsWrapper />}
                />
                <Route
                  path="disputedetails"
                  element={<DisputeDetailsWrapper />}
                />
              </Route>
            </>
          )}

          {isUserLoggedIn && user.role == "Admin" && (
            <>
              <Route
                path="/Admindashboard"
                element={<LoggedInLayout isAdmin={true} />}
              >
                <Route index element={<AdminDashboard />} />
                <Route path="ProfileSetting" element={<ProfileSetting />} />
                <Route path="dispute" element={<DisputeAdmin />} />
                <Route path="updatedispute" element={<UpdateDispute />} />
                <Route path="adminGuidance" element={<AdminGuidance />} />
              </Route>
            </>
          )}

          <Route
            path="/queries"
            element={<Layout nametext={"black"} isHome={true} />}
          >
            <Route path="Escrow" element={<Escrow />} />
            <Route path="Benefits" element={<Benefits />} />
            <Route path="TrustBridge" element={<TrustBridge />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Help" element={<FAQ />} />
            <Route path="SupportCenter" element={<SupportCenter />} />
            <Route
              path="AllowedGoodsServices"
              element={<AllowedGoodsServices />}
            />
            <Route path="CurrencyOptions" element={<CurrencyOptions />} />
            <Route path="Disputes" element={<Disputes />} />
            <Route path="PaymentOptions" element={<PaymentOptions />} />
            <Route path="Security" element={<Security />} />
          </Route>
        </ReactRoutes>
      </BrowserRouter>
    </>
  );
}

export default Routes;
