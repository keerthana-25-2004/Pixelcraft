import project1 from "../assets/project 1.jpg";
import project2 from "../assets/project 2.jpg";
import project3 from "../assets/project 3.jpg";
import project4 from "../assets/project 4.jpg";
import project5 from "../assets/project 5.jpg";
import project6 from "../assets/project 6.jpg";

import { FaArrowRight } from "react-icons/fa";

function Portfolio() {
  const projects = [
    {
      image: project1,
      title: "Business Website",
      category: "Web Design",
    },
    {
      image: project2,
      title: "Mobile App UI",
      category: "UI / UX",
    },
    {
      image: project3,
      title: "Dashboard Design",
      category: "Dashboard",
    },
    {
      image: project4,
      title: "E-Commerce Store",
      category: "Development",
    },
    {
      image: project5,
      title: "Brand Identity",
      category: "Branding",
    },
    {
      image: project6,
      title: "Creative Portfolio",
      category: "Portfolio",
    },
  ];

  return (
    <section id="portfolio" className="py-28 bg-white" data-aos="zoom-in">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="bg-purple-100 text-purple-600 px-5 py-2 rounded-full font-semibold">
            Our Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-5 text-gray-900">
            Recent <span className="text-purple-600">Projects</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            Explore some of our latest creative work designed to help
            businesses grow and stand out online.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mt-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  A modern and creative project built with user-friendly
                  design and responsive layouts.
                </p>

                <button className="mt-5 flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition-all duration-300">
                  View Project
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

export default Portfolio;