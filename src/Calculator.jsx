import backspace from "./fotke/backspace.png";
import nature from "./fotke/nature.png";
import enlargement from "./fotke/enlargement.png";
import growth from "./fotke/growth.png";
import logarithm from "./fotke/logarithm.png";
import root from "./fotke/root.png";
import pi from "./fotke/pi.png";
import React, {useState, useEffect, useRef} from "react";


function Calculator() {
  const [display, setDisplay] = useState("");
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(true);

  function povecanje() {
    if(flag) {
      const elements = document.querySelectorAll('.dodatak');
      elements.forEach(element => {
      element.style.display =  'none';
    });
    const dugmad = document.querySelector('.dugmad');
    
    dugmad.style.gridTemplateColumns = 'repeat(4, 1fr)';
    dugmad.style.gridTemplateRows = 'repeat(3, 1fr)';
    setFlag(prev => !prev);
    return;
    }
    
    setFlag(prev => !prev);
  }

function dodajZnak(znak) {
    if (display === "error") {
      setDisplay(znak);
      setInput(znak === "%" ? "*0.01" : znak);
    } else if (["%", "*", "-", "+", "/", "."].includes(znak)) {
      const lastChar = display.slice(-1);
      if (lastChar === "") {
        
      }
      else if (["%", "*", "-", "+", "/", "."].includes(lastChar)) {
        
        setDisplay(display.slice(0, -1) + znak);
        if (znak === "%") {
          setInput(input.slice(0, -1) + "*0.01");
          calculateResult(input.slice(0, -1) + "*0.01");
        } else {
          setInput(input.slice(0, -1) + znak);
        }
      } else {
        
        if (znak === "%") {
          setDisplay(display + znak);
          setInput(input + "*0.01");
          calculateResult(input + "*0.01");
        } else {
          setDisplay(display + znak);
          setInput(input + znak);
        }
      }
    } else {

      setDisplay(display + znak);
      setInput(input + znak);
    }
  }


  function obrisiSkroz() {
    setDisplay("");
    setInput("");
  }


  function obrisiJedan() {
    if (display === "error") {
      clearAll();
    } else {
      setDisplay(display.slice(0, -1));
      setInput(input.slice(0, -1));
    }
  }


  function rezultat() {
    const expression = input;
    if (expression === "") return;

    try {
      const result = eval(expression);
      setDisplay(result.toString());
      setInput(result.toString());
    } catch {
      setDisplay("error");
      setInput("");
    }
  }


  return(
  <div className="veliki">
        <div className="glavni-div">
          <div className="display">
            <p className="prikaz">{display}</p>
            <p className="neprikaz"></p>
          </div>
          <div className="dugmad">
            <button className="dodatak">
              <img src={growth} className="fotkica"/>
            </button>
            <button className="dodatak">
              <img src={logarithm} className="fotkica"/>
            </button>
            <button className="dodatak">ln</button>
            <button className="dodatak">(</button>
            <button className="dodatak">)</button>
            <button className="dodatak">
              <img src={root} className="fotkica"/>
            </button>
            <button onClick={obrisiSkroz}>AC</button>
            <button onClick={obrisiJedan}>
              <img src={backspace} className="fotkica"/>
            </button>
            <button onClick={ () => dodajZnak('%')}>%</button>
            <button onClick={ () => dodajZnak('/')}>/</button>
            <button className="dodatak">!</button>
            <button onClick={ () => dodajZnak('7')}>7</button>
            <button onClick={ () => dodajZnak('8')}>8</button>
            <button onClick={ () => dodajZnak('9')}>9</button>
            <button onClick={ () => dodajZnak('*')}>
              <img src={nature} className="fotkica"/>
            </button>
            <button className="dodatak">1 / x</button>
            <button onClick={ () => dodajZnak('5')}>5</button>
            <button onClick={ () => dodajZnak('4')}>4</button>
            <button onClick={ () => dodajZnak('6')}>6</button>
            <button onClick={ () => dodajZnak('-')}>-</button>
            <button className="dodatak">
              <img src={pi} className="fotkica"/>
            </button>
            <button onClick={ () => dodajZnak('1')}>1</button>
            <button onClick={ () => dodajZnak('2')}>2</button>
            <button onClick={ () => dodajZnak('3')}>3</button>
            <button onClick={ () => dodajZnak('+')}>+</button>
            <button className="dodatak">e</button>
            <button onClick={povecanje}>
              <img src={enlargement} className="fotkica"/>
            </button>
            <button onClick={ () => dodajZnak('0')}>0</button>
            <button onClick={ () => dodajZnak('.')}>.</button>
            <button onClick={rezultat}>=</button>
          </div>
        </div>
  </div>)
}

export default Calculator