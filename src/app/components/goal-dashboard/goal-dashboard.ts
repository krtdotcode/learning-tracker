import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Goal } from '../../models/goal.model';

@Component({
  selector: 'app-goal-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goal-dashboard.html',
  styleUrl: './goal-dashboard.css'
})
export class GoalDashboard {
  goals: Goal[] = [];
  newGoalTitle: string = '';
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addGoal() {
    if (this.newGoalTitle.trim()) {
      const newGoal: Goal = {
        id: Date.now(), // Simple unique ID
        title: this.newGoalTitle.trim(),
        isCompleted: false,
        dateCreated: new Date().toISOString()
      };
      this.goals.push(newGoal);
      this.newGoalTitle = '';
      this.showForm = false;
    }
  }

}
