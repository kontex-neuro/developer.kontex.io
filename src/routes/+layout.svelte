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

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <a href="/">
      <img class="h-14" src="/KonteX-logo.png" alt="KonteX" />
    </a>
    
    <!-- <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div> -->
  </div>
  <!-- <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div> -->
  <div class="navbar-end">
    <button
      class="btn btn-primary"
      data-toggle-theme="dark,light"
      data-act-class="ACTIVECLASS">Toggle Theme
    </button>
  </div>
</div>

<slot />

<footer class="fixed inset-x-0 bottom-0 footer bg-neutral text-neutral-content p-10">
  <aside class="flex">
    Copyright © {new Date().getFullYear()}, <a class="link link-hover" href="https://kontex.io/">KonteX Neuroscience</a>. All Rights Reserved.
  </aside>
</footer>
