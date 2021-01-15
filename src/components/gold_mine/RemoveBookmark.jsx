function RemoveBookmark(props) {
  return (
    <i
      onClick={() => {
        props.removeMark();
      }}
      style={{ color: "yellow" }}
      className="fas fa-bookmark"
      id="mark"
    ></i>
  );
}

export default RemoveBookmark;
