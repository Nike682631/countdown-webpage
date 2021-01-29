import React, { useState } from "react";
import Timer from "./Timer";
function Jumbotron() {
  const [email, setEmail] = useState();
  return (
    <div className="jumbotron">
      <div>
        <div className="heading">We are launching in</div>
        <div className="description">
          A social betting network where you can follow tipsters, share and copy
          <br />
          bets from our community & friends.
          <br />
        </div>
        <Timer />
        <form
          onSubmit={(e) => {
            console.log("Thanks for visiting");
          }}
        >
          <input
            type="text"
            className="email"
            placeholder="Your email..."
            name="text"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button value="Submit" className="green-button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Jumbotron;
