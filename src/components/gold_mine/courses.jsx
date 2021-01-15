import React, { useEffect } from "react";
import "./courses.css";
import { courses, intern } from "./course_list";
import Card from "./Card";
import Card2 from "./Card2";
import Grid from "@material-ui/core/Grid";
import IntCard from "./IntCard";
import { Link } from "react-router-dom";
import Header from "/src/components/Header";
import RemoveBookmark from "./RemoveBookmark";
var bookmarks = [];

function Courses() {
  var searchCourse;

  const [word, setWord] = React.useState("");
  const [bookmark, setBookmark] = React.useState([]);

  React.useEffect(() => {
    console.log(courses[4].id);
  }, []);

  function changeHandler(event) {
    searchCourse = event.target.value;
  }

  function submitSearch(event) {
    setWord(searchCourse);
    event.preventDefault();
  }
  /*
  const saveFavourites = (items) => {
   localStorage.setItem("bookmarks", JSON.stringify(items));
  };*/
  function onMark(course) {
    // const favourites = [...bookmark, course];
    setBookmark((prev) => {
      return [...prev, course];
    });
    console.log(bookmark);
    // saveFavourites(favourites);
  }

  /*
  React.useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("bookmarks"));
    onMark(favourites);
  }, []);*/

  return (
    <div className="gold-mine">
      <Header />
      <h1 align="center" className="heading">
        A treasure trove of free resources and more!
      </h1>
      <div section="top">
        <div className="top">
          <div className="bookmark"></div>
          <div className="wrap">
            <div className="search">
              <input
                onChange={changeHandler}
                type="text"
                className="searchTerm"
                placeholder="What are you looking for?"
              />
              <button
                onClick={submitSearch}
                type="submit"
                className="searchButton"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="courses" style={{ padding: 20 }}>
        <h1 align="center" className="head">
          Courses
        </h1>
        <div className="container">
          <div className="row">
            {word === ""
              ? courses.map((n, index) => (
                  <div className="col-md-4">
                    <Card
                      onMark={onMark}
                      key={index}
                      image={n.image}
                      title={n.title}
                      keywords={n.keywords}
                      desc={n.desc}
                      weblink={n.weblink}
                    />
                  </div>
                ))
              : courses
                  .filter((course) =>
                    course.keywords.includes(word.toLowerCase())
                  )
                  .map((n, index) => (
                    <div className="col-md-4">
                      <Card
                        onMark={onMark}
                        key={index}
                        image={n.image}
                        title={n.title}
                        keywords={n.keywords}
                        desc={n.desc}
                        weblink={n.weblink}
                      />{" "}
                    </div>
                  ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="intern">
          <h1 align="center" className="head">
            Internships
          </h1>
          <div className="internships" style={{ padding: 20 }}>
            <Grid container spacing={5}>
              <Grid container item xs={12} spacing={6}>
                {intern.map((n, index) => (
                  <div className="col-md-3">
                    <IntCard
                      onMark={onMark}
                      key={index}
                      title={n.title}
                      role={n.role}
                      desc={n.desc}
                      weblink={n.weblink}
                    />
                  </div>
                ))}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <a id="back-to-top" href="#top" class="light back-to-top" role="button">
        <i class="fas fa-chevron-up"></i>
      </a>
      <a id="book" href="#bookmarks" class="light bookm" role="button">
        <i class="fas fa-bookmark"></i>
      </a>

      <div id="bookmarks">
        <h1 className="head">Bookmarks</h1>
      </div>
      <div className="row d-flex align-items-center mt-2 mb-2">
        <div className="row">
          {bookmark.map((n, index) => (
            <div className="image-container d-flex col-md-3">
              <Card2
                image={n.image}
                title={n.title}
                keywords={n.keywords}
                desc={n.desc}
                weblink={n.weblink}
              />
            </div>
          ))}
        </div>
      </div>
      {/*
          <GridList cols={3}>
            {courses.map((n) => {
              return (
                <GridListTile key={n}>
                  <Card
                    id={n}
                    image={n.image}
                    title={n.title}
                    keywords={n.keywords}
                    desc={n.desc}
                    webline={n.weblink}
                  />
                </GridListTile>
              );
            })}
          </GridList>
        
        <Grid container spacing={10} my={8}>
            <Grid container item xs={12} spacing={4} m={3}>*/}
    </div>
  );
}

export { Courses, bookmarks };
