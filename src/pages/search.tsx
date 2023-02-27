import React from "react";
import { Link } from "react-router-dom";
import { CLIENT_RENEG_LIMIT } from "tls";
import { search } from "../data/BookApi";
function Search() {
    const [searchMy, setSearchMy] = React.useState<string>('')
    const [searchInput,setSearchInput]=React.useState()
    const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchMy(e.currentTarget.value)
    };
    console.log(searchMy,"{{{{{}}}}}")
   const myinput=search(searchMy)
  console.log(myinput,"????")

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
                    value={searchMy}
                    onChange={e => onChangeHandler(e)}
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
