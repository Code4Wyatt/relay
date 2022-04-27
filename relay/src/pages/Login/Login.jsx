import "./Login.scss";
import { LoginAuthAction } from "../../redux/actions/AuthAction";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Login = (props) => {
  const { login } = props;
  const { user } = props;
  const [loginState, setLoginState] = useState({});

  const navigate = useNavigate();

  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: "",
  });

  const loggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    const goToHome = () => navigate("/");
    if (loggedIn === true) {
      goToHome();
    }
  }, [navigate]);

  return (
    <>
      <div className="login__container">
        <h1>Relay.</h1>

        <div className="login__main">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              login(loginState, navigate, setErrorHandler);
              localStorage.setItem("email", event);
            }}
          >
            <div className="form-group">
              <label htmlFor="InputEmail">Email Address</label>
              <input
                type="email"
                className="form-control form-control-sm"
                onChange={(event) => {
                  const email = event.target.value;
                  setLoginState({ ...loginState, ...{ email } });
                }}
              />
            </div>
            <div className="form-group">
              <label for="InputPassword1">Password</label>
              <input
                type="password"
                className="form-control form-control-sm inputs"
                onChange={(event) => {
                  const password = event.target.value;
                  setLoginState({ ...loginState, ...{ password } });
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-danger btn-sm auth__submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
    return {
        user: state,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (loginState, history, setErrorHandler) => {
            dispatch(LoginAuthAction(loginState, history, setErrorHandler));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
