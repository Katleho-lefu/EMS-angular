import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.employeeService.getAllEmployees().subscribe((employee)=>{
      this.employees = employee;
      console.log(this.employees)
    })
  }

  // viewEmployee(id:any){

  // }

  edit(id:any){

  }

  delete(id:any){
    this.employeeService.deleteEmployee(id).subscribe((employee)=>{
      console.log(employee);
    })
  }

  goTo(){
    this.router.navigate(['employee-create']);
  }
}
