import "./style.css";
alert("Willkommen auf unserer tollen Website!");

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

new emojiCursor();
// Animations
import { animate } from "motion";
animate("#pulse", { transform: "rotate(360deg)" }, { repeat: Infinity });
