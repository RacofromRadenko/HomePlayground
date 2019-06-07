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

        switch (event) {
            case 'number':
                const numberObjectValues = this.businessPartnersObjectsList.map(metaTableData => {
                    return {number: metaTableData['number']}
                });

                console.log('numberObj', numberObjectValues);
                const removeNumberObject = this.removeObjectFromArray(this.businessPartnersObjectsList, numberObjectValues);

                console.log(' remove number', removeNumberObject);
                const metaTableData = this.businessPartnersObjectsList.map(metaTableData => {
                    return metaTableData['number']
                });

                const dajnesto = this.businessPartnersObjectsList.indexOf(metaTableData);
                console.log('daj', dajnesto);
                const sortedBusinessObjectPropertyNumber = metaTableData.sort((businessObject1, businessObject2) => {
                    if (this.ascendingSortType === 'ascending') {

                        console.log('asc');
                        return businessObject1 - businessObject2

                    } else if (this.descendingSortType === 'descending') {

                        console.log('desc');
                        return businessObject2 - businessObject1
                    }
                })
                console.log('sorted ', sortedBusinessObjectPropertyNumber);


                break;
            case
            'matchcode'
            :
                this.businessPartnersObjectsList.sort((a, b) => {
                        if (this.ascendingSortType === 'ascending') {
                            if (a['matchcode'] > b['matchcode']) {
                                return -1;
                            }
                        } else if (this.descendingSortType === 'descending') {
                            if (b['matchcode'] < a['matchcode']) {
                                return 1;
                            }
                        }
                    }
                );
                break;
            case
            'id'
            :
                this.businessPartnersObjectsList.sort((a, b) => {
                        if (this.ascendingSortType === 'ascending') {
                            if (a['id'] > b['id']) {
                                return -1;
                            }
                        } else if (this.descendingSortType === 'descending') {
                            if (b['id'] < a['id']) {
                                return 1;
                            }
                        }
                    }
                );

                break;
            case
            'designation'
            :
                this.businessPartnersObjectsList.sort((a, b) => {
                        if (this.ascendingSortType === 'ascending') {
                            if (a['designation'] > b['designation']) {
                                return -1;
                            }
                        } else if (this.descendingSortType === 'descending') {
                            if (b['designation'] < a['designation']) {
                                return 1;
                            }
                        }
                    }
                );

                break;


        }

    }

    sortType(event) {
        console.log('sort event type', event);

        if (event === 'ascending') {
            this.ascendingSortType = event;
        } else {
            this.descendingSortType = event;
        }
    }

    removeObjectFromArray(objectArrays, object) {
        const editedObject = object.map(newObject=> newObject.number)
        console.log('edited', editedObject);
        const removedObject = objectArrays.filter(extistingArrayObject => extistingArrayObject['number'] !== object)
        console.log('removed', removedObject);
    }
}


