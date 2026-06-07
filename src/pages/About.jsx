import React from "react";
import { FaChartLine, FaRocket, FaBullhorn, FaUsers } from "react-icons/fa"

export default function About() {
  return (
    <section id="about" className="py-10 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4">Inference Driven Strategy</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            At <span className="font-semibold text-blue-600">InferStrat</span>, Discover the Power of Strategy <br />
            We are a team of skilled analysts dedicated to helping businesses like yours unleash their full potential with innovative solutions.
          </p>

          {/* Pure gradient-border button (no background fill) */}
          <div className="inline-block rounded-full border-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300">
              <button
                onClick={() =>
                  document
                    .getElementById("see-us-in-action")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-4 py-2 rounded-full bg-transparent font-semibold
                          text-transparent bg-clip-text
                          bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                          hover:from-green-400 hover:via-blue-500 hover:to-purple-600
                          transition-all duration-300"
              >
                See How We Work
              </button>
          </div>
        </div>

        {/* Sub Section 1: See Us In Action */}
        <div id="see-us-in-action" className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Square Image */}
          <div className="flex justify-center">
            <img
              src="./images/9.jpg"
              alt="See Us In Action"
              className="rounded-2xl shadow-xl w-full max-w-md aspect-square object-cover"
            />
          </div>

          {/* Text Block */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-blue-700 mb-6">
              See Us In Action
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              See how we can help you stand out from the crowd. Our team of experts
              leverages cutting-edge tools and methodologies to deliver actionable
              insights that drive real results. From market analysis to competitive
              intelligence, we provide the clarity you need to make informed decisions
              and achieve your business goals.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold text-blue-600">Make your organisation analytics-ready.</span><br/> 
              Proper analysis can only be done if the right data is captured at the right granularity.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold text-blue-600">Unlock the true potential of Social Media.</span> <br/> 
              No better way to learn about your audience, product, or services – 
              analyse the huge volume of interactions through our Social Intelligence.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-blue-600">Data analytics made easy.</span><br/>  
              It’s not just numbers and values – our priority is to provide insights 
              & recommendations that can be easily implemented across your organisation.
            </p>
          </div>
        </div>


        {/* Sub Section 2: How We Work */}
        <div className="grid md:grid-cols-1 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">How We Work</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our proven methodology combines deep research, strategic foresight, and 
              client collaboration. We believe in a transparent, agile process that adapts 
              to your unique challenges and objectives.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every engagement begins with a thorough discovery phase where we take time 
              to understand your business, industry landscape, and target audience. This 
              ensures that our strategies are grounded in data and aligned with your vision. 
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              From there, we move into structured planning and design, translating insights 
              into actionable roadmaps. Our team works closely with yours at each step, 
              encouraging open communication and iterative feedback so that solutions are 
              not only innovative but also practical and sustainable.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Finally, we focus on execution and continuous improvement. By measuring 
              performance against clearly defined metrics, we ensure that results are 
              tangible, scalable, and deliver long-term impact for your organization.
            </p>
          </div>
        </div>


        {/* Horizontal 4-Block Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {/* Block 1 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <FaChartLine className="mx-auto text-blue-600 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-blue-700 mb-3">
              Revenue Optimization
            </h4>
            <p className="text-gray-600 text-sm">
              Leveraging data-driven insights to maximize profits and enhance business performance
            </p>
          </div>

          {/* Block 2 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <FaRocket className="mx-auto text-pink-600 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-blue-700 mb-3">
              Market Entry & Launches
            </h4>
            <p className="text-gray-600 text-sm">
              We help in minimizing risks and maximizing opportunities by providing in-depth consumer insights, competitive analysis and strategic recommendations.
            </p>
          </div>

          {/* Block 3 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <FaBullhorn className="mx-auto text-green-600 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-blue-700 mb-3">
              Campaign Design & Analysis
            </h4>
            <p className="text-gray-600 text-sm">
              We help in planning, implementing and evaluating marketing or advertising campaigns against properly set industry benchmarks.
            </p>
          </div>

          {/* Block 4 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <FaUsers className="mx-auto text-purple-600 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-blue-700 mb-3">
              Competitor Understanding
            </h4>
            <p className="text-gray-600 text-sm">
              Our competitor analysis enables organisations to understand rival strategies, their brand and product perception and campaign objectives.
            </p>
          </div>
        </div>
        
        {/* Horizontal Section with Image + Text */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="./images/analytics.png"
              alt="Strategy"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div>
            <h3 className="text-3xl font-bold text-blue-700 mb-4">
              Strategic Growth Partner
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              As your trusted partner, we align business goals with actionable
              strategies. Our approach focuses on measurable impact—ensuring
              sustainable growth, market resilience, and customer loyalty.
            </p>
            <div className="inline-block rounded-full border-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300">
            <button
              onClick={() =>
                document.getElementById("insights-section")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 rounded-full bg-transparent font-semibold
                          text-transparent bg-clip-text
                          bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                          hover:from-green-400 hover:via-blue-500 hover:to-purple-600
                          transition-all duration-300"
            >
              Learn More
            </button>
            </div>
          </div>
        </div>

        {/* Target Section */}
        <div id="insights-section" className="mt-24">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Our vision is to make organizations more data driven, guided by insights derived from data analytics
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Block 1 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col">
              {/* Top Image Section */}
              <div className="h-1/3 relative overflow-hidden rounded-t-xl">
                <img
                  src="./images/a.png"
                  alt="Rich Qualitative Insights"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-blue-800 text-center mt-4">
                Rich Qualitative Insights
              </h4>

              {/* Text Content */}
              <div className="flex-1 bg-white p-6 text-gray-600 text-sm leading-relaxed">
                We go beyond numbers to uncover motivations, perceptions, and emotions that drive decisions.
              </div>
            </div>

            {/* Block 2 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col">
              {/* Top Image Section */}
              <div className="h-1/3 relative overflow-hidden rounded-t-xl">
                <img
                  src="./images/b.png"
                  alt="Look Beyond Surveys"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-blue-800 text-center mt-4">
                Look Beyond Surveys
              </h4>

              {/* Text Content */}
              <div className="flex-1 bg-white p-6 text-gray-600 text-sm leading-relaxed">
                Accurate, affordable, and quicker turnaround solutions that go beyond surveys, encompassing various data collection methods to deliver comprehensive insights
              </div>
            </div>

            {/* Block 3 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col">
              {/* Top Image Section */}
              <div className="h-1/3 relative overflow-hidden rounded-t-xl">
                <img
                  src="./images/c.png"
                  alt="AI + Human Intelligence"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-blue-800 text-center mt-4">
                AI + Human Intelligence
              </h4>

              {/* Text Content */}
              <div className="flex-1 bg-white p-6 text-gray-600 text-sm leading-relaxed">
                Generative AI combined with human intelligence to develop locally trained, industry-specific AI models, enhancing data analysis and decision making process
              </div>
            </div>

            {/* Block 4 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col">
              {/* Top Image Section */}
              <div className="h-1/3 relative overflow-hidden rounded-t-xl">
                <img
                  src="./images/d.png"
                  alt="Not Just Data Dumps"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-blue-800 text-center mt-4">
                Not Just Data Dumps
              </h4>

              {/* Text Content */}
              <div className="flex-1 bg-white p-6 text-gray-600 text-sm leading-relaxed">
                Not just a tool providing some meaningless numbers, a team of professionals working relentlessly to provide valuable insights and actionable recommendations
              </div>
            </div>
          </div>
        </div>




      </div>

    </section>
  );
}

