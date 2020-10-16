import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tim } from 'src/app/Model/tim.model';
import { TimService } from 'src/app/Service/tim.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Liga } from 'src/app/Model/liga.model';
import { TimDijalogComponent } from '../Dijalog/tim-dijalog/tim-dijalog.component';

@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css']
})
export class TimComponent implements OnInit {

  displayedColumns: string[] = ['id', 'naziv', 'osnovan','sediste','liga','actions'];
  dataSource:MatTableDataSource<Tim>;
  selektovanTim: Tim;
  constructor(private timService:TimService, public dialog:MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.loadData();
  }

  public selectRow(row){
    this.selektovanTim = row;
  }

  public loadData(){
    this.timService.getAllTim().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  public openDialog(flag:number, id:number, naziv:string, osnovan:string, sediste:string, ligaBean:Liga){
    const dialogRef = this.dialog.open(TimDijalogComponent, {data: {id:id, naziv:naziv, osnovan:osnovan, sediste:sediste, ligaBean:ligaBean}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if(result === 1){
        this.loadData();
      }
    });
  }

}
