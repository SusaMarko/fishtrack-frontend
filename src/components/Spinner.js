export default class Spinner {
  constructor(parentElement = document.body) {
    this.parentElement = parentElement;
    this.spinnerElement = this.createSpinner();
  }

  createSpinner() {
    const spinner = document.createElement("div");
    spinner.className =
      "spinner hidden border-t-4 border-blue-500 border-solid rounded-full animate-spin h-12 w-12";
    this.parentElement.appendChild(spinner);
    return spinner;
  }

  show() {
    this.spinnerElement.classList.remove("hidden");
  }

  hide() {
    this.spinnerElement.classList.add("hidden");
  }
}
