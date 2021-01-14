function Login() {
  return (
    <div className="login">
      <form method="post" onSubmit={(e) => e.preventDefault()}>
        <h1>Login</h1>
        <input
          onChange={changeHandler}
          className="form-comp"
          type="text"
          placeholder="Username"
          name="lusername"
          minLength="2"
          id="lname"
          value={credentials.username}
        />

        <input
          onChange={changeHandler}
          className="form-comp"
          type="password"
          placeholder="Password"
          name="lpassword"
          id="lpassword"
          minLength="4"
          value={credentials.password}
        />

        <button
          onClick={LoginSubmit}
          className="reg_log_button"
          type="submit"
        >
          Login
        </button>
        <a
          align="center"
          href="/register"
          style={{
            color: "rgb(58, 135, 155)",
            marginLeft: "10px",
            marginBottom: "20px"
          }}
        >
          Forgot password?
        </a>
      </form>
    </div>
  );
}