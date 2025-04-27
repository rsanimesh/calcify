"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Calculator } from "lucide-react"
import SearchBar from "./SearchBar"
import Navigation from "./Navigation"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-[#1E293B] shadow-sm dark:shadow-gray-800/20">
            <div className="container mx-auto px-4 md:px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Calculator className="h-6 w-6 text-[#3B82F6]" aria-hidden="true" />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">CalcMaster</span>
                    </Link>

                    {/* Search Bar - Hidden on mobile, visible on tablet and up */}
                    <div className="hidden md:block flex-1 max-w-md mx-4">
                        <SearchBar />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
                        {isMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <Navigation />
                    </div>
                </div>

                {/* Mobile Search Bar - Only visible on mobile */}
                <div className="mt-4 md:hidden">
                    <SearchBar />
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div id="mobile-menu" className="md:hidden mt-4 py-2 border-t border-gray-200 dark:border-gray-700">
                        <Navigation isMobile={true} />
                    </div>
                )}
            </div>
        </header>
    )
}
