
function Navbar() {
  return (
    <>
      <div className="fixed z-[99] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center text-white">
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className="links flex gap-10">
          {["Services", "Our Work", "About Us", "Insight", "Contact"].map(
            (item, index) => {
              return (
                <a
                  key={index}
                  className={`text-lg capitalize font-light ${
                    index === 4 && "ml-32"
                  }`}
                >
                  {item}
                </a>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
