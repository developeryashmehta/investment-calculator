import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import ShowCalculation from './components/ShowCalculation';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((previousUserInput) => {
        return {
            ...previousUserInput,
            [inputIdentifier]: +newValue
        }
    });
  }

  const inputIsValid = userInput.duration >=1 && userInput.duration <= 100;
  return (
    <>
      <Header />
      <UserInput onChangeData={handleChange} userInput={userInput} />
      {inputIsValid && <ShowCalculation data={userInput}/>}
      {!inputIsValid && <p className='center'>Please enter duration between 1-100.</p>}
    </>
  );
}

export default App;
