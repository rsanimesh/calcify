import CategoryCard from "./CategoryCard"

export default function CategoryGrid() {
    const categories = [
        {
            id: 1,
            name: "Health & Fitness",
            icon: "🏥",
            toolCount: 5,
            description: "BMI, calories, and more",
        },
        {
            id: 2,
            name: "Finance",
            icon: "💰",
            toolCount: 6,
            description: "Loans, interest, and investments",
        },
        {
            id: 3,
            name: "Date/Time",
            icon: "📅",
            toolCount: 4,
            description: "Age, date difference, and timers",
        },
        {
            id: 4,
            name: "Utilities",
            icon: "🛠️",
            toolCount: 8,
            description: "Unit conversions and more",
        },
    ]

    return (
        <section aria-labelledby="categories-heading">
            <h2 id="categories-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Calculator Categories
            </h2>

            {/* Skeleton loading state (would be shown conditionally in a real app) */}
            <div className="hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-xl h-40 animate-pulse"></div>
                    ))}
                </div>
            </div>

            {/* Actual content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </section>
    )
}
