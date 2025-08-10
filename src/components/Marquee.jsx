import { motion } from "framer-motion";

function Marquee() {
  return (
    <>
      <div className="w-full py-10 md:py-20 rounded-tl-[3xl] rounded-tr-[3xl] bg-[#004D43]">
        <div className="text-white border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] pr-10 md:pr-20 font-semibold leading-none font-['Founders_Grotesk_X-Condensed'] uppercase pt-5 md:pt-10 -mb-2 md:-mb-5"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] pr-10 md:pr-20 uppercase font-semibold pt-5 md:pt-10 -mb-2 md:-mb-5 leading-none font-['Founders_Grotesk_X-Condensed']"
          >
            we are ochi
          </motion.h1>
        </div>
      </div>
    </>
  );
}

export default Marquee;
