import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { About } from './components/About';
import { Address } from './components/Address';
import { Contacts } from './components/Contacts';
import { Mission } from './components/Mission';
import { Objectives } from './components/Objectives';
import { Vision } from './components/Vision';
import { Home } from './components/Home';
//import LoginForm from './components/Login';
import {Register} from './components/Register';
//import { Dashboard } from './components/Dashboard';
import HomeDash from './pages/HomeDash';
import Dash from './pages/Dash';
import Student from './pages/Student';
import Staff from './pages/Staff';
import Exams from './pages/Exams';
import FeePayment from './pages/FeePayment';
import TimeTables from './pages/TimeTables';
import { Login } from './components/Login';
import Reports from './pages/Reports'
//import "./App.css";

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">    
   
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contacts' element={<Contacts/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Mission' element={<Mission/>}/>
          <Route path='/Vision' element={<Vision/>}/>
          <Route path='/Objectives' element={<Objectives/>}/>
          <Route path='/Address' element={<Address/>}/>          
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          {<Route path='/pages/Dash' element={<Dash/>}/>}
          {<Route path='/pages/HomeDash' element={<HomeDash/>}/>}
          {<Route path='/pages/Student' element={<Student/>}/>}
          {<Route path='/pages/Staff' element={<Staff/>}/>}
          {<Route path='/pages/Exams' element={<Exams/>}/>}
          {<Route path='/pages/FeePayment' element={<FeePayment/>}/>}
          {<Route path='/pages/TimeTables' element={<TimeTables/>}/>}
          {<Route path='/pages/Reports' element={<Reports/>}/>}

        </Routes>
      </div>
    </div>
    

<MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3 bg-primary' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          CSE-HBatchY21 Cluster 3 Team 3
        </a>
      </div>
    </MDBFooter>
    </BrowserRouter>
  );
}

export default App;