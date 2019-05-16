import { Component, OnInit } from "@angular/core";
import { BUSINESS_PARTNERS_LIST } from "../../Mocks/BusinessPartnersObjectList/businessPratnersObjectList";
@Component({
  selector: "app-table-grid-holder",
  templateUrl: "./table-grid-holder.component.html",
  styleUrls: ["./table-grid-holder.component.less"]
})
export class TableGridHolderComponent implements OnInit {
  businessPartnersObjectsList: any[] = BUSINESS_PARTNERS_LIST;
  headerTitles: string[];

  constructor() {}

  ngOnInit() {
    this.parseObjectList(this.businessPartnersObjectsList);
  }

  parseObjectList(objectList: any[]): void {
    for (let key in objectList) {
      this.headerTitles = Object.keys(objectList[key]);
    }
  }
}
