import CalculatorCard from "./CalculatorCard"

export default function FeaturedCalculators() {
    const featuredCalculators = [
        {
            id: 1,
            name: "BMI Calculator",
            icon: "⚖️",
            description: "Calculate your Body Mass Index",
            category: "Health & Fitness",
            url: "/calculators/bmi",
        },
        {
            id: 2,
            name: "Age Calculator",
            icon: "🎂",
            description: "Find your exact age in years, months, and days",
            category: "Date/Time",
            url: "/calculators/age",
        },
        {
            id: 3,
            name: "Compound Interest",
            icon: "📈",
            description: "Calculate investment growth over time",
            category: "Finance",
            url: "/calculators/compound-interest",
        },
        {
            id: 4,
            name: "Percentage Calculator",
            icon: "💯",
            description: "Calculate percentages easily",
            category: "Utilities",
            url: "/calculators/percentage",
        },
    ]

    return (
        <section aria-labelledby="featured-heading">
            <h2 id="featured-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Featured Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {featuredCalculators.map((calculator) => (
                    <CalculatorCard key={calculator.id} calculator={calculator} />
                ))}
            </div>
        </section>
    )
}
