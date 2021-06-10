import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Departman } from 'src/app/models/Departman/departman';
import { Status } from 'src/app/models/Status/status';
import { Student } from 'src/app/models/Student/student';
import { DepartmanService } from 'src/app/services/departman.service';
import { StatusService } from 'src/app/services/status.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {

  statusi: Status[];
  departmani: Departman[];
  public flag: number;
  statusSubscription: Subscription;
  departmanSubscription: Subscription;


  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<StudentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Student,
              public studentService: StudentService,
              public statusService: StatusService,
              public departmanService: DepartmanService) { }

  ngOnInit(): void {
    this.statusSubscription = this.statusService.getAllStatus()
      .subscribe(statusi => {
        this.statusi = statusi;
      }),
      (error: Error) => {
        console.log(error.name+ ' ' + error.message);
      }
    this.departmanSubscription = this.departmanService.getAllDepartmans()
      .subscribe(departmani => {
        this.departmani = departmani;
      }),
      (error: Error) => {
        console.log(error.name+ ' ' + error.message);
      }
  }

  ngOnDestroy(): void {
    this.statusSubscription.unsubscribe();
    this.departmanSubscription.unsubscribe();
  }

  compareTo(a, b) {
    return a.id == b.id;
  }

  public add(): void {
    this.studentService.addStudent(this.data)
      .subscribe(() => {
        this.snackBar.open('Uspesno dodat student', 'U redu', {
          duration: 2500
        })
      }),
      (error: Error) => {
        console.log(error.name + '-->' + error.message)
        this.snackBar.open('Dogodila se greska, pokusajte ponovo! ', 'Zatvori', {
          duration: 2500
        });
      };
  }

  public update(): void {
    this.studentService.updateStudent(this.data)
    .subscribe(() => {
      this.snackBar.open('Uspesno modifikovan student' +this.data.id,  'U redu', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + '-->' + error.message)
      this.snackBar.open('Dogodila se greska, pokusajte ponovo! ', 'Zatvori', {
        duration: 2500
      });
    };
  }

  public delete(): void {
    this.studentService.deleteStudent(this.data.id)
    .subscribe(() => {
      this.snackBar.open('Uspesno obrisan student' +this.data.id,  'U redu', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + '-->' + error.message)
      this.snackBar.open('Dogodila se greska, pokusajte ponovo! ', 'Zatvori', {
        duration: 2500
      });
    };
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmena!', 'U redu', {
      duration: 1000
    });
  }

}
