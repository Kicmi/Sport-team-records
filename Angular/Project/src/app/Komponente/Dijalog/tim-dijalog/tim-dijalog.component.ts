import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tim } from 'src/app/Model/tim.model';
import { TimService } from 'src/app/Service/tim.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LigaService } from 'src/app/Service/liga.service';
import { Liga } from 'src/app/Model/liga.model';

@Component({
  selector: 'app-tim-dijalog',
  templateUrl: './tim-dijalog.component.html',
  styleUrls: ['./tim-dijalog.component.css']
})
export class TimDijalogComponent implements OnInit {

  public flag: number;

  constructor(public dialogRef: MatDialogRef<TimDijalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tim,
    public timService: TimService,
    public snackBar:MatSnackBar,
    public ligaService:LigaService) { }

    lige:Liga[];

  ngOnInit() {
    this.ligaService.getAllLiga().subscribe(data=>{
      this.lige = data;
    })
  }


  public add():void{
    this.timService.addTim(this.data);
    this.snackBar.open('Uspešno dodat tim: ' + this.data.id, 'U redu', {duration:2500,});
  }

  public update():void{
    this.timService.updateTim(this.data);
    this.snackBar.open('Uspešno modifikovan tim: ' + this.data.id, 'U redu', {duration: 2000,});
  }

  public delete():void{
    this.timService.deleteTim(this.data.id);
    this.snackBar.open('Uspešno obrisan tim: ' + this.data.id, 'U redu', {duration: 2000,});
  }

  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu',{duration:1000,});
  }

}
