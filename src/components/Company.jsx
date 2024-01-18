import PropTypes from "prop-types";
function Company({ companyLogo, altText }) {
  return <img src={companyLogo} alt={altText} className="logo-img" />;
}
Company.propTypes = {
  companyLogo: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
export default Company;
