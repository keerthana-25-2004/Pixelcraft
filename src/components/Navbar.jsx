import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="bg-white shadow-md sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

				{/* Logo */}
				<h1 className="text-3xl font-extrabold text-purple-600 cursor-pointer">
					PixelCraft
				</h1>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center gap-8">

					<ul className="flex items-center gap-8 text-gray-700 font-medium">
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

					<button className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 hover:scale-105 transition-all duration-300">
						Get Started
					</button>

				</div>

				{/* Mobile Menu Button */}
				<button className="md:hidden text-2xl text-purple-600"
					onClick={
						() => setMenuOpen(!menuOpen)
				}>
					{
					menuOpen ? <FaTimes/>: <FaBars/>
				} </button>

			</div>

			{/* Mobile Menu */}
			{
			menuOpen && (
				<div className="md:hidden bg-white shadow-md">
					<ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">

						<li>
							<a href="#home" className="cursor-pointer hover:text-purple-600">Home</a>
						</li>

						<li>
							<a href="#services" className="cursor-pointer hover:text-purple-600">Services</a>
						</li>

						<li>
							<a href="#portfolio" className="cursor-pointer hover:text-purple-600">Portfolio</a>
						</li>

						<li>
							<a href="#contact" className="cursor-pointer hover:text-purple-600">Contact</a>
						</li>

						<button className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition">
							Get Started
						</button>

					</ul>
				</div>
			)
		} </nav>
	);
}

export default Navbar;
