import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup (e.g., API call)
    setEmail("");
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-5 min-h-screen  bg-zinc-900 text-white px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-12 font-['Founders_Grotesk_X-Condensed']">
        {/* Left Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-between">
          <div className="heading">
            <h1 className="text-[12vw] sm:text-[10vw] md:text-[7vw] lg:text-[6vw] font-semibold tracking-tighter uppercase leading-none -mb-3">
              Eye-
            </h1>
            <h1 className="font-semibold text-[12vw] sm:text-[10vw] md:text-[7vw] lg:text-[6vw] uppercase leading-none tracking-tighter -mb-3">
              Opening
            </h1>
          </div>
          <div className="mt-5 md:mt-0">
            <img src="/logo.svg" alt="logo" className="h-8 sm:h-10 md:h-12" />
          </div>
        </div>

        {/* Middle Section - Navigation & Newsletter */}
        <div className="w-full md:w-1/3 mt-10 md:mt-0">
          <h1 className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] font-semibold tracking-tighter uppercase leading-none -mb-3">
            Explore
          </h1>
          <div className="details mt-8 sm:mt-10 space-y-3">
            <a
              className="block text-base sm:text-lg md:text-xl hover:underline"
              href="#"
            >
              Home
            </a>
            <a
              className="block text-base sm:text-lg md:text-xl hover:underline"
              href="#"
            >
              Services
            </a>
            <a
              className="block text-base sm:text-lg md:text-xl hover:underline"
              href="#"
            >
              Portfolio
            </a>
            <a
              className="block text-base sm:text-lg md:text-xl hover:underline"
              href="#"
            >
              Blog
            </a>
          </div>
          <div className="newsletter mt-8 sm:mt-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold uppercase">
              Newsletter
            </h2>
            <form
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="px-4 py-2 text-black rounded-md focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Right Section - Social & Contact */}
        <div className="w-full md:w-1/3 mt-10 md:mt-0">
          <h1 className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] font-semibold tracking-tighter uppercase leading-none -mb-3">
            Connect
          </h1>
          <div className="details mt-8 sm:mt-10 space-y-3">
            <a
              className="block text-base sm:text-lg md:text-xl hover:underline"
              href="#"
            >
              Google
            </a>
            <a
              className="block text-base sm:text-lg md:text-xl hover:underline"
              href="#"
            >
              GitHub
            </a>
            <a
              className="block text-base sm:text-lg md:text-xl hover:underline"
              href="#"
            >
              Instagram
            </a>
          </div>
          <div className="social-icons mt-6 flex gap-4">
            <a href="#" aria-label="Twitter">
              <svg
                className="w-6 h-6 fill-white hover:fill-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg
                className="w-6 h-6 fill-white hover:fill-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM19 19h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5S11 12.12 11 13.5V19H8V8h3v1.43c.86-.86 2.07-1.43 3.5-1.43 2.76 0 5 2.24 5 5V19z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg
                className="w-6 h-6 fill-white hover:fill-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M24 12a12 12 0 01-12 12A12 12 0 010 12a12 12 0 0112-12 12 12 0 0112 12zm-7 1.5h-3.5v6H10v-6H8.5V10H10V8c0-1.66 1.34-3 3-3h2v2.5h-1.5c-.55 0-1 .45-1 1V10h2.5l-.5 3.5z" />
              </svg>
            </a>
          </div>
          <div className="contact mt-6">
            <p className="text-base sm:text-lg md:text-xl">
              Email:{" "}
              <a href="mailto:info@example.com" className="hover:underline">
                info@example.com
              </a>
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:underline">
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              Address: 123 Vision St, Dream City, 12345
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full bg-zinc-800 text-white text-center py-4 text-sm sm:text-base">
        <p>
          &copy; {new Date().getFullYear()} Eye-Opening. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
