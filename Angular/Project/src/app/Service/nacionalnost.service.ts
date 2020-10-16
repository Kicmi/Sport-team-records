import { Injectable } from '@angular/core';
import { Nacionalnost } from '../Model/nacionalnost.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class NacionalnostService{
    private url = 'http://localhost:8083/nacionalnost/';

    nacionalnost: BehaviorSubject<Nacionalnost[]> = new BehaviorSubject<Nacionalnost[]>([]);

    constructor (private httpClient: HttpClient){}

    public getAllNacionalnost(): Observable<Nacionalnost[]>{
        this.httpClient.get<Nacionalnost[]> (this.url).subscribe(data => {
            this.nacionalnost.next(data);
        },
        (error:HttpErrorResponse)=>{
            console.log(error.name + ' ' + error.message);
        });
        return this.nacionalnost.asObservable();
    }

    public addNacionalnost(nacionalnost:Nacionalnost){
        this.httpClient.post(this.url, nacionalnost).subscribe();
    }

    public updateNacionalnost(nacionalnost:Nacionalnost){
        this.httpClient.put(this.url + nacionalnost.id , nacionalnost).subscribe();
    }

    public deleteNacionalnost(id:number){
        this.httpClient.delete(this.url + id).subscribe();
    }
}