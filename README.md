# React Router v7 Demo

An interactive demo app showcasing the main features of [React Router v7](https://reactrouter.com/home) in declarative mode, built with React 19, Vite, and plain CSS.

## Features Demonstrated

- **Basic Routes** — Simple path-to-component mapping (`/about`)
- **Index Routes** — Default child routes for `/` and nested layouts
- **NavLink & Active Styles** — Navigation links with automatic `.active` class
- **Dynamic Route Params** — `:productId` segments read with `useParams()`
- **Nested Routes & Outlet** — Tabbed sub-pages rendered inside `<Outlet />`
- **useOutletContext** — Passing data from parent routes to child routes
- **Layout Routes** — Pathless routes that wrap children in shared UI (dashboard sidebar, auth layout)
- **useSearchParams** — Reading and writing URL query strings (`/search?q=...&category=...`)
- **useNavigate** — Programmatic navigation after form submission
- **Navigate Component** — Declarative redirects (`/old-about` → `/about`)
- **Protected Routes** — Auth guard pattern using `<Navigate>`
- **Catch-All (404)** — `path="*"` for unmatched URLs
- **useLocation** — Live URL display on every page

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
npm run preview
```

## Tech Stack

- React 19
- React Router 7
- Vite
- Plain CSS
