import './App.css';
import MyNavbar from './MyNavbar/MyNavbar'
import FormInput from './FormInput/FormInput';
import {useState} from "react";


const App =() => {
  const [values,setvalues] = useState({
username:"",
email:"",
birthday:"",
password:"",
comfirmPassword:"",
  });
  const inputs =[{
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    label:"Username",
  },
  {
    id:2,
    name:"Email",
    type:"text",
    placeholder:"Email",
    label:"Email",
  },
  {
    id:3,
    name:"birthday",
    type:"text",
    placeholder:"birthday",
    label:"birthday",
  },
  {
    id:4,
    name:"password",
    type:"password",
    placeholder:"password",
    label:"password",
  },
  {
    id:5,
    name:"confirm Password",
    type:"password",
    placeholder:"confirm Password",
    label:"confirm Password",
  },
] ;
  const handlSubmit =(e)=>{
    e.preventDefault();   
  };
  const onchange =(e)=> {
    setvalues({...values, [e.target.name]: e.target.value});
  };
  return (
    <div>
      <MyNavbar/>
      <div  className="App">
      <form onSumbit={handlSubmit}>
<h1>Register</h1>
      {inputs.map ((input)=>(
      <FormInput key={input.id} {...input} value={values[input.name]} onchange={onchange}/>
      ))}
      <button>submit</button>
    
      </form>
      </div>
      
    </div>
  );
}

export default App;
