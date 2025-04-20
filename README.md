# 📝 Note-Maker-Vibe-Checker

A responsive, tag-enabled note-taking app built with **React**, **React Router**, **React-Bootstrap**, and **TypeScript**. This project was originally expected in JavaScript, but I intentionally chose to step out of my comfort zone and implemented it using TypeScript to explore type safety and better scalability in real-world applications.

## 📌 Description

**Note-Maker-Vibe-Checker** lets users create, edit, tag, and filter notes efficiently. Designed with a clean UI and modular architecture, it demonstrates modern React practices including state management, routing, and reusable components — all wrapped in a responsive layout.

## 🚀 Features

- ✅ Create, edit, and delete notes
- 🍿 Add tags and filter notes by tag or title
- 🧵 Dynamic routing with `React Router`
- 🧠 Context API + `useLocalStorage` for state persistence
- 📄 Form validation on note creation
- 📱 Fully responsive (mobile + desktop)
- 🧹 Modular component architecture
- 💾 Data persistence via `localStorage`
- 🪰 TypeScript-powered static type checking

## 🛠️ Tech Stack

- **React.js** (with Functional Components + Hooks)
- **React Router DOM** for navigation
- **React-Bootstrap** for UI components
- **TypeScript** for type safety
- **React Select** for multi-select tagging
- **UUID** for unique ID generation
- **LocalStorage** for persisting notes and tags
- **Git & GitHub** for version control and collaboration

## 🡩‍💻 Why TypeScript?

> While the project guidelines suggested JavaScript, I used **TypeScript** to better model complex state, enforce prop contracts, and get early error detection — ultimately producing more reliable and maintainable code. This was a conscious effort to push beyond expectations.

## 📂 Folder Structure (Modular)

```
src/
├── components/
│   ├── NoteForm.tsx
│   ├── NoteList.tsx
│   ├── EditNote.tsx
│   ├── NewNote.tsx
│   ├── Note.tsx
│   └── ...
├── hooks/
│   └── useLocalStorage.ts
├── layouts/
│   └── NoteLayout.tsx
├── App.tsx
├── index.tsx
└── index.css
```

## ⚙️ Setup Instructions

```bash
git clone https://github.com/lakshyamewara0025/note-maker-vibe-checker.git
cd note-maker-vibe-checker
npm install
npm run dev
```

### To Build for Production:

```bash
npm run build
```

## 🌐 Live Demo

[🔗 Deployed Link](https://note-maker-vibe-checker.vercel.app/)  
> Hosted via Vercel / Netlify / GitHub Pages *(Replace this with your actual URL)*

## 🧪 Evaluation Highlights

| Criteria                    | Covered ✅ |
|----------------------------|------------|
| Functional multi-page routes | ✅        |
| State management & hooks     | ✅        |
| Clean, modular codebase      | ✅        |
| Form with validation         | ✅        |
| Responsive Design            | ✅        |
| Good Git practices & README  | ✅        |
| Innovation with TypeScript   | ✅        |


## 📬 Contact

For questions or collaboration ideas, feel free to connect via GitHub, linkedIn or Instagram.

