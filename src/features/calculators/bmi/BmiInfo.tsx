interface BmiInfoProps {
    className?: string
}

export default function BmiInfo({ className = "" }: BmiInfoProps) {
    return (
        <div className={`bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 text-sm ${className}`}>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">What is BMI?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
                Body Mass Index (BMI) is a numerical value of your weight in relation to your height. It is a common indicator
                to classify whether a person has a healthy body weight for their height.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
                The formula is BMI = weight(kg) / height(m)². A BMI between 18.5 and 24.9 is considered normal weight. However,
                BMI is not a diagnostic tool and doesn't account for factors like muscle mass, bone density, and ethnic
                differences.
            </p>
        </div>
    )
}
