import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-array';

  students = [
    {name: "Tushar", score: 150},
    {name: "Sharanam", score: 149},
    {name: "Srushti", score: 148},
    ]

    formData: any = {};
    updateDataArr: any;

    addData(){
      this.students.push(this.formData);
      this.formData = {};
    }

    deleteData(i: number){
      this.students.splice(i, 1);
    }

    updateData(i: number){
      this.updateDataArr = this.students[i];
    }
}


