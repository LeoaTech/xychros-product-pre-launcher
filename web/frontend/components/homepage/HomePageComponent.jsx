import SummaryCard from '../ui/SummaryCard';
import './HomePage.css';
import MarketingWithSpeaker from '../../assets/MarketingWithSpeaker.png';
import Sale from '../../assets/Sale.png';
import magicWand from '../../assets/magicWand.png';
import subscriber from '../../assets/subscriber.png';
import Charts from '../ui/Charts';

import React, { useState, useEffect, Fragment } from 'react';

/* Import the useAuthenticatedFetch hook included in the Node app template */
import { useAuthenticatedFetch, useAppQuery } from '../../hooks';

export default function HomePageComponent(props) {
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

  const LineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
  };

  const LineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Referrals',
        data: [111, 13, 26, 78],
        borderColor: '#165BAA',
        backgroundColor: '#165BAA',
      },
      {
        label: 'Campaigns',
        data: [21, 34, 61, 38],
        borderColor: '#A155B9',
        backgroundColor: '#A155B9',
      },
      {
        label: 'Clicks',
        data: [45, 23, 42, 99],
        borderColor: '#F765A3',
        backgroundColor: '#F765A3',
      },
    ],
  };

  const DonutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: false,
      },
    },
  };

  const DonutChartData = {
    labels: ['Product 1', 'product 2', 'Product 3', 'Product 4'],
    datasets: [
      {
        label: '# of Votes',
        data: [30, 20, 10, 5],
        backgroundColor: ['#165BAA', '#A155B9', '#F765A3', '#16BFD6'],
        borderColor: ['#165BAA', '#A155B9', '#F765A3', '#16BFD6'],
        borderWidth: 1,
      },
    ],
  };

  const RadarChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
  };

  const RadarChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Referrals',
        data: [1, 3, 56, 78, 55, 23, 98],
        borderColor: '#165BAA',
        backgroundColor: '#63ABFD',
      },
      {
        label: 'Revenue',
        data: [111, 13, 26, 78, 43, 67, 23],
        borderColor: '#A155B9',
        backgroundColor: '#E697FF',
      },
      {
        label: 'Clicks',
        data: [45, 23, 42, 99, 55, 189, 265],
        borderColor: '#F765A3',
        backgroundColor: '#FFA5CB',
      },
    ],
  };

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
      <div className='single-chart'>
        <Charts
          type='line'
          header='Total Revenue'
          value='$253467'
          subheader='Last 30 days Data'
          LineChartOptions={LineChartOptions}
          LineChartData={LineChartData}
        />
      </div>
      <div className='dual-charts'>
        <Charts
          type='radar'
          header='Product Launch'
          value='$2456.76'
          subheader='August 1st, 2022 - September 5th, 2022'
          RadarChartOptions={RadarChartOptions}
          RadarChartData={RadarChartData}
        />
        <Charts
          type='donut'
          header='Revenue'
          value='$15,456.98'
          subheader='Last 4 campaigns'
          DonutChartOptions={DonutChartOptions}
          DonutChartData={DonutChartData}
        />
      </div>
    </div>
  );
}
