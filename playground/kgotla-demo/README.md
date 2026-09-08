# KGOTLA Demo Component

Full-featured capabilities demo page for [kgotlaai.co.za](https://kgotlaai.co.za), built as a drop-in React component.

---

## Files

| File | Purpose |
|---|---|
| `src/KgotlaDemo.jsx` | Main React component — all sections composed here |
| `src/KgotlaDemo.module.css` | Scoped CSS module — all styles, zero conflicts |
| `index.html` | Standalone HTML version — no React required |

---

## Quick Start (React)

### 1. Copy the files into your project

```
your-project/
  src/
    components/
      KgotlaDemo.jsx          ← copy here
      KgotlaDemo.module.css   ← copy here
```

### 2. Import and use anywhere

```jsx
import KgotlaDemo from "./components/KgotlaDemo";

export default function App() {
  return <KgotlaDemo />;
}
```

That's it. No extra dependencies beyond React itself.

---

## Use as a Route (React Router)

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KgotlaDemo from "./components/KgotlaDemo";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"     element={<Home />} />
        <Route path="/demo" element={<KgotlaDemo />} />
      </Routes>
    </BrowserRouter>
  );
}
```

Access your demo at: `https://kgotlaai.co.za/demo`

---

## Use as a Standalone Page (No React)

Just open or host `index.html` — it is fully self-contained with zero dependencies.

Options:
- **Netlify / Vercel**: Drag and drop the `kgotla-demo/` folder → instant deploy
- **Subdomain**: Host as `demo.kgotlaai.co.za`
- **GitHub Pages**: Push and enable Pages on the repo

---

## What's Inside the Component

| Section | Description |
|---|---|
| **NavBar** | Sticky nav with SVG hex logo, section jump links |
| **Hero** | Headline, motto, two CTAs |
| **Capabilities** | 3 cards — watsonx, webMethods, Architecture |
| **IntegrationFlow** | Animated 5-node pipeline with pulsing highlight (React `useEffect`) |
| **ChatBot** | Interactive AI agent — typed Q&A, typing indicator, quick-reply chips |
| **WorkflowTrigger** | Form → animated 5-step live pipeline with dynamic labels per submission |
| **Clients** | 6 sector cards targeting potential clients |
| **CTA + Footer** | Links back to kgotlaai.co.za |

---

## Extending the Chat Knowledge Base

The chat agent is powered by a simple keyword → response map at the top of `KgotlaDemo.jsx`.
To add new answers, just add entries to the `KB` object:

```js
const KB = {
  // existing entries ...
  "pricing":   "Our engagement pricing starts from ...",
  "timeline":  "A typical project takes 6–12 weeks ...",
};
```

---

## Requirements

- React 17+ or React 18+
- CSS Modules support (included in Create React App, Next.js, Vite — works out of the box)

---

*Built with IBM Bob · KGOTLA AI Solutions Architects · Ubuntu · Innovation · Collective Intelligence*
