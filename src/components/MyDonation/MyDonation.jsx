import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utilities/localStorage";
import MyDonationItem from "../MyDonationItem/MyDonationItem";

const MyDonation = () => {
  const [myDonations, setMyDonations] = useState([]);
  const donations = useLoaderData();

  useEffect(() => {
    const storedIds = getStoredData();
    const storedDonations = donations.filter((donation) =>
      storedIds.includes(donation.id)
    );
    setMyDonations(storedDonations);
  }, []);

  return (
    <div className="container mx-auto py-20 px-10">
      <div className="grid md:grid-cols-2 gap-8">
        {myDonations.map((donation, idx) => (
          <MyDonationItem key={idx} donation={donation}></MyDonationItem>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
