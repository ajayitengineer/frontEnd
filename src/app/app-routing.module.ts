import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'student-form', component: StudentFormComponent },
  { path: 'students-list', component: StudentListComponent },
  { path: '' ,component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
