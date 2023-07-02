import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const Todo = () => {
  const [state, setState] = useState([]);
  const [edit,setEdit] = useState(false); // to check whether in edit mode or not
  const [editedIndex,setEditedindex] =  useState(0); //to place the updated value in crct place
  const [editedItem,setEditeditem] =  useState();  //to edit the value

useEffect(()=>{
  document.title='Todo React App';
})

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
      if(edit){
        setState((prevstate) => {
          const updatedState = [...prevstate];
          updatedState[editedIndex] = input; //update the new value 
          return updatedState;
        });
            setEdit(false);
            setEditedindex(0);
            setEditeditem('');  
      }
      
    else {
      setState((prevstate)=>[...prevstate,input]);
    }
    output.value = "";
    setEditeditem('');  
  }
  };

  const editItem = (item,index) =>{
    setEdit(true);
    setEditedindex(index);
    setEditeditem(item); //populate the input box, since the editeditem value has been changed
  }

  const removeItem = (index) => {
    setState((prevstate) => {
      const updatedState = prevstate.filter((item, i) => index !== i);
      return updatedState;
    });
  };

  return (
    <div className="container">
   <div className="row">
    <div className="col-md-4">
      </div>
      <div className="col-md-6">
      <h1>Todo-list</h1>
      <form>
        <input type="textarea" className='form-control form-style'value={editedItem} onChange={(e)=>setEditeditem(e.target.value)}/>
        <input type="submit" className="btn btn-primary submit" onClick={handleChange} value={edit?'Update':'Add'}/>
      </form>
      <ul> 
        {state.length>0 ? state.map((item, index) => (<li key={index}> 
          {item}
          
            <div className="remove_button">
            <button className="btn btn-secondary"
          onClick={()=>{
            editItem(item,index);
          }}>
            Edit</button>
            <button className="btn btn-danger"
              onClick={() => {
                removeItem(index);
              }}
            >
              Delete
            </button>
            </div>
          </li>
        )):<h3>No users found</h3>}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default Todo;
