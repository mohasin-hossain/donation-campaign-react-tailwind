import PropTypes from "prop-types";

const Banner = ({ handleSearch, handleSubmit }) => {
  return (
    <div className="flex flex-col items-center py-20 bg-[linear-gradient(to_top,rgba(255,255,255,1),rgba(255,255,255,0.4)),url('./assets/banner.png')] bg-cover px-10">
      <h1 className="text-3xl md:text-4xl lg:text-6xl">
        I Grow By Helping People In Need
      </h1>
      <p className="text-center py-8 max-w-3xl text-xl font-thin">
        In the dance of life, extending a hand to those in need becomes a
        graceful waltz of humanity. Each act of kindness is a verse in the
        poetry of existence, weaving threads of compassion and understanding. By
        aiding the needy, we cultivate a garden of empathy, where seeds of hope
        blossom into the vibrant tapestry of shared humanity. In this
        interconnected web, our own growth finds nourishment, as we discover the
        profound beauty of giving and receiving.
      </p>
      <form onClick={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Search here..."
          className="p-3 outline-none rounded-md w-80"
          name="searchInput"
          onChange={handleSearch}
        />
        <input
          className="btn bg-[#FF444A] hover:bg-opacity-75 text-white hover:bg-[#FF444A] -ml-8 h-[100%]"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};

Banner.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Banner;
