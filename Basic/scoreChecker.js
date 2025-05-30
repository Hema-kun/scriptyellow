function scoreChecker(...score) {
  for (let i = 0; i < score.length; i++) {
    if (typeof score[i] !== "number") {
      throw Error("Ini bukan number");
    }
  }

  const sumScore = score.reduce((acc, scores) => acc + scores, 0);
  const final = sumScore / score.length;

  let result;

  if (final > 90) {
    result = "Nilai A";
  } else if (final >= 80 && final < 90) {
    result = "Nilai B";
  } else if (final >= 70 && final < 80) {
    result = "Nilai C";
  } else if (final >= 60 && final < 70) {
    result = "Nilai D";
  } else {
    result = "E";
  }

  return result;
}

console.log(scoreChecker(80, 80, 80, '70'));
