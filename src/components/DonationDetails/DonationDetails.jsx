import { Link, useLoaderData, useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveToLocalStorage } from "../../utilities/localStorage";

const DonationDetails = () => {
  const { donationId } = useParams();
  const donations = useLoaderData();
  const specificDonationDetails = donations.find(
    (donation) => donation.id === parseInt(donationId)
  );
  const {
    id,
    color_primary,
    color_secondary,
    donation_title,
    description,
    donation_amount,
    img,
  } = specificDonationDetails;

  const handleDonate = (id) => {
    saveToLocalStorage(parseInt(id));
    toast.success(`Thanks for the Donation!`);
  };

  return (
    <div
      style={{
        "--color-primary": color_primary,
        "--color-secondary": color_secondary,
      }}
      className="container mx-auto px-10 flex flex-col items-center"
    >
      <div className="relative w-full flex flex-col items-center">
        <img
          className="w-3/4 md:w-1/2 my-4"
          src={img}
          alt={`Donation Category Image of ${donation_title}`}
        />
        <div className="bg-black bg-opacity-50 w-3/4 md:w-1/2 absolute bottom-4 py-4 grid place-items-center">
          <button
            style={{ backgroundColor: "var(--color-primary)" }}
            className="btn border-none text-white"
            onClick={() => handleDonate(id)}
          >
            Donate ${donation_amount}
          </button>
        </div>
      </div>
      <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-1 first-line:uppercase first-line:tracking-widest max-w-7xl text-justify mb-8">
        {description}
      </p>
      <Link to="/">
        <button
          style={{ backgroundColor: "var(--color-secondary)" }}
          className="btn text-white"
        >
          Go Back <RiArrowGoBackFill />
        </button>
      </Link>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default DonationDetails;
