# Interactive Grid Demo

A responsive React application featuring an interactive 3x3 grid with animated state changes. Built with React.js, TypeScript, and shadcn/ui components.

## 🚀 Features

- Interactive 3x3 grid with clickable boxes
- State management tracking click order
- Animated color transitions
- Ordered reset animation
- Fully responsive design (2 columns on mobile, 3 on desktop)
- Built with modern React patterns and TypeScript
- Styled using Tailwind CSS and shadcn/ui components

## 🏗️ Architecture

The project follows a feature-based architecture pattern:

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/          # shadcn components
│       ├── button.tsx
│       └── card.tsx
├── features/
│   └── grid/
│       ├── components/
│       │   ├── Box.tsx         # Individual box component
│       │   ├── GridContainer.tsx   # Main grid layout
│       ├── hooks/
│       │   └── useGridState.ts    # Custom hook for grid logic
│       ├── types/
│       │   └── index.ts          # Type definitions
│       ├── utils/
│       │   └── animations.ts     # Animation utilities
├── lib/
    └── utils.ts    # General utilities
```

## 🛠️ Technologies Used

- **React.js**
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling
- **shadcn/ui**: For UI components
- **React Hooks**: For state management

## 🎯 Key Implementation Details

### State Management
- Custom hook (`useGridState`) managing grid state
- Tracks click order for reset animation
- Maintains box states efficiently

### Component Structure
- Modular components with single responsibilities
- Clean separation of concerns
- Type-safe props and state

### Responsive Design
- Mobile-first approach
- 2 columns on mobile devices
- 3 columns on desktop
- Minimum box sizes: 120px (mobile) and 150px (desktop)

### Animations
- Smooth color transitions
- Ordered reset animation
- Configurable animation durations

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/interactive-grid-demo.git
```

2. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (2 boxes per row)
- **Desktop**: ≥ 768px (3 boxes per row)

## 🚀 Deployment

The project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy