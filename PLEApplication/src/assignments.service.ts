﻿import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Assignment } from './assignment';

@Injectable()
export class AssignmentsService {
    constructor(private _http: Http)
    { }

    getAssignments(courseID: string): Observable<Assignment[]> {
        return this._http.get('http://localhost:63234/api/Assignments/' + courseID)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}