import { startServer, stopServer } from './api'
import logger from '../config/winston' // irá registrar e exibir todos os logs usando a função *logger.*
import { startMongo, stopMongo } from './database/database'
 
const start = async () => {

  logger.info(`Process pid: ${process.pid}`)

  try {
    await startMongo()
    logger.info("Banco de dados conectado com sucesso.")
  } catch (err) {
    logger.error("Falha ao conectar-se ao banco de dados devido a " + err)
    return
  }

  try {
    startServer()
  } catch (err) {
    logger.error("Falha ao inicializar o servidor devido a " + err)
    return
  }
}

const stop = async () => {

  try {
    await stopMongo()
    logger.info("Banco de dados desconectado com sucesso.")
  } catch (err) {
    logger.error("Falha ao desconectar-se do banco de dados devido a " + err)
    return
  }

  try {
    stopServer()
    logger.info("Servidor desligado com sucesso.")
  } catch (err) {
    logger.error("Falha ao desligar o servidor devido a " + err)
    return
  }

}

const run = async () => {

  try {
    await start();
    ['SIGINT', 'SIGTERM', 'SIGQUIT'].map(signal =>
      process.on(signal, async () => {
        await stop()
        process.exit(0)
      }))

    logger.info("Aplicação iniciada com sucesso.")

  } catch (err) {
    logger.error("Falha ao iniciar a aplicação devido a " + err)
    process.exit(1)
  }
}

run()
