"use client"

import { useState, useRef, useEffect } from "react"
import { Search } from "lucide-react"

// Mock data for autocomplete
const calculators = [
    { id: 1, name: "BMI Calculator", category: "Health & Fitness" },
    { id: 2, name: "Age Calculator", category: "Date/Time" },
    { id: 3, name: "Compound Interest", category: "Finance" },
    { id: 4, name: "Percentage Calculator", category: "Utilities" },
    { id: 5, name: "Calorie Calculator", category: "Health & Fitness" },
    { id: 6, name: "Loan Calculator", category: "Finance" },
]

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("")
    const [showResults, setShowResults] = useState(false)
    const [results, setResults] = useState<typeof calculators>([])
    const searchRef = useRef<HTMLDivElement>(null)

    // Filter calculators based on search term
    useEffect(() => {
        if (searchTerm.length > 1) {
            const filteredResults = calculators.filter(
                (calc) =>
                    calc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    calc.category.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            setResults(filteredResults)
            setShowResults(true)
        } else {
            setShowResults(false)
        }
    }, [searchTerm])

    // Close results when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowResults(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={searchRef}>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search calculators..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all duration-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Search calculators"
                />
            </div>

            {/* Autocomplete Results */}
            {showResults && results.length > 0 && (
                <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
                    <ul className="py-1">
                        {results.map((calc) => (
                            <li key={calc.id}>
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
                                    onClick={() => {
                                        setSearchTerm(calc.name)
                                        setShowResults(false)
                                    }}
                                >
                                    <div className="font-medium text-gray-900 dark:text-white">{calc.name}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{calc.category}</div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
