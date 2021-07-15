import React from "react"

function LogError() {
  
  function handleClick() {
    location.reload();
  }

  return (
    <div id="error">
      <div>
        <label class="col-form-label col-form-label-lg mt-4" for="inputLarge">
          <h2>Uncorrect pass!</h2>
        </label>
      </div>
      <button type="button" class="btn btn-success btn-form"
        onClick={handleClick}>Reload page</button>
    </div>
  );
}

export default LogError;