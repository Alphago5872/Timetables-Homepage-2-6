import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";
import AuthContext from "../Store/auth-context";
import Input from "../Input/Input";
import classes from "./Login.module.css";
import UserData from "../../../datas/UserData";
import { Link, Route, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    console.log(email, password);
    axios
      .post("https://apis.timetables.newton.ac.th/auth/signin", {
        email: email,
        password: password,
      })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        console.log(data)
        axios.get("https://apis.timetables.newton.ac.th/auth/getUserData", {
          auth: "B" + localStorage.getItem("token"),
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          label="E-Mail"
          type="email"
          value={email}
          required
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          label="Password"
          type="password"
          value={password}
          required
        />
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            // onClick={() => redirect("/")}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
