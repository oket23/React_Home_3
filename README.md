# Vite + React + Tailwind

## What This Project Does

This is a React application that renders two interactive components:

- **Task 1:** A product card (`ProductCounter`) with "+" and "–" buttons that allow changing the item quantity.
- **Task 2:** A name input form (`NameForm`) that dynamically greets the user (`Hello, {name}`) as they type.

---

## Project Technologies

- **Bundler / Dev Tool:** [Vite](https://vitejs.dev/)
- **Language:** TypeScript
- **Framework:** React 19 (with `@vitejs/plugin-react`)
- **Styling:** TailwindCSS (with `@tailwindcss/vite` and `@tailwindcss/line-clamp` for text truncation)
- **Class Utilities:** `clsx` and `tailwind-merge` (combined into a custom `cn` utility)
- **Linter:** ESLint (configured for TypeScript and React)

---

## Key Project Strengths

Although small, this project follows **professional standards** and **best practices**:

### Clean Component Architecture
- `ProductCounter` is a **smart component** that manages its own state (`useState`) and logic (`handleClick`).
- `ProductButton` and `ProductItem` are **dumb (presentational) components** that only receive props and render UI, making them easy to test and reuse.

### Robust State Management
- `ProductCounter` correctly uses `useEffect` to sync its internal `count` state with the incoming `quantity` prop, preventing stale state.
- State update logic safely prevents the count from dropping below zero.

### Professional Styling
- Uses a `cn` utility function that merges `clsx` and `tailwind-merge` — a best practice for conditional Tailwind class handling and resolving conflicts automatically.

### Strong Type Safety
- All components have clearly defined TypeScript props.
- Uses flexible types like `ReactNode` to make components (e.g., `ProductItem`) more reusable.

### Modern Tooling
- Built with a modern stack: **Vite + React 19 + TypeScript**.
- Preconfigured **ESLint** setup ensures consistent and high-quality code.

---

## How to Run the Project

Follow these steps to set up and run the project locally:

### Clone the repository
```bash
git clone https://github.com/oket23/React_Home_3
cd vite-react-tailwind
```
### Install dependencies
Make sure you have Node.js (v18 or higher) installed.
Then run:
```bash
npm install
```

### Start the development server
```bash
npm run dev
```
Once it’s running, open your browser and visit:
```bash
http://localhost:5173/
```
