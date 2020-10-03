import React from "react";
import "./app.scss";

function App() {
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(e, null, 2));
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="box-text">
          <p>Accenture</p>

          <fieldset>
            <input type="text" onKeyDown={handleKeyDown} />
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default App;
