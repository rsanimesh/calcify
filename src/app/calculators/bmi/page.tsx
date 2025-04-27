import BmiCalculator from "@/features/calculators/bmi/BmiCalculator"
import CalculatorLayout from "@/features/calculators/CalculatorLayout"

export const metadata = {
    title: "BMI Calculator - CalcMaster",
    description: "Calculate your Body Mass Index (BMI) and understand what it means for your health.",
}

export default function BmiCalculatorPage() {
    return (
        <CalculatorLayout
            title="BMI Calculator"
            description="Calculate your Body Mass Index (BMI) to determine if you have a healthy body weight for your height."
            category="Health & Fitness"
            icon="⚖️"
        >
            <BmiCalculator />
        </CalculatorLayout>
    )
}
