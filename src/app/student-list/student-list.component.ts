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
  studentList: StudentListModify[];
  loader: boolean = true;
  singleStudent: boolean = false;
  selectStudentData: List[] = [];
  isPrime:boolean = false;
  click: boolean = false;
  secondStudent: List[];
  allCheck: boolean =false;
  studentListlength: boolean = false;

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

  checkPrime(id){
    this.click = true;
    let valid = this.checkIdValidity(id);
    if(valid){
    let std = this.studentList.find((item) => item.id === id);
    std.isSelect = true;
    this.isPrime = true;
    this.singleStudent = true;
    let student = this.studentList.find(item => item.id === id);
    this.selectStudentData.push(student);
  }else {
    let std = this.studentList.find((item) => item.id === id);
    std.isSelect = false;
  }
  }

  checkPrimeAll(){
    if(this.allCheck){
    this.studentList.forEach((item,index,array) => {
       let check = this.checkIdValidity(item.id)
       if(check){
           this.studentList[index].isSelect = true;
       }
    })
  }else{
    this.studentList.forEach((item) => {
        item.isSelect = false;
    })
  }
  }

  ngOnInit(): void {

    this.service.studentList().subscribe(
      (data: StudentListApi) => {
        this.loader = false;
        this.studentList = data.payload;
        if(data.payload.length){
          this.studentListlength = true;
        }
      },
      (error) => {
        console.log(error);
      }
    )

    this.service.secondLargest().subscribe(
      (data: StudentListApi) => {
        console.log(data);
        this.secondStudent = data.payload;

      },
      (error) => {
        console.log(error);
      }
    )

  }

}
