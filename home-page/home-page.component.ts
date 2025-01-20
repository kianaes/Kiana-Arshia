import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { EmployeeLoginComponent } from '../employee-login/employee-login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  standalone:true,
  selector: 'app-home-page',
  imports: [ RouterOutlet,StudentLoginComponent ,RouterModule, EmployeeLoginComponent,RegisterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  currentUrl: string = '';
  constructor(private router: Router,private activatedRoute: ActivatedRoute) {
  }
  goToPath(path:string) {
    
    this.router.navigateByUrl(path);
  }
}
