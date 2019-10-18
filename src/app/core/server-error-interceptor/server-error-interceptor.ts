import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpIntercept  implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error instanceof HttpErrorResponse) {
                    // http error
                    return throwError(error);
                } else {
                    // client error
                    return throwError(error);
                }
            })
        );
    }
}
