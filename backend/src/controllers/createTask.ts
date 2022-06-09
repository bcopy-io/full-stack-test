import { Request, Response } from 'express'
import { response } from '../helpers/helpers'
//@ts-ignore
import { reverseJoinDate } from '../helpers/helpers'
import { } from '../dto/objects/ObjectTypes'
import { createTaskInDatabase } from '../database/databaseServices'
import logger from "../../config/winston"

const createTask = async (req: Request, res: Response): Promise<Response> => {

    let { newtask, priority, duedate } = req?.body

    if (!newtask || !priority || !duedate) return response(400, "Erro ao criar tarefa, verifique os valores enviados", true, {}, res);

    const process = {
        'Baixa': 0,
        'Média': 1,
        'Alta': 2
    }

    duedate = reverseJoinDate(duedate)

    if (!duedate) return response(400, "Erro ao criar tarefa, não foi possíve processar a data enviada", true, {}, res);
    //@ts-ignore
    const tasks = await createTaskInDatabase({ task: newtask, priority: process?.[priority], duedate })

    if (!tasks) return response(500, "Erro ao criar tarefa. Contate o suporte.", true, {}, res);

    return response(200, "Planos e valores enviados com sucesso", false, tasks, res);
}

export default createTask