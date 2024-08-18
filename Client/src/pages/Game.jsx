import Keypad from "../components/Board";
import Header from "../components/Header";


function HangManGame() {
  return (



    <div className="container-fluid backGround ">
      <section className="row">
        <Header/>
        <div className="winnerDiv">
          {/*<h1 className="win"> WINNER! 🏆 </h1>*/}
          <h1 className="win">Sorry You Lose 😞 </h1>
        </div>

        <div>
          <h4 className="highScore">HighScore:</h4>
        </div>

        <div className="gameDisplay ">
          <img
            className="gameStart "
            src="/src/assets/0.jpg"
            alt="HangMan Start Picture"
          />
        </div>

        <section className="lineArea">
          <div className="lines">
            <span>
              {" "}
              <h4 className="letter">a</h4>{" "}
            </span>

            <hr className="line" />
          </div>

          {/*<div className="lines">
          <span> <h4 className="letter">a</h4> </span>
         
          <hr  className="line"/>
        </div>

        <div className="lines">
          <span> <h4 className="letter">a</h4> </span>
         
          <hr  className="line"/>
        </div>

        <div className="lines">
          <span> <h4 className="letter">a</h4> </span>
         
          <hr  className="line"/>
        </div> */}
        </section>

        <div>
          <Keypad />
        </div>
      </section>
    </div>
  );
}

export default HangManGame;

// Above is our game page with our keypad imported. Later notes will be added here 
