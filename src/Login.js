import React from "react";
import Title from "./components/Title";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    setUserEmail
  } = props;

  return (
    <div>
      <nav className="hero">
        <Title />
      </nav>
      <section className="login">
        <div className="loginContainer">
          {hasAccount ? (
            <>
              <h1 style={{ textAlign: "center", color: "white" }}>Login</h1>
            </>
          ) : (
            <>
              <h1 style={{ textAlign: "center", color: "white" }}>
                Create Account
              </h1>
            </>
          )}
          <label>Username</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setUserEmail(e.target.value);
            }}
          />
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button className="button-login" onClick={handleLogin}>
                  Sign in
                </button>
                <p>
                  Don't have an account ?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button className="button-login" onClick={handleSignup}>
                  Sign up
                </button>
                <p>
                  Have an account ?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign in
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
