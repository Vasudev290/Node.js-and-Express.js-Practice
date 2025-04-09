const express = require('express');
const employeeRoutes = require('../controllers/EmployeeController')

const route = express.Router();

route.post('/newEmployee', employeeRoutes.createEmployee)

route.get('/allEmployee', employeeRoutes.readEmployee)

route.get('/singleEmployee/:id', employeeRoutes.singleEmployee)

route.put('/updateEmployee/:id', employeeRoutes.updateEmployee)

route.delete('/deleteEmp/:id', employeeRoutes.deleteEmployee)

module.exports = route;