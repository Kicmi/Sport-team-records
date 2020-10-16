import { Component, OnInit, ViewChild } from '@angular/core';
import { NacionalnostService } from 'src/app/Service/nacionalnost.service';
import { MatTableDataSource } from '@angular/material/table';
import { Nacionalnost } from 'src/app/Model/nacionalnost.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { NacionalnostDijalogComponent } from '../Dijalog/nacionalnost-dijalog/nacionalnost-dijalog.component';

@Component({
  selector: 'app-nacionalnost',
  templateUrl: './nacionalnost.component.html',
  styleUrls: ['./nacionalnost.component.css']
})
export class NacionalnostComponent implements OnInit {
  displayedColumns: string[] = ['id', 'naziv', 'skracenica','actions'];
  dataSource:MatTableDataSource<Nacionalnost>;
  constructor(private nacionalnostService:NacionalnostService, public dialog:MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.nacionalnostService.getAllNacionalnost().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag:number, id:number, naziv:string, skracenica:string){
    const dialogRef = this.dialog.open(NacionalnostDijalogComponent, {data: {id:id, naziv:naziv, skracenica:skracenica}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if(result === 1){
        this.loadData();
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
