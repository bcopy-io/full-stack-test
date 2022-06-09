interface ResponseData {
    error?:string    
}

interface Task{
    task:string,
    priority:number,
    duedate:string
}

interface TaskChange{
    task:string
}

interface PriorityChange{
    priority:number
}

interface DateChange{
    duedate:string
}

export {
    ResponseData,
    Task,
    DateChange,
    PriorityChange,
    TaskChange
}