import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees () {
    return [
      {"id": 1, "name": "Andrew", "age": 30},
      {"id": 2, "name": "Brandon", "age": 34},
      {"id": 3, "name": "Chris", "age": 40},
      {"id": 4, "name": "Hari", "age": 39}

    ];

   }
}
