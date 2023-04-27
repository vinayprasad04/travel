import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logins } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isValid } = useSelector((state) => state.users);

  const Navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await Logins(email, password);
      if (res?.data.token) {
        localStorage.setItem("token", res?.data.token);
        dispatch({ type: "login", payload: res?.data });
        dispatch({ type: "load", payload: res?.data });
        swal({
          icon: "success",
          text: "Login Successfully",
          type: "success",
        }).then(function () {
          navigate("/");
        });
      } else {
        swal({
          icon: "error",
          text: "Invalid Credintials",
          type: "error",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isValid) {
      Navigate("/");
    }
  }, [Navigate, isValid]);

  return (
    <div className="login">
      <div className="wrap">
        <h4 style={{ marginBottom: "0.5rem" }}>Login</h4>
        <div className="form-group">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter Your Register Email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <center>
          <Link
            style={{ fontSize: "0.9rem", color: "silver", marginTop: "0.8rem" }}
            to="/register"
          >
            Don't have an Account ? Create Account
          </Link>
        </center>
        <button onClick={handleSubmit}>
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
