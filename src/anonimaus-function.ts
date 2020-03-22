export { };

let bmi: (height: number, weight: number) => number = function (height: number, weight: number): number {
  return weight / (height * height);
};

console.log(bmi(17.8, 68));
