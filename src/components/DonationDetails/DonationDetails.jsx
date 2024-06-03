import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const { donationId } = useParams();
  const donations = useLoaderData();
  const specificDonationDetails = donations.find(
    (donation) => donation.id === parseInt(donationId)
  );
  const {
    color_primary,
    color_secondary,
    color_tertiary,
    donation_title,
    description,
    donation_amount,
    img,
  } = specificDonationDetails;

  return (
    <div>
      <img src={img} alt={`Donation Category Image of ${donation_title}`} />
      <p>{description}</p>
    </div>
  );
};

export default DonationDetails;
