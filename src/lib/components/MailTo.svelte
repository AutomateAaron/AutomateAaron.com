<script lang="ts">
  import CopyIcon from "~icons/ic/baseline-content-copy";
  import SendIcon from "~icons/ic/baseline-send";

  export let email: string;
  export let clazz: string;
  export let location: "top" | "bottom" | "left" | "right" = "top";

  let locationClasses = "";
  if (location === "top") {
    locationClasses = "-top-4 left-1/2 -translate-x-1/2 -translate-y-full";
  }

  export { clazz as class };
</script>

<div class="relative {clazz}">
  <slot />
  <div
    class="popup absolute position-{location} rounded-xl bg-base-200 px-8 py-4 text-base-content shadow-xl"
  >
    <h5 class="mb-4">But which?</h5>
    <div class="flex gap-2">
      <!-- 
      <button
        on:click={() => navigator.clipboard.writeText(email)}
        class="btn-outline btn-primary btn-sm btn"
      >
        Copy <CopyIcon class="ml-1" />
      </button>
      <a href="mailto:{email}" class="btn-outline btn-primary btn-sm btn">
        MailTo <SendIcon class="ml-1" />
      </a> -->
    </div>
  </div>
</div>

<style lang="postcss">
  .popup::before {
    content: "";
    @apply absolute h-4 w-4 rotate-45 bg-red-400;
  }

  .position-top {
    @apply -top-4 -translate-y-full;
  }

  .position-top::before {
    content: "";
    @apply -bottom-2 left-0 right-0 translate-x-1/2;
  }

  /* 
  .position-bottom {
    @apply -bottom-4 left-1/2 -translate-x-1/2 translate-y-full;
  }
  .position-bottom::before {
    content: "";
    @apply -top-2 right-1/2 translate-x-1/2;
  }

  .position-left {
    @apply -left-4 top-1/2 -translate-x-full -translate-y-1/2;
  }
  .position-left::before {
    content: "";
    @apply -right-2 top-1/2 -translate-y-1/2;
  }

  .position-right {
    @apply -right-4 top-1/2 -translate-y-1/2 translate-x-full;
  }
  .position-right::before {
    content: "";
    @apply -left-2 top-1/2 -translate-y-1/2;
  } */
</style>
