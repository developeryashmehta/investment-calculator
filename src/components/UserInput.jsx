import React, { useState } from "react";

function UserInput({onChangeData, userInput}) {
  

  

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" min={0} value={userInput.initialInvestment} required onChange={(event) => onChangeData('initialInvestment', event.target.value )} />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" min={0} value={userInput.annualInvestment} required onChange={(event) => onChangeData('annualInvestment', event.target.value )}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" min={0} value={userInput.expectedReturn} required onChange={(event) => onChangeData('expectedReturn', event.target.value )}/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" min={0} value={userInput.duration} required onChange={(event) => onChangeData('duration', event.target.value )}/>
        </p>
      </div>
    </section>
  );
}

export default UserInput;
