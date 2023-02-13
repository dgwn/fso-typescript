// const height: number = Number(process.argv[2]);
// const weight: number = Number(process.argv[3]);

const calculateBmi = (height: number, weight: number): string => {
  if (isNaN(height) || isNaN(weight) || !height || !weight) {
    throw new Error("error: malformatted parameters");
  }
  const bmi = weight / ((height * height) / 10000);
  // console.log(bmi);
  if (bmi < 18.5) {
    return "Underweight (unhealthy weight)";
  } else if (bmi >= 18.5 && bmi <= 25) {
    return "Normal (healthy weight)";
  } else if (bmi > 25) {
    return "Overweight (unhealthy weight)";
  }
  return "Something went wrong.";
};

// console.log(calculateBmi(height, weight));

export { calculateBmi };
