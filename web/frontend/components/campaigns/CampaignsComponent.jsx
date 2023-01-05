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

  const callApi = () => {
    // template for first page
    const templateFirstPage = async () => {
      try {
        const url = "https://xychrosfrontend.myshopify.com/admin/api/2022-10/themes/139832328512/assets.json";
        const response = await fetch(url, { mode: 'cors' }, {
          method: "PUT",
          body: JSON.stringify({
            "asset": {
              "key": "templates/page.templateFirstPage.json",
              "value": "{\"sections\": { \"main\": {\"type\": \"main-page\", \"disabled\": true,\"settings\": { \"padding_top\": 28, \"padding_bottom\": 28}},\"1672498664ebcc18f1\": { \"type\": \"apps\", \"blocks\": { \"0aa8f66d-14f9-4fc9-82d0-536646bb7235\": { \"type\": \"shopify:\/\/apps\/xychros-frontend\/blocks\/firstPage\/2db35a9a-da40-499e-9bfd-ca330c4316bd\", \"settings\": { \"product\": \"\",\"show_header_footer\": true, \"bg_color\": \"linear-gradient(#ffffff, #000000)\", \"layout\": \"horizontal\", \"background_opacity\": 1, \"background_brightness\": 1, \"header_text\": \"We are soon opening our doors to serve you\", \"header_color\": \"#000000\", \"header_font_size\": 36, \"subheader_text\": \"Enter SubHeader\", \"subheader_color\": \"#000000\", \"subheader_font_size\": 24, \"text_layout\": \"center\", \"cta_tag_text\": \"We are soon opening our doors to serve you\", \"cta_tag_color\": \"#000000\", \"cta_tag_font_size\": 24, \"button_text\": \"Enter\", \"button_color\": \"#000000\", \"button_font_color\": \"#fff\", \"button_font_size\": 20, \"page\": \"\" }}}, \"block_order\": [ \"0aa8f66d-14f9-4fc9-82d0-536646bb7235\"], \"settings\": { \"include_margins\": true}}}, \"order\": [ \"main\", \"1672498664ebcc18f1\"]}"
            }
          }),
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': 'shpua_772fbd5793d9807187704ddda89bbb98',
            'Access-Control-Allow-Origin': '*'
          }
        });
        const template1 = await response.json();
        console.log(template1);
      } catch (error) {
        console.log('There was an error', error);
      }
    }

    // template for second page
    // const Shopify = require("@shopify/shopify-api");
    const templateSecondPage = async () => {
      try {
        const url = "https://xychrosfrontend.myshopify.com/admin/api/2022-10/themes/139832328512/assets.json";
        const response = await fetch(url, { mode: 'cors' }, {
          method: "PUT",
          body: JSON.stringify({
            "asset": {
              "key": "templates/page.templateSecondPage.json",
              "value": "{ \"sections\": { \"main\": { \"type\": \"main-page\", \"disabled\": true, \"settings\": { \"padding_top\": 28, \"padding_bottom\": 28 } }, \"1672569582b7d8f604\": { \"type\": \"apps\", \"blocks\": { \"95f0743b-7127-49cc-b847-a98e381090ff\": { \"type\": \"shopify:\/\/apps\/xychros-frontend\/blocks\/secondPage\/2db35a9a-da40-499e-9bfd-ca330c4316bd\", \"settings\": { \"announcement_bg_color\": \"#fff\", \"announcement_text\": \"This is announcement section\", \"announcement_color\": \"#000000\", \"announcement_font_size\": 12, \"show_header_footer\": true, \"layout\": \"horizontal\", \"background_brightness\": 1, \"bg_color\": \"#fff\", \"preheader_text\": \"This is PreHeader Text\", \"preheader_color\": \"#000000\", \"preheader_font_size\": 14, \"header_text\": \"This is Header Text\", \"header_color\": \"#000000\", \"header_font_size\": 20, \"subheader_text\": \"This is SubHeader Text\", \"subheader_color\": \"#000000\", \"subheader_font_size\": 14, \"text_layout\": \"center\", \"product_list\": [ ], \"footer_text\": \"This is the Footer Text\", \"footer_color\": \"#000000\", \"footer_font_size\": 14 } } }, \"block_order\": [ \"95f0743b-7127-49cc-b847-a98e381090ff\" ], \"settings\": { \"include_margins\": true } } }, \"order\": [ \"main\", \"1672569582b7d8f604\" ] }"
            }
          }),
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': 'shpua_772fbd5793d9807187704ddda89bbb98',
            'Access-Control-Allow-Origin': '*'
          }
        });
        const template2 = await response.json();
        console.log(template2);
      } catch (error) {
        console.log('There was an error', error);
      }
    }

    templateFirstPage();
    templateSecondPage();

    // create page1
    // const Shopify = require("@shopify/shopify-api");
    const firstPage = async () => {
      try {
        const url = "https://xychrosfrontend.myshopify.com/admin/api/2022-10/pages.json";
        const response = await fetch(url, { mode: 'cors' }, {
          method: "POST",
          body: JSON.stringify({ "page": { "title": "first page", "template_suffix": "templateFirstPage" } }),
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': 'shpua_772fbd5793d9807187704ddda89bbb98',
            'Access-Control-Allow-Origin': '*'
          }
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        // TypeError: Failed to fetch
        console.log('There was an error', error);
      }
    }

    // create page2
    const secondPage = async () => {
      try {
        const url = "https://xychrosfrontend.myshopify.com/admin/api/2022-10/pages.json";
        const response = await fetch(url, { mode: 'cors' }, {
          method: "POST",
          body: JSON.stringify({ "page": { "title": "second page", "template_suffix": "templateSecondPage" } }),
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': 'shpua_772fbd5793d9807187704ddda89bbb98',
            'Access-Control-Allow-Origin': '*'
          }
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        // TypeError: Failed to fetch
        console.log('There was an error', error);
      }
    }

    firstPage();
    secondPage();
  }


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
        <button onClick={callApi}>Create Theme</button>
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
