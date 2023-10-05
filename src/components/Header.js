import React, { Component } from "react";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="!#">
              Start Bootstrap
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="!#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="!#">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="!#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="!#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="!#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="!#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <button class="btn btn-outline-dark" id="btnDark" type="submit">
                  <i class="bi bi-cart-fill"></i>
                  Cart
                  <a href="!#" id="zero">
                    0
                  </a>
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div className="box">
          <h1>Shop in style</h1>
          <p>With this shop hompeage template</p>
        </div>
      </div>
    );
  }
}

export default Header;
