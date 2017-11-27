import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class Myservice {
    constructor(private http: HttpClient) {

    }

    getData = () => {
        return this.http.get<any>('assets/data.json');
    }
}
