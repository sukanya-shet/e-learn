import React from "react";
import "./courses.css";

function Card(props) {
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
        <div className="down">
          <a href={props.weblink}>Go to page</a>
          <i
            onClick={() => {
              updateMark();
            }}
            style={{ color: isMarked ? "#F7A801" : "" }}
            className="fas fa-bookmark"
            id="mark"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
