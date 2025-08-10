import { motion } from "framer-motion";
import { useState } from "react";

function Featured() {
  const [ishover, setishover] = useState(false);
  const [ishover2, setishover2] = useState(false);

  return (
    <div className="w-full py-10 sm:py-20 bg-zinc-100">
      <div className="w-full px-5 sm:px-10 md:px-20 border-b border-zinc-300 pb-10 sm:pb-20">
        {/* Title */}
        <h1 className="font-['Neue_Montreal'] text-4xl sm:text-6xl md:text-8xl tracking-tight">
          Featured Projects
        </h1>

        <div className="px-5 sm:px-10 md:px-20 relative mt-5 sm:mt-10">
          {/* FYDE text */}
          <h1 className="absolute text-4xl sm:text-6xl md:text-8xl z-[99] text-[#CDEA68] -translate-x-1/2 overflow-hidden -translate-y-1/2 left-1/2 top-1/2 leading-none flex tracking-tighter">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={ishover ? { y: "0%" } : { y: "100%" }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.06,
                }}
                className="text-[#CDEA68] inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>

          {/* VISE text */}
          <h1 className="absolute text-4xl sm:text-6xl md:text-8xl z-[98] text-[#CDEA68] overflow-hidden translate-x-1/2 translate-y-1/2 right-1/2 top-1/2 leading-none tracking-tighter">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={ishover2 ? { y: "0%" } : { y: "100%" }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.06,
                }}
                className="text-[#CDEA68] inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>

          {/* Project Cards */}
          <div className="Cards w-full flex flex-col md:flex-row gap-5 md:gap-10 mt-5 sm:mt-10">
            {/* Card 1 */}
            <div
              onMouseEnter={() => setishover(true)}
              onMouseLeave={() => setishover(false)}
              className="cardcontainer relative w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[70vh] overflow-hidden"
            >
              <motion.div
                animate={ishover ? { scale: 1.2 } : { scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card w-full h-full rounded-xl overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src="/Project1.png"
                  alt=""
                />
              </motion.div>
            </div>

            {/* Card 2 */}
            <div
              onMouseEnter={() => setishover2(true)}
              onMouseLeave={() => setishover2(false)}
              className="cardcontainer relative w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[70vh] overflow-hidden"
            >
              <motion.div
                animate={ishover2 ? { scale: 1.2 } : { scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card w-full h-full rounded-xl overflow-hidden bg-zinc-700"
              >
                <img
                  className="w-full h-full object-cover"
                  src="/Project2.jpg"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
