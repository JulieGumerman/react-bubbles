import React, { useState } from "react";
import { axiosWithAuth} from "../utils/axiosWithAuth";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [ state, setState ] = useState({ credentials: {username: "", password: ""}});

  const handleChange = event => {
    setState({credentials: {...state.credentials, [event.target.name]: event.target.value}});
  }

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/login", state.credentials)
      .then(res => {
        console.log(res.data.payload);
        localStorage.setItem("token", res.data.payload);
        console.log(state.credentials);

        //props.history.push("/bubbles");

      })


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
