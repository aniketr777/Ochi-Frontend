import { motion } from "framer-motion";
import { FaLongArrowAltUp } from "react-icons/fa";

function Landing() {
  
  return (
    <>
      <div data-scroll data-scroll-selection data-scroll-speed=".3" className="w-full h-screen bg-zinc-900 pt-1 text-white">
        <div className="textstructure mt-40 px-20 ">
          <div className="masker">
            <div className="w-fit flex items-center">
              <h1 className="flex uppercase text-8xl leading-[6vw] tracking-tighter font-medium font-['Founders_Grotesk_X-Condensed']">
                We Create
              </h1>
            </div>
          </div>
          <div className="masker  ">
            <div className="w-fit flex overflow-hidden">
              {/* Adjusted the red box to be inline with the text */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "9vw" }}
                transition={{
                  ease: [0.76, 0, 0.24, 1],
                  duration: 1.5,
                }}
                className="h-[5.7vw] relative -top-[0.5vw] bg-red-600"
              ></motion.div>

              <h1 className="uppercase text-8xl leading-[6vw] tracking-tighter font-semibold font-['Founders_Grotesk_X-Condensed']">
                Eye Opening
              </h1>
            </div>
          </div>
          <div className="masker">
            <div className="w-fit flex items-center">
              <h1 className="uppercase text-8xl leading-[6vw] tracking-tighter font-semibold font-['Founders_Grotesk_X-Condensed']">
                Presentations
              </h1>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20 text-white">
          {[
            "For Public and Private Companies ",
            "From the First pitch to IPO",
          ].map((item, index) => {
            return (
              <p
                key={index}
                className="text-md font-light tracking-tight leading-none"
              >
                {item}
              </p>
            );
          })}

          <div className="start flex items-center gap-5">
            <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-lg uppercase rounded-full">
              Start Project
            </div>
            <div className="w-10 h-10 border-[1px] border-zinc-400 rounded-full">
              <span className="rotate-[45deg]">
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
