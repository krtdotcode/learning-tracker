import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Goal } from '../../models/goal.model';
import { GoalService } from '../../services/goal.service';

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
  newGoalDescription: string = '';
  newGoalDeadline: string = '';
  showForm: boolean = false;

  constructor(private goalService: GoalService) {}

  ngOnInit() {
    this.goals = this.goalService.getGoals();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addGoal() {
    if (this.newGoalTitle.trim()) {
      this.goalService.addGoal({
        title: this.newGoalTitle.trim(),
        deadline: this.newGoalDeadline ? new Date(this.newGoalDeadline) : new Date()
      });
      this.newGoalTitle = '';
      this.newGoalDeadline = '';
      this.showForm = false;
    }
  }

  removeGoal(id: number) {
    this.goalService.removeGoal(id);
    this.goals = this.goalService.getGoals();
  }
}
