export interface Goal {
    id: number;
    title: string;
    description?: string;
    deadline: Date;
    isCompleted: boolean;
    dateCreated: Date;
}
