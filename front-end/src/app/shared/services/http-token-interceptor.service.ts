import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpTokenInterceptorService implements HttpInterceptor {

  constructor(public authSrv: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = this.authSrv.getToken();
    if (userToken) {
      const modifiedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${userToken}`)
        .set('Accept', 'application/json'), // Add Accept header
      
      });
      return next.handle(modifiedReq);
    }
    // If token is missing or expired, send the request without it.
    return next.handle(req);
  }
}
