interface calculatedExercise {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const parseArguments = (args: Array<string>) => {
  if (args.length < 4)
    throw new Error(
      "Not enough arguments were provided. Please provide a target followed by at least one day's recordings."
    );

  args.slice(2).forEach((element) => {
    if (isNaN(Number(element)))
      throw new Error("Provided values were not all numbers.");
  });

  const goal = Number(args[2]);
  const days = args.slice(3).map((n) => Number(n));
  return { days, goal };
};

const calculateExercises = (
  days: number[],
  targetHours: number
): calculatedExercise => {
  const periodLength = days.length;
  const trainingDays = days.filter((day) => day > 0);
  const average = days.reduce((a, b) => a + b, 0) / days.length;
  const success = (targetHours: number, average: number): boolean => {
    if (average >= targetHours) {
      return true;
    } else return false;
  };
  const rating = (targetHours: number, average: number): number => {
    if (average / targetHours < 0.666) {
      return 1;
    } else if (average / targetHours >= 0.666 && average / targetHours < 1) {
      return 2;
    } else if (average / targetHours >= 1) {
      return 3;
    } else return 0;
  };
  const ratingScore = rating(targetHours, average);
  const ratingDescription = (rating: number): string => {
    if (rating == 1) {
      return "Nice effort but needs more work";
    } else if (rating == 2) {
      return "Keep up the good work, you're almost there";
    } else if (rating == 3) {
      return "Great job, you met your goal";
    } else return "Something went wrong";
  };

  return {
    periodLength: periodLength,
    trainingDays: trainingDays.length,
    success: success(targetHours, average),
    rating: ratingScore,
    ratingDescription: ratingDescription(ratingScore),
    target: targetHours,
    average: average
  };
};

console.log(
  calculateExercises(
    parseArguments(process.argv).days,
    parseArguments(process.argv).goal
  )
);
