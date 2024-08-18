import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import LeaderBoard from './pages/LeaderBoard.jsx';
import Home from './pages/home.jsx';
import Hangman from './pages/Hangman.jsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const router = createBrowserRouter([
{
  element: <App/>,
  // errorElement: <Error/>,
  children : [
  {
    index:true,
    element:<Home/>,
  },
  {
    path:'Hangman',
    element:<Hangman/>,
  },
  {
    path: '/LeaderBoard',
    element:<LeaderBoard/>,
  },
],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>

);