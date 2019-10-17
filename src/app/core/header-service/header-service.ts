import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class HttpClientReqRes {
    constructor(private http: HttpClient) { }

    createAuthorizationHeader(httpHeader: HttpHeaders) {
        httpHeader = httpHeader.append('Content-Type', 'application/json');
        httpHeader = httpHeader.append('authorization', 'auth-token');
        httpHeader = httpHeader.append('x-corralation-id', '12345');
        httpHeader = httpHeader.append('Cache-Control', 'no-cache');
        httpHeader = httpHeader.append('Keep-Alive', 'timeout=5, max=1000');
        httpHeader = httpHeader.append('Access-Control-Allow-Origin', '*');
        httpHeader = httpHeader.append('Content-Language', 'en-US');
    }
    get(url) {
        const header = new HttpHeaders();
        this.createAuthorizationHeader(header);
        return this.http.get(url, { headers: header });
    }
    post(url) {
        const header = new HttpHeaders();
        this.createAuthorizationHeader(header);
        return this.http.post(url, { headers: header });
    }
}
