function Cards() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col md:flex-row bg-zinc-900 items-center gap-5 px-5 sm:px-10 md:px-20 py-10">
        {/* Left Card */}
        <div className="cardcontainer h-[40vh] sm:h-[50vh] w-full md:w-1/2">
          <div className="card relative w-full rounded-xl h-full flex items-center justify-center bg-[#004D43]">
            <img
              className="w-20 sm:w-28 md:w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="logo"
            />
            <button className="text-white px-4 sm:px-5 py-1 rounded-full border-2 absolute left-5 sm:left-10 bottom-5 sm:bottom-10">
              &copy;2024
            </button>
          </div>
        </div>

        {/* Right Cards */}
        <div className="cardcontainer flex flex-col sm:flex-row gap-5 h-[40vh] sm:h-[50vh] w-full md:w-1/2">
          <div className="card relative w-full sm:w-1/2 h-full rounded-xl flex items-center justify-center bg-[#09201d]">
            <img
              className="w-20 sm:w-28 md:w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="logo"
            />
            <button className="text-white px-4 sm:px-5 py-1 rounded-full border-2 absolute left-5 sm:left-10 bottom-5 sm:bottom-10">
              &copy;2024
            </button>
          </div>

          <div className="card relative w-full sm:w-1/2 h-full rounded-xl flex items-center justify-center bg-[#0c2b27]">
            <img
              className="w-20 sm:w-28 md:w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="logo"
            />
            <button className="text-white px-4 sm:px-5 py-1 rounded-full border-2 absolute left-5 sm:left-10 bottom-5 sm:bottom-10">
              &copy;2024
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
