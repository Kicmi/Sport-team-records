import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Igrac } from 'src/app/Model/igrac.model';
import { IgracService } from 'src/app/Service/igrac.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Nacionalnost } from 'src/app/Model/nacionalnost.model';
import { Tim } from 'src/app/Model/tim.model';
import { NacionalnostService } from 'src/app/Service/nacionalnost.service';
import { TimService } from 'src/app/Service/tim.service';

@Component({
  selector: 'app-igrac-dijalog',
  templateUrl: './igrac-dijalog.component.html',
  styleUrls: ['./igrac-dijalog.component.css']
})
export class IgracDijalogComponent implements OnInit {

  public flag: number;
  timovi:Tim[];
  nacionalnosti:Nacionalnost[];


  constructor(public dialogRef: MatDialogRef<IgracDijalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Igrac,
    public igracService: IgracService,
    public snackBar:MatSnackBar,
    public nacionalnostService:NacionalnostService,
    public timService:TimService) { }




  ngOnInit() {
    this.nacionalnostService.getAllNacionalnost().subscribe(data=>{
      this.nacionalnosti = data;
    });

    this.timService.getAllTim().subscribe(data=>{
      this.timovi = data;
    })

  }

  public add():void{
    this.igracService.addIgrac(this.data);
    this.snackBar.open('Uspešno dodat igrac: ' + this.data.ime + ' ' + this.data.prezime, 'U redu', {duration:2500});
  }

  public update():void{
    this.igracService.updateIgrac(this.data);
    this.snackBar.open('Uspešno modifikovan igrac: ' + this.data.ime + ' ' + this.data.prezime, 'U redu', {duration: 2000,});
  }

  public delete():void{
    this.igracService.deleteIgrac(this.data.id);
    this.snackBar.open('Uspešno obrisan igrac: ' + this.data.id, 'U redu', {duration: 2000,});
  }

  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu',{duration:1000,});
  }

}
