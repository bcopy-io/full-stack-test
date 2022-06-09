import { response } from "../../../helpers/helpers"; // sempre usar esta função para devolver responses
const getPaymentsByDate = (req, res) => {
    let msg = "aa";
    let er = false;
    let data = {};
    const math = Math.random();
    if (math < 0.5) {
        msg = "bbb";
        er = true;
        data = { body: 1 };
        return response(200, msg, er, data, res);
    }
    return response(200, msg, er, data, res);
};
export default getPaymentsByDate;
