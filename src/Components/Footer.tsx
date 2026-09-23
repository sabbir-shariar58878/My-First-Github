import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 bg-white">
            <div className="mx-auto max-w-6xl px-6">

                {/* Main Footer */}
                <div className="grid grid-cols-1 py-9 md:grid-cols-4 md:gap-12 md:py-10">

                    {/* Brand */}
                    <div className="max-w-[350px] text-center md:text-left">
                        <img
                            src={logo}
                            alt="Dev Stack"
                            className="mx-auto h-7 w-auto md:mx-0"
                        />

                        <p className="mx-auto mt-4 max-w-[350px] text-[11px] leading-[1.6] text-gray-400 md:mx-0">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        {/* Social Links */}
                        <ul className="mt-5 flex items-center justify-center text-[11px] text-gray-600 md:justify-start">
                            <li className="cursor-pointer hover:text-gray-900">
                                GitHub
                            </li>

                            <li className="mx-4 text-gray-400">
                                •
                            </li>

                            <li className="cursor-pointer hover:text-gray-900">
                                Twitter
                            </li>

                            <li className="mx-4 text-gray-400">
                                •
                            </li>

                            <li className="cursor-pointer hover:text-gray-900">
                                LinkedIn
                            </li>
                        </ul>
                    </div>

                    {/* Product */}
                    <div className="hidden md:block">
                        <h6 className="mb-4 text-[9px] font-bold tracking-wide text-gray-900">
                            PRODUCT
                        </h6>

                        <ul className="space-y-2 text-[10px] text-gray-400">
                            <li className="cursor-pointer hover:text-gray-700">
                                Home
                            </li>

                            <li className="cursor-pointer hover:text-gray-700">
                                Technologies
                            </li>

                            <li className="cursor-pointer hover:text-gray-700">
                                Projects
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="hidden md:block">
                        <h6 className="mb-4 text-[9px] font-bold tracking-wide text-gray-900">
                            COMPANY
                        </h6>

                        <ul className="space-y-2 text-[10px] text-gray-400">
                            <li className="cursor-pointer hover:text-gray-700">
                                About
                            </li>

                            <li className="cursor-pointer hover:text-gray-700">
                                Contact
                            </li>

                            <li className="cursor-pointer hover:text-gray-700">
                                Careers
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="hidden md:block">
                        <h6 className="mb-4 text-[9px] font-bold tracking-wide text-gray-900">
                            LEGAL
                        </h6>

                        <ul className="space-y-2 text-[10px] text-gray-400">
                            <li className="cursor-pointer hover:text-gray-700">
                                Privacy Policy
                            </li>

                            <li className="cursor-pointer hover:text-gray-700">
                                Terms of Service
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex items-center justify-between border-t border-gray-100 py-5">

                    <p className="text-[9px] text-gray-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-5 text-[9px] text-gray-400">
                        <span className="cursor-pointer hover:text-gray-700">
                            Privacy
                        </span>

                        <span className="cursor-pointer hover:text-gray-700">
                            Terms
                        </span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;