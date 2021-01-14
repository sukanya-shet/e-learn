import React from "react";
import "./reg_log.css";

function RegLog() {
  const [isLogin, setLogin] = React.useState(true);
  const [isReg, setReg] = React.useState(false);
  const [role,setRole] = React.useState(false);

  function showLogin() {
    setLogin(true);
    setReg(false);
  }
  function showReg() {
    setReg(true);
    setLogin(false);
  }
  function selectRole(event){
    event.preventDefault();
    if(event.target.style.boxShadow===""){
      event.target.style.boxShadow="0 2px 10px";
    }
    else{
      event.target.style.boxShadow="";
    }
    
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="right">
            <div className="control-box">
              <div
                onClick={showLogin}
                className={
                  "controller " + (isLogin ? "selected-controller" : "")
                }
              >
                <h4>Login</h4>
              </div>
              <div
                onClick={showReg}
                className={"controller " + (isReg ? "selected-controller" : "")}
              >
                <h4>Register</h4>
              </div>
            </div>
            <div className="card">{isLogin ? <Login /> : <Register />}</div>
          </div>
        </div>
        <div class="col-md-6">
          <div align="center" class="left">
            <img
              className="pic"
              src="https://image.freepik.com/free-vector/students-watching-recorded-lecture-with-professor-talking-from-tablet_335657-319.jpg"
              alt="online learning"
            />
          </div>
        </div>
      </div>
    </div>
  );

  function Login() {
    return (
      <div className="login">
        <form method="post">
          <h1>Login</h1>
          <div
            align="center"
            style={{ color: "rgba(146, 146, 146,0.4)", marginTop: "20px" }}
          >
            YOUR ROLE?
          </div>
          <div align="center" className="role">
            <span>
              <figure >
                <img
                  id="teacher"
                  src="https://img.icons8.com/color/48/000000/female-teacher.png"
                  alt="teacher"
                  onClick={selectRole}
                
                />
                <figcaption>Teacher</figcaption>
              </figure>
            </span>
            <span>
              <figure>
                <img
                  id="student"
                  src="https://img.icons8.com/color/48/000000/student-male--v1.png"
                  alt="student"
                  onClick={selectRole}/>
                <figcaption>Student</figcaption>
              </figure>
            </span>
          </div>

          <input
            className="form-comp"
            type="text"
            placeholder="Username"
            id="lname"
          />

          <input
            className="form-comp"
            type="password"
            placeholder="Password"
            id="lpassword"
          />

          <button className="reg_log_button" type="submit">
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

  function Register() {
    return (
      <div className="register">
        <form method="post">
          <h1>Register</h1>
          <div
            align="center"
            style={{ color: "rgba(146, 146, 146,0.4)", marginTop: "20px" }}
          >
            YOUR ROLE?
          </div>
          <div align="center" className="role">
            <span>
              <figure>
                <img
                  id="teacher"
                  src="https://img.icons8.com/color/48/000000/female-teacher.png"
                  alt="teacher"
                  onClick={selectRole}
                />
                <figcaption>Teacher</figcaption>
              </figure>
            </span>
            <span>
              <figure>
                <img
                  id="student"
                  src="https://img.icons8.com/color/48/000000/student-male--v1.png"
                  alt="student"
                  onClick={selectRole}
                />
                <figcaption>Student</figcaption>
              </figure>
            </span>
          </div>

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
}

export default RegLog;
