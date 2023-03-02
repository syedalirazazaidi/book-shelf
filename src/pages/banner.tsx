import React from "react";
import { Link } from "react-router-dom";
import { CLIENT_RENEG_LIMIT } from "tls";

import { getAll, search } from "../data/BookApi";
function Banner() {
  const [allData, setAllData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getAll()
        .then((res) => {
          setAllData(res);
        })
        .catch((err) => {
          console.log(err, "err");
        });
    };

    fetchData().catch(console.error);
  }, []);
 const currentlyreading= allData.filter((fil:any)=>fil.shelf==='currentlyReading')
 const wantreading= allData.filter((fil:any)=>fil.shelf==='wantToRead')
 const read= allData.filter((fil:any)=>fil.shelf==='read')

  return (
    <div>
      <div style={{ backgroundColor: "teal", padding: "3px" }}>
        <h1>My Reads</h1>
      </div>
      <div style={{ margin: "30px" }}>
        <h4 style={{ textAlign: "left" }}>Currently Reading</h4>
        <p style={{display:'flex',justifyContent:'center',gap:'40px' ,}}>
          {currentlyreading.map((dat:any)=>{
            return(
              <div >
              <p>{dat.title}</p>
              <img src={dat.imageLinks.smallThumbnail}/>
              </div>
            )
          })}
        </p>
        <hr style={{ marginLeft: 0 }} />
        <h4 style={{ textAlign: "left" }}>Want To Read</h4>
        <p style={{display:'flex',justifyContent:'center',gap:'40px' ,}}>
          {wantreading.map((dat:any)=>{
            return(
              <div >
              <p>{dat.title}</p>
              <img src={dat.imageLinks.smallThumbnail}/>
              </div>
            )
          })}
        </p>
        <hr style={{ marginLeft: 0 }} />
        <h4 style={{ textAlign: "left" }}>Read Done</h4>
        <p style={{display:'flex',justifyContent:'center',gap:'40px' ,}}>
          {read.map((dat:any)=>{
            return(
              <div >
              <p>{dat.title}</p>
              <img src={dat.imageLinks.smallThumbnail}/>
              </div>
            )
          })}
        </p>
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
