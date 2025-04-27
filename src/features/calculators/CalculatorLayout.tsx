import type React from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface CalculatorLayoutProps {
    title: string
    description: string
    category: string
    icon: string
    children: React.ReactNode
}

export default function CalculatorLayout({ title, description, category, icon, children }: CalculatorLayoutProps) {
    return (
        <div className="container mx-auto px-4 md:px-6 py-8 max-w-4xl">
            <div className="mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-[#3B82F6] dark:text-gray-400 dark:hover:text-[#60A5FA] mb-4 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl" aria-hidden="true">
            {icon}
          </span>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
                </div>
                <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center rounded-full bg-[#EBF5FF] dark:bg-[#1E40AF]/20 px-2.5 py-0.5 text-xs font-medium text-[#3B82F6] dark:text-[#60A5FA]">
            {category}
          </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl">{description}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                {children}
            </div>
        </div>
    )
}
