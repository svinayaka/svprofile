import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { timer, interval } from 'rxjs';
import { retry, shareReplay, retryWhen, delayWhen } from 'rxjs/operators';

@Injectable()
export class HttpClientReqRes {
    constructor(private http: HttpClient) { }

    createAuthorizationHeader() {
        const head = {
            'Content-Type': 'application/json',
            authorization: 'auth-token',
            'x-corralation-id': '12345',
            'Cache-Control': 'no-cache',
            'Keep-Alive': 'timeout=5, max=1000',
            'Access-Control-Allow-Origin': '*',
            'Content-Language': 'en-US'
        };
        return new HttpHeaders(head);
    }
    get(url) {
        const header = this.createAuthorizationHeader();
        return this.http.get(url, { headers: header })
            .pipe(retryWhen(error => {
                return error.pipe(delayWhen(retryTime => timer(6 * 1000)));
            }));
    }
    post(url) {
        const header = this.createAuthorizationHeader();
        return this.http.post(url, { headers: header });
    }
}
