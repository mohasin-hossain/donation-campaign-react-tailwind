import { Link } from "react-router-dom";

const MyDonationItem = ({ donation }) => {
  const {
    id,
    donation_title,
    img,
    donation_category,
    color_primary,
    color_secondary,
    color_tertiary,
    donation_amount,
  } = donation;

  return (
    <div
      style={{
        "--color-primary": color_primary,
        "--color-secondary": color_secondary,
        "--color-tertiary": color_tertiary,
        backgroundColor: "var(--color-tertiary)",
      }}
      className="grid grid-cols-4 bg-base-100 drop-shadow-lg gap-4 rounded-lg"
    >
      <div>
        <img
          className="h-full w-full object-cover rounded-lg"
          src={img}
          alt=""
        />
      </div>
      <div className="col-span-3 py-6 space-y-3">
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
        <p>${donation_amount}</p>
        <Link to={`/donation/${id}`}>
          <button
            style={{ backgroundColor: "var(--color-primary)" }}
            className="btn mt-4 text-white "
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyDonationItem;
