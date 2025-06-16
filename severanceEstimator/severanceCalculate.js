function severanceCalculator(salary, workingYears) {
  if (
    typeof salary !== "number" ||
    typeof workingYears !== "number" ||
    salary < 0 ||
    workingYears < 0
  ) {
    throw new Error(
      "Invalid input: salary and workingYears must be non-negative numbers"
    );
  }
  if (workingYears <= 1) {
    workingYears = 1;
  } else if (workingYears >= 1 && workingYears < 2) {
    workingYears = 2;
  } else {
    workingYears++;
  }
  return salary * workingYears;
}

function UPMKCalculator(salary, workingYears) {
  if (
    typeof salary !== "number" ||
    typeof workingYears !== "number" ||
    salary < 0 ||
    workingYears < 0
  ) {
    throw new Error(
      "Invalid input: salary and workingYears must be non-negative numbers"
    );
  }
  if (workingYears <= 2) {
    workingYears = 0;
  } else if (workingYears >= 3 && workingYears < 6) {
    workingYears = 2;
  } else if (workingYears >= 6 && workingYears < 9) {
    workingYears = 3;
  } else if (workingYears >= 9 && workingYears < 12) {
    workingYears = 4;
  } else if (workingYears >= 12 && workingYears < 15) {
    workingYears = 5;
  } else if (workingYears >= 15 && workingYears < 18) {
    workingYears = 6;
  } else if (workingYears >= 18 && workingYears < 21) {
    workingYears = 7;
  } else if (workingYears >= 21 && workingYears < 24) {
    workingYears = 8;
  } else {
    workingYears = 10;
  }
  return salary * workingYears;
}

export { severanceCalculator, UPMKCalculator };
