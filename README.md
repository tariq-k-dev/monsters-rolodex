# Monsters Rolodex

An interactive React and Vite web application featuring real-time search and filtering across a responsive directory of monster profiles.

**Live Demo:** [https://tariq-k-dev.github.io/monsters-rolodex/](https://tariq-k-dev.github.io/monsters-rolodex/)

## Features

- **Real-Time Search Filtering:** Instant case-insensitive filtering by monster name as you type.
- **Dynamic Monster Directory:** Fetches user profiles from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) and generates unique robot/monster avatars via [RoboHash](https://robohash.org/).
- **Responsive CSS Grid Layout:** Fluid card grid (`repeat(auto-fit, minmax(240px, 1fr))`) with clean text wrapping across desktop, tablet, and mobile viewports.
- **Fast Vite Build Pipeline:** Configured with Vite 8 and `@vitejs/plugin-react` for sub-second HMR in development and optimized static asset bundling for GitHub Pages.

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 8 (`@vitejs/plugin-react`)
- **Package Manager:** pnpm
- **Styling:** CSS3 (CSS Grid, Flexbox, responsive typography)
- **Deployment:** GitHub Pages (`gh-pages`)

## Project Structure

```text
monsters-rolodex/
├── public/                 # Static assets (favicon, manifest)
├── src/
│   ├── components/
│   │   ├── card/           # Individual monster profile card component & styles
│   │   ├── card-list/      # Responsive CSS Grid container component & styles
│   │   └── search-box/     # Accessible search input component & styles
│   ├── App.jsx             # Functional component implementation
│   ├── AppClass.jsx        # Class component reference implementation
│   └── index.jsx           # Application entry point
├── index.html              # Vite HTML template
└── vite.config.js          # Vite configuration with GitHub Pages base path
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [pnpm](https://pnpm.io/)

### Installation & Local Development

1. Clone the repository:

    Bash

    ```bash
    git clone [https://github.com/tariq-k-dev/monsters-rolodex.git](https://github.com/tariq-k-dev/monsters-rolodex.git)
    cd monsters-rolodex
    ```

2. Install dependencies:

    Bash

    ```bash
    pnpm install
    ```

3. Start the local development server:

    Bash

    ```bash
    pnpm dev
    ```

    Open http://localhost:5173/monsters-rolodex/ in your browser.

## Available Scripts

| **Command**    | **Description**                                              |
| -------------- | ------------------------------------------------------------ |
| `pnpm dev`     | Starts the Vite development server with Hot Module Replacement (HMR). |
| `pnpm build`   | Bundles the application for production into the `dist/` directory. |
| `pnpm preview` | Serves the production `dist/` build locally for verification. |
| `pnpm deploy`  | Runs `pnpm build` and publishes `dist/` to the `gh-pages` branch. |

## Deployment

This project is configured for automated static deployment to GitHub Pages via `gh-pages` with `base: '/monsters-rolodex/'` set in `vite.config.js`:

Bash

```bash
pnpm deploy
```
