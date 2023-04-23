<script lang="ts">
  import CardPage from "$lib/components/layout/CardPage.svelte";
  import type { IShortLink } from "$lib/types/index.js";
  import Test from "@zerodevx/svelte-img";

  export let data;
  const shortLink: IShortLink = data.shortLink;
</script>

<CardPage>
  <h1>{shortLink.slug}</h1>
  <div>
    <Test>Green eggs and ham</Test>
  </div>
</CardPage>
