import { Link } from "honox/server";
import { appConfig, getBaseUrl } from "../../config";

export default function FooterNav() {
  return (
    <>
      <div class="bg-base-200 text-base-content">
        <footer class="footer md:footer-horizontal mx-auto max-w-6xl px-4 py-20">
          {/* Logo and description */}
          <div>
            <div class="flex items-center gap-2">
              <div class="w-12">
                <img
                  src="/img/app-icon.png"
                  alt={appConfig.author}
                  class="block w-full"
                />
              </div>

              <div class="font-title inline-flex text-3xl font-black">
                {appConfig.name}
              </div>
            </div>
            <p class="text-base-content/70 mb-5">{appConfig.description}</p>
          </div>
          <div>
            <span class="footer-title opacity-70">Contents</span>
            <a href="/typography-demo" class="link link-hover">
              Typography Demo
            </a>
          </div>

          <div>
            <span class="footer-title opacity-70">Basics</span>
            <a
              target="_blank"
              rel="noopener, noreferrer"
              href="https://hono.dev/"
              class="link link-hover group"
            >
              Hono
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="inline-block w-4 fill-current opacity-0 group-hover:opacity-50"
              >
                <path
                  fill-rule="evenodd"
                  d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener, noreferrer"
              href="https://daisyui.com/"
              class="link link-hover group"
            >
              daisyUI
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="inline-block w-4 fill-current opacity-0 group-hover:opacity-50"
              >
                <path
                  fill-rule="evenodd"
                  d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                ></path>
              </svg>
            </a>
          </div>

          <div>
            <span class="footer-title opacity-70">Related links</span>
            <a
              target="_blank"
              rel="noopener, noreferrer"
              href="https://github.com/shibomb/honox-with-daisyui"
              class="link link-hover group"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="inline-block w-4 fill-current opacity-0 group-hover:opacity-50"
              >
                <path
                  fill-rule="evenodd"
                  d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                ></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
