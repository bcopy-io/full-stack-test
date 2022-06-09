import logger from '../../config/winston';
import { tasksRepository } from './repositories';
import { Task, TaskChange, PriorityChange, DateChange } from '../dto/objects/ObjectTypes';

const getTasksInDatabase = async (): Promise<Task[] | false> => {
  try {
    const tasks = await tasksRepository.find()
    return tasks

  } catch (err) {
    logger.error("ERROR##" + JSON.stringify(err))
    return false
  }
}

const deleteTaskInDatabase = async (id: string): Promise<boolean> => {

  if (!id || typeof id != 'string') return false;

  try {

    const deleteTask = await tasksRepository.deleteOne({ _id: id })

    if (!deleteTask?.deletedCount) return false

    return true

  } catch (err) {
    logger.error("ERROR##" + JSON.stringify(err))
    return false
  }

}

const createTaskInDatabase = async (newTask: Task): Promise<boolean> => {

  if (!newTask?.task || (!newTask?.priority && newTask?.priority !== 0) || !newTask?.duedate) return false;

  try {
    const newTsk = await tasksRepository.create(newTask)

    if (newTsk?.errors) return false;

    return true

  } catch (err) {
    logger.error("ERROR##" + JSON.stringify(err))
    return false
  }
}

const updateTaskInDatabase = async (id: string, change: TaskChange | PriorityChange | DateChange): Promise<boolean> => {

  if (!id || !change || typeof id != 'string') return false;

  const checkKeys = Object.keys(change)

  if (!checkKeys.includes('task') && !checkKeys.includes('priority') && !checkKeys.includes('duedate')) return false;
  if (Object.keys(change)?.length > 1) return false;
  if (!Object.values(change)?.[0] && Object.values(change)?.[0] !== 0) return false;

  try {
    const task = await tasksRepository.findOneAndUpdate(
      { _id: id },
      { $set: change },
      { returnOriginal: false }
    )
    //@ts-ignore
    if (task?.[checkKeys?.[0]] != change?.[checkKeys?.[0]]) return false;

    return true

  } catch (err) {
    logger.error("ERROR##" + JSON.stringify(err)
      + "ID##" + id)
  }
}

export {
  getTasksInDatabase,
  updateTaskInDatabase,
  createTaskInDatabase,
  deleteTaskInDatabase
}