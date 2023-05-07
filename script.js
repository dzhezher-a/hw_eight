function promptNumbers(promptMessage) {
  let input = prompt(promptMessage);

  while (input === null || input.trim() === "") {
    input = prompt(
      "Некорректное значение. Введите длины катетов через пробел: "
    );
  }

  return input;
}

function methodSelection() {
  const methods = ["math", "regular"];
  let input = prompt(`Выберите один из двух методов:
    math;
    regular.`).toLowerCase();

  while (!methods.includes(input)) {
    input = prompt(
      "Некорректное значение. Выберите math или regular: "
    ).toLowerCase();
  }

  return input;
}

function calculateHypotenuse() {
  let input = promptNumbers("Введите длины катетов через пробел: ");

  legs = input.split(" ");

  while (isNaN(legs[0]) || isNaN(legs[1])) {
    input = promptNumbers("Некорректное значение. Введите два числа: ");
    legs = input.split(" ");
  }

  let legOne = legs[0];
  let legTwo = legs[1];

  let hypotenuse;

  switch (methodSelection()) {
    case "math": {
      hypotenuse = Math.hypot(legOne, legTwo);
      return hypotenuse;
    }

    case "regular": {
      hypotenuse = (legOne * legOne + legTwo * legTwo) ** 0.5;
      return hypotenuse;
    }
  }
}

let result = calculateHypotenuse();
alert(`Гипотенуза равна ${result}`);
