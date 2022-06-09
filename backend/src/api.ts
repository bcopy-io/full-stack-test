//@ts-ignore
import logger from "../config/winston"
import express from "express"
import cors from "cors"
//@ts-ignore
import * as config from "../config/environments.json"
import getTasks from "./controllers/getTasks"
import updateTask from "./controllers/updateTask"
import createTask from "./controllers/createTask"
import deleteTask from "./controllers/deleteTask"


const api = express();
const apiPort = config.default.default.port

let server: any;

const startServer = () => {
  api.use(express.json({ limit: '100mb' }))
  api.use(express.urlencoded({ extended: true, limit: '100mb' }))
  api.use(cors({origin: true, credentials: false}));

  api.get('/tasks', cors(), getTasks)
  api.put('/task/:id',cors(), updateTask)
  api.post('/task',cors(),createTask)
  api.delete('/task/:id',cors(),deleteTask)
  
  try {
    server = api.listen(apiPort, () => logger.info(`Integration online, port: ${apiPort}`))
  } catch (err) {
    logger.error("O servidor não pode ser iniciado devido a " + err)
    return
  }

}

const stopServer = () => {
  server.close((error: any) => {
    if (error) {
      throw error
    }
  })
}

export {
  startServer,
  stopServer
}
