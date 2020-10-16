import { Injectable } from '@angular/core';
import { Tim } from '../Model/tim.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class TimService{
    private url = 'http://localhost:8083/tim/';

    tim: BehaviorSubject<Tim[]> = new BehaviorSubject<Tim[]>([]);

    constructor (private httpClient: HttpClient){}

    public getAllTim(): Observable<Tim[]>{
        this.httpClient.get<Tim[]> (this.url).subscribe(data => {
            this.tim.next(data);
        },
        (error:HttpErrorResponse)=>{
            console.log(error.name + ' ' + error.message);
        });
        return this.tim.asObservable();
    }

    public addTim(tim:Tim){
        this.httpClient.post(this.url, tim).subscribe();
    }

    public updateTim(tim:Tim){
        this.httpClient.put(this.url + tim.id , tim).subscribe();
    }

    public deleteTim(id:number){
        this.httpClient.delete(this.url + id).subscribe();
    }
}