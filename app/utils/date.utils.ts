import {format} from 'date-fns';

export function getShortWeekday(date: Date) {
  return format(date, 'eee');
}

export function getDayAndMonth(date: Date) {
  return format(date, 'MMM dd');
}

export function getTime(date: Date) {
  return format(date, 'HH:mm');
}
