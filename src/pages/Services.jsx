import React from "react";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Social Intelligence",
      description: "Our unique social intelligence framework aims to end the dependence on survey and create a faster, accurate and affordable way for the company to interact with the consumers and to gain consumer insights.",
      icon: "./images/e.png",
    },
    {
      title: "Market Research",
      description: "Our robust research methodologies and innovative process collects data from primary and secondary sources to gain insights into customer preferences, market trends, competitor activities etc",
      icon: "./images/f.png",
    },
    {
      title: "Data Analytics & AI",
      description: "We use advanced data analytics and Al to leverage the vast amounts of data collected in manufacturing & infrastructure to transform it into valuable insights that drive strategic actions and business success.",
      icon: "./images/g.png",
    },
    {
      title: "Technology",
      description: "We create customized applications to help companies streamline operations, automate tasks, improve communication, enhance productivity and drive innovation for sustainable growth and competitive advantage.",
      icon: "./images/h.png",
    },
  ];

  return (
      <section id="services" className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Outer Container around all boxes */}
          <div className="p-8 bg-white rounded-2xl shadow-lg">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {services.map((s, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 
                    bg-gradient-to-br ${
                      i === 0
                        ? "from-green-50 to-blue-100"
                        : i === 1
                        ? "from-purple-50 to-blue-100"
                        : i === 2
                        ? "from-green-50 to-blue-100"
                        : "from-purple-50 to-blue-100"
                    }`}
                >
                  {/* Square Image on Top */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden shadow">
                    <img
                      src={s.icon}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">{s.title}</h4>

                  {/* Description */}
                  <p className="text-gray-700 text-sm">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


  );
}