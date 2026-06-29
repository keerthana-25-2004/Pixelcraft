import heroImage from "../assets/hero img.jpg";
import { FaSmile, FaRocket, FaAward, FaStar } from "react-icons/fa";

function Hero() {
  const stats = [
    {
      icon: <FaSmile />,
      number: "100+",
      title: "Happy Clients",
    },
    {
      icon: <FaRocket />,
      number: "250+",
      title: "Projects Done",
    },
    {
      icon: <FaAward />,
      number: "10+",
      title: "Awards Won",
    },
  ];

  return (
    <section id="home" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">

          <span className="inline-block bg-purple-100 text-purple-600 font-semibold px-5 py-2 rounded-full mb-5">
            PixelCraft Studio
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Build Stunning
            <br />
            <span className="text-purple-600">
              Digital Experiences
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl mx-auto lg:mx-0">
            We create beautiful websites, UI/UX designs and digital
            products that help businesses grow faster and stand out online.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Get Started
            </button>

            <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
              View Portfolio
            </button>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">

            {stats.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-3xl text-purple-600">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {item.number}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">

          <div className="relative">

            <img
              src={heroImage}
              alt="Hero"
              className="
                w-[300px]
                sm:w-[420px]
                md:w-[520px]
                lg:w-[500px]
                xl:w-[560px]
                h-[380px]
                sm:h-[450px]
                md:h-[550px]
                lg:h-[560px]
                object-cover
                rounded-3xl
                shadow-2xl
                hover:scale-105
                transition-all
                duration-500
              "
            />

            {/* Top Right Card */}
            <div className="absolute top-5 -right-5 bg-white px-5 py-4 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500 text-xl" />
                <div>
                  <h3 className="font-bold text-lg">4.9/5</h3>
                  <p className="text-gray-500 text-sm">
                    Client Rating
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="absolute -bottom-6 -left-5 bg-purple-600 text-white px-6 py-4 rounded-2xl shadow-xl hidden sm:block">
              <h3 className="text-3xl font-bold">
                250+
              </h3>

              <p className="text-sm">
                Successful Projects
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;