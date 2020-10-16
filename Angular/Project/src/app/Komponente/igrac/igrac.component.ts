import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Igrac } from 'src/app/Model/igrac.model';
import { Tim } from 'src/app/Model/tim.model';
import { HttpClient } from '@angular/common/http';
import { IgracService } from 'src/app/Service/igrac.service';
import { MatDialog } from '@angular/material/dialog';
import { IgracDijalogComponent } from '../Dijalog/igrac-dijalog/igrac-dijalog.component';
import { Nacionalnost } from 'src/app/Model/nacionalnost.model';

@Component({
  selector: 'app-igrac',
  templateUrl: './igrac.component.html',
  styleUrls: ['./igrac.component.css']
})
export class IgracComponent implements OnInit {

  displayedColumns = ['id','ime','prezime','brojReg','datumRodjenja','nacionalnost','tim','actions'];
  dataSource : Observable<Igrac[]>;

  @Input() selektovanTim: Tim;

  constructor(public httpClient:HttpClient, public igracService: IgracService, public dialog:MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges(){
    if(this.selektovanTim.id){
      this.loadData();
    }
  }

  public loadData(){
    this.dataSource = this.igracService.getAllIgraceTima(this.selektovanTim.id);
  }


  public openDialog(flag:number, id:number, ime:string, prezime:string,brojReg:string,datumRodjenja:Date, nacionalnostBean:Nacionalnost, timBean:Tim){
    const dialogRef = this.dialog.open(IgracDijalogComponent, {data: {id:id, ime:ime, prezime:prezime, brojReg:brojReg, datumRodjenja:datumRodjenja, nacionalnostBean:nacionalnostBean, timBean:timBean}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if(result === 1){
        this.loadData();
      }
    });
  }

}
