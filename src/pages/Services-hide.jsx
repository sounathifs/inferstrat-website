import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Services() {

  const [showProduct, setShowProduct] = useState(false);
  const showRef = useRef(false); // mirror state to avoid stale closures
  const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const rafRef = useRef(null);
  const triggerRef = useRef(0); // show threshold
  const hideRef = useRef(0); // hide threshold (trigger - hysteresis)

  // mirror state
  useEffect(() => {
    showRef.current = showProduct;
  }, [showProduct]);


  const services = [
    {
      title: "Social Intelligence",
      description: "Our unique social intelligence framework aims to end the dependence on survey and create a faster, accurate and affordable way for the company to interact with the consumers and to gain consumer insights.",
      icon: `./images/e.png`,
    },
    {
      title: "Market Research",
      description: "Our robust research methodologies and innovative process collects data from primary and secondary sources to gain insights into customer preferences, market trends, competitor activities etc",
      icon: `./images/f.png`,
    },
    {
      title: "Data Analytics & AI",
      description: "We use advanced data analytics and Al to leverage the vast amounts of data collected in manufacturing & infrastructure to transform it into valuable insights that drive strategic actions and business success.",
      icon: `./images/g.png`,
    },
    {
      title: "Technology",
      description: "We create customized applications to help companies streamline operations, automate tasks, improve communication, enhance productivity and drive innovation for sustainable growth and competitive advantage.",
      icon: `./images/h.png`,
    },
  ];

  useEffect(() => {
    // defensive: ensure DOM available
    if (typeof window === "undefined") return;

    const aboutEl = document.getElementById("about");
    const servicesEl = document.getElementById("services");
    if (!aboutEl || !servicesEl) return;

    // compute header height (if you have a fixed nav)
    const headerEl = document.querySelector("nav");
    const headerHeight = () =>
      headerEl ? Math.ceil(headerEl.getBoundingClientRect().height) : 0;

    // compute trigger positions (call on resize / load)
    const computeThresholds = () => {
      const aboutRect = aboutEl.getBoundingClientRect();
      // absolute top of about relative to document
      const aboutTop = aboutRect.top + window.scrollY;

      // offset: either a fixed px or a fraction of viewport (helps different screen sizes)
      const viewportOffset = Math.max(80, Math.round(window.innerHeight * 0.18)); // tweakable
      const trig = Math.max(0, aboutTop - headerHeight() - viewportOffset);

      // hysteresis so toggles don't flicker: hide only when scrolled well above trigger
      const hysteresis = Math.min(120, Math.round(window.innerHeight * 0.06)); // about 6% vh up to 120px
      const hidePoint = trig - hysteresis;

      triggerRef.current = trig;
      hideRef.current = hidePoint;
    };

    // initial compute
    computeThresholds();

    // Scroll handler using RAF throttle
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY;
        const goingDown = y > lastScrollY.current;
        lastScrollY.current = y;

        // If we've scrolled past the trigger point -> show
        if (y >= triggerRef.current) {
          if (!showRef.current) {
            setShowProduct(true);
          }
          return;
        }

        // If we've scrolled above the hide point -> hide
        if (y < hideRef.current) {
          if (showRef.current) {
            setShowProduct(false);
          }
          return;
        }

        // Otherwise (between hide and trigger) keep current state to avoid flicker
      });
    };

    // Recompute thresholds on resize (debounce lightly with RAF)
    let resizeRaf = null;
    const onResize = () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        computeThresholds();
        // run one immediate check after recompute
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          // run a safe check similar to handleScroll
          const y = window.scrollY;
          if (y >= triggerRef.current) {
            setShowProduct(true);
          } else if (y < hideRef.current) {
            setShowProduct(false);
          }
        });
      });
    };

    // attach listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // initial call in case page loaded mid-scroll
    handleScroll();

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
    };
  }, []);

  return (
    <>
      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-gray-100 to-white"
      >
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
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">
                    {s.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-700 text-sm">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expandable Product Section */}
      <AnimatePresence>
        {showProduct && (
          <motion.section
            id="product"
            className="bg-gradient-to-r from-blue-50 to-purple-50 py-20"
            initial={{ opacity: 0, y: 50 }}        // start hidden & slightly below
            animate={{ opacity: 1, y: 0 }}         // slide up into place
            exit={{ opacity: 0, y: 50 }}           // slide down on exit
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">
                S2S (Social-to-Sales) - AI Powered Consumer Intelligence
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto mb-10">
                Simplify marketing and Amplify sales - No Matter Your Team Size
              </p>

              {/* Screenshots Section */}
              <div className="max-w-6xl mx-auto mb-16 px-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.img
                    src="./images/screens/1.png"
                    alt="Screenshot 1"
                    className="rounded-xl shadow-lg border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  />
                  <motion.img
                    src="./images/screens/2.png"
                    alt="Screenshot 2"
                    className="rounded-xl shadow-lg border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  />
                  <motion.img
                    src="./images/screens/3.png"
                    alt="Screenshot 3"
                    className="rounded-xl shadow-lg border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  />
                </div>
              </div>

              {/* Platform Info Section */}
              <div className="max-w-6xl mx-auto my-16 px-6">
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                  {/* Left: Image */}
                  <motion.img
                    src="./images/7.jpg"
                    alt="Platform Overview"
                    className="rounded-xl shadow-lg border border-gray-200 max-w-full h-auto md:flex-shrink-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Right: Text */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-left"
                  >
                    <div className="mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2">
                        S2S Trifecta: GenAI, Automation & Offline integration
                      </h2>
                      <p className="text-gray-700 text-lg">
                        GenAI-driven automated social media handling 
                        Social ads autotuned as per both online and offline sales 
                        Offline sales booster
                      </p>
                    </div>

                    <div className="mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2">
                        Automated Social Media Handling
                      </h2>
                      <p className="text-gray-700 text-lg">
                          <ul className="list-none space-y-2 text-gray-700 text-lg">
                            <li className="flex items-start">
                                <ul className="list-none space-y-2 text-gray-700 text-lg">
                                  <li className="flex flex-col">
                                    <div className="flex items-start mb-1">
                                      <span className="text-blue-600 mr-2">➤</span>
                                      Tracking of Social Media
                                    </div>
                                    <ul className="list-none pl-6 space-y-1">
                                      <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Latest category trends
                                      </li>
                                      <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Consumer delight
                                      </li>
                                      <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Consumer issues
                                      </li>
                                      <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Latest queries
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-600 mr-2">➤</span>
                              Content auto generated as per latest consumer discussion and interaction
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-600 mr-2">➤</span>
                              Auto post creation to be readily submitted as Social Ads
                            </li>
                          </ul>
                      </p>
                    </div>

                    <div className="mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2">
                        AD Management
                      </h2>
                      <p className="text-gray-700 text-lg">
                          <ul className="list-none space-y-2 text-gray-700 text-lg">
                            <li className="flex items-start">
                              <span className="text-blue-600 mr-2">➤</span>
                              ADs platform, budget and demographics auto chosen based on potential and past performance
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-600 mr-2">➤</span>
                              ADs gets auto adjusted as per performance outputs
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-600 mr-2">➤</span>
                              Ad demographics get chosen based on both online and offline sales potential
                            </li>
                          </ul>
                      </p>
                    </div>

                    <div className="mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2">
                        Offline Sales Booster
                      </h2>
                      <p className="text-gray-700 text-lg">
                          <ul className="list-none space-y-2 text-gray-700 text-lg">
                            <li className="flex items-start">
                              <span className="text-blue-600 mr-2">➤</span>
                              Maps actual sales vs area wise potential
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-600 mr-2">➤</span>
                              Highlights the distributors that need to be focused
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-600 mr-2">➤</span>
                              Highlights the stores where POS needs to be improved
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-600 mr-2">➤</span>
                              Suggests best locations to open new stores or add new partners
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-600 mr-2">➤</span>
                              Highlights areas where more offline ads can be targeted
                            </li>
                          </ul>
                      </p>
                    </div>

                    <div className="flex justify-end gap-4 mt-4">
                      {/* Download Brochure */}
                      <div className="inline-block rounded-full border-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300">
                        <button
                          onClick={() => window.open("./brochure.pdf", "_blank")}
                          className="px-5 py-2 rounded-full bg-transparent font-semibold
                                    text-transparent bg-clip-text
                                    bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                                    hover:from-green-400 hover:via-blue-500 hover:to-purple-600
                                    transition-all duration-300"
                        >
                          Download Brochure →
                        </button>
                      </div>

                      {/* Book a Demo */}
                      <div className="inline-block rounded-full border-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300">
                        <button
                          onClick={() => window.location.href = "mailto:contact@inferstrat.com"}
                          className="px-5 py-2 rounded-full bg-transparent font-semibold
                                    text-transparent bg-clip-text
                                    bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                                    hover:from-green-400 hover:via-blue-500 hover:to-purple-600
                                    transition-all duration-300"
                        >
                          Book a Demo →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>


              {/* ROI Table */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center sm:text-left">
                  Impact Highlights
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-separate border-spacing-0 rounded-lg overflow-hidden shadow-md text-sm sm:text-base">
                    <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      <tr>
                        <th className="w-1/3 px-3 sm:px-6 py-2 sm:py-4 text-left text-xs sm:text-lg font-semibold">
                          ROI Lever
                        </th>
                        <th className="w-1/3 px-3 sm:px-6 py-2 sm:py-4 text-left text-xs sm:text-lg font-semibold">
                          
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-white hover:bg-blue-50 transition">
                        <td className="px-3 sm:px-6 py-2 sm:py-4 font-medium text-gray-800 flex items-center gap-2 text-xs sm:text-base">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Ad Spend Optimization
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium">
                            20–40% reduction
                          </span>{" "}
                          in wasted spend
                        </td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-blue-50 transition">
                        <td className="px-3 sm:px-6 py-2 sm:py-4 font-medium text-gray-800 flex items-center gap-2 text-xs sm:text-base">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          Sales Uplift
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium">
                            10–25% increase
                          </span>{" "}
                          in conversions
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-blue-50 transition">
                        <td className="px-3 sm:px-6 py-2 sm:py-4 font-medium text-gray-800 flex items-center gap-2 text-xs sm:text-base">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          Agency/Tool Cost Reduction
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium">
                            30–50% savings
                          </span>{" "}
                          on consultants/tools
                        </td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-blue-50 transition">
                        <td className="px-3 sm:px-6 py-2 sm:py-4 font-medium text-gray-800 flex items-center gap-2 text-xs sm:text-base">
                          <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                          Manpower Efficiency
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <span className="bg-pink-100 text-pink-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium">
                            50–80% faster
                          </span>{" "}
                          across content, ads, reporting
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-blue-50 transition">
                        <td className="px-3 sm:px-6 py-2 sm:py-4 font-medium text-gray-800 flex items-center gap-2 text-xs sm:text-base">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                          Market Research Cost Savings
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <span className="bg-yellow-100 text-yellow-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium">
                            Up to 80% lower
                          </span>{" "}
                          cost, 3x faster insights
                        </td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-blue-50 transition">
                        <td className="px-3 sm:px-6 py-2 sm:py-4 font-medium text-gray-800 flex items-center gap-2 text-xs sm:text-base">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          Brand Protection & Crisis Response
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <span className="bg-red-100 text-red-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium">
                            Early detection
                          </span>{" "}
                          can prevent major PR losses
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-blue-50 transition">
                        <td className="px-3 sm:px-6 py-2 sm:py-4 font-medium text-gray-800 flex items-center gap-2 text-xs sm:text-base">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          Opportunity Utilization
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <span className="bg-indigo-100 text-indigo-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium">
                            Faster trend response
                          </span>{" "}
                          = greater visibility, growth
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


            </div>
          </motion.section>
        )}
      </AnimatePresence>

    </>
  );
}