import { useState } from 'react';

function UserInput() {
  // TODO: Add validation
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <div className="mb-10">
          <label>Initial investment</label>
          <input
            type="number"
            id="initial-investment"
            value={userInput.initialInvestment}
            required
            onChange={(e) => handleChange('initialInvestment', e.target.value)}
          />
        </div>
        <div className="mb-10">
          <label>Annual investment</label>
          <input
            type="number"
            id="annual-investment"
            value={userInput.annualInvestment}
            required
            onChange={(e) => handleChange('annualInvestment', e.target.value)}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="mb-10">
          <label>Expected return</label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            required
            onChange={(e) => handleChange('expectedReturn', e.target.value)}
          />
        </div>
        <div className="mb-10">
          <label>Duration</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            required
            onChange={(e) => handleChange('duration', e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

export default UserInput;
