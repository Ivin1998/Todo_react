import { useState } from "react";
import Swal from "sweetalert2";

const Todo = () => {
  const [state, setState] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const output = e.target.previousSibling;
    const input = output.value;
    if (input === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please give a valid input!",
      });
    } else {
      setState((prevstate) => [...prevstate, input]);
      output.value = "";
    }
  };

  const removeItem = (index) => {
    setState((prevstate) => {
      const updatedState = prevstate.filter((item, i) => index !== i);
      return updatedState;
    });
  };

  return (
    <div>
      <h1>Todo-list</h1>
      <form>
        <input type="text" />
        <input type="submit" onClick={handleChange} value="Add" />
      </form>
      <ol>
        {state.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => {
                removeItem(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
