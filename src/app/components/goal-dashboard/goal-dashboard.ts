import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-goal-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goal-dashboard.html',
  styleUrl: './goal-dashboard.css'
})
export class GoalDashboard {
  goals: string[] = [];
  newGoalTitle: string = '';
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addGoal() {
    if (this.newGoalTitle.trim()) {
      this.goals.push(this.newGoalTitle.trim());
      this.newGoalTitle = '';
      this.showForm = false;
    }
  }
}
