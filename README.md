# Nintendo Switch 2 Preorder Portal

A dual-implementation e-commerce product preview web application contrasting **React.js** and **Vue 3** frontend architectures. Built to compare component lifecycles, state management paradigms, and template data-binding mechanisms while consuming local JSON data.

## 🛠️ Tech Stack
- **Frontend Frameworks:** React.js, Vue.js (Vue 3 Options API)
- **Languages:** JavaScript (ES6+), HTML5, CSS3
- **Data & APIs:** Fetch API, JSON

## ✨ Features
- **Dual Framework Architecture:** Parallel implementations allowing direct comparison between React functional components (`useState`, `useEffect`) and the Vue 3 Options API (`createApp`, `data`, `methods`).
- **Dynamic Catalog:** Asynchronously fetches and parses game metadata (developer, publisher, release date, price, trailer embeds) from a local JSON store.
- **Interactive Cart & Pricing:** Real-time state updates to compute order totals and maintain sorted lists of selected titles upon checking/unchecking items.
- **Interactive UI/UX:** Responsive card layouts, smooth CSS hover overlays, and embedded YouTube trailer viewports.

## 🚀 Running Locally

### Option A: Vue 3 Version
1. Clone the repository:
   ```bash
   git clone [https://github.com/Thevoid2Codes/switch2-preorder-portal.git](https://github.com/Thevoid2gaming/switch2-preorder-portal.git)
   cd switch2-preorder-portal
