import { useNavigate } from "react-router-dom";

const Donation = ({ donation }) => {
  const {
    id,
    donation_title,
    img,
    donation_category,
    color_primary,
    color_secondary,
    color_tertiary,
  } = donation;
  const navigate = useNavigate();

  const handleDonationDetails = () => {
    navigate(`/donation/${id}`);
  };

  return (
    <div
      onClick={handleDonationDetails}
      className="rounded-md drop-shadow-md"
      style={{
        "--color-primary": color_primary,
        "--color-secondary": color_secondary,
        "--color-tertiary": color_tertiary,
        backgroundColor: "var(--color-tertiary)",
      }}
    >
      <img src={img} alt="" />
      <div className=" p-4 flex flex-col">
        <span
          className="px-2 py-1 rounded-md self-start"
          style={{
            color: "var(--color-primary)",
            backgroundColor: "var(--color-secondary)",
          }}
        >
          {donation_category}
        </span>
        <h3 className="mt-2 text-xl" style={{ color: "var(--color-primary)" }}>
          {donation_title}
        </h3>
      </div>
    </div>
  );
};

export default Donation;
