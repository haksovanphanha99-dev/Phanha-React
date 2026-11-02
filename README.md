# Phanha-React

A React app built with Vite. This is my project for learning and practicing React.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) for linting

## Requirements

- Node.js v24.13.1
- npm

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/haksovanphanha99-dev/Phanha-React.git
   cd Phanha-React
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
Phanha-React/
├── public/           # Static files
├── src/
│   ├── assets/       # Images and icons
│   ├── App.jsx       # Main component
│   ├── App.css       # App styles
│   ├── index.css     # Global styles
│   └── main.jsx      # Entry point
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
└── vite.config.js    # Vite configuration
```

## About the Vite Template

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Author

**haksovanphanha99-dev**
GitHub: [@haksovanphanha99-dev](https://github.com/haksovanphanha99-dev)