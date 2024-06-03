import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import DonationList from "../DonationList/DonationList";

const Home = () => {
  const [donations, setDonations] = useState([]);
  const [displayDonations, setDisplayDonations] = useState([]);

  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setDisplayDonations(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    const filterDonations = donations.filter(
      (donation) =>
        donation.donation_title
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        donation.donation_category
          .toLowerCase()
          .includes(searchInput.toLowerCase())
    );
    setDisplayDonations(filterDonations);
  };

  return (
    <div>
      <Banner handleSubmit={handleSubmit} handleSearch={handleSearch}></Banner>
      <DonationList displayDonations={displayDonations}></DonationList>
    </div>
  );
};

export default Home;
