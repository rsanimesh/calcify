export type BMICategory = "underweight" | "normal" | "overweight" | "obese"

export function calculateBMI(height: number, weight: number, isMetric: boolean): number {
    if (isMetric) {
        // Metric formula: weight (kg) / height (m)²
        const heightInMeters = height / 100
        return weight / (heightInMeters * heightInMeters)
    } else {
        // Imperial formula: (weight (lbs) * 703) / height (inches)²
        return (weight * 703) / (height * height)
    }
}

export function getBMICategory(bmi: number): BMICategory {
    if (bmi < 18.5) {
        return "underweight"
    } else if (bmi >= 18.5 && bmi < 25) {
        return "normal"
    } else if (bmi >= 25 && bmi < 30) {
        return "overweight"
    } else {
        return "obese"
    }
}

export function getBMICategoryDetails(category: BMICategory) {
    switch (category) {
        case "underweight":
            return {
                label: "Underweight",
                bgColor: "bg-blue-100 dark:bg-blue-900/30",
                textColor: "text-blue-700 dark:text-blue-300",
                description:
                    "Your BMI suggests you may be underweight. This could indicate insufficient calorie intake or an underlying condition. Consider consulting a healthcare professional for advice.",
            }
        case "normal":
            return {
                label: "Normal Weight",
                bgColor: "bg-green-100 dark:bg-green-900/30",
                textColor: "text-green-700 dark:text-green-300",
                description:
                    "Your BMI is within the normal range. This suggests you have a healthy weight for your height. Maintain a balanced diet and regular physical activity to stay in this range.",
            }
        case "overweight":
            return {
                label: "Overweight",
                bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
                textColor: "text-yellow-700 dark:text-yellow-300",
                description:
                    "Your BMI indicates you may be overweight. This might increase your risk of health issues. Consider making lifestyle changes like improved diet and increased physical activity.",
            }
        case "obese":
            return {
                label: "Obese",
                bgColor: "bg-red-100 dark:bg-red-900/30",
                textColor: "text-red-700 dark:text-red-300",
                description:
                    "Your BMI suggests obesity, which can significantly increase health risks. It's advisable to consult with healthcare professionals for personalized advice on weight management.",
            }
    }
}
