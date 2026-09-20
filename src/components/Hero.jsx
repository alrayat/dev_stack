import banner from "../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="site-width grid min-h-125 items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:py-20">
      <div>
        <h1 className="max-w-162.5 text-center text-[38px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#111827] sm:text-[50px] lg:text-left lg:text-[60px]">
          Build Your Ideal
          <br />
          <span className="brand-text">Development Stack</span>
        </h1>

        <p className="mx-auto mt-5 max-w-147.5 text-center text-[13px] leading-6 text-[#64748b] sm:text-[15px] lg:mx-0 lg:text-left">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
          <a
            href="#technologies"
            className="brand-fill rounded-lg px-5 py-3 text-[12px] font-semibold text-white"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-lg border border-[#dfe4ea] px-7 py-3 text-[12px] font-medium text-[#475569]"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img
          src={banner}
          alt="Development stack illustration"
          className="w-70 sm:w-90 lg:w-107.5"
        />
      </div>
    </section>
  );
}

export default Hero;
