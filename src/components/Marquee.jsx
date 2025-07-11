import {motion} from 'framer-motion'

function Marquee() {

  return (
    <>
      <div className="w-full py-20 rounded-tl-[3xl] rounded-tr-[3xl] bg-[#004D43]">
        <div className="text-white text border-t-2 border-b-2 border-zinc-300  flex  whitespace-nowrap overflow-hidden">
          <motion.h1
            intial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[22vw] pr-20 font-semibold leading-none font-['Founders_Grotesk_X-Condensed'] uppercase pt-10 -mb-5"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            intial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[22vw] pr-20 uppercase font-semibold pt-10 -mb-10 leading-none font-['Founders_Grotesk_X-Condensed']"
          >
            we are ochi
          </motion.h1>
          {/* <motion.h1
            intial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[22vw] uppercase font-semibold pt-10 -mb-10 leading-none font-['Founders_Grotesk_X-Condensed']"
          >
            we are ochi
          </motion.h1> */}
        </div>
      </div>
    </>
  );
}

export default Marquee;
