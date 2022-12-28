import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";

import { TitleBar, useAppBridge, useNavigate } from "@shopify/app-bridge-react";
import Header from "../components/Layout/Header";
import MainPage from "../components/ui/MainPage";
import Sidebar from "../components/Layout/Sidebar";
import React, { useState, useEffect, Fragment } from "react";
import ReferralsComponent from "../components/referrals/ReferralsComponent";

export default function Referrals(props) {
  return (
    <Fragment>
      <Header />
      <MainPage>
        <Sidebar />
        <ReferralsComponent />
      </MainPage>
    </Fragment>
  );
}
