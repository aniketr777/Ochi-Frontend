function About() {
  return (
    <>
      <div className="w-full p-6 sm:p-10 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className="font-['Neue_Monreal'] text-[6vw] sm:text-[4vw] leading-tight sm:leading-[3vw] tracking-tight">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell products, explain complex
          ideas, and hire great people.
        </h1>

        <div className="w-full border-t border-[#beda56] mt-10 sm:mt-20 flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="md:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-7xl">Our Approach :</h1>
            <button className="px-6 sm:px-10 uppercase flex gap-4 sm:gap-10 items-center py-4 sm:py-6 bg-zinc-900 rounded-full mt-10 sm:mt-20 text-white">
              Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
          <div className="w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[70vh] bg-[#2b3214] rounded-3xl overflow-hidden">
            <img
              src="/img-1.jpg"
              alt="Description of image"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
