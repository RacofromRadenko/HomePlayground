import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-things',
  templateUrl: './basic-things.component.html',
  styleUrls: ['./basic-things.component.less']
})
export class BasicThingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setUrlAddress(event){
    console.log('set', event);
  }

}
