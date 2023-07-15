const employee = {
  name: "John",
};

// updateEmployeeWithKeyAndValue(employee, key, value)
// 1) returns an employee with the original key value pairs and the new key value pair
// 2) it does not modify the original employee, but rather returns a clone with the new data
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObj = {
    ...employee,
    [key]: value,
  };
  return newObj;
}

// 1) destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
// 2) updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// deleteFromEmployeeByKey(employee, key)
// 1) deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
// 2) does not modify the original employee (it is non-destructive)
function deleteFromEmployeeByKey(employee, key) {
  const newObj = { ...employee };
  delete newObj[key];
  return newObj;
}

// destructivelyDeleteFromEmployeeByKey(employee, key)
// 1) returns employee without the deleted key/value pair
// 2) modifies the original employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
