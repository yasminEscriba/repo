import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../globals';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouletteService {
  private httpClient: HttpClient;
  httpOptions: any={};
  constructor(private globals: Globals, private http: HttpClient) { 
  }
  ngOnInit(){
    /*this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };*/
  }
  getWinner(): Observable<any> {
    return this.http.get<any>('https://roulettemillionaire.azurewebsites.net/api/HttpTrigger1?code=GfnQebahGyyKWQmLpgn8N7v/nI/uaaWEHjLrnGdYbMxiz3q1Wiga0g==&id=4').pipe(
      tap( (data) => console.log('getWinner') ),
      catchError(this.handleError<any>('getWinner'))
    );
    //return tap( ([{'spinswinner':3}]) )
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
