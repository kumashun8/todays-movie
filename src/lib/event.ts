interface Eventable {
  readonly date: [number, number, number];
  readonly value: string;
  readonly id: number;
}

export interface InnerEventable {
  readonly date: number;
  readonly value: string;
  readonly baseId: number;
}

export class Event implements Eventable {
  constructor(
    readonly date: [number, number, number],
    readonly value: string,
    readonly id = 0
  ) {}
}

export class InnerEvent implements InnerEventable {
  constructor(
    readonly date: number,
    readonly value: string,
    readonly baseId: number
  ) {}
}
