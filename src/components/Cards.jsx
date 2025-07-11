function Cards() {
  return (
    <>
      <div className="w-full h-screen flex bg-zinc-900 items-center gap-5 px-20  ">
        <div className="cardcontianer h-[50vh] w-1/2">
          <div className="card relative w-full rounded-xl h-full flex items-center justify-center bg-[#004D43]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="logo"
            />
            <button className="text-white px-5 py-1 rounded-full border-2  absolute left-10 bottom-10">
              &copy;2024
            </button>
          </div>
        </div>
        <div className="cardcontianer flex gap-5  h-[50vh] w-1/2">
          <div className="card relative w-1/2 h-full rounded-xl flex items-center justify-center  bg-[#09201d]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="logo"
            />
            <button className="text-white px-5 py-1 rounded-full border-2  absolute left-10 bottom-10">
              &copy;2024
            </button>
          </div>
          <div className="flex items-center justify-center card relative w-1/2 h-full rounded-xl bg-[#0c2b27]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="logo"
            />
            <button className="text-white px-5 py-1 rounded-full border-2  absolute left-10 bottom-10">
              &copy;2024
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
