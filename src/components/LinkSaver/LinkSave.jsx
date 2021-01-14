import React, { Fragment } from "react";
import "./linksave.css";

function LinkSave() {
  const [link, setLink] = React.useState({
    linkTitle: "",
    linkUrl: ""
  });
  const [linkList, setLinkArray] = React.useState([]);

  function addHandler(event) {
    setLinkArray((prev) => {
      return [...prev, link];
    });
    setLink({
      linkTitle: " ",
      linkUrl: " "
    });
  }

  function addLink(event) {
    setLink((prev) => {
      if (event.target.name === "link") {
        return {
          linkUrl: event.target.value,
          linkTitle: prev.linkTitle
        };
      } else if (event.target.name === "linkName") {
        return {
          linkUrl: prev.linkUrl,
          linkTitle: event.target.value
        };
      }
    });
  }

  return (
    <Fragment>
      <div>Hello world!</div>

      <div class="container links">
        <div class="row">
          <div class="col-md-4">
            <div class="left">
              <div className="linksave">
                <form
                  method="post"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <b>
                    <h1
                      className="link-heading"
                      style={{
                        fontSize: 27,
                        marginBottom: 25,
                        fontWeight: 300
                      }}
                    >
                      Save Important Links
                    </h1>
                  </b>
                  <label for="link" align="left">
                    Enter link
                  </label>
                  <input
                    onChange={addLink}
                    size="33"
                    className="form-co"
                    type="text"
                    minLength="4"
                    maxLength="50"
                    placeholder="max 50 characters"
                    id="link"
                    name="link"
                    value={link.linkUrl}
                  />
                  <label for="linkName" align="left">
                    Enter link title
                  </label>
                  <input
                    onChange={addLink}
                    size="33"
                    className="form-co"
                    type="text"
                    placeholder=""
                    id="linkName"
                    name="linkName"
                    minLength="4"
                    value={link.linkTitle}
                  />

                  <button
                    onClick={addHandler}
                    className="save_button"
                    type="submit"
                  >
                    ADD LINK
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <h2
              style={{
                fontWeight: "bold",
                marginTop: "-40px",
                marginBottom: "25px"
              }}
            >
              Your Links
            </h2>
            <div className="rightLink">
              {linkList.map((linkItem, index) => (
                <div className="linkshow">
                  <i class="fas fa-link"></i>
                  <h3>
                    <a href={linkItem.linkUrl}>{linkItem.linkTitle}</a>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default LinkSave;
