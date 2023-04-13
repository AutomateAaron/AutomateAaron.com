<script lang="ts">
  let clazz: string = "";
  export let copyText: string;
  export let defaultToolTipMessage = "Click to Copy!";
  export let copiedToolTipMessage = "Copied!";
  let tooltipMessage = defaultToolTipMessage;

  const copy = function () {
    navigator.clipboard.writeText(copyText);
    tooltipMessage = copiedToolTipMessage;
    setTimeout(() => {
      tooltipMessage = defaultToolTipMessage;
    }, 3000);
  };

  export { clazz as class };
</script>

<button class="tooltip {clazz}" data-tip={tooltipMessage} on:click={copy}>
  <slot />
</button>
