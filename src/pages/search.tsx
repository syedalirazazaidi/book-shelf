import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAll, search ,get} from "../data/BookApi";
function Search() {
  const [query, setSearchMy] = React.useState<string>("");
  const [searchInput, setSearchInput] = React.useState();
  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMy(e.currentTarget.value);
  };

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await getAll()
      .then((res) => {
        console.log(res,"RESP");
        // setState('success');
        // setCatUrl('https://cataas.com' + res.data.url);
    })
    .catch((err) => {
        // console.error('Error:', err);
        // setState('error');
        // setError(err);
    });
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [])
  // const myinput: any = search(searchMy);
 
  return (
    <form role="search">
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <Link to="/">
          {" "}
          <button style={{ padding: "10px" }}>Back</button>
        </Link>
        <input
          type="search"
          id="mySearch"
          name="q"
          value={query}
          onChange={(e) => onChangeHandler(e)}
          placeholder="Search the book…"
          aria-label="Search through site content"
          style={{ width: "1200px", padding: "10px" }}
        />
        <button style={{ padding: "10px" }}>Search</button>
      </div>
    </form>
  );
}

export default Search;
