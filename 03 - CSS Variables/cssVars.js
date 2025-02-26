const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
inputs.forEach(event => event.addEventListener("change", handleUpdate));

inputs.forEach(event => event.addEventListener("mousemove", handleUpdate));
