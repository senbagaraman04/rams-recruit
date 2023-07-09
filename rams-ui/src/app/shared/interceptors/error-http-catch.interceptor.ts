import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';



@Injectable()
export class ErrorHttpCatchInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
          .pipe(
                catchError((error: HttpErrorResponse) => {
                   let errorMsg = '';
                   if (error.error instanceof ErrorEvent) {
                      errorMsg = `Error: ${error.error.message}`;
                   } else {
                      errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                   }
                   return throwError(() => new Error(errorMsg))
                })
          )
 }

}
