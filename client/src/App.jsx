import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Employer from './routes/Employer';
import Contact from './routes/Contact';
import Application from './routes/Application';
import JobForm from './routes/JobForm';
import JobListApplicant from './routes/JobListApplicant';
import JobListUser from './routes/JobListUser';
import JobUpdate from './routes/JobUpdate';
import LoginReg from './routes/LoginReg';
import Logout from './routes/Logout';



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Employer" element={<Employer />} />
          <Route path="/Job" element={<JobListApplicant/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Login" element={<LoginReg />} />
          <Route path="/Jobprime" element={<JobListUser />} />
          <Route path="/Jobprime/edit/:id" element={<JobUpdate />} />
          <Route path="/User" element={<JobForm />} />
          <Route path="/Application" element={<Application />} />
          <Route path="/Logout" element={<Logout/>} />
        </Routes>
    </div>
  );
}

export default App;
