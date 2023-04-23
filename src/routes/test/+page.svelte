<script lang="ts">
  import { netlifyForm } from "$lib/assets/js/netlifyForm";
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";
  import Figure from "$lib/components/svg/Figure.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";
</script>

<section class="relative h-screen overflow-hidden">
  <div class="container flex h-full items-center justify-center">
    <div class="relative w-max rounded-xl bg-base-100 p-8 shadow-xl md:p-12">
      <h1 class="mb-0 flex items-center">Hello, World!</h1>

      <form
        use:netlifyForm
        name="test-form"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        class="flex flex-col gap-6"
      >
        <input type="hidden" name="form-name" value="test-form" />
        <label for="name">
          <span class="text-lg">Name</span>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="John Smith"
            class="input-bordered input w-full"
          />
        </label>
        <label for="email">
          <span class="text-lg">Email</span>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="JohnSnow@winterfell.com"
            class="input-bordered input w-full"
          />
        </label>

        <label for="remember-me" class="flex cursor-pointer items-center gap-2">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            checked={false}
            class="checkbox-primary checkbox"
          />
          <span class="select-none text-sm">Remember me</span>
        </label>

        <button type="submit" class="btn-primary btn self-start">Submit</button>
      </form>

      <FigureSmall
        class="absolute -bottom-12 -right-12 -z-10 h-36 w-36 animate-move-top"
      />
      <BreathingBlob
        class="absolute -left-32 -top-32 -z-30 h-64 w-64 text-base-300"
      />
    </div>
  </div>

  <Figure class="absolute -left-32 bottom-4 -z-10 h-48 w-48 animate-move-top" />
</section>
