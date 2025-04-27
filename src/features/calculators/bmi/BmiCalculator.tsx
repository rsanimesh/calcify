"use client"

import { useState } from "react"
import { Info } from "lucide-react"
import BmiForm from "./BmiForm"
import BmiResult from "./BmiResult"
import BmiInfo from "./BmiInfo"
import { calculateBMI, getBMICategory, type BMICategory } from "./bmi-utils"

export interface BmiData {
    height: number
    weight: number
    bmi: number
    category: BMICategory
    isMetric: boolean
}

export default function BmiCalculator() {
    const [bmiData, setBmiData] = useState<BmiData | null>(null)
    const [showInfo, setShowInfo] = useState(false)

    const handleCalculate = (height: number, weight: number, isMetric: boolean) => {
        const bmi = calculateBMI(height, weight, isMetric)
        const category = getBMICategory(bmi)

        setBmiData({
            height,
            weight,
            bmi,
            category,
            isMetric,
        })
    }

    return (
        <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Calculate Your BMI</h2>
                        <button
                            onClick={() => setShowInfo(!showInfo)}
                            className="inline-flex items-center text-sm text-gray-600 hover:text-[#3B82F6] dark:text-gray-400 dark:hover:text-[#60A5FA]"
                            aria-label={showInfo ? "Hide BMI information" : "Show BMI information"}
                        >
                            <Info className="h-4 w-4 mr-1" />
                            {showInfo ? "Hide Info" : "What is BMI?"}
                        </button>
                    </div>

                    {showInfo && <BmiInfo className="mb-6" />}

                    <BmiForm onCalculate={handleCalculate} initialData={bmiData} />
                </div>

                <div>
                    {bmiData ? (
                        <BmiResult data={bmiData} />
                    ) : (
                        <div className="h-full flex items-center justify-center p-8 text-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                            <div className="space-y-2">
                                <p className="text-gray-500 dark:text-gray-400">Enter your height and weight to calculate your BMI</p>
                                <p className="text-sm text-gray-400 dark:text-gray-500">Your results will appear here</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
