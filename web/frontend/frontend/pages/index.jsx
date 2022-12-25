import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  Button,
} from '@shopify/polaris';
import { TitleBar, useAppBridge, useNavigate } from '@shopify/app-bridge-react';

import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import HomePageComponent from '../components/homepage/HomePageComponent';
import MainPage from '../components/ui/MainPage';
import React, { useState, useEffect, Fragment } from 'react';

/* Import the useAuthenticatedFetch hook included in the Node app template */
import { useAuthenticatedFetch, useAppQuery } from '../hooks';

export default function HomePage() {
  const getAllCampaigns = async () => {
    try {
      //const myCampaigns = await fetch('/api/getcampaigns');

      console.log('do something');
      //setMyCampaigns(myCampaigns.json());
      //const jsonData = await myCampaigns.json();

      //console.log(jsonData);
      //setMyCampaigns(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <Header />
      <MainPage>
        <Sidebar />
        <HomePageComponent />
      </MainPage>
    </Fragment>
  );
}
