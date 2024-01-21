import { Fragment } from "react";
import Company from "./Company";

export default function CompaniesList() {
  return (
    <>
      <Company companyLogo={"src/assets/Google.svg"} altText={"Google"} />
      <Company companyLogo={"src/assets/Slack.svg"} altText={"Slack"} />
      <Company
        companyLogo={"src/assets/Trustpilot.svg"}
        altText={"Trustpilot"}
      />
      <Company companyLogo={"src/assets/CNN.svg"} altText={"CNN"} />
      <Company companyLogo={"src/assets/Clutch.svg"} altText={"Clutch"} />
    </>
  );
}
