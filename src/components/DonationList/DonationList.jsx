import Donation from "../Donation/Donation";
import PropTypes from "prop-types";

const DonationList = ({ displayDonations }) => {
  return (
    <div className="container mx-auto px-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayDonations.map((donation, idx) => (
          <Donation key={idx} donation={donation}></Donation>
        ))}
      </div>
    </div>
  );
};

DonationList.propTypes = {
  displayDonations: PropTypes.func.isRequired,
};

export default DonationList;
