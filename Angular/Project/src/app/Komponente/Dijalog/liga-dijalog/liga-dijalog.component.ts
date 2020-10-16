import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Liga } from 'src/app/Model/liga.model';
import { LigaService } from 'src/app/Service/liga.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-liga-dijalog',
  templateUrl: './liga-dijalog.component.html',
  styleUrls: ['./liga-dijalog.component.css']
})
export class LigaDijalogComponent implements OnInit {

  public flag: number;

  constructor(public dialogRef: MatDialogRef<LigaDijalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Liga,
    public ligaService: LigaService,
    public snackBar:MatSnackBar) { }


  ngOnInit() {
  }


  public add():void{
    this.ligaService.addLiga(this.data);
    this.snackBar.open('Uspešno dodata liga: ' + this.data.id, 'U redu', {duration:2500,});
  }

  public update():void{
    this.ligaService.updateLiga(this.data);
    this.snackBar.open('Uspešno modifikovana liga: ' + this.data.id, 'U redu', {duration: 2000,});
  }

  public delete():void{
    this.ligaService.deleteLiga(this.data.id);
    this.snackBar.open('Uspešno obrisana liga: ' + this.data.id, 'U redu', {duration: 2000,});
  }

  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu',{duration:1000,});
  }


}
