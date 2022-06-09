import { Request, Response } from 'express'
import { response } from '../helpers/helpers'
//@ts-ignore
import { reverseJoinDate } from '../helpers/helpers'
import { } from '../dto/objects/ObjectTypes'
import { updateTaskInDatabase } from '../database/databaseServices'
import logger from "../../config/winston"

const updateTask = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req?.params, { val } = req?.body;

    if (!id || !val || typeof id != 'string') return response(400, "Erro ao atualizar a tarefa, verifique se os valores foram enviados corretamente", true, {}, res);

    const checkKeys = Object.keys(val)

    if(!checkKeys.includes('task') && !checkKeys.includes('priority') && !checkKeys.includes('duedate')) return response(400, "Erro ao atualizar a tarefa, verifique os valores enviados.", true, {}, res);

    if (val?.priority) {

        const process = {
            'Baixa': 0,
            'Média': 1,
            'Alta': 2
        }
        //@ts-ignore
        val.priority = process[val?.priority]
    }

    if(val?.duedate){
      val.duedate = reverseJoinDate(val?.duedate)
    }
 
    if (Object.keys(val)?.length > 1) return response(400, "Erro ao atualizar a tarefa, foi enviado mais de um valor para ser atualizado.", true, {}, res);
    if (!Object.values(val)?.[0] && Object.values(val)?.[0] !== 0) return response(400, "Erro ao atualizar a tarefa, verifique os valores enviados.", true, {}, res);
    
    const updateTaskResult = await updateTaskInDatabase(id, val)

    if (!updateTaskResult) return response(500, "Houve um erro ao atualizar a tarefa. Contate o suporte.", false, {}, res);

    return response(200, "Tarefa atualizada com sucesso.", false, { status: 200 }, res);
}

export default updateTask