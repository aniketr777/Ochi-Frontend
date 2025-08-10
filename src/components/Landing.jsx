import { motion } from "framer-motion";
import { FaLongArrowAltUp } from "react-icons/fa";

function Landing() {
  return (
    <>
      <div
        data-scroll
        data-scroll-selection
        data-scroll-speed=".3"
        className="w-full min-h-screen bg-zinc-900 pt-1 text-white flex flex-col justify-between"
      >
        {/* Text Section */}
        <div className="textstructure mt-20 sm:mt-28 md:mt-40 px-5 sm:px-10 md:px-20">
          <div className="masker">
            <div className="w-fit flex items-center">
              <h1 className="flex uppercase text-[12vw] sm:text-[9vw] md:text-8xl leading-tight tracking-tighter font-medium font-['Founders_Grotesk_X-Condensed']">
                We Create
              </h1>
            </div>
          </div>

          <div className="masker">
            <div className="w-fit flex overflow-hidden items-center">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "12vw" }}
                transition={{
                  ease: [0.76, 0, 0.24, 1],
                  duration: 1.5,
                }}
                className="h-[9vw] sm:h-[7vw] md:h-[5.7vw] relative -top-[0.5vw] bg-red-600"
              ></motion.div>

              <h1 className="uppercase text-[12vw] sm:text-[9vw] md:text-8xl leading-tight tracking-tighter font-semibold font-['Founders_Grotesk_X-Condensed'] ml-2">
                Eye Opening
              </h1>
            </div>
          </div>

          <div className="masker">
            <div className="w-fit flex items-center">
              <h1 className="uppercase text-[12vw] sm:text-[9vw] md:text-8xl leading-tight tracking-tighter font-semibold font-['Founders_Grotesk_X-Condensed']">
                Presentations
              </h1>
            </div>
          </div>
        </div>

        {/* Footer Info Section */}
        <div className="border-t border-zinc-700 mt-10 flex flex-col md:flex-row justify-between items-start md:items-center py-5 px-5 sm:px-10 md:px-20 text-white gap-5">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-10">
            {[
              "For Public and Private Companies",
              "From the First pitch to IPO",
            ].map((item, index) => (
              <p
                key={index}
                className="text-sm sm:text-md font-light tracking-tight leading-none"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="start flex items-center gap-5">
            <div className="px-4 sm:px-5 py-2 border border-zinc-500 font-light text-sm sm:text-lg uppercase rounded-full cursor-pointer">
              Start Project
            </div>
            <div className="w-10 h-10 border border-zinc-400 rounded-full flex items-center justify-center cursor-pointer">
              <span className="rotate-[90deg] text-lg">
                <FaLongArrowAltUp />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
