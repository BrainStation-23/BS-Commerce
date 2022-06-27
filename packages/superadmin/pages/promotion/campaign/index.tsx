import type { NextPage } from "next";
import CampaignsList from "../../../components/campaign/campaignList";

const Campaigns: NextPage = () => {
  return (
    <>
      <main className="px-5">
        <h2>Campaigns</h2>
        <div className="float-end pb-2">
        <a className="btn btn-primary" href="/promotion/discount/create">
          <i className="bi bi-plus-square-fill mx-2"></i>
          Add new
        </a>
      </div> 
        <div className="mt-2 pt-1">
          <CampaignsList />
        </div>
      </main>
    </>
  );
};

export default Campaigns;
