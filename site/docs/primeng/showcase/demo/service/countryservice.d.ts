import { Http } from 'angular2/http';
export declare class CountryService {
    private http;
    constructor(http: Http);
    getCountries(): Promise<any[]>;
}
