import { Injectable } from '@angular/core';
import { Igrac } from '../Model/igrac.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class IgracService{
    private url = 'http://localhost:8083/igrac/';
    private url2 = 'http://localhost:8083/igracitima/';

    igrac: BehaviorSubject<Igrac[]> = new BehaviorSubject<Igrac[]>([]);
    igractima: BehaviorSubject<Igrac[]> = new BehaviorSubject<Igrac[]>([]);

    constructor (private httpClient: HttpClient){}

    public getAllIgrac(): Observable<Igrac[]>{
        this.httpClient.get<Igrac[]> (this.url).subscribe(data => {
            this.igrac.next(data);
        },
        (error:HttpErrorResponse)=>{
            console.log(error.name + ' ' + error.message);
        });
        return this.igrac.asObservable();
    }

    public getAllIgraceTima(id:number): Observable<Igrac[]>{
        this.httpClient.get<Igrac[]> (this.url2 + id).subscribe(data => {
            this.igractima.next(data);
        },
        (error:HttpErrorResponse)=>{
            console.log(error.name + ' ' + error.message);
        });
        return this.igractima.asObservable();
    }






    public addIgrac(igrac:Igrac){
        this.httpClient.post(this.url, igrac).subscribe();
    }

    public updateIgrac(igrac:Igrac){
        this.httpClient.put(this.url + igrac.id , igrac).subscribe();
    }

    public deleteIgrac(id:number){
        this.httpClient.delete(this.url + id).subscribe();
    }
}