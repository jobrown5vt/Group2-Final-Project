import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import myImage from "./imageFolder/stickGuy.png";

const Login = () => {
  return (
    <>
      <header className="Greeting">
        <h1 className="welcome">Welcome to Hangman!</h1>
      </header>
      <div>
        <h4>His life is in your hands!</h4>
        <div>
          {" "}
          <img src={myImage} alt="stick figure holding the letter H" width="300px" height="400px"/>
          <div>
            {" "}
            <p>It's  a game of guess or DEATH</p>
            <br />
            <p>can YOU save HIM?</p>
          </div>
        </div>
      </div>
      <body>
        <Form>
          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </body>
    </>
  );
};
//add click event to link and inside event handler clear the user session and redirect to page.
export default Login;
