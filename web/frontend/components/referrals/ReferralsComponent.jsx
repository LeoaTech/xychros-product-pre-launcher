import SummaryCard from "../ui/SummaryCard";
import "./Referrals.css";
import MarketingWithSpeaker from "../../assets/MarketingWithSpeaker.png";
import Sale from "../../assets/Sale.png";
import magicWand from "../../assets/magicWand.png";
import subscriber from "../../assets/subscriber.png";
import Pagination from "../ui/Pagination";

import React, { useState, useEffect, Fragment } from "react";

/* Import the useAuthenticatedFetch hook included in the Node app template */
import { useAuthenticatedFetch, useAppQuery } from "../../hooks";
import ReferralsBlock from "./ReferralsBlock";
const ReferralsComponent = () => {
  const fetch = useAuthenticatedFetch();

  const [getReferrals, setReferrals] = useState([
    {
      id: 1010,
      email: "johh.doe@test.com",
      referal_code: "abcd",
      referrer_id: "abcd12",
      created_at: "2022-12-12",
      campaign_id: 1,
    },
  ]);
  const [error, setError] = useState("");

  /* useEffect(() => {
    fetch("/api/getusers", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((myReferrals) => {
        console.log(myReferrals);
        setReferrals(myReferrals);
        return myReferrals;
      })
      .catch((err) => {
        setError(err.message);
        return err.message;
      });
  }, []); */

  const pageLimit = 3;
  const dataLimit = 10;

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="selected-main">
      <div className="summary-blocks">
        <SummaryCard
          value="2"
          title="Campaigns"
          icon={MarketingWithSpeaker}
          className="campaign-icon"
        />
        <SummaryCard
          value="543678"
          title="Referrals"
          icon={subscriber}
          className="referral-icon"
        />
        <SummaryCard
          value="$253,467"
          title="Revenue"
          icon={Sale}
          className="revenue-icon"
        />
        <SummaryCard
          value="4551678"
          title="Clicks"
          icon={magicWand}
          className="clicks-icon"
        />
      </div>

      <div>
        <ReferralsBlock />
      </div>
    </div>
  );
};

export default ReferralsComponent;
