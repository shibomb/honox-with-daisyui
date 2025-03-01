import { createRoute } from "honox/factory";
import Counter from "../islands/counter";

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <>
      <title>{name}</title>
      <div class="prose prose-base p-4">
        <h1>Hello, {name}!</h1>
        <Counter />
      </div>
      <hr />
      <div class="prose prose-base p-4">
        <h1>This is the simple template of HonoX with daisyUI v5.</h1>
        <p>
          Github:{" "}
          <a
            target="_blank"
            href="https://github.com/shibomb/honox-with-daisyui"
            rel="noopener noreferrer"
          >
            https://github.com/shibomb/honox-with-daisyui
          </a>
        </p>
        <ul>
          <li>HonoX with tailwindcss v4</li>
          <li>daisyUI v5</li>
          <li>Includes a Theme Selector inspired by the daisyUI website</li>
          <li>Includes a tailwind Typography demo page from daisyUI docs</li>
        </ul>
      </div>
    </>
  );
});
