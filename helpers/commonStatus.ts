export const findMostCommonStatus = (arr: { status: string }[]): string => {
  const statusFrequency: Record<string, number> = {};

  arr.forEach((obj) => {
    const status = obj.status;
    statusFrequency[status] = (statusFrequency[status] || 0) + 1;
  });

  let mostCommonStatus = "";
  let highestFrequency = 0;

  for (const status in statusFrequency) {
    if (statusFrequency[status] > highestFrequency) {
      mostCommonStatus = status;
      highestFrequency = statusFrequency[status];
    }
  }

  return mostCommonStatus;
};
