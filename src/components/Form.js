import React, { useState } from "react";

function Form(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formValues = {
      name: value,
      complete: false
    };
    onSubmit(formValues);
    setValue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputbox"
          placeholder="Enter Todo Task..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
