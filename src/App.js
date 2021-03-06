import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeGrid from './components/EmployeeGrid';
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
      <SearchBar onSearch={searchHandler} search={searchVal}/>
      <EmployeeGrid employees = {searchResult}/>
    </div>
  )

}



export default App;
