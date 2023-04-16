<script>
  import MailTo from "$lib/components/MailTo.svelte";
  import EmailIcon from "~icons/ic/baseline-email";
</script>

<section class="section flex h-screen items-center justify-center">
  <div class="bg-base-100 p-8">
    <form
      name="netlify-form-example"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="netlify-form-example" />
      <label for="message">Message</label>
      <input
        name="message"
        id="message"
        required
        placeholder="Message"
        type="text"
      />
      <input type="submit" value="Submit" />
    </form>
  </div>
</section>
