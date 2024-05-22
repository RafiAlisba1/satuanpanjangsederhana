document
  .getElementById("converter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let inputValue = parseFloat(document.getElementById("input-value").value);
    let inputUnit = document.getElementById("input-unit").value;
    let outputUnit = document.getElementById("output-unit").value;

    let valueInMeters;
    switch (inputUnit) {
      case "mm":
        valueInMeters = inputValue / 1000;
        break;
      case "cm":
        valueInMeters = inputValue / 100;
        break;
      case "dm":
        valueInMeters = inputValue / 10;
        break;
      case "m":
        valueInMeters = inputValue;
        break;
      case "dam":
        valueInMeters = inputValue * 10;
        break;
      case "hm":
        valueInMeters = inputValue * 100;
        break;
      case "km":
        valueInMeters = inputValue * 1000;
        break;
      default:
        valueInMeters = inputValue;
    }

    let result;
    switch (outputUnit) {
      case "mm":
        result = valueInMeters * 1000;
        break;
      case "cm":
        result = valueInMeters * 100;
        break;
      case "dm":
        result = valueInMeters * 10;
        break;
      case "m":
        result = valueInMeters;
        break;
      case "dam":
        result = valueInMeters / 10;
        break;
      case "hm":
        result = valueInMeters / 100;
        break;
      case "km":
        result = valueInMeters / 1000;
        break;
      default:
        result = valueInMeters;
    }

    document.getElementById("result-value").value = result;
  });
