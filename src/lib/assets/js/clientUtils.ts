export function teleport(node: HTMLElement, name = "teleport") {
  const teleportContainer = document.getElementById(name);

  teleportContainer.appendChild(node);
  teleportContainer.focus(); // optional

  return {
    destroy() {
      node.remove();
    },
  };
}
