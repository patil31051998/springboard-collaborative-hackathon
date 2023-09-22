export type ScheduledTasks= {
    title: string;
    start: Date;
    end: Date;
    color?: string;
}

export type ScheduleTaskResponse = {
    description: string;
    beneficiaryName: string;
    startTime: number;
    endTime: number;
}