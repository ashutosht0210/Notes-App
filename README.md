# 📝 Notes App

A simple and elegant Notes application built with **React** and **Tailwind CSS**, allowing users to quickly add, view, and delete notes in a sleek dark-themed interface with persistent local storage.

## Live Site

- [Live link](https://ashutosht0210.github.io/Notes-App/)

## ✨ Features

- ➕ **Add Notes** — Create notes with a title and detailed description.
- 🎨 **Color-Coded Cards** — Each note displays a unique accent border color (rose, amber, emerald, cyan, indigo, fuchsia) that cycles automatically.
- 💾 **Persistent Storage** — Notes are saved to `localStorage` and automatically restored on page reload.
- ❌ **Hover-to-Delete** — A delete button appears on hover for a clean, uncluttered look.
- 📭 **Empty State UI** — A friendly placeholder is shown when no notes exist, guiding the user to create their first note.
- ⚡ **Real-time Updates** — Notes list updates immediately after adding or removing entries.
- 🌑 **Dark Themed Interface** — Premium dark design with gradient text, subtle borders, and smooth transitions.
- 📱 **Responsive Layout** — Split-screen layout that stacks vertically on mobile and displays side-by-side on larger screens.

## 🛠️ Tech Stack

- **React 19** – Component-based UI library
- **Vite** – Fast build tool and dev server
- **Tailwind CSS v4** – Utility-first CSS framework for styling
- **Lucide React** – Icon library (used for the delete icon)
- **gh-pages** – GitHub Pages deployment

## 📂 Project Structure

```
Notes-App/
├── dist/                # Production build output
├── node_modules/
├── src/
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles (Tailwind import)
│   └── main.jsx         # React entry point
├── .gitignore
├── eslint.config.js
├── index.html           # HTML entry point
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v16 or above) and **npm** installed on your system.

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ashutosht0210/Notes-App.git
   cd Notes-App
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL shown in the terminal (usually `http://localhost:5173`).

### Deployment

Deploy to GitHub Pages with:
```bash
npm run deploy
```

## 🧩 How It Works

- The **left panel** contains a form with a title input and a details textarea. Submitting the form adds a new note to the state and persists it to `localStorage`.
- The **right panel** displays all saved notes as cards with color-coded accent borders, rendered via `.map()` over the notes array.
- Each note card has a **hover-reveal delete button** (appears on mouse hover) that removes the note from the list and updates `localStorage`.
- On page load, notes are **restored from `localStorage`** using a lazy initializer in `useState`.
- An **empty state placeholder** with a prompt is shown when there are no notes.
- State management is handled entirely with React's `useState` hook — no external state library is required.

## 🔮 Future Improvements

- 🕒 Add timestamps to notes
- ✏️ Edit existing notes
- 🔍 Search/filter notes
- 🎨 Theme toggle (light/dark mode)
- 📂 Categorize notes with tags or folders
- ☁️ Backend sync for cross-device access

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ using React + Tailwind CSS