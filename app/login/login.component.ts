
// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login() {
    // Check if the user exists in local storage
    const userData = localStorage.getItem(this.username);
    if (userData) {
      const user = JSON.parse(userData);
      if (user.password === this.password) {
        // Store the logged-in user in local storage or session
        localStorage.setItem('currentUser', JSON.stringify(user));
        // Redirect to the home page or desired route
        this.router.navigate(['/home']);
      } else {
        this.error = 'Invalid username or password';
      }
    } else {
      this.error = 'User does not exist. Please sign up.';
    }
  }
}


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';
//   error: string = '';

//   constructor(private router: Router) {}

//   login() {
//   const user = { username: this.username };
//     localStorage.setItem('currentUser', JSON.stringify(user));
//     this.router.navigate(['/home']);
//   }

//   isValidForm() {
//     return this.username && this.password;
//   }
// }
