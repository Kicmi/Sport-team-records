import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Liga } from 'src/app/Model/liga.model';
import { LigaService } from 'src/app/Service/liga.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { LigaDijalogComponent } from '../Dijalog/liga-dijalog/liga-dijalog.component';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'naziv', 'oznaka','actions'];
  dataSource:MatTableDataSource<Liga>;
  constructor(private ligaService:LigaService, public dialog:MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.ligaService.getAllLiga().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openDialog(flag:number, id:number, naziv:string, oznaka:string){
    const dialogRef = this.dialog.open(LigaDijalogComponent, {data: {id:id, naziv:naziv, oznaka:oznaka}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if(result === 1){
        this.loadData();
      }
    });
  }

}
