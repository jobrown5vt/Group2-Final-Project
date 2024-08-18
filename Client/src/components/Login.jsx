import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import myImage from "../assets/stickGuy.png";

const Login = () => {
  return (
    <>
      <section className="container-fluid  backGround ">
        <div className="row">
          <header className="Greeting">
            <h1 className="welcome">Welcome to Hangman!</h1>
          </header>


          <div className="welcome">
            <div className="welcomeImage">
              <img
                src={myImage}
                alt="stick figure holding the letter H"
                width="250px"
                height="250px"
              />
            </div>
            <div className="welcomeText">
              <p>It's a game of guess or DEATH</p>
              <br />
              <p>can YOU save HIM?</p>
            </div>
          </div>



          <section>
            <Form className="centerForm">

              <div className="centerSection col-12 ">
              <Form.Group className=" mb-3 maxW  col-11"  controlId="formUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control className="mb-3  maxW"  type="username" placeholder="Enter Username" />
              </Form.Group>
              </div>


              <div className="centerSection col-12"  >
              <Form.Group className="mb-3 maxW col-11" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              </div>

              <div className="centerSection col-12"  >
              <Form.Group className="mb-3 maxW col-11" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              </div>

              <div className="formbtn">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              </div>
            </Form>
          </section>
        </div>
      </section>
    </>
  );

  // Above is our form component that we use from react bootstrap to create.
};
//add click event to link and inside event handler clear the user session and redirect to page.
export default Login;
