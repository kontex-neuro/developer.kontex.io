<script>
  import "../app.css";
  import { onMount } from "svelte";

  let use_dark_theme = $state(null);

  onMount(() => {
    const stored_theme = window.localStorage.getItem("theme");
    if (stored_theme != null) {
      use_dark_theme = stored_theme === "dark";
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        use_dark_theme = true;
      } else {
        use_dark_theme = false;
      }
    }
  });

  $effect(() => {
    if (use_dark_theme !== null) {
      window.localStorage.setItem("theme", use_dark_theme ? "dark" : "light");
    }
  });

  let { children } = $props();
</script>

{#if use_dark_theme !== null}
  <div class="flex flex-col" data-theme={use_dark_theme ? "dark" : "light"}>
    <div class="flex-none navbar bg-base-100">
      <div class="navbar-start">
        <a href="/">
          <img class="h-14" src="/KonteX-logo.png" alt="KonteX" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <div class="text-3xl font-bold">Developer Center</div>
      </div>
      <div class="navbar-end">
        <label class="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
          <input
            type="checkbox"
            bind:checked={use_dark_theme}
            class="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </label>
      </div>
    </div>

    {@render children?.()}

    <footer class="flex-none footer bg-base-200 text-base-content p-10">
      <aside class="flex">
        Copyright © {new Date().getFullYear()},
        <a class="link link-hover" href="https://www.kontex.io/"
          >KonteX Neuroscience</a
        >. All Rights Reserved.
      </aside>
    </footer>
  </div>
{/if}
