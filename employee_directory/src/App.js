import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Hdeader';
import EmployeeTable from './components/EmbloyeeTable';
import Employees from "./employeeList.json";

const App = () => {

  const [employeeList] = React.useState(Employees);
  const [searchVal, setSearchVal] = React.useState('');

  const searchHandler = (event) => {
    setSearchVal(event.target.value);
  }

  const searchResult = employeeList.filter(result => {
    const searchByName = result.name.toLowerCase().includes(searchVal.toLowerCase());
    const searchByOccu = result.occupation.toLowerCase().includes(searchVal.toLowerCase());
    const searchByEmail = result.email.toLowerCase().includes(searchVal.toLowerCase());
    const searchByPhone = result.phone.toLowerCase().includes(searchVal.toLowerCase());
    return searchByName || searchByOccu || searchByEmail || searchByPhone ;
  })

  return (
    <div>
      <Header/>
      <TableTitle onSearch={searchHandler} search={searchVal}/>
      <EmployeeTable employeeList = {searchResult}/>
    </div>
  )

}



export default App;
