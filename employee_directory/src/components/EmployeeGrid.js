import React from "react";
import { Table } from 'react-bootstrap';

const useSortableData = (employees, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...employees];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [employees, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { employees: sortedItems, requestSort, sortConfig };
};

const EmployeeGrid = (props) => {
  const { employees } = useSortableData(props.employees);


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Image</th>
          <th>Occupation</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => {
          return (
            <tr>
              <td>{employee.id}</td>
              <td><img src={employee.image} alt="employee_picture"></img></td>
              <td>{employee.occupation}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

export default EmployeeGrid;