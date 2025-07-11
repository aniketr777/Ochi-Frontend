function About() {
  return (
    <>
      <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl  text-black ">
        <h1 className="font-['Neue_Monreal'] text-[4vw] leading-[3vw] tracking-tight">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell products, explain complex
          ideas, and hire great people.
        </h1>

        <div className="w-full border-t-[1px] mt-20 flex  border-[#beda56]">
          <div className="w-1/2 ">
            <h1 className="text-7xl">Our Approach :</h1>
            <button className="px-10 uppercase flex gap-10 items-center py-6 bg-zinc-900 rounded-full mt-20 text-white ">
              Read More
              <div className="w-2 h-2  bg-zinc-100 rounded-full "></div>
            </button>
          </div>
          <div className="w-1/2 h-[70vh] bg-[#2b3214] rounded-3xl "></div>
        </div>
      </div>
    </>
  );
}

export default About;
