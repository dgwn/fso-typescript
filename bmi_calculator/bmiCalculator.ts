const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / ((height * height) / 10000);
  console.log(bmi);
  if (bmi < 18.5) {
    return "Underweight (unhealthy weight)";
  } else if (bmi >= 18.5 && bmi <= 25) {
    return "Normal (healthy weight)";
  } else if (bmi > 25) {
    return "Overweight (unhealthy weight)";
  }
  return "Something went wrong.";
};

console.log(calculateBmi(180, 100));
