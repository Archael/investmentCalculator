function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <div className="mb-10">
          <label>Initial investment</label>
          <input type="number" id="initial-investment" />
        </div>
        <div className="mb-10">
          <label>Annual investment</label>
          <input type="number" id="annual-investment" />
        </div>
      </div>
      <div className="input-group">
        <div className="mb-10">
          <label>Expected return</label>
          <input type="number" id="expected-return" />
        </div>
        <div className="mb-10">
          <label>Duration</label>
          <input type="number" id="duration" />
        </div>
      </div>
    </section>
  );
}

export default UserInput;
