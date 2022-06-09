import { Request, Response } from 'express'
import { response } from '../helpers/helpers'
//@ts-ignore
import { delay } from '../helpers/helpers'
import {  } from '../dto/objects/ObjectTypes'
import { getTasksInDatabase } from '../database/databaseServices'
import logger from "../../config/winston"

const getTasks = async (req: Request, res: Response): Promise<Response> => {

    const tasks = await getTasksInDatabase()

    if(!tasks) return response(500, "Falha ao recuperar as tarefas. Contate o suporte", true, {}, res);

    return response(200, "Tarefas enviadas com sucesso.", false, tasks, res);
}

export default getTasks