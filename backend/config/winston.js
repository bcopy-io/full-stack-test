//@ts-nocheck
import winston from 'winston';
// função salva todos os logs emitidos no arquivo registro.log e registroErros usando o comando *logger*

const { combine, timestamp, json, colorize, align } = winston.format;

const errorFilter = winston.format((info, opts) => {
  return info.level === 'error' ? info : false;
});

const infoFilter = winston.format((info, opts) => {
  return info.level === 'info' ? info : false;
});

const timezone = () => {
  return new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  });
}

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp({ format: timezone }), json()),
  transports: [
    new winston.transports.File({
      filename: 'registroErros.log',
      level: 'error',
      format: combine(errorFilter()),
    }),
    new winston.transports.File({
      filename: 'registroInfos.log',
      level: 'info',
      format: combine(infoFilter()),
    }),
    new winston.transports.Console()
  ],
});

logger.exitOnError = false;

export default logger