import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {
  @Input() errorAlert: string;
  constructor() { }

  ngOnInit() {
  }

}
