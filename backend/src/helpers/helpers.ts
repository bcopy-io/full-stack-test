import { ResponseType } from "../dto/returns/returnTypes"
import { Response } from 'express';
import logger from "../../config/winston";

const response = (statusNumber: number = 0, msg: string = 'mensagem vazia', log: boolean = false, data: any = {}, res: Response): Response => {
    // Todas as responses de requests deverão ser enviadas através dessa função
    const stringBody = JSON.stringify(data)

    if(log){
        if (statusNumber != 200) {
            logger.error(msg + ' ' + stringBody)
            data = { error: data }
        } else {
            logger.info(msg + ' ' + stringBody);
        }
    }else{
        if (statusNumber != 200) {
            data = { error: data }
        }
    }
   
    const resObject: ResponseType = { status: statusNumber, message: msg, error: statusNumber != 200? true:false, data: data };

    return res.status(statusNumber).json(resObject)
}

const delay = async (time = 1000) => new Promise((resolve) => setTimeout(resolve, time))

const reverseJoinDate = (date:string):String | false=>{

    if(!date || typeof date != 'string') return false

    const checkFormat1 = date?.split('-')?.[2]?.length == 4;
    const checkFormat2 = date?.split('/')?.[2]?.length == 4;

    if(checkFormat1){
        return date
    }

    if(checkFormat2){
        return date?.split('/').join('-')
    }
    
    let newDate = date?.split("-")

    if(newDate?.length < 3){
    
        newDate = date?.split("/")
        
        if(newDate?.length < 3) return false;
        
        return newDate?.reverse()?.join('-')
    }
  
      return newDate.reverse()?.join('-')

}

export {
    response,
    delay,
    reverseJoinDate
}