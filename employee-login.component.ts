import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-employee-login',
  imports: [],
  templateUrl: './employee-login.component.html',
  styleUrl: './employee-login.component.css'
})
export class EmployeeLoginComponent {
  constructor(private router: Router) {
  }
  goToPath(path:string) {
    
    this.router.navigateByUrl(path);
  }
}
