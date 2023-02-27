import React from "react";
import { Link } from "react-router-dom";

import { search } from "../data/BookApi";
function Banner() {
  const newData=search("harry")
  console.log(newData,":::")
   return (
    <div>
      <div style={{ backgroundColor: "teal", padding: "3px" }}>
        <h1>My Reads</h1>
      </div>
      <div style={{ margin: "30px" }}>
        <h4 style={{ textAlign: "left" }}>Currently Reading</h4>
        <hr style={{ marginLeft: 0 }} />
        <h4 style={{ textAlign: "left" }}>Want To Read</h4>
        <hr style={{ marginLeft: 0 }} />
        <h4 style={{ textAlign: "left" }}>Read Done</h4>
        <hr style={{ marginLeft: 0 }} />
      </div>
      <div>
        <Link
          style={{
            display: "inlineBlock",
            padding: "1em 4em",
            margin: "0 0.2em 0.2em 0",
            borderRadius: "0.12em",
            boxSizing: "border-box",
            textDecoration: "none",
            cursor: "pointer",
            border: "none",
            color: "grey.700",
            backgroundColor: "teal",
          }}
          to="/search"
        >
          Search Book
        </Link>
      </div>
    </div>
  );
}

export default Banner;
