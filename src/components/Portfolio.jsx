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
    <section id="portfolio" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

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

        {/* Portfolio Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >

              {/* Image */}

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">

                <p className="text-purple-300 text-sm font-semibold mb-2">
                  {project.category}
                </p>

                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>

                <button className="mt-4 flex items-center gap-2 text-white font-medium hover:gap-4 transition-all duration-300 cursor-pointer">

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