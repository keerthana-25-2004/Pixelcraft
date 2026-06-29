import webDesign from "../assets/web-design.jpg";
import webDevelopment from "../assets/web-development.jpg";
import digitalMarketing from "../assets/digital-marketing.jpg";
import branding from "../assets/branding.jpg";

import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      image: webDesign,
      icon: <FaPaintBrush />,
      title: "Web Design",
      description: "Modern, responsive websites for every business.",
      features: [
        "Responsive Design",
        "UI/UX Design",
        "Landing Pages",
      ],
    },

    {
      image: webDevelopment,
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "Fast, secure and scalable web solutions.",
      features: [
        "React Development",
        "Responsive Layout",
        "Performance",
      ],
    },

    {
      image: digitalMarketing,
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      description: "Increase your online reach with smart marketing solutions.",
      features: [
        "SEO",
        "Google Ads",
        "Social Media",
      ],
    },

    {
      image: branding,
      icon: <FaRocket />,
      title: "Brand Strategy",
      description: "Build a memorable brand that connects with customers.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Business Strategy",
      ],
    },
  ];

  return (
    <section id="services" className="py-28 bg-gray-50" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="bg-purple-100 text-purple-600 px-5 py-2 rounded-full font-semibold">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-5 text-gray-900">
            What We <span className="text-purple-600">Offer</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            We provide innovative digital solutions that help businesses
            build strong online experiences and achieve lasting success.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >

              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover hover:scale-105 transition duration-500"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-purple-600 text-2xl -mt-12 relative shadow-xl border border-gray-100">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mt-5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-3 leading-7">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-3">

                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <FaCheckCircle className="text-purple-600" />
                      {feature}
                    </li>
                  ))}

                </ul>

                {/* Button */}
                <button className="mt-auto pt-6 flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition-all duration-300">

                  Learn More

                  <FaArrowRight />

                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;