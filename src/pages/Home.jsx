import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('./images/banner.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold">Bringing Your Vision to Life</h2>
        <p className="mt-4 text-lg md:text-xl">Our aim is to make organization more data driven, generating insights from less traveled paths of Data Analytics and Social Intelligence</p>
        
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-6 inline-block px-6 py-3 rounded-full border-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500
                    bg-white bg-clip-text
                    bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                    hover:from-green-400 hover:via-blue-500 hover:to-purple-600
                    transition-all duration-300"
              >
               Our Services
              </button>
          

      </div>
    </section>
  );
}
