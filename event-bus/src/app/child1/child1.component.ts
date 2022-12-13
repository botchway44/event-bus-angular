import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  @Input() value = 0

  @Output() triggerValueChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  update() {
    this.value = this.value + 1;
    this.triggerValueChanged.emit(this.value)

  }
}
