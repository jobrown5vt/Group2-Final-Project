import React from 'react';
import Table from 'react-bootstrap/Table';
import Header from './Header';


const LeaderBoard = () => {
  return (
    <>
    <Header/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>High Score</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Username</td>
          <td>15</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Second user</td>
          <td>12</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>5</td>
        </tr>
        
      </tbody>
    </Table>
    
    </>
  );
};
//add click event to link and inside event handler clear the user session and redirect to page. 
export default LeaderBoard;