import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @ViewChild('f') studentFrom: NgForm;
  isSuccess: boolean = false;
  isError : boolean = false;
  isErrorValid: boolean = false;
  formValues: {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    pocket_money: number,
    age:number,
    city: string,
    state: string,
    zip_code: number,
    country: string
  }

  constructor(private service: StudentService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.formValues = this.studentFrom.value;
    this.service.storeStudent(this.formValues).subscribe(
      (data) => {
        this.isSuccess = true;
        this.studentFrom.reset();
        setTimeout(() => this.isSuccess = !this.isSuccess,3000);
      },
      (error) => {
        if(error.status == 500){
          this.isError = true;
          this.studentFrom.reset();
          setTimeout(() => this.isError = !this.isError,3000);
        }else {
          this.isErrorValid = true;
          this.studentFrom.reset();
          setTimeout(() => this.isErrorValid = !this.isErrorValid,3000);
        }

      }
    )
 }

 formReset(){
   this.studentFrom.reset();
 }

}
