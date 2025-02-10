import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-signinf',
  templateUrl: './signinf.component.html',
  styleUrls: ['./signinf.component.css']
})
export class SigninfComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthentificationService, private router: Router) {}

  login(): void {
    this.authService.authenticateUser({ email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          if (response.errorMessage) {
            console.error('Login failed:', response.errorMessage);
            // Handle login error gracefully (e.g., display an error message to the user)
            this.handleError(response.errorMessage);
          } else {
            console.log('Login successful', response);
            this.authService.saveTokens(response); // Save tokens to localStorage
            
            // Redirect based on role
            if (response.role === 'ADMIN') {
              this.router.navigate(['/admin/dashboard']);
            } else if (response.role === 'USER') {
              this.router.navigate(['/home']);
            } else {
              // Handle unknown role
              console.error('Unknown role:', response.role);
            }
          }
        },
        error: (error) => {
          console.error('Login failed with unexpected error:', error);
          // Handle unexpected error scenarios (e.g., network issues)
          this.handleUnexpectedError(error);
        }
      });
  }
  
  handleError(error: any): void {
    // Implement error handling logic for login errors (e.g., display user-friendly message)
    console.error('Login error:', error.message || error); // Extract error message if available
  
    // Get a reference to your error message element (replace with your actual selector)
    const errorMessageElement = document.getElementById('login-error-message');
  
    if (errorMessageElement) {
      // Set the error message content (sanitize if necessary)
      errorMessageElement.textContent = error.message || 'Wrong password or email.';
  
      // Optionally, show the error message element (adjust CSS for visibility)
      errorMessageElement.classList.remove('hidden'); // Replace 'hidden' with your actual hidden class
    } else {
      console.warn('Error message element not found. Consider adding one to your page.');
    }
  }
  
  handleUnexpectedError(error: any): void {
    // Implement error handling logic for unexpected errors (e.g., network issues)
    console.error('Unexpected login error:', error);
    // You could display a generic error message to the user here or redirect them to a dedicated error page
  }
}
