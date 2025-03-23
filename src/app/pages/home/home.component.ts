import { Component, inject, Output, EventEmitter, Input } from '@angular/core';
import { IEmployee } from '../../interfaces/iemployee.interface';
import { EmployeesService } from '../../services/employees.service';
import { Iresponse } from '../../interfaces/iresponse.interface';
import { EmployeeCardComponent } from "../../components/employee-card/employee-card.component";


@Component({
  selector: 'app-home',
  imports: [EmployeeCardComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  arrEmployeesObservable: IEmployee[] = [];
  employeesServices = inject(EmployeesService);
  @Input() myEmployee!: IEmployee;
  @Output() deleteItemEmit: EventEmitter<boolean> = new EventEmitter();

  async ngOnInit() {
    this.employeesServices.getAllObservable().subscribe((data: Iresponse) => {
      this.arrEmployeesObservable = data.results
      console.log(this.arrEmployeesObservable)
    },
    )
  }

  delete(event: boolean) {
    this.deleteItemEmit.emit(event)
  }
}
