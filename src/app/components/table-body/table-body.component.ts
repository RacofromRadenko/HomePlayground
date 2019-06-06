import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-table-body',
    templateUrl: './table-body.component.html',
    styleUrls: ['./table-body.component.less']
})
export class TableBodyComponent implements OnInit {
    @Input() businessObjects: object[];

    constructor() {
    }
    
    ngOnInit() {
        console.log('bobjects', this.businessObjects);
    }

}
