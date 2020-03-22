export { };

let bmi = (height: number, weight: number): number => {
  return weight / (height * height);
};

console.log(bmi(13.8, 68));
