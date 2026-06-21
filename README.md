# 📝 Notes App

A simple and elegant Notes application built with **React** and **Tailwind CSS**, allowing users to quickly add, view, and delete notes in a clean sticky-note style UI.

## Live Site

- [Live link](https://ashutosht0210.github.io/Notes-App/)

## ✨ Features

- ➕ **Add Notes** — Create notes with a heading and detailed description.
- 🗒️ **Sticky Note UI** — Notes are displayed as visually appealing sticky notes with a notepad background.
- ❌ **Delete Notes** — Remove any note instantly using the delete (X) button.
- ⚡ **Real-time Updates** — Notes list updates immediately after adding or removing entries.
- 🎨 **Dark Themed Interface** — Sleek black-and-white design for a modern look.
- 📱 **Responsive Layout** — Split-screen layout that adapts to different screen sizes (stacks on mobile, side-by-side on larger screens).

## 🛠️ Tech Stack

- **React** – Component-based UI library
- **Vite** – Fast build tool and dev server
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Lucide React** – Icon library (used for the delete icon)

## 📂 Project Structure

```
Notes-App/
├── node_modules/
├── src/
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles (Tailwind)
│   └── main.jsx         # React entry point
├── .gitignore
├── eslint.config.js
├── index.html
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

## 🧩 How It Works

- The **left panel** contains a form with a heading input and a details textarea. Submitting the form adds a new note to the state array.
- The **right panel** displays all added notes as sticky-note styled cards using `.map()` over the notes array.
- Each note card has a delete button (red circular icon) that removes the note from the list using its index.
- State management is handled entirely with React's `useState` hook — no external state library is required.

## 🔮 Future Improvements

- 💾 Persist notes using `localStorage` or a backend database
- 🕒 Add timestamps to notes
- ✏️ Edit existing notes
- 🔍 Search/filter notes
- 🎨 Theme toggle (light/dark mode)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ using React + Tailwind CSS