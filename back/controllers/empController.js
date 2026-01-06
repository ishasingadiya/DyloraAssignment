const Employee = require("../models/employee");

exports.createEmployee = async (req, res) => {
  const emp = await Employee.create(req.body);
  res.json(emp);
};

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

exports.updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,     // employee ID from URL
      req.body,          // new data
      { new: true }      // return updated record
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(updatedEmployee);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findOneAndDelete({ empId: req.params.id });
  res.json({ message: "Employee Deleted" });
};
