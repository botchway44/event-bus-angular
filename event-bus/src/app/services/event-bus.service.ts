import { Injectable } from "@angular/core";
import { Observable, Subject, Subscription, UnaryFunction, pipe } from "rxjs";
import { filter, map, tap } from "rxjs/operators";


export class EmitEvent {
  constructor(public name: any, public value?: any) { }
}

// this works like a communication channel
export enum Events {
  ADD,
  SUBSTRACT,
  WHATEVEREVENTYOUWANT
}


@Injectable()
export class EventBusService {

  subject = new Subject<any>();

  constructor() { }

  on(event: Events, action: any): Subscription {

    return this.subject
      .pipe(
        filter((e: EmitEvent) => {
          return e.name === event;
        }),
        map((e: EmitEvent) => {
          return e.value;
        })
      )
      .subscribe(action);
  }

  emit(event: EmitEvent) {
    this.subject.next(event);
  }

}