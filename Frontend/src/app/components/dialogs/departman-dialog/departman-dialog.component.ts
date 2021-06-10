import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Departman } from 'src/app/models/Departman/departman';
import { DepartmanService } from 'src/app/services/departman.service';

@Component({
  selector: 'app-departman-dialog',
  templateUrl: './departman-dialog.component.html',
  styleUrls: ['./departman-dialog.component.css']
})
export class DepartmanDialogComponent implements OnInit {

  public flag: number;
  ids: any;
  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<DepartmanDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Departman,
              public departmanService: DepartmanService) { }

  ngOnInit() {
  }

  public add(): void{
    this.departmanService.addDepartman(this.data)
      .subscribe(() => {
        this.snackBar.open('Uspesno dodat departman', 'U redu', {
          duration: 2500
        })
      }),
      (error: Error) => {
        console.log(error.name+ ' ' + error.message);
        this.snackBar.open('Dogodila se greska', 'Zatvori', {
          duration: 1500
        })
      };
  }

  public update(): void {
    this.departmanService.updateDepartman(this.data)
    .subscribe(() => {
      this.snackBar.open('Uspesno modifikovan departman', 'U redu', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name+ ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Zatvori', {
        duration: 1500
      })
    };
  }

  public delete(): void {
    this.departmanService.deleteDepartman(this.data.id)
    .subscribe(() => {
      this.snackBar.open('Uspesno obrisan departman', 'U redu', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name+ ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Zatvori', {
        duration: 1500
      })
    };
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Zatvori', {
      duration: 1500
    })
  }

}
