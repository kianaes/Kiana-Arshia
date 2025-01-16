import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { GradesComponent } from '../grades/grades.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, GradesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {
  }
  goToPath(path: string) {

    this.router.navigateByUrl(path);
  }
}
