import React from  'react';
import {Outlet} from 'react-router-dom';


const App =() => {
  return (
    <div>
      
      <main>
        <Outlet />
      </main>
     
    </div>
  );
}

// Above, we use Outlet to render our routes through App

export default App;
