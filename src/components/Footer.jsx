import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer id="about" className="border-t border-[#eef1f5] bg-white">
      <div className="site-width py-10 sm:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center">
              <img src={logo} alt="Dev Stack" className="h-7 w-auto" />
            </a>

            <p className="mt-3 max-w-77.5 text-[11px] leading-5 text-[#64748b]">
              A simple place to explore development tools and build a stack for
              your next project.
            </p>

            <div id="contact" className="mt-4 flex gap-4 text-[10px] font-semibold text-[#475569]">
              <a href="https://github.com/alrayat">GitHub</a>
              <a href="https://x.com/AlTahrim_">Twitter</a>
              <a href="https://linkedin.com">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f172a]">
              Product
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-[10px] text-[#64748b]">
              <a href="">Home</a>
              <a href="">Technologies</a>
              <a href="">Projects</a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f172a]">
              Company
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-[10px] text-[#64748b]">
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Careers</a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f172a]">
              Legal
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-[10px] text-[#64748b]">
              <a href="">Privacy Policy</a>
              <a href="">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="mt-9 flex items-center justify-between border-t border-[#eef1f5] pt-5 text-[9px] text-[#94a3b8]">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="">Privacy</a>
            <a href="">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
