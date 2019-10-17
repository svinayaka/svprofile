import { ErrorHandler } from '@angular/core';

export class ErrorHandlers implements ErrorHandler {
    handleError(error) {
        console.log(Error, 'At client side');
    }
}