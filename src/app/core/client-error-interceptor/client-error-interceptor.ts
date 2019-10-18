import { ErrorHandler } from '@angular/core';

export class ErrorHandlers implements ErrorHandler {
    handleError(error) {
        console.log('I am at client side');
    }
}
