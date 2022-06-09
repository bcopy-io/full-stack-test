import express from "express";
import createInvoice from "../functions/createInvoice";
const router = express.Router();
router.post("/boletos", [
    createInvoice
]);
router.get("/boletos/payments");
export default router;
