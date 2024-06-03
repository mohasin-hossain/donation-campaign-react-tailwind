import Donation from "../Donation/Donation";

const DonationList = ({ displayDonations }) => {
  return (
    <div className="container mx-auto px-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayDonations.map((donation, idx) => (
          <Donation key={idx} donation={donation}></Donation>
        ))}
      </div>
    </div>
  );
};

export default DonationList;
