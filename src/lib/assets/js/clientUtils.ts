
export function teleport(node, name = 'teleport') {
  console.log(node)
  let teleportContainer = document.getElementById(name);

  teleportContainer.appendChild(node);
  teleportContainer.focus(); // optional


  return {
    destroy() {
      node.remove();
    }
  }
}
