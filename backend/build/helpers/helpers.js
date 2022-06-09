import logger from "../../config/winston";
const response = (statusNumber, msg, error, body, res) => {
    // Todas as responses de requests deverão ser enviadas através dessa função
    error ? logger.error(msg) : logger.info(msg);
    const object = { message: msg, error: error, data: body };
    return res.status(statusNumber).json(object);
};
export { response };
