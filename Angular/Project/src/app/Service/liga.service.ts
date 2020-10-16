import { Injectable } from '@angular/core';
import { Liga } from '../Model/liga.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class LigaService{
    private url = 'http://localhost:8083/liga/';

    liga: BehaviorSubject<Liga[]> = new BehaviorSubject<Liga[]>([]);

    constructor (private httpClient: HttpClient){}

    public getAllLiga(): Observable<Liga[]>{
        this.httpClient.get<Liga[]> (this.url).subscribe(data => {
            this.liga.next(data);
        },
        (error:HttpErrorResponse)=>{
            console.log(error.name + ' ' + error.message);
        });
        return this.liga.asObservable();
    }

    public addLiga(liga:Liga){
        this.httpClient.post(this.url, liga).subscribe();
    }

    public updateLiga(liga:Liga){
        this.httpClient.put(this.url + liga.id , liga).subscribe();
    }

    public deleteLiga(id:number){
        this.httpClient.delete(this.url + id).subscribe();
    }
}