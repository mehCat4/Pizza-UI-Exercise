import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { group } from '@angular/animations';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatGridListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Pizza Builder';
  duplicatePizzaName = 'Flavor Town';
  
  //set lists
  pizzaSizes: string[] = ['Small 10"', 'Large 14"', 'X-Large 18"'];
  crustTypes: string[] = ['Thin', 'Pan', 'Deep Dish'];
  toppings: string[] = ['Mushrooms', 'Pepperonis', 'Olives', 'Pineapples', 'Onions', 'Sausages'];

  //Stepper Form Builder
  private _formBuilder = inject(FormBuilder);

  chooseSizeGroup = this._formBuilder.group({
    sizeCtrl: ['', Validators.required],
  });

  chooseCrustGroup = this._formBuilder.group({
    crustCtrl: ['', Validators.required],
  });

  chooseToppingsGroup = this._formBuilder.group({
    toppingCtrl: ['', Validators.required],
  });

  chooseNameGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required],
  });

  isLinear = false;
}
