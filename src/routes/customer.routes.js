import { Router } from "express";
import {
  createCustomers,
  deleteCustomer,
  editCustomer,
  renderCustomers,
  updateCustomer,
  search,
} from "../controllers/customerController.js";
const router = Router();

router.get("/", renderCustomers);
router.post("/add", createCustomers);
router.get("/update/:id", editCustomer);
router.post("/update/:id", updateCustomer);
router.get("/delete/:id", deleteCustomer);
router.get("/search", search);

export default router;
