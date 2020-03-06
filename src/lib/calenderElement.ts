import { InnerEvent } from './event';
import { omitt } from './common';

interface CalenderElementable {
  readonly date: number;
  readonly isInCurrentMonth: boolean;
  readonly events: string[];
  readonly omittedEvents: string[];
}

export class CalenderElement implements CalenderElementable {
  private _events: string[] = [];
  private _omittedEvents: string[] = [];
  constructor(readonly date: number, readonly isInCurrentMonth: boolean) {}
  filterEvents(innerEvents: Array<InnerEvent>): void {
    this.events = innerEvents
      .filter(n => n.date === this.date)
      .map(m => m.value);
    this.omittedEvents = this.events.map(n => omitt(n));
  }
  get events(): string[] {
    return this._events;
  }
  set events(newEvents: string[]) {
    this._events = newEvents;
  }
  get omittedEvents(): string[] {
    return this._omittedEvents;
  }
  set omittedEvents(newEvents: string[]) {
    this._omittedEvents = newEvents;
  }
}
