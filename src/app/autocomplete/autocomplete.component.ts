import { Component, ViewChild, Input, Output, OnChanges, SimpleChanges, OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import { Myservice } from '../shared/myservice.service';
import { MyFilterPipe } from '../shared/myFilterPipe.pipe';
@Component({
    selector: 'app-complete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.css'],
    providers: [Myservice]
})
export class AutoCompleteComponent implements OnInit, OnChanges {

    @Input('property') property: String;
    @Input('configuration') configuration: any;
    @Input('settings') settings: any;
    @Output() onItemPicked: EventEmitter<any> = new EventEmitter<any>();
    data: any[] = [];
    isVisible: boolean;

    constructor(private myservice: Myservice) {
    }

    ngOnInit(): void {
        this.myservice.getData().subscribe((data) => {
            this.data = data;
        });
    }
    ngOnChanges(changes: SimpleChanges) {
        this.isVisible = !this.isVisible;
    }

    itemSelected = (event, item) => {
        if (event.type === 'click') {
            this.onItemPicked.emit({ condition: this.configuration.condition, value: item[this.configuration.condition] });
        }
    }
}
