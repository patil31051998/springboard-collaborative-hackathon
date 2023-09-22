import React from 'react';
import CalendarView from '../../components/calendarView';
import { getScheduledTasks } from '../../services';
import { useGlobalContext } from '../../services/context/globalContext';
import { ScheduledTasks, ScheduleTaskResponse } from '../../types/task';

export default function UserCalendar () {
    const {userDetails} = useGlobalContext();
    const [tasks, setTasks] = React.useState<ScheduledTasks[] | undefined>()

 React.useEffect(() =>{
    if(userDetails) {
        getScheduledTasks(userDetails?.userType, userDetails?.userId).then((tasks: ScheduleTaskResponse[]) => {
            const convertedTasks = tasks.map(task =>({title: `${task.description} [${task.beneficiaryName}]` , start: new Date(task.startTime), end: new Date(task.endTime)}));
            setTasks(convertedTasks)
        })
    }
    
 },[userDetails?.userId])
    return <CalendarView tasks={tasks}/>
}