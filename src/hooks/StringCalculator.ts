export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiter = /,|\n|;/;

  if (/\\n/.test(numbers)) {
    numbers = numbers.replace(/\\n/g, "\n");
  }

  const numberArray = numbers.split(delimiter);
  console.log(numberArray);
  const negatives = numberArray.filter((n) => parseInt(n) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numberArray.reduce((sum, number) => sum + (parseInt(number) || 0), 0);
}
