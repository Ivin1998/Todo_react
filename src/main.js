import { useState } from "react";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


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
    
   <div className="row">
    <div className="col-md-4">
      </div>
      <div className="col-md-6">
      <h1>Todo-list</h1>
      <form>
        <input type="text" className='form-control form-style'/>
        <input type="submit" className="btn btn-primary submit" onClick={handleChange} value="Add" />
      </form>
      <ul>
        {state.map((item, index) => (<li key={index}> {item}
            <div className="remove_button">
            <button className="btn btn-danger"
              onClick={() => {
                removeItem(index);
              }}
            >
              Delete
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Todo;
