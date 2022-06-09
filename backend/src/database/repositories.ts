import mongoose from "mongoose"

const tasksEntity = new mongoose.Schema({
   task:String,
   priority:Number,
   duedate:String
})

const tasksRepository = mongoose.model('tasks', tasksEntity)

export {
    tasksRepository
}




