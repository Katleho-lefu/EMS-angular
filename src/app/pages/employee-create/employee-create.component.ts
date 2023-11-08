import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from 'src/app/Interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent {

  employeeForm: FormGroup;

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      name: '',
      email: '',
      position: '',
      salary: '',
    } as Employee);

  }

  ngOnInit() {}

  createEmployee() {
    if (this.employeeForm.valid) {
      const formData = this.employeeForm.value;
      this.employeeService.createEmployee(formData).subscribe((response) => {
        console.log(response)
      });
    }
  }
}
