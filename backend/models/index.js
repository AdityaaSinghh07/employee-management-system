const User = require("./User");
const Employee = require("./Employee");
const Department = require("./Department");

Department.hasMany(Employee, {
  foreignKey: "departmentId",
});

Employee.belongsTo(Department, {
  foreignKey: "departmentId",
});

module.exports = {
  User,
  Employee,
  Department,
};
