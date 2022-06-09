const createInvoice = (req, res) => {
    const response = { message: "oi", error: false, data: {} };
    return res.status(400).json(response);
};
export default createInvoice;
