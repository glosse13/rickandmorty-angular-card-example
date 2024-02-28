import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GlobalSettingsService } from '../../core/services/global-settings.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private globalSettings: GlobalSettingsService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestObject = req.clone({
      url: `${this.globalSettings.getAPIUrl() + req.url}`,
      });
    return next.handle(requestObject);
  }
}
