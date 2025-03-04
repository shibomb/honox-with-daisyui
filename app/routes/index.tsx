import { createRoute } from "honox/factory";
import { appConfig } from "../config";
import OgpMeta from "../components/ogp-meta";
import Counter from "../islands/counter";

export default createRoute((c) => {
  return c.render(
    <>
      <title>{appConfig.name}</title>
      <meta name="description" content={appConfig.description} />
      <OgpMeta
        c={c}
        title={appConfig.name}
        description={appConfig.description}
        type="website"
        img="/img/app-ogp-img.png"
      />

      <div class="prose prose-base p-4">
        <h1>Hello, {appConfig.name}!</h1>
        <Counter />
      </div>
      <hr />
      <div class="prose prose-base p-4">
        <h1>This is the simple template of HonoX with daisyUI v5.</h1>
        <p>
          GitHub:{" "}
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
