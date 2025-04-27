import Link from "next/link"

interface Category {
    id: number
    name: string
    icon: string
    toolCount: number
    description: string
}

interface CategoryCardProps {
    category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
    return (
        <Link
            href={`/categories/${category.id}`}
            className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:shadow-gray-800/10 p-6
        border border-gray-200 dark:border-gray-700
        transform hover:scale-[1.03] transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
            <div className="flex flex-col h-full">
                <div className="text-3xl mb-2" aria-hidden="true">
                    {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{category.description}</p>
                <div className="mt-auto pt-2 text-sm font-medium text-[#3B82F6] dark:text-[#60A5FA]">
                    {category.toolCount} {category.toolCount === 1 ? "tool" : "tools"}
                </div>
            </div>
        </Link>
    )
}
