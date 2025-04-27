import Link from "next/link"

interface NavigationProps {
    isMobile?: boolean
}

export default function Navigation({ isMobile = false }: NavigationProps) {
    const navItems = [
        { name: "Home", href: "/" },
        { name: "All Calculators", href: "/calculators" },
        { name: "About", href: "/about" },
        // { name: "Login", href: "/login" },
    ]

    return (
        <nav className={isMobile ? "space-y-2" : "flex items-center space-x-4"}>
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`
            ${
                        isMobile ? "block px-3 py-2 rounded-md text-base font-medium" : "px-3 py-2 rounded-md text-sm font-medium"
                    }
            text-gray-700 dark:text-gray-200 
            hover:bg-gray-100 dark:hover:bg-gray-800 
            hover:text-gray-900 dark:hover:text-white
            transition-colors duration-300
          `}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    )
}
