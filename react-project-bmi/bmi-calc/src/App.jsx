import "./App.css";
import React , {useState} from "react";


function App() {

  // making state of our application 
  const [weight , setWeight ] = useState(0);
  const [height , setHeight] = useState(0);

  const [bmi , setBmi] = useState('');
  const [message , setMessage] = useState('');

  // logic : 

  let calcBmi = (e) => {

    e.preventDefault();

    let weightNum = parseFloat(weight);
    let heightNum = parseFloat(height);

    if(weightNum === 0 || heightNum === 0)
      alert('enter valid weight or height')
    else 
    {
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      //

      if(bmi < 25 )
      {
        setMessage('you are underweight')
      }

      else if(bmi >= 25 && bmi < 30)
      {
        setMessage('you have healthy weight ')
      }

      else 
      {
        setMessage('you are overweight')
      }
    }
  }

  
    // reload logicc 

    let reload = () => {
      window.location.reload()
    }



  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calc</h2>
        <form action="" onSubmit={calcBmi}>
          <div>
            <label htmlFor="">Weight (ibs)</label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Height (in)</label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
    

          </div>
          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
