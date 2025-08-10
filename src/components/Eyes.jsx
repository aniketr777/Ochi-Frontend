import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  // motion/ /
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 180;
      // console.log(angle)
      setRotate(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full bg-red-400 h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-center bg-cover"
      >
        <div className="absolute gap-10 flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          {/* Eye 1 */}
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="relative w-2/3 h-2/3 rounded-full bg-black">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="relative w-2/3 h-2/3 rounded-full bg-black">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
