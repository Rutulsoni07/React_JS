import React from "react";
import { Link } from "react-router-dom";
export default function BootstrapNavbar() {
  return (
    <div>/
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            <Link to="/BSHome">Home</Link>
          </a>
          <a className="navbar-brand">
            <Link to="/BootstrapAboutUs">About Us</Link>
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
