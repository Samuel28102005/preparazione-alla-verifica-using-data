import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  x : String[]
  constructor() { 
    this.x=["ruspa","martello","gru"]
    
  }

  ngOnInit(): void {
  }

}
