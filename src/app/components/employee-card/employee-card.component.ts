import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IEmployee } from '../../interfaces/iemployee.interface';
import { RouterLink } from '@angular/router';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { EmployeesService } from '../../services/employees.service';



@Component({
  selector: 'app-employee-card',
  imports: [RouterLink,],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {

  @Input() myEmployee!: IEmployee;
  employeesServices = inject(EmployeesService);
  @Output() deleteItemEmit: EventEmitter<Boolean> = new EventEmitter();

  deleteEmployee(id: string) {
    toast(`Vas a borrar al empleado ${this.myEmployee.first_name} ${this.myEmployee.last_name}`,
      {
        action: {
          label: 'Aceptar',
          onClick: async () => {
            await this.employeesServices.delete(id)
            this.deleteItemEmit.emit(true)
          }
        }
      }
    );
  }
  delete(event: Boolean) {
    this.deleteItemEmit.emit(event)
  }

}
