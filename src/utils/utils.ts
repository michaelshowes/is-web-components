export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

// generate random string
export function randomString(length: number = 10): string {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}
