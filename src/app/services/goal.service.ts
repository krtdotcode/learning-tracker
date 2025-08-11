import { Injectable } from '@angular/core';
import { Goal } from '../models/goal.model';

@Injectable({
    providedIn: 'root'
})
export class GoalService {
    private goals: Goal[] = [];

    getGoals(): Goal[] {
        return this.goals;
    }

    addGoal(goal: Partial<Goal>): void {
        const newGoal: Goal = {
        id: Date.now(), // Unique number
        title: goal.title || '',
        description: goal.description || '',
        deadline: goal.deadline ? new Date(goal.deadline) : new Date(),
        isCompleted: false,
        dateCreated: new Date()
        };
        this.goals.push(newGoal);
    }

    removeGoal(id: number): void {
        this.goals = this.goals.filter(goal => goal.id !== id);
    }
}
