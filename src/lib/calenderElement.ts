import { InnerEvent } from './event';
import { omitt } from './common';

interface CalenderElementable {
  readonly date: number;
  readonly isInCurrentMonth: boolean;
  readonly events: string[];
  readonly omittedEvents: string[];
  readonly eventIds: number[];
}

export class CalenderElement implements CalenderElementable {
  private _events: string[] = [];
  private _omittedEvents: string[] = [];
  private _eventIds: number[] = [];
  constructor(readonly date: number, readonly isInCurrentMonth: boolean) {}
  filterEvents(innerEvents: Array<InnerEvent>): void {
    const tmpEvents: [string, number][] = innerEvents
      .filter(n => n.date === this.date)
      .map(m => [m.value, m.baseId]);
    for (let index = 0; index < tmpEvents.length; index++) {
      const element = tmpEvents[index];
      this.events.push(element[0]);
      this.eventIds.push(element[1]);
      this.omittedEvents.push(omitt(element[0]));
    }
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
  get eventIds(): number[] {
    return this._eventIds;
  }
  set eventIds(newIds: number[]) {
    this._eventIds = newIds;
  }
}
