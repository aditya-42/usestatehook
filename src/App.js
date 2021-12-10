import React, { useState } from "react";

const App = (props) => {
  const [textToShow, setText] = useState("");

  const changeTextHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <>
     
      <div className="container">
        <div className="row">
          <div class="col-6 col-offset-3">
            <div className="input-group input-group-sm">
              <input
                type="text"
                onChange={changeTextHandler}
                placeholder="Type Anything"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <hr />
        <h2>{textToShow}</h2>   
      </div>
    </>
  );
};

export default App;
