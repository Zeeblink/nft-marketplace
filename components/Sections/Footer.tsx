import React from 'react';
import { Facebook, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Footer = () => {
    const Links = ["Auctions", "Roadmap", "Discover", "Community"];
    const Services = ["Support", "Term of service", "License"];
    const Socials = [
        { icon: Facebook, link: "#" },
        { icon: Linkedin, link: "#" },
        { icon: Github, link: "#" },
        { icon: Twitter, link: "#" },
        { icon: Instagram, link: "#" },
    ];

    return (
        <footer className="text-gray-400 p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 rounded-2xl overflow-hidden border border-gray-800">
                {/* Left section - Kept full width on mobile */}
                <div className="space-y-6 sm:space-y-12 md:space-y-24 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-800">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
                        <span className="text-white text-xl font-semibold">NFT Market</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 pt-4 sm:pt-10 md:pt-20">
                        {Services.map((service, i) => (
                            <a key={i} href="#" className="text-gray-400 hover:text-gray-300">
                                {service}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Middle section */}
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-800">
                    <nav className="space-y-3 mb-4">
                        {Links.map((link, i) => (
                            <a key={i} href="#" className="block text-sm text-white hover:text-gray-300">
                                {link}
                            </a>
                        ))}
                    </nav>
                    <Button className="bg-indigo-600 text-white px-4 sm:px-6 py-2 rounded-lg mt-4 hover:bg-indigo-700 w-full sm:w-auto">
                        My account
                    </Button>
                    <div className="flex space-x-4 mt-6">
                        {Socials.map(({ icon: Icon, link }, index) => (
                            <Link key={index} target="_blank" href={link}>
                                <Icon className="w-4 h-4 text-gray-400 hover:text-gray-300" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right section - Hidden on tablet but visible on mobile and desktop */}
                <div className="space-y-6 sm:space-y-12 md:space-y-24 p-6 md:py-8 md:px-6 col-span-1">
                    <p className="text-sm lg:mb-32">
                        Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id
                        nam semper dolor tellus vulputate eget turpis.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Newsletter"
                            className="flex-grow text-xs px-8 py-3 rounded-l-lg bg-white text-gray-900"
                        />
                        <button className="bg-white text-indigo-600 text-xs font-bold px-6 py-2 rounded-r-lg hover:bg-gray-200">
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;