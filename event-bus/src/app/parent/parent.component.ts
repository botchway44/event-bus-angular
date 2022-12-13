import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBusService, Events } from '../services/event-bus.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {


  _eventBus: Subscription;

  counter = 120;
  constructor(
    private eventBus: EventBusService
  ) {

    //listening to the event 
    this._eventBus = this.eventBus.on(Events.ADD, (data: any) => {
      console.log("DO something herer")

      this.counter++
    });
  }

  ngOnInit(): void {
  }


  updateOnvalue(event: number) {
    console.log(event)

    this.counter = event;
  }



  onDestroy() {

    //unsubscribing to the event
    this._eventBus.unsubscribe();
  }
}
