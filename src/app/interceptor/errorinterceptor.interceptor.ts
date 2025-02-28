import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error. status === 404){
          console.error('Resource not found');
        }
        return throwError(() => new Error('test'))
      })
    );
      
  }

}
