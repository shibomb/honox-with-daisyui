import ThemeController from "../../islands/theme-controller";

export default function Header() {
  const APP_NAME = "HonoX with daisyUI";

  return (
    <>
      <div class="bg-base-100/80 print:hidden text-base-content sticky top-0 z-30 flex h-16 w-full justify-center backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">
        <nav class="navbar w-full">
          <div class="flex flex-1 md:gap-1 lg:gap-2 items-center">
            {/* Logo */}
            <div class="flex items-center">
              {/* <div class="w-6">
                <img src={icon} alt={APP_NAME} class="block w-full" />
              </div> */}
              <a
                href="/"
                aria-current="page"
                aria-label={APP_NAME}
                class="flex-0 btn btn-ghost gap-1 px-2 md:gap-2"
              >
                <span class="font-title text-base-content text-lg md:text-xl whitespace-nowrap">
                  {APP_NAME}
                </span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div class="flex flex-none">
            <ul class="menu menu-horizontal px-1">
              <div class="hidden flex-none items-center lg:inline-block">
                <a
                  href="/typography-demo"
                  class="btn btn-sm btn-ghost drawer-button font-normal"
                >
                  Typography Demos
                </a>
              </div>
            </ul>
            <ThemeController />
          </div>
        </nav>
      </div>
    </>
  );
}
