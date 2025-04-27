import { ArrowRight } from "lucide-react"
import type { BmiData } from "./BmiCalculator"
import { getBMICategoryDetails } from "./bmi-utils"

interface BmiResultProps {
    data: BmiData
}

export default function BmiResult({ data }: BmiResultProps) {
    const { bmi, category, isMetric, height, weight } = data
    const categoryDetails = getBMICategoryDetails(category)

    return (
        <div className="space-y-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Your BMI Result</h3>
                <div className="text-4xl font-bold text-[#3B82F6] dark:text-[#60A5FA] mb-2">{bmi.toFixed(1)}</div>
                <div
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${categoryDetails.bgColor} ${categoryDetails.textColor}`}
                >
                    {categoryDetails.label}
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Your Details</h3>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
                        <div className="text-gray-500 dark:text-gray-400">Height</div>
                        <div className="font-medium text-gray-900 dark:text-white">
                            {isMetric ? `${height} cm` : `${Math.floor(height / 12)}' ${height % 12}"`}
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
                        <div className="text-gray-500 dark:text-gray-400">Weight</div>
                        <div className="font-medium text-gray-900 dark:text-white">
                            {weight} {isMetric ? "kg" : "lbs"}
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">What Your BMI Means</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{categoryDetails.description}</p>

                <div className="relative h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-4">
                    {/* BMI Scale */}
                    <div className="absolute inset-0 flex">
                        <div className="h-full w-1/4 bg-blue-500" title="Underweight"></div>
                        <div className="h-full w-1/4 bg-green-500" title="Normal weight"></div>
                        <div className="h-full w-1/4 bg-yellow-500" title="Overweight"></div>
                        <div className="h-full w-1/4 bg-red-500" title="Obese"></div>
                    </div>

                    {/* BMI Indicator */}
                    <div
                        className="absolute top-0 h-full w-1 bg-black dark:bg-white"
                        style={{
                            left: `${Math.min(Math.max((bmi / 40) * 100, 0), 100)}%`,
                            transform: "translateX(-50%)",
                        }}
                        aria-hidden="true"
                    ></div>
                </div>

                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 px-1">
                    <span>0</span>
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>40+</span>
                </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-[#3B82F6] hover:text-[#2563EB] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
                >
                    Learn more about maintaining a healthy weight
                    <ArrowRight className="ml-1 h-4 w-4" />
                </a>
            </div>
        </div>
    )
}
