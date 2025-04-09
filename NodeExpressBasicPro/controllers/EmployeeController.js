const EmployeeModel = require("../models/Employee");

//Post - Create
const createEmployee = async (req, res) => {
  try {
    const { name, age, email, number, city } = req.body;
    const employee = new EmployeeModel({
      name,
      age,
      email,
      number,
      city,
    });
    await employee.save();
    res
      .status(200)
      .json({ message: "New Employee Created Successfull!", employee });
  } catch (err) {
    res.status(500).json({ message: "There is an Server Error" });
  }
};

//Get - Read
const readEmployee = async (req, res) => {
  try {
    const employee = await EmployeeModel.find();
    res.status(200).json({
      message: "All Employee Details",
      no_of_employee: employee.length,
      employee,
    });
  } catch (err) {
    console.log("There is an Error", err);
  }
};

//Get - One Account
const singleEmployee = async (req, res) => {
  try {
    const singleEmployee = await EmployeeModel.findById(req.params.id);
    if (!singleEmployee) {
      res.status(404).json({ message: "Employee Not found " });
    }
    res.status(200).json({ message: "Employee Details", singleEmployee });
  } catch (err) {
    console.log("There was an error", err);
  }
};

//Put - Update
const updateEmployee = async (req, res) => {
  try {
    const { name, age, email, number, city } = req.body;
    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        age,
        email,
        number,
        city,
      }
    );
    if (!updatedEmployee) {
      res.status(404).json({ message: "Employee not found" });
    }
    res
      .status(200)
      .json({ message: "Updated Employee Details", updatedEmployee });
  } catch (err) {
    res.status(500).json({ message: "There was an server Error :", err });
  }
};

//Delete 
const deleteEmployee = async (req, res) => {
    try{
        const deletedEmployee = await EmployeeModel.findByIdAndDelete(req.params.id)
        if(!deletedEmployee){
            res.status(404).json({ message: "Employee not found! "})
        }
        res.status(200).json({ message: "Employee Deleted Successfully!", deletedEmployee})
    }catch(err){
        res.status(500).json({ message: "There was an server Error :", err });
    }
};

module.exports = {
  createEmployee,
  readEmployee,
  singleEmployee,
  updateEmployee,
  deleteEmployee
};
