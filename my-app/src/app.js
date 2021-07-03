  
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Navbar}  from 'react-bootstrap';
import ToDo from './components/todo/todo.js';
import LoginContext from "./components/contex/auth";
import Login from './components/login';
// import  {Footer}  from 'react-bootstrap';
// import  Pagination  from './components/contex/pagination';
export default function App () {
 
    return (
      
      <>
 <LoginContext>
 <Login />
       <Navbar bg="primary" variant="dark">
    <Navbar.Brand className="ml-1" href="#home">Home</Navbar.Brand>
  </Navbar>
        <ToDo  />


        <Navbar bg="primary" variant="dark">
    <Navbar.Brand >&copy; ToDo 2021</Navbar.Brand>
  </Navbar>
  </LoginContext>
  </>
      
 
    
    );
  
}
