export type ScheduledTasks= {
    title: string;
    start: Date;
    end: Date
}

export type ScheduleTaskResponse = {
    description: string;
    beneficiaryName: string;
    startTime: number;
    endTime: number;
}