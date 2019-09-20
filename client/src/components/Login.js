import React, { useState } from "react";
import { axiosWithAuth} from "../utils/axiosWithAuth";

const Login = props => {

  const [ state, setState ] = useState({ credentials: {username: "", password: ""}});

  const handleChange = event => {
    setState({credentials: {...state.credentials, [event.target.name]: event.target.value}});
  }

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/login", state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch(err => console.log(err));

  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="name" value={state.credentials.username} onChange={handleChange}/>
        <input type="text" name="password" placeholder="password" value={state.credentials.password} onChange={handleChange}/>
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
