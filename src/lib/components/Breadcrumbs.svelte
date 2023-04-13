<script lang="ts">
  import { page } from "$app/stores";

  export let path: string = $page.url.pathname;
  let clazz: string = "";
  let crumbs: {
    label: string;
    href: string;
  }[];

  $: {
    // Remove zero-length tokens.
    const tokens = path.split("/").filter((t) => t !== "");

    // Create { label, href } pairs for each token.
    let tokenPath = "";
    crumbs = tokens.map((t) => {
      tokenPath += "/" + t;
      return {
        label: t,
        href: tokenPath,
      };
    });

    // Add a way to get home too.
    crumbs.unshift({ label: "home", href: "/" });
  }
  export { clazz as class };
</script>

<div class="breadcrumbs text-sm {clazz}">
  <ul>
    {#each crumbs as c, i}
      <li>
        {#if i == crumbs.length - 1}
          {c.label}
        {:else}
          <a href={c.href}>{c.label}</a>
        {/if}
      </li>
    {/each}
  </ul>
</div>
