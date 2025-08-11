export interface Goal {
    id: number;              // Unique identifier
    title: string;
    description?: string;    // Optional
    deadline?: string;       // Format: yyyy-mm-dd
    isCompleted: boolean;
    dateCreated: string;
}
