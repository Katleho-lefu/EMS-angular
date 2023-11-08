import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/Interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {

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
