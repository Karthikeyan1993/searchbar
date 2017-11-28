import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ChartService {
    constructor(private http: HttpClient) {

    }
    getAllData = () => {
        return this.http.get<any>('assets/chart.json');
    }
    getIntraData = () => {
        return this.http.get<any>('assets/intra.json');
    }
}
