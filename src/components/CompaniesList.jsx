import Company from "./Company";

export default function CompaniesList() {
  return (
    <>
      <Company companyLogo={"/Google.svg"} altText={"Google"} />
      <Company companyLogo={"/Slack.svg"} altText={"Slack"} />
      <Company companyLogo={"/Trustpilot.svg"} altText={"Trustpilot"} />
      <Company companyLogo={"/CNN.svg"} altText={"CNN"} />
      <Company companyLogo={"/Clutch.svg"} altText={"Clutch"} />
    </>
  );
}
