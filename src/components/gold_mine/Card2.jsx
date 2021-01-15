import React from "react";
import "./courses.css";

function Card2(props) {
  const [isMarked, setMarked] = React.useState(false);

  function updateMark() {
    setMarked(!isMarked);
    if (!isMarked) {
      props.onMark(props);
    }
  }

  return (
    <div className="course-card">
      <img className="course_img" src={props.image} alt="course1" />
      <div className="contents">
        <h6 align="" className="genre">
          {props.keywords}
        </h6>
        <div className="title">{props.title}</div>
        <div className="descrip">{props.desc}</div>
        <div className="course-down">
          <a href={props.weblink}>Go to page</a>
        </div>
      </div>
    </div>
  );
}

export default Card2;
