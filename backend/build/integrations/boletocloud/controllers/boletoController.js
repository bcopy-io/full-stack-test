import express from "express";
import createInvoice from "../functions/createInvoice";
import getPaymentsByDate from "../functions/getPaymentsByDate";
import cancelInvoice from "../functions/cancelInvoice";
const router = express.Router();
router.post("/boletos", [
    createInvoice
]);
router.get("/boletos/payments", [
    getPaymentsByDate
]);
router.delete("/boletos/:invoiceId", [
    cancelInvoice
]);
export default router;
