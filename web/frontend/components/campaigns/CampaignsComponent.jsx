import SummaryCard from '../ui/SummaryCard';
import './Campaigns.css';
import MarketingWithSpeaker from '../../assets/MarketingWithSpeaker.png';
import Sale from '../../assets/Sale.png';
import magicWand from '../../assets/magicWand.png';
import subscriber from '../../assets/subscriber.png';
import CampaignBlock from './CampaignBlock';
import Pagination from '../ui/Pagination';

import React, { useState, useEffect, Fragment } from 'react';

/* Import the useAuthenticatedFetch hook included in the Node app template */
import { useAuthenticatedFetch, useAppQuery } from '../../hooks';

export default function CampaignsComponent(props) {
  const fetch = useAuthenticatedFetch();

  const [getCampaigns, setCampaigns] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/getcampaigns', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting posts');
      })
      .then((myCampaigns) => {
        console.log(myCampaigns);
        setCampaigns(myCampaigns);
        return myCampaigns;
      })
      .catch((err) => {
        setError(err.message);
        return err.message;
      });
  }, []);

  const pageLimit = 3;
  const dataLimit = 10;

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className='selected-main'>
      <div className='summary-blocks'>
        <SummaryCard
          value={getCampaigns.length}
          title='Campaigns'
          icon={MarketingWithSpeaker}
          class='campaign-icon'
        />
        <SummaryCard
          value='543678'
          title='Referrals'
          icon={subscriber}
          class='referral-icon'
        />
        <SummaryCard
          value='$253,467'
          title='Revenue'
          icon={Sale}
          class='revenue-icon'
        />
        <SummaryCard
          value='4551678'
          title='Clicks'
          icon={magicWand}
          class='clicks-icon'
        />
      </div>
      <div className='campaigns'>
        {getCampaigns.length > 0 ? (
          <Pagination
            data={getCampaigns}
            RenderComponent={CampaignBlock}
            pageLimit={pageLimit}
            dataLimit={dataLimit}
          />
        ) : (
          <h1>No Posts to display</h1>
        )}
      </div>
    </div>
  );
}
