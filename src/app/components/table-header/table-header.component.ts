import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-table-header",
  templateUrl: "./table-header.component.html",
  styleUrls: ["./table-header.component.less"]
})
export class TableHeaderComponent implements OnInit {
  @Input() headerTitles: string[];
  constructor() {}

  ngOnInit() {
    console.log("header Titles", this.headerTitles);
  }
}
