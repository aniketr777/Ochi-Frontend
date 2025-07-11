function Footer() {
  return (
    <>
      <div className="w-full flex gap-5 h-screen bg-zinc-900 text-white px-20">
        <div className="w-1/2 flex flex-col justify-between h-full  font-['Founders_Grotesk_X-Condensed'] ">
          <div className="heading">
            <h1 className="text-[8vw] font-semibold tracking-tighter uppercase leading-none -mb-5 ">
              Eye-
            </h1>
            <h1 className="font-semibold text-[8vw] uppercase leading-none tracking-tighter -mb-5">
              Opening
            </h1>
          </div>
          <h3 className="">
            {/* <div className="logo">
              <img className="text-white" src="/logo.svg" alt="logo" />
            </div> */}
          </h3>
        </div>
        <div className="w-1/2 ">
          <h1 className="text-white text-[5vw] font-semibold tracking-tighter uppercase leading-none -mb-5 font-['Founders_Grotesk_X-Condensed']">
            Presentation
          </h1>
          <div className="details mt-10">
            <a className="block text-xl font-" href="#">
              Google
            </a>
            <a className="block" href="#">
              GitHub
            </a>
            <a className="block" href="#">
              Insta
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
