var powFlag = false;
function addToCalculator(value) {
  document.getElementById("displayResult").value += value;

  if (powFlag) {
    var numbers = document.getElementById("displayResult").value.split("^");

    document.getElementById("displayResult").value = Math.pow(
      numbers[0],
      numbers[1]
    );
    powFlag = false;
  }
}

function finilize() {
  document.getElementById("displayResult").value = eval(
    document.getElementById("displayResult").value
  );
}

function reset() {
  document.getElementById("displayResult").value = "";
}

function mathCalculator(mathFunc) {
  if (mathFunc == "pow") {
    powFlag = true;
    document.getElementById("displayResult").value += "^";
  } else {
    var val = document.getElementById("displayResult").value;
    document.getElementById("displayResult").value = Math[mathFunc](val);
  }
}
