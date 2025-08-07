import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoalDashboard } from './components/goal-dashboard/goal-dashboard'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GoalDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learning-tracker');
}
