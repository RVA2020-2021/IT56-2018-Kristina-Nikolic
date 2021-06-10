import { Component, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { Departman } from 'src/app/models/Departman/departman';
import { Fakultet } from 'src/app/models/Fakultet/fakultet';
import { DepartmanService } from 'src/app/services/departman.service';
import { DepartmanDialogComponent } from '../dialogs/departman-dialog/departman-dialog.component';

@Component({
  selector: 'app-departman',
  templateUrl: './departman.component.html',
  styleUrls: ['./departman.component.css']
})
export class DepartmanComponent implements OnInit, OnChanges {

  displayedColumns = ['id', 'naziv', 'oznaka', 'fakultet', 'actions'];
  dataSource: MatTableDataSource<Departman>;
  subscription: Subscription;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  @Input() selektovanFakultet: Fakultet;

  constructor(private departmanService: DepartmanService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    //console.log("Selektovani fakultet: " +this.selektovanFakultet)
    //this.loadData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges(): void {
    if(this.selektovanFakultet.id) {
      this.loadData();
    }
  }

  public loadData() {
    this.departmanService.getDepartmaniZaFakultet(this.selektovanFakultet.id)
      .subscribe(data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }),
      (error: Error) => {
        console.log(error.name+ ' ' + error.message);
      }
  }

  public openDialog(flag: number, id?: number, naziv?: string, oznaka?: string, fakultet?: Fakultet) {
      const dialogRef = this.dialog.open(DepartmanDialogComponent, {
        data: {id, naziv, oznaka, fakultet}
      });
      dialogRef.componentInstance.flag = flag;
      if(flag === 1) {
        dialogRef.componentInstance.data.fakultet = this.selektovanFakultet;
      }
      dialogRef.afterClosed()
        .subscribe(result => {
          if(result === 1) {
            this.loadData();
          }
        })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}
