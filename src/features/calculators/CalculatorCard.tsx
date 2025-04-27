import Link from "next/link"

interface Calculator {
    id: number
    name: string
    icon: string
    description: string
    category: string
    url: string
}

interface CalculatorCardProps {
    calculator: Calculator
}

export default function CalculatorCard({ calculator }: CalculatorCardProps) {
    return (
        <Link
            href={calculator.url}
            className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:shadow-gray-800/10 p-5
        border border-gray-200 dark:border-gray-700
        transform hover:scale-[1.03] transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
            <div className="flex items-start space-x-3">
                <div className="text-2xl" aria-hidden="true">
                    {calculator.icon}
                </div>
                <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-[#3B82F6] dark:group-hover:text-[#60A5FA] transition-colors duration-300">
                        {calculator.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{calculator.description}</p>
                    <div className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">{calculator.category}</div>
                </div>
            </div>
        </Link>
    )
}
