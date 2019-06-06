import {Component, EventEmitter, Input, OnInit} from "@angular/core";
import {BUSINESS_PARTNERS_LIST} from "../../Mocks/BusinessPartnersObjectList/businessPratnersObjectList";
import {BranchesDataService} from "../../Mocks/branches-data.service";

@Component({
    selector: "app-table-grid-holder",
    templateUrl: "./table-grid-holder.component.html",
    styleUrls: ["./table-grid-holder.component.less"]
})
export class TableGridHolderComponent implements OnInit {

    // businessPartnersObjectsList: any[] = BUSINESS_PARTNERS_LIST;
    businessPartnersObjectsList: any[];
    headerTitles: string[];
    ascendingSortType: string;
    descendingSortType: string;

    constructor(public branchesMockService: BranchesDataService) {
    }

    ngOnInit() {
        this.businessPartnersObjectsList = this.branchesMockService.MockBranches();
        this.parseObjectList(this.businessPartnersObjectsList);
        console.log('bpol', this.businessPartnersObjectsList);
    }

    parseObjectList(objectList: any[]): void {
        for (let key in objectList) {
            this.headerTitles = Object.keys(objectList[key]);
        }
    }


    sortMetaData(event) {

        let shallowArrayCopy = [...this.businessPartnersObjectsList];
        switch (event) {
            case 'number':

                console.log('number');
                if (this.ascendingSortType) {
                    console.log('ja usao asc');
                    shallowArrayCopy.sort((a, b) => {
                        return (a['number'] - b['number'])
                    })
                } else if (this.descendingSortType) {

                    shallowArrayCopy.sort((a, b) => {
                        return (b['number'] - a['number'])
                    })
                }


                break;
            case
            'matchcode'
            :
                console.log('matchcode');
                break;
            case
            'id'
            :
                console.log('id');

                break;
            case
            'designation'
            :
                console.log('designation');

                break;


        }
        return this.businessPartnersObjectsList = [...shallowArrayCopy];
    }

    sortType(event) {
        console.log('sort event type', event);

        if (event === 'ascending') {
            this.ascendingSortType = event;
        } else {
            this.descendingSortType = event;
        }
    }

}
