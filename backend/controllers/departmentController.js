const { Department } = require("../models");

exports.getDepartments = async (req, res) => {
  const departments =
    await Department.findAll();

  res.json(departments);
};

exports.createDepartment = async (
  req,
  res
) => {
  const department =
    await Department.create(req.body);

  res.status(201).json(department);
};
