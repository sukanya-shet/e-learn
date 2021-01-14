function Register() {
  return (
    <div className="register">
      <form method="post" onSubmit={(event) => event.preventDefault()}>
        <h1>Register</h1>
        
        <input
          className="form-comp"
          type="text"
          placeholder="Username"
          id="rname"
        />
        <input
          className="form-comp"
          type="text"
          placeholder="Email"
          id="rmail"
        />

        <input
          className="form-comp"
          type="password"
          placeholder="Password"
          id="rpassword"
        />

        <input
          className="form-comp"
          type="password"
          placeholder="Confirm Password"
          id="rpassword2"
        />

        <button className="reg_log_button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}