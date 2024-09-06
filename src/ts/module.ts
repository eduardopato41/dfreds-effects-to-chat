import "../styles/style.scss"; // Keep or else vite will not include this
import { Settings } from "./settings.ts";

Hooks.once("init", () => {
    new Settings().registerSettings();
});
