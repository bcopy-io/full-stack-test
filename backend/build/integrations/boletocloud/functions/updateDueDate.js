import { response } from "../../../helpers/helpers"; // sempre usar esta função para devolver responses
const updateDueDate = (req, res) => {
    const { invoiceId } = req.params;
    return response(200, invoiceId, true, {}, res);
};
export default updateDueDate;
