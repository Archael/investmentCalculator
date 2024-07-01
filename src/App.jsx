import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  // TODO: Add validation
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        // plus in front of newValue converts the string to a number
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <div className="flex-center">
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p>Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </div>
  );
}

export default App;
