import { Request, Response } from 'express'
import { response } from '../helpers/helpers'
//@ts-ignore
import { } from '../helpers/helpers'
import { } from '../dto/objects/ObjectTypes'
import { deleteTaskInDatabase } from '../database/databaseServices'
import logger from "../../config/winston"

const deleteTask = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req?.params

    if (!id || typeof id != 'string') return response(400, "Erro ao deletar tarefa, o id da tarefa não foi enviado", false, req?.params, res);

    const deleteResult = await deleteTaskInDatabase(id)

    if (!deleteResult) return response(500, "Erro ao deletar tarefa. Contate o suporte.", true, req?.params, res);

    return response(200, "Planos e valores enviados com sucesso", false, "aa", res);
}

export default deleteTask