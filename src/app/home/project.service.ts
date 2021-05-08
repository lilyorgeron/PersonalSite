import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { ProjectInfo } from './project';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private productUrl = 'api/project/project.json';

  constructor(private http: HttpClient) { }

  getInfo(): Observable<ProjectInfo[]> {
    return this.http.get<ProjectInfo[]>(this.productUrl).pipe(
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
