import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentListApi, List, StudentListModify } from '../models/student-model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


  constructor(private service: StudentService ) { }

  check: boolean = false;
  studentList: List[];
  loader: boolean = true;
  singleStudent: boolean = false;
  selectStudentData: List[] = [];
  isPrime:boolean = false;
  click: boolean = false;
  secondStudent: List;

  checkStu(){
    this.check = true;
  }

  checkIdValidity(id){
    if(id == 1 ){
      return true;
    }
    for(var i = 2;i<=id;i++){
      if(id % i ==0){
        break;
      }
    }
    if(i==id){
      return true;
    }else {
      return false;
    }
  }

  checkPrime(id,data){
    this.click = true;
    let valid = this.checkIdValidity(id);
    if(valid){
    this.isPrime = true;
    this.singleStudent = true;
    let student = this.studentList.find(item => item.id === id);
    this.selectStudentData.push(student);
  }
  }

  checkPrimeAll(){
     alert("world");
  }

  ngOnInit(): void {

    this.service.studentList().subscribe(
      (data: StudentListApi) => {
        console.log(data);
        this.loader = false;
        this.studentList = data.payload;
        this.studentList.forEach((item) => item['isSelect'] = false);
      },
      (error) => {
        console.log(error);
      }
    )

    this.service.secondLargest().subscribe(
      (data: StudentListApi) => {
        console.log(data);
        this.secondStudent = data.payload[0];

      },
      (error) => {
        console.log(error);
      }
    )

  }

}
