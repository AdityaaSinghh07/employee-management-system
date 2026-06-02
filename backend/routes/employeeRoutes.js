const router = require("express").Router();

const auth = require("../middleware/authMiddleware");

const {
  getEmployees,
  createEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

router.get("/", auth, getEmployees);
router.post("/", auth, createEmployee);
router.delete("/:id", auth, deleteEmployee);

module.exports = router;
