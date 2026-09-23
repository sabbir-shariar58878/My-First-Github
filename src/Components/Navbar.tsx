import logo from "../assets/logo-text.png";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <nav className="relative mx-auto max-w-7xl px-4">
                
                {/* ================= MOBILE NAVBAR ================= */}
                <div className="grid h-20 grid-cols-[40px_1fr_auto] items-center md:hidden">

                    {/* Hamburger */}
                    <button
                        className="flex items-center justify-start text-3xl text-gray-600"
                    >
                        ☰
                    </button>

                    {/* Logo */}
                    <div className="flex justify-center">
                        <img
                            src={logo}
                            alt="DevStack Logo"
                            className="h-auto max-w-[140px]"
                        />
                    </div>

                    {/* Sign In + Sign Up */}
                    <div className="flex items-center gap-2">
                        <span className="whitespace-nowrap text-sm font-medium text-gray-700">
                            Sign In
                        </span>

                        <button className="whitespace-nowrap rounded-full bg-pink-600 px-3 py-2 text-sm text-white">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* ================= DESKTOP NAVBAR ================= */}
                <div className="hidden h-20 items-center justify-between md:flex">

                    {/* Logo */}
                    <div>
                        <img
                            src={logo}
                            alt="DevStack Logo"
                            className="max-w-[160px]"
                        />
                    </div>

                    {/* Navigation */}
                    <ul className="flex items-center gap-6">
                        <li className="cursor-pointer text-pink-500">
                            Home
                        </li>
                        <li className="cursor-pointer">
                            Technologies
                        </li>
                        <li className="cursor-pointer">
                            Projects
                        </li>
                        <li className="cursor-pointer">
                            About
                        </li>
                        <li className="cursor-pointer">
                            Contact
                        </li>
                    </ul>

                    {/* Right Side */}
                    <div className="flex items-center gap-5">
                        <span className="cursor-pointer font-medium text-gray-700">
                            Sign In
                        </span>

                        <button className="rounded-full bg-pink-600 px-5 py-2 text-white hover:bg-pink-700">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;