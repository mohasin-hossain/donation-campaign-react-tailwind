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
    <div className="container mx-auto px-10 py-20">
      <div className="grid md:grid-cols-2 gap-8">
        {myDonations.length ? (
          myDonations.map((donation, idx) => (
            <MyDonationItem key={idx} donation={donation}></MyDonationItem>
          ))
        ) : (
          <h3 className="text-center col-span-2 text-2xl md:text-4xl p-4 bg-base-200 shadow-lg text-[#ff444a] rounded-lg mt-20">You have not donated yet! Please do some donations. Thanks.</h3>
        )}
      </div>
    </div>
  );
};

export default MyDonation;
