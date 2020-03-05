import { Event, InnerEvent } from './event';
import { CalenderElement } from './calenderElement';
import { DAYS_OF_MONTH } from './common';

interface Calenderable {
  readonly year: number;
  readonly month: number;
  readonly calenderElements: Array<CalenderElement>;
  readonly innerEvents: Array<InnerEvent>;
}

export class Calender implements Calenderable {
  private static instance: Calender;
  private _calenderElements: Array<CalenderElement> = [];
  private _innerEvents: Array<InnerEvent> = [];
  private constructor(readonly year: number, readonly month: number) {}
  static getInstance(
    year: number,
    month: number,
    events: Array<Event> = []
  ): Calender {
    Calender.instance = new Calender(year, month);
    if (events) {
      Calender.instance.filterEvents(events);
    }
    return Calender.instance;
  }
  filterEvents(events: Array<Event>): void {
    this.innerEvents = events
      .filter(n => n.date[0] === this.year && n.date[1] === this.month)
      .map(m => new InnerEvent(m.date[2], m.value));
  }
  firstDay(): string {
    return String(this.month) + ' 1, ' + String(this.year);
  }
  daysOfMonthOfYear(month: number = this.month): number {
    return this.year % 4 === 0 && this.month === 2 ? 29 : DAYS_OF_MONTH[month];
  }
  prevMonth(): { year: number; month: number } {
    return this.month === 1
      ? { year: this.year - 1, month: 12 }
      : { year: this.year, month: this.month - 1 };
  }
  nextMonth(): { year: number; month: number } {
    return this.month === 12
      ? { year: this.year + 1, month: 1 }
      : { year: this.year, month: this.month + 1 };
  }
  createCalenderElements(
    days: number,
    isIn: boolean,
    gap = 1
  ): Array<CalenderElement> {
    return new Array(days).fill(0).map((_, i) => {
      const calenderElement = new CalenderElement(i + gap, isIn);
      if (isIn) {
        calenderElement.filterEvents(this.innerEvents);
      }
      return calenderElement;
    });
  }
  get calenderElements(): Array<CalenderElement> {
    const currentDays = this.daysOfMonthOfYear();
    const beforeDays = this.daysOfMonthOfYear(this.month - 1);
    const beforeEdgeDays = new Date(this.firstDay()).getDay();
    const afterEdgeDays = 42 - (beforeEdgeDays + currentDays);

    this._calenderElements = this.createCalenderElements(
      beforeEdgeDays,
      false,
      beforeDays - beforeEdgeDays + 1
    )
      .concat(this.createCalenderElements(currentDays, true))
      .concat(this.createCalenderElements(afterEdgeDays, false));

    return this._calenderElements;
  }
  get innerEvents(): Array<InnerEvent> {
    return this._innerEvents;
  }
  set innerEvents(newValue: Array<InnerEvent>) {
    this._innerEvents = newValue;
  }
}
