import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { Departman } from 'src/app/models/Departman/departman';
import { Status } from 'src/app/models/Status/status';
import { Student } from 'src/app/models/Student/student';
import { StudentService } from 'src/app/services/student.service';
import { StudentDialogComponent } from '../dialogs/student-dialog/student-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  displayedColumns = ['id', 'ime', 'prezime', 'brojIndeksa', 'status', 'departman', 'actions'];
  dataSource: MatTableDataSource<Student>;
  studentSubscription: Subscription;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


  constructor(public studentService: StudentService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.studentSubscription.unsubscribe();
  }

  public loadData() {
    this.studentSubscription = this.studentService.getAllStudents()
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }),
      (error: Error) => {
        console.log(error.name+ ' ' + error.message);
      }
  }

  public openDialog(flag: number, id?: number, ime?: string, prezime?: string, brojIndeksa?: string, status?: Status, departman?: Departman) {
    const dialogRef = this.dialog.open(StudentDialogComponent,
      {data: {id, ime, prezime, brojIndeksa, status, departman}});
      dialogRef.componentInstance.flag = flag;

      dialogRef.afterClosed().subscribe(result => {
        if(result == 1) {
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
