# 🚀 React + Vite + TailwindCSS Template – Paste App

This template provides a minimal yet powerful setup for building a React application using Vite. It comes pre-configured with Hot Module Replacement (HMR), Tailwind CSS for utility-first styling, Redux Toolkit for state management, and ESLint for code quality.

---

## ✨ Features

- ⚡ **Vite** – Ultra-fast development and build tooling.
- ⚛️ **React 19** – Latest version for building modern UI components.
- 🎨 **Tailwind CSS** – Utility-first CSS framework for building custom UIs.
- ✅ **ESLint** – Pluggable linter tool for maintaining code quality.
- 🧠 **Redux Toolkit** – State management made easy with slices and reducers.
- 🔔 **React Hot Toast** – Elegant and customizable toast notifications.
- 🧭 **React Router DOM** – Declarative routing for React apps.

---

## 🧰 Packages Used

### ✅ Dependencies

- `@reduxjs/toolkit`
- `react`, `react-dom`
- `react-router-dom`
- `react-hot-toast`
- `react-redux`
- `lucide`, `lucide-react`
- `tailwindcss`

### 🛠️ Dev Dependencies

- `@vitejs/plugin-react`
- `@eslint/js`, `eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- `@types/react`, `@types/react-dom` (if using TypeScript)
- `postcss`, `autoprefixer`, `tailwindcss`
- `vite`
- `globals`

---

## 📦 Installation

### Step 1: Create a Vite project

```bash
npm create vite@latest

```

Choose the following:

Project name: paste

Framework: React

Variant: JavaScript or TypeScript

Navigate into the project:

```bash
    cd paste
```    

---

### Step 2: Install Tailwind CSS

```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
```   
Update tailwind.config.js:

```bash
    /** @type {import('tailwindcss').Config} */
    export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
    }

```
Then add to src/index.css: 

```bash
    @import "tailwindcss";
```   

---

### Step 3: Install Project Dependencies

``` bash
    npm install
```
---

### Step 4: Run the Development Server

```bash
    npm run dev
```
Open your browser at http://localhost:5173

---

### 📂 Project Structure

``` pqsql
    paste/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── data/
    │   ├── redux/
    │   │   └── pasteSlice/
    │   │       ├── pasteSlice.jsx
    │   │       └── store.jsx
    │   ├── utilities/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── index.css
    ├── .gitignore
    ├── index.html
    ├── eslint.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    ├── package.json
    ├── package-lock.json
    └── README.md
```

---

### 🧪 Scripts

### 🛠️ Commands

| Command         | Description |
|----------------|-------------|
| `npm run dev`   | Start development server with HMR |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build |
| `npm run lint`  | Lint the code using ESLint |


---    

### 📄 License
    Licensed under the MIT License.

---        

### 📝 Conclusion

This template sets up a modern React stack with Vite, Tailwind CSS, ESLint, and Redux Toolkit – giving you the tools to build scalable and beautiful web applications with ease.