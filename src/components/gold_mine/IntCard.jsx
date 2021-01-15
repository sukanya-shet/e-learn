import React from "react";
import "./courses.css";

function IntCard(props) {
  return (
    <div className="int-card">
      <img
        src="https://careerxone.com/wp-content/uploads/2018/10/kariyervestaj_1440_en.jpg"
        sytle={{ width: "20px" }}
        alt="course1"
      />
      <div className="contents">
        <div className="title">{props.title}</div>
        <div className="role">
          <b>Role:</b> {props.role}
        </div>
        <div className="desc">
          <b>Description: </b>
          {props.desc}
        </div>
        <a href={props.weblink}>Go to link</a>
      </div>
    </div>
  );
}

export default IntCard;
