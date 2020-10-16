import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Nacionalnost } from 'src/app/Model/nacionalnost.model';
import { NacionalnostService } from 'src/app/Service/nacionalnost.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-nacionalnost-dijalog',
  templateUrl: './nacionalnost-dijalog.component.html',
  styleUrls: ['./nacionalnost-dijalog.component.css']
})
export class NacionalnostDijalogComponent implements OnInit {

  public flag: number;

  constructor(public dialogRef: MatDialogRef<NacionalnostDijalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Nacionalnost,
    public nacionalnostService: NacionalnostService,
    public snackBar:MatSnackBar) { }


  ngOnInit() {
  }


  public add():void{
    this.nacionalnostService.addNacionalnost(this.data);
    this.snackBar.open('Uspešno dodata nacionalnost: ' + this.data.id, 'U redu', {duration:2500,});
  }

  public update():void{
    this.nacionalnostService.updateNacionalnost(this.data);
    this.snackBar.open('Uspešno modifikovana nacionalnost: ' + this.data.id, 'U redu', {duration: 2000,});
  }

  public delete():void{
    this.nacionalnostService.deleteNacionalnost(this.data.id);
    this.snackBar.open('Uspešno obrisana nacionalnost: ' + this.data.id, 'U redu', {duration: 2000,});
  }

  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu',{duration:1000,});
  }

}
