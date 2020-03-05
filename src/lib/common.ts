export const DAYS_OF_MONTH = [
  31,
  31,
  28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];
export const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
export function omitt(value: string, limit = 7): string {
  return value.length > limit ? value.slice(0, limit) + '...' : value;
}
