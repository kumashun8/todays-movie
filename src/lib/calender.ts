interface CalenderElementable {
  readonly date: number;
  readonly isInCurrentMonth: boolean;
}
interface Calenderable {
  readonly year: number;
  readonly month: number;
  readonly calenderElements: Array<CalenderElement>;
  convertMYtoStr(): string;
  daysOfMonthOfYear(): number;
  createCalenderElements(
    days: number,
    isIn: boolean,
    gap: number
  ): Array<CalenderElement>;
}

class CalenderElement implements CalenderElementable {
  constructor(readonly date: number, readonly isInCurrentMonth: boolean) {}
}

const daysOfMonth = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export class Calender implements Calenderable {
  private static instance: Calender;
  private _calenderElements: Array<CalenderElement> = [];
  private constructor(readonly year: number, readonly month: number) {
    console.log(year, month);
  }
  static getInstance(year: number, month: number): Calender {
    Calender.instance = new Calender(year, month);
    return Calender.instance;
  }
  convertMYtoStr(): string {
    return String(this.month) + ' 1, ' + String(this.year);
  }
  daysOfMonthOfYear(month: number = this.month): number {
    if (this.year % 4 === 0 && this.month === 2) {
      return 29;
    }
    return daysOfMonth[month];
  }
  createCalenderElements(
    days: number,
    isIn: boolean,
    gap = 1
  ): Array<CalenderElement> {
    return new Array(days)
      .fill(0)
      .map((_, i) => new CalenderElement(i + gap, isIn));
  }
  get calenderElements(): Array<CalenderElement> {
    const currentDays = this.daysOfMonthOfYear();
    const beforeDays = this.daysOfMonthOfYear(this.month - 1);
    const beforeEdgeDays = new Date(this.convertMYtoStr()).getDay();
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
}
