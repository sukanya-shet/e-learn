import React from "react";

function PassReset() {
  return (
    <div className="login passreset">
      <form method="post">
        <h1>Reset Password</h1>
        <div
          align="center"
          style={{ color: "rgba(146, 146, 146,0.4)", marginTop: "20px" }}
        >
          <input
            className="form-comp"
            type="text"
            placeholder="Username"
            id="lname"
          />
          <input
            className="form-comp"
            type="password"
            placeholder="New Password"
            id="lpassword"
          />
          <input
            className="form-comp"
            type="password"
            placeholder="Confirm Password"
            id="lpassword"
          />

          <button className="reg_log_button" type="submit">
            Reset
          </button>
          <a
            align="center"
            href="#"
            style={{
              color: "rgb(58, 135, 155)",
              marginLeft: "10px",
              marginBottom: "20px"
            }}
          >
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default PassReset;
