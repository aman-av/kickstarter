import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
import { factorycontractdeployedaddress } from "../config";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  factorycontractdeployedaddress
);

export default instance;
