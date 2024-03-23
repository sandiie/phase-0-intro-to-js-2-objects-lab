

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  
  const  employee = {
    name: 'Sandie',
    role: 'Developer'
  };
  
  console.log(employee); 
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'role', 'Product Manager');
  
  console.log(employee); // After update
  // Sample employee object
 employee = {
    name: 'Jackie Lisa',
    age: 30,
    position: 'Developer'
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    return {
      ...employee,
      [key]: value 
    };
  }
  
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'position', 'Senior Developer');
  console.log(updatedEmployee); 

  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  