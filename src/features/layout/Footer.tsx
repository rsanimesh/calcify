"use client"

import Link from "next/link"
import { Calculator, Github, Mail } from "lucide-react"

// import ThemeToggle from "@/features/ui/ThemeToggle"

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 mt-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2">
                            <Calculator className="h-6 w-6 text-[#3B82F6]" aria-hidden="true" />
                            <span className="text-xl font-bold text-gray-900 dark:text-white">CalcMaster</span>
                        </Link>
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                            Your all-in-one calculator toolkit for everyday calculations.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {["All Calculators", "Popular Tools", "New Additions"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors duration-150"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            {["Documentation", "About Us", "Feedback", "Privacy Policy"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors duration-150"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Theme Toggle and Social */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Preferences
                        </h3>
                        {/*<div className="flex items-center space-x-2 mb-4">*/}
                        {/*    <span className="text-sm text-gray-600 dark:text-gray-400">Theme:</span>*/}
                        {/*    <ThemeToggle />*/}
                        {/*</div>*/}

                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2 mt-4">
                            Connect
                        </h3>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="text-gray-500 hover:text-[#3B82F6] dark:text-gray-400 dark:hover:text-[#60A5FA]"
                            >
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-500 hover:text-[#3B82F6] dark:text-gray-400 dark:hover:text-[#60A5FA]"
                            >
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">E-Mail</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        © {new Date().getFullYear()} CalcMaster. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
