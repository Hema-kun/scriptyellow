const { averageExams, isStudentPassExam } = require("./gradeCalculations");


test("it should handle non-number ", () => {
  const listValueOfExams = [50, '2', 50, 60];
  expect(() => averageExams(listValueOfExams)).toThrow(Error);
});

describe("grade calculation", () => {
  test("it should return average", () => {
    const listOfExams = [80, 100, 100, 80];
    expect(averageExams(listOfExams)).toEqual(90);
  });

  test("it should return exam passed status", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toBe(true);
  });

  test("it should return exam failed status", () => {
    const listValueOfExams = [50, 40, 70, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toBe(false);
  });
});