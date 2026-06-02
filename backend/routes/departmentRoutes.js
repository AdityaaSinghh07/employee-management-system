const router = require("express").Router();

const auth = require("../middleware/authMiddleware");

const {
  getDepartments,
  createDepartment,
} = require("../controllers/departmentController");

router.get("/", auth, getDepartments);
router.post("/", auth, createDepartment);

module.exports = router;
