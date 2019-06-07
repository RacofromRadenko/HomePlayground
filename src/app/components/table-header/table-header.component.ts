import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";

@Component({
    selector: "app-table-header",
    templateUrl: "./table-header.component.html",
    styleUrls: ["./table-header.component.less"]
})
export class TableHeaderComponent implements OnInit {
    @Input() headerTitles: string[];
    @Output() sortEvent: EventEmitter<string> = new EventEmitter<string>();
    @Output() sortType: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
        console.log("header Titles", this.headerTitles);
    }

    ascendingSorting($event, title) {
        console.log('title ascending triggered', title);
        this.sortType.emit('ascending')
        this.sortEvent.emit(title)

    }

    descendingSorting($event, title) {
        console.log('title descending triggered', title);
        this.sortType.emit('descending')
        this.sortEvent.emit(title)
    }

    removeColomn($event, title) {
        console.log('remove trigered', title);

    }
}
