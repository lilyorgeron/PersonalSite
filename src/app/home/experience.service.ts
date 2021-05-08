import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { xpInfo } from './experience';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private xpUrl = 'api/project/experience.json';

  constructor(private http: HttpClient) { }

  getXp(): Observable<xpInfo[]> {
    return this.http.get<xpInfo[]>(this.xpUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))), 
        catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);   

  }


}
