import { appConfig } from "../../config";

export default function Footer() {
  return (
    <>
      <footer class="footer footer-center border-base-300 bg-base-300 text-base-content border-t px-4 py-12">
        <div class="flex w-full max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <a
            href={appConfig.author_url}
            rel="noopener, noreferrer"
            target="_blank"
            class="inline-flex items-center justify-center hover:opacity-90"
          >
            <div class="avatar me-3">
              <div class="mask mask-squircle bg-neutral h-14 w-14 p-px">
                <img
                  loading="lazy"
                  width="54"
                  height="54"
                  alt={appConfig.author}
                  class="mask mask-squircle"
                  src="/img/author_icon.png"
                />
              </div>
            </div>
            <div class="text-left">
              <p class="text-base-content/70 text-xs">
                Copyright &copy; {appConfig.createdYear}
              </p>
              <p class="text-base-content text-lg font-bold">
                {appConfig.author}
              </p>
              <p class="text-base-content/70 text-xs">All rights reserved.</p>
            </div>
          </a>
          <div class="flex flex-col items-center gap-4 text-left sm:flex-row"></div>
        </div>
      </footer>{" "}
    </>
  );
}
