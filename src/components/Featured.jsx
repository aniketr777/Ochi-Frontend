import { motion, useAnimate } from "framer-motion";
import { useState } from "react";

function Featured() {
  // State for hover on the two images
  const [ishover, setishover] = useState(false);
  const [ishover2, setishover2] = useState(false);
  // const all=[useAnimate(),useAnimate()]
  // const onHoverHandle=(index)=>{
  //   cards[index].start({})
  // }
  return (
    <div className="w-full py-20 bg-zinc-100">
      <div className="w-full px-20 border-b-[1px] pb-20">
        <h1 className="font-['Neue_Montreal'] text-8xl tracking-tight">
          Featured Projects
        </h1>
        <div className="px-20 relative">
          {/* Add FYDE text (this will be on top of VISE) */}
          <h1 className="absolute text-8xl z-[99] text-[#CDEA68] -translate-x-1/2 overflow-hidden -translate-y-1/2 left-1/2 top-1/2 leading-none flex tracking-tighter">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }} // Fixed typo here
                animate={ishover ? { y: "0%" } : { y: "100%" }} // Proper logic to animate
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.06,
                }} // Smooth transition
                className="text-[#CDEA68] inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>

          {/* Add VISE text (this will overlap with FYDE) */}
          <h1 className="absolute text-8xl z-[98] text-[#CDEA68] overflow-hidden translate-x-1/2 translate-y-1/2 right-1/2 top-1/2 leading-none tracking-tighter">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }} // Fixed typo here
                animate={ishover2 ? { y: "0%" } : { y: "100%" }} // Proper logic to animate
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.06,
                }} // Smooth transition
                className="text-[#CDEA68] inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>

          <div className="Cards w-full flex gap-10 mt-10">
            <div
              onMouseEnter={() => setishover(true)} // Set hover for FYDE text
              onMouseLeave={() => setishover(false)} // Remove hover for FYDE text
              // onHoverStart={()=>onHoverHandle(0)}
              className="cardcontainer relative w-1/2 h-[70vh] overflow-hidden"
            >
              <motion.div
                animate={ishover ? { scale: 1.2 } : { scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card w-full h-full rounded-xl overflow-hidden"
              >
                <img
                  className="w-full h-full bg-cover"
                  src="/Project1.png"
                  alt=""
                />
              </motion.div>
            </div>

            <div
              onMouseEnter={() => setishover2(true)} // Set hover for VISE text
              onMouseLeave={() => setishover2(false)} // Remove hover for VISE text
              className="cardcontainer relative w-1/2 h-[70vh] overflow-hidden"
            >
              <motion.div
                animate={ishover2 ? { scale: 1.2 } : { scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card w-full h-full rounded-xl overflow-hidden bg-zinc-700"
              >
                <img
                  className="w-full h-full bg-cover"
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
