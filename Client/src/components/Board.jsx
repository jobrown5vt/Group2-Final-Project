






function generateKeypad() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  // Above we create the letters for our board

  return (
    <section className="container-fluid keys ">
      <div className="row">
        <div className="keypad ">
          {letters.split("").map((letter, index) => (
            
            <button
            className="key"
              key={index}
              value={letter}
              //onClick={}
              // disabled={this.state.guessed.has(letter)}
            >
              {letter}
            </button>
            
          ))}
        </div>
      </div>
    </section>
    // Above, we map through the letters to create a keyboard.
  );
}

export default generateKeypad;

// Above is the component for our keyboardd