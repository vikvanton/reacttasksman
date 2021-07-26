import React from "react"

export default function LogError() {
  
  function handleClick() {
    location.reload();
  }

  return (
    <header id="error">
      <div>
        <label class="col-form-label col-form-label-lg mt-4" for="inputLarge">
          <h2>Uncorrect pass!</h2>
        </label>
      </div>
      <button type="button" class="btn btn-success btn-form"
        onClick={handleClick}>Reload page</button>
    </header>
  );
}