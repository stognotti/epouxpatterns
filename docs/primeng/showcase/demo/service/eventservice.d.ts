import { Http } from 'angular2/http';
export declare class EventService {
    private http;
    constructor(http: Http);
    getEvents(): Promise<any[]>;
}
