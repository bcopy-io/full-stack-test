import { response } from "../../../helpers/helpers"; // sempre usar esta função para devolver responses
const cancelInvoice = (req, res) => {
    const { invoiceId } = req.params;
    return response(200, invoiceId, true, {}, res);
};
export default cancelInvoice;
