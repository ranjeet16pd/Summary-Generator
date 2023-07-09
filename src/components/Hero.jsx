import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ranjeet-prasad-235115206/",
              "_blank"
            )
          }
          className="black_btn"
        >
          Contact Developer
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">SnapWeb</span>
      </h1>
      <h2 className="desc">
        Get Instant Website Summaries with AI-Powered Analysis
      </h2>
    </header>
  );
};

export default Hero;
