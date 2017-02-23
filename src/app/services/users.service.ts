import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { API } from '../shared/globals';

@Injectable()
export class UsersService {
  private usersUrl = API.url + '/users';

  constructor (
    private http: Http
  ) {}

  getUsers (): Observable<User[]> {
    return this.http.get(this.usersUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getUser (id: number): Observable<User> {
    return this.http.get(this.usersUrl + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addUser (user: User): Observable<User[]> {
    return this.http.post(this.usersUrl, user)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  deleteUser (id: number): Observable<User[]> {
    return this.http.delete(this.usersUrl + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  editUser (id: number, user: any): Observable<User[]> {
    return this.http.put(this.usersUrl + '/' + id, user)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
