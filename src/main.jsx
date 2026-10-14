import React from "react";
import ReactDOM from "react-dom/client";
import { LazyMotion, MotionConfig } from "framer-motion";
import App from "./App.jsx";
import "./index.css";

// Components use framer-motion's small `m` instead of `motion`, and the
// animation code loads in its own file just after the page (`strict` makes a
// stray `motion` component an error; ESLint also forbids importing it).
const loadMotionFeatures = () =>
  import("./motionFeatures.js").then((module) => module.default);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </LazyMotion>
  </React.StrictMode>
);