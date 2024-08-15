import "./style.css";

const paletteColors =
  document.querySelectorAll<HTMLDivElement>(".palette-color");

paletteColors.forEach((div) => {
  div.addEventListener("click", function () {
    const span = this.querySelector<HTMLSpanElement>("span");
    if (span) {
      navigator.clipboard.writeText(span.textContent as string);
    }
  });
});
