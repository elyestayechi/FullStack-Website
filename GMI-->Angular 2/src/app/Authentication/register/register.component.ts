import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Properties for form fields
  nomUser: string = '';
  prenomUser: string = '';
  emailUser: string = '';
  mdpUser: string = '';
  numUser: string = '';
  adresseUser: string = '';

  // Additional properties for confirm password and error handling
  confirmPassword: string = '';
  passwordsMatch: boolean = true;

  // ViewChild for accessing the form
  @ViewChild('registerForm') registerForm!: NgForm;

  constructor(private authService: AuthentificationService, private router: Router) {}

  // Register function triggered on form submission
  register(): void {
    // Check if the form is valid
    if (this.registerForm.invalid) {
      console.error('Registration failed: Form is invalid.');
      return;
    }

    // Check if passwords match
    if (this.confirmPassword !== this.mdpUser) {
      this.passwordsMatch = false;
      return;
    }
    
    // Prepare registration request payload
    const registerRequest = {
      nomUser: this.nomUser,
      prenomUser: this.prenomUser,
      emailUser: this.emailUser,
      mdpUser: this.mdpUser,
      role: 'USER',
      numUser: this.numUser,
      adresseUser: this.adresseUser
    };

    // Call registration service
    this.authService.registerUser(registerRequest)
      .subscribe({
        next: (response) => {
          if (response.errorMessage) {
            console.error('Registration failed:', response.errorMessage);
            this.handleError(response.errorMessage);
          } else {
            console.log('Registration successful', response);
            this.router.navigate(['/signin']);
          }
        },
        error: (error) => {
          console.error('Registration failed with unexpected error:', error);
          this.handleUnexpectedError(error);
        }
      });
  }
  
  // Handle registration errors
  handleError(error: any): void {
    console.error('Registration error:', error.message || error);
    // Handle error logic here
  }
  
  // Handle unexpected errors
  handleUnexpectedError(error: any): void {
    console.error('Unexpected registration error:', error);
    // Handle unexpected error logic here
  }
}
