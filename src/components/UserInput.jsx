function UserInput({ onChange, userInput }) {
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
            onChange={(e) => onChange('initialInvestment', e.target.value)}
          />
        </div>
        <div className="mb-10">
          <label>Annual investment</label>
          <input
            type="number"
            id="annual-investment"
            value={userInput.annualInvestment}
            required
            onChange={(e) => onChange('annualInvestment', e.target.value)}
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
            onChange={(e) => onChange('expectedReturn', e.target.value)}
          />
        </div>
        <div className="mb-10">
          <label>Duration</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            required
            onChange={(e) => onChange('duration', e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

export default UserInput;
