import { Component, inject, Input, EventEmitter, Output } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { IEmployee } from '../../interfaces/iemployee.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-user',
  imports: [RouterLink,],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent {
  @Input() idEmployee: string = "";
  employee!: IEmployee;
  service = inject(EmployeesService);


  async ngOnInit() {
    let id = (this.idEmployee);
    try {
      this.employee = await this.service.getById(id)
      console.log(this.employee)
    } catch (error) {
      console.log(error);
    }
  }


}
