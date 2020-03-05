import { InnerEvent } from './event';
import { omitt } from './common';

interface CalenderElementable {
  readonly date: number;
  readonly isInCurrentMonth: boolean;
  readonly events: string[];
}

export class CalenderElement implements CalenderElementable {
  private _events: string[] = [];
  constructor(readonly date: number, readonly isInCurrentMonth: boolean) {}
  filterEvents(innerEvents: Array<InnerEvent>): void {
    this.events = innerEvents
      .filter(n => n.date === this.date)
      .map(m => omitt(m.value));
  }
  get events(): string[] {
    return this._events;
  }
  set events(newEvents: string[]) {
    this._events = newEvents;
  }
}
