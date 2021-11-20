class ComponentService {
  constructor() {
    this.numberOneInput = document.querySelector("#numberOne");
    this.numberTwoInput = document.querySelector("#numberTwo");
    this.addValuesButton = document.querySelector("#addValues");
    this.resultDiv = document.querySelector("#result");
  }

  getInputs() {
    return [this.numberOneInput.value, this.numberTwoInput.value];
  }

  setResult(str) {
    this.resultDiv.innerText = str;
  }

  onClick(cb) {
    this.addValuesButton.addEventListener("click", cb);
  }
}