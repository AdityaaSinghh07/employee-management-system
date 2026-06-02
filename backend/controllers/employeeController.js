const { Employee, Department } = require("../models");

exports.getEmployees = async (req, res) => {
  const employees = await Employee.findAll({
    include: Department,
  });

  res.json(employees);
};

exports.createEmployee = async (req, res) => {
  const employee = await Employee.create(req.body);

  res.status(201).json(employee);
};

exports.deleteEmployee = async (req, res) => {
  await Employee.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json({
    message: "Deleted",
  });
};
