import { Component, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';
@Component({
    selector: 'app-bar',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {
    exchangeTypes = [];
    contractTypes = [];
    isActive: number;
    scripcode: String = '';
    selectedValue: String = '';
    strikePrice: any;
    @ViewChild('ScripCodeTemp') ScripCodeTemp;
    @ViewChild('StrikePriceTemp') StrikePriceTemp;
    domRect: any;
    domRectTwo: any;
    constructor() {
        this.isActive = 0;
        this.exchangeTypes.push('NSE');
        this.exchangeTypes.push('BSE');
        this.exchangeTypes.push('NSEFO');
        this.exchangeTypes.push('NSECURR');
        this.exchangeTypes.push('NCXCURR');
        this.contractTypes.push('FUTURE');
        this.contractTypes.push('CALL');
        this.contractTypes.push('PUT');
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.domRect = this.ScripCodeTemp.nativeElement.getBoundingClientRect();
    }
    ngAfterViewInit(): void {
        this.domRect = this.ScripCodeTemp.nativeElement.getBoundingClientRect();
    }
    activateItem = (e, i) => {
        this.isActive = i;
        this.selectedValue = this.contractTypes[0];
    }
    doSomething = (data: any) => {
        if (data.condition === 'scripcode') {
            this.scripcode = data.value;
        } else if (data.condition === 'open') {
            this.strikePrice = data.value;
        }

    }

    testFunc = () => {
        this.domRectTwo = this.StrikePriceTemp.nativeElement.getBoundingClientRect();
    }
}

