import { CalenderState } from 'redux/reducers/calender';

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
export function getNow(): CalenderState {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  };
}
