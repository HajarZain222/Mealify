# Mealify

A responsive restaurant landing page with dark mode, animated interactions, a mobile slide-in menu, and section-aware navbar highlights.

## ✨ Features
- **Responsive layout** (mobile → desktop)
- **Dark mode toggle** (variables-driven theme)
- **Active nav link on scroll** (Intersection logic)
- **Smooth scroll to Home** on load
- **Mobile sidebar menu** with overlay + blur
- **Chef cards** with hover scale + SVG wave shape injected via CSS
- **Gallery grid** with hover captions
- **Contact section** with embedded Google Map
- **Accessible icons** via Font Awesome

## 🛠 Tech Stack
- **HTML5**, **CSS3**, **Vanilla JS**
- **Google Fonts** (Amatic SC, Inter, Open Sans)
- **Font Awesome** for icons

## 📦 Folder Structure
.
├── index.html
├── css/
│ ├── all.min.css # Font Awesome (local)
│ └── style.css # Your styles (light/dark themes, components)
├── js/
│ └── main.js # Navigation, scroll spy, theme toggle, mobile menu
├── images/ # Assets (favicon, hero, chefs, gallery)
└── README.md


## 🚀 Getting Started
1. **Clone / Download** this repository.
2. Open `index.html` directly in your browser
3. Make sure css/, js/, and images/ paths stay intact.

## ⚙️ Key Behaviors
Dark Mode: toggled by the moon/sun button (#themeToggle) → toggles body.dark-mode and swaps icon classes.

Scroll Spy: highlights the nav link that matches the section in view.

Auto-scroll to Home: on load, the page scrolls smoothly to #home.

Mobile Menu: hamburger opens a sidebar; close via X, overlay click, or selecting a link.

## 🎨 Theming (CSS Variables)
Light & dark palettes are controlled via CSS variables.

## 🌐 Browser Support
Modern evergreen browsers. For Safari/iOS, -webkit-backdrop-filter is included.

## 🔒 License
MIT — free to use and modify.

## 🙌 Credits
Design & code: Hajar Zain

Icons: Font Awesome

Fonts: Google Fonts



