import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-student-login',
  imports: [],
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent {
  constructor(private router: Router) {
  }
  goToPath(path:string) {
    
    this.router.navigateByUrl(path);
  }
}
