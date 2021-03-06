import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map, every } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  studentList(){

    return this.http.get(this.apiUrl+'studentList').pipe(map((item) => {
         let newItem = item;
         newItem['isSelect'] == false;
         return newItem;

    }))

  }

  storeStudent(data){

    return this.http.post(this.apiUrl+'addStudent',data);
  }

  secondLargest(){

    return this.http.get(this.apiUrl+'secondLargest');
  }
}
