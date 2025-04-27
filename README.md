# CalcMaster

CalcMaster is a comprehensive multi-calculator web application that provides users with a variety of calculators organized by categories. The application features a responsive design, intuitive navigation, and a user-friendly interface.

![CalcMaster Screenshot](https://placeholder.com/screenshot.png)

## Features

### Core Features
- **Multiple Calculator Categories**: Health & Fitness, Finance, Date/Time, and Utilities
- **Featured Calculators**: Quick access to the most popular calculators
- **Search Functionality**: Find calculators quickly with autocomplete search
- **Recent History**: Track your recent calculations (for logged-in users)
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Dark/Light Mode**: Toggle between dark and light themes

### Calculators Included
- BMI Calculator
- Age Calculator
- Compound Interest Calculator
- Percentage Calculator
- And many more...

## Technologies Used

- **Frontend**: React/Next.js with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React
- **Theming**: next-themes for dark/light mode

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/calc-master.git
   cd calc-master
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

The project follows a feature-based organizational structure:

\`\`\`
calc-master/
├── app/                  # Next.js app directory
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Homepage component
├── features/             # Feature-based components
│   ├── calculators/      # Calculator-related components
│   ├── categories/       # Category-related components
│   ├── header/           # Header components
│   ├── history/          # History-related components
│   ├── layout/           # Layout components
│   └── ui/               # UI utility components
├── components/           # Shared components
│   └── ui/               # shadcn/ui components
├── public/               # Static assets
└── ...                   # Configuration files
\`\`\`

## Usage

### Home Page
The home page displays featured calculators and categories. Users can:
- Browse calculator categories
- Access featured calculators
- Search for specific calculators
- View recent calculation history (if logged in)

### Calculator Pages
Each calculator has its own dedicated page with:
- Input fields for calculation parameters
- Clear results display
- Option to save or share results
- Related calculators suggestions

### Theme Toggle
Users can switch between light and dark modes using the toggle in the footer.

## Development

### Adding a New Calculator

1. Create a new calculator component in the appropriate category folder
2. Add the calculator to the category list in `features/categories/CategoryGrid.tsx`
3. If it's a featured calculator, add it to `features/calculators/FeaturedCalculators.tsx`

### Styling Guidelines

- Follow the established color scheme:
    - Primary: Blue (#3B82F6)
    - Secondary: Emerald (#10B981)
    - Background: Light gray (#F8FAFC) / Dark gray (#1E293B)
- Use Tailwind CSS for styling
- Ensure responsive design across all screen sizes
- Maintain accessibility standards

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

Made with ❤️ by Rahul Kumar Sinha
