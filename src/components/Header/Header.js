import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSearch } from "../../Redux/Action";
export default function Header() {
  const dispatch = useDispatch();

  const [searchTextt, setsearchTextt] = useState("");
  useEffect(() => {
    dispatch(handleSearch(searchTextt));
  }, [searchTextt]);

  const handlesearchName = (e) => {
    setsearchTextt(e.target.value);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark text-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto d-flex justify-content-around">
            {/* <li class="nav-item">ssdsd</li> */}

            {/* <li class="nav-item">
              <a>
                {" "}
                <Link to="/shop">Shop</Link>
              </a>
            </li>
            <li class="nav-item dropdown">
              <Link to="/cart">Cart </Link>
            </li>
            <li class="nav-item">
              <Link to="/cart">OTHER 2</Link>
            </li> */}
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handlesearchName(e)}
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>{" "}
    </div>
  );
}
