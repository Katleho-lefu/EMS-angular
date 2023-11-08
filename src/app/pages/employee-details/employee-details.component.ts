import { Component } from '@angular/core';
import { ActivatedRoute, Router,  ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {

  id: any;
  employee: any;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeById(this.id).subscribe((employee) => {
      this.employee = employee;
      console.log(this.employee)
    })
  }
}
