import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmitEvent, EventBusService, Events } from '../services/event-bus.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  @Input() anotherValue = 0


  counter = 120;
  constructor(
    private eventBus: EventBusService //injecting the eventbus service
  ) {

  }


  ngOnInit(): void {
  }

  updateTwice() {
    this.counter++;

    //enitting the event
    this.eventBus.emit(new EmitEvent(Events.ADD, "This is addition event"));
  }
}
