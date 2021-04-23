import React from 'react';

const Header = () => {
    return (
  <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      <h3>StarWarsDB</h3>
    </a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-success" href="#">
              <h4>
                Person
              </h4>
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-success" href="#">
              <h4>
                Planet
                </h4>
              </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-success" href="#">
              <h4>
                Starships
              </h4>
              </a>
          </li>
        </ul>
  </nav>
  </div>
    );
};

export default Header;