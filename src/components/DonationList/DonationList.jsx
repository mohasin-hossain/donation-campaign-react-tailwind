import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";

const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  return (
    <div className="container mx-auto px-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {donations.map((donation, idx) => (
          <Donation key={idx} donation={donation}></Donation>
        ))}
      </div>
    </div>
  );
};

export default DonationList;
