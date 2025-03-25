<script>
  import "../app.css";
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);
    // 👆 false parameter is required for svelte
  });
</script>

<div class="flex flex-col h-screen">
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
      <button
        class="btn btn-primary"
        data-toggle-theme="dark,light"
        data-act-class="ACTIVECLASS"
        >Toggle Theme
      </button>
    </div>
  </div>

  <div class="grow">
    <slot />
  </div>

  <footer class="flex-none footer bg-base-200 text-base-content p-10">
    <aside class="flex">
      Copyright © {new Date().getFullYear()},
      <a class="link link-hover" href="https://www.kontex.io/"
        >KonteX Neuroscience</a
      >. All Rights Reserved.
    </aside>
  </footer>
</div>
