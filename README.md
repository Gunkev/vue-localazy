# Vue Localization Demo (Vue + Localazy)

This project is a small Vue 3 application demonstrating how to implement internationalization using **vue-i18n** and synchronize translations with **Localazy**.

The application displays a simple product page with multiple languages. Users can switch languages at runtime, and translations can be uploaded and downloaded automatically.

The project also includes a **pseudo-locale** for testing layouts before real translations are available.

---

## Features

- Vue 3 + TypeScript + Vite
- Runtime language switching
- English and French translations
- Pseudo-locale for layout testing
- Localazy translation integration
- Automated translation sync ready for CI

---

## Prerequisites

Make sure you have installed:

- Node.js 18 or later
- npm or yarn
- Git

Check versions:

```bash
node -v
npm -v
git --version
```

## Tools Used

This project uses the following tools:

- Vue 3 — Frontend framework
- Vite — Development server and build tool
- TypeScript — Static typing
- vue-i18n — Internationalization
- Localazy — Translation management
- GitHub Actions — Translation automation

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Gunkev/vue-localazy.git
```

Enter the project folder:

```bash
cd vue-localazy
```

Install dependencies:

```bash
npm install
```

---

## Run the Application

Start the development server:

```bash
npm run dev
```

Open in your browser:

```
http://localhost:5173
```

---

## Project Structure

```
src/
├── assets/locales/
│   ├── en.json
│   ├── fr.json
│   └── xxb.json
│
├── components/
│
├── App.vue
└── i18n.ts
```

---

## Translation Files

Translations are stored in:

```
src/assets/locales/
```

Example files:

```
en.json
fr.json
pseudo.json
```

English (`en.json`) is the source language.

---

## Localazy Integration

Upload source translations:

```bash
npx localazy upload
```

Download translations:

```bash
npx localazy download
```

Localazy keys are stored in:

```
localazy.keys.json
```


