import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";


const NotFound = () => {
    return (
        <div className="grid place-items-center min-h-screen">
            <h1 className="text-4xl p-8 rounded-lg bg-slate-100 shadow-lg text-[#ff444a]">The page you are looking for is not available!</h1>
            <Link to='/'>
                <button className="btn bg-[#ff444a90] outline-none text-white hover:bg-[#ff444ac3]">Go Back to Home <RiArrowGoBackFill /></button>
            </Link>
        </div>
    );
};

export default NotFound;