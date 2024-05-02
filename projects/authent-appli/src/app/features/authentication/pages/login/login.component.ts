import { Component, inject } from '@angular/core';
import { LoginWithFormComponent } from '../../components/login-with-form/login-with-form.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AuthenticationApplication } from '../../services/authentication.application';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginWithFormComponent, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoading = inject(AuthenticationApplication).isLoading;
}
