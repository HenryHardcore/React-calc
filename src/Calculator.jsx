import backspace from "./fotke/backspace.png";
import nature from "./fotke/nature.png";
import enlargement from "./fotke/enlargement.png";
import growth from "./fotke/growth.png";
import logarithm from "./fotke/logarithm.png";
import root from "./fotke/root.png";
import pi from "./fotke/pi.png";
import shrink from "./fotke/shrink.png";
import React, {useState, useEffect, useRef} from "react";


function Calculator() {
  const [display, setDisplay] = useState("");
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(false);

  

  function povecanje() {
    setFlag(prev => !prev);
  }

  useEffect(() => {
    
    const elements = document.querySelectorAll('.dodatak');
    elements.forEach(element => {
      element.style.display = flag ? 'none' : '';
    });

    const dugmad = document.querySelector('.dugmad');
    dugmad.style.gridTemplateColumns = flag ? 'repeat(4, 1fr)' : 'repeat(5, 1fr)';
    dugmad.style.gridTemplateRows = flag ? 'repeat(5, 1fr)' : 'repeat(6, 1fr)';
    
    const slika = document.querySelector(".motkica")
    slika.src = flag ? enlargement : shrink;
    
  }, [flag]);

function dodajZnak(znak) {
    if (display === "error" && (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", ")", "e", "pi", "sqrt("].includes(znak))) {
      if (znak === "e") {
        setDisplay(znak);
        setInput("Math.E");
        return;
      }
      else if (znak === "pi") {
        setDisplay(znak);
        setInput("Math.PI");
        return;
      }
      else if (znak === 'sqrt(') {
        setDisplay(znak);
        setInput("Math.sqrt(");
        return;
      }
      setDisplay(znak);
      setInput(znak);
      return;
    } 
    else if (display === "error") {
      setDisplay("");
      setInput("");
      return;
    }
    else if (["%", "*", "-", "+", "/", ".", "(", ")", "^", "log", "loge", "e", "pi", "^(-1)", "sqrt("].includes(znak)) {
      const lastChar = display.slice(-1);
      if ((znak === "*" || znak === "+" || znak === "-" || znak === "/" || znak === "%" || znak === "^" || znak === "^(-1)") && (lastChar === ")" || lastChar === "e" || lastChar === "pi")) {
        if (lastChar === ")") {
          if (znak === "%") {
            setInput(input + "*0.01");
            setDisplay(display + "*0.01");
            return;
          } 
          else if(znak === "^") {
            setDisplay(display + znak);
            setInput(input + "**");
            return;
          }
          else if(znak === "^(-1)") {
            setDisplay(display + znak);
            setInput(input + "**(-1)");
            return;
          }
          else {
            setDisplay(display + znak);
            setInput(input + znak);
            return;
          }
        }
        else if (lastChar === "e") {
          if (znak === "%") {
            setInput(input + "*0.01");
            setDisplay(display + "*0.01");
            return;
          } 
          else if(znak === "^") {
            setDisplay(display + znak);
            setInput(input + "**");
            return;
          }
          else if(znak === "^(-1)") {
            setDisplay(display + znak);
            setInput(input + "**(-1)");
            return;
          }
          else {
            setDisplay(display + znak);
            setInput(input + znak);
            return;
          }
        }
        else if (lastChar === "pi") {
          if (znak === "%") {
            setInput(input + "*0.01");
            setDisplay(display + "*0.01");
            return;
          } 
          else if(znak === "^") {
            setDisplay(display + znak);
            setInput(input + "**");
            return;
          }
          else if(znak === "^(-1)") {
            setDisplay(display + znak);
            setInput(input + "**(-1)");
            return;
          }
          else {
            setDisplay(display + znak);
            setInput(input + znak);
            return;
          }
        }
      }
      else if (znak === ")" && (lastChar === "e" || lastChar === "pi")) {
        setDisplay(display + znak);
        setInput(input + znak);
        return;
      }
      else if (znak === "e" && lastChar === "^") {
        setDisplay(display + znak);
        setInput(input + "Math.E");
        return;
      }
      else if (znak === "pi" && lastChar === "^") {
        setDisplay(display + znak);
        setInput(input + "Math.PI");
        return;
      }
      else if (znak === 'sqrt(' && lastChar === "^") {
        setDisplay(display + znak);
        setInput(input + "Math.sqrt(");
        return;
      }
      else if (znak === 'sqrt(' && lastChar === ")") {
        setDisplay(display + "*sqrt(");
        setInput(input + "*Math.sqrt(");
        return;
      }
      else if (znak === "(" && lastChar === "^") {
        setDisplay(display + znak);
        setInput(input + znak);
        return;
      }
      else if (lastChar === "") {
        if (znak === "(" || znak === ")" || znak === "log" || znak === "loge" || znak === "e" || znak === "pi" || znak === "sqrt(") {
          if (znak === "log") {
            setDisplay(display + "log(");
            setInput(input + "Math.log10(");
            return;
          }
          else if (znak === "loge") {
            setDisplay(display + "ln(");
            setInput(input + "Math.log(");
            return
          }
          else if (znak === "e") {
            setDisplay(display + "e");
            setInput(input + "Math.E");
            return
          }
          else if (znak === "pi") {
            setDisplay(display + znak);
            setInput(input + "Math.PI");
            return
          }
          else if (znak === "sqrt(") {
            setDisplay(display + znak);
            setInput(input + "Math.sqrt(");
            return
          }
          setDisplay(display + znak);
          setInput(input + znak);
          return;
        }
      }
      else if (znak === "log" && (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "(")) {
        setDisplay(display + "log(");
        setInput(input + "Math.log10(");
        return;
      }
      else if (znak === "loge" && (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "(")) {
        setDisplay(display + "ln(");
        setInput(input + "Math.log(");
        return;
      }
      else if (znak === "e" && (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "(")) {
        setDisplay(display + "e");
        setInput(input + "Math.E");
        return;
      }
      else if (znak === "pi" && (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "(")) {
        setDisplay(display + znak);
        setInput(input + "Math.PI");
        return;
      }
      else if (znak === "sqrt(" && (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "(")) {
        setDisplay(display + "sqrt(");
        setInput(input + "Math.sqrt(");
        return;
      }
      else if (znak === "(" && (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/")) {
        setDisplay(display + znak);
        setInput(input + znak);
        return;
      }
      else if (["%", "*", "-", "+", "/", ".", "^", "e",].includes(lastChar)) {
        
        setDisplay(display.slice(0, -1) + znak);
        if (lastChar === "^") {
          if (znak === "%") {
            setInput(input.slice(0, -2) + "*0.01");
            setDisplay(display.slice(0, -1) + "*0.01");
            return;
          } 
          else if(znak === "^") {
            setInput(input.slice(0, -2) + "**");
            return;
          }
          else if (znak === "loge") {
            setInput(input.slice(0, -2) + "Math.log(");
            setDisplay(display.slice(0, -1) + "ln(");
            return;
          }
          else if (znak === "log") {
            setInput(input.slice(0, -2) + "Math.log10(");
            setDisplay(display.slice(0, -1) + "log(");
            return;
          }
          else if(znak === "e") {
            setInput(input.slice(0, -2) + "Math.E");
            setDisplay(display.slice(0, -1) + "e");
            return;
          }
          else if(znak === "pi") {
            setInput(input.slice(0, -2) + "Math.PI");
            setDisplay(display.slice(0, -1) + znak);
            return;
          }
          else if(znak === "^(-1)") {
            setInput(input.slice(0, -2) + "**(-1)");
            setDisplay(display.slice(0, -1) + "^(-1)");
            return;
          }
          else {
            setInput(input.slice(0, -2) + znak);
            return;
          }
        }
        if (znak === "%") {
          setInput(input.slice(0, -1) + "*0.01");
          setDisplay(display.slice(0, -1) + "*0.01");
          return;
        } 
        else if(znak === "^") {
          setInput(input.slice(0, -1) + "**");
          return;
        }
        else if (znak === "loge") {
          setInput(input.slice(0, -1) + "Math.log(");
          setDisplay(display.slice(0, -1) + "ln(");
          return;
        }
        else if (znak === "log") {
          setInput(input.slice(0, -1) + "Math.log10(");
          setDisplay(display.slice(0, -1) + "log(");
          return;
        }
        else if(znak === "e") {
          setInput(input.slice(0, -1) + "Math.E");
          setDisplay(display.slice(0, -1) + "e");
          return;
        }
        else if(znak === "pi") {
          setInput(input.slice(0, -1) + "Math.PI");
          setDisplay(display.slice(0, -1) + znak);
          return;
        }
        else if(znak === "^(-1)") {
          setInput(input.slice(0, -1) + "**(-1)");
          setDisplay(display.slice(0, -1) + "^(-1)");
          return;
        }
        
        else {
          setInput(input.slice(0, -1) + znak);
          return;
        }
        
      } 
      else {
        
        if (znak === "%") {
          setDisplay(display + "*0.01");
          setInput(input + "*0.01");
          return;
        } 
        else if(znak === "^") {
          setDisplay(display + znak);
          setInput(input + "**");
          return;
        }
        else if(znak === "log") {
          setDisplay(display + "*log(");
          setInput(input + "*Math.log10(");
          return;
        }
        else if(znak === "loge") {
          setDisplay(display + "*ln(");
          setInput(input + "*Math.log(");
          return;
        }
        else if(znak === "e") {
          setInput(input + "*Math.E");
          setDisplay(display + "*e");
          return;
        }
        else if(znak === "pi") {
          setInput(input + "*Math.PI");
          setDisplay(display + "*pi");
          return;
        }
        else if(znak === "^(-1)") {
          setInput(input + "**(-1)");
          setDisplay(display + "^(-1)");
          return;
        }
        else if(znak === "sqrt(") {
          setInput(input + "*Math.sqrt(");
          setDisplay(display + "*sqrt(");
          return;
        }
        else {
          setDisplay(display + znak);
          setInput(input + znak);
          return;
        }
      }
    } 
    else {
      setDisplay(display + znak);
      setInput(input + znak);
      return;
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


  function rezultat(novi) {
    const expression = novi ? novi : input;
    
    if (expression === "") return;

    try {
      const result = eval(expression)
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
            <button className="dodatak" onClick={ () => dodajZnak('^')}>
              <img src={growth} className="fotkica"/>
            </button>
            <button className="dodatak" onClick={ () => dodajZnak('log')}>
              <img src={logarithm} className="fotkica"/>
            </button>
            <button className="dodatak" onClick={ () => dodajZnak('loge')}>ln</button>
            <button className="dodatak" onClick={ () => dodajZnak('(')}>(</button>
            <button className="dodatak" onClick={ () => dodajZnak(')')}>)</button>
            <button className="dodatak" onClick={ () => dodajZnak('sqrt(')}>
              <img src={root} className="fotkica"/>
            </button>
            <button onClick={obrisiSkroz}>AC</button>
            <button onClick={obrisiJedan}>
              <img src={backspace} className="fotkica"/>
            </button>
            <button onClick={ () => dodajZnak('%')}>%</button>
            <button onClick={ () => dodajZnak('/')}>/</button>
            <button className="dodatak factorial">hidden easter egg for you </button>
            <button onClick={ () => dodajZnak('7')}>7</button>
            <button onClick={ () => dodajZnak('8')}>8</button>
            <button onClick={ () => dodajZnak('9')}>9</button>
            <button onClick={ () => dodajZnak('*')}>
              <img src={nature} className="fotkica"/>
            </button>
            <button className="dodatak" onClick={ () => dodajZnak(`^(-1)`)}>1 / x</button>
            <button onClick={ () => dodajZnak('5')}>5</button>
            <button onClick={ () => dodajZnak('4')}>4</button>
            <button onClick={ () => dodajZnak('6')}>6</button>
            <button onClick={ () => dodajZnak('-')}>-</button>
            <button className="dodatak" onClick={ () => dodajZnak('pi')}>
              <img src={pi} className="fotkica"/>
            </button>
            <button onClick={ () => dodajZnak('1')}>1</button>
            <button onClick={ () => dodajZnak('2')}>2</button>
            <button onClick={ () => dodajZnak('3')}>3</button>
            <button onClick={ () => dodajZnak('+')}>+</button>
            <button className="dodatak" onClick={ () => dodajZnak('e')}>e</button>
            <button onClick={povecanje}>
              <img src={enlargement} className="fotkica motkica"/>
            </button>
            <button onClick={ () => dodajZnak('0')}>0</button>
            <button onClick={ () => dodajZnak('.')}>.</button>
            <button onClick={() => rezultat()}>=</button>
          </div>
        </div>
  </div>)
}

export default Calculator