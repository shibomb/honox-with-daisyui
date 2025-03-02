/**
 * This components changes data-theme attribute on html tag.
 * <html lang="en" data-theme="light">
 */

import { useState } from "hono/jsx";

const themes = [
  { id: "light", name: "Light" },
  { id: "dark", name: "Dark" },
  { id: "cupcake", name: "Cupcake" },
  { id: "bumblebee", name: "Bumblebee" },
  { id: "emerald", name: "Emerald" },
  { id: "corporate", name: "Corporate" },
  { id: "synthwave", name: "Synthwave" },
  { id: "retro", name: "Retro" },
  { id: "cyberpunk", name: "Cyberpunk" },
  { id: "valentine", name: "Valentine" },
  { id: "halloween", name: "Halloween" },
  { id: "garden", name: "Garden" },
  { id: "forest", name: "Forest" },
  { id: "aqua", name: "Aqua" },
  { id: "lofi", name: "Lofi" },
  { id: "pastel", name: "Pastel" },
  { id: "fantasy", name: "Fantasy" },
  { id: "wireframe", name: "Wireframe" },
  { id: "black", name: "Black" },
  { id: "luxury", name: "Luxury" },
  { id: "dracula", name: "Dracula" },
  { id: "cmyk", name: "CMYK" },
  { id: "autumn", name: "Autumn" },
  { id: "business", name: "Business" },
  { id: "acid", name: "Acid" },
  { id: "lemonade", name: "Lemonade" },
  { id: "night", name: "Night" },
  { id: "coffee", name: "Coffee" },
  { id: "winter", name: "Winter" },
  { id: "dim", name: "Dim" },
  { id: "nord", name: "Nord" },
  { id: "sunset", name: "Sunset" },
  { id: "caramellatte", name: "Caramellatte" },
  { id: "abyss", name: "Abyss" },
  { id: "silk", name: "Silk" },
];

export default function ThemeController() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const handleChange = (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      setCurrentTheme(event.target.value);
      if (typeof localStorage !== "undefined") {
        return localStorage.setItem("theme", event.target.value);
      }
    }
  };

  return (
    <div class="dropdown dropdown-end">
      <div tabIndex={0} role="button" class="btn btn-ghost m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          class="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        class="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl max-h-[50vh] overflow-x overflow-y-auto"
      >
        {themes.map((theme) => (
          <li key={theme.id}>
            <div class="px-0 py-0">
              <input
                type="radio"
                id={theme.id}
                name="theme-dropdown"
                class="theme-controller hidden"
                aria-label={theme.name}
                value={theme.id}
                checked={currentTheme === theme.id}
                onChange={handleChange}
              />
              <label
                class="flex flex-row justify-start btn btn-sm btn-block btn-ghost px-2"
                for={theme.id}
              >
                <div class="flex flex-1 gap-3">
                  <div
                    data-theme={theme.id}
                    class="grid grid-cols-2 gap-0.5 p-0.5 rounded-sm shadow-sm shrink-0 bg-base-100"
                  >
                    <div class="size-2 rounded-full bg-base-content"></div>
                    <div class="size-2 rounded-full bg-primary"></div>
                    <div class="size-2 rounded-full bg-secondary"></div>
                    <div class="size-2 rounded-full bg-accent"></div>
                  </div>
                  <p class="">{theme.name}</p>
                </div>
                <div class="flex flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class={
                      (currentTheme === theme.id ? "visible" : "invisible") +
                      " h-3 w-3 shrink-0"
                    }
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>
                </div>
              </label>
            </div>
          </li>
        ))}
        <li key="theme-generator">
          <a
            href="https://daisyui.com/theme-generator/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-sm btn-ghost btn-block"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 fill-current"
              viewBox="0 0 512 512"
            >
              <path d="M96,208H48a16,16,0,0,1,0-32H96a16,16,0,0,1,0,32Z"></path>
              <line x1="90.25" y1="90.25" x2="124.19" y2="124.19"></line>
              <path d="M124.19,140.19a15.91,15.91,0,0,1-11.31-4.69L78.93,101.56a16,16,0,0,1,22.63-22.63l33.94,33.95a16,16,0,0,1-11.31,27.31Z"></path>
              <path d="M192,112a16,16,0,0,1-16-16V48a16,16,0,0,1,32,0V96A16,16,0,0,1,192,112Z"></path>
              <line x1="293.89" y1="90.25" x2="259.95" y2="124.19"></line>
              <path d="M260,140.19a16,16,0,0,1-11.31-27.31l33.94-33.95a16,16,0,0,1,22.63,22.63L271.27,135.5A15.94,15.94,0,0,1,260,140.19Z"></path>
              <line x1="124.19" y1="259.95" x2="90.25" y2="293.89"></line>
              <path d="M90.25,309.89a16,16,0,0,1-11.32-27.31l33.95-33.94a16,16,0,0,1,22.62,22.63l-33.94,33.94A16,16,0,0,1,90.25,309.89Z"></path>
              <path d="M219,151.83a26,26,0,0,0-36.77,0l-30.43,30.43a26,26,0,0,0,0,36.77L208.76,276a4,4,0,0,0,5.66,0L276,214.42a4,4,0,0,0,0-5.66Z"></path>
              <path d="M472.31,405.11,304.24,237a4,4,0,0,0-5.66,0L237,298.58a4,4,0,0,0,0,5.66L405.12,472.31a26,26,0,0,0,36.76,0l30.43-30.43h0A26,26,0,0,0,472.31,405.11Z"></path>
            </svg>
            Theme Generator
          </a>
        </li>
      </ul>
    </div>
  );
}
