import React from  'react';
// import TopNav from './assets/Components/TopNav';
// import Login from './assets/Components/Login';
import './App.css'
import {Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App =() => {
  return (
    <div>
      {/* <TopNav/> */}
      <Outlet/>
    </div>
  );
}

export default App;
