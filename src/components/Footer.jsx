import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-purple-500">
              PixelCraft
            </h2>

            <p className="mt-4 text-gray-400">
              We create modern websites and digital experiences that help businesses grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
             	<li>
							<a href="#home" className="hover:text-purple-600 transition-all duration-300">
								Home
							</a>
						</li>
						<li>
							<a href="#services" className="hover:text-purple-600 transition-all duration-300">
								Services
							</a>
						</li>

						<li>
							<a href="#portfolio" className="hover:text-purple-600 transition-all duration-300">
								Portfolio
							</a>
						</li>

						<li>
							<a href="#contact" className="hover:text-purple-600 transition-all duration-300">
								Contact
							</a>
						</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

        </div>

        <hr className="border-gray-700 my-8" />

        <p className="text-center text-gray-500">
          © 2026 PixelCraft. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;