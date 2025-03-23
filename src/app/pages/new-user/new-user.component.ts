import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IEmployee } from '../../interfaces/iemployee.interface';

@Component({
  selector: 'app-new-user',
  imports: [FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  getDataForm(form: IEmployee) {
    console.log(form)
  }
}
