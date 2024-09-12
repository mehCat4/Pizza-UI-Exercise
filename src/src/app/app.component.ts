import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Pizza Builder';

  //Stepper Form Builder
  private _formBuilder = inject(FormBuilder);

  chooseCrustGroup = this._formBuilder.group({
    crustCtrl: ['', Validators.required],
  });

  chooseToppingsGroup = this._formBuilder.group({
    toppingCtrl: ['', Validators.required],
  });

  isLinear = false;
}
