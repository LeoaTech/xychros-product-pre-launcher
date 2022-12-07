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
import MainPage from '../components/ui/MainPage';
import Sidebar from '../components/Layout/Sidebar';
import CampaignsComponent from '../components/campaigns/CampaignsComponent';
import React, { useState, useEffect, Fragment } from 'react';

/* Import the useAuthenticatedFetch hook included in the Node app template */
import { useAuthenticatedFetch, useAppQuery } from '../hooks';

export default function Campaigns(props) {
  // const fetch = useAuthenticatedFetch();

  // const [getMyCampaigns, setMyCampaigns] = useState('');

  // const getAllCampaigns = async () => {
  //   try {
  //     const myCampaigns = await fetch('/api/getcampaigns', {
  //       method: 'GET',
  //       headers: { 'Content-Type': 'application/json' },
  //     });

  //     const jsonData = await myCampaigns.json();
  //     console.log(jsonData);
  //     setMyCampaigns(jsonData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <Fragment>
      <Header />
      <MainPage>
        <Sidebar />
        <CampaignsComponent />
      </MainPage>
      {/* <Button primary onClick={getAllCampaigns}>
        Get Campaigns
      </Button>
      {getMyCampaigns
        ? getMyCampaigns.map((campaign) => (
            <div key={campaign.id}>
              <div>{campaign.campaign_name}</div>
              <div>{campaign.created_at}</div>
            </div>
          ))
        : 'There are no campaigns'} */}
    </Fragment>
  );
}
