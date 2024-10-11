import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  login = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Form is invalid!';
      return;
    }

    const { username, email } = this.loginForm.value;

    if (username === 'keyur' && email === 'k@example.com') {
      this.login = true;
      this.errorMessage = null;
    } else {
      this.login = false;
      this.errorMessage = 'Invalid username or email!';
    }
  }
}
